import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nestdoc",
  description: "nest",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '第01章—开篇词', link: '/doc/第01章—开篇词' },
          { text: '第02章—给你5个学习Nest的理由，你会心动么', link: '/doc/第02章—给你5个学习Nest的理由，你会心动么' },
          { text: '第03章—Nest基础概念扫盲', link: '/doc/第03章—Nest基础概念扫盲' },
          { text: '第04章—快速掌握NestCLI', link: '/doc/第04章—快速掌握NestCLI' },
          { text: '第05章—5种HTTP数据传输方式', link: '/doc/第05章—5种HTTP数据传输方式' },
          { text: '第06章—IoC解决了什么痛点问题', link: '/doc/第06章—IoC解决了什么痛点问题' },
          { text: '第07章—如何调试Nest项目', link: '/doc/第07章—如何调试Nest项目' },
          { text: '第08章—使用多种Provider，灵活注入对象', link: '/doc/第08章—使用多种Provider，灵活注入对象' },
          { text: '第09章—全局模块和生命周期', link: '/doc/第09章—全局模块和生命周期' },
          { text: '第10章—AOP架构有什么好处', link: '/doc/第10章—AOP架构有什么好处' },
          { text: '第11章—一网打尽Nest全部装饰器', link: '/doc/第11章—一网打尽Nest全部装饰器' },
          { text: '第12章—Nest如何自定义装饰器', link: '/doc/第12章—Nest如何自定义装饰器' },
          { text: '第13章—Metadata和Reflector', link: '/doc/第13章—Metadata和Reflector' },
          { text: '第14章—ExecutionContext：切换不同上下文', link: '/doc/第14章—ExecutionContext：切换不同上下文' },
          { text: '第15章—Module和Provider的循环依赖怎么处理', link: '/doc/第15章—Module和Provider的循环依赖怎么处理' },
          { text: '第16章—如何创建动态模块', link: '/doc/第16章—如何创建动态模块' },
          { text: '第17章—Nest和Express的关系，如何切到fastify', link: '/doc/第17章—Nest和Express的关系，如何切到fastify' },
          { text: '第18章—Nest的Middleware', link: '/doc/第18章—Nest的Middleware' },
          { text: '第19章—RxJS和Interceptor', link: '/doc/第19章—RxJS和Interceptor' },
          { text: '第20章—内置Pipe和自定义Pipe', link: '/doc/第20章—内置Pipe和自定义Pipe' },
          { text: '第21章—如何使用ValidationPipe验证post请求参数', link: '/doc/第21章—如何使用ValidationPipe验证post请求参数' },
          { text: '第22章—如何自定义ExceptionFilter', link: '/doc/第22章—如何自定义ExceptionFilter' },
          { text: '第23章—图解串一串Nest核心概念', link: '/doc/第23章—图解串一串Nest核心概念' },
          { text: '第24章—接口如何实现多版本共存', link: '/doc/第24章—接口如何实现多版本共存' },
          { text: '第25章—Express如何使用multer实现文件上传', link: '/doc/第25章—Express如何使用multer实现文件上传' },
          { text: '第26章—Nest如何使用multer实现文件上传', link: '/doc/第26章—Nest如何使用multer实现文件上传' },
          { text: '第27章—图书管理系统：需求分析和原型图', link: '/doc/第27章—图书管理系统：需求分析和原型图' },
          { text: '第28章—图书管理系统：用户模块后端开发', link: '/doc/第28章—图书管理系统：用户模块后端开发' },
          { text: '第29章—图书管理系统：图书模块后端开发', link: '/doc/第29章—图书管理系统：图书模块后端开发' },
          { text: '第30章—图书管理系统：用户模块前端开发', link: '/doc/第30章—图书管理系统：用户模块前端开发' },
          { text: '第31章—图书管理系统：图书模块前端开发--图书搜索', link: '/doc/第31章—图书管理系统：图书模块前端开发--图书搜索' },
          { text: '第32章—图书管理系统：图书模块前端开发--图书增删改', link: '/doc/第32章—图书管理系统：图书模块前端开发--图书增删改' },
          { text: '第33章—图书管理系统：项目总结', link: '/doc/第33章—图书管理系统：项目总结' },
          { text: '第34章—大文件分片上传', link: '/doc/第34章—大文件分片上传' },
          { text: '第35章—最完美的OSS上传方案', link: '/doc/第35章—最完美的OSS上传方案' },
          { text: '第36章—Nest里如何打印日志', link: '/doc/第36章—Nest里如何打印日志' },
          { text: '第37章—为什么Node里要用Winston打印日志', link: '/doc/第37章—为什么Node里要用Winston打印日志' },
          { text: '第38章—Nest集成日志框架Winston', link: '/doc/第38章—Nest集成日志框架Winston' },
          { text: '第39章—通过Desktop学Docker也太简单了', link: '/doc/第39章—通过Desktop学Docker也太简单了' },
          { text: '第40章—你的第一个Dockerfile', link: '/doc/第40章—你的第一个Dockerfile' },
          { text: '第41章—Nest项目如何编写Dockerfile', link: '/doc/第41章—Nest项目如何编写Dockerfile' },
          { text: '第42章—提升Dockerfile水平的5个技巧', link: '/doc/第42章—提升Dockerfile水平的5个技巧' },
          { text: '第43章—Docker是怎么实现的', link: '/doc/第43章—Docker是怎么实现的' },
          { text: '第44章—为什么Node应用要用PM2来跑', link: '/doc/第44章—为什么Node应用要用PM2来跑' },
          { text: '第45章—快速入门MySQL', link: '/doc/第45章—快速入门MySQL' },
          { text: '第46章—SQL查询语句的所有语法和函数', link: '/doc/第46章—SQL查询语句的所有语法和函数' },
          { text: '第47章—一对一、join查询、级联方式', link: '/doc/第47章—一对一、join查询、级联方式' },
          { text: '第48章—一对多、多对多关系的表设计', link: '/doc/第48章—一对多、多对多关系的表设计' },
          { text: '第49章—子查询和EXISTS', link: '/doc/第49章—子查询和EXISTS' },
          { text: '第50章—SQL综合练习', link: '/doc/第50章—SQL综合练习' },
          { text: '第51章—MySQL的事务和隔离级别', link: '/doc/第51章—MySQL的事务和隔离级别' },
          { text: '第52章—MySQL的视图、存储过程和函数', link: '/doc/第52章—MySQL的视图、存储过程和函数' },
          { text: '第53章—使用Node操作MySQL的两种方式', link: '/doc/第53章—使用Node操作MySQL的两种方式' },
          { text: '第54章—快速掌握TypeORM', link: '/doc/第54章—快速掌握TypeORM' },
          { text: '第55章—TypeORM一对一的映射和关联CRUD', link: '/doc/第55章—TypeORM一对一的映射和关联CRUD' },
          { text: '第56章—TypeORM一对多的映射和关联CRUD', link: '/doc/第56章—TypeORM一对多的映射和关联CRUD' },
          { text: '第57章—TypeORM多对多的映射和关联CRUD', link: '/doc/第57章—TypeORM多对多的映射和关联CRUD' },
          { text: '第58章—在Nest里集成TypeORM', link: '/doc/第58章—在Nest里集成TypeORM' },
          { text: '第59章—TypeORM如何保存任意层级的关系', link: '/doc/第59章—TypeORM如何保存任意层级的关系' },
          { text: '第60章—为什么生产环境要用TypeORM的migration迁移功能', link: '/doc/第60章—为什么生产环境要用TypeORM的migration迁移功能' },
          { text: '第61章—Nest项目里如何使用TypeORM迁移', link: '/doc/第61章—Nest项目里如何使用TypeORM迁移' },
          { text: '第62章—如何动态读取不同环境的配置', link: '/doc/第62章—如何动态读取不同环境的配置' },
          { text: '第63章—快速入门Redis', link: '/doc/第63章—快速入门Redis' },
          { text: '第64章—在Nest里操作Redis', link: '/doc/第64章—在Nest里操作Redis' },
          { text: '第65章—为什么不用cache-manager操作Redis', link: '/doc/第65章—为什么不用cache-manager操作Redis' },
          { text: '第66章—两种登录状态保存方式：JWT、Session', link: '/doc/第66章—两种登录状态保存方式：JWT、Session' },
          { text: '第67章—Nest里实现Session和JWT', link: '/doc/第67章—Nest里实现Session和JWT' },
          { text: '第68章—MySQL+TypeORM+JWT实现登录注册', link: '/doc/第68章—MySQL+TypeORM+JWT实现登录注册' },
          { text: '第69章—基于ACL实现权限控制', link: '/doc/第69章—基于ACL实现权限控制' },
          { text: '第70章—基于RBAC实现权限控制', link: '/doc/第70章—基于RBAC实现权限控制' },
          { text: '第71章—基于access_token和refresh_token实现登录状态无感刷新', link: '/doc/第71章—基于access_token和refresh_token实现登录状态无感刷新' },
          { text: '第72章—单token无限续期，实现登录状态无感刷新', link: '/doc/第72章—单token无限续期，实现登录状态无感刷新' },
          { text: '第73章—使用passport做身份认证', link: '/doc/第73章—使用passport做身份认证' },
          { text: '第74章—passport实现GitHub三方账号登录', link: '/doc/第74章—passport实现GitHub三方账号登录' },
          { text: '第75章—passport实现Google三方账号登录', link: '/doc/第75章—passport实现Google三方账号登录' },
          { text: '第76章—为什么要使用DockerCompose', link: '/doc/第76章—为什么要使用DockerCompose' },
          { text: '第77章—Docker容器通信的最简单方式：桥接网络', link: '/doc/第77章—Docker容器通信的最简单方式：桥接网络' },
          { text: '第78章—Docker支持重启策略，是否还需要PM2', link: '/doc/第78章—Docker支持重启策略，是否还需要PM2' },
          { text: '第79章—快速掌握Nginx的2大核心用法', link: '/doc/第79章—快速掌握Nginx的2大核心用法' },
          { text: '第80章—基于Nginx实现灰度系统', link: '/doc/第80章—基于Nginx实现灰度系统' },
          { text: '第81章—基于Redis实现分布式session', link: '/doc/第81章—基于Redis实现分布式session' },
          { text: '第82章—Redis+高德地图，实现附近的充电宝', link: '/doc/第82章—Redis+高德地图，实现附近的充电宝' },
          { text: '第83章—用Swagger自动生成api文档', link: '/doc/第83章—用Swagger自动生成api文档' },
          { text: '第84章—如何灵活创建DTO', link: '/doc/第84章—如何灵活创建DTO' },
          { text: '第85章—class-validator的内置装饰器，如何自定义装饰器', link: '/doc/第85章—class-validator的内置装饰器，如何自定义装饰器' },
          { text: '第86章—序列化Entity，你不需要VO对象', link: '/doc/第86章—序列化Entity，你不需要VO对象' },
          { text: '第87章—手写序列化Entity的拦截器', link: '/doc/第87章—手写序列化Entity的拦截器' },
          { text: '第88章—使用compodoc生成文档', link: '/doc/第88章—使用compodoc生成文档' },
          { text: '第89章—Node如何发邮件', link: '/doc/第89章—Node如何发邮件' },
          { text: '第90章—实现基于邮箱验证码的登录', link: '/doc/第90章—实现基于邮箱验证码的登录' },
          { text: '第91章—定时任务+Redis实现阅读量计数', link: '/doc/第91章—定时任务+Redis实现阅读量计数' },
          { text: '第92章—Nest的3种定时任务', link: '/doc/第92章—Nest的3种定时任务' },
          { text: '第93章—Nest里如何实现事件通信', link: '/doc/第93章—Nest里如何实现事件通信' },
          { text: '第94章—HttpModule+pinyin实现天气预报查询服务', link: '/doc/第94章—HttpModule+pinyin实现天气预报查询服务' },
          { text: '第95章—如何记录请求日志', link: '/doc/第95章—如何记录请求日志' },
          { text: '第96章—短链服务自己写一个', link: '/doc/第96章—短链服务自己写一个' },
          { text: '第97章—Nest实现ServerSentEvent数据推送', link: '/doc/第97章—Nest实现ServerSentEvent数据推送' },
          { text: '第98章—用minio自己搭一个OSS服务', link: '/doc/第98章—用minio自己搭一个OSS服务' },
          { text: '第99章—前端如何直传文件到Minio', link: '/doc/第99章—前端如何直传文件到Minio' },
          { text: '第100章—基于sharp实现gif压缩工具', link: '/doc/第100章—基于sharp实现gif压缩工具' },
          { text: '第101章—大文件如何实现流式下载', link: '/doc/第101章—大文件如何实现流式下载' },
          { text: '第102章—Puppeteer实现爬虫，爬取BOSS直聘全部前端岗位', link: '/doc/第102章—Puppeteer实现爬虫，爬取BOSS直聘全部前端岗位' },
          { text: '第103章—实现扫二维码登录', link: '/doc/第103章—实现扫二维码登录' },
          { text: '第104章—Nest的REPL模式', link: '/doc/第104章—Nest的REPL模式' },
          { text: '第105章—实现Excel导入导出', link: '/doc/第105章—实现Excel导入导出' },
          { text: '第106章—如何用代码动态生成PPT', link: '/doc/第106章—如何用代码动态生成PPT' },
          { text: '第107章—如何拿到服务器CPU、内存、磁盘状态', link: '/doc/第107章—如何拿到服务器CPU、内存、磁盘状态' },
          { text: '第108章—Nest如何实现国际化', link: '/doc/第108章—Nest如何实现国际化' },
          { text: '第109章—会议室预订系统：需求分析和原型图', link: '/doc/第109章—会议室预订系统：需求分析和原型图' },
          { text: '第110章—会议室预订系统：技术方案和数据库设计', link: '/doc/第110章—会议室预订系统：技术方案和数据库设计' },
          { text: '第111章—会议室预订系统：用户管理模块--用户注册', link: '/doc/第111章—会议室预订系统：用户管理模块--用户注册' },
          { text: '第112章—会议室预订系统：用户管理模块--配置抽离、登录认证鉴权', link: '/doc/第112章—会议室预订系统：用户管理模块--配置抽离、登录认证鉴权' },
          { text: '第113章—会议室预订系统：用户管理模块--interceptor、修改信息接口', link: '/doc/第113章—会议室预订系统：用户管理模块--interceptor、修改信息接口' },
          { text: '第114章—会议室预订系统：用户管理模块--用户列表和分页查询', link: '/doc/第114章—会议室预订系统：用户管理模块--用户列表和分页查询' },
          { text: '第115章—会议室预订系统：用户管理模块--swagger接口文档', link: '/doc/第115章—会议室预订系统：用户管理模块--swagger接口文档' },
          { text: '第116章—会议室预订系统：用户管理模块--用户端登录注册页面', link: '/doc/第116章—会议室预订系统：用户管理模块--用户端登录注册页面' },
          { text: '第117章—会议室预订系统：用户管理模块--用户端信息修改页面', link: '/doc/第117章—会议室预订系统：用户管理模块--用户端信息修改页面' },
          { text: '第118章—会议室预订系统：用户管理模块--头像上传', link: '/doc/第118章—会议室预订系统：用户管理模块--头像上传' },
          { text: '第119章—会议室预订系统：用户管理模块--管理端用户列表页面', link: '/doc/第119章—会议室预订系统：用户管理模块--管理端用户列表页面' },
          { text: '第120章—会议室预订系统：用户管理模块--管理端信息修改页面', link: '/doc/第120章—会议室预订系统：用户管理模块--管理端信息修改页面' },
          { text: '第121章—会议室预订系统：会议室管理模块-后端开发', link: '/doc/第121章—会议室预订系统：会议室管理模块-后端开发' },
          { text: '第122章—会议室预订系统：会议室管理模块-管理端前端开发', link: '/doc/第122章—会议室预订系统：会议室管理模块-管理端前端开发' },
          { text: '第123章—会议室预订系统：会议室管理模块-用户端前端开发', link: '/doc/第123章—会议室预订系统：会议室管理模块-用户端前端开发' },
          { text: '第124章—会议室预订系统：预定管理模块-后端开发', link: '/doc/第124章—会议室预订系统：预定管理模块-后端开发' },
          { text: '第125章—会议室预订系统：预定管理模块-管理端前端开发', link: '/doc/第125章—会议室预订系统：预定管理模块-管理端前端开发' },
          { text: '第126章—会议室预订系统：预定管理模块-用户端前端开发', link: '/doc/第126章—会议室预订系统：预定管理模块-用户端前端开发' },
          { text: '第127章—会议室预订系统：统计管理模块-后端开发', link: '/doc/第127章—会议室预订系统：统计管理模块-后端开发' },
          { text: '第128章—会议室预订系统：统计管理模块-前端开发', link: '/doc/第128章—会议室预订系统：统计管理模块-前端开发' },
          { text: '第129章—会议室预订系统：后端项目部署到阿里云', link: '/doc/第129章—会议室预订系统：后端项目部署到阿里云' },
          { text: '第130章—会议室预订系统：前端项目部署到阿里云', link: '/doc/第130章—会议室预订系统：前端项目部署到阿里云' },
          { text: '第131章—会议室预定系统：用migration初始化表和数据', link: '/doc/第131章—会议室预定系统：用migration初始化表和数据' },
          { text: '第132章—会议室预定系统：文件上传OSS', link: '/doc/第132章—会议室预定系统：文件上传OSS' },
          { text: '第133章—会议室预定系统：Google账号登录后端开发', link: '/doc/第133章—会议室预定系统：Google账号登录后端开发' },
          { text: '第134章—会议室预定系统：Google账号登录前端开发', link: '/doc/第134章—会议室预定系统：Google账号登录前端开发' },
          { text: '第135章—会议室预定系统：后端代码优化', link: '/doc/第135章—会议室预定系统：后端代码优化' },
          { text: '第136章—会议室预定系统：集成日志框架winston', link: '/doc/第136章—会议室预定系统：集成日志框架winston' },
          { text: '第137章—会议室预定系统：前端代码优化', link: '/doc/第137章—会议室预定系统：前端代码优化' },
          { text: '第138章—会议室预定系统：全部功能测试', link: '/doc/第138章—会议室预定系统：全部功能测试' },
          { text: '第139章—会议室预定系统：项目总结', link: '/doc/第139章—会议室预定系统：项目总结' },
          { text: '第140章—Nest如何创建微服务', link: '/doc/第140章—Nest如何创建微服务' },
          { text: '第141章—Nest的Monorepo和Library', link: '/doc/第141章—Nest的Monorepo和Library' },
          { text: '第142章—用Etcd实现微服务配置中心和注册中心', link: '/doc/第142章—用Etcd实现微服务配置中心和注册中心' },
          { text: '第143章—Nest集成Etcd做注册中心、配置中心', link: '/doc/第143章—Nest集成Etcd做注册中心、配置中心' },
          { text: '第144章—用Nacos实现微服务配置中心和注册中心', link: '/doc/第144章—用Nacos实现微服务配置中心和注册中心' },
          { text: '第145章—基于gRPC实现跨语言的微服务通信', link: '/doc/第145章—基于gRPC实现跨语言的微服务通信' },
          { text: '第146章—快速入门ORM框架Prisma', link: '/doc/第146章—快速入门ORM框架Prisma' },
          { text: '第147章—Prisma的全部命令', link: '/doc/第147章—Prisma的全部命令' },
          { text: '第148章—Prisma的全部schema语法', link: '/doc/第148章—Prisma的全部schema语法' },
          { text: '第149章—PrimsaClient单表CRUD的全部api', link: '/doc/第149章—PrimsaClient单表CRUD的全部api' },
          { text: '第150章—PrismaClient多表CRUD的全部api', link: '/doc/第150章—PrismaClient多表CRUD的全部api' },
          { text: '第151章—在Nest里集成Prisma', link: '/doc/第151章—在Nest里集成Prisma' },
          { text: '第152章—为什么前端监控系统要用RabbitMQ', link: '/doc/第152章—为什么前端监控系统要用RabbitMQ' },
          { text: '第153章—基于Redis实现关注关系', link: '/doc/第153章—基于Redis实现关注关系' },
          { text: '第154章—基于Redis实现各种排行榜（周榜、月榜、年榜）', link: '/doc/第154章—基于Redis实现各种排行榜（周榜、月榜、年榜）' },
          { text: '第155章—考试系统：需求分析', link: '/doc/第155章—考试系统：需求分析' },
          { text: '第156章—考试系统：技术方案和数据库设计', link: '/doc/第156章—考试系统：技术方案和数据库设计' },
          { text: '第157章—考试系统：微服务、Lib拆分', link: '/doc/第157章—考试系统：微服务、Lib拆分' },
          { text: '第158章—考试系统；用户注册', link: '/doc/第158章—考试系统；用户注册' },
          { text: '第159章—考试系统：用户登录、修改密码', link: '/doc/第159章—考试系统：用户登录、修改密码' },
          { text: '第160章—考试系统：考试微服务', link: '/doc/第160章—考试系统：考试微服务' },
          { text: '第161章—考试系统：登录、注册页面', link: '/doc/第161章—考试系统：登录、注册页面' },
          { text: '第162章—考试系统：修改密码、试卷列表页面', link: '/doc/第162章—考试系统：修改密码、试卷列表页面' },
          { text: '第163章—考试系统：新增试卷、回收站', link: '/doc/第163章—考试系统：新增试卷、回收站' },
          { text: '第164章—考试系统：试卷编辑器', link: '/doc/第164章—考试系统：试卷编辑器' },
          { text: '第165章—考试系统：试卷回显、预览、保存', link: '/doc/第165章—考试系统：试卷回显、预览、保存' },
          { text: '第166章—考试系统：答卷微服务', link: '/doc/第166章—考试系统：答卷微服务' },
          { text: '第167章—考试系统：答题页面', link: '/doc/第167章—考试系统：答题页面' },
          { text: '第168章—考试系统：自动判卷', link: '/doc/第168章—考试系统：自动判卷' },
          { text: '第169章—考试系统：分析微服务、排行榜页面', link: '/doc/第169章—考试系统：分析微服务、排行榜页面' },
          { text: '第170章—考试系统：整体测试', link: '/doc/第170章—考试系统：整体测试' },
          { text: '第171章—考试系统：项目总结', link: '/doc/第171章—考试系统：项目总结' },
          { text: '第172章—用Node.js手写WebSocket协议', link: '/doc/第172章—用Node.js手写WebSocket协议' },
          { text: '第173章—Nest开发WebSocket服务', link: '/doc/第173章—Nest开发WebSocket服务' },
          { text: '第174章—基于Socket.io的room实现群聊', link: '/doc/第174章—基于Socket.io的room实现群聊' },
          { text: '第175章—聊天室：需求分析和原型图', link: '/doc/第175章—聊天室：需求分析和原型图' },
          { text: '第176章—聊天室：技术方案和数据库设计', link: '/doc/第176章—聊天室：技术方案和数据库设计' },
          { text: '第177章—聊天室：用户注册、登录', link: '/doc/第177章—聊天室：用户注册、登录' },
          { text: '第178章—聊天室：好友关系', link: '/doc/第178章—聊天室：好友关系' },
          { text: '第179章—聊天室：群组', link: '/doc/第179章—聊天室：群组' },
          { text: '第180章—聊天室：私聊、群聊', link: '/doc/第180章—聊天室：私聊、群聊' },
          { text: '第181章—聊天室：历史消息', link: '/doc/第181章—聊天室：历史消息' },
          { text: '第182章—聊天室：在线状态', link: '/doc/第182章—聊天室：在线状态' },
          { text: '第183章—聊天室：未读消息', link: '/doc/第183章—聊天室：未读消息' },
          { text: '第184章—聊天室：消息撤回', link: '/doc/第184章—聊天室：消息撤回' },
          { text: '第185章—聊天室：@功能', link: '/doc/第185章—聊天室：@功能' },
          { text: '第186章—聊天室：消息已读', link: '/doc/第186章—聊天室：消息已读' },
          { text: '第187章—聊天室：表情包', link: '/doc/第187章—聊天室：表情包' },
          { text: '第188章—聊天室：发送图片', link: '/doc/第188章—聊天室：发送图片' },
          { text: '第189章—聊天室：发送文件', link: '/doc/第189章—聊天室：发送文件' },
          { text: '第190章—聊天室：语音通话', link: '/doc/第190章—聊天室：语音通话' },
          { text: '第191章—聊天室：发送表情、图片、文件', link: '/doc/第191章—聊天室：发送表情、图片、文件' },
          { text: '第192章—聊天室：收藏', link: '/doc/第192章—聊天室：收藏' },
          { text: '第193章—聊天室：全部功能测试', link: '/doc/第193章—聊天室：全部功能测试' },
          { text: '第194章—聊天室：项目总结', link: '/doc/第194章—聊天室：项目总结' },
          { text: '第195章—MongoDB快速入门', link: '/doc/第195章—MongoDB快速入门' },
          { text: '第196章—使用mongoose操作MongoDB数据库', link: '/doc/第196章—使用mongoose操作MongoDB数据库' },
          { text: '第197章—GraphQL快速入门', link: '/doc/第197章—GraphQL快速入门' },
          { text: '第198章—Nest开发GraphQL服务：实现CRUD', link: '/doc/第198章—Nest开发GraphQL服务：实现CRUD' },
          { text: '第199章—GraphQL+Primsa+React实现TodoList', link: '/doc/第199章—GraphQL+Primsa+React实现TodoList' },
          { text: '第200章—如何调试Nest源码', link: '/doc/第200章—如何调试Nest源码' },
          { text: '第201章—小册总结', link: '/doc/第201章—小册总结' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  // 添加以下配置以支持图片加载
  vite: {
    resolve: {
      alias: {
        '@images': '/images'
      }
    }
  }
})
