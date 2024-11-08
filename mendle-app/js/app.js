const client = new Appwrite.Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6544a06ecf71e5f0e585');

const databases = new Appwrite.Databases(client);

async function loadVideos() {
    try {
        const response = await databases.listDocuments(
            'YOUR_DATABASE_ID',
            'youtube_videos'
        );
        
        const videoGrid = document.getElementById('videoGrid');
        videoGrid.innerHTML = response.documents.map(video => `
            <div class="video-card">
                <img src="${video.thumbnail_url}" alt="${video.title}">
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.views} • ${video.upload_date}</p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadVideos);