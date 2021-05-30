<template>
  <article>
    <h3>User Info</h3>
    <ul>
      <li>name: {{ name || "No Name" }}</li>
      <li>email: {{ email || "No Email" }}</li>
      <li>phone: {{ phone || "No Phone" }}</li>
    </ul>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "@vue/composition-api";
import { PickedUserInfo } from "../types";

export default defineComponent({
  name: "UserInfo",
  props: {
    userInfo: {
      type: Object as PropType<PickedUserInfo>,
      default: () => {
        return {
          email: "",
          name: "",
          phone: "",
        };
      },
    },
  },

  setup(props) {
    // setup 내부에서 props에 접근하는 일반적인 방법
    // console.log(props.userInfo);

    // props에 destructuring 문법을 사용하려면 toRefs를 사용해야 한다.
    // const { userInfo } = toRefs(props);

    // toRefs로 destructuring한 결과는 ref이므로 그 안의 값들은 userInfo.value로 접근해야 한다.
    // console.log(userInfo);
    // console.log(userInfo.value);

    // 아래와 같이 작성하면 컴포넌트의 data 인스턴스에서 email, name, phone으로 바로 접근 가능하다.
    // toRefs를 사용하여 ref로 변환하는 방식이다.
    return {
      ...toRefs(props.userInfo),
    };
  },
});
</script>
