btn_add.addEventListener("click", function () {
	var comment = input_comment.value;
	var zoom = controls.target.distanceTo(controls.object.position);
	var cam_x = camera.position.x;
	var cam_y = camera.position.y;
	var cam_z = camera.position.z;
	var order = controls.object.rotation._order;
	var euler_x = controls.object.rotation._x;
	var euler_y = controls.object.rotation._y;
	var euler_z = controls.object.rotation._z;
	var quaternion_x = controls.object.quaternion._x;
	var quaternion_y = controls.object.quaternion._y;
	var quaternion_z = controls.object.quaternion._z;
	var quaternion_w = controls.object.quaternion._w;
	var position_x = controls.object.position.x;
	var position_y = controls.object.position.y;
	var position_z = controls.object.position.z;
	var scale_x = controls.object.scale.x;
	var scale_y = controls.object.scale.y;
	var scale_z = controls.object.scale.z;
	try {
		//console.log(comment + ";" + zoom + ";" + x + ";" + y + ";" + z + ";" + model + ";");
		data2.push({
			model: { id: model, name: name },
			like: 0,
			comment: comment,
			count: observation_count,
			replies: [],
			camera: { x: cam_x, y: cam_y, z: cam_z, distance: zoom },
			euler: { order: "XYZ", x: euler_x, y: euler_y, z: euler_z },
			quaternion: { x: quaternion_x, y: quaternion_y, z: quaternion_z, w: quaternion_w },
			position: { x: position_x, y: position_y, z: position_z },
			scale: { x: scale_x, y: scale_y, z: scale_z },
			label: { prompt: agent[counter3 - 1].label },
		});
		console.log(data2);
		observation_count = observation_count + 1;
	} catch {
		console.log("No model is loaded in the view");
	}
	loadComment(counter2);
});

btn_assets.addEventListener("click", function () {
	sec_leftbar.classList.toggle("d-none");
});
btn_annotation.addEventListener("click", function () {
	sec_rightbar.classList.toggle("d-none");
});
btn_controls.addEventListener("click", function () {
	tool_nav.classList.toggle("d-none");
});
btn_agent.addEventListener("click", function () {
	tool_agent.classList.toggle("d-none");
});
array_more_leftbar.forEach((item) => {
	item.addEventListener("click", (event) => {
		toggleModel(event.target.id);
	});
});
array_open_leftbar.forEach((item) => {
	item.addEventListener("click", (event) => {
		openModel(event.target.id);
	});
});
document.addEventListener("DOMContentLoaded", function () {
	loadModel(counter);
	loadComment(counter2);
	updateAgent(counter3);
});
btn_next.addEventListener("click", function () {
	counter = counter + 1;
	btn_prev.disabled = false;
	loadModel(counter);
});
btn_prev.addEventListener("click", function () {
	counter = counter - 1;
	if (counter == 0) {
		counter = 0;
		btn_prev.disabled = true;
	} else {
		btn_prev.disabled = false;
	}
	loadModel(counter);
});
btn_next2.addEventListener("click", function () {
	counter2 = counter2 + 1;
	btn_prev2.disabled = false;
	loadComment(counter2);
});
btn_prev2.addEventListener("click", function () {
	counter2 = counter2 - 1;
	if (counter2 == 0) {
		counter2 = 0;
		btn_prev2.disabled = true;
	} else {
		btn_prev2.disabled = false;
	}
	loadComment(counter2);
});
array_more_rightbar.forEach((item) => {
	item.addEventListener("click", (event) => {
		toggleComment(event.target.id);
	});
});
array_like_rightbar.forEach((item) => {
	item.addEventListener("click", (event) => {
		likeComment(event.target.id);
	});
});
array_btn_reply_rightbar.forEach((item) => {
	item.addEventListener("click", (event) => {
		toggleReply(event.target.id);
	});
});
array_btn_add_rightbar.forEach((item) => {
	item.addEventListener("click", (event) => {
		addReply(event.target.id);
	});
});
btn_nav_left.addEventListener("mousedown", function () {
	//console.log("mouse down");
	btn_nav_left.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.x /= 0.9;
});
btn_nav_left.addEventListener("mouseup", function () {
	//console.log("mouse up");
	btn_nav_left.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	//console.log(zoom, x, y, z);
});
btn_nav_up.addEventListener("mousedown", function () {
	//console.log("mouse down");
	btn_nav_up.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.y *= 0.9;
});
btn_nav_up.addEventListener("mouseup", function () {
	//console.log("mouse up");
	btn_nav_up.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	//console.log(zoom, x, y, z);
});
btn_nav_right.addEventListener("mousedown", function () {
	//console.log("mouse down");
	btn_nav_right.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.x *= 0.9;
});
btn_nav_right.addEventListener("mouseup", function () {
	//console.log("mouse up");
	btn_nav_right.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	//console.log(zoom, x, y, z);
});
btn_nav_down.addEventListener("mousedown", function () {
	//console.log("mouse down");
	btn_nav_down.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.y /= 0.9;
});
btn_nav_down.addEventListener("mouseup", function () {
	//console.log("mouse up");
	btn_nav_down.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	//console.log(zoom, x, y, z);
});
btn_nav_in.addEventListener("mousedown", function () {
	//console.log("mouse down");
	btn_nav_in.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.x *= 0.9;
	camera.position.y *= 0.9;
	camera.position.z *= 0.9;
});
btn_nav_in.addEventListener("mouseup", function () {
	//console.log("mouse up");
	btn_nav_in.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	//console.log(zoom, x, y, z);
});
btn_nav_out.addEventListener("mousedown", function () {
	//console.log("mouse down");
	btn_nav_out.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.x /= 0.9;
	camera.position.y /= 0.9;
	camera.position.z /= 0.9;
});
btn_nav_out.addEventListener("mouseup", function () {
	//console.log("mouse up");
	btn_nav_out.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	//console.log(zoom, x, y, z);
});
