// import express from "express"
// //import { searchWithAi } from "../controllers/aiController.js"
// import { searchWithAi} from "../controllers/aiController.js";

// let aiRouter = express.Router()

// aiRouter.post("/search",searchWithAi)
// //router.post("/career-coach", careerCoach); 

// export default aiRouter





// backend/routes/aiRoute.js
import express from "express";
import { searchWithAi } from "../controllers/aiController.js";

const router = express.Router();

// simple "AI" search = sirf DB search
router.post("/search", searchWithAi);

export default router;

