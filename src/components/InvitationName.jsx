import React from 'react';
import './InvitationName.css'; 
const InvitationName = () => {
  const params = new URLSearchParams(window.location.search); // ?name=Anna
  const name = params.get('name');

  if (!name) return null;

  const niceName = decodeURIComponent(name).trim();

  return (
    <h3 className="guest-name">Dear {niceName}❤️
</h3>
  );
};

export default InvitationName;
