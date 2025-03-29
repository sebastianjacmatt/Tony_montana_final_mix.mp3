// components/UserPage.tsx
import React from 'react';
import { User } from '@/types/user';

export default function UserProifle({user} :{user : User}) {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>{user.username}</h1>

      {/* Round avatar image */}
      <img
        src={user.avatar_url}
        alt={`${user.username}'s avatar`}
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '50%',
          display: 'block',
          margin: '0 auto'
        }}
      />

      {/* Bio beneath the image */}
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        {user.attributes.bio}
      </p>

      {/* Other attributes as a list */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>Navn: {user.attributes.name}</li>
        <li>Pace: {user.attributes.pace}</li>
        <li>Sko: {user.attributes.sko}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  );
}
