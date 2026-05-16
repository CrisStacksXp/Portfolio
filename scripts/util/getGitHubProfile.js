export async function getGitHubProfile(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('Erro ao buscar perfil');
    const data = await response.json();
    console.info(data)
    return {
      avatar: data.avatar_url,
      bio: data.bio,
      url: data.html_url,
      name: data.name
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}