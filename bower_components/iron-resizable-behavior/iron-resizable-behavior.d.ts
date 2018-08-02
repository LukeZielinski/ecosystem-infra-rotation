/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-resizable-behavior.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />

declare namespace Polymer {

  /**
   * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
   * coordinate the flow of resize events between "resizers" (elements that
   * control the size or hidden state of their children) and "resizables" (elements
   * that need to be notified when they are resized or un-hidden by their parents
   * in order to take action on their new measurements).
   *
   * Elements that perform measurement should add the `IronResizableBehavior`
   * behavior to their element definition and listen for the `iron-resize` event on
   * themselves. This event will be fired when they become showing after having
   * been hidden, when they are resized explicitly by another resizable, or when
   * the window has been resized.
   *
   * Note, the `iron-resize` event is non-bubbling.
   */
  interface IronResizableBehavior {

    /**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */
    _parentResizable: object|null|undefined;

    /**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */
    _notifyingDescendant: boolean|null|undefined;
    created(): void;
    attached(): void;
    detached(): void;

    /**
     * Can be called to manually notify a resizable and its descendant
     * resizables of a resize change.
     */
    notifyResize(): void;

    /**
     * Used to assign the closest resizable ancestor to this resizable
     * if the ancestor detects a request for notifications.
     */
    assignParentResizable(parentResizable: any): void;

    /**
     * Used to remove a resizable descendant from the list of descendants
     * that should be notified of a resize change.
     */
    stopResizeNotificationsFor(target: any): void;

    /**
     * This method can be overridden to filter nested elements that should or
     * should not be notified by the current element. Return true if an element
     * should be notified, or false if it should not be notified.
     *
     * @param element A candidate descendant element that
     * implements `IronResizableBehavior`.
     * @returns True if the `element` should be notified of resize.
     */
    resizerShouldNotify(element: HTMLElement|null): boolean;
    _onDescendantIronResize(event: any): void;
    _fireResize(): void;
    _onIronRequestResizeNotifications(event: any): void;
    _parentResizableChanged(parentResizable: any): void;
    _notifyDescendant(descendant: any): void;
    _requestResizeNotifications(): void;
    _findParent(): void;
  }

  const IronResizableBehavior: object;
}
