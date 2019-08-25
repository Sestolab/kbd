CKEDITOR.plugins.add('kbd', {
	lang: 'en,ru,uk',
	icons: 'kbd',
	init: function(editor){
		editor.addCommand('kbd', {
			exec: function(editor){
				var kbd = editor.document.createElement('kbd');
				kbd.setText(editor.getSelection().getSelectedText());
				editor.insertElement(kbd);
			}
		});

		editor.ui.addButton('kbd', {
			label: editor.lang.kbd.label,
			command: 'kbd'
		});
	}
});
