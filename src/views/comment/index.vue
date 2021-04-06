<template>
  <div class="app-container" style="height: 100%">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 15px; background-color: #ccc;">
      <el-container style="height: 100%">
        <el-header style="height: 180px; font-size: 14px">
          <div>
            <span style="display: inline-block; margin-right:20px">营业日：</span>
            <el-date-picker v-model="value1" type="daterange" size="mini" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
          </div>
          <div>
            <span style="display: inline-block; margin-right:20px">满意程度：</span>
            <el-radio-group v-model="radio4" size="mini">
              <el-radio label="1" border size="mini">全部</el-radio>
              <el-radio label="2" border>好评</el-radio>
              <el-radio label="3" border>中评</el-radio>
              <el-radio label="4" border>差评</el-radio>
            </el-radio-group>
          </div>
          <div>
            <span style="display: inline-block; margin-right:20px">商家回复：</span>
            <el-radio-group v-model="radio4" size="mini">
              <el-radio label="1" border>全部</el-radio>
              <el-radio label="2" border>已回复</el-radio>
              <el-radio label="3" border>未回复</el-radio>
            </el-radio-group>
          </div>
        </el-header>
        <el-main>
          <el-card shadow="never">
            <div class="header">
              <div style="flex: 1">订单号：1873612873162873618237618273</div>
              <div>2020-2-33 11:11:11</div>
            </div>
            <div class="content">
              <div class="score">
                <span style="margin-right: 15px">评分</span>
                <i class="el-icon-star-off star"></i>
              </div>
              <div style="display: flex; flex-wrap: wrap; width: 180px">
                <div style="flex: 1">
                  房型<span class="room_type">单人房</span>
                </div>
                <div>
                  姓名<span class="name">周星驰</span>
                </div>
              </div>
              <div>
                评价<span class="comment">暂无评价</span>
              </div>
            </div>
            <a class="reply">
              <i class="el-icon-edit" style="padding-right: 8px"></i>
              回复
            </a>
          </el-card>
          <el-card shadow="never">
            <div class="header">
              <div style="flex: 1">订单号：1873612873162873618237618273</div>
              <div>2020-2-33 11:11:11</div>
            </div>
            <div class="content">
              <div class="score">
                <span style="margin-right: 15px">评分</span>
                <i class="el-icon-star-off star"></i>
                <i class="el-icon-star-off star"></i>
                <i class="el-icon-star-off star"></i>
                <i class="el-icon-star-off star"></i>
                <i class="el-icon-star-off star"></i>
              </div>
              <div style="display: flex; flex-wrap: wrap; width: 180px">
                <div style="flex: 1">
                  房型<span class="room_type">单人房</span>
                </div>
                <div>
                  姓名<span class="name">周星驰</span>
                </div>
              </div>
              <div>
                评价<span class="comment">暂无评价</span>
              </div>
            </div>
            <div class="shop_reply">
              <div style="flex: 1;">商家回复： <span style="color: #000">非常感谢您的建议！！希望下次光临~~</span>
              </div>
              <div>
                <el-button type="primary" size="mini">编辑</el-button>
              </div>
            </div>
          </el-card>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Comment',
  data() {
    return {
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radio4: '1',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: '',
      value2: ''
    }
  },

}
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
    margin-bottom: 10px;
  }

  .el-main {
    background-color: rgb(255, 255, 255);
    height: 100%;
  }

  .el-card {
    color: rgb(120, 120, 120);
    font-size: 12px;
    margin-bottom: 8px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .content {
    padding-left: 30px;
  }

  .content > div {
    margin-bottom: 10px;
  }

  .room_type,
  .name,
  .comment {
    padding-left: 15px;
    color: #000;
    font-size: 12px;
    display: inline-block;
  }

  .reply {
    margin-left: 68px;
    color: rgb(110, 179, 255);
    line-height: 15px;
  }

  .reply:hover {
    color: #f3341a;
  }

  .shop_reply {
    background-color: rgb(238, 243, 248);
    height: 38px;
    line-height: 38px;
    margin-left: 68px;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .star {
    font-size: 20px;
    color: rgb(254, 226, 95);
    margin-right: 5px;
  }
</style>
