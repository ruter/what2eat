<template>
  <div>
    <div class="eat-center">
      <img class="eat-logo" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTZFNkU2OyIgZD0iTTMyMS4xNzIsNTEySDE4Mi41MDdjLTcuNjE5LDAtMTQuMDY3LTUuNjE1LTE1LjExNy0xMy4xNjRsLTQxLjU1OS0yOTkuMjQySDM4Ni4xN2wtNDkuOTUsMjk5LjY1OSAgIEMzMzQuOTk2LDUwNi42MTEsMzI4LjYzNSw1MTIsMzIxLjE3Miw1MTIiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGODVCNTc7IiBwb2ludHM9IjM0OC41NjIsNDI1LjIyIDM3Ny40ODUsMjUxLjY2MSAxMzMuMDYyLDI1MS42NjEgMTU3LjE2MSw0MjUuMjIgICIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0QyRDVENzsiIGQ9Ik0zODcuMzc2LDE5OS41OTNoLTI2Mi43NmMtOC45MTIsMC0xNi4xNDEtNy4yMjktMTYuMTQxLTE2LjE1di0yLjQxMiAgIGMwLTguOTIxLDcuMjI5LTE2LjE1LDE2LjE0MS0xNi4xNWgyNjIuNzZjOC45MjEsMCwxNi4xNSw3LjIyOSwxNi4xNSwxNi4xNXYyLjQxMkM0MDMuNTI1LDE5Mi4zNjQsMzk2LjI5NywxOTkuNTkzLDM4Ny4zNzYsMTk5LjU5MyAgICIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZBRjZFNTsiIGQ9Ik0zNjguODc5LDE2NC44ODFjLTE3LjgyNS00NC45NDMtNjEuNTk2LTc2Ljc2NS0xMTIuODgzLTc2Ljc2NXMtOTUuMDU4LDMxLjgyMi0xMTIuODgzLDc2Ljc2NSAgIEgzNjguODc5eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzNEQUJFRjsiIGQ9Ik0zMTYuNzU1LDExMi44MThjLTAuNDA4LDAtMC44MjQtMC4wMjYtMS4yNDEtMC4wODdjLTQuNzM4LTAuNjc3LTguMDM2LTUuMDc3LTcuMzU5LTkuODIzICAgbDguNjc4LTYwLjc0NmMwLjM4Mi0yLjY0NywxLjk2MS00Ljk3Miw0LjI4Ny02LjNMMzgxLjg2NiwxLjE1YzQuMTQ4LTIuMzg2LDkuNDU5LTAuOTM3LDExLjgzNywzLjIyOCAgIGMyLjM4Niw0LjE1NywwLjkzNyw5LjQ1OS0zLjIyOCwxMS44MzdsLTU3LjA1OCwzMi42MDNsLTguMDc5LDU2LjU1NEMzMjQuNzIyLDEwOS42OTQsMzIxLjAwOCwxMTIuODE4LDMxNi43NTUsMTEyLjgxOCIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5REE0OTsiIGQ9Ik0zMDguMDY1LDMzOC42OGMwLTI4Ljc1OS0yMy4zMDktNTIuMDY4LTUyLjA2OC01Mi4wNjhzLTUyLjA2OCwyMy4zMDktNTIuMDY4LDUyLjA2OCAgIGMwLDI4Ljc1OSwyMy4zMDksNTIuMDY4LDUyLjA2OCw1Mi4wNjhTMzA4LjA2NSwzNjcuNDM5LDMwOC4wNjUsMzM4LjY4Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="/>
    </div>

    <divider>打赏作者一杯饮料</divider>

    <div class="eat-center">
      <img class="eat-donate" src="../assets/donate.jpg" alt="赏一杯"/>
      <p class="eat-thanks">感谢您的捐赠，「吃什么」将持续为您解决烦恼。</p>
    </div>
  </div>
</template>

<script>
import { Divider } from 'vux';

export default {
  components: {
    Divider,
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
    };
  },
};
</script>

<style scoped>
  .eat-donate {
    width: 100%;
  }
  .eat-thanks {
    color: #999;
    font-size: 12px;
  }
</style>
