// Constants
const doc = context.document;

// Functions
const deselectLayers = () => context.document.currentPage().deselectAllLayers();
const selectLayers = layers => layers.slice().map(layer => layer.select_byExpandingSelection(true, true));
const isShape = layer => layer.class() == "MSShapeGroup";
const isText = layer => layer.class() == "MSTextLayer";
const isImage = layer => layer.class() == "MSBitmapLayer";
const isGroup = layer => layer.class() == "MSLayerGroup";

// Query
const selection = context.selection.slice();
const query = [doc askForUserInput:'(S)hapes - (G)roups - (I)mages - (T)exts' initialValue:''].toLowerCase();

if (query) {

  // First deselect all
  deselectLayers();

  // Text
  switch (query) {

      // Shapes
    case 's': {
      selectLayers(selection.filter(isShape));
      break;
    }

      // Groups
    case 'g': {
      selectLayers(selection.filter(isGroup));
      break;
    }

      // Images
    case 'i': {
      selectLayers(selection.filter(isImage));
      break;
    }

      // Text
    case 't': {
      selectLayers(selection.filter(isText));
      break;
    }

      // No query
    default: {
      selectLayers(selection);
      break;
    }

  }

}
