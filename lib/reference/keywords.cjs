// NOTICE: This file is generated by Rollup. To modify it,
// please instead edit the ESM counterpart and rebuild with Rollup (npm run build).
'use strict';

const uniteSets = require('../utils/uniteSets.cjs');

const basicKeywords = new Set(['initial', 'inherit', 'revert', 'revert-layer', 'unset']);

const systemFontKeywords = uniteSets(basicKeywords, [
	'caption',
	'icon',
	'menu',
	'message-box',
	'small-caption',
	'status-bar',
]);

const fontFamilyKeywords = uniteSets(basicKeywords, [
	'serif',
	'sans-serif',
	'cursive',
	'fantasy',
	'monospace',
	'system-ui',
	'ui-serif',
	'ui-sans-serif',
	'ui-monospace',
	'ui-rounded',
]);

const appleSystemFonts = new Set([
	'-apple-system',
	'-apple-system-headline',
	'-apple-system-body',
	'-apple-system-subheadline',
	'-apple-system-footnote',
	'-apple-system-caption1',
	'-apple-system-caption2',
	'-apple-system-short-headline',
	'-apple-system-short-body',
	'-apple-system-short-subheadline',
	'-apple-system-short-footnote',
	'-apple-system-short-caption1',
	'-apple-system-tall-body',
	'-apple-system-title0',
	'-apple-system-title1',
	'-apple-system-title2',
	'-apple-system-title3',
	'-apple-system-title4',
]);

const mozillaSystemFonts = new Set([
	'-moz-button',
	'-moz-desktop',
	'-moz-dialog',
	'-moz-document',
	'-moz-field',
	'-moz-fixed',
	'-moz-info',
	'-moz-list',
	'-moz-pull-down-menu',
	'-moz-window',
	'-moz-workspace',
]);

const webkitSystemFonts = new Set([
	'-webkit-body',
	'-webkit-control',
	'-webkit-mini-control',
	'-webkit-pictograph',
	'-webkit-small-control',
	'-webkit-standard',
]);

const prefixedSystemFonts = uniteSets(
	appleSystemFonts,
	mozillaSystemFonts,
	webkitSystemFonts,
);

const fontWeightRelativeKeywords = new Set(['bolder', 'lighter']);

const fontWeightAbsoluteKeywords = new Set(['normal', 'bold']);

const fontWeightNonNumericKeywords = uniteSets(
	fontWeightRelativeKeywords,
	fontWeightAbsoluteKeywords,
);

const fontWeightNumericKeywords = new Set([
	'100',
	'200',
	'300',
	'400',
	'500',
	'600',
	'700',
	'800',
	'900',
]);

const fontWeightKeywords = uniteSets(
	basicKeywords,
	fontWeightNonNumericKeywords,
	fontWeightNumericKeywords,
);

const fontStyleKeywords = uniteSets(basicKeywords, ['normal', 'italic', 'oblique']);

const fontVariantCSS2Keywords = uniteSets(basicKeywords, ['normal', 'none', 'small-caps']);

const fontStretchKeywords = uniteSets(basicKeywords, [
	'semi-condensed',
	'condensed',
	'extra-condensed',
	'ultra-condensed',
	'semi-expanded',
	'expanded',
	'extra-expanded',
	'ultra-expanded',
]);

const fontSizeKeywords = uniteSets(basicKeywords, [
	'xx-small',
	'x-small',
	'small',
	'medium',
	'large',
	'x-large',
	'xx-large',
	'xxx-large',
	'larger',
	'smaller',
	'math',
]);

const lineHeightKeywords = uniteSets(basicKeywords, ['normal']);

const fontShorthandKeywords = uniteSets(
	basicKeywords,
	fontStyleKeywords,
	fontVariantCSS2Keywords,
	fontWeightKeywords,
	fontStretchKeywords,
	fontSizeKeywords,
	lineHeightKeywords,
	fontFamilyKeywords,
);

const animationNameKeywords = uniteSets(basicKeywords, ['none']);

const animationTimingFunctionKeywords = uniteSets(basicKeywords, [
	'linear',
	'ease',
	'ease-in',
	'ease-in-out',
	'ease-out',
	'step-start',
	'step-end',
	'steps',
	'cubic-bezier',
]);

const animationIterationCountKeywords = new Set(['infinite']);

const animationDirectionKeywords = uniteSets(basicKeywords, [
	'normal',
	'reverse',
	'alternate',
	'alternate-reverse',
]);

const animationFillModeKeywords = new Set(['none', 'forwards', 'backwards', 'both']);

const animationPlayStateKeywords = uniteSets(basicKeywords, ['running', 'paused']);

