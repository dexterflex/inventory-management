async function deleteProduct(id) {

    let result = confirm("Sure you want to delete the product")
    if (result) {
        let repsonse = await fetch(`/delete/${id}`, { method: "POST" })
        if (repsonse.ok) {
            location.reload();
        }
    }
}