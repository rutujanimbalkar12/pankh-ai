import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProfileAvatarProps {
  name: string;
  imageUrl?: string;
}

const ProfileAvatar = ({ name, imageUrl }: ProfileAvatarProps) => {
  const navigate = useNavigate();
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Button
      variant="ghost"
      className="hover:bg-primary/10"
      onClick={() => navigate('/profile')}
    >
      <Avatar className="h-8 w-8">
        {imageUrl ? (
          <AvatarImage src={imageUrl} alt={name} />
        ) : (
          <AvatarFallback className="bg-gradient-secondary text-white">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
    </Button>
  );
};

export default ProfileAvatar;