import {
  CrownFilled,
} from '@ant-design/icons';
const defaultProps = 

{
  route: {
    path: '/',
    routes: [
      {
        name: <></>, //this empty part is important as without it in mobile it wont render
        // icon: "",
        path: '/',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: 'Dashboard',
            icon: <CrownFilled />,
            routes: [
              {
                path: '/dashboard',
                name: 'Fluxos',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: '/dashboard1',
                name: 'Organograma',
                icon: <CrownFilled />,
                component: './Welcome',
              }
            ],
          },
          {
            path: '/instancias',
            name: 'Instancias',
            icon: <CrownFilled />,
            component: './Welcome',
          }
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
  appList: [
    {
      icon: 'https://login-hmg.abablockchain.io/images/favicon.ico',
      title: 'ABABlockchain',
      desc: 'Plataforma',
      url: 'https://antv.vision/',
      target: '_blank',
    },
  ],
};
 export default defaultProps
