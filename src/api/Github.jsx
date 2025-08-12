import React, { useEffect, useState } from 'react';

const Github = ({ username = 'gloze-png', repoLimit = 3 }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
       const response = await fetch(`https://api.github.com/users/gloze-png/repos?sort=pushed`);
        if (!response.ok) throw new Error('GitHub API error');
        const data = await response.json();
        const filtered = data.filter(repo => !repo.fork).slice(0, repoLimit);
        setRepos(filtered);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, [username, repoLimit]);

  return (
    <div className="github-projects py-12 sm:px-6 lg:px-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Latest GitHub Projects
      </h2>

      {loading ? (
        <p className="bg-zinc-900 rounded-lg p-10 flex justify-center items-center text-white">Loading...</p>
      ) : repos.length === 0 ? (
        <p className="text-red-500 text-center">No repositories found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {repos.map(repo => (
    <a
      key={repo.id}
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="block p-6 border border-white/10 rounded-xl bg-zinc-900 text-white shadow-md hover:shadow-lg transition duration-300 hover:ring-1 hover:ring-blue-400"
    >
      <h3 className="text-lg font-semibold text-white-400 mb-2">{repo.name}</h3>
      <p className="text-sm text-gray-300">
        {repo.description || 'No description'}
      </p>
      <p className="text-xs mt-4 text-gray-500">
        Last pushed: {new Date(repo.pushed_at).toLocaleString()}
      </p>
    </a>
  ))}
</div>

      )}
    </div>
  );
};

export default Github;

