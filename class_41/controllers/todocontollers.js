let todo = [];
const posttodo = (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status({ status: 400, msg: "please all filed are required ! " })
    }

    console.log("req.bod===>", req.body);

    todo.push(req.body);

}

const gettodo = (req, res) => {
    res.send({ status: 200, msg: "data get", data: todo })
}

const puttodo = (req, res) => {
    const id = req.params.id;
    console.log(id);

    if (!todo[id]) {
        return res.send({ status: 400, msg: "data Not found !" })

    }
    const data = req.body

    todo[id] = data

    res.send({ status: 200, msg: "data updated !", data })
}

const patchtodo = (req, res) => {
    const id = req.params.id
    console.log(id);

    const title = req.body.title

    todo[id].title = title;

    res.send({ status: 200, msg: "data updated !", })
}

const deletetodo = (req, res) => {
    const id = req.params.id
    if (!todo[id]) {
        return res.send({ status: 400, msg: "data not found " })
    }
    console.log("id===>", id);
    todo.splice(id, 1);
    res.send({ status: 200, ms: "data delete ", data: todo })
}

export { posttodo, gettodo, puttodo, patchtodo, deletetodo } 