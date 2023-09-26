const newFormHandler = async (event) => {
  event.preventDefault();

  const team_name = document.querySelector('#team-name').value.trim();

  if (team_name) {
    const response = await fetch(`/api/teams`, {
      method: 'POST',
      body: JSON.stringify({ team_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create team');
    }
  }
};

const joinTeam = async (event) => {
  event.preventDefault();

  const team_id = document.querySelector('#teamId').value.trim();

  if (team_id) {
    const response = await fetch(`/api/users/addteam/${team_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      const res = await response.json()
      alert(res.message);
    }
  }
};

document
  .querySelector('.new-team-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.signup-form')
  .addEventListener('submit', joinTeam);
