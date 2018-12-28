// 1 webpack 我们并没有通过命令的形式 给它指定入口和出口
// 2 webpack 就会去项目中的根目录 查找webpack.config.js 配// 置文件
// 3 找到配置文件 webpack就会解析这个配置文件 解析完就得到了// 配置文件中导出的配置对象
//  当webpack拿到配置对象 就拿到了配置对象中 指定的入口和出口

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    entry:'./main.js',
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'main.js'
    },
    mode:'development',
    devServer: {
        contentBase: path.join(__dirname, 'src'), // 托管根路径
        compress: true, // 启用压缩
        port: 3000, // 端口号
        open: true, // 自动打开浏览器
        hot: true // 2. 开启热更新  如果设置hot为true 需要手动添加HMR插件, 详见第三步
    },
    plugins: [ // 插件配置项
        new HtmlWebpackPlugin({ // 用于帮助我们自动生成HTML文件的
            template: './src/index.html', // 如果不指定template, 默认生成一个空的HTML5页面, 指定template表示从哪个HTML文件编译一个新的HTML出来
            filename: 'index.html' // 默认值就是index.html, 便于开发人员自己查看
          })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg|bmp|webp)$/,
                use: ['url-loader?limit=8192&name=[hash:8]-[name].[ext]']
                // use: [
                //   {
                //     loader: 'url-loader',
                //     options: {
                //       limit: 8192 // 限制 单位为byte  8192字节是8KB
                //     }
                //   }
                // ]
              },
              // 字体
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: ['url-loader'] }
        ]
    }
}




