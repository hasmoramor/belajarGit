    inputChange(inputValue) {
        console.log('Input Value: ', inputValue)
        this.setState({ inputValue })
    }
    submitDoggo() {
        if (this.state.inputValue.match(/^\s*$/)) {
            return
        }
        const Doggo = {
            title: this.state.inputValue,
            DoggoIndex,
            complete: false
        }
        DoggoIndex++

        const Doggos = [...this.state.Doggos, Doggo]
        this.setState({ Doggos, inputValue: '' }, () => {
            console.log('State : ', this.state)
        })
    }
    deleteDoggo(DoggoIndex) {
        let { Doggos } = this.state
        Doggos = Doggos.filter((Doggo) => Doggo.DoggoIndex !== DoggoIndex)
        this.setState({ Doggos })
    }
    toggleComplete(DoggoIndex) {
        let Doggos = this.state.Doggos
        Doggos.forEach((Doggo) => {
            if (Doggo.DoggoIndex === DoggoIndex) {
                Doggo.complete = !Doggo.complete
            }
        })
        this.setState({ Doggos })
    }
    setType(type) {
        this.setState({ type })
    }