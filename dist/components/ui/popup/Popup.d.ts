import { PopupOptions } from '../../../index';
/**
 * table-flow-graph popup
 */
export default class Popup {
    targetElement: HTMLElement;
    options: PopupOptions;
    element: HTMLElement;
    areaElement: HTMLElement;
    boxElement: HTMLElement;
    arrowElement: HTMLElement;
    disabled: boolean;
    rendered: boolean;
    timeoutId: number | null;
    constructor(targetElement: HTMLElement, options: PopupOptions);
    render(): void;
    updatePosition(): void;
    dismiss(): void;
    mouseEnter(): void;
    mouseLeave(): void;
}