// cf. https://developer.mozilla.org/en-US/docs/Web/CSS/animation
const animationShorthandKeywords = uniteSets(
	basicKeywords,
	animationNameKeywords,
	animationTimingFunctionKeywords,
	animationIterationCountKeywords,
	animationDirectionKeywords,
	animationFillModeKeywords,
	animationPlayStateKeywords,
);

const gridRowKeywords = uniteSets(basicKeywords, ['auto', 'span']);

const gridColumnKeywords = uniteSets(basicKeywords, ['auto', 'span']);

const gridAreaKeywords = uniteSets(basicKeywords, ['auto', 'span']);

// https://developer.mozilla.org/docs/Web/CSS/counter-increment
const counterIncrementKeywords = uniteSets(basicKeywords, ['none']);

const counterResetKeywords = uniteSets(basicKeywords, ['none']);

// https://developer.mozilla.org/ru/docs/Web/CSS/list-style-type
const listStyleTypeKeywords = uniteSets(basicKeywords, [
	'none',
	'disc',
	'circle',
	'square',
	'decimal',
	'cjk-decimal',
	'decimal-leading-zero',
	'lower-roman',
	'upper-roman',
	'lower-greek',
	'lower-alpha',
	'lower-latin',
	'upper-alpha',
	'upper-latin',
	'arabic-indic',
	'armenian',
	'bengali',
	'cambodian',
	'cjk-earthly-branch',
	'cjk-ideographic',
	'devanagari',
	'ethiopic-numeric',
	'georgian',
	'gujarati',
	'gurmukhi',
	'hebrew',
	'hiragana',
	'hiragana-iroha',
	'japanese-formal',
	'japanese-informal',
	'kannada',
	'katakana',
	'katakana-iroha',
	'khmer',
	'korean-hangul-formal',
	'korean-hanja-formal',
	'korean-hanja-informal',
	'lao',
	'lower-armenian',
	'malayalam',
	'mongolian',
	'myanmar',
	'oriya',
	'persian',
	'simp-chinese-formal',
	'simp-chinese-informal',
	'tamil',
	'telugu',
	'thai',
	'tibetan',
	'trad-chinese-formal',
	'trad-chinese-informal',
	'upper-armenian',
	'disclosure-open',
	'disclosure-closed',
	// Non-standard extensions (without prefixe)
	'ethiopic-halehame',
	'ethiopic-halehame-am',
	'ethiopic-halehame-ti-er',
	'ethiopic-halehame-ti-et',
	'hangul',
	'hangul-consonant',
	'urdu',
]);

const listStylePositionKeywords = uniteSets(basicKeywords, ['inside', 'outside']);

const listStyleImageKeywords = uniteSets(basicKeywords, ['none']);

const listStyleShorthandKeywords = uniteSets(
	basicKeywords,
	listStyleTypeKeywords,
	listStylePositionKeywords,
	listStyleImageKeywords,
);

const camelCaseKeywords = new Set([
	'optimizeSpeed',
	'optimizeQuality',
	'optimizeLegibility',
	'geometricPrecision',
	'currentColor',
	'crispEdges',
	'visiblePainted',
	'visibleFill',
	'visibleStroke',
	'sRGB',
	'linearRGB',
]);

const keyframeSelectorKeywords = new Set(['from', 'to']);

const systemColorsKeywords = new Set([
	// https://www.w3.org/TR/CSS22/ui.html#system-colors
	'activeborder',
	'activecaption',
	'appworkspace',
	'background',
	'buttonface',
	'buttonhighlight',
	'buttonshadow',
	'buttontext',
	'captiontext',
	'graytext',
	'highlight',
	'highlighttext',
	'inactiveborder',
	'inactivecaption',
	'inactivecaptiontext',
	'infobackground',
	'infotext',
	'menu',
	'menutext',
	'scrollbar',
	'threeddarkshadow',
	'threedface',
	'threedhighlight',
	'threedlightshadow',
	'threedshadow',
	'window',
	'windowframe',
	'windowtext',
	// https://www.w3.org/TR/css-color-4/#css-system-colors
	'accentcolor',
	'accentcolortext',
	'activetext',
	'buttonborder',
	'buttonface',
	'buttontext',
	'canvas',
	'canvastext',
	'field',
	'fieldtext',
	'graytext',
	'highlight',
	'highlighttext',
	'linktext',
	'mark',
	'marktext',
	'selecteditem',
	'selecteditemtext',
	'visitedtext',
]);

