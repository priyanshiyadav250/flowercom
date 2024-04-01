// Function to save comment to local storage
function saveComment() {
    const comment = document.getElementById('comment').value;
    if (comment.trim() !== '') {
        let comments = localStorage.getItem('comments');
        comments = comments ? JSON.parse(comments) : [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
        displayComments();
        document.getElementById('comment').value = ''; // Clear the input field
    } else {
        alert('Please enter a valid comment!');
    }
}

// Function to display comments
function displayComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = ''; // Clear previous comments
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = comment;
        commentList.appendChild(li);
    });
}

// Display existing comments when the page loads
document.addEventListener('DOMContentLoaded', displayComments);
