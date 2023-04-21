import Welcome from "./class/components/Welcome.js";
class Index {
    getComponent() {
        return (`
               ${new Welcome().getComponent()}
            `);
    }
}
export default Index;
