<template>
  <div class="rank-item">
    <section class="member-info">
      <section class="index ellipsis">
        {{ index }}
      </section>
      <section class="user">
        <img :src="rankItem.user.avatarUrl" alt="头像" class="avatar">
        <section class="info">
          <div class="info-inner">
            <p class="name ellipsis">
              {{ rankItem.user.nickName }}
            </p>
            <p class="time">
              <formattime :time="rankItem.updateTime">
              </formattime>
            </p>
          </div>
        </section>
      </section>
    </section>
    <section class="battery-info">
      <section class="icon">
        <img src="../assets/images/full.svg" alt="battery-icon" class="battery" v-if="batteryStatus === 'full'">
        <img src="../assets/images/notmuch.svg" alt="不多" class="battery" v-if="batteryStatus === 'notmuch'">
        <img src="../assets/images/runout.svg" alt="即将用尽" class="battery" v-if="batteryStatus === 'runout'">
        <img src="http://ojrbqzf6q.qnssl.com/FkUmomdxvOw9uOampoVGX08Dgh5-.png" alt="充电中" class="is-charging" v-if="isCharging">
      </section>
      <span class="text">
        {{ rankItem.batteryLevel }}%
      </span>
    </section>
  </div>
</template>
<script>
import formattime from '@/components/format_time'
export default {
  props: ['index', 'rankItem'],
  computed: {
    batteryStatus () {
      const level = this.rankItem.batteryLevel
      if (level >= 0 && level < 20) {
        return 'runout'
      } else if (level >= 20 && level < 70) {
        return 'notmuch'
      } else {
        return 'full'
      }
    },
    isCharging () {
      return this.rankItem.isCharging
    }
  },
  components: {
    formattime
  }
}
</script>
<style lang="scss" scoped>
  .rank-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-left: 10px;
    background-color: #fff;
    box-sizing: border-box;
    .member-info{
      display: flex;
      align-items: center;
      .index{
        font-weight: bold;
        font-size: 20px;
        width: 40px;
        text-align: center;
      }
      .user{
        display: flex;
        margin-left: 17px;
        .avatar{
          width: 40px;
          height: 40px;
          border-radius: 3px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
          margin-right: 17px;
        }
        .info{
          text-align: left;
          display: flex;
          align-items: center;
          .name{
            font-size: 15px;
            margin-bottom: 5px;
            width: 100px;
          }
          .time{
            font-size: 10px;
            opacity: 0.5;
          }
        }
      }
    }
    .battery-info{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 60px;
      .icon{
        position: relative;
        margin-right: 8px;
        display: flex;
        align-items: center;
        .battery{
          width: 26px;
          height: 14px;;
        }
        .is-charging{
          position: absolute;
          width: 4px;
          height: 7px;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .text{
        font-size: 10px;
      }
    }
  }
</style>
