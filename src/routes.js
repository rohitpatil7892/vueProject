import HomePage from './components/HomePage';
import SingUp from './components/SignUp';
import LoginPage from './components/Login';
import AddRestro from './components/Add';
import UpdateRestro from './components/Update';

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        name: 'Home',
        component: HomePage,
        path: '/',
    },
    {
        name: 'SingUp',
        component: SingUp,
        path: '/sing-up',
    },
    {
        name: 'Login',
        component: LoginPage,
        path: '/login',
    },
    {
        name: 'AddRestro',
        component: AddRestro,
        path: '/add-restro',
    },
    {
        name: 'UpdateRestro',
        component: UpdateRestro,
        path: '/update-restro/:id',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes

})

export default router