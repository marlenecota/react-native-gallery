'use strict';
import React from 'react';
// import {HomePage} from './HomePage';
import { ActivityIndicatorExample } from './examples/ActivityIndicatorExamplePage';
import { ButtonExamplePage } from './examples/ButtonExamplePage';
import { FlatListExamplePage } from './examples/FlatListExamplePage';
import { PressableExamplePage } from './examples/PressableExamplePage';
import {TextExamplePage} from './examples/TextExamplePage';
import {TextInputExamplePage} from './examples/TextInputExamplePage';
import { TouchableHighlightExamplePage } from './examples/TouchableHighlightExamplePage';
import { TouchableOpacityExamplePage } from './examples/TouchableOpacityExamplePage';
import { TouchableWithoutFeedbackExamplePage } from './examples/TouchableWithoutFeedbackExamplePage';
import {SwitchExamplePage} from './examples/SwitchExamplePage';
import {ViewExamplePage} from './examples/ViewExamplePage';
import {ImageExamplePage} from './examples/ImageExamplePage';
import {ScrollViewExamplePage} from './examples/ScrollViewExample';
import { VirtualizedListExamplePage } from './examples/VirtualizedListExamplePage';
import { SvgExamplePage } from './examples/SvgExamplePage';

interface IRNGalleryExample {
  key: string;
  component?: React.ElementType;
  icon: string;
  type: string;
}

export const RNGalleryList: Array<IRNGalleryExample> = [
  // {
  //   key: 'Home',
  //   component: HomePage,
  //   icon: '\uE80F',
  //   type: '',
  // },
  {
    key: 'ActivityIndicator',
    component: ActivityIndicatorExample,
    icon: '\uE815',
    type: 'Basic Input',
  },
  {
    key: 'Settings',
    icon: '\uE713',
    type: '',
  },
  {
    key: 'Button',
    component: ButtonExamplePage,
    icon: '\uE815',
    type: 'Basic Input',
  },
  {
    key: 'CheckBox',
    icon: '\uE73A',
    type: 'Basic Input',
  },
  {
    key: 'Config',
    icon: '\uE753',
    type: 'Status and Info',
  },
  {
    key: 'DatePicker',
    icon: '\uE787',
    type: 'Date and Time',
  },
  {
    key: 'DeviceInfo',
    icon: '\uE703',
    type: 'Status and Info',
  },
  {
    key: 'Expander',
    icon: '\uE8C4',
    type: 'Layout',
  },
  {
    key: 'FlatList',
    component: FlatListExamplePage,
    icon: '\uE8A4',
    type: 'Layout',
  },
  {
    key: 'Flyout',
    icon: '\uE75A',
    type: 'Dialogs and Flyouts',
  },
  {
    key: 'Image',
    component: ImageExamplePage,
    icon: '\uEB9F',
    type: 'Media',
  },
  {
    key: 'Permissions',
    icon: '\uED2C',
    type: 'Status and Info',
  },
  {
    key: 'Picker',
    icon: '\uE7B8',
    type: 'Basic Input',
  },
  {
    key: 'Popup',
    icon: '\uE75A',
    type: 'Layout',
  },
  {
    key: 'Pressable',
    component: PressableExamplePage,
    icon: '\uE815',
    type: 'Basic Input',
  },
  {
    key: 'Print',
    icon: '\uE749',
    type: 'Media',
  },
  {
    key: 'ProgressView',
    icon: '\uF16A',
    type: 'Basic Input',
  },
  {
    key: 'ScrollView',
    component: ScrollViewExamplePage,
    icon: '\uEC8F',
    type: 'Layout',
  },
  {
    key: 'SensitiveInfo',
    icon: '\uE72E',
    type: 'Status and Info',
  },
  {
    key: 'Slider',
    icon: '\uE9E9',
    type: 'Basic Input',
  },
  {
    key: 'Sketch',
    icon: '\uE790',
    type: 'Media',
  },
  {
    key: 'Switch',
    component: SwitchExamplePage,
    icon: '\uF19E',
    type: 'Basic Input',
  },
  {
    key: 'Text',
    component: TextExamplePage,
    icon: '\uE8D2',
    type: 'Text',
  },
  {
    key: 'TextInput',
    component: TextInputExamplePage,
    icon: '\uE90A',
    type: 'Text',
  },
  {
    key: 'TimePicker',
    icon: '\uE823',
    type: 'Date and Time',
  },
  {
    key: 'TextToSpeech',
    icon: '\uEC43',
    type: 'Media',
  },
  {
    key: 'TouchableHighlight',
    component: TouchableHighlightExamplePage,
    icon: '\uEDA4',
    type: 'Basic Input',
  },
  {
    key: 'TouchableOpacity',
    component: TouchableOpacityExamplePage,
    icon: '\uEDA4',
    type: 'Basic Input',
  },
  {
    key: 'TouchableWithoutFeedback',
    component: TouchableWithoutFeedbackExamplePage,
    icon: '\uEDA4',
    type: 'Basic Input',
  },
  {
    key: 'TrackPlayer',
    icon: '\uEC4F',
    type: 'Media',
  },
  {
    key: 'View',
    component: ViewExamplePage,
    icon: '\uECA5',
    type: 'Layout',
  },
  {
    key: 'WebView',
    icon: '\uE774',
    type: 'Media',
  },
  {
    key: 'WindowsHello',
    icon: '\uE890',
    type: 'Status and Info',
  },
  {
    key: 'VirtualizedList',
    component: VirtualizedListExamplePage,
    icon: '\uE8A4',
    type: 'Layout',
  },
  {
    key: 'Xaml',
    icon: '\uE70F',
    type: 'Layout',
  },
  {
    key: 'SVG',
    component: SvgExamplePage,
    icon: '\uE734',
    type: 'Media'
  },
];

export default RNGalleryList;
