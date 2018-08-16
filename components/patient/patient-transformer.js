//transform response

class PatientTransformer {

    create(data) {
        var output = []
        data.forEach(dt => {
            output.push(dt)
        })
        return output
    }

}

module.exports = new PatientTransformer()
