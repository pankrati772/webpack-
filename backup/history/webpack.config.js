// webpack 是node写出来的 node写法
let path=require('path')
let HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports={
    devServer:{
        //开发服务器的配置
        port:8080,
        progress:true,
        contentBase:'./dist',
        compress:true
    },
    mode:'production',//模式 默认两种 production生产环境 development开发环境
    entry:'./src/index.js',//入口
    output:{
        filename:'bundle.[hash:5].js',//打包后的文件名
        path:path.resolve(__dirname,'dist'),//路径必须是绝对路径
    },
    plugins:[
        //数组 放着所有webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true,//删除属性的双引号--压缩后
                collapseWhitespace:true,//折叠 打包成一行
                
            },
            hash:true,
        })

    ]
}