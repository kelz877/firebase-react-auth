import React from 'react'
import Dashboard from '../dashboard/Dashboard'

const ProtectedRoutes = [
    {
        name: 'dashboard',
        exact: true,
        path: '/dashboard',
        main: props => <Dashboard {...props} />,
        public: false,
    },
]

export default ProtectedRoutes