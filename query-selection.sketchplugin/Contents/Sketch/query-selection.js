// Functions
const selectLayers = layers => layers.slice().map(layer => layer.select_byExpandingSelection(true, true));
const deselectLayers = context => context.document.currentPage().deselectAllLayers();

const isShape = layer => layer.class() == "MSShapeGroup";
const isText = layer => layer.class() == "MSTextLayer";
const isImage = layer => layer.class() == "MSBitmapLayer";
const isGroup = layer => layer.class() == "MSLayerGroup";

// Shapes
function filterShapes (context) {
  deselectLayers(context);
  const selection = context.selection.slice();
  selectLayers(selection.filter(isShape));
}

// Groups
function filterGroups (context) {
  deselectLayers(context);
  const selection = context.selection.slice();
  selectLayers(selection.filter(isGroup));
}

// Images
function filterImages (context) {
  deselectLayers(context);
  const selection = context.selection.slice();
  selectLayers(selection.filter(isImage));
}

// Text
function filterTexts (context) {
  deselectLayers(context);
  const selection = context.selection.slice();
  selectLayers(selection.filter(isText));
}
