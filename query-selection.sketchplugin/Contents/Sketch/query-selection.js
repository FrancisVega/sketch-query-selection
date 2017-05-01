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
 * Return true if the layer is a Artboard
 * @param {object} layer - Layer object
 * @returns {boolean}
 */
const isArtboard = layer =>
  layer.class() == "MSArtboardGroup";

/**
 * Filter Shape Layers
 * @param {object} context - Sketch Context
 */
function filterShapes (context) {
  try {
    const sel = context.selection;
    const firstLayer = sel[0];
    if (isArtboard(firstLayer)) {
      const all = firstLayer.children();
      const shapes = all.slice().filter(isShape);
      selectLayers(shapes);
    } else {
      deselectLayers(context);
      selectLayers(selectedLayers(context).filter(isShape));
    }
  } catch (e) {
    log(e);
  }
}

/**
 * Filter Groups Layers
 * @param {object} context - Sketch Context
 */
function filterGroups (context) {
  try {
    const sel = context.selection;
    const firstLayer = sel[0];
    if (isArtboard(firstLayer)) {
      const all = firstLayer.children();
      const groups = all.slice().filter(isGroup);
      selectLayers(groups);
    } else {
      deselectLayers(context);
      selectLayers(selectedLayers(context).filter(isGroup));
    }
  } catch (e) {
    log(e);
  }
}

/**
 * Filter Image Layers
 * @param {object} context - Sketch Context
 */
function filterImages (context) {
  try {
    const sel = context.selection;
    const firstLayer = sel[0];
    if (isArtboard(firstLayer)) {
      const all = firstLayer.children();
      const imagelayers = all.slice().filter(isImage);
      selectLayers(imagelayers);
    } else {
      deselectLayers(context);
      selectLayers(selectedLayers(context).filter(isImage));
    }
  } catch (e) {
    log(e);
  }
}

/**
 * Filter Text Layers
 * @param {object} context - Sketch Context
 */
function filterTexts (context) {
  try {
    const sel = context.selection;
    const firstLayer = sel[0];
    if (isArtboard(firstLayer)) {
      const all = firstLayer.children();
      const textLayers = all.slice().filter(isText);
      selectLayers(textLayers);
    } else {
      deselectLayers(context);
      selectLayers(selectedLayers(context).filter(isText));
    }
  } catch (e) {
    log(e);
  }
}
