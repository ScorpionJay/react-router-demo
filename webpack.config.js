module.exports = {

	// 入口
	entry: "./index.js",
	
	// 输出
	output: {
        filename: "bundle.js"
	},

	resolve: {
        extensions: ['', '.js']
    },
	
	// 模块加载器
	module: {
        loaders: [
             { test: /\.js$/,exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
             { test: /\.css$/, loaders: ["style","css"] },
             {test: /\.scss$/, loaders: ["style", "css", "sass"]}
        ]
    }

};