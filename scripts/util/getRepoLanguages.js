// No seu githubService.js
export async function getRepoLanguages(username, repoName) {
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/languages`);
    const data = await response.json();
    
    const totalBytes = Object.values(data).reduce((a, b) => a + b, 0);
    const languages = Object.entries(data).map(([name, bytes]) => ({
      name,
      percent: Math.round((bytes / totalBytes) * 100)
    }));

    return languages; // Retorna ex: [{name: 'JavaScript', percent: 80}, {name: 'CSS', percent: 20}]
  } catch (error) {
    return [];
  }
}