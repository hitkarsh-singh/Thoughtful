import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CategoryProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ title, description, imageUrl }) => {
  const router = useRouter();

  return (
    <Card className="overflow-hidden group">
      <CardHeader className="p-0">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </CardHeader>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 transition-opacity group-hover:bg-opacity-60">
        <CardTitle className="text-white text-xl font-semibold mb-2">{title}</CardTitle>
        <CardContent className="p-0">
          <p className="text-white text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{description}</p>
        </CardContent>
        <CardFooter className="p-0">
          <Button 
            onClick={() => router.push('/entriesandreveals')}
            className="bg-white text-black hover:bg-gray-100 transition-colors"
          >
            Select
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CategoryCard;