import { Response, Request, Router } from "express"
import { getExample, getNames } from "../handlers/example.handler"
import { NameDocument } from "../../models/name.model"

const router: Router = Router()

router.get('', async (req: Request, res: Response) => {
    let example: NameDocument

    try {
        example = await getExample()
    } catch (e) {
        example = e
    }

    console.log(example)

    res.status(200).json({
        title: example
    })
})

router.get('/names', async (req: Request, res: Response) => {
    let example;
    try {
        example = await getNames()
    } catch (e) {
        example = e
    }

    console.log(example)

    res.status(200).json({
        names: example
    })
})

module.exports = router