import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import MediPedia from './MediPedia/MediPedia';
import MediPredict from './MediPredict/MediPredict';
import MediCure from './MediCure/MediCure'
import MediAppoint from './MediAppoint/DoctorDetails';
import Home from './HomeComponent';
import DiseasesInfo from './MediPedia/DiseasesInfo';
import CureInfo from './MediCure/CureInfo';
import TimeSlotBooking from './MediAppoint/TimeSlotBooking';
import DrawerContainer from './DrawerContainer';
import Logout from './Auth/Logout';
import Profile from '../screens/ProfilePage';
import Login from './Auth/Login';
import Register from './Auth/Register';
import MediStore from './MediStore/MediStore';
import MedicineLogger from './MediStore/MedicineLogger';
import DocumentsLogger from './MediStore/DocumentsLogger';
import CheckAppointments from '../screens/CheckAppointments';



const MainNavigator = createStackNavigator(
    {
        Home: Home,
        MediPedia: MediPedia,
        MediCure: MediCure,
        MediPredict: MediPredict,
        MediAppoint: MediAppoint,
        DiseasesInfo: DiseasesInfo,
        CureInfo: CureInfo,
        TimeSlotBooking: TimeSlotBooking,
        Profile: Profile,
        Logout: Logout,
        Login: Login,
        Register: Register,
        MediStore: MediStore,
        MedicineLogger: MedicineLogger,
        DocumentsLogger: DocumentsLogger,
        CheckAppointments: CheckAppointments
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
                fontSize: 25,
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#954535"
            }
        })
    }
);



const DrawerStack = createDrawerNavigator(
    {
        Main: MainNavigator
    },
    {
        drawerPosition: 'left',
        initialRouteName: 'Main',
        drawerWidth: 250,
        contentComponent: DrawerContainer
    }
);




const AppContainer = createAppContainer(DrawerStack);
export default AppContainer;
console.disableYellowBox = true;