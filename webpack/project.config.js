const debug = require('debug')('app:config:project')
const path=require('path');
const config={
    env:process.env.NODE_ENV || 'development',
    open_browser:true,
    path_base:path.resolve(__dirname,'..'),
    dir_client : 'src',
    server_host:'127.0.0.1',
    server_port:process.env.PORT || 3000,
    compiler_devtool: 'source-map',
    compiler_hash_type:'hash',
    compiler_stats : {
        chunks : false,
        chunkModules : false,
        colors : true
    }
}
config.globals={
    '__DEV__' : config.env === 'development',
    '__PROD__': config.env === 'production'
}

const env=require('./environments.config');
const overrides=env[config.env];
if(overrides){
    debug('Found overrides, applying to default configuration.');
    Object.assign(config,overrides(config));
}else{
    debug('No environment overrides found, defaults will be used.')
}

module.exports=config;
