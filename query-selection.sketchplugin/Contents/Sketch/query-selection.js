/**
 * Select layers (adding) in Sketch from an array of layers.
 * @param {array} layers - The array of layers
*/
const selectLayers = layers =>
    layers.slice().map(layer => layer.select_byExpandingSelection(true, true));

/**
 * Unselect all layers
 * @param {object} context - Sketch Context
 */
const deselectLayers = context =>
  context.document.currentPage().deselectAllLayers();

/**
 * Return current selected layers
 * @param {object} context - Sketch Context
 * @returns {array}
 */
const selectedLayers = context =>
  context.selection.slice();

/**
 * Return true if the layer is a Shape Layer
 * @param {object} layer - Layer object
 * @returns {boolean}
 */
const isShape = layer =>
  layer.class() == "MSShapeGroup";

/**
 * Return true if the layer is a Text Layer
 * @param {object} layer - Layer object
 * @returns {boolean}
 */
const isText = layer =>
  layer.class() == "MSTextLayer";

/**
 * Return true if the layer is a Image Layer
 * @param {object} layer - Layer object
 * @returns {boolean}
 */
const isImage = layer =>
  layer.class() == "MSBitmapLayer";

/**
 * Return true if the layer is a Group Layer
 * @param {object} layer - Layer object
 * @returns {boolean}
 */
const isGroup = layer =>
  layer.class() == "MSLayerGroup";

/**
 * Filter Shape Layers
 * @param {object} context - Sketch Context
 */
function filterShapes (context) {
  deselectLayers(context);
  selectLayers(selectedLayers(context).filter(isShape));
}

/**
 * Filter Groups Layers
 * @param {object} context - Sketch Context
 */
function filterGroups (context) {
  deselectLayers(context);
  selectLayers(selectedLayers(context).filter(isGroup));
}

/**
 * Filter Image Layers
 * @param {object} context - Sketch Context
 */
function filterImages (context) {
  deselectLayers(context);
  selectLayers(selectedLayers(context).filter(isImage));
}

/**
 * Filter Text Layers
 * @param {object} context - Sketch Context
 */
function filterTexts (context) {
  deselectLayers(context);
  selectLayers(selectedLayers(context).filter(isText));
}
