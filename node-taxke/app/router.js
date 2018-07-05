'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const apiTags = {
  jsapi:{
    url:'/sdk/jsapi',
    method:'POST'
  },
  // user接口
  login: {
    // url: '/index/login'
    url: '/oauth/wx',
    method: 'POST'
  },
  // 当前用户信息（默认专家）
  current: {
    url: '/user/current',
    method: 'POST',
    default: {
      expert: 1
    }
  },
  // 查看是否关注平台
  isUser: {
    url: '/sdk/wx_user/current'
  },
  // 提问总数
  askCount: {
    url: '/user/ask_count'
  },
  // 需要回答的总数
  needAnswerCount: {
    url: '/expert/require_answer_count'
  },
  // 专家总收入
  incomeAccount: {
    url: '/expert/account'
  },

  // 申请成为专家
  regProfessor: {
    url: '/user/req_expert',
    method: 'POST'
  },
  buyServiceList: {
    url: '/user/expert_service_list'
  },
  // 更新头像
  setAvator: {
    url: '/user/update_header_img'
  },
  followList: {
    url: '/user/follow_expert_list'
  },
  // 获取指定用户信息
  user: {
    url: '/user/:id'
  },
  // 获取指定专家信息
  professor: {
    url: '/user/:id',
    method: 'POST',
    defaultDate: {
      expert: 1
    }
  },
  // 指定专家回答列表
  answerList: {
    url: '/expert/answer_list/:id',
    method: 'POST'
  },

  // 我的问题
  myQuestion: {
    url: '/question/my_question',
    method: 'POST'
  },
  myCollect: {
    url: '/question/collect_list',
    method: 'POST'
  },
  // 是否关注专家
  followState: {
    url: '/user/follow_with/:id'
  },
  follow: {
    url: '/user/follow_expert/:id',
    method: 'POST'
  },

  // 平台vip信息
  isVip: {
    url: '/platform/service/:id'
  },
  // 平台vip卡信息
  vipCard: {
    url: '/platform/service/cards'
  },
  // 购买平台vip
  platformVip: {
    url: '/platform/service/buy',
    method: 'POST'
  },
  // 兑换平台服务卡
  exchangeVip: {
    url: '/sdk/question/exchange_ticket/:ticket'
  },
  // 查询指向专家vip开通情况
  professorVip: {
    url: '/user/at_service/:id'
  },
  // 专家设置昵称
  setName: {
    url: '/user/update/current/name',
    method: 'POST'
  },
  // 专家设置信息
  setInfo: {
    url: '/expert/update/current',
    method: 'POST'
  },
  // 专家接单开关
  ordSwitch: {
    url: '/sdk/question/set_dis_question/:state'
  },
  // 专家接单状态
  ifOrdOpen: {
    url: '/sdk/question/dis_question_state'
  },
  // 专家服务卡状态
  professorService: {
    url: '/expert_service/card/state',
    method: 'POST'
  },
  // 设置服务卡
  setService: {
    url: '/expert_service/card/setting',
    method: 'POST'
  },
  // 购买专家服务卡
  buyService: {
    url: '/expert_service/card/buy',
    method: 'POST'
  },
  // 打赏专家
  admire: {
    url: '/gratuity/gratuity_callBack',
    method: 'POST'
  },
  // 专家打赏列表
  admireList: {
    url: '/gratuity/list',
    method: 'POST'
  },
  // 首页
  // 精选问题
  indexQuestion: {
    url: '/question/fast',
    method: 'POST',
    defaultDate: {
      pageSize: 3
    }
  },
  // // 精选问题列表
  // indexQuestionList: {},
  // 精选专家
  indexProfessor: {
    url: '/expert/random_list/3'
  },
  // 全部专家
  indexProfessorList: {
    url: '/expert/list',
    method: 'POST'
  },
  // 搜索
  search: {
    url: '/search/question'
  },

  // 问题详情
  // 获取问题相关信息
  questionDetail: {
    url: '/question/get/:id'
  },
  // 是否收藏问题
  ifCollect: {
    url: '/question/collect_status/:id'
  },
  // 收藏问题
  collect: {
    url: '/question/collect/:id'
  },
  // 评价订单
  assess: {
    url: '/question/assess/:id',
    method: 'POST'
  },
  // 提问接口

  // 派单金额
  askFee: {
    url: '/sdk/question/ask_fee'
  },
  // 派单提问
  ask: {
    url: '/question/ask',
    method: 'POST'
  },
  // 指向提问
  askProfessor: {
    url: '/expert/ask',
    method: 'POST'
  },
  // 回答问题
  answer: {
    url: '/question/answer',
    method: 'POST'
  },
  // 追问
  reask: {
    url: '/mark/ask',
    method: 'POST'
  },
  answerReask: {
    url: '/mark/answer',
    method: 'POST'
  },
  // 支付追问回调
  payReask: {
    url: '/mark/pay_reask',
    method: 'POST'
  },

  // 订单
  // 派单列表
  ordList: {
    url: '/expert/get_dis_question',
    method: 'GET'
  },
  myOrd: {
    url: '/expert/lock_question_list',
    method: 'POST',
    defaultDate: {
      pageNo: 1
    }
  },
  ordAccept: {
    url: '/expert/lock_question/:id'
  },
  ordRefuse: {
    url: '/expert/decline_distribute/:id'
},
  ordCancel: {
    url: '/expert/refund_question/:id'
  },
  reply: {
    url: '/question/answer',
    method: 'POST'
  },
  replyMark: {
    url: '/mark/answer',
    method: 'POST'
  },

  // 发送验证码
  sendCode: {
    url: '/sdk/send_sms/:phone'
  },
  // 绑定手机号
  bindPhone: {
    url: '/user/update/current/phone'
  }
}
module.exports = app => {
  const { router, controller } = app;
  router.post('/', controller.home.index);
  
  Object.keys(apiTags).forEach(tag=>{
    let api = apiTags[tag]
    router[(api.method||'get').toLowerCase()](api.url,controller.taxke[tag])
  })
};
