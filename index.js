const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const feed = document.getElementById('feed'); // Assuming you have a parent div for all posts

posts.forEach((post) => {
    // Create a post container
    const postContainer = document.createElement('div');
    postContainer.classList.add('post-container');

    // Avatar, Name, and Location Section
    const nameSection = document.createElement('div');
    nameSection.classList.add('name-section');

    const avatar = document.createElement('div');
    avatar.classList.add('avatar-section');
    const img = document.createElement('img');
    img.classList.add('avatar');
    img.src = post.avatar;
    avatar.append(img);
    nameSection.append(avatar);

    const info = document.createElement('div');
    info.classList.add('info-section');
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = post.name;
    info.append(name);

    const loc = document.createElement('p');
    loc.classList.add('location');
    loc.textContent = post.location;
    info.append(loc);
    nameSection.append(info);

    postContainer.append(nameSection);

    // Image Section
    const imagePost = document.createElement('div');
    imagePost.classList.add('image-post');
    const imgElement = document.createElement('img');
    imgElement.classList.add('image-post');
    imgElement.src = post.post;
    imagePost.append(imgElement);
    postContainer.append(imagePost);

    // Icons Section
    const icons = document.createElement('div');
    icons.classList.add('icons-section');
    const iconHeart = document.createElement('img');
    const iconBubble = document.createElement('img');
    const iconArrow = document.createElement('img');
    iconHeart.classList.add('icon');
    iconBubble.classList.add('icon');
    iconArrow.classList.add('icon');
    iconHeart.src = 'images/icon-heart.png';
    iconBubble.src = 'images/icon-comment.png';
    iconArrow.src = 'images/icon-dm.png';
    icons.append(iconHeart, iconBubble, iconArrow);
    postContainer.append(icons);

    // Likes Section
    const likesSection = document.createElement('div');
    likesSection.classList.add('likes-section');
    const likesElement = document.createElement('p');
    likesElement.classList.add('likes');
    let postLikes = post.likes;
    likesElement.innerHTML = `${postLikes} likes`;
    likesSection.append(likesElement);
    postContainer.append(likesSection);

    // Like button functionality
    iconHeart.addEventListener('click', () => {
        postLikes += 1;
        likesElement.innerHTML = `${postLikes} likes`;
    });

    // Description Section
    const descriptionSection = document.createElement('div');
    descriptionSection.classList.add('description-section');
    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.innerHTML = `<strong>${post.username}</strong> ${post.comment}`;
    descriptionSection.append(descriptionElement);
    postContainer.append(descriptionSection);

    // Append the post to the feed
    feed.append(postContainer);
});