/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative'
import Link from '@ckeditor/ckeditor5-link/src/link'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'

export default class SabuyEditor extends InlineEditorBase {}

// Plugins to include in the build.
SabuyEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  Strikethrough,
  Image,
  ImageStyle,
  ImageToolbar,
  ImageTextAlternative,
  Link,
  Paragraph
]

// Editor configuration.
SabuyEditor.defaultConfig = {
  toolbar: {
    items: [
      'bold',
      'italic',
      'strikethrough',
      '|',
      'link',
      'undo',
      'redo'
    ]
  },
  image: {
    toolbar: [
      'imageStyle:full',
      'imageStyle:side',
      '|',
      'imageTextAlternative'
    ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
}
