import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { About, Cocktail, Error, HomeLayout, Newsletter, Landing } from './pages';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'cocktail',
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {

            element: <h2> Our company </h2>
          },
          {
            path: 'person',
            element: <h2> John Doe </h2>
          }
        ]
      },
    ],
  },
]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
