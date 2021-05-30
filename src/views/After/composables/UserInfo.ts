import axios, { AxiosResponse } from "axios";
import { reactive } from "@vue/composition-api";
import { UseUserInfo, UserInfo, PickedUserInfo } from "../types";
import { NoParamsFunction } from "@/types";

const useUserInfo: NoParamsFunction<UseUserInfo> = () => {
  // [ref vs reactive]
  // 원시적인 데이터를 관리할 때 ref가 적합하고 객체 형태의 데이터를 관리할 때 reactive가 적합하다고 한다.
  // 또한 ref의 값을 접근하기 위해서는 .value로 한 번 더 타고 들어가야 한다.
  // 그리고 ref로 정의한 데이터의 타입은 Ref<T> 이고,
  // reactive로 정의한 데이터 타입은 기본적으로 object type이므로 제네릭으로 따로 정의한 타입을 넘겨주는 방식도 좋다.
  const userInfo = reactive<PickedUserInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const fetchUserInfo = async () => {
    try {
      const { data }: AxiosResponse<UserInfo> = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      const { name, email, phone } = data;

      userInfo.name = name;
      userInfo.email = email;
      userInfo.phone = phone;
    } catch (error) {
      console.warn(error);
    }
  };
  return {
    userInfo,
    fetchUserInfo,
  };
};

export default useUserInfo;
