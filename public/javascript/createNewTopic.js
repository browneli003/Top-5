document.getElementById("navBar").style.display = "none";

async function newTopic(event)
{
    event.preventDefault();

    const newTopic = document.querySelector('#newTopic').value.trim();
    const newItem1 = document.querySelector('#newItem1').value.trim();
    const newItem2 = document.querySelector('#newItem2').value.trim();
    const newItem3 = document.querySelector('#newItem3').value.trim();
    const newItem4 = document.querySelector('#newItem4').value.trim();
    const newItem5 = document.querySelector('#newItem5').value.trim();

    if (newTopic && newItem1 && newItem2 && newItem3 && newItem4 && newItem5)
    {
        const response = await fetch('/api/topics', {
            method: 'post',
            body: JSON.stringify({
                newTopic,
                newItem1,
                newItem2,
                newItem3,
                newItem4,
                newItem5
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok)
        {
            document.location.replace('/');
        } else
        {
            alert(response.statusText);
        }
    };
}

document.querySelector('.createNewTopic').addEventListener('submit', newTopic);