var likeStatus = '';
async function like(event) {
    event.preventDefault();

    if (!likeStatus) {
        console.log('like btn');
        document.querySelector('.likeBtn').classList.add('btn-success');
        document.querySelector('.likeBtn').classList.remove('btn-primary');
        likeStatus = true;
        const response = await fetch('/api/topics/upvote', {
            method: 'put',
            body: JSON.stringify({
                post_id: 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
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