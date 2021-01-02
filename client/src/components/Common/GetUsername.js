import { useState, useEffect } from "react";
import { service_endpoints } from "../../config/content.json";

export function GetUsername({ userId }) {
  const [isFetching, setIsFetching] = useState(false);
  const [isUserFetched, setIsUserFetched] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (!isFetching) {
      if (userId && !isUserFetched) {
        setIsFetching(true);
        fetch(`${service_endpoints.user.get_by_id}/${userId}`)
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
            throw new Error(`${resp.status} User id does not exist.`);
          })
          .then((res) => {
            setUsername(res.user.username);
            setIsFetching(false);
            setIsUserFetched(true);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }, [userId, isFetching, isUserFetched]);
  return username;
}

export function useGetUserByUserId(userId) {
  const [isFetching, setIsFetching] = useState(false);
  const [isUserFetched, setIsUserFetched] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (!isFetching) {
      console.log(userId);
      if (userId && !isUserFetched) {
        setIsFetching(true);
        fetch(`${service_endpoints.user.get_by_id}/${userId}`)
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
            throw new Error(`${resp.status} User id does not exist.`);
          })
          .then((res) => {
            setUser(res.user);
            setIsFetching(false);
            setIsUserFetched(true);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }, [userId, isFetching, isUserFetched]);
  return { user };
}

export function useGetUserById() {
  const [userIdToGet, setUserIdToGet] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isUserFetched, setIsUserFetched] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (!isFetching) {
      if (userIdToGet && !isUserFetched) {
        setIsFetching(true);
        fetch(`${service_endpoints.user.get_by_id}/${userIdToGet}`)
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
            throw new Error(`${resp.status} User id does not exist.`);
          })
          .then((res) => {
            setUser(res.user);
            setIsFetching(false);
            setIsUserFetched(true);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }, [userIdToGet, isFetching, isUserFetched]);
  return { user, setUserIdToGet };
}
