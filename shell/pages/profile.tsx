import React from "react";
import Head from "next/head";
import { MountMicroFrontend } from "../components/MountMicroFrontend";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile page</title>
      </Head>
      <MountMicroFrontend
        url="http://localhost:8888/remoteEntry.js"
        name="profile"
      />
    </>
  );
};

export default Profile;
