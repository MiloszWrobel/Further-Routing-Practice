import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
function ErrorPage() {
  const error = useRouteError();
  let title = "An Error occured!";
  let message = "Something went wrong...";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Path not found!";
    message = "Could not find resource or page!";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p> {message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;
