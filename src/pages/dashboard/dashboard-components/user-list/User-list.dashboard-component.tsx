import React, { useCallback, useEffect } from "react";
import { AnimatePulseUserListComponent } from "./user-list.components";
import { useAppDispatch, useAppSelector } from "../../../../services/redux/hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchUser } from "../../../../services/redux/features/user/userSlice";

const UserListDashboardComponent: React.FunctionComponent = () => {

    /**
     * global state
     */
    const userList = useAppSelector((state) => state.user.userList);
    const dispatch = useAppDispatch();

    /**
     * fetch data
     */
    const nextFetchData = useCallback(() => {
        const payload = {
            page : userList.page
        };
        dispatch(fetchUser(payload));
    }, [dispatch]);

    /**
     * react side effect
     */
    useEffect(() => {
        nextFetchData();
    },[nextFetchData])

    return (<>

        <InfiniteScroll
            dataLength={userList.data.length}
            next={nextFetchData}
            hasMore={true}
            loader={<AnimatePulseUserListComponent />}
        >
            {
                userList.data.map((user, index) => {
                    return (
                        <div key={index}
                            className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] m-10 ">
                            <h5
                                className="mb-4 text-xl font-medium leading-tight text-neutral-80">
                                {user.first_name} {user.last_name}
                            </h5>
                            <div className="flex space-x-6">
                                <img
                                    className="h-20 w-20 rounded-full"
                                    src={user.avatar}
                                    alt={user.first_name} />
                                <div className="flex-1">
                                    <div>{user.email}</div>
                                    <div>{user.first_name} {user.last_name}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </InfiniteScroll>
    </>);
};

export default UserListDashboardComponent;