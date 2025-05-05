import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  location: z.string().min(1),
  budget: z.enum(['low', 'medium', 'high']),
  season: z.enum(['spring', 'summer', 'fall', 'winter']),
  hoursAvailable: z.coerce.number().min(1),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    // TODO: route to /recommendations and fetch results
  };

  return (
    <div className="card">
      <h1>Plan Your Free Time</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input {...register('location')} placeholder="Location" />
        <select {...register('budget')}>
          <option value="">Budget</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select {...register('season')}>
          <option value="">Season</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
        </select>
        <input type="number" {...register('hoursAvailable')} placeholder="Hours Available" />
        <button type="submit">Get Recommendations</button>
      </form>
    </div>
  );
}