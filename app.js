const express = require("express")
const path = require("path")
//模拟数据
const cartinfo = require("./mock/cartInfo")
//创建一个express服务对象
const app = express()
const router = express.Router()

router.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    if (req.method == 'OPTIONS') {
        res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    }
    else {
        next();
    }
});


/**
 * 根据用户获取当前的购物车列表
 * */
router.get("/cartinfo" ,(req,res)=>{
    res.json(cartinfo)
})


//把当前的路由添加到app /api/cartinfo
app.use("/api",router)


//监听port
app.listen(3000,()=>{
    console.log("api server is ready on port 3000!")
})
