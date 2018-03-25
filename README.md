# 课题项目：基于区块链的公益捐赠系统 #
  通过node.js+express框架写的简单服务端，基本的html+css布局，区块链为以太坊区块链，信息放在prichain目录下，系统功能为初步实现转账功能。

## 一、安装git、克隆版本库 ##
git下载地址https://git-scm.com/ 安装后使用以下命令克隆版本库,并打开目录

     git clone https://github.com/fjh1997/ZSTU-BlockChain.git
     cd ZSTU-BlockChain
## 二、安装geth ##
  下载地址 https://geth.ethereum.org/downloads/ 安装完成后,通过以下命令启动私链

     geth --identity "ZSTU"  --rpc  --rpccorsdomain "*" --datadir "prichain" --port "30303"  --rpcapi "db,eth,net,web3,personal,miner"  --networkid 6500 
## 三、安装node.js和express ##
  下载地址https://nodejs.org/zh-cn/ 安装完成后通过以下命令安装express

     npm install express -g 
## 四、启动服务端 ##
    npm start
## 五、启动客户端网页 ##
  在浏览器中输入http://localhost:3000/ 即可启动该系统、
## 六、系统使用 ##
  在系统界面实现捐赠操作后，可以从geth控制台中看到交易内容，注意该交易并不会立即发生，需要另起命令窗口使用

     geth attach
启动geth自带的javascript控制台，并启动矿工
     
     miner.start()
 待一段时间后，刷新页面可以看到资金数额发生变化，由于资金数据从区块链中读写，故该系统相较于传统数据库系统较慢。
