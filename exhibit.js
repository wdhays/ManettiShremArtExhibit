var all_image_elements = ['wind', 'pancake', 'cake', 'machines', 'boston', 'bananas'];

function select_image(self_id) {
    var self_elem = document.getElementById(self_id);
    
    // Set self to be selected
    self_elem.classList.add("selected");
    
    // Set the rest to be unselected
    for (i = 0; i < all_image_elements.length; i++) { 
        if(self_id != all_image_elements[i]){
            var elem = document.getElementById(all_image_elements[i]);
            
            elem.classList.remove("selected");
        }
    }
}
