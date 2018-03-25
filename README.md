# 课题项目：基于区块链的公益捐赠系统 #
  通过node.js+express框架写的简单服务端，基本的html+css布局，区块链为以太坊区块链，信息放在prichain目录下，系统功能为初步实现转账功能。

## 一、克隆版本库 ##
     git clone https://github.com/fjh1997/ZSTU-BlockChain.git
## 二、安装geth ##
  下载地址 [https://geth.ethereum.org/downloads/] 安装完成后,通过以下命令启动私链
     geth --identity "ZSTU"  --rpc  --rpccorsdomain "*" --datadir "chain" --port "30303"  --rpcapi "db,eth,net,web3,personal,miner"  --networkid 6500 
## 三、安装node.js和express ##
  下载地址[https://nodejs.org/zh-cn/]安装完成后通过以下命令安装express
     npm install express -g 
## 四、启动服务端 ##
    npm start
## 五、启动客户端网页 ##
  在浏览器中输入[http://localhost:3000/]即可启动该系统