const namedColorsKeywords = new Set([
	// https://www.w3.org/TR/css-color-4/#named-colors
	'aliceblue',
	'antiquewhite',
	'aqua',
	'aquamarine',
	'azure',
	'beige',
	'bisque',
	'black',
	'blanchedalmond',
	'blue',
	'blueviolet',
	'brown',
	'burlywood',
	'cadetblue',
	'chartreuse',
	'chocolate',
	'coral',
	'cornflowerblue',
	'cornsilk',
	'crimson',
	'cyan',
	'darkblue',
	'darkcyan',
	'darkgoldenrod',
	'darkgray',
	'darkgreen',
	'darkgrey',
	'darkkhaki',
	'darkmagenta',
	'darkolivegreen',
	'darkorange',
	'darkorchid',
	'darkred',
	'darksalmon',
	'darkseagreen',
	'darkslateblue',
	'darkslategray',
	'darkslategrey',
	'darkturquoise',
	'darkviolet',
	'deeppink',
	'deepskyblue',
	'dimgray',
	'dimgrey',
	'dodgerblue',
	'firebrick',
	'floralwhite',
	'forestgreen',
	'fuchsia',
	'gainsboro',
	'ghostwhite',
	'gold',
	'goldenrod',
	'gray',
	'green',
	'greenyellow',
	'grey',
	'honeydew',
	'hotpink',
	'indianred',
	'indigo',
	'ivory',
	'khaki',
	'lavender',
	'lavenderblush',
	'lawngreen',
	'lemonchiffon',
	'lightblue',
	'lightcoral',
	'lightcyan',
	'lightgoldenrodyellow',
	'lightgray',
	'lightgreen',
	'lightgrey',
	'lightpink',
	'lightsalmon',
	'lightseagreen',
	'lightskyblue',
	'lightslategray',
	'lightslategrey',
	'lightsteelblue',
	'lightyellow',
	'lime',
	'limegreen',
	'linen',
	'magenta',
	'maroon',
	'mediumaquamarine',
	'mediumblue',
	'mediumorchid',
	'mediumpurple',
	'mediumseagreen',
	'mediumslateblue',
	'mediumspringgreen',
	'mediumturquoise',
	'mediumvioletred',
	'midnightblue',
	'mintcream',
	'mistyrose',
	'moccasin',
	'navajowhite',
	'navy',
	'oldlace',
	'olive',
	'olivedrab',
	'orange',
	'orangered',
	'orchid',
	'palegoldenrod',
	'palegreen',
	'paleturquoise',
	'palevioletred',
	'papayawhip',
	'peachpuff',
	'peru',
	'pink',
	'plum',
	'powderblue',
	'purple',
	'rebeccapurple',
	'red',
	'rosybrown',
	'royalblue',
	'saddlebrown',
	'salmon',
	'sandybrown',
	'seagreen',
	'seashell',
	'sienna',
	'silver',
	'skyblue',
	'slateblue',
	'slategray',
	'slategrey',
	'snow',
	'springgreen',
	'steelblue',
	'tan',
	'teal',
	'thistle',
	'tomato',
	'turquoise',
	'violet',
	'wheat',
	'white',
	'whitesmoke',
	'yellow',
	'yellowgreen',
]);

exports.animationNameKeywords = animationNameKeywords;
exports.animationShorthandKeywords = animationShorthandKeywords;
exports.basicKeywords = basicKeywords;
exports.camelCaseKeywords = camelCaseKeywords;
exports.counterIncrementKeywords = counterIncrementKeywords;
exports.counterResetKeywords = counterResetKeywords;
exports.fontFamilyKeywords = fontFamilyKeywords;
exports.fontShorthandKeywords = fontShorthandKeywords;
exports.fontSizeKeywords = fontSizeKeywords;
exports.fontWeightAbsoluteKeywords = fontWeightAbsoluteKeywords;
exports.fontWeightKeywords = fontWeightKeywords;
exports.fontWeightNonNumericKeywords = fontWeightNonNumericKeywords;
exports.fontWeightRelativeKeywords = fontWeightRelativeKeywords;
exports.gridAreaKeywords = gridAreaKeywords;
exports.gridColumnKeywords = gridColumnKeywords;
exports.gridRowKeywords = gridRowKeywords;
exports.keyframeSelectorKeywords = keyframeSelectorKeywords;
exports.listStyleImageKeywords = listStyleImageKeywords;
exports.listStylePositionKeywords = listStylePositionKeywords;
exports.listStyleShorthandKeywords = listStyleShorthandKeywords;
exports.listStyleTypeKeywords = listStyleTypeKeywords;
exports.namedColorsKeywords = namedColorsKeywords;
exports.prefixedSystemFonts = prefixedSystemFonts;
exports.systemColorsKeywords = systemColorsKeywords;
exports.systemFontKeywords = systemFontKeywords;
