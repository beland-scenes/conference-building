import { placeDoors } from './modules/doors';
import { addVideo } from './modules/videos'
let building = new Entity();
building.addComponent(new GLTFShape("models/building.glb"));
building.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 90, 0),
  })
);
engine.addEntity(building);


addVideo()
placeDoors()