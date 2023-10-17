import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { About, Cocktail, Error, HomeLayout, Newsletter, Landing, SinglePageError } from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
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
