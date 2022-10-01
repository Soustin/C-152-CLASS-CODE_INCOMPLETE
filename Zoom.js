AFRAME.registerComponent("zoomOut", {
    schema:{
        moveZ:{type:"number", default:15}
    },
    tick:function(){
        this.data.moveZ= this.data.moveZ+3
        var pos = this.el.getAttribute("position")
        pos.z = this.data.moveZ
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    }
})