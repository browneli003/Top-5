var likeStatus = '';
function like(event) {
    if (!likeStatus) {
        console.log('like btn');
        document.querySelector('.likeBtn').classList.add('btn-success');
        document.querySelector('.likeBtn').classList.remove('btn-primary');
        likeStatus = true;
        return;
    }
    if (likeStatus) {
        console.log('unlike');
        document.querySelector('.likeBtn').classList.add('btn-primary');
        document.querySelector('.likeBtn').classList.remove('btn-success');
        likeStatus = false;
        return;
    }
};


document.querySelector('.likeBtn').addEventListener('click', like);