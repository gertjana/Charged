var gulp = require('gulp');
var configs = require('../../build.configs.js');
var replace = require('gulp-replace');

var PHONEGAP_APP_DIR = configs.targetDirectory;
var PHONEGAP_DEVELOPER_APP_PORT = configs.phonegapServePort;

gulp.task('copy-config-xml', function(){
	return gulp.src('./src/config.xml')
	.pipe(replace(/{NAMESPACE}/g, configs.app.namespace))
	.pipe(replace(/{VERSION}/g, configs.app.version))
	.pipe(replace(/{APP_NAME}/g, configs.app.name))
	.pipe(replace(/{APP_DESCRIPTION}/g, configs.app.description))
	.pipe(replace(/{AUTHOR_WEBISTE}/g, configs.app.author.website))
	.pipe(replace(/{AUTHOR_EMAIL}/g, configs.app.author.email))
	.pipe(replace(/{AUTHOR_NAME}/g, configs.app.author.name))
	.pipe(replace(/{PLUGINS}/g, getPluginsXML()))
	.pipe(replace(/{ICONS}/g, getIconsXML()))
	.pipe(replace(/{SPLASHSCREENS}/g, getSplashscreenXML()))
	.pipe(replace(/{ACCESS_ORIGIN}/g, configs.app.accessOrigin))
	.pipe(replace(/{ORIENTATION}/g, configs.app.orientation))
	.pipe(replace(/{TARGET_DEVICE}/g, configs.app.targetDevice))
	.pipe(replace(/{EXIT_ON_SUSPEND}/g, configs.app.exitOnSuspend))
	.pipe(gulp.dest('./' + PHONEGAP_APP_DIR + '/www/'))
});

function getPhonegapPluginCommands(){
	var commands = [];
	for(var i = 0; i < configs.app.phonegapPlugins.length; i++){
		var p = configs.app.phonegapPlugins[i];
		commands.push('phonegap plugin add ' + p.installFrom);
	}
	return commands;
}

function getPluginsXML(){
	var xml = '';
	for(var i = 0; i < configs.app.phonegapPlugins.length; i++){
		var p = configs.app.phonegapPlugins[i];
		var pluginXml = '<gap:plugin name="' + p.name + '"';
		if( !!p.version ){
			pluginXml += ' version="' + p.version + '"';
		}
		pluginXml += '/>' + "\n";
		xml += pluginXml;		
	}
	return xml;
}

function getIconsXML(){
	var xml = '';
	for(var i = 0; i < configs.app.icons.length; i++){
		var e = configs.app.icons[i];
		var eXml = '<icon src="' + e.src + '"';
		if( !!e.platform ){
			eXml += ' platform="' + e.platform + '"';
		}
		if( !!e.width ){
			eXml += ' width="' + e.width + '"';
		}
		if( !!e.height ){
			eXml += ' height="' + e.height + '"';
		}
		if( !!e.density ){
			eXml += ' density="' + e.density + '"';
		}
		eXml += '/>' + "\n";
		xml += eXml;
	}
	return xml;
}

function getSplashscreenXML(){
	var xml = '';
	for(var i = 0; i < configs.app.splashscreens.length; i++){
		var e = configs.app.splashscreens[i];
		var eXml = '<gap:splash src="' + e.src + '"';
		if( !!e.platform ){
			eXml += ' gap:platform="' + e.platform + '"';
		}
		if( !!e.width ){
			eXml += ' width="' + e.width + '"';
		}
		if( !!e.height ){
			eXml += ' height="' + e.height + '"';
		}
		eXml += '/>' + "\n";
		xml += eXml;
	}
	return xml;
}