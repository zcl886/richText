CKEDITOR.plugins.add('CodePlugin', {
    init: function(editor) {
        editor.addCommand('CodePlugin', new CKEDITOR.dialogCommand('CodePlugin'));
        editor.ui.addButton('Code',
            {
                label: '插入高亮程式碼',
                icon: this.path + 'images/codeicon2.png',
                command: 'CodePlugin'
            });

        CKEDITOR.dialog.add('CodePlugin', function(editor) {
            return {
                title: '插入程式碼',
                minWidth: 500,
                minHeight: 400,
                contents: [{
                    id: 'code',
                    label: 'code',
                    title: 'code',
                    elements:
                        [
                        {
                            type: 'select',
                            label: 'Language',
                            id: 'language',

                            'default': 'csharp',
                            items: [
                                ['C#', 'csharp'],
                                ['CSS', 'css'],
                                ['Html', 'xhtml'],
                                ['JavaScript', 'js'],
                                ['SQL', 'sql'],
                                ['XML', 'xml']
                            ]
                        }, {
                            id: 'codecontent',
                            type: 'textarea',
                            label: '請輸入程式碼',
                            style: 'width:700px;height:500px',
                            rows: 30,
                            'default': ''
                        }
                    ]
                }],
                onOk: function() {
                    code = this.getValueOf('code', 'codecontent');
                    lang = this.getValueOf('code', 'language');
                    editor.insertHtml("<pre class=\"brush:" + lang + ";\">" + code + "</pre>");
                }
            };
        });
    }
})
