import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PictureList } from "./picture/PictureList";
import { PictureCreate } from "./picture/PictureCreate";
import { PictureEdit } from "./picture/PictureEdit";
import { PictureShow } from "./picture/PictureShow";
import { NoteList } from "./note/NoteList";
import { NoteCreate } from "./note/NoteCreate";
import { NoteEdit } from "./note/NoteEdit";
import { NoteShow } from "./note/NoteShow";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ContentSharingPlatform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Picture"
          list={PictureList}
          edit={PictureEdit}
          create={PictureCreate}
          show={PictureShow}
        />
        <Resource
          name="Note"
          list={NoteList}
          edit={NoteEdit}
          create={NoteCreate}
          show={NoteShow}
        />
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
