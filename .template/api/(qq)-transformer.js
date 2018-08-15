//transform response

class (QQ)Transformer {

    create(data) {
        var output = []
        data.forEach(dt => {
            output.push(dt)
        })
        return output
    }

}

module.exports = new (QQ)Transformer()