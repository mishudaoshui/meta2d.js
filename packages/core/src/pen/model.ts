import { Point } from '../point';
import { Rect } from '../rect';
import { Event } from '../event';

export enum PenType {
  Node,
  Line,
}

export enum LockState {
  None,
  DisableEdit,
  DisableMove,
  // DisableActive,
  Disable = 10,
}

export enum AnchorMode {
  Default,
  In,
  Out,
}

export interface Pen extends Rect {
  id?: string;
  tags?: string[];
  parentId?: string;
  type?: PenType;
  name?: string;
  borderRadius?: number;
  layer?: number;
  // Hidden only visible === false
  visible?: boolean;
  locked?: LockState;

  // 连线是否闭合路径
  close?: boolean;
  // 连线长度
  length?: number;

  title?: string;
  markdown?: string;

  autoRect?: boolean;

  lineWidth?: number;
  globalAlpha?: number;
  lineDash?: number[];
  lineDashOffset?: number;
  color?: string;
  background?: string;
  anchorColor?: string;
  hoverColor?: string;
  hoverBackground?: string;
  activeColor?: string;
  activeBackground?: string;
  bkType?: number;
  lineCap?: string;
  lineJoin?: string;
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;

  text?: string;
  textWidth?: number;
  textHeight?: number;
  textLeft?: number;
  textTop?: number;
  textColor?: string;
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  fontStyle?: string;
  fontWeight?: string;
  textAlign?: string;
  textBaseline?: string;
  textBackground?: string;
  whiteSpace?: string;
  ellipsis?: boolean;

  image?: string;
  gif?: boolean;
  icon?: string;
  iconRotate?: number;
  iconWidth?: number;
  iconHeight?: number;
  iconTop?: number;
  iconLeft?: number;
  iconColor?: string;
  iconFamily?: string;
  iconSize?: number;
  iconAlign?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'left-top'
    | 'right-top'
    | 'left-bottom'
    | 'right-bottom'
    | 'center';
  iconRatio?: boolean;

  disableInput?: boolean;
  disableRotate?: boolean;
  disableSize?: boolean;
  disableAnchor?: boolean;

  // 相对值，若小于 1 认为是相对坐标
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;

  backgroundImage?: string;
  strokeImage?: string;

  children?: string[];

  anchors?: Point[];
  anchorRadius?: number;
  anchorBackground?: string;

  pathId?: string;
  path?: string;

  fromArrow?: string;
  toArrow?: string;
  fromArrowSize?: number;
  toArrowSize?: number;
  fromArrowColor?: string;
  toArrowColor?: string;

  connectedLines?: { lineId: string; lineAnchor: string; anchor: string }[];

  // Cycle count. Infinite if == 0.
  animateCycle?: number;
  nextAnimate?: string;
  autoPlay?: boolean;
  playLoop?: boolean;

  // 动画帧时长
  duration?: number;
  // 匀速渐变
  linear?: boolean;
  // 主要用于动画帧的缩放
  scale?: number;
  // 连线动画速度
  animateSpan?: number;
  animateColor?: string;
  animateLineDash?: number[];
  animateReverse?: boolean;
  // 结束动画后，是否保持动画状态
  keepAnimateState?: boolean;

  lineAnimateType?: number;

  frames?: Pen[];
  // 提前预置的不同效果的动画组
  animateList?: Pen[][];

  input?: boolean;
  dropdownList?: any[];

  events?: Event[];

  iframe?: string;
  video?: string;
  audio?: string;

  progress?: number;
  progressColor?: string;
  verticalProgress?: boolean;
  externElement?: boolean;

  calculative?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;

    progress?: number;

    worldRect?: Rect;
    worldAnchors?: Point[];
    worldIconRect?: Rect;
    worldTextRect?: Rect;
    textDrawRect?: Rect;
    svgRect?: Rect;

    // 执行动画前的初始位置
    initRect?: Rect;

    rotate?: number;
    lineWidth?: number;
    globalAlpha?: number;
    lineDash?: number[];
    lineDashOffset?: number;
    color?: string;
    background?: string;
    anchorColor?: string;
    hoverColor?: string;
    hoverBackground?: string;
    activeColor?: string;
    activeBackground?: string;
    bkType?: number;
    lineCap?: string;
    lineJoin?: string;
    shadowColor?: string;
    shadowBlur?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;

    text?: string;
    textWidth?: number;
    textHeight?: number;
    textLeft?: number;
    textTop?: number;
    textColor?: string;
    fontFamily?: string;
    fontSize?: number;
    lineHeight?: number;
    fontStyle?: string;
    fontWeight?: string;
    textBackground?: string;
    iconSize?: number;
    icon?: string;
    iconRotate?: number;
    iconWidth?: number;
    iconHeight?: number;
    iconTop?: number;
    iconLeft?: number;
    iconColor?: string;

    // 绝对值，计算后的结果
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;

    textLines?: string[];
    image?: string;
    gif?: boolean;
    img?: HTMLImageElement;
    imgNaturalWidth?: number;
    imgNaturalHeight?: number;
    backgroundImage?: string;
    strokeImage?: string;
    backgroundImg?: HTMLImageElement;
    strokeImg?: HTMLImageElement;
    active?: boolean;
    hover?: boolean;
    pencil?: boolean;
    activeAnchor?: Point;
    dirty?: boolean;
    visible?: boolean;
    // 仅仅内部专用
    inView?: boolean;
    // 辅助变量，画线时，动态计算锚点是否时水平方向
    drawlineH?: boolean;

    scale?: number;

    // 动画开始时间
    start?: number;
    // 动画时长
    duration?: number;
    // 动画结束时间
    end?: number;
    // 当前动画帧
    frameIndex?: number;
    // 当前动画帧起止时间
    frameStart?: number;
    frameEnd?: number;
    frameDuration?: number;
    animatePos?: number;
    // 已经循环次数
    cycleIndex?: number;
    // 是否暂停动画
    pause?: number;
    // 动画播放中的参考基准
    _rotate?: number;

    layer?: number;
    dropdownList?: any[];
    fns?: any;

    elementLoaded?: boolean;
    canvas?: any;

    iframe?: string;
    video?: string;
    audio?: string;
    media?: HTMLMediaElement;

    // media element
    onended?: (pen: Pen) => void;
  };

  // 最后一个动画帧状态数据
  lastFrame?: Pen;

  onAdd?: (pen: Pen) => void;
  onValue?: (pen: Pen) => void;
  onDestroy?: (pen: Pen) => void;
  onMove?: (pen: Pen) => void;
  onResize?: (pen: Pen) => void;
  onRotate?: (pen: Pen) => void;
  onClick?: (pen: Pen) => void;
}