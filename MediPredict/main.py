import yaml
from joblib import dump, load
import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.tree import DecisionTreeClassifier
import seaborn as sn
import matplotlib.pyplot as plt


class DiseasePrediction:
    def __init__(self):

        with open('../MediPredict/config.yaml', 'r') as f:
            self.config = yaml.safe_load(f)
        self.verbose = self.config['verbose']
        self.train_features, self.train_labels, self.train_df = self._load_train_dataset()
        self.model_save_path = self.config['model_save_path']
        self.clf = DecisionTreeClassifier(
            criterion=self.config['model']['decision_tree']['criterion'])

    def _load_train_dataset(self):
        df_train = pd.read_csv(self.config['dataset']['training_data_path'])
        cols = df_train.columns
        cols = cols[:-2]
        train_features = df_train[cols]
        train_labels = df_train['prognosis']
        return train_features, train_labels, df_train

    def train_model(self):
        X_train, y_train = self.train_features, self.train_labels
        classifier = self.clf
        classifier = classifier.fit(X_train, y_train)
        dump(classifier, str(self.model_save_path + "decision_tree.joblib"))

    def make_prediction(self, test_data=None):
        clf = load(str(self.model_save_path + "decision_tree.joblib"))
        result = clf.predict(test_data)
        return result


if __name__ == "__main__":
    import sys

    dp = DiseasePrediction()
    # dp.train_model()
    test_data = sys.argv[1:]
    df_test = pd.read_csv("../MediPredict/dataset/my_test.csv")
    cols = df_test.columns
    cols = cols[:-1]
    row = []
    for col in cols:
        if col in test_data:
            row.append(1)
        else:
            row.append(0)
    row.append(0)
    df_test.loc[len(df_test)] = row
    test_features = df_test[cols]
    result = dp.make_prediction(test_data=test_features)
    print(result[0])
