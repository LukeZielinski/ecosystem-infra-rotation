/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/legacy/templatizer-behavior.html
 */

/// <reference path="../utils/templatize.d.ts" />

declare namespace Polymer {

  /**
   * The `Polymer.Templatizer` behavior adds methods to generate instances of
   * templates that are each managed by an anonymous `Polymer.PropertyEffects`
   * instance where data-bindings in the stamped template content are bound to
   * accessors on itself.
   *
   * This behavior is provided in Polymer 2.x as a hybrid-element convenience
   * only.  For non-hybrid usage, the `Polymer.Templatize` library
   * should be used instead.
   *
   * Example:
   *
   *     // Get a template from somewhere, e.g. light DOM
   *     let template = this.querySelector('template');
   *     // Prepare the template
   *     this.templatize(template);
   *     // Instance the template with an initial data model
   *     let instance = this.stamp({myProp: 'initial'});
   *     // Insert the instance's DOM somewhere, e.g. light DOM
   *     Polymer.dom(this).appendChild(instance.root);
   *     // Changing a property on the instance will propagate to bindings
   *     // in the template
   *     instance.myProp = 'new value';
   *
   * Users of `Templatizer` may need to implement the following abstract
   * API's to determine how properties and paths from the host should be
   * forwarded into to instances:
   *
   *     _forwardHostPropV2: function(prop, value)
   *
   * Likewise, users may implement these additional abstract API's to determine
   * how instance-specific properties that change on the instance should be
   * forwarded out to the host, if necessary.
   *
   *     _notifyInstancePropV2: function(inst, prop, value)
   *
   * In order to determine which properties are instance-specific and require
   * custom notification via `_notifyInstanceProp`, define an `_instanceProps`
   * object containing keys for each instance prop, for example:
   *
   *     _instanceProps: {
   *       item: true,
   *       index: true
   *     }
   *
   * Any properties used in the template that are not defined in _instanceProp
   * will be forwarded out to the Templatize `owner` automatically.
   *
   * Users may also implement the following abstract function to show or
   * hide any DOM generated using `stamp`:
   *
   *     _showHideChildren: function(shouldHide)
   *
   * Note that some callbacks are suffixed with `V2` in the Polymer 2.x behavior
   * as the implementations will need to differ from the callbacks required
   * by the 1.x Templatizer API due to changes in the `TemplateInstance` API
   * between versions 1.x and 2.x.
   */
  interface Templatizer {

    /**
     * Generates an anonymous `TemplateInstance` class (stored as `this.ctor`)
     * for the provided template.  This method should be called once per
     * template to prepare an element for stamping the template, followed
     * by `stamp` to create new instances of the template.
     *
     * @param template Template to prepare
     * @param mutableData When `true`, the generated class will skip
     *   strict dirty-checking for objects and arrays (always consider them to
     *   be "dirty"). Defaults to false.
     */
    templatize(template: HTMLTemplateElement, mutableData?: boolean): void;

    /**
     * Creates an instance of the template prepared by `templatize`.  The object
     * returned is an instance of the anonymous class generated by `templatize`
     * whose `root` property is a document fragment containing newly cloned
     * template content, and which has property accessors corresponding to
     * properties referenced in template bindings.
     *
     * @param model Object containing initial property values to
     *   populate into the template bindings.
     * @returns Returns the created instance of
     * the template prepared by `templatize`.
     */
    stamp(model?: object|null): TemplateInstanceBase|null;

    /**
     * Returns the template "model" (`TemplateInstance`) associated with
     * a given element, which serves as the binding scope for the template
     * instance the element is contained in.  A template model should be used
     * to manipulate data associated with this template instance.
     *
     * @param el Element for which to return a template model.
     * @returns Model representing the binding scope for
     *   the element.
     */
    modelForElement(el: HTMLElement|null): TemplateInstanceBase|null;
  }

  const Templatizer: object;
}
