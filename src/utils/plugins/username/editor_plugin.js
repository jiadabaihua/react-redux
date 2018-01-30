/**
* editor_plugin_src.js
*
* Copyright 2009, Moxiecode Systems AB
* Released under LGPL License.
*
* License: http://tinymce.moxiecode.com/license
* Contributing: http://tinymce.moxiecode.com/contributing
*/

(function () {

    tinymce.create('tinymce.plugins.TMUserNamePlugin', {
        init: function (ed, url) {
            var pb = '<img src="' + url + '/img/username.png" class="mceusername mceUserNameResize" />', cls = 'mceUserName', sep = ed.getParam('UserName_separator', '<% username %>'), pbRE;
            pbRE = new RegExp(sep.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g, function (a) { return '\\' + a; }), 'g');
            // Register commands
            ed.addCommand('mceUserName', function (v) {
                ed.execCommand('mceInsertContent', 0, pb);
            });

            // Register buttons
            ed.addButton('username', { title: 'username.desc', cmd: cls });

            ed.onInit.add(function () {
                if (ed.settings.content_css !== false)
                    ed.dom.loadCSS(url + "/css/content.css");

                if (ed.theme.onResolveName) {
                    ed.theme.onResolveName.add(function (th, o) {
                        if (o.node.nodeName == 'IMG' && ed.dom.hasClass(o.node, cls))
                            o.name = 'UserName';
                    });
                }
            });

            ed.onClick.add(function (ed, e) {
                e = e.target;
                if (e.nodeName === 'IMG' && ed.dom.hasClass(e, cls))
                    ed.selection.select(e);
            });

            ed.onNodeChange.add(function (ed, cm, n) {
                cm.setActive('username', n.nodeName === 'IMG' && ed.dom.hasClass(n, cls));
            });

            ed.onBeforeSetContent.add(function (ed, o) {
                o.content = o.content.replace(pbRE, pb);
            });

            ed.onPostProcess.add(function (ed, o) {
                if (o.get)
                    o.content = o.content.replace(/<img[^>]+>/g, function (im) {
                        if (im.indexOf('class="mceusername') !== -1)
                            im = sep;

                        return im;
                    });
            });
        },

        getInfo: function () {
            return {
                longname: 'UserName',
                author: 'Simonliu/Liubo',
                authorurl: '',
                infourl: '',
                version: tinymce.majorVersion + "." + tinymce.minorVersion
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add('username', tinymce.plugins.TMUserNamePlugin);
})();