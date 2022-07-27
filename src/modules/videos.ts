export function addVideo() {
  // #1
  const myVideoClip = new VideoClip(
    "https://phocapblockchain.fra1.digitaloceanspaces.com/demo.mp4"
  );

  // #2
  const myVideoTexture = new VideoTexture(myVideoClip);
  myVideoTexture.loop = true;

  // #3
  const myMaterial = new Material();
  myMaterial.albedoTexture = myVideoTexture;
  myMaterial.roughness = 1;
  myMaterial.specularIntensity = 0;
  myMaterial.metallic = 0;

  // #4
  const screen = new Entity("video");
  screen.addComponent(new PlaneShape());
  screen.addComponent(
    new Transform({
      position: new Vector3(-100, 6.9, 80.3),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(16, 9, 16),
    })
  );
  screen.addComponent(myMaterial);
  screen.addComponent(
    new OnPointerDown(() => {
      if (myVideoTexture.playing) {
        myVideoTexture.pause();
      } else {
        myVideoTexture.play();
      }
    })
  );
  engine.addEntity(screen);

//   const triggerEntity = new Entity()
//     triggerEntity.addComponent(new Transform({

//     }))

//     let triggerBox = new utils.TriggerBoxShape(triggerScale, Vector3.Zero())

//     triggerEntity.addComponent(
//     new utils.TriggerComponent(
//         triggerBox, //shape
//         {
//         onCameraEnter: () => {
//             log('open door')
//             this.isPlayerIn = true
//             sceneMessageBus.emit(messageBusHandle, { open: true })
//         },
//         onCameraExit: () => {
//             log('close door')
//             this.isPlayerIn = false
//             sceneMessageBus.emit(messageBusHandle, { open: false })
//         },
//         //enableDebug: true,
//         }
//     )
//     )
//     engine.addEntity(triggerEntity)
}
