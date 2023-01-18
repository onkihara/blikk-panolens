(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
	(global = global || self, factory(global.PANOLENS = {}, global.THREE));
}(this, function (exports, THREE) { 'use strict';

	const version="0.12.1";const dependencies={three:"^0.105.2"};

	/**
	 * REVISION
	 * @module REVISION
	 * @example PANOLENS.REVISION
	 * @type {string} revision
	 */
	const REVISION = version.split( '.' )[ 1 ];

	/**
	 * VERSION
	 * @module VERSION
	 * @example PANOLENS.VERSION
	 * @type {string} version
	 */
	const VERSION = version;

	/**
	 * THREEJS REVISION
	 * @module THREE_REVISION
	 * @example PANOLENS.THREE_REVISION
	 * @type {string} threejs revision
	 */
	const THREE_REVISION = dependencies.three.split( '.' )[ 1 ];

	/**
	 * THREEJS VERSION
	 * @module THREE_VERSION
	 * @example PANOLENS.THREE_VERSION
	 * @type {string} threejs version
	 */
	const THREE_VERSION = dependencies.three.replace( /[^0-9.]/g, '' );

	/**
	 * CONTROLS
	 * @module CONTROLS
	 * @example PANOLENS.CONTROLS.ORBIT
	 * @property {number} ORBIT 0
	 * @property {number} DEVICEORIENTATION 1
	 */
	const CONTROLS = { ORBIT: 0, DEVICEORIENTATION: 1 };

	/**
	 * MODES
	 * @module MODES
	 * @example PANOLENS.MODES.UNKNOWN
	 * @property {number} UNKNOWN 0
	 * @property {number} NORMAL 1
	 * @property {number} CARDBOARD 2
	 * @property {number} STEREO 3
	 */
	const MODES = { UNKNOWN: 0, NORMAL: 1, CARDBOARD: 2, STEREO: 3 };

	/**
	 * CONTROL_BUTTONS
	 * @module CONTROL_BUTTONS
	 * @example PANOLENS.VIEWER.CONTROL_BUTTONS
	 * @property {string} FULLSCREEN
	 * @property {string} SETTING
	 * @property {string} VIDEO
	 */
	const CONTROL_BUTTONS = { FULLSCREEN: 'fullscreen', SETTING: 'setting', VIDEO: 'video' };

	/**
	 * OUTPUTS
	 * @module OUTPUTS
	 * @example PANOLENS.VIEWER.OUTPUTS
	 * @property {string} NONE
	 * @property {string} CONSOLE
	 * @property {string} OVERLAY
	 */
	const OUTPUTS = { NONE: 'none', CONSOLE: 'console', OVERLAY: 'overlay' };

	/**
	 * Data URI Images
	 * @module DataImage
	 * @example PANOLENS.DataImage.Info
	 * @property {string} Info Information Icon
	 * @property {string} Arrow Arrow Icon
	 * @property {string} FullscreenEnter Fullscreen Enter Icon
	 * @property {string} FullscreenLeave Fullscreen Leave Icon
	 * @property {string} VideoPlay Video Play Icon
	 * @property {string} VideoPause Video Pause Icon
	 * @property {string} WhiteTile White Tile Icon
	 * @property {string} Setting Settings Icon
	 * @property {string} ChevronRight Chevron Right Icon
	 * @property {string} Check Check Icon
	 * @property {string} ViewIndicator View Indicator Icon
	 */
	const DataImage = {
	    Info: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADBklEQVR42u2bP08UQRiHnzFaSYCI/xoksdBIqGwIiYWRUBISExpCQ0ej38FWOmlIKKhoMPEbaCxsrrHiYrQgOSlQEaICrT+LHSPZzNzt3s3c3Hn7lHvLzvv82L2dm30XKioqKgYY062BJF0HpoA7wARwBbhsPz4DjoEG8AnYNcZ8Sx1Op8IXJM1KWpdUV3nq9m9nJV1I7VNGfEzSM0mNNqR9NOwxx1L7NRMflbQm6SSgeJ4TO8Zoat+8/LKkg4jieQ4kLaf2RtKwpJ0uiufZkTScSn5S0l5C+b/sSZrstvyMpKPU5uc4kjTTjkvpeYCkaeA1/+7hvcIZMGuMqUULQNIU8Aa4ltrWwyHwyBizGzwASSPAe+B2assW7AH3jTE/i+xcZoa12Qfy2Bo3i+5cKABl99zF1GYlWFTBeULLS0DZrOsDcDNggTXgc27bLWA64BhfgHvGmB8dHUXZ1DM0S45xliKMs9bKr+klIOkqsBrwv9JtVq1DewEAT4Ch1BYdMGQdygeg7Df4SmqDAKyoyXpCszPgITCeuvoAjFuX0gE8jljUdv7bCtiOOJ7XpdUZ8L/gdXHOA5QtYH5NXXVgbrgWWn1nwFTqaiPgdPIFcDd1tRFwOl307DwRuZgXwLvctgfA04hjOp18AcReZ6sZY16e3yDpUuQxnU6+S2AkcjEpcDr1zxOXSPgCKLSa0mc4nXwB/EpdbQScTr4AGqmrjYDTyRfAx9TVRsDp5Aug8LJyH+F0cgZg58z11BUHpO5ruGh2G3ybuuqAeF2aBfAqddUB8bq0OgP2U1cegH3aOQOMMb+BrdTVB2DLupQLwLIOnKY26IBT6+ClaQDGmO/ARmqLDtiwDn7HVkcY+EdjNoTlCI+tYhO2iUppm6HKslPUq2qQKHpUe8AFsjaUXuUQWCgqXyoAG8IuME/WkNRrnAHzZfqDSgdgQ6gBc2Td3b3CMTBXtkOsIzTIjZLnQhjcVtlcEIPZLJ0LoVvt8s/Va+3yuSAG84UJRxB98cpM9dJURUVFxSDzBxKde4Lk3/h2AAAAAElFTkSuQmCC', 
	    Info1: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADPklEQVR42u2bMUscQRiG30/SRaJEI1ZKUiRErNIELRUbQYSAnX8hpVUgkDYp0wgWVjYW+QcJaQzYpLojJIXhtDDEKBpj65ti58ixmdmb2ZvZ7+T2AUHudmfmeXf2bnb3O6CmpqZmgJGqOiI5AWAWwEMA0wDuArht3r4CcAagBeAbgIaI/NQOp1fhIZKLJN+SbDKcptl3keSQtk+I+BjJVyRbJaRdtEybY9p+ReKjJN+QvIwonufS9DGq7ZuXXyd5nFA8zzHJdW1vkLxDcrdC8Ty7JO9oyc+QPFCUb3NAcqZq+TmSp9rmHZySnCvjErwOIPkUwHv8+w7vF64ALIrIfrIASM4C+ADgnratgxMACyLSiB4AyREAnwE80LbswgGAJyJy4bNxyApr6wbIw4xxy3djrwCYfeeuaZsFsEbPdULXU4DZqusLgMkEA21P05EEbf8A8FhEzos28pkBLxLKL5s/r/M1kEkz9vKQHGeatf05yfmOfubNa7G5JDle5NhtBjwHMBz5yFwAWBaRT+0XzP8pZsKwcQiH2fX8Ycojb+kzxUw4ZJn7CSQXqpRPHMKCq7+iZJ71Mvdy/DftXSQ6HcJdSDaqPPKW/mPOBO+lcbvzCU35RCFM2PpwnQKzZQfdgfe0dxH5dLA6uQJ4pC2fIASrkyuA6X6QjxyC1ckVQNn7bNHlI4ZgdXIFUObiJJl8pBCsTjGfuIwA2Cv4FN7xbYjkjqsRAHuIePXoCiDF1Zk2VidXAL+1R5sAq5MrgJb2aBNgdXIF8FV7tAmwOrkCCFs73wysTtYATHFCU3vEEWm6Ci6KvgY/ao86Ik6XogDeaY86Ik6XbjPgSHvkEThCwQy45XpDRK5JbgN4GWkgUyR9H65MRQxgW0SunZ5FezK7pfwd8e8MV8UfAPdF5Jdrg8JrAbPjprZFD2wWyQP6j8ZSEufRmGlgQ9umBBvd5IOgbjFUKLu+XnWBhG+rpsFVZGUo/coJgFVf+aAATAgNACvICpL6jSsAKyH1QcEBmBD2ASwhq+7uF84ALIVWiPUEB7lQsiOEwS2VzQUxmMXSuRCqKpd/zX4rl88FMZg/mLAEcSN+MlP/aKqmpqZmkPkL0hSjwOpNKxwAAAAASUVORK5CYII=',
	    Info2: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADn0lEQVR42u2bzUsVURjGnyO6CPzAMnTjppAo3LTwH1CqTfaxbeOiRS37A0wXtROFVi1aRBs3LWohSIGbQAQXViBGRhG0UIRKUCpK7q/FnOB2uc6cOXNmRnGe3eW+H8/7zLln3vNxpQoVKlQ4wjBFJAFOSRqX1O7osivpvjHmU1nChBZglvSYLYJbS0EanCvIJzWK+gnsyH34/8OuMaYjb265jwCgz6N4SWq3vodbAEmnS/KtBDgoAgyU5BteAOAkMAPcBroc7PskDWfgN+wyDwBdltMMcDI3tYBnde/pHeARMNTErgd4APzweP834oeN1dMkz5DlsFNn/yyv4kdiSK4At4AO4CqwGaDwRmza2B0210qM7YhrXU59ANAq6bWkwQTTn5KO5fIE0uVYlXTeGLOXFMx1DrjlULwKKN41x6DlnIjEEQCckPRe0okCiguJr5LOGGO+xhm5jICJQ1i8LOeJJKPYEQAMKvrtt5ZdjSf2FM0Fq/sZJI2A6UNcvCz36TiDfUcAcE1SPu/U6Mm8k/TFfu6XdFb5iX3dGPM8lQfwNod3+TowBnQ3yddtv1vPIe+b1JIBiwEJ1IAJ208k5W21trWA+V/5CHAcmAtU/A2P/DcCiTAHHE8tgCVhgLvAXgYCk17Jo/yTGfLuWe7Zd72AC8CWB4n3OAz7mLytNkZabAEXMhfeQKYfWEpJZCxA3rGUOZeA/qDF15FpAz47EvlNk9neI2e3jeWCz0BbmvipNkSMMX8kuSZYM8Z8zyqAjbHmaN5mOeYjgIXrU93MWrxHrNQjrqiDkQMLHwG+OdqF3NN3jeXKzU8AoF1SzdH8XKhJUO7HZDXLMbwAwICkJUULFxe0SbqSVQAbw3Xi7Ze0ZLmGAzAKbHs0JGU1QtvAaIjCW4B7ZOvJy2qFa5a730RPtBiaz0CgnkiZi6F5fBZDVMvho7EhcuS3xJJ2hV9IupgTqaLw0hhzab8vq23xOG/r+LDsKjLgYVzxUnU0ltwK2wDezUyJmEwqXgp/PL4rvxthaeCSI+zxuA10J8ZkWdJNSb2SLkvayKHwDRu71+ZajrG941J8agALDQ3GU/a/IvMkYCPzmCbtLNEVmacNtgs5iP9fYVNEV1Q6Hez7yNZSL+J2SarTcpqiyV2iUkG0IvPFvbz5FbEn+KEk3wMjwMeSfCsBXFBdly9CAPk9ydyffpECuB5tZfVJjaKWueOSfinln6YK4lahQoUKRxd/AcRPGTcQCAUQAAAAAElFTkSuQmCC',
	    Pano: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCIgc3Ryb2tlPSIjRkZGRkZGIj48cGF0aCBkPSJNMTEuMyAzMC45cTMuMTUtLjQgNi4zMjUtLjY1UTIwLjggMzAgMjQgMzB0Ni4zNzUuMjVxMy4xNzUuMjUgNi4zMjUuNjVsLTguMy0xMC42NS02LjIgNy45NS00LjM1LTUuNlpNNiA0MHEtLjg1IDAtMS40MjUtLjU3NVE0IDM4Ljg1IDQgMzhWMTBxMC0uODUuNTc1LTEuNDI1UTUuMTUgOCA2IDhxLjQgMCAxLjc3NS40NzVUMTEuNDUgOS41cTIuMy41NSA1LjQyNSAxLjAyNVEyMCAxMSAyNCAxMXQ3LjEyNS0uNDc1UTM0LjI1IDEwLjA1IDM2LjU1IDkuNXEyLjMtLjU1IDMuNjc1LTEuMDI1UTQxLjYgOCA0MiA4cS44NSAwIDEuNDI1LjU3NVE0NCA5LjE1IDQ0IDEwdjI4cTAgLjg1LS41NzUgMS40MjVRNDIuODUgNDAgNDIgNDBxLS40IDAtMS43NzUtLjQ3NVQzNi41NSAzOC41cS0yLjMtLjU1LTUuNDI1LTEuMDI1UTI4IDM3IDI0IDM3dC03LjEyNS40NzVxLTMuMTI1LjQ3NS01LjQyNSAxLjAyNS0yLjMuNTUtMy42NzUgMS4wMjVRNi40IDQwIDYgNDBabTEtMy4zNXE0LjEtMS40NSA4LjM3NS0yLjA1UTE5LjY1IDM0IDI0IDM0dDguNjI1LjZxNC4yNzUuNiA4LjM3NSAyLjA1VjExLjRxLTQuMSAxLjQtOC4zNzUgMlEyOC4zNSAxNCAyNCAxNHQtOC42MjUtLjZRMTEuMSAxMi44IDcgMTEuNFpNMjQgMjRaIi8+PC9zdmc+",
	    Cardboard : "asset/icon/cardboard.png",
	    Arrow: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADPklEQVR42u2bMUscQRiG30/SRaJEI1ZKUiRErNIELRUbQYSAnX8hpVUgkDYp0wgWVjYW+QcJaQzYpLojJIXhtDDEKBpj65ti58ixmdmb2ZvZ7+T2AUHudmfmeXf2bnb3O6CmpqZmgJGqOiI5AWAWwEMA0wDuArht3r4CcAagBeAbgIaI/NQOp1fhIZKLJN+SbDKcptl3keSQtk+I+BjJVyRbJaRdtEybY9p+ReKjJN+QvIwonufS9DGq7ZuXXyd5nFA8zzHJdW1vkLxDcrdC8Ty7JO9oyc+QPFCUb3NAcqZq+TmSp9rmHZySnCvjErwOIPkUwHv8+w7vF64ALIrIfrIASM4C+ADgnratgxMACyLSiB4AyREAnwE80LbswgGAJyJy4bNxyApr6wbIw4xxy3djrwCYfeeuaZsFsEbPdULXU4DZqusLgMkEA21P05EEbf8A8FhEzos28pkBLxLKL5s/r/M1kEkz9vKQHGeatf05yfmOfubNa7G5JDle5NhtBjwHMBz5yFwAWBaRT+0XzP8pZsKwcQiH2fX8Ycojb+kzxUw4ZJn7CSQXqpRPHMKCq7+iZJ71Mvdy/DftXSQ6HcJdSDaqPPKW/mPOBO+lcbvzCU35RCFM2PpwnQKzZQfdgfe0dxH5dLA6uQJ4pC2fIASrkyuA6X6QjxyC1ckVQNn7bNHlI4ZgdXIFUObiJJl8pBCsTjGfuIwA2Cv4FN7xbYjkjqsRAHuIePXoCiDF1Zk2VidXAL+1R5sAq5MrgJb2aBNgdXIF8FV7tAmwOrkCCFs73wysTtYATHFCU3vEEWm6Ci6KvgY/ao86Ik6XogDeaY86Ik6XbjPgSHvkEThCwQy45XpDRK5JbgN4GWkgUyR9H65MRQxgW0SunZ5FezK7pfwd8e8MV8UfAPdF5Jdrg8JrAbPjprZFD2wWyQP6j8ZSEufRmGlgQ9umBBvd5IOgbjFUKLu+XnWBhG+rpsFVZGUo/coJgFVf+aAATAgNACvICpL6jSsAKyH1QcEBmBD2ASwhq+7uF84ALIVWiPUEB7lQsiOEwS2VzQUxmMXSuRCqKpd/zX4rl88FMZg/mLAEcSN+MlP/aKqmpqZmkPkL0hSjwOpNKxwAAAAASUVORK5CYII=',
	    FullscreenEnter: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik03IDE0SDV2NWg1di0ySDd2LTN6bS0yLTRoMlY3aDNWNUg1djV6bTEyIDdoLTN2Mmg1di01aC0ydjN6TTE0IDV2MmgzdjNoMlY1aC01eiIvPgo8L3N2Zz4=',
	    FullscreenLeave: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTE0LDE0SDE5VjE2SDE2VjE5SDE0VjE0TTUsMTRIMTBWMTlIOFYxNkg1VjE0TTgsNUgxMFYxMEg1VjhIOFY1TTE5LDhWMTBIMTRWNUgxNlY4SDE5WiIgLz48L3N2Zz4=',
	    VideoPlay: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTgsNS4xNFYxOS4xNEwxOSwxMi4xNEw4LDUuMTRaIiAvPjwvc3ZnPg==',
	    VideoPause: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTE0LDE5LjE0SDE4VjUuMTRIMTRNNiwxOS4xNEgxMFY1LjE0SDZWMTkuMTRaIiAvPjwvc3ZnPg==',
	    WhiteTile: 'data:image/png;base64,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',
	    Setting: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADn0lEQVR42u2bzUsVURjGnyO6CPzAMnTjppAo3LTwH1CqTfaxbeOiRS37A0wXtROFVi1aRBs3LWohSIGbQAQXViBGRhG0UIRKUCpK7q/FnOB2uc6cOXNmRnGe3eW+H8/7zLln3vNxpQoVKlQ4wjBFJAFOSRqX1O7osivpvjHmU1nChBZglvSYLYJbS0EanCvIJzWK+gnsyH34/8OuMaYjb265jwCgz6N4SWq3vodbAEmnS/KtBDgoAgyU5BteAOAkMAPcBroc7PskDWfgN+wyDwBdltMMcDI3tYBnde/pHeARMNTErgd4APzweP834oeN1dMkz5DlsFNn/yyv4kdiSK4At4AO4CqwGaDwRmza2B0210qM7YhrXU59ANAq6bWkwQTTn5KO5fIE0uVYlXTeGLOXFMx1DrjlULwKKN41x6DlnIjEEQCckPRe0okCiguJr5LOGGO+xhm5jICJQ1i8LOeJJKPYEQAMKvrtt5ZdjSf2FM0Fq/sZJI2A6UNcvCz36TiDfUcAcE1SPu/U6Mm8k/TFfu6XdFb5iX3dGPM8lQfwNod3+TowBnQ3yddtv1vPIe+b1JIBiwEJ1IAJ208k5W21trWA+V/5CHAcmAtU/A2P/DcCiTAHHE8tgCVhgLvAXgYCk17Jo/yTGfLuWe7Zd72AC8CWB4n3OAz7mLytNkZabAEXMhfeQKYfWEpJZCxA3rGUOZeA/qDF15FpAz47EvlNk9neI2e3jeWCz0BbmvipNkSMMX8kuSZYM8Z8zyqAjbHmaN5mOeYjgIXrU93MWrxHrNQjrqiDkQMLHwG+OdqF3NN3jeXKzU8AoF1SzdH8XKhJUO7HZDXLMbwAwICkJUULFxe0SbqSVQAbw3Xi7Ze0ZLmGAzAKbHs0JGU1QtvAaIjCW4B7ZOvJy2qFa5a730RPtBiaz0CgnkiZi6F5fBZDVMvho7EhcuS3xJJ2hV9IupgTqaLw0hhzab8vq23xOG/r+LDsKjLgYVzxUnU0ltwK2wDezUyJmEwqXgp/PL4rvxthaeCSI+zxuA10J8ZkWdJNSb2SLkvayKHwDRu71+ZajrG941J8agALDQ3GU/a/IvMkYCPzmCbtLNEVmacNtgs5iP9fYVNEV1Q6Hez7yNZSL+J2SarTcpqiyV2iUkG0IvPFvbz5FbEn+KEk3wMjwMeSfCsBXFBdly9CAPk9ydyffpECuB5tZfVJjaKWueOSfinln6YK4lahQoUKRxd/AcRPGTcQCAUQAAAAAElFTkSuQmCC',
	    ChevronRight: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTguNTksMTYuNThMMTMuMTcsMTJMOC41OSw3LjQxTDEwLDZMMTYsMTJMMTAsMThMOC41OSwxNi41OFoiIC8+PC9zdmc+',
	    Check: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=',
	    ViewIndicator: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0idmlldy1pbmRpY2F0b3IiIGhlaWdodD0iMzAiIHdpZHRoPSIzMCIgdmlld0JveD0iLTIuNSAtMSAzMCAzMCI+Cgk8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7ZmlsbDpub25lO30uc3Qxe3N0cm9rZS13aWR0aDo2O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCTwvc3R5bGU+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNIDEyLjUgMCBBIDEyLjUgMTIuNSAwIDAgMCAtMTIuNSAwIEEgMTIuNSAxMi41IDAgMCAwIDEyLjUgMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMywxNS41KSI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0gMTMgMCBMIDEwIDIgTCAxNiAyIFoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNIDIgMCBBIDIgMiAwIDAgMCAtMiAwIEEgMiAyIDAgMCAwIDIgMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMywxNS41KSI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGlkPSJpbmRpY2F0b3IiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMTMsMTUuNSkiPjwvcGF0aD4KCTwvZz4KPC9zdmc+'
	};

	/**
	 * @module ImageLoader
	 * @description Image loader with progress based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/ImageLoader.js}
	 */
	const ImageLoader = {

	    /**
	     * Load image
	     * @example PANOLENS.ImageLoader.load( IMAGE_URL )
	     * @method load
	     * @param  {string}   url        - An image url
	     * @param  {function} onLoad     - On load callback
	     * @param  {function} onProgress - In progress callback
	     * @param  {function} onError    - On error callback
	     */
	    load: function ( url, onLoad = () => {}, onProgress = () => {}, onError = () => {} ) {

	        // Enable cache
	        THREE.Cache.enabled = true;

	        let cached, request, arrayBufferView, blob, urlCreator, image, reference;

	        // Reference key
	        for (let iconName in DataImage) {

	            if (DataImage.hasOwnProperty(iconName) && url === DataImage[iconName]) {

	                reference = iconName;

	            }

	        }

	        // Cached
	        cached = THREE.Cache.get(reference ? reference : url);

	        if (cached !== undefined) {

	            if (onLoad) {

	                if ( cached.complete && cached.src ) {
	                    setTimeout( function () {

	                        onProgress( { loaded: 1, total: 1 } );
	                        onLoad( cached );

	                    }, 0 );
	                } else {
	                    cached.addEventListener( 'load', function () {

	                        onProgress( { loaded: 1, total: 1 } );
	                        onLoad( cached );

	                    }, false );
	                }

	            }

	            return cached;

	        }

	        // Construct a new XMLHttpRequest
	        urlCreator = window.URL || window.webkitURL;
	        image = document.createElementNS('http://www.w3.org/1999/xhtml', 'img');

	        // Add to cache
	        THREE.Cache.add(reference ? reference : url, image);

	        const onImageLoaded = () => {

	            urlCreator.revokeObjectURL(image.src);
	            onLoad(image);

	        };

	        if (url.indexOf('data:') === 0) {

	            image.addEventListener('load', onImageLoaded, false);
	            image.src = url;
	            return image;
	        }

	        image.crossOrigin = this.crossOrigin !== undefined ? this.crossOrigin : '';

	        request = new window.XMLHttpRequest();
	        request.open('GET', url, true);
	        // if (process.env.npm_lifecycle_event !== 'test') {
	        //     /* istanbul ignore next */
	        //     request.onreadystatechange = function () {
	        //         if (this.readyState === 4 && this.status >= 400) {
	        //             onError();
	        //         }
	        //     };
	        // }
	        request.responseType = 'arraybuffer';
	        request.addEventListener( 'error', onError );
	        request.addEventListener( 'progress', event => {

	            if  ( !event ) return;

	            const { loaded, total, lengthComputable } = event;
	            
	            if ( lengthComputable ) {
		
	                onProgress( { loaded, total } );
		
	            }
		
	        } );
	        
	        request.addEventListener( 'loadend', event => {

	            if  ( !event ) return;
	            const { currentTarget: { response } } = event;

	            arrayBufferView = new Uint8Array( response );
	            blob = new window.Blob( [ arrayBufferView ] );
					
	            image.addEventListener( 'load', onImageLoaded, false );
	            image.src = urlCreator.createObjectURL( blob );
		
	        } );
		
	        request.send(null);
		
	    }

	};

	/**
	 * @module TextureLoader
	 * @description Texture loader based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/TextureLoader.js}
	 */
	const TextureLoader = {

	    /**
	     * Load image texture
	     * @example PANOLENS.TextureLoader.load( IMAGE_URL )
	     * @method load
	     * @param  {string}   url        - An image url
	     * @param  {function} onLoad     - On load callback
	     * @param  {function} onProgress - In progress callback
	     * @param  {function} onError    - On error callback
	     * @return {THREE.Texture}   	 - Image texture
	     */
	    load: function ( url, onLoad = () => {}, onProgress, onError ) {

	        var texture = new THREE.Texture(); 

	        ImageLoader.load( url, function ( image ) {

	            texture.image = image;

	            // JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
	            const isJPEG = url.search( /\.(jpg|jpeg)$/ ) > 0 || url.search( /^data\:image\/jpeg/ ) === 0;

	            texture.format = isJPEG ? THREE.RGBFormat : THREE.RGBAFormat;
	            texture.needsUpdate = true;

	            onLoad( texture );

	        }, onProgress, onError );

	        return texture;

	    }

	};

	/**
	 * @module CubeTextureLoader
	 * @description Cube Texture Loader based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/CubeTextureLoader.js}
	 */
	const CubeTextureLoader = {

	    /**
	     * Load 6 images as a cube texture
	     * @example PANOLENS.CubeTextureLoader.load( [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ] )
	     * @method load
	     * @param  {array}   urls        - array of 6 urls to images, one for each side of the CubeTexture. The urls should be specified in the following order: pos-x, neg-x, pos-y, neg-y, pos-z, neg-z
	     * @param  {function} onLoad     - On load callback
	     * @param  {function} onProgress - In progress callback
	     * @param  {function} onError    - On error callback
	     * @return {THREE.CubeTexture}   - Cube texture
	     */
	    load: function ( urls, onLoad = () => {}, onProgress = () => {}, onError ) {

		   var texture, loaded, progress, all, loadings;

		   texture = new THREE.CubeTexture( [] );

		   loaded = 0;
		   progress = {};
		   all = {};

		   urls.map( function ( url, index ) {

			   ImageLoader.load( url, function ( image ) {

				   texture.images[ index ] = image;

				   loaded++;

				   if ( loaded === 6 ) {

					   texture.needsUpdate = true;

					   onLoad( texture );

				   }

			   }, function ( event ) {

				   progress[ index ] = { loaded: event.loaded, total: event.total };

				   all.loaded = 0;
				   all.total = 0;
				   loadings = 0;

				   for ( var i in progress ) {

					   loadings++;
					   all.loaded += progress[ i ].loaded;
					   all.total += progress[ i ].total;

				   }

				   if ( loadings < 6 ) {

					   all.total = all.total / loadings * 6;

				   }

				   onProgress( all );

			   }, onError );

		   } );

		   return texture;

	    }

	};

	/**
	 * @classdesc User Media
	 * @constructor
	 * @param {object} [constraints={ video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: { exact: 'environment' } }, audio: false }]
	 */
	function Media ( constraints ) {

	    const defaultConstraints = { video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: { exact: 'environment' } }, audio: false };

	    this.constraints = Object.assign( defaultConstraints, constraints );

	    this.container = null;
	    this.scene = null;
	    this.element = null;
	    this.devices = [];
	    this.stream = null;
	    this.ratioScalar = 1;
	    this.videoDeviceIndex = 0;

	}
	Media.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype ), {

	    setContainer: function ( container ) {

	        this.container = container;

	    },

	    setScene: function ( scene ) {

	        this.scene = scene;

	    },

	    /**
	     * Enumerate devices
	     * @memberOf Media
	     * @instance
	     * @returns {Promise}
	     */
	    enumerateDevices: function () {

	        const devices = this.devices;
	        const resolvedPromise = new Promise( resolve => { resolve( devices ); } );

	        return devices.length > 0 ? resolvedPromise : window.navigator.mediaDevices.enumerateDevices();

	    },

	    /**
	     * Switch to next available video device
	     * @memberOf Media
	     * @instance
	     */
	    switchNextVideoDevice: function () {

	        const stop = this.stop.bind( this );
	        const start = this.start.bind( this );
	        const setVideDeviceIndex = this.setVideDeviceIndex.bind( this );

	        let index = this.videoDeviceIndex;

	        this.getDevices( 'video' )
	            .then( devices => {
	                stop();
	                index++;
	                if ( index >= devices.length ) {
	                    setVideDeviceIndex( 0 );
	                    index--;
	                } else {
	                    setVideDeviceIndex( index );
	                }

	                start( devices[ index ] );
	            

	            } );

	    },

	    /**
	     * Get devices
	     * @param {string} type - type keyword to match device.kind
	     * @memberOf Media
	     * @instance
	     */
	    getDevices: function ( type = 'video' ) {

	        const devices = this.devices;
	        const validate = _devices => {

	            return _devices.map( device => { 
	                
	                if ( !devices.includes( device ) ) { devices.push( device ); }
	                return device; 
	            
	            } );
	            
	        };
	        const filter = _devices => {

	            const reg = new RegExp( type, 'i' );
	            return _devices.filter( device => reg.test( device.kind ) );

	        };

	        return this.enumerateDevices()
	            .then( validate )
	            .then( filter );

	    },

	    /**
	     * Get user media
	     * @param {MediaStreamConstraints} constraints
	     * @memberOf Media
	     * @instance
	     */
	    getUserMedia: function ( constraints ) {

	        const setMediaStream = this.setMediaStream.bind( this );
	        const playVideo = this.playVideo.bind( this );
	        const onCatchError = error => { console.warn( `PANOLENS.Media: ${error}` ); };

	        return window.navigator.mediaDevices.getUserMedia( constraints )
	            .then( setMediaStream )
	            .then( playVideo )
	            .catch( onCatchError );

	    },

	    /**
	     * Set video device index
	     * @param {number} index 
	     * @memberOf Media
	     * @instance
	     */
	    setVideDeviceIndex: function ( index ) {

	        this.videoDeviceIndex = index;

	    },

	    /**
	     * Start streaming
	     * @param {MediaDeviceInfo} [targetDevice]
	     * @memberOf Media
	     * @instance
	     */
	    start: function( targetDevice ) {

	        const constraints = this.constraints;
	        const getUserMedia = this.getUserMedia.bind( this );
	        const onVideoDevices = devices => {

	            if ( !devices || devices.length === 0 ) {

	                throw Error( 'no video device found' );

	            }

	            const device = targetDevice || devices[ 0 ];
	            constraints.video.deviceId = device.deviceId;

	            return getUserMedia( constraints );

	        };

	        this.element = this.createVideoElement();

	        return this.getDevices().then( onVideoDevices );

	    },

	    /**
	     * Stop streaming
	     * @memberOf Media
	     * @instance
	     */
	    stop: function () {

	        const stream = this.stream;

	        if ( stream && stream.active ) {

	            const track = stream.getTracks()[ 0 ];

	            track.stop();

	            window.removeEventListener( 'resize', this.onWindowResize.bind( this ) );

	            this.element = null;
	            this.stream = null;

	        }

	    },

	    /**
	     * Set media stream
	     * @param {MediaStream} stream 
	     * @memberOf Media
	     * @instance
	     */
	    setMediaStream: function ( stream ) {

	        this.stream = stream;
	        this.element.srcObject = stream;

	        if ( this.scene ) {

	            this.scene.background = this.createVideoTexture();

	        }
	        
	        window.addEventListener( 'resize', this.onWindowResize.bind( this ) );

	    },

	    /**
	     * Play video element
	     * @memberOf Media
	     * @instance
	     */
	    playVideo: function () {

	        const { element } = this;

	        if ( element ) {

	            element.play();
	            this.dispatchEvent( { type: 'play' } );

	        }

	    },

	    /**
	     * Pause video element
	     * @memberOf Media
	     * @instance
	     */
	    pauseVideo: function () {

	        const { element } = this;

	        if ( element ) {

	            element.pause();
	            this.dispatchEvent( { type: 'pause' } );

	        }

	    },

	    /**
	     * Create video texture
	     * @memberOf Media
	     * @instance
	     * @returns {THREE.VideoTexture}
	     */
	    createVideoTexture: function () {

	        const video = this.element;
	        const texture = new THREE.VideoTexture( video );

	        texture.generateMipmaps = false;
	        texture.minFilter = THREE.LinearFilter;
	        texture.magFilter = THREE.LinearFilter;
	        texture.format = THREE.RGBFormat;
	        texture.center.set( 0.5, 0.5 );

	        video.addEventListener( 'canplay', this.onWindowResize.bind( this ) );

	        return texture;

	    },

	    /**
	     * Create video element
	     * @memberOf Media
	     * @instance
	     * @returns {HTMLVideoElement}
	     * @fires Media#canplay
	     */
	    createVideoElement: function() {

	        const dispatchEvent = this.dispatchEvent.bind( this );
	        const video = document.createElement( 'video' );

	        /**
	         * Video can play event
	         * @type {object}
	         * @event Media#canplay
	         */
	        const canPlay = () => dispatchEvent( { type: 'canplay' } );
	        
	        video.setAttribute( 'autoplay', '' );
	        video.setAttribute( 'muted', '' );
	        video.setAttribute( 'playsinline', '' );

	        video.style.position = 'absolute';
	        video.style.top = '0';
	        video.style.left = '0';
	        video.style.width = '100%';
	        video.style.height = '100%';
	        video.style.objectPosition = 'center';
	        video.style.objectFit = 'cover';
	        video.style.display = this.scene ? 'none' : '';

	        video.addEventListener( 'canplay', canPlay );

	        return video;

	    },

	    /**
	     * On window resize event
	     * @param {Event} event 
	     * @memberOf Media
	     * @instance
	     */
	    onWindowResize: function () {

	        if ( this.element && this.element.videoWidth && this.element.videoHeight && this.scene ) {

	            const { clientWidth: width, clientHeight: height } = this.container;
	            const texture = this.scene.background;
	            const { videoWidth, videoHeight } = this.element;
	            const cameraRatio = videoHeight / videoWidth;
	            const viewportRatio = this.container ? width / height : 1.0;
	            const ratio = cameraRatio * viewportRatio * this.ratioScalar;

	            if ( width > height ) {
	                texture.repeat.set( ratio, 1 );
	            } else {
	                texture.repeat.set( 1, 1 / ratio );
	            }

	        }

	    }

	} );

	/**
	 * @classdesc Reticle 3D Sprite
	 * @constructor
	 * @param {THREE.Color} [color=0xffffff] - Color of the reticle sprite
	 * @param {boolean} [autoSelect=true] - Auto selection
	 * @param {number} [dwellTime=1500] - Duration for dwelling sequence to complete
	 */

	function Reticle ( color = 0xffffff, autoSelect = true, dwellTime = 1500 ) {

	    this.dpr = window.devicePixelRatio;

	    const { canvas, context } = this.createCanvas();
	    const material = new THREE.SpriteMaterial( { color, map: this.createCanvasTexture( canvas ) } );

	    THREE.Sprite.call( this, material );

	    this.canvasWidth = canvas.width;
	    this.canvasHeight = canvas.height;
	    this.context = context;
	    this.color = color instanceof THREE.Color ? color : new THREE.Color( color );    

	    this.autoSelect = autoSelect;
	    this.dwellTime = dwellTime;
	    this.rippleDuration = 500;
	    this.position.z = -10;
	    this.center.set( 0.5, 0.5 );
	    this.scale.set( 0.5, 0.5, 1 );

	    this.startTimestamp = null;
	    this.timerId = null;
	    this.callback = null;

	    this.frustumCulled = false;

	    this.updateCanvasArcByProgress( 0 );

	}
	Reticle.prototype = Object.assign( Object.create( THREE.Sprite.prototype ), {

	    constructor: Reticle,

	    /**
	     * Set material color
	     * @param {THREE.Color} color 
	     * @memberOf Reticle
	     * @instance
	     */
	    setColor: function ( color ) {

	        this.material.color.copy( color instanceof THREE.Color ? color : new THREE.Color( color ) );

	    },

	    /**
	     * Create canvas texture
	     * @param {HTMLCanvasElement} canvas 
	     * @memberOf Reticle
	     * @instance
	     * @returns {THREE.CanvasTexture}
	     */
	    createCanvasTexture: function ( canvas ) {

	        const texture = new THREE.CanvasTexture( canvas );
	        texture.minFilter = THREE.LinearFilter;
	        texture.magFilter = THREE.LinearFilter;
	        texture.generateMipmaps = false;

	        return texture;

	    },

	    /**
	     * Create canvas element
	     * @memberOf Reticle
	     * @instance
	     * @returns {object} object
	     * @returns {HTMLCanvasElement} object.canvas
	     * @returns {CanvasRenderingContext2D} object.context
	     */
	    createCanvas: function () {

	        const width = 32;
	        const height = 32;
	        const canvas = document.createElement( 'canvas' );
	        const context = canvas.getContext( '2d' );
	        const dpr = this.dpr;

	        canvas.width = width * dpr;
	        canvas.height = height * dpr;
	        context.scale( dpr, dpr );

	        context.shadowBlur = 5;
	        context.shadowColor = 'rgba(200,200,200,0.9)';

	        return { canvas, context };

	    },

	    /**
	     * Update canvas arc by progress
	     * @param {number} progress 
	     * @memberOf Reticle
	     * @instance
	     */
	    updateCanvasArcByProgress: function ( progress ) {

	        const context = this.context;
	        const { canvasWidth, canvasHeight, material } = this;
	        const dpr = this.dpr;
	        const degree = progress * Math.PI * 2;
	        const color = this.color.getStyle();
	        const x = canvasWidth * 0.5 / dpr;
	        const y = canvasHeight * 0.5 / dpr;
	        const lineWidth = 3;
	        
	        context.clearRect( 0, 0, canvasWidth, canvasHeight );
	        context.beginPath();

	        if ( progress === 0 ) {
	            context.arc( x, y, canvasWidth / 16, 0, 2 * Math.PI );
	            context.fillStyle = color;
	            context.fill();
	        } else {
	            context.arc( x, y, canvasWidth / 4 - lineWidth, -Math.PI / 2, -Math.PI / 2 + degree );
	            context.strokeStyle = color;
	            context.lineWidth = lineWidth;
	            context.stroke();
	        }

	        context.closePath();

	        material.map.needsUpdate = true;

	    },

	    /**
	     * Ripple effect
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-ripple-start
	     * @fires Reticle#reticle-ripple-end
	     */
	    ripple: function () {

	        const context = this.context;
	        const { canvasWidth, canvasHeight, material } = this;
	        const duration = this.rippleDuration;
	        const timestamp = performance.now();
	        const color = this.color;
	        const dpr = this.dpr;
	        const x = canvasWidth * 0.5 / dpr;
	        const y = canvasHeight * 0.5 / dpr;

	        const update = () => {

	            const timerId = window.requestAnimationFrame( update );
	            const elapsed = performance.now() - timestamp;
	            const progress = elapsed / duration;
	            const opacity = 1.0 - progress > 0 ? 1.0 - progress : 0;
	            const radius = progress * canvasWidth * 0.5 / dpr;

	            context.clearRect( 0, 0, canvasWidth, canvasHeight );
	            context.beginPath();
	            context.arc( x, y, radius, 0, Math.PI * 2 );
	            context.fillStyle = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${opacity})`;
	            context.fill();
	            context.closePath();

	            if ( progress >= 1.0 ) {

	                window.cancelAnimationFrame( timerId );
	                this.updateCanvasArcByProgress( 0 );

	                /**
	                 * Reticle ripple end event
	                 * @type {object}
	                 * @event Reticle#reticle-ripple-end
	                 */
	                this.dispatchEvent( { type: 'reticle-ripple-end' } );

	            }

	            material.map.needsUpdate = true;

	        };

	        /**
	         * Reticle ripple start event
	         * @type {object}
	         * @event Reticle#reticle-ripple-start
	         */
	        this.dispatchEvent( { type: 'reticle-ripple-start' } );

	        update();

	    },

	    /**
	     * Make reticle visible
	     * @memberOf Reticle
	     * @instance
	     */
	    show: function () {

	        this.visible = true;

	    },

	    /**
	     * Make reticle invisible
	     * @memberOf Reticle
	     * @instance
	     */
	    hide: function () {

	        this.visible = false;

	    },

	    /**
	     * Start dwelling
	     * @param {function} callback 
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-start
	     */
	    start: function ( callback ) {

	        if ( !this.autoSelect ) {

	            return;

	        }

	        /**
	         * Reticle start event
	         * @type {object}
	         * @event Reticle#reticle-start
	         */
	        this.dispatchEvent( { type: 'reticle-start' } );

	        this.startTimestamp = performance.now();
	        this.callback = callback;
	        this.update();

	    },

	    /**
	     * End dwelling
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-end
	     */
	    end: function(){

	        if ( !this.startTimestamp ) { return; }

	        window.cancelAnimationFrame( this.timerId );

	        this.updateCanvasArcByProgress( 0 );
	        this.callback = null;
	        this.timerId = null;
	        this.startTimestamp = null;

	        /**
	         * Reticle end event
	         * @type {object}
	         * @event Reticle#reticle-end
	         */
	        this.dispatchEvent( { type: 'reticle-end' } );

	    },

	    /**
	     * Update dwelling
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-update
	     */
	    update: function () {

	        this.timerId = window.requestAnimationFrame( this.update.bind( this ) );

	        const elapsed = performance.now() - this.startTimestamp;
	        const progress = elapsed / this.dwellTime;

	        this.updateCanvasArcByProgress( progress );

	        /**
	         * Reticle update event
	         * @type {object}
	         * @event Reticle#reticle-update
	         */
	        this.dispatchEvent( { type: 'reticle-update', progress } );

	        if ( progress >= 1.0 ) {

	            window.cancelAnimationFrame( this.timerId );
	            if ( this.callback ) { this.callback(); }
	            this.end();
	            this.ripple();

	        }

	    }

	} );

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var Tween = createCommonjsModule(function (module, exports) {
	/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */


	var _Group = function () {
		this._tweens = {};
		this._tweensAddedDuringUpdate = {};
	};

	_Group.prototype = {
		getAll: function () {

			return Object.keys(this._tweens).map(function (tweenId) {
				return this._tweens[tweenId];
			}.bind(this));

		},

		removeAll: function () {

			this._tweens = {};

		},

		add: function (tween) {

			this._tweens[tween.getId()] = tween;
			this._tweensAddedDuringUpdate[tween.getId()] = tween;

		},

		remove: function (tween) {

			delete this._tweens[tween.getId()];
			delete this._tweensAddedDuringUpdate[tween.getId()];

		},

		update: function (time, preserve) {

			var tweenIds = Object.keys(this._tweens);

			if (tweenIds.length === 0) {
				return false;
			}

			time = time !== undefined ? time : TWEEN.now();

			// Tweens are updated in "batches". If you add a new tween during an update, then the
			// new tween will be updated in the next batch.
			// If you remove a tween during an update, it may or may not be updated. However,
			// if the removed tween was added during the current batch, then it will not be updated.
			while (tweenIds.length > 0) {
				this._tweensAddedDuringUpdate = {};

				for (var i = 0; i < tweenIds.length; i++) {

					var tween = this._tweens[tweenIds[i]];

					if (tween && tween.update(time) === false) {
						tween._isPlaying = false;

						if (!preserve) {
							delete this._tweens[tweenIds[i]];
						}
					}
				}

				tweenIds = Object.keys(this._tweensAddedDuringUpdate);
			}

			return true;

		}
	};

	var TWEEN = new _Group();

	TWEEN.Group = _Group;
	TWEEN._nextId = 0;
	TWEEN.nextId = function () {
		return TWEEN._nextId++;
	};


	// Include a performance.now polyfill.
	// In node.js, use process.hrtime.
	if (typeof (self) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {
		TWEEN.now = function () {
			var time = process.hrtime();

			// Convert [seconds, nanoseconds] to milliseconds.
			return time[0] * 1000 + time[1] / 1000000;
		};
	}
	// In a browser, use self.performance.now if it is available.
	else if (typeof (self) !== 'undefined' &&
	         self.performance !== undefined &&
			 self.performance.now !== undefined) {
		// This must be bound, because directly assigning this function
		// leads to an invocation exception in Chrome.
		TWEEN.now = self.performance.now.bind(self.performance);
	}
	// Use Date.now if it is available.
	else if (Date.now !== undefined) {
		TWEEN.now = Date.now;
	}
	// Otherwise, use 'new Date().getTime()'.
	else {
		TWEEN.now = function () {
			return new Date().getTime();
		};
	}


	TWEEN.Tween = function (object, group) {
		this._object = object;
		this._valuesStart = {};
		this._valuesEnd = {};
		this._valuesStartRepeat = {};
		this._duration = 1000;
		this._repeat = 0;
		this._repeatDelayTime = undefined;
		this._yoyo = false;
		this._isPlaying = false;
		this._reversed = false;
		this._delayTime = 0;
		this._startTime = null;
		this._easingFunction = TWEEN.Easing.Linear.None;
		this._interpolationFunction = TWEEN.Interpolation.Linear;
		this._chainedTweens = [];
		this._onStartCallback = null;
		this._onStartCallbackFired = false;
		this._onUpdateCallback = null;
		this._onRepeatCallback = null;
		this._onCompleteCallback = null;
		this._onStopCallback = null;
		this._group = group || TWEEN;
		this._id = TWEEN.nextId();

	};

	TWEEN.Tween.prototype = {
		getId: function () {
			return this._id;
		},

		isPlaying: function () {
			return this._isPlaying;
		},

		to: function (properties, duration) {

			this._valuesEnd = Object.create(properties);

			if (duration !== undefined) {
				this._duration = duration;
			}

			return this;

		},

		duration: function duration(d) {
			this._duration = d;
			return this;
		},

		start: function (time) {

			this._group.add(this);

			this._isPlaying = true;

			this._onStartCallbackFired = false;

			this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
			this._startTime += this._delayTime;

			for (var property in this._valuesEnd) {

				// Check if an Array was provided as property value
				if (this._valuesEnd[property] instanceof Array) {

					if (this._valuesEnd[property].length === 0) {
						continue;
					}

					// Create a local copy of the Array with the start value at the front
					this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

				}

				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (this._object[property] === undefined) {
					continue;
				}

				// Save the starting value.
				this._valuesStart[property] = this._object[property];

				if ((this._valuesStart[property] instanceof Array) === false) {
					this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}

				this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

			}

			return this;

		},

		stop: function () {

			if (!this._isPlaying) {
				return this;
			}

			this._group.remove(this);
			this._isPlaying = false;

			if (this._onStopCallback !== null) {
				this._onStopCallback(this._object);
			}

			this.stopChainedTweens();
			return this;

		},

		end: function () {

			this.update(Infinity);
			return this;

		},

		stopChainedTweens: function () {

			for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
				this._chainedTweens[i].stop();
			}

		},

		group: function (group) {
			this._group = group;
			return this;
		},

		delay: function (amount) {

			this._delayTime = amount;
			return this;

		},

		repeat: function (times) {

			this._repeat = times;
			return this;

		},

		repeatDelay: function (amount) {

			this._repeatDelayTime = amount;
			return this;

		},

		yoyo: function (yoyo) {

			this._yoyo = yoyo;
			return this;

		},

		easing: function (easingFunction) {

			this._easingFunction = easingFunction;
			return this;

		},

		interpolation: function (interpolationFunction) {

			this._interpolationFunction = interpolationFunction;
			return this;

		},

		chain: function () {

			this._chainedTweens = arguments;
			return this;

		},

		onStart: function (callback) {

			this._onStartCallback = callback;
			return this;

		},

		onUpdate: function (callback) {

			this._onUpdateCallback = callback;
			return this;

		},

		onRepeat: function onRepeat(callback) {

			this._onRepeatCallback = callback;
			return this;

		},

		onComplete: function (callback) {

			this._onCompleteCallback = callback;
			return this;

		},

		onStop: function (callback) {

			this._onStopCallback = callback;
			return this;

		},

		update: function (time) {

			var property;
			var elapsed;
			var value;

			if (time < this._startTime) {
				return true;
			}

			if (this._onStartCallbackFired === false) {

				if (this._onStartCallback !== null) {
					this._onStartCallback(this._object);
				}

				this._onStartCallbackFired = true;
			}

			elapsed = (time - this._startTime) / this._duration;
			elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

			value = this._easingFunction(elapsed);

			for (property in this._valuesEnd) {

				// Don't update properties that do not exist in the source object
				if (this._valuesStart[property] === undefined) {
					continue;
				}

				var start = this._valuesStart[property] || 0;
				var end = this._valuesEnd[property];

				if (end instanceof Array) {

					this._object[property] = this._interpolationFunction(end, value);

				} else {

					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {

						if (end.charAt(0) === '+' || end.charAt(0) === '-') {
							end = start + parseFloat(end);
						} else {
							end = parseFloat(end);
						}
					}

					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						this._object[property] = start + (end - start) * value;
					}

				}

			}

			if (this._onUpdateCallback !== null) {
				this._onUpdateCallback(this._object, elapsed);
			}

			if (elapsed === 1) {

				if (this._repeat > 0) {

					if (isFinite(this._repeat)) {
						this._repeat--;
					}

					// Reassign starting values, restart by making startTime = now
					for (property in this._valuesStartRepeat) {

						if (typeof (this._valuesEnd[property]) === 'string') {
							this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
						}

						if (this._yoyo) {
							var tmp = this._valuesStartRepeat[property];

							this._valuesStartRepeat[property] = this._valuesEnd[property];
							this._valuesEnd[property] = tmp;
						}

						this._valuesStart[property] = this._valuesStartRepeat[property];

					}

					if (this._yoyo) {
						this._reversed = !this._reversed;
					}

					if (this._repeatDelayTime !== undefined) {
						this._startTime = time + this._repeatDelayTime;
					} else {
						this._startTime = time + this._delayTime;
					}

					if (this._onRepeatCallback !== null) {
						this._onRepeatCallback(this._object);
					}

					return true;

				} else {

					if (this._onCompleteCallback !== null) {

						this._onCompleteCallback(this._object);
					}

					for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						this._chainedTweens[i].start(this._startTime + this._duration);
					}

					return false;

				}

			}

			return true;

		}
	};


	TWEEN.Easing = {

		Linear: {

			None: function (k) {

				return k;

			}

		},

		Quadratic: {

			In: function (k) {

				return k * k;

			},

			Out: function (k) {

				return k * (2 - k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}

				return - 0.5 * (--k * (k - 2) - 1);

			}

		},

		Cubic: {

			In: function (k) {

				return k * k * k;

			},

			Out: function (k) {

				return --k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k + 2);

			}

		},

		Quartic: {

			In: function (k) {

				return k * k * k * k;

			},

			Out: function (k) {

				return 1 - (--k * k * k * k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}

				return - 0.5 * ((k -= 2) * k * k * k - 2);

			}

		},

		Quintic: {

			In: function (k) {

				return k * k * k * k * k;

			},

			Out: function (k) {

				return --k * k * k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k * k * k + 2);

			}

		},

		Sinusoidal: {

			In: function (k) {

				return 1 - Math.cos(k * Math.PI / 2);

			},

			Out: function (k) {

				return Math.sin(k * Math.PI / 2);

			},

			InOut: function (k) {

				return 0.5 * (1 - Math.cos(Math.PI * k));

			}

		},

		Exponential: {

			In: function (k) {

				return k === 0 ? 0 : Math.pow(1024, k - 1);

			},

			Out: function (k) {

				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}

				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

			}

		},

		Circular: {

			In: function (k) {

				return 1 - Math.sqrt(1 - k * k);

			},

			Out: function (k) {

				return Math.sqrt(1 - (--k * k));

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}

				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

			}

		},

		Elastic: {

			In: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

			},

			Out: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				k *= 2;

				if (k < 1) {
					return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
				}

				return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

			}

		},

		Back: {

			In: function (k) {

				var s = 1.70158;

				return k * k * ((s + 1) * k - s);

			},

			Out: function (k) {

				var s = 1.70158;

				return --k * k * ((s + 1) * k + s) + 1;

			},

			InOut: function (k) {

				var s = 1.70158 * 1.525;

				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}

				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

			}

		},

		Bounce: {

			In: function (k) {

				return 1 - TWEEN.Easing.Bounce.Out(1 - k);

			},

			Out: function (k) {

				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}

			},

			InOut: function (k) {

				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}

				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

			}

		}

	};

	TWEEN.Interpolation = {

		Linear: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;

			if (k < 0) {
				return fn(v[0], v[1], f);
			}

			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}

			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

		},

		Bezier: function (v, k) {

			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;

			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}

			return b;

		},

		CatmullRom: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;

			if (v[0] === v[m]) {

				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}

				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

			} else {

				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}

				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}

				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

			}

		},

		Utils: {

			Linear: function (p0, p1, t) {

				return (p1 - p0) * t + p0;

			},

			Bernstein: function (n, i) {

				var fc = TWEEN.Interpolation.Utils.Factorial;

				return fc(n) / fc(i) / fc(n - i);

			},

			Factorial: (function () {

				var a = [1];

				return function (n) {

					var s = 1;

					if (a[n]) {
						return a[n];
					}

					for (var i = n; i > 1; i--) {
						s *= i;
					}

					a[n] = s;
					return s;

				};

			})(),

			CatmullRom: function (p0, p1, p2, p3, t) {

				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;

				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

			}

		}

	};

	// UMD (Universal Module Definition)
	(function (root) {

		{

			// Node.js
			module.exports = TWEEN;

		}

	})();
	});

	/**
	 * @classdesc Information spot attached to panorama
	 * @constructor
	 * @param {number} [scale=300] - Default scale
	 * @param {string} [imageSrc=PANOLENS.DataImage.Info] - Image overlay info
	 * @param {boolean} [animated=true] - Enable default hover animation
	 */
	function Infospot ( scale = 300, imageSrc, animated ) {
		
	    const duration = 500, scaleFactor = 1.3;

	    imageSrc = imageSrc || DataImage.Info;

	    THREE.Sprite.call( this );

	    this.type = 'infospot';

	    this.animated = animated !== undefined ? animated : true;
	    this.isHovering = false;

	    /*
	     * TODO: Three.js bug hotfix for sprite raycasting r104
	     * https://github.com/mrdoob/three.js/issues/14624
	     */
	    this.frustumCulled = false;

	    this.element = null;
	    this.toPanorama = null;
	    this.cursorStyle = null;

	    this.mode = MODES.NORMAL;

	    this.scale.set( scale, scale, 1 );
	    this.rotation.y = Math.PI;

	    this.container = null;

	    this.originalRaycast = this.raycast;

	    // Event Handler
	    this.HANDLER_FOCUS = null;	

	    this.material.side = THREE.DoubleSide;
	    this.material.depthTest = false;
	    this.material.transparent = true;
	    this.material.opacity = 0;

	    this.scaleUpAnimation = new Tween.Tween();
	    this.scaleDownAnimation = new Tween.Tween();


	    const postLoad = function ( texture ) {

	        if ( !this.material ) { return; }

	        const ratio = texture.image.width / texture.image.height;
	        const textureScale = new THREE.Vector3();

	        texture.image.width = texture.image.naturalWidth || 64;
	        texture.image.height = texture.image.naturalHeight || 64;

	        this.scale.set( ratio * scale, scale, 1 );

	        textureScale.copy( this.scale );

	        this.scaleUpAnimation = new Tween.Tween( this.scale )
	            .to( { x: textureScale.x * scaleFactor, y: textureScale.y * scaleFactor }, duration )
	            .easing( Tween.Easing.Elastic.Out );

	        this.scaleDownAnimation = new Tween.Tween( this.scale )
	            .to( { x: textureScale.x, y: textureScale.y }, duration )
	            .easing( Tween.Easing.Elastic.Out );

	        this.material.map = texture;
	        this.material.needsUpdate = true;

	    }.bind( this );

	    // Add show and hide animations
	    this.showAnimation = new Tween.Tween( this.material )
	        .to( { opacity: 1 }, duration )
	        .onStart( this.enableRaycast.bind( this, true ) )
	        .easing( Tween.Easing.Quartic.Out );

	    this.hideAnimation = new Tween.Tween( this.material )
	        .to( { opacity: 0 }, duration )
	        .onStart( this.enableRaycast.bind( this, false ) )
	        .easing( Tween.Easing.Quartic.Out );

	    // Attach event listeners
	    this.addEventListener( 'click', this.onClick );
	    this.addEventListener( 'hover', this.onHover );
	    this.addEventListener( 'hoverenter', this.onHoverStart );
	    this.addEventListener( 'hoverleave', this.onHoverEnd );
	    this.addEventListener( 'panolens-dual-eye-effect', this.onDualEyeEffect );
	    this.addEventListener( 'panolens-container', this.setContainer.bind( this ) );
	    this.addEventListener( 'dismiss', this.onDismiss );
	    this.addEventListener( 'panolens-infospot-focus', this.setFocusMethod );

	    TextureLoader.load( imageSrc, postLoad );	

	}
	Infospot.prototype = Object.assign( Object.create( THREE.Sprite.prototype ), {

	    constructor: Infospot,

	    /**
	     * Set infospot container
	     * @param {HTMLElement|object} data - Data with container information
	     * @memberOf Infospot
	     * @instance
	     */
	    setContainer: function ( data ) {

	        let container;
		
	        if ( data instanceof HTMLElement ) {
		
	            container = data;
		
	        } else if ( data && data.container ) {
		
	            container = data.container;
		
	        }
		
	        // Append element if exists
	        if ( container && this.element ) {
		
	            container.appendChild( this.element );
		
	        }
		
	        this.container = container;
		
	    },

	    /**
	     * Get container
	     * @memberOf Infospot
	     * @instance
	     * @return {HTMLElement} - The container of this infospot
	     */
	    getContainer: function () {

	        return this.container;

	    },

	    /**
	     * This will be called by a click event
	     * Translate and lock the hovering element if any
	     * @param  {object} event - Event containing mouseEvent with clientX and clientY
	     * @memberOf Infospot
	     * @instance
	     */
	    onClick: function ( event ) {

	        if ( this.element && this.getContainer() ) {

	            this.onHoverStart( event );

	            // Lock element
	            this.lockHoverElement();

	        }

	    },

	    /**
	     * Dismiss current element if any
	     * @param  {object} event - Dismiss event
	     * @memberOf Infospot
	     * @instance
	     */
	    onDismiss: function () {

	        if ( this.element ) {

	            this.unlockHoverElement();
	            this.onHoverEnd();

	        }

	    },

	    /**
	     * This will be called by a mouse hover event
	     * Translate the hovering element if any
	     * @param  {object} event - Event containing mouseEvent with clientX and clientY
	     * @memberOf Infospot
	     * @instance
	     */
	    onHover: function () {},

	    /**
	     * This will be called on a mouse hover start
	     * Sets cursor style to 'pointer', display the element and scale up the infospot
	     * @param {object} event
	     * @memberOf Infospot
	     * @instance
	     */
	    onHoverStart: function ( event ) {

	        if ( !this.getContainer() ) { return; }

	        const cursorStyle = this.cursorStyle || ( this.mode === MODES.NORMAL ? 'pointer' : 'default' );
	        const { scaleDownAnimation, scaleUpAnimation, element } = this;

	        this.isHovering = true;
	        this.container.style.cursor = cursorStyle;
			
	        if ( this.animated ) {

	            scaleDownAnimation.stop();
	            scaleUpAnimation.start();

	        }
			
	        if ( element && event.mouseEvent.clientX >= 0 && event.mouseEvent.clientY >= 0 ) {

	            const { left, right, style } = element;

	            if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

	                style.display = 'none';
	                left.style.display = 'block';
	                right.style.display = 'block';

	                // Store element width for reference
	                element._width = left.clientWidth;
	                element._height = left.clientHeight;

	            } else {

	                style.display = 'block';
	                if ( left ) { left.style.display = 'none'; }
	                if ( right ) { right.style.display = 'none'; }

	                // Store element width for reference
	                element._width = element.clientWidth;
	                element._height = element.clientHeight;

	            }
				
	        }

	    },

	    /**
	     * This will be called on a mouse hover end
	     * Sets cursor style to 'default', hide the element and scale down the infospot
	     * @memberOf Infospot
	     * @instance
	     */
	    onHoverEnd: function () {


	        if ( !this.getContainer() ) { return; }

	        const { scaleDownAnimation, scaleUpAnimation, element } = this;

	        this.isHovering = false;
	        this.container.style.cursor = 'default';

	        if ( this.animated ) {

	            scaleUpAnimation.stop();
	            scaleDownAnimation.start();

	        }

	        //if ( element && !this.element.locked ) {
	        if ( element ) {


	            const { left, right, style } = element;

	            style.display = 'none';
	            if ( left ) { left.style.display = 'none'; }
	            if ( right ) { right.style.display = 'none'; }

	            this.unlockHoverElement();

	        }

	    },

	    /**
	     * On dual eye effect handler
	     * Creates duplicate left and right element
	     * @param  {object} event - panolens-dual-eye-effect event
	     * @memberOf Infospot
	     * @instance
	     */
	    onDualEyeEffect: function ( event ) {
			
	        if ( !this.getContainer() ) { return; }

	        let element, halfWidth, halfHeight;

	        this.mode = event.mode;

	        element = this.element;

	        halfWidth = this.container.clientWidth / 2;
	        halfHeight = this.container.clientHeight / 2;

	        if ( !element ) {

	            return;

	        }

	        if ( !element.left && !element.right ) {

	            element.left = element.cloneNode( true );
	            element.right = element.cloneNode( true );

	        }

	        if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

	            element.left.style.display = element.style.display;
	            element.right.style.display = element.style.display;
	            element.style.display = 'none';

	        } else {

	            element.style.display = element.left.style.display;
	            element.left.style.display = 'none';
	            element.right.style.display = 'none';

	        }

	        // Update elements translation
	        this.translateElement( halfWidth, halfHeight );

	        this.container.appendChild( element.left );
	        this.container.appendChild( element.right );

	    },

	    /**
	     * Translate the hovering element by css transform
	     * @param  {number} x - X position on the window screen
	     * @param  {number} y - Y position on the window screen
	     * @memberOf Infospot
	     * @instance
	     */
	    translateElement: function ( x, y ) {

	        if ( !this.element._width || !this.element._height || !this.getContainer() ) {

	            return;

	        }

	        let left, top, element, width, height, delta, container;

	        container = this.container;
	        element = this.element;
	        width = element._width / 2;
	        height = element._height / 2;
	        delta = element.verticalDelta !== undefined ? element.verticalDelta : 40;

	        left = x - width;
	        top = y - height - delta;

	        if ( ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) 
					&& element.left && element.right
					&& !( x === container.clientWidth / 2 && y === container.clientHeight / 2 ) ) {

	            left = container.clientWidth / 4 - width + ( x - container.clientWidth / 2 );
	            top = container.clientHeight / 2 - height - delta + ( y - container.clientHeight / 2 );

	            this.setElementStyle( 'transform', element.left, 'translate(' + left + 'px, ' + top + 'px)' );

	            left += container.clientWidth / 2;

	            this.setElementStyle( 'transform', element.right, 'translate(' + left + 'px, ' + top + 'px)' );

	        } else {

	            this.setElementStyle( 'transform', element, 'translate(' + left + 'px, ' + top + 'px)' );

	        }

	    },

	    /**
	     * Set vendor specific css
	     * @param {string} type - CSS style name
	     * @param {HTMLElement} element - The element to be modified
	     * @param {string} value - Style value
	     * @memberOf Infospot
	     * @instance
	     */
	    setElementStyle: function ( type, element, value ) {

	        const style = element.style;

	        if ( type === 'transform' ) {

	            style.webkitTransform = style.msTransform = style.transform = value;

	        }

	    },

	    /**
	     * Set hovering text content
	     * @param {string} text - Text to be displayed
	     * @memberOf Infospot
	     * @instance
	     */
	    setText: function ( text ) {

	        if ( this.element ) {

	            this.element.textContent = text;

	        }

	    },

	    /**
	     * Set cursor css style on hover
	     * @memberOf Infospot
	     * @instance
	     */
	    setCursorHoverStyle: function ( style ) {

	        this.cursorStyle = style;

	    },

	    /**
	     * Add hovering text element
	     * @param {string} text - Text to be displayed
	     * @param {number} [delta=40] - Vertical delta to the infospot
	     * @memberOf Infospot
	     * @instance
	     */
	    addHoverText: function ( text, delta = 40 ) {

	        if ( !this.element ) {

	            this.element = document.createElement( 'div' );
	            this.element.style.display = 'none';
	            this.element.style.color = '#fff';
	            this.element.style.top = 0;
	            this.element.style.maxWidth = '50%';
	            this.element.style.maxHeight = '50%';
	            this.element.style.textShadow = '0 0 3px #000000';
	            this.element.style.fontFamily = '"Trebuchet MS", Helvetica, sans-serif';
	            this.element.style.position = 'absolute';
	            this.element.classList.add( 'panolens-infospot' );
	            this.element.verticalDelta = delta;

	        }

	        this.setText( text );

	    },

	    /**
	     * Add hovering element by cloning an element
	     * @param {HTMLDOMElement} el - Element to be cloned and displayed
	     * @param {number} [delta=40] - Vertical delta to the infospot
	     * @memberOf Infospot
	     * @instance
	     */
	    addHoverElement: function ( el, delta = 40 ) {

	        if ( !this.element ) { 

	            this.element = el.cloneNode( true );
	            this.element.style.display = 'none';
	            this.element.style.top = 0;
	            this.element.style.position = 'absolute';
	            this.element.classList.add( 'panolens-infospot' );
	            this.element.verticalDelta = delta;

	        }

	    },

	    /**
	     * Remove hovering element
	     * @memberOf Infospot
	     * @instance
	     */
	    removeHoverElement: function () {

	        if ( this.element ) { 

	            if ( this.element.left ) {

	                this.container.removeChild( this.element.left );
	                this.element.left = null;

	            }

	            if ( this.element.right ) {

	                this.container.removeChild( this.element.right );
	                this.element.right = null;

	            }

	            this.container.removeChild( this.element );
	            this.element = null;

	        }

	    },

	    /**
	     * Lock hovering element
	     * @memberOf Infospot
	     * @instance
	     */
	    lockHoverElement: function () {

	        if ( this.element ) { 

	            this.element.locked = true;

	        }

	    },

	    /**
	     * Unlock hovering element
	     * @memberOf Infospot
	     * @instance
	     */
	    unlockHoverElement: function () {

	        if ( this.element ) { 

	            this.element.locked = false;

	        }

	    },

	    /**
	     * Enable raycasting
	     * @param {boolean} [enabled=true]
	     * @memberOf Infospot
	     * @instance
	     */
	    enableRaycast: function ( enabled = true ) {

	        if ( enabled ) {

	            this.raycast = this.originalRaycast;

	        } else {

	            this.raycast = () => {};

	        }

	    },

	    /**
	     * Show infospot
	     * @param  {number} [delay=0] - Delay time to show
	     * @memberOf Infospot
	     * @instance
	     */
	    show: function ( delay = 0 ) {

	        const { animated, hideAnimation, showAnimation, material } = this;

	        if ( animated ) {

	            hideAnimation.stop();
	            showAnimation.delay( delay ).start();

	        } else {

	            this.enableRaycast( true );
	            material.opacity = 1;

	        }

	    },

	    /**
	     * Hide infospot
	     * @param  {number} [delay=0] - Delay time to hide
	     * @memberOf Infospot
	     * @instance
	     */
	    hide: function ( delay = 0 ) {

	        const { animated, hideAnimation, showAnimation, material, element } = this;

	        if ( element ) {
	            const { style } = element;
	            style.display = 'none';
	        }

	        if ( animated ) {

	            showAnimation.stop();
	            hideAnimation.delay( delay ).start();

	        } else {

	            this.enableRaycast( false );
	            material.opacity = 0;

	        }
			
	    },

	    /**
	     * Set focus event handler
	     * @memberOf Infospot
	     * @instance
	     */
	    setFocusMethod: function ( event ) {

	        if ( event ) {

	            this.HANDLER_FOCUS = event.method;

	        }

	    },

	    /**
	     * Focus camera center to this infospot
	     * @param {number} [duration=1000] - Duration to tween
	     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
	     * @memberOf Infospot
	     * @instance
	     */
	    focus: function ( duration, easing ) {

	        if ( this.HANDLER_FOCUS ) {

	            this.HANDLER_FOCUS( this.position, duration, easing );
	            this.onDismiss();

	        }

	    },

	    /**
	     * Dispose
	     * @memberOf Infospot
	     * @instance
	     */
	    dispose: function () {

	        const { geometry, material } = this;
	        const { map } = material;

	        this.removeHoverElement();

	        if ( this.parent ) {

	            this.parent.remove( this );

	        }

	        if ( map ) { map.dispose(); material.map = null; }
	        if ( geometry ) { geometry.dispose(); this.geometry = null; }
	        if ( material ) { material.dispose(); this.material = null; }

	    }

	} );

	/**
	 * @classdesc Widget for controls
	 * @constructor
	 * @param {HTMLElement} container - A domElement where default control widget will be attached to
	 */
	function Widget ( container ) {

	    if ( !container ) {

	        console.warn( 'PANOLENS.Widget: No container specified' );

	    }

	    THREE.EventDispatcher.call( this );

	    this.DEFAULT_TRANSITION  = 'all 0.27s ease';
	    this.TOUCH_ENABLED = !!(( 'ontouchstart' in window ) || window.DocumentTouch && document instanceof DocumentTouch);
	    this.PREVENT_EVENT_HANDLER = function ( event ) {
	        event.preventDefault();
	        event.stopPropagation();
	    };

	    this.container = container;

	    this.barElement = null;
	    this.fullscreenElement = null;
	    this.cardboardElement = null;
	    this.videoElement = null;
	    this.settingElement = null;

	    this.mainMenu = null;

	    this.activeMainItem = null;
	    this.activeSubMenu = null;
	    this.mask = null;

	}

	Widget.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype ), {

	    constructor: Widget,

	    /**
	     * Add control bar
	     * @memberOf Widget
	     * @instance
	     */
	    addControlBar: function () {

	        if ( !this.container ) {

	            console.warn( 'Widget container not set' ); 
	            return; 
	        }

	        var scope = this, bar, styleTranslate, styleOpacity, gradientStyle;

	        gradientStyle = 'linear-gradient(bottom, rgba(0,0,0,0.2), rgba(0,0,0,0))';

	        bar = document.createElement( 'div' );
	        bar.style.width = '100%';
	        bar.style.height = '44px';
	        bar.style.float = 'left';
	        bar.style.transform = bar.style.webkitTransform = bar.style.msTransform = 'translateY(-100%)';
	        bar.style.background = '-webkit-' + gradientStyle;
	        bar.style.background = '-moz-' + gradientStyle;
	        bar.style.background = '-o-' + gradientStyle;
	        bar.style.background = '-ms-' + gradientStyle;
	        bar.style.background = gradientStyle;
	        bar.style.transition = this.DEFAULT_TRANSITION;
	        bar.style.pointerEvents = 'none';
	        bar.isHidden = false;
	        bar.toggle = function () {
	            bar.isHidden = !bar.isHidden;
	            styleTranslate = bar.isHidden ? 'translateY(0)' : 'translateY(-100%)';
	            styleOpacity = bar.isHidden ? 0 : 1;
	            bar.style.transform = bar.style.webkitTransform = bar.style.msTransform = styleTranslate;
	            bar.style.opacity = styleOpacity;
	        };

	        // Menu
	        var menu = this.createDefaultMenu();
	        this.mainMenu = this.createMainMenu( menu );
	        bar.appendChild( this.mainMenu );

	        // Mask
	        var mask = this.createMask();
	        this.mask = mask;
	        this.container.appendChild( mask );

	        // Dispose
	        bar.dispose = function () {

	            if ( scope.fullscreenElement ) {

	                bar.removeChild( scope.fullscreenElement );
	                scope.fullscreenElement.dispose();
	                scope.fullscreenElement = null;

	            }

	            if ( scope.settingElement ) {

	                bar.removeChild( scope.settingElement );
	                scope.settingElement.dispose();
	                scope.settingElement = null;

	            }

	            if ( scope.videoElement ) {

	                bar.removeChild( scope.videoElement );
	                scope.videoElement.dispose();
	                scope.videoElement = null;

	            }

	        };

	        this.container.appendChild( bar );

	        // Mask events
	        this.mask.addEventListener( 'mousemove', this.PREVENT_EVENT_HANDLER, true );
	        this.mask.addEventListener( 'mouseup', this.PREVENT_EVENT_HANDLER, true );
	        this.mask.addEventListener( 'mousedown', this.PREVENT_EVENT_HANDLER, true );
	        this.mask.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', function ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            scope.mask.hide();
	            scope.settingElement.deactivate();

	        }, false );

	        // Event listener
	        this.addEventListener( 'control-bar-toggle', bar.toggle );

	        this.barElement = bar;

	    },

	    /**
	     * Create default menu
	     * @memberOf Widget
	     * @instance
	     */
	    createDefaultMenu: function () {

	        var scope = this, handler;

	        handler = function ( method, data ) {

	            return function () {

	                scope.dispatchEvent( { 

	                    type: 'panolens-viewer-handler', 
	                    method: method, 
	                    data: data 

	                } ); 

	            };

	        };

	        return [

	            { 
	                title: 'Control', 
	                subMenu: [ 
	                    { 
	                        title: this.TOUCH_ENABLED ? 'Touch' : 'Mouse', 
	                        handler: handler( 'enableControl', CONTROLS.ORBIT )
	                    },
	                    { 
	                        title: 'Sensor', 
	                        handler: handler( 'enableControl', CONTROLS.DEVICEORIENTATION ) 
	                    } 
	                ]
	            },

	            { 
	                title: 'Mode', 
	                subMenu: [ 
	                    { 
	                        title: 'Normal',
	                        handler: handler( 'disableEffect' )
	                    }, 
	                    { 
	                        title: 'Cardboard',
	                        handler: handler( 'enableEffect', MODES.CARDBOARD )
	                    },
	                    { 
	                        title: 'Stereoscopic',
	                        handler: handler( 'enableEffect', MODES.STEREO )
	                    }
	                ]
	            }

	        ];

	    },

	    /**
	     * Add buttons on top of control bar
	     * @param {string} name - The control button name to be created
	     * @memberOf Widget
	     * @instance
	     */
	    addControlButton: function ( name ) {

	        let element;

	        switch( name ) {

	        case 'fullscreen':

	            element = this.createFullscreenButton();
	            this.fullscreenElement = element; 

	            break;

	        case 'cardboard':

	            element = this.createCardboardButton();
	            this.cardboardElement = element;

	            break;

	        case 'setting':

	            element = this.createSettingButton();
	            this.settingElement = element;

	            break;

	        case 'video':

	            element = this.createVideoControl();
	            this.videoElement = element;

	            break;

	        default:

	            return;

	        }

	        if ( !element ) {

	            return;

	        }

	        this.barElement.appendChild( element );

	    },

	    /**
	     * Create modal mask
	     * @memberOf Widget
	     * @instance
	     */
	    createMask: function () {

	        const element = document.createElement( 'div' );
	        element.style.position = 'absolute';
	        element.style.top = 0;
	        element.style.left = 0;
	        element.style.width = '100%';
	        element.style.height = '100%';
	        element.style.background = 'transparent';
	        element.style.display = 'none';

	        element.show = function () {

	            this.style.display = 'block';

	        };

	        element.hide = function () {

	            this.style.display = 'none';

	        };

	        return element;

	    },

	    /**
	     * Create Setting button to toggle menu
	     * @memberOf Widget
	     * @instance
	     */
	    createCardboardButton: function () {

	        let scope = this, cardboard;

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            if ( this.activated ) {
	                this.deactivate();
	            } else {
	                this.activate();
	            }

	            var clickEvent = new Event('ontouchstart' in window ? 'touchend' : 'click');
	            scope.fullscreenElement.dispatchEvent(clickEvent);
	        }

	        cardboard = this.createCustomItem( { 

	            style: { 

	                backgroundImage: 'url("' + DataImage.Cardboard + '")',
	                webkitTransition: this.DEFAULT_TRANSITION,
	                transition: this.DEFAULT_TRANSITION

	            },

	            onTap: onTap

	        } );

	        cardboard.handler = function ( method, data ) {
	            scope.dispatchEvent( { 
	                type: 'panolens-viewer-handler', 
	                method: method, 
	                data: data 
	            } ); 
	        };

	        cardboard.activate = function () {

	            this.handler( 'enableEffect', MODES.CARDBOARD );
	            this.handler( 'enableControl', CONTROLS.DEVICEORIENTATION );
	            document.querySelector('.panolens-container').classList.add('cardboard_mode');
	            this.activated = true;

	        };

	        cardboard.deactivate = function () {

	            this.handler( 'disableEffect' );
	            this.handler( 'enableControl', CONTROLS.ORBIT );
	            document.querySelector('.panolens-container').classList.remove('cardboard_mode');
	            this.activated = false;
				
	        };

	        cardboard.activated = false;

	        return cardboard;

	    },

	    /**
	     * Create Setting button to toggle menu
	     * @memberOf Widget
	     * @instance
	     */
	    createSettingButton: function () {

	        let scope = this, item;

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            scope.mainMenu.toggle();

	            if ( this.activated ) {
	    
	                this.deactivate();

	            } else {

	                this.activate();

	            }

	        }

	        item = this.createCustomItem( { 

	            style: { 

	                backgroundImage: 'url("' + DataImage.Setting + '")',
	                webkitTransition: this.DEFAULT_TRANSITION,
	                transition: this.DEFAULT_TRANSITION

	            },

	            onTap: onTap

	        } );

	        item.activate = function () {

	            this.style.transform = 'rotate3d(0,0,1,90deg)';
	            this.activated = true;
	            scope.mask.show();

	        };

	        item.deactivate = function () {

	            this.style.transform = 'rotate3d(0,0,0,0)';
	            this.activated = false;
	            scope.mask.hide();

	            if ( scope.mainMenu && scope.mainMenu.visible ) {

	                scope.mainMenu.hide();
	                
	            }

	            if ( scope.activeSubMenu && scope.activeSubMenu.visible ) {

	                scope.activeSubMenu.hide();

	            }

	            if ( scope.mainMenu && scope.mainMenu._width ) {

	                scope.mainMenu.changeSize( scope.mainMenu._width );
	                scope.mainMenu.unslideAll();

	            }
	            
	        };

	        item.activated = false;

	        return item;

	    },

	    /**
	     * Create Fullscreen button
	     * @return {HTMLSpanElement} - The dom element icon for fullscreen
	     * @memberOf Widget
	     * @instance
	     * @fires Widget#panolens-viewer-handler
	     */
	    createFullscreenButton: function () {

	        let scope = this, item, isFullscreen = false, tapSkipped = true, stylesheetId;

	        const { container } = this;

	        stylesheetId = 'panolens-style-addon';

	        // Don't create button if no support
	        if ( !document.fullscreenEnabled       && 
				!document.webkitFullscreenEnabled &&
				!document.mozFullScreenEnabled    &&
				!document.msFullscreenEnabled ) {
	            return;
	        }

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            tapSkipped = false;

	            if ( !isFullscreen ) {

	                if ( container.requestFullscreen ) { container.requestFullscreen(); }
	                if ( container.msRequestFullscreen ) { container.msRequestFullscreen(); }
	                if ( container.webkitRequestFullscreen ) { container.webkitRequestFullscreen( Element.ALLOW_KEYBOARD_INPUT ); }
	              
	                isFullscreen = true;

	            } else {

	                if ( document.exitFullscreen ) { document.exitFullscreen(); }
	                if ( document.msExitFullscreen ) { document.msExitFullscreen(); }
	                if ( document.webkitExitFullscreen ) { document.webkitExitFullscreen( ); }

	                isFullscreen = false;

	            }

	            this.style.backgroundImage = ( isFullscreen ) 
	                ? 'url("' + DataImage.FullscreenLeave + '")' 
	                : 'url("' + DataImage.FullscreenEnter + '")';

	        }

	        function onFullScreenChange () {

	            if ( tapSkipped ) {

	                isFullscreen = !isFullscreen; 

	                item.style.backgroundImage = ( isFullscreen ) 
	                    ? 'url("' + DataImage.FullscreenLeave + '")' 
	                    : 'url("' + DataImage.FullscreenEnter + '")';

	            }

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @event Widget#panolens-viewer-handler
	             * @property {string} method - 'onWindowResize' function call on Viewer
	             */
	            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onWindowResize' } );

	            tapSkipped = true;

	        }

	        document.addEventListener( 'fullscreenchange', onFullScreenChange, false );
	        document.addEventListener( 'webkitfullscreenchange', onFullScreenChange, false );
	        document.addEventListener( 'mozfullscreenchange', onFullScreenChange, false );
	        document.addEventListener( 'MSFullscreenChange', onFullScreenChange, false );

	        item = this.createCustomItem( { 

	            style: { 

	                backgroundImage: 'url("' + DataImage.FullscreenEnter + '")' 

	            },

	            onTap: onTap

	        } );

	        // Add fullscreen stlye if not exists
	        if ( !document.querySelector( stylesheetId ) ) {
	            const sheet = document.createElement( 'style' );
	            sheet.id = stylesheetId;
	            sheet.innerHTML = ':-webkit-full-screen { width: 100% !important; height: 100% !important }';
	            document.body.appendChild( sheet );
	        }
			
	        return item;

	    },

	    /**
	     * Create video control container
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon for video control
	     */
	    createVideoControl: function () {

	        const item = document.createElement( 'span' );
	        item.style.display = 'none';
	        item.show = function () { 

	            item.style.display = '';

	        };

	        item.hide = function () { 

	            item.style.display = 'none';
	            item.controlButton.paused = true;
	            item.controlButton.update();

	        };

	        item.controlButton = this.createVideoControlButton();
	        item.seekBar = this.createVideoControlSeekbar();
			
	        item.appendChild( item.controlButton );
	        item.appendChild( item.seekBar );

	        item.dispose = function () {

	            item.removeChild( item.controlButton );
	            item.removeChild( item.seekBar );

	            item.controlButton.dispose();
	            item.controlButton = null;

	            item.seekBar.dispose();
	            item.seekBar = null;

	        };

	        this.addEventListener( 'video-control-show', item.show );
	        this.addEventListener( 'video-control-hide', item.hide );

	        return item;

	    },

	    /**
	     * Create video control button
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon for video control
	     * @fires Widget#panolens-viewer-handler
	     */
	    createVideoControlButton: function () {

	        const scope = this;

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @event Widget#panolens-viewer-handler
	             * @property {string} method - 'toggleVideoPlay' function call on Viewer
	             */
	            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'toggleVideoPlay', data: !this.paused } );

	            this.paused = !this.paused;

	            item.update();

	        }
	        const item = this.createCustomItem( { 

	            style: { 

	                float: 'left',
	                backgroundImage: 'url("' + DataImage.VideoPlay + '")'

	            },

	            onTap: onTap

	        } );

	        item.paused = true;

	        item.update = function ( paused ) {

	            this.paused = paused !== undefined ? paused : this.paused;

	            this.style.backgroundImage = 'url("' + ( this.paused 
	                ? DataImage.VideoPlay 
	                : DataImage.VideoPause ) + '")';

	        };

	        return item;

	    },

	    /**
	     * Create video seekbar
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon for video seekbar
	     * @fires Widget#panolens-viewer-handler
	     */
	    createVideoControlSeekbar: function () {

	        let scope = this, item, progressElement, progressElementControl,
	            isDragging = false, mouseX, percentageNow, percentageNext;

	        progressElement = document.createElement( 'div' );
	        progressElement.style.width = '0%';
	        progressElement.style.height = '100%';
	        progressElement.style.backgroundColor = '#fff';

	        progressElementControl = document.createElement( 'div' );
	        progressElementControl.style.float = 'right';
	        progressElementControl.style.width = '14px';
	        progressElementControl.style.height = '14px';
	        progressElementControl.style.transform = 'translate(7px, -5px)';
	        progressElementControl.style.borderRadius = '50%';
	        progressElementControl.style.backgroundColor = '#ddd';

	        progressElementControl.addEventListener( 'mousedown', onMouseDown, { passive: true } );
	        progressElementControl.addEventListener( 'touchstart', onMouseDown,  { passive: true } );

	        function onMouseDown ( event ) {

	            event.stopPropagation();
				
	            isDragging = true;
				
	            mouseX = event.clientX || ( event.changedTouches && event.changedTouches[0].clientX );

	            percentageNow = parseInt( progressElement.style.width ) / 100;

	            addControlListeners();
	        }

	        function onVideoControlDrag ( event ) {

	            if( isDragging ){

	                const clientX = event.clientX || ( event.changedTouches && event.changedTouches[0].clientX );
					
	                percentageNext = ( clientX - mouseX ) / item.clientWidth;

	                percentageNext = percentageNow + percentageNext;

	                percentageNext = percentageNext > 1 ? 1 : ( ( percentageNext < 0 ) ? 0 : percentageNext );

	                item.setProgress ( percentageNext );

	                /**
	                 * Viewer handler event
	                 * @type {object}
	                 * @event Widget#panolens-viewer-handler
	                 * @property {string} method - 'setVideoCurrentTime' function call on Viewer
	                 * @property {number} data - Percentage of current video. Range from 0.0 to 1.0
	                 */
	                scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setVideoCurrentTime', data: percentageNext } );

	            }

	        }

	        function onVideoControlStop ( event ) {

	            event.stopPropagation();

	            isDragging = false;

	            removeControlListeners();

	        }

	        function addControlListeners () {

	            scope.container.addEventListener( 'mousemove', onVideoControlDrag, { passive: true } );
	            scope.container.addEventListener( 'mouseup', onVideoControlStop, { passive: true } );
	            scope.container.addEventListener( 'touchmove', onVideoControlDrag, { passive: true } );
	            scope.container.addEventListener( 'touchend', onVideoControlStop, { passive: true } );


	        }

	        function removeControlListeners () {

	            scope.container.removeEventListener( 'mousemove', onVideoControlDrag, false );
	            scope.container.removeEventListener( 'mouseup', onVideoControlStop, false );
	            scope.container.removeEventListener( 'touchmove', onVideoControlDrag, false );
	            scope.container.removeEventListener( 'touchend', onVideoControlStop, false );

	        }

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            if ( event.target === progressElementControl ) { return; }

	            const percentage = ( event.changedTouches && event.changedTouches.length > 0 )
	                ? ( event.changedTouches[0].pageX - event.target.getBoundingClientRect().left ) / this.clientWidth
	                : event.offsetX / this.clientWidth;

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'setVideoCurrentTime' function call on Viewer
	             * @property {number} data - Percentage of current video. Range from 0.0 to 1.0
	             */
	            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setVideoCurrentTime', data: percentage } );

	            item.setProgress( event.offsetX / this.clientWidth );

	        }
	        function onDispose () {

	            removeControlListeners();
	            progressElement = null;
	            progressElementControl = null;

	        }

	        progressElement.appendChild( progressElementControl );

	        item = this.createCustomItem( {

	            style: { 

	                float: 'left',
	                width: '30%',
	                height: '4px',
	                marginTop: '20px',
	                backgroundColor: 'rgba(188,188,188,0.8)'

	            },

	            onTap: onTap,
	            onDispose: onDispose

	        } );

	        item.appendChild( progressElement );

	        item.setProgress = function( percentage ) {

	            progressElement.style.width = percentage * 100 + '%';

	        };		

	        this.addEventListener( 'video-update', function ( event ) { 

	            item.setProgress( event.percentage ); 

	        } );

	        item.progressElement = progressElement;
	        item.progressElementControl = progressElementControl;

	        return item;

	    },

	    /**
	     * Create menu item
	     * @param  {string} title - Title to display
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - An anchor tag element
	     */
	    createMenuItem: function ( title ) {

	        const scope = this; 
	        const item = document.createElement( 'a' );
	        item.textContent = title;
	        item.style.display = 'block';
	        item.style.padding = '10px';
	        item.style.textDecoration = 'none';
	        item.style.cursor = 'pointer';
	        item.style.pointerEvents = 'auto';
	        item.style.transition = this.DEFAULT_TRANSITION;

	        item.slide = function ( right ) {

	            this.style.transform = 'translateX(' + ( right ? '' : '-' ) + '100%)';

	        };

	        item.unslide = function () {

	            this.style.transform = 'translateX(0)';

	        };

	        item.setIcon = function ( url ) {

	            if ( this.icon ) {

	                this.icon.style.backgroundImage = 'url(' + url + ')';

	            }

	        };

	        item.setSelectionTitle = function ( title ) {

	            if ( this.selection ) {

	                this.selection.textContent = title;

	            }

	        };

	        item.addSelection = function ( name ) {
				
	            const selection = document.createElement( 'span' );
	            selection.style.fontSize = '13px';
	            selection.style.fontWeight = '300';
	            selection.style.float = 'right';

	            this.selection = selection;
	            this.setSelectionTitle( name );
	            this.appendChild( selection );
				
	            return this;

	        };

	        item.addIcon = function ( url = DataImage.ChevronRight, left = false, flip = false ) {
				
	            const element = document.createElement( 'span' );
	            element.style.float = left ? 'left' : 'right';
	            element.style.width = '17px';
	            element.style.height = '17px';
	            element.style[ 'margin' + ( left ? 'Right' : 'Left' ) ] = '12px';
	            element.style.backgroundSize = 'cover';

	            if ( flip ) {

	                element.style.transform = 'rotateZ(180deg)';

	            }

	            this.icon = element;
	            this.setIcon( url );
	            this.appendChild( element );

	            return this;

	        };

	        item.addSubMenu = function ( title, items ) {

	            this.subMenu = scope.createSubMenu( title, items );

	            return this;

	        };

	        item.addEventListener( 'mouseenter', function () {
				
	            this.style.backgroundColor = '#e0e0e0';

	        }, false );

	        item.addEventListener( 'mouseleave', function () {
				
	            this.style.backgroundColor = '#fafafa';

	        }, false );

	        return item;

	    },

	    /**
	     * Create menu item header
	     * @param  {string} title - Title to display
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - An anchor tag element
	     */
	    createMenuItemHeader: function ( title ) {

	        const header = this.createMenuItem( title );

	        header.style.borderBottom = '1px solid #333';
	        header.style.paddingBottom = '15px';

	        return header;

	    },

	    /**
	     * Create main menu
	     * @param  {array} menus - Menu array list
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - A span element
	     */
	    createMainMenu: function ( menus ) {
			
	        let scope = this, menu = this.createMenu();

	        menu._width = 200;
	        menu.changeSize( menu._width );

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            let mainMenu = scope.mainMenu, subMenu = this.subMenu;

	            function onNextTick () {

	                mainMenu.changeSize( subMenu.clientWidth );
	                subMenu.show();
	                subMenu.unslideAll();

	            }

	            mainMenu.hide();
	            mainMenu.slideAll();
	            mainMenu.parentElement.appendChild( subMenu );

	            scope.activeMainItem = this;
	            scope.activeSubMenu = subMenu;

	            window.requestAnimationFrame( onNextTick );

	        }
	        for ( var i = 0; i < menus.length; i++ ) {

	            var item = menu.addItem( menus[ i ].title );

	            item.style.paddingLeft = '20px';

	            item.addIcon()
	                .addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

	            if ( menus[ i ].subMenu && menus[ i ].subMenu.length > 0 ) {

	                var title = menus[ i ].subMenu[ 0 ].title;

	                item.addSelection( title )
	                    .addSubMenu( menus[ i ].title, menus[ i ].subMenu );

	            }

	        }

	        return menu;

	    },

	    /**
	     * Create sub menu
	     * @param {string} title - Sub menu title
	     * @param {array} items - Item array list
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - A span element
	     */
	    createSubMenu: function ( title, items ) {

	        let scope = this, menu, subMenu = this.createMenu();

	        subMenu.items = items;
	        subMenu.activeItem = null;

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            menu = scope.mainMenu;
	            menu.changeSize( menu._width );
	            menu.unslideAll();
	            menu.show();
	            subMenu.slideAll( true );
	            subMenu.hide();

	            if ( this.type !== 'header' ) {

	                subMenu.setActiveItem( this );
	                scope.activeMainItem.setSelectionTitle( this.textContent );

	                if ( this.handler ) { this.handler(); }

	            }

	        }

	        subMenu.addHeader( title ).addIcon( undefined, true, true ).addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

	        for ( let i = 0; i < items.length; i++ ) {

	            const item = subMenu.addItem( items[ i ].title );

	            item.style.fontWeight = 300;
	            item.handler = items[ i ].handler;
	            item.addIcon( ' ', true );
	            item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

	            if ( !subMenu.activeItem ) {

	                subMenu.setActiveItem( item );

	            }

	        }

	        subMenu.slideAll( true );

	        return subMenu;
			
	    },

	    /**
	     * Create general menu
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - A span element
	     */
	    createMenu: function () {

	        const scope = this;
	        const menu = document.createElement( 'span' );
	        const style = menu.style;

	        style.padding = '5px 0';
	        style.position = 'fixed';
	        style.bottom = '100%';
	        style.right = '14px';
	        style.backgroundColor = '#fafafa';
	        style.fontFamily = 'Helvetica Neue';
	        style.fontSize = '14px';
	        style.visibility = 'hidden';
	        style.opacity = 0;
	        style.boxShadow = '0 0 12pt rgba(0,0,0,0.25)';
	        style.borderRadius = '2px';
	        style.overflow = 'hidden';
	        style.willChange = 'width, height, opacity';
	        style.pointerEvents = 'auto';
	        style.transition = this.DEFAULT_TRANSITION;

	        menu.visible = false;

	        menu.changeSize = function ( width, height ) {

	            if ( width ) {

	                this.style.width = width + 'px';

	            }

	            if ( height ) {

	                this.style.height = height + 'px';

	            }

	        };

	        menu.show = function () {

	            this.style.opacity = 1;
	            this.style.visibility = 'visible';
	            this.visible = true;

	        };

	        menu.hide = function () {

	            this.style.opacity = 0;
	            this.style.visibility = 'hidden';
	            this.visible = false;

	        };

	        menu.toggle = function () {

	            if ( this.visible ) {

	                this.hide();

	            } else {

	                this.show();

	            }

	        };

	        menu.slideAll = function ( right ) {

	            for ( let i = 0; i < menu.children.length; i++ ){

	                if ( menu.children[ i ].slide ) {

	                    menu.children[ i ].slide( right );

	                }

	            }

	        };

	        menu.unslideAll = function () {

	            for ( let i = 0; i < menu.children.length; i++ ){

	                if ( menu.children[ i ].unslide ) {

	                    menu.children[ i ].unslide();

	                }

	            }

	        };

	        menu.addHeader = function ( title ) {

	            const header = scope.createMenuItemHeader( title );
	            header.type = 'header';

	            this.appendChild( header );

	            return header;

	        };

	        menu.addItem = function ( title ) {

	            const item = scope.createMenuItem( title );
	            item.type = 'item';

	            this.appendChild( item );

	            return item;

	        };

	        menu.setActiveItem = function ( item ) {

	            if ( this.activeItem ) {

	                this.activeItem.setIcon( ' ' );

	            }

	            item.setIcon( DataImage.Check );

	            this.activeItem = item;

	        };

	        menu.addEventListener( 'mousemove', this.PREVENT_EVENT_HANDLER, true );
	        menu.addEventListener( 'mouseup', this.PREVENT_EVENT_HANDLER, true );
	        menu.addEventListener( 'mousedown', this.PREVENT_EVENT_HANDLER, true );

	        return menu;

	    },

	    /**
	     * Create custom item element
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon
	     */
	    createCustomItem: function ( options = {} ) {

	        const scope = this;
	        const item = options.element || document.createElement( 'span' );
	        const { onDispose } = options;

	        item.style.cursor = 'pointer';
	        item.style.float = 'right';
	        item.style.width = '44px';
	        item.style.height = '100%';
	        item.style.backgroundSize = '60%';
	        item.style.backgroundRepeat = 'no-repeat';
	        item.style.backgroundPosition = 'center';
	        item.style.webkitUserSelect = 
			item.style.MozUserSelect = 
			item.style.userSelect = 'none';
	        item.style.position = 'relative';
	        item.style.pointerEvents = 'auto';

	        // White glow on icon
	        item.addEventListener( scope.TOUCH_ENABLED ? 'touchstart' : 'mouseenter', function() {
	            item.style.filter = 
				item.style.webkitFilter = 'drop-shadow(0 0 5px rgba(255,255,255,1))';
	        }, { passive: true });
	        item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'mouseleave', function() {
	            item.style.filter = 
				item.style.webkitFilter = '';
	        }, { passive: true });

	        this.mergeStyleOptions( item, options.style );

	        if ( options.onTap ) {

	            item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', options.onTap, false );

	        }

	        item.dispose = function () {

	            item.removeEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', options.onTap, false );

	            if ( onDispose ) { options.onDispose(); }

	        };
			
	        return item;

	    },

	    /**
	     * Merge item css style
	     * @param  {HTMLElement} element - The element to be merged with style
	     * @param  {object} options - The style options
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - The same element with merged styles
	     */
	    mergeStyleOptions: function ( element, options = {} ) {

	        for ( let property in options ){

	            if ( options.hasOwnProperty( property ) ) {

	                element.style[ property ] = options[ property ];

	            }

	        }

	        return element;

	    },

	    /**
	     * Dispose widgets by detaching dom elements from container
	     * @memberOf Widget
	     * @instance
	     */
	    dispose: function () {

	        if ( this.barElement ) {
	            this.container.removeChild( this.barElement );
	            this.barElement.dispose();
	            this.barElement = null;

	        }

	    }
		
	} );

	/**
	 * @classdesc Base Panorama
	 * @constructor
	 * @param {THREE.Geometry} geometry - The geometry for this panorama
	 * @param {THREE.Material} material - The material for this panorama
	 */
	function Panorama ( geometry, material ) {

	    THREE.Mesh.call( this, geometry, material );

	    this.type = 'panorama';

	    this.ImageQualityLow = 1;
	    this.ImageQualityFair = 2;
	    this.ImageQualityMedium = 3;
	    this.ImageQualityHigh = 4;
	    this.ImageQualitySuperHigh = 5;

	    this.animationDuration = 1000;

	    this.defaultInfospotSize = 350;

	    this.container = undefined;

	    this.loaded = false;

	    this.linkedSpots = [];

	    this.isInfospotVisible = false;
		
	    this.linkingImageURL = undefined;
	    this.linkingImageScale = undefined;

	    this.material.side = THREE.BackSide;
	    this.material.opacity = 0;

	    this.scale.x *= -1;
	    this.renderOrder = -1;

	    this.active = false;

	    this.infospotAnimation = new Tween.Tween( this ).to( {}, this.animationDuration / 2 );

	    this.addEventListener( 'load', this.fadeIn.bind( this ) );
	    this.addEventListener( 'panolens-container', this.setContainer.bind( this ) );
	    this.addEventListener( 'click', this.onClick.bind( this ) );

	    this.setupTransitions();

	}

	Panorama.prototype = Object.assign( Object.create( THREE.Mesh.prototype ), {

	    constructor: Panorama,

	    /**
	     * Adding an object
	     * To counter the scale.x = -1, it will automatically add an 
	     * empty object with inverted scale on x
	     * @memberOf Panorama
	     * @instance
	     * @param {THREE.Object3D} object - The object to be added
	     */
	    add: function ( object ) {

	        let invertedObject;

	        if ( arguments.length > 1 ) {

	            for ( var i = 0; i < arguments.length; i ++ ) {

	                this.add( arguments[ i ] );

	            }

	            return this;

	        }

	        // In case of infospots
	        if ( object instanceof Infospot ) {

	            invertedObject = object;

	            if ( object.dispatchEvent ) {

	                const { container } = this;

	                if ( container ) { object.dispatchEvent( { type: 'panolens-container', container } ); }
					
	                object.dispatchEvent( { type: 'panolens-infospot-focus', method: function ( vector, duration, easing ) {

	                    /**
	                     * Infospot focus handler event
	                     * @type {object}
	                     * @event Panorama#panolens-viewer-handler
	                     * @property {string} method - Viewer function name
	                     * @property {*} data - The argument to be passed into the method
	                     */
	                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'tweenControlCenter', data: [ vector, duration, easing ] } );


	                }.bind( this ) } );
	            }

	        } else {

	            // Counter scale.x = -1 effect
	            invertedObject = new THREE.Object3D();
	            invertedObject.scale.x = -1;
	            invertedObject.scalePlaceHolder = true;
	            invertedObject.add( object );

	        }

	        THREE.Object3D.prototype.add.call( this, invertedObject );

	    },

	    load: function () {

	        this.onLoad();
			
	    },

	    /**
	     * Click event handler
	     * @param  {object} event - Click event
	     * @memberOf Panorama
	     * @instance
	     * @fires Infospot#dismiss
	     */
	    onClick: function ( event ) {

	        if ( event.intersects && event.intersects.length === 0 ) {

	            this.traverse( function ( object ) {

	                /**
	                 * Dimiss event
	                 * @type {object}
	                 * @event Infospot#dismiss
	                 */
	                object.dispatchEvent( { type: 'dismiss' } );

	            } );

	        }

	    },

	    /**
	     * Set container of this panorama 
	     * @param {HTMLElement|object} data - Data with container information
	     * @memberOf Panorama
	     * @instance
	     * @fires Infospot#panolens-container
	     */
	    setContainer: function ( data ) {

	        let container;

	        if ( data instanceof HTMLElement ) {

	            container = data;

	        } else if ( data && data.container ) {

	            container = data.container;

	        }

	        if ( container ) {

	            this.children.forEach( function ( child ) {

	                if ( child instanceof Infospot && child.dispatchEvent ) {

	                    /**
	                     * Set container event
	                     * @type {object}
	                     * @event Infospot#panolens-container
	                     * @property {HTMLElement} container - The container of this panorama
	                     */
	                    child.dispatchEvent( { type: 'panolens-container', container: container } );

	                }

	            } );

	            this.container = container;

	        }

	    },

	    /**
	     * This will be called when panorama is loaded
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#load
	     */
	    onLoad: function () {

	        this.loaded = true;

	        /**
	         * Load panorama event
	         * @type {object}
	         * @event Panorama#load
	         */
	        this.dispatchEvent( { type: 'load' } );

	    },

	    /**
	     * This will be called when panorama is in progress
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#progress
	     */
	    onProgress: function ( progress ) {

	        /**
	         * Loading panorama progress event
	         * @type {object}
	         * @event Panorama#progress
	         * @property {object} progress - The progress object containing loaded and total amount
	         */
	        this.dispatchEvent( { type: 'progress', progress: progress } );

	    },

	    /**
	     * This will be called when panorama loading has error
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#error
	     */
	    onError: function () {

	        /**
	         * Loading panorama error event
	         * @type {object}
	         * @event Panorama#error
	         */
	        this.dispatchEvent( { type: 'error' } );

	    },

	    /**
	     * Get zoom level based on window width
	     * @memberOf Panorama
	     * @instance
	     * @return {number} zoom level indicating image quality
	     */
	    getZoomLevel: function () {

	        let zoomLevel;

	        if ( window.innerWidth <= 800 ) {

	            zoomLevel = this.ImageQualityFair;

	        } else if ( window.innerWidth > 800 &&  window.innerWidth <= 1280 ) {

	            zoomLevel = this.ImageQualityMedium;

	        } else if ( window.innerWidth > 1280 && window.innerWidth <= 1920 ) {

	            zoomLevel = this.ImageQualityHigh;

	        } else if ( window.innerWidth > 1920 ) {

	            zoomLevel = this.ImageQualitySuperHigh;

	        } else {

	            zoomLevel = this.ImageQualityLow;

	        }

	        return zoomLevel;

	    },

	    /**
	     * Update texture of a panorama
	     * @memberOf Panorama
	     * @instance
	     * @param {THREE.Texture} texture - Texture to be updated
	     */
	    updateTexture: function ( texture ) {

	        this.material.map = texture;
	        this.material.needsUpdate = true;

	    },

	    /**
	     * Toggle visibility of infospots in this panorama
	     * @param  {boolean} isVisible - Visibility of infospots
	     * @param  {number} delay - Delay in milliseconds to change visibility
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#infospot-animation-complete
	     */
	    toggleInfospotVisibility: function ( isVisible, delay ) {

	        delay = ( delay !== undefined ) ? delay : 0;

	        const visible = ( isVisible !== undefined ) ? isVisible : ( this.isInfospotVisible ? false : true );

	        this.traverse( function ( object ) {

	            if ( object instanceof Infospot ) {

	                if ( visible ) {

	                    object.show( delay );

	                } else {

	                    object.hide( delay );

	                }

	            }

	        } );

	        this.isInfospotVisible = visible;

	        // Animation complete event
	        this.infospotAnimation.onComplete( function () {

	            /**
	             * Complete toggling infospot visibility
	             * @event Panorama#infospot-animation-complete
	             * @type {object} 
	             */
	            this.dispatchEvent( { type: 'infospot-animation-complete', visible: visible } );

	        }.bind( this ) ).delay( delay ).start();

	    },

	    /**
	     * Set image of this panorama's linking infospot
	     * @memberOf Panorama
	     * @instance
	     * @param {string} url   - Url to the image asset
	     * @param {number} scale - Scale factor of the infospot
	     */
	    setLinkingImage: function ( url, scale ) {

	        this.linkingImageURL = url;
	        this.linkingImageScale = scale;

	    },

	    /**
	     * Link one-way panorama
	     * @param  {Panorama} pano  - The panorama to be linked to
	     * @param  {THREE.Vector3} position - The position of infospot which navigates to the pano
	     * @param  {number} [imageScale=300] - Image scale of linked infospot
	     * @param  {string} [imageSrc=DataImage.Arrow] - The image source of linked infospot
	     * @memberOf Panorama
	     * @instance
	     */
	    link: function ( pano, position, imageScale, imageSrc ) {

	        let scale, img;

	        this.visible = true;

	        if ( !position ) {

	            console.warn( 'Please specify infospot position for linking' );

	            return;

	        }

	        // Infospot scale
	        if ( imageScale !== undefined ) {

	            scale = imageScale;

	        } else if ( pano.linkingImageScale !== undefined ) {

	            scale = pano.linkingImageScale;

	        } else {

	            scale = 300;

	        }


	        // Infospot image
	        if ( imageSrc ) {

	            img = imageSrc;

	        } else if ( pano.linkingImageURL ) {

	            img = pano.linkingImageURL;

	        } else {

	            img = DataImage.Arrow;

	        }

	        // Creates a new infospot
	        const spot = new Infospot( scale, img );
	        spot.position.copy( position );
	        spot.toPanorama = pano;
	        spot.addEventListener( 'click', function () {

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @event Panorama#panolens-viewer-handler
	             * @property {string} method - Viewer function name
	             * @property {*} data - The argument to be passed into the method
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setPanorama', data: pano } );

	        }.bind( this ) );

	        this.linkedSpots.push( spot );

	        this.add( spot );

	        this.visible = false;

	    },

	    reset: function () {

	        this.children.length = 0;	

	    },

	    setupTransitions: function () {

	        this.fadeInAnimation = new Tween.Tween( this.material )
	            .easing( Tween.Easing.Quartic.Out )
	            .onStart( function () {

	                this.visible = true;
	                // this.material.visible = true;

	                /**
	                 * Enter panorama fade in start event
	                 * @event Panorama#enter-fade-start
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'enter-fade-start' } );

	            }.bind( this ) );

	        this.fadeOutAnimation = new Tween.Tween( this.material )
	            .easing( Tween.Easing.Quartic.Out )
	            .onComplete( function () {

	                this.visible = false;
	                // this.material.visible = true;

	                /**
	                 * Leave panorama complete event
	                 * @event Panorama#leave-complete
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'leave-complete' } );

	            }.bind( this ) );

	        this.enterTransition = new Tween.Tween( this )
	            .easing( Tween.Easing.Quartic.Out )
	            .onComplete( function () {

	                /**
	                 * Enter panorama and animation complete event
	                 * @event Panorama#enter-complete
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'enter-complete' } );

	            }.bind ( this ) )
	            .start();

	        this.leaveTransition = new Tween.Tween( this )
	            .easing( Tween.Easing.Quartic.Out );

	    },

	    onFadeAnimationUpdate: function () {

	        const alpha = this.material.opacity;
	        const { uniforms } = this.material;

	        if ( uniforms && uniforms.opacity ) {
	            uniforms.opacity.value = alpha;
	        }

	    },

	    /**
	     * Start fading in animation
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#enter-fade-complete
	     */
	    fadeIn: function ( duration ) {

	        duration = duration >= 0 ? duration : this.animationDuration;

	        this.fadeOutAnimation.stop();
	        this.fadeInAnimation
	            .to( { opacity: 1 }, duration )
	            .onUpdate( this.onFadeAnimationUpdate.bind( this ) )
	            .onComplete( function () {

	                this.toggleInfospotVisibility( true, duration / 2 );

	                /**
	                 * Enter panorama fade complete event
	                 * @event Panorama#enter-fade-complete
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'enter-fade-complete' } );			

	            }.bind( this ) )
	            .start();

	    },

	    /**
	     * Start fading out animation
	     * @memberOf Panorama
	     * @instance
	     */
	    fadeOut: function ( duration ) {

	        duration = duration >= 0 ? duration : this.animationDuration;

	        this.fadeInAnimation.stop();
	        this.fadeOutAnimation
	            .to( { opacity: 0 }, duration )
	            .onUpdate( this.onFadeAnimationUpdate.bind( this ) )
	            .start();

	    },

	    /**
	     * This will be called when entering a panorama 
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#enter
	     * @fires Panorama#enter-start
	     */
	    onEnter: function () {

	        const duration = this.animationDuration;

	        this.leaveTransition.stop();
	        this.enterTransition
	            .to( {}, duration )
	            .onStart( function () {

	                /**
	                 * Enter panorama and animation starting event
	                 * @event Panorama#enter-start
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'enter-start' } );
					
	                if ( this.loaded ) {

	                    this.fadeIn( duration );

	                } else {

	                    this.load();

	                }
					
	            }.bind( this ) )
	            .start();

	        /**
	         * Enter panorama event
	         * @event Panorama#enter
	         * @type {object} 
	         */
	        this.dispatchEvent( { type: 'enter' } );

	        this.children.forEach( child => {

	            child.dispatchEvent( { type: 'panorama-enter' } );

	        } );

	        this.active = true;

	    },

	    /**
	     * This will be called when leaving a panorama
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#leave
	     */
	    onLeave: function () {

	        const duration = this.animationDuration;

	        this.enterTransition.stop();
	        this.leaveTransition
	            .to( {}, duration )
	            .onStart( function () {

	                /**
	                 * Leave panorama and animation starting event
	                 * @event Panorama#leave-start
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'leave-start' } );

	                this.fadeOut( duration );
	                this.toggleInfospotVisibility( false );

	            }.bind( this ) )
	            .start();

	        /**
	         * Leave panorama event
	         * @event Panorama#leave
	         * @type {object} 
	         */
	        this.dispatchEvent( { type: 'leave' } );

	        this.children.forEach( child => {

	            child.dispatchEvent( { type: 'panorama-leave' } );

	        } );

	        this.active = false;

	    },

	    /**
	     * Dispose panorama
	     * @memberOf Panorama
	     * @instance
	     */
	    dispose: function () {

	        this.infospotAnimation.stop();
	        this.fadeInAnimation.stop();
	        this.fadeOutAnimation.stop();
	        this.enterTransition.stop();
	        this.leaveTransition.stop();

	        /**
	         * On panorama dispose handler
	         * @type {object}
	         * @event Panorama#panolens-viewer-handler
	         * @property {string} method - Viewer function name
	         * @property {*} data - The argument to be passed into the method
	         */
	        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onPanoramaDispose', data: this } );

	        // recursive disposal on 3d objects
	        function recursiveDispose ( object ) {

	            const { geometry, material } = object;

	            for ( var i = object.children.length - 1; i >= 0; i-- ) {

	                recursiveDispose( object.children[i] );
	                object.remove( object.children[i] );

	            }

	            if ( object instanceof Infospot ) {

	                object.dispose();

	            }
				
	            if ( geometry ) { geometry.dispose(); object.geometry = null; }
	            if ( material ) { material.dispose(); object.material = null; }

	        }

	        recursiveDispose( this );

	        if ( this.parent ) {

	            this.parent.remove( this );

	        }

	    }

	} );

	/**
	 * @classdesc Equirectangular based image panorama
	 * @constructor
	 * @param {string} image - Image url or HTMLImageElement
	 */
	function ImagePanorama ( image, _geometry, _material ) {

	    const radius = 5000;
	    const geometry = _geometry || new THREE.SphereBufferGeometry( radius, 60, 40 );
	    const material = _material || new THREE.MeshBasicMaterial( { opacity: 0, transparent: true } );

	    Panorama.call( this, geometry, material );

	    this.src = image;
	    this.radius = radius;

	}

	ImagePanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

	    constructor: ImagePanorama,

	    /**
	     * Load image asset
	     * @param  {*} src - Url or image element
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    load: function ( src ) {

	        src = src || this.src;

	        if ( !src ) { 

	            console.warn( 'Image source undefined' );

	            return; 

	        } else if ( typeof src === 'string' ) {

	            TextureLoader.load( src, this.onLoad.bind( this ), this.onProgress.bind( this ), this.onError.bind( this ) );

	        } else if ( src instanceof HTMLImageElement ) {

	            this.onLoad( new THREE.Texture( src ) );

	        }

	    },

	    /**
	     * This will be called when image is loaded
	     * @param  {THREE.Texture} texture - Texture to be updated
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    onLoad: function ( texture ) {

	        texture.minFilter = texture.magFilter = THREE.LinearFilter;
	        texture.needsUpdate = true;
			
	        this.updateTexture( texture );

	        window.requestAnimationFrame( Panorama.prototype.onLoad.bind( this ) );

	    },

	    /**
	     * Reset
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    reset: function () {

	        Panorama.prototype.reset.call( this );

	    },

	    /**
	     * Dispose
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    dispose: function () {

	        const { material: { map } } = this;

	        // Release cached image
	        THREE.Cache.remove( this.src );

	        if ( map ) { map.dispose(); }

	        Panorama.prototype.dispose.call( this );

	    }

	} );

	/**
	 * @classdesc Empty panorama
	 * @constructor
	 */
	function EmptyPanorama () {

	    const geometry = new THREE.BufferGeometry();
	    const material = new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0, transparent: true } );

	    geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array(), 1 ) );

	    Panorama.call( this, geometry, material );

	}

	EmptyPanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

	    constructor: EmptyPanorama

	} );

	/**
	 * @classdesc Cubemap-based panorama
	 * @constructor
	 * @param {array} images - Array of 6 urls to images, one for each side of the CubeTexture. The urls should be specified in the following order: pos-x, neg-x, pos-y, neg-y, pos-z, neg-z
	 */
	function CubePanorama ( images = [] ){

	    const edgeLength = 10000;
	    const shader = Object.assign( {}, THREE.ShaderLib[ 'cube' ] );
	    const geometry = new THREE.BoxBufferGeometry( edgeLength, edgeLength, edgeLength );
	    const material = new THREE.ShaderMaterial( {

	        fragmentShader: shader.fragmentShader,
	        vertexShader: shader.vertexShader,
	        uniforms: shader.uniforms,
	        side: THREE.BackSide,
	        transparent: true

	    } );

	    Panorama.call( this, geometry, material );

	    this.images = images;
	    this.edgeLength = edgeLength;
	    this.material.uniforms.opacity.value = 0;

	}

	CubePanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

	    constructor: CubePanorama,

	    /**
	     * Load 6 images and bind listeners
	     * @memberOf CubePanorama
	     * @instance
	     */
	    load: function () {

	        CubeTextureLoader.load( 	

	            this.images, 

	            this.onLoad.bind( this ), 
	            this.onProgress.bind( this ), 
	            this.onError.bind( this ) 

	        );

	    },

	    /**
	     * This will be called when 6 textures are ready
	     * @param  {THREE.CubeTexture} texture - Cube texture
	     * @memberOf CubePanorama
	     * @instance
	     */
	    onLoad: function ( texture ) {
			
	        this.material.uniforms[ 'tCube' ].value = texture;

	        Panorama.prototype.onLoad.call( this );

	    },

	    /**
	     * Dispose
	     * @memberOf CubePanorama
	     * @instance
	     */
	    dispose: function () {	

	        const { value } = this.material.uniforms.tCube;

	        this.images.forEach( ( image ) => { THREE.Cache.remove( image ); } );

	        if ( value instanceof THREE.CubeTexture ) {

	            value.dispose();

	        }

	        Panorama.prototype.dispose.call( this );

	    }

	} );

	/**
	 * @classdesc Basic panorama with 6 pre-defined grid images
	 * @constructor
	 */
	function BasicPanorama () {

	    const images = [];

	    for ( let i = 0; i < 6; i++ ) {

	        images.push( DataImage.WhiteTile );

	    }

	    CubePanorama.call( this, images );

	}

	BasicPanorama.prototype = Object.assign( Object.create( CubePanorama.prototype ), {

	    constructor: BasicPanorama

	} );

	/**
	 * @classdesc Video Panorama
	 * @constructor
	 * @param {string} src - Equirectangular video url
	 * @param {object} [options] - Option for video settings
	 * @param {HTMLElement} [options.videoElement] - HTML5 video element contains the video
	 * @param {boolean} [options.loop=true] - Specify if the video should loop in the end
	 * @param {boolean} [options.muted=true] - Mute the video or not. Need to be true in order to autoplay on some browsers
	 * @param {boolean} [options.autoplay=false] - Specify if the video should auto play
	 * @param {boolean} [options.playsinline=true] - Specify if video should play inline for iOS. If you want it to auto play inline, set both autoplay and muted options to true
	 * @param {string} [options.crossOrigin="anonymous"] - Sets the cross-origin attribute for the video, which allows for cross-origin videos in some browsers (Firefox, Chrome). Set to either "anonymous" or "use-credentials".
	 * @param {number} [radius=5000] - The minimum radius for this panoram
	 */
	function VideoPanorama ( src, options = {} ) {

	    const radius = 5000;
	    const geometry = new THREE.SphereBufferGeometry( radius, 60, 40 );
	    const material = new THREE.MeshBasicMaterial( { opacity: 0, transparent: true } );

	    Panorama.call( this, geometry, material );

	    this.src = src;

	    this.options = {

	        videoElement: document.createElement( 'video' ),
	        loop: true,
	        muted: true,
	        autoplay: false,
	        playsinline: true,
	        crossOrigin: 'anonymous'

	    };

	    Object.assign( this.options, options );

	    this.videoElement = this.options.videoElement;
	    this.videoProgress = 0;
	    this.radius = radius;

	    this.addEventListener( 'leave', this.pauseVideo.bind( this ) );
	    this.addEventListener( 'enter-fade-start', this.resumeVideoProgress.bind( this ) );
	    this.addEventListener( 'video-toggle', this.toggleVideo.bind( this ) );
	    this.addEventListener( 'video-time', this.setVideoCurrentTime.bind( this ) );

	}
	VideoPanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

	    constructor: VideoPanorama,

	    isMobile: function () {

	        let check = false;
	        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})( window.navigator.userAgent || window.navigator.vendor || window.opera );
	        return check;

	    },

	    /**
	     * Load video panorama
	     * @memberOf VideoPanorama
	     * @instance
	     * @fires  Panorama#panolens-viewer-handler
	     */
	    load: function () {

	        const { muted, loop, autoplay, playsinline, crossOrigin } = this.options;
	        const video = this.videoElement;
	        const material = this.material;
	        const onProgress = this.onProgress.bind( this );
	        const onLoad = this.onLoad.bind( this );

	        video.loop = loop;
	        video.autoplay = autoplay;
	        video.playsinline = playsinline;
	        video.crossOrigin = crossOrigin;
	        video.muted = muted;
			
	        if ( playsinline ) {

	            video.setAttribute( 'playsinline', '' );
	            video.setAttribute( 'webkit-playsinline', '' );

	        } 

	        const onloadeddata = function() {

	            this.setVideoTexture( video );

	            if ( autoplay ) {

	                /**
	                 * Viewer handler event
	                 * @type {object}
	                 * @property {string} method - 'updateVideoPlayButton'
	                 * @property {boolean} data - Pause video or not
	                 */
	                this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

	            }

	            // For mobile silent autoplay
	            if ( this.isMobile() ) {

	                video.pause();

	                if ( autoplay && muted ) {

	                    /**
	                     * Viewer handler event
	                     * @type {object}
	                     * @property {string} method - 'updateVideoPlayButton'
	                     * @property {boolean} data - Pause video or not
	                     */
	                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

	                } else {

	                    /**
	                     * Viewer handler event
	                     * @type {object}
	                     * @property {string} method - 'updateVideoPlayButton'
	                     * @property {boolean} data - Pause video or not
	                     */
	                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

	                }
					
	            }

	            const loaded = () => {

	                // Fix for threejs r89 delayed update
	                material.map.needsUpdate = true;

	                onProgress( { loaded: 1, total: 1 } );
	                onLoad();

	            };

	            window.requestAnimationFrame( loaded );
				
	        };

	        /**
	         * Ready state of the audio/video element
	         * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready
	         * 1 = HAVE_METADATA - metadata for the audio/video is ready
	         * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond
	         * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available
	         * 4 = HAVE_ENOUGH_DATA - enough data available to start playing
	         */
	        if ( video.readyState > 2 ) {

	            onloadeddata.call( this );

	        } else {

	            if ( video.querySelectorAll( 'source' ).length === 0 ) {

	                const source = document.createElement( 'source' );
	                source.src = this.src;
	                video.appendChild( source );

	            }

	            video.load();
	        }

	        video.addEventListener( 'loadeddata', onloadeddata.bind( this ) );
			
	        video.addEventListener( 'timeupdate', function () {

	            this.videoProgress = video.duration >= 0 ? video.currentTime / video.duration : 0;

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'onVideoUpdate'
	             * @property {number} data - The percentage of video progress. Range from 0.0 to 1.0
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onVideoUpdate', data: this.videoProgress } );

	        }.bind( this ) );

	        video.addEventListener( 'ended', function () {
				
	            if ( !loop ) {

	                this.resetVideo();
	                this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

	            }

	        }.bind( this ), false ); 

	    },

	    /**
	     * Set video texture
	     * @memberOf VideoPanorama
	     * @instance
	     * @param {HTMLVideoElement} video  - The html5 video element
	     * @fires Panorama#panolens-viewer-handler
	     */
	    setVideoTexture: function ( video ) {

	        if ( !video ) return;

	        const videoTexture = new THREE.VideoTexture( video );
	        videoTexture.minFilter = THREE.LinearFilter;
	        videoTexture.magFilter = THREE.LinearFilter;
	        videoTexture.format = THREE.RGBFormat;

	        this.updateTexture( videoTexture );
		
	    },

	    /**
	     * Reset
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    reset: function () {

	        this.videoElement = undefined;	

	        Panorama.prototype.reset.call( this );

	    },

	    /**
	     * Check if video is paused
	     * @memberOf VideoPanorama
	     * @instance
	     * @return {boolean} - is video paused or not
	     */
	    isVideoPaused: function () {

	        return this.videoElement.paused;

	    },

	    /**
	     * Toggle video to play or pause
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    toggleVideo: function () {

	        const video = this.videoElement;

	        if ( !video ) { return; }

	        video[ video.paused ? 'play' : 'pause' ]();

	    },

	    /**
	     * Set video currentTime
	     * @memberOf VideoPanorama
	     * @instance
	     * @param {object} event - Event contains percentage. Range from 0.0 to 1.0
	     */
	    setVideoCurrentTime: function ( { percentage } ) {

	        const video = this.videoElement;

	        if ( video && !Number.isNaN( percentage ) && percentage !== 1 ) {

	            video.currentTime = video.duration * percentage;

	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onVideoUpdate', data: percentage } );

	        }

	    },

	    /**
	     * Play video
	     * @memberOf VideoPanorama
	     * @instance
	     * @fires VideoPanorama#play
	     * @fires VideoPanorama#play-error
	     */
	    playVideo: function () {

	        const video = this.videoElement;
	        const playVideo = this.playVideo.bind( this );
	        const dispatchEvent = this.dispatchEvent.bind( this );
	        const onSuccess = () => {

	            /**
	             * Play event
	             * @type {object}
	             * @event VideoPanorama#play
	             *
	             */
	            dispatchEvent( { type: 'play' } );

	        };
	        const onError = ( error ) => {

	            // Error playing video. Retry next frame. Possibly Waiting for user interaction
	            window.requestAnimationFrame( playVideo );

	            /**
	             * Play event
	             * @type {object}
	             * @event VideoPanorama#play-error
	             *
	             */
	            dispatchEvent( { type: 'play-error', error } );

	        };

	        if ( video && video.paused ) {

	            video.play().then( onSuccess ).catch( onError );

	        }

	    },

	    /**
	     * Pause video
	     * @memberOf VideoPanorama
	     * @instance
	     * @fires VideoPanorama#pause
	     */
	    pauseVideo: function () {

	        const video = this.videoElement;

	        if ( video && !video.paused ) {

	            video.pause();

	        }

	        /**
	         * Pause event
	         * @type {object}
	         * @event VideoPanorama#pause
	         *
	         */
	        this.dispatchEvent( { type: 'pause' } );

	    },

	    /**
	     * Resume video
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    resumeVideoProgress: function () {

	        const video = this.videoElement;

	        if ( video.readyState >= 4 && video.autoplay && !this.isMobile() ) {

	            this.playVideo();

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'updateVideoPlayButton'
	             * @property {boolean} data - Pause video or not
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

	        } else {

	            this.pauseVideo();

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'updateVideoPlayButton'
	             * @property {boolean} data - Pause video or not
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

	        }

	        this.setVideoCurrentTime( { percentage: this.videoProgress } );

	    },

	    /**
	     * Reset video at stating point
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    resetVideo: function () {

	        const video = this.videoElement;

	        if ( video ) {

	            this.setVideoCurrentTime( { percentage: 0 } );

	        }

	    },

	    /**
	     * Check if video is muted
	     * @memberOf VideoPanorama
	     * @instance
	     * @return {boolean} - is video muted or not
	     */
	    isVideoMuted: function () {

	        return this.videoElement.muted;

	    },

	    /**
	     * Mute video
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    muteVideo: function () {

	        const video = this.videoElement;

	        if ( video && !video.muted ) {

	            video.muted = true;

	        }

	        this.dispatchEvent( { type: 'volumechange' } );

	    },

	    /**
	     * Unmute video
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    unmuteVideo: function () {

	        const video = this.videoElement;

	        if ( video && this.isVideoMuted() ) {

	            video.muted = false;

	        }

	        this.dispatchEvent( { type: 'volumechange' } );

	    },

	    /**
	     * Returns the video element
	     * @memberOf VideoPanorama
	     * @instance
	     * @returns {HTMLElement}
	     */
	    getVideoElement: function () {

	        return this.videoElement;

	    },

	    /**
	     * Dispose video panorama
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    dispose: function () {

	        const { material: { map } } = this;

	        this.pauseVideo();
			
	        this.removeEventListener( 'leave', this.pauseVideo.bind( this ) );
	        this.removeEventListener( 'enter-fade-start', this.resumeVideoProgress.bind( this ) );
	        this.removeEventListener( 'video-toggle', this.toggleVideo.bind( this ) );
	        this.removeEventListener( 'video-time', this.setVideoCurrentTime.bind( this ) );

	        if ( map ) { map.dispose(); }

	        Panorama.prototype.dispose.call( this );

	    }

	} );

	/**
	 * @classdesc Google Street View Loader
	 * @constructor
	 * @param {object} parameters 
	 */
	function GoogleStreetviewLoader ( parameters = {} ) {

	    this._parameters = parameters;
	    this._zoom = null;
	    this._panoId = null;
	    this._panoClient = new google.maps.StreetViewService();
	    this._count = 0;
	    this._total = 0;
	    this._canvas = [];
	    this._ctx = [];
	    this._wc = 0;
	    this._hc = 0;
	    this.result = null;
	    this.rotation = 0;
	    this.copyright = '';
	    this.onSizeChange = null;
	    this.onPanoramaLoad = null;

	    this.levelsW = [ 1, 2, 4, 7, 13, 26 ];
	    this.levelsH = [ 1, 1, 2, 4, 7, 13 ];

	    this.widths = [ 416, 832, 1664, 3328, 6656, 13312 ];
	    this.heights = [ 416, 416, 832, 1664, 3328, 6656 ];

	    this.maxW = 6656;
	    this.maxH = 6656;

	    let gl;

	    try {

	        const canvas = document.createElement( 'canvas' );

	        gl = canvas.getContext( 'experimental-webgl' );

	        if( !gl ) {

	            gl = canvas.getContext( 'webgl' );

	        }

	    }
	    catch ( error ) {

	    }

	    this.maxW = Math.max( gl.getParameter( gl.MAX_TEXTURE_SIZE ), this.maxW );
	    this.maxH = Math.max( gl.getParameter( gl.MAX_TEXTURE_SIZE ), this.maxH );

	}

	Object.assign( GoogleStreetviewLoader.prototype, {

	    constructor: GoogleStreetviewLoader,

	    /**
	     * Set progress
	     * @param {number} loaded 
	     * @param {number} total 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    setProgress: function ( loaded, total ) {

	        if ( this.onProgress ) {

	            this.onProgress( { loaded: loaded, total: total } );

	        }
			
	    },

	    /**
	     * Adapt texture to zoom
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    adaptTextureToZoom: function () {

	        const w = this.widths [ this._zoom ];
	        const h = this.heights[ this._zoom ];

	        const maxW = this.maxW;
	        const maxH = this.maxH;

	        this._wc = Math.ceil( w / maxW );
	        this._hc = Math.ceil( h / maxH );

	        for( let y = 0; y < this._hc; y++ ) {
	            for( let x = 0; x < this._wc; x++ ) {
	                const c = document.createElement( 'canvas' );
	                if( x < ( this._wc - 1 ) ) c.width = maxW; else c.width = w - ( maxW * x );
	                if( y < ( this._hc - 1 ) ) c.height = maxH; else c.height = h - ( maxH * y );
	                this._canvas.push( c );
	                this._ctx.push( c.getContext( '2d' ) );
	            }
	        }

	    },

	    /**
	     * Compose from tile
	     * @param {number} x 
	     * @param {number} y 
	     * @param {*} texture 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    composeFromTile: function ( x, y, texture ) {

	        const maxW = this.maxW;
	        const maxH = this.maxH;

	        x *= 512;
	        y *= 512;

	        const px = Math.floor( x / maxW );
	        const py = Math.floor( y / maxH );

	        x -= px * maxW;
	        y -= py * maxH;

	        this._ctx[ py * this._wc + px ].drawImage( texture, 0, 0, texture.width, texture.height, x, y, 512, 512 );

	        this.progress();
			
	    },

	    /**
	     * Progress
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    progress: function() {

	        this._count++;
			
	        this.setProgress( this._count, this._total );
			
	        if ( this._count === this._total) {

	            this.canvas = this._canvas;
	            this.panoId = this._panoId;
	            this.zoom = this._zoom;

	            if ( this.onPanoramaLoad ) {

	                this.onPanoramaLoad( this._canvas[ 0 ] );

	            }

	        }
	    },

	    /**
	     * Compose panorama
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    composePanorama: function () {

	        this.setProgress( 0, 1 );
			
	        const w = this.levelsW[ this._zoom ];
	        const h = this.levelsH[ this._zoom ];
	        const self = this;
				
	        this._count = 0;
	        this._total = w * h;

	        const { useWebGL } = this._parameters;

	        for( let y = 0; y < h; y++ ) {
	            for( let x = 0; x < w; x++ ) {
	                const url = 'https://geo0.ggpht.com/cbk?cb_client=maps_sv.tactile&authuser=0&hl=en&output=tile&zoom=' + this._zoom + '&x=' + x + '&y=' + y + '&panoid=' + this._panoId + '&nbt&fover=2';
	                ( function( x, y ) { 
	                    if( useWebGL ) {
	                        const texture = TextureLoader.load( url, null, function() {
	                            self.composeFromTile( x, y, texture );
	                        } );
	                    } else {
	                        const img = new Image();
	                        img.addEventListener( 'load', function() {
	                            self.composeFromTile( x, y, this );			
	                        } );
	                        img.crossOrigin = '';
	                        img.src = url;
	                    }
	                } )( x, y );
	            }
	        }
			
	    },

	    /**
	     * Load
	     * @param {string} panoid 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    load: function ( panoid ) {

	        this.loadPano( panoid );

	    },

	    /**
	     * Load panorama
	     * @param {string} id
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    loadPano: function( id ) {

	        const self = this;
	        this._panoClient.getPanoramaById( id, function (result, status) {
	            if (status === google.maps.StreetViewStatus.OK) {
	                self.result = result;
	                self.copyright = result.copyright;
	                self._panoId = result.location.pano;
	                self.composePanorama();
	            }
	        });
			
	    },

	    /**
	     * Set zoom level
	     * @param {number} z 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    setZoom: function( z ) {

	        this._zoom = z;
	        this.adaptTextureToZoom();
	    }
		
	} );

	/**
	 * @classdesc Google streetview panorama
	 * @description [How to get Panorama ID]{@link http://stackoverflow.com/questions/29916149/google-maps-streetview-how-to-get-panorama-id}
	 * @constructor
	 * @param {string} panoId - Panorama id from Google Streetview 
	 * @param {string} [apiKey] - Google Street View API Key
	 */
	function GoogleStreetviewPanorama ( panoId, apiKey ) {

	    ImagePanorama.call( this );

	    this.panoId = panoId;

	    this.gsvLoader = null;

	    this.loadRequested = false;

	    this.setupGoogleMapAPI( apiKey );

	}

	GoogleStreetviewPanorama.prototype = Object.assign( Object.create( ImagePanorama.prototype ), {

	    constructor: GoogleStreetviewPanorama,

	    /**
	     * Load Google Street View by panorama id
	     * @param {string} panoId - Gogogle Street View panorama id
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    load: function ( panoId ) {

	        this.loadRequested = true;

	        panoId = ( panoId || this.panoId ) || {};

	        if ( panoId && this.gsvLoader ) {

	            this.loadGSVLoader( panoId );

	        }

	    },

	    /**
	     * Setup Google Map API
	     * @param {string}  apiKey
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    setupGoogleMapAPI: function ( apiKey ) {

	        const script = document.createElement( 'script' );
	        script.src = 'https://maps.googleapis.com/maps/api/js?';
	        script.src += apiKey ? 'key=' + apiKey : '';
	        script.onreadystatechange = this.setGSVLoader.bind( this );
	        script.onload = this.setGSVLoader.bind( this );

	        document.querySelector( 'head' ).appendChild( script );

	    },

	    /**
	     * Set GSV Loader
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    setGSVLoader: function () {

	        this.gsvLoader = new GoogleStreetviewLoader();

	        if ( this.loadRequested ) {

	            this.load();

	        }

	    },

	    /**
	     * Get GSV Loader
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     * @return {GoogleStreetviewLoader} GSV Loader instance
	     */
	    getGSVLoader: function () {

	        return this.gsvLoader;

	    },

	    /**
	     * Load GSV Loader
	     * @param  {string} panoId - Gogogle Street View panorama id
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    loadGSVLoader: function ( panoId ) {

	        this.loadRequested = false;

	        this.gsvLoader.onProgress = this.onProgress.bind( this );

	        this.gsvLoader.onPanoramaLoad = this.onLoad.bind( this );

	        this.gsvLoader.setZoom( this.getZoomLevel() );

	        this.gsvLoader.load( panoId );

	        this.gsvLoader.loaded = true;
	    },

	    /**
	     * This will be called when panorama is loaded
	     * @param  {HTMLCanvasElement} canvas - Canvas where the tiles have been drawn
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    onLoad: function ( canvas ) {

	        ImagePanorama.prototype.onLoad.call( this, new THREE.Texture( canvas ) );

	    },

	    /**
	     * Reset
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    reset: function () {

	        this.gsvLoader = undefined;

	        ImagePanorama.prototype.reset.call( this );

	    }

	} );

	/**
	 * Stereographic projection shader
	 * based on http://notlion.github.io/streetview-stereographic
	 * @author pchen66
	 */

	/**
	 * @description Stereograhpic Shader
	 * @module StereographicShader
	 * @property {object} uniforms
	 * @property {THREE.Texture} uniforms.tDiffuse diffuse map
	 * @property {number} uniforms.resolution image resolution
	 * @property {THREE.Matrix4} uniforms.transform transformation matrix
	 * @property {number} uniforms.zoom image zoom factor
	 * @property {number} uniforms.opacity image opacity
	 * @property {string} vertexShader vertex shader
	 * @property {string} fragmentShader fragment shader
	 */
	const StereographicShader = {

	    uniforms: {

	        'tDiffuse': { value: new THREE.Texture() },
	        'resolution': { value: 1.0 },
	        'transform': { value: new THREE.Matrix4() },
	        'zoom': { value: 1.0 },
	        'opacity': { value: 1.0 }

	    },

	    vertexShader: [

	        'varying vec2 vUv;',

	        'void main() {',

	        'vUv = uv;',
	        'gl_Position = vec4( position, 1.0 );',

	        '}' 

	    ].join( '\n' ),

	    fragmentShader: [

	        'uniform sampler2D tDiffuse;',
	        'uniform float resolution;',
	        'uniform mat4 transform;',
	        'uniform float zoom;',
	        'uniform float opacity;',

	        'varying vec2 vUv;',

	        'const float PI = 3.141592653589793;',

	        'void main(){',

	        'vec2 position = -1.0 +  2.0 * vUv;',

	        'position *= vec2( zoom * resolution, zoom * 0.5 );',

	        'float x2y2 = position.x * position.x + position.y * position.y;',
	        'vec3 sphere_pnt = vec3( 2. * position, x2y2 - 1. ) / ( x2y2 + 1. );',

	        'sphere_pnt = vec3( transform * vec4( sphere_pnt, 1.0 ) );',

	        'vec2 sampleUV = vec2(',
	        '(atan(sphere_pnt.y, sphere_pnt.x) / PI + 1.0) * 0.5,',
	        '(asin(sphere_pnt.z) / PI + 0.5)',
	        ');',

	        'gl_FragColor = texture2D( tDiffuse, sampleUV );',

	        'gl_FragColor.a *= opacity;',

	        '}'

	    ].join( '\n' )

	};

	/**
	 * @classdesc Little Planet
	 * @constructor
	 * @param {string} type 		- Type of little planet basic class
	 * @param {string} source 		- URL for the image source
	 * @param {number} [size=10000] - Size of plane geometry
	 * @param {number} [ratio=0.5]  - Ratio of plane geometry's height against width
	 */
	function LittlePlanet ( type = 'image', source, size = 10000, ratio = 0.5 ) {

	    if ( type === 'image' ) {

	        ImagePanorama.call( this, source, this.createGeometry( size, ratio ), this.createMaterial( size ) );

	    }

	    this.size = size;
	    this.ratio = ratio;
	    this.EPS = 0.000001;
	    this.frameId = null;

	    this.dragging = false;
	    this.userMouse = new THREE.Vector2();

	    this.quatA = new THREE.Quaternion();
	    this.quatB = new THREE.Quaternion();
	    this.quatCur = new THREE.Quaternion();
	    this.quatSlerp = new THREE.Quaternion();

	    this.vectorX = new THREE.Vector3( 1, 0, 0 );
	    this.vectorY = new THREE.Vector3( 0, 1, 0 );

	    this.addEventListener( 'window-resize', this.onWindowResize );

	}

	LittlePlanet.prototype = Object.assign( Object.create( ImagePanorama.prototype ), {

	    constructor: LittlePlanet,

	    add: function ( object ) {

	        if ( arguments.length > 1 ) {
				
	            for ( let i = 0; i < arguments.length; i ++ ) {

	                this.add( arguments[ i ] );

	            }

	            return this;

	        }

	        if ( object instanceof Infospot ) {

	            object.material.depthTest = false;
				
	        }

	        ImagePanorama.prototype.add.call( this, object );

	    },

	    createGeometry: function ( size, ratio ) {

	        return new THREE.PlaneBufferGeometry( size, size * ratio );

	    },

	    createMaterial: function ( size ) {

	        const shader = Object.assign( {}, StereographicShader ), uniforms = shader.uniforms;

	        uniforms.zoom.value = size;
	        uniforms.opacity.value = 0.0;

	        return new THREE.ShaderMaterial( {

	            uniforms: uniforms,
	            vertexShader: shader.vertexShader,
	            fragmentShader: shader.fragmentShader,
	            side: THREE.BackSide,
	            transparent: true

	        } );
			
	    },

	    registerMouseEvents: function () {

	        this.container.addEventListener( 'mousedown', this.onMouseDown.bind( this ), { passive: true } );
	        this.container.addEventListener( 'mousemove', this.onMouseMove.bind( this ), { passive: true } );
	        this.container.addEventListener( 'mouseup', this.onMouseUp.bind( this ), { passive: true } );
	        this.container.addEventListener( 'touchstart', this.onMouseDown.bind( this ), { passive: true } );
	        this.container.addEventListener( 'touchmove', this.onMouseMove.bind( this ), { passive: true } );
	        this.container.addEventListener( 'touchend', this.onMouseUp.bind( this ), { passive: true } );
	        this.container.addEventListener( 'mousewheel', this.onMouseWheel.bind( this ), { passive: false } );
	        this.container.addEventListener( 'DOMMouseScroll', this.onMouseWheel.bind( this ), { passive: false } );
	        this.container.addEventListener( 'contextmenu', this.onContextMenu.bind( this ), { passive: true } );
			
	    },

	    unregisterMouseEvents: function () {

	        this.container.removeEventListener( 'mousedown', this.onMouseDown.bind( this ), false );
	        this.container.removeEventListener( 'mousemove', this.onMouseMove.bind( this ), false );
	        this.container.removeEventListener( 'mouseup', this.onMouseUp.bind( this ), false );
	        this.container.removeEventListener( 'touchstart', this.onMouseDown.bind( this ), false );
	        this.container.removeEventListener( 'touchmove', this.onMouseMove.bind( this ), false );
	        this.container.removeEventListener( 'touchend', this.onMouseUp.bind( this ), false );
	        this.container.removeEventListener( 'mousewheel', this.onMouseWheel.bind( this ), false );
	        this.container.removeEventListener( 'DOMMouseScroll', this.onMouseWheel.bind( this ), false );
	        this.container.removeEventListener( 'contextmenu', this.onContextMenu.bind( this ), false );
			
	    },

	    onMouseDown: function ( event ) {

	        const inputCount = ( event.touches && event.touches.length ) || 1 ;

	        switch ( inputCount ) {

	        case 1:

	            const x = ( event.clientX >= 0 ) ? event.clientX : event.touches[ 0 ].clientX;
	            const y = ( event.clientY >= 0 ) ? event.clientY : event.touches[ 0 ].clientY;

	            this.dragging = true;
	            this.userMouse.set( x, y );

	            break;

	        case 2:

	            const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            const distance = Math.sqrt( dx * dx + dy * dy );
	            this.userMouse.pinchDistance = distance;

	            break;

	        default:

	            break;

	        }

	        this.onUpdateCallback();

	    },

	    onMouseMove: function ( event ) {

	        const inputCount = ( event.touches && event.touches.length ) || 1 ;

	        switch ( inputCount ) {

	        case 1:

	            const x = ( event.clientX >= 0 ) ? event.clientX : event.touches[ 0 ].clientX;
	            const y = ( event.clientY >= 0 ) ? event.clientY : event.touches[ 0 ].clientY;

	            const angleX = THREE.Math.degToRad( x - this.userMouse.x ) * 0.4;
	            const angleY = THREE.Math.degToRad( y - this.userMouse.y ) * 0.4;

	            if ( this.dragging ) {
	                this.quatA.setFromAxisAngle( this.vectorY, angleX );
	                this.quatB.setFromAxisAngle( this.vectorX, angleY );
	                this.quatCur.multiply( this.quatA ).multiply( this.quatB );
	                this.userMouse.set( x, y );
	            }

	            break;

	        case 2:

	            const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            const distance = Math.sqrt( dx * dx + dy * dy );

	            this.addZoomDelta( this.userMouse.pinchDistance - distance );

	            break;

	        default:

	            break;

	        }

	    },

	    onMouseUp: function () {

	        this.dragging = false;

	    },

	    onMouseWheel: function ( event ) {

	        event.preventDefault();
	        event.stopPropagation();

	        let delta = 0;

	        if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

	            delta = event.wheelDelta;

	        } else if ( event.detail !== undefined ) { // Firefox

	            delta = - event.detail;

	        }

	        this.addZoomDelta( delta );
	        this.onUpdateCallback();

	    },

	    addZoomDelta: function ( delta ) {

	        const uniforms = this.material.uniforms;
	        const lowerBound = this.size * 0.1;
	        const upperBound = this.size * 10;

	        uniforms.zoom.value += delta;

	        if ( uniforms.zoom.value <= lowerBound ) {

	            uniforms.zoom.value = lowerBound;

	        } else if ( uniforms.zoom.value >= upperBound ) {

	            uniforms.zoom.value = upperBound;

	        }

	    },

	    onUpdateCallback: function () {

	        this.frameId = window.requestAnimationFrame( this.onUpdateCallback.bind( this ) );

	        this.quatSlerp.slerp( this.quatCur, 0.1 );

	        if ( this.material ) {

	            this.material.uniforms.transform.value.makeRotationFromQuaternion( this.quatSlerp );

	        }
	        
	        if ( !this.dragging && 1.0 - this.quatSlerp.clone().dot( this.quatCur ) < this.EPS ) {
				
	            window.cancelAnimationFrame( this.frameId );

	        }

	    },

	    reset: function () {

	        this.quatCur.set( 0, 0, 0, 1 );
	        this.quatSlerp.set( 0, 0, 0, 1 );
	        this.onUpdateCallback();

	    },

	    onLoad: function ( texture ) {

	        this.material.uniforms.resolution.value = this.container.clientWidth / this.container.clientHeight;

	        this.registerMouseEvents();
	        this.onUpdateCallback();
			
	        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'disableControl' } );

	        ImagePanorama.prototype.onLoad.call( this, texture );
			
	    },

	    onLeave: function () {

	        this.unregisterMouseEvents();

	        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'enableControl', data: CONTROLS.ORBIT } );

	        window.cancelAnimationFrame( this.frameId );

	        ImagePanorama.prototype.onLeave.call( this );
			
	    },

	    onWindowResize: function () {

	        this.material.uniforms.resolution.value = this.container.clientWidth / this.container.clientHeight;

	    },

	    onContextMenu: function () {

	        this.dragging = false;

	    },

	    dispose: function () {	

	        this.unregisterMouseEvents();

	        ImagePanorama.prototype.dispose.call( this );

	    }

	});

	/**
	 * @classdesc Image Little Planet
	 * @constructor
	 * @param {string} source 		- URL for the image source
	 * @param {number} [size=10000] - Size of plane geometry
	 * @param {number} [ratio=0.5]  - Ratio of plane geometry's height against width
	 */
	function ImageLittlePlanet ( source, size, ratio ) {

	    LittlePlanet.call( this, 'image', source, size, ratio );

	}

	ImageLittlePlanet.prototype = Object.assign( Object.create( LittlePlanet.prototype ), {

	    constructor: ImageLittlePlanet,

	    /**
	     * On loaded with texture
	     * @param {THREE.Texture} texture
	     * @memberOf ImageLittlePlanet
	     * @instance
	     */
	    onLoad: function ( texture ) {

	        this.updateTexture( texture );

	        LittlePlanet.prototype.onLoad.call( this, texture );

	    },
	    
	    /**
	     * Update texture
	     * @param {THREE.Texture} texture 
	     * @memberOf ImageLittlePlanet
	     * @instance
	     */
	    updateTexture: function ( texture ) {

	        texture.minFilter = texture.magFilter = THREE.LinearFilter;
			
	        this.material.uniforms[ 'tDiffuse' ].value = texture;

	    },

	    /**
	     * Dispose
	     * @memberOf ImageLittlePlanet
	     * @instance
	     */
	    dispose: function () {

	        const tDiffuse = this.material.uniforms[ 'tDiffuse' ];

	        if ( tDiffuse && tDiffuse.value ) {

	            tDiffuse.value.dispose();

	        }

	        LittlePlanet.prototype.dispose.call( this );

	    }

	} );

	/**
	 * @classdesc Camera panorama
	 * @description See {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints|MediaStreamConstraints} for constraints
	 * @param {object} - camera constraints
	 * @constructor
	 */
	function CameraPanorama ( constraints ) {

	    const radius = 5000;
	    const geometry = new THREE.SphereBufferGeometry( radius, 60, 40 );
	    const material = new THREE.MeshBasicMaterial( { visible: false });

	    Panorama.call( this, geometry, material );

	    this.media = new Media( constraints );
	    this.radius = radius;

	    this.addEventListener( 'enter', this.start.bind( this ) );
	    this.addEventListener( 'leave', this.stop.bind( this ) );
	    this.addEventListener( 'panolens-container', this.onPanolensContainer.bind( this ) );
	    this.addEventListener( 'panolens-scene', this.onPanolensScene.bind( this ) );

	}

	CameraPanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

	    constructor: CameraPanorama,

	    /**
	     * On container event
	     * @param {object} event
	     * @memberOf CameraPanorama
	     * @instance
	     */
	    onPanolensContainer: function ( { container } ) {

	        this.media.setContainer( container );

	    },

	    /**
	     * On scene event
	     * @param {object} event 
	     * @memberOf CameraPanorama
	     * @instance
	     */
	    onPanolensScene: function ( { scene } ) {

	        this.media.setScene( scene );

	    },

	    /**
	     * Start camera streaming
	     * @memberOf CameraPanorama
	     * @instance
	     * @returns {Promise}
	     */
	    start: function () {

	        return this.media.start();

	    },

	    /**
	     * Stop camera streaming
	     * @memberOf CameraPanorama
	     * @instance
	     */
	    stop: function () {

	        this.media.stop();

	    },

	} );

	/**
	 * @classdesc Orbit Controls
	 * @constructor
	 * @external OrbitControls
	 * @param {THREE.Object} object 
	 * @param {HTMLElement} domElement 
	 */
	function OrbitControls ( object, domElement ) {

	    this.object = object;
	    this.domElement = ( domElement !== undefined ) ? domElement : document;
	    this.frameId = null;

	    // API

	    // Set to false to disable this control
	    this.enabled = true;

	    /*
	     * "target" sets the location of focus, where the control orbits around
	     * and where it pans with respect to.
	     */
	    this.target = new THREE.Vector3();

	    // center is old, deprecated; use "target" instead
	    this.center = this.target;

	    /*
	     * This option actually enables dollying in and out; left as "zoom" for
	     * backwards compatibility
	     */
	    this.noZoom = false;
	    this.zoomSpeed = 1.0;

	    // Limits to how far you can dolly in and out ( PerspectiveCamera only )
	    this.minDistance = 0;
	    this.maxDistance = Infinity;

	    // Limits to how far you can zoom in and out ( OrthographicCamera only )
	    this.minZoom = 0;
	    this.maxZoom = Infinity;

	    // Set to true to disable this control
	    this.noRotate = false;
	    this.rotateSpeed = -0.15;

	    // Set to true to disable this control
	    this.noPan = true;
	    this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	    // Set to true to automatically rotate around the target
	    this.autoRotate = false;
	    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	    /*
	     * How far you can orbit vertically, upper and lower limits.
	     * Range is 0 to Math.PI radians.
	     */
	    this.minPolarAngle = 0; // radians
	    this.maxPolarAngle = Math.PI; // radians

	    // Momentum
	  	this.momentumDampingFactor = 0.90;
	  	this.momentumScalingFactor = -0.005;
	  	this.momentumKeydownFactor = 20;

	  	// Fov
	  	this.minFov = 30;
	  	this.maxFov = 120;

	    /*
	     * How far you can orbit horizontally, upper and lower limits.
	     * If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	     */
	    this.minAzimuthAngle = - Infinity; // radians
	    this.maxAzimuthAngle = Infinity; // radians

	    // Set to true to disable use of the keys
	    this.noKeys = false;

	    // The four arrow keys
	    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	    // Mouse buttons
	    this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

	    /*
	     * //////////
	     * internals
	     */

	    var scope = this;

	    var EPS = 10e-8;
	    var MEPS = 10e-5;

	    var rotateStart = new THREE.Vector2();
	    var rotateEnd = new THREE.Vector2();
	    var rotateDelta = new THREE.Vector2();

	    var panStart = new THREE.Vector2();
	    var panEnd = new THREE.Vector2();
	    var panDelta = new THREE.Vector2();
	    var panOffset = new THREE.Vector3();

	    var offset = new THREE.Vector3();

	    var dollyStart = new THREE.Vector2();
	    var dollyEnd = new THREE.Vector2();
	    var dollyDelta = new THREE.Vector2();

	    var theta = 0;
	    var phi = 0;
	    var phiDelta = 0;
	    var thetaDelta = 0;
	    var scale = 1;
	    var pan = new THREE.Vector3();

	    var lastPosition = new THREE.Vector3();
	    var lastQuaternion = new THREE.Quaternion();

	    var momentumLeft = 0, momentumUp = 0;
	    var eventPrevious;
	    var momentumOn = false;

	    var keyUp, keyBottom, keyLeft, keyRight;

	    var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

	    var state = STATE.NONE;

	    // for reset

	    this.target0 = this.target.clone();
	    this.position0 = this.object.position.clone();
	    this.zoom0 = this.object.zoom;

	    // so camera.up is the orbit axis

	    var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
	    var quatInverse = quat.clone().inverse();

	    // events

	    var changeEvent = { type: 'change' };
	    var startEvent = { type: 'start' };
	    var endEvent = { type: 'end' };

	    this.setLastQuaternion = function ( quaternion ) {
	        lastQuaternion.copy( quaternion );
	        scope.object.quaternion.copy( quaternion );
	    };

	    this.getLastPosition = function () {
	        return lastPosition;
	    };

	    this.rotateLeft = function ( angle ) {

	        if ( angle === undefined ) {

	            angle = getAutoRotationAngle();

	        }

	        thetaDelta -= angle;


	    };

	    this.rotateUp = function ( angle ) {

	        if ( angle === undefined ) {

	            angle = getAutoRotationAngle();

	        }

	        phiDelta -= angle;

	    };

	    // pass in distance in world space to move left
	    this.panLeft = function ( distance ) {

	        var te = this.object.matrix.elements;

	        // get X column of matrix
	        panOffset.set( te[ 0 ], te[ 1 ], te[ 2 ] );
	        panOffset.multiplyScalar( - distance );

	        pan.add( panOffset );

	    };

	    // pass in distance in world space to move up
	    this.panUp = function ( distance ) {

	        var te = this.object.matrix.elements;

	        // get Y column of matrix
	        panOffset.set( te[ 4 ], te[ 5 ], te[ 6 ] );
	        panOffset.multiplyScalar( distance );

	        pan.add( panOffset );

	    };

	    /*
	     * pass in x,y of change desired in pixel space,
	     * right and down are positive
	     */
	    this.pan = function ( deltaX, deltaY ) {

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        if ( scope.object instanceof THREE.PerspectiveCamera ) {

	            // perspective
	            var position = scope.object.position;
	            var offset = position.clone().sub( scope.target );
	            var targetDistance = offset.length();

	            // half of the fov is center to top of screen
	            targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

	            // we actually don't use screenWidth, since perspective camera is fixed to screen height
	            scope.panLeft( 2 * deltaX * targetDistance / element.clientHeight );
	            scope.panUp( 2 * deltaY * targetDistance / element.clientHeight );

	        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

	            // orthographic
	            scope.panLeft( deltaX * (scope.object.right - scope.object.left) / element.clientWidth );
	            scope.panUp( deltaY * (scope.object.top - scope.object.bottom) / element.clientHeight );

	        } else {

	            // camera neither orthographic or perspective
	            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

	        }

	    };

	    this.momentum = function(){
			
	        if ( !momentumOn ) return;

	        if ( Math.abs( momentumLeft ) < MEPS && Math.abs( momentumUp ) < MEPS ) { 

	            momentumOn = false; 
	            return;
	        }

	        momentumUp   *= this.momentumDampingFactor;
	        momentumLeft *= this.momentumDampingFactor;

	        thetaDelta -= this.momentumScalingFactor * momentumLeft;
	        phiDelta   -= this.momentumScalingFactor * momentumUp;

	    };

	    this.dollyIn = function ( dollyScale ) {

	        if ( dollyScale === undefined ) {

	            dollyScale = getZoomScale();

	        }

	        if ( scope.object instanceof THREE.PerspectiveCamera ) {

	            scale /= dollyScale;

	        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

	            scope.object.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.object.zoom * dollyScale ) );
	            scope.object.updateProjectionMatrix();
	            scope.dispatchEvent( changeEvent );

	        } else {

	            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );

	        }

	    };

	    this.dollyOut = function ( dollyScale ) {

	        if ( dollyScale === undefined ) {

	            dollyScale = getZoomScale();

	        }

	        if ( scope.object instanceof THREE.PerspectiveCamera ) {

	            scale *= dollyScale;

	        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

	            scope.object.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.object.zoom / dollyScale ) );
	            scope.object.updateProjectionMatrix();
	            scope.dispatchEvent( changeEvent );

	        } else {

	            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );

	        }

	    };

	    this.update = function ( ignoreUpdate ) {

	        var position = this.object.position;

	        offset.copy( position ).sub( this.target );

	        // rotate offset to "y-axis-is-up" space
	        offset.applyQuaternion( quat );

	        // angle from z-axis around y-axis

	        theta = Math.atan2( offset.x, offset.z );

	        // angle from y-axis

	        phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

	        if ( this.autoRotate && state === STATE.NONE ) {

	            this.rotateLeft( getAutoRotationAngle() );

	        }

	        this.momentum();

	        theta += thetaDelta;
	        phi += phiDelta;

	        // restrict theta to be between desired limits
	        theta = Math.max( this.minAzimuthAngle, Math.min( this.maxAzimuthAngle, theta ) );

	        // restrict phi to be between desired limits
	        phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

	        // restrict phi to be betwee EPS and PI-EPS
	        phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

	        var radius = offset.length() * scale;

	        // restrict radius to be between desired limits
	        radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );

	        // move target to panned location
	        this.target.add( pan );

	        offset.x = radius * Math.sin( phi ) * Math.sin( theta );
	        offset.y = radius * Math.cos( phi );
	        offset.z = radius * Math.sin( phi ) * Math.cos( theta );

	        // rotate offset back to "camera-up-vector-is-up" space
	        offset.applyQuaternion( quatInverse );

	        position.copy( this.target ).add( offset );

	        this.object.lookAt( this.target );

	        thetaDelta = 0;
	        phiDelta = 0;
	        scale = 1;
	        pan.set( 0, 0, 0 );

	        /*
	         * update condition is:
	         * min(camera displacement, camera rotation in radians)^2 > EPS
	         * using small-angle approximation cos(x/2) = 1 - x^2 / 8
	         */
	        if ( lastPosition.distanceToSquared( this.object.position ) > EPS
			    || 8 * (1 - lastQuaternion.dot(this.object.quaternion)) > EPS ) {

	            if ( ignoreUpdate !== true ) { this.dispatchEvent( changeEvent ); }

	            lastPosition.copy( this.object.position );
	            lastQuaternion.copy (this.object.quaternion );

	        }

	    };


	    this.reset = function () {

	        state = STATE.NONE;

	        this.target.copy( this.target0 );
	        this.object.position.copy( this.position0 );
	        this.object.zoom = this.zoom0;

	        this.object.updateProjectionMatrix();
	        this.dispatchEvent( changeEvent );

	        this.update();

	    };

	    this.getPolarAngle = function () {

	        return phi;

	    };

	    this.getAzimuthalAngle = function () {

	        return theta;

	    };

	    function getAutoRotationAngle() {

	        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	    }

	    function getZoomScale() {

	        return Math.pow( 0.95, scope.zoomSpeed );

	    }

	    function onMouseDown( event ) {

	        momentumOn = false;

	   		momentumLeft = momentumUp = 0;

	        if ( scope.enabled === false ) return;
	        event.preventDefault();

	        if ( event.button === scope.mouseButtons.ORBIT ) {
	            if ( scope.noRotate === true ) return;

	            state = STATE.ROTATE;

	            rotateStart.set( event.clientX, event.clientY );

	        } else if ( event.button === scope.mouseButtons.ZOOM ) {
	            if ( scope.noZoom === true ) return;

	            state = STATE.DOLLY;

	            dollyStart.set( event.clientX, event.clientY );

	        } else if ( event.button === scope.mouseButtons.PAN ) {
	            if ( scope.noPan === true ) return;

	            state = STATE.PAN;

	            panStart.set( event.clientX, event.clientY );

	        }

	        if ( state !== STATE.NONE ) {
	            document.addEventListener( 'mousemove', onMouseMove, false );
	            document.addEventListener( 'mouseup', onMouseUp, false );
	            scope.dispatchEvent( startEvent );
	        }

	        scope.update();

	    }

	    function onMouseMove( event ) {

	        if ( scope.enabled === false ) return;

	        event.preventDefault();

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        if ( state === STATE.ROTATE ) {

	            if ( scope.noRotate === true ) return;

	            rotateEnd.set( event.clientX, event.clientY );
	            rotateDelta.subVectors( rotateEnd, rotateStart );

	            // rotating across whole screen goes 360 degrees around
	            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

	            // rotating up and down along whole screen attempts to go 360, but limited to 180
	            scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

	            rotateStart.copy( rotateEnd );

	            if( eventPrevious ){
	                momentumLeft = event.clientX - eventPrevious.clientX;
	                momentumUp = event.clientY - eventPrevious.clientY;
	            }

	            eventPrevious = event;

	        } else if ( state === STATE.DOLLY ) {

	            if ( scope.noZoom === true ) return;

	            dollyEnd.set( event.clientX, event.clientY );
	            dollyDelta.subVectors( dollyEnd, dollyStart );

	            if ( dollyDelta.y > 0 ) {

	                scope.dollyIn();

	            } else if ( dollyDelta.y < 0 ) {

	                scope.dollyOut();

	            }

	            dollyStart.copy( dollyEnd );

	        } else if ( state === STATE.PAN ) {

	            if ( scope.noPan === true ) return;

	            panEnd.set( event.clientX, event.clientY );
	            panDelta.subVectors( panEnd, panStart );

	            scope.pan( panDelta.x, panDelta.y );

	            panStart.copy( panEnd );

	        }

	        if ( state !== STATE.NONE ) scope.update();

	    }

	    function onMouseUp( /* event */ ) {

	        momentumOn = true;

	        eventPrevious = undefined;

	        if ( scope.enabled === false ) return;

	        document.removeEventListener( 'mousemove', onMouseMove, false );
	        document.removeEventListener( 'mouseup', onMouseUp, false );
	        scope.dispatchEvent( endEvent );
	        state = STATE.NONE;

	    }

	    function onMouseWheel( event ) {

	        if ( scope.enabled === false || scope.noZoom === true || state !== STATE.NONE ) return;

	        event.preventDefault();
	        event.stopPropagation();

	        var delta = 0;

	        if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

	            delta = event.wheelDelta;

	        } else if ( event.detail !== undefined ) { // Firefox

	            delta = - event.detail;

	        }

	        if ( delta > 0 ) {

	            // scope.dollyOut();
	            scope.object.fov = ( scope.object.fov < scope.maxFov ) 
	                ? scope.object.fov + 1
	                : scope.maxFov;
	            scope.object.updateProjectionMatrix();

	        } else if ( delta < 0 ) {

	            // scope.dollyIn();
	            scope.object.fov = ( scope.object.fov > scope.minFov ) 
	                ? scope.object.fov - 1
	                : scope.minFov;
	            scope.object.updateProjectionMatrix();

	        }

	        scope.update();
	        scope.dispatchEvent( changeEvent );
	        scope.dispatchEvent( startEvent );
	        scope.dispatchEvent( endEvent );

	    }

	    function onKeyUp ( event ) {

	        switch ( event.keyCode ) {

	        case scope.keys.UP:
	            keyUp = false;
	            break;

	        case scope.keys.BOTTOM:
	            keyBottom = false;
	            break;

	        case scope.keys.LEFT:
	            keyLeft = false;
	            break;

	        case scope.keys.RIGHT:
	            keyRight = false;
	            break;

	        }

	    }

	    function onKeyDown( event ) {

	        if ( scope.enabled === false || scope.noKeys === true || scope.noRotate === true ) return;

	        switch ( event.keyCode ) {

	        case scope.keys.UP:
	            keyUp = true;
	            break;

	        case scope.keys.BOTTOM:
	            keyBottom = true;
	            break;

	        case scope.keys.LEFT:
	            keyLeft = true;
	            break;

	        case scope.keys.RIGHT:
	            keyRight = true;
	            break;

	        }

	        if (keyUp || keyBottom || keyLeft || keyRight) {

	            momentumOn = true;

	            if (keyUp) momentumUp = - scope.rotateSpeed * scope.momentumKeydownFactor;
	            if (keyBottom) momentumUp = scope.rotateSpeed * scope.momentumKeydownFactor;
	            if (keyLeft) momentumLeft = - scope.rotateSpeed * scope.momentumKeydownFactor;
	            if (keyRight) momentumLeft = scope.rotateSpeed * scope.momentumKeydownFactor;

	        }

	    }

	    function touchstart( event ) {

	        momentumOn = false;

	        momentumLeft = momentumUp = 0;

	        if ( scope.enabled === false ) return;

	        switch ( event.touches.length ) {

	        case 1:	// one-fingered touch: rotate

	            if ( scope.noRotate === true ) return;

	            state = STATE.TOUCH_ROTATE;

	            rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            break;

	        case 2:	// two-fingered touch: dolly

	            if ( scope.noZoom === true ) return;

	            state = STATE.TOUCH_DOLLY;

	            var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            var distance = Math.sqrt( dx * dx + dy * dy );

	            dollyStart.set( 0, distance );

	            break;

	        case 3: // three-fingered touch: pan

	            if ( scope.noPan === true ) return;

	            state = STATE.TOUCH_PAN;

	            panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            break;

	        default:

	            state = STATE.NONE;

	        }

	        if ( state !== STATE.NONE ) scope.dispatchEvent( startEvent );

	    }

	    function touchmove( event ) {

	        if ( scope.enabled === false ) return;

	        event.preventDefault();
	        event.stopPropagation();

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        switch ( event.touches.length ) {

	        case 1: // one-fingered touch: rotate

	            if ( scope.noRotate === true ) return;
	            if ( state !== STATE.TOUCH_ROTATE ) return;

	            rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            rotateDelta.subVectors( rotateEnd, rotateStart );

	            // rotating across whole screen goes 360 degrees around
	            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
	            // rotating up and down along whole screen attempts to go 360, but limited to 180
	            scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

	            rotateStart.copy( rotateEnd );

	            if( eventPrevious ){
	                momentumLeft = event.touches[ 0 ].pageX - eventPrevious.pageX;
	                momentumUp = event.touches[ 0 ].pageY - eventPrevious.pageY;
	            }

	            eventPrevious = {
	                pageX: event.touches[ 0 ].pageX,
	                pageY: event.touches[ 0 ].pageY,
	            };

	            scope.update();
	            break;

	        case 2: // two-fingered touch: dolly

	            if ( scope.noZoom === true ) return;
	            if ( state !== STATE.TOUCH_DOLLY ) return;

	            var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            var distance = Math.sqrt( dx * dx + dy * dy );

	            dollyEnd.set( 0, distance );
	            dollyDelta.subVectors( dollyEnd, dollyStart );

	            if ( dollyDelta.y < 0 ) {

	                scope.object.fov = ( scope.object.fov < scope.maxFov ) 
	                    ? scope.object.fov + 1
	                    : scope.maxFov;
	                scope.object.updateProjectionMatrix();

	            } else if ( dollyDelta.y > 0 ) {

	                scope.object.fov = ( scope.object.fov > scope.minFov ) 
	                    ? scope.object.fov - 1
	                    : scope.minFov;
	                scope.object.updateProjectionMatrix();

	            }

	            dollyStart.copy( dollyEnd );

	            scope.update();
	            scope.dispatchEvent( changeEvent );
	            break;

	        case 3: // three-fingered touch: pan

	            if ( scope.noPan === true ) return;
	            if ( state !== STATE.TOUCH_PAN ) return;

	            panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            panDelta.subVectors( panEnd, panStart );

	            scope.pan( panDelta.x, panDelta.y );

	            panStart.copy( panEnd );

	            scope.update();
	            break;

	        default:

	            state = STATE.NONE;

	        }

	    }

	    function touchend( /* event */ ) {

	        momentumOn = true;

	        eventPrevious = undefined;

	        if ( scope.enabled === false ) return;

	        scope.dispatchEvent( endEvent );
	        state = STATE.NONE;

	    }

	    this.dispose = function() {

	        this.domElement.removeEventListener( 'mousedown', onMouseDown );
	        this.domElement.removeEventListener( 'mousewheel', onMouseWheel );
	        this.domElement.removeEventListener( 'DOMMouseScroll', onMouseWheel );

	        this.domElement.removeEventListener( 'touchstart', touchstart );
	        this.domElement.removeEventListener( 'touchend', touchend );
	        this.domElement.removeEventListener( 'touchmove', touchmove );

	        window.removeEventListener( 'keyup', onKeyUp );
	        window.removeEventListener( 'keydown', onKeyDown );

	    };

	    // this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	    this.domElement.addEventListener( 'mousedown', onMouseDown, { passive: false } );
	    this.domElement.addEventListener( 'mousewheel', onMouseWheel, { passive: false } );
	    this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, { passive: false } ); // firefox

	    this.domElement.addEventListener( 'touchstart', touchstart, { passive: false } );
	    this.domElement.addEventListener( 'touchend', touchend, { passive: false } );
	    this.domElement.addEventListener( 'touchmove', touchmove, { passive: false } );

	    window.addEventListener( 'keyup', onKeyUp, { passive: false } );
	    window.addEventListener( 'keydown', onKeyDown, { passive: false } );

	    // force an update at start
	    this.update();

	}
	OrbitControls.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype ), {

	    constructor: OrbitControls

	} );

	/**
	 * @classdesc Device Orientation Control
	 * @constructor
	 * @external DeviceOrientationControls
	 * @param {THREE.Camera} camera 
	 * @param {HTMLElement} domElement 
	 */
	function DeviceOrientationControls ( camera, domElement ) {

	    var scope = this;
	    var changeEvent = { type: 'change' };

	    var rotY = 0;
	    var rotX = 0;
	    var tempX = 0;
	    var tempY = 0;

	    this.camera = camera;
	    this.camera.rotation.reorder( 'YXZ' );
	    this.domElement = ( domElement !== undefined ) ? domElement : document;

	    this.enabled = true;

	    this.deviceOrientation = {};
	    this.screenOrientation = 0;

	    this.alpha = 0;
	    this.alphaOffsetAngle = 0;


	    var onDeviceOrientationChangeEvent = function( event ) {

	        scope.deviceOrientation = event;

	    };

	    var onScreenOrientationChangeEvent = function() {

	        scope.screenOrientation = window.orientation || 0;

	    };

	    var onTouchStartEvent = function (event) {

	        event.preventDefault();
	        event.stopPropagation();

	        tempX = event.touches[ 0 ].pageX;
	        tempY = event.touches[ 0 ].pageY;

	    };

	    var onTouchMoveEvent = function (event) {

	        event.preventDefault();
	        event.stopPropagation();

	        rotY += THREE.Math.degToRad( ( event.touches[ 0 ].pageX - tempX ) / 4 );
	        rotX += THREE.Math.degToRad( ( tempY - event.touches[ 0 ].pageY ) / 4 );

	        scope.updateAlphaOffsetAngle( rotY );

	        tempX = event.touches[ 0 ].pageX;
	        tempY = event.touches[ 0 ].pageY;

	    };

	    // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

	    var setCameraQuaternion = function( quaternion, alpha, beta, gamma, orient ) {

	        var zee = new THREE.Vector3( 0, 0, 1 );

	        var euler = new THREE.Euler();

	        var q0 = new THREE.Quaternion();

	        var q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

	        var vectorFingerY;
	        var fingerQY = new THREE.Quaternion();
	        var fingerQX = new THREE.Quaternion();

	        if ( scope.screenOrientation == 0 ) {

	            vectorFingerY = new THREE.Vector3( 1, 0, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, -rotX );

	        } else if ( scope.screenOrientation == 180 ) {

	            vectorFingerY = new THREE.Vector3( 1, 0, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

	        } else if ( scope.screenOrientation == 90 ) {

	            vectorFingerY = new THREE.Vector3( 0, 1, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

	        } else if ( scope.screenOrientation == - 90) {

	            vectorFingerY = new THREE.Vector3( 0, 1, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, -rotX );

	        }

	        q1.multiply( fingerQY );
	        q1.multiply( fingerQX );

	        euler.set( beta, alpha, - gamma, 'YXZ' ); // 'ZXY' for the device, but 'YXZ' for us

	        quaternion.setFromEuler( euler ); // orient the device

	        quaternion.multiply( q1 ); // camera looks out the back of the device, not the top

	        quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) ); // adjust for screen orientation

	    };

	    this.connect = function() {

	        onScreenOrientationChangeEvent(); // run once on load

	        window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, { passive: true } );
	        window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, { passive: true } );
	        window.addEventListener( 'deviceorientation', this.update.bind( this ), { passive: true } );

	        scope.domElement.addEventListener( 'touchstart', onTouchStartEvent, { passive: false } );
	        scope.domElement.addEventListener( 'touchmove', onTouchMoveEvent, { passive: false } );

	        scope.enabled = true;

	    };

	    this.disconnect = function() {

	        window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
	        window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );
	        window.removeEventListener( 'deviceorientation', this.update.bind( this ), false );

	        scope.domElement.removeEventListener( 'touchstart', onTouchStartEvent, false );
	        scope.domElement.removeEventListener( 'touchmove', onTouchMoveEvent, false );

	        scope.enabled = false;

	    };

	    this.update = function( ignoreUpdate ) {

	        if ( scope.enabled === false ) return;

	        var alpha = scope.deviceOrientation.alpha ? THREE.Math.degToRad( scope.deviceOrientation.alpha ) + scope.alphaOffsetAngle : 0; // Z
	        var beta = scope.deviceOrientation.beta ? THREE.Math.degToRad( scope.deviceOrientation.beta ) : 0; // X'
	        var gamma = scope.deviceOrientation.gamma ? THREE.Math.degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
	        var orient = scope.screenOrientation ? THREE.Math.degToRad( scope.screenOrientation ) : 0; // O

	        setCameraQuaternion( scope.camera.quaternion, alpha, beta, gamma, orient );
	        scope.alpha = alpha;

	        if ( ignoreUpdate !== true ) { scope.dispatchEvent( changeEvent ); }

	    };

	    this.updateAlphaOffsetAngle = function( angle ) {

	        this.alphaOffsetAngle = angle;
	        this.update();

	    };

	    this.dispose = function() {

	        this.disconnect();

	    };

	    this.connect();

	}
	DeviceOrientationControls.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype), {

	    constructor: DeviceOrientationControls

	} );

	/**
	 * @classdesc Google Cardboard Effect Composer
	 * @constructor
	 * @external CardboardEffect
	 * @param {THREE.WebGLRenderer} renderer 
	 */
	function CardboardEffect ( renderer ) {

	    var _camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

	    var _scene = new THREE.Scene();

	    var _stereo = new THREE.StereoCamera();
	    _stereo.aspect = 0.5;

	    var _params = { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat };

	    var _renderTarget = new THREE.WebGLRenderTarget( 512, 512, _params );
	    _renderTarget.scissorTest = true;
	    _renderTarget.texture.generateMipmaps = false;

	    /*
	     * Distortion Mesh ported from:
	     * https://github.com/borismus/webvr-boilerplate/blob/master/src/distortion/barrel-distortion-fragment.js
	     */

	    var distortion = new THREE.Vector2( 0.441, 0.156 );

	    var geometry = new THREE.PlaneBufferGeometry( 1, 1, 10, 20 ).removeAttribute( 'normal' ).toNonIndexed();

	    var positions = geometry.attributes.position.array;
	    var uvs = geometry.attributes.uv.array;

	    // duplicate
	    geometry.attributes.position.count *= 2;
	    geometry.attributes.uv.count *= 2;

	    var positions2 = new Float32Array( positions.length * 2 );
	    positions2.set( positions );
	    positions2.set( positions, positions.length );

	    var uvs2 = new Float32Array( uvs.length * 2 );
	    uvs2.set( uvs );
	    uvs2.set( uvs, uvs.length );

	    var vector = new THREE.Vector2();
	    var length = positions.length / 3;

	    for ( var i = 0, l = positions2.length / 3; i < l; i ++ ) {

	        vector.x = positions2[ i * 3 + 0 ];
	        vector.y = positions2[ i * 3 + 1 ];

	        var dot = vector.dot( vector );
	        var scalar = 1.5 + ( distortion.x + distortion.y * dot ) * dot;

	        var offset = i < length ? 0 : 1;

	        positions2[ i * 3 + 0 ] = ( vector.x / scalar ) * 1.5 - 0.5 + offset;
	        positions2[ i * 3 + 1 ] = ( vector.y / scalar ) * 3.0;

	        uvs2[ i * 2 ] = ( uvs2[ i * 2 ] + offset ) * 0.5;

	    }

	    geometry.attributes.position.array = positions2;
	    geometry.attributes.uv.array = uvs2;

	    //

	    var material = new THREE.MeshBasicMaterial( { map: _renderTarget.texture } );
	    var mesh = new THREE.Mesh( geometry, material );
	    _scene.add( mesh );

	    //

	    this.setSize = function ( width, height ) {

	        renderer.setSize( width, height );

	        var pixelRatio = renderer.getPixelRatio();

	        _renderTarget.setSize( width * pixelRatio, height * pixelRatio );

	    };

	    this.render = function ( scene, camera ) {

	        scene.updateMatrixWorld();

	        if ( camera.parent === null ) camera.updateMatrixWorld();

	        _stereo.update( camera );

	        var width = _renderTarget.width / 2;
	        var height = _renderTarget.height;

	        if ( renderer.autoClear ) renderer.clear();

	        _renderTarget.scissor.set( 0, 0, width, height );
	        _renderTarget.viewport.set( 0, 0, width, height );
	        renderer.setRenderTarget( _renderTarget );
	        renderer.render( scene, _stereo.cameraL );

	        renderer.clearDepth();

	        _renderTarget.scissor.set( width, 0, width, height );
	        _renderTarget.viewport.set( width, 0, width, height );
	        renderer.setRenderTarget( _renderTarget );
	        renderer.render( scene, _stereo.cameraR );

	        renderer.clearDepth();

	        renderer.setRenderTarget( null );
	        renderer.render( _scene, _camera );
	    };

	}

	/**
	 * @classdesc Stereo Effect Composer
	 * @constructor
	 * @external StereoEffect
	 * @param {THREE.WebGLRenderer} renderer 
	 */
	const StereoEffect = function ( renderer ) {

	    var _stereo = new THREE.StereoCamera();
	    _stereo.aspect = 0.5;
	    var size = new THREE.Vector2();

	    this.setEyeSeparation = function ( eyeSep ) {

	        _stereo.eyeSep = eyeSep;

	    };

	    this.setSize = function ( width, height ) {

	        renderer.setSize( width, height );

	    };

	    this.render = function ( scene, camera ) {

	        scene.updateMatrixWorld();

	        if ( camera.parent === null ) camera.updateMatrixWorld();

	        _stereo.update( camera );

	        renderer.getSize( size );

	        if ( renderer.autoClear ) renderer.clear();
	        renderer.setScissorTest( true );

	        renderer.setScissor( 0, 0, size.width / 2, size.height );
	        renderer.setViewport( 0, 0, size.width / 2, size.height );
	        renderer.render( scene, _stereo.cameraL );

	        renderer.setScissor( size.width / 2, 0, size.width / 2, size.height );
	        renderer.setViewport( size.width / 2, 0, size.width / 2, size.height );
	        renderer.render( scene, _stereo.cameraR );

	        renderer.setScissorTest( false );

	    };

	};

	/**
	 * @classdesc Viewer contains pre-defined scene, camera and renderer
	 * @constructor
	 * @param {object} [options] - Use custom or default config options
	 * @param {HTMLElement} [options.container] - A HTMLElement to host the canvas
	 * @param {THREE.Scene} [options.scene=THREE.Scene] - A THREE.Scene which contains panorama and 3D objects
	 * @param {THREE.Camera} [options.camera=THREE.PerspectiveCamera] - A THREE.Camera to view the scene
	 * @param {THREE.WebGLRenderer} [options.renderer=THREE.WebGLRenderer] - A THREE.WebGLRenderer to render canvas
	 * @param {boolean} [options.controlBar=true] - Show/hide control bar on the bottom of the container
	 * @param {array}   [options.controlButtons=[]] - Button names to mount on controlBar if controlBar exists, Defaults to ['fullscreen', 'setting', 'video']
	 * @param {boolean} [options.autoHideControlBar=false] - Auto hide control bar when click on non-active area
	 * @param {boolean} [options.autoHideInfospot=true] - Auto hide infospots when click on non-active area
	 * @param {boolean} [options.horizontalView=false] - Allow only horizontal camera control
	 * @param {number}  [options.clickTolerance=10] - Distance tolerance to tigger click / tap event
	 * @param {number}  [options.cameraFov=60] - Camera field of view value
	 * @param {boolean} [options.reverseDragging=false] - Reverse dragging direction
	 * @param {boolean} [options.enableReticle=false] - Enable reticle for mouseless interaction other than VR mode
	 * @param {number}  [options.dwellTime=1500] - Dwell time for reticle selection in ms
	 * @param {boolean} [options.autoReticleSelect=true] - Auto select a clickable target after dwellTime
	 * @param {boolean} [options.viewIndicator=false] - Adds an angle view indicator in upper left corner
	 * @param {number}  [options.indicatorSize=30] - Size of View Indicator
	 * @param {string}  [options.output='none'] - Whether and where to output raycast position. Could be 'event', 'console' or 'overlay'.
	 * @param {boolean} [options.autoRotate=false] - Auto rotate
	 * @param {number}  [options.autoRotateSpeed=2.0] - Auto rotate speed as in degree per second. Positive is counter-clockwise and negative is clockwise.
	 * @param {number}  [options.autoRotateActivationDuration=5000] - Duration before auto rotatation when no user interactivity in ms
	 */
	function Viewer ( options ) {

	    let container;

	    options = options || {};
	    options.controlBar = options.controlBar !== undefined ? options.controlBar : true;
	    options.controlButtons = options.controlButtons || [ 'fullscreen', 'setting', 'video' ];
	    options.autoHideControlBar = options.autoHideControlBar !== undefined ? options.autoHideControlBar : false;
	    options.autoHideInfospot = options.autoHideInfospot !== undefined ? options.autoHideInfospot : true;
	    options.horizontalView = options.horizontalView !== undefined ? options.horizontalView : false;
	    options.clickTolerance = options.clickTolerance || 10;
	    options.cameraFov = options.cameraFov || 60;
	    options.reverseDragging = options.reverseDragging || false;
	    options.enableReticle = options.enableReticle || false;
	    options.dwellTime = options.dwellTime || 1500;
	    options.autoReticleSelect = options.autoReticleSelect !== undefined ? options.autoReticleSelect : true;
	    options.viewIndicator = options.viewIndicator !== undefined ? options.viewIndicator : false;
	    options.indicatorSize = options.indicatorSize || 30;
	    options.output = options.output ? options.output : 'none';
	    options.autoRotate = options.autoRotate || false;
	    options.autoRotateSpeed = options.autoRotateSpeed || 2.0;
	    options.autoRotateActivationDuration = options.autoRotateActivationDuration || 5000;

	    this.options = options;

	    /*
	     * CSS Icon
	     * const styleLoader = new StyleLoader();
	     * styleLoader.inject( 'icono' );
	     */

	    // Container
	    if ( options.container ) {

	        container = options.container;
	        container._width = container.clientWidth;
	        container._height = container.clientHeight;

	    } else {

	        container = document.createElement( 'div' );
	        container.classList.add( 'panolens-container' );
	        container.style.width = '100%';
	        container.style.height = '100%';
	        container._width = window.innerWidth;
	        container._height = window.innerHeight;
	        document.body.appendChild( container );

	    }

	    this.container = container;

	    this.camera = options.camera || new THREE.PerspectiveCamera( this.options.cameraFov, this.container.clientWidth / this.container.clientHeight, 1, 10000 );
	    this.scene = options.scene || new THREE.Scene();
	    this.renderer = options.renderer || new THREE.WebGLRenderer( { alpha: true, antialias: false } );
	    this.sceneReticle = new THREE.Scene();

	    this.viewIndicatorSize = this.options.indicatorSize;

	    this.reticle = {};
	    this.tempEnableReticle = this.options.enableReticle;

	    this.mode = MODES.NORMAL;

	    this.panorama = null;
	    this.widget = null;

	    this.hoverObject = null;
	    this.infospot = null;
	    this.pressEntityObject = null;
	    this.pressObject = null;

	    this.raycaster = new THREE.Raycaster();
	    this.raycasterPoint = new THREE.Vector2();
	    this.userMouse = new THREE.Vector2();
	    this.updateCallbacks = [];
	    this.requestAnimationId = null;

	    this.cameraFrustum = new THREE.Frustum();
	    this.cameraViewProjectionMatrix = new THREE.Matrix4();

	    this.autoRotateRequestId = null;

	    this.outputDivElement = null;

	    this.touchSupported = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;

	    // Handler references
	    this.HANDLER_MOUSE_DOWN = this.onMouseDown.bind( this );
	    this.HANDLER_MOUSE_UP = this.onMouseUp.bind( this );
	    this.HANDLER_MOUSE_MOVE = this.onMouseMove.bind( this );
	    this.HANDLER_WINDOW_RESIZE = this.onWindowResize.bind( this );
	    this.HANDLER_KEY_DOWN = this.onKeyDown.bind( this );
	    this.HANDLER_KEY_UP = this.onKeyUp.bind( this );
	    this.HANDLER_TAP = this.onTap.bind( this, {
	        clientX: this.container.clientWidth / 2,
	        clientY: this.container.clientHeight / 2
	    } );

	    // Flag for infospot output
	    this.OUTPUT_INFOSPOT = false;

	    // Animations
	    this.tweenLeftAnimation = new Tween.Tween();
	    this.tweenUpAnimation = new Tween.Tween();

	    // Renderer
	    this.renderer.setPixelRatio( window.devicePixelRatio );
	    this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
	    this.renderer.setClearColor( 0x000000, 0 );
	    this.renderer.autoClear = false;

	    // Append Renderer Element to container
	    this.renderer.domElement.classList.add( 'panolens-canvas' );
	    this.renderer.domElement.style.display = 'block';
	    this.container.style.backgroundColor = '#000';
	    this.container.appendChild( this.renderer.domElement );

	    // Camera Controls
	    this.OrbitControls = new OrbitControls( this.camera, this.container );
	    this.OrbitControls.id = 'orbit';
	    this.OrbitControls.minDistance = 1;
	    this.OrbitControls.noPan = true;
	    this.OrbitControls.autoRotate = this.options.autoRotate;
	    this.OrbitControls.autoRotateSpeed = this.options.autoRotateSpeed;

	    this.DeviceOrientationControls = new DeviceOrientationControls( this.camera, this.container );
	    this.DeviceOrientationControls.id = 'device-orientation';
	    this.DeviceOrientationControls.enabled = false;
	    this.camera.position.z = 1;

	    // Register change event if passiveRenering
	    if ( this.options.passiveRendering ) {

	        console.warn( 'passiveRendering is now deprecated' );

	    }

	    // Controls
	    this.controls = [ this.OrbitControls, this.DeviceOrientationControls ];
	    this.control = this.OrbitControls;

	    // Cardboard effect
	    this.CardboardEffect = new CardboardEffect( this.renderer );
	    this.CardboardEffect.setSize( this.container.clientWidth, this.container.clientHeight );

	    // Stereo effect
	    this.StereoEffect = new StereoEffect( this.renderer );
	    this.StereoEffect.setSize( this.container.clientWidth, this.container.clientHeight );

	    this.effect = this.CardboardEffect;

	    // Add default hidden reticle
	    this.addReticle();

	    // Lock horizontal view
	    if ( this.options.horizontalView ) {
	        this.OrbitControls.minPolarAngle = Math.PI / 2;
	        this.OrbitControls.maxPolarAngle = Math.PI / 2;
	    }

	    // Add Control UI
	    if ( this.options.controlBar !== false ) {
	        this.addDefaultControlBar( this.options.controlButtons );
	    }

	    // Add View Indicator
	    if ( this.options.viewIndicator ) {
	        this.addViewIndicator();
	    }

	    // Reverse dragging direction
	    if ( this.options.reverseDragging ) {
	        this.reverseDraggingDirection();
	    }

	    // Register event if reticle is enabled, otherwise defaults to mouse
	    if ( this.options.enableReticle ) {
	        this.enableReticleControl();
	    } else {
	        this.registerMouseAndTouchEvents();
	    }

	    // Output infospot position to an overlay container if specified
	    if ( this.options.output === 'overlay' ) {
	        this.addOutputElement();
	    }

	    // Register dom event listeners
	    this.registerEventListeners();

	    // Animate
	    this.animate.call( this );

	}
	Viewer.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype ), {

	    constructor: Viewer,

	    /**
	     * Add an object to the scene
	     * Automatically hookup with panolens-viewer-handler listener
	     * to communicate with viewer method
	     * @param {THREE.Object3D} object - The object to be added
	     * @memberOf Viewer
	     * @instance
	     */
	    add: function ( object ) {

	        if ( arguments.length > 1 ) {

	            for ( let i = 0; i < arguments.length; i ++ ) {

	                this.add( arguments[ i ] );

	            }

	            return this;

	        }

	        this.scene.add( object );

	        // All object added to scene has 'panolens-viewer-handler' event to handle viewer communication
	        if ( object.addEventListener ) {

	            object.addEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );

	        }

	        // All object added to scene being passed with container
	        if ( object instanceof Panorama && object.dispatchEvent ) {

	            object.dispatchEvent( { type: 'panolens-container', container: this.container } );

	        }

	        if ( object instanceof CameraPanorama ) {

	            object.dispatchEvent( { type: 'panolens-scene', scene: this.scene } );

	        }

	        // Hookup default panorama event listeners
	        if ( object.type === 'panorama' ) {

	            this.addPanoramaEventListener( object );

	            if ( !this.panorama ) {

	                this.setPanorama( object );

	            }

	        }

	    },

	    /**
	     * Remove an object from the scene
	     * @param  {THREE.Object3D} object - Object to be removed
	     * @memberOf Viewer
	     * @instance
	     */
	    remove: function ( object ) {

	        if ( object.removeEventListener ) {

	            object.removeEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );

	        }

	        this.scene.remove( object );

	    },

	    /**
	     * Add default control bar
	     * @param {array} array - The control buttons array
	     * @memberOf Viewer
	     * @instance
	     */
	    addDefaultControlBar: function ( array ) {

	        if ( this.widget ) {

	            console.warn( 'Default control bar exists' );
	            return;

	        }

	        const widget = new Widget( this.container );
	        widget.addEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );
	        widget.addControlBar();
	        array.forEach( buttonName => {

	            widget.addControlButton( buttonName );

	        } );

	        this.widget = widget;

	    },

	    /**
	     * Set a panorama to be the current one
	     * @param {Panorama} pano - Panorama to be set
	     * @memberOf Viewer
	     * @instance
	     */
	    setPanorama: function ( pano ) {

	        const leavingPanorama = this.panorama;

	        if ( pano.type === 'panorama' && leavingPanorama !== pano ) {

	            // Clear exisiting infospot
	            this.hideInfospot();

	            const afterEnterComplete = function () {

	                if ( leavingPanorama ) { leavingPanorama.onLeave(); }
	                pano.removeEventListener( 'enter-fade-start', afterEnterComplete );

	            };

	            pano.addEventListener( 'enter-fade-start', afterEnterComplete );

	            // Assign and enter panorama
	            (this.panorama = pano).onEnter();
				
	        }

	    },

	    /**
	     * Event handler to execute commands from child objects
	     * @param {object} event - The dispatched event with method as function name and data as an argument
	     * @memberOf Viewer
	     * @instance
	     */
	    eventHandler: function ( event ) {

	        if ( event.method && this[ event.method ] ) {

	            this[ event.method ]( event.data );

	        }

	    },

	    /**
	     * Dispatch event to all descendants
	     * @param  {object} event - Event to be passed along
	     * @memberOf Viewer
	     * @instance
	     */
	    dispatchEventToChildren: function ( event ) {

	        this.scene.traverse( function ( object ) {

	            if ( object.dispatchEvent ) {

	                object.dispatchEvent( event );

	            }

	        });

	    },

	    /**
	     * Set widget content
	     * @method activateWidgetItem
	     * @param  {integer} controlIndex - Control index
	     * @param  {integer} mode - Modes for effects
	     * @memberOf Viewer
	     * @instance
	     */
	    activateWidgetItem: function ( controlIndex, mode ) {

	        const mainMenu = this.widget.mainMenu;
	        const ControlMenuItem = mainMenu.children[ 0 ];
	        const ModeMenuItem = mainMenu.children[ 1 ];

	        let item;

	        if ( controlIndex !== undefined ) {

	            switch ( controlIndex ) {

	            case 0:

	                item = ControlMenuItem.subMenu.children[ 1 ];

	                break;

	            case 1:

	                item = ControlMenuItem.subMenu.children[ 2 ];

	                break;
						
	            default:

	                item = ControlMenuItem.subMenu.children[ 1 ];

	                break;	

	            }

	            ControlMenuItem.subMenu.setActiveItem( item );
	            ControlMenuItem.setSelectionTitle( item.textContent );

	        }

	        if ( mode !== undefined ) {

	            switch( mode ) {

	            case MODES.CARDBOARD:

	                item = ModeMenuItem.subMenu.children[ 2 ];

	                break;

	            case MODES.STEREO:

	                item = ModeMenuItem.subMenu.children[ 3 ];
						
	                break;

	            default:

	                item = ModeMenuItem.subMenu.children[ 1 ];

	                break;
	            }

	            ModeMenuItem.subMenu.setActiveItem( item );
	            ModeMenuItem.setSelectionTitle( item.textContent );

	        }

	    },

	    /**
	     * Enable rendering effect
	     * @param  {MODES} mode - Modes for effects
	     * @memberOf Viewer
	     * @instance
	     */
	    enableEffect: function ( mode ) {

	        if ( this.mode === mode ) { return; }
	        if ( mode === MODES.NORMAL ) { this.disableEffect(); return; }
	        else { this.mode = mode; }

	        const fov = this.camera.fov;

	        switch( mode ) {

	        case MODES.CARDBOARD:

	            this.effect = this.CardboardEffect;
	            this.enableReticleControl();

	            break;

	        case MODES.STEREO:

	            this.effect = this.StereoEffect;
	            this.enableReticleControl();
					
	            break;

	        default:

	            this.effect = null;
	            this.disableReticleControl();

	            break;

	        }

	        this.activateWidgetItem( undefined, this.mode );

	        /**
	         * Dual eye effect event
	         * @type {object}
	         * @event Infospot#panolens-dual-eye-effect
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEventToChildren( { type: 'panolens-dual-eye-effect', mode: this.mode } );

	        // Force effect stereo camera to update by refreshing fov
	        this.camera.fov = fov + 10e-3;
	        this.effect.setSize( this.container.clientWidth, this.container.clientHeight );
	        this.render();
	        this.camera.fov = fov;

	        /**
	         * Dispatch mode change event
	         * @type {object}
	         * @event Viewer#mode-change
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEvent( { type: 'mode-change', mode: this.mode } );

	    },

	    /**
	     * Disable additional rendering effect
	     * @memberOf Viewer
	     * @instance
	     */
	    disableEffect: function () {

	        if ( this.mode === MODES.NORMAL ) { return; }

	        this.mode = MODES.NORMAL;
	        this.disableReticleControl();

	        this.activateWidgetItem( undefined, this.mode );

	        /**
	         * Dual eye effect event
	         * @type {object}
	         * @event Infospot#panolens-dual-eye-effect
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEventToChildren( { type: 'panolens-dual-eye-effect', mode: this.mode } );

	        this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
	        this.render();

	        /**
	         * Dispatch mode change event
	         * @type {object}
	         * @event Viewer#mode-change
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEvent( { type: 'mode-change', mode: this.mode } );
	    },

	    /**
	     * Enable reticle control
	     * @memberOf Viewer
	     * @instance
	     */
	    enableReticleControl: function () {

	        if ( this.reticle.visible ) { return; }

	        this.tempEnableReticle = true;

	        // Register reticle event and unregister mouse event
	        this.unregisterMouseAndTouchEvents();
	        this.reticle.show();
	        this.registerReticleEvent();
	        this.updateReticleEvent();

	    },

	    /**
	     * Disable reticle control
	     * @memberOf Viewer
	     * @instance
	     */
	    disableReticleControl: function () {

	        this.tempEnableReticle = false;

	        // Register mouse event and unregister reticle event
	        if ( !this.options.enableReticle ) {

	            this.reticle.hide();
	            this.unregisterReticleEvent();
	            this.registerMouseAndTouchEvents();

	        } else {

	            this.updateReticleEvent();

	        }

	    },

	    /**
	     * Enable auto rotation
	     * @memberOf Viewer
	     * @instance
	     */
	    enableAutoRate: function () {

	        this.options.autoRotate = true;
	        this.OrbitControls.autoRotate = true;

	    },

	    /**
	     * Disable auto rotation
	     * @memberOf Viewer
	     * @instance
	     */
	    disableAutoRate: function () {

	        clearTimeout( this.autoRotateRequestId );
	        this.options.autoRotate = false;
	        this.OrbitControls.autoRotate = false;

	    },

	    /**
	     * Toggle video play or stop
	     * @param {boolean} pause
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#video-toggle
	     */
	    toggleVideoPlay: function ( pause ) {

	        if ( this.panorama instanceof VideoPanorama ) {

	            /**
	             * Toggle video event
	             * @type {object}
	             * @event Viewer#video-toggle
	             */
	            this.panorama.dispatchEvent( { type: 'video-toggle', pause: pause } );

	        }

	    },

	    /**
	     * Set currentTime in a video
	     * @param {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#video-time
	     */
	    setVideoCurrentTime: function ( percentage ) {

	        if ( this.panorama instanceof VideoPanorama ) {

	            /**
	             * Setting video time event
	             * @type {object}
	             * @event Viewer#video-time
	             * @property {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	             */
	            this.panorama.dispatchEvent( { type: 'video-time', percentage: percentage } );

	        }

	    },

	    /**
	     * This will be called when video updates if an widget is present
	     * @param {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#video-update
	     */
	    onVideoUpdate: function ( percentage ) {

	        const { widget } = this;

	        /**
	         * Video update event
	         * @type {object}
	         * @event Viewer#video-update
	         * @property {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	         */
	        if( widget ) { widget.dispatchEvent( { type: 'video-update', percentage: percentage } ); }

	    },

	    /**
	     * Add update callback to be called every animation frame
	     * @param {function} callback
	     * @memberOf Viewer
	     * @instance
	     */
	    addUpdateCallback: function ( fn ) {

	        if ( fn ) {

	            this.updateCallbacks.push( fn );

	        }

	    },

	    /**
	     * Remove update callback
	     * @param  {function} fn - The function to be removed
	     * @memberOf Viewer
	     * @instance
	     */
	    removeUpdateCallback: function ( fn ) {

	        const index = this.updateCallbacks.indexOf( fn );

	        if ( fn && index >= 0 ) {

	            this.updateCallbacks.splice( index, 1 );

	        }

	    },

	    /**
	     * Show video widget
	     * @memberOf Viewer
	     * @instance
	     */
	    showVideoWidget: function () {

	        const { widget } = this;

	        /**
	         * Show video widget event
	         * @type {object}
	         * @event Viewer#video-control-show
	         */
	        if( widget ) { widget.dispatchEvent( { type: 'video-control-show' } ); }

	    },

	    /**
	     * Hide video widget
	     * @memberOf Viewer
	     * @instance
	     */
	    hideVideoWidget: function () {

	        const { widget } = this;

	        /**
	         * Hide video widget
	         * @type {object}
	         * @event Viewer#video-control-hide
	         */
	        if( widget ) { widget.dispatchEvent( { type: 'video-control-hide' } ); }

	    },

	    /**
	     * Update video play button
	     * @param {boolean} paused 
	     * @memberOf Viewer
	     * @instance
	     */
	    updateVideoPlayButton: function ( paused ) {

	        const { widget } = this;

	        if ( widget && widget.videoElement && widget.videoElement.controlButton ) {

	            widget.videoElement.controlButton.update( paused );

	        }

	    },

	    /**
	     * Add default panorama event listeners
	     * @param {Panorama} pano - The panorama to be added with event listener
	     * @memberOf Viewer
	     * @instance
	     */
	    addPanoramaEventListener: function ( pano ) {

	        // Set camera control on every panorama
	        pano.addEventListener( 'enter-fade-start', this.setCameraControl.bind( this ) );

	        // Show and hide widget event only when it's VideoPanorama
	        if ( pano instanceof VideoPanorama ) {

	            pano.addEventListener( 'enter-fade-start', this.showVideoWidget.bind( this ) );
	            pano.addEventListener( 'leave', function () {

	                if ( !(this.panorama instanceof VideoPanorama) ) {

	                    this.hideVideoWidget.call( this );

	                }
					
	            }.bind( this ) );

	        }

	    },

	    /**
	     * Set camera control
	     * @memberOf Viewer
	     * @instance
	     */
	    setCameraControl: function () {

	        this.OrbitControls.target.copy( this.panorama.position );

	    },

	    /**
	     * Get current camera control
	     * @return {object} - Current navigation control
	     * @memberOf Viewer
	     * @instance
	     * @returns {THREE.OrbitControls|THREE.DeviceOrientationControls}
	     */
	    getControl: function () {

	        return this.control;

	    },

	    /**
	     * Get scene
	     * @memberOf Viewer
	     * @instance
	     * @return {THREE.Scene} - Current scene which the viewer is built on
	     */
	    getScene: function () {

	        return this.scene;

	    },

	    /**
	     * Get camera
	     * @memberOf Viewer
	     * @instance
	     * @return {THREE.Camera} - The scene camera
	     */
	    getCamera: function () {

	        return this.camera;

	    },

	    /**
	     * Get renderer
	     * @memberOf Viewer
	     * @instance
	     * @return {THREE.WebGLRenderer} - The renderer using webgl
	     */
	    getRenderer: function () {

	        return this.renderer;

	    },

	    /**
	     * Get container
	     * @memberOf Viewer
	     * @instance
	     * @return {HTMLElement} - The container holds rendererd canvas
	     */
	    getContainer: function () {

	        return this.container;

	    },

	    /**
	     * Get control id
	     * @memberOf Viewer
	     * @instance
	     * @return {string} - Control id. 'orbit' or 'device-orientation'
	     */
	    getControlId: function () {

	        return this.control.id;

	    },

	    /**
	     * Get next navigation control id
	     * @memberOf Viewer
	     * @instance
	     * @return {string} - Next control id
	     */
	    getNextControlId: function () {

	        return this.controls[ this.getNextControlIndex() ].id;

	    },

	    /**
	     * Get next navigation control index
	     * @memberOf Viewer
	     * @instance
	     * @return {number} - Next control index
	     */
	    getNextControlIndex: function () {

	        const controls = this.controls;
	        const control = this.control;
	        const nextIndex = controls.indexOf( control ) + 1;

	        return ( nextIndex >= controls.length ) ? 0 : nextIndex;

	    },

	    /**
	     * Set field of view of camera
	     * @param {number} fov
	     * @memberOf Viewer
	     * @instance
	     */
	    setCameraFov: function ( fov ) {

	        this.camera.fov = fov;
	        this.camera.updateProjectionMatrix();

	    },

	    /**
	     * Enable control by index
	     * @param  {CONTROLS} index - Index of camera control
	     * @memberOf Viewer
	     * @instance
	     */
	    enableControl: function ( index ) {

	        index = ( index >= 0 && index < this.controls.length ) ? index : 0;

	        this.control.enabled = false;

	        this.control = this.controls[ index ];

	        this.control.enabled = true;

	        switch ( index ) {

	        case CONTROLS.ORBIT:

	            this.camera.position.copy( this.panorama.position );
	            this.camera.position.z += 1;

	            break;

	        case CONTROLS.DEVICEORIENTATION:

	            this.camera.position.copy( this.panorama.position );

	            break;

	        default:

	            break;
	        }

	        this.control.update();

	        this.activateWidgetItem( index, undefined );

	    },

	    /**
	     * Disable current control
	     * @memberOf Viewer
	     * @instance
	     */
	    disableControl: function () {

	        this.control.enabled = false;

	    },

	    /**
	     * Toggle next control
	     * @memberOf Viewer
	     * @instance
	     */
	    toggleNextControl: function () {

	        this.enableControl( this.getNextControlIndex() );

	    },

	    /**
	     * Screen Space Projection
	     * @memberOf Viewer
	     * @instance
	     */
	    getScreenVector: function ( worldVector ) {

	        const vector = worldVector.clone();
	        const widthHalf = ( this.container.clientWidth ) / 2;
	        const heightHalf = this.container.clientHeight / 2;

	        vector.project( this.camera );

	        vector.x = ( vector.x * widthHalf ) + widthHalf;
	        vector.y = - ( vector.y * heightHalf ) + heightHalf;
	        vector.z = 0;

	        return vector;

	    },

	    /**
	     * Check Sprite in Viewport
	     * @memberOf Viewer
	     * @instance
	     */
	    checkSpriteInViewport: function ( sprite ) {

	        this.camera.matrixWorldInverse.getInverse( this.camera.matrixWorld );
	        this.cameraViewProjectionMatrix.multiplyMatrices( this.camera.projectionMatrix, this.camera.matrixWorldInverse );
	        this.cameraFrustum.setFromMatrix( this.cameraViewProjectionMatrix );

	        return sprite.visible && this.cameraFrustum.intersectsSprite( sprite );

	    },

	    /**
	     * Reverse dragging direction
	     * @memberOf Viewer
	     * @instance
	     */
	    reverseDraggingDirection: function () {

	        this.OrbitControls.rotateSpeed *= -1;
	        this.OrbitControls.momentumScalingFactor *= -1;

	    },

	    /**
	     * Add reticle 
	     * @memberOf Viewer
	     * @instance
	     */
	    addReticle: function () {

	        this.reticle = new Reticle( 0xffffff, true, this.options.dwellTime );
	        this.reticle.hide();
	        this.camera.add( this.reticle );
	        this.sceneReticle.add( this.camera );

	    },

	    /**
	     * Tween control looking center
	     * @param {THREE.Vector3} vector - Vector to be looked at the center
	     * @param {number} [duration=1000] - Duration to tween
	     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
	     * @memberOf Viewer
	     * @instance
	     */
	    tweenControlCenter: function ( vector, duration, easing ) {

	        if ( this.control !== this.OrbitControls ) {

	            return;

	        }

	        // Pass in arguments as array
	        if ( vector instanceof Array ) {

	            duration = vector[ 1 ];
	            easing = vector[ 2 ];
	            vector = vector[ 0 ];

	        }

	        duration = duration !== undefined ? duration : 1000;
	        easing = easing || Tween.Easing.Exponential.Out;

	        let scope, ha, va, chv, cvv, hv, vv, vptc, ov, nv;

	        scope = this;

	        chv = this.camera.getWorldDirection( new THREE.Vector3() );
	        cvv = chv.clone();

	        vptc = this.panorama.getWorldPosition( new THREE.Vector3() ).sub( this.camera.getWorldPosition( new THREE.Vector3() ) );

	        hv = vector.clone();
	        // Scale effect
	        hv.x *= -1;
	        hv.add( vptc ).normalize();
	        vv = hv.clone();

	        chv.y = 0;
	        hv.y = 0;

	        ha = Math.atan2( hv.z, hv.x ) - Math.atan2( chv.z, chv.x );
	        ha = ha > Math.PI ? ha - 2 * Math.PI : ha;
	        ha = ha < -Math.PI ? ha + 2 * Math.PI : ha;
	        va = Math.abs( cvv.angleTo( chv ) + ( cvv.y * vv.y <= 0 ? vv.angleTo( hv ) : -vv.angleTo( hv ) ) );
	        va *= vv.y < cvv.y ? 1 : -1;

	        ov = { left: 0, up: 0 };
	        nv = { left: 0, up: 0 };

	        this.tweenLeftAnimation.stop();
	        this.tweenUpAnimation.stop();

	        this.tweenLeftAnimation = new Tween.Tween( ov )
	            .to( { left: ha }, duration )
	            .easing( easing )
	            .onUpdate(function(ov){
	                scope.control.rotateLeft( ov.left - nv.left );
	                nv.left = ov.left;
	            })
	            .start();

	        this.tweenUpAnimation = new Tween.Tween( ov )
	            .to( { up: va }, duration )
	            .easing( easing )
	            .onUpdate(function(ov){
	                scope.control.rotateUp( ov.up - nv.up );
	                nv.up = ov.up;
	            })
	            .start();

	    },

	    /**
	     * Tween control looking center by object
	     * @param {THREE.Object3D} object - Object to be looked at the center
	     * @param {number} [duration=1000] - Duration to tween
	     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
	     * @memberOf Viewer
	     * @instance
	     */
	    tweenControlCenterByObject: function ( object, duration, easing ) {

	        let isUnderScalePlaceHolder = false;

	        object.traverseAncestors( function ( ancestor ) {

	            if ( ancestor.scalePlaceHolder ) {

	                isUnderScalePlaceHolder = true;

	            }
	        } );

	        if ( isUnderScalePlaceHolder ) {

	            const invertXVector = new THREE.Vector3( -1, 1, 1 );

	            this.tweenControlCenter( object.getWorldPosition( new THREE.Vector3() ).multiply( invertXVector ), duration, easing );

	        } else {

	            this.tweenControlCenter( object.getWorldPosition( new THREE.Vector3() ), duration, easing );

	        }

	    },

	    /**
	     * This is called when window size is changed
	     * @fires Viewer#window-resize
	     * @param {number} [windowWidth] - Specify if custom element has changed width
	     * @param {number} [windowHeight] - Specify if custom element has changed height
	     * @memberOf Viewer
	     * @instance
	     */
	    onWindowResize: function ( windowWidth, windowHeight ) {

	        let width, height;

	        const expand = this.container.classList.contains( 'panolens-container' ) || this.container.isFullscreen;

	        if ( windowWidth !== undefined && windowHeight !== undefined ) {

	            width = windowWidth;
	            height = windowHeight;
	            this.container._width = windowWidth;
	            this.container._height = windowHeight;

	        } else {

	            const isAndroid = /(android)/i.test(window.navigator.userAgent);

	            const adjustWidth = isAndroid 
	                ? Math.min(document.documentElement.clientWidth, window.innerWidth || 0) 
	                : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	            const adjustHeight = isAndroid 
	                ? Math.min(document.documentElement.clientHeight, window.innerHeight || 0) 
	                : Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	            width = expand ? adjustWidth : this.container.clientWidth;
	            height = expand ? adjustHeight : this.container.clientHeight;

	            this.container._width = width;
	            this.container._height = height;

	        }

	        this.camera.aspect = width / height;
	        this.camera.updateProjectionMatrix();

	        this.renderer.setSize( width, height );

	        // Update reticle
	        if ( this.options.enableReticle || this.tempEnableReticle ) {

	            this.updateReticleEvent();

	        }

	        /**
	         * Window resizing event
	         * @type {object}
	         * @event Viewer#window-resize
	         * @property {number} width  - Width of the window
	         * @property {number} height - Height of the window
	         */
	        this.dispatchEvent( { type: 'window-resize', width: width, height: height });
	        this.scene.traverse( function ( object ) {

	            if ( object.dispatchEvent ) {

	                object.dispatchEvent( { type: 'window-resize', width: width, height: height });

	            }

	        } );

	    },

	    /**
	     * Add output element
	     * @memberOf Viewer
	     * @instance
	     */
	    addOutputElement: function () {

	        const element = document.createElement( 'div' );
	        element.style.position = 'absolute';
	        element.style.right = '10px';
	        element.style.top = '10px';
	        element.style.color = '#fff';
	        this.container.appendChild( element );
	        this.outputDivElement = element;

	    },

	    /**
	     * Output position in developer console by holding down Ctrl button
	     * @memberOf Viewer
	     * @instance
	     */
	    outputPosition: function () {

	        const intersects = this.raycaster.intersectObject( this.panorama, true );

	        if ( intersects.length > 0 ) {

	            const point = intersects[ 0 ].point.clone();
	            const converter = new THREE.Vector3( -1, 1, 1 );
	            const world = this.panorama.getWorldPosition( new THREE.Vector3() );
	            point.sub( world ).multiply( converter );

	            const position = {
	                x: point.x.toFixed(2),
	                y: point.y.toFixed(2),
	                z: point.z.toFixed(2),
	            };

	            const message = `${position.x}, ${position.y}, ${position.z}`;

	            if ( point.length() === 0 ) { return; }

	            switch ( this.options.output ) {

	            case 'event':
	                /**
	                 * Dispatch raycast position as event
	                 * @type {object}
	                 * @event Viewer#position-output
	                 */
	                this.dispatchEvent( { type: 'position-output', position: position } );
	                break;

	            case 'console':
	                console.info( message );
	                break;

	            case 'overlay':
	                this.outputDivElement.textContent = message;
	                break;

	            default:
	                break;

	            }

	        }

	    },

	    /**
	     * On mouse down
	     * @param {MouseEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onMouseDown: function ( event ) {

	        event.preventDefault();

	        this.userMouse.x = ( event.clientX >= 0 ) ? event.clientX : event.touches[0].clientX;
	        this.userMouse.y = ( event.clientY >= 0 ) ? event.clientY : event.touches[0].clientY;
	        this.userMouse.type = 'mousedown';
	        this.onTap( event );

	    },

	    /**
	     * On mouse move
	     * @param {MouseEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onMouseMove: function ( event ) {

	        event.preventDefault();
	        this.userMouse.type = 'mousemove';
	        this.onTap( event );

	    },

	    /**
	     * On mouse up
	     * @param {MouseEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onMouseUp: function ( event ) {

	        let onTarget = false;

	        this.userMouse.type = 'mouseup';

	        const type = ( this.userMouse.x >= event.clientX - this.options.clickTolerance 
					&& this.userMouse.x <= event.clientX + this.options.clickTolerance
					&& this.userMouse.y >= event.clientY - this.options.clickTolerance
					&& this.userMouse.y <= event.clientY + this.options.clickTolerance ) 
					||  ( event.changedTouches 
					&& this.userMouse.x >= event.changedTouches[0].clientX - this.options.clickTolerance
					&& this.userMouse.x <= event.changedTouches[0].clientX + this.options.clickTolerance 
					&& this.userMouse.y >= event.changedTouches[0].clientY - this.options.clickTolerance
					&& this.userMouse.y <= event.changedTouches[0].clientY + this.options.clickTolerance ) 
	            ? 'click' : undefined;

	        // Event should happen on canvas
	        if ( event && event.target && !event.target.classList.contains( 'panolens-canvas' ) ) { return; }

	        event.preventDefault();

	        if ( event.changedTouches && event.changedTouches.length === 1 ) {

	            onTarget = this.onTap( { clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY }, type );
			
	        } else {

	            onTarget = this.onTap( event, type );

	        }

	        this.userMouse.type = 'none';

	        if ( onTarget ) { 

	            return; 

	        }

	        if ( type === 'click' ) {

	            const { options: { autoHideInfospot, autoHideControlBar }, panorama, toggleControlBar } = this;

	            if ( autoHideInfospot && panorama ) {

	                panorama.toggleInfospotVisibility();

	            }

	            if ( autoHideControlBar ) {

	                toggleControlBar();

	            }

	        }

	    },

	    /**
	     * On tap eveny frame
	     * @param {MouseEvent} event 
	     * @param {string} type 
	     * @memberOf Viewer
	     * @instance
	     */
	    onTap: function ( event, type ) {

	        const { left, top } = this.container.getBoundingClientRect();
	        const { clientWidth, clientHeight } = this.container;

	        this.raycasterPoint.x = ( ( event.clientX - left ) / clientWidth ) * 2 - 1;
	        this.raycasterPoint.y = - ( ( event.clientY - top ) / clientHeight ) * 2 + 1;

	        this.raycaster.setFromCamera( this.raycasterPoint, this.camera );

	        // Return if no panorama 
	        if ( !this.panorama ) { 

	            return; 

	        }

	        // output infospot information
	        if ( event.type !== 'mousedown' && this.touchSupported || this.OUTPUT_INFOSPOT ) { 

	            this.outputPosition(); 

	        }


	        const intersects = this.raycaster.intersectObjects( this.panorama.children, true );
	        const intersect_entity = this.getConvertedIntersect( intersects );
	        const intersect = ( intersects.length > 0 ) ? intersects[0].object : undefined;

	        if ( this.userMouse.type === 'mouseup'  ) {

	            if ( intersect_entity && this.pressEntityObject === intersect_entity && this.pressEntityObject.dispatchEvent ) {

	                this.pressEntityObject.dispatchEvent( { type: 'pressstop-entity', mouseEvent: event } );

	            }

	            this.pressEntityObject = undefined;

	        }

	        if ( this.userMouse.type === 'mouseup'  ) {

	            if ( intersect && this.pressObject === intersect && this.pressObject.dispatchEvent ) {

	                this.pressObject.dispatchEvent( { type: 'pressstop', mouseEvent: event } );

	            }

	            this.pressObject = undefined;

	        }

	        if ( type === 'click' ) {

	            this.panorama.dispatchEvent( { type: 'click', intersects: intersects, mouseEvent: event } );

	            if ( intersect_entity && intersect_entity.dispatchEvent ) {

	                intersect_entity.dispatchEvent( { type: 'click-entity', mouseEvent: event } );

	            }

	            if ( intersect && intersect.dispatchEvent ) {

	                intersect.dispatchEvent( { type: 'click', mouseEvent: event } );

	            }

	        } else {

	            this.panorama.dispatchEvent( { type: 'hover', intersects: intersects, mouseEvent: event } );

	            if ( ( this.hoverObject && intersects.length > 0 && this.hoverObject !== intersect_entity )
					|| ( this.hoverObject && intersects.length === 0 ) ){

	                if ( this.hoverObject.dispatchEvent ) {

	                    this.hoverObject.dispatchEvent( { type: 'hoverleave', mouseEvent: event } );

	                    this.reticle.end();

	                }

	                this.hoverObject = undefined;

	            }

	            if ( intersect_entity && intersects.length > 0 ) {

	                if ( this.hoverObject !== intersect_entity ) {

	                    this.hoverObject = intersect_entity;

	                    if ( this.hoverObject.dispatchEvent ) {

	                        this.hoverObject.dispatchEvent( { type: 'hoverenter', mouseEvent: event } );

	                        // Start reticle timer
	                        if ( this.options.autoReticleSelect && this.options.enableReticle || this.tempEnableReticle ) {
	                            this.reticle.start( this.onTap.bind( this, event, 'click' ) );
	                        }

	                    }

	                }

	                if ( this.userMouse.type === 'mousedown' && this.pressEntityObject != intersect_entity ) {

	                    this.pressEntityObject = intersect_entity;

	                    if ( this.pressEntityObject.dispatchEvent ) {

	                        this.pressEntityObject.dispatchEvent( { type: 'pressstart-entity', mouseEvent: event } );

	                    }

	                }

	                if ( this.userMouse.type === 'mousedown' && this.pressObject != intersect ) {

	                    this.pressObject = intersect;

	                    if ( this.pressObject.dispatchEvent ) {

	                        this.pressObject.dispatchEvent( { type: 'pressstart', mouseEvent: event } );

	                    }

	                }

	                if ( this.userMouse.type === 'mousemove' || this.options.enableReticle ) {

	                    if ( intersect && intersect.dispatchEvent ) {

	                        intersect.dispatchEvent( { type: 'hover', mouseEvent: event } );

	                    }

	                    if ( this.pressEntityObject && this.pressEntityObject.dispatchEvent ) {

	                        this.pressEntityObject.dispatchEvent( { type: 'pressmove-entity', mouseEvent: event } );

	                    }

	                    if ( this.pressObject && this.pressObject.dispatchEvent ) {

	                        this.pressObject.dispatchEvent( { type: 'pressmove', mouseEvent: event } );

	                    }

	                }

	            }

	            if ( !intersect_entity && this.pressEntityObject && this.pressEntityObject.dispatchEvent ) {

	                this.pressEntityObject.dispatchEvent( { type: 'pressstop-entity', mouseEvent: event } );

	                this.pressEntityObject = undefined;

	            }

	            if ( !intersect && this.pressObject && this.pressObject.dispatchEvent ) {

	                this.pressObject.dispatchEvent( { type: 'pressstop', mouseEvent: event } );

	                this.pressObject = undefined;

	            }

	        }

	        // Infospot handler
	        if ( intersect && intersect instanceof Infospot ) {

	            this.infospot = intersect;
				
	            if ( type === 'click' ) {

	                return true;

	            }
				

	        } else if ( this.infospot ) {

	            this.hideInfospot();

	        }

	        // Auto rotate
	        if ( this.options.autoRotate && this.userMouse.type !== 'mousemove' ) {

	            // Auto-rotate idle timer
	            clearTimeout( this.autoRotateRequestId );

	            if ( this.control === this.OrbitControls ) {

	                this.OrbitControls.autoRotate = false;
	                this.autoRotateRequestId = window.setTimeout( this.enableAutoRate.bind( this ), this.options.autoRotateActivationDuration );

	            }

	        }		

	    },

	    /**
	     * Get converted intersect
	     * @param {array} intersects 
	     * @memberOf Viewer
	     * @instance
	     */
	    getConvertedIntersect: function ( intersects ) {

	        let intersect;

	        for ( let i = 0; i < intersects.length; i++ ) {

	            if ( intersects[i].distance >= 0 && intersects[i].object && !intersects[i].object.passThrough ) {

	                if ( intersects[i].object.entity && intersects[i].object.entity.passThrough ) {
	                    continue;
	                } else if ( intersects[i].object.entity && !intersects[i].object.entity.passThrough ) {
	                    intersect = intersects[i].object.entity;
	                    break;
	                } else {
	                    intersect = intersects[i].object;
	                    break;
	                }

	            }

	        }

	        return intersect;

	    },

	    /**
	     * Hide infospot
	     * @memberOf Viewer
	     * @instance
	     */
	    hideInfospot: function () {

	        if ( this.infospot ) {

	            this.infospot.onHoverEnd();

	            this.infospot = undefined;

	        }

	    },

	    /**
	     * Toggle control bar
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#control-bar-toggle
	     */
	    toggleControlBar: function () {

	        const { widget } = this;

	        /**
	         * Toggle control bar event
	         * @type {object}
	         * @event Viewer#control-bar-toggle
	         */
	        if ( widget ) {

	            widget.dispatchEvent( { type: 'control-bar-toggle' } );

	        }

	    },

	    /**
	     * On key down
	     * @param {KeyboardEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onKeyDown: function ( event ) {

	        if ( this.options.output && this.options.output !== 'none' && event.key === 'Control' ) {

	            this.OUTPUT_INFOSPOT = true;

	        }

	    },

	    /**
	     * On key up
	     * @param {KeyboardEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onKeyUp: function () {

	        this.OUTPUT_INFOSPOT = false;

	    },

	    /**
	     * Update control and callbacks
	     * @memberOf Viewer
	     * @instance
	     */
	    update: function () {

	        Tween.update();

	        this.updateCallbacks.forEach( function( callback ){ callback(); } );

	        this.control.update();

	        this.scene.traverse( function( child ){
	            if ( child instanceof Infospot 
					&& child.element 
					&& ( this.hoverObject === child 
						|| child.element.style.display !== 'none' 
						|| (child.element.left && child.element.left.style.display !== 'none')
						|| (child.element.right && child.element.right.style.display !== 'none') ) ) {
	                if ( this.checkSpriteInViewport( child ) ) {
	                    const { x, y } = this.getScreenVector( child.getWorldPosition( new THREE.Vector3() ) );
	                    child.translateElement( x, y );
	                } else {
	                    child.onDismiss();
	                }
					
	            }
	        }.bind( this ) );

	    },

	    /**
	     * Rendering function to be called on every animation frame
	     * Render reticle last
	     * @memberOf Viewer
	     * @instance
	     */
	    render: function () {

	        if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

	            this.renderer.clear();
	            this.effect.render( this.scene, this.camera );
	            this.effect.render( this.sceneReticle, this.camera );
				

	        } else {

	            this.renderer.clear();
	            this.renderer.render( this.scene, this.camera );
	            this.renderer.clearDepth();
	            this.renderer.render( this.sceneReticle, this.camera );

	        }

	    },

	    /**
	     * Animate
	     * @memberOf Viewer
	     * @instance
	     */
	    animate: function () {

	        this.requestAnimationId = window.requestAnimationFrame( this.animate.bind( this ) );

	        this.onChange();

	    },

	    /**
	     * On change
	     * @memberOf Viewer
	     * @instance
	     */
	    onChange: function () {

	        this.update();
	        this.render();

	    },

	    /**
	     * Register mouse and touch event on container
	     * @memberOf Viewer
	     * @instance
	     */
	    registerMouseAndTouchEvents: function () {

	        const options = { passive: false };

	        this.container.addEventListener( 'mousedown' , 	this.HANDLER_MOUSE_DOWN, options );
	        this.container.addEventListener( 'mousemove' , 	this.HANDLER_MOUSE_MOVE, options );
	        this.container.addEventListener( 'mouseup'	 , 	this.HANDLER_MOUSE_UP  , options );
	        this.container.addEventListener( 'touchstart', 	this.HANDLER_MOUSE_DOWN, options );
	        this.container.addEventListener( 'touchend'  , 	this.HANDLER_MOUSE_UP  , options );

	    },

	    /**
	     * Unregister mouse and touch event on container
	     * @memberOf Viewer
	     * @instance
	     */
	    unregisterMouseAndTouchEvents: function () {

	        this.container.removeEventListener( 'mousedown' ,  this.HANDLER_MOUSE_DOWN, false );
	        this.container.removeEventListener( 'mousemove' ,  this.HANDLER_MOUSE_MOVE, false );
	        this.container.removeEventListener( 'mouseup'	,  this.HANDLER_MOUSE_UP  , false );
	        this.container.removeEventListener( 'touchstart',  this.HANDLER_MOUSE_DOWN, false );
	        this.container.removeEventListener( 'touchend'  ,  this.HANDLER_MOUSE_UP  , false );

	    },

	    /**
	     * Register reticle event
	     * @memberOf Viewer
	     * @instance
	     */
	    registerReticleEvent: function () {

	        this.addUpdateCallback( this.HANDLER_TAP );

	    },

	    /**
	     * Unregister reticle event
	     * @memberOf Viewer
	     * @instance
	     */
	    unregisterReticleEvent: function () {

	        this.removeUpdateCallback( this.HANDLER_TAP );

	    },

	    /**
	     * Update reticle event
	     * @memberOf Viewer
	     * @instance
	     */
	    updateReticleEvent: function () {

	        const clientX = this.container.clientWidth / 2 + this.container.offsetLeft;
	        const clientY = this.container.clientHeight / 2;

	        this.removeUpdateCallback( this.HANDLER_TAP );
	        this.HANDLER_TAP = this.onTap.bind( this, { clientX, clientY } );
	        this.addUpdateCallback( this.HANDLER_TAP );

	    },

	    /**
	     * Register container and window listeners
	     * @memberOf Viewer
	     * @instance
	     */
	    registerEventListeners: function () {

	        // Resize Event
	        window.addEventListener( 'resize' , this.HANDLER_WINDOW_RESIZE, true );

	        // Keyboard Event
	        window.addEventListener( 'keydown', this.HANDLER_KEY_DOWN, true );
	        window.addEventListener( 'keyup'  , this.HANDLER_KEY_UP	 , true );

	    },

	    /**
	     * Unregister container and window listeners
	     * @memberOf Viewer
	     * @instance
	     */
	    unregisterEventListeners: function () {

	        // Resize Event
	        window.removeEventListener( 'resize' , this.HANDLER_WINDOW_RESIZE, true );

	        // Keyboard Event
	        window.removeEventListener( 'keydown', this.HANDLER_KEY_DOWN, true );
	        window.removeEventListener( 'keyup'  , this.HANDLER_KEY_UP  , true );

	    },

	    /**
	     * Dispose all scene objects and clear cache
	     * @memberOf Viewer
	     * @instance
	     */
	    dispose: function () {

	        this.tweenLeftAnimation.stop();
	        this.tweenUpAnimation.stop();

	        // Unregister dom event listeners
	        this.unregisterEventListeners();

	        // recursive disposal on 3d objects
	        function recursiveDispose ( object ) {

	            for ( let i = object.children.length - 1; i >= 0; i-- ) {

	                recursiveDispose( object.children[i] );
	                object.remove( object.children[i] );

	            }

	            if ( object instanceof Panorama || object instanceof Infospot ) {

	                object.dispose();
	                object = null;

	            } else if ( object.dispatchEvent ){

	                object.dispatchEvent( 'dispose' );

	            }

	        }

	        recursiveDispose( this.scene );

	        // dispose widget
	        if ( this.widget ) {

	            this.widget.dispose();
	            this.widget = null;

	        }

	        // clear cache
	        if ( THREE.Cache && THREE.Cache.enabled ) {

	            THREE.Cache.clear();

	        }

	    },

	    /**
	     * Destroy viewer by disposing and stopping requestAnimationFrame
	     * @memberOf Viewer
	     * @instance
	     */
	    destroy: function () {

	        this.dispose();
	        this.render();
	        window.cancelAnimationFrame( this.requestAnimationId );		

	    },

	    /**
	     * On panorama dispose
	     * @memberOf Viewer
	     * @instance
	     */
	    onPanoramaDispose: function ( panorama ) {

	        if ( panorama instanceof VideoPanorama ) {

	            this.hideVideoWidget();

	        }

	        if ( panorama === this.panorama ) {

	            this.panorama = null;

	        }

	    },

	    /**
	     * Load ajax call
	     * @param {string} url - URL to be requested
	     * @param {function} [callback] - Callback after request completes
	     * @memberOf Viewer
	     * @instance
	     */
	    loadAsyncRequest: function ( url, callback = () => {} ) {

	        const request = new window.XMLHttpRequest();
	        request.onloadend = function ( event ) {
	            callback( event );
	        };
	        request.open( 'GET', url, true );
	        request.send( null );

	    },

	    /**
	     * View indicator in upper left
	     * @memberOf Viewer
	     * @instance
	     */
	    addViewIndicator: function () {

	        const scope = this;

	        function loadViewIndicator ( asyncEvent ) {

	            if ( asyncEvent.loaded === 0 ) return;

	            const viewIndicatorDiv = asyncEvent.target.responseXML.documentElement;
	            viewIndicatorDiv.style.width = scope.viewIndicatorSize + 'px';
	            viewIndicatorDiv.style.height = scope.viewIndicatorSize + 'px';
	            viewIndicatorDiv.style.position = 'absolute';
	            viewIndicatorDiv.style.top = '10px';
	            viewIndicatorDiv.style.left = '10px';
	            viewIndicatorDiv.style.opacity = '0.5';
	            viewIndicatorDiv.style.cursor = 'pointer';
	            viewIndicatorDiv.id = 'panolens-view-indicator-container';

	            scope.container.appendChild( viewIndicatorDiv );

	            const indicator = viewIndicatorDiv.querySelector( '#indicator' );
	            const setIndicatorD = function () {

	                scope.radius = scope.viewIndicatorSize * 0.225;
	                scope.currentPanoAngle = scope.camera.rotation.y - THREE.Math.degToRad( 90 );
	                scope.fovAngle = THREE.Math.degToRad( scope.camera.fov ) ;
	                scope.leftAngle = -scope.currentPanoAngle - scope.fovAngle / 2;
	                scope.rightAngle = -scope.currentPanoAngle + scope.fovAngle / 2;
	                scope.leftX = scope.radius * Math.cos( scope.leftAngle );
	                scope.leftY = scope.radius * Math.sin( scope.leftAngle );
	                scope.rightX = scope.radius * Math.cos( scope.rightAngle );
	                scope.rightY = scope.radius * Math.sin( scope.rightAngle );
	                scope.indicatorD = 'M ' + scope.leftX + ' ' + scope.leftY + ' A ' + scope.radius + ' ' + scope.radius + ' 0 0 1 ' + scope.rightX + ' ' + scope.rightY;

	                if ( scope.leftX && scope.leftY && scope.rightX && scope.rightY && scope.radius ) {

	                    indicator.setAttribute( 'd', scope.indicatorD );

	                }

	            };

	            scope.addUpdateCallback( setIndicatorD );

	            const indicatorOnMouseEnter = function () {

	                this.style.opacity = '1';

	            };

	            const indicatorOnMouseLeave = function () {

	                this.style.opacity = '0.5';

	            };

	            viewIndicatorDiv.addEventListener( 'mouseenter', indicatorOnMouseEnter );
	            viewIndicatorDiv.addEventListener( 'mouseleave', indicatorOnMouseLeave );
	        }

	        this.loadAsyncRequest( DataImage.ViewIndicator, loadViewIndicator );

	    },

	    /**
	     * Append custom control item to existing control bar
	     * @param {object} [option={}] - Style object to overwirte default element style. It takes 'style', 'onTap' and 'group' properties.
	     * @memberOf Viewer
	     * @instance
	     */
	    appendControlItem: function ( option ) {

	        const item = this.widget.createCustomItem( option );		

	        if ( option.group === 'video' ) {

	            this.widget.videoElement.appendChild( item );

	        } else {

	            this.widget.barElement.appendChild( item );

	        }

	        return item;

	    },

	    /**
	     * Clear all cached files
	     * @memberOf Viewer
	     * @instance
	     */
	    clearAllCache: function () {

	        THREE.Cache.clear();

	    }

	} );

	if ( THREE.REVISION != THREE_REVISION ) {

	    console.warn( `three.js version is not matched. Please consider use the target revision ${THREE_REVISION}` );

	}

	/**
	 * Panolens.js
	 * @author pchen66
	 * @namespace PANOLENS
	 */
	window.TWEEN = Tween;

	exports.BasicPanorama = BasicPanorama;
	exports.CONTROLS = CONTROLS;
	exports.CONTROL_BUTTONS = CONTROL_BUTTONS;
	exports.CameraPanorama = CameraPanorama;
	exports.CubePanorama = CubePanorama;
	exports.CubeTextureLoader = CubeTextureLoader;
	exports.DataImage = DataImage;
	exports.EmptyPanorama = EmptyPanorama;
	exports.GoogleStreetviewPanorama = GoogleStreetviewPanorama;
	exports.ImageLittlePlanet = ImageLittlePlanet;
	exports.ImageLoader = ImageLoader;
	exports.ImagePanorama = ImagePanorama;
	exports.Infospot = Infospot;
	exports.LittlePlanet = LittlePlanet;
	exports.MODES = MODES;
	exports.Media = Media;
	exports.OUTPUTS = OUTPUTS;
	exports.Panorama = Panorama;
	exports.REVISION = REVISION;
	exports.Reticle = Reticle;
	exports.THREE_REVISION = THREE_REVISION;
	exports.THREE_VERSION = THREE_VERSION;
	exports.TextureLoader = TextureLoader;
	exports.VERSION = VERSION;
	exports.VideoPanorama = VideoPanorama;
	exports.Viewer = Viewer;
	exports.Widget = Widget;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFub2xlbnMuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25zdGFudHMuanMiLCIuLi9zcmMvRGF0YUltYWdlLmpzIiwiLi4vc3JjL2xvYWRlcnMvSW1hZ2VMb2FkZXIuanMiLCIuLi9zcmMvbG9hZGVycy9UZXh0dXJlTG9hZGVyLmpzIiwiLi4vc3JjL2xvYWRlcnMvQ3ViZVRleHR1cmVMb2FkZXIuanMiLCIuLi9zcmMvbWVkaWEvTWVkaWEuanMiLCIuLi9zcmMvaW50ZXJmYWNlL1JldGljbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQHR3ZWVuanMvdHdlZW4uanMvc3JjL1R3ZWVuLmpzIiwiLi4vc3JjL2luZm9zcG90L0luZm9zcG90LmpzIiwiLi4vc3JjL3dpZGdldC9XaWRnZXQuanMiLCIuLi9zcmMvcGFub3JhbWEvUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvSW1hZ2VQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9FbXB0eVBhbm9yYW1hLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0N1YmVQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9CYXNpY1Bhbm9yYW1hLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL1ZpZGVvUGFub3JhbWEuanMiLCIuLi9zcmMvbG9hZGVycy9Hb29nbGVTdHJlZXR2aWV3TG9hZGVyLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0dvb2dsZVN0cmVldHZpZXdQYW5vcmFtYS5qcyIsIi4uL3NyYy9zaGFkZXJzL1N0ZXJlb2dyYXBoaWNTaGFkZXIuanMiLCIuLi9zcmMvcGFub3JhbWEvTGl0dGxlUGxhbmV0LmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0ltYWdlTGl0dGxlUGxhbmV0LmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0NhbWVyYVBhbm9yYW1hLmpzIiwiLi4vc3JjL2xpYi9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzIiwiLi4vc3JjL2xpYi9jb250cm9scy9EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmpzIiwiLi4vc3JjL2xpYi9lZmZlY3RzL0NhcmRib2FyZEVmZmVjdC5qcyIsIi4uL3NyYy9saWIvZWZmZWN0cy9TdGVyZW9FZmZlY3QuanMiLCIuLi9zcmMvdmlld2VyL1ZpZXdlci5qcyIsIi4uL3NyYy9DaGVjay5qcyIsIi4uL3NyYy9QYW5vbGVucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJzaW9uLCBkZXBlbmRlbmNpZXMgfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG4vKipcbiAqIFJFVklTSU9OXG4gKiBAbW9kdWxlIFJFVklTSU9OXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5SRVZJU0lPTlxuICogQHR5cGUge3N0cmluZ30gcmV2aXNpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFJFVklTSU9OID0gdmVyc2lvbi5zcGxpdCggJy4nIClbIDEgXTtcblxuLyoqXG4gKiBWRVJTSU9OXG4gKiBAbW9kdWxlIFZFUlNJT05cbiAqIEBleGFtcGxlIFBBTk9MRU5TLlZFUlNJT05cbiAqIEB0eXBlIHtzdHJpbmd9IHZlcnNpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSB2ZXJzaW9uO1xuXG4vKipcbiAqIFRIUkVFSlMgUkVWSVNJT05cbiAqIEBtb2R1bGUgVEhSRUVfUkVWSVNJT05cbiAqIEBleGFtcGxlIFBBTk9MRU5TLlRIUkVFX1JFVklTSU9OXG4gKiBAdHlwZSB7c3RyaW5nfSB0aHJlZWpzIHJldmlzaW9uXG4gKi9cbmV4cG9ydCBjb25zdCBUSFJFRV9SRVZJU0lPTiA9IGRlcGVuZGVuY2llcy50aHJlZS5zcGxpdCggJy4nIClbIDEgXTtcblxuLyoqXG4gKiBUSFJFRUpTIFZFUlNJT05cbiAqIEBtb2R1bGUgVEhSRUVfVkVSU0lPTlxuICogQGV4YW1wbGUgUEFOT0xFTlMuVEhSRUVfVkVSU0lPTlxuICogQHR5cGUge3N0cmluZ30gdGhyZWVqcyB2ZXJzaW9uXG4gKi9cbmV4cG9ydCBjb25zdCBUSFJFRV9WRVJTSU9OID0gZGVwZW5kZW5jaWVzLnRocmVlLnJlcGxhY2UoIC9bXjAtOS5dL2csICcnICk7XG5cbi8qKlxuICogQ09OVFJPTFNcbiAqIEBtb2R1bGUgQ09OVFJPTFNcbiAqIEBleGFtcGxlIFBBTk9MRU5TLkNPTlRST0xTLk9SQklUXG4gKiBAcHJvcGVydHkge251bWJlcn0gT1JCSVQgMFxuICogQHByb3BlcnR5IHtudW1iZXJ9IERFVklDRU9SSUVOVEFUSU9OIDFcbiAqL1xuZXhwb3J0IGNvbnN0IENPTlRST0xTID0geyBPUkJJVDogMCwgREVWSUNFT1JJRU5UQVRJT046IDEgfTtcblxuLyoqXG4gKiBNT0RFU1xuICogQG1vZHVsZSBNT0RFU1xuICogQGV4YW1wbGUgUEFOT0xFTlMuTU9ERVMuVU5LTk9XTlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFVOS05PV04gMFxuICogQHByb3BlcnR5IHtudW1iZXJ9IE5PUk1BTCAxXG4gKiBAcHJvcGVydHkge251bWJlcn0gQ0FSREJPQVJEIDJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTVEVSRU8gM1xuICovXG5leHBvcnQgY29uc3QgTU9ERVMgPSB7IFVOS05PV046IDAsIE5PUk1BTDogMSwgQ0FSREJPQVJEOiAyLCBTVEVSRU86IDMgfTtcblxuLyoqXG4gKiBDT05UUk9MX0JVVFRPTlNcbiAqIEBtb2R1bGUgQ09OVFJPTF9CVVRUT05TXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5WSUVXRVIuQ09OVFJPTF9CVVRUT05TXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRlVMTFNDUkVFTlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNFVFRJTkdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWSURFT1xuICovXG5leHBvcnQgY29uc3QgQ09OVFJPTF9CVVRUT05TID0geyBGVUxMU0NSRUVOOiAnZnVsbHNjcmVlbicsIFNFVFRJTkc6ICdzZXR0aW5nJywgVklERU86ICd2aWRlbycgfTtcblxuLyoqXG4gKiBPVVRQVVRTXG4gKiBAbW9kdWxlIE9VVFBVVFNcbiAqIEBleGFtcGxlIFBBTk9MRU5TLlZJRVdFUi5PVVRQVVRTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTk9ORVxuICogQHByb3BlcnR5IHtzdHJpbmd9IENPTlNPTEVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBPVkVSTEFZXG4gKi9cbmV4cG9ydCBjb25zdCBPVVRQVVRTID0geyBOT05FOiAnbm9uZScsIENPTlNPTEU6ICdjb25zb2xlJywgT1ZFUkxBWTogJ292ZXJsYXknIH07XG5cbiIsIi8qKlxuICogRGF0YSBVUkkgSW1hZ2VzXG4gKiBAbW9kdWxlIERhdGFJbWFnZVxuICogQGV4YW1wbGUgUEFOT0xFTlMuRGF0YUltYWdlLkluZm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJbmZvIEluZm9ybWF0aW9uIEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBcnJvdyBBcnJvdyBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRnVsbHNjcmVlbkVudGVyIEZ1bGxzY3JlZW4gRW50ZXIgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEZ1bGxzY3JlZW5MZWF2ZSBGdWxsc2NyZWVuIExlYXZlIEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWaWRlb1BsYXkgVmlkZW8gUGxheSBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVmlkZW9QYXVzZSBWaWRlbyBQYXVzZSBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gV2hpdGVUaWxlIFdoaXRlIFRpbGUgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNldHRpbmcgU2V0dGluZ3MgSWNvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IENoZXZyb25SaWdodCBDaGV2cm9uIFJpZ2h0IEljb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDaGVjayBDaGVjayBJY29uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVmlld0luZGljYXRvciBWaWV3IEluZGljYXRvciBJY29uXG4gKi9cbmNvbnN0IERhdGFJbWFnZSA9IHtcbiAgICBJbmZvOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQkFBQUFBUUFEcTgvaGdBQUFEQmtsRVFWUjQydTJiUDA4VVFSaUhuekZhU1lDSS94b2tzZEJJcUd3SWlZV1JVQklTRXhwQ1EwZWozOEZXT21sSUtLaG9NUEViYUN4c3JySGlZclFnT1NsUUVhSUNyVCtMSFNQWnpOenQzczNjM0huN2xIdkx6dnY4MkwyZG0zMFhLaW9xS2dZWTA2MkJKRjBIcG9BN3dBUndCYmhzUHo0RGpvRUc4QW5ZTmNaOFN4MU9wOElYSk0xS1dwZFVWM25xOW05bkpWMUk3Vk5HZkV6U00wbU5OcVI5Tk93eHgxTDdOUk1mbGJRbTZTU2dlSjRUTzhab2F0KzgvTEtrZzRqaWVRNGtMYWYyUnRLd3BKMHVpdWZaa1RTY1NuNVMwbDVDK2Ivc1NacnN0dnlNcEtQVTV1YzRralRUamt2cGVZQ2thZUExLys3aHZjSVpNR3VNcVVVTFFOSVU4QWE0bHRyV3d5SHd5Qml6R3p3QVNTUEFlK0IyYXNzVzdBSDNqVEUvaSt4Y1pvYTEyUWZ5MkJvM2krNWNLQUJsOTl6RjFHWWxXRlRCZVVMTFMwRFpyT3NEY0ROZ2dUWGdjMjdiTFdBNjRCaGZnSHZHbUI4ZEhVWFoxRE0wUzQ1eGxpS01zOWJLcitrbElPa3FzQnJ3djlKdFZxMURld0VBVDRDaDFCWWRNR1FkeWdlZzdEZjRTbXFEQUt5b3lYcENzelBnSVRDZXV2b0FqRnVYMGdFOGpsalVkdjdiQ3RpT09KN1hwZFVaOEwvZ2RYSE9BNVF0WUg1TlhYVmdicmdXV24xbndGVHFhaVBnZFBJRmNEZDF0UkZ3T2wzMDdEd1J1WmdYd0x2Y3RnZkEwNGhqT3AxOEFjUmVaNnNaWTE2ZTN5RHBVdVF4blU2K1MyQWtjakVwY0RyMXp4T1hTUGdDS0xTYTBtYzRuWHdCL0VwZGJRU2NUcjRBR3FtcmpZRFR5UmZBeDlUVlJzRHA1QXVnOExKeUgrRjBjZ1pnNTh6MTFCVUhwTzVydUdoMkczeWJ1dXFBZUYyYUJmQXFkZFVCOGJxME9nUDJVMWNlZ0gzYU9RT01NYitCcmRUVkIyREx1cFFMd0xJT25LWTI2SUJUNitDbGFRREdtTy9BUm1xTER0aXdEbjdIVmtjWStFZGpOb1RsQ0krdFloTzJpVXBwbTZIS3NsUFVxMnFRS0hwVWU4QUZzamFVWHVVUVdDZ3FYeW9BRzhJdU1FL1drTlJybkFIelpmcURTZ2RnUTZnQmMyVGQzYjNDTVRCWHRrT3NJelRJalpMblFoamNWdGxjRUlQWkxKMExvVnZ0OHMvVmErM3l1U0FHODRVSlJ4Qjk4Y3BNOWRKVVJVVkZ4U0R6QnhLZGU0TGszL2gyQUFBQUFFbEZUa1N1UW1DQycsIFxuICAgIEluZm8xOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQkFBQUFBUUFEcTgvaGdBQUFEUGtsRVFWUjQydTJiTVVzY1FSaUczMC9TUmFKRUkxWktVaVJFck5JRUxSVWJRWVNBblg4aHBWVWdrRFlwMHdnV1ZqWVcrUWNKYVF6WXBMb2pKSVhodERERUtCcGo2NXRpNThpeG1kbWIyWnZaNytUMkFVSHVkbWZtZVhmMmJuYjNPNkNtcHFabWdKR3FPaUk1QVdBV3dFTUEwd0R1QXJodDNyNENjQWFnQmVBYmdJYUkvTlFPcDFmaElaS0xKTitTYkRLY3B0bDNrZVNRdGsrSStCakpWeVJiSmFSZHRFeWJZOXArUmVLakpOK1F2SXdvbnVmUzlER3E3WnVYWHlkNW5GQTh6ekhKZFcxdmtMeERjcmRDOFR5N0pPOW95YytRUEZDVWIzTkFjcVpxK1RtU3A5cm1IWnlTbkN2akVyd09JUGtVd0h2OCt3N3ZGNjRBTElySWZySUFTTTRDK0FEZ25yYXRneE1BQ3lMU2lCNEF5UkVBbndFODBMYnN3Z0dBSnlKeTRiTnh5QXByNndiSXc0eHh5M2RqcndDWWZlZXVhWnNGc0ViUGRVTFhVNERacXVzTGdNa0VBMjFQMDVFRWJmOEE4RmhFem9zMjhwa0JMeExLTDVzL3IvTTFrRWt6OXZLUUhHZWF0ZjA1eWZtT2Z1Yk5hN0c1SkRsZTVOaHRCandITUJ6NXlGd0FXQmFSVCswWHpQOHBac0t3Y1FpSDJmWDhZY29qYitrenhVdzRaSm43Q1NRWHFwUlBITUtDcTcraVpKNzFNdmR5L0RmdFhTUTZIY0pkU0RhcVBQS1cvbVBPQk8rbGNidnpDVTM1UkNGTTJQcHduUUt6WlFmZGdmZTBkeEg1ZExBNnVRSjRwQzJmSUFTcmt5dUE2WDZRanh5QzFja1ZRTm43Yk5IbEk0WmdkWElGVU9iaUpKbDhwQkNzVGpHZnVJd0EyQ3Y0Rk43eGJZamtqcXNSQUh1SWVQWG9DaURGMVprMlZpZFhBTCsxUjVzQXE1TXJnSmIyYUJOZ2RYSUY4RlY3dEFtd09ya0NDRnM3M3d5c1R0WUFUSEZDVTN2RUVXbTZDaTZLdmdZL2FvODZJazZYb2dEZWFZODZJazZYYmpQZ1NIdmtFVGhDd1F5NDVYcERSSzVKYmdONEdXa2dVeVI5SDY1TVJReGdXMFN1blo1RmV6SzdwZndkOGU4TVY4VWZBUGRGNUpkcmc4SnJBYlBqcHJaRkQyd1d5UVA2ajhaU0V1ZlJtR2xnUTl1bUJCdmQ1SU9nYmpGVUtMdStYbldCaEcrcnBzRlZaR1VvL2NvSmdGVmYrYUFBVEFnTkFDdklDcEw2alNzQUt5SDFRY0VCbUJEMkFTd2hxKzd1Rjg0QUxJVldpUFVFQjdsUXNpT0V3UzJWelFVeG1NWFN1UkNxS3BkL3pYNHJsODhGTVpnL21MQUVjU04rTWxQL2FLcW1wcVpta1BrTDBoU2p3T3BOS3h3QUFBQUFTVVZPUks1Q1lJST0nLFxuICAgIEluZm8yOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQkFBQUFBUUFEcTgvaGdBQUFEbjBsRVFWUjQydTJielVzVlVSakdueU82Q1B6QU1uVGpwcEFvM0xUd0gxQ3FUZmF4YmVPaVJTMzdBMHdYdFJPRlZpMWFSQnMzTFdvaFNJR2JRQVFYVmlCR1JoRzBVSVJLVUNwSzdxL0ZuT0IydWM2Y09YTm1SbkdlM2VXK0g4Lzd6TGxuM3ZOeHBRb1ZLbFE0d2pCRkpBRk9TUnFYMU83b3NpdnB2akhtVTFuQ2hCWmdsdlNZTFlKYlMwRWFuQ3ZJSnpXSytnbnN5SDM0LzhPdU1hWWpiMjY1andDZ3o2TjRTV3Ezdm9kYkFFbW5TL0t0QkRnb0FneVU1QnRlQU9Ba01BUGNCcm9jN1Bza0RXZmdOK3d5RHdCZGx0TU1jREkzdFlCbmRlL3BIZUFSTU5URXJnZDRBUHp3ZVA4MzRvZU4xZE1rejVEbHNGTm4veXl2NGtkaVNLNEF0NEFPNENxd0dhRHdSbXphMkIwMjEwcU03WWhyWFU1OUFOQXE2Yldrd1FUVG41S081ZklFMHVWWWxYVGVHTE9YRk14MURyamxVTHdLS040MXg2RGxuSWpFRVFDY2tQUmUwb2tDaWd1SnI1TE9HR08reGhtNWpJQ0pRMWk4TE9lSkpLUFlFUUFNS3ZydHQ1WmRqU2YyRk0wRnEvc1pKSTJBNlVOY3ZDejM2VGlEZlVjQWNFMVNQdS9VNk1tOGsvVEZmdTZYZEZiNWlYM2RHUE04bFFmd05vZDMrVG93Qm5RM3lkZHR2MXZQSWUrYjFKSUJpd0VKMUlBSjIwOGs1VzIxdHJXQStWLzVDSEFjbUF0VS9BMlAvRGNDaVRBSEhFOHRnQ1ZoZ0x2QVhnWUNrMTdKby95VEdmTHVXZTdaZDcyQUM4Q1dCNG4zT0F6N21MeXROa1phYkFFWE1oZmVRS1lmV0VwSlpDeEEzckdVT1plQS9xREYxNUZwQXo0N0V2bE5rOW5lSTJlM2plV0N6MEJibXZpcE5rU01NWDhrdVNaWU04Wjh6eXFBamJIbWFONW1PZVlqZ0lYclU5M01XcnhIck5RanJxaURrUU1MSHdHK09kcUYzTk4zamVYS3pVOEFvRjFTemRIOFhLaEpVTzdIWkRYTE1id0F3SUNrSlVVTEZ4ZTBTYnFTVlFBYnczWGk3WmUwWkxtR0F6QUtiSHMwSkdVMVF0dkFhSWpDVzRCN1pPdkp5MnFGYTVhNzMwUlB0QmlhejBDZ25raVppNkY1ZkJaRFZNdmhvN0VoY3VTM3hKSjJoVjlJdXBnVHFhTHcwaGh6YWI4dnEyM3hPRy9yK0xEc0tqTGdZVnp4VW5VMGx0d0syd0RlelV5Sm1Fd3FYZ3AvUEw0cnZ4dGhhZUNTSSt6eHVBMTBKOFprV2RKTlNiMlNMa3ZheUtId0RSdTcxK1phanJHOTQxSjhhZ0FMRFEzR1UvYS9Jdk1rWUNQem1DYnRMTkVWbWFjTnRnczVpUDlmWVZORVYxUTZIZXo3eU5aU0wrSjJTYXJUY3BxaXlWMmlVa0cwSXZQRnZiejVGYkVuK0tFazN3TWp3TWVTZkNzQlhGQmRseTlDQVBrOXlkeWZmcEVDdUI1dFpmVkpqYUtXdWVPU2ZpbmxuNllLNGxhaFFvVUtSeGQvQWNSUEdUY1FDQVVRQUFBQUFFbEZUa1N1UW1DQycsXG4gICAgUGFubzogXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJR2hsYVdkb2REMGlORGdpSUhkcFpIUm9QU0kwT0NJZ2MzUnliMnRsUFNJalJrWkdSa1pHSWo0OGNHRjBhQ0JrUFNKTk1URXVNeUF6TUM0NWNUTXVNVFV0TGpRZ05pNHpNalV0TGpZMVVUSXdMamdnTXpBZ01qUWdNekIwTmk0ek56VXVNalZ4TXk0eE56VXVNalVnTmk0ek1qVXVOalZzTFRndU15MHhNQzQyTlMwMkxqSWdOeTQ1TlMwMExqTTFMVFV1TmxwTk5pQTBNSEV0TGpnMUlEQXRNUzQwTWpVdExqVTNOVkUwSURNNExqZzFJRFFnTXpoV01UQnhNQzB1T0RVdU5UYzFMVEV1TkRJMVVUVXVNVFVnT0NBMklEaHhMalFnTUNBeExqYzNOUzQwTnpWVU1URXVORFVnT1M0MWNUSXVNeTQxTlNBMUxqUXlOU0F4TGpBeU5WRXlNQ0F4TVNBeU5DQXhNWFEzTGpFeU5TMHVORGMxVVRNMExqSTFJREV3TGpBMUlETTJMalUxSURrdU5YRXlMak10TGpVMUlETXVOamMxTFRFdU1ESTFVVFF4TGpZZ09DQTBNaUE0Y1M0NE5TQXdJREV1TkRJMUxqVTNOVkUwTkNBNUxqRTFJRFEwSURFd2RqSTRjVEFnTGpnMUxTNDFOelVnTVM0ME1qVlJOREl1T0RVZ05EQWdORElnTkRCeExTNDBJREF0TVM0M056VXRMalEzTlZRek5pNDFOU0F6T0M0MWNTMHlMak10TGpVMUxUVXVOREkxTFRFdU1ESTFVVEk0SURNM0lESTBJRE0zZEMwM0xqRXlOUzQwTnpWeExUTXVNVEkxTGpRM05TMDFMalF5TlNBeExqQXlOUzB5TGpNdU5UVXRNeTQyTnpVZ01TNHdNalZSTmk0MElEUXdJRFlnTkRCYWJURXRNeTR6TlhFMExqRXRNUzQwTlNBNExqTTNOUzB5TGpBMVVURTVMalkxSURNMElESTBJRE0wZERndU5qSTFMalp4TkM0eU56VXVOaUE0TGpNM05TQXlMakExVmpFeExqUnhMVFF1TVNBeExqUXRPQzR6TnpVZ01sRXlPQzR6TlNBeE5DQXlOQ0F4TkhRdE9DNDJNalV0TGpaUk1URXVNU0F4TWk0NElEY2dNVEV1TkZwTk1qUWdNalJhSWk4K1BDOXpkbWMrXCIsXG4gICAgQ2FyZGJvYXJkIDogXCJhc3NldC9pY29uL2NhcmRib2FyZC5wbmdcIixcbiAgICBBcnJvdzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBQklBQUFBU0FCR3lXcytBQUFBQ1had1FXY0FBQUJBQUFBQVFBRHE4L2hnQUFBRFBrbEVRVlI0MnUyYk1Vc2NRUmlHMzAvU1JhSkVJMVpLVWlSRXJOSUVMUlViUVlTQW5YOGhwVlVna0RZcDB3Z1dWallXK1FjSmFRellwTG9qSklYaHREREVLQnBqNjV0aTU4aXhtZG1iMlp2WjcrVDJBVUh1ZG1mbWVYZjJibmIzTzZDbXBxWm1nSkdxT2lJNUFXQVd3RU1BMHdEdUFyaHQzcjRDY0FhZ0JlQWJnSWFJL05RT3AxZmhJWktMSk4rU2JES2NwdGwza2VTUXRrK0krQmpKVnlSYkphUmR0RXliWTlwK1JlS2pKTitRdkl3b251ZlM5REdxN1p1WFh5ZDVuRkE4enpISmRXMXZrTHhEY3JkQzhUeTdKTzlveWMrUVBGQ1ViM05BY3FacStUbVNwOXJtSFp5U25DdmpFcndPSVBrVXdIdjgrdzd2RjY0QUxJcklmcklBU000QytBRGducmF0Z3hNQUN5TFNpQjRBeVJFQW53RTgwTGJzd2dHQUp5Snk0Yk54eUFwcjZ3Ykl3NHh4eTNkanJ3Q1lmZWV1YVpzRnNFYlBkVUxYVTREWnF1c0xnTWtFQTIxUDA1RUViZjhBOEZoRXpvczI4cGtCTHhMS0w1cy9yL00xa0Vrejl2S1FIR2VhdGYwNXlmbU9mdWJOYTdHNUpEbGU1Tmh0Qmp3SE1CejV5RndBV0JhUlQrMFh6UDhwWnNLd2NRaUgyZlg4WWNvamIra3p4VXc0WkpuN0NTUVhxcFJQSE1LQ3E3K2laSjcxTXZkeS9EZnRYU1E2SGNKZFNEYXFQUEtXL21QT0JPK2xjYnZ6Q1UzNVJDRk0yUHB3blFLelpRZmRnZmUwZHhINWRMQTZ1UUo0cEMyZklBU3JreXVBNlg2UWp4eUMxY2tWUU5uN2JOSGxJNFpnZFhJRlVPYmlKSmw4cEJDc1RqR2Z1SXdBMkN2NEZON3hiWWpranFzUkFIdUllUFhvQ2lERjFaazJWaWRYQUwrMVI1c0FxNU1yZ0piMmFCTmdkWElGOEZWN3RBbXdPcmtDQ0ZzNzN3eXNUdFlBVEhGQ1UzdkVFV202Q2k2S3ZnWS9hbzg2SWs2WG9nRGVhWTg2SWs2WGJqUGdTSHZrRVRoQ3dReTQ1WHBEUks1SmJnTjRHV2tnVXlSOUg2NU1SUXhnVzBTdW5aNUZleks3cGZ3ZDhlOE1WOFVmQVBkRjVKZHJnOEpyQWJQanByWkZEMndXeVFQNmo4WlNFdWZSbUdsZ1E5dW1CQnZkNUlPZ2JqRlVLTHUrWG5XQmhHK3Jwc0ZWWkdVby9jb0pnRlZmK2FBQVRBZ05BQ3ZJQ3BMNmpTc0FLeUgxUWNFQm1CRDJBU3docSs3dUY4NEFMSVZXaVBVRUI3bFFzaU9Fd1MyVnpRVXhtTVhTdVJDcUtwZC96WDRybDg4Rk1aZy9tTEFFY1NOK01sUC9hS3FtcHFabWtQa0wwaFNqd09wTkt4d0FBQUFBU1VWT1JLNUNZSUk9JyxcbiAgICBGdWxsc2NyZWVuRW50ZXI6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJtYVd4c1BTSWpSa1pHUmtaR0lpQm9aV2xuYUhROUlqSTBJaUIyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhkcFpIUm9QU0l5TkNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S0lDQWdJRHh3WVhSb0lHUTlJazB3SURCb01qUjJNalJJTUhvaUlHWnBiR3c5SW01dmJtVWlMejRLSUNBZ0lEeHdZWFJvSUdROUlrMDNJREUwU0RWMk5XZzFkaTB5U0RkMkxUTjZiUzB5TFRSb01sWTNhRE5XTlVnMWRqVjZiVEV5SURkb0xUTjJNbWcxZGkwMWFDMHlkak42VFRFMElEVjJNbWd6ZGpOb01sWTFhQzAxZWlJdlBnbzhMM04yWno0PScsXG4gICAgRnVsbHNjcmVlbkxlYXZlOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQjNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkyWm1aaUlnWkQwaVRURTBMREUwU0RFNVZqRTJTREUyVmpFNVNERTBWakUwVFRVc01UUklNVEJXTVRsSU9GWXhOa2cxVmpFMFRUZ3NOVWd4TUZZeE1FZzFWamhJT0ZZMVRURTVMRGhXTVRCSU1UUldOVWd4TmxZNFNERTVXaUlnTHo0OEwzTjJaejQ9JyxcbiAgICBWaWRlb1BsYXk6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVppSWdaRDBpVFRnc05TNHhORll4T1M0eE5Fd3hPU3d4TWk0eE5FdzRMRFV1TVRSYUlpQXZQand2YzNablBnPT0nLFxuICAgIFZpZGVvUGF1c2U6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVppSWdaRDBpVFRFMExERTVMakUwU0RFNFZqVXVNVFJJTVRSTk5pd3hPUzR4TkVneE1GWTFMakUwU0RaV01Ua3VNVFJhSWlBdlBqd3ZjM1puUGc9PScsXG4gICAgV2hpdGVUaWxlOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFnQUFBQUlBQkFNQUFBQUdWc25KQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFCMVdsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpV0UxUUlFTnZjbVVnTlM0MExqQWlQZ29nSUNBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBnb2dJQ0FnSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDBhV1ptUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzUnBabVl2TVM0d0x5SStDaUFnSUNBZ0lDQWdJRHgwYVdabU9rTnZiWEJ5WlhOemFXOXVQakU4TDNScFptWTZRMjl0Y0hKbGMzTnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1Pazl5YVdWdWRHRjBhVzl1UGpFOEwzUnBabVk2VDNKcFpXNTBZWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2xCb2IzUnZiV1YwY21salNXNTBaWEp3Y21WMFlYUnBiMjQrTWp3dmRHbG1aanBRYUc5MGIyMWxkSEpwWTBsdWRHVnljSEpsZEdGMGFXOXVQZ29nSUNBZ0lDQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtJQ0FnUEM5eVpHWTZVa1JHUGdvOEwzZzZlRzF3YldWMFlUNEtBdGlBQlFBQUFDUlFURlJGQUFBQUFBQUFCZ1lHQndjSEhoNGVLeXNyeDhmSHk4dkx6TXpNN096c0FBQUFCZ1lHK3E3U1pnQUFBQXAwVWs1VEFQNysvdjcrL3Y3Ky9pSngvYThBQUFPd1NVUkJWSGphN2QwaGJzTkFFQVZRbzZTRkk2WEVjQUxEY2dOTHZVQnZFQlFWaHBrV1ZZV2xoU3NWRlM3dDVRSXNoUnQ2OTVsRUFTWlArOGM3YTFrekRMMWZ6Ky96eXV2enA2RmJ2b2Rkckw2dURkMXlHWjVlWGxkZWIxOE4zZkl4N0ErNThwcm1obTY1RGZ2RGNkMDk1Mmx1NkphYkZiRC96VnByWmoxbHpjeXMrZmo5ejh4VFp0YlQ4cnY4eVdsdTZCWUFJZ0FBQUFBQUFBQUFBQUJBTTZRWEVBRUFBQUFBQUFBQWdKMmduYUFJaUlBM1EycUFHZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUUpzQURrVkZBQUFBQUFBOEJqMEdSVUFFUkVBRVJFQUVSRUFFUkVBRUFBQUFBQUFBQUFCMmduYUNJaUFDUHBsUkE5UUFOVUFFUkFBQUFFVlFFUlFCRVJDQlZsZkFjWjNhZVpvYnVzVUtNR0JoVjZLVUVsSEdLQkVSSlI2L2Z4RXhSa1FabDkvbFQ4UzFvVnN1aHF5WU1tUEtqQ2t6dmZjQ3BzeG9ocndZMFEwNkVBRUFBQUFBQUFBQUFBQ2dHZElMaUFBQUFBQUFBQUFBd0U3UVRsQUVSTUNiSVRWQURRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF3S213UTFFUkFBQUFBQUNQUVk5QkVSQUJFUkFCRVJBQkVSQUJFUkFCQUFBQUFBQUFBSUNkb0oyZ0NJaUFUMmJVQURWQURSQUJFUUFBUUJGVUJFVkFCRVJnRXl2QWxKbStWNEFwTTZiTW1ESmp5b3dwTTZiTWROMExtREtqR2ZKaVJEZm9RQVFBQUFBQUFBQUFBQUNBWmtndklBSUFBQUFBQUFBQUFEdEJPMEVSRUFGdmh0UUFOUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUtmQ0RrVkZBQUFBQUFBOEJqMEdSVUFFUkVBRVJFQUVSRUFFUkVBRUFBQUFBQUFBQUFCMmduYUNJaUFDUHBsUkE5UUFOVUFFUkFBQUFFVlFFUlFCRVJDQlRhd0FVMmI2WGdHbXpKZ3lZOHFNS1RPbXpKZ3kwM1V2WU1xTVpzaUxFZDJnQXhFQUFBQUFBQUFBQUFBQW1pRzlnQWdBQUFBQUFBQUFBT3dFN1FSRlFBUzhHVklEMUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFKd0tPeFFWQVFBQUFBRHdHUFFZRkFFUkVBRVJFQUVSRUFFUkVBRVJBQUFBQUFBQUFBRFlDZG9KaW9BSStHUkdEVkFEMUFBUkVBRUFBQlJCUlZBRVJFQUVOckVDVEpucGV3V1lNbVBLakNrenBzeVlNbVBLVE5lOWdDa3ptaUV2Um5TRERrUUFBQUFBQUFBQUFBQUFhSWIwQWlJQUFBQUFBQUFBQUxBVHRCTVVBUkh3WmtnTlVBTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSEFxN0ZCVUJBQUFBQURBWTlCalVBUkVRQVJFUUFSRVFBUkVRQVJFQUFBQUFBQUFBQUJnSjJnbktBSWk0Sk1aTlVBTlVBTkVRQVFBQUZBRUZVRVJFQUVSMk1RS01HV203eFZneW93cE01MFBXZW45dWdOR1h6MVhhb2NBRmdBQUFBQkpSVTVFcmtKZ2dnPT0nLFxuICAgIFNldHRpbmc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQUJJQUFBQVNBQkd5V3MrQUFBQUNYWndRV2NBQUFCQUFBQUFRQURxOC9oZ0FBQURuMGxFUVZSNDJ1MmJ6VXNWVVJqR255TzZDUHpBTW5UanBwQW8zTFR3SDFDcVRmYXhiZU9pUlMzN0Ewd1h0Uk9GVmkxYVJCczNMV29oU0lHYlFBUVhWaUJHUmhHMFVJUktVQ3BLN3EvRm5PQjJ1YzZjT1hObVJuR2UzZVcrSDgvN3pMbG4zdk54cFFvVktsUTR3akJGSkFGT1NScVgxTzdvc2l2cHZqSG1VMW5DaEJaZ2x2U1lMWUpiUzBFYW5DdklKeldLK2duc3lIMzQvOE91TWFZamIyNjVqd0NnejZONFNXcTN2b2RiQUVtblMvS3RCRGdvQWd5VTVCdGVBT0FrTUFQY0Jyb2M3UHNrRFdmZ04rd3lEd0JkbHRNTWNESTN0WUJuZGUvcEhlQVJNTlRFcmdkNEFQendlUDgzNG9lTjFkTWt6NURsc0ZObi95eXY0a2RpU0s0QXQ0QU80Q3F3R2FEd1JtemEyQjAyMTBxTTdZaHJYVTU5QU5BcTZiV2t3UVRUbjVLTzVmSUUwdVZZbFhUZUdMT1hGTXgxRHJqbFVMd0tLTjQxeDZEbG5JakVFUUNja1BSZTBva0NpZ3VKcjVMT0dHTyt4aG01aklDSlExaThMT2VKSktQWUVRQU1LdnJ0dDVaZGpTZjJGTTBGcS9zWkpJMkE2VU5jdkN6MzZUaURmVWNBY0UxU1B1L1U2TW04ay9URmZ1NlhkRmI1aVgzZEdQTThsUWZ3Tm9kMytUb3dCblEzeWRkdHYxdlBJZStiMUpJQml3RUoxSUFKMjA4azVXMjF0cldBK1YvNUNIQWNtQXRVL0EyUC9EY0NpVEFISEU4dGdDVmhnTHZBWGdZQ2sxN0pvL3lUR2ZMdVdlN1pkNzJBQzhDV0I0bjNPQXo3bUx5dE5rWmFiQUVYTWhmZVFLWWZXRXBKWkN4QTNyR1VPWmVBL3FERjE1RnBBejQ3RXZsTms5bmVJMmUzamVXQ3owQmJtdmlwTmtTTU1YOGt1U1pZTThaOHp5cUFqYkhtYU41bU9lWWpnSVhyVTkzTVdyeEhyTlFqcnFpRGtRTUxId0crT2RxRjNOTjNqZVhLelU4QW9GMVN6ZEg4WEtoSlVPN0haRFhMTWJ3QXdJQ2tKVVVMRnhlMFNicVNWUUFidzNYaTdaZTBaTG1HQXpBS2JIczBKR1UxUXR2QWFJakNXNEI3Wk92SnkycUZhNWE3MzBSUHRCaWF6MENnbmtpWmk2RjVmQlpEVk12aG83RWhjdVMzeEpKMmhWOUl1cGdUcWFMdzBoaHphYjh2cTIzeE9HL3IrTERzS2pMZ1lWenhVblUwbHR3SzJ3RGV6VXlKbUV3cVhncC9QTDRydnh0aGFlQ1NJK3p4dUExMEo4WmtXZEpOU2IyU0xrdmF5S0h3RFJ1NzErWmFqckc5NDFKOGFnQUxEUTNHVS9hL0l2TWtZQ1B6bUNidExORVZtYWNOdGdzNWlQOWZZVk5FVjFRNkhlejd5TlpTTCtKMlNhclRjcHFpeVYyaVVrRzBJdlBGdmJ6NUZiRW4rS0VrM3dNandNZVNmQ3NCWEZCZGx5OUNBUGs5eWR5ZmZwRUN1QjV0WmZWSmphS1d1ZU9TZmlubG42WUs0bGFoUW9VS1J4ZC9BY1JQR1RjUUNBVVFBQUFBQUVsRlRrU3VRbUNDJyxcbiAgICBDaGV2cm9uUmlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2daRDBpVFRndU5Ua3NNVFl1TlRoTU1UTXVNVGNzTVRKTU9DNDFPU3czTGpReFRERXdMRFpNTVRZc01USk1NVEFzTVRoTU9DNDFPU3d4Tmk0MU9Gb2lJQzgrUEM5emRtYysnLFxuICAgIENoZWNrOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQjNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnWkQwaVRUSXhMRGRNT1N3eE9Vd3pMalVzTVRNdU5VdzBMamt4TERFeUxqQTVURGtzTVRZdU1UZE1NVGt1TlRrc05TNDFPVXd5TVN3M1dpSWdMejQ4TDNOMlp6ND0nLFxuICAgIFZpZXdJbmRpY2F0b3I6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQQ0ZFVDBOVVdWQkZJSE4yWnlCUVZVSk1TVU1nSWkwdkwxY3pReTh2UkZSRUlGTldSeUF4TGpFdkwwVk9JaUFpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2UjNKaGNHaHBZM012VTFaSEx6RXVNUzlFVkVRdmMzWm5NVEV1WkhSa0lqNEtQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUJwWkQwaWRtbGxkeTFwYm1ScFkyRjBiM0lpSUdobGFXZG9kRDBpTXpBaUlIZHBaSFJvUFNJek1DSWdkbWxsZDBKdmVEMGlMVEl1TlNBdE1TQXpNQ0F6TUNJK0NnazhjM1I1YkdVZ2RIbHdaVDBpZEdWNGRDOWpjM01pUGk1emREQjdjM1J5YjJ0bExYZHBaSFJvT2pJN2MzUnliMnRsTFcxcGRHVnliR2x0YVhRNk1UQTdabWxzYkRwdWIyNWxPMzB1YzNReGUzTjBjbTlyWlMxM2FXUjBhRG8yTzNOMGNtOXJaUzF0YVhSbGNteHBiV2wwT2pFd08zMEtDVHd2YzNSNWJHVStDZ2s4Wno0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOSURFeUxqVWdNQ0JCSURFeUxqVWdNVEl1TlNBd0lEQWdNQ0F0TVRJdU5TQXdJRUVnTVRJdU5TQXhNaTQxSURBZ01DQXdJREV5TGpVZ01DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU3d3TERBc01Td3hNeXd4TlM0MUtTSStQQzl3WVhSb1Bnb0pDVHh3WVhSb0lHTnNZWE56UFNKemRESWlJR1E5SWswZ01UTWdNQ0JNSURFd0lESWdUQ0F4TmlBeUlGb2lQand2Y0dGMGFENEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXlJaUJrUFNKTklESWdNQ0JCSURJZ01pQXdJREFnTUNBdE1pQXdJRUVnTWlBeUlEQWdNQ0F3SURJZ01DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU3d3TERBc01Td3hNeXd4TlM0MUtTSStQQzl3WVhSb1Bnb0pDVHh3WVhSb0lHTnNZWE56UFNKemRERWlJR2xrUFNKcGJtUnBZMkYwYjNJaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERXNNQ3d3TERFc01UTXNNVFV1TlNraVBqd3ZjR0YwYUQ0S0NUd3ZaejRLUEM5emRtYysnXG59O1xuXG5leHBvcnQgeyBEYXRhSW1hZ2UgfTsiLCJpbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UuanMnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBtb2R1bGUgSW1hZ2VMb2FkZXJcbiAqIEBkZXNjcmlwdGlvbiBJbWFnZSBsb2FkZXIgd2l0aCBwcm9ncmVzcyBiYXNlZCBvbiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9zcmMvbG9hZGVycy9JbWFnZUxvYWRlci5qc31cbiAqL1xuY29uc3QgSW1hZ2VMb2FkZXIgPSB7XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGltYWdlXG4gICAgICogQGV4YW1wbGUgUEFOT0xFTlMuSW1hZ2VMb2FkZXIubG9hZCggSU1BR0VfVVJMIClcbiAgICAgKiBAbWV0aG9kIGxvYWRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgdXJsICAgICAgICAtIEFuIGltYWdlIHVybFxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkxvYWQgICAgIC0gT24gbG9hZCBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvblByb2dyZXNzIC0gSW4gcHJvZ3Jlc3MgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvciAgICAtIE9uIGVycm9yIGNhbGxiYWNrXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24gKCB1cmwsIG9uTG9hZCA9ICgpID0+IHt9LCBvblByb2dyZXNzID0gKCkgPT4ge30sIG9uRXJyb3IgPSAoKSA9PiB7fSApIHtcblxuICAgICAgICAvLyBFbmFibGUgY2FjaGVcbiAgICAgICAgVEhSRUUuQ2FjaGUuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgbGV0IGNhY2hlZCwgcmVxdWVzdCwgYXJyYXlCdWZmZXJWaWV3LCBibG9iLCB1cmxDcmVhdG9yLCBpbWFnZSwgcmVmZXJlbmNlO1xuXG4gICAgICAgIC8vIFJlZmVyZW5jZSBrZXlcbiAgICAgICAgZm9yIChsZXQgaWNvbk5hbWUgaW4gRGF0YUltYWdlKSB7XG5cbiAgICAgICAgICAgIGlmIChEYXRhSW1hZ2UuaGFzT3duUHJvcGVydHkoaWNvbk5hbWUpICYmIHVybCA9PT0gRGF0YUltYWdlW2ljb25OYW1lXSkge1xuXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlID0gaWNvbk5hbWU7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FjaGVkXG4gICAgICAgIGNhY2hlZCA9IFRIUkVFLkNhY2hlLmdldChyZWZlcmVuY2UgPyByZWZlcmVuY2UgOiB1cmwpO1xuXG4gICAgICAgIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBpZiAob25Mb2FkKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGNhY2hlZC5jb21wbGV0ZSAmJiBjYWNoZWQuc3JjICkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiAxLCB0b3RhbDogMSB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQoIGNhY2hlZCApO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIDAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZWQuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiAxLCB0b3RhbDogMSB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQoIGNhY2hlZCApO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnN0cnVjdCBhIG5ldyBYTUxIdHRwUmVxdWVzdFxuICAgICAgICB1cmxDcmVhdG9yID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsICdpbWcnKTtcblxuICAgICAgICAvLyBBZGQgdG8gY2FjaGVcbiAgICAgICAgVEhSRUUuQ2FjaGUuYWRkKHJlZmVyZW5jZSA/IHJlZmVyZW5jZSA6IHVybCwgaW1hZ2UpO1xuXG4gICAgICAgIGNvbnN0IG9uSW1hZ2VMb2FkZWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIHVybENyZWF0b3IucmV2b2tlT2JqZWN0VVJMKGltYWdlLnNyYyk7XG4gICAgICAgICAgICBvbkxvYWQoaW1hZ2UpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCdkYXRhOicpID09PSAwKSB7XG5cbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkltYWdlTG9hZGVkLCBmYWxzZSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9IHRoaXMuY3Jvc3NPcmlnaW4gIT09IHVuZGVmaW5lZCA/IHRoaXMuY3Jvc3NPcmlnaW4gOiAnJztcblxuICAgICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5ucG1fbGlmZWN5Y2xlX2V2ZW50ICE9PSAndGVzdCcpIHtcbiAgICAgICAgLy8gICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIC8vICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0ICYmIHRoaXMuc3RhdHVzID49IDQwMCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBvbkVycm9yKCk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgb25FcnJvciApO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoICdwcm9ncmVzcycsIGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgICggIWV2ZW50ICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCB7IGxvYWRlZCwgdG90YWwsIGxlbmd0aENvbXB1dGFibGUgfSA9IGV2ZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIGxlbmd0aENvbXB1dGFibGUgKSB7XG5cdFxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkLCB0b3RhbCB9ICk7XG5cdFxuICAgICAgICAgICAgfVxuXHRcbiAgICAgICAgfSApO1xuICAgICAgICBcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCAnbG9hZGVuZCcsIGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgICggIWV2ZW50ICkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0OiB7IHJlc3BvbnNlIH0gfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICBhcnJheUJ1ZmZlclZpZXcgPSBuZXcgVWludDhBcnJheSggcmVzcG9uc2UgKTtcbiAgICAgICAgICAgIGJsb2IgPSBuZXcgd2luZG93LkJsb2IoIFsgYXJyYXlCdWZmZXJWaWV3IF0gKTtcblx0XHRcdFx0XG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIG9uSW1hZ2VMb2FkZWQsIGZhbHNlICk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmxDcmVhdG9yLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xuXHRcbiAgICAgICAgfSApO1xuXHRcbiAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xuXHRcbiAgICB9XG5cbn07XG5cbmV4cG9ydCB7IEltYWdlTG9hZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL0ltYWdlTG9hZGVyLmpzJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAbW9kdWxlIFRleHR1cmVMb2FkZXJcbiAqIEBkZXNjcmlwdGlvbiBUZXh0dXJlIGxvYWRlciBiYXNlZCBvbiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9zcmMvbG9hZGVycy9UZXh0dXJlTG9hZGVyLmpzfVxuICovXG5jb25zdCBUZXh0dXJlTG9hZGVyID0ge1xuXG4gICAgLyoqXG4gICAgICogTG9hZCBpbWFnZSB0ZXh0dXJlXG4gICAgICogQGV4YW1wbGUgUEFOT0xFTlMuVGV4dHVyZUxvYWRlci5sb2FkKCBJTUFHRV9VUkwgKVxuICAgICAqIEBtZXRob2QgbG9hZFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICB1cmwgICAgICAgIC0gQW4gaW1hZ2UgdXJsXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uTG9hZCAgICAgLSBPbiBsb2FkIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uUHJvZ3Jlc3MgLSBJbiBwcm9ncmVzcyBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yICAgIC0gT24gZXJyb3IgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5UZXh0dXJlfSAgIFx0IC0gSW1hZ2UgdGV4dHVyZVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICggdXJsLCBvbkxvYWQgPSAoKSA9PiB7fSwgb25Qcm9ncmVzcywgb25FcnJvciApIHtcblxuICAgICAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7IFxuXG4gICAgICAgIEltYWdlTG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBpbWFnZSApIHtcblxuICAgICAgICAgICAgdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xuXG4gICAgICAgICAgICAvLyBKUEVHcyBjYW4ndCBoYXZlIGFuIGFscGhhIGNoYW5uZWwsIHNvIG1lbW9yeSBjYW4gYmUgc2F2ZWQgYnkgc3RvcmluZyB0aGVtIGFzIFJHQi5cbiAgICAgICAgICAgIGNvbnN0IGlzSlBFRyA9IHVybC5zZWFyY2goIC9cXC4oanBnfGpwZWcpJC8gKSA+IDAgfHwgdXJsLnNlYXJjaCggL15kYXRhXFw6aW1hZ2VcXC9qcGVnLyApID09PSAwO1xuXG4gICAgICAgICAgICB0ZXh0dXJlLmZvcm1hdCA9IGlzSlBFRyA/IFRIUkVFLlJHQkZvcm1hdCA6IFRIUkVFLlJHQkFGb3JtYXQ7XG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgb25Mb2FkKCB0ZXh0dXJlICk7XG5cbiAgICAgICAgfSwgb25Qcm9ncmVzcywgb25FcnJvciApO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuXG4gICAgfVxuXG59O1xuXG5leHBvcnQgeyBUZXh0dXJlTG9hZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL0ltYWdlTG9hZGVyLmpzJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAbW9kdWxlIEN1YmVUZXh0dXJlTG9hZGVyXG4gKiBAZGVzY3JpcHRpb24gQ3ViZSBUZXh0dXJlIExvYWRlciBiYXNlZCBvbiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9zcmMvbG9hZGVycy9DdWJlVGV4dHVyZUxvYWRlci5qc31cbiAqL1xuY29uc3QgQ3ViZVRleHR1cmVMb2FkZXIgPSB7XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIDYgaW1hZ2VzIGFzIGEgY3ViZSB0ZXh0dXJlXG4gICAgICogQGV4YW1wbGUgUEFOT0xFTlMuQ3ViZVRleHR1cmVMb2FkZXIubG9hZCggWyAncHgucG5nJywgJ254LnBuZycsICdweS5wbmcnLCAnbnkucG5nJywgJ3B6LnBuZycsICduei5wbmcnIF0gKVxuICAgICAqIEBtZXRob2QgbG9hZFxuICAgICAqIEBwYXJhbSAge2FycmF5fSAgIHVybHMgICAgICAgIC0gYXJyYXkgb2YgNiB1cmxzIHRvIGltYWdlcywgb25lIGZvciBlYWNoIHNpZGUgb2YgdGhlIEN1YmVUZXh0dXJlLiBUaGUgdXJscyBzaG91bGQgYmUgc3BlY2lmaWVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6IHBvcy14LCBuZWcteCwgcG9zLXksIG5lZy15LCBwb3MteiwgbmVnLXpcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Mb2FkICAgICAtIE9uIGxvYWQgY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Qcm9ncmVzcyAtIEluIHByb2dyZXNzIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uRXJyb3IgICAgLSBPbiBlcnJvciBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge1RIUkVFLkN1YmVUZXh0dXJlfSAgIC0gQ3ViZSB0ZXh0dXJlXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24gKCB1cmxzLCBvbkxvYWQgPSAoKSA9PiB7fSwgb25Qcm9ncmVzcyA9ICgpID0+IHt9LCBvbkVycm9yICkge1xuXG5cdCAgIHZhciB0ZXh0dXJlLCBsb2FkZWQsIHByb2dyZXNzLCBhbGwsIGxvYWRpbmdzO1xuXG5cdCAgIHRleHR1cmUgPSBuZXcgVEhSRUUuQ3ViZVRleHR1cmUoIFtdICk7XG5cblx0ICAgbG9hZGVkID0gMDtcblx0ICAgcHJvZ3Jlc3MgPSB7fTtcblx0ICAgYWxsID0ge307XG5cblx0ICAgdXJscy5tYXAoIGZ1bmN0aW9uICggdXJsLCBpbmRleCApIHtcblxuXHRcdCAgIEltYWdlTG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBpbWFnZSApIHtcblxuXHRcdFx0ICAgdGV4dHVyZS5pbWFnZXNbIGluZGV4IF0gPSBpbWFnZTtcblxuXHRcdFx0ICAgbG9hZGVkKys7XG5cblx0XHRcdCAgIGlmICggbG9hZGVkID09PSA2ICkge1xuXG5cdFx0XHRcdCAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG5cdFx0XHRcdCAgIG9uTG9hZCggdGV4dHVyZSApO1xuXG5cdFx0XHQgICB9XG5cblx0XHQgICB9LCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHQgICBwcm9ncmVzc1sgaW5kZXggXSA9IHsgbG9hZGVkOiBldmVudC5sb2FkZWQsIHRvdGFsOiBldmVudC50b3RhbCB9O1xuXG5cdFx0XHQgICBhbGwubG9hZGVkID0gMDtcblx0XHRcdCAgIGFsbC50b3RhbCA9IDA7XG5cdFx0XHQgICBsb2FkaW5ncyA9IDA7XG5cblx0XHRcdCAgIGZvciAoIHZhciBpIGluIHByb2dyZXNzICkge1xuXG5cdFx0XHRcdCAgIGxvYWRpbmdzKys7XG5cdFx0XHRcdCAgIGFsbC5sb2FkZWQgKz0gcHJvZ3Jlc3NbIGkgXS5sb2FkZWQ7XG5cdFx0XHRcdCAgIGFsbC50b3RhbCArPSBwcm9ncmVzc1sgaSBdLnRvdGFsO1xuXG5cdFx0XHQgICB9XG5cblx0XHRcdCAgIGlmICggbG9hZGluZ3MgPCA2ICkge1xuXG5cdFx0XHRcdCAgIGFsbC50b3RhbCA9IGFsbC50b3RhbCAvIGxvYWRpbmdzICogNjtcblxuXHRcdFx0ICAgfVxuXG5cdFx0XHQgICBvblByb2dyZXNzKCBhbGwgKTtcblxuXHRcdCAgIH0sIG9uRXJyb3IgKTtcblxuXHQgICB9ICk7XG5cblx0ICAgcmV0dXJuIHRleHR1cmU7XG5cbiAgICB9XG5cbn07XG5cbmV4cG9ydCB7IEN1YmVUZXh0dXJlTG9hZGVyIH07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVXNlciBNZWRpYVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnN0cmFpbnRzPXsgdmlkZW86IHsgd2lkdGg6IHsgaWRlYWw6IDE5MjAgfSwgaGVpZ2h0OiB7IGlkZWFsOiAxMDgwIH0sIGZhY2luZ01vZGU6IHsgZXhhY3Q6ICdlbnZpcm9ubWVudCcgfSB9LCBhdWRpbzogZmFsc2UgfV1cbiAqL1xuZnVuY3Rpb24gTWVkaWEgKCBjb25zdHJhaW50cyApIHtcblxuICAgIGNvbnN0IGRlZmF1bHRDb25zdHJhaW50cyA9IHsgdmlkZW86IHsgd2lkdGg6IHsgaWRlYWw6IDE5MjAgfSwgaGVpZ2h0OiB7IGlkZWFsOiAxMDgwIH0sIGZhY2luZ01vZGU6IHsgZXhhY3Q6ICdlbnZpcm9ubWVudCcgfSB9LCBhdWRpbzogZmFsc2UgfTtcblxuICAgIHRoaXMuY29uc3RyYWludHMgPSBPYmplY3QuYXNzaWduKCBkZWZhdWx0Q29uc3RyYWludHMsIGNvbnN0cmFpbnRzICk7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmRldmljZXMgPSBbXTtcbiAgICB0aGlzLnN0cmVhbSA9IG51bGw7XG4gICAgdGhpcy5yYXRpb1NjYWxhciA9IDE7XG4gICAgdGhpcy52aWRlb0RldmljZUluZGV4ID0gMDtcblxufTtcblxuTWVkaWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApLCB7XG5cbiAgICBzZXRDb250YWluZXI6IGZ1bmN0aW9uICggY29udGFpbmVyICkge1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgfSxcblxuICAgIHNldFNjZW5lOiBmdW5jdGlvbiAoIHNjZW5lICkge1xuXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbnVtZXJhdGUgZGV2aWNlc1xuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGVudW1lcmF0ZURldmljZXM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBkZXZpY2VzID0gdGhpcy5kZXZpY2VzO1xuICAgICAgICBjb25zdCByZXNvbHZlZFByb21pc2UgPSBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7IHJlc29sdmUoIGRldmljZXMgKTsgfSApO1xuXG4gICAgICAgIHJldHVybiBkZXZpY2VzLmxlbmd0aCA+IDAgPyByZXNvbHZlZFByb21pc2UgOiB3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoIHRvIG5leHQgYXZhaWxhYmxlIHZpZGVvIGRldmljZVxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN3aXRjaE5leHRWaWRlb0RldmljZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHN0b3AgPSB0aGlzLnN0b3AuYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuc3RhcnQuYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBzZXRWaWRlRGV2aWNlSW5kZXggPSB0aGlzLnNldFZpZGVEZXZpY2VJbmRleC5iaW5kKCB0aGlzICk7XG5cbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy52aWRlb0RldmljZUluZGV4O1xuXG4gICAgICAgIHRoaXMuZ2V0RGV2aWNlcyggJ3ZpZGVvJyApXG4gICAgICAgICAgICAudGhlbiggZGV2aWNlcyA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgaWYgKCBpbmRleCA+PSBkZXZpY2VzLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlkZURldmljZUluZGV4KCAwICk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlkZURldmljZUluZGV4KCBpbmRleCApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0YXJ0KCBkZXZpY2VzWyBpbmRleCBdICk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBkZXZpY2VzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSB0eXBlIGtleXdvcmQgdG8gbWF0Y2ggZGV2aWNlLmtpbmRcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBnZXREZXZpY2VzOiBmdW5jdGlvbiAoIHR5cGUgPSAndmlkZW8nICkge1xuXG4gICAgICAgIGNvbnN0IGRldmljZXMgPSB0aGlzLmRldmljZXM7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlID0gX2RldmljZXMgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gX2RldmljZXMubWFwKCBkZXZpY2UgPT4geyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoICFkZXZpY2VzLmluY2x1ZGVzKCBkZXZpY2UgKSApIHsgZGV2aWNlcy5wdXNoKCBkZXZpY2UgKTsgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2U7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gX2RldmljZXMgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKCB0eXBlLCAnaScgKTtcbiAgICAgICAgICAgIHJldHVybiBfZGV2aWNlcy5maWx0ZXIoIGRldmljZSA9PiByZWcudGVzdCggZGV2aWNlLmtpbmQgKSApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW51bWVyYXRlRGV2aWNlcygpXG4gICAgICAgICAgICAudGhlbiggdmFsaWRhdGUgKVxuICAgICAgICAgICAgLnRoZW4oIGZpbHRlciApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB1c2VyIG1lZGlhXG4gICAgICogQHBhcmFtIHtNZWRpYVN0cmVhbUNvbnN0cmFpbnRzfSBjb25zdHJhaW50c1xuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGdldFVzZXJNZWRpYTogZnVuY3Rpb24gKCBjb25zdHJhaW50cyApIHtcblxuICAgICAgICBjb25zdCBzZXRNZWRpYVN0cmVhbSA9IHRoaXMuc2V0TWVkaWFTdHJlYW0uYmluZCggdGhpcyApO1xuICAgICAgICBjb25zdCBwbGF5VmlkZW8gPSB0aGlzLnBsYXlWaWRlby5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IG9uQ2F0Y2hFcnJvciA9IGVycm9yID0+IHsgY29uc29sZS53YXJuKCBgUEFOT0xFTlMuTWVkaWE6ICR7ZXJyb3J9YCApOyB9O1xuXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoIGNvbnN0cmFpbnRzIClcbiAgICAgICAgICAgIC50aGVuKCBzZXRNZWRpYVN0cmVhbSApXG4gICAgICAgICAgICAudGhlbiggcGxheVZpZGVvIClcbiAgICAgICAgICAgIC5jYXRjaCggb25DYXRjaEVycm9yICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHZpZGVvIGRldmljZSBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRWaWRlRGV2aWNlSW5kZXg6IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cbiAgICAgICAgdGhpcy52aWRlb0RldmljZUluZGV4ID0gaW5kZXg7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgc3RyZWFtaW5nXG4gICAgICogQHBhcmFtIHtNZWRpYURldmljZUluZm99IFt0YXJnZXREZXZpY2VdXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uKCB0YXJnZXREZXZpY2UgKSB7XG5cbiAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSB0aGlzLmNvbnN0cmFpbnRzO1xuICAgICAgICBjb25zdCBnZXRVc2VyTWVkaWEgPSB0aGlzLmdldFVzZXJNZWRpYS5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IG9uVmlkZW9EZXZpY2VzID0gZGV2aWNlcyA9PiB7XG5cbiAgICAgICAgICAgIGlmICggIWRldmljZXMgfHwgZGV2aWNlcy5sZW5ndGggPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggJ25vIHZpZGVvIGRldmljZSBmb3VuZCcgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkZXZpY2UgPSB0YXJnZXREZXZpY2UgfHwgZGV2aWNlc1sgMCBdO1xuICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSBkZXZpY2UuZGV2aWNlSWQ7XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRVc2VyTWVkaWEoIGNvbnN0cmFpbnRzICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZVZpZGVvRWxlbWVudCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldERldmljZXMoKS50aGVuKCBvblZpZGVvRGV2aWNlcyApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3Agc3RyZWFtaW5nXG4gICAgICogQG1lbWJlck9mIE1lZGlhXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuc3RyZWFtO1xuXG4gICAgICAgIGlmICggc3RyZWFtICYmIHN0cmVhbS5hY3RpdmUgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gc3RyZWFtLmdldFRyYWNrcygpWyAwIF07XG5cbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcblxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0gPSBudWxsO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgbWVkaWEgc3RyZWFtXG4gICAgICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gc3RyZWFtIFxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldE1lZGlhU3RyZWFtOiBmdW5jdGlvbiAoIHN0cmVhbSApIHtcblxuICAgICAgICB0aGlzLnN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcblxuICAgICAgICBpZiAoIHRoaXMuc2NlbmUgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IHRoaXMuY3JlYXRlVmlkZW9UZXh0dXJlKCk7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBsYXkgdmlkZW8gZWxlbWVudFxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHBsYXlWaWRlbzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcztcblxuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIGVsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwbGF5JyB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhdXNlIHZpZGVvIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwYXVzZVZpZGVvOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xuXG4gICAgICAgIGlmICggZWxlbWVudCApIHtcblxuICAgICAgICAgICAgZWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYXVzZScgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdmlkZW8gdGV4dHVyZVxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtUSFJFRS5WaWRlb1RleHR1cmV9XG4gICAgICovXG4gICAgY3JlYXRlVmlkZW9UZXh0dXJlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuVmlkZW9UZXh0dXJlKCB2aWRlbyApO1xuXG4gICAgICAgIHRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XG4gICAgICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xuICAgICAgICB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdGV4dHVyZS5mb3JtYXQgPSBUSFJFRS5SR0JGb3JtYXQ7XG4gICAgICAgIHRleHR1cmUuY2VudGVyLnNldCggMC41LCAwLjUgKTtcblxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCAnY2FucGxheScsIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHZpZGVvIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7SFRNTFZpZGVvRWxlbWVudH1cbiAgICAgKiBAZmlyZXMgTWVkaWEjY2FucGxheVxuICAgICAqL1xuICAgIGNyZWF0ZVZpZGVvRWxlbWVudDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IHRoaXMuZGlzcGF0Y2hFdmVudC5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3ZpZGVvJyApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWaWRlbyBjYW4gcGxheSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgTWVkaWEjY2FucGxheVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY2FuUGxheSA9ICgpID0+IGRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NhbnBsYXknIH0gKTtcbiAgICAgICAgXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSggJ2F1dG9wbGF5JywgJycgKTtcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAnbXV0ZWQnLCAnJyApO1xuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICdwbGF5c2lubGluZScsICcnICk7XG5cbiAgICAgICAgdmlkZW8uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB2aWRlby5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHZpZGVvLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHZpZGVvLnN0eWxlLm9iamVjdFBvc2l0aW9uID0gJ2NlbnRlcic7XG4gICAgICAgIHZpZGVvLnN0eWxlLm9iamVjdEZpdCA9ICdjb3Zlcic7XG4gICAgICAgIHZpZGVvLnN0eWxlLmRpc3BsYXkgPSB0aGlzLnNjZW5lID8gJ25vbmUnIDogJyc7XG5cbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2NhbnBsYXknLCBjYW5QbGF5ICk7XG5cbiAgICAgICAgcmV0dXJuIHZpZGVvO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIHdpbmRvdyByZXNpemUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC52aWRlb1dpZHRoICYmIHRoaXMuZWxlbWVudC52aWRlb0hlaWdodCAmJiB0aGlzLnNjZW5lICkge1xuXG4gICAgICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoOiB3aWR0aCwgY2xpZW50SGVpZ2h0OiBoZWlnaHQgfSA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuc2NlbmUuYmFja2dyb3VuZDtcbiAgICAgICAgICAgIGNvbnN0IHsgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQgfSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYVJhdGlvID0gdmlkZW9IZWlnaHQgLyB2aWRlb1dpZHRoO1xuICAgICAgICAgICAgY29uc3Qgdmlld3BvcnRSYXRpbyA9IHRoaXMuY29udGFpbmVyID8gd2lkdGggLyBoZWlnaHQgOiAxLjA7XG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IGNhbWVyYVJhdGlvICogdmlld3BvcnRSYXRpbyAqIHRoaXMucmF0aW9TY2FsYXI7XG5cbiAgICAgICAgICAgIGlmICggd2lkdGggPiBoZWlnaHQgKSB7XG4gICAgICAgICAgICAgICAgdGV4dHVyZS5yZXBlYXQuc2V0KCByYXRpbywgMSApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLnJlcGVhdC5zZXQoIDEsIDEgLyByYXRpbyApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxufSApO1xuXG5leHBvcnQgeyBNZWRpYSB9OyIsIlxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgUmV0aWNsZSAzRCBTcHJpdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtUSFJFRS5Db2xvcn0gW2NvbG9yPTB4ZmZmZmZmXSAtIENvbG9yIG9mIHRoZSByZXRpY2xlIHNwcml0ZVxuICogQHBhcmFtIHtib29sZWFufSBbYXV0b1NlbGVjdD10cnVlXSAtIEF1dG8gc2VsZWN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gW2R3ZWxsVGltZT0xNTAwXSAtIER1cmF0aW9uIGZvciBkd2VsbGluZyBzZXF1ZW5jZSB0byBjb21wbGV0ZVxuICovXG5cbmZ1bmN0aW9uIFJldGljbGUgKCBjb2xvciA9IDB4ZmZmZmZmLCBhdXRvU2VsZWN0ID0gdHJ1ZSwgZHdlbGxUaW1lID0gMTUwMCApIHtcblxuICAgIHRoaXMuZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICBjb25zdCB7IGNhbnZhcywgY29udGV4dCB9ID0gdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TcHJpdGVNYXRlcmlhbCggeyBjb2xvciwgbWFwOiB0aGlzLmNyZWF0ZUNhbnZhc1RleHR1cmUoIGNhbnZhcyApIH0gKTtcblxuICAgIFRIUkVFLlNwcml0ZS5jYWxsKCB0aGlzLCBtYXRlcmlhbCApO1xuXG4gICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgaW5zdGFuY2VvZiBUSFJFRS5Db2xvciA/IGNvbG9yIDogbmV3IFRIUkVFLkNvbG9yKCBjb2xvciApOyAgICBcblxuICAgIHRoaXMuYXV0b1NlbGVjdCA9IGF1dG9TZWxlY3Q7XG4gICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XG4gICAgdGhpcy5yaXBwbGVEdXJhdGlvbiA9IDUwMDtcbiAgICB0aGlzLnBvc2l0aW9uLnogPSAtMTA7XG4gICAgdGhpcy5jZW50ZXIuc2V0KCAwLjUsIDAuNSApO1xuICAgIHRoaXMuc2NhbGUuc2V0KCAwLjUsIDAuNSwgMSApO1xuXG4gICAgdGhpcy5zdGFydFRpbWVzdGFtcCA9IG51bGw7XG4gICAgdGhpcy50aW1lcklkID0gbnVsbDtcbiAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcblxuICAgIHRoaXMuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy51cGRhdGVDYW52YXNBcmNCeVByb2dyZXNzKCAwICk7XG5cbn07XG5cblJldGljbGUucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuU3ByaXRlLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogUmV0aWNsZSxcblxuICAgIC8qKlxuICAgICAqIFNldCBtYXRlcmlhbCBjb2xvclxuICAgICAqIEBwYXJhbSB7VEhSRUUuQ29sb3J9IGNvbG9yIFxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Q29sb3I6IGZ1bmN0aW9uICggY29sb3IgKSB7XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbC5jb2xvci5jb3B5KCBjb2xvciBpbnN0YW5jZW9mIFRIUkVFLkNvbG9yID8gY29sb3IgOiBuZXcgVEhSRUUuQ29sb3IoIGNvbG9yICkgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgY2FudmFzIHRleHR1cmVcbiAgICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7VEhSRUUuQ2FudmFzVGV4dHVyZX1cbiAgICAgKi9cbiAgICBjcmVhdGVDYW52YXNUZXh0dXJlOiBmdW5jdGlvbiAoIGNhbnZhcyApIHtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoIGNhbnZhcyApO1xuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgIHRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGNhbnZhcyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7SFRNTENhbnZhc0VsZW1lbnR9IG9iamVjdC5jYW52YXNcbiAgICAgKiBAcmV0dXJucyB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBvYmplY3QuY29udGV4dFxuICAgICAqL1xuICAgIGNyZWF0ZUNhbnZhczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gMzI7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDMyO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcbiAgICAgICAgY29uc3QgZHByID0gdGhpcy5kcHI7XG5cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGggKiBkcHI7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBkcHI7XG4gICAgICAgIGNvbnRleHQuc2NhbGUoIGRwciwgZHByICk7XG5cbiAgICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gNTtcbiAgICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9ICdyZ2JhKDIwMCwyMDAsMjAwLDAuOSknO1xuXG4gICAgICAgIHJldHVybiB7IGNhbnZhcywgY29udGV4dCB9O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYW52YXMgYXJjIGJ5IHByb2dyZXNzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2dyZXNzIFxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzczogZnVuY3Rpb24gKCBwcm9ncmVzcyApIHtcblxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCB7IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIG1hdGVyaWFsIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBkcHIgPSB0aGlzLmRwcjtcbiAgICAgICAgY29uc3QgZGVncmVlID0gcHJvZ3Jlc3MgKiBNYXRoLlBJICogMjtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yLmdldFN0eWxlKCk7XG4gICAgICAgIGNvbnN0IHggPSBjYW52YXNXaWR0aCAqIDAuNSAvIGRwcjtcbiAgICAgICAgY29uc3QgeSA9IGNhbnZhc0hlaWdodCAqIDAuNSAvIGRwcjtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMztcbiAgICAgICAgXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgaWYgKCBwcm9ncmVzcyA9PT0gMCApIHtcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKCB4LCB5LCBjYW52YXNXaWR0aCAvIDE2LCAwLCAyICogTWF0aC5QSSApO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5hcmMoIHgsIHksIGNhbnZhc1dpZHRoIC8gNCAtIGxpbmVXaWR0aCwgLU1hdGguUEkgLyAyLCAtTWF0aC5QSSAvIDIgKyBkZWdyZWUgKTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgbWF0ZXJpYWwubWFwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSaXBwbGUgZWZmZWN0XG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1zdGFydFxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtcmlwcGxlLWVuZFxuICAgICAqL1xuICAgIHJpcHBsZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHsgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgbWF0ZXJpYWwgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5yaXBwbGVEdXJhdGlvbjtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY29uc3QgZHByID0gdGhpcy5kcHI7XG4gICAgICAgIGNvbnN0IHggPSBjYW52YXNXaWR0aCAqIDAuNSAvIGRwcjtcbiAgICAgICAgY29uc3QgeSA9IGNhbnZhc0hlaWdodCAqIDAuNSAvIGRwcjtcblxuICAgICAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWVySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB1cGRhdGUgKTtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gZWxhcHNlZCAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IDEuMCAtIHByb2dyZXNzID4gMCA/IDEuMCAtIHByb2dyZXNzIDogMDtcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IHByb2dyZXNzICogY2FudmFzV2lkdGggKiAwLjUgLyBkcHI7XG5cbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5hcmMoIHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIgKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoJHtjb2xvci5yICogMjU1fSwgJHtjb2xvci5nICogMjU1fSwgJHtjb2xvci5iICogMjU1fSwgJHtvcGFjaXR5fSlgO1xuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAoIHByb2dyZXNzID49IDEuMCApIHtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGltZXJJZCApO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyggMCApO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogUmV0aWNsZSByaXBwbGUgZW5kIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1lbmRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtcmlwcGxlLWVuZCcgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGVyaWFsLm1hcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0aWNsZSByaXBwbGUgc3RhcnQgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFJldGljbGUjcmV0aWNsZS1yaXBwbGUtc3RhcnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1yaXBwbGUtc3RhcnQnIH0gKTtcblxuICAgICAgICB1cGRhdGUoKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIHJldGljbGUgdmlzaWJsZVxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFrZSByZXRpY2xlIGludmlzaWJsZVxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGR3ZWxsaW5nXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLXN0YXJ0XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5hdXRvU2VsZWN0ICkge1xuXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXRpY2xlIHN0YXJ0IGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtc3RhcnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1zdGFydCcgfSApO1xuXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuZCBkd2VsbGluZ1xuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS1lbmRcbiAgICAgKi9cbiAgICBlbmQ6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5zdGFydFRpbWVzdGFtcCApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnRpbWVySWQgKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3MoIDAgKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXRpY2xlIGVuZCBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLWVuZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdyZXRpY2xlLWVuZCcgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBkd2VsbGluZ1xuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS11cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnRpbWVySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLnVwZGF0ZS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICBjb25zdCBlbGFwc2VkID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGVsYXBzZWQgLyB0aGlzLmR3ZWxsVGltZTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3MoIHByb2dyZXNzICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldGljbGUgdXBkYXRlIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtdXBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtdXBkYXRlJywgcHJvZ3Jlc3MgfSApO1xuXG4gICAgICAgIGlmICggcHJvZ3Jlc3MgPj0gMS4wICkge1xuXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMudGltZXJJZCApO1xuICAgICAgICAgICAgaWYgKCB0aGlzLmNhbGxiYWNrICkgeyB0aGlzLmNhbGxiYWNrKCk7IH1cbiAgICAgICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZSgpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufSApO1xuXG5leHBvcnQgeyBSZXRpY2xlIH07IiwiLyoqXG4gKiBUd2Vlbi5qcyAtIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanMvZ3JhcGhzL2NvbnRyaWJ1dG9ycyBmb3IgdGhlIGZ1bGwgbGlzdCBvZiBjb250cmlidXRvcnMuXG4gKiBUaGFuayB5b3UgYWxsLCB5b3UncmUgYXdlc29tZSFcbiAqL1xuXG5cbnZhciBfR3JvdXAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX3R3ZWVucyA9IHt9O1xuXHR0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZSA9IHt9O1xufTtcblxuX0dyb3VwLnByb3RvdHlwZSA9IHtcblx0Z2V0QWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fdHdlZW5zKS5tYXAoZnVuY3Rpb24gKHR3ZWVuSWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl90d2VlbnNbdHdlZW5JZF07XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9LFxuXG5cdHJlbW92ZUFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy5fdHdlZW5zID0ge307XG5cblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uICh0d2Vlbikge1xuXG5cdFx0dGhpcy5fdHdlZW5zW3R3ZWVuLmdldElkKCldID0gdHdlZW47XG5cdFx0dGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGVbdHdlZW4uZ2V0SWQoKV0gPSB0d2VlbjtcblxuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24gKHR3ZWVuKSB7XG5cblx0XHRkZWxldGUgdGhpcy5fdHdlZW5zW3R3ZWVuLmdldElkKCldO1xuXHRcdGRlbGV0ZSB0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZVt0d2Vlbi5nZXRJZCgpXTtcblxuXHR9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24gKHRpbWUsIHByZXNlcnZlKSB7XG5cblx0XHR2YXIgdHdlZW5JZHMgPSBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnMpO1xuXG5cdFx0aWYgKHR3ZWVuSWRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRpbWUgPSB0aW1lICE9PSB1bmRlZmluZWQgPyB0aW1lIDogVFdFRU4ubm93KCk7XG5cblx0XHQvLyBUd2VlbnMgYXJlIHVwZGF0ZWQgaW4gXCJiYXRjaGVzXCIuIElmIHlvdSBhZGQgYSBuZXcgdHdlZW4gZHVyaW5nIGFuIHVwZGF0ZSwgdGhlbiB0aGVcblx0XHQvLyBuZXcgdHdlZW4gd2lsbCBiZSB1cGRhdGVkIGluIHRoZSBuZXh0IGJhdGNoLlxuXHRcdC8vIElmIHlvdSByZW1vdmUgYSB0d2VlbiBkdXJpbmcgYW4gdXBkYXRlLCBpdCBtYXkgb3IgbWF5IG5vdCBiZSB1cGRhdGVkLiBIb3dldmVyLFxuXHRcdC8vIGlmIHRoZSByZW1vdmVkIHR3ZWVuIHdhcyBhZGRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgYmF0Y2gsIHRoZW4gaXQgd2lsbCBub3QgYmUgdXBkYXRlZC5cblx0XHR3aGlsZSAodHdlZW5JZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGUgPSB7fTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0d2Vlbklkcy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRcdHZhciB0d2VlbiA9IHRoaXMuX3R3ZWVuc1t0d2Vlbklkc1tpXV07XG5cblx0XHRcdFx0aWYgKHR3ZWVuICYmIHR3ZWVuLnVwZGF0ZSh0aW1lKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0d2Vlbi5faXNQbGF5aW5nID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoIXByZXNlcnZlKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5fdHdlZW5zW3R3ZWVuSWRzW2ldXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dHdlZW5JZHMgPSBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fVxufTtcblxudmFyIFRXRUVOID0gbmV3IF9Hcm91cCgpO1xuXG5UV0VFTi5Hcm91cCA9IF9Hcm91cDtcblRXRUVOLl9uZXh0SWQgPSAwO1xuVFdFRU4ubmV4dElkID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gVFdFRU4uX25leHRJZCsrO1xufTtcblxuXG4vLyBJbmNsdWRlIGEgcGVyZm9ybWFuY2Uubm93IHBvbHlmaWxsLlxuLy8gSW4gbm9kZS5qcywgdXNlIHByb2Nlc3MuaHJ0aW1lLlxuaWYgKHR5cGVvZiAoc2VsZikgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAocHJvY2VzcykgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG5cdFRXRUVOLm5vdyA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG5cblx0XHQvLyBDb252ZXJ0IFtzZWNvbmRzLCBuYW5vc2Vjb25kc10gdG8gbWlsbGlzZWNvbmRzLlxuXHRcdHJldHVybiB0aW1lWzBdICogMTAwMCArIHRpbWVbMV0gLyAxMDAwMDAwO1xuXHR9O1xufVxuLy8gSW4gYSBicm93c2VyLCB1c2Ugc2VsZi5wZXJmb3JtYW5jZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAodHlwZW9mIChzZWxmKSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgIHNlbGYucGVyZm9ybWFuY2UgIT09IHVuZGVmaW5lZCAmJlxuXHRcdCBzZWxmLnBlcmZvcm1hbmNlLm5vdyAhPT0gdW5kZWZpbmVkKSB7XG5cdC8vIFRoaXMgbXVzdCBiZSBib3VuZCwgYmVjYXVzZSBkaXJlY3RseSBhc3NpZ25pbmcgdGhpcyBmdW5jdGlvblxuXHQvLyBsZWFkcyB0byBhbiBpbnZvY2F0aW9uIGV4Y2VwdGlvbiBpbiBDaHJvbWUuXG5cdFRXRUVOLm5vdyA9IHNlbGYucGVyZm9ybWFuY2Uubm93LmJpbmQoc2VsZi5wZXJmb3JtYW5jZSk7XG59XG4vLyBVc2UgRGF0ZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAoRGF0ZS5ub3cgIT09IHVuZGVmaW5lZCkge1xuXHRUV0VFTi5ub3cgPSBEYXRlLm5vdztcbn1cbi8vIE90aGVyd2lzZSwgdXNlICduZXcgRGF0ZSgpLmdldFRpbWUoKScuXG5lbHNlIHtcblx0VFdFRU4ubm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fTtcbn1cblxuXG5UV0VFTi5Ud2VlbiA9IGZ1bmN0aW9uIChvYmplY3QsIGdyb3VwKSB7XG5cdHRoaXMuX29iamVjdCA9IG9iamVjdDtcblx0dGhpcy5fdmFsdWVzU3RhcnQgPSB7fTtcblx0dGhpcy5fdmFsdWVzRW5kID0ge307XG5cdHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG5cdHRoaXMuX2R1cmF0aW9uID0gMTAwMDtcblx0dGhpcy5fcmVwZWF0ID0gMDtcblx0dGhpcy5fcmVwZWF0RGVsYXlUaW1lID0gdW5kZWZpbmVkO1xuXHR0aGlzLl95b3lvID0gZmFsc2U7XG5cdHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xuXHR0aGlzLl9yZXZlcnNlZCA9IGZhbHNlO1xuXHR0aGlzLl9kZWxheVRpbWUgPSAwO1xuXHR0aGlzLl9zdGFydFRpbWUgPSBudWxsO1xuXHR0aGlzLl9lYXNpbmdGdW5jdGlvbiA9IFRXRUVOLkVhc2luZy5MaW5lYXIuTm9uZTtcblx0dGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5MaW5lYXI7XG5cdHRoaXMuX2NoYWluZWRUd2VlbnMgPSBbXTtcblx0dGhpcy5fb25TdGFydENhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcblx0dGhpcy5fb25VcGRhdGVDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vblN0b3BDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX2dyb3VwID0gZ3JvdXAgfHwgVFdFRU47XG5cdHRoaXMuX2lkID0gVFdFRU4ubmV4dElkKCk7XG5cbn07XG5cblRXRUVOLlR3ZWVuLnByb3RvdHlwZSA9IHtcblx0Z2V0SWQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWQ7XG5cdH0sXG5cblx0aXNQbGF5aW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzUGxheWluZztcblx0fSxcblxuXHR0bzogZnVuY3Rpb24gKHByb3BlcnRpZXMsIGR1cmF0aW9uKSB7XG5cblx0XHR0aGlzLl92YWx1ZXNFbmQgPSBPYmplY3QuY3JlYXRlKHByb3BlcnRpZXMpO1xuXG5cdFx0aWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRkdXJhdGlvbjogZnVuY3Rpb24gZHVyYXRpb24oZCkge1xuXHRcdHRoaXMuX2R1cmF0aW9uID0gZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzdGFydDogZnVuY3Rpb24gKHRpbWUpIHtcblxuXHRcdHRoaXMuX2dyb3VwLmFkZCh0aGlzKTtcblxuXHRcdHRoaXMuX2lzUGxheWluZyA9IHRydWU7XG5cblx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fc3RhcnRUaW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdHlwZW9mIHRpbWUgPT09ICdzdHJpbmcnID8gVFdFRU4ubm93KCkgKyBwYXJzZUZsb2F0KHRpbWUpIDogdGltZSA6IFRXRUVOLm5vdygpO1xuXHRcdHRoaXMuX3N0YXJ0VGltZSArPSB0aGlzLl9kZWxheVRpbWU7XG5cblx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNFbmQpIHtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYW4gQXJyYXkgd2FzIHByb3ZpZGVkIGFzIHByb3BlcnR5IHZhbHVlXG5cdFx0XHRpZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cblx0XHRcdFx0aWYgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgYSBsb2NhbCBjb3B5IG9mIHRoZSBBcnJheSB3aXRoIHRoZSBzdGFydCB2YWx1ZSBhdCB0aGUgZnJvbnRcblx0XHRcdFx0dGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IFt0aGlzLl9vYmplY3RbcHJvcGVydHldXS5jb25jYXQodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYHRvKClgIHNwZWNpZmllcyBhIHByb3BlcnR5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdCxcblx0XHRcdC8vIHdlIHNob3VsZCBub3Qgc2V0IHRoYXQgcHJvcGVydHkgaW4gdGhlIG9iamVjdFxuXHRcdFx0aWYgKHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2F2ZSB0aGUgc3RhcnRpbmcgdmFsdWUuXG5cdFx0XHR0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl9vYmplY3RbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoKHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldICo9IDEuMDsgLy8gRW5zdXJlcyB3ZSdyZSB1c2luZyBudW1iZXJzLCBub3Qgc3RyaW5nc1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c3RvcDogZnVuY3Rpb24gKCkge1xuXG5cdFx0aWYgKCF0aGlzLl9pc1BsYXlpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHRoaXMuX2dyb3VwLnJlbW92ZSh0aGlzKTtcblx0XHR0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLl9vblN0b3BDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fb25TdG9wQ2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3BDaGFpbmVkVHdlZW5zKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMudXBkYXRlKEluZmluaXR5KTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHN0b3BDaGFpbmVkVHdlZW5zOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IHRoaXMuX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XG5cdFx0XHR0aGlzLl9jaGFpbmVkVHdlZW5zW2ldLnN0b3AoKTtcblx0XHR9XG5cblx0fSxcblxuXHRncm91cDogZnVuY3Rpb24gKGdyb3VwKSB7XG5cdFx0dGhpcy5fZ3JvdXAgPSBncm91cDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkZWxheTogZnVuY3Rpb24gKGFtb3VudCkge1xuXG5cdFx0dGhpcy5fZGVsYXlUaW1lID0gYW1vdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0cmVwZWF0OiBmdW5jdGlvbiAodGltZXMpIHtcblxuXHRcdHRoaXMuX3JlcGVhdCA9IHRpbWVzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0cmVwZWF0RGVsYXk6IGZ1bmN0aW9uIChhbW91bnQpIHtcblxuXHRcdHRoaXMuX3JlcGVhdERlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHlveW86IGZ1bmN0aW9uICh5b3lvKSB7XG5cblx0XHR0aGlzLl95b3lvID0geW95bztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGVhc2luZzogZnVuY3Rpb24gKGVhc2luZ0Z1bmN0aW9uKSB7XG5cblx0XHR0aGlzLl9lYXNpbmdGdW5jdGlvbiA9IGVhc2luZ0Z1bmN0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0aW50ZXJwb2xhdGlvbjogZnVuY3Rpb24gKGludGVycG9sYXRpb25GdW5jdGlvbikge1xuXG5cdFx0dGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gaW50ZXJwb2xhdGlvbkZ1bmN0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0Y2hhaW46IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMuX2NoYWluZWRUd2VlbnMgPSBhcmd1bWVudHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvblN0YXJ0OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25VcGRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25SZXBlYXQ6IGZ1bmN0aW9uIG9uUmVwZWF0KGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vblJlcGVhdENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvbkNvbXBsZXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25TdG9wOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHR2YXIgcHJvcGVydHk7XG5cdFx0dmFyIGVsYXBzZWQ7XG5cdFx0dmFyIHZhbHVlO1xuXG5cdFx0aWYgKHRpbWUgPCB0aGlzLl9zdGFydFRpbWUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9PT0gZmFsc2UpIHtcblxuXHRcdFx0aWYgKHRoaXMuX29uU3RhcnRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGVsYXBzZWQgPSAodGltZSAtIHRoaXMuX3N0YXJ0VGltZSkgLyB0aGlzLl9kdXJhdGlvbjtcblx0XHRlbGFwc2VkID0gKHRoaXMuX2R1cmF0aW9uID09PSAwIHx8IGVsYXBzZWQgPiAxKSA/IDEgOiBlbGFwc2VkO1xuXG5cdFx0dmFsdWUgPSB0aGlzLl9lYXNpbmdGdW5jdGlvbihlbGFwc2VkKTtcblxuXHRcdGZvciAocHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzRW5kKSB7XG5cblx0XHRcdC8vIERvbid0IHVwZGF0ZSBwcm9wZXJ0aWVzIHRoYXQgZG8gbm90IGV4aXN0IGluIHRoZSBzb3VyY2Ugb2JqZWN0XG5cdFx0XHRpZiAodGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzdGFydCA9IHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xuXHRcdFx0dmFyIGVuZCA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG5cblx0XHRcdGlmIChlbmQgaW5zdGFuY2VvZiBBcnJheSkge1xuXG5cdFx0XHRcdHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPSB0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24oZW5kLCB2YWx1ZSk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFyc2VzIHJlbGF0aXZlIGVuZCB2YWx1ZXMgd2l0aCBzdGFydCBhcyBiYXNlIChlLmcuOiArMTAsIC0zKVxuXHRcdFx0XHRpZiAodHlwZW9mIChlbmQpID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRcdFx0aWYgKGVuZC5jaGFyQXQoMCkgPT09ICcrJyB8fCBlbmQuY2hhckF0KDApID09PSAnLScpIHtcblx0XHRcdFx0XHRcdGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbmQgPSBwYXJzZUZsb2F0KGVuZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvdGVjdCBhZ2FpbnN0IG5vbiBudW1lcmljIHByb3BlcnRpZXMuXG5cdFx0XHRcdGlmICh0eXBlb2YgKGVuZCkgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0dGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9vblVwZGF0ZUNhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9vblVwZGF0ZUNhbGxiYWNrKHRoaXMuX29iamVjdCwgZWxhcHNlZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsYXBzZWQgPT09IDEpIHtcblxuXHRcdFx0aWYgKHRoaXMuX3JlcGVhdCA+IDApIHtcblxuXHRcdFx0XHRpZiAoaXNGaW5pdGUodGhpcy5fcmVwZWF0KSkge1xuXHRcdFx0XHRcdHRoaXMuX3JlcGVhdC0tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVhc3NpZ24gc3RhcnRpbmcgdmFsdWVzLCByZXN0YXJ0IGJ5IG1ha2luZyBzdGFydFRpbWUgPSBub3dcblx0XHRcdFx0Zm9yIChwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdCkge1xuXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gKyBwYXJzZUZsb2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICh0aGlzLl95b3lvKSB7XG5cdFx0XHRcdFx0XHR2YXIgdG1wID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldO1xuXHRcdFx0XHRcdFx0dGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IHRtcDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl95b3lvKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmV2ZXJzZWQgPSAhdGhpcy5fcmV2ZXJzZWQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fcmVwZWF0RGVsYXlUaW1lICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSB0aW1lICsgdGhpcy5fcmVwZWF0RGVsYXlUaW1lO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgKyB0aGlzLl9kZWxheVRpbWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fb25SZXBlYXRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICh0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcblxuXHRcdFx0XHRcdHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSB0aGlzLl9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKykge1xuXHRcdFx0XHRcdC8vIE1ha2UgdGhlIGNoYWluZWQgdHdlZW5zIHN0YXJ0IGV4YWN0bHkgYXQgdGhlIHRpbWUgdGhleSBzaG91bGQsXG5cdFx0XHRcdFx0Ly8gZXZlbiBpZiB0aGUgYHVwZGF0ZSgpYCBtZXRob2Qgd2FzIGNhbGxlZCB3YXkgcGFzdCB0aGUgZHVyYXRpb24gb2YgdGhlIHR3ZWVuXG5cdFx0XHRcdFx0dGhpcy5fY2hhaW5lZFR3ZWVuc1tpXS5zdGFydCh0aGlzLl9zdGFydFRpbWUgKyB0aGlzLl9kdXJhdGlvbik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXG5cdH1cbn07XG5cblxuVFdFRU4uRWFzaW5nID0ge1xuXG5cdExpbmVhcjoge1xuXG5cdFx0Tm9uZTogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGs7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFkcmF0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqICgyIC0gayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoLS1rICogKGsgLSAyKSAtIDEpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q3ViaWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1YXJ0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gKC0tayAqIGsgKiBrICogayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICogayAtIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVpbnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayAqIGsgKiBrICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgKiBrICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRTaW51c29pZGFsOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLmNvcyhrICogTWF0aC5QSSAvIDIpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc2luKGsgKiBNYXRoLlBJIC8gMik7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRFeHBvbmVudGlhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIGsgLSAxKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtIDEwICogayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgayAtIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKC0gTWF0aC5wb3coMiwgLSAxMCAqIChrIC0gMSkpICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDaXJjdWxhcjoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBrICogayk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zcXJ0KDEgLSAoLS1rICogaykpO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtIDAuNSAqIChNYXRoLnNxcnQoMSAtIGsgKiBrKSAtIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKGsgLT0gMikgKiBrKSArIDEpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RWxhc3RpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqIChrIC0gMSkpICogTWF0aC5zaW4oKGsgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gTWF0aC5wb3coMiwgLTEwICogaykgKiBNYXRoLnNpbigoayAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGsgKj0gMjtcblxuXHRcdFx0aWYgKGsgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqIChrIC0gMSkpICogTWF0aC5zaW4oKGsgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJhY2s6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cblx0XHRcdHJldHVybiBrICogayAqICgocyArIDEpICogayAtIHMpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqICgocyArIDEpICogayArIHMpICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIChrICogayAqICgocyArIDEpICogayAtIHMpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Qm91bmNlOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBUV0VFTi5FYXNpbmcuQm91bmNlLk91dCgxIC0gayk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA8ICgxIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIGsgKiBrO1xuXHRcdFx0fSBlbHNlIGlmIChrIDwgKDIgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDEuNSAvIDIuNzUpKSAqIGsgKyAwLjc1O1xuXHRcdFx0fSBlbHNlIGlmIChrIDwgKDIuNSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMi4yNSAvIDIuNzUpKSAqIGsgKyAwLjkzNzU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuNjI1IC8gMi43NSkpICogayArIDAuOTg0Mzc1O1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA8IDAuNSkge1xuXHRcdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5JbihrICogMikgKiAwLjU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLk91dChrICogMiAtIDEpICogMC41ICsgMC41O1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuVFdFRU4uSW50ZXJwb2xhdGlvbiA9IHtcblxuXHRMaW5lYXI6IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgZiA9IG0gKiBrO1xuXHRcdHZhciBpID0gTWF0aC5mbG9vcihmKTtcblx0XHR2YXIgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkxpbmVhcjtcblxuXHRcdGlmIChrIDwgMCkge1xuXHRcdFx0cmV0dXJuIGZuKHZbMF0sIHZbMV0sIGYpO1xuXHRcdH1cblxuXHRcdGlmIChrID4gMSkge1xuXHRcdFx0cmV0dXJuIGZuKHZbbV0sIHZbbSAtIDFdLCBtIC0gZik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKHZbaV0sIHZbaSArIDEgPiBtID8gbSA6IGkgKyAxXSwgZiAtIGkpO1xuXG5cdH0sXG5cblx0QmV6aWVyOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIGIgPSAwO1xuXHRcdHZhciBuID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBwdyA9IE1hdGgucG93O1xuXHRcdHZhciBibiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQmVybnN0ZWluO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG5cdFx0XHRiICs9IHB3KDEgLSBrLCBuIC0gaSkgKiBwdyhrLCBpKSAqIHZbaV0gKiBibihuLCBpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYjtcblxuXHR9LFxuXG5cdENhdG11bGxSb206IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgZiA9IG0gKiBrO1xuXHRcdHZhciBpID0gTWF0aC5mbG9vcihmKTtcblx0XHR2YXIgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkNhdG11bGxSb207XG5cblx0XHRpZiAodlswXSA9PT0gdlttXSkge1xuXG5cdFx0XHRpZiAoayA8IDApIHtcblx0XHRcdFx0aSA9IE1hdGguZmxvb3IoZiA9IG0gKiAoMSArIGspKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuKHZbKGkgLSAxICsgbSkgJSBtXSwgdltpXSwgdlsoaSArIDEpICUgbV0sIHZbKGkgKyAyKSAlIG1dLCBmIC0gaSk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAoayA8IDApIHtcblx0XHRcdFx0cmV0dXJuIHZbMF0gLSAoZm4odlswXSwgdlswXSwgdlsxXSwgdlsxXSwgLWYpIC0gdlswXSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID4gMSkge1xuXHRcdFx0XHRyZXR1cm4gdlttXSAtIChmbih2W21dLCB2W21dLCB2W20gLSAxXSwgdlttIC0gMV0sIGYgLSBtKSAtIHZbbV0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm4odltpID8gaSAtIDEgOiAwXSwgdltpXSwgdlttIDwgaSArIDEgPyBtIDogaSArIDFdLCB2W20gPCBpICsgMiA/IG0gOiBpICsgMl0sIGYgLSBpKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFV0aWxzOiB7XG5cblx0XHRMaW5lYXI6IGZ1bmN0aW9uIChwMCwgcDEsIHQpIHtcblxuXHRcdFx0cmV0dXJuIChwMSAtIHAwKSAqIHQgKyBwMDtcblxuXHRcdH0sXG5cblx0XHRCZXJuc3RlaW46IGZ1bmN0aW9uIChuLCBpKSB7XG5cblx0XHRcdHZhciBmYyA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuRmFjdG9yaWFsO1xuXG5cdFx0XHRyZXR1cm4gZmMobikgLyBmYyhpKSAvIGZjKG4gLSBpKTtcblxuXHRcdH0sXG5cblx0XHRGYWN0b3JpYWw6IChmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHZhciBhID0gWzFdO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKG4pIHtcblxuXHRcdFx0XHR2YXIgcyA9IDE7XG5cblx0XHRcdFx0aWYgKGFbbl0pIHtcblx0XHRcdFx0XHRyZXR1cm4gYVtuXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSBuOyBpID4gMTsgaS0tKSB7XG5cdFx0XHRcdFx0cyAqPSBpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YVtuXSA9IHM7XG5cdFx0XHRcdHJldHVybiBzO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSkoKSxcblxuXHRcdENhdG11bGxSb206IGZ1bmN0aW9uIChwMCwgcDEsIHAyLCBwMywgdCkge1xuXG5cdFx0XHR2YXIgdjAgPSAocDIgLSBwMCkgKiAwLjU7XG5cdFx0XHR2YXIgdjEgPSAocDMgLSBwMSkgKiAwLjU7XG5cdFx0XHR2YXIgdDIgPSB0ICogdDtcblx0XHRcdHZhciB0MyA9IHQgKiB0MjtcblxuXHRcdFx0cmV0dXJuICgyICogcDEgLSAyICogcDIgKyB2MCArIHYxKSAqIHQzICsgKC0gMyAqIHAxICsgMyAqIHAyIC0gMiAqIHYwIC0gdjEpICogdDIgKyB2MCAqIHQgKyBwMTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cbi8vIFVNRCAoVW5pdmVyc2FsIE1vZHVsZSBEZWZpbml0aW9uKVxuKGZ1bmN0aW9uIChyb290KSB7XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gVFdFRU47XG5cdFx0fSk7XG5cblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblxuXHRcdC8vIE5vZGUuanNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IFRXRUVOO1xuXG5cdH0gZWxzZSBpZiAocm9vdCAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHQvLyBHbG9iYWwgdmFyaWFibGVcblx0XHRyb290LlRXRUVOID0gVFdFRU47XG5cblx0fVxuXG59KSh0aGlzKTtcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XG5pbXBvcnQgeyBNT0RFUyB9IGZyb20gJy4uL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi4vbG9hZGVycy9UZXh0dXJlTG9hZGVyJztcbmltcG9ydCBUV0VFTiBmcm9tICdAdHdlZW5qcy90d2Vlbi5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBJbmZvcm1hdGlvbiBzcG90IGF0dGFjaGVkIHRvIHBhbm9yYW1hXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2NhbGU9MzAwXSAtIERlZmF1bHQgc2NhbGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaW1hZ2VTcmM9UEFOT0xFTlMuRGF0YUltYWdlLkluZm9dIC0gSW1hZ2Ugb3ZlcmxheSBpbmZvXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthbmltYXRlZD10cnVlXSAtIEVuYWJsZSBkZWZhdWx0IGhvdmVyIGFuaW1hdGlvblxuICovXG5mdW5jdGlvbiBJbmZvc3BvdCAoIHNjYWxlID0gMzAwLCBpbWFnZVNyYywgYW5pbWF0ZWQgKSB7XG5cdFxuICAgIGNvbnN0IGR1cmF0aW9uID0gNTAwLCBzY2FsZUZhY3RvciA9IDEuMztcblxuICAgIGltYWdlU3JjID0gaW1hZ2VTcmMgfHwgRGF0YUltYWdlLkluZm87XG5cbiAgICBUSFJFRS5TcHJpdGUuY2FsbCggdGhpcyApO1xuXG4gICAgdGhpcy50eXBlID0gJ2luZm9zcG90JztcblxuICAgIHRoaXMuYW5pbWF0ZWQgPSBhbmltYXRlZCAhPT0gdW5kZWZpbmVkID8gYW5pbWF0ZWQgOiB0cnVlO1xuICAgIHRoaXMuaXNIb3ZlcmluZyA9IGZhbHNlO1xuXG4gICAgLypcbiAgICAgKiBUT0RPOiBUaHJlZS5qcyBidWcgaG90Zml4IGZvciBzcHJpdGUgcmF5Y2FzdGluZyByMTA0XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTQ2MjRcbiAgICAgKi9cbiAgICB0aGlzLmZydXN0dW1DdWxsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy50b1Bhbm9yYW1hID0gbnVsbDtcbiAgICB0aGlzLmN1cnNvclN0eWxlID0gbnVsbDtcblxuICAgIHRoaXMubW9kZSA9IE1PREVTLk5PUk1BTDtcblxuICAgIHRoaXMuc2NhbGUuc2V0KCBzY2FsZSwgc2NhbGUsIDEgKTtcbiAgICB0aGlzLnJvdGF0aW9uLnkgPSBNYXRoLlBJO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuXG4gICAgdGhpcy5vcmlnaW5hbFJheWNhc3QgPSB0aGlzLnJheWNhc3Q7XG5cbiAgICAvLyBFdmVudCBIYW5kbGVyXG4gICAgdGhpcy5IQU5ETEVSX0ZPQ1VTID0gbnVsbDtcdFxuXG4gICAgdGhpcy5tYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcbiAgICB0aGlzLm1hdGVyaWFsLmRlcHRoVGVzdCA9IGZhbHNlO1xuICAgIHRoaXMubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xuICAgIHRoaXMubWF0ZXJpYWwub3BhY2l0eSA9IDA7XG5cbiAgICB0aGlzLnNjYWxlVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcbiAgICB0aGlzLnNjYWxlRG93bkFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xuXG5cbiAgICBjb25zdCBwb3N0TG9hZCA9IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuICAgICAgICBpZiAoICF0aGlzLm1hdGVyaWFsICkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCByYXRpbyA9IHRleHR1cmUuaW1hZ2Uud2lkdGggLyB0ZXh0dXJlLmltYWdlLmhlaWdodDtcbiAgICAgICAgY29uc3QgdGV4dHVyZVNjYWxlID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICB0ZXh0dXJlLmltYWdlLndpZHRoID0gdGV4dHVyZS5pbWFnZS5uYXR1cmFsV2lkdGggfHwgNjQ7XG4gICAgICAgIHRleHR1cmUuaW1hZ2UuaGVpZ2h0ID0gdGV4dHVyZS5pbWFnZS5uYXR1cmFsSGVpZ2h0IHx8IDY0O1xuXG4gICAgICAgIHRoaXMuc2NhbGUuc2V0KCByYXRpbyAqIHNjYWxlLCBzY2FsZSwgMSApO1xuXG4gICAgICAgIHRleHR1cmVTY2FsZS5jb3B5KCB0aGlzLnNjYWxlICk7XG5cbiAgICAgICAgdGhpcy5zY2FsZVVwQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLnNjYWxlIClcbiAgICAgICAgICAgIC50byggeyB4OiB0ZXh0dXJlU2NhbGUueCAqIHNjYWxlRmFjdG9yLCB5OiB0ZXh0dXJlU2NhbGUueSAqIHNjYWxlRmFjdG9yIH0sIGR1cmF0aW9uIClcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5FbGFzdGljLk91dCApO1xuXG4gICAgICAgIHRoaXMuc2NhbGVEb3duQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLnNjYWxlIClcbiAgICAgICAgICAgIC50byggeyB4OiB0ZXh0dXJlU2NhbGUueCwgeTogdGV4dHVyZVNjYWxlLnkgfSwgZHVyYXRpb24gKVxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0ICk7XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbC5tYXAgPSB0ZXh0dXJlO1xuICAgICAgICB0aGlzLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIH0uYmluZCggdGhpcyApO1xuXG4gICAgLy8gQWRkIHNob3cgYW5kIGhpZGUgYW5pbWF0aW9uc1xuICAgIHRoaXMuc2hvd0FuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tYXRlcmlhbCApXG4gICAgICAgIC50byggeyBvcGFjaXR5OiAxIH0sIGR1cmF0aW9uIClcbiAgICAgICAgLm9uU3RhcnQoIHRoaXMuZW5hYmxlUmF5Y2FzdC5iaW5kKCB0aGlzLCB0cnVlICkgKVxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKTtcblxuICAgIHRoaXMuaGlkZUFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tYXRlcmlhbCApXG4gICAgICAgIC50byggeyBvcGFjaXR5OiAwIH0sIGR1cmF0aW9uIClcbiAgICAgICAgLm9uU3RhcnQoIHRoaXMuZW5hYmxlUmF5Y2FzdC5iaW5kKCB0aGlzLCBmYWxzZSApIClcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICk7XG5cbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLm9uQ2xpY2sgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdob3ZlcicsIHRoaXMub25Ib3ZlciApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2hvdmVyZW50ZXInLCB0aGlzLm9uSG92ZXJTdGFydCApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2hvdmVybGVhdmUnLCB0aGlzLm9uSG92ZXJFbmQgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3QnLCB0aGlzLm9uRHVhbEV5ZUVmZmVjdCApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIHRoaXMuc2V0Q29udGFpbmVyLmJpbmQoIHRoaXMgKSApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2Rpc21pc3MnLCB0aGlzLm9uRGlzbWlzcyApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWluZm9zcG90LWZvY3VzJywgdGhpcy5zZXRGb2N1c01ldGhvZCApO1xuXG4gICAgVGV4dHVyZUxvYWRlci5sb2FkKCBpbWFnZVNyYywgcG9zdExvYWQgKTtcdFxuXG59O1xuXG5JbmZvc3BvdC5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5TcHJpdGUucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBJbmZvc3BvdCxcblxuICAgIC8qKlxuICAgICAqIFNldCBpbmZvc3BvdCBjb250YWluZXJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG9iamVjdH0gZGF0YSAtIERhdGEgd2l0aCBjb250YWluZXIgaW5mb3JtYXRpb25cbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRDb250YWluZXI6IGZ1bmN0aW9uICggZGF0YSApIHtcblxuICAgICAgICBsZXQgY29udGFpbmVyO1xuXHRcbiAgICAgICAgaWYgKCBkYXRhIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSB7XG5cdFxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YTtcblx0XG4gICAgICAgIH0gZWxzZSBpZiAoIGRhdGEgJiYgZGF0YS5jb250YWluZXIgKSB7XG5cdFxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YS5jb250YWluZXI7XG5cdFxuICAgICAgICB9XG5cdFxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudCBpZiBleGlzdHNcbiAgICAgICAgaWYgKCBjb250YWluZXIgJiYgdGhpcy5lbGVtZW50ICkge1xuXHRcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCggdGhpcy5lbGVtZW50ICk7XG5cdFxuICAgICAgICB9XG5cdFxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgY29udGFpbmVyIG9mIHRoaXMgaW5mb3Nwb3RcbiAgICAgKi9cbiAgICBnZXRDb250YWluZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBieSBhIGNsaWNrIGV2ZW50XG4gICAgICogVHJhbnNsYXRlIGFuZCBsb2NrIHRoZSBob3ZlcmluZyBlbGVtZW50IGlmIGFueVxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBFdmVudCBjb250YWluaW5nIG1vdXNlRXZlbnQgd2l0aCBjbGllbnRYIGFuZCBjbGllbnRZXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25DbGljazogZnVuY3Rpb24gKCBldmVudCApIHtcblxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCAmJiB0aGlzLmdldENvbnRhaW5lcigpICkge1xuXG4gICAgICAgICAgICB0aGlzLm9uSG92ZXJTdGFydCggZXZlbnQgKTtcblxuICAgICAgICAgICAgLy8gTG9jayBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmxvY2tIb3ZlckVsZW1lbnQoKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzbWlzcyBjdXJyZW50IGVsZW1lbnQgaWYgYW55XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIERpc21pc3MgZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkRpc21pc3M6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCApIHtcblxuICAgICAgICAgICAgdGhpcy51bmxvY2tIb3ZlckVsZW1lbnQoKTtcbiAgICAgICAgICAgIHRoaXMub25Ib3ZlckVuZCgpO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGEgbW91c2UgaG92ZXIgZXZlbnRcbiAgICAgKiBUcmFuc2xhdGUgdGhlIGhvdmVyaW5nIGVsZW1lbnQgaWYgYW55XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIEV2ZW50IGNvbnRhaW5pbmcgbW91c2VFdmVudCB3aXRoIGNsaWVudFggYW5kIGNsaWVudFlcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkhvdmVyOiBmdW5jdGlvbiAoKSB7fSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgb24gYSBtb3VzZSBob3ZlciBzdGFydFxuICAgICAqIFNldHMgY3Vyc29yIHN0eWxlIHRvICdwb2ludGVyJywgZGlzcGxheSB0aGUgZWxlbWVudCBhbmQgc2NhbGUgdXAgdGhlIGluZm9zcG90XG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Ib3ZlclN0YXJ0OiBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IGN1cnNvclN0eWxlID0gdGhpcy5jdXJzb3JTdHlsZSB8fCAoIHRoaXMubW9kZSA9PT0gTU9ERVMuTk9STUFMID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnICk7XG4gICAgICAgIGNvbnN0IHsgc2NhbGVEb3duQW5pbWF0aW9uLCBzY2FsZVVwQW5pbWF0aW9uLCBlbGVtZW50IH0gPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaXNIb3ZlcmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmN1cnNvciA9IGN1cnNvclN0eWxlO1xuXHRcdFxuICAgICAgICBpZiAoIHRoaXMuYW5pbWF0ZWQgKSB7XG5cbiAgICAgICAgICAgIHNjYWxlRG93bkFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICBzY2FsZVVwQW5pbWF0aW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgfVxuXHRcdFxuICAgICAgICBpZiAoIGVsZW1lbnQgJiYgZXZlbnQubW91c2VFdmVudC5jbGllbnRYID49IDAgJiYgZXZlbnQubW91c2VFdmVudC5jbGllbnRZID49IDAgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHN0eWxlIH0gPSBlbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkge1xuXG4gICAgICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBsZWZ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIHJpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgZWxlbWVudCB3aWR0aCBmb3IgcmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgZWxlbWVudC5fd2lkdGggPSBsZWZ0LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuX2hlaWdodCA9IGxlZnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgaWYgKCBsZWZ0ICkgeyBsZWZ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cbiAgICAgICAgICAgICAgICBpZiAoIHJpZ2h0ICkgeyByaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBlbGVtZW50IHdpZHRoIGZvciByZWZlcmVuY2VcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll93aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5faGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgICAgIH1cblx0XHRcdFxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBvbiBhIG1vdXNlIGhvdmVyIGVuZFxuICAgICAqIFNldHMgY3Vyc29yIHN0eWxlIHRvICdkZWZhdWx0JywgaGlkZSB0aGUgZWxlbWVudCBhbmQgc2NhbGUgZG93biB0aGUgaW5mb3Nwb3RcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkhvdmVyRW5kOiBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgICBpZiAoICF0aGlzLmdldENvbnRhaW5lcigpICkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCB7IHNjYWxlRG93bkFuaW1hdGlvbiwgc2NhbGVVcEFuaW1hdGlvbiwgZWxlbWVudCB9ID0gdGhpcztcblxuICAgICAgICB0aGlzLmlzSG92ZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuXG4gICAgICAgIGlmICggdGhpcy5hbmltYXRlZCApIHtcblxuICAgICAgICAgICAgc2NhbGVVcEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICBzY2FsZURvd25BbmltYXRpb24uc3RhcnQoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiAoIGVsZW1lbnQgJiYgIXRoaXMuZWxlbWVudC5sb2NrZWQgKSB7XG4gICAgICAgIGlmICggZWxlbWVudCApIHtcblxuXG4gICAgICAgICAgICBjb25zdCB7IGxlZnQsIHJpZ2h0LCBzdHlsZSB9ID0gZWxlbWVudDtcblxuICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGlmICggbGVmdCApIHsgbGVmdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG4gICAgICAgICAgICBpZiAoIHJpZ2h0ICkgeyByaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgICAgICAgICAgIHRoaXMudW5sb2NrSG92ZXJFbGVtZW50KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIGR1YWwgZXllIGVmZmVjdCBoYW5kbGVyXG4gICAgICogQ3JlYXRlcyBkdXBsaWNhdGUgbGVmdCBhbmQgcmlnaHQgZWxlbWVudFxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3QgZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkR1YWxFeWVFZmZlY3Q6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdFx0XG4gICAgICAgIGlmICggIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGxldCBlbGVtZW50LCBoYWxmV2lkdGgsIGhhbGZIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5tb2RlID0gZXZlbnQubW9kZTtcblxuICAgICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuXG4gICAgICAgIGhhbGZXaWR0aCA9IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMjtcbiAgICAgICAgaGFsZkhlaWdodCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDI7XG5cbiAgICAgICAgaWYgKCAhZWxlbWVudCApIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICFlbGVtZW50LmxlZnQgJiYgIWVsZW1lbnQucmlnaHQgKSB7XG5cbiAgICAgICAgICAgIGVsZW1lbnQubGVmdCA9IGVsZW1lbnQuY2xvbmVOb2RlKCB0cnVlICk7XG4gICAgICAgICAgICBlbGVtZW50LnJpZ2h0ID0gZWxlbWVudC5jbG9uZU5vZGUoIHRydWUgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLm1vZGUgPT09IE1PREVTLkNBUkRCT0FSRCB8fCB0aGlzLm1vZGUgPT09IE1PREVTLlNURVJFTyApIHtcblxuICAgICAgICAgICAgZWxlbWVudC5sZWZ0LnN0eWxlLmRpc3BsYXkgPSBlbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgICAgICAgICBlbGVtZW50LnJpZ2h0LnN0eWxlLmRpc3BsYXkgPSBlbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZWxlbWVudC5sZWZ0LnN0eWxlLmRpc3BsYXk7XG4gICAgICAgICAgICBlbGVtZW50LmxlZnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGVsZW1lbnQucmlnaHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGVsZW1lbnRzIHRyYW5zbGF0aW9uXG4gICAgICAgIHRoaXMudHJhbnNsYXRlRWxlbWVudCggaGFsZldpZHRoLCBoYWxmSGVpZ2h0ICk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIGVsZW1lbnQubGVmdCApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggZWxlbWVudC5yaWdodCApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZSB0aGUgaG92ZXJpbmcgZWxlbWVudCBieSBjc3MgdHJhbnNmb3JtXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB4IC0gWCBwb3NpdGlvbiBvbiB0aGUgd2luZG93IHNjcmVlblxuICAgICAqIEBwYXJhbSAge251bWJlcn0geSAtIFkgcG9zaXRpb24gb24gdGhlIHdpbmRvdyBzY3JlZW5cbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB0cmFuc2xhdGVFbGVtZW50OiBmdW5jdGlvbiAoIHgsIHkgKSB7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5lbGVtZW50Ll93aWR0aCB8fCAhdGhpcy5lbGVtZW50Ll9oZWlnaHQgfHwgIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlZnQsIHRvcCwgZWxlbWVudCwgd2lkdGgsIGhlaWdodCwgZGVsdGEsIGNvbnRhaW5lcjtcblxuICAgICAgICBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgd2lkdGggPSBlbGVtZW50Ll93aWR0aCAvIDI7XG4gICAgICAgIGhlaWdodCA9IGVsZW1lbnQuX2hlaWdodCAvIDI7XG4gICAgICAgIGRlbHRhID0gZWxlbWVudC52ZXJ0aWNhbERlbHRhICE9PSB1bmRlZmluZWQgPyBlbGVtZW50LnZlcnRpY2FsRGVsdGEgOiA0MDtcblxuICAgICAgICBsZWZ0ID0geCAtIHdpZHRoO1xuICAgICAgICB0b3AgPSB5IC0gaGVpZ2h0IC0gZGVsdGE7XG5cbiAgICAgICAgaWYgKCAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkgXG5cdFx0XHRcdCYmIGVsZW1lbnQubGVmdCAmJiBlbGVtZW50LnJpZ2h0XG5cdFx0XHRcdCYmICEoIHggPT09IGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIgJiYgeSA9PT0gY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIgKSApIHtcblxuICAgICAgICAgICAgbGVmdCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDQgLSB3aWR0aCArICggeCAtIGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIgKTtcbiAgICAgICAgICAgIHRvcCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyIC0gaGVpZ2h0IC0gZGVsdGEgKyAoIHkgLSBjb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMiApO1xuXG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZSggJ3RyYW5zZm9ybScsIGVsZW1lbnQubGVmdCwgJ3RyYW5zbGF0ZSgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCknICk7XG5cbiAgICAgICAgICAgIGxlZnQgKz0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMjtcblxuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50U3R5bGUoICd0cmFuc2Zvcm0nLCBlbGVtZW50LnJpZ2h0LCAndHJhbnNsYXRlKCcgKyBsZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4KScgKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZSggJ3RyYW5zZm9ybScsIGVsZW1lbnQsICd0cmFuc2xhdGUoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgpJyApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdmVuZG9yIHNwZWNpZmljIGNzc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gQ1NTIHN0eWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gYmUgbW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBTdHlsZSB2YWx1ZVxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldEVsZW1lbnRTdHlsZTogZnVuY3Rpb24gKCB0eXBlLCBlbGVtZW50LCB2YWx1ZSApIHtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAndHJhbnNmb3JtJyApIHtcblxuICAgICAgICAgICAgc3R5bGUud2Via2l0VHJhbnNmb3JtID0gc3R5bGUubXNUcmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPSB2YWx1ZTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IGhvdmVyaW5nIHRleHQgY29udGVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBiZSBkaXNwbGF5ZWRcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRUZXh0OiBmdW5jdGlvbiAoIHRleHQgKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJzb3IgY3NzIHN0eWxlIG9uIGhvdmVyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Q3Vyc29ySG92ZXJTdHlsZTogZnVuY3Rpb24gKCBzdHlsZSApIHtcblxuICAgICAgICB0aGlzLmN1cnNvclN0eWxlID0gc3R5bGU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGhvdmVyaW5nIHRleHQgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBiZSBkaXNwbGF5ZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbHRhPTQwXSAtIFZlcnRpY2FsIGRlbHRhIHRvIHRoZSBpbmZvc3BvdFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZEhvdmVyVGV4dDogZnVuY3Rpb24gKCB0ZXh0LCBkZWx0YSA9IDQwICkge1xuXG4gICAgICAgIGlmICggIXRoaXMuZWxlbWVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSAnNTAlJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnNTAlJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50ZXh0U2hhZG93ID0gJzAgMCAzcHggIzAwMDAwMCc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9ICdcIlRyZWJ1Y2hldCBNU1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncGFub2xlbnMtaW5mb3Nwb3QnICk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudmVydGljYWxEZWx0YSA9IGRlbHRhO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFRleHQoIHRleHQgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgaG92ZXJpbmcgZWxlbWVudCBieSBjbG9uaW5nIGFuIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0hUTUxET01FbGVtZW50fSBlbCAtIEVsZW1lbnQgdG8gYmUgY2xvbmVkIGFuZCBkaXNwbGF5ZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbHRhPTQwXSAtIFZlcnRpY2FsIGRlbHRhIHRvIHRoZSBpbmZvc3BvdFxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZEhvdmVyRWxlbWVudDogZnVuY3Rpb24gKCBlbCwgZGVsdGEgPSA0MCApIHtcblxuICAgICAgICBpZiAoICF0aGlzLmVsZW1lbnQgKSB7IFxuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbC5jbG9uZU5vZGUoIHRydWUgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwYW5vbGVucy1pbmZvc3BvdCcgKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC52ZXJ0aWNhbERlbHRhID0gZGVsdGE7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBob3ZlcmluZyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVtb3ZlSG92ZXJFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7IFxuXG4gICAgICAgICAgICBpZiAoIHRoaXMuZWxlbWVudC5sZWZ0ICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudC5sZWZ0ICk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmxlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5lbGVtZW50LnJpZ2h0ICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudC5yaWdodCApO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yaWdodCA9IG51bGw7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9jayBob3ZlcmluZyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9ja0hvdmVyRWxlbWVudDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkgeyBcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmxvY2tlZCA9IHRydWU7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubG9jayBob3ZlcmluZyBlbGVtZW50XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdW5sb2NrSG92ZXJFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7IFxuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubG9ja2VkID0gZmFsc2U7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSByYXljYXN0aW5nXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZW5hYmxlZD10cnVlXVxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGVuYWJsZVJheWNhc3Q6IGZ1bmN0aW9uICggZW5hYmxlZCA9IHRydWUgKSB7XG5cbiAgICAgICAgaWYgKCBlbmFibGVkICkge1xuXG4gICAgICAgICAgICB0aGlzLnJheWNhc3QgPSB0aGlzLm9yaWdpbmFsUmF5Y2FzdDtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnJheWNhc3QgPSAoKSA9PiB7fTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvdyBpbmZvc3BvdFxuICAgICAqIEBwYXJhbSAge251bWJlcn0gW2RlbGF5PTBdIC0gRGVsYXkgdGltZSB0byBzaG93XG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2hvdzogZnVuY3Rpb24gKCBkZWxheSA9IDAgKSB7XG5cbiAgICAgICAgY29uc3QgeyBhbmltYXRlZCwgaGlkZUFuaW1hdGlvbiwgc2hvd0FuaW1hdGlvbiwgbWF0ZXJpYWwgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBhbmltYXRlZCApIHtcblxuICAgICAgICAgICAgaGlkZUFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICBzaG93QW5pbWF0aW9uLmRlbGF5KCBkZWxheSApLnN0YXJ0KCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5lbmFibGVSYXljYXN0KCB0cnVlICk7XG4gICAgICAgICAgICBtYXRlcmlhbC5vcGFjaXR5ID0gMTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGlkZSBpbmZvc3BvdFxuICAgICAqIEBwYXJhbSAge251bWJlcn0gW2RlbGF5PTBdIC0gRGVsYXkgdGltZSB0byBoaWRlXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgaGlkZTogZnVuY3Rpb24gKCBkZWxheSA9IDAgKSB7XG5cbiAgICAgICAgY29uc3QgeyBhbmltYXRlZCwgaGlkZUFuaW1hdGlvbiwgc2hvd0FuaW1hdGlvbiwgbWF0ZXJpYWwsIGVsZW1lbnQgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xuICAgICAgICAgICAgY29uc3QgeyBzdHlsZSB9ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGFuaW1hdGVkICkge1xuXG4gICAgICAgICAgICBzaG93QW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgIGhpZGVBbmltYXRpb24uZGVsYXkoIGRlbGF5ICkuc3RhcnQoKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJheWNhc3QoIGZhbHNlICk7XG4gICAgICAgICAgICBtYXRlcmlhbC5vcGFjaXR5ID0gMDtcblxuICAgICAgICB9XG5cdFx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBmb2N1cyBldmVudCBoYW5kbGVyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Rm9jdXNNZXRob2Q6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBldmVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5IQU5ETEVSX0ZPQ1VTID0gZXZlbnQubWV0aG9kO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGb2N1cyBjYW1lcmEgY2VudGVyIHRvIHRoaXMgaW5mb3Nwb3RcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTEwMDBdIC0gRHVyYXRpb24gdG8gdHdlZW5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZWFzaW5nPVRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXRdIC0gRWFzaW5nIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZm9jdXM6IGZ1bmN0aW9uICggZHVyYXRpb24sIGVhc2luZyApIHtcblxuICAgICAgICBpZiAoIHRoaXMuSEFORExFUl9GT0NVUyApIHtcblxuICAgICAgICAgICAgdGhpcy5IQU5ETEVSX0ZPQ1VTKCB0aGlzLnBvc2l0aW9uLCBkdXJhdGlvbiwgZWFzaW5nICk7XG4gICAgICAgICAgICB0aGlzLm9uRGlzbWlzcygpO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgZ2VvbWV0cnksIG1hdGVyaWFsIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCB7IG1hcCB9ID0gbWF0ZXJpYWw7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVIb3ZlckVsZW1lbnQoKTtcblxuICAgICAgICBpZiAoIHRoaXMucGFyZW50ICkge1xuXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmUoIHRoaXMgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBtYXAgKSB7IG1hcC5kaXNwb3NlKCk7IG1hdGVyaWFsLm1hcCA9IG51bGw7IH1cbiAgICAgICAgaWYgKCBnZW9tZXRyeSApIHsgZ2VvbWV0cnkuZGlzcG9zZSgpOyB0aGlzLmdlb21ldHJ5ID0gbnVsbDsgfVxuICAgICAgICBpZiAoIG1hdGVyaWFsICkgeyBtYXRlcmlhbC5kaXNwb3NlKCk7IHRoaXMubWF0ZXJpYWwgPSBudWxsOyB9XG5cbiAgICB9XG5cbn0gKTtcblxuZXhwb3J0IHsgSW5mb3Nwb3QgfTsiLCJpbXBvcnQgeyBDT05UUk9MUywgTU9ERVMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFdpZGdldCBmb3IgY29udHJvbHNcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gQSBkb21FbGVtZW50IHdoZXJlIGRlZmF1bHQgY29udHJvbCB3aWRnZXQgd2lsbCBiZSBhdHRhY2hlZCB0b1xuICovXG5mdW5jdGlvbiBXaWRnZXQgKCBjb250YWluZXIgKSB7XG5cbiAgICBpZiAoICFjb250YWluZXIgKSB7XG5cbiAgICAgICAgY29uc29sZS53YXJuKCAnUEFOT0xFTlMuV2lkZ2V0OiBObyBjb250YWluZXIgc3BlY2lmaWVkJyApO1xuXG4gICAgfVxuXG4gICAgVEhSRUUuRXZlbnREaXNwYXRjaGVyLmNhbGwoIHRoaXMgKTtcblxuICAgIHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OICA9ICdhbGwgMC4yN3MgZWFzZSc7XG4gICAgdGhpcy5UT1VDSF9FTkFCTEVEID0gISEoKCAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgKSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpO1xuICAgIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSID0gZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgdGhpcy5iYXJFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmZ1bGxzY3JlZW5FbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmNhcmRib2FyZEVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMudmlkZW9FbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNldHRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMubWFpbk1lbnUgPSBudWxsO1xuXG4gICAgdGhpcy5hY3RpdmVNYWluSXRlbSA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVTdWJNZW51ID0gbnVsbDtcbiAgICB0aGlzLm1hc2sgPSBudWxsO1xuXG59XG5cbldpZGdldC5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBXaWRnZXQsXG5cbiAgICAvKipcbiAgICAgKiBBZGQgY29udHJvbCBiYXJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkQ29udHJvbEJhcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICggIXRoaXMuY29udGFpbmVyICkge1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdXaWRnZXQgY29udGFpbmVyIG5vdCBzZXQnICk7IFxuICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMsIGJhciwgc3R5bGVUcmFuc2xhdGUsIHN0eWxlT3BhY2l0eSwgZ3JhZGllbnRTdHlsZTtcblxuICAgICAgICBncmFkaWVudFN0eWxlID0gJ2xpbmVhci1ncmFkaWVudChib3R0b20sIHJnYmEoMCwwLDAsMC4yKSwgcmdiYSgwLDAsMCwwKSknO1xuXG4gICAgICAgIGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgIGJhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgYmFyLnN0eWxlLmhlaWdodCA9ICc0NHB4JztcbiAgICAgICAgYmFyLnN0eWxlLmZsb2F0ID0gJ2xlZnQnO1xuICAgICAgICBiYXIuc3R5bGUudHJhbnNmb3JtID0gYmFyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGJhci5zdHlsZS5tc1RyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0xMDAlKSc7XG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJy13ZWJraXQtJyArIGdyYWRpZW50U3R5bGU7XG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJy1tb3otJyArIGdyYWRpZW50U3R5bGU7XG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJy1vLScgKyBncmFkaWVudFN0eWxlO1xuICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9ICctbXMtJyArIGdyYWRpZW50U3R5bGU7XG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gZ3JhZGllbnRTdHlsZTtcbiAgICAgICAgYmFyLnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTjtcbiAgICAgICAgYmFyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIGJhci5pc0hpZGRlbiA9IGZhbHNlO1xuICAgICAgICBiYXIudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYmFyLmlzSGlkZGVuID0gIWJhci5pc0hpZGRlbjtcbiAgICAgICAgICAgIHN0eWxlVHJhbnNsYXRlID0gYmFyLmlzSGlkZGVuID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoLTEwMCUpJztcbiAgICAgICAgICAgIHN0eWxlT3BhY2l0eSA9IGJhci5pc0hpZGRlbiA/IDAgOiAxO1xuICAgICAgICAgICAgYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGJhci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBiYXIuc3R5bGUubXNUcmFuc2Zvcm0gPSBzdHlsZVRyYW5zbGF0ZTtcbiAgICAgICAgICAgIGJhci5zdHlsZS5vcGFjaXR5ID0gc3R5bGVPcGFjaXR5O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE1lbnVcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzLmNyZWF0ZURlZmF1bHRNZW51KCk7XG4gICAgICAgIHRoaXMubWFpbk1lbnUgPSB0aGlzLmNyZWF0ZU1haW5NZW51KCBtZW51ICk7XG4gICAgICAgIGJhci5hcHBlbmRDaGlsZCggdGhpcy5tYWluTWVudSApO1xuXG4gICAgICAgIC8vIE1hc2tcbiAgICAgICAgdmFyIG1hc2sgPSB0aGlzLmNyZWF0ZU1hc2soKTtcbiAgICAgICAgdGhpcy5tYXNrID0gbWFzaztcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIG1hc2sgKTtcblxuICAgICAgICAvLyBEaXNwb3NlXG4gICAgICAgIGJhci5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmZ1bGxzY3JlZW5FbGVtZW50ICkge1xuXG4gICAgICAgICAgICAgICAgYmFyLnJlbW92ZUNoaWxkKCBzY29wZS5mdWxsc2NyZWVuRWxlbWVudCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLmZ1bGxzY3JlZW5FbGVtZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBzY29wZS5mdWxsc2NyZWVuRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBzY29wZS5zZXR0aW5nRWxlbWVudCApIHtcblxuICAgICAgICAgICAgICAgIGJhci5yZW1vdmVDaGlsZCggc2NvcGUuc2V0dGluZ0VsZW1lbnQgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5zZXR0aW5nRWxlbWVudC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgc2NvcGUuc2V0dGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUudmlkZW9FbGVtZW50ICkge1xuXG4gICAgICAgICAgICAgICAgYmFyLnJlbW92ZUNoaWxkKCBzY29wZS52aWRlb0VsZW1lbnQgKTtcbiAgICAgICAgICAgICAgICBzY29wZS52aWRlb0VsZW1lbnQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHNjb3BlLnZpZGVvRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBiYXIgKTtcblxuICAgICAgICAvLyBNYXNrIGV2ZW50c1xuICAgICAgICB0aGlzLm1hc2suYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XG4gICAgICAgIHRoaXMubWFzay5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XG4gICAgICAgIHRoaXMubWFzay5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcbiAgICAgICAgdGhpcy5tYXNrLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBzY29wZS5tYXNrLmhpZGUoKTtcbiAgICAgICAgICAgIHNjb3BlLnNldHRpbmdFbGVtZW50LmRlYWN0aXZhdGUoKTtcblxuICAgICAgICB9LCBmYWxzZSApO1xuXG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRyb2wtYmFyLXRvZ2dsZScsIGJhci50b2dnbGUgKTtcblxuICAgICAgICB0aGlzLmJhckVsZW1lbnQgPSBiYXI7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGRlZmF1bHQgbWVudVxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjcmVhdGVEZWZhdWx0TWVudTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMsIGhhbmRsZXI7XG5cbiAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uICggbWV0aG9kLCBkYXRhICkge1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyBcblxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsIFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIFxuXG4gICAgICAgICAgICAgICAgfSApOyBcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBbXG5cbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb250cm9sJywgXG4gICAgICAgICAgICAgICAgc3ViTWVudTogWyBcbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLlRPVUNIX0VOQUJMRUQgPyAnVG91Y2gnIDogJ01vdXNlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZW5hYmxlQ29udHJvbCcsIENPTlRST0xTLk9SQklUIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2Vuc29yJywgXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZW5hYmxlQ29udHJvbCcsIENPTlRST0xTLkRFVklDRU9SSUVOVEFUSU9OICkgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01vZGUnLCBcbiAgICAgICAgICAgICAgICBzdWJNZW51OiBbIFxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdOb3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlciggJ2Rpc2FibGVFZmZlY3QnIClcbiAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhcmRib2FyZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZW5hYmxlRWZmZWN0JywgTU9ERVMuQ0FSREJPQVJEIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3RlcmVvc2NvcGljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVFZmZlY3QnLCBNT0RFUy5TVEVSRU8gKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIF07XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGJ1dHRvbnMgb24gdG9wIG9mIGNvbnRyb2wgYmFyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgY29udHJvbCBidXR0b24gbmFtZSB0byBiZSBjcmVhdGVkXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZENvbnRyb2xCdXR0b246IGZ1bmN0aW9uICggbmFtZSApIHtcblxuICAgICAgICBsZXQgZWxlbWVudDtcblxuICAgICAgICBzd2l0Y2goIG5hbWUgKSB7XG5cbiAgICAgICAgY2FzZSAnZnVsbHNjcmVlbic6XG5cbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmNyZWF0ZUZ1bGxzY3JlZW5CdXR0b24oKTtcbiAgICAgICAgICAgIHRoaXMuZnVsbHNjcmVlbkVsZW1lbnQgPSBlbGVtZW50OyBcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnY2FyZGJvYXJkJzpcblxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY3JlYXRlQ2FyZGJvYXJkQnV0dG9uKCk7XG4gICAgICAgICAgICB0aGlzLmNhcmRib2FyZEVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzZXR0aW5nJzpcblxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY3JlYXRlU2V0dGluZ0J1dHRvbigpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3ZpZGVvJzpcblxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY3JlYXRlVmlkZW9Db250cm9sKCk7XG4gICAgICAgICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhZWxlbWVudCApIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJhckVsZW1lbnQuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbW9kYWwgbWFza1xuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjcmVhdGVNYXNrOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgZWxlbWVudC5zaG93ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZWxlbWVudC5oaWRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgU2V0dGluZyBidXR0b24gdG8gdG9nZ2xlIG1lbnVcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY3JlYXRlQ2FyZGJvYXJkQnV0dG9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcywgY2FyZGJvYXJkO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmFjdGl2YXRlZCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2xpY2tFdmVudCA9IG5ldyBFdmVudCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgPyAndG91Y2hlbmQnIDogJ2NsaWNrJyk7XG4gICAgICAgICAgICBzY29wZS5mdWxsc2NyZWVuRWxlbWVudC5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FyZGJvYXJkID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7IFxuXG4gICAgICAgICAgICBzdHlsZTogeyBcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIicgKyBEYXRhSW1hZ2UuQ2FyZGJvYXJkICsgJ1wiKScsXG4gICAgICAgICAgICAgICAgd2Via2l0VHJhbnNpdGlvbjogdGhpcy5ERUZBVUxUX1RSQU5TSVRJT04sXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhpcy5ERUZBVUxUX1RSQU5TSVRJT05cblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25UYXA6IG9uVGFwXG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIGNhcmRib2FyZC5oYW5kbGVyID0gZnVuY3Rpb24gKCBtZXRob2QsIGRhdGEgKSB7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLCBcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIFxuICAgICAgICAgICAgfSApOyBcbiAgICAgICAgfTtcblxuICAgICAgICBjYXJkYm9hcmQuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlciggJ2VuYWJsZUVmZmVjdCcsIE1PREVTLkNBUkRCT0FSRCApO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyKCAnZW5hYmxlQ29udHJvbCcsIENPTlRST0xTLkRFVklDRU9SSUVOVEFUSU9OICk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFub2xlbnMtY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnY2FyZGJvYXJkX21vZGUnKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNhcmRib2FyZC5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIoICdkaXNhYmxlRWZmZWN0JyApO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyKCAnZW5hYmxlQ29udHJvbCcsIENPTlRST0xTLk9SQklUICk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFub2xlbnMtY29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZGJvYXJkX21vZGUnKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG5cdFx0XHRcbiAgICAgICAgfTtcblxuICAgICAgICBjYXJkYm9hcmQuYWN0aXZhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIGNhcmRib2FyZDtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgU2V0dGluZyBidXR0b24gdG8gdG9nZ2xlIG1lbnVcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY3JlYXRlU2V0dGluZ0J1dHRvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIGl0ZW07XG5cbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBzY29wZS5tYWluTWVudS50b2dnbGUoKTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmFjdGl2YXRlZCApIHtcbiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7IFxuXG4gICAgICAgICAgICBzdHlsZTogeyBcblxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIicgKyBEYXRhSW1hZ2UuU2V0dGluZyArICdcIiknLFxuICAgICAgICAgICAgICAgIHdlYmtpdFRyYW5zaXRpb246IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OXG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uVGFwOiBvblRhcFxuXG4gICAgICAgIH0gKTtcblxuICAgICAgICBpdGVtLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUzZCgwLDAsMSw5MGRlZyknO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2NvcGUubWFzay5zaG93KCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZTNkKDAsMCwwLDApJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBzY29wZS5tYXNrLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5tYWluTWVudSAmJiBzY29wZS5tYWluTWVudS52aXNpYmxlICkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUubWFpbk1lbnUuaGlkZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmFjdGl2ZVN1Yk1lbnUgJiYgc2NvcGUuYWN0aXZlU3ViTWVudS52aXNpYmxlICkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuYWN0aXZlU3ViTWVudS5oaWRlKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBzY29wZS5tYWluTWVudSAmJiBzY29wZS5tYWluTWVudS5fd2lkdGggKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5tYWluTWVudS5jaGFuZ2VTaXplKCBzY29wZS5tYWluTWVudS5fd2lkdGggKTtcbiAgICAgICAgICAgICAgICBzY29wZS5tYWluTWVudS51bnNsaWRlQWxsKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uYWN0aXZhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIEZ1bGxzY3JlZW4gYnV0dG9uXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uIGZvciBmdWxsc2NyZWVuXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgKi9cbiAgICBjcmVhdGVGdWxsc2NyZWVuQnV0dG9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcywgaXRlbSwgaXNGdWxsc2NyZWVuID0gZmFsc2UsIHRhcFNraXBwZWQgPSB0cnVlLCBzdHlsZXNoZWV0SWQ7XG5cbiAgICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXM7XG5cbiAgICAgICAgc3R5bGVzaGVldElkID0gJ3Bhbm9sZW5zLXN0eWxlLWFkZG9uJztcblxuICAgICAgICAvLyBEb24ndCBjcmVhdGUgYnV0dG9uIGlmIG5vIHN1cHBvcnRcbiAgICAgICAgaWYgKCAhZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWQgICAgICAgJiYgXG5cdFx0XHQhZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVuYWJsZWQgJiZcblx0XHRcdCFkb2N1bWVudC5tb3pGdWxsU2NyZWVuRW5hYmxlZCAgICAmJlxuXHRcdFx0IWRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHRhcFNraXBwZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKCAhaXNGdWxsc2NyZWVuICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4gKSB7IGNvbnRhaW5lci5yZXF1ZXN0RnVsbHNjcmVlbigpOyB9XG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbiApIHsgY29udGFpbmVyLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTsgfVxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuICkgeyBjb250YWluZXIud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oIEVsZW1lbnQuQUxMT1dfS0VZQk9BUkRfSU5QVVQgKTsgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5leGl0RnVsbHNjcmVlbiApIHsgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTsgfVxuICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbiApIHsgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpOyB9XG4gICAgICAgICAgICAgICAgaWYgKCBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbiApIHsgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oICk7IH1cblxuICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gKCBpc0Z1bGxzY3JlZW4gKSBcbiAgICAgICAgICAgICAgICA/ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5MZWF2ZSArICdcIiknIFxuICAgICAgICAgICAgICAgIDogJ3VybChcIicgKyBEYXRhSW1hZ2UuRnVsbHNjcmVlbkVudGVyICsgJ1wiKSc7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uRnVsbFNjcmVlbkNoYW5nZSAoKSB7XG5cbiAgICAgICAgICAgIGlmICggdGFwU2tpcHBlZCApIHtcblxuICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9ICFpc0Z1bGxzY3JlZW47IFxuXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAoIGlzRnVsbHNjcmVlbiApIFxuICAgICAgICAgICAgICAgICAgICA/ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5MZWF2ZSArICdcIiknIFxuICAgICAgICAgICAgICAgICAgICA6ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5FbnRlciArICdcIiknO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAZXZlbnQgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ29uV2luZG93UmVzaXplJyBmdW5jdGlvbiBjYWxsIG9uIFZpZXdlclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uV2luZG93UmVzaXplJyB9ICk7XG5cbiAgICAgICAgICAgIHRhcFNraXBwZWQgPSB0cnVlO1xuXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnZnVsbHNjcmVlbmNoYW5nZScsIG9uRnVsbFNjcmVlbkNoYW5nZSwgZmFsc2UgKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCBvbkZ1bGxTY3JlZW5DaGFuZ2UsIGZhbHNlICk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3pmdWxsc2NyZWVuY2hhbmdlJywgb25GdWxsU2NyZWVuQ2hhbmdlLCBmYWxzZSApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnTVNGdWxsc2NyZWVuQ2hhbmdlJywgb25GdWxsU2NyZWVuQ2hhbmdlLCBmYWxzZSApO1xuXG4gICAgICAgIGl0ZW0gPSB0aGlzLmNyZWF0ZUN1c3RvbUl0ZW0oIHsgXG5cbiAgICAgICAgICAgIHN0eWxlOiB7IFxuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuRW50ZXIgKyAnXCIpJyBcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25UYXA6IG9uVGFwXG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIEFkZCBmdWxsc2NyZWVuIHN0bHllIGlmIG5vdCBleGlzdHNcbiAgICAgICAgaWYgKCAhZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc3R5bGVzaGVldElkICkgKSB7XG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzdHlsZScgKTtcbiAgICAgICAgICAgIHNoZWV0LmlkID0gc3R5bGVzaGVldElkO1xuICAgICAgICAgICAgc2hlZXQuaW5uZXJIVE1MID0gJzotd2Via2l0LWZ1bGwtc2NyZWVuIHsgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQgfSc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBzaGVldCApO1xuICAgICAgICB9XG5cdFx0XG4gICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB2aWRlbyBjb250cm9sIGNvbnRhaW5lclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb24gZm9yIHZpZGVvIGNvbnRyb2xcbiAgICAgKi9cbiAgICBjcmVhdGVWaWRlb0NvbnRyb2w6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaXRlbS5zaG93ID0gZnVuY3Rpb24gKCkgeyBcblxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmhpZGUgPSBmdW5jdGlvbiAoKSB7IFxuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbi51cGRhdGUoKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbiA9IHRoaXMuY3JlYXRlVmlkZW9Db250cm9sQnV0dG9uKCk7XG4gICAgICAgIGl0ZW0uc2Vla0JhciA9IHRoaXMuY3JlYXRlVmlkZW9Db250cm9sU2Vla2JhcigpO1xuXHRcdFxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKCBpdGVtLmNvbnRyb2xCdXR0b24gKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCggaXRlbS5zZWVrQmFyICk7XG5cbiAgICAgICAgaXRlbS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpdGVtLnJlbW92ZUNoaWxkKCBpdGVtLmNvbnRyb2xCdXR0b24gKTtcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ2hpbGQoIGl0ZW0uc2Vla0JhciApO1xuXG4gICAgICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uID0gbnVsbDtcblxuICAgICAgICAgICAgaXRlbS5zZWVrQmFyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGl0ZW0uc2Vla0JhciA9IG51bGw7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby1jb250cm9sLXNob3cnLCBpdGVtLnNob3cgKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tY29udHJvbC1oaWRlJywgaXRlbS5oaWRlICk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHZpZGVvIGNvbnRyb2wgYnV0dG9uXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvbiBmb3IgdmlkZW8gY29udHJvbFxuICAgICAqIEBmaXJlcyBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgKi9cbiAgICBjcmVhdGVWaWRlb0NvbnRyb2xCdXR0b246IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd0b2dnbGVWaWRlb1BsYXknIGZ1bmN0aW9uIGNhbGwgb24gVmlld2VyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndG9nZ2xlVmlkZW9QbGF5JywgZGF0YTogIXRoaXMucGF1c2VkIH0gKTtcblxuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG5cbiAgICAgICAgICAgIGl0ZW0udXBkYXRlKCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7IFxuXG4gICAgICAgICAgICBzdHlsZTogeyBcblxuICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiJyArIERhdGFJbWFnZS5WaWRlb1BsYXkgKyAnXCIpJ1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvblRhcDogb25UYXBcblxuICAgICAgICB9ICk7XG5cbiAgICAgICAgaXRlbS5wYXVzZWQgPSB0cnVlO1xuXG4gICAgICAgIGl0ZW0udXBkYXRlID0gZnVuY3Rpb24gKCBwYXVzZWQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gcGF1c2VkICE9PSB1bmRlZmluZWQgPyBwYXVzZWQgOiB0aGlzLnBhdXNlZDtcblxuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiJyArICggdGhpcy5wYXVzZWQgXG4gICAgICAgICAgICAgICAgPyBEYXRhSW1hZ2UuVmlkZW9QbGF5IFxuICAgICAgICAgICAgICAgIDogRGF0YUltYWdlLlZpZGVvUGF1c2UgKSArICdcIiknO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHZpZGVvIHNlZWtiYXJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uIGZvciB2aWRlbyBzZWVrYmFyXG4gICAgICogQGZpcmVzIFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAqL1xuICAgIGNyZWF0ZVZpZGVvQ29udHJvbFNlZWtiYXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBpdGVtLCBwcm9ncmVzc0VsZW1lbnQsIHByb2dyZXNzRWxlbWVudENvbnRyb2wsXG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2UsIG1vdXNlWCwgcGVyY2VudGFnZU5vdywgcGVyY2VudGFnZU5leHQ7XG5cbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLndpZHRoID0gJzAlJztcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcblxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUud2lkdGggPSAnMTRweCc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuaGVpZ2h0ID0gJzE0cHgnO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoN3B4LCAtNXB4KSc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkZGQnO1xuXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Nb3VzZURvd24sICB7IHBhc3NpdmU6IHRydWUgfSApO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdFxuICAgICAgICAgICAgbW91c2VYID0gZXZlbnQuY2xpZW50WCB8fCAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggKTtcblxuICAgICAgICAgICAgcGVyY2VudGFnZU5vdyA9IHBhcnNlSW50KCBwcm9ncmVzc0VsZW1lbnQuc3R5bGUud2lkdGggKSAvIDEwMDtcblxuICAgICAgICAgICAgYWRkQ29udHJvbExpc3RlbmVycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25WaWRlb0NvbnRyb2xEcmFnICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGlmKCBpc0RyYWdnaW5nICl7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCB8fCAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggKTtcblx0XHRcdFx0XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZU5leHQgPSAoIGNsaWVudFggLSBtb3VzZVggKSAvIGl0ZW0uY2xpZW50V2lkdGg7XG5cbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTmV4dCA9IHBlcmNlbnRhZ2VOb3cgKyBwZXJjZW50YWdlTmV4dDtcblxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VOZXh0ID0gcGVyY2VudGFnZU5leHQgPiAxID8gMSA6ICggKCBwZXJjZW50YWdlTmV4dCA8IDAgKSA/IDAgOiBwZXJjZW50YWdlTmV4dCApO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRQcm9ncmVzcyAoIHBlcmNlbnRhZ2VOZXh0ICk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAnc2V0VmlkZW9DdXJyZW50VGltZScgZnVuY3Rpb24gY2FsbCBvbiBWaWV3ZXJcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YSAtIFBlcmNlbnRhZ2Ugb2YgY3VycmVudCB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdzZXRWaWRlb0N1cnJlbnRUaW1lJywgZGF0YTogcGVyY2VudGFnZU5leHQgfSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uVmlkZW9Db250cm9sU3RvcCAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICByZW1vdmVDb250cm9sTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbnRyb2xMaXN0ZW5lcnMgKCkge1xuXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uVmlkZW9Db250cm9sRHJhZywgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uVmlkZW9Db250cm9sU3RvcCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25WaWRlb0NvbnRyb2xEcmFnLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVmlkZW9Db250cm9sU3RvcCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVDb250cm9sTGlzdGVuZXJzICgpIHtcblxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvblZpZGVvQ29udHJvbERyYWcsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvblZpZGVvQ29udHJvbFN0b3AsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVmlkZW9Db250cm9sRHJhZywgZmFsc2UgKTtcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblZpZGVvQ29udHJvbFN0b3AsIGZhbHNlICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQgPT09IHByb2dyZXNzRWxlbWVudENvbnRyb2wgKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAwIClcbiAgICAgICAgICAgICAgICA/ICggZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCApIC8gdGhpcy5jbGllbnRXaWR0aFxuICAgICAgICAgICAgICAgIDogZXZlbnQub2Zmc2V0WCAvIHRoaXMuY2xpZW50V2lkdGg7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3NldFZpZGVvQ3VycmVudFRpbWUnIGZ1bmN0aW9uIGNhbGwgb24gVmlld2VyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YSAtIFBlcmNlbnRhZ2Ugb2YgY3VycmVudCB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnc2V0VmlkZW9DdXJyZW50VGltZScsIGRhdGE6IHBlcmNlbnRhZ2UgfSApO1xuXG4gICAgICAgICAgICBpdGVtLnNldFByb2dyZXNzKCBldmVudC5vZmZzZXRYIC8gdGhpcy5jbGllbnRXaWR0aCApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gb25EaXNwb3NlICgpIHtcblxuICAgICAgICAgICAgcmVtb3ZlQ29udHJvbExpc3RlbmVycygpO1xuICAgICAgICAgICAgcHJvZ3Jlc3NFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wgPSBudWxsO1xuXG4gICAgICAgIH1cblxuICAgICAgICBwcm9ncmVzc0VsZW1lbnQuYXBwZW5kQ2hpbGQoIHByb2dyZXNzRWxlbWVudENvbnRyb2wgKTtcblxuICAgICAgICBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7XG5cbiAgICAgICAgICAgIHN0eWxlOiB7IFxuXG4gICAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNHB4JyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE4OCwxODgsMTg4LDAuOCknXG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uVGFwOiBvblRhcCxcbiAgICAgICAgICAgIG9uRGlzcG9zZTogb25EaXNwb3NlXG5cbiAgICAgICAgfSApO1xuXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoIHByb2dyZXNzRWxlbWVudCApO1xuXG4gICAgICAgIGl0ZW0uc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiggcGVyY2VudGFnZSApIHtcblxuICAgICAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLndpZHRoID0gcGVyY2VudGFnZSAqIDEwMCArICclJztcblxuICAgICAgICB9O1x0XHRcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby11cGRhdGUnLCBmdW5jdGlvbiAoIGV2ZW50ICkgeyBcblxuICAgICAgICAgICAgaXRlbS5zZXRQcm9ncmVzcyggZXZlbnQucGVyY2VudGFnZSApOyBcblxuICAgICAgICB9ICk7XG5cbiAgICAgICAgaXRlbS5wcm9ncmVzc0VsZW1lbnQgPSBwcm9ncmVzc0VsZW1lbnQ7XG4gICAgICAgIGl0ZW0ucHJvZ3Jlc3NFbGVtZW50Q29udHJvbCA9IHByb2dyZXNzRWxlbWVudENvbnRyb2w7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG1lbnUgaXRlbVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGl0bGUgLSBUaXRsZSB0byBkaXNwbGF5XG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEFuIGFuY2hvciB0YWcgZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZU1lbnVJdGVtOiBmdW5jdGlvbiAoIHRpdGxlICkge1xuXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpczsgXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYScgKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpdGVtLnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XG4gICAgICAgIGl0ZW0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgIGl0ZW0uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICBpdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIGl0ZW0uc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OO1xuXG4gICAgICAgIGl0ZW0uc2xpZGUgPSBmdW5jdGlvbiAoIHJpZ2h0ICkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAoIHJpZ2h0ID8gJycgOiAnLScgKSArICcxMDAlKSc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLnVuc2xpZGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5zZXRJY29uID0gZnVuY3Rpb24gKCB1cmwgKSB7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5pY29uICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHVybCArICcpJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5zZXRTZWxlY3Rpb25UaXRsZSA9IGZ1bmN0aW9uICggdGl0bGUgKSB7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5zZWxlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmFkZFNlbGVjdGlvbiA9IGZ1bmN0aW9uICggbmFtZSApIHtcblx0XHRcdFxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc3R5bGUuZm9udFNpemUgPSAnMTNweCc7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc3R5bGUuZm9udFdlaWdodCA9ICczMDAnO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnN0eWxlLmZsb2F0ID0gJ3JpZ2h0JztcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblRpdGxlKCBuYW1lICk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKCBzZWxlY3Rpb24gKTtcblx0XHRcdFxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtLmFkZEljb24gPSBmdW5jdGlvbiAoIHVybCA9IERhdGFJbWFnZS5DaGV2cm9uUmlnaHQsIGxlZnQgPSBmYWxzZSwgZmxpcCA9IGZhbHNlICkge1xuXHRcdFx0XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmZsb2F0ID0gbGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzE3cHgnO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTdweCc7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlWyAnbWFyZ2luJyArICggbGVmdCA/ICdSaWdodCcgOiAnTGVmdCcgKSBdID0gJzEycHgnO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgICAgICAgICAgIGlmICggZmxpcCApIHtcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVooMTgwZGVnKSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pY29uID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuc2V0SWNvbiggdXJsICk7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbS5hZGRTdWJNZW51ID0gZnVuY3Rpb24gKCB0aXRsZSwgaXRlbXMgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3ViTWVudSA9IHNjb3BlLmNyZWF0ZVN1Yk1lbnUoIHRpdGxlLCBpdGVtcyApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlMGUwZTAnO1xuXG4gICAgICAgIH0sIGZhbHNlICk7XG5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFxuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZhZmFmYSc7XG5cbiAgICAgICAgfSwgZmFsc2UgKTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbWVudSBpdGVtIGhlYWRlclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGl0bGUgLSBUaXRsZSB0byBkaXNwbGF5XG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEFuIGFuY2hvciB0YWcgZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZU1lbnVJdGVtSGVhZGVyOiBmdW5jdGlvbiAoIHRpdGxlICkge1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuY3JlYXRlTWVudUl0ZW0oIHRpdGxlICk7XG5cbiAgICAgICAgaGVhZGVyLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgIzMzMyc7XG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzE1cHgnO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG1haW4gbWVudVxuICAgICAqIEBwYXJhbSAge2FycmF5fSBtZW51cyAtIE1lbnUgYXJyYXkgbGlzdFxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBIHNwYW4gZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZU1haW5NZW51OiBmdW5jdGlvbiAoIG1lbnVzICkge1xuXHRcdFxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBtZW51ID0gdGhpcy5jcmVhdGVNZW51KCk7XG5cbiAgICAgICAgbWVudS5fd2lkdGggPSAyMDA7XG4gICAgICAgIG1lbnUuY2hhbmdlU2l6ZSggbWVudS5fd2lkdGggKTtcblxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIGxldCBtYWluTWVudSA9IHNjb3BlLm1haW5NZW51LCBzdWJNZW51ID0gdGhpcy5zdWJNZW51O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk5leHRUaWNrICgpIHtcblxuICAgICAgICAgICAgICAgIG1haW5NZW51LmNoYW5nZVNpemUoIHN1Yk1lbnUuY2xpZW50V2lkdGggKTtcbiAgICAgICAgICAgICAgICBzdWJNZW51LnNob3coKTtcbiAgICAgICAgICAgICAgICBzdWJNZW51LnVuc2xpZGVBbGwoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluTWVudS5oaWRlKCk7XG4gICAgICAgICAgICBtYWluTWVudS5zbGlkZUFsbCgpO1xuICAgICAgICAgICAgbWFpbk1lbnUucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCggc3ViTWVudSApO1xuXG4gICAgICAgICAgICBzY29wZS5hY3RpdmVNYWluSXRlbSA9IHRoaXM7XG4gICAgICAgICAgICBzY29wZS5hY3RpdmVTdWJNZW51ID0gc3ViTWVudTtcblxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggb25OZXh0VGljayApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbWVudXMubGVuZ3RoOyBpKysgKSB7XG5cbiAgICAgICAgICAgIHZhciBpdGVtID0gbWVudS5hZGRJdGVtKCBtZW51c1sgaSBdLnRpdGxlICk7XG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUucGFkZGluZ0xlZnQgPSAnMjBweCc7XG5cbiAgICAgICAgICAgIGl0ZW0uYWRkSWNvbigpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb25UYXAsIGZhbHNlICk7XG5cbiAgICAgICAgICAgIGlmICggbWVudXNbIGkgXS5zdWJNZW51ICYmIG1lbnVzWyBpIF0uc3ViTWVudS5sZW5ndGggPiAwICkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gbWVudXNbIGkgXS5zdWJNZW51WyAwIF0udGl0bGU7XG5cbiAgICAgICAgICAgICAgICBpdGVtLmFkZFNlbGVjdGlvbiggdGl0bGUgKVxuICAgICAgICAgICAgICAgICAgICAuYWRkU3ViTWVudSggbWVudXNbIGkgXS50aXRsZSwgbWVudXNbIGkgXS5zdWJNZW51ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lbnU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHN1YiBtZW51XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gU3ViIG1lbnUgdGl0bGVcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBpdGVtcyAtIEl0ZW0gYXJyYXkgbGlzdFxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBIHNwYW4gZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZVN1Yk1lbnU6IGZ1bmN0aW9uICggdGl0bGUsIGl0ZW1zICkge1xuXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIG1lbnUsIHN1Yk1lbnUgPSB0aGlzLmNyZWF0ZU1lbnUoKTtcblxuICAgICAgICBzdWJNZW51Lml0ZW1zID0gaXRlbXM7XG4gICAgICAgIHN1Yk1lbnUuYWN0aXZlSXRlbSA9IG51bGw7XG5cbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBtZW51ID0gc2NvcGUubWFpbk1lbnU7XG4gICAgICAgICAgICBtZW51LmNoYW5nZVNpemUoIG1lbnUuX3dpZHRoICk7XG4gICAgICAgICAgICBtZW51LnVuc2xpZGVBbGwoKTtcbiAgICAgICAgICAgIG1lbnUuc2hvdygpO1xuICAgICAgICAgICAgc3ViTWVudS5zbGlkZUFsbCggdHJ1ZSApO1xuICAgICAgICAgICAgc3ViTWVudS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy50eXBlICE9PSAnaGVhZGVyJyApIHtcblxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggdGhpcyApO1xuICAgICAgICAgICAgICAgIHNjb3BlLmFjdGl2ZU1haW5JdGVtLnNldFNlbGVjdGlvblRpdGxlKCB0aGlzLnRleHRDb250ZW50ICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaGFuZGxlciApIHsgdGhpcy5oYW5kbGVyKCk7IH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBzdWJNZW51LmFkZEhlYWRlciggdGl0bGUgKS5hZGRJY29uKCB1bmRlZmluZWQsIHRydWUsIHRydWUgKS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9uVGFwLCBmYWxzZSApO1xuXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3ViTWVudS5hZGRJdGVtKCBpdGVtc1sgaSBdLnRpdGxlICk7XG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZm9udFdlaWdodCA9IDMwMDtcbiAgICAgICAgICAgIGl0ZW0uaGFuZGxlciA9IGl0ZW1zWyBpIF0uaGFuZGxlcjtcbiAgICAgICAgICAgIGl0ZW0uYWRkSWNvbiggJyAnLCB0cnVlICk7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb25UYXAsIGZhbHNlICk7XG5cbiAgICAgICAgICAgIGlmICggIXN1Yk1lbnUuYWN0aXZlSXRlbSApIHtcblxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggaXRlbSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHN1Yk1lbnUuc2xpZGVBbGwoIHRydWUgKTtcblxuICAgICAgICByZXR1cm4gc3ViTWVudTtcblx0XHRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGdlbmVyYWwgbWVudVxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBIHNwYW4gZWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZU1lbnU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBtZW51LnN0eWxlO1xuXG4gICAgICAgIHN0eWxlLnBhZGRpbmcgPSAnNXB4IDAnO1xuICAgICAgICBzdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHN0eWxlLmJvdHRvbSA9ICcxMDAlJztcbiAgICAgICAgc3R5bGUucmlnaHQgPSAnMTRweCc7XG4gICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmFmYWZhJztcbiAgICAgICAgc3R5bGUuZm9udEZhbWlseSA9ICdIZWx2ZXRpY2EgTmV1ZSc7XG4gICAgICAgIHN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xuICAgICAgICBzdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBzdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDEycHQgcmdiYSgwLDAsMCwwLjI1KSc7XG4gICAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9ICcycHgnO1xuICAgICAgICBzdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBzdHlsZS53aWxsQ2hhbmdlID0gJ3dpZHRoLCBoZWlnaHQsIG9wYWNpdHknO1xuICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICBzdHlsZS50cmFuc2l0aW9uID0gdGhpcy5ERUZBVUxUX1RSQU5TSVRJT047XG5cbiAgICAgICAgbWVudS52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgbWVudS5jaGFuZ2VTaXplID0gZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0ICkge1xuXG4gICAgICAgICAgICBpZiAoIHdpZHRoICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIGhlaWdodCApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5zaG93ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIG1lbnUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLnZpc2libGUgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LnNsaWRlQWxsID0gZnVuY3Rpb24gKCByaWdodCApIHtcblxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgbWVudS5jaGlsZHJlbi5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgICAgICAgICAgaWYgKCBtZW51LmNoaWxkcmVuWyBpIF0uc2xpZGUgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWVudS5jaGlsZHJlblsgaSBdLnNsaWRlKCByaWdodCApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBtZW51LnVuc2xpZGVBbGwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IG1lbnUuY2hpbGRyZW4ubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICAgICAgICAgIGlmICggbWVudS5jaGlsZHJlblsgaSBdLnVuc2xpZGUgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWVudS5jaGlsZHJlblsgaSBdLnVuc2xpZGUoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5hZGRIZWFkZXIgPSBmdW5jdGlvbiAoIHRpdGxlICkge1xuXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBzY29wZS5jcmVhdGVNZW51SXRlbUhlYWRlciggdGl0bGUgKTtcbiAgICAgICAgICAgIGhlYWRlci50eXBlID0gJ2hlYWRlcic7XG5cbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoIGhlYWRlciApO1xuXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVyO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5hZGRJdGVtID0gZnVuY3Rpb24gKCB0aXRsZSApIHtcblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHNjb3BlLmNyZWF0ZU1lbnVJdGVtKCB0aXRsZSApO1xuICAgICAgICAgICAgaXRlbS50eXBlID0gJ2l0ZW0nO1xuXG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKCBpdGVtICk7XG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5zZXRBY3RpdmVJdGVtID0gZnVuY3Rpb24gKCBpdGVtICkge1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMuYWN0aXZlSXRlbSApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbS5zZXRJY29uKCAnICcgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLnNldEljb24oIERhdGFJbWFnZS5DaGVjayApO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XG5cbiAgICAgICAgcmV0dXJuIG1lbnU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGN1c3RvbSBpdGVtIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uXG4gICAgICovXG4gICAgY3JlYXRlQ3VzdG9tSXRlbTogZnVuY3Rpb24gKCBvcHRpb25zID0ge30gKSB7XG5cbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBjb25zdCBpdGVtID0gb3B0aW9ucy5lbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuICAgICAgICBjb25zdCB7IG9uRGlzcG9zZSB9ID0gb3B0aW9ucztcblxuICAgICAgICBpdGVtLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgaXRlbS5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XG4gICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSAnNDRweCc7XG4gICAgICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRTaXplID0gJzYwJSc7XG4gICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgICAgICBpdGVtLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSBcblx0XHRpdGVtLnN0eWxlLk1velVzZXJTZWxlY3QgPSBcblx0XHRpdGVtLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgICAgIGl0ZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICBpdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG5cbiAgICAgICAgLy8gV2hpdGUgZ2xvdyBvbiBpY29uXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmZpbHRlciA9IFxuXHRcdFx0aXRlbS5zdHlsZS53ZWJraXRGaWx0ZXIgPSAnZHJvcC1zaGFkb3coMCAwIDVweCByZ2JhKDI1NSwyNTUsMjU1LDEpKSc7XG4gICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmZpbHRlciA9IFxuXHRcdFx0aXRlbS5zdHlsZS53ZWJraXRGaWx0ZXIgPSAnJztcbiAgICAgICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgICAgIHRoaXMubWVyZ2VTdHlsZU9wdGlvbnMoIGl0ZW0sIG9wdGlvbnMuc3R5bGUgKTtcblxuICAgICAgICBpZiAoIG9wdGlvbnMub25UYXAgKSB7XG5cbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBvcHRpb25zLm9uVGFwLCBmYWxzZSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBvcHRpb25zLm9uVGFwLCBmYWxzZSApO1xuXG4gICAgICAgICAgICBpZiAoIG9uRGlzcG9zZSApIHsgb3B0aW9ucy5vbkRpc3Bvc2UoKTsgfVxuXG4gICAgICAgIH07XG5cdFx0XG4gICAgICAgIHJldHVybiBpdGVtO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1lcmdlIGl0ZW0gY3NzIHN0eWxlXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBiZSBtZXJnZWQgd2l0aCBzdHlsZVxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyAtIFRoZSBzdHlsZSBvcHRpb25zXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIFRoZSBzYW1lIGVsZW1lbnQgd2l0aCBtZXJnZWQgc3R5bGVzXG4gICAgICovXG4gICAgbWVyZ2VTdHlsZU9wdGlvbnM6IGZ1bmN0aW9uICggZWxlbWVudCwgb3B0aW9ucyA9IHt9ICkge1xuXG4gICAgICAgIGZvciAoIGxldCBwcm9wZXJ0eSBpbiBvcHRpb25zICl7XG5cbiAgICAgICAgICAgIGlmICggb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSggcHJvcGVydHkgKSApIHtcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbIHByb3BlcnR5IF0gPSBvcHRpb25zWyBwcm9wZXJ0eSBdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2Ugd2lkZ2V0cyBieSBkZXRhY2hpbmcgZG9tIGVsZW1lbnRzIGZyb20gY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoIHRoaXMuYmFyRWxlbWVudCApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLmJhckVsZW1lbnQgKTtcbiAgICAgICAgICAgIHRoaXMuYmFyRWxlbWVudC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmJhckVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgIH1cblxuICAgIH1cblx0XG59ICk7XG5cbmV4cG9ydCB7IFdpZGdldCB9OyIsImltcG9ydCB7IEluZm9zcG90IH0gZnJvbSAnLi4vaW5mb3Nwb3QvSW5mb3Nwb3QnO1xuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBUV0VFTiBmcm9tICdAdHdlZW5qcy90d2Vlbi5qcyc7XG5cblxuLyoqXG4gKiBAY2xhc3NkZXNjIEJhc2UgUGFub3JhbWFcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtUSFJFRS5HZW9tZXRyeX0gZ2VvbWV0cnkgLSBUaGUgZ2VvbWV0cnkgZm9yIHRoaXMgcGFub3JhbWFcbiAqIEBwYXJhbSB7VEhSRUUuTWF0ZXJpYWx9IG1hdGVyaWFsIC0gVGhlIG1hdGVyaWFsIGZvciB0aGlzIHBhbm9yYW1hXG4gKi9cbmZ1bmN0aW9uIFBhbm9yYW1hICggZ2VvbWV0cnksIG1hdGVyaWFsICkge1xuXG4gICAgVEhSRUUuTWVzaC5jYWxsKCB0aGlzLCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuICAgIHRoaXMudHlwZSA9ICdwYW5vcmFtYSc7XG5cbiAgICB0aGlzLkltYWdlUXVhbGl0eUxvdyA9IDE7XG4gICAgdGhpcy5JbWFnZVF1YWxpdHlGYWlyID0gMjtcbiAgICB0aGlzLkltYWdlUXVhbGl0eU1lZGl1bSA9IDM7XG4gICAgdGhpcy5JbWFnZVF1YWxpdHlIaWdoID0gNDtcbiAgICB0aGlzLkltYWdlUXVhbGl0eVN1cGVySGlnaCA9IDU7XG5cbiAgICB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uID0gMTAwMDtcblxuICAgIHRoaXMuZGVmYXVsdEluZm9zcG90U2l6ZSA9IDM1MDtcblxuICAgIHRoaXMuY29udGFpbmVyID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcblxuICAgIHRoaXMubGlua2VkU3BvdHMgPSBbXTtcblxuICAgIHRoaXMuaXNJbmZvc3BvdFZpc2libGUgPSBmYWxzZTtcblx0XG4gICAgdGhpcy5saW5raW5nSW1hZ2VVUkwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5saW5raW5nSW1hZ2VTY2FsZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMubWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkJhY2tTaWRlO1xuICAgIHRoaXMubWF0ZXJpYWwub3BhY2l0eSA9IDA7XG5cbiAgICB0aGlzLnNjYWxlLnggKj0gLTE7XG4gICAgdGhpcy5yZW5kZXJPcmRlciA9IC0xO1xuXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcblxuICAgIHRoaXMuaW5mb3Nwb3RBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMgKS50bygge30sIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gLyAyICk7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcy5mYWRlSW4uYmluZCggdGhpcyApICk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtY29udGFpbmVyJywgdGhpcy5zZXRDb250YWluZXIuYmluZCggdGhpcyApICk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApICk7XG5cbiAgICB0aGlzLnNldHVwVHJhbnNpdGlvbnMoKTtcblxufVxuXG5QYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5NZXNoLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogUGFub3JhbWEsXG5cbiAgICAvKipcbiAgICAgKiBBZGRpbmcgYW4gb2JqZWN0XG4gICAgICogVG8gY291bnRlciB0aGUgc2NhbGUueCA9IC0xLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYWRkIGFuIFxuICAgICAqIGVtcHR5IG9iamVjdCB3aXRoIGludmVydGVkIHNjYWxlIG9uIHhcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RIUkVFLk9iamVjdDNEfSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGJlIGFkZGVkXG4gICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuICAgICAgICBsZXQgaW52ZXJ0ZWRPYmplY3Q7XG5cbiAgICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcblxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArKyApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKCBhcmd1bWVudHNbIGkgXSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbiBjYXNlIG9mIGluZm9zcG90c1xuICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xuXG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdCA9IG9iamVjdDtcblxuICAgICAgICAgICAgaWYgKCBvYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIgKSB7IG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy1jb250YWluZXInLCBjb250YWluZXIgfSApOyB9XG5cdFx0XHRcdFxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy1pbmZvc3BvdC1mb2N1cycsIG1ldGhvZDogZnVuY3Rpb24gKCB2ZWN0b3IsIGR1cmF0aW9uLCBlYXNpbmcgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEluZm9zcG90IGZvY3VzIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSBWaWV3ZXIgZnVuY3Rpb24gbmFtZVxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkgeyp9IGRhdGEgLSBUaGUgYXJndW1lbnQgdG8gYmUgcGFzc2VkIGludG8gdGhlIG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3R3ZWVuQ29udHJvbENlbnRlcicsIGRhdGE6IFsgdmVjdG9yLCBkdXJhdGlvbiwgZWFzaW5nIF0gfSApO1xuXG5cbiAgICAgICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSB9ICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gQ291bnRlciBzY2FsZS54ID0gLTEgZWZmZWN0XG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3Quc2NhbGUueCA9IC0xO1xuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3Quc2NhbGVQbGFjZUhvbGRlciA9IHRydWU7XG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdC5hZGQoIG9iamVjdCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBUSFJFRS5PYmplY3QzRC5wcm90b3R5cGUuYWRkLmNhbGwoIHRoaXMsIGludmVydGVkT2JqZWN0ICk7XG5cbiAgICB9LFxuXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMub25Mb2FkKCk7XG5cdFx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsaWNrIGV2ZW50IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gQ2xpY2sgZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgSW5mb3Nwb3QjZGlzbWlzc1xuICAgICAqL1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBldmVudC5pbnRlcnNlY3RzICYmIGV2ZW50LmludGVyc2VjdHMubGVuZ3RoID09PSAwICkge1xuXG4gICAgICAgICAgICB0aGlzLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIERpbWlzcyBldmVudFxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IEluZm9zcG90I2Rpc21pc3NcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzbWlzcycgfSApO1xuXG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBjb250YWluZXIgb2YgdGhpcyBwYW5vcmFtYSBcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG9iamVjdH0gZGF0YSAtIERhdGEgd2l0aCBjb250YWluZXIgaW5mb3JtYXRpb25cbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgSW5mb3Nwb3QjcGFub2xlbnMtY29udGFpbmVyXG4gICAgICovXG4gICAgc2V0Q29udGFpbmVyOiBmdW5jdGlvbiAoIGRhdGEgKSB7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lcjtcblxuICAgICAgICBpZiAoIGRhdGEgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApIHtcblxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBkYXRhICYmIGRhdGEuY29udGFpbmVyICkge1xuXG4gICAgICAgICAgICBjb250YWluZXIgPSBkYXRhLmNvbnRhaW5lcjtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBjb250YWluZXIgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCggZnVuY3Rpb24gKCBjaGlsZCApIHtcblxuICAgICAgICAgICAgICAgIGlmICggY2hpbGQgaW5zdGFuY2VvZiBJbmZvc3BvdCAmJiBjaGlsZC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBTZXQgY29udGFpbmVyIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAqIEBldmVudCBJbmZvc3BvdCNwYW5vbGVucy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gVGhlIGNvbnRhaW5lciBvZiB0aGlzIHBhbm9yYW1hXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy1jb250YWluZXInLCBjb250YWluZXI6IGNvbnRhaW5lciB9ICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBwYW5vcmFtYSBpcyBsb2FkZWRcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjbG9hZFxuICAgICAqL1xuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9hZCBwYW5vcmFtYSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjbG9hZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdsb2FkJyB9ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGlzIGluIHByb2dyZXNzXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI3Byb2dyZXNzXG4gICAgICovXG4gICAgb25Qcm9ncmVzczogZnVuY3Rpb24gKCBwcm9ncmVzcyApIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9hZGluZyBwYW5vcmFtYSBwcm9ncmVzcyBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcHJvZ3Jlc3NcbiAgICAgICAgICogQHByb3BlcnR5IHtvYmplY3R9IHByb2dyZXNzIC0gVGhlIHByb2dyZXNzIG9iamVjdCBjb250YWluaW5nIGxvYWRlZCBhbmQgdG90YWwgYW1vdW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Byb2dyZXNzJywgcHJvZ3Jlc3M6IHByb2dyZXNzIH0gKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gcGFub3JhbWEgbG9hZGluZyBoYXMgZXJyb3JcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjZXJyb3JcbiAgICAgKi9cbiAgICBvbkVycm9yOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvYWRpbmcgcGFub3JhbWEgZXJyb3IgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2Vycm9yXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Vycm9yJyB9ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHpvb20gbGV2ZWwgYmFzZWQgb24gd2luZG93IHdpZHRoXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB6b29tIGxldmVsIGluZGljYXRpbmcgaW1hZ2UgcXVhbGl0eVxuICAgICAqL1xuICAgIGdldFpvb21MZXZlbDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCB6b29tTGV2ZWw7XG5cbiAgICAgICAgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8PSA4MDAgKSB7XG5cbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5RmFpcjtcblxuICAgICAgICB9IGVsc2UgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+IDgwMCAmJiAgd2luZG93LmlubmVyV2lkdGggPD0gMTI4MCApIHtcblxuICAgICAgICAgICAgem9vbUxldmVsID0gdGhpcy5JbWFnZVF1YWxpdHlNZWRpdW07XG5cbiAgICAgICAgfSBlbHNlIGlmICggd2luZG93LmlubmVyV2lkdGggPiAxMjgwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDE5MjAgKSB7XG5cbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5SGlnaDtcblxuICAgICAgICB9IGVsc2UgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+IDE5MjAgKSB7XG5cbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5U3VwZXJIaWdoO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5TG93O1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gem9vbUxldmVsO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0ZXh0dXJlIG9mIGEgcGFub3JhbWFcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RIUkVFLlRleHR1cmV9IHRleHR1cmUgLSBUZXh0dXJlIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVUZXh0dXJlOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cbiAgICAgICAgdGhpcy5tYXRlcmlhbC5tYXAgPSB0ZXh0dXJlO1xuICAgICAgICB0aGlzLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBpbmZvc3BvdHMgaW4gdGhpcyBwYW5vcmFtYVxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzVmlzaWJsZSAtIFZpc2liaWxpdHkgb2YgaW5mb3Nwb3RzXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBkZWxheSAtIERlbGF5IGluIG1pbGxpc2Vjb25kcyB0byBjaGFuZ2UgdmlzaWJpbGl0eVxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNpbmZvc3BvdC1hbmltYXRpb24tY29tcGxldGVcbiAgICAgKi9cbiAgICB0b2dnbGVJbmZvc3BvdFZpc2liaWxpdHk6IGZ1bmN0aW9uICggaXNWaXNpYmxlLCBkZWxheSApIHtcblxuICAgICAgICBkZWxheSA9ICggZGVsYXkgIT09IHVuZGVmaW5lZCApID8gZGVsYXkgOiAwO1xuXG4gICAgICAgIGNvbnN0IHZpc2libGUgPSAoIGlzVmlzaWJsZSAhPT0gdW5kZWZpbmVkICkgPyBpc1Zpc2libGUgOiAoIHRoaXMuaXNJbmZvc3BvdFZpc2libGUgPyBmYWxzZSA6IHRydWUgKTtcblxuICAgICAgICB0aGlzLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuICAgICAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcblxuICAgICAgICAgICAgICAgIGlmICggdmlzaWJsZSApIHtcblxuICAgICAgICAgICAgICAgICAgICBvYmplY3Quc2hvdyggZGVsYXkgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmhpZGUoIGRlbGF5ICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9ICk7XG5cbiAgICAgICAgdGhpcy5pc0luZm9zcG90VmlzaWJsZSA9IHZpc2libGU7XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uIGNvbXBsZXRlIGV2ZW50XG4gICAgICAgIHRoaXMuaW5mb3Nwb3RBbmltYXRpb24ub25Db21wbGV0ZSggZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbXBsZXRlIHRvZ2dsaW5nIGluZm9zcG90IHZpc2liaWxpdHlcbiAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNpbmZvc3BvdC1hbmltYXRpb24tY29tcGxldGVcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2luZm9zcG90LWFuaW1hdGlvbi1jb21wbGV0ZScsIHZpc2libGU6IHZpc2libGUgfSApO1xuXG4gICAgICAgIH0uYmluZCggdGhpcyApICkuZGVsYXkoIGRlbGF5ICkuc3RhcnQoKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgaW1hZ2Ugb2YgdGhpcyBwYW5vcmFtYSdzIGxpbmtpbmcgaW5mb3Nwb3RcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgLSBVcmwgdG8gdGhlIGltYWdlIGFzc2V0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlIC0gU2NhbGUgZmFjdG9yIG9mIHRoZSBpbmZvc3BvdFxuICAgICAqL1xuICAgIHNldExpbmtpbmdJbWFnZTogZnVuY3Rpb24gKCB1cmwsIHNjYWxlICkge1xuXG4gICAgICAgIHRoaXMubGlua2luZ0ltYWdlVVJMID0gdXJsO1xuICAgICAgICB0aGlzLmxpbmtpbmdJbWFnZVNjYWxlID0gc2NhbGU7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTGluayBvbmUtd2F5IHBhbm9yYW1hXG4gICAgICogQHBhcmFtICB7UGFub3JhbWF9IHBhbm8gIC0gVGhlIHBhbm9yYW1hIHRvIGJlIGxpbmtlZCB0b1xuICAgICAqIEBwYXJhbSAge1RIUkVFLlZlY3RvcjN9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIGluZm9zcG90IHdoaWNoIG5hdmlnYXRlcyB0byB0aGUgcGFub1xuICAgICAqIEBwYXJhbSAge251bWJlcn0gW2ltYWdlU2NhbGU9MzAwXSAtIEltYWdlIHNjYWxlIG9mIGxpbmtlZCBpbmZvc3BvdFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gW2ltYWdlU3JjPURhdGFJbWFnZS5BcnJvd10gLSBUaGUgaW1hZ2Ugc291cmNlIG9mIGxpbmtlZCBpbmZvc3BvdFxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGxpbms6IGZ1bmN0aW9uICggcGFubywgcG9zaXRpb24sIGltYWdlU2NhbGUsIGltYWdlU3JjICkge1xuXG4gICAgICAgIGxldCBzY2FsZSwgaW1nO1xuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKCAhcG9zaXRpb24gKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1BsZWFzZSBzcGVjaWZ5IGluZm9zcG90IHBvc2l0aW9uIGZvciBsaW5raW5nJyApO1xuXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluZm9zcG90IHNjYWxlXG4gICAgICAgIGlmICggaW1hZ2VTY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICBzY2FsZSA9IGltYWdlU2NhbGU7XG5cbiAgICAgICAgfSBlbHNlIGlmICggcGFuby5saW5raW5nSW1hZ2VTY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICBzY2FsZSA9IHBhbm8ubGlua2luZ0ltYWdlU2NhbGU7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgc2NhbGUgPSAzMDA7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gSW5mb3Nwb3QgaW1hZ2VcbiAgICAgICAgaWYgKCBpbWFnZVNyYyApIHtcblxuICAgICAgICAgICAgaW1nID0gaW1hZ2VTcmM7XG5cbiAgICAgICAgfSBlbHNlIGlmICggcGFuby5saW5raW5nSW1hZ2VVUkwgKSB7XG5cbiAgICAgICAgICAgIGltZyA9IHBhbm8ubGlua2luZ0ltYWdlVVJMO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGltZyA9IERhdGFJbWFnZS5BcnJvdztcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBpbmZvc3BvdFxuICAgICAgICBjb25zdCBzcG90ID0gbmV3IEluZm9zcG90KCBzY2FsZSwgaW1nICk7XG4gICAgICAgIHNwb3QucG9zaXRpb24uY29weSggcG9zaXRpb24gKTtcbiAgICAgICAgc3BvdC50b1Bhbm9yYW1hID0gcGFubztcbiAgICAgICAgc3BvdC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSBWaWV3ZXIgZnVuY3Rpb24gbmFtZVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHsqfSBkYXRhIC0gVGhlIGFyZ3VtZW50IHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBtZXRob2RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3NldFBhbm9yYW1hJywgZGF0YTogcGFubyB9ICk7XG5cbiAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICB0aGlzLmxpbmtlZFNwb3RzLnB1c2goIHNwb3QgKTtcblxuICAgICAgICB0aGlzLmFkZCggc3BvdCApO1xuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgfSxcblxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5sZW5ndGggPSAwO1x0XG5cbiAgICB9LFxuXG4gICAgc2V0dXBUcmFuc2l0aW9uczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuZmFkZUluQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1hdGVyaWFsIClcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApXG4gICAgICAgICAgICAub25TdGFydCggZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1hdGVyaWFsLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgZmFkZSBpbiBzdGFydCBldmVudFxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1mYWRlLXN0YXJ0XG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdlbnRlci1mYWRlLXN0YXJ0JyB9ICk7XG5cbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgdGhpcy5mYWRlT3V0QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1hdGVyaWFsIClcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYXRlcmlhbC52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIExlYXZlIHBhbm9yYW1hIGNvbXBsZXRlIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xlYXZlLWNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdsZWF2ZS1jb21wbGV0ZScgfSApO1xuXG4gICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIHRoaXMuZW50ZXJUcmFuc2l0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzIClcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgYW5kIGFuaW1hdGlvbiBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZW50ZXItY29tcGxldGUnIH0gKTtcblxuICAgICAgICAgICAgfS5iaW5kICggdGhpcyApIClcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMubGVhdmVUcmFuc2l0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzIClcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApO1xuXG4gICAgfSxcblxuICAgIG9uRmFkZUFuaW1hdGlvblVwZGF0ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGFscGhhID0gdGhpcy5tYXRlcmlhbC5vcGFjaXR5O1xuICAgICAgICBjb25zdCB7IHVuaWZvcm1zIH0gPSB0aGlzLm1hdGVyaWFsO1xuXG4gICAgICAgIGlmICggdW5pZm9ybXMgJiYgdW5pZm9ybXMub3BhY2l0eSApIHtcbiAgICAgICAgICAgIHVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSBhbHBoYTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGZhZGluZyBpbiBhbmltYXRpb25cbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjZW50ZXItZmFkZS1jb21wbGV0ZVxuICAgICAqL1xuICAgIGZhZGVJbjogZnVuY3Rpb24gKCBkdXJhdGlvbiApIHtcblxuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uID49IDAgPyBkdXJhdGlvbiA6IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XG5cbiAgICAgICAgdGhpcy5mYWRlT3V0QW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy5mYWRlSW5BbmltYXRpb25cbiAgICAgICAgICAgIC50byggeyBvcGFjaXR5OiAxIH0sIGR1cmF0aW9uIClcbiAgICAgICAgICAgIC5vblVwZGF0ZSggdGhpcy5vbkZhZGVBbmltYXRpb25VcGRhdGUuYmluZCggdGhpcyApIClcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eSggdHJ1ZSwgZHVyYXRpb24gLyAyICk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFbnRlciBwYW5vcmFtYSBmYWRlIGNvbXBsZXRlIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2VudGVyLWZhZGUtY29tcGxldGVcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2VudGVyLWZhZGUtY29tcGxldGUnIH0gKTtcdFx0XHRcblxuICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgZmFkaW5nIG91dCBhbmltYXRpb25cbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmYWRlT3V0OiBmdW5jdGlvbiAoIGR1cmF0aW9uICkge1xuXG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gPj0gMCA/IGR1cmF0aW9uIDogdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgICAgICB0aGlzLmZhZGVJbkFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuZmFkZU91dEFuaW1hdGlvblxuICAgICAgICAgICAgLnRvKCB7IG9wYWNpdHk6IDAgfSwgZHVyYXRpb24gKVxuICAgICAgICAgICAgLm9uVXBkYXRlKCB0aGlzLm9uRmFkZUFuaW1hdGlvblVwZGF0ZS5iaW5kKCB0aGlzICkgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIGVudGVyaW5nIGEgcGFub3JhbWEgXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2VudGVyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2VudGVyLXN0YXJ0XG4gICAgICovXG4gICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcblxuICAgICAgICB0aGlzLmxlYXZlVHJhbnNpdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuZW50ZXJUcmFuc2l0aW9uXG4gICAgICAgICAgICAudG8oIHt9LCBkdXJhdGlvbiApXG4gICAgICAgICAgICAub25TdGFydCggZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgYW5kIGFuaW1hdGlvbiBzdGFydGluZyBldmVudFxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1zdGFydFxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZW50ZXItc3RhcnQnIH0gKTtcblx0XHRcdFx0XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmxvYWRlZCApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGVJbiggZHVyYXRpb24gKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFxuICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGV2ZW50XG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZW50ZXInIH0gKTtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goIGNoaWxkID0+IHtcblxuICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub3JhbWEtZW50ZXInIH0gKTtcblxuICAgICAgICB9ICk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBsZWF2aW5nIGEgcGFub3JhbWFcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjbGVhdmVcbiAgICAgKi9cbiAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xuXG4gICAgICAgIHRoaXMuZW50ZXJUcmFuc2l0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy5sZWF2ZVRyYW5zaXRpb25cbiAgICAgICAgICAgIC50bygge30sIGR1cmF0aW9uIClcbiAgICAgICAgICAgIC5vblN0YXJ0KCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBMZWF2ZSBwYW5vcmFtYSBhbmQgYW5pbWF0aW9uIHN0YXJ0aW5nIGV2ZW50XG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xlYXZlLXN0YXJ0XG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdsZWF2ZS1zdGFydCcgfSApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlT3V0KCBkdXJhdGlvbiApO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlSW5mb3Nwb3RWaXNpYmlsaXR5KCBmYWxzZSApO1xuXG4gICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSApXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTGVhdmUgcGFub3JhbWEgZXZlbnRcbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xlYXZlXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdsZWF2ZScgfSApO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCggY2hpbGQgPT4ge1xuXG4gICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vcmFtYS1sZWF2ZScgfSApO1xuXG4gICAgICAgIH0gKTtcblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2UgcGFub3JhbWFcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5pbmZvc3BvdEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuZmFkZUluQW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy5mYWRlT3V0QW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy5lbnRlclRyYW5zaXRpb24uc3RvcCgpO1xuICAgICAgICB0aGlzLmxlYXZlVHJhbnNpdGlvbi5zdG9wKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9uIHBhbm9yYW1hIGRpc3Bvc2UgaGFuZGxlclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtIFZpZXdlciBmdW5jdGlvbiBuYW1lXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7Kn0gZGF0YSAtIFRoZSBhcmd1bWVudCB0byBiZSBwYXNzZWQgaW50byB0aGUgbWV0aG9kXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnb25QYW5vcmFtYURpc3Bvc2UnLCBkYXRhOiB0aGlzIH0gKTtcblxuICAgICAgICAvLyByZWN1cnNpdmUgZGlzcG9zYWwgb24gM2Qgb2JqZWN0c1xuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVEaXNwb3NlICggb2JqZWN0ICkge1xuXG4gICAgICAgICAgICBjb25zdCB7IGdlb21ldHJ5LCBtYXRlcmlhbCB9ID0gb2JqZWN0O1xuXG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IG9iamVjdC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcblxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UoIG9iamVjdC5jaGlsZHJlbltpXSApO1xuICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUoIG9iamVjdC5jaGlsZHJlbltpXSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QgKSB7XG5cbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcG9zZSgpO1xuXG4gICAgICAgICAgICB9XG5cdFx0XHRcbiAgICAgICAgICAgIGlmICggZ2VvbWV0cnkgKSB7IGdlb21ldHJ5LmRpc3Bvc2UoKTsgb2JqZWN0Lmdlb21ldHJ5ID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKCBtYXRlcmlhbCApIHsgbWF0ZXJpYWwuZGlzcG9zZSgpOyBvYmplY3QubWF0ZXJpYWwgPSBudWxsOyB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UoIHRoaXMgKTtcblxuICAgICAgICBpZiAoIHRoaXMucGFyZW50ICkge1xuXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmUoIHRoaXMgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn0gKTtcblxuZXhwb3J0IHsgUGFub3JhbWEgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJy4uL2xvYWRlcnMvVGV4dHVyZUxvYWRlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBFcXVpcmVjdGFuZ3VsYXIgYmFzZWQgaW1hZ2UgcGFub3JhbWFcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgdXJsIG9yIEhUTUxJbWFnZUVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gSW1hZ2VQYW5vcmFtYSAoIGltYWdlLCBfZ2VvbWV0cnksIF9tYXRlcmlhbCApIHtcblxuICAgIGNvbnN0IHJhZGl1cyA9IDUwMDA7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBfZ2VvbWV0cnkgfHwgbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KCByYWRpdXMsIDYwLCA0MCApO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gX21hdGVyaWFsIHx8IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBvcGFjaXR5OiAwLCB0cmFuc3BhcmVudDogdHJ1ZSB9ICk7XG5cbiAgICBQYW5vcmFtYS5jYWxsKCB0aGlzLCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuICAgIHRoaXMuc3JjID0gaW1hZ2U7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG5cbn1cblxuSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xuXG4gICAgY29uc3RydWN0b3I6IEltYWdlUGFub3JhbWEsXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGltYWdlIGFzc2V0XG4gICAgICogQHBhcmFtICB7Kn0gc3JjIC0gVXJsIG9yIGltYWdlIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICggc3JjICkge1xuXG4gICAgICAgIHNyYyA9IHNyYyB8fCB0aGlzLnNyYztcblxuICAgICAgICBpZiAoICFzcmMgKSB7IFxuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdJbWFnZSBzb3VyY2UgdW5kZWZpbmVkJyApO1xuXG4gICAgICAgICAgICByZXR1cm47IFxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBUZXh0dXJlTG9hZGVyLmxvYWQoIHNyYywgdGhpcy5vbkxvYWQuYmluZCggdGhpcyApLCB0aGlzLm9uUHJvZ3Jlc3MuYmluZCggdGhpcyApLCB0aGlzLm9uRXJyb3IuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc3JjIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCApIHtcblxuICAgICAgICAgICAgdGhpcy5vbkxvYWQoIG5ldyBUSFJFRS5UZXh0dXJlKCBzcmMgKSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW1hZ2UgaXMgbG9hZGVkXG4gICAgICogQHBhcmFtICB7VEhSRUUuVGV4dHVyZX0gdGV4dHVyZSAtIFRleHR1cmUgdG8gYmUgdXBkYXRlZFxuICAgICAqIEBtZW1iZXJPZiBJbWFnZVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cbiAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0XG4gICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSggdGV4dHVyZSApO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIFBhbm9yYW1hLnByb3RvdHlwZS5vbkxvYWQuYmluZCggdGhpcyApICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXRcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLnJlc2V0LmNhbGwoIHRoaXMgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlXG4gICAgICogQG1lbWJlck9mIEltYWdlUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgeyBtYXRlcmlhbDogeyBtYXAgfSB9ID0gdGhpcztcblxuICAgICAgICAvLyBSZWxlYXNlIGNhY2hlZCBpbWFnZVxuICAgICAgICBUSFJFRS5DYWNoZS5yZW1vdmUoIHRoaXMuc3JjICk7XG5cbiAgICAgICAgaWYgKCBtYXAgKSB7IG1hcC5kaXNwb3NlKCk7IH1cblxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XG5cbiAgICB9XG5cbn0gKTtcblxuZXhwb3J0IHsgSW1hZ2VQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBFbXB0eSBwYW5vcmFtYVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEVtcHR5UGFub3JhbWEgKCkge1xuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHgwMDAwMDAsIG9wYWNpdHk6IDAsIHRyYW5zcGFyZW50OiB0cnVlIH0gKTtcblxuICAgIGdlb21ldHJ5LmFkZEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSggbmV3IEZsb2F0MzJBcnJheSgpLCAxICkgKTtcblxuICAgIFBhbm9yYW1hLmNhbGwoIHRoaXMsIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG59XG5cbkVtcHR5UGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggUGFub3JhbWEucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBFbXB0eVBhbm9yYW1hXG5cbn0gKTtcblxuZXhwb3J0IHsgRW1wdHlQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XG5pbXBvcnQgeyBDdWJlVGV4dHVyZUxvYWRlciB9IGZyb20gJy4uL2xvYWRlcnMvQ3ViZVRleHR1cmVMb2FkZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgQ3ViZW1hcC1iYXNlZCBwYW5vcmFtYVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2FycmF5fSBpbWFnZXMgLSBBcnJheSBvZiA2IHVybHMgdG8gaW1hZ2VzLCBvbmUgZm9yIGVhY2ggc2lkZSBvZiB0aGUgQ3ViZVRleHR1cmUuIFRoZSB1cmxzIHNob3VsZCBiZSBzcGVjaWZpZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjogcG9zLXgsIG5lZy14LCBwb3MteSwgbmVnLXksIHBvcy16LCBuZWctelxuICovXG5mdW5jdGlvbiBDdWJlUGFub3JhbWEgKCBpbWFnZXMgPSBbXSApe1xuXG4gICAgY29uc3QgZWRnZUxlbmd0aCA9IDEwMDAwO1xuICAgIGNvbnN0IHNoYWRlciA9IE9iamVjdC5hc3NpZ24oIHt9LCBUSFJFRS5TaGFkZXJMaWJbICdjdWJlJyBdICk7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoIGVkZ2VMZW5ndGgsIGVkZ2VMZW5ndGgsIGVkZ2VMZW5ndGggKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXIsXG4gICAgICAgIHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcbiAgICAgICAgdW5pZm9ybXM6IHNoYWRlci51bmlmb3JtcyxcbiAgICAgICAgc2lkZTogVEhSRUUuQmFja1NpZGUsXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlXG5cbiAgICB9ICk7XG5cbiAgICBQYW5vcmFtYS5jYWxsKCB0aGlzLCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuZWRnZUxlbmd0aCA9IGVkZ2VMZW5ndGg7XG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gMDtcblxufVxuXG5DdWJlUGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggUGFub3JhbWEucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBDdWJlUGFub3JhbWEsXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIDYgaW1hZ2VzIGFuZCBiaW5kIGxpc3RlbmVyc1xuICAgICAqIEBtZW1iZXJPZiBDdWJlUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgQ3ViZVRleHR1cmVMb2FkZXIubG9hZCggXHRcblxuICAgICAgICAgICAgdGhpcy5pbWFnZXMsIFxuXG4gICAgICAgICAgICB0aGlzLm9uTG9hZC5iaW5kKCB0aGlzICksIFxuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKSwgXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IuYmluZCggdGhpcyApIFxuXG4gICAgICAgICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIDYgdGV4dHVyZXMgYXJlIHJlYWR5XG4gICAgICogQHBhcmFtICB7VEhSRUUuQ3ViZVRleHR1cmV9IHRleHR1cmUgLSBDdWJlIHRleHR1cmVcbiAgICAgKiBAbWVtYmVyT2YgQ3ViZVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cdFx0XG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbICd0Q3ViZScgXS52YWx1ZSA9IHRleHR1cmU7XG5cbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZVxuICAgICAqIEBtZW1iZXJPZiBDdWJlUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHRcblxuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRDdWJlO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goICggaW1hZ2UgKSA9PiB7IFRIUkVFLkNhY2hlLnJlbW92ZSggaW1hZ2UgKTsgfSApO1xuXG4gICAgICAgIGlmICggdmFsdWUgaW5zdGFuY2VvZiBUSFJFRS5DdWJlVGV4dHVyZSApIHtcblxuICAgICAgICAgICAgdmFsdWUuZGlzcG9zZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XG5cbiAgICB9XG5cbn0gKTtcblxuZXhwb3J0IHsgQ3ViZVBhbm9yYW1hIH07IiwiaW1wb3J0IHsgQ3ViZVBhbm9yYW1hIH0gZnJvbSAnLi9DdWJlUGFub3JhbWEnO1xuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIEJhc2ljIHBhbm9yYW1hIHdpdGggNiBwcmUtZGVmaW5lZCBncmlkIGltYWdlc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEJhc2ljUGFub3JhbWEgKCkge1xuXG4gICAgY29uc3QgaW1hZ2VzID0gW107XG5cbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCA2OyBpKysgKSB7XG5cbiAgICAgICAgaW1hZ2VzLnB1c2goIERhdGFJbWFnZS5XaGl0ZVRpbGUgKTtcblxuICAgIH1cblxuICAgIEN1YmVQYW5vcmFtYS5jYWxsKCB0aGlzLCBpbWFnZXMgKTtcblxufVxuXG5CYXNpY1Bhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIEN1YmVQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xuXG4gICAgY29uc3RydWN0b3I6IEJhc2ljUGFub3JhbWFcblxufSApO1xuXG5leHBvcnQgeyBCYXNpY1Bhbm9yYW1hIH07IiwiaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL1Bhbm9yYW1hJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFZpZGVvIFBhbm9yYW1hXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgLSBFcXVpcmVjdGFuZ3VsYXIgdmlkZW8gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9uIGZvciB2aWRlbyBzZXR0aW5nc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW29wdGlvbnMudmlkZW9FbGVtZW50XSAtIEhUTUw1IHZpZGVvIGVsZW1lbnQgY29udGFpbnMgdGhlIHZpZGVvXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxvb3A9dHJ1ZV0gLSBTcGVjaWZ5IGlmIHRoZSB2aWRlbyBzaG91bGQgbG9vcCBpbiB0aGUgZW5kXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm11dGVkPXRydWVdIC0gTXV0ZSB0aGUgdmlkZW8gb3Igbm90LiBOZWVkIHRvIGJlIHRydWUgaW4gb3JkZXIgdG8gYXV0b3BsYXkgb24gc29tZSBicm93c2Vyc1xuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvcGxheT1mYWxzZV0gLSBTcGVjaWZ5IGlmIHRoZSB2aWRlbyBzaG91bGQgYXV0byBwbGF5XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnBsYXlzaW5saW5lPXRydWVdIC0gU3BlY2lmeSBpZiB2aWRlbyBzaG91bGQgcGxheSBpbmxpbmUgZm9yIGlPUy4gSWYgeW91IHdhbnQgaXQgdG8gYXV0byBwbGF5IGlubGluZSwgc2V0IGJvdGggYXV0b3BsYXkgYW5kIG11dGVkIG9wdGlvbnMgdG8gdHJ1ZVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJdIC0gU2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBmb3IgdGhlIHZpZGVvLCB3aGljaCBhbGxvd3MgZm9yIGNyb3NzLW9yaWdpbiB2aWRlb3MgaW4gc29tZSBicm93c2VycyAoRmlyZWZveCwgQ2hyb21lKS4gU2V0IHRvIGVpdGhlciBcImFub255bW91c1wiIG9yIFwidXNlLWNyZWRlbnRpYWxzXCIuXG4gKiBAcGFyYW0ge251bWJlcn0gW3JhZGl1cz01MDAwXSAtIFRoZSBtaW5pbXVtIHJhZGl1cyBmb3IgdGhpcyBwYW5vcmFtXG4gKi9cbmZ1bmN0aW9uIFZpZGVvUGFub3JhbWEgKCBzcmMsIG9wdGlvbnMgPSB7fSApIHtcblxuICAgIGNvbnN0IHJhZGl1cyA9IDUwMDA7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoIHJhZGl1cywgNjAsIDQwICk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgb3BhY2l0eTogMCwgdHJhbnNwYXJlbnQ6IHRydWUgfSApO1xuXG4gICAgUGFub3JhbWEuY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cbiAgICB0aGlzLnNyYyA9IHNyYztcblxuICAgIHRoaXMub3B0aW9ucyA9IHtcblxuICAgICAgICB2aWRlb0VsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd2aWRlbycgKSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbXV0ZWQ6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgcGxheXNpbmxpbmU6IHRydWUsXG4gICAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJ1xuXG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oIHRoaXMub3B0aW9ucywgb3B0aW9ucyApO1xuXG4gICAgdGhpcy52aWRlb0VsZW1lbnQgPSB0aGlzLm9wdGlvbnMudmlkZW9FbGVtZW50O1xuICAgIHRoaXMudmlkZW9Qcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIHRoaXMucGF1c2VWaWRlby5iaW5kKCB0aGlzICkgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgdGhpcy5yZXN1bWVWaWRlb1Byb2dyZXNzLmJpbmQoIHRoaXMgKSApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLXRvZ2dsZScsIHRoaXMudG9nZ2xlVmlkZW8uYmluZCggdGhpcyApICk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tdGltZScsIHRoaXMuc2V0VmlkZW9DdXJyZW50VGltZS5iaW5kKCB0aGlzICkgKTtcblxufTtcblxuVmlkZW9QYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xuXG4gICAgY29uc3RydWN0b3I6IFZpZGVvUGFub3JhbWEsXG5cbiAgICBpc01vYmlsZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xuICAgICAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KSggd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgd2luZG93Lm5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhICk7XG4gICAgICAgIHJldHVybiBjaGVjaztcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHZpZGVvIHBhbm9yYW1hXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgIFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgbXV0ZWQsIGxvb3AsIGF1dG9wbGF5LCBwbGF5c2lubGluZSwgY3Jvc3NPcmlnaW4gfSA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xuICAgICAgICBjb25zdCBvblByb2dyZXNzID0gdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgY29uc3Qgb25Mb2FkID0gdGhpcy5vbkxvYWQuYmluZCggdGhpcyApO1xuXG4gICAgICAgIHZpZGVvLmxvb3AgPSBsb29wO1xuICAgICAgICB2aWRlby5hdXRvcGxheSA9IGF1dG9wbGF5O1xuICAgICAgICB2aWRlby5wbGF5c2lubGluZSA9IHBsYXlzaW5saW5lO1xuICAgICAgICB2aWRlby5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICAgICAgICB2aWRlby5tdXRlZCA9IG11dGVkO1xuXHRcdFxuICAgICAgICBpZiAoIHBsYXlzaW5saW5lICkge1xuXG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICdwbGF5c2lubGluZScsICcnICk7XG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICd3ZWJraXQtcGxheXNpbmxpbmUnLCAnJyApO1xuXG4gICAgICAgIH0gXG5cbiAgICAgICAgY29uc3Qgb25sb2FkZWRkYXRhID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VmlkZW9UZXh0dXJlKCB2aWRlbyApO1xuXG4gICAgICAgICAgICBpZiAoIGF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiBmYWxzZSB9ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9yIG1vYmlsZSBzaWxlbnQgYXV0b3BsYXlcbiAgICAgICAgICAgIGlmICggdGhpcy5pc01vYmlsZSgpICkge1xuXG4gICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcblxuICAgICAgICAgICAgICAgIGlmICggYXV0b3BsYXkgJiYgbXV0ZWQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiBmYWxzZSB9ICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogdHJ1ZSB9ICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBGaXggZm9yIHRocmVlanMgcjg5IGRlbGF5ZWQgdXBkYXRlXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwubWFwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiAxLCB0b3RhbDogMSB9ICk7XG4gICAgICAgICAgICAgICAgb25Mb2FkKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGxvYWRlZCApO1xuXHRcdFx0XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWR5IHN0YXRlIG9mIHRoZSBhdWRpby92aWRlbyBlbGVtZW50XG4gICAgICAgICAqIDAgPSBIQVZFX05PVEhJTkcgLSBubyBpbmZvcm1hdGlvbiB3aGV0aGVyIG9yIG5vdCB0aGUgYXVkaW8vdmlkZW8gaXMgcmVhZHlcbiAgICAgICAgICogMSA9IEhBVkVfTUVUQURBVEEgLSBtZXRhZGF0YSBmb3IgdGhlIGF1ZGlvL3ZpZGVvIGlzIHJlYWR5XG4gICAgICAgICAqIDIgPSBIQVZFX0NVUlJFTlRfREFUQSAtIGRhdGEgZm9yIHRoZSBjdXJyZW50IHBsYXliYWNrIHBvc2l0aW9uIGlzIGF2YWlsYWJsZSwgYnV0IG5vdCBlbm91Z2ggZGF0YSB0byBwbGF5IG5leHQgZnJhbWUvbWlsbGlzZWNvbmRcbiAgICAgICAgICogMyA9IEhBVkVfRlVUVVJFX0RBVEEgLSBkYXRhIGZvciB0aGUgY3VycmVudCBhbmQgYXQgbGVhc3QgdGhlIG5leHQgZnJhbWUgaXMgYXZhaWxhYmxlXG4gICAgICAgICAqIDQgPSBIQVZFX0VOT1VHSF9EQVRBIC0gZW5vdWdoIGRhdGEgYXZhaWxhYmxlIHRvIHN0YXJ0IHBsYXlpbmdcbiAgICAgICAgICovXG4gICAgICAgIGlmICggdmlkZW8ucmVhZHlTdGF0ZSA+IDIgKSB7XG5cbiAgICAgICAgICAgIG9ubG9hZGVkZGF0YS5jYWxsKCB0aGlzICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCB2aWRlby5xdWVyeVNlbGVjdG9yQWxsKCAnc291cmNlJyApLmxlbmd0aCA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzb3VyY2UnICk7XG4gICAgICAgICAgICAgICAgc291cmNlLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgICAgICAgICAgIHZpZGVvLmFwcGVuZENoaWxkKCBzb3VyY2UgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2aWRlby5sb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCAnbG9hZGVkZGF0YScsIG9ubG9hZGVkZGF0YS5iaW5kKCB0aGlzICkgKTtcblx0XHRcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMudmlkZW9Qcm9ncmVzcyA9IHZpZGVvLmR1cmF0aW9uID49IDAgPyB2aWRlby5jdXJyZW50VGltZSAvIHZpZGVvLmR1cmF0aW9uIDogMDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAnb25WaWRlb1VwZGF0ZSdcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhIC0gVGhlIHBlcmNlbnRhZ2Ugb2YgdmlkZW8gcHJvZ3Jlc3MuIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnb25WaWRlb1VwZGF0ZScsIGRhdGE6IHRoaXMudmlkZW9Qcm9ncmVzcyB9ICk7XG5cbiAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCAnZW5kZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcbiAgICAgICAgICAgIGlmICggIWxvb3AgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VmlkZW8oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogdHJ1ZSB9ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQoIHRoaXMgKSwgZmFsc2UgKTsgXG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHZpZGVvIHRleHR1cmVcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW8gIC0gVGhlIGh0bWw1IHZpZGVvIGVsZW1lbnRcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcbiAgICAgKi9cbiAgICBzZXRWaWRlb1RleHR1cmU6IGZ1bmN0aW9uICggdmlkZW8gKSB7XG5cbiAgICAgICAgaWYgKCAhdmlkZW8gKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdmlkZW9UZXh0dXJlID0gbmV3IFRIUkVFLlZpZGVvVGV4dHVyZSggdmlkZW8gKTtcbiAgICAgICAgdmlkZW9UZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdmlkZW9UZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcbiAgICAgICAgdmlkZW9UZXh0dXJlLmZvcm1hdCA9IFRIUkVFLlJHQkZvcm1hdDtcblxuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoIHZpZGVvVGV4dHVyZSApO1xuXHRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXRcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQgPSB1bmRlZmluZWQ7XHRcblxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUucmVzZXQuY2FsbCggdGhpcyApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHZpZGVvIGlzIHBhdXNlZFxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBpcyB2aWRlbyBwYXVzZWQgb3Igbm90XG4gICAgICovXG4gICAgaXNWaWRlb1BhdXNlZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvRWxlbWVudC5wYXVzZWQ7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHZpZGVvIHRvIHBsYXkgb3IgcGF1c2VcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRvZ2dsZVZpZGVvOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcblxuICAgICAgICBpZiAoICF2aWRlbyApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdmlkZW9bIHZpZGVvLnBhdXNlZCA/ICdwbGF5JyA6ICdwYXVzZScgXSgpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB2aWRlbyBjdXJyZW50VGltZVxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IC0gRXZlbnQgY29udGFpbnMgcGVyY2VudGFnZS4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICovXG4gICAgc2V0VmlkZW9DdXJyZW50VGltZTogZnVuY3Rpb24gKCB7IHBlcmNlbnRhZ2UgfSApIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggdmlkZW8gJiYgIU51bWJlci5pc05hTiggcGVyY2VudGFnZSApICYmIHBlcmNlbnRhZ2UgIT09IDEgKSB7XG5cbiAgICAgICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwZXJjZW50YWdlO1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnb25WaWRlb1VwZGF0ZScsIGRhdGE6IHBlcmNlbnRhZ2UgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQbGF5IHZpZGVvXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgVmlkZW9QYW5vcmFtYSNwbGF5XG4gICAgICogQGZpcmVzIFZpZGVvUGFub3JhbWEjcGxheS1lcnJvclxuICAgICAqL1xuICAgIHBsYXlWaWRlbzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBsYXlWaWRlbyA9IHRoaXMucGxheVZpZGVvLmJpbmQoIHRoaXMgKTtcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IHRoaXMuZGlzcGF0Y2hFdmVudC5iaW5kKCB0aGlzICk7XG4gICAgICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQbGF5IGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFZpZGVvUGFub3JhbWEjcGxheVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGxheScgfSApO1xuXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoIGVycm9yICkgPT4ge1xuXG4gICAgICAgICAgICAvLyBFcnJvciBwbGF5aW5nIHZpZGVvLiBSZXRyeSBuZXh0IGZyYW1lLiBQb3NzaWJseSBXYWl0aW5nIGZvciB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBwbGF5VmlkZW8gKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQbGF5IGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFZpZGVvUGFub3JhbWEjcGxheS1lcnJvclxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGxheS1lcnJvcicsIGVycm9yIH0gKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICggdmlkZW8gJiYgdmlkZW8ucGF1c2VkICkge1xuXG4gICAgICAgICAgICB2aWRlby5wbGF5KCkudGhlbiggb25TdWNjZXNzICkuY2F0Y2goIG9uRXJyb3IgKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgdmlkZW9cbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBWaWRlb1Bhbm9yYW1hI3BhdXNlXG4gICAgICovXG4gICAgcGF1c2VWaWRlbzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCB2aWRlbyAmJiAhdmlkZW8ucGF1c2VkICkge1xuXG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUGF1c2UgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZGVvUGFub3JhbWEjcGF1c2VcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGF1c2UnIH0gKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXN1bWUgdmlkZW9cbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlc3VtZVZpZGVvUHJvZ3Jlc3M6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggdmlkZW8ucmVhZHlTdGF0ZSA+PSA0ICYmIHZpZGVvLmF1dG9wbGF5ICYmICF0aGlzLmlzTW9iaWxlKCkgKSB7XG5cbiAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKCk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogZmFsc2UgfSApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMucGF1c2VWaWRlbygpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IHRydWUgfSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFZpZGVvQ3VycmVudFRpbWUoIHsgcGVyY2VudGFnZTogdGhpcy52aWRlb1Byb2dyZXNzIH0gKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB2aWRlbyBhdCBzdGF0aW5nIHBvaW50XG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXNldFZpZGVvOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcblxuICAgICAgICBpZiAoIHZpZGVvICkge1xuXG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvQ3VycmVudFRpbWUoIHsgcGVyY2VudGFnZTogMCB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHZpZGVvIGlzIG11dGVkXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIGlzIHZpZGVvIG11dGVkIG9yIG5vdFxuICAgICAqL1xuICAgIGlzVmlkZW9NdXRlZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvRWxlbWVudC5tdXRlZDtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNdXRlIHZpZGVvXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBtdXRlVmlkZW86IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xuXG4gICAgICAgIGlmICggdmlkZW8gJiYgIXZpZGVvLm11dGVkICkge1xuXG4gICAgICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndm9sdW1lY2hhbmdlJyB9ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5tdXRlIHZpZGVvXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1bm11dGVWaWRlbzogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCB2aWRlbyAmJiB0aGlzLmlzVmlkZW9NdXRlZCgpICkge1xuXG4gICAgICAgICAgICB2aWRlby5tdXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZvbHVtZWNoYW5nZScgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZpZGVvIGVsZW1lbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXRWaWRlb0VsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb0VsZW1lbnQ7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZSB2aWRlbyBwYW5vcmFtYVxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgbWF0ZXJpYWw6IHsgbWFwIH0gfSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5wYXVzZVZpZGVvKCk7XG5cdFx0XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xlYXZlJywgdGhpcy5wYXVzZVZpZGVvLmJpbmQoIHRoaXMgKSApO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgdGhpcy5yZXN1bWVWaWRlb1Byb2dyZXNzLmJpbmQoIHRoaXMgKSApO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd2aWRlby10b2dnbGUnLCB0aGlzLnRvZ2dsZVZpZGVvLmJpbmQoIHRoaXMgKSApO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd2aWRlby10aW1lJywgdGhpcy5zZXRWaWRlb0N1cnJlbnRUaW1lLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIGlmICggbWFwICkgeyBtYXAuZGlzcG9zZSgpOyB9XG5cbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xuXG4gICAgfVxuXG59ICk7XG5cbmV4cG9ydCB7IFZpZGVvUGFub3JhbWEgfTsiLCJcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICcuL1RleHR1cmVMb2FkZXInO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgR29vZ2xlIFN0cmVldCBWaWV3IExvYWRlclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1ldGVycyBcbiAqL1xuZnVuY3Rpb24gR29vZ2xlU3RyZWV0dmlld0xvYWRlciAoIHBhcmFtZXRlcnMgPSB7fSApIHtcblxuICAgIHRoaXMuX3BhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMuX3pvb20gPSBudWxsO1xuICAgIHRoaXMuX3Bhbm9JZCA9IG51bGw7XG4gICAgdGhpcy5fcGFub0NsaWVudCA9IG5ldyBnb29nbGUubWFwcy5TdHJlZXRWaWV3U2VydmljZSgpO1xuICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB0aGlzLl90b3RhbCA9IDA7XG4gICAgdGhpcy5fY2FudmFzID0gW107XG4gICAgdGhpcy5fY3R4ID0gW107XG4gICAgdGhpcy5fd2MgPSAwO1xuICAgIHRoaXMuX2hjID0gMDtcbiAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XG4gICAgdGhpcy5jb3B5cmlnaHQgPSAnJztcbiAgICB0aGlzLm9uU2l6ZUNoYW5nZSA9IG51bGw7XG4gICAgdGhpcy5vblBhbm9yYW1hTG9hZCA9IG51bGw7XG5cbiAgICB0aGlzLmxldmVsc1cgPSBbIDEsIDIsIDQsIDcsIDEzLCAyNiBdO1xuICAgIHRoaXMubGV2ZWxzSCA9IFsgMSwgMSwgMiwgNCwgNywgMTMgXTtcblxuICAgIHRoaXMud2lkdGhzID0gWyA0MTYsIDgzMiwgMTY2NCwgMzMyOCwgNjY1NiwgMTMzMTIgXTtcbiAgICB0aGlzLmhlaWdodHMgPSBbIDQxNiwgNDE2LCA4MzIsIDE2NjQsIDMzMjgsIDY2NTYgXTtcblxuICAgIHRoaXMubWF4VyA9IDY2NTY7XG4gICAgdGhpcy5tYXhIID0gNjY1NjtcblxuICAgIGxldCBnbDtcblxuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcblxuICAgICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnZXhwZXJpbWVudGFsLXdlYmdsJyApO1xuXG4gICAgICAgIGlmKCAhZ2wgKSB7XG5cbiAgICAgICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoICd3ZWJnbCcgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgY2F0Y2ggKCBlcnJvciApIHtcblxuICAgIH1cblxuICAgIHRoaXMubWF4VyA9IE1hdGgubWF4KCBnbC5nZXRQYXJhbWV0ZXIoIGdsLk1BWF9URVhUVVJFX1NJWkUgKSwgdGhpcy5tYXhXICk7XG4gICAgdGhpcy5tYXhIID0gTWF0aC5tYXgoIGdsLmdldFBhcmFtZXRlciggZ2wuTUFYX1RFWFRVUkVfU0laRSApLCB0aGlzLm1heEggKTtcblxufVxuXG5PYmplY3QuYXNzaWduKCBHb29nbGVTdHJlZXR2aWV3TG9hZGVyLnByb3RvdHlwZSwge1xuXG4gICAgY29uc3RydWN0b3I6IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIsXG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJvZ3Jlc3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbG9hZGVkIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbCBcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldFByb2dyZXNzOiBmdW5jdGlvbiAoIGxvYWRlZCwgdG90YWwgKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLm9uUHJvZ3Jlc3MgKSB7XG5cbiAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzcyggeyBsb2FkZWQ6IGxvYWRlZCwgdG90YWw6IHRvdGFsIH0gKTtcblxuICAgICAgICB9XG5cdFx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkYXB0IHRleHR1cmUgdG8gem9vbVxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRhcHRUZXh0dXJlVG9ab29tOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgdyA9IHRoaXMud2lkdGhzIFsgdGhpcy5fem9vbSBdO1xuICAgICAgICBjb25zdCBoID0gdGhpcy5oZWlnaHRzWyB0aGlzLl96b29tIF07XG5cbiAgICAgICAgY29uc3QgbWF4VyA9IHRoaXMubWF4VztcbiAgICAgICAgY29uc3QgbWF4SCA9IHRoaXMubWF4SDtcblxuICAgICAgICB0aGlzLl93YyA9IE1hdGguY2VpbCggdyAvIG1heFcgKTtcbiAgICAgICAgdGhpcy5faGMgPSBNYXRoLmNlaWwoIGggLyBtYXhIICk7XG5cbiAgICAgICAgZm9yKCBsZXQgeSA9IDA7IHkgPCB0aGlzLl9oYzsgeSsrICkge1xuICAgICAgICAgICAgZm9yKCBsZXQgeCA9IDA7IHggPCB0aGlzLl93YzsgeCsrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuICAgICAgICAgICAgICAgIGlmKCB4IDwgKCB0aGlzLl93YyAtIDEgKSApIGMud2lkdGggPSBtYXhXOyBlbHNlIGMud2lkdGggPSB3IC0gKCBtYXhXICogeCApO1xuICAgICAgICAgICAgICAgIGlmKCB5IDwgKCB0aGlzLl9oYyAtIDEgKSApIGMuaGVpZ2h0ID0gbWF4SDsgZWxzZSBjLmhlaWdodCA9IGggLSAoIG1heEggKiB5ICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLnB1c2goIGMgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHgucHVzaCggYy5nZXRDb250ZXh0KCAnMmQnICkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2UgZnJvbSB0aWxlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICogQHBhcmFtIHsqfSB0ZXh0dXJlIFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY29tcG9zZUZyb21UaWxlOiBmdW5jdGlvbiAoIHgsIHksIHRleHR1cmUgKSB7XG5cbiAgICAgICAgY29uc3QgbWF4VyA9IHRoaXMubWF4VztcbiAgICAgICAgY29uc3QgbWF4SCA9IHRoaXMubWF4SDtcblxuICAgICAgICB4ICo9IDUxMjtcbiAgICAgICAgeSAqPSA1MTI7XG5cbiAgICAgICAgY29uc3QgcHggPSBNYXRoLmZsb29yKCB4IC8gbWF4VyApO1xuICAgICAgICBjb25zdCBweSA9IE1hdGguZmxvb3IoIHkgLyBtYXhIICk7XG5cbiAgICAgICAgeCAtPSBweCAqIG1heFc7XG4gICAgICAgIHkgLT0gcHkgKiBtYXhIO1xuXG4gICAgICAgIHRoaXMuX2N0eFsgcHkgKiB0aGlzLl93YyArIHB4IF0uZHJhd0ltYWdlKCB0ZXh0dXJlLCAwLCAwLCB0ZXh0dXJlLndpZHRoLCB0ZXh0dXJlLmhlaWdodCwgeCwgeSwgNTEyLCA1MTIgKTtcblxuICAgICAgICB0aGlzLnByb2dyZXNzKCk7XG5cdFx0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFByb2dyZXNzXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwcm9ncmVzczogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5fY291bnQrKztcblx0XHRcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyggdGhpcy5fY291bnQsIHRoaXMuX3RvdGFsICk7XG5cdFx0XG4gICAgICAgIGlmICggdGhpcy5fY291bnQgPT09IHRoaXMuX3RvdGFsKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5fY2FudmFzO1xuICAgICAgICAgICAgdGhpcy5wYW5vSWQgPSB0aGlzLl9wYW5vSWQ7XG4gICAgICAgICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tO1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMub25QYW5vcmFtYUxvYWQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFub3JhbWFMb2FkKCB0aGlzLl9jYW52YXNbIDAgXSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlIHBhbm9yYW1hXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb21wb3NlUGFub3JhbWE6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnNldFByb2dyZXNzKCAwLCAxICk7XG5cdFx0XG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLmxldmVsc1dbIHRoaXMuX3pvb20gXTtcbiAgICAgICAgY29uc3QgaCA9IHRoaXMubGV2ZWxzSFsgdGhpcy5fem9vbSBdO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFxuICAgICAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX3RvdGFsID0gdyAqIGg7XG5cbiAgICAgICAgY29uc3QgeyB1c2VXZWJHTCB9ID0gdGhpcy5fcGFyYW1ldGVycztcblxuICAgICAgICBmb3IoIGxldCB5ID0gMDsgeSA8IGg7IHkrKyApIHtcbiAgICAgICAgICAgIGZvciggbGV0IHggPSAwOyB4IDwgdzsgeCsrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2dlbzAuZ2dwaHQuY29tL2Niaz9jYl9jbGllbnQ9bWFwc19zdi50YWN0aWxlJmF1dGh1c2VyPTAmaGw9ZW4mb3V0cHV0PXRpbGUmem9vbT0nICsgdGhpcy5fem9vbSArICcmeD0nICsgeCArICcmeT0nICsgeSArICcmcGFub2lkPScgKyB0aGlzLl9wYW5vSWQgKyAnJm5idCZmb3Zlcj0yJztcbiAgICAgICAgICAgICAgICAoIGZ1bmN0aW9uKCB4LCB5ICkgeyBcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVzZVdlYkdMICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IFRleHR1cmVMb2FkZXIubG9hZCggdXJsLCBudWxsLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvc2VGcm9tVGlsZSggeCwgeSwgdGV4dHVyZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvc2VGcm9tVGlsZSggeCwgeSwgdGhpcyApO1x0XHRcdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSApKCB4LCB5ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0XHRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9hZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYW5vaWQgXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbiAoIHBhbm9pZCApIHtcblxuICAgICAgICB0aGlzLmxvYWRQYW5vKCBwYW5vaWQgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHBhbm9yYW1hXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkUGFubzogZnVuY3Rpb24oIGlkICkge1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9wYW5vQ2xpZW50LmdldFBhbm9yYW1hQnlJZCggaWQsIGZ1bmN0aW9uIChyZXN1bHQsIHN0YXR1cykge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuU3RyZWV0Vmlld1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgIHNlbGYucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHNlbGYuY29weXJpZ2h0ID0gcmVzdWx0LmNvcHlyaWdodDtcbiAgICAgICAgICAgICAgICBzZWxmLl9wYW5vSWQgPSByZXN1bHQubG9jYXRpb24ucGFubztcbiAgICAgICAgICAgICAgICBzZWxmLmNvbXBvc2VQYW5vcmFtYSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0XHRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHpvb20gbGV2ZWxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geiBcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldFpvb206IGZ1bmN0aW9uKCB6ICkge1xuXG4gICAgICAgIHRoaXMuX3pvb20gPSB6O1xuICAgICAgICB0aGlzLmFkYXB0VGV4dHVyZVRvWm9vbSgpO1xuICAgIH1cblx0XG59ICk7XG5cbmV4cG9ydCB7IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIgfTsiLCJpbXBvcnQgeyBJbWFnZVBhbm9yYW1hIH0gZnJvbSAnLi9JbWFnZVBhbm9yYW1hJztcbmltcG9ydCB7IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIgfSBmcm9tICcuLi9sb2FkZXJzL0dvb2dsZVN0cmVldHZpZXdMb2FkZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgR29vZ2xlIHN0cmVldHZpZXcgcGFub3JhbWFcbiAqIEBkZXNjcmlwdGlvbiBbSG93IHRvIGdldCBQYW5vcmFtYSBJRF17QGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTkxNjE0OS9nb29nbGUtbWFwcy1zdHJlZXR2aWV3LWhvdy10by1nZXQtcGFub3JhbWEtaWR9XG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYW5vSWQgLSBQYW5vcmFtYSBpZCBmcm9tIEdvb2dsZSBTdHJlZXR2aWV3IFxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlLZXldIC0gR29vZ2xlIFN0cmVldCBWaWV3IEFQSSBLZXlcbiAqL1xuZnVuY3Rpb24gR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hICggcGFub0lkLCBhcGlLZXkgKSB7XG5cbiAgICBJbWFnZVBhbm9yYW1hLmNhbGwoIHRoaXMgKTtcblxuICAgIHRoaXMucGFub0lkID0gcGFub0lkO1xuXG4gICAgdGhpcy5nc3ZMb2FkZXIgPSBudWxsO1xuXG4gICAgdGhpcy5sb2FkUmVxdWVzdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldHVwR29vZ2xlTWFwQVBJKCBhcGlLZXkgKTtcblxufVxuXG5Hb29nbGVTdHJlZXR2aWV3UGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xuXG4gICAgY29uc3RydWN0b3I6IEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYSxcblxuICAgIC8qKlxuICAgICAqIExvYWQgR29vZ2xlIFN0cmVldCBWaWV3IGJ5IHBhbm9yYW1hIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhbm9JZCAtIEdvZ29nbGUgU3RyZWV0IFZpZXcgcGFub3JhbWEgaWRcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24gKCBwYW5vSWQgKSB7XG5cbiAgICAgICAgdGhpcy5sb2FkUmVxdWVzdGVkID0gdHJ1ZTtcblxuICAgICAgICBwYW5vSWQgPSAoIHBhbm9JZCB8fCB0aGlzLnBhbm9JZCApIHx8IHt9O1xuXG4gICAgICAgIGlmICggcGFub0lkICYmIHRoaXMuZ3N2TG9hZGVyICkge1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRHU1ZMb2FkZXIoIHBhbm9JZCApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBHb29nbGUgTWFwIEFQSVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgYXBpS2V5XG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNldHVwR29vZ2xlTWFwQVBJOiBmdW5jdGlvbiAoIGFwaUtleSApIHtcblxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc2NyaXB0JyApO1xuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz8nO1xuICAgICAgICBzY3JpcHQuc3JjICs9IGFwaUtleSA/ICdrZXk9JyArIGFwaUtleSA6ICcnO1xuICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5zZXRHU1ZMb2FkZXIuYmluZCggdGhpcyApO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gdGhpcy5zZXRHU1ZMb2FkZXIuYmluZCggdGhpcyApO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdoZWFkJyApLmFwcGVuZENoaWxkKCBzY3JpcHQgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgR1NWIExvYWRlclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRHU1ZMb2FkZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmdzdkxvYWRlciA9IG5ldyBHb29nbGVTdHJlZXR2aWV3TG9hZGVyKCk7XG5cbiAgICAgICAgaWYgKCB0aGlzLmxvYWRSZXF1ZXN0ZWQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgR1NWIExvYWRlclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtHb29nbGVTdHJlZXR2aWV3TG9hZGVyfSBHU1YgTG9hZGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0R1NWTG9hZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3N2TG9hZGVyO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvYWQgR1NWIExvYWRlclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gcGFub0lkIC0gR29nb2dsZSBTdHJlZXQgVmlldyBwYW5vcmFtYSBpZFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBsb2FkR1NWTG9hZGVyOiBmdW5jdGlvbiAoIHBhbm9JZCApIHtcblxuICAgICAgICB0aGlzLmxvYWRSZXF1ZXN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmdzdkxvYWRlci5vblByb2dyZXNzID0gdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKTtcblxuICAgICAgICB0aGlzLmdzdkxvYWRlci5vblBhbm9yYW1hTG9hZCA9IHRoaXMub25Mb2FkLmJpbmQoIHRoaXMgKTtcblxuICAgICAgICB0aGlzLmdzdkxvYWRlci5zZXRab29tKCB0aGlzLmdldFpvb21MZXZlbCgpICk7XG5cbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIubG9hZCggcGFub0lkICk7XG5cbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIubG9hZGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGlzIGxvYWRlZFxuICAgICAqIEBwYXJhbSAge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgLSBDYW52YXMgd2hlcmUgdGhlIHRpbGVzIGhhdmUgYmVlbiBkcmF3blxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICggY2FudmFzICkge1xuXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzLCBuZXcgVEhSRUUuVGV4dHVyZSggY2FudmFzICkgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNldFxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLnJlc2V0LmNhbGwoIHRoaXMgKTtcblxuICAgIH1cblxufSApO1xuXG5leHBvcnQgeyBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWEgfTsiLCIvKipcbiAqIFN0ZXJlb2dyYXBoaWMgcHJvamVjdGlvbiBzaGFkZXJcbiAqIGJhc2VkIG9uIGh0dHA6Ly9ub3RsaW9uLmdpdGh1Yi5pby9zdHJlZXR2aWV3LXN0ZXJlb2dyYXBoaWNcbiAqIEBhdXRob3IgcGNoZW42NlxuICovXG5cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gU3RlcmVvZ3JhaHBpYyBTaGFkZXJcbiAqIEBtb2R1bGUgU3RlcmVvZ3JhcGhpY1NoYWRlclxuICogQHByb3BlcnR5IHtvYmplY3R9IHVuaWZvcm1zXG4gKiBAcHJvcGVydHkge1RIUkVFLlRleHR1cmV9IHVuaWZvcm1zLnREaWZmdXNlIGRpZmZ1c2UgbWFwXG4gKiBAcHJvcGVydHkge251bWJlcn0gdW5pZm9ybXMucmVzb2x1dGlvbiBpbWFnZSByZXNvbHV0aW9uXG4gKiBAcHJvcGVydHkge1RIUkVFLk1hdHJpeDR9IHVuaWZvcm1zLnRyYW5zZm9ybSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB1bmlmb3Jtcy56b29tIGltYWdlIHpvb20gZmFjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0gdW5pZm9ybXMub3BhY2l0eSBpbWFnZSBvcGFjaXR5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gdmVydGV4U2hhZGVyIHZlcnRleCBzaGFkZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmcmFnbWVudFNoYWRlciBmcmFnbWVudCBzaGFkZXJcbiAqL1xuY29uc3QgU3RlcmVvZ3JhcGhpY1NoYWRlciA9IHtcblxuICAgIHVuaWZvcm1zOiB7XG5cbiAgICAgICAgJ3REaWZmdXNlJzogeyB2YWx1ZTogbmV3IFRIUkVFLlRleHR1cmUoKSB9LFxuICAgICAgICAncmVzb2x1dGlvbic6IHsgdmFsdWU6IDEuMCB9LFxuICAgICAgICAndHJhbnNmb3JtJzogeyB2YWx1ZTogbmV3IFRIUkVFLk1hdHJpeDQoKSB9LFxuICAgICAgICAnem9vbSc6IHsgdmFsdWU6IDEuMCB9LFxuICAgICAgICAnb3BhY2l0eSc6IHsgdmFsdWU6IDEuMCB9XG5cbiAgICB9LFxuXG4gICAgdmVydGV4U2hhZGVyOiBbXG5cbiAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VXY7JyxcblxuICAgICAgICAndm9pZCBtYWluKCkgeycsXG5cbiAgICAgICAgJ3ZVdiA9IHV2OycsXG4gICAgICAgICdnbF9Qb3NpdGlvbiA9IHZlYzQoIHBvc2l0aW9uLCAxLjAgKTsnLFxuXG4gICAgICAgICd9JyBcblxuICAgIF0uam9pbiggJ1xcbicgKSxcblxuICAgIGZyYWdtZW50U2hhZGVyOiBbXG5cbiAgICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlOycsXG4gICAgICAgICd1bmlmb3JtIGZsb2F0IHJlc29sdXRpb247JyxcbiAgICAgICAgJ3VuaWZvcm0gbWF0NCB0cmFuc2Zvcm07JyxcbiAgICAgICAgJ3VuaWZvcm0gZmxvYXQgem9vbTsnLFxuICAgICAgICAndW5pZm9ybSBmbG9hdCBvcGFjaXR5OycsXG5cbiAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VXY7JyxcblxuICAgICAgICAnY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzsnLFxuXG4gICAgICAgICd2b2lkIG1haW4oKXsnLFxuXG4gICAgICAgICd2ZWMyIHBvc2l0aW9uID0gLTEuMCArICAyLjAgKiB2VXY7JyxcblxuICAgICAgICAncG9zaXRpb24gKj0gdmVjMiggem9vbSAqIHJlc29sdXRpb24sIHpvb20gKiAwLjUgKTsnLFxuXG4gICAgICAgICdmbG9hdCB4MnkyID0gcG9zaXRpb24ueCAqIHBvc2l0aW9uLnggKyBwb3NpdGlvbi55ICogcG9zaXRpb24ueTsnLFxuICAgICAgICAndmVjMyBzcGhlcmVfcG50ID0gdmVjMyggMi4gKiBwb3NpdGlvbiwgeDJ5MiAtIDEuICkgLyAoIHgyeTIgKyAxLiApOycsXG5cbiAgICAgICAgJ3NwaGVyZV9wbnQgPSB2ZWMzKCB0cmFuc2Zvcm0gKiB2ZWM0KCBzcGhlcmVfcG50LCAxLjAgKSApOycsXG5cbiAgICAgICAgJ3ZlYzIgc2FtcGxlVVYgPSB2ZWMyKCcsXG4gICAgICAgICcoYXRhbihzcGhlcmVfcG50LnksIHNwaGVyZV9wbnQueCkgLyBQSSArIDEuMCkgKiAwLjUsJyxcbiAgICAgICAgJyhhc2luKHNwaGVyZV9wbnQueikgLyBQSSArIDAuNSknLFxuICAgICAgICAnKTsnLFxuXG4gICAgICAgICdnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCBzYW1wbGVVViApOycsXG5cbiAgICAgICAgJ2dsX0ZyYWdDb2xvci5hICo9IG9wYWNpdHk7JyxcblxuICAgICAgICAnfSdcblxuICAgIF0uam9pbiggJ1xcbicgKVxuXG59O1xuXG5leHBvcnQgeyBTdGVyZW9ncmFwaGljU2hhZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VQYW5vcmFtYSB9IGZyb20gJy4vSW1hZ2VQYW5vcmFtYSc7XG5pbXBvcnQgeyBJbmZvc3BvdCB9IGZyb20gJy4uL2luZm9zcG90L0luZm9zcG90JztcbmltcG9ydCB7IENPTlRST0xTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcbmltcG9ydCB7IFN0ZXJlb2dyYXBoaWNTaGFkZXIgfSBmcm9tICcuLi9zaGFkZXJzL1N0ZXJlb2dyYXBoaWNTaGFkZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgTGl0dGxlIFBsYW5ldFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBcdFx0LSBUeXBlIG9mIGxpdHRsZSBwbGFuZXQgYmFzaWMgY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgXHRcdC0gVVJMIGZvciB0aGUgaW1hZ2Ugc291cmNlXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemU9MTAwMDBdIC0gU2l6ZSBvZiBwbGFuZSBnZW9tZXRyeVxuICogQHBhcmFtIHtudW1iZXJ9IFtyYXRpbz0wLjVdICAtIFJhdGlvIG9mIHBsYW5lIGdlb21ldHJ5J3MgaGVpZ2h0IGFnYWluc3Qgd2lkdGhcbiAqL1xuZnVuY3Rpb24gTGl0dGxlUGxhbmV0ICggdHlwZSA9ICdpbWFnZScsIHNvdXJjZSwgc2l6ZSA9IDEwMDAwLCByYXRpbyA9IDAuNSApIHtcblxuICAgIGlmICggdHlwZSA9PT0gJ2ltYWdlJyApIHtcblxuICAgICAgICBJbWFnZVBhbm9yYW1hLmNhbGwoIHRoaXMsIHNvdXJjZSwgdGhpcy5jcmVhdGVHZW9tZXRyeSggc2l6ZSwgcmF0aW8gKSwgdGhpcy5jcmVhdGVNYXRlcmlhbCggc2l6ZSApICk7XG5cbiAgICB9XG5cbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICB0aGlzLkVQUyA9IDAuMDAwMDAxO1xuICAgIHRoaXMuZnJhbWVJZCA9IG51bGw7XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy51c2VyTW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgdGhpcy5xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgdGhpcy5xdWF0QiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG4gICAgdGhpcy5xdWF0Q3VyID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICB0aGlzLnF1YXRTbGVycCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICB0aGlzLnZlY3RvclggPSBuZXcgVEhSRUUuVmVjdG9yMyggMSwgMCwgMCApO1xuICAgIHRoaXMudmVjdG9yWSA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICk7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd3aW5kb3ctcmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSApO1xuXG59XG5cbkxpdHRsZVBsYW5ldC5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogTGl0dGxlUGxhbmV0LFxuXG4gICAgYWRkOiBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuICAgICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xuXHRcdFx0XG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICsrICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoIGFyZ3VtZW50c1sgaSBdICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QgKSB7XG5cbiAgICAgICAgICAgIG9iamVjdC5tYXRlcmlhbC5kZXB0aFRlc3QgPSBmYWxzZTtcblx0XHRcdFxuICAgICAgICB9XG5cbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUuYWRkLmNhbGwoIHRoaXMsIG9iamVjdCApO1xuXG4gICAgfSxcblxuICAgIGNyZWF0ZUdlb21ldHJ5OiBmdW5jdGlvbiAoIHNpemUsIHJhdGlvICkge1xuXG4gICAgICAgIHJldHVybiBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggc2l6ZSwgc2l6ZSAqIHJhdGlvICk7XG5cbiAgICB9LFxuXG4gICAgY3JlYXRlTWF0ZXJpYWw6IGZ1bmN0aW9uICggc2l6ZSApIHtcblxuICAgICAgICBjb25zdCBzaGFkZXIgPSBPYmplY3QuYXNzaWduKCB7fSwgU3RlcmVvZ3JhcGhpY1NoYWRlciApLCB1bmlmb3JtcyA9IHNoYWRlci51bmlmb3JtcztcblxuICAgICAgICB1bmlmb3Jtcy56b29tLnZhbHVlID0gc2l6ZTtcbiAgICAgICAgdW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IDAuMDtcblxuICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG5cbiAgICAgICAgICAgIHVuaWZvcm1zOiB1bmlmb3JtcyxcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXIsXG4gICAgICAgICAgICBzaWRlOiBUSFJFRS5CYWNrU2lkZSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlXG5cbiAgICAgICAgfSApO1xuXHRcdFxuICAgIH0sXG5cbiAgICByZWdpc3Rlck1vdXNlRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCB0aGlzLm9uQ29udGV4dE1lbnUuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xuXHRcdFxuICAgIH0sXG5cbiAgICB1bnJlZ2lzdGVyTW91c2VFdmVudHM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKCB0aGlzICksIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCggdGhpcyApLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCB0aGlzLm9uQ29udGV4dE1lbnUuYmluZCggdGhpcyApLCBmYWxzZSApO1xuXHRcdFxuICAgIH0sXG5cbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKCBldmVudCApIHtcblxuICAgICAgICBjb25zdCBpbnB1dENvdW50ID0gKCBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkgfHwgMSA7XG5cbiAgICAgICAgc3dpdGNoICggaW5wdXRDb3VudCApIHtcblxuICAgICAgICBjYXNlIDE6XG5cbiAgICAgICAgICAgIGNvbnN0IHggPSAoIGV2ZW50LmNsaWVudFggPj0gMCApID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbIDAgXS5jbGllbnRYO1xuICAgICAgICAgICAgY29uc3QgeSA9ICggZXZlbnQuY2xpZW50WSA+PSAwICkgPyBldmVudC5jbGllbnRZIDogZXZlbnQudG91Y2hlc1sgMCBdLmNsaWVudFk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51c2VyTW91c2Uuc2V0KCB4LCB5ICk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcblxuICAgICAgICAgICAgY29uc3QgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG4gICAgICAgICAgICBjb25zdCBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuICAgICAgICAgICAgdGhpcy51c2VyTW91c2UucGluY2hEaXN0YW5jZSA9IGRpc3RhbmNlO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblVwZGF0ZUNhbGxiYWNrKCk7XG5cbiAgICB9LFxuXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgY29uc3QgaW5wdXRDb3VudCA9ICggZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCApIHx8IDEgO1xuXG4gICAgICAgIHN3aXRjaCAoIGlucHV0Q291bnQgKSB7XG5cbiAgICAgICAgY2FzZSAxOlxuXG4gICAgICAgICAgICBjb25zdCB4ID0gKCBldmVudC5jbGllbnRYID49IDAgKSA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWyAwIF0uY2xpZW50WDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoIGV2ZW50LmNsaWVudFkgPj0gMCApID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbIDAgXS5jbGllbnRZO1xuXG4gICAgICAgICAgICBjb25zdCBhbmdsZVggPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCB4IC0gdGhpcy51c2VyTW91c2UueCApICogMC40O1xuICAgICAgICAgICAgY29uc3QgYW5nbGVZID0gVEhSRUUuTWF0aC5kZWdUb1JhZCggeSAtIHRoaXMudXNlck1vdXNlLnkgKSAqIDAuNDtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmRyYWdnaW5nICkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVhdEEuc2V0RnJvbUF4aXNBbmdsZSggdGhpcy52ZWN0b3JZLCBhbmdsZVggKTtcbiAgICAgICAgICAgICAgICB0aGlzLnF1YXRCLnNldEZyb21BeGlzQW5nbGUoIHRoaXMudmVjdG9yWCwgYW5nbGVZICk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWF0Q3VyLm11bHRpcGx5KCB0aGlzLnF1YXRBICkubXVsdGlwbHkoIHRoaXMucXVhdEIgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJNb3VzZS5zZXQoIHgsIHkgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuXG4gICAgICAgICAgICBjb25zdCBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkWm9vbURlbHRhKCB0aGlzLnVzZXJNb3VzZS5waW5jaERpc3RhbmNlIC0gZGlzdGFuY2UgKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG9uTW91c2VVcDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIH0sXG5cbiAgICBvbk1vdXNlV2hlZWw6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgbGV0IGRlbHRhID0gMDtcblxuICAgICAgICBpZiAoIGV2ZW50LndoZWVsRGVsdGEgIT09IHVuZGVmaW5lZCApIHsgLy8gV2ViS2l0IC8gT3BlcmEgLyBFeHBsb3JlciA5XG5cbiAgICAgICAgICAgIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5kZXRhaWwgIT09IHVuZGVmaW5lZCApIHsgLy8gRmlyZWZveFxuXG4gICAgICAgICAgICBkZWx0YSA9IC0gZXZlbnQuZGV0YWlsO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFpvb21EZWx0YSggZGVsdGEgKTtcbiAgICAgICAgdGhpcy5vblVwZGF0ZUNhbGxiYWNrKCk7XG5cbiAgICB9LFxuXG4gICAgYWRkWm9vbURlbHRhOiBmdW5jdGlvbiAoIGRlbHRhICkge1xuXG4gICAgICAgIGNvbnN0IHVuaWZvcm1zID0gdGhpcy5tYXRlcmlhbC51bmlmb3JtcztcbiAgICAgICAgY29uc3QgbG93ZXJCb3VuZCA9IHRoaXMuc2l6ZSAqIDAuMTtcbiAgICAgICAgY29uc3QgdXBwZXJCb3VuZCA9IHRoaXMuc2l6ZSAqIDEwO1xuXG4gICAgICAgIHVuaWZvcm1zLnpvb20udmFsdWUgKz0gZGVsdGE7XG5cbiAgICAgICAgaWYgKCB1bmlmb3Jtcy56b29tLnZhbHVlIDw9IGxvd2VyQm91bmQgKSB7XG5cbiAgICAgICAgICAgIHVuaWZvcm1zLnpvb20udmFsdWUgPSBsb3dlckJvdW5kO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHVuaWZvcm1zLnpvb20udmFsdWUgPj0gdXBwZXJCb3VuZCApIHtcblxuICAgICAgICAgICAgdW5pZm9ybXMuem9vbS52YWx1ZSA9IHVwcGVyQm91bmQ7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG9uVXBkYXRlQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLm9uVXBkYXRlQ2FsbGJhY2suYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgdGhpcy5xdWF0U2xlcnAuc2xlcnAoIHRoaXMucXVhdEN1ciwgMC4xICk7XG5cbiAgICAgICAgaWYgKCB0aGlzLm1hdGVyaWFsICkge1xuXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRyYW5zZm9ybS52YWx1ZS5tYWtlUm90YXRpb25Gcm9tUXVhdGVybmlvbiggdGhpcy5xdWF0U2xlcnAgKTtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoICF0aGlzLmRyYWdnaW5nICYmIDEuMCAtIHRoaXMucXVhdFNsZXJwLmNsb25lKCkuZG90KCB0aGlzLnF1YXRDdXIgKSA8IHRoaXMuRVBTICkge1xuXHRcdFx0XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMuZnJhbWVJZCApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMucXVhdEN1ci5zZXQoIDAsIDAsIDAsIDEgKTtcbiAgICAgICAgdGhpcy5xdWF0U2xlcnAuc2V0KCAwLCAwLCAwLCAxICk7XG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xuXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZSA9IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJNb3VzZUV2ZW50cygpO1xuICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcblx0XHRcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ2Rpc2FibGVDb250cm9sJyB9ICk7XG5cbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUub25Mb2FkLmNhbGwoIHRoaXMsIHRleHR1cmUgKTtcblx0XHRcbiAgICB9LFxuXG4gICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMudW5yZWdpc3Rlck1vdXNlRXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ2VuYWJsZUNvbnRyb2wnLCBkYXRhOiBDT05UUk9MUy5PUkJJVCB9ICk7XG5cbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLmZyYW1lSWQgKTtcblxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5vbkxlYXZlLmNhbGwoIHRoaXMgKTtcblx0XHRcbiAgICB9LFxuXG4gICAgb25XaW5kb3dSZXNpemU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICAgIH0sXG5cbiAgICBvbkNvbnRleHRNZW51OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgfSxcblxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcdFxuXG4gICAgICAgIHRoaXMudW5yZWdpc3Rlck1vdXNlRXZlbnRzKCk7XG5cbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XG5cbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgeyBMaXR0bGVQbGFuZXQgfTsiLCJpbXBvcnQgeyBMaXR0bGVQbGFuZXQgfSBmcm9tICcuL0xpdHRsZVBsYW5ldCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBJbWFnZSBMaXR0bGUgUGxhbmV0XG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgXHRcdC0gVVJMIGZvciB0aGUgaW1hZ2Ugc291cmNlXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemU9MTAwMDBdIC0gU2l6ZSBvZiBwbGFuZSBnZW9tZXRyeVxuICogQHBhcmFtIHtudW1iZXJ9IFtyYXRpbz0wLjVdICAtIFJhdGlvIG9mIHBsYW5lIGdlb21ldHJ5J3MgaGVpZ2h0IGFnYWluc3Qgd2lkdGhcbiAqL1xuZnVuY3Rpb24gSW1hZ2VMaXR0bGVQbGFuZXQgKCBzb3VyY2UsIHNpemUsIHJhdGlvICkge1xuXG4gICAgTGl0dGxlUGxhbmV0LmNhbGwoIHRoaXMsICdpbWFnZScsIHNvdXJjZSwgc2l6ZSwgcmF0aW8gKTtcblxufVxuXG5JbWFnZUxpdHRsZVBsYW5ldC5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBMaXR0bGVQbGFuZXQucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBJbWFnZUxpdHRsZVBsYW5ldCxcblxuICAgIC8qKlxuICAgICAqIE9uIGxvYWRlZCB3aXRoIHRleHR1cmVcbiAgICAgKiBAcGFyYW0ge1RIUkVFLlRleHR1cmV9IHRleHR1cmVcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VMaXR0bGVQbGFuZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoIHRleHR1cmUgKTtcblxuICAgICAgICBMaXR0bGVQbGFuZXQucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzLCB0ZXh0dXJlICk7XG5cbiAgICB9LFxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0ZXh0dXJlXG4gICAgICogQHBhcmFtIHtUSFJFRS5UZXh0dXJlfSB0ZXh0dXJlIFxuICAgICAqIEBtZW1iZXJPZiBJbWFnZUxpdHRsZVBsYW5ldFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVwZGF0ZVRleHR1cmU6IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xuXHRcdFxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zWyAndERpZmZ1c2UnIF0udmFsdWUgPSB0ZXh0dXJlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2VcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VMaXR0bGVQbGFuZXRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgdERpZmZ1c2UgPSB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zWyAndERpZmZ1c2UnIF07XG5cbiAgICAgICAgaWYgKCB0RGlmZnVzZSAmJiB0RGlmZnVzZS52YWx1ZSApIHtcblxuICAgICAgICAgICAgdERpZmZ1c2UudmFsdWUuZGlzcG9zZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBMaXR0bGVQbGFuZXQucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xuXG4gICAgfVxuXG59ICk7XG5cbmV4cG9ydCB7IEltYWdlTGl0dGxlUGxhbmV0IH07IiwiaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL1Bhbm9yYW1hJztcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAnLi4vbWVkaWEvTWVkaWEnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgQ2FtZXJhIHBhbm9yYW1hXG4gKiBAZGVzY3JpcHRpb24gU2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTWVkaWFTdHJlYW1Db25zdHJhaW50c3xNZWRpYVN0cmVhbUNvbnN0cmFpbnRzfSBmb3IgY29uc3RyYWludHNcbiAqIEBwYXJhbSB7b2JqZWN0fSAtIGNhbWVyYSBjb25zdHJhaW50c1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENhbWVyYVBhbm9yYW1hICggY29uc3RyYWludHMgKSB7XG5cbiAgICBjb25zdCByYWRpdXMgPSA1MDAwO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KCByYWRpdXMsIDYwLCA0MCApO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IHZpc2libGU6IGZhbHNlIH0pO1xuXG4gICAgUGFub3JhbWEuY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cbiAgICB0aGlzLm1lZGlhID0gbmV3IE1lZGlhKCBjb25zdHJhaW50cyApO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnZW50ZXInLCB0aGlzLnN0YXJ0LmJpbmQoIHRoaXMgKSApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2xlYXZlJywgdGhpcy5zdG9wLmJpbmQoIHRoaXMgKSApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIHRoaXMub25QYW5vbGVuc0NvbnRhaW5lci5iaW5kKCB0aGlzICkgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1zY2VuZScsIHRoaXMub25QYW5vbGVuc1NjZW5lLmJpbmQoIHRoaXMgKSApO1xuXG59XG5cbkNhbWVyYVBhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFBhbm9yYW1hLnByb3RvdHlwZSApLCB7XG5cbiAgICBjb25zdHJ1Y3RvcjogQ2FtZXJhUGFub3JhbWEsXG5cbiAgICAvKipcbiAgICAgKiBPbiBjb250YWluZXIgZXZlbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgQ2FtZXJhUGFub3JhbWFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvblBhbm9sZW5zQ29udGFpbmVyOiBmdW5jdGlvbiAoIHsgY29udGFpbmVyIH0gKSB7XG5cbiAgICAgICAgdGhpcy5tZWRpYS5zZXRDb250YWluZXIoIGNvbnRhaW5lciApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIHNjZW5lIGV2ZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uUGFub2xlbnNTY2VuZTogZnVuY3Rpb24gKCB7IHNjZW5lIH0gKSB7XG5cbiAgICAgICAgdGhpcy5tZWRpYS5zZXRTY2VuZSggc2NlbmUgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBjYW1lcmEgc3RyZWFtaW5nXG4gICAgICogQG1lbWJlck9mIENhbWVyYVBhbm9yYW1hXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYS5zdGFydCgpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3AgY2FtZXJhIHN0cmVhbWluZ1xuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLm1lZGlhLnN0b3AoKTtcblxuICAgIH0sXG5cbn0gKTtcblxuZXhwb3J0IHsgQ2FtZXJhUGFub3JhbWEgfTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBPcmJpdCBDb250cm9sc1xuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZXJuYWwgT3JiaXRDb250cm9sc1xuICogQHBhcmFtIHtUSFJFRS5PYmplY3R9IG9iamVjdCBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvbUVsZW1lbnQgXG4gKi9cbmZ1bmN0aW9uIE9yYml0Q29udHJvbHMgKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuICAgIHRoaXMuZnJhbWVJZCA9IG51bGw7XG5cbiAgICAvLyBBUElcblxuICAgIC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAvKlxuICAgICAqIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBjb250cm9sIG9yYml0cyBhcm91bmRcbiAgICAgKiBhbmQgd2hlcmUgaXQgcGFucyB3aXRoIHJlc3BlY3QgdG8uXG4gICAgICovXG4gICAgdGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgLy8gY2VudGVyIGlzIG9sZCwgZGVwcmVjYXRlZDsgdXNlIFwidGFyZ2V0XCIgaW5zdGVhZFxuICAgIHRoaXMuY2VudGVyID0gdGhpcy50YXJnZXQ7XG5cbiAgICAvKlxuICAgICAqIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3JcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAqL1xuICAgIHRoaXMubm9ab29tID0gZmFsc2U7XG4gICAgdGhpcy56b29tU3BlZWQgPSAxLjA7XG5cbiAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcbiAgICB0aGlzLm1pbkRpc3RhbmNlID0gMDtcbiAgICB0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cbiAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcbiAgICB0aGlzLm1pblpvb20gPSAwO1xuICAgIHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICB0aGlzLm5vUm90YXRlID0gZmFsc2U7XG4gICAgdGhpcy5yb3RhdGVTcGVlZCA9IC0wLjE1O1xuXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICB0aGlzLm5vUGFuID0gdHJ1ZTtcbiAgICB0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcbiAgICB0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuICAgIC8qXG4gICAgICogSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG4gICAgICogUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG4gICAgICovXG4gICAgdGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuICAgIHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuICAgIC8vIE1vbWVudHVtXG4gIFx0dGhpcy5tb21lbnR1bURhbXBpbmdGYWN0b3IgPSAwLjkwO1xuICBcdHRoaXMubW9tZW50dW1TY2FsaW5nRmFjdG9yID0gLTAuMDA1O1xuICBcdHRoaXMubW9tZW50dW1LZXlkb3duRmFjdG9yID0gMjA7XG5cbiAgXHQvLyBGb3ZcbiAgXHR0aGlzLm1pbkZvdiA9IDMwO1xuICBcdHRoaXMubWF4Rm92ID0gMTIwO1xuXG4gICAgLypcbiAgICAgKiBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgICAqIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cbiAgICAgKi9cbiAgICB0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcbiAgICB0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cbiAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuICAgIHRoaXMubm9LZXlzID0gZmFsc2U7XG5cbiAgICAvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG4gICAgdGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuICAgIC8vIE1vdXNlIGJ1dHRvbnNcbiAgICB0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG4gICAgLypcbiAgICAgKiAvLy8vLy8vLy8vXG4gICAgICogaW50ZXJuYWxzXG4gICAgICovXG5cbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xuXG4gICAgdmFyIEVQUyA9IDEwZS04O1xuICAgIHZhciBNRVBTID0gMTBlLTU7XG5cbiAgICB2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICB2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgdmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICB2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgIHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIHZhciB0aGV0YSA9IDA7XG4gICAgdmFyIHBoaSA9IDA7XG4gICAgdmFyIHBoaURlbHRhID0gMDtcbiAgICB2YXIgdGhldGFEZWx0YSA9IDA7XG4gICAgdmFyIHNjYWxlID0gMTtcbiAgICB2YXIgcGFuID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgIHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICB2YXIgbW9tZW50dW1MZWZ0ID0gMCwgbW9tZW50dW1VcCA9IDA7XG4gICAgdmFyIGV2ZW50UHJldmlvdXM7XG4gICAgdmFyIG1vbWVudHVtT24gPSBmYWxzZTtcblxuICAgIHZhciBrZXlVcCwga2V5Qm90dG9tLCBrZXlMZWZ0LCBrZXlSaWdodDtcblxuICAgIHZhciBTVEFURSA9IHsgTk9ORTogLTEsIFJPVEFURTogMCwgRE9MTFk6IDEsIFBBTjogMiwgVE9VQ0hfUk9UQVRFOiAzLCBUT1VDSF9ET0xMWTogNCwgVE9VQ0hfUEFOOiA1IH07XG5cbiAgICB2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgLy8gZm9yIHJlc2V0XG5cbiAgICB0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuICAgIHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcbiAgICB0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuICAgIC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXG4gICAgdmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG4gICAgdmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuICAgIC8vIGV2ZW50c1xuXG4gICAgdmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuICAgIHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG4gICAgdmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG4gICAgdGhpcy5zZXRMYXN0UXVhdGVybmlvbiA9IGZ1bmN0aW9uICggcXVhdGVybmlvbiApIHtcbiAgICAgICAgbGFzdFF1YXRlcm5pb24uY29weSggcXVhdGVybmlvbiApO1xuICAgICAgICBzY29wZS5vYmplY3QucXVhdGVybmlvbi5jb3B5KCBxdWF0ZXJuaW9uICk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0TGFzdFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbGFzdFBvc2l0aW9uO1xuICAgIH07XG5cbiAgICB0aGlzLnJvdGF0ZUxlZnQgPSBmdW5jdGlvbiAoIGFuZ2xlICkge1xuXG4gICAgICAgIGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgYW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGV0YURlbHRhIC09IGFuZ2xlO1xuXG5cbiAgICB9O1xuXG4gICAgdGhpcy5yb3RhdGVVcCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XG5cbiAgICAgICAgaWYgKCBhbmdsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICBhbmdsZSA9IGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHBoaURlbHRhIC09IGFuZ2xlO1xuXG4gICAgfTtcblxuICAgIC8vIHBhc3MgaW4gZGlzdGFuY2UgaW4gd29ybGQgc3BhY2UgdG8gbW92ZSBsZWZ0XG4gICAgdGhpcy5wYW5MZWZ0ID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuICAgICAgICB2YXIgdGUgPSB0aGlzLm9iamVjdC5tYXRyaXguZWxlbWVudHM7XG5cbiAgICAgICAgLy8gZ2V0IFggY29sdW1uIG9mIG1hdHJpeFxuICAgICAgICBwYW5PZmZzZXQuc2V0KCB0ZVsgMCBdLCB0ZVsgMSBdLCB0ZVsgMiBdICk7XG4gICAgICAgIHBhbk9mZnNldC5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG4gICAgICAgIHBhbi5hZGQoIHBhbk9mZnNldCApO1xuXG4gICAgfTtcblxuICAgIC8vIHBhc3MgaW4gZGlzdGFuY2UgaW4gd29ybGQgc3BhY2UgdG8gbW92ZSB1cFxuICAgIHRoaXMucGFuVXAgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG4gICAgICAgIHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcblxuICAgICAgICAvLyBnZXQgWSBjb2x1bW4gb2YgbWF0cml4XG4gICAgICAgIHBhbk9mZnNldC5zZXQoIHRlWyA0IF0sIHRlWyA1IF0sIHRlWyA2IF0gKTtcbiAgICAgICAgcGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG4gICAgICAgIHBhbi5hZGQoIHBhbk9mZnNldCApO1xuXG4gICAgfTtcblxuICAgIC8qXG4gICAgICogcGFzcyBpbiB4LHkgb2YgY2hhbmdlIGRlc2lyZWQgaW4gcGl4ZWwgc3BhY2UsXG4gICAgICogcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG4gICAgICovXG4gICAgdGhpcy5wYW4gPSBmdW5jdGlvbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG4gICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG4gICAgICAgIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cbiAgICAgICAgICAgIC8vIHBlcnNwZWN0aXZlXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcG9zaXRpb24uY2xvbmUoKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuICAgICAgICAgICAgdmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG4gICAgICAgICAgICAvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cbiAgICAgICAgICAgIHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuICAgICAgICAgICAgLy8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuICAgICAgICAgICAgc2NvcGUucGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcbiAgICAgICAgICAgIHNjb3BlLnBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuICAgICAgICAgICAgLy8gb3J0aG9ncmFwaGljXG4gICAgICAgICAgICBzY29wZS5wYW5MZWZ0KCBkZWx0YVggKiAoc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQpIC8gZWxlbWVudC5jbGllbnRXaWR0aCApO1xuICAgICAgICAgICAgc2NvcGUucGFuVXAoIGRlbHRhWSAqIChzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSkgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBvciBwZXJzcGVjdGl2ZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5tb21lbnR1bSA9IGZ1bmN0aW9uKCl7XG5cdFx0XG4gICAgICAgIGlmICggIW1vbWVudHVtT24gKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCBNYXRoLmFicyggbW9tZW50dW1MZWZ0ICkgPCBNRVBTICYmIE1hdGguYWJzKCBtb21lbnR1bVVwICkgPCBNRVBTICkgeyBcblxuICAgICAgICAgICAgbW9tZW50dW1PbiA9IGZhbHNlOyBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vbWVudHVtVXAgICAqPSB0aGlzLm1vbWVudHVtRGFtcGluZ0ZhY3RvcjtcbiAgICAgICAgbW9tZW50dW1MZWZ0ICo9IHRoaXMubW9tZW50dW1EYW1waW5nRmFjdG9yO1xuXG4gICAgICAgIHRoZXRhRGVsdGEgLT0gdGhpcy5tb21lbnR1bVNjYWxpbmdGYWN0b3IgKiBtb21lbnR1bUxlZnQ7XG4gICAgICAgIHBoaURlbHRhICAgLT0gdGhpcy5tb21lbnR1bVNjYWxpbmdGYWN0b3IgKiBtb21lbnR1bVVwO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZG9sbHlJbiA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcblxuICAgICAgICBpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG4gICAgICAgICAgICBzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuICAgICAgICAgICAgc2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggdGhpcy5taW5ab29tLCBNYXRoLm1pbiggdGhpcy5tYXhab29tLCB0aGlzLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG4gICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5kb2xseU91dCA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcblxuICAgICAgICBpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG4gICAgICAgICAgICBzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuICAgICAgICAgICAgc2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggdGhpcy5taW5ab29tLCBNYXRoLm1pbiggdGhpcy5tYXhab29tLCB0aGlzLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG4gICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoIGlnbm9yZVVwZGF0ZSApIHtcblxuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLm9iamVjdC5wb3NpdGlvbjtcblxuICAgICAgICBvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHRoaXMudGFyZ2V0ICk7XG5cbiAgICAgICAgLy8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG4gICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuICAgICAgICAvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cbiAgICAgICAgdGhldGEgPSBNYXRoLmF0YW4yKCBvZmZzZXQueCwgb2Zmc2V0LnogKTtcblxuICAgICAgICAvLyBhbmdsZSBmcm9tIHktYXhpc1xuXG4gICAgICAgIHBoaSA9IE1hdGguYXRhbjIoIE1hdGguc3FydCggb2Zmc2V0LnggKiBvZmZzZXQueCArIG9mZnNldC56ICogb2Zmc2V0LnogKSwgb2Zmc2V0LnkgKTtcblxuICAgICAgICBpZiAoIHRoaXMuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9tZW50dW0oKTtcblxuICAgICAgICB0aGV0YSArPSB0aGV0YURlbHRhO1xuICAgICAgICBwaGkgKz0gcGhpRGVsdGE7XG5cbiAgICAgICAgLy8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICB0aGV0YSA9IE1hdGgubWF4KCB0aGlzLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHRoaXMubWF4QXppbXV0aEFuZ2xlLCB0aGV0YSApICk7XG5cbiAgICAgICAgLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcbiAgICAgICAgcGhpID0gTWF0aC5tYXgoIHRoaXMubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHRoaXMubWF4UG9sYXJBbmdsZSwgcGhpICkgKTtcblxuICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlIEVQUyBhbmQgUEktRVBTXG4gICAgICAgIHBoaSA9IE1hdGgubWF4KCBFUFMsIE1hdGgubWluKCBNYXRoLlBJIC0gRVBTLCBwaGkgKSApO1xuXG4gICAgICAgIHZhciByYWRpdXMgPSBvZmZzZXQubGVuZ3RoKCkgKiBzY2FsZTtcblxuICAgICAgICAvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1heCggdGhpcy5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHRoaXMubWF4RGlzdGFuY2UsIHJhZGl1cyApICk7XG5cbiAgICAgICAgLy8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZCggcGFuICk7XG5cbiAgICAgICAgb2Zmc2V0LnggPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLnNpbiggdGhldGEgKTtcbiAgICAgICAgb2Zmc2V0LnkgPSByYWRpdXMgKiBNYXRoLmNvcyggcGhpICk7XG4gICAgICAgIG9mZnNldC56ID0gcmFkaXVzICogTWF0aC5zaW4oIHBoaSApICogTWF0aC5jb3MoIHRoZXRhICk7XG5cbiAgICAgICAgLy8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG4gICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cbiAgICAgICAgcG9zaXRpb24uY29weSggdGhpcy50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG4gICAgICAgIHRoaXMub2JqZWN0Lmxvb2tBdCggdGhpcy50YXJnZXQgKTtcblxuICAgICAgICB0aGV0YURlbHRhID0gMDtcbiAgICAgICAgcGhpRGVsdGEgPSAwO1xuICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgIHBhbi5zZXQoIDAsIDAsIDAgKTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiB1cGRhdGUgY29uZGl0aW9uIGlzOlxuICAgICAgICAgKiBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcbiAgICAgICAgICogdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggdGhpcy5vYmplY3QucG9zaXRpb24gKSA+IEVQU1xuXHRcdCAgICB8fCA4ICogKDEgLSBsYXN0UXVhdGVybmlvbi5kb3QodGhpcy5vYmplY3QucXVhdGVybmlvbikpID4gRVBTICkge1xuXG4gICAgICAgICAgICBpZiAoIGlnbm9yZVVwZGF0ZSAhPT0gdHJ1ZSApIHsgdGhpcy5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApOyB9XG5cbiAgICAgICAgICAgIGxhc3RQb3NpdGlvbi5jb3B5KCB0aGlzLm9iamVjdC5wb3NpdGlvbiApO1xuICAgICAgICAgICAgbGFzdFF1YXRlcm5pb24uY29weSAodGhpcy5vYmplY3QucXVhdGVybmlvbiApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0LmNvcHkoIHRoaXMudGFyZ2V0MCApO1xuICAgICAgICB0aGlzLm9iamVjdC5wb3NpdGlvbi5jb3B5KCB0aGlzLnBvc2l0aW9uMCApO1xuICAgICAgICB0aGlzLm9iamVjdC56b29tID0gdGhpcy56b29tMDtcblxuICAgICAgICB0aGlzLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gcGhpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoZXRhO1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG4gICAgICAgIHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuICAgICAgICBtb21lbnR1bU9uID0gZmFsc2U7XG5cbiAgIFx0XHRtb21lbnR1bUxlZnQgPSBtb21lbnR1bVVwID0gMDtcblxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuICAgICAgICAgICAgcm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG4gICAgICAgICAgICBkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuUEFOO1xuXG4gICAgICAgICAgICBwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUudXBkYXRlKCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG4gICAgICAgIGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgcm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuICAgICAgICAgICAgcm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG4gICAgICAgICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG4gICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuICAgICAgICAgICAgaWYoIGV2ZW50UHJldmlvdXMgKXtcbiAgICAgICAgICAgICAgICBtb21lbnR1bUxlZnQgPSBldmVudC5jbGllbnRYIC0gZXZlbnRQcmV2aW91cy5jbGllbnRYO1xuICAgICAgICAgICAgICAgIG1vbWVudHVtVXAgPSBldmVudC5jbGllbnRZIC0gZXZlbnRQcmV2aW91cy5jbGllbnRZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudFByZXZpb3VzID0gZXZlbnQ7XG5cbiAgICAgICAgfSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG4gICAgICAgICAgICBkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cbiAgICAgICAgICAgIGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5SW4oKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5T3V0KCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgIHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuICAgICAgICAgICAgc2NvcGUucGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cbiAgICAgICAgICAgIHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkgc2NvcGUudXBkYXRlKCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoIC8qIGV2ZW50ICovICkge1xuXG4gICAgICAgIG1vbWVudHVtT24gPSB0cnVlO1xuXG4gICAgICAgIGV2ZW50UHJldmlvdXMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUubm9ab29tID09PSB0cnVlIHx8IHN0YXRlICE9PSBTVEFURS5OT05FICkgcmV0dXJuO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHZhciBkZWx0YSA9IDA7XG5cbiAgICAgICAgaWYgKCBldmVudC53aGVlbERlbHRhICE9PSB1bmRlZmluZWQgKSB7IC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxuXG4gICAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGE7XG5cbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuZGV0YWlsICE9PSB1bmRlZmluZWQgKSB7IC8vIEZpcmVmb3hcblxuICAgICAgICAgICAgZGVsdGEgPSAtIGV2ZW50LmRldGFpbDtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBkZWx0YSA+IDAgKSB7XG5cbiAgICAgICAgICAgIC8vIHNjb3BlLmRvbGx5T3V0KCk7XG4gICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92IDwgc2NvcGUubWF4Rm92ICkgXG4gICAgICAgICAgICAgICAgPyBzY29wZS5vYmplY3QuZm92ICsgMVxuICAgICAgICAgICAgICAgIDogc2NvcGUubWF4Rm92O1xuICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBkZWx0YSA8IDAgKSB7XG5cbiAgICAgICAgICAgIC8vIHNjb3BlLmRvbGx5SW4oKTtcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC5mb3YgPSAoIHNjb3BlLm9iamVjdC5mb3YgPiBzY29wZS5taW5Gb3YgKSBcbiAgICAgICAgICAgICAgICA/IHNjb3BlLm9iamVjdC5mb3YgLSAxXG4gICAgICAgICAgICAgICAgOiBzY29wZS5taW5Gb3Y7XG4gICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlVcCAoIGV2ZW50ICkge1xuXG4gICAgICAgIHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlVQOlxuICAgICAgICAgICAga2V5VXAgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG4gICAgICAgICAgICBrZXlCb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuICAgICAgICAgICAga2V5TGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuICAgICAgICAgICAga2V5UmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub0tleXMgPT09IHRydWUgfHwgc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgc3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuVVA6XG4gICAgICAgICAgICBrZXlVcCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuICAgICAgICAgICAga2V5Qm90dG9tID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuICAgICAgICAgICAga2V5TGVmdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG4gICAgICAgICAgICBrZXlSaWdodCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleVVwIHx8IGtleUJvdHRvbSB8fCBrZXlMZWZ0IHx8IGtleVJpZ2h0KSB7XG5cbiAgICAgICAgICAgIG1vbWVudHVtT24gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoa2V5VXApIG1vbWVudHVtVXAgPSAtIHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xuICAgICAgICAgICAgaWYgKGtleUJvdHRvbSkgbW9tZW50dW1VcCA9IHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xuICAgICAgICAgICAgaWYgKGtleUxlZnQpIG1vbWVudHVtTGVmdCA9IC0gc2NvcGUucm90YXRlU3BlZWQgKiBzY29wZS5tb21lbnR1bUtleWRvd25GYWN0b3I7XG4gICAgICAgICAgICBpZiAoa2V5UmlnaHQpIG1vbWVudHVtTGVmdCA9IHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNoc3RhcnQoIGV2ZW50ICkge1xuXG4gICAgICAgIG1vbWVudHVtT24gPSBmYWxzZTtcblxuICAgICAgICBtb21lbnR1bUxlZnQgPSBtb21lbnR1bVVwID0gMDtcblxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgIHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG4gICAgICAgIGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG4gICAgICAgICAgICByb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG4gICAgICAgICAgICB2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG4gICAgICAgICAgICB2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cbiAgICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cbiAgICAgICAgICAgIHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdWNobW92ZSggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuICAgICAgICBzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICByb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuICAgICAgICAgICAgLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG4gICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuICAgICAgICAgICAgaWYoIGV2ZW50UHJldmlvdXMgKXtcbiAgICAgICAgICAgICAgICBtb21lbnR1bUxlZnQgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudFByZXZpb3VzLnBhZ2VYO1xuICAgICAgICAgICAgICAgIG1vbWVudHVtVXAgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudFByZXZpb3VzLnBhZ2VZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudFByZXZpb3VzID0ge1xuICAgICAgICAgICAgICAgIHBhZ2VYOiBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsXG4gICAgICAgICAgICAgICAgcGFnZVk6IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcbiAgICAgICAgICAgIHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuICAgICAgICAgICAgZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuICAgICAgICAgICAgZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG4gICAgICAgICAgICBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92IDwgc2NvcGUubWF4Rm92ICkgXG4gICAgICAgICAgICAgICAgICAgID8gc2NvcGUub2JqZWN0LmZvdiArIDFcbiAgICAgICAgICAgICAgICAgICAgOiBzY29wZS5tYXhGb3Y7XG4gICAgICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLm9iamVjdC5mb3YgPSAoIHNjb3BlLm9iamVjdC5mb3YgPiBzY29wZS5taW5Gb3YgKSBcbiAgICAgICAgICAgICAgICAgICAgPyBzY29wZS5vYmplY3QuZm92IC0gMVxuICAgICAgICAgICAgICAgICAgICA6IHNjb3BlLm1pbkZvdjtcbiAgICAgICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47XG5cbiAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cbiAgICAgICAgICAgIHNjb3BlLnBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG4gICAgICAgICAgICBwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG91Y2hlbmQoIC8qIGV2ZW50ICovICkge1xuXG4gICAgICAgIG1vbWVudHVtT24gPSB0cnVlO1xuXG4gICAgICAgIGV2ZW50UHJldmlvdXMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uTW91c2VXaGVlbCApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25Nb3VzZVdoZWVsICk7XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdG91Y2hlbmQgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0b3VjaG1vdmUgKTtcblxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleXVwJywgb25LZXlVcCApO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24gKTtcblxuICAgIH07XG5cbiAgICAvLyB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgZnVuY3Rpb24gKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSwgZmFsc2UgKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvbk1vdXNlV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSApOyAvLyBmaXJlZm94XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0LCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdG91Y2hlbmQsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdG91Y2htb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5dXAnLCBvbktleVVwLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuXG4gICAgLy8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG4gICAgdGhpcy51cGRhdGUoKTtcblxufTtcblxuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBPcmJpdENvbnRyb2xzXG5cbn0gKTtcblxuZXhwb3J0IHsgT3JiaXRDb250cm9scyB9OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIERldmljZSBPcmllbnRhdGlvbiBDb250cm9sXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlcm5hbCBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzXG4gKiBAcGFyYW0ge1RIUkVFLkNhbWVyYX0gY2FtZXJhIFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZG9tRWxlbWVudCBcbiAqL1xuZnVuY3Rpb24gRGV2aWNlT3JpZW50YXRpb25Db250cm9scyAoIGNhbWVyYSwgZG9tRWxlbWVudCApIHtcblxuICAgIHZhciBzY29wZSA9IHRoaXM7XG4gICAgdmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXG4gICAgdmFyIHJvdFkgPSAwO1xuICAgIHZhciByb3RYID0gMDtcbiAgICB2YXIgdGVtcFggPSAwO1xuICAgIHZhciB0ZW1wWSA9IDA7XG5cbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICB0aGlzLmNhbWVyYS5yb3RhdGlvbi5yZW9yZGVyKCAnWVhaJyApO1xuICAgIHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5kZXZpY2VPcmllbnRhdGlvbiA9IHt9O1xuICAgIHRoaXMuc2NyZWVuT3JpZW50YXRpb24gPSAwO1xuXG4gICAgdGhpcy5hbHBoYSA9IDA7XG4gICAgdGhpcy5hbHBoYU9mZnNldEFuZ2xlID0gMDtcblxuXG4gICAgdmFyIG9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcblxuICAgICAgICBzY29wZS5kZXZpY2VPcmllbnRhdGlvbiA9IGV2ZW50O1xuXG4gICAgfTtcblxuICAgIHZhciBvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9IHdpbmRvdy5vcmllbnRhdGlvbiB8fCAwO1xuXG4gICAgfTtcblxuICAgIHZhciBvblRvdWNoU3RhcnRFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRlbXBYID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYO1xuICAgICAgICB0ZW1wWSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWTtcblxuICAgIH07XG5cbiAgICB2YXIgb25Ub3VjaE1vdmVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHJvdFkgKz0gVEhSRUUuTWF0aC5kZWdUb1JhZCggKCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSB0ZW1wWCApIC8gNCApO1xuICAgICAgICByb3RYICs9IFRIUkVFLk1hdGguZGVnVG9SYWQoICggdGVtcFkgLSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKSAvIDQgKTtcblxuICAgICAgICBzY29wZS51cGRhdGVBbHBoYU9mZnNldEFuZ2xlKCByb3RZICk7XG5cbiAgICAgICAgdGVtcFggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVg7XG4gICAgICAgIHRlbXBZID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZO1xuXG4gICAgfTtcblxuICAgIC8vIFRoZSBhbmdsZXMgYWxwaGEsIGJldGEgYW5kIGdhbW1hIGZvcm0gYSBzZXQgb2YgaW50cmluc2ljIFRhaXQtQnJ5YW4gYW5nbGVzIG9mIHR5cGUgWi1YJy1ZJydcblxuICAgIHZhciBzZXRDYW1lcmFRdWF0ZXJuaW9uID0gZnVuY3Rpb24oIHF1YXRlcm5pb24sIGFscGhhLCBiZXRhLCBnYW1tYSwgb3JpZW50ICkge1xuXG4gICAgICAgIHZhciB6ZWUgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgMSApO1xuXG4gICAgICAgIHZhciBldWxlciA9IG5ldyBUSFJFRS5FdWxlcigpO1xuXG4gICAgICAgIHZhciBxMCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cbiAgICAgICAgdmFyIHExID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oIC0gTWF0aC5zcXJ0KCAwLjUgKSwgMCwgMCwgTWF0aC5zcXJ0KCAwLjUgKSApOyAvLyAtIFBJLzIgYXJvdW5kIHRoZSB4LWF4aXNcblxuICAgICAgICB2YXIgdmVjdG9yRmluZ2VyWTtcbiAgICAgICAgdmFyIGZpbmdlclFZID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcbiAgICAgICAgdmFyIGZpbmdlclFYID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuICAgICAgICBpZiAoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uID09IDAgKSB7XG5cbiAgICAgICAgICAgIHZlY3RvckZpbmdlclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMSwgMCwgMCApO1xuICAgICAgICAgICAgZmluZ2VyUVkuc2V0RnJvbUF4aXNBbmdsZSggdmVjdG9yRmluZ2VyWSwgLXJvdFggKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSAxODAgKSB7XG5cbiAgICAgICAgICAgIHZlY3RvckZpbmdlclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMSwgMCwgMCApO1xuICAgICAgICAgICAgZmluZ2VyUVkuc2V0RnJvbUF4aXNBbmdsZSggdmVjdG9yRmluZ2VyWSwgcm90WCApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uID09IDkwICkge1xuXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKTtcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIHJvdFggKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSAtIDkwKSB7XG5cbiAgICAgICAgICAgIHZlY3RvckZpbmdlclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApO1xuICAgICAgICAgICAgZmluZ2VyUVkuc2V0RnJvbUF4aXNBbmdsZSggdmVjdG9yRmluZ2VyWSwgLXJvdFggKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcTEubXVsdGlwbHkoIGZpbmdlclFZICk7XG4gICAgICAgIHExLm11bHRpcGx5KCBmaW5nZXJRWCApO1xuXG4gICAgICAgIGV1bGVyLnNldCggYmV0YSwgYWxwaGEsIC0gZ2FtbWEsICdZWFonICk7IC8vICdaWFknIGZvciB0aGUgZGV2aWNlLCBidXQgJ1lYWicgZm9yIHVzXG5cbiAgICAgICAgcXVhdGVybmlvbi5zZXRGcm9tRXVsZXIoIGV1bGVyICk7IC8vIG9yaWVudCB0aGUgZGV2aWNlXG5cbiAgICAgICAgcXVhdGVybmlvbi5tdWx0aXBseSggcTEgKTsgLy8gY2FtZXJhIGxvb2tzIG91dCB0aGUgYmFjayBvZiB0aGUgZGV2aWNlLCBub3QgdGhlIHRvcFxuXG4gICAgICAgIHF1YXRlcm5pb24ubXVsdGlwbHkoIHEwLnNldEZyb21BeGlzQW5nbGUoIHplZSwgLSBvcmllbnQgKSApOyAvLyBhZGp1c3QgZm9yIHNjcmVlbiBvcmllbnRhdGlvblxuXG4gICAgfTtcblxuICAgIHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIG9uU2NyZWVuT3JpZW50YXRpb25DaGFuZ2VFdmVudCgpOyAvLyBydW4gb25jZSBvbiBsb2FkXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvcmllbnRhdGlvbmNoYW5nZScsIG9uU2NyZWVuT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIG9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMudXBkYXRlLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcblxuICAgICAgICBzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0RXZlbnQsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuICAgICAgICBzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZUV2ZW50LCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcblxuICAgICAgICBzY29wZS5lbmFibGVkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICB0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ29yaWVudGF0aW9uY2hhbmdlJywgb25TY3JlZW5PcmllbnRhdGlvbkNoYW5nZUV2ZW50LCBmYWxzZSApO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2RldmljZW9yaWVudGF0aW9uJywgb25EZXZpY2VPcmllbnRhdGlvbkNoYW5nZUV2ZW50LCBmYWxzZSApO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy51cGRhdGUuYmluZCggdGhpcyApLCBmYWxzZSApO1xuXG4gICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnRFdmVudCwgZmFsc2UgKTtcbiAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmVFdmVudCwgZmFsc2UgKTtcblxuICAgICAgICBzY29wZS5lbmFibGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiggaWdub3JlVXBkYXRlICkge1xuXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGFscGhhID0gc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYWxwaGEgPyBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5hbHBoYSApICsgc2NvcGUuYWxwaGFPZmZzZXRBbmdsZSA6IDA7IC8vIFpcbiAgICAgICAgdmFyIGJldGEgPSBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5iZXRhID8gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYmV0YSApIDogMDsgLy8gWCdcbiAgICAgICAgdmFyIGdhbW1hID0gc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uZ2FtbWEgPyBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5nYW1tYSApIDogMDsgLy8gWScnXG4gICAgICAgIHZhciBvcmllbnQgPSBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA/IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uICkgOiAwOyAvLyBPXG5cbiAgICAgICAgc2V0Q2FtZXJhUXVhdGVybmlvbiggc2NvcGUuY2FtZXJhLnF1YXRlcm5pb24sIGFscGhhLCBiZXRhLCBnYW1tYSwgb3JpZW50ICk7XG4gICAgICAgIHNjb3BlLmFscGhhID0gYWxwaGE7XG5cbiAgICAgICAgaWYgKCBpZ25vcmVVcGRhdGUgIT09IHRydWUgKSB7IHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7IH1cblxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZUFscGhhT2Zmc2V0QW5nbGUgPSBmdW5jdGlvbiggYW5nbGUgKSB7XG5cbiAgICAgICAgdGhpcy5hbHBoYU9mZnNldEFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5jb25uZWN0KCk7XG5cbn07XG5cbkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzXG5cbn0gKTtcblxuZXhwb3J0IHsgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyB9OyIsIlxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgR29vZ2xlIENhcmRib2FyZCBFZmZlY3QgQ29tcG9zZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVybmFsIENhcmRib2FyZEVmZmVjdFxuICogQHBhcmFtIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSByZW5kZXJlciBcbiAqL1xuZnVuY3Rpb24gQ2FyZGJvYXJkRWZmZWN0ICggcmVuZGVyZXIgKSB7XG5cbiAgICB2YXIgX2NhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC0gMSwgMSwgMSwgLSAxLCAwLCAxICk7XG5cbiAgICB2YXIgX3NjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICB2YXIgX3N0ZXJlbyA9IG5ldyBUSFJFRS5TdGVyZW9DYW1lcmEoKTtcbiAgICBfc3RlcmVvLmFzcGVjdCA9IDAuNTtcblxuICAgIHZhciBfcGFyYW1zID0geyBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLCBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXQgfTtcblxuICAgIHZhciBfcmVuZGVyVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCA1MTIsIDUxMiwgX3BhcmFtcyApO1xuICAgIF9yZW5kZXJUYXJnZXQuc2Npc3NvclRlc3QgPSB0cnVlO1xuICAgIF9yZW5kZXJUYXJnZXQudGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcblxuICAgIC8qXG4gICAgICogRGlzdG9ydGlvbiBNZXNoIHBvcnRlZCBmcm9tOlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1ib2lsZXJwbGF0ZS9ibG9iL21hc3Rlci9zcmMvZGlzdG9ydGlvbi9iYXJyZWwtZGlzdG9ydGlvbi1mcmFnbWVudC5qc1xuICAgICAqL1xuXG4gICAgdmFyIGRpc3RvcnRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMiggMC40NDEsIDAuMTU2ICk7XG5cbiAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggMSwgMSwgMTAsIDIwICkucmVtb3ZlQXR0cmlidXRlKCAnbm9ybWFsJyApLnRvTm9uSW5kZXhlZCgpO1xuXG4gICAgdmFyIHBvc2l0aW9ucyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XG4gICAgdmFyIHV2cyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYuYXJyYXk7XG5cbiAgICAvLyBkdXBsaWNhdGVcbiAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50ICo9IDI7XG4gICAgZ2VvbWV0cnkuYXR0cmlidXRlcy51di5jb3VudCAqPSAyO1xuXG4gICAgdmFyIHBvc2l0aW9uczIgPSBuZXcgRmxvYXQzMkFycmF5KCBwb3NpdGlvbnMubGVuZ3RoICogMiApO1xuICAgIHBvc2l0aW9uczIuc2V0KCBwb3NpdGlvbnMgKTtcbiAgICBwb3NpdGlvbnMyLnNldCggcG9zaXRpb25zLCBwb3NpdGlvbnMubGVuZ3RoICk7XG5cbiAgICB2YXIgdXZzMiA9IG5ldyBGbG9hdDMyQXJyYXkoIHV2cy5sZW5ndGggKiAyICk7XG4gICAgdXZzMi5zZXQoIHV2cyApO1xuICAgIHV2czIuc2V0KCB1dnMsIHV2cy5sZW5ndGggKTtcblxuICAgIHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHZhciBsZW5ndGggPSBwb3NpdGlvbnMubGVuZ3RoIC8gMztcblxuICAgIGZvciAoIHZhciBpID0gMCwgbCA9IHBvc2l0aW9uczIubGVuZ3RoIC8gMzsgaSA8IGw7IGkgKysgKSB7XG5cbiAgICAgICAgdmVjdG9yLnggPSBwb3NpdGlvbnMyWyBpICogMyArIDAgXTtcbiAgICAgICAgdmVjdG9yLnkgPSBwb3NpdGlvbnMyWyBpICogMyArIDEgXTtcblxuICAgICAgICB2YXIgZG90ID0gdmVjdG9yLmRvdCggdmVjdG9yICk7XG4gICAgICAgIHZhciBzY2FsYXIgPSAxLjUgKyAoIGRpc3RvcnRpb24ueCArIGRpc3RvcnRpb24ueSAqIGRvdCApICogZG90O1xuXG4gICAgICAgIHZhciBvZmZzZXQgPSBpIDwgbGVuZ3RoID8gMCA6IDE7XG5cbiAgICAgICAgcG9zaXRpb25zMlsgaSAqIDMgKyAwIF0gPSAoIHZlY3Rvci54IC8gc2NhbGFyICkgKiAxLjUgLSAwLjUgKyBvZmZzZXQ7XG4gICAgICAgIHBvc2l0aW9uczJbIGkgKiAzICsgMSBdID0gKCB2ZWN0b3IueSAvIHNjYWxhciApICogMy4wO1xuXG4gICAgICAgIHV2czJbIGkgKiAyIF0gPSAoIHV2czJbIGkgKiAyIF0gKyBvZmZzZXQgKSAqIDAuNTtcblxuICAgIH1cblxuICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXkgPSBwb3NpdGlvbnMyO1xuICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYuYXJyYXkgPSB1dnMyO1xuXG4gICAgLy9cblxuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBtYXA6IF9yZW5kZXJUYXJnZXQudGV4dHVyZSB9ICk7XG4gICAgdmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG4gICAgX3NjZW5lLmFkZCggbWVzaCApO1xuXG4gICAgLy9cblxuICAgIHRoaXMuc2V0U2l6ZSA9IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcblxuICAgICAgICByZW5kZXJlci5zZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICk7XG5cbiAgICAgICAgdmFyIHBpeGVsUmF0aW8gPSByZW5kZXJlci5nZXRQaXhlbFJhdGlvKCk7XG5cbiAgICAgICAgX3JlbmRlclRhcmdldC5zZXRTaXplKCB3aWR0aCAqIHBpeGVsUmF0aW8sIGhlaWdodCAqIHBpeGVsUmF0aW8gKTtcblxuICAgIH07XG5cbiAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uICggc2NlbmUsIGNhbWVyYSApIHtcblxuICAgICAgICBzY2VuZS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXG4gICAgICAgIGlmICggY2FtZXJhLnBhcmVudCA9PT0gbnVsbCApIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXG4gICAgICAgIF9zdGVyZW8udXBkYXRlKCBjYW1lcmEgKTtcblxuICAgICAgICB2YXIgd2lkdGggPSBfcmVuZGVyVGFyZ2V0LndpZHRoIC8gMjtcbiAgICAgICAgdmFyIGhlaWdodCA9IF9yZW5kZXJUYXJnZXQuaGVpZ2h0O1xuXG4gICAgICAgIGlmICggcmVuZGVyZXIuYXV0b0NsZWFyICkgcmVuZGVyZXIuY2xlYXIoKTtcblxuICAgICAgICBfcmVuZGVyVGFyZ2V0LnNjaXNzb3Iuc2V0KCAwLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XG4gICAgICAgIF9yZW5kZXJUYXJnZXQudmlld3BvcnQuc2V0KCAwLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XG4gICAgICAgIHJlbmRlcmVyLnNldFJlbmRlclRhcmdldCggX3JlbmRlclRhcmdldCApO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYUwgKTtcblxuICAgICAgICByZW5kZXJlci5jbGVhckRlcHRoKCk7XG5cbiAgICAgICAgX3JlbmRlclRhcmdldC5zY2lzc29yLnNldCggd2lkdGgsIDAsIHdpZHRoLCBoZWlnaHQgKTtcbiAgICAgICAgX3JlbmRlclRhcmdldC52aWV3cG9ydC5zZXQoIHdpZHRoLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XG4gICAgICAgIHJlbmRlcmVyLnNldFJlbmRlclRhcmdldCggX3JlbmRlclRhcmdldCApO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYVIgKTtcblxuICAgICAgICByZW5kZXJlci5jbGVhckRlcHRoKCk7XG5cbiAgICAgICAgcmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KCBudWxsICk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggX3NjZW5lLCBfY2FtZXJhICk7XG4gICAgfTtcblxufTtcblxuZXhwb3J0IHsgQ2FyZGJvYXJkRWZmZWN0IH07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgU3RlcmVvIEVmZmVjdCBDb21wb3NlclxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZXJuYWwgU3RlcmVvRWZmZWN0XG4gKiBAcGFyYW0ge1RIUkVFLldlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIFxuICovXG5jb25zdCBTdGVyZW9FZmZlY3QgPSBmdW5jdGlvbiAoIHJlbmRlcmVyICkge1xuXG4gICAgdmFyIF9zdGVyZW8gPSBuZXcgVEhSRUUuU3RlcmVvQ2FtZXJhKCk7XG4gICAgX3N0ZXJlby5hc3BlY3QgPSAwLjU7XG4gICAgdmFyIHNpemUgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgdGhpcy5zZXRFeWVTZXBhcmF0aW9uID0gZnVuY3Rpb24gKCBleWVTZXAgKSB7XG5cbiAgICAgICAgX3N0ZXJlby5leWVTZXAgPSBleWVTZXA7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5zZXRTaXplID0gZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0ICkge1xuXG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUoIHdpZHRoLCBoZWlnaHQgKTtcblxuICAgIH07XG5cbiAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uICggc2NlbmUsIGNhbWVyYSApIHtcblxuICAgICAgICBzY2VuZS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXG4gICAgICAgIGlmICggY2FtZXJhLnBhcmVudCA9PT0gbnVsbCApIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXG4gICAgICAgIF9zdGVyZW8udXBkYXRlKCBjYW1lcmEgKTtcblxuICAgICAgICByZW5kZXJlci5nZXRTaXplKCBzaXplICk7XG5cbiAgICAgICAgaWYgKCByZW5kZXJlci5hdXRvQ2xlYXIgKSByZW5kZXJlci5jbGVhcigpO1xuICAgICAgICByZW5kZXJlci5zZXRTY2lzc29yVGVzdCggdHJ1ZSApO1xuXG4gICAgICAgIHJlbmRlcmVyLnNldFNjaXNzb3IoIDAsIDAsIHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCApO1xuICAgICAgICByZW5kZXJlci5zZXRWaWV3cG9ydCggMCwgMCwgc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0ICk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIF9zdGVyZW8uY2FtZXJhTCApO1xuXG4gICAgICAgIHJlbmRlcmVyLnNldFNjaXNzb3IoIHNpemUud2lkdGggLyAyLCAwLCBzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0Vmlld3BvcnQoIHNpemUud2lkdGggLyAyLCAwLCBzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgX3N0ZXJlby5jYW1lcmFSICk7XG5cbiAgICAgICAgcmVuZGVyZXIuc2V0U2Npc3NvclRlc3QoIGZhbHNlICk7XG5cbiAgICB9O1xuXG59O1xuXG5leHBvcnQgeyBTdGVyZW9FZmZlY3QgfTsiLCJpbXBvcnQgeyBNT0RFUywgQ09OVFJPTFMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJy4uL2xpYi9jb250cm9scy9PcmJpdENvbnRyb2xzJztcbmltcG9ydCB7IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgfSBmcm9tICcuLi9saWIvY29udHJvbHMvRGV2aWNlT3JpZW50YXRpb25Db250cm9scyc7XG5pbXBvcnQgeyBDYXJkYm9hcmRFZmZlY3QgfSBmcm9tICcuLi9saWIvZWZmZWN0cy9DYXJkYm9hcmRFZmZlY3QnO1xuaW1wb3J0IHsgU3RlcmVvRWZmZWN0IH0gZnJvbSAnLi4vbGliL2VmZmVjdHMvU3RlcmVvRWZmZWN0JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldC9XaWRnZXQnO1xuaW1wb3J0IHsgUmV0aWNsZSB9IGZyb20gJy4uL2ludGVyZmFjZS9SZXRpY2xlJztcbmltcG9ydCB7IEluZm9zcG90IH0gZnJvbSAnLi4vaW5mb3Nwb3QvSW5mb3Nwb3QnO1xuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcbmltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi4vcGFub3JhbWEvUGFub3JhbWEnO1xuaW1wb3J0IHsgVmlkZW9QYW5vcmFtYSB9IGZyb20gJy4uL3Bhbm9yYW1hL1ZpZGVvUGFub3JhbWEnO1xuaW1wb3J0IHsgQ2FtZXJhUGFub3JhbWEgfSBmcm9tICcuLi9wYW5vcmFtYS9DYW1lcmFQYW5vcmFtYSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVmlld2VyIGNvbnRhaW5zIHByZS1kZWZpbmVkIHNjZW5lLCBjYW1lcmEgYW5kIHJlbmRlcmVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBVc2UgY3VzdG9tIG9yIGRlZmF1bHQgY29uZmlnIG9wdGlvbnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLmNvbnRhaW5lcl0gLSBBIEhUTUxFbGVtZW50IHRvIGhvc3QgdGhlIGNhbnZhc1xuICogQHBhcmFtIHtUSFJFRS5TY2VuZX0gW29wdGlvbnMuc2NlbmU9VEhSRUUuU2NlbmVdIC0gQSBUSFJFRS5TY2VuZSB3aGljaCBjb250YWlucyBwYW5vcmFtYSBhbmQgM0Qgb2JqZWN0c1xuICogQHBhcmFtIHtUSFJFRS5DYW1lcmF9IFtvcHRpb25zLmNhbWVyYT1USFJFRS5QZXJzcGVjdGl2ZUNhbWVyYV0gLSBBIFRIUkVFLkNhbWVyYSB0byB2aWV3IHRoZSBzY2VuZVxuICogQHBhcmFtIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSBbb3B0aW9ucy5yZW5kZXJlcj1USFJFRS5XZWJHTFJlbmRlcmVyXSAtIEEgVEhSRUUuV2ViR0xSZW5kZXJlciB0byByZW5kZXIgY2FudmFzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNvbnRyb2xCYXI9dHJ1ZV0gLSBTaG93L2hpZGUgY29udHJvbCBiYXIgb24gdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyXG4gKiBAcGFyYW0ge2FycmF5fSAgIFtvcHRpb25zLmNvbnRyb2xCdXR0b25zPVtdXSAtIEJ1dHRvbiBuYW1lcyB0byBtb3VudCBvbiBjb250cm9sQmFyIGlmIGNvbnRyb2xCYXIgZXhpc3RzLCBEZWZhdWx0cyB0byBbJ2Z1bGxzY3JlZW4nLCAnc2V0dGluZycsICd2aWRlbyddXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9IaWRlQ29udHJvbEJhcj1mYWxzZV0gLSBBdXRvIGhpZGUgY29udHJvbCBiYXIgd2hlbiBjbGljayBvbiBub24tYWN0aXZlIGFyZWFcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0hpZGVJbmZvc3BvdD10cnVlXSAtIEF1dG8gaGlkZSBpbmZvc3BvdHMgd2hlbiBjbGljayBvbiBub24tYWN0aXZlIGFyZWFcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaG9yaXpvbnRhbFZpZXc9ZmFsc2VdIC0gQWxsb3cgb25seSBob3Jpem9udGFsIGNhbWVyYSBjb250cm9sXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmNsaWNrVG9sZXJhbmNlPTEwXSAtIERpc3RhbmNlIHRvbGVyYW5jZSB0byB0aWdnZXIgY2xpY2sgLyB0YXAgZXZlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuY2FtZXJhRm92PTYwXSAtIENhbWVyYSBmaWVsZCBvZiB2aWV3IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJldmVyc2VEcmFnZ2luZz1mYWxzZV0gLSBSZXZlcnNlIGRyYWdnaW5nIGRpcmVjdGlvblxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5lbmFibGVSZXRpY2xlPWZhbHNlXSAtIEVuYWJsZSByZXRpY2xlIGZvciBtb3VzZWxlc3MgaW50ZXJhY3Rpb24gb3RoZXIgdGhhbiBWUiBtb2RlXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmR3ZWxsVGltZT0xNTAwXSAtIER3ZWxsIHRpbWUgZm9yIHJldGljbGUgc2VsZWN0aW9uIGluIG1zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9SZXRpY2xlU2VsZWN0PXRydWVdIC0gQXV0byBzZWxlY3QgYSBjbGlja2FibGUgdGFyZ2V0IGFmdGVyIGR3ZWxsVGltZVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy52aWV3SW5kaWNhdG9yPWZhbHNlXSAtIEFkZHMgYW4gYW5nbGUgdmlldyBpbmRpY2F0b3IgaW4gdXBwZXIgbGVmdCBjb3JuZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuaW5kaWNhdG9yU2l6ZT0zMF0gLSBTaXplIG9mIFZpZXcgSW5kaWNhdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gIFtvcHRpb25zLm91dHB1dD0nbm9uZSddIC0gV2hldGhlciBhbmQgd2hlcmUgdG8gb3V0cHV0IHJheWNhc3QgcG9zaXRpb24uIENvdWxkIGJlICdldmVudCcsICdjb25zb2xlJyBvciAnb3ZlcmxheScuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9Sb3RhdGU9ZmFsc2VdIC0gQXV0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuYXV0b1JvdGF0ZVNwZWVkPTIuMF0gLSBBdXRvIHJvdGF0ZSBzcGVlZCBhcyBpbiBkZWdyZWUgcGVyIHNlY29uZC4gUG9zaXRpdmUgaXMgY291bnRlci1jbG9ja3dpc2UgYW5kIG5lZ2F0aXZlIGlzIGNsb2Nrd2lzZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuYXV0b1JvdGF0ZUFjdGl2YXRpb25EdXJhdGlvbj01MDAwXSAtIER1cmF0aW9uIGJlZm9yZSBhdXRvIHJvdGF0YXRpb24gd2hlbiBubyB1c2VyIGludGVyYWN0aXZpdHkgaW4gbXNcbiAqL1xuZnVuY3Rpb24gVmlld2VyICggb3B0aW9ucyApIHtcblxuICAgIGxldCBjb250YWluZXI7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmNvbnRyb2xCYXIgPSBvcHRpb25zLmNvbnRyb2xCYXIgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY29udHJvbEJhciA6IHRydWU7XG4gICAgb3B0aW9ucy5jb250cm9sQnV0dG9ucyA9IG9wdGlvbnMuY29udHJvbEJ1dHRvbnMgfHwgWyAnZnVsbHNjcmVlbicsICdzZXR0aW5nJywgJ3ZpZGVvJyBdO1xuICAgIG9wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyID0gb3B0aW9ucy5hdXRvSGlkZUNvbnRyb2xCYXIgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyIDogZmFsc2U7XG4gICAgb3B0aW9ucy5hdXRvSGlkZUluZm9zcG90ID0gb3B0aW9ucy5hdXRvSGlkZUluZm9zcG90ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmF1dG9IaWRlSW5mb3Nwb3QgOiB0cnVlO1xuICAgIG9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgPSBvcHRpb25zLmhvcml6b250YWxWaWV3ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmhvcml6b250YWxWaWV3IDogZmFsc2U7XG4gICAgb3B0aW9ucy5jbGlja1RvbGVyYW5jZSA9IG9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgfHwgMTA7XG4gICAgb3B0aW9ucy5jYW1lcmFGb3YgPSBvcHRpb25zLmNhbWVyYUZvdiB8fCA2MDtcbiAgICBvcHRpb25zLnJldmVyc2VEcmFnZ2luZyA9IG9wdGlvbnMucmV2ZXJzZURyYWdnaW5nIHx8IGZhbHNlO1xuICAgIG9wdGlvbnMuZW5hYmxlUmV0aWNsZSA9IG9wdGlvbnMuZW5hYmxlUmV0aWNsZSB8fCBmYWxzZTtcbiAgICBvcHRpb25zLmR3ZWxsVGltZSA9IG9wdGlvbnMuZHdlbGxUaW1lIHx8IDE1MDA7XG4gICAgb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCA9IG9wdGlvbnMuYXV0b1JldGljbGVTZWxlY3QgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYXV0b1JldGljbGVTZWxlY3QgOiB0cnVlO1xuICAgIG9wdGlvbnMudmlld0luZGljYXRvciA9IG9wdGlvbnMudmlld0luZGljYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy52aWV3SW5kaWNhdG9yIDogZmFsc2U7XG4gICAgb3B0aW9ucy5pbmRpY2F0b3JTaXplID0gb3B0aW9ucy5pbmRpY2F0b3JTaXplIHx8IDMwO1xuICAgIG9wdGlvbnMub3V0cHV0ID0gb3B0aW9ucy5vdXRwdXQgPyBvcHRpb25zLm91dHB1dCA6ICdub25lJztcbiAgICBvcHRpb25zLmF1dG9Sb3RhdGUgPSBvcHRpb25zLmF1dG9Sb3RhdGUgfHwgZmFsc2U7XG4gICAgb3B0aW9ucy5hdXRvUm90YXRlU3BlZWQgPSBvcHRpb25zLmF1dG9Sb3RhdGVTcGVlZCB8fCAyLjA7XG4gICAgb3B0aW9ucy5hdXRvUm90YXRlQWN0aXZhdGlvbkR1cmF0aW9uID0gb3B0aW9ucy5hdXRvUm90YXRlQWN0aXZhdGlvbkR1cmF0aW9uIHx8IDUwMDA7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgLypcbiAgICAgKiBDU1MgSWNvblxuICAgICAqIGNvbnN0IHN0eWxlTG9hZGVyID0gbmV3IFN0eWxlTG9hZGVyKCk7XG4gICAgICogc3R5bGVMb2FkZXIuaW5qZWN0KCAnaWNvbm8nICk7XG4gICAgICovXG5cbiAgICAvLyBDb250YWluZXJcbiAgICBpZiAoIG9wdGlvbnMuY29udGFpbmVyICkge1xuXG4gICAgICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgICAgICBjb250YWluZXIuX3dpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgICBjb250YWluZXIuX2hlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCAncGFub2xlbnMtY29udGFpbmVyJyApO1xuICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIGNvbnRhaW5lci5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY29udGFpbmVyLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApO1xuXG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG9wdGlvbnMuY2FtZXJhIHx8IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggdGhpcy5vcHRpb25zLmNhbWVyYUZvdiwgdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQsIDEsIDEwMDAwICk7XG4gICAgdGhpcy5zY2VuZSA9IG9wdGlvbnMuc2NlbmUgfHwgbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgdGhpcy5yZW5kZXJlciA9IG9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHsgYWxwaGE6IHRydWUsIGFudGlhbGlhczogZmFsc2UgfSApO1xuICAgIHRoaXMuc2NlbmVSZXRpY2xlID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICB0aGlzLnZpZXdJbmRpY2F0b3JTaXplID0gdGhpcy5vcHRpb25zLmluZGljYXRvclNpemU7XG5cbiAgICB0aGlzLnJldGljbGUgPSB7fTtcbiAgICB0aGlzLnRlbXBFbmFibGVSZXRpY2xlID0gdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGU7XG5cbiAgICB0aGlzLm1vZGUgPSBNT0RFUy5OT1JNQUw7XG5cbiAgICB0aGlzLnBhbm9yYW1hID0gbnVsbDtcbiAgICB0aGlzLndpZGdldCA9IG51bGw7XG5cbiAgICB0aGlzLmhvdmVyT2JqZWN0ID0gbnVsbDtcbiAgICB0aGlzLmluZm9zcG90ID0gbnVsbDtcbiAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID0gbnVsbDtcbiAgICB0aGlzLnByZXNzT2JqZWN0ID0gbnVsbDtcblxuICAgIHRoaXMucmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuICAgIHRoaXMucmF5Y2FzdGVyUG9pbnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgIHRoaXMudXNlck1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcyA9IFtdO1xuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbklkID0gbnVsbDtcblxuICAgIHRoaXMuY2FtZXJhRnJ1c3R1bSA9IG5ldyBUSFJFRS5GcnVzdHVtKCk7XG4gICAgdGhpcy5jYW1lcmFWaWV3UHJvamVjdGlvbk1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cbiAgICB0aGlzLmF1dG9Sb3RhdGVSZXF1ZXN0SWQgPSBudWxsO1xuXG4gICAgdGhpcy5vdXRwdXREaXZFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMudG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoO1xuXG4gICAgLy8gSGFuZGxlciByZWZlcmVuY2VzXG4gICAgdGhpcy5IQU5ETEVSX01PVVNFX0RPV04gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLkhBTkRMRVJfTU9VU0VfVVAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5IQU5ETEVSX01PVVNFX01PVkUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLkhBTkRMRVJfV0lORE9XX1JFU0laRSA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCggdGhpcyApO1xuICAgIHRoaXMuSEFORExFUl9LRVlfRE9XTiA9IHRoaXMub25LZXlEb3duLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLkhBTkRMRVJfS0VZX1VQID0gdGhpcy5vbktleVVwLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLkhBTkRMRVJfVEFQID0gdGhpcy5vblRhcC5iaW5kKCB0aGlzLCB7XG4gICAgICAgIGNsaWVudFg6IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMixcbiAgICAgICAgY2xpZW50WTogdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMlxuICAgIH0gKTtcblxuICAgIC8vIEZsYWcgZm9yIGluZm9zcG90IG91dHB1dFxuICAgIHRoaXMuT1VUUFVUX0lORk9TUE9UID0gZmFsc2U7XG5cbiAgICAvLyBBbmltYXRpb25zXG4gICAgdGhpcy50d2VlbkxlZnRBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcbiAgICB0aGlzLnR3ZWVuVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcblxuICAgIC8vIFJlbmRlcmVyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHgwMDAwMDAsIDAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xuXG4gICAgLy8gQXBwZW5kIFJlbmRlcmVyIEVsZW1lbnQgdG8gY29udGFpbmVyXG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwYW5vbGVucy1jYW52YXMnICk7XG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggdGhpcy5yZW5kZXJlci5kb21FbGVtZW50ICk7XG5cbiAgICAvLyBDYW1lcmEgQ29udHJvbHNcbiAgICB0aGlzLk9yYml0Q29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyggdGhpcy5jYW1lcmEsIHRoaXMuY29udGFpbmVyICk7XG4gICAgdGhpcy5PcmJpdENvbnRyb2xzLmlkID0gJ29yYml0JztcbiAgICB0aGlzLk9yYml0Q29udHJvbHMubWluRGlzdGFuY2UgPSAxO1xuICAgIHRoaXMuT3JiaXRDb250cm9scy5ub1BhbiA9IHRydWU7XG4gICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZTtcbiAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZVNwZWVkID0gdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGVTcGVlZDtcblxuICAgIHRoaXMuRGV2aWNlT3JpZW50YXRpb25Db250cm9scyA9IG5ldyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKCB0aGlzLmNhbWVyYSwgdGhpcy5jb250YWluZXIgKTtcbiAgICB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMuaWQgPSAnZGV2aWNlLW9yaWVudGF0aW9uJztcbiAgICB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxO1xuXG4gICAgLy8gUmVnaXN0ZXIgY2hhbmdlIGV2ZW50IGlmIHBhc3NpdmVSZW5lcmluZ1xuICAgIGlmICggdGhpcy5vcHRpb25zLnBhc3NpdmVSZW5kZXJpbmcgKSB7XG5cbiAgICAgICAgY29uc29sZS53YXJuKCAncGFzc2l2ZVJlbmRlcmluZyBpcyBub3cgZGVwcmVjYXRlZCcgKTtcblxuICAgIH1cblxuICAgIC8vIENvbnRyb2xzXG4gICAgdGhpcy5jb250cm9scyA9IFsgdGhpcy5PcmJpdENvbnRyb2xzLCB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMgXTtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLk9yYml0Q29udHJvbHM7XG5cbiAgICAvLyBDYXJkYm9hcmQgZWZmZWN0XG4gICAgdGhpcy5DYXJkYm9hcmRFZmZlY3QgPSBuZXcgQ2FyZGJvYXJkRWZmZWN0KCB0aGlzLnJlbmRlcmVyICk7XG4gICAgdGhpcy5DYXJkYm9hcmRFZmZlY3Quc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xuXG4gICAgLy8gU3RlcmVvIGVmZmVjdFxuICAgIHRoaXMuU3RlcmVvRWZmZWN0ID0gbmV3IFN0ZXJlb0VmZmVjdCggdGhpcy5yZW5kZXJlciApO1xuICAgIHRoaXMuU3RlcmVvRWZmZWN0LnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcblxuICAgIHRoaXMuZWZmZWN0ID0gdGhpcy5DYXJkYm9hcmRFZmZlY3Q7XG5cbiAgICAvLyBBZGQgZGVmYXVsdCBoaWRkZW4gcmV0aWNsZVxuICAgIHRoaXMuYWRkUmV0aWNsZSgpO1xuXG4gICAgLy8gTG9jayBob3Jpem9udGFsIHZpZXdcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5ob3Jpem9udGFsVmlldyApIHtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm1pblBvbGFyQW5nbGUgPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJIC8gMjtcbiAgICB9XG5cbiAgICAvLyBBZGQgQ29udHJvbCBVSVxuICAgIGlmICggdGhpcy5vcHRpb25zLmNvbnRyb2xCYXIgIT09IGZhbHNlICkge1xuICAgICAgICB0aGlzLmFkZERlZmF1bHRDb250cm9sQmFyKCB0aGlzLm9wdGlvbnMuY29udHJvbEJ1dHRvbnMgKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgVmlldyBJbmRpY2F0b3JcbiAgICBpZiAoIHRoaXMub3B0aW9ucy52aWV3SW5kaWNhdG9yICkge1xuICAgICAgICB0aGlzLmFkZFZpZXdJbmRpY2F0b3IoKTtcbiAgICB9XG5cbiAgICAvLyBSZXZlcnNlIGRyYWdnaW5nIGRpcmVjdGlvblxuICAgIGlmICggdGhpcy5vcHRpb25zLnJldmVyc2VEcmFnZ2luZyApIHtcbiAgICAgICAgdGhpcy5yZXZlcnNlRHJhZ2dpbmdEaXJlY3Rpb24oKTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlciBldmVudCBpZiByZXRpY2xlIGlzIGVuYWJsZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBtb3VzZVxuICAgIGlmICggdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGUgKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlUmV0aWNsZUNvbnRyb2woKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIE91dHB1dCBpbmZvc3BvdCBwb3NpdGlvbiB0byBhbiBvdmVybGF5IGNvbnRhaW5lciBpZiBzcGVjaWZpZWRcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5vdXRwdXQgPT09ICdvdmVybGF5JyApIHtcbiAgICAgICAgdGhpcy5hZGRPdXRwdXRFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgZG9tIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuXG4gICAgLy8gQW5pbWF0ZVxuICAgIHRoaXMuYW5pbWF0ZS5jYWxsKCB0aGlzICk7XG5cbn07XG5cblZpZXdlci5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICksIHtcblxuICAgIGNvbnN0cnVjdG9yOiBWaWV3ZXIsXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gb2JqZWN0IHRvIHRoZSBzY2VuZVxuICAgICAqIEF1dG9tYXRpY2FsbHkgaG9va3VwIHdpdGggcGFub2xlbnMtdmlld2VyLWhhbmRsZXIgbGlzdGVuZXJcbiAgICAgKiB0byBjb21tdW5pY2F0ZSB3aXRoIHZpZXdlciBtZXRob2RcbiAgICAgKiBAcGFyYW0ge1RIUkVFLk9iamVjdDNEfSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGJlIGFkZGVkXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cbiAgICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcblxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArKyApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKCBhcmd1bWVudHNbIGkgXSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjZW5lLmFkZCggb2JqZWN0ICk7XG5cbiAgICAgICAgLy8gQWxsIG9iamVjdCBhZGRlZCB0byBzY2VuZSBoYXMgJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJyBldmVudCB0byBoYW5kbGUgdmlld2VyIGNvbW11bmljYXRpb25cbiAgICAgICAgaWYgKCBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lciApIHtcblxuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoIHRoaXMgKSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGwgb2JqZWN0IGFkZGVkIHRvIHNjZW5lIGJlaW5nIHBhc3NlZCB3aXRoIGNvbnRhaW5lclxuICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIFBhbm9yYW1hICYmIG9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtY29udGFpbmVyJywgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lciB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgQ2FtZXJhUGFub3JhbWEgKSB7XG5cbiAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy1zY2VuZScsIHNjZW5lOiB0aGlzLnNjZW5lIH0gKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSG9va3VwIGRlZmF1bHQgcGFub3JhbWEgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGlmICggb2JqZWN0LnR5cGUgPT09ICdwYW5vcmFtYScgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkUGFub3JhbWFFdmVudExpc3RlbmVyKCBvYmplY3QgKTtcblxuICAgICAgICAgICAgaWYgKCAhdGhpcy5wYW5vcmFtYSApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFub3JhbWEoIG9iamVjdCApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbiBvYmplY3QgZnJvbSB0aGUgc2NlbmVcbiAgICAgKiBAcGFyYW0gIHtUSFJFRS5PYmplY3QzRH0gb2JqZWN0IC0gT2JqZWN0IHRvIGJlIHJlbW92ZWRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuICAgICAgICBpZiAoIG9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyICkge1xuXG4gICAgICAgICAgICBvYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgdGhpcy5ldmVudEhhbmRsZXIuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlKCBvYmplY3QgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgZGVmYXVsdCBjb250cm9sIGJhclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFycmF5IC0gVGhlIGNvbnRyb2wgYnV0dG9ucyBhcnJheVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGREZWZhdWx0Q29udHJvbEJhcjogZnVuY3Rpb24gKCBhcnJheSApIHtcblxuICAgICAgICBpZiAoIHRoaXMud2lkZ2V0ICkge1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdEZWZhdWx0IGNvbnRyb2wgYmFyIGV4aXN0cycgKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2lkZ2V0ID0gbmV3IFdpZGdldCggdGhpcy5jb250YWluZXIgKTtcbiAgICAgICAgd2lkZ2V0LmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoIHRoaXMgKSApO1xuICAgICAgICB3aWRnZXQuYWRkQ29udHJvbEJhcigpO1xuICAgICAgICBhcnJheS5mb3JFYWNoKCBidXR0b25OYW1lID0+IHtcblxuICAgICAgICAgICAgd2lkZ2V0LmFkZENvbnRyb2xCdXR0b24oIGJ1dHRvbk5hbWUgKTtcblxuICAgICAgICB9ICk7XG5cbiAgICAgICAgdGhpcy53aWRnZXQgPSB3aWRnZXQ7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgcGFub3JhbWEgdG8gYmUgdGhlIGN1cnJlbnQgb25lXG4gICAgICogQHBhcmFtIHtQYW5vcmFtYX0gcGFubyAtIFBhbm9yYW1hIHRvIGJlIHNldFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRQYW5vcmFtYTogZnVuY3Rpb24gKCBwYW5vICkge1xuXG4gICAgICAgIGNvbnN0IGxlYXZpbmdQYW5vcmFtYSA9IHRoaXMucGFub3JhbWE7XG5cbiAgICAgICAgaWYgKCBwYW5vLnR5cGUgPT09ICdwYW5vcmFtYScgJiYgbGVhdmluZ1Bhbm9yYW1hICE9PSBwYW5vICkge1xuXG4gICAgICAgICAgICAvLyBDbGVhciBleGlzaXRpbmcgaW5mb3Nwb3RcbiAgICAgICAgICAgIHRoaXMuaGlkZUluZm9zcG90KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFmdGVyRW50ZXJDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGlmICggbGVhdmluZ1Bhbm9yYW1hICkgeyBsZWF2aW5nUGFub3JhbWEub25MZWF2ZSgpOyB9XG4gICAgICAgICAgICAgICAgcGFuby5yZW1vdmVFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIGFmdGVyRW50ZXJDb21wbGV0ZSApO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgYWZ0ZXJFbnRlckNvbXBsZXRlICk7XG5cbiAgICAgICAgICAgIC8vIEFzc2lnbiBhbmQgZW50ZXIgcGFub3JhbWFcbiAgICAgICAgICAgICh0aGlzLnBhbm9yYW1hID0gcGFubykub25FbnRlcigpO1xuXHRcdFx0XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGV4ZWN1dGUgY29tbWFuZHMgZnJvbSBjaGlsZCBvYmplY3RzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IC0gVGhlIGRpc3BhdGNoZWQgZXZlbnQgd2l0aCBtZXRob2QgYXMgZnVuY3Rpb24gbmFtZSBhbmQgZGF0YSBhcyBhbiBhcmd1bWVudFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBldmVudEhhbmRsZXI6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCBldmVudC5tZXRob2QgJiYgdGhpc1sgZXZlbnQubWV0aG9kIF0gKSB7XG5cbiAgICAgICAgICAgIHRoaXNbIGV2ZW50Lm1ldGhvZCBdKCBldmVudC5kYXRhICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGV2ZW50IHRvIGFsbCBkZXNjZW5kYW50c1xuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBFdmVudCB0byBiZSBwYXNzZWQgYWxvbmdcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudFRvQ2hpbGRyZW46IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgdGhpcy5zY2VuZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cbiAgICAgICAgICAgIGlmICggb2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggZXZlbnQgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB3aWRnZXQgY29udGVudFxuICAgICAqIEBtZXRob2QgYWN0aXZhdGVXaWRnZXRJdGVtXG4gICAgICogQHBhcmFtICB7aW50ZWdlcn0gY29udHJvbEluZGV4IC0gQ29udHJvbCBpbmRleFxuICAgICAqIEBwYXJhbSAge2ludGVnZXJ9IG1vZGUgLSBNb2RlcyBmb3IgZWZmZWN0c1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhY3RpdmF0ZVdpZGdldEl0ZW06IGZ1bmN0aW9uICggY29udHJvbEluZGV4LCBtb2RlICkge1xuXG4gICAgICAgIGNvbnN0IG1haW5NZW51ID0gdGhpcy53aWRnZXQubWFpbk1lbnU7XG4gICAgICAgIGNvbnN0IENvbnRyb2xNZW51SXRlbSA9IG1haW5NZW51LmNoaWxkcmVuWyAwIF07XG4gICAgICAgIGNvbnN0IE1vZGVNZW51SXRlbSA9IG1haW5NZW51LmNoaWxkcmVuWyAxIF07XG5cbiAgICAgICAgbGV0IGl0ZW07XG5cbiAgICAgICAgaWYgKCBjb250cm9sSW5kZXggIT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgc3dpdGNoICggY29udHJvbEluZGV4ICkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gQ29udHJvbE1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDEgXTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gQ29udHJvbE1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDIgXTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXHRcdFx0XHRcdFxuICAgICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgICAgIGl0ZW0gPSBDb250cm9sTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMSBdO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XHRcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDb250cm9sTWVudUl0ZW0uc3ViTWVudS5zZXRBY3RpdmVJdGVtKCBpdGVtICk7XG4gICAgICAgICAgICBDb250cm9sTWVudUl0ZW0uc2V0U2VsZWN0aW9uVGl0bGUoIGl0ZW0udGV4dENvbnRlbnQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBtb2RlICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgIHN3aXRjaCggbW9kZSApIHtcblxuICAgICAgICAgICAgY2FzZSBNT0RFUy5DQVJEQk9BUkQ6XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gTW9kZU1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDIgXTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE1PREVTLlNURVJFTzpcblxuICAgICAgICAgICAgICAgIGl0ZW0gPSBNb2RlTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMyBdO1xuXHRcdFx0XHRcdFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICAgICAgaXRlbSA9IE1vZGVNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAxIF07XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTW9kZU1lbnVJdGVtLnN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggaXRlbSApO1xuICAgICAgICAgICAgTW9kZU1lbnVJdGVtLnNldFNlbGVjdGlvblRpdGxlKCBpdGVtLnRleHRDb250ZW50ICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSByZW5kZXJpbmcgZWZmZWN0XG4gICAgICogQHBhcmFtICB7TU9ERVN9IG1vZGUgLSBNb2RlcyBmb3IgZWZmZWN0c1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBlbmFibGVFZmZlY3Q6IGZ1bmN0aW9uICggbW9kZSApIHtcblxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gbW9kZSApIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICggbW9kZSA9PT0gTU9ERVMuTk9STUFMICkgeyB0aGlzLmRpc2FibGVFZmZlY3QoKTsgcmV0dXJuOyB9XG4gICAgICAgIGVsc2UgeyB0aGlzLm1vZGUgPSBtb2RlOyB9XG5cbiAgICAgICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92O1xuXG4gICAgICAgIHN3aXRjaCggbW9kZSApIHtcblxuICAgICAgICBjYXNlIE1PREVTLkNBUkRCT0FSRDpcblxuICAgICAgICAgICAgdGhpcy5lZmZlY3QgPSB0aGlzLkNhcmRib2FyZEVmZmVjdDtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUmV0aWNsZUNvbnRyb2woKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBNT0RFUy5TVEVSRU86XG5cbiAgICAgICAgICAgIHRoaXMuZWZmZWN0ID0gdGhpcy5TdGVyZW9FZmZlY3Q7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJldGljbGVDb250cm9sKCk7XG5cdFx0XHRcdFxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgdGhpcy5lZmZlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlUmV0aWNsZUNvbnRyb2woKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaWRnZXRJdGVtKCB1bmRlZmluZWQsIHRoaXMubW9kZSApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEdWFsIGV5ZSBlZmZlY3QgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IEluZm9zcG90I3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdFxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudFRvQ2hpbGRyZW4oIHsgdHlwZTogJ3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdCcsIG1vZGU6IHRoaXMubW9kZSB9ICk7XG5cbiAgICAgICAgLy8gRm9yY2UgZWZmZWN0IHN0ZXJlbyBjYW1lcmEgdG8gdXBkYXRlIGJ5IHJlZnJlc2hpbmcgZm92XG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdiArIDEwZS0zO1xuICAgICAgICB0aGlzLmVmZmVjdC5zZXRTaXplKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCwgdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGF0Y2ggbW9kZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciNtb2RlLWNoYW5nZVxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbW9kZS1jaGFuZ2UnLCBtb2RlOiB0aGlzLm1vZGUgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYWRkaXRpb25hbCByZW5kZXJpbmcgZWZmZWN0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRpc2FibGVFZmZlY3Q6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuTk9STUFMICkgeyByZXR1cm47IH1cblxuICAgICAgICB0aGlzLm1vZGUgPSBNT0RFUy5OT1JNQUw7XG4gICAgICAgIHRoaXMuZGlzYWJsZVJldGljbGVDb250cm9sKCk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZVdpZGdldEl0ZW0oIHVuZGVmaW5lZCwgdGhpcy5tb2RlICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIER1YWwgZXllIGVmZmVjdCBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjcGFub2xlbnMtZHVhbC1leWUtZWZmZWN0XG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TU9ERVN9IG1vZGUgLSBDdXJyZW50IGRpc3BsYXkgbW9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50VG9DaGlsZHJlbiggeyB0eXBlOiAncGFub2xlbnMtZHVhbC1leWUtZWZmZWN0JywgbW9kZTogdGhpcy5tb2RlIH0gKTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGF0Y2ggbW9kZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciNtb2RlLWNoYW5nZVxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbW9kZS1jaGFuZ2UnLCBtb2RlOiB0aGlzLm1vZGUgfSApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgcmV0aWNsZSBjb250cm9sXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGVuYWJsZVJldGljbGVDb250cm9sOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLnJldGljbGUudmlzaWJsZSApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSA9IHRydWU7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgcmV0aWNsZSBldmVudCBhbmQgdW5yZWdpc3RlciBtb3VzZSBldmVudFxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzKCk7XG4gICAgICAgIHRoaXMucmV0aWNsZS5zaG93KCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSZXRpY2xlRXZlbnQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXRpY2xlRXZlbnQoKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHJldGljbGUgY29udHJvbFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNhYmxlUmV0aWNsZUNvbnRyb2w6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnRlbXBFbmFibGVSZXRpY2xlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgbW91c2UgZXZlbnQgYW5kIHVucmVnaXN0ZXIgcmV0aWNsZSBldmVudFxuICAgICAgICBpZiAoICF0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSApIHtcblxuICAgICAgICAgICAgdGhpcy5yZXRpY2xlLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMudW5yZWdpc3RlclJldGljbGVFdmVudCgpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHMoKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJldGljbGVFdmVudCgpO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgYXV0byByb3RhdGlvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBlbmFibGVBdXRvUmF0ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5hdXRvUm90YXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYXV0byByb3RhdGlvblxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkaXNhYmxlQXV0b1JhdGU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjbGVhclRpbWVvdXQoIHRoaXMuYXV0b1JvdGF0ZVJlcXVlc3RJZCApO1xuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB2aWRlbyBwbGF5IG9yIHN0b3BcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhdXNlXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBWaWV3ZXIjdmlkZW8tdG9nZ2xlXG4gICAgICovXG4gICAgdG9nZ2xlVmlkZW9QbGF5OiBmdW5jdGlvbiAoIHBhdXNlICkge1xuXG4gICAgICAgIGlmICggdGhpcy5wYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG9nZ2xlIHZpZGVvIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby10b2dnbGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby10b2dnbGUnLCBwYXVzZTogcGF1c2UgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgY3VycmVudFRpbWUgaW4gYSB2aWRlb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZXdlciN2aWRlby10aW1lXG4gICAgICovXG4gICAgc2V0VmlkZW9DdXJyZW50VGltZTogZnVuY3Rpb24gKCBwZXJjZW50YWdlICkge1xuXG4gICAgICAgIGlmICggdGhpcy5wYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0dGluZyB2aWRlbyB0aW1lIGV2ZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby10aW1lXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tdGltZScsIHBlcmNlbnRhZ2U6IHBlcmNlbnRhZ2UgfSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gdmlkZW8gdXBkYXRlcyBpZiBhbiB3aWRnZXQgaXMgcHJlc2VudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZXdlciN2aWRlby11cGRhdGVcbiAgICAgKi9cbiAgICBvblZpZGVvVXBkYXRlOiBmdW5jdGlvbiAoIHBlcmNlbnRhZ2UgKSB7XG5cbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZpZGVvIHVwZGF0ZSBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLXVwZGF0ZVxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXG4gICAgICAgICAqL1xuICAgICAgICBpZiggd2lkZ2V0ICkgeyB3aWRnZXQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tdXBkYXRlJywgcGVyY2VudGFnZTogcGVyY2VudGFnZSB9ICk7IH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgdXBkYXRlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBldmVyeSBhbmltYXRpb24gZnJhbWVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRVcGRhdGVDYWxsYmFjazogZnVuY3Rpb24gKCBmbiApIHtcblxuICAgICAgICBpZiAoIGZuICkge1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5wdXNoKCBmbiApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdXBkYXRlIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGJlIHJlbW92ZWRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVtb3ZlVXBkYXRlQ2FsbGJhY2s6IGZ1bmN0aW9uICggZm4gKSB7XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5pbmRleE9mKCBmbiApO1xuXG4gICAgICAgIGlmICggZm4gJiYgaW5kZXggPj0gMCApIHtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFja3Muc3BsaWNlKCBpbmRleCwgMSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG93IHZpZGVvIHdpZGdldFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaG93VmlkZW9XaWRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCB7IHdpZGdldCB9ID0gdGhpcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB2aWRlbyB3aWRnZXQgZXZlbnRcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby1jb250cm9sLXNob3dcbiAgICAgICAgICovXG4gICAgICAgIGlmKCB3aWRnZXQgKSB7IHdpZGdldC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby1jb250cm9sLXNob3cnIH0gKTsgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhpZGUgdmlkZW8gd2lkZ2V0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGhpZGVWaWRlb1dpZGdldDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIaWRlIHZpZGVvIHdpZGdldFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLWNvbnRyb2wtaGlkZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYoIHdpZGdldCApIHsgd2lkZ2V0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZpZGVvLWNvbnRyb2wtaGlkZScgfSApOyB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHZpZGVvIHBsYXkgYnV0dG9uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZWQgXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZGVvUGxheUJ1dHRvbjogZnVuY3Rpb24gKCBwYXVzZWQgKSB7XG5cbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCB3aWRnZXQgJiYgd2lkZ2V0LnZpZGVvRWxlbWVudCAmJiB3aWRnZXQudmlkZW9FbGVtZW50LmNvbnRyb2xCdXR0b24gKSB7XG5cbiAgICAgICAgICAgIHdpZGdldC52aWRlb0VsZW1lbnQuY29udHJvbEJ1dHRvbi51cGRhdGUoIHBhdXNlZCApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgZGVmYXVsdCBwYW5vcmFtYSBldmVudCBsaXN0ZW5lcnNcbiAgICAgKiBAcGFyYW0ge1Bhbm9yYW1hfSBwYW5vIC0gVGhlIHBhbm9yYW1hIHRvIGJlIGFkZGVkIHdpdGggZXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkUGFub3JhbWFFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoIHBhbm8gKSB7XG5cbiAgICAgICAgLy8gU2V0IGNhbWVyYSBjb250cm9sIG9uIGV2ZXJ5IHBhbm9yYW1hXG4gICAgICAgIHBhbm8uYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCB0aGlzLnNldENhbWVyYUNvbnRyb2wuYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgLy8gU2hvdyBhbmQgaGlkZSB3aWRnZXQgZXZlbnQgb25seSB3aGVuIGl0J3MgVmlkZW9QYW5vcmFtYVxuICAgICAgICBpZiAoIHBhbm8gaW5zdGFuY2VvZiBWaWRlb1Bhbm9yYW1hICkge1xuXG4gICAgICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgdGhpcy5zaG93VmlkZW9XaWRnZXQuYmluZCggdGhpcyApICk7XG4gICAgICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGlmICggISh0aGlzLnBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlVmlkZW9XaWRnZXQuY2FsbCggdGhpcyApO1xuXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApICk7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBjYW1lcmEgY29udHJvbFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXRDYW1lcmFDb250cm9sOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLnRhcmdldC5jb3B5KCB0aGlzLnBhbm9yYW1hLnBvc2l0aW9uICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgY2FtZXJhIGNvbnRyb2xcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gQ3VycmVudCBuYXZpZ2F0aW9uIGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge1RIUkVFLk9yYml0Q29udHJvbHN8VEhSRUUuRGV2aWNlT3JpZW50YXRpb25Db250cm9sc31cbiAgICAgKi9cbiAgICBnZXRDb250cm9sOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbDtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2NlbmVcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7VEhSRUUuU2NlbmV9IC0gQ3VycmVudCBzY2VuZSB3aGljaCB0aGUgdmlld2VyIGlzIGJ1aWx0IG9uXG4gICAgICovXG4gICAgZ2V0U2NlbmU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2FtZXJhXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1RIUkVFLkNhbWVyYX0gLSBUaGUgc2NlbmUgY2FtZXJhXG4gICAgICovXG4gICAgZ2V0Q2FtZXJhOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FtZXJhO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCByZW5kZXJlclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSAtIFRoZSByZW5kZXJlciB1c2luZyB3ZWJnbFxuICAgICAqL1xuICAgIGdldFJlbmRlcmVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXI7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbnRhaW5lclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgY29udGFpbmVyIGhvbGRzIHJlbmRlcmVyZCBjYW52YXNcbiAgICAgKi9cbiAgICBnZXRDb250YWluZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbnRyb2wgaWRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIENvbnRyb2wgaWQuICdvcmJpdCcgb3IgJ2RldmljZS1vcmllbnRhdGlvbidcbiAgICAgKi9cbiAgICBnZXRDb250cm9sSWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLmlkO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBuZXh0IG5hdmlnYXRpb24gY29udHJvbCBpZFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gTmV4dCBjb250cm9sIGlkXG4gICAgICovXG4gICAgZ2V0TmV4dENvbnRyb2xJZDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzWyB0aGlzLmdldE5leHRDb250cm9sSW5kZXgoKSBdLmlkO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBuZXh0IG5hdmlnYXRpb24gY29udHJvbCBpbmRleFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gTmV4dCBjb250cm9sIGluZGV4XG4gICAgICovXG4gICAgZ2V0TmV4dENvbnRyb2xJbmRleDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5jb250cm9scztcbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gY29udHJvbHMuaW5kZXhPZiggY29udHJvbCApICsgMTtcblxuICAgICAgICByZXR1cm4gKCBuZXh0SW5kZXggPj0gY29udHJvbHMubGVuZ3RoICkgPyAwIDogbmV4dEluZGV4O1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBmaWVsZCBvZiB2aWV3IG9mIGNhbWVyYVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmb3ZcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2V0Q2FtZXJhRm92OiBmdW5jdGlvbiAoIGZvdiApIHtcblxuICAgICAgICB0aGlzLmNhbWVyYS5mb3YgPSBmb3Y7XG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgY29udHJvbCBieSBpbmRleFxuICAgICAqIEBwYXJhbSAge0NPTlRST0xTfSBpbmRleCAtIEluZGV4IG9mIGNhbWVyYSBjb250cm9sXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGVuYWJsZUNvbnRyb2w6IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cbiAgICAgICAgaW5kZXggPSAoIGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmNvbnRyb2xzLmxlbmd0aCApID8gaW5kZXggOiAwO1xuXG4gICAgICAgIHRoaXMuY29udHJvbC5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5jb250cm9sc1sgaW5kZXggXTtcblxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgc3dpdGNoICggaW5kZXggKSB7XG5cbiAgICAgICAgY2FzZSBDT05UUk9MUy5PUkJJVDpcblxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSggdGhpcy5wYW5vcmFtYS5wb3NpdGlvbiApO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSAxO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIENPTlRST0xTLkRFVklDRU9SSUVOVEFUSU9OOlxuXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCB0aGlzLnBhbm9yYW1hLnBvc2l0aW9uICk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaWRnZXRJdGVtKCBpbmRleCwgdW5kZWZpbmVkICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBjdXJyZW50IGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzYWJsZUNvbnRyb2w6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBuZXh0IGNvbnRyb2xcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdG9nZ2xlTmV4dENvbnRyb2w6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmVuYWJsZUNvbnRyb2woIHRoaXMuZ2V0TmV4dENvbnRyb2xJbmRleCgpICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2NyZWVuIFNwYWNlIFByb2plY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0U2NyZWVuVmVjdG9yOiBmdW5jdGlvbiAoIHdvcmxkVmVjdG9yICkge1xuXG4gICAgICAgIGNvbnN0IHZlY3RvciA9IHdvcmxkVmVjdG9yLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IHdpZHRoSGFsZiA9ICggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggKSAvIDI7XG4gICAgICAgIGNvbnN0IGhlaWdodEhhbGYgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyO1xuXG4gICAgICAgIHZlY3Rvci5wcm9qZWN0KCB0aGlzLmNhbWVyYSApO1xuXG4gICAgICAgIHZlY3Rvci54ID0gKCB2ZWN0b3IueCAqIHdpZHRoSGFsZiApICsgd2lkdGhIYWxmO1xuICAgICAgICB2ZWN0b3IueSA9IC0gKCB2ZWN0b3IueSAqIGhlaWdodEhhbGYgKSArIGhlaWdodEhhbGY7XG4gICAgICAgIHZlY3Rvci56ID0gMDtcblxuICAgICAgICByZXR1cm4gdmVjdG9yO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIFNwcml0ZSBpbiBWaWV3cG9ydFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjaGVja1Nwcml0ZUluVmlld3BvcnQ6IGZ1bmN0aW9uICggc3ByaXRlICkge1xuXG4gICAgICAgIHRoaXMuY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZS5nZXRJbnZlcnNlKCB0aGlzLmNhbWVyYS5tYXRyaXhXb3JsZCApO1xuICAgICAgICB0aGlzLmNhbWVyYVZpZXdQcm9qZWN0aW9uTWF0cml4Lm11bHRpcGx5TWF0cmljZXMoIHRoaXMuY2FtZXJhLnByb2plY3Rpb25NYXRyaXgsIHRoaXMuY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZSApO1xuICAgICAgICB0aGlzLmNhbWVyYUZydXN0dW0uc2V0RnJvbU1hdHJpeCggdGhpcy5jYW1lcmFWaWV3UHJvamVjdGlvbk1hdHJpeCApO1xuXG4gICAgICAgIHJldHVybiBzcHJpdGUudmlzaWJsZSAmJiB0aGlzLmNhbWVyYUZydXN0dW0uaW50ZXJzZWN0c1Nwcml0ZSggc3ByaXRlICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV2ZXJzZSBkcmFnZ2luZyBkaXJlY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmV2ZXJzZURyYWdnaW5nRGlyZWN0aW9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLnJvdGF0ZVNwZWVkICo9IC0xO1xuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMubW9tZW50dW1TY2FsaW5nRmFjdG9yICo9IC0xO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCByZXRpY2xlIFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRSZXRpY2xlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5yZXRpY2xlID0gbmV3IFJldGljbGUoIDB4ZmZmZmZmLCB0cnVlLCB0aGlzLm9wdGlvbnMuZHdlbGxUaW1lICk7XG4gICAgICAgIHRoaXMucmV0aWNsZS5oaWRlKCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLmFkZCggdGhpcy5yZXRpY2xlICk7XG4gICAgICAgIHRoaXMuc2NlbmVSZXRpY2xlLmFkZCggdGhpcy5jYW1lcmEgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUd2VlbiBjb250cm9sIGxvb2tpbmcgY2VudGVyXG4gICAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3IzfSB2ZWN0b3IgLSBWZWN0b3IgdG8gYmUgbG9va2VkIGF0IHRoZSBjZW50ZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTEwMDBdIC0gRHVyYXRpb24gdG8gdHdlZW5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZWFzaW5nPVRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXRdIC0gRWFzaW5nIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHR3ZWVuQ29udHJvbENlbnRlcjogZnVuY3Rpb24gKCB2ZWN0b3IsIGR1cmF0aW9uLCBlYXNpbmcgKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLmNvbnRyb2wgIT09IHRoaXMuT3JiaXRDb250cm9scyApIHtcblxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXNzIGluIGFyZ3VtZW50cyBhcyBhcnJheVxuICAgICAgICBpZiAoIHZlY3RvciBpbnN0YW5jZW9mIEFycmF5ICkge1xuXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHZlY3RvclsgMSBdO1xuICAgICAgICAgICAgZWFzaW5nID0gdmVjdG9yWyAyIF07XG4gICAgICAgICAgICB2ZWN0b3IgPSB2ZWN0b3JbIDAgXTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiAhPT0gdW5kZWZpbmVkID8gZHVyYXRpb24gOiAxMDAwO1xuICAgICAgICBlYXNpbmcgPSBlYXNpbmcgfHwgVFdFRU4uRWFzaW5nLkV4cG9uZW50aWFsLk91dDtcblxuICAgICAgICBsZXQgc2NvcGUsIGhhLCB2YSwgY2h2LCBjdnYsIGh2LCB2diwgdnB0Yywgb3YsIG52O1xuXG4gICAgICAgIHNjb3BlID0gdGhpcztcblxuICAgICAgICBjaHYgPSB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApO1xuICAgICAgICBjdnYgPSBjaHYuY2xvbmUoKTtcblxuICAgICAgICB2cHRjID0gdGhpcy5wYW5vcmFtYS5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkuc3ViKCB0aGlzLmNhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkgKTtcblxuICAgICAgICBodiA9IHZlY3Rvci5jbG9uZSgpO1xuICAgICAgICAvLyBTY2FsZSBlZmZlY3RcbiAgICAgICAgaHYueCAqPSAtMTtcbiAgICAgICAgaHYuYWRkKCB2cHRjICkubm9ybWFsaXplKCk7XG4gICAgICAgIHZ2ID0gaHYuY2xvbmUoKTtcblxuICAgICAgICBjaHYueSA9IDA7XG4gICAgICAgIGh2LnkgPSAwO1xuXG4gICAgICAgIGhhID0gTWF0aC5hdGFuMiggaHYueiwgaHYueCApIC0gTWF0aC5hdGFuMiggY2h2LnosIGNodi54ICk7XG4gICAgICAgIGhhID0gaGEgPiBNYXRoLlBJID8gaGEgLSAyICogTWF0aC5QSSA6IGhhO1xuICAgICAgICBoYSA9IGhhIDwgLU1hdGguUEkgPyBoYSArIDIgKiBNYXRoLlBJIDogaGE7XG4gICAgICAgIHZhID0gTWF0aC5hYnMoIGN2di5hbmdsZVRvKCBjaHYgKSArICggY3Z2LnkgKiB2di55IDw9IDAgPyB2di5hbmdsZVRvKCBodiApIDogLXZ2LmFuZ2xlVG8oIGh2ICkgKSApO1xuICAgICAgICB2YSAqPSB2di55IDwgY3Z2LnkgPyAxIDogLTE7XG5cbiAgICAgICAgb3YgPSB7IGxlZnQ6IDAsIHVwOiAwIH07XG4gICAgICAgIG52ID0geyBsZWZ0OiAwLCB1cDogMCB9O1xuXG4gICAgICAgIHRoaXMudHdlZW5MZWZ0QW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy50d2VlblVwQW5pbWF0aW9uLnN0b3AoKTtcblxuICAgICAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2Vlbiggb3YgKVxuICAgICAgICAgICAgLnRvKCB7IGxlZnQ6IGhhIH0sIGR1cmF0aW9uIClcbiAgICAgICAgICAgIC5lYXNpbmcoIGVhc2luZyApXG4gICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24ob3Ype1xuICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRyb2wucm90YXRlTGVmdCggb3YubGVmdCAtIG52LmxlZnQgKTtcbiAgICAgICAgICAgICAgICBudi5sZWZ0ID0gb3YubGVmdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICB0aGlzLnR3ZWVuVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIG92IClcbiAgICAgICAgICAgIC50byggeyB1cDogdmEgfSwgZHVyYXRpb24gKVxuICAgICAgICAgICAgLmVhc2luZyggZWFzaW5nIClcbiAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbihvdil7XG4gICAgICAgICAgICAgICAgc2NvcGUuY29udHJvbC5yb3RhdGVVcCggb3YudXAgLSBudi51cCApO1xuICAgICAgICAgICAgICAgIG52LnVwID0gb3YudXA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVHdlZW4gY29udHJvbCBsb29raW5nIGNlbnRlciBieSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge1RIUkVFLk9iamVjdDNEfSBvYmplY3QgLSBPYmplY3QgdG8gYmUgbG9va2VkIGF0IHRoZSBjZW50ZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTEwMDBdIC0gRHVyYXRpb24gdG8gdHdlZW5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZWFzaW5nPVRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXRdIC0gRWFzaW5nIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHR3ZWVuQ29udHJvbENlbnRlckJ5T2JqZWN0OiBmdW5jdGlvbiAoIG9iamVjdCwgZHVyYXRpb24sIGVhc2luZyApIHtcblxuICAgICAgICBsZXQgaXNVbmRlclNjYWxlUGxhY2VIb2xkZXIgPSBmYWxzZTtcblxuICAgICAgICBvYmplY3QudHJhdmVyc2VBbmNlc3RvcnMoIGZ1bmN0aW9uICggYW5jZXN0b3IgKSB7XG5cbiAgICAgICAgICAgIGlmICggYW5jZXN0b3Iuc2NhbGVQbGFjZUhvbGRlciApIHtcblxuICAgICAgICAgICAgICAgIGlzVW5kZXJTY2FsZVBsYWNlSG9sZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9ICk7XG5cbiAgICAgICAgaWYgKCBpc1VuZGVyU2NhbGVQbGFjZUhvbGRlciApIHtcblxuICAgICAgICAgICAgY29uc3QgaW52ZXJ0WFZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCAtMSwgMSwgMSApO1xuXG4gICAgICAgICAgICB0aGlzLnR3ZWVuQ29udHJvbENlbnRlciggb2JqZWN0LmdldFdvcmxkUG9zaXRpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKS5tdWx0aXBseSggaW52ZXJ0WFZlY3RvciApLCBkdXJhdGlvbiwgZWFzaW5nICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy50d2VlbkNvbnRyb2xDZW50ZXIoIG9iamVjdC5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICksIGR1cmF0aW9uLCBlYXNpbmcgKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBjYWxsZWQgd2hlbiB3aW5kb3cgc2l6ZSBpcyBjaGFuZ2VkXG4gICAgICogQGZpcmVzIFZpZXdlciN3aW5kb3ctcmVzaXplXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt3aW5kb3dXaWR0aF0gLSBTcGVjaWZ5IGlmIGN1c3RvbSBlbGVtZW50IGhhcyBjaGFuZ2VkIHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt3aW5kb3dIZWlnaHRdIC0gU3BlY2lmeSBpZiBjdXN0b20gZWxlbWVudCBoYXMgY2hhbmdlZCBoZWlnaHRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25XaW5kb3dSZXNpemU6IGZ1bmN0aW9uICggd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCApIHtcblxuICAgICAgICBsZXQgd2lkdGgsIGhlaWdodDtcblxuICAgICAgICBjb25zdCBleHBhbmQgPSB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoICdwYW5vbGVucy1jb250YWluZXInICkgfHwgdGhpcy5jb250YWluZXIuaXNGdWxsc2NyZWVuO1xuXG4gICAgICAgIGlmICggd2luZG93V2lkdGggIT09IHVuZGVmaW5lZCAmJiB3aW5kb3dIZWlnaHQgIT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgd2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl93aWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuX2hlaWdodCA9IHdpbmRvd0hlaWdodDtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zdCBpc0FuZHJvaWQgPSAvKGFuZHJvaWQpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFkanVzdFdpZHRoID0gaXNBbmRyb2lkIFxuICAgICAgICAgICAgICAgID8gTWF0aC5taW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSBcbiAgICAgICAgICAgICAgICA6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFkanVzdEhlaWdodCA9IGlzQW5kcm9pZCBcbiAgICAgICAgICAgICAgICA/IE1hdGgubWluKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSBcbiAgICAgICAgICAgICAgICA6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICAgICAgICAgICAgd2lkdGggPSBleHBhbmQgPyBhZGp1c3RXaWR0aCA6IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0ID0gZXhwYW5kID8gYWRqdXN0SGVpZ2h0IDogdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl9oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHJldGljbGVcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSB8fCB0aGlzLnRlbXBFbmFibGVSZXRpY2xlICkge1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJldGljbGVFdmVudCgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV2luZG93IHJlc2l6aW5nIGV2ZW50XG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjd2luZG93LXJlc2l6ZVxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggIC0gV2lkdGggb2YgdGhlIHdpbmRvd1xuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0IC0gSGVpZ2h0IG9mIHRoZSB3aW5kb3dcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnd2luZG93LXJlc2l6ZScsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUudHJhdmVyc2UoIGZ1bmN0aW9uICggb2JqZWN0ICkge1xuXG4gICAgICAgICAgICBpZiAoIG9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3dpbmRvdy1yZXNpemUnLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCBvdXRwdXQgZWxlbWVudFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRPdXRwdXRFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gJzEwcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcxMHB4JztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcbiAgICAgICAgdGhpcy5vdXRwdXREaXZFbGVtZW50ID0gZWxlbWVudDtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgcG9zaXRpb24gaW4gZGV2ZWxvcGVyIGNvbnNvbGUgYnkgaG9sZGluZyBkb3duIEN0cmwgYnV0dG9uXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG91dHB1dFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgaW50ZXJzZWN0cyA9IHRoaXMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdCggdGhpcy5wYW5vcmFtYSwgdHJ1ZSApO1xuXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xuXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IGludGVyc2VjdHNbIDAgXS5wb2ludC5jbG9uZSgpO1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gbmV3IFRIUkVFLlZlY3RvcjMoIC0xLCAxLCAxICk7XG4gICAgICAgICAgICBjb25zdCB3b3JsZCA9IHRoaXMucGFub3JhbWEuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApO1xuICAgICAgICAgICAgcG9pbnQuc3ViKCB3b3JsZCApLm11bHRpcGx5KCBjb252ZXJ0ZXIgKTtcblxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeDogcG9pbnQueC50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgICAgIHk6IHBvaW50LnkudG9GaXhlZCgyKSxcbiAgICAgICAgICAgICAgICB6OiBwb2ludC56LnRvRml4ZWQoMiksXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYCR7cG9zaXRpb24ueH0sICR7cG9zaXRpb24ueX0sICR7cG9zaXRpb24uen1gO1xuXG4gICAgICAgICAgICBpZiAoIHBvaW50Lmxlbmd0aCgpID09PSAwICkgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgc3dpdGNoICggdGhpcy5vcHRpb25zLm91dHB1dCApIHtcblxuICAgICAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIERpc3BhdGNoIHJheWNhc3QgcG9zaXRpb24gYXMgZXZlbnRcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgICAgICAgICAqIEBldmVudCBWaWV3ZXIjcG9zaXRpb24tb3V0cHV0XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwb3NpdGlvbi1vdXRwdXQnLCBwb3NpdGlvbjogcG9zaXRpb24gfSApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjb25zb2xlJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oIG1lc3NhZ2UgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnb3ZlcmxheSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXREaXZFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPbiBtb3VzZSBkb3duXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCBcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnVzZXJNb3VzZS54ID0gKCBldmVudC5jbGllbnRYID49IDAgKSA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHRoaXMudXNlck1vdXNlLnkgPSAoIGV2ZW50LmNsaWVudFkgPj0gMCApID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdtb3VzZWRvd24nO1xuICAgICAgICB0aGlzLm9uVGFwKCBldmVudCApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIG1vdXNlIG1vdmVcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24gKCBldmVudCApIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVzZXJNb3VzZS50eXBlID0gJ21vdXNlbW92ZSc7XG4gICAgICAgIHRoaXMub25UYXAoIGV2ZW50ICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT24gbW91c2UgdXBcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbk1vdXNlVXA6IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgbGV0IG9uVGFyZ2V0ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdtb3VzZXVwJztcblxuICAgICAgICBjb25zdCB0eXBlID0gKCB0aGlzLnVzZXJNb3VzZS54ID49IGV2ZW50LmNsaWVudFggLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgXG5cdFx0XHRcdCYmIHRoaXMudXNlck1vdXNlLnggPD0gZXZlbnQuY2xpZW50WCArIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZVxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS55ID49IGV2ZW50LmNsaWVudFkgLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2Vcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueSA8PSBldmVudC5jbGllbnRZICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlICkgXG5cdFx0XHRcdHx8ICAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzIFxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS54ID49IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2Vcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueCA8PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlIFxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS55ID49IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2Vcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueSA8PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlICkgXG4gICAgICAgICAgICA/ICdjbGljaycgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gRXZlbnQgc2hvdWxkIGhhcHBlbiBvbiBjYW52YXNcbiAgICAgICAgaWYgKCBldmVudCAmJiBldmVudC50YXJnZXQgJiYgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdwYW5vbGVucy1jYW52YXMnICkgKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPT09IDEgKSB7XG5cbiAgICAgICAgICAgIG9uVGFyZ2V0ID0gdGhpcy5vblRhcCggeyBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIH0sIHR5cGUgKTtcblx0XHRcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgb25UYXJnZXQgPSB0aGlzLm9uVGFwKCBldmVudCwgdHlwZSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVzZXJNb3VzZS50eXBlID0gJ25vbmUnO1xuXG4gICAgICAgIGlmICggb25UYXJnZXQgKSB7IFxuXG4gICAgICAgICAgICByZXR1cm47IFxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdjbGljaycgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgb3B0aW9uczogeyBhdXRvSGlkZUluZm9zcG90LCBhdXRvSGlkZUNvbnRyb2xCYXIgfSwgcGFub3JhbWEsIHRvZ2dsZUNvbnRyb2xCYXIgfSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICggYXV0b0hpZGVJbmZvc3BvdCAmJiBwYW5vcmFtYSApIHtcblxuICAgICAgICAgICAgICAgIHBhbm9yYW1hLnRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggYXV0b0hpZGVDb250cm9sQmFyICkge1xuXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ29udHJvbEJhcigpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9uIHRhcCBldmVueSBmcmFtZVxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uVGFwOiBmdW5jdGlvbiAoIGV2ZW50LCB0eXBlICkge1xuXG4gICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0IH0gPSB0aGlzLmNvbnRhaW5lcjtcblxuICAgICAgICB0aGlzLnJheWNhc3RlclBvaW50LnggPSAoICggZXZlbnQuY2xpZW50WCAtIGxlZnQgKSAvIGNsaWVudFdpZHRoICkgKiAyIC0gMTtcbiAgICAgICAgdGhpcy5yYXljYXN0ZXJQb2ludC55ID0gLSAoICggZXZlbnQuY2xpZW50WSAtIHRvcCApIC8gY2xpZW50SGVpZ2h0ICkgKiAyICsgMTtcblxuICAgICAgICB0aGlzLnJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCB0aGlzLnJheWNhc3RlclBvaW50LCB0aGlzLmNhbWVyYSApO1xuXG4gICAgICAgIC8vIFJldHVybiBpZiBubyBwYW5vcmFtYSBcbiAgICAgICAgaWYgKCAhdGhpcy5wYW5vcmFtYSApIHsgXG5cbiAgICAgICAgICAgIHJldHVybjsgXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG91dHB1dCBpbmZvc3BvdCBpbmZvcm1hdGlvblxuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgIT09ICdtb3VzZWRvd24nICYmIHRoaXMudG91Y2hTdXBwb3J0ZWQgfHwgdGhpcy5PVVRQVVRfSU5GT1NQT1QgKSB7IFxuXG4gICAgICAgICAgICB0aGlzLm91dHB1dFBvc2l0aW9uKCk7IFxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGludGVyc2VjdHMgPSB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCB0aGlzLnBhbm9yYW1hLmNoaWxkcmVuLCB0cnVlICk7XG4gICAgICAgIGNvbnN0IGludGVyc2VjdF9lbnRpdHkgPSB0aGlzLmdldENvbnZlcnRlZEludGVyc2VjdCggaW50ZXJzZWN0cyApO1xuICAgICAgICBjb25zdCBpbnRlcnNlY3QgPSAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApID8gaW50ZXJzZWN0c1swXS5vYmplY3QgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2V1cCcgICkge1xuXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdF9lbnRpdHkgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9PT0gaW50ZXJzZWN0X2VudGl0eSAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RvcC1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2V1cCcgICkge1xuXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdCAmJiB0aGlzLnByZXNzT2JqZWN0ID09PSBpbnRlcnNlY3QgJiYgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0b3AnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnY2xpY2snICkge1xuXG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NsaWNrJywgaW50ZXJzZWN0czogaW50ZXJzZWN0cywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdF9lbnRpdHkgJiYgaW50ZXJzZWN0X2VudGl0eS5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0X2VudGl0eS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjbGljay1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3QgJiYgaW50ZXJzZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICBpbnRlcnNlY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY2xpY2snLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyJywgaW50ZXJzZWN0czogaW50ZXJzZWN0cywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICBpZiAoICggdGhpcy5ob3Zlck9iamVjdCAmJiBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgJiYgdGhpcy5ob3Zlck9iamVjdCAhPT0gaW50ZXJzZWN0X2VudGl0eSApXG5cdFx0XHRcdHx8ICggdGhpcy5ob3Zlck9iamVjdCAmJiBpbnRlcnNlY3RzLmxlbmd0aCA9PT0gMCApICl7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaG92ZXJPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVybGVhdmUnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRpY2xlLmVuZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5ob3Zlck9iamVjdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdF9lbnRpdHkgJiYgaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmhvdmVyT2JqZWN0ICE9PSBpbnRlcnNlY3RfZW50aXR5ICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QgPSBpbnRlcnNlY3RfZW50aXR5O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyZW50ZXInLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHJldGljbGUgdGltZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLmF1dG9SZXRpY2xlU2VsZWN0ICYmIHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlIHx8IHRoaXMudGVtcEVuYWJsZVJldGljbGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRpY2xlLnN0YXJ0KCB0aGlzLm9uVGFwLmJpbmQoIHRoaXMsIGV2ZW50LCAnY2xpY2snICkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgIT0gaW50ZXJzZWN0X2VudGl0eSApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID0gaW50ZXJzZWN0X2VudGl0eTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0YXJ0LWVudGl0eScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIHRoaXMucHJlc3NPYmplY3QgIT0gaW50ZXJzZWN0ICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QgPSBpbnRlcnNlY3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdGFydCcsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZW1vdmUnIHx8IHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggaW50ZXJzZWN0ICYmIGludGVyc2VjdC5kaXNwYXRjaEV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnaG92ZXInLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5wcmVzc0VudGl0eU9iamVjdCAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3Ntb3ZlLWVudGl0eScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByZXNzT2JqZWN0ICYmIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc21vdmUnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggIWludGVyc2VjdF9lbnRpdHkgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdCAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RvcC1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggIWludGVyc2VjdCAmJiB0aGlzLnByZXNzT2JqZWN0ICYmIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdG9wJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbmZvc3BvdCBoYW5kbGVyXG4gICAgICAgIGlmICggaW50ZXJzZWN0ICYmIGludGVyc2VjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xuXG4gICAgICAgICAgICB0aGlzLmluZm9zcG90ID0gaW50ZXJzZWN0O1xuXHRcdFx0XG4gICAgICAgICAgICBpZiAoIHR5cGUgPT09ICdjbGljaycgKSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgfVxuXHRcdFx0XG5cbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5pbmZvc3BvdCApIHtcblxuICAgICAgICAgICAgdGhpcy5oaWRlSW5mb3Nwb3QoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXV0byByb3RhdGVcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZSAmJiB0aGlzLnVzZXJNb3VzZS50eXBlICE9PSAnbW91c2Vtb3ZlJyApIHtcblxuICAgICAgICAgICAgLy8gQXV0by1yb3RhdGUgaWRsZSB0aW1lclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLmF1dG9Sb3RhdGVSZXF1ZXN0SWQgKTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmNvbnRyb2wgPT09IHRoaXMuT3JiaXRDb250cm9scyApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvUm90YXRlUmVxdWVzdElkID0gd2luZG93LnNldFRpbWVvdXQoIHRoaXMuZW5hYmxlQXV0b1JhdGUuYmluZCggdGhpcyApLCB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZUFjdGl2YXRpb25EdXJhdGlvbiApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVx0XHRcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29udmVydGVkIGludGVyc2VjdFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGludGVyc2VjdHMgXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGdldENvbnZlcnRlZEludGVyc2VjdDogZnVuY3Rpb24gKCBpbnRlcnNlY3RzICkge1xuXG4gICAgICAgIGxldCBpbnRlcnNlY3Q7XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0cy5sZW5ndGg7IGkrKyApIHtcblxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RzW2ldLmRpc3RhbmNlID49IDAgJiYgaW50ZXJzZWN0c1tpXS5vYmplY3QgJiYgIWludGVyc2VjdHNbaV0ub2JqZWN0LnBhc3NUaHJvdWdoICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHkgJiYgaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5LnBhc3NUaHJvdWdoICkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHkgJiYgIWludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eS5wYXNzVGhyb3VnaCApIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0ID0gaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3QgPSBpbnRlcnNlY3RzW2ldLm9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Q7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGlkZSBpbmZvc3BvdFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBoaWRlSW5mb3Nwb3Q6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoIHRoaXMuaW5mb3Nwb3QgKSB7XG5cbiAgICAgICAgICAgIHRoaXMuaW5mb3Nwb3Qub25Ib3ZlckVuZCgpO1xuXG4gICAgICAgICAgICB0aGlzLmluZm9zcG90ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgY29udHJvbCBiYXJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFZpZXdlciNjb250cm9sLWJhci10b2dnbGVcbiAgICAgKi9cbiAgICB0b2dnbGVDb250cm9sQmFyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvZ2dsZSBjb250cm9sIGJhciBldmVudFxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI2NvbnRyb2wtYmFyLXRvZ2dsZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCB3aWRnZXQgKSB7XG5cbiAgICAgICAgICAgIHdpZGdldC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjb250cm9sLWJhci10b2dnbGUnIH0gKTtcblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT24ga2V5IGRvd25cbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbktleURvd246IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMub3V0cHV0ICYmIHRoaXMub3B0aW9ucy5vdXRwdXQgIT09ICdub25lJyAmJiBldmVudC5rZXkgPT09ICdDb250cm9sJyApIHtcblxuICAgICAgICAgICAgdGhpcy5PVVRQVVRfSU5GT1NQT1QgPSB0cnVlO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPbiBrZXkgdXBcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IFxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvbktleVVwOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5PVVRQVVRfSU5GT1NQT1QgPSBmYWxzZTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgY29udHJvbCBhbmQgY2FsbGJhY2tzXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIFRXRUVOLnVwZGF0ZSgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsbGJhY2tzLmZvckVhY2goIGZ1bmN0aW9uKCBjYWxsYmFjayApeyBjYWxsYmFjaygpOyB9ICk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuc2NlbmUudHJhdmVyc2UoIGZ1bmN0aW9uKCBjaGlsZCApe1xuICAgICAgICAgICAgaWYgKCBjaGlsZCBpbnN0YW5jZW9mIEluZm9zcG90IFxuXHRcdFx0XHQmJiBjaGlsZC5lbGVtZW50IFxuXHRcdFx0XHQmJiAoIHRoaXMuaG92ZXJPYmplY3QgPT09IGNoaWxkIFxuXHRcdFx0XHRcdHx8IGNoaWxkLmVsZW1lbnQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnIFxuXHRcdFx0XHRcdHx8IChjaGlsZC5lbGVtZW50LmxlZnQgJiYgY2hpbGQuZWxlbWVudC5sZWZ0LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJylcblx0XHRcdFx0XHR8fCAoY2hpbGQuZWxlbWVudC5yaWdodCAmJiBjaGlsZC5lbGVtZW50LnJpZ2h0LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykgKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuY2hlY2tTcHJpdGVJblZpZXdwb3J0KCBjaGlsZCApICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuZ2V0U2NyZWVuVmVjdG9yKCBjaGlsZC5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkgKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudHJhbnNsYXRlRWxlbWVudCggeCwgeSApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm9uRGlzbWlzcygpO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCggdGhpcyApICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyaW5nIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBldmVyeSBhbmltYXRpb24gZnJhbWVcbiAgICAgKiBSZW5kZXIgcmV0aWNsZSBsYXN0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICggdGhpcy5tb2RlID09PSBNT0RFUy5DQVJEQk9BUkQgfHwgdGhpcy5tb2RlID09PSBNT0RFUy5TVEVSRU8gKSB7XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0LnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0LnJlbmRlciggdGhpcy5zY2VuZVJldGljbGUsIHRoaXMuY2FtZXJhICk7XG5cdFx0XHRcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXJEZXB0aCgpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmVSZXRpY2xlLCB0aGlzLmNhbWVyYSApO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRlXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFuaW1hdGU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMuYW5pbWF0ZS5iaW5kKCB0aGlzICkgKTtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT24gY2hhbmdlXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBtb3VzZSBhbmQgdG91Y2ggZXZlbnQgb24gY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50czogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHBhc3NpdmU6IGZhbHNlIH07XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicgLCBcdHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBvcHRpb25zICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnICwgXHR0aGlzLkhBTkRMRVJfTU9VU0VfTU9WRSwgb3B0aW9ucyApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCdcdCAsIFx0dGhpcy5IQU5ETEVSX01PVVNFX1VQICAsIG9wdGlvbnMgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBcdHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBvcHRpb25zICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcgICwgXHR0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgb3B0aW9ucyApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXIgbW91c2UgYW5kIHRvdWNoIGV2ZW50IG9uIGNvbnRhaW5lclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50czogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nICwgIHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJyAsICB0aGlzLkhBTkRMRVJfTU9VU0VfTU9WRSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnXHQsICB0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCAgdGhpcy5IQU5ETEVSX01PVVNFX0RPV04sIGZhbHNlICk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcgICwgIHRoaXMuSEFORExFUl9NT1VTRV9VUCAgLCBmYWxzZSApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIHJldGljbGUgZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVnaXN0ZXJSZXRpY2xlRXZlbnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLmFkZFVwZGF0ZUNhbGxiYWNrKCB0aGlzLkhBTkRMRVJfVEFQICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlciByZXRpY2xlIGV2ZW50XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVucmVnaXN0ZXJSZXRpY2xlRXZlbnQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0aGlzLnJlbW92ZVVwZGF0ZUNhbGxiYWNrKCB0aGlzLkhBTkRMRVJfVEFQICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHJldGljbGUgZXZlbnRcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlUmV0aWNsZUV2ZW50OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgY2xpZW50WCA9IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMiArIHRoaXMuY29udGFpbmVyLm9mZnNldExlZnQ7XG4gICAgICAgIGNvbnN0IGNsaWVudFkgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlVXBkYXRlQ2FsbGJhY2soIHRoaXMuSEFORExFUl9UQVAgKTtcbiAgICAgICAgdGhpcy5IQU5ETEVSX1RBUCA9IHRoaXMub25UYXAuYmluZCggdGhpcywgeyBjbGllbnRYLCBjbGllbnRZIH0gKTtcbiAgICAgICAgdGhpcy5hZGRVcGRhdGVDYWxsYmFjayggdGhpcy5IQU5ETEVSX1RBUCApO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGNvbnRhaW5lciBhbmQgd2luZG93IGxpc3RlbmVyc1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZWdpc3RlckV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gUmVzaXplIEV2ZW50XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJyAsIHRoaXMuSEFORExFUl9XSU5ET1dfUkVTSVpFLCB0cnVlICk7XG5cbiAgICAgICAgLy8gS2V5Ym9hcmQgRXZlbnRcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5IQU5ETEVSX0tFWV9ET1dOLCB0cnVlICk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5dXAnICAsIHRoaXMuSEFORExFUl9LRVlfVVBcdCAsIHRydWUgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVyIGNvbnRhaW5lciBhbmQgd2luZG93IGxpc3RlbmVyc1xuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBSZXNpemUgRXZlbnRcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdyZXNpemUnICwgdGhpcy5IQU5ETEVSX1dJTkRPV19SRVNJWkUsIHRydWUgKTtcblxuICAgICAgICAvLyBLZXlib2FyZCBFdmVudFxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLkhBTkRMRVJfS0VZX0RPV04sIHRydWUgKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXl1cCcgICwgdGhpcy5IQU5ETEVSX0tFWV9VUCAgLCB0cnVlICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZSBhbGwgc2NlbmUgb2JqZWN0cyBhbmQgY2xlYXIgY2FjaGVcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRoaXMudHdlZW5MZWZ0QW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy50d2VlblVwQW5pbWF0aW9uLnN0b3AoKTtcblxuICAgICAgICAvLyBVbnJlZ2lzdGVyIGRvbSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICAvLyByZWN1cnNpdmUgZGlzcG9zYWwgb24gM2Qgb2JqZWN0c1xuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVEaXNwb3NlICggb2JqZWN0ICkge1xuXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IG9iamVjdC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcblxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UoIG9iamVjdC5jaGlsZHJlbltpXSApO1xuICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUoIG9iamVjdC5jaGlsZHJlbltpXSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgUGFub3JhbWEgfHwgb2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QgKSB7XG5cbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IG51bGw7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIG9iamVjdC5kaXNwYXRjaEV2ZW50ICl7XG5cbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggJ2Rpc3Bvc2UnICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdXJzaXZlRGlzcG9zZSggdGhpcy5zY2VuZSApO1xuXG4gICAgICAgIC8vIGRpc3Bvc2Ugd2lkZ2V0XG4gICAgICAgIGlmICggdGhpcy53aWRnZXQgKSB7XG5cbiAgICAgICAgICAgIHRoaXMud2lkZ2V0LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0ID0gbnVsbDtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xlYXIgY2FjaGVcbiAgICAgICAgaWYgKCBUSFJFRS5DYWNoZSAmJiBUSFJFRS5DYWNoZS5lbmFibGVkICkge1xuXG4gICAgICAgICAgICBUSFJFRS5DYWNoZS5jbGVhcigpO1xuXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHZpZXdlciBieSBkaXNwb3NpbmcgYW5kIHN0b3BwaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5yZXF1ZXN0QW5pbWF0aW9uSWQgKTtcdFx0XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT24gcGFub3JhbWEgZGlzcG9zZVxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBvblBhbm9yYW1hRGlzcG9zZTogZnVuY3Rpb24gKCBwYW5vcmFtYSApIHtcblxuICAgICAgICBpZiAoIHBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSApIHtcblxuICAgICAgICAgICAgdGhpcy5oaWRlVmlkZW9XaWRnZXQoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBwYW5vcmFtYSA9PT0gdGhpcy5wYW5vcmFtYSApIHtcblxuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYSA9IG51bGw7XG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvYWQgYWpheCBjYWxsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCB0byBiZSByZXF1ZXN0ZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQ2FsbGJhY2sgYWZ0ZXIgcmVxdWVzdCBjb21wbGV0ZXNcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgbG9hZEFzeW5jUmVxdWVzdDogZnVuY3Rpb24gKCB1cmwsIGNhbGxiYWNrID0gKCkgPT4ge30gKSB7XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICAgICAgY2FsbGJhY2soIGV2ZW50ICk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub3BlbiggJ0dFVCcsIHVybCwgdHJ1ZSApO1xuICAgICAgICByZXF1ZXN0LnNlbmQoIG51bGwgKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWaWV3IGluZGljYXRvciBpbiB1cHBlciBsZWZ0XG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZFZpZXdJbmRpY2F0b3I6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZFZpZXdJbmRpY2F0b3IgKCBhc3luY0V2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIGFzeW5jRXZlbnQubG9hZGVkID09PSAwICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCB2aWV3SW5kaWNhdG9yRGl2ID0gYXN5bmNFdmVudC50YXJnZXQucmVzcG9uc2VYTUwuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS53aWR0aCA9IHNjb3BlLnZpZXdJbmRpY2F0b3JTaXplICsgJ3B4JztcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUuaGVpZ2h0ID0gc2NvcGUudmlld0luZGljYXRvclNpemUgKyAncHgnO1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLnRvcCA9ICcxMHB4JztcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUubGVmdCA9ICcxMHB4JztcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LmlkID0gJ3Bhbm9sZW5zLXZpZXctaW5kaWNhdG9yLWNvbnRhaW5lcic7XG5cbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggdmlld0luZGljYXRvckRpdiApO1xuXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSB2aWV3SW5kaWNhdG9yRGl2LnF1ZXJ5U2VsZWN0b3IoICcjaW5kaWNhdG9yJyApO1xuICAgICAgICAgICAgY29uc3Qgc2V0SW5kaWNhdG9yRCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLnJhZGl1cyA9IHNjb3BlLnZpZXdJbmRpY2F0b3JTaXplICogMC4yMjU7XG4gICAgICAgICAgICAgICAgc2NvcGUuY3VycmVudFBhbm9BbmdsZSA9IHNjb3BlLmNhbWVyYS5yb3RhdGlvbi55IC0gVEhSRUUuTWF0aC5kZWdUb1JhZCggOTAgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5mb3ZBbmdsZSA9IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLmNhbWVyYS5mb3YgKSA7XG4gICAgICAgICAgICAgICAgc2NvcGUubGVmdEFuZ2xlID0gLXNjb3BlLmN1cnJlbnRQYW5vQW5nbGUgLSBzY29wZS5mb3ZBbmdsZSAvIDI7XG4gICAgICAgICAgICAgICAgc2NvcGUucmlnaHRBbmdsZSA9IC1zY29wZS5jdXJyZW50UGFub0FuZ2xlICsgc2NvcGUuZm92QW5nbGUgLyAyO1xuICAgICAgICAgICAgICAgIHNjb3BlLmxlZnRYID0gc2NvcGUucmFkaXVzICogTWF0aC5jb3MoIHNjb3BlLmxlZnRBbmdsZSApO1xuICAgICAgICAgICAgICAgIHNjb3BlLmxlZnRZID0gc2NvcGUucmFkaXVzICogTWF0aC5zaW4oIHNjb3BlLmxlZnRBbmdsZSApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0WCA9IHNjb3BlLnJhZGl1cyAqIE1hdGguY29zKCBzY29wZS5yaWdodEFuZ2xlICk7XG4gICAgICAgICAgICAgICAgc2NvcGUucmlnaHRZID0gc2NvcGUucmFkaXVzICogTWF0aC5zaW4oIHNjb3BlLnJpZ2h0QW5nbGUgKTtcbiAgICAgICAgICAgICAgICBzY29wZS5pbmRpY2F0b3JEID0gJ00gJyArIHNjb3BlLmxlZnRYICsgJyAnICsgc2NvcGUubGVmdFkgKyAnIEEgJyArIHNjb3BlLnJhZGl1cyArICcgJyArIHNjb3BlLnJhZGl1cyArICcgMCAwIDEgJyArIHNjb3BlLnJpZ2h0WCArICcgJyArIHNjb3BlLnJpZ2h0WTtcblxuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubGVmdFggJiYgc2NvcGUubGVmdFkgJiYgc2NvcGUucmlnaHRYICYmIHNjb3BlLnJpZ2h0WSAmJiBzY29wZS5yYWRpdXMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLnNldEF0dHJpYnV0ZSggJ2QnLCBzY29wZS5pbmRpY2F0b3JEICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNjb3BlLmFkZFVwZGF0ZUNhbGxiYWNrKCBzZXRJbmRpY2F0b3JEICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvck9uTW91c2VFbnRlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yT25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZW50ZXInLCBpbmRpY2F0b3JPbk1vdXNlRW50ZXIgKTtcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCBpbmRpY2F0b3JPbk1vdXNlTGVhdmUgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZEFzeW5jUmVxdWVzdCggRGF0YUltYWdlLlZpZXdJbmRpY2F0b3IsIGxvYWRWaWV3SW5kaWNhdG9yICk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGN1c3RvbSBjb250cm9sIGl0ZW0gdG8gZXhpc3RpbmcgY29udHJvbCBiYXJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbj17fV0gLSBTdHlsZSBvYmplY3QgdG8gb3ZlcndpcnRlIGRlZmF1bHQgZWxlbWVudCBzdHlsZS4gSXQgdGFrZXMgJ3N0eWxlJywgJ29uVGFwJyBhbmQgJ2dyb3VwJyBwcm9wZXJ0aWVzLlxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhcHBlbmRDb250cm9sSXRlbTogZnVuY3Rpb24gKCBvcHRpb24gKSB7XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMud2lkZ2V0LmNyZWF0ZUN1c3RvbUl0ZW0oIG9wdGlvbiApO1x0XHRcblxuICAgICAgICBpZiAoIG9wdGlvbi5ncm91cCA9PT0gJ3ZpZGVvJyApIHtcblxuICAgICAgICAgICAgdGhpcy53aWRnZXQudmlkZW9FbGVtZW50LmFwcGVuZENoaWxkKCBpdGVtICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy53aWRnZXQuYmFyRWxlbWVudC5hcHBlbmRDaGlsZCggaXRlbSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgY2FjaGVkIGZpbGVzXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsZWFyQWxsQ2FjaGU6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBUSFJFRS5DYWNoZS5jbGVhcigpO1xuXG4gICAgfVxuXG59ICk7XG5cbmV4cG9ydCB7IFZpZXdlciB9OyIsImltcG9ydCB7IFRIUkVFX1JFVklTSU9OIH0gZnJvbSAnLi9Db25zdGFudHMnO1xuXG5pZiAoIFRIUkVFLlJFVklTSU9OICE9IFRIUkVFX1JFVklTSU9OICkge1xuXG4gICAgY29uc29sZS53YXJuKCBgdGhyZWUuanMgdmVyc2lvbiBpcyBub3QgbWF0Y2hlZC4gUGxlYXNlIGNvbnNpZGVyIHVzZSB0aGUgdGFyZ2V0IHJldmlzaW9uICR7VEhSRUVfUkVWSVNJT059YCApO1xuXG59IiwiLyoqXG4gKiBQYW5vbGVucy5qc1xuICogQGF1dGhvciBwY2hlbjY2XG4gKiBAbmFtZXNwYWNlIFBBTk9MRU5TXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vQ29uc3RhbnRzJztcbmV4cG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4vRGF0YUltYWdlJztcbmV4cG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9sb2FkZXJzL0ltYWdlTG9hZGVyJztcbmV4cG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICcuL2xvYWRlcnMvVGV4dHVyZUxvYWRlcic7XG5leHBvcnQgeyBDdWJlVGV4dHVyZUxvYWRlciB9IGZyb20gJy4vbG9hZGVycy9DdWJlVGV4dHVyZUxvYWRlcic7XG5leHBvcnQgeyBNZWRpYSB9IGZyb20gJy4vbWVkaWEvTWVkaWEnO1xuZXhwb3J0IHsgUmV0aWNsZSB9IGZyb20gJy4vaW50ZXJmYWNlL1JldGljbGUnO1xuZXhwb3J0IHsgSW5mb3Nwb3QgfSBmcm9tICcuL2luZm9zcG90L0luZm9zcG90JztcbmV4cG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0L1dpZGdldCc7XG5leHBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvUGFub3JhbWEnO1xuZXhwb3J0IHsgSW1hZ2VQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvSW1hZ2VQYW5vcmFtYSc7XG5leHBvcnQgeyBFbXB0eVBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9FbXB0eVBhbm9yYW1hJztcbmV4cG9ydCB7IEN1YmVQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvQ3ViZVBhbm9yYW1hJztcbmV4cG9ydCB7IEJhc2ljUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0Jhc2ljUGFub3JhbWEnO1xuZXhwb3J0IHsgVmlkZW9QYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvVmlkZW9QYW5vcmFtYSc7XG5leHBvcnQgeyBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0dvb2dsZVN0cmVldHZpZXdQYW5vcmFtYSc7XG5leHBvcnQgeyBMaXR0bGVQbGFuZXQgfSBmcm9tICcuL3Bhbm9yYW1hL0xpdHRsZVBsYW5ldCc7XG5leHBvcnQgeyBJbWFnZUxpdHRsZVBsYW5ldCB9IGZyb20gJy4vcGFub3JhbWEvSW1hZ2VMaXR0bGVQbGFuZXQnO1xuZXhwb3J0IHsgQ2FtZXJhUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0NhbWVyYVBhbm9yYW1hJztcbmV4cG9ydCB7IFZpZXdlciB9IGZyb20gJy4vdmlld2VyL1ZpZXdlcic7XG5pbXBvcnQgJy4vQ2hlY2snO1xuXG4vLyBleHBvc2UgVFdFRU5cbmltcG9ydCBUV0VFTiBmcm9tICdAdHdlZW5qcy90d2Vlbi5qcyc7XG53aW5kb3cuVFdFRU4gPSBUV0VFTjsiXSwibmFtZXMiOlsiVEhSRUUuQ2FjaGUiLCJUSFJFRS5UZXh0dXJlIiwiVEhSRUUuUkdCRm9ybWF0IiwiVEhSRUUuUkdCQUZvcm1hdCIsIlRIUkVFLkN1YmVUZXh0dXJlIiwiVEhSRUUuRXZlbnREaXNwYXRjaGVyIiwiVEhSRUUuVmlkZW9UZXh0dXJlIiwiVEhSRUUuTGluZWFyRmlsdGVyIiwiVEhSRUUuU3ByaXRlTWF0ZXJpYWwiLCJUSFJFRS5TcHJpdGUiLCJUSFJFRS5Db2xvciIsIlRIUkVFLkNhbnZhc1RleHR1cmUiLCJ0aGlzIiwiVEhSRUUuRG91YmxlU2lkZSIsIlRXRUVOIiwiVEhSRUUuVmVjdG9yMyIsIlRIUkVFLk1lc2giLCJUSFJFRS5CYWNrU2lkZSIsIlRIUkVFLk9iamVjdDNEIiwiVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkiLCJUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCIsIlRIUkVFLkJ1ZmZlckdlb21ldHJ5IiwiVEhSRUUuQnVmZmVyQXR0cmlidXRlIiwiVEhSRUUuU2hhZGVyTGliIiwiVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkiLCJUSFJFRS5TaGFkZXJNYXRlcmlhbCIsIlRIUkVFLk1hdHJpeDQiLCJUSFJFRS5WZWN0b3IyIiwiVEhSRUUuUXVhdGVybmlvbiIsIlRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJUSFJFRS5NYXRoIiwiVEhSRUUuTU9VU0UiLCJUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSIsIlRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSIsIlRIUkVFLkV1bGVyIiwiVEhSRUUuU2NlbmUiLCJUSFJFRS5TdGVyZW9DYW1lcmEiLCJUSFJFRS5OZWFyZXN0RmlsdGVyIiwiVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQiLCJUSFJFRS5XZWJHTFJlbmRlcmVyIiwiVEhSRUUuUmF5Y2FzdGVyIiwiVEhSRUUuRnJ1c3R1bSIsIlRIUkVFLlJFVklTSU9OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUVBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBLEFBQVksT0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7Q0FFbEQ7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0EsQUFB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LENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFekM7O0dBRUQ7O0VBRUQsV0FBVyxFQUFFOztHQUVaLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRTs7SUFFaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRTNDOztHQUVELEdBQUcsRUFBRSxVQUFVLENBQUMsRUFBRTs7SUFFakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRS9DOztHQUVELEtBQUssRUFBRSxVQUFVLENBQUMsRUFBRTs7SUFFbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0tBQ1osT0FBTyxDQUFDLENBQUM7S0FDVDs7SUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7S0FDWixPQUFPLENBQUMsQ0FBQztLQUNUOztJQUVELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtLQUNqQixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDbkM7O0lBRUQsT0FBTyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFFakQ7O0dBRUQ7O0VBRUQsUUFBUSxFQUFFOztHQUVULEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRTs7SUFFaEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMs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QUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0dBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDZCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3RCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7R0FFOUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztJQUVsQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7S0FDVixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hDOztJQUVELE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUUzRSxNQUFNOztJQUVOLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtLQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0RDs7SUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7S0FDVixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pFOztJQUVELE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUU3Rjs7R0FFRDs7RUFFRCxLQUFLLEVBQUU7O0dBRU4sTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7O0lBRTVCLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7O0lBRTFCOztHQUVELFNBQVMsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7O0lBRTFCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7SUFFN0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRWpDOztHQUVELFNBQVMsRUFBRSxDQUFDLFlBQVk7O0lBRXZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRVosT0FBTyxVQUFVLENBQUMsRUFBRTs7S0FFbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztLQUVWLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWjs7S0FFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO01BQzNCLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDUDs7S0FFRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1QsT0FBTyxDQUFDLENBQUM7O0tBRVQsQ0FBQzs7SUFFRixHQUFHOztHQUVKLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7O0lBRXhDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7SUFDekIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQztJQUN6QixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7SUFFaEIsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7SUFFL0Y7O0dBRUQ7O0VBRUQsQ0FBQzs7O0NBR0YsQ0FBQyxVQUFVLElBQUksRUFBRTs7RUFFaEIsQUFPeUU7OztHQUd4RSxjQUFjLEdBQUcsS0FBSyxDQUFDOztHQUV2QixBQUtBOztFQUVELEVBQUVLLEFBQUksQ0FBQyxDQUFDOzs7Q0MvNUJUO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsU0FBUyxRQUFRLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHO0NBQ3REO0NBQ0EsSUFBSSxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUUsV0FBVyxHQUFHLEdBQUcsQ0FBQzs7Q0FFNUMsSUFBSSxRQUFRLEdBQUcsUUFBUSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUM7O0NBRTFDLElBQUlILFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O0NBRTlCLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7O0NBRTNCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEtBQUssU0FBUyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7Q0FDN0QsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs7Q0FFNUI7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDOztDQUUvQixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0NBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Q0FDM0IsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7Q0FFNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7O0NBRTdCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7O0NBRTlCLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O0NBRTFCLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxJ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LEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7Q0FDOUQsUUFBUSxNQUFNLFNBQVMsR0FBRyxNQUFNOztDQUVoQztDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxZQUFZLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDOztDQUU5QyxTQUFTLENBQUM7Q0FDVixRQUFRLE1BQU0sT0FBTyxHQUFHLEVBQUUsS0FBSyxNQUFNOztDQUVyQztDQUNBLFlBQVksTUFBTSxDQUFDLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxDQUFDOztDQUV0RDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxZQUFZLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzs7Q0FFM0QsU0FBUyxDQUFDOztDQUVWLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRzs7Q0FFckMsWUFBWSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Q0FFNUQsU0FBUzs7Q0FFVCxLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksVUFBVSxFQUFFLFlBQVk7O0NBRTVCLFFBQVEsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7Q0FFeEMsUUFBUSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUc7O0NBRXRDLFlBQVksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDOztDQUUxQixTQUFTOztDQUVUO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLFFBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDOztDQUVoRCxLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLG1CQUFtQixFQUFFLFlBQVk7O0NBRXJDLFFBQVEsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7Q0FFeEMsUUFBUSxLQUFLLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUc7O0NBRTNFLFlBQVksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOztDQUU3QjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxZQUFZLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOztDQUVwSCxTQUFTLE1BQU07O0NBRWYsWUFBWSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O0NBRTlCO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLFlBQVksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O0NBRW5ILFNBQVM7O0NBRVQsUUFBUSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7O0NBRXZFLEtBQUs7O0NBRUw7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksVUFBVSxFQUFFLFlBQVk7O0NBRTVCLFFBQVEsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7Q0FFeEMsUUFBUSxLQUFLLEtBQUssR0FBRzs7Q0FFckIsWUFBWSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7Q0FFMUQsU0FBUzs7Q0FFVCxLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksWUFBWSxFQUFFLFlBQVk7O0NBRTlCLFFBQVEsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzs7Q0FFdkMsS0FBSzs7Q0FFTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxTQUFTLEVBQUUsWUFBWTs7Q0FFM0IsUUFBUSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOztDQUV4QyxRQUFRLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRzs7Q0FFckMsWUFBWSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7Q0FFL0IsU0FBUzs7Q0FFVCxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQzs7Q0FFdkQsS0FBSzs7Q0FFTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxXQUFXLEVBQUUsWUFBWTs7Q0FFN0IsUUFBUSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOztDQUV4QyxRQUFRLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRzs7Q0FFNUMsWUFBWSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7Q0FFaEMsU0FBUzs7Q0FFVCxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQzs7Q0FFdkQsS0FBSzs7Q0FFTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLGVBQWUsRUFBRSxZQUFZOztDQUVqQyxRQUFRLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQzs7Q0FFakMsS0FBSzs7Q0FFTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxPQUFPLEVBQUUsWUFBWTs7Q0FFekIsUUFBUSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7O0NBRTNDLFFBQVEsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0NBQzFCO0NBQ0EsUUFBUSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Q0FDMUUsUUFBUSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0NBQzlGLFFBQVEsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0NBQ2xGLFFBQVEsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O0NBRXhGLFFBQVEsS0FBSyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTs7Q0FFckMsUUFBUSxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O0NBRWhELEtBQUs7O0NBRUwsQ0FBQyxFQUFFLENBQUM7O0NDM2VKO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxTQUFTLHNCQUFzQixHQUFHLFVBQVUsR0FBRyxFQUFFLEdBQUc7O0NBRXBELElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7Q0FDbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztDQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0NBQ3hCLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztDQUMzRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0NBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Q0FDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztDQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0NBQ25CLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Q0FDakIsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0NBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Q0FDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztDQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0NBQzdCLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7O0NBRS9CLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDMUMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7Q0FFekMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUN4RCxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztDQUV2RCxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0NBRXJCLElBQUksSUFBSSxFQUFFLENBQUM7O0NBRVgsSUFBSSxJQUFJOztDQUVSLFFBQVEsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Q0FFMUQsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxDQUFDOztDQUV2RCxRQUFRLElBQUksQ0FBQyxFQUFFLEdBQUc7O0NBRWxCLFlBQVksRUFBRSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUM7O0NBRTlDLFNBQVM7O0NBRVQsS0FBSztDQUNMLElBQUksUUFBUSxLQUFLLEdBQUc7O0NBRXBCLEtBQUs7O0NBRUwsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDOUUsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0NBRTlFLENBQUM7O0NBRUQsTUFBTSxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxTQUFTLEVBQUU7O0NBRWpELElBQUksV0FBVyxFQUFFLHNCQUFzQjs7Q0FFdkM7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLFdBQVcsRUFBRSxXQUFXLE1BQU0sRUFBRSxLQUFLLEdBQUc7O0NBRTVDLFFBQVEsS0FBSyxJQUFJLENBQUMsVUFBVSxHQUFHOztDQUUvQixZQUFZLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOztDQUVoRSxTQUFTO0NBQ1Q7Q0FDQSxLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLGtCQUFrQixFQUFFLFlBQVk7O0NBRXBDLFFBQVEsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Q0FDN0MsUUFBUSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Q0FFN0MsUUFBUSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0NBQy9CLFFBQVEsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7Q0FFL0IsUUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO0NBQ3pDLFFBQVEsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQzs7Q0FFekMsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRztDQUM1QyxZQUFZLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHO0NBQ2hELGdCQUFnQixNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDO0NBQzdELGdCQUFnQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO0NBQzNGLGdCQUFnQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO0NBQzdGLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN2QyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0NBQ3ZELGFBQWE7Q0FDYixTQUFTOztDQUVULEtBQUs7O0NBRUw7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksZUFBZSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEdBQUc7O0NBRWhELFFBQVEsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztDQUMvQixRQUFRLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7O0NBRS9CLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQztDQUNqQixRQUFRLENBQUMsSUFBSSxHQUFHLENBQUM7O0NBRWpCLFFBQVEsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7Q0FDMUMsUUFBUSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQzs7Q0FFMUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztDQUN2QixRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOztDQUV2QixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7Q0FFbEgsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Q0FDeEI7Q0FDQSxLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLFFBQVEsRUFBRSxXQUFXOztDQUV6QixRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUN0QjtDQUNBLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUNyRDtDQUNBLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7O0NBRTFDLFlBQVksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0NBQ3ZDLFlBQVksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0NBQ3ZDLFlBQVksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztDQUVuQyxZQUFZLEtBQUssSUFBSSxDQUFDLGNBQWMsR0FBRzs7Q0FFdkMsZ0JBQWdCLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztDQUV6RCxhQUFhOztDQUViLFNBQVM7Q0FDVCxLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLGVBQWUsRUFBRSxZQUFZOztDQUVqQyxRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ2pDO0NBQ0EsUUFBUSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUM3QyxRQUFRLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQzdDLFFBQVEsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQzFCO0NBQ0EsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztDQUN4QixRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Q0FFNUIsUUFBUSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Q0FFOUMsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0NBQ3JDLFlBQVksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztDQUN6QyxnQkFBZ0IsTUFBTSxHQUFHLEdBQUcseUZBQXlGLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0NBQ3hNLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRztDQUNuQyxvQkFBb0IsSUFBSSxRQUFRLEdBQUc7Q0FDbkMsd0JBQXdCLE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXO0NBQ2xGLDRCQUE0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUM7Q0FDbEUseUJBQXlCLEVBQUUsQ0FBQztDQUM1QixxQkFBcUIsTUFBTTtDQUMzQix3QkFBd0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztDQUNoRCx3QkFBd0IsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxXQUFXO0NBQ2pFLDRCQUE0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7Q0FDL0QseUJBQXlCLEVBQUUsQ0FBQztDQUM1Qix3QkFBd0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Q0FDN0Msd0JBQXdCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0NBQ3RDLHFCQUFxQjtDQUNyQixpQkFBaUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDNUIsYUFBYTtDQUNiLFNBQVM7Q0FDVDtDQUNBLEtBQUs7O0NBRUw7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxJQUFJLEVBQUUsV0FBVyxNQUFNLEdBQUc7O0NBRTlCLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Q0FFaEMsS0FBSzs7Q0FFTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRzs7Q0FFN0IsUUFBUSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDMUIsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsVUFBVSxNQUFNLEVBQUUsTUFBTSxFQUFFO0NBQ3hFLFlBQVksSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUU7Q0FDNUQsZ0JBQWdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0NBQ3JDLGdCQUFnQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7Q0FDbEQsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Q0FDcEQsZ0JBQWdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztDQUN2QyxhQUFhO0NBQ2IsU0FBUyxDQUFDLENBQUM7Q0FDWDtDQUNBLEtBQUs7O0NBRUw7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUc7O0NBRTNCLFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Q0FDdkIsUUFBUSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztDQUNsQyxLQUFLO0NBQ0w7Q0FDQSxDQUFDLEVBQUUsQ0FBQzs7Q0NsUEo7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxTQUFTLHdCQUF3QixHQUFHLE1BQU0sRUFBRSxNQUFNLEdBQUc7O0NBRXJELElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Q0FFL0IsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7Q0FFekIsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7Q0FFMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7Q0FFL0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLENBQUM7O0NBRXJDLENBQUM7O0NBRUQsd0JBQXdCLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsU0FBUyxFQUFFLEVBQUU7O0NBRTlGLElBQUksV0FBVyxFQUFFLHdCQUF3Qjs7Q0FFekM7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxJQUFJLEVBQUUsV0FBVyxNQUFNLEdBQUc7O0NBRTlCLFFBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7O0NBRWxDLFFBQVEsTUFBTSxHQUFHLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLE1BQU0sRUFBRSxDQUFDOztDQUVqRCxRQUFRLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUc7O0NBRXhDLFlBQVksSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Q0FFekMsU0FBUzs7Q0FFVCxLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksaUJBQWlCLEVBQUUsV0FBVyxNQUFNLEdBQUc7O0NBRTNDLFFBQVEsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQztDQUMxRCxRQUFRLE1BQU0sQ0FBQyxHQUFHLEdBQUcsMENBQTBDLENBQUM7Q0FDaEUsUUFBUSxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztDQUNwRCxRQUFRLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztDQUNuRSxRQUFRLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O0NBRXZELFFBQVEsUUFBUSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7O0NBRS9ELEtBQUs7O0NBRUw7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksWUFBWSxFQUFFLFlBQVk7O0NBRTlCLFFBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7O0NBRXRELFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxHQUFHOztDQUVsQyxZQUFZLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Q0FFeEIsU0FBUzs7Q0FFVCxLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksWUFBWSxFQUFFLFlBQVk7O0NBRTlCLFFBQVEsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDOztDQUU5QixLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksYUFBYSxFQUFFLFdBQVcsTUFBTSxHQUFHOztDQUV2QyxRQUFRLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDOztDQUVuQyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztDQUVqRSxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztDQUVqRSxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDOztDQUV0RCxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOztDQUV0QyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztDQUNyQyxLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksTUFBTSxFQUFFLFdBQVcsTUFBTSxHQUFHOztDQUVoQyxRQUFRLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSUQsYUFBYSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUM7O0NBRWpGLEtBQUs7O0NBRUw7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksS0FBSyxFQUFFLFlBQVk7O0NBRXZCLFFBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7O0NBRW5DLFFBQVEsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztDQUVuRCxLQUFLOztDQUVMLENBQUMsRUFBRSxDQUFDOztDQzlJSjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0EsQUFFQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLE1BQU0sbUJBQW1CLEdBQUc7O0NBRTVCLElBQUksUUFBUSxFQUFFOztDQUVkLFFBQVEsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUlBLGFBQWEsRUFBRSxFQUFFO0NBQ2xELFFBQVEsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtDQUNwQyxRQUFRLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJeUIsYUFBYSxFQUFFLEVBQUU7Q0FDbkQsUUFBUSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0NBQzlCLFFBQVEsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTs7Q0FFakMsS0FBSzs7Q0FFTCxJQUFJLFlBQVksRUFBRTs7Q0FFbEIsUUFBUSxtQkFBbUI7O0NBRTNCLFFBQVEsZUFBZTs7Q0FFdkIsUUFBUSxXQUFXO0NBQ25CLFFBQVEsc0NBQXNDOztDQUU5QyxRQUFRLEdBQUc7O0NBRVgsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7O0NBRWxCLElBQUksY0FBYyxFQUFFOztDQUVwQixRQUFRLDZCQUE2QjtDQUNyQyxRQUFRLDJCQUEyQjtDQUNuQyxRQUFRLHlCQUF5QjtDQUNqQyxRQUFRLHFCQUFxQjtDQUM3QixRQUFRLHdCQUF3Qjs7Q0FFaEMsUUFBUSxtQkFBbUI7O0NBRTNCLFFBQVEscUNBQXFDOztDQUU3QyxRQUFRLGNBQWM7O0NBRXRCLFFBQVEsb0NBQW9DOztDQUU1QyxRQUFRLG9EQUFvRDs7Q0FFNUQsUUFBUSxpRUFBaUU7Q0FDekUsUUFBUSxxRUFBcUU7O0NBRTdFLFFBQVEsMkRBQTJEOztDQUVuRSxRQUFRLHVCQUF1QjtDQUMvQixRQUFRLHNEQUFzRDtDQUM5RCxRQUFRLGlDQUFpQztDQUN6QyxRQUFRLElBQUk7O0NBRVosUUFBUSxpREFBaUQ7O0NBRXpELFFBQVEsNEJBQTRCOztDQUVwQyxRQUFRLEdBQUc7O0NBRVgsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7O0NBRWxCLENBQUMsQ0FBQzs7Q0MzRUY7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLFNBQVMsWUFBWSxHQUFHLElBQUksR0FBRyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxHQUFHLEdBQUcsR0FBRzs7Q0FFNUUsSUFBSSxLQUFLLElBQUksS0FBSyxPQUFPLEdBQUc7O0NBRTVCLFFBQVEsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7Q0FFNUcsS0FBSzs7Q0FFTCxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDdkIsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztDQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztDQUV4QixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0NBQzFCLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJQyxhQUFhLEVBQUUsQ0FBQzs7Q0FFekMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUlDLGdCQUFnQixFQUFFLENBQUM7Q0FDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUlBLGdCQUFnQixFQUFFLENBQUM7Q0FDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUlBLGdCQUFnQixFQUFFLENBQUM7Q0FDMUMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUlBLGdCQUFnQixFQUFFLENBQUM7O0NBRTVDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJYixhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUNoRCxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSUEsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7O0NBRWhELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7O0NBRWxFLENBQUM7O0NBRUQsWUFBWSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLFNBQVMsRUFBRSxFQUFFOztDQUVsRixJQUFJLFdBQVcsRUFBRSxZQUFZOztDQUU3QixJQUFJLEdBQUcsRUFBRSxXQUFXLE1BQU0sR0FBRzs7Q0FFN0IsUUFBUSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHO0NBQ3BDO0NBQ0EsWUFBWSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRzs7Q0FFMUQsZ0JBQWdCLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O0NBRTNDLGFBQWE7O0NBRWIsWUFBWSxPQUFPLElBQUksQ0FBQzs7Q0FFeEIsU0FBUzs7Q0FFVCxRQUFRLEtBQUssTUFBTSxZQUFZLFFBQVEsR0FBRzs7Q0FFMUMsWUFBWSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Q0FDOUM7Q0FDQSxTQUFTOztDQUVULFFBQVEsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Q0FFekQsS0FBSzs7Q0FFTCxJQUFJLGNBQWMsRUFBRSxXQUFXLElBQUksRUFBRSxLQUFLLEdBQUc7O0NBRTdDLFFBQVEsT0FBTyxJQUFJYyx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDOztDQUVuRSxLQUFLOztDQUVMLElBQUksY0FBYyxFQUFFLFdBQVcsSUFBSSxHQUFHOztDQUV0QyxRQUFRLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7O0NBRTVGLFFBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0NBQ25DLFFBQVEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOztDQUVyQyxRQUFRLE9BQU8sSUFBSUosb0JBQW9CLEVBQUU7O0NBRXpDLFlBQVksUUFBUSxFQUFFLFFBQVE7Q0FDOUIsWUFBWSxZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7Q0FDN0MsWUFBWSxjQUFjLEVBQUUsTUFBTSxDQUFDLGNBQWM7Q0FDakQsWUFBWSxJQUFJLEVBQUVSLGNBQWM7Q0FDaEMsWUFBWSxXQUFXLEVBQUUsSUFBSTs7Q0FFN0IsU0FBUyxFQUFFLENBQUM7Q0FDWjtDQUNBLEtBQUs7O0NBRUwsSUFBSSxtQkFBbUIsRUFBRSxZQUFZOztDQUVyQyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Q0FDekcsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0NBQ3pHLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztDQUNyRyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Q0FDMUcsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0NBQ3pHLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztDQUN0RyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Q0FDNUcsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Q0FDaEgsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0NBQzdHO0NBQ0EsS0FBSzs7Q0FFTCxJQUFJLHFCQUFxQixFQUFFLFlBQVk7O0NBRXZDLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDaEcsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNoRyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO0NBQzVGLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDakcsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNoRyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO0NBQzdGLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDbEcsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO0NBQ3RHLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDcEc7Q0FDQSxLQUFLOztDQUVMLElBQUksV0FBVyxFQUFFLFdBQVcsS0FBSyxHQUFHOztDQUVwQyxRQUFRLE1BQU0sVUFBVSxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sTUFBTSxDQUFDLEVBQUU7O0NBRTNFLFFBQVEsU0FBUyxVQUFVOztDQUUzQixRQUFRLEtBQUssQ0FBQzs7Q0FFZCxZQUFZLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztDQUMxRixZQUFZLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs7Q0FFMUYsWUFBWSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztDQUNqQyxZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7Q0FFdkMsWUFBWSxNQUFNOztDQUVsQixRQUFRLEtBQUssQ0FBQzs7Q0FFZCxZQUFZLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0NBQzNFLFlBQVksTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDM0UsWUFBWSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQzVELFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDOztDQUVwRCxZQUFZLE1BQU07O0NBRWxCLFFBQVE7O0NBRVIsWUFBWSxNQUFNOztDQUVsQixTQUFTOztDQUVULFFBQVEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O0NBRWhDLEtBQUs7O0NBRUwsSUFBSSxXQUFXLEVBQUUsV0FBVyxLQUFLLEdBQUc7O0NBRXBDLFFBQVEsTUFBTSxVQUFVLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxNQUFNLENBQUMsRUFBRTs7Q0FFM0UsUUFBUSxTQUFTLFVBQVU7O0NBRTNCLFFBQVEsS0FBSyxDQUFDOztDQUVkLFlBQVksTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO0NBQzFGLFlBQVksTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOztDQUUxRixZQUFZLE1BQU0sTUFBTSxHQUFHYSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztDQUM3RSxZQUFZLE1BQU0sTUFBTSxHQUFHQSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQzs7Q0FFN0UsWUFBWSxLQUFLLElBQUksQ0FBQyxRQUFRLEdBQUc7Q0FDakMsZ0JBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztDQUNwRSxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0NBQ3BFLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUMzRSxnQkFBZ0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQzNDLGFBQWE7O0NBRWIsWUFBWSxNQUFNOztDQUVsQixRQUFRLEtBQUssQ0FBQzs7Q0FFZCxZQUFZLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0NBQzNFLFlBQVksTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDM0UsWUFBWSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDOztDQUU1RCxZQUFZLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsUUFBUSxFQUFFLENBQUM7O0NBRXpFLFlBQVksTUFBTTs7Q0FFbEIsUUFBUTs7Q0FFUixZQUFZLE1BQU07O0NBRWxCLFNBQVM7O0NBRVQsS0FBSzs7Q0FFTCxJQUFJLFNBQVMsRUFBRSxZQUFZOztDQUUzQixRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDOztDQUU5QixLQUFLOztDQUVMLElBQUksWUFBWSxFQUFFLFdBQVcsS0FBSyxHQUFHOztDQUVyQyxRQUFRLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztDQUMvQixRQUFRLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7Q0FFaEMsUUFBUSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7O0NBRXRCLFFBQVEsS0FBSyxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsR0FBRzs7Q0FFOUMsWUFBWSxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7Q0FFckMsU0FBUyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEdBQUc7O0NBRWpELFlBQVksS0FBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7Q0FFbkMsU0FBUzs7Q0FFVCxRQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDbkMsUUFBUSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7Q0FFaEMsS0FBSzs7Q0FFTCxJQUFJLFlBQVksRUFBRSxXQUFXLEtBQUssR0FBRzs7Q0FFckMsUUFBUSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztDQUNoRCxRQUFRLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0NBQzNDLFFBQVEsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7O0NBRTFDLFFBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDOztDQUVyQyxRQUFRLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxHQUFHOztDQUVqRCxZQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQzs7Q0FFN0MsU0FBUyxNQUFNLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxHQUFHOztDQUV4RCxZQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQzs7Q0FFN0MsU0FBUzs7Q0FFVCxLQUFLOztDQUVMLElBQUksZ0JBQWdCLEVBQUUsWUFBWTs7Q0FFbEMsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O0NBRTFGLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzs7Q0FFbEQsUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFRLEdBQUc7O0NBRTdCLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7O0NBRWhHLFNBQVM7Q0FDVDtDQUNBLFFBQVEsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHO0NBQzdGO0NBQ0EsWUFBWSxNQUFNLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztDQUV4RCxTQUFTOztDQUVULEtBQUs7O0NBRUwsSUFBSSxLQUFLLEVBQUUsWUFBWTs7Q0FFdkIsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN2QyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ3pDLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O0NBRWhDLEtBQUs7O0NBRUwsSUFBSSxNQUFNLEVBQUUsV0FBVyxPQUFPLEdBQUc7O0NBRWpDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQzs7Q0FFM0csUUFBUSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztDQUNuQyxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0NBQ2hDO0NBQ0EsUUFBUSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLENBQUM7O0NBRTVGLFFBQVEsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztDQUM3RDtDQUNBLEtBQUs7O0NBRUwsSUFBSSxPQUFPLEVBQUUsWUFBWTs7Q0FFekIsUUFBUSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7Q0FFckMsUUFBUSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDOztDQUVqSCxRQUFRLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O0NBRXBELFFBQVEsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0NBQ3JEO0NBQ0EsS0FBSzs7Q0FFTCxJQUFJLGNBQWMsRUFBRSxZQUFZOztDQUVoQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7O0NBRTNHLEtBQUs7O0NBRUwsSUFBSSxhQUFhLEVBQUUsWUFBWTs7Q0FFL0IsUUFBUSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzs7Q0FFOUIsS0FBSzs7Q0FFTCxJQUFJLE9BQU8sRUFBRSxZQUFZOztDQUV6QixRQUFRLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztDQUVyQyxRQUFRLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Q0FFckQsS0FBSzs7Q0FFTCxDQUFDLENBQUMsQ0FBQzs7Q0M3VEg7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxTQUFTLGlCQUFpQixHQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHOztDQUVuRCxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDOztDQUU1RCxDQUFDOztDQUVELGlCQUFpQixDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFOztDQUV0RixJQUFJLFdBQVcsRUFBRSxpQkFBaUI7O0NBRWxDO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksTUFBTSxFQUFFLFdBQVcsT0FBTyxHQUFHOztDQUVqQyxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLENBQUM7O0NBRXRDLFFBQVEsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Q0FFNUQsS0FBSztDQUNMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxhQUFhLEVBQUUsV0FBVyxPQUFPLEdBQUc7O0NBRXhDLFFBQVEsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHdkIsa0JBQWtCLENBQUM7Q0FDbkU7Q0FDQSxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7O0NBRTdELEtBQUs7O0NBRUw7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksT0FBTyxFQUFFLFlBQVk7O0NBRXpCLFFBQVEsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7O0NBRTlELFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssR0FBRzs7Q0FFMUMsWUFBWSxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDOztDQUVyQyxTQUFTOztDQUVULFFBQVEsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztDQUVwRCxLQUFLOztDQUVMLENBQUMsRUFBRSxDQUFDOztDQy9ESjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxTQUFTLGNBQWMsR0FBRyxXQUFXLEdBQUc7O0NBRXhDLElBQUksTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0NBQ3hCLElBQUksTUFBTSxRQUFRLEdBQUcsSUFBSVksMEJBQTBCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztDQUN0RSxJQUFJLE1BQU0sUUFBUSxHQUFHLElBQUlDLHVCQUF1QixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7O0NBRXRFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDOztDQUU5QyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUM7Q0FDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7Q0FFekIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Q0FDOUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Q0FDN0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0NBQ3pGLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7O0NBRWpGLENBQUM7O0NBRUQsY0FBYyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFOztDQUUvRSxJQUFJLFdBQVcsRUFBRSxjQUFjOztDQUUvQjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRzs7Q0FFcEQsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7Q0FFN0MsS0FBSzs7Q0FFTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLGVBQWUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUc7O0NBRTVDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7O0NBRXJDLEtBQUs7O0NBRUw7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxLQUFLLEVBQUUsWUFBWTs7Q0FFdkIsUUFBUSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7O0NBRWxDLEtBQUs7O0NBRUw7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksSUFBSSxFQUFFLFlBQVk7O0NBRXRCLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Q0FFMUIsS0FBSzs7Q0FFTCxDQUFDLEVBQUUsQ0FBQzs7Q0M3RUo7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxTQUFTLGFBQWEsR0FBRyxNQUFNLEVBQUUsVUFBVSxHQUFHOztDQUU5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0NBQ3pCLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLFVBQVUsS0FBSyxTQUFTLEtBQUssVUFBVSxHQUFHLFFBQVEsQ0FBQztDQUMzRSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztDQUV4Qjs7Q0FFQTtDQUNBLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O0NBRXhCO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlMLGFBQWEsRUFBRSxDQUFDOztDQUV0QztDQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOztDQUU5QjtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Q0FDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzs7Q0FFekI7Q0FDQSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0NBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7O0NBRWhDO0NBQ0EsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztDQUNyQixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDOztDQUU1QjtDQUNBLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Q0FDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDOztDQUU3QjtDQUNBLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Q0FDdEIsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQzs7Q0FFM0I7Q0FDQSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0NBQzVCLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7O0NBRS9CO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztDQUMzQixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7Q0FFakM7Q0FDQSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Q0FDckMsR0FBRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxLQUFLLENBQUM7Q0FDdkMsR0FBRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDOztDQUVuQztDQUNBLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Q0FDcEIsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzs7Q0FFckI7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxRQUFRLENBQUM7Q0FDdEMsSUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQzs7Q0FFcEM7Q0FDQSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztDQUV4QjtDQUNBLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7Q0FFNUQ7Q0FDQSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxLQUFLLEVBQUVnQixXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRUEsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUVBLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Q0FFdEc7Q0FDQTtDQUNBO0NBQ0E7O0NBRUEsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7O0NBRXJCLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO0NBQ3BCLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDOztDQUVyQixJQUFJLElBQUksV0FBVyxHQUFHLElBQUlKLGFBQWEsRUFBRSxDQUFDO0NBQzFDLElBQUksSUFBSSxTQUFTLEdBQUcsSUFBSUEsYUFBYSxFQUFFLENBQUM7Q0FDeEMsSUFBSSxJQUFJLFdBQVcsR0FBRyxJQUFJQSxhQUFhLEVBQUUsQ0FBQzs7Q0FFMUMsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJQSxhQUFhLEVBQUUsQ0FBQztDQUN2QyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUlBLGFBQWEsRUFBRSxDQUFDO0NBQ3JDLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSUEsYUFBYSxFQUFFLENBQUM7Q0FDdkMsSUFBSSxJQUFJLFNBQVMsR0FBRyxJQUFJWixhQUFhLEVBQUUsQ0FBQzs7Q0FFeEMsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJQSxhQUFhLEVBQUUsQ0FBQzs7Q0FFckMsSUFBSSxJQUFJLFVBQVUsR0FBRyxJQUFJWSxhQUFhLEVBQUUsQ0FBQztDQUN6QyxJQUFJLElBQUksUUFBUSxHQUFHLElBQUlBLGFBQWEsRUFBRSxDQUFDO0NBQ3ZDLElBQUksSUFBSSxVQUFVLEdBQUcsSUFBSUEsYUFBYSxFQUFFLENBQUM7O0NBRXpDLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0NBQ2xCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ2hCLElBQUksSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0NBQ3JCLElBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0NBQ3ZCLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0NBQ2xCLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSVosYUFBYSxFQUFFLENBQUM7O0NBRWxDLElBQUksSUFBSSxZQUFZLEdBQUcsSUFBSUEsYUFBYSxFQUFFLENBQUM7Q0FDM0MsSUFBSSxJQUFJLGNBQWMsR0FBRyxJQUFJYSxnQkFBZ0IsRUFBRSxDQUFDOztDQUVoRCxJQUFJLElBQUksWUFBWSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0NBQ3pDLElBQUksSUFBSSxhQUFhLENBQUM7Q0FDdEIsSUFBSSxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7O0NBRTNCLElBQUksSUFBSSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7O0NBRTVDLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7Q0FFekcsSUFBSSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztDQUUzQjs7Q0FFQSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUN2QyxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Q0FDbEQsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOztDQUVsQzs7Q0FFQSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUlBLGdCQUFnQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJYixhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0NBQ3BHLElBQUksSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOztDQUU3Qzs7Q0FFQSxJQUFJLElBQUksV0FBVyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO0NBQ3pDLElBQUksSUFBSSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7Q0FDdkMsSUFBSSxJQUFJLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7Q0FFbkMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxVQUFVLEdBQUc7Q0FDckQsUUFBUSxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO0NBQzFDLFFBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO0NBQ25ELEtBQUssQ0FBQzs7Q0FFTixJQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWTtDQUN2QyxRQUFRLE9BQU8sWUFBWSxDQUFDO0NBQzVCLEtBQUssQ0FBQzs7Q0FFTixJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxLQUFLLEdBQUc7O0NBRXpDLFFBQVEsS0FBSyxLQUFLLEtBQUssU0FBUyxHQUFHOztDQUVuQyxZQUFZLEtBQUssR0FBRyxvQkFBb0IsRUFBRSxDQUFDOztDQUUzQyxTQUFTOztDQUVULFFBQVEsVUFBVSxJQUFJLEtBQUssQ0FBQzs7O0NBRzVCLEtBQUssQ0FBQzs7Q0FFTixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxLQUFLLEdBQUc7O0NBRXZDLFFBQVEsS0FBSyxLQUFLLEtBQUssU0FBUyxHQUFHOztDQUVuQyxZQUFZLEtBQUssR0FBRyxvQkFBb0IsRUFBRSxDQUFDOztDQUUzQyxTQUFTOztDQUVULFFBQVEsUUFBUSxJQUFJLEtBQUssQ0FBQzs7Q0FFMUIsS0FBSyxDQUFDOztDQUVOO0NBQ0EsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsUUFBUSxHQUFHOztDQUV6QyxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7Q0FFN0M7Q0FDQSxRQUFRLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztDQUNuRCxRQUFRLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Q0FFL0MsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDOztDQUU3QixLQUFLLENBQUM7O0NBRU47Q0FDQSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxRQUFRLEdBQUc7O0NBRXZDLFFBQVEsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOztDQUU3QztDQUNBLFFBQVEsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0NBQ25ELFFBQVEsU0FBUyxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Q0FFN0MsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDOztDQUU3QixLQUFLLENBQUM7O0NBRU47Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxNQUFNLEVBQUUsTUFBTSxHQUFHOztDQUUzQyxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7O0NBRS9GLFFBQVEsS0FBSyxLQUFLLENBQUMsTUFBTSxZQUFZaUIsdUJBQXVCLEdBQUc7O0NBRS9EO0NBQ0EsWUFBWSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztDQUNqRCxZQUFZLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQzlELFlBQVksSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDOztDQUVqRDtDQUNBLFlBQVksY0FBYyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQzs7Q0FFckY7Q0FDQSxZQUFZLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxjQUFjLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0NBQ2hGLFlBQVksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLGNBQWMsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7O0NBRTlFLFNBQVMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLFlBQVlDLHdCQUF3QixHQUFHOztDQUV2RTtDQUNBLFlBQVksS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Q0FDckcsWUFBWSxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7Q0FFcEcsU0FBUyxNQUFNOztDQUVmO0NBQ0EsWUFBWSxPQUFPLENBQUMsSUFBSSxFQUFFLDhFQUE4RSxFQUFFLENBQUM7O0NBRTNHLFNBQVM7O0NBRVQsS0FBSyxDQUFDOztDQUVOLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVO0NBQzlCO0NBQ0EsUUFBUSxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU87O0NBRWxDLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksR0FBRzs7Q0FFaEYsWUFBWSxVQUFVLEdBQUcsS0FBSyxDQUFDO0NBQy9CLFlBQVksT0FBTztDQUNuQixTQUFTOztDQUVULFFBQVEsVUFBVSxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztDQUNuRCxRQUFRLFlBQVksSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUM7O0NBRW5ELFFBQVEsVUFBVSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxZQUFZLENBQUM7Q0FDaEUsUUFBUSxRQUFRLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixHQUFHLFVBQVUsQ0FBQzs7Q0FFOUQsS0FBSyxDQUFDOztDQUVOLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLFVBQVUsR0FBRzs7Q0FFM0MsUUFBUSxLQUFLLFVBQVUsS0FBSyxTQUFTLEdBQUc7O0NBRXhDLFlBQVksVUFBVSxHQUFHLFlBQVksRUFBRSxDQUFDOztDQUV4QyxTQUFTOztDQUVULFFBQVEsS0FBSyxLQUFLLENBQUMsTUFBTSxZQUFZRCx1QkFBdUIsR0FBRzs7Q0FFL0QsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDOztDQUVoQyxTQUFTLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxZQUFZQyx3QkFBd0IsR0FBRzs7Q0FFdkUsWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsRUFBRSxFQUFFLENBQUM7Q0FDbEgsWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Q0FDbEQsWUFBWSxLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDOztDQUUvQyxTQUFTLE1BQU07O0NBRWYsWUFBWSxPQUFPLENBQUMsSUFBSSxFQUFFLHFGQUFxRixFQUFFLENBQUM7O0NBRWxILFNBQVM7O0NBRVQsS0FBSyxDQUFDOztDQUVOLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLFVBQVUsR0FBRzs7Q0FFNUMsUUFBUSxLQUFLLFVBQVUsS0FBSyxTQUFTLEdBQUc7O0NBRXhDLFlBQVksVUFBVSxHQUFHLFlBQVksRUFBRSxDQUFDOztDQUV4QyxTQUFTOztDQUVULFFBQVEsS0FBSyxLQUFLLENBQUMsTUFBTSxZQUFZRCx1QkFBdUIsR0FBRzs7Q0FFL0QsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDOztDQUVoQyxTQUFTLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxZQUFZQyx3QkFBd0IsR0FBRzs7Q0FFdkUsWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsRUFBRSxFQUFFLENBQUM7Q0FDbEgsWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Q0FDbEQsWUFBWSxLQUFLLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDOztDQUUvQyxTQUFTLE1BQU07O0NBRWYsWUFBWSxPQUFPLENBQUMsSUFBSSxFQUFFLHFGQUFxRixFQUFFLENBQUM7O0NBRWxILFNBQVM7O0NBRVQsS0FBSyxDQUFDOztDQUVOLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLFlBQVksR0FBRzs7Q0FFNUMsUUFBUSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7Q0FFNUMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O0NBRW5EO0NBQ0EsUUFBUSxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDOztDQUV2Qzs7Q0FFQSxRQUFRLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDOztDQUVqRDs7Q0FFQSxRQUFRLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7Q0FFN0YsUUFBUSxLQUFLLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUc7O0NBRXZELFlBQVksSUFBSSxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxFQUFFLENBQUM7O0NBRXRELFNBQVM7O0NBRVQsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0NBRXhCLFFBQVEsS0FBSyxJQUFJLFVBQVUsQ0FBQztDQUM1QixRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUM7O0NBRXhCO0NBQ0EsUUFBUSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOztDQUUxRjtDQUNBLFFBQVEsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzs7Q0FFbEY7Q0FDQSxRQUFRLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7O0NBRTlELFFBQVEsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQzs7Q0FFN0M7Q0FDQSxRQUFRLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUM7O0NBRXBGO0NBQ0EsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7Q0FFL0IsUUFBUSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDaEUsUUFBUSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0NBQzVDLFFBQVEsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDOztDQUVoRTtDQUNBLFFBQVEsTUFBTSxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsQ0FBQzs7Q0FFOUMsUUFBUSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7O0NBRW5ELFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztDQUUxQyxRQUFRLFVBQVUsR0FBRyxDQUFDLENBQUM7Q0FDdkIsUUFBUSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0NBQ3JCLFFBQVEsS0FBSyxHQUFHLENBQUMsQ0FBQztDQUNsQixRQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7Q0FFM0I7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLFFBQVEsS0FBSyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHO0NBQ3pFLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUc7O0NBRXRFLFlBQVksS0FBSyxZQUFZLEtBQUssSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFOztDQUUvRSxZQUFZLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUN0RCxZQUFZLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Q0FFMUQsU0FBUzs7Q0FFVCxLQUFLLENBQUM7OztDQUdOLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZOztDQUU3QixRQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztDQUUzQixRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUN6QyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Q0FDcEQsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztDQUV0QyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztDQUM3QyxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUM7O0NBRTFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztDQUV0QixLQUFLLENBQUM7O0NBRU4sSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVk7O0NBRXJDLFFBQVEsT0FBTyxHQUFHLENBQUM7O0NBRW5CLEtBQUssQ0FBQzs7Q0FFTixJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFZOztDQUV6QyxRQUFRLE9BQU8sS0FBSyxDQUFDOztDQUVyQixLQUFLLENBQUM7O0NBRU4sSUFBSSxTQUFTLG9CQUFvQixHQUFHOztDQUVwQyxRQUFRLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDOztDQUU3RCxLQUFLOztDQUVMLElBQUksU0FBUyxZQUFZLEdBQUc7O0NBRTVCLFFBQVEsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7O0NBRWpELEtBQUs7O0NBRUwsSUFBSSxTQUFTLFdBQVcsRUFBRSxLQUFLLEdBQUc7O0NBRWxDLFFBQVEsVUFBVSxHQUFHLEtBQUssQ0FBQzs7Q0FFM0IsS0FBSyxZQUFZLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQzs7Q0FFbkMsUUFBUSxLQUFLLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxHQUFHLE9BQU87Q0FDOUMsUUFBUSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7O0NBRS9CLFFBQVEsS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHO0NBQ3pELFlBQVksS0FBSyxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksR0FBRyxPQUFPOztDQUVsRCxZQUFZLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDOztDQUVqQyxZQUFZLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O0NBRTVELFNBQVMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUc7Q0FDL0QsWUFBWSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxHQUFHLE9BQU87O0NBRWhELFlBQVksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O0NBRWhDLFlBQVksVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Q0FFM0QsU0FBUyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRztDQUM5RCxZQUFZLEtBQUssS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsT0FBTzs7Q0FFL0MsWUFBWSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Q0FFOUIsWUFBWSxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDOztDQUV6RCxTQUFTOztDQUVULFFBQVEsS0FBSyxLQUFLLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRztDQUNwQyxZQUFZLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO0NBQ3pFLFlBQVksUUFBUSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDckUsWUFBWSxLQUFLLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxDQUFDO0NBQzlDLFNBQVM7O0NBRVQsUUFBUSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7O0NBRXZCLEtBQUs7O0NBRUwsSUFBSSxTQUFTLFdBQVcsRUFBRSxLQUFLLEdBQUc7O0NBRWxDLFFBQVEsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssR0FBRyxPQUFPOztDQUU5QyxRQUFRLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Q0FFL0IsUUFBUSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDOztDQUUvRixRQUFRLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUc7O0NBRXRDLFlBQVksS0FBSyxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksR0FBRyxPQUFPOztDQUVsRCxZQUFZLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDMUQsWUFBWSxXQUFXLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsQ0FBQzs7Q0FFN0Q7Q0FDQSxZQUFZLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Q0FFdEc7Q0FDQSxZQUFZLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Q0FFckcsWUFBWSxXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOztDQUUxQyxZQUFZLElBQUksYUFBYSxFQUFFO0NBQy9CLGdCQUFnQixZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO0NBQ3JFLGdCQUFnQixVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO0NBQ25FLGFBQWE7O0NBRWIsWUFBWSxhQUFhLEdBQUcsS0FBSyxDQUFDOztDQUVsQyxTQUFTLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssR0FBRzs7Q0FFNUMsWUFBWSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxHQUFHLE9BQU87O0NBRWhELFlBQVksUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUN6RCxZQUFZLFVBQVUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDOztDQUUxRCxZQUFZLEtBQUssVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUc7O0NBRXBDLGdCQUFnQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O0NBRWhDLGFBQWEsTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHOztDQUUzQyxnQkFBZ0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztDQUVqQyxhQUFhOztDQUViLFlBQVksVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Q0FFeEMsU0FBUyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUc7O0NBRTFDLFlBQVksS0FBSyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksR0FBRyxPQUFPOztDQUUvQyxZQUFZLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDdkQsWUFBWSxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Q0FFcEQsWUFBWSxLQUFLLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDOztDQUVoRCxZQUFZLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7O0NBRXBDLFNBQVM7O0NBRVQsUUFBUSxLQUFLLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Q0FFbkQsS0FBSzs7Q0FFTCxJQUFJLFNBQVMsU0FBUyxnQkFBZ0I7O0NBRXRDLFFBQVEsVUFBVSxHQUFHLElBQUksQ0FBQzs7Q0FFMUIsUUFBUSxhQUFhLEdBQUcsU0FBUyxDQUFDOztDQUVsQyxRQUFRLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTzs7Q0FFOUMsUUFBUSxRQUFRLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUN4RSxRQUFRLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO0NBQ3BFLFFBQVEsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQztDQUN4QyxRQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztDQUUzQixLQUFLOztDQUVMLElBQUksU0FBUyxZQUFZLEVBQUUsS0FBSyxHQUFHOztDQUVuQyxRQUFRLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTzs7Q0FFL0YsUUFBUSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Q0FDL0IsUUFBUSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O0NBRWhDLFFBQVEsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDOztDQUV0QixRQUFRLEtBQUssS0FBSyxDQUFDLFVBQVUsS0FBSyxTQUFTLEdBQUc7O0NBRTlDLFlBQVksS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7O0NBRXJDLFNBQVMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxHQUFHOztDQUVqRCxZQUFZLEtBQUssR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUM7O0NBRW5DLFNBQVM7O0NBRVQsUUFBUSxLQUFLLEtBQUssR0FBRyxDQUFDLEdBQUc7O0NBRXpCO0NBQ0EsWUFBWSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNO0NBQ2hFLGtCQUFrQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3RDLGtCQUFrQixLQUFLLENBQUMsTUFBTSxDQUFDO0NBQy9CLFlBQVksS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOztDQUVsRCxTQUFTLE1BQU0sS0FBSyxLQUFLLEdBQUcsQ0FBQyxHQUFHOztDQUVoQztDQUNBLFlBQVksS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTTtDQUNoRSxrQkFBa0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUN0QyxrQkFBa0IsS0FBSyxDQUFDLE1BQU0sQ0FBQztDQUMvQixZQUFZLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzs7Q0FFbEQsU0FBUzs7Q0FFVCxRQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUN2QixRQUFRLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUM7Q0FDM0MsUUFBUSxLQUFLLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxDQUFDO0NBQzFDLFFBQVEsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Q0FFeEMsS0FBSzs7Q0FFTCxJQUFJLFNBQVMsT0FBTyxHQUFHLEtBQUssR0FBRzs7Q0FFL0IsUUFBUSxTQUFTLEtBQUssQ0FBQyxPQUFPOztDQUU5QixRQUFRLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0NBQzFCLFlBQVksS0FBSyxHQUFHLEtBQUssQ0FBQztDQUMxQixZQUFZLE1BQU07O0NBRWxCLFFBQVEsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07Q0FDOUIsWUFBWSxTQUFTLEdBQUcsS0FBSyxDQUFDO0NBQzlCLFlBQVksTUFBTTs7Q0FFbEIsUUFBUSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtDQUM1QixZQUFZLE9BQU8sR0FBRyxLQUFLLENBQUM7Q0FDNUIsWUFBWSxNQUFNOztDQUVsQixRQUFRLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO0NBQzdCLFlBQVksUUFBUSxHQUFHLEtBQUssQ0FBQztDQUM3QixZQUFZLE1BQU07O0NBRWxCLFNBQVM7O0NBRVQsS0FBSzs7Q0FFTCxJQUFJLFNBQVMsU0FBUyxFQUFFLEtBQUssR0FBRzs7Q0FFaEMsUUFBUSxLQUFLLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxHQUFHLE9BQU87O0NBRWxHLFFBQVEsU0FBUyxLQUFLLENBQUMsT0FBTzs7Q0FFOUIsUUFBUSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtDQUMxQixZQUFZLEtBQUssR0FBRyxJQUFJLENBQUM7Q0FDekIsWUFBWSxNQUFNOztDQUVsQixRQUFRLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO0NBQzlCLFlBQVksU0FBUyxHQUFHLElBQUksQ0FBQztDQUM3QixZQUFZLE1BQU07O0NBRWxCLFFBQVEsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Q0FDNUIsWUFBWSxPQUFPLEdBQUcsSUFBSSxDQUFDO0NBQzNCLFlBQVksTUFBTTs7Q0FFbEIsUUFBUSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSztDQUM3QixZQUFZLFFBQVEsR0FBRyxJQUFJLENBQUM7Q0FDNUIsWUFBWSxNQUFNOztDQUVsQixTQUFTOztDQUVULFFBQVEsSUFBSSxLQUFLLElBQUksU0FBUyxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7O0NBRXZELFlBQVksVUFBVSxHQUFHLElBQUksQ0FBQzs7Q0FFOUIsWUFBWSxJQUFJLEtBQUssRUFBRSxVQUFVLEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztDQUN0RixZQUFZLElBQUksU0FBUyxFQUFFLFVBQVUsR0FBRyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztDQUN4RixZQUFZLElBQUksT0FBTyxFQUFFLFlBQVksR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO0NBQzFGLFlBQVksSUFBSSxRQUFRLEVBQUUsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztDQUV6RixTQUFTOztDQUVULEtBQUs7O0NBRUwsSUFBSSxTQUFTLFVBQVUsRUFBRSxLQUFLLEdBQUc7O0NBRWpDLFFBQVEsVUFBVSxHQUFHLEtBQUssQ0FBQzs7Q0FFM0IsUUFBUSxZQUFZLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQzs7Q0FFdEMsUUFBUSxLQUFLLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxHQUFHLE9BQU87O0NBRTlDLFFBQVEsU0FBUyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07O0NBRXJDLFFBQVEsS0FBSyxDQUFDOztDQUVkLFlBQVksS0FBSyxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksR0FBRyxPQUFPOztDQUVsRCxZQUFZLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDOztDQUV2QyxZQUFZLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUNsRixZQUFZLE1BQU07O0NBRWxCLFFBQVEsS0FBSyxDQUFDOztDQUVkLFlBQVksS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksR0FBRyxPQUFPOztDQUVoRCxZQUFZLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOztDQUV0QyxZQUFZLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0NBQ3pFLFlBQVksSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDekUsWUFBWSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDOztDQUUxRCxZQUFZLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDOztDQUUxQyxZQUFZLE1BQU07O0NBRWxCLFFBQVEsS0FBSyxDQUFDOztDQUVkLFlBQVksS0FBSyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksR0FBRyxPQUFPOztDQUUvQyxZQUFZLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDOztDQUVwQyxZQUFZLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUMvRSxZQUFZLE1BQU07O0NBRWxCLFFBQVE7O0NBRVIsWUFBWSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7Q0FFL0IsU0FBUzs7Q0FFVCxRQUFRLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQzs7Q0FFdEUsS0FBSzs7Q0FFTCxJQUFJLFNBQVMsU0FBUyxFQUFFLEtBQUssR0FBRzs7Q0FFaEMsUUFBUSxLQUFLLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxHQUFHLE9BQU87O0NBRTlDLFFBQVEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0NBQy9CLFFBQVEsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztDQUVoQyxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7O0NBRS9GLFFBQVEsU0FBUyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07O0NBRXJDLFFBQVEsS0FBSyxDQUFDOztDQUVkLFlBQVksS0FBSyxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksR0FBRyxPQUFPO0NBQ2xELFlBQVksS0FBSyxLQUFLLEtBQUssS0FBSyxDQUFDLFlBQVksR0FBRyxPQUFPOztDQUV2RCxZQUFZLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUNoRixZQUFZLFdBQVcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDOztDQUU3RDtDQUNBLFlBQVksS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0NBQ3RHO0NBQ0EsWUFBWSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7O0NBRXJHLFlBQVksV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7Q0FFMUMsWUFBWSxJQUFJLGFBQWEsRUFBRTtDQUMvQixnQkFBZ0IsWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7Q0FDOUUsZ0JBQWdCLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO0NBQzVFLGFBQWE7O0NBRWIsWUFBWSxhQUFhLEdBQUc7Q0FDNUIsZ0JBQWdCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUs7Q0FDL0MsZ0JBQWdCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUs7Q0FDL0MsYUFBYSxDQUFDOztDQUVkLFlBQVksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQzNCLFlBQVksTUFBTTs7Q0FFbEIsUUFBUSxLQUFLLENBQUM7O0NBRWQsWUFBWSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxHQUFHLE9BQU87Q0FDaEQsWUFBWSxLQUFLLEtBQUssS0FBSyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU87O0NBRXRELFlBQVksSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDekUsWUFBWSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztDQUN6RSxZQUFZLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7O0NBRTFELFlBQVksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUM7Q0FDeEMsWUFBWSxVQUFVLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQzs7Q0FFMUQsWUFBWSxLQUFLLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHOztDQUVwQyxnQkFBZ0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTTtDQUNwRSxzQkFBc0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUMxQyxzQkFBc0IsS0FBSyxDQUFDLE1BQU0sQ0FBQztDQUNuQyxnQkFBZ0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOztDQUV0RCxhQUFhLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRzs7Q0FFM0MsZ0JBQWdCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07Q0FDcEUsc0JBQXNCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDMUMsc0JBQXNCLEtBQUssQ0FBQyxNQUFNLENBQUM7Q0FDbkMsZ0JBQWdCLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzs7Q0FFdEQsYUFBYTs7Q0FFYixZQUFZLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7O0NBRXhDLFlBQVksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQzNCLFlBQVksS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQztDQUMvQyxZQUFZLE1BQU07O0NBRWxCLFFBQVEsS0FBSyxDQUFDOztDQUVkLFlBQVksS0FBSyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksR0FBRyxPQUFPO0NBQy9DLFlBQVksS0FBSyxLQUFLLEtBQUssS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPOztDQUVwRCxZQUFZLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUM3RSxZQUFZLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDOztDQUVwRCxZQUFZLEtBQUssQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7O0NBRWhELFlBQVksUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Q0FFcEMsWUFBWSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Q0FDM0IsWUFBWSxNQUFNOztDQUVsQixRQUFROztDQUVSLFlBQVksS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O0NBRS9CLFNBQVM7O0NBRVQsS0FBSzs7Q0FFTCxJQUFJLFNBQVMsUUFBUSxnQkFBZ0I7O0NBRXJDLFFBQVEsVUFBVSxHQUFHLElBQUksQ0FBQzs7Q0FFMUIsUUFBUSxhQUFhLEdBQUcsU0FBUyxDQUFDOztDQUVsQyxRQUFRLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTzs7Q0FFOUMsUUFBUSxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDO0NBQ3hDLFFBQVEsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O0NBRTNCLEtBQUs7O0NBRUwsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVc7O0NBRTlCLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUM7Q0FDeEUsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsQ0FBQztDQUMxRSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUM7O0NBRTlFLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLENBQUM7Q0FDeEUsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQztDQUNwRSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDOztDQUV0RSxRQUFRLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7Q0FDdkQsUUFBUSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDOztDQUUzRCxLQUFLLENBQUM7O0NBRU47Q0FDQSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0NBQ3JGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Q0FDdkYsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOztDQUUzRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0NBQ3JGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Q0FDakYsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzs7Q0FFbkYsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0NBQ3BFLElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzs7Q0FFeEU7Q0FDQSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Q0FFbEIsQ0FBQyxBQUNEO0NBQ0EsYUFBYSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUU1QixxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsRUFBRTs7Q0FFM0YsSUFBSSxXQUFXLEVBQUUsYUFBYTs7Q0FFOUIsQ0FBQyxFQUFFLENBQUM7O0NDMTFCSjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLFNBQVMseUJBQXlCLEdBQUcsTUFBTSxFQUFFLFVBQVUsR0FBRzs7Q0FFMUQsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Q0FDckIsSUFBSSxJQUFJLFdBQVcsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Q0FFekMsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7Q0FDakIsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7Q0FDakIsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Q0FDbEIsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7O0NBRWxCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDMUMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsVUFBVSxLQUFLLFNBQVMsS0FBSyxVQUFVLEdBQUcsUUFBUSxDQUFDOztDQUUzRSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztDQUV4QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7Q0FDaEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDOztDQUUvQixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0NBQ25CLElBQUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzs7O0NBRzlCLElBQUksSUFBSSw4QkFBOEIsR0FBRyxVQUFVLEtBQUssR0FBRzs7Q0FFM0QsUUFBUSxLQUFLLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDOztDQUV4QyxLQUFLLENBQUM7O0NBRU4sSUFBSSxJQUFJLDhCQUE4QixHQUFHLFdBQVc7O0NBRXBELFFBQVEsS0FBSyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDOztDQUUxRCxLQUFLLENBQUM7O0NBRU4sSUFBSSxJQUFJLGlCQUFpQixHQUFHLFVBQVUsS0FBSyxFQUFFOztDQUU3QyxRQUFRLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztDQUMvQixRQUFRLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7Q0FFaEMsUUFBUSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDekMsUUFBUSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7O0NBRXpDLEtBQUssQ0FBQzs7Q0FFTixJQUFJLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxLQUFLLEVBQUU7O0NBRTVDLFFBQVEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0NBQy9CLFFBQVEsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztDQUVoQyxRQUFRLElBQUksSUFBSXlCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7Q0FDaEYsUUFBUSxJQUFJLElBQUlBLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7O0NBRWhGLFFBQVEsS0FBSyxDQUFDLHNCQUFzQixFQUFFLElBQUksRUFBRSxDQUFDOztDQUU3QyxRQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztDQUN6QyxRQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs7Q0FFekMsS0FBSyxDQUFDOztDQUVOOztDQUVBLElBQUksSUFBSSxtQkFBbUIsR0FBRyxVQUFVLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEdBQUc7O0NBRWpGLFFBQVEsSUFBSSxHQUFHLEdBQUcsSUFBSWYsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7O0NBRS9DLFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSW1CLFdBQVcsRUFBRSxDQUFDOztDQUV0QyxRQUFRLElBQUksRUFBRSxHQUFHLElBQUlOLGdCQUFnQixFQUFFLENBQUM7O0NBRXhDLFFBQVEsSUFBSSxFQUFFLEdBQUcsSUFBSUEsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDOztDQUVwRixRQUFRLElBQUksYUFBYSxDQUFDO0NBQzFCLFFBQVEsSUFBSSxRQUFRLEdBQUcsSUFBSUEsZ0JBQWdCLEVBQUUsQ0FBQztDQUM5QyxRQUFRLElBQUksUUFBUSxHQUFHLElBQUlBLGdCQUFnQixFQUFFLENBQUM7O0NBRTlDLFFBQVEsS0FBSyxLQUFLLENBQUMsaUJBQWlCLElBQUksQ0FBQyxHQUFHOztDQUU1QyxZQUFZLGFBQWEsR0FBRyxJQUFJYixhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN6RCxZQUFZLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Q0FFOUQsU0FBUyxNQUFNLEtBQUssS0FBSyxDQUFDLGlCQUFpQixJQUFJLEdBQUcsR0FBRzs7Q0FFckQsWUFBWSxhQUFhLEdBQUcsSUFBSUEsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDekQsWUFBWSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDOztDQUU3RCxTQUFTLE1BQU0sS0FBSyxLQUFLLENBQUMsaUJBQWlCLElBQUksRUFBRSxHQUFHOztDQUVwRCxZQUFZLGFBQWEsR0FBRyxJQUFJQSxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN6RCxZQUFZLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7O0NBRTdELFNBQVMsTUFBTSxLQUFLLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLEVBQUUsRUFBRTs7Q0FFckQsWUFBWSxhQUFhLEdBQUcsSUFBSUEsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDekQsWUFBWSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7O0NBRTlELFNBQVM7O0NBRVQsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO0NBQ2hDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7Q0FFaEMsUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7O0NBRWpELFFBQVEsVUFBVSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7Q0FFekMsUUFBUSxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDOztDQUVsQyxRQUFRLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUM7O0NBRXBFLEtBQUssQ0FBQzs7Q0FFTixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVzs7Q0FFOUIsUUFBUSw4QkFBOEIsRUFBRSxDQUFDOztDQUV6QyxRQUFRLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSw4QkFBOEIsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO0NBQzFHLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLDhCQUE4QixFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Q0FDMUcsUUFBUSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7Q0FFcEcsUUFBUSxLQUFLLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0NBQ2pHLFFBQVEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzs7Q0FFL0YsUUFBUSxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7Q0FFN0IsS0FBSyxDQUFDOztDQUVOLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXOztDQUVqQyxRQUFRLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSw4QkFBOEIsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNqRyxRQUFRLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSw4QkFBOEIsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNqRyxRQUFRLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7Q0FFM0YsUUFBUSxLQUFLLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUN2RixRQUFRLEtBQUssQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDOztDQUVyRixRQUFRLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOztDQUU5QixLQUFLLENBQUM7O0NBRU4sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsWUFBWSxHQUFHOztDQUUzQyxRQUFRLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTzs7Q0FFOUMsUUFBUSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHZSxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0NBQ3RJLFFBQVEsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBR0EsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzFHLFFBQVEsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBR0EsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzdHLFFBQVEsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixHQUFHQSxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Q0FFbEcsUUFBUSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztDQUNuRixRQUFRLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztDQUU1QixRQUFRLEtBQUssWUFBWSxLQUFLLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRTs7Q0FFNUUsS0FBSyxDQUFDOztDQUVOLElBQUksSUFBSSxDQUFDLHNCQUFzQixHQUFHLFVBQVUsS0FBSyxHQUFHOztDQUVwRCxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Q0FDdEMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O0NBRXRCLEtBQUssQ0FBQzs7Q0FFTixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVzs7Q0FFOUIsUUFBUSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O0NBRTFCLEtBQUssQ0FBQzs7Q0FFTixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Q0FFbkIsQ0FBQyxBQUNEO0NBQ0EseUJBQXlCLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRXpCLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxFQUFFOztDQUV0RyxJQUFJLFdBQVcsRUFBRSx5QkFBeUI7O0NBRTFDLENBQUMsRUFBRSxDQUFDOztDQ3RMSjtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxTQUFTLGVBQWUsR0FBRyxRQUFRLEdBQUc7O0NBRXRDLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSTRCLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDOztDQUV2RSxJQUFJLElBQUksTUFBTSxHQUFHLElBQUlFLFdBQVcsRUFBRSxDQUFDOztDQUVuQyxJQUFJLElBQUksT0FBTyxHQUFHLElBQUlDLGtCQUFrQixFQUFFLENBQUM7Q0FDM0MsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzs7Q0FFekIsSUFBSSxJQUFJLE9BQU8sR0FBRyxFQUFFLFNBQVMsRUFBRTdCLGtCQUFrQixFQUFFLFNBQVMsRUFBRThCLG1CQUFtQixFQUFFLE1BQU0sRUFBRWxDLGdCQUFnQixFQUFFLENBQUM7O0NBRTlHLElBQUksSUFBSSxhQUFhLEdBQUcsSUFBSW1DLHVCQUF1QixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUM7Q0FDekUsSUFBSSxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztDQUNyQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQzs7Q0FFbEQ7Q0FDQTtDQUNBO0NBQ0E7O0NBRUEsSUFBSSxJQUFJLFVBQVUsR0FBRyxJQUFJWCxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDOztDQUV2RCxJQUFJLElBQUksUUFBUSxHQUFHLElBQUlFLHlCQUF5QixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7Q0FFNUcsSUFBSSxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7Q0FDdkQsSUFBSSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7O0NBRTNDO0NBQ0EsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0NBQzVDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzs7Q0FFdEMsSUFBSSxJQUFJLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO0NBQzlELElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQztDQUNoQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Q0FFbEQsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO0NBQ2xELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUNwQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Q0FFaEMsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJRixhQUFhLEVBQUUsQ0FBQztDQUNyQyxJQUFJLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztDQUV0QyxJQUFJLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHOztDQUU5RCxRQUFRLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Q0FDM0MsUUFBUSxNQUFNLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDOztDQUUzQyxRQUFRLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7Q0FDdkMsUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQzs7Q0FFdkUsUUFBUSxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O0NBRXhDLFFBQVEsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1B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
