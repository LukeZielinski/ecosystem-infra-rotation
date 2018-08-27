/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/mixins/strict-binding-parser.html
 */

/// <reference path="../utils/boot.d.ts" />
/// <reference path="../utils/path.d.ts" />
/// <reference path="../utils/mixin.d.ts" />
/// <reference path="property-effects.d.ts" />

declare namespace Polymer {


  /**
   * Mixin that parses binding expressions and generates corresponding metadata.
   * The implementation is different than in `property-effects`, as it uses a
   * state machine instead of a regex. As such, this implementation is able to
   * handle more cases, with the potential performance hit.
   */
  function StrictBindingParser<T extends new (...args: any[]) => {}>(base: T): T & StrictBindingParserConstructor & Polymer.PropertyEffectsConstructor & Polymer.TemplateStampConstructor & Polymer.PropertyAccessorsConstructor & Polymer.PropertiesChangedConstructor;

  interface StrictBindingParserConstructor {
    new(...args: any[]): StrictBindingParser;

    /**
     * Called to parse text in a template (either attribute values or
     * textContent) into binding metadata.
     *
     * Any overrides of this method should return an array of binding part
     * metadata  representing one or more bindings found in the provided text
     * and any "literal" text in between.  Any non-literal parts will be passed
     * to `_evaluateBinding` when any dependencies change.  The only required
     * fields of each "part" in the returned array are as follows:
     *
     * - `dependencies` - Array containing trigger metadata for each property
     *   that should trigger the binding to update
     * - `literal` - String containing text if the part represents a literal;
     *   in this case no `dependencies` are needed
     *
     * Additional metadata for use by `_evaluateBinding` may be provided in
     * each part object as needed.
     *
     * The default implementation handles the following types of bindings
     * (one or more may be intermixed with literal strings):
     * - Property binding: `[[prop]]`
     * - Path binding: `[[object.prop]]`
     * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
     * - Two-way property or path bindings (supports negation):
     *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
     * - Inline computed method (supports negation):
     *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
     *
     * @param text Text to parse from attribute or textContent
     * @param templateInfo Current template metadata
     * @returns Array of binding part metadata
     */
    _parseBindings(text: string, templateInfo: object|null): BindingPart[]|null;
  }

  interface StrictBindingParser extends Polymer.PropertyEffects, Polymer.TemplateStamp, Polymer.PropertyAccessors, Polymer.PropertiesChanged {
  }
}
