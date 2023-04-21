import Welcome from "./class/components/Welcome.js";

class Index {

    getComponent(): string {
        return (
            `
               ${new Welcome().getComponent()}
            `
        )
    }
}

export default Index;