export interface FeedbackOptions {
    classes: {
        [key: string]: string;
    };
    backgroundOpacity?: number;
    allowedTags?: string[];
    endpoint: string;
    texts: {
        [key: string]: string;
    };
}
export interface HTML2CanvasOptions {
    async?: boolean;
    allowTaint?: boolean;
    backgroundColor?: string;
    canvas?: HTMLCanvasElement;
    foreignObjectRendering?: boolean;
    imageTimeout?: number;
    logging?: boolean;
    proxy?: string;
    removeContainer?: boolean;
    scale?: number;
    useCORS?: boolean;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    scrollX?: number;
    scrollY?: number;
    windowWidth?: number;
    windowHeight?: number;
}
export declare class Feedback {
    private _options;
    private _html2canvasOptions;
    private _initState;
    private _initArea;
    private _state;
    private _root;
    private _formContainer;
    private _form;
    private _checkbox;
    private _checkboxSvg;
    private _checkboxSvgPath;
    private _screenshotContainer;
    private _screenshotCanvas;
    private _footnoteContainer;
    private _sendingContainer;
    private _sentContainer;
    private _errorContainer;
    private _drawOptions;
    private _dragger;
    private _canvas;
    private _ctx;
    private _area;
    private _highlightedArea;
    private _helpersContainer;
    private _helperElements;
    private _helpers;
    private _helperIdx;
    private _drawOptionsPos;
    private _checkedColor;
    private _uncheckedColor;
    private _checkedPath;
    private _uncheckedPath;
    constructor(options?: FeedbackOptions, html2canvasOptions?: HTML2CanvasOptions);
    open(): void;
    close: () => void;
    private _reset;
    private _createModal;
    private _send;
    private _closeListener;
    private _toggleScreenshot;
    private _genScreenshot;
    private _openDrawer;
    private _closeDrawer;
    private _createHeader;
    private _createForm;
    private _createCanvas;
    private _resize;
    private _createTextarea;
    private _createCheckboxContainer;
    private _createScreenshotContainer;
    private _createFootnote;
    private _createActionsContainer;
    private _createDrawOptions;
    private _createHelpersContainer;
    private _dragStart;
    private _dragDrag;
    private _dragStop;
    private _drawStart;
    private _drawStop;
    private _drawDraw;
    private _resetCanvas;
    private _drawHighlightLines;
    private _paintArea;
    private _redraw;
    private _drawLines;
    private _createHelper;
    private _highlightElement;
    private _addHighlightedElement;
    private _onScroll;
    private _showSending;
    private _showSent;
    private _showError;
}
