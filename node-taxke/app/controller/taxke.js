'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
class TaxkeController extends Controller {
  async jsapi() {
    this.ctx.body = {
      status_code: 0,
    };
  }
  async login() {
    this.ctx.body = {
      createDate: 1487555436000,
      del_flag: 'N',
      expert_nickName: '财税工作者',
      header_img: '/media/j7OudR2Y5qtfpsujKi5bMPj4XZ0TL08T.jpg',
      id: 'daeed62c471547c99b2c363958d9d82a',
      is_expert: 1,
      jsessionid: '607A21B5396B0810FB8AFD31FA9DC30D',
      last_login_time: 1529918932000,
      nickName: '代惟 ',
      openId: 'oT7f_wi8Ns8vjk9MmZzUWxsL1AK0',
      session_LastAccessedTime: 1529918931738,
      session_MaxInActiveInterval: 3600,
      sex: 1,
      source: 'WEIXIN',
      unionid: 'ojxvh0TsSm7Bwp8FTo8pebkZYfjQ',
    };
  }
  async isUser() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
      wx_user: {
        city: '孝感',
        country: '中国',
        groupid: 0,
        headimgurl:
          'http://thirdwx.qlogo.cn/mmopen/3rR4LKSJVXX19yp2BKI8FGuiaKPuy3KRicrm35EAicpcKqLVfyZsvoaPa8yVIBJqyYspOEyscl1FibAZ8VbI6WhXg1EicI7AV4Etq/132',
        language: 'zh_CN',
        nickname: '代惟',
        openid: 'oT7f_wi8Ns8vjk9MmZzUWxsL1AK0',
        province: '湖北',
        qr_scene: 0,
        qr_scene_str: '',
        remark: '',
        sex: 1,
        subscribe: 1,
        subscribe_scene: 'ADD_SCENE_SEARCH',
        subscribe_time: 1528961800,
        tagid_list: [],
        unionid: 'ojxvh0TsSm7Bwp8FTo8pebkZYfjQ',
      },
    };
  }
  async current() {
    this.ctx.body = {
      createDate: 1487555436000,
      del_flag: 'N',
      expert_info: '1234567',
      expert_nickName: '财税工作者',
      header_img: '/media/j7OudR2Y5qtfpsujKi5bMPj4XZ0TL08T.jpg',
      id: 'daeed62c471547c99b2c363958d9d82a',
      is_expert: 1,
      last_login_time: 1529918932000,
      mobile_phone: '15718850948',
      nickName: '代惟 ',
      openId: 'oT7f_wi8Ns8vjk9MmZzUWxsL1AK0',
      password: 'dd940609',
      question_fee: 100,
      sex: 1,
      source: 'WEIXIN',
      status_code: 0,
      status_message: 'ok',
      unionid: 'ojxvh0TsSm7Bwp8FTo8pebkZYfjQ',
    };
  }
  async askCount() {
    this.ctx.body = {
      require_answer_count: 0,
      status_code: 0,
      status_message: 'ok',
    };
  }
  async needAnswerCount() {
    this.ctx.body = {
      require_answer_count: 0,
      status_code: 0,
      status_message: 'ok',
    };
  }
  async incomeAccount() {
    this.ctx.body = {
      account: 3293,
      status_code: 0,
      status_message: 'ok',
    };
  }
  async user() {
    this.ctx.body = {
      createDate: 1487555436000,
      del_flag: 'N',
      expert_info: '1234567',
      expert_nickName: '财税工作者',
      header_img: '/media/j7OudR2Y5qtfpsujKi5bMPj4XZ0TL08T.jpg',
      id: 'daeed62c471547c99b2c363958d9d82a',
      is_expert: 1,
      last_login_time: 1529918932000,
      mobile_phone: '15718850948',
      nickName: '代惟 ',
      openId: 'oT7f_wi8Ns8vjk9MmZzUWxsL1AK0',
      password: 'dd940609',
      question_fee: 100,
      sex: 1,
      source: 'WEIXIN',
      status_code: 0,
      status_message: 'ok',
      unionid: 'ojxvh0TsSm7Bwp8FTo8pebkZYfjQ',
    };
  }
  async professor() {
    this.ctx.body = {
      createDate: 1487555436000,
      del_flag: 'N',
      expert_info: '1234567',
      expert_nickName: '财税工作者',
      header_img: '/media/j7OudR2Y5qtfpsujKi5bMPj4XZ0TL08T.jpg',
      id: 'daeed62c471547c99b2c363958d9d82a',
      is_expert: 1,
      last_login_time: 1529918932000,
      mobile_phone: '15718850948',
      nickName: '代惟 ',
      openId: 'oT7f_wi8Ns8vjk9MmZzUWxsL1AK0',
      password: 'dd940609',
      question_fee: 100,
      sex: 1,
      source: 'WEIXIN',
      status_code: 0,
      status_message: 'ok',
      unionid: 'ojxvh0TsSm7Bwp8FTo8pebkZYfjQ',
    };
  }
  async answerList() {
    this.ctx.body = {
      page: {
        autoCount: true,
        first: 1,
        hasNext: true,
        hasPre: false,
        nextPage: 2,
        pageNo: 1,
        pageSize: 10,
        prePage: 1,
        qtime: 0,
        result: [
          {
            answer_content:
              '你好，留抵没有期限规定！当期没有抵扣完，可以在下一期继续抵扣。如果企业直到注销都没有抵扣完，可以将未抵扣完的进项税额转入存货成本，在清算所得税时扣除。\n   进项还能抵扣的！',
            answer_date: 1529894104000,
            createDate: 1529893770000,
            create_user: 'b65c34eb9be6485abbdc74885b2df1a1',
            del_flag: 'N',
            header_img: '/default/icons/default_user.png',
            id: '7ad7ca1a684d45a3946d3e6863712d5f',
            nickName: '企业ceo',
            question_title:
              '请问，进项税额留抵的时间是多久？ 如：房产公司原自持的商业，取得有进项税，在3年后卖出，进项还能抵扣吗？',
          },
          {
            answer_content:
              '你好，根据《财政部&nbsp;国家税务总局关于房产税城镇土地使用税有关问题的通知》（财税[2008]152号）第一条"关于房产原值如何确定的问题"规定：对依照房产原值计税的房产，不论是否记载在会计账簿固定资产科目中，均应按照房屋原价计算缴纳房产税。房屋原价应根据国家有关会计制度规定进行核算。对纳税人未按国家会计制度规定核算并记载的，应按规定予以调整或重新评估。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此如果企业房产评估增值按照国家有关会计制度的规定，增加了房产的账面价值的，评估增值部分就应当缴纳房产税，否则，不缴纳房产税。',
            answer_date: 1528874866000,
            audio_name: '',
            createDate: 1528873803000,
            create_user: 'c7bd833becba4ceebf620f86cee50b49',
            del_flag: 'N',
            header_img: '/media/uFcNmRiQD7FT7YaOfkiTiol6vzKXI8JS.jpg',
            id: '6f037e3414e34db29c4e73c222d62015',
            nickName: '阿尔法go',
            question_title:
              '老师，你好，我们单位在改制为有限公司时，房屋进行了评估增值，请问评估增值部分需要缴纳房产税吗？',
          },
          {
            answer_content:
              '你好，纳税人识别号是税务登记证上的号码，通常简称为“税号”，每个企业的纳税人识别号都是唯一的。这个属于每个人自己且终身不变的数字代码很可能成为我们的第二张“身份证”。<br/>2015年1月12日，根据国家税务总局本周公布的《中华人民共和国税收征收管理法修订草案(征求意见稿)》，未来每个公民可能都将拥有一个由税务部门编制的唯一且终身不变、用来确认其身份的数字代码标识。',
            answer_date: 1528294928000,
            audio_name: '',
            createDate: 1528294044000,
            create_user: 'a777c70f3def40d7b2f0ffb3a19cbe7d',
            del_flag: 'N',
            header_img: '/default/icons/default_user.png',
            id: 'a7d965ab95ee48c187815670e9187384',
            nickName: 'ETAX_73805',
            question_title: '纳税人识别号',
          },
          {
            answer_content:
              '你好，撤资减资主要会涉及到企业所得税和个人所得税两个税种。<br/>&nbsp;&nbsp;1、企业所得税的计算<br/>&nbsp;&nbsp;国家税务总局《关于企业所得税若干问题的公告》(国家税务总局2011年第34号公告)规定：“投资企业从被投资企业撤回或减少投资，其取得的资产中，相当于初始出资的部分，应确认为投资收回;相当于被投资企业累计未分配利润和累计盈余公积按减少实收资本比例计算的部分，应确认为股息所得;其余部分确认为投资资产转让所得。被投资企业发生的经营亏损，由被投资企业按规定结转弥补;投资企业不得调整减低其投资成本，也不得将其确认为投资损失。”<br/>&nbsp;&nbsp;投资企业由于撤资或者减资等原因从被投资企业分回的资产，税务处理的原则和企业清算所得税的处理原则基本一致，即分回的资产扣除初始投资成本后，属于应归属的留存收益的部分确认为股息所得，剩余部分确认为股权转让所得。之所以采用这种原则，主要原因是撤资或者减资属于全部或部分投资关系终止，该部分投资权益已经终结，即权益的连续性不再存在。此外，如果投资企业从被投资企业分回的包括实物资产，应该按照实物资产的公允价值确认收入或者所得。<br/>&nbsp;&nbsp;2、个人所得税的计算<br/>&nbsp;&nbsp;国家税务总局《关于个人终止投资经营收回款项征收个人所得税问题的公告》(国家税务总局公告2011年第41号)规定：“个人因各种原因终止投资、联营、经营合作等行为，从被投资企业或合作项目、被投资企业的其他投资者以及合作项目的经营合作人取得股权转让收入、违约金、补偿金、赔偿金及以其他名目收回的款项等，均属于个人所得税应税收入，应按照“财产转让所得”项目适用的规定计算缴纳个人所得税。&nbsp;应纳税所得额的计算公式如下：&nbsp;应纳税所得额=个人取得的股权转让收入、违约金、补偿金、赔偿金及以其他名目收回款项合计数-原实际出资额(投入额)及相关税费”。个人由于撤资、减资等原因从被投资企业分回的资产，超过投资成本的部分应该全部确认为财产转让所得。',
            answer_date: 1527647139000,
            audio_name: '',
            createDate: 1527645328000,
            create_user: 'f008721b7857444aacc99c16461dfbf1',
            del_flag: 'N',
            header_img: '/media/f3408c8a0e6d44be8d640f040e52cf14.png',
            id: '980d5ac03e884eeb871310808dab617e',
            nickName: '美杰',
            question_title: '实缴注册资本减资需要交什么税？',
          },
          {
            answer_content: '你好，可以做入销售费用！',
            answer_date: 1527481154000,
            audio_name: '',
            createDate: 1527479418000,
            create_user: '861e471c6313465aa33fc0f93a1def2e',
            del_flag: 'N',
            header_img: '/default/icons/default_user.png',
            id: '8b5f6794cb994307b56bde4a6b2da505',
            nickName: 'KYY_59195',
            question_title:
              '老师，我们公司是做鲜果配送的，现在买了一个打码机用的秤头，花了1100，应该计入什么费用？',
          },
          {
            answer_content:
              '税务总局在《关于统一小规模纳税人标准等若干增值税问题的公告》（国家税务总局公告2018年第18号，以下简称“18号公告”）中，已经分多种情况进行了明确。<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;18号公告第九条规定：一般纳税人在增值税税率调整前未开具增值税发票的增值税应税销售行为，需要补开增值税发票的，应当按照原适用税率补开。<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;此规定的含义是：纳税义务发生在5月1日之前的应税行为，已经申报纳税但尚未开具增值税发票的，仍可以按照原17%、11%税率补开发票。<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;举例说明。A企业2018年2月向B企业销售货物，但B企业未索取发票。该企业在3月份对该项销售货物行为按17%的适用税率进行了纳税申报。5月，B企业索要发票，则A企业仍可以按照17%税率向B企业开具发票。<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;18号公告第九条还规定：一般纳税人在增值税税率调整前已按原适用税率开具的增值税发票，发生销售折让、中止或者退回等情形需要开具红字发票的，按照原适用税率开具红字发票；开票有误需要重新开具的，先按照原适用税率开具红字发票后，再重新开具正确的蓝字发票。<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;该条规定的含义是：纳税人原来按照17%、11%税率开具发票的业务，发生了销售折让、中止或者退回的，应按照17%、11%税率开具红字发票冲回；纳税人原来按照17%、11%税率开具的发票，发现开票错误的，先按照17%、11%税率开具红字发票冲回后，再按照17%、11%税率开具正确的蓝字发票。&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;如果符合条件，可以手工修改税率，开具！',
            answer_date: 1527039133000,
            audio_name: '',
            createDate: 1527037278000,
            create_user: '6820d88a61b643368ac9982d59ba8d45',
            del_flag: 'N',
            header_img: '/default/icons/default_user.png',
            id: '6b6545ea8cc14961852dee00d344bd49',
            nickName: '用户28029',
            question_title:
              '麻烦问一下，我们五一之前签订的合同17个点，还能开17个点的发票吗？我们是一般纳税人，该怎么开票？',
          },
          {
            answer_content: '你好，可以的',
            answer_date: 1526288881000,
            audio_name: '',
            createDate: 1526287340000,
            create_user: 'e345036260fc40869cf83c0e6368d8ab',
            del_flag: 'N',
            header_img: '/default/icons/default_user.png',
            id: 'bb96098131d74943b27cc259df576e5b',
            nickName: 'KYY_88006311',
            question_title:
              '老师，请问下，银行回单可以自己在网银上打印出来入账吗？那个公章是黑色的',
          },
          {
            answer_content:
              '你好，支付的费用是用于哪一方面的？根据不同的费用做不同的科目！列举了不同费用的范围对照一下！<br/>&nbsp;&nbsp;&nbsp;销售费用是指企业在销售商品和材料、提供劳务过程中发生的各项费用，包括企业在销售商品过程中发生的包装费、保险费、展览费和广告费、商品维修费、预计产品质量保证损失、运输费、装卸费等费用，以及企业发生的为销售本企业商品而专设的销售机构的职工薪酬、业务费、折旧费、固定资产修理费等费用。注意客观题&nbsp;&nbsp;&nbsp;(二)销售费用的账务处理&nbsp;&nbsp;销售费用不能归集到特定对象。&nbsp;&nbsp;借：销售费用&nbsp;&nbsp;贷：应付职工薪酬/累计折旧/银行存款/原材料等&nbsp;&nbsp;期末结转入本年利润中，期末没有余额。&nbsp;<br/>&nbsp;管理费用&nbsp;&nbsp;管理费用是指企业为组织和管理生产经营活动而发生的各种管理费用。包括企业在筹建期间发生的开办费、董事会和行政管理部门在企业的经营管理中发生的，或者应由企业统一负担的公司经费(包括行政管理部门职工工资、修理费、物料消耗、低值易耗品摊销、办公费和差旅费等)、工会经费、待业保险费、劳动保险费、董事会会费(包括董事会成员津贴、会议费和差旅费等)、聘请中介机构费、咨询费(含顾问费)、诉讼费、业务招待费、房产税、车船税、土地使用税、印花税、技术转让费、矿产资源补偿费、研究费用、排污费以及企业生产车间(部门)和行政管理部门发生的固资定产修理费等。&nbsp;&nbsp;注意：生产车间固定资产的折旧费计入产品成本。&nbsp;&nbsp;管理费用不多的商品流通企业，可不设本科目，相关核算内容可并入“销售费用”科目核算。&nbsp;&nbsp;期末结转入本年利润中，期末没有余额。&nbsp;&nbsp;特别注意：筹建期间的开办费也计入管理费用。',
            answer_date: 1526113307000,
            audio_name: '',
            createDate: 1526110609000,
            create_user: '6c47bd30b63f4789a95b37fe92c7adea',
            del_flag: 'N',
            header_img: '/default/icons/default_user.png',
            id: '277f4124dad747a392eda9a2c824667e',
            nickName: 'KYY_69606869',
            question_title: '请问支付给外账的费用怎么做会计分录呢？',
          },
          {
            answer_content:
              '你好，最好主动去国税局要求税种认定，把收入申报了！万一查到是会罚款的',
            answer_date: 1526021922000,
            audio_name: '',
            createDate: 1526021127000,
            create_user: '020bd66d0a2f4a76887cb858b699f4db',
            del_flag: 'N',
            header_img: '/default/icons/default_user.png',
            id: '4bc80a986fc74e61aa22d983901c7e6f',
            nickName: 'KYY_94686678',
            question_title:
              '老师，您好，我家是小规模，没有企业所得税的税种核定，所以汇算清缴报不了，这种情况税务局会罚款么，有收入，但是没有企业所得税的税种。',
          },
          {
            answer_content:
              '你好，税务方面个体户不用申报年报，工商方面需要申报年报！',
            answer_date: 1525752220000,
            audio_name: '',
            createDate: 1525748814000,
            create_user: 'b619d9aa86fc4abdbf6e891cdf2be13b',
            del_flag: 'N',
            header_img: '/default/icons/default_user.png',
            id: 'c4c817a30e994138b71aa7f7810cc21e',
            nickName: 'KYY_77460248',
            question_title: '核定征收的个体户需要年报吗？（呼和浩特地区）',
          },
        ],
        totalCount: 245,
        totalPages: 25,
      },
      status_code: 0,
      status_message: 'ok',
    };
  }
  async myQuestion() {
    this.ctx.body = {
      autoCount: false,
      first: 1,
      hasNext: false,
      hasPre: false,
      nextPage: 1,
      pageNo: 1,
      pageSize: 10,
      prePage: 1,
      qtime: 0,
      result: [
        {
          answer_content:
            '找一个经验丰富的会计主管财务工作，建立采购报销等常见流程，如果销售业务频繁，还需要借助IT技术来实现收入确认的及时完整。还可以在网上找找同行业财务制度和流程，对财务人员的要求有哪些，借鉴的同时结合企业自身的发展做规范要求和业绩考核。',
          answer_date: 1529905250000,
          createDate: 1529904781000,
          create_user: 'daeed62c471547c99b2c363958d9d82a',
          del_flag: 'N',
          holder_expert: 'e04e070c8dd0496da2873b2915b8b650',
          holder_img: '/media/5a6c690f25c0418b9727057d1dd65ab6.png',
          holder_nickName: '财税工作者 | 管管',
          id: '820ad5d045fa4480973596b5436a93c7',
          question_state: 3,
          question_title:
            '公司一年了，想创建完整的财务管理系统，需要做什么？之前做账都是代账公司，现在招的也是刚本科毕业的学生做出纳',
        },
        {
          answer_content:
            '如果是自产，且您是一般纳税人的话，对于销售石料可以选择适用。',
          answer_date: 1529905071000,
          createDate: 1529904691000,
          create_user: 'daeed62c471547c99b2c363958d9d82a',
          del_flag: 'N',
          holder_expert: '8339136d7c6a4c41b6d63d1e068c95be',
          holder_img: '/media/6222b95a72b1480a8bcf1a70007acb19.png',
          holder_nickName: '财税工作者 | 张亮',
          id: 'c26e38f199d24098aaf0a4de14bb459c',
          question_state: 3,
          question_title:
            '水泥生产企业兼营石料加工销售，可以分别选择增值税16%一般计税和3%简易征收吗？',
        },
        {
          answer_content: '并入工资，要交个税',
          answer_date: 1529904352000,
          createDate: 1529903942000,
          create_user: 'daeed62c471547c99b2c363958d9d82a',
          del_flag: 'N',
          holder_expert: 'f9d693bcdb3a4981a5415adf24d7e66d',
          holder_img: '/media/eMNHdbAHeai5QCCYQtCFwwvRFCXR2xI3.jpg',
          holder_nickName: '财税工作者 | 真趣财税',
          id: 'f3bc5d071ead4084be5583f82268130b',
          question_state: 3,
          question_title: '在外地出差1个月以上的误餐䃼贴要交个税吗？',
        },
        {
          answer_content:
            '取得发票，企业购卡后未使用的，不得进行税前扣除；购卡后使用的，在使用时相应结转成本、费用进行税前扣除。',
          answer_date: 1529742530000,
          createDate: 1529741357000,
          create_user: 'daeed62c471547c99b2c363958d9d82a',
          del_flag: 'N',
          holder_expert: '50506429b2054ae8add33712e4fe5ac3',
          holder_img: '/media/6d45d29ce3734426a34e5edf12e1814f.png',
          holder_nickName: '财税公益人 | geniuschow',
          id: '624ad3bb772048d0bf9acba02163ccf7',
          question_state: 3,
          question_title:
            '企业购入超市、加油站等预付卡，取得了销售方开具的增值税普通发票，发票内容为预付卡销售和充值。该项支出能否在企业所得税税前扣除？',
        },
        {
          answer_content:
            '通行费是计算抵扣，不是认证抵扣，具体依据是财税〔2017〕90号文件，和国家税务总局〔2017〕66号公告。不一定需要公司名下固定资产的汽车才可以抵扣，但电子发票上有车牌信息。',
          answer_date: 1528781152000,
          audio_name: '',
          createDate: 1528771396000,
          create_user: 'daeed62c471547c99b2c363958d9d82a',
          del_flag: 'N',
          holder_expert: '188f3d7af3b34bc28fd476e0f29cf656',
          holder_img: '/media/QNBaOtBWo51GJGaUNBO1V8b83pimXfsr.jpg',
          holder_nickName: '财税工作者 | 叮当',
          id: '2a9099030bb04593899ed9d39061541b',
          question_state: 3,
          question_title:
            '请问现在通行费是不是可以认证抵扣 是不是需要公司名下有固定资产汽车才可以抵扣',
        },
        {
          answer_content:
            '你好！我认为应计入税金及附加，但在实操中有遇过税局认可计入开发成本的，需与当地税局沟通确认。',
          answer_date: 1523413553000,
          audio_name: '',
          createDate: 1523413122000,
          create_user: 'daeed62c471547c99b2c363958d9d82a',
          del_flag: 'N',
          holder_expert: '60dbc0e34dbf4997bdb47ad711187187',
          holder_img: '/media/MPoe64CGmPcosuI9EiUiO9bniEg5kDEF.jpg',
          holder_nickName: '财税工作者 | 小晴说税',
          id: 'db2eb72d0f7b420c9304c9f518316032',
          question_state: 3,
          question_title:
            '房地产开发企业缴纳的土地使用税在哪个核算科目?开发成本_土地征用费?还是税金及附加?谢谢/',
        },
        {
          answer_content:
            '您好！根据《营业税改征增值税试点实施办法》第四十条&nbsp;一项销售行为如果既涉及服务又涉及货物，为混合销售。从事货物的生产、批发或者零售的单位和个体工商户的混合销售行为，按照销售货物缴纳增值税；其他单位和个体工商户的混合销售行为，按照销售服务缴纳增值税。<br/>本条所称从事货物的生产、批发或者零售的单位和个体工商户，包括以从事货物的生产、批发或者零售为主，并兼营销售服务的单位和个体工商户在内。<br/><br/>您公司属于营改增后的混合销售行为，应按照销售服务缴纳增值税，开具11%的增值税专用发票。<br/><br/>以上是我的回复，欢迎您关注我继续讨论。',
          answer_date: 1522814307000,
          audio_name: '',
          createDate: 1522811288000,
          create_user: 'daeed62c471547c99b2c363958d9d82a',
          del_flag: 'N',
          holder_expert: '480d0fa9a930406282890fe947b7419d',
          holder_img: '/media/cvLiSvI0rMJSt94BpqhKViXJiNWtFhag.jpg',
          holder_nickName: '财税工作者 | 金玉良言税税念',
          id: 'cef526e8d0024290b5d8722c19f83d00',
          question_state: 3,
          question_title:
            '我们是水电安装工程公司，我们对外开票的时候，是全部开成11%工程服务，还是将工程中的材料和设备按17%开，其余按11%开',
        },
        {
          answer_content:
            '<p>&nbsp; &nbsp; &nbsp; &nbsp; 根据《中华人民共和国个人所得税法实施条例》第二十五条：按照国家规定，单位为个人缴付和个人缴付的基本养老保险费、基本医疗保险费、失业保险费、住房公积金，从纳税义务人的应纳税所得额中扣除。&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; 按照《国家税务总局关于单位为员工支付有关保险缴纳个人所得税问题的批复》（国税函〔2005〕318号） 规定，对企业为员工支付各项免税之外的保险金，应当在企业向保险公司缴付时并入员工当期的工资收入，按工资、薪金所得项目计征个人所得税，税款由企业负责代扣代缴。&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; 根据《财政部 税务总局 保监会关于将商业健康保险个人所得税试点政策推广到全国范围实施的通知》（财税〔2017〕39号）第一条、第二条规定，对个人购买符合规定的商业健康保险产品的支出，允许在当年（月）计算应纳税所得额时予以税前扣除，扣除限额为2400元/年（200元/月）。单位统一为员工购买符合规定的商业健康保险产品的支出，应分别计入员工个人工资薪金，视同个人购买，按上述限额予以扣除。</p>',
          answer_date: 1522295811000,
          audio_name: '',
          createDate: 1522293582000,
          create_user: 'daeed62c471547c99b2c363958d9d82a',
          del_flag: 'N',
          holder_expert: '7bd7baabd1d541278ba5986bb3eb3b6b',
          holder_img: '/media/1ZNwArBAFUFX0OsoUpYYbTb0Muimix5k.jpg',
          holder_nickName: '财税工作者 | 小强老师',
          id: '958e7fc819d34f98a2615c5e8f7dc0ff',
          question_state: 3,
          question_title: '关于补充医疗保险报销问题如何进行个人所得税筹划？',
        },
        {
          answer_content: '应该是可以的&nbsp;谢谢你的提问<br/>',
          answer_date: 1520492371000,
          audio_name: '',
          createDate: 1520492303000,
          create_user: 'daeed62c471547c99b2c363958d9d82a',
          del_flag: 'N',
          holder_expert: '0e42dba8cfc3479b9a393e855beb43ec',
          holder_img: '/media/30DWHU3swNlxoMZeeHnvZoq4l9Tm3vf3.jpg',
          holder_nickName: '财税工作者 | tiny',
          id: '728465220d5940da8470fbdd5a4d4a56',
          question_state: 3,
          question_title: '公司向个人借款的利息如何处理',
        },
        {
          answer_content: '个人支出不能在企业报销，除非是因工造成！',
          answer_date: 1520393791000,
          audio_name: '',
          createDate: 1520392140000,
          create_user: 'daeed62c471547c99b2c363958d9d82a',
          del_flag: 'N',
          holder_expert: 'bcdce421d67447709f8ae996b7915a04',
          holder_img: '/media/14257b7b2b2f4c3da687a3397fd259e5.png',
          holder_nickName: '专业讲师 | 罗伟',
          id: 'fc5b105c882e451ba415f00a0fa301aa',
          question_state: 3,
          question_title:
            '员工生病住院医保负担一部分，个人负担一部分，个人负担部分是否可以在企业报销，记入福利费吗？',
        },
      ],
      totalCount: 0,
      totalPages: 0,
    };
  }
  async myCollect() {
    this.ctx.body = {
      page: {
        autoCount: false,
        first: 1,
        hasNext: false,
        hasPre: false,
        nextPage: 1,
        pageNo: 1,
        pageSize: 10,
        prePage: 1,
        qtime: 0,
        result: [
          {
            answer_content:
              '分公司作为增值税纳税人，其增值税应税收入应当按照增值税纳税义务发生时间来判断。主要规定是纳税人销售货物，提供劳务或服务时从客户取得款项即产生应税收入。具体的规定，又根据款项结算方式以及所从事行业以及开具发票时点有所不同，有具体判断方法。请您讲分公司结算方式，行业以及开票方式，从追问中一并提供给我，以便准确判断，给您完整答复。个人微信号1109295638，欢迎加入。',
            answer_date: 1501667655000,
            audio_name: '',
            createDate: 1501663846000,
            create_user: '1b2a6b3ad89b4a4aa009539347ece512',
            del_flag: 'N',
            expert_nickName: '财税工作者',
            header_img: '/media/mxmLHAeMdiYV0XQmxNFsaVsmq9wB3kW3.jpg',
            id: '97b11d03580142a4a56af477272e8bef',
            nickName: '秦老师| 和悦咨询',
            question_title:
              '总公司在异地成立一分公司，主管局对分公司的流转税在当地认定为独立纳税主体，且是小规模，总公司为一般纳税人，分公司的业务合同全是以总公司名义签订，请问老师对于分公司的业务收入如何界定？',
          },
          {
            answer_content:
              '根据财税〔2012〕15号文件，小规模纳税人初次购买增值税税控系统专用设备(包括分开票机)支付的费用和技术维护费，可在增值税应纳税额中全额抵减(抵减额为价税合计额)，不足抵减的可结转下期继续抵减。小规模纳税人将抵减金额填入《增值税纳税申报表(适用于小规模纳税人)》第11栏“本期应纳税额减征额”。当本期减征额小于或等于第10栏“本期应纳税额”时，按本期减征额实际填写;当本期减征额大于第10栏“本期应纳税额”时，按本期第10栏填写，本期减征额不足抵减部分结转下期继续抵减。',
            answer_date: 1499068646000,
            audio_name: '',
            createDate: 1499065115000,
            create_user: 'c48afabc29064784951ed87956177046',
            del_flag: 'N',
            expert_nickName: '知名专家',
            header_img: '/media/cCHhWyBBSpEqdbm9dfsG3qs9Hj6z7Aij.jpg',
            id: 'f14fecd1fb534089b216c33f33dd63c5',
            nickName: '华鑫',
            question_title:
              '上个月我开票开了31000左右，超了三万了，听说前期买税控设备能扣税，你知道怎么操作不？',
          },
          {
            answer_content: '这个是视同销售，都需要交增值税。',
            answer_date: 1503653873000,
            audio_name: '',
            createDate: 1503653505000,
            create_user: 'daeed62c471547c99b2c363958d9d82a',
            del_flag: 'N',
            expert_nickName: '财税工作者',
            header_img: '/media/edd1826c744b4a048993817e55b7f7b2.png',
            id: 'e52fedbc9b79453aafeff823da586dd0',
            nickName: '斑',
            question_title:
              '国有独资企业之间资产无偿划转是否缴纳增值税？如果是同一控制下的民营企业之间资产的划转情况是否不同？',
          },
          {
            answer_content:
              '增值税纳税申报表(小规模纳税人适用)附列资料由应税服务有扣除项目的纳税人填写，如果没有发生相关扣除项目，则不用填写；如何填写附列资料详见http://www.gz-n-tax.gov.cn/bsfw/nsfwrx/bszn/ssrjsy/201609/t20160927_75485.html',
            answer_date: 1502095302000,
            audio_name: '',
            createDate: 1502091508000,
            create_user: 'daeed62c471547c99b2c363958d9d82a',
            del_flag: 'N',
            expert_nickName: '财税公益人',
            header_img: '/media/6d45d29ce3734426a34e5edf12e1814f.png',
            id: 'bab0d0e8803b4f1da093b2106020b9af',
            nickName: 'geniuschow',
            question_title:
              '小规模纳税人如果当月既有货物及劳务收入，又有服务收入，不适用差额征税政策，怎么填写附列？资料是全部含税收入这两项都包括吗？',
          },
          {
            answer_content:
              '跟普通的股权转让的办理流程和手续一致，婆婆转让给儿媳没有特殊性',
            answer_date: 1505084713000,
            audio_name: '',
            createDate: 1505061159000,
            create_user: '309b8cc2ab134224a4fd2c4ee56cc226',
            del_flag: 'N',
            expert_nickName: '财税工作者',
            header_img: '/media/e86cb8fcc9f94e359f636a6f8b00b446.png',
            id: '09a61614c6c34a9ca312556171905cbd',
            nickName: '资深外企CPA',
            question_title: '婆婆可以直接把股份转让给儿媳妇吗？',
          },
          {
            answer_content:
              '您好：<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;营改增以后，增值税适用简易征收，征收率3%有三种情形：<br/>1.老项目可以选择简易征收；<br/>2.甲供材料可以选择简易征收；<br/>3.清包工可以选择简易征收；<br/>问题描述你公司分包工程给乙方，如果属于甲供材乙方是可以选择3%简易征收的，乙方也可以选择一般征收11%<br/>',
            answer_date: 1504839904000,
            audio_name: '',
            createDate: 1504836433000,
            create_user: '1f68faaed0e441bea036f677703b124f',
            del_flag: 'N',
            expert_nickName: '财税工作者',
            header_img: '/media/fc4643481b7249ad855fe659a21b531b.png',
            id: '8a5461c111b74b688436a55f3c1ae49e',
            nickName: '福宝',
            question_title:
              '我工程施工企业，有一部分工程外包，对方说可以给我们开11%  或3%的税率的增值税发票，说是和合同内容相关，甲供材之类的可开3%的发票，我不明白，承方包可根据合同选择税率吗？',
          },
          {
            answer_content:
              '《个人所得税法实施条例》第十四条对免税的应付福利费做了界定，即指根据国家有关规定，从企业、事业单位、国家机关、社会团体提留的福利费或工会经费中支付给个人的生活补助费。职工报销医药费是否属于这种生活补助应当分别情况处理。第一种情况是企业已为职工办理医疗保险，则职工患疾病应当由医疗保险经办机构办理相应额度的报销手续，获得一定数额补偿，此笔款项不应由企业报销，如果职工将医保不予报销票据到企业报销支取，应当作为个人所得计征个人所得税。第二种情况是企业未为职工办理医疗保险，或者虽然办理了医疗保险，但所患为重大疾病，医保报销比例极低，这类情况企业根据实际情况给予一定数额报销，同时附有相应证明真实性的凭证，则可以作为生活困难补助免予征收个人所得税。若该员工属于生活困难补助，则按福利费报销，不须要合并申报个税，否则就计征个税。',
            answer_date: 1499994340000,
            audio_name: '',
            createDate: 1499993600000,
            create_user: '6820d88a61b643368ac9982d59ba8d45',
            del_flag: 'N',
            expert_nickName: '财税工作者',
            header_img: '/media/49498c40436143439de6aad51cc81184.png',
            id: '94f999b2de4f41ac915e15c3f9d3aaf8',
            nickName: '大风',
            question_title:
              '请问职工个人看病的发票是否可以作为福利费报销？如果是在14%以内是否要合并工资申报？',
          },
          {
            answer_content:
              '按照正常商品申报出口退税，注意价格的制定和分摊<br/><br/>出口贸易备货工作的主要内容是：在签订合同或收到信用证后向生产部门、供货部门或仓储部门安排或催交货物，核实应交货物的品质、规格、数量，进行必要的加工整理、包装、刷唛头以及申请报验和领证工作。凡列入《种类表》的出口商品和买卖合同中规定由商检机构出证的商品，均应在货物备齐后向商品检验局申报检验。只有取得商检局发给的检验合格证书，海关才予放行。凡未列入《种类表》的出口商品，而且买卖合同中亦未规定由商检机构出证的出口商品，也应向商检局申报，经商检局在报关单上加盖放行印章后，海关才凭以放行。<br/><br/>&nbsp;&nbsp;在备货工作中，以下各点应引起卖方的注意：<br/><br/>&nbsp;&nbsp;1．所备货物的品质、规格、花色品种应符合合同的规定，即不要偏高，也不要偏低。偏高时我方不利，而且影响以后业务的进行；偏低遭到对方拒收或索赔。<br/><br/>&nbsp;&nbsp;2．备货数量要多于合同规定的数量，以防不测；实际交货数量应符合合同或信用证规定。凡按重量计量的货物而在买卖合同或信用证中均未规定按何种方法计量者，按惯例应以净重计量。<br/><br/>&nbsp;&nbsp;3．货物的包装必须符合合同规定和运输要求，唛头应按合同规定的式样刷制，要注意清楚醒目，颜色不易脱落。<br/><br/>&nbsp;&nbsp;4．备货时间按距离启运港远近，提前进行。注意备货完成时间一定要早于信用证规定的船期，严防脱节。<br/><br/>&nbsp;&nbsp;5．针对不同商品情况，对出口货物进行检验是不可缺少的重要环节。<br/><br/>&nbsp;&nbsp;6．货物必须是第三方不能提出任何权利或请求的。卖方应保证对所售货物享有合法的完全的所有权，他应有权出售该项货物，并保证买方能安稳地占有和支配该项货物而不受任何第三方的侵扰。',
            answer_date: 1504778595000,
            audio_name: '',
            createDate: 1504762501000,
            create_user: 'daeed62c471547c99b2c363958d9d82a',
            del_flag: 'N',
            expert_nickName: '财税工作者',
            header_img: '/media/5a6c690f25c0418b9727057d1dd65ab6.png',
            id: 'c369e921f4fa4cbaba432ab53e300c25',
            nickName: '管管',
            question_title:
              '外贸企业出口商品给国外代理商，合同约定有1%备货，作为次品换货备用。备货如何报关，申报出口退税？备货不收款。次品会在寄回中国。如果备货销售了会收回货款。关于备货应如何报关，申报出口退税？',
          },
          {
            answer_content:
              '简并增值税税率和加计扣除是两个不同政策，前者所说的是增值税，后者指的是企业所得税，二者不能混为一谈。<br/>1.财政部、国家税务总局《关于简并增值税税率有关政策的通知》（财税〔2017〕37号）规定，自2017年7月1日起，简并增值税税率结构，取消13%的增值税税率。<br/>纳税人销售或者进口下列货物，税率为11%：农产品（含粮食）、自来水、暖气、石油液化气、天然气、食用植物油、冷气、热水、煤气、居民用煤炭制品、食用盐、农机、饲料、农药、农膜、化肥、沼气、二甲醚、图书、报纸、杂志、音像制品、电子出版物。<br/>纳税人购进农产品，除营业税改征增值税试点期间，纳税人购进用于生产销售或委托受托加工17%税率货物的农产品维持原扣除力度不变外，其他情形纳税人购进农产品,取得一般纳税人开具的增值税专用发票或海关进口增值税专用缴款书的，以增值税专用发票或海关进口增值税专用缴款书上注明的增值税额为进项税额；从按照简易计税方法依照3%征收率计算缴纳增值税的小规模纳税人取得增值税专用发票的，以增值税专用发票上注明的金额和11%的扣除率计算进项税额；取得（开具）农产品销售发票或收购发票的，以农产品销售发票或收购发票上注明的农产品买价和11%的扣除率计算进项税额。<br/>具体农产品的范围和理解，以财政部、国家税务总局《关于印发<农业产品征税范围注释>的通知》（财税字[1995]52号）为准。<br/>2.财政部、国家税务总局《关于提高科技型中小企业研究开发费用税前加计扣除比例的通知》（财税〔2017〕34号）规定，科技型中小企业开展研发活动中实际发生的研发费用，未形成无形资产计入当期损益的，在按规定据实扣除的基础上，在2017年1月1日至2019年12月31日期间，再按照实际发生额的75%在税前加计扣除；形成无形资产的，在上述期间按照无形资产成本的175%在税前摊销。<br/>这里所指的科技型中小企业是指依托一定数量的科技人员从事科学技术研究开发活动，取得自主知识产权并将其转化为高新技术产品或服务，从而实现可持续发展的中小企业。<br/>这里所称的研发费用，是指企业为开发新技术、新产品、新工艺发生的研究开发费用。企业正常生产经营活动不是研发活动，不存在费用加计扣除的问题。',
            answer_date: 1499438125000,
            audio_name: '',
            createDate: 1499436359000,
            create_user: '8383056ed7c34918b515b5d8edd51918',
            del_flag: 'N',
            expert_nickName: '财税工作者',
            header_img: '/media/46ba957196334c5a83bcb828c50526e5.png',
            id: 'ae93f90aa083447196ad70dbf9d370b9',
            nickName: '老骥',
            question_title:
              '针对简并税率后加计扣除政策，农产品的理解？我们购进豆粕深加工是否可以加计扣除',
          },
          {
            answer_content:
              '一、建议如实记账，收到承兑汇票背书，如实入账，（如果收到承兑是货款，不入账就涉嫌隐瞒收入了），用承兑付款就能顺利地记账了；<br/>二、现实情况是收到承兑未记账，拿承兑付款也就无法入账了，原材料入账，欠供货商货款挂应付账款；<br/>三、如何将欠供货商的应付账款冲掉？假如企业账上没有足够的银行存款或现金，可以向老板借来周转：<br/>借：银行存款或现金&nbsp;&nbsp;20万<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贷：其他应付款——老板&nbsp;&nbsp;20万<br/>付供货商欠款时：<br/>&nbsp;借：应付账款&nbsp;20万<br/>贷：银行存款或现金&nbsp;20万（这么做不是很规范，而且其他就应付款余额过大也不好）<br/><br/>另外，刚才的职工薪酬问题，有一篇文章可参考。<br/>新准则下职工薪酬的会计及税务处理<br/>对于企业财务人员来说，职工薪酬的会计与税务处理在2015年发生了不小的变化，一是财政部对《企业会计准则第9号——职工薪酬》（以下简称“新职工薪酬准则”）进行了最新修订，并要求企业从2014年7月1日起执行。二是自2015年1月1日起，查账征收的企业所得税纳税人执行新的企业所得税年度纳税申报表，此表将原纳税调整表中的职工薪酬等项目单列附表，增加了股权激励支出，细化了职工教育经费支出等内容。笔者现对职工薪酬会计与税务处理的变化进行简要分析。<br/>一、职工薪酬准则的主要变化<br/>一是将职工薪酬划分为短期薪酬、离职后福利、辞退福利和其他长期职工福利等项目，并分别进行了具体界定。<br/>二是带薪缺勤被纳入新的准则体系。带薪缺勤分为累积带薪缺勤和非累积带薪缺勤。企业应当在职工提供服务从而增加了其未来享有的带薪缺勤权利时，确认与累积带薪缺勤相关的职工薪酬，并以累积未行使权利而增加的预期支付金额计量。企业应当在职工实际发生缺勤的会计期间确认与非累积带薪缺勤相关的职工薪酬。<br/>三是明确了职工范围。新职工薪酬准则界定的职工，既包括与企业订立劳动合同的所有人员，也包括虽未与企业订立劳动合同但由企业正式任命的人员。此外，通过企业与劳务中介公司签订用工合同而向企业提供服务的人员也属于职工的范畴。至此，颇具争议的劳务派遣合同中关于职工界定问题尘埃落定。<br/>四是新增了离职后福利。离职后福利是新职工薪酬准则首次提出的概念，企业根据承担的义务、职工薪酬的支付方式和风险承担主体的不同，将离职后福利计划分类为设定提存计划和设定受益计划。在设定提存计划下，企业向独立的基金缴存固定费用后，不再承担进一步支付义务，不承担与基金资产有关的风险；设定受益计划，是指除设定提存计划以外的离职后福利计划，将离职后福利视作递延支付的职工薪酬。<br/>五是充实了其他长期职工福利，完整规范了与职工薪酬相关的会计处理问题。企业向职工提供的其他长期职工福利，符合设定提存计划条件的，适用新职工薪酬准则中关于设定提存计划的有关规定进行处理，除此情形外，企业应当按照该准则关于设定受益计划的有关规定，确认和计量其他长期职工福利净负债或净资产。<br/>报告期末，为简化相关会计处理，企业应当将其他长期职工福利产生的服务成本、其他长期职工福利净负债或净资产的利息净额、重新计量其他长期职工福利净负债或净资产所产生的变动等职工薪酬成本项目的总净额计入当期损益或相关资产成本。另外，长期残疾福利水平取决于职工提供服务期间长短的，企业应当在职工提供服务的期间确认应付长期残疾福利义务，计量时应当考虑长期残疾福利支付的可能性和预期支付的期限；长期残疾福利与职工提供服务期间长短无关的，企业应当在导致职工长期残疾的事件发生的当期确认应付长期残疾福利义务。<br/>六是对财务报表的影响。如，新职工薪酬准则将设定受益计划的离职后福利纳入职工薪酬体系，此前在“预计负债”科目核算的离退休人员费用需转入“职工薪酬——离职后福利”科目核算。将原来没有确认和计量的表外职工福利负债纳入表内。<br/><br/>二、新职工薪酬准则下职工薪酬的会计与税务处理<br/>新职工薪酬准则的制定与国际惯例趋同，进一步扩大了谨慎性原则的应用范围，会计方法选择和业务处理程序更加符合经济实质重于法律形式原则，但因会计与税收的目标和原则不一致，会计处理与税法规定仍存在一定的差异。新职工薪酬准则中“职工薪酬”比税法中的“工资薪金支出”范围更广。税法没有职工薪酬的明确概念，而是将会计上的职工薪酬分解为工资薪金、职工福利费、社会保险费、住房公积金、工会经费、职工教育经费、非货币性福利等。在税务处理上，不能简单地把职工薪酬作为工资薪金支出在税前扣除，而应将会计上的职工薪酬分解为税法对应的费用支出，再确定能否在税前扣除。<br/>1.工资薪金支出的税前扣除遵循实际发生原则、合理性原则及特定人员工资薪金加计扣除等原则。实际发生原则要求企业税前扣除的工资薪金是当期实际发生的工资，仅计提尚未发放的应付工资不允许在税前扣除。对于年末计提的应付未付工资薪金，在企业所得税汇算清缴前发放的，可作为汇算年度已发放的工资薪金在税前扣除；如在汇算清缴期结束后仍未发放的，则应进行纳税调增处理。<br/>合理性原则要求企业在一定时期所发放的工资薪金是相对固定的，工资薪金的调整是有序进行的；有关工资薪金的安排，不以减少或逃避税款为目的。<br/>特定人员工资薪金加计扣除是税法为鼓励科技创新、促进就业出台的税收优惠政策。如，企业为开发新技术、新产品、新工艺发生的研究开发费用，未形成无形资产计入当期损益的，在按照规定据实扣除的基础上，按照研究开发费用的50%加计扣除；形成无形资产的，按照无形资产成本的150%摊销。企业安置残疾人员的，在按照支付给残疾职工工资据实扣除的基础上，按照支付给残疾职工工资的100%加计扣除。<br/>2.税法强调允许税前扣除的职工福利费支出，必须是实际发生的且不得超过工资总额14%的部分。企业在计算税前允许扣除的福利费金额时，应将当期实际发生的福利费总额，与税法口径的工资总额的14%进行比较，超支部分应调增应纳税所得额，且该部分超支数额构成永久性差异的，不得结转到以后年度扣除。<br/>3.企业超出税法规定范围和标准缴纳的社会保险费、住房公积金，本期及以后年度均不得在税前扣除。同时，只有实际缴纳金额方可扣除，对于提而未缴的社会保险费和住房公积金不得在税前扣除。本期实际缴纳数超过提取数，但未超过税法规定标准的部分，允许在实际缴纳的年度扣除，即前期调增的金额允许在实际缴纳年度作纳税调减处理。<br/>4.企业拨缴的工会经费，不得超过税法口径的工资薪金实际发放数的2%，超过部分和提而未缴部分不得扣除，不允许扣除部分应调增应纳税所得额。企业发生的职工教育经费支出实际上允许全额扣除，只是在扣除时间上作了相应递延。新企业所得税年度纳税申报表《职工薪酬纳税调整明细表》的职工教育经费支出项目，细化列示了“按税收规定比例扣除的职工教育经费”和“按税收规定全额扣除的职工培训费用”两个子项目，体现了国家对技术先进型服务企业、集成电路设计企业、高新技术企业等类型纳税人的税收扶持。<br/>5.企业对实际发生的辞退福利可以据实扣除。对于职工有选择权的辞退福利，通过“预计负债”科目计入费用的部分，不得在计算应纳税所得额时扣除，即本期提而未付的辞退福利不得在税前扣除，应调增应纳税所得额，待实际支付时，再作纳税调减处理。<br/>',
            answer_date: 1491744429000,
            audio_name: '',
            createDate: 1491741830000,
            create_user: 'df23d025c9df4d33b16e406bcb4e52ca',
            del_flag: 'N',
            expert_nickName: '财税工作者',
            header_img: '/media/dKlLhATYnE8n5oGnNn70kv66T6I3cv6X.jpg',
            id: '4d18a684d9ed4a34babb107c354955bf',
            nickName: '牛戈',
            question_title:
              '老板收到承兑汇票20万元是不入账的，对方也没有背书给我们，又把这20万的承兑付款给供应商货款需入账也没有背书。请问这种情况我该如何入账呢，付款时借应付账款 贷现金 可以吗？',
          },
        ],
        totalCount: 0,
        totalPages: 0,
      },
      status_code: 0,
      status_message: 'ok',
    };
  }
  async followState() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async follow() {
    this.ctx.body = { status_code: 0, status_message: 'ok' };
  }
  async askCount() {
    this.ctx.body = {
      page: {
        autoCount: false,
        first: 1,
        hasNext: false,
        hasPre: false,
        nextPage: 1,
        pageNo: 1,
        pageSize: 10,
        prePage: 1,
        qtime: 0,
        result: [
          {
            expert_info:
              '高级会计师、注册税务师、经济师，从事财税工作近二十年，愿与您一起探讨财税问题。',
            expert_nickName: '财税工作者',
            header_img: '/media/fc4643481b7249ad855fe659a21b531b.png',
            id: 'd31445cdd0b0478a959d8ac7e36cf90d',
            last_login_time: 1529749281000,
            nickName: '福宝',
            openId: 'oT7f_wglwlg2_J-1hxthdSQM4QC0',
            question_fee: 1666,
            unionid: 'ojxvh0T-sdXOytzfl2Mk3yuQOwuQ',
          },
          {
            expert_info: '注册会计师',
            expert_nickName: '财税工作者',
            header_img: '/media/edd1826c744b4a048993817e55b7f7b2.png',
            id: '7b04a92282ac481ebde7b991f67a86a2',
            last_login_time: 1529894748000,
            nickName: '斑',
            openId: 'oT7f_wr0HS6bpSIagRCNA63adJMU',
            question_fee: 100,
            unionid: 'ojxvh0WG2RRMjOIA3j_MDBMxWoEM',
          },
          {
            expert_info: '124567999\n',
            expert_nickName: '财税工作者',
            header_img: '/media/pB0qXHGm1B2v9FJNJG1tYOTZwjDy8vnw.jpg',
            id: '658d7a4b63f3487ab7a54333e7561117',
            last_login_time: 1529918699000,
            nickName: '戏子',
            openId: 'oT7f_whL1VpOQedSmqe8aJpjX5aQ',
            question_fee: 100,
            unionid: 'ojxvh0aPEytfWkXxc_MTX8SAxYg0',
          },
          {
            expert_info: '注册会计师、注册税务师，与您交流财税问题。',
            expert_nickName: '财税工作者',
            header_img: '/media/1ZNwArBAFUFX0OsoUpYYbTb0Muimix5k.jpg',
            id: '7bd7baabd1d541278ba5986bb3eb3b6b',
            last_login_time: 1529896545000,
            nickName: '小强老师',
            openId: 'oT7f_wiL0M-031edw-snvh3--2mA',
            question_fee: 1000,
            unionid: 'ojxvh0c_SWEax_br1NJ1IhBInBJQ',
          },
          {
            expert_info:
              '注册会计师，税务师，从业10年。有上市公司税务经理、房地产公司财务经理等相关经验',
            expert_nickName: '财税工作者',
            header_img: '/media/5a6c690f25c0418b9727057d1dd65ab6.png',
            id: 'e04e070c8dd0496da2873b2915b8b650',
            last_login_time: 1529917093000,
            nickName: '管管',
            openId: 'oT7f_wi_hc3pc5VC9mLQTV1ZuSqg',
            question_fee: 1000,
            unionid: 'ojxvh0VdsSI_zW8IImEJEpuGg-Js',
          },
          {
            expert_info:
              '\n从业16年，熟悉会计处理及税收政策，擅长解决实务问题，希望共分享共学习共提高',
            expert_nickName: '财税工作者',
            header_img: '/media/c2c2d16cb0c944788177a1f12f4b90c4.png',
            id: 'f640651e46f344478ce1189dbfd71db0',
            last_login_time: 1529910243000,
            nickName: '在路上',
            openId: 'oT7f_whuKm7h0zki_8KV-HDsMXvM',
            question_fee: 1000,
            unionid: 'ojxvh0aN2hsvRMfaoECSYPNbzqdk',
          },
          {
            expert_info:
              '注会，税务师，某财大客座教授，某省税校讲师！擅长以商业实质和形式，解决涉税难题！',
            expert_nickName: '专业讲师',
            header_img: '/media/14257b7b2b2f4c3da687a3397fd259e5.png',
            id: 'bcdce421d67447709f8ae996b7915a04',
            last_login_time: 1529916137000,
            nickName: '罗伟',
            openId: 'oT7f_wqoglBpsGBvDwKzg7Z6zgEs',
            question_fee: 5800,
            unionid: 'ojxvh0SDc1z3Gj33uvFOu8EDXhTQ',
          },
          {
            expert_info: '注册会计师，注册税务师，房地产财税知识',
            expert_nickName: '财税工作者',
            header_img: '/media/c757c3b5503d4697a1c1e89987f217a1.png',
            id: 'e4c4a72dbd4e4b66bd2c603ea9f9cff9',
            last_login_time: 1529909154000,
            nickName: '琅琊税客',
            openId: 'oT7f_wp6F20OcFBIPi3dHHvlrKOo',
            question_fee: 3999,
            unionid: 'ojxvh0bEQCbp00LuSlxQ3CqSOtDQ',
          },
          {
            expert_info:
              '所得税科长，从税25年，税收管理经验丰富，注册税务师，熟悉增值税和地方各税业务',
            expert_nickName: '财税工作者',
            header_img: '/media/46ba957196334c5a83bcb828c50526e5.png',
            id: 'fde06c06480e47d9a69189748a24c9d0',
            last_login_time: 1529906927000,
            nickName: '老骥',
            openId: 'oT7f_wtfcMY2IK61Jb3Mecm2MqvU',
            question_fee: 800,
            unionid: 'ojxvh0Xh1jIhq-1l8kOMgwFYxHnU',
          },
          {
            expert_nickName: '专业讲师',
            header_img: '/media/3922dc83c868442e8328aa5714a8394c.png',
            id: 'ae58a7b057854bd0b9f0b1870154204a',
            last_login_time: 1529036118000,
            nickName: '武晓红',
            openId: 'oT7f_wkTFOj7cHA7C5LSKHiNgDoM',
            question_fee: 500,
          },
          {
            expert_info: '硕士,会计师,从业十余年，具有丰富的财税经验。',
            expert_nickName: '财税工作者',
            header_img: '/media/eMNHdbAHeai5QCCYQtCFwwvRFCXR2xI3.jpg',
            id: 'f9d693bcdb3a4981a5415adf24d7e66d',
            last_login_time: 1529918528000,
            nickName: '真趣财税',
            openId: 'oT7f_wnnpUG7gGaqZn2xZVVI1MMs',
            question_fee: 998,
            unionid: 'ojxvh0beSMtdgD3hk4cibWBUIdco',
          },
        ],
        totalCount: 0,
        totalPages: 0,
      },
      status_code: 0,
      status_message: 'ok',
    };
  }
  async isVip() {
    this.ctx.body = {
      service_day: 3,
      status_code: 0,
      status_message: 'ok',
    };
  }
  async vipCard() {
    this.ctx.body = {
      result: [
        {
          card_desc: '平台月卡',
          card_title: '99元/月',
          create_date: 1512540312000,
          default_fee: 9900,
          id: '1',
          is_valid: 'Y',
          valid_day: 30,
          web_image_css: 'card yue',
          web_image_name: 'ask-vip-yue.png',
        },
        {
          card_desc: '平台季卡',
          card_title: '259元/季',
          create_date: 1512540365000,
          default_fee: 25900,
          id: '2',
          is_valid: 'N',
          valid_day: 90,
          web_image_css: 'card ji',
          web_image_name: 'ask-vip-ji.png',
        },
        {
          card_desc: '平台年卡',
          card_title: '599元/年',
          create_date: 1512540429000,
          default_fee: 59900,
          id: '3',
          is_valid: 'N',
          valid_day: 365,
          web_image_css: 'card nian',
          web_image_name: 'ask-vip-nian.png',
        },
      ],
      status_code: 0,
      status_message: 'ok',
    };
  }
  async platformVip() {
    this.ctx.body = {
      status_code: 1,
      status_message: 'ok',
    };
  }
  async exchangeVip() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async professorVip() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async regProfessor() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async setName() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async setInfo() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async setAvator() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async ordSwitch() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async ifOrdOpen() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async professorService() {
    this.ctx.body = {
      status_code: 1,
      status_message: 'nil',
    };
  }
  async setService() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async buyService() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async buyServiceList() {
    this.ctx.body = {
      list: [],
      status_code: 0,
      status_message: 'ok',
    };
  }
  async admire() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'ok',
    };
  }
  async admireList() {
    this.ctx.body = {
      page: {
        autoCount: false,
        first: 1,
        hasNext: false,
        hasPre: false,
        nextPage: 1,
        pageNo: 1,
        pageSize: 10,
        prePage: 1,
        qtime: 0,
        result: [
          {
            createDate: 1491883112000,
            id: 'b64c8442469f4a1f82084f87a2e1b4ba',
            nickName: '代惟 ',
            pay_user: 'daeed62c471547c99b2c363958d9d82a',
            platform_fee: 0,
            question_id: '35fe2f3892d148098f3020b14c5cd282',
            recive_user: 'daeed62c471547c99b2c363958d9d82a',
            total_fee: 1,
            user_fee: 1,
          },
          {
            createDate: 1491882744000,
            id: 'ccfa2430a86946218c4667c61e9147c7',
            nickName: '代惟 ',
            pay_user: 'daeed62c471547c99b2c363958d9d82a',
            platform_fee: 0,
            question_id: '35fe2f3892d148098f3020b14c5cd282',
            recive_user: 'daeed62c471547c99b2c363958d9d82a',
            total_fee: 1,
            user_fee: 1,
          },
          {
            createDate: 1491882712000,
            id: '4b6d9ba09a764689acb5ad51aaff68b9',
            nickName: '代惟 ',
            pay_user: 'daeed62c471547c99b2c363958d9d82a',
            platform_fee: 0,
            question_id: '35fe2f3892d148098f3020b14c5cd282',
            recive_user: 'daeed62c471547c99b2c363958d9d82a',
            total_fee: 1,
            user_fee: 1,
          },
        ],
        totalCount: 0,
        totalPages: 0,
      },
      status_code: 0,
      status_message: 'ok',
    };
  }
  async indexQuestion() {
    this.ctx.body = [
      {
        answer_content:
          '你好，留抵没有期限规定！当期没有抵扣完，可以在下一期继续抵扣。如果企业直到注销都没有抵扣完，可以将未抵扣完的进项税额转入存货成本，在清算所得税时扣除。\n   进项还能抵扣的！',
        answer_date: 1529894104000,
        createDate: 1529893770000,
        create_user: 'b65c34eb9be6485abbdc74885b2df1a1',
        del_flag: 'N',
        holder_expert: 'c9e3c7b2b0324447b2bec5ec515043e2',
        holder_img: '/media/d1aea6e1a3d743d8ad0631209f173e4f.png',
        holder_nickName: '财税工作者 | 税务军团',
        id: '7ad7ca1a684d45a3946d3e6863712d5f',
        question_state: 3,
        question_title:
          '请问，进项税额留抵的时间是多久？ 如：房产公司原自持的商业，取得有进项税，在3年后卖出，进项还能抵扣吗？',
      },{
        answer_content:
          '你好，留抵没有期限规定！当期没有抵扣完，可以在下一期继续抵扣。如果企业直到注销都没有抵扣完，可以将未抵扣完的进项税额转入存货成本，在清算所得税时扣除。\n   进项还能抵扣的！',
        answer_date: 1529894104000,
        createDate: 1529893770000,
        create_user: 'b65c34eb9be6485abbdc74885b2df1a1',
        del_flag: 'N',
        holder_expert: 'c9e3c7b2b0324447b2bec5ec515043e2',
        holder_img: '/media/d1aea6e1a3d743d8ad0631209f173e4f.png',
        holder_nickName: '财税工作者 | 税务军团',
        id: '7ad7ca1a684d45a3946d3e6863712d5f',
        question_state: 3,
        question_title:
          '请问，进项税额留抵的时间是多久？ 如：房产公司原自持的商业，取得有进项税，在3年后卖出，进项还能抵扣吗？',
      },{
        answer_content:
          '你好，留抵没有期限规定！当期没有抵扣完，可以在下一期继续抵扣。如果企业直到注销都没有抵扣完，可以将未抵扣完的进项税额转入存货成本，在清算所得税时扣除。\n   进项还能抵扣的！',
        answer_date: 1529894104000,
        createDate: 1529893770000,
        create_user: 'b65c34eb9be6485abbdc74885b2df1a1',
        del_flag: 'N',
        holder_expert: 'c9e3c7b2b0324447b2bec5ec515043e2',
        holder_img: '/media/d1aea6e1a3d743d8ad0631209f173e4f.png',
        holder_nickName: '财税工作者 | 税务军团',
        id: '7ad7ca1a684d45a3946d3e6863712d5f',
        question_state: 3,
        question_title:
          '请问，进项税额留抵的时间是多久？ 如：房产公司原自持的商业，取得有进项税，在3年后卖出，进项还能抵扣吗？',
      },{
        answer_content:
          '你好，留抵没有期限规定！当期没有抵扣完，可以在下一期继续抵扣。如果企业直到注销都没有抵扣完，可以将未抵扣完的进项税额转入存货成本，在清算所得税时扣除。\n   进项还能抵扣的！',
        answer_date: 1529894104000,
        createDate: 1529893770000,
        create_user: 'b65c34eb9be6485abbdc74885b2df1a1',
        del_flag: 'N',
        holder_expert: 'c9e3c7b2b0324447b2bec5ec515043e2',
        holder_img: '/media/d1aea6e1a3d743d8ad0631209f173e4f.png',
        holder_nickName: '财税工作者 | 税务军团',
        id: '7ad7ca1a684d45a3946d3e6863712d5f',
        question_state: 3,
        question_title:
          '请问，进项税额留抵的时间是多久？ 如：房产公司原自持的商业，取得有进项税，在3年后卖出，进项还能抵扣吗？',
      },{
        answer_content:
          '你好，留抵没有期限规定！当期没有抵扣完，可以在下一期继续抵扣。如果企业直到注销都没有抵扣完，可以将未抵扣完的进项税额转入存货成本，在清算所得税时扣除。\n   进项还能抵扣的！',
        answer_date: 1529894104000,
        createDate: 1529893770000,
        create_user: 'b65c34eb9be6485abbdc74885b2df1a1',
        del_flag: 'N',
        holder_expert: 'c9e3c7b2b0324447b2bec5ec515043e2',
        holder_img: '/media/d1aea6e1a3d743d8ad0631209f173e4f.png',
        holder_nickName: '财税工作者 | 税务军团',
        id: '7ad7ca1a684d45a3946d3e6863712d5f',
        question_state: 3,
        question_title:
          '请问，进项税额留抵的时间是多久？ 如：房产公司原自持的商业，取得有进项税，在3年后卖出，进项还能抵扣吗？',
      },{
        answer_content:
          '你好，留抵没有期限规定！当期没有抵扣完，可以在下一期继续抵扣。如果企业直到注销都没有抵扣完，可以将未抵扣完的进项税额转入存货成本，在清算所得税时扣除。\n   进项还能抵扣的！',
        answer_date: 1529894104000,
        createDate: 1529893770000,
        create_user: 'b65c34eb9be6485abbdc74885b2df1a1',
        del_flag: 'N',
        holder_expert: 'c9e3c7b2b0324447b2bec5ec515043e2',
        holder_img: '/media/d1aea6e1a3d743d8ad0631209f173e4f.png',
        holder_nickName: '财税工作者 | 税务军团',
        id: '7ad7ca1a684d45a3946d3e6863712d5f',
        question_state: 3,
        question_title:
          '请问，进项税额留抵的时间是多久？ 如：房产公司原自持的商业，取得有进项税，在3年后卖出，进项还能抵扣吗？',
      },{
        answer_content:
          '你好，留抵没有期限规定！当期没有抵扣完，可以在下一期继续抵扣。如果企业直到注销都没有抵扣完，可以将未抵扣完的进项税额转入存货成本，在清算所得税时扣除。\n   进项还能抵扣的！',
        answer_date: 1529894104000,
        createDate: 1529893770000,
        create_user: 'b65c34eb9be6485abbdc74885b2df1a1',
        del_flag: 'N',
        holder_expert: 'c9e3c7b2b0324447b2bec5ec515043e2',
        holder_img: '/media/d1aea6e1a3d743d8ad0631209f173e4f.png',
        holder_nickName: '财税工作者 | 税务军团',
        id: '7ad7ca1a684d45a3946d3e6863712d5f',
        question_state: 3,
        question_title:
          '请问，进项税额留抵的时间是多久？ 如：房产公司原自持的商业，取得有进项税，在3年后卖出，进项还能抵扣吗？',
      },{
        answer_content:
          '你好，留抵没有期限规定！当期没有抵扣完，可以在下一期继续抵扣。如果企业直到注销都没有抵扣完，可以将未抵扣完的进项税额转入存货成本，在清算所得税时扣除。\n   进项还能抵扣的！',
        answer_date: 1529894104000,
        createDate: 1529893770000,
        create_user: 'b65c34eb9be6485abbdc74885b2df1a1',
        del_flag: 'N',
        holder_expert: 'c9e3c7b2b0324447b2bec5ec515043e2',
        holder_img: '/media/d1aea6e1a3d743d8ad0631209f173e4f.png',
        holder_nickName: '财税工作者 | 税务军团',
        id: '7ad7ca1a684d45a3946d3e6863712d5f',
        question_state: 3,
        question_title:
          '请问，进项税额留抵的时间是多久？ 如：房产公司原自持的商业，取得有进项税，在3年后卖出，进项还能抵扣吗？',
      },
      {
        answer_content:
          '《财政部 税务总局关于延续小微企业增值税政策的通知》（财税〔2017〕76号）规定，自2018年1月1日至2020年12月31日，继续对月销售额2万元（含本数）至3万元的增值税小规模纳税人，免征增值税。但是还要注意，如果开具了增值税专用发票（代开或者部分试点行业小规模纳税人自行开具），这部分销售额不计入免税销售额，应当按适用税率计算缴纳增值税。',
        answer_date: 1529852170000,
        createDate: 1529851851000,
        create_user: '0768b6da06de449882ca6981cba0c329',
        del_flag: 'N',
        holder_expert: '4f967dfeba804604b961d7a39ca6cf8e',
        holder_img: '/media/K0lz1NRWbeaYi6rYFBqALs53jaMR6uEt.jpg',
        holder_nickName: '财税工作者 | 峯哥',
        id: 'f5d69ef813b749e6927495e070e274e2',
        question_state: 3,
        question_title:
          '问一下，小规模纳税人是不是，一季度开具发票不超九万，就不用出税',
      },
      {
        answer_content:
          '取得发票，企业购卡后未使用的，不得进行税前扣除；购卡后使用的，在使用时相应结转成本、费用进行税前扣除。',
        answer_date: 1529742530000,
        createDate: 1529741357000,
        create_user: 'daeed62c471547c99b2c363958d9d82a',
        del_flag: 'N',
        holder_expert: '50506429b2054ae8add33712e4fe5ac3',
        holder_img: '/media/6d45d29ce3734426a34e5edf12e1814f.png',
        holder_nickName: '财税公益人 | geniuschow',
        id: '624ad3bb772048d0bf9acba02163ccf7',
        question_state: 3,
        question_title:
          '企业购入超市、加油站等预付卡，取得了销售方开具的增值税普通发票，发票内容为预付卡销售和充值。该项支出能否在企业所得税税前扣除？',
      },
    ];
  }
  async indexProfessor() {
    this.ctx.body = {
      result: [
        {
          expert_nickName: '财税公益人',
          header_img: '/media/d65d547ba9504d5f9d54c9fdab3342d1.png',
          id: '43883b49d0f34c9bb4bf3ee42504795f',
          last_login_time: 1524205891000,
          nickName: '小桶桶',
          openId: 'oT7f_wsLt34cRca9svqD6Tfh_B4g',
          question_fee: 100,
        },
        {
          expert_info:
            '注会，税务师，某财大客座教授，某省税校讲师！擅长以商业实质和形式，解决涉税难题！',
          expert_nickName: '专业讲师',
          header_img: '/media/14257b7b2b2f4c3da687a3397fd259e5.png',
          id: 'bcdce421d67447709f8ae996b7915a04',
          last_login_time: 1529916137000,
          nickName: '罗伟',
          openId: 'oT7f_wqoglBpsGBvDwKzg7Z6zgEs',
          question_fee: 5800,
        },
        {
          expert_info:
            '学习税收专业7年，从业5年。善于从企业角度出发，融合企业实际情况解决税务问题。',
          expert_nickName: '知名专家',
          header_img: '/media/cCHhWyBBSpEqdbm9dfsG3qs9Hj6z7Aij.jpg',
          id: '3cb765eac12a4ac59c4f1850c386243b',
          last_login_time: 1523862937000,
          nickName: '华鑫',
          openId: 'oT7f_wjXKbTpGWMfNU9lw5DL-2FA',
          question_fee: 2980,
        },
      ],
      status_code: 0,
      status_message: 'ok',
    };
  }
  async indexProfessorList() {
    this.ctx.body = {
      "page":{
        "autoCount":false,
        "first":1,
        "hasNext":false,
        "hasPre":false,
        "nextPage":1,
        "pageNo":1,
        "pageSize":10,
        "prePage":1,
        "qtime":0,
        "result":[
          {
            "answer_count":1255,
            "expert_info":"从税20年，法律职业资格，实战经验丰富，出版财税书籍3本，发表文章200余篇。",
            "expert_nickName":"财税工作者",
            "header_img":"/media/dKlLhATYnE8n5oGnNn70kv66T6I3cv6X.jpg",
            "id":"0a34c902fdac4a9992291aab0f89e0ab",
            "last_login_time":1531108442000,
            "nickName":"牛戈",
            "openId":"oT7f_wvRMPIEcp7C3FnXk-QlZCSs",
            "question_fee":2800
          },
          {
            "answer_count":816,
            "expert_info":"注册会计师、注册税务师，从业二十年，与您交流财税问题。",
            "expert_nickName":"财税工作者",
            "header_img":"/media/1ZNwArBAFUFX0OsoUpYYbTb0Muimix5k.jpg",
            "id":"7bd7baabd1d541278ba5986bb3eb3b6b",
            "last_login_time":1531102870000,
            "nickName":"小强老师",
            "openId":"oT7f_wiL0M-031edw-snvh3--2mA",
            "question_fee":3000
          },
          {
            "answer_count":712,
            "expert_info":"税务师、会计师、审计师、讲师。细解税法，巧节税负，财税问题解决方案提供者。",
            "expert_nickName":"财税公益人",
            "header_img":"/media/uUqFRKQsVGUsFTiTE5E6RR9ni5J9Wmus.jpg",
            "id":"d9939d216d5e4843bde65c3c94e18246",
            "last_login_time":1531201362000,
            "nickName":"疯狂税客（税务师会计师审计师）",
            "openId":"oT7f_wiVSfaVemw0vMHfwBLH6oMo",
            "question_fee":888
          },
          {
            "answer_count":592,
            "expert_info":"高级会计师、注册税务师、经济师，从事财税工作近二十年，愿与您一起探讨财税问题。",
            "expert_nickName":"财税工作者",
            "header_img":"/media/fc4643481b7249ad855fe659a21b531b.png",
            "id":"d31445cdd0b0478a959d8ac7e36cf90d",
            "last_login_time":1531132358000,
            "nickName":"福宝",
            "openId":"oT7f_wglwlg2_J-1hxthdSQM4QC0",
            "question_fee":1666
          },
          {
            "answer_count":545,
            "expert_info":"CPA、CTA，曾任某集团公司CFO，精通企业战略、风控内审、财会税收等综合管控",
            "expert_nickName":"财税工作者",
            "header_img":"/media/oCY4PEtEDjUWQjsuNZm14EQE53cNTxlE.jpg",
            "id":"be7d6501359f4cf88d953eb35ce9c881",
            "last_login_time":1531198284000,
            "nickName":"杨晓东",
            "openId":"oT7f_wkpTXBFZdnK3hk7cKZ8tdmI",
            "question_fee":999
          },
          {
            "answer_count":511,
            "expert_info":"注册会计师，税务师，从业10年。有上市公司税务经理、房地产公司财务经理等相关经验",
            "expert_nickName":"财税工作者",
            "header_img":"/media/5a6c690f25c0418b9727057d1dd65ab6.png",
            "id":"e04e070c8dd0496da2873b2915b8b650",
            "last_login_time":1531196205000,
            "nickName":"管管",
            "openId":"oT7f_wi_hc3pc5VC9mLQTV1ZuSqg",
            "question_fee":1000
          },
          {
            "answer_count":487,
            "expert_info":"省局稽查能手，营改增专家组，中国税务报、中国税务杂志、中国财政等发表100余篇。",
            "expert_nickName":"财税公益人",
            "header_img":"/media/LajsrhN5cNw8tGJLfZknemjYfCZt2n3y.jpg",
            "id":"cdcb45289d9d452e9d34e5487d5141c9",
            "last_login_time":1531191658000,
            "nickName":"思考财税",
            "openId":"oT7f_wg83w89GG-tNqs0JlPNvXPg",
            "question_fee":1000
          },
          {
            "answer_count":458,
            "expert_info":"注册会计师",
            "expert_nickName":"财税工作者",
            "header_img":"/media/edd1826c744b4a048993817e55b7f7b2.png",
            "id":"7b04a92282ac481ebde7b991f67a86a2",
            "last_login_time":1531121238000,
            "nickName":"斑",
            "openId":"oT7f_wr0HS6bpSIagRCNA63adJMU",
            "question_fee":100
          },
          {
            "answer_count":403,
            "expert_info":"税务师，会计师，从事财税工作25年。财税实务问题解答、涉税风险防控。",
            "expert_nickName":"财税工作者",
            "header_img":"/media/mxmLHAeMdiYV0XQmxNFsaVsmq9wB3kW3.jpg",
            "id":"2b6aa368407840b2911311cacb55a234",
            "last_login_time":1531190772000,
            "nickName":"秦老师| 和悦咨询",
            "openId":"oT7f_wkQ3haGbHoX36vc2vvXX-2E",
            "question_fee":1989
          },
          {
            "answer_count":395,
            "expert_info":"注册会计师、注册税务师、律师，有20年基层税务工作经验。",
            "expert_nickName":"财税工作者",
            "header_img":"/media/6222b95a72b1480a8bcf1a70007acb19.png",
            "id":"8339136d7c6a4c41b6d63d1e068c95be",
            "last_login_time":1531195569000,
            "nickName":"张亮",
            "openId":"oT7f_wvT8tgOEDLslf9omLCW_uSc",
            "question_fee":990
          }
        ],
        "totalCount":0,
        "totalPages":0
      },
      "status_code":0,
      "status_message":"ok"
    }
  }
  async search() {
    this.ctx.body = {
      autoCount: false,
      first: 1,
      hasNext: true,
      hasPre: false,
      nextPage: 2,
      pageNo: 1,
      pageSize: 10,
      prePage: 1,
      qtime: 0,
      result: [
        {
          id: '1f12dca3f0ce4a0aa49821a9a6a336d0',
          question_state: 3,
          ask_user_img: '/default/icons/default_user.png',
          answer_user: '真趣财税|财税工作者',
          answer_content: '他们一般有发票领取的网址或者链接',
          answer_user_img: '/media/eMNHdbAHeai5QCCYQtCFwwvRFCXR2xI3.jpg',
          ask_user: 'DX_97791',
          answer_user_not_analyzerd: '真趣财税|财税工作者',
          answer_date: '2018-01-03 12:46:23',
          audio_path: '',
          question_title:
            '你好，卖家<em>发</em>的电子<em>发</em><em>票</em>，知道<em>发</em><em>票</em>代码和<em>发</em><em>票</em>号码，怎么领取呀 ？ ',
          create_date: '2018-01-03 12:41:12',
          question_id: '1f12dca3f0ce4a0aa49821a9a6a336d0',
        },
        {
          id: '6902a2994a86478a90fc6e6a7ca0b843',
          question_state: 3,
          ask_user_img: '/default/icons/default_user.png',
          answer_user: '真趣财税|财税工作者',
          answer_content: '直接开具红字',
          answer_user_img: '/media/eMNHdbAHeai5QCCYQtCFwwvRFCXR2xI3.jpg',
          ask_user: '财税大法',
          answer_user_not_analyzerd: '真趣财税|财税工作者',
          answer_date: '2017-12-27 10:51:57',
          audio_path: '',
          question_title:
            '该作废的<em>发</em><em>票</em>没作废，将不该作废的<em>发</em><em>票</em>作废了，次月需开红字<em>发</em><em>票</em>，开红字<em>发</em><em>票</em>需哪些手续 ? ',
          create_date: '2017-12-27 09:42:35',
          question_id: '6902a2994a86478a90fc6e6a7ca0b843',
        },
        {
          id: '7d6fa427fc124b6f80f4ca6eef646c5f',
          question_state: 3,
          ask_user_img: '/default/icons/default_user.png',
          answer_user: '税牛网-谭任辉13870685582|知名专家',
          answer_content: '电子普通发票可以打印，其他发票只能查到发票信息',
          answer_user_img: '/media/e8aaac5052a4492dba859de50594affd.png',
          ask_user: 'DX_15711',
          answer_user_not_analyzerd: '税牛网-谭任辉13870685582|知名专家',
          answer_date: '2018-04-11 21:12:26',
          audio_path: '',
          question_title:
            '我知道<em>发</em><em>票</em>代码和<em>发</em><em>票</em>号码，可以查到这张<em>发</em><em>票</em>自己打印么',
          create_date: '2018-04-11 21:05:34',
          question_id: '7d6fa427fc124b6f80f4ca6eef646c5f',
        },
        {
          id: 'c5edb3e2168c44a1b5cda13501348feb',
          question_state: 3,
          ask_user_img: '/default/icons/default_user.png',
          answer_user: '财税通|财税工作者',
          answer_content:
            '一般都能查到，有几种可能，一是真票假开，当然查不到，另外就有可能开户单位的原因还没有上传到国税系统。建议联系开票单位和税务12366热线。',
          answer_user_img: '/media/2nSqLRR0XOmXbdYp048MWkifKZbZykoo.jpg',
          ask_user: 'DX_63190',
          answer_user_not_analyzerd: '财税通|财税工作者',
          answer_date: '2018-02-06 07:07:28',
          audio_path: '',
          question_title:
            '给我<em>发</em>了<em>发</em><em>票</em>代码证和<em>发</em><em>票</em>号码，还有日期，开<em>票</em>金额，可是为什么我进入网址去查不到<em>发</em><em>票</em>',
          create_date: '2018-02-05 23:41:57',
          question_id: 'c5edb3e2168c44a1b5cda13501348feb',
        },
        {
          id: 'da7a1abf7dc444e4944de1684a69f07a',
          question_state: 3,
          ask_user_img: '/default/icons/default_user.png',
          answer_user: '留痕|财税公益人',
          answer_content: '普通发票也可以按规定开红字发发票。',
          answer_user_img: '/media/BNsVFVhLJOcf34gDRNY0hlmaEfZCQ8Cy.jpg',
          ask_user: 'ETAX_29099',
          answer_user_not_analyzerd: '留痕|财税公益人',
          answer_date: '2018-01-04 13:31:36',
          audio_path: '',
          question_title:
            '不是代开的普通<em>发</em><em>票</em>，跨年已经申报缴税了 。 客户退回<em>发</em><em>票</em>，开<em>票</em>系统有个 ‘ 红字增值税专用<em>发</em><em>票</em>信息表 ’  。 没有普通<em>发</em><em>票</em>种类，能开红字<em>发</em><em>票</em> ？ ',
          create_date: '2018-01-04 12:30:10',
          question_id: 'da7a1abf7dc444e4944de1684a69f07a',
        },
        {
          id: '4a59350b7f664568aed303960e81a13f',
          question_state: 3,
          ask_user_img: '/default/icons/default_user.png',
          answer_user: '乔|财税工作者',
          answer_content:
            '查验发票真伪需提供以下内容：发票代码，发票号码，开票日期，开票金额（不含税）<br/>查询时间：在开票日期的第二天才能查验真伪',
          answer_user_img: '/media/95c57c3eac2b4d4b92bc076c199a501e.png',
          ask_user: 'ETAX_84947',
          answer_user_not_analyzerd: '乔|财税工作者',
          answer_date: '2018-01-10 15:38:59',
          audio_path: '',
          question_title:
            '请问，<em>发</em><em>票</em>代码3200173320，<em>发</em><em>票</em>号码16762574，这张<em>发</em><em>票</em>是不是真的 ？ ',
          create_date: '2018-01-10 15:26:41',
          question_id: '4a59350b7f664568aed303960e81a13f',
        },
        {
          id: '5ef1aab882fe407697b387cddda23a8d',
          question_state: 3,
          ask_user_img: '/default/icons/default_user.png',
          answer_user: '留痕|财税公益人',
          answer_content:
            '增值税发票包括增值税普通发票和增值税专用发票。你问的问题涉及的发票名称，是互相包含关系。',
          answer_user_img: '/media/BNsVFVhLJOcf34gDRNY0hlmaEfZCQ8Cy.jpg',
          ask_user: 'DX_20230',
          answer_user_not_analyzerd: '留痕|财税公益人',
          answer_date: '2018-02-22 19:19:31',
          audio_path: '',
          question_title:
            '请问二手车经销商开服务类<em>发</em><em>票</em>是开普通<em>发</em><em>票</em>还是增值税<em>发</em><em>票</em>\n',
          create_date: '2018-02-22 18:54:34',
          question_id: '5ef1aab882fe407697b387cddda23a8d',
        },
        {
          id: 'e0f2e60ea54c43d0b7f75f563b22f43b',
          question_state: 3,
          ask_user_img: '/default/icons/default_user.png',
          answer_user: '事了拂衣去|财税公益人',
          answer_content:
            '有啊，不过各地税务局具体政策不一样，建议拨打当地12366咨询',
          answer_user_img: '/media/vEQO3gy5q686RXbAnU1qkHlyN7XrVfPQ.jpg',
          ask_user: 'ETAX_43362',
          answer_user_not_analyzerd: '事了拂衣去|财税公益人',
          answer_date: '2017-11-28 07:17:25',
          audio_path: '',
          question_title:
            '餐饮<em>发</em><em>票</em>现在还有定额<em>发</em><em>票</em>吗 ？ ',
          create_date: '2017-11-28 06:01:14',
          question_id: 'e0f2e60ea54c43d0b7f75f563b22f43b',
        },
        {
          id: '92b08991231e49e8aae4f71c80ede945',
          question_state: 3,
          ask_user_img: '/default/icons/default_user.png',
          answer_user: '真趣财税|财税工作者',
          answer_content: '可能收到假发票，建议退回。',
          answer_user_img: '/media/eMNHdbAHeai5QCCYQtCFwwvRFCXR2xI3.jpg',
          ask_user: 'DX_73191',
          answer_user_not_analyzerd: '真趣财税|财税工作者',
          answer_date: '2017-10-27 07:04:52',
          audio_path: '',
          question_title:
            '<em>发</em><em>票</em>给电子<em>发</em><em>票</em>编号不一样，',
          create_date: '2017-10-27 05:55:48',
          question_id: '92b08991231e49e8aae4f71c80ede945',
        },
        {
          id: 'a45911c6b04c44e691719c19e0d19b6b',
          question_state: 3,
          ask_user_img: '/default/icons/default_user.png',
          answer_user: 'geniuschow|财税公益人',
          answer_content:
            '增值税专用发票是我国为了推行新的增值税制度而使用的新型发票，与日常经营过程中所使用的普通发票相比，有如下区别：<br/><br/>1．发票的印制要求不同：根据新的《税收征管法》第二十二条规定：增值税专用发票由国务院税务主管部门指定的企业印制；其他发票，按照国务院主管部门的规定，分别由省、自治区、直辖市国家税务局、地方税务局指定企业印制。未经前款规定的税务机关指定，不得印制发票。<br/>2．发票使用的主体不同：增值税专用发票一般只能由增值税一般纳税人领购使用，小规模纳税人需要使用的，只能经税务机关批准后由当地的税务机关代开；普通发票则可以由从事经营活动并办理了税务登记的各种纳税人领购使用，未办理税务登记的纳税人也可以向税务机关申请领购使用普通发票。<br/>3．发票的内容不同：增值税专用发票除了具备购买单位、销售单位、商品或者服务的名称、商品或者劳务的数量和计量单位、单价和价款、开票单位、收款人、开票日期等普通发票所具备的内容外，还包括纳税人税务登记号、不含增值税金额、适用税率、应纳增值税额等内容。<br/>4．发票的联次不同：增值税专用发票有四个联次和七个联次两种，第一联为存根联（用于留存备查），第二联为发票联（用于购买方记账），第三联为抵扣联（用作购买方扣税凭证），第四联为记账联（用于销售方记账），七联次的其他三联为备用联，分别作为企业出门证、检查和仓库留存用；普通发票则只有三联，第一联为存根联，第二联为发票联，第三联为记账联。<br/>5．发票的作用不同：增值税专用发票不仅是购销双方收付款的凭证，而且可以用作购买方扣除增值税的凭证；而普通发票除收购农副产品等少部分发票作抵扣外，其他的一律不予作抵扣用。',
          answer_user_img: '/media/6d45d29ce3734426a34e5edf12e1814f.png',
          ask_user: 'DX_84748',
          answer_user_not_analyzerd: 'geniuschow|财税公益人',
          answer_date: '2017-09-07 15:13:59',
          audio_path: '',
          question_title:
            '普通<em>发</em><em>票</em>和增值税<em>发</em><em>票</em>区别是什么',
          create_date: '2017-09-07 14:49:25',
          question_id: 'a45911c6b04c44e691719c19e0d19b6b',
        },
      ],
      totalCount: 5905,
      totalPages: 591,
    };
  }
  async searchProfessor(){
    this.ctx.body={
      "page":{
        "autoCount":false,
        "first":1,
        "hasNext":false,
        "hasPre":false,
        "nextPage":1,
        "pageNo":1,
        "pageSize":10,
        "prePage":1,
        "qtime":0,
        "result":[
          {
            "answer_count":1256,
            "expert_info":"从税20年，法律职业资格，实战经验丰富，出版财税书籍3本，发表文章200余篇。",
            "expert_nickName":"财税工作者",
            "header_img":"/media/dKlLhATYnE8n5oGnNn70kv66T6I3cv6X.jpg",
            "id":"0a34c902fdac4a9992291aab0f89e0ab",
            "last_login_time":1531204560000,
            "nickName":"牛戈",
            "openId":"oT7f_wvRMPIEcp7C3FnXk-QlZCSs",
            "question_fee":2800
          },
          {
            "answer_count":816,
            "expert_info":"注册会计师、注册税务师，从业二十年，与您交流财税问题。",
            "expert_nickName":"财税工作者",
            "header_img":"/media/1ZNwArBAFUFX0OsoUpYYbTb0Muimix5k.jpg",
            "id":"7bd7baabd1d541278ba5986bb3eb3b6b",
            "last_login_time":1531102870000,
            "nickName":"小强老师",
            "openId":"oT7f_wiL0M-031edw-snvh3--2mA",
            "question_fee":3000
          },
          {
            "answer_count":711,
            "expert_info":"税务师、会计师、审计师、讲师。细解税法，巧节税负，财税问题解决方案提供者。",
            "expert_nickName":"财税公益人",
            "header_img":"/media/uUqFRKQsVGUsFTiTE5E6RR9ni5J9Wmus.jpg",
            "id":"d9939d216d5e4843bde65c3c94e18246",
            "last_login_time":1531201362000,
            "nickName":"疯狂税客（税务师会计师审计师）",
            "openId":"oT7f_wiVSfaVemw0vMHfwBLH6oMo",
            "question_fee":888
          },
          {
            "answer_count":592,
            "expert_info":"高级会计师、注册税务师、经济师，从事财税工作近二十年，愿与您一起探讨财税问题。",
            "expert_nickName":"财税工作者",
            "header_img":"/media/fc4643481b7249ad855fe659a21b531b.png",
            "id":"d31445cdd0b0478a959d8ac7e36cf90d",
            "last_login_time":1531132358000,
            "nickName":"福宝",
            "openId":"oT7f_wglwlg2_J-1hxthdSQM4QC0",
            "question_fee":1666
          },
          {
            "answer_count":546,
            "expert_info":"CPA、CTA，曾任某集团公司CFO，精通企业战略、风控内审、财会税收等综合管控",
            "expert_nickName":"财税工作者",
            "header_img":"/media/oCY4PEtEDjUWQjsuNZm14EQE53cNTxlE.jpg",
            "id":"be7d6501359f4cf88d953eb35ce9c881",
            "last_login_time":1531205608000,
            "nickName":"杨晓东",
            "openId":"oT7f_wkpTXBFZdnK3hk7cKZ8tdmI",
            "question_fee":999
          },
          {
            "answer_count":511,
            "expert_info":"注册会计师，税务师，从业10年。有上市公司税务经理、房地产公司财务经理等相关经验",
            "expert_nickName":"财税工作者",
            "header_img":"/media/5a6c690f25c0418b9727057d1dd65ab6.png",
            "id":"e04e070c8dd0496da2873b2915b8b650",
            "last_login_time":1531196205000,
            "nickName":"管管",
            "openId":"oT7f_wi_hc3pc5VC9mLQTV1ZuSqg",
            "question_fee":1000
          },
          {
            "answer_count":487,
            "expert_info":"省局稽查能手，营改增专家组，中国税务报、中国税务杂志、中国财政等发表100余篇。",
            "expert_nickName":"财税公益人",
            "header_img":"/media/LajsrhN5cNw8tGJLfZknemjYfCZt2n3y.jpg",
            "id":"cdcb45289d9d452e9d34e5487d5141c9",
            "last_login_time":1531191658000,
            "nickName":"思考财税",
            "openId":"oT7f_wg83w89GG-tNqs0JlPNvXPg",
            "question_fee":1000
          },
          {
            "answer_count":458,
            "expert_info":"注册会计师",
            "expert_nickName":"财税工作者",
            "header_img":"/media/edd1826c744b4a048993817e55b7f7b2.png",
            "id":"7b04a92282ac481ebde7b991f67a86a2",
            "last_login_time":1531121238000,
            "nickName":"斑",
            "openId":"oT7f_wr0HS6bpSIagRCNA63adJMU",
            "question_fee":100
          },
          {
            "answer_count":403,
            "expert_info":"税务师，会计师，从事财税工作25年。财税实务问题解答、涉税风险防控。",
            "expert_nickName":"财税工作者",
            "header_img":"/media/mxmLHAeMdiYV0XQmxNFsaVsmq9wB3kW3.jpg",
            "id":"2b6aa368407840b2911311cacb55a234",
            "last_login_time":1531205992000,
            "nickName":"秦老师| 和悦咨询",
            "openId":"oT7f_wkQ3haGbHoX36vc2vvXX-2E",
            "question_fee":1989
          },
          {
            "answer_count":395,
            "expert_info":"注册会计师、注册税务师、律师，有20年基层税务工作经验。",
            "expert_nickName":"财税工作者",
            "header_img":"/media/6222b95a72b1480a8bcf1a70007acb19.png",
            "id":"8339136d7c6a4c41b6d63d1e068c95be",
            "last_login_time":1531206313000,
            "nickName":"张亮",
            "openId":"oT7f_wvT8tgOEDLslf9omLCW_uSc",
            "question_fee":990
          }
        ],
        "totalCount":0,
        "totalPages":0
      },
      "status_code":0,
      "status_message":"ok"
    }
  }
  async questionDetail() {
    this.ctx.body = {
      allow_reask: 1,
      answer_user: {
        createDate: 1479429357000,
        del_flag: 'N',
        expert_info:
          '从税20年，法律职业资格，实战经验丰富，出版财税书籍3本，发表文章200余篇。',
        expert_nickName: '财税工作者',
        fee_type: 'CNY',
        header_img: '/media/dKlLhATYnE8n5oGnNn70kv66T6I3cv6X.jpg',
        id: '0a34c902fdac4a9992291aab0f89e0ab',
        is_expert: 1,
        last_login_time: 1531102293000,
        nickName: '牛戈',
        openId: 'oT7f_wvRMPIEcp7C3FnXk-QlZCSs',
        question_fee: 2800,
        sex: 0,
        source: 'WEIXIN',
        unionid: 'ojxvh0RkPmaEpsfdTYnGIxsDt3tU',
      },
      create_user: {
        createDate: 1526255368000,
        del_flag: 'N',
        header_img: '/media/db4cd5974a3f4ff4a07e9ef75e5440cb.png',
        id: '1c2969a9351044b7b2412db82c388550',
        is_expert: 0,
        last_login_time: 1531105424000,
        nickName: 'liwanqi',
        openId: 'oT7f_wntunYA_2PSvSavTF_U2w7I',
        sex: 1,
        source: 'WEIXIN',
        unionid: 'ojxvh0f8U0lDyuOxuiKsn9-B3Fns',
      },
      images: [],
      marks: [
        {
          answerDate: 1531104960000,
          audio_name: '',
          complate: 'Y',
          createDate: 1530678109000,
          createUser: '1c2969a9351044b7b2412db82c388550',
          del_flag: 'N',
          holder_expert: '0a34c902fdac4a9992291aab0f89e0ab',
          id: 'cefb554752464172aebb105c3fca3acf',
          mark_answer:
            '属于现代服务业，适用6%税率。<div>建议参考《<b style="font-family: 宋体; font-size: 15pt; letter-spacing: 0.3pt; text-align: center;">营业税改征增值税试点实施办法</b><span style="font-size: 16pt; font-family: 仿宋_GB2312; color: black; letter-spacing: 0.3pt;">》</span>销售服务、无形资产、不动产注释：<p><span style="font-size: 16pt; font-family: 仿宋_GB2312; color: black; letter-spacing: 0.3pt;">现代服务</span>&nbsp;——商务辅助服务——企业管理服务——物业管理</p></div>',
          mark_question:
            '牛老师，主要是办公楼的维保，包括玻璃清洁，外墙清洗，请问是适用“其他现代服务”，还是什么税目，谢谢！',
          question_id: '4cc22f7c84fa4bd398242132297818e1',
        },
      ],
      order: {
        create_user: '1c2969a9351044b7b2412db82c388550',
        dis_createDate: 1530676980020,
        dis_holder_expert:
          '1984541cb35c43e5be40d9195ab8aa24,f640651e46f344478ce1189dbfd71db0,0a34c902fdac4a9992291aab0f89e0ab',
        dis_type: 1,
        h_createDate: 1530677560930,
        holder_expert: '0a34c902fdac4a9992291aab0f89e0ab',
        is_assign: 'N',
        is_public: 'Y',
        question_state: 3,
      },
      question: {
        answer_content: '是汽车维保吗？\n车辆的话属于修理修配劳务，适用16%税率',
        answer_date: 1530677663000,
        createDate: 1530676895000,
        create_user: '1c2969a9351044b7b2412db82c388550',
        del_flag: 'N',
        id: '4cc22f7c84fa4bd398242132297818e1',
        question_title:
          '请问，提供维保服务（日常维护、保养、保洁、紧急救援），适用的税目、税率，谢谢！',
      },
    };
  }
  async ifCollect() {
    this.ctx.body = {
      status_code: 1,
      status_message: 'nil',
    };
  }
  async collect() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async assess() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async askFee() {
    this.ctx.body = {
      ask_fee: '300',
      status_code: 0,
      status_message: 'ok',
    };
  }
  async ask() {
    const dataBuffer = new Buffer(this.ctx.request.body.image, 'base64');
    fs.writeFile('image.png', dataBuffer, function(err) {});
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async askProfessor() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async answer() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async reask() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async answerReask() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async payReask() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async ordList() {
    this.ctx.body = {
      page: {
        autoCount: false,
        first: 1,
        hasNext: false,
        hasPre: false,
        nextPage: 1,
        pageNo: 1,
        pageSize: 10,
        prePage: 1,
        qtime: 0,
        result: [],
        totalCount: 0,
        totalPages: 0,
      },
      status_code: 0,
      status_message: 'ok',
    };
  }
  async ordAccept() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async ordRefuse() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async ordCancel() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async reply() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async replyMark() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async sendCode() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async bindPhone() {
    this.ctx.body = {
      status_code: 0,
      status_message: 'nil',
    };
  }
  async myOrd() {
    this.ctx.body = {
      page: {
        autoCount: false,
        first: 1,
        hasNext: false,
        hasPre: false,
        nextPage: 1,
        pageNo: 1,
        pageSize: 10,
        prePage: 1,
        qtime: 0,
        result: [
          {
            answer_content: '回复',
            answer_date: 1529741709000,
            createDate: 1529741695000,
            create_user: '658d7a4b63f3487ab7a54333e7561117',
            del_flag: 'N',
            dis_type: 0,
            h_createDate: 1529741694567,
            id: 'a42307ae47ab4fb5b49e32b2c0c91902',
            is_assign: 'Y',
            question_state: 3,
            question_title: '提问',
            required_mark_answer: 0,
          },
          {
            answer_content:
              '<p>根据《国家税务总局关于在境外提供建筑服务等有关问题的公告》（国家税务总局公告2016年第69号）规定：</p><h5>十、全面开展住宿业小规模纳税人自行开具增值税专用发票试点。月销售额超过3万元(或季销售额超过9万元)的住宿业小规模纳税人提供住宿服务、销售货物或发生其他应税行为，需要开具增值税专用发票的，可以通过增值税发票管理新系统自行开具，主管国税机关不再为其代开。<br/>住宿业小规模纳税人销售其取得的不动产，需要开具增值税专用发票的，仍须向地税机关申请代开。<br/><u>因此，月销售额超过3万元(或季销售额超过9万元)的住宿业小规模纳税人提供住宿服务、销售货物或发生其他应税行为，需要开具增值税专用发票的，可以通过增值税发票管理新系统自行开具，主管国税机关不再为其代开。</u></h5>',
            answer_date: 1528250460000,
            audio_name: '3d21a18c143242a891ec7b1f56e6b3ae.mp3',
            createDate: 1504164126000,
            create_user: '0e42dba8cfc3479b9a393e855beb43ec',
            del_flag: 'N',
            dis_type: 0,
            h_createDate: 1504164126857,
            id: '5fd20fcf3e4e48d086760bf81e0f5d07',
            is_assign: 'Y',
            question_state: 1,
            question_title: '住宿业小规模纳税人可以自行开具增值税专用发票吗？',
            required_mark_answer: 0,
          },
          {
            answer_content:
              '<p>根据《国家税务总局关于进一步明确营改增有关征管问题的公告》（国家税务总局公告2017年第11号）规定，纳税人在同一地级行政区范围内跨县(市、区)提供建筑服务，不适用《纳税人跨县(市、区)提供建筑服务增值税征收管理暂行办法》(国家税务总局公告2016年第17号印发)。</p>',
            answer_date: 1504163848000,
            audio_name: '',
            createDate: 1504162142000,
            create_user: '0e42dba8cfc3479b9a393e855beb43ec',
            del_flag: 'N',
            dis_type: 0,
            h_createDate: 1504162142636,
            id: '5c2914de4e664833bd774e8cce2e9f0a',
            is_assign: 'Y',
            question_state: 3,
            question_title:
              '在郑州市跨区提供建筑服务需要在建筑服务发生地预缴税款吗？',
            required_mark_answer: 0,
          },
          {
            answer_content:
              '<p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测</p>',
            answer_date: 1520479926000,
            audio_name: '',
            createDate: 1504078323000,
            create_user: '658d7a4b63f3487ab7a54333e7561117',
            del_flag: 'N',
            dis_type: 0,
            h_createDate: 1504078323749,
            id: '997ba90a3d8b4ce3bfa90c4cedb0be9f',
            is_assign: 'Y',
            question_state: 3,
            question_title: '请问购买2手房需要交什么税啊',
            required_mark_answer: 0,
          },
        ],
        totalCount: 0,
        totalPages: 0,
      },
      status_code: 0,
      status_message: 'ok',
    };
  }
  async followList() {
    this.ctx.body = {
      page: {
        autoCount: false,
        first: 1,
        hasNext: false,
        hasPre: false,
        nextPage: 1,
        pageNo: 1,
        pageSize: 10,
        prePage: 1,
        qtime: 0,
        result: [
          {
            expert_info:
              '高级会计师、注册税务师、经济师，从事财税工作近二十年，愿与您一起探讨财税问题。',
            expert_nickName: '财税工作者',
            header_img: '/media/fc4643481b7249ad855fe659a21b531b.png',
            id: 'd31445cdd0b0478a959d8ac7e36cf90d',
            last_login_time: 1529749281000,
            nickName: '福宝',
            openId: 'oT7f_wglwlg2_J-1hxthdSQM4QC0',
            question_fee: 1666,
            unionid: 'ojxvh0T-sdXOytzfl2Mk3yuQOwuQ',
          },
          {
            expert_info: '注册会计师',
            expert_nickName: '财税工作者',
            header_img: '/media/edd1826c744b4a048993817e55b7f7b2.png',
            id: '7b04a92282ac481ebde7b991f67a86a2',
            last_login_time: 1529894748000,
            nickName: '斑',
            openId: 'oT7f_wr0HS6bpSIagRCNA63adJMU',
            question_fee: 100,
            unionid: 'ojxvh0WG2RRMjOIA3j_MDBMxWoEM',
          },
          {
            expert_info: '124567999\n',
            expert_nickName: '财税工作者',
            header_img: '/media/pB0qXHGm1B2v9FJNJG1tYOTZwjDy8vnw.jpg',
            id: '658d7a4b63f3487ab7a54333e7561117',
            last_login_time: 1529918699000,
            nickName: '戏子',
            openId: 'oT7f_whL1VpOQedSmqe8aJpjX5aQ',
            question_fee: 100,
            unionid: 'ojxvh0aPEytfWkXxc_MTX8SAxYg0',
          },
          {
            expert_info: '注册会计师、注册税务师，与您交流财税问题。',
            expert_nickName: '财税工作者',
            header_img: '/media/1ZNwArBAFUFX0OsoUpYYbTb0Muimix5k.jpg',
            id: '7bd7baabd1d541278ba5986bb3eb3b6b',
            last_login_time: 1529896545000,
            nickName: '小强老师',
            openId: 'oT7f_wiL0M-031edw-snvh3--2mA',
            question_fee: 1000,
            unionid: 'ojxvh0c_SWEax_br1NJ1IhBInBJQ',
          },
          {
            expert_info:
              '注册会计师，税务师，从业10年。有上市公司税务经理、房地产公司财务经理等相关经验',
            expert_nickName: '财税工作者',
            header_img: '/media/5a6c690f25c0418b9727057d1dd65ab6.png',
            id: 'e04e070c8dd0496da2873b2915b8b650',
            last_login_time: 1529917093000,
            nickName: '管管',
            openId: 'oT7f_wi_hc3pc5VC9mLQTV1ZuSqg',
            question_fee: 1000,
            unionid: 'ojxvh0VdsSI_zW8IImEJEpuGg-Js',
          },
          {
            expert_info:
              '\n从业16年，熟悉会计处理及税收政策，擅长解决实务问题，希望共分享共学习共提高',
            expert_nickName: '财税工作者',
            header_img: '/media/c2c2d16cb0c944788177a1f12f4b90c4.png',
            id: 'f640651e46f344478ce1189dbfd71db0',
            last_login_time: 1529910243000,
            nickName: '在路上',
            openId: 'oT7f_whuKm7h0zki_8KV-HDsMXvM',
            question_fee: 1000,
            unionid: 'ojxvh0aN2hsvRMfaoECSYPNbzqdk',
          },
          {
            expert_info:
              '注会，税务师，某财大客座教授，某省税校讲师！擅长以商业实质和形式，解决涉税难题！',
            expert_nickName: '专业讲师',
            header_img: '/media/14257b7b2b2f4c3da687a3397fd259e5.png',
            id: 'bcdce421d67447709f8ae996b7915a04',
            last_login_time: 1529916137000,
            nickName: '罗伟',
            openId: 'oT7f_wqoglBpsGBvDwKzg7Z6zgEs',
            question_fee: 5800,
            unionid: 'ojxvh0SDc1z3Gj33uvFOu8EDXhTQ',
          },
          {
            expert_info: '注册会计师，注册税务师，房地产财税知识',
            expert_nickName: '财税工作者',
            header_img: '/media/c757c3b5503d4697a1c1e89987f217a1.png',
            id: 'e4c4a72dbd4e4b66bd2c603ea9f9cff9',
            last_login_time: 1529909154000,
            nickName: '琅琊税客',
            openId: 'oT7f_wp6F20OcFBIPi3dHHvlrKOo',
            question_fee: 3999,
            unionid: 'ojxvh0bEQCbp00LuSlxQ3CqSOtDQ',
          },
          {
            expert_info:
              '所得税科长，从税25年，税收管理经验丰富，注册税务师，熟悉增值税和地方各税业务',
            expert_nickName: '财税工作者',
            header_img: '/media/46ba957196334c5a83bcb828c50526e5.png',
            id: 'fde06c06480e47d9a69189748a24c9d0',
            last_login_time: 1529906927000,
            nickName: '老骥',
            openId: 'oT7f_wtfcMY2IK61Jb3Mecm2MqvU',
            question_fee: 800,
            unionid: 'ojxvh0Xh1jIhq-1l8kOMgwFYxHnU',
          },
          {
            expert_nickName: '专业讲师',
            header_img: '/media/3922dc83c868442e8328aa5714a8394c.png',
            id: 'ae58a7b057854bd0b9f0b1870154204a',
            last_login_time: 1529036118000,
            nickName: '武晓红',
            openId: 'oT7f_wkTFOj7cHA7C5LSKHiNgDoM',
            question_fee: 500,
          },
          {
            expert_info: '硕士,会计师,从业十余年，具有丰富的财税经验。',
            expert_nickName: '财税工作者',
            header_img: '/media/eMNHdbAHeai5QCCYQtCFwwvRFCXR2xI3.jpg',
            id: 'f9d693bcdb3a4981a5415adf24d7e66d',
            last_login_time: 1529918528000,
            nickName: '真趣财税',
            openId: 'oT7f_wnnpUG7gGaqZn2xZVVI1MMs',
            question_fee: 998,
            unionid: 'ojxvh0beSMtdgD3hk4cibWBUIdco',
          },
        ],
        totalCount: 0,
        totalPages: 0,
      },
      status_code: 0,
      status_message: 'ok',
    };
  }
}

module.exports = TaxkeController;
