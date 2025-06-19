import { useEffect, useRef } from "react";
import { Application, Ticker } from "pixi.js";
import { Live2DModel } from "pixi-live2d-display-lipsyncpatch/cubism4";
declare global {
  interface Window {
    model?: any;
    mouthInterval?: any;
  }
}

export default function Live2DViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let app: Application | null = null;
    let destroyed = false;

    (async () => {
      app = new Application({ width: 800, height: 600, backgroundAlpha: 0 });
      if (containerRef.current) {
        containerRef.current.appendChild(app.view as any);
      }

      try {
        // Register the ticker for Live2DModel (important for animation)
        if (Live2DModel.registerTicker) {
          Live2DModel.registerTicker(Ticker);
        }

        const model = await Live2DModel.from(
          "/live2d/kei_vowels_pro/runtime/kei_vowels_pro.model3.json"
        );
        model.scale.set(0.3);
        model.x = 400;
        model.y = 300;
        if (!destroyed && app && app.stage) {
          app.stage.addChild(model as any);
          window.model = model;

          // Log all available motion groups and motions
          const settings = model.internalModel?.settings;
          const motions = settings && (settings as any).motions;
          if (motions && typeof motions === "object") {
            const groups = Object.keys(motions);
            console.log("Available motion groups:", groups);
            groups.forEach((group) => {
              console.log(`Motions in group "${group}":`, motions[group]);
            });

            // Try to play a motion from each group
            for (const group of groups) {
              if (model.motion && motions[group]?.length > 0) {
                console.log(`Trying to play motion from group "${group}"`);
                model.motion(group, 0, 2);
                break; // Try the first available group
              }
            }
          } else {
            // Fallback: try the empty string group
            if (typeof model.motion === "function") {
              model.motion("", 0, 2);
            }
          }
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Failed to load Live2D model:", err);
      }
    })();

    return () => {
      destroyed = true;
      if (app) {
        app.destroy(true, { children: true });
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      window.model = undefined;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: 800, height: 600, background: "transparent" }}
    />
  );
}
