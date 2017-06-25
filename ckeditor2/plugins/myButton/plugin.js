//注册“myButton”插件到编辑器
CKEDITOR.plugins.add( 'myButton', {
	//插件初始化方法
	init: function( editor ) {
		//定义打开对话框的命令
		editor.addCommand( 'myButton', new CKEDITOR.dialogCommand( 'myButton' ) );
		//创建一个工具栏按钮，它会执行我们上面定义的命令
		editor.ui.addButton( 'myButton', {
			icon: this.path+'icons/image.png',
			//按钮（如果是有效的话）的文本显示，以及鼠标悬停提示
			label: '我的按钮',
			//单击按钮所执行的命令
			command: 'myButton'
			//toolbar: 'insert'
		});

		//注册我们的myButton.js
		CKEDITOR.dialog.add( 'myButton', this.path + 'dialogs/myButton.js' );
	} 
});
