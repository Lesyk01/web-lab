const fileSystem = [{"folder1": ["file1.txt", {"inner_folder": []}]}, {"folder2": ['file2.txt']}]

function toggleFolder(folderId) {
    let folderContent = document.getElementById(folderId);
    let icon = document.getElementById('icon-' + folderId);

    if (folderContent.style.display === "none" || folderContent.style.display === "") {
        folderContent.style.display = "block";
        icon.src = "images.png"; 
    } else {
        folderContent.style.display = "none";
        icon.src = "papka.png"; 
    }
}

