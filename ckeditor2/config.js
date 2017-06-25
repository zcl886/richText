/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

    config.toolbar =
        [
            [ 'Source', '-', 'Bold', 'Italic', 'Templates'],
            ['dropDownList','myButton','TextColor','BGColor','Image']  //,['myButton'],['code'],['codesnippet'],
        ];

    config.removeButtons = 'Underline,Subscript,Superscript';
    config.format_tags = 'p;h1;h2;h3;pre';

    config.removeDialogTabs = 'image:advanced;link:advanced';
    config.removePlugins = 'elementspath';									//	删除左下角的标签


    config.extraPlugins = 'sharedspace,dropDownList,myButton,image';

    config.sharedSpaces = {
        top: 'someElementId',
        bottom: 'anotherId'
    };

    config.sharedSpaces = {
        top: 'someElementId'
    };

    var htmlElement = document.getElementById( 'someElementId' );
    config.sharedSpaces = {
        top: htmlElement
    };

    config.removePlugins = 'elementspath';
};
