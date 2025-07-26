// Simple door disappearing functionality
function openDoor() {
  const door = document.getElementById("office-door");
  const roomContent = document.getElementById("office-room-content");

  // Make the door disappear and show content
  door.classList.add("hidden");
  roomContent.classList.add("visible");
}

function showDoor() {
  const door = document.getElementById("office-door");
  const roomContent = document.getElementById("office-room-content");

  // Hide content and show the door again
  roomContent.classList.remove("visible");
  door.classList.remove("hidden");
}
