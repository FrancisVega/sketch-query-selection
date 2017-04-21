// Functions
const selectLayers = layers => layers.slice().map(layer => layer.select_byExpandingSelection(true, true));
const deselectLayers = context => context.document.currentPage().deselectAllLayers();
const selectedLayers = context => context.selection.slice();
const isShape = layer => layer.class() == "MSShapeGroup";
const isText = layer => layer.class() == "MSTextLayer";
const isImage = layer => layer.class() == "MSBitmapLayer";
const isGroup = layer => layer.class() == "MSLayerGroup";

// Shapes
function filterShapes (context) {
  deselectLayers(context);
  selectLayers(selectedLayers(context).filter(isShape));
}

// Groups
function filterGroups (context) {
  deselectLayers(context);
  selectLayers(selectedLayers(context).filter(isGroup));
}

// Images
function filterImages (context) {
  deselectLayers(context);
  selectLayers(selectedLayers(context).filter(isImage));
}

// Text
function filterTexts (context) {
  deselectLayers(context);
  selectLayers(selectedLayers(context).filter(isText));
}
