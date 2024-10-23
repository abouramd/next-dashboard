// "use client";


// Server Component
export default function Page() {
  // Action
  async function create(formData: FormData) {
    'use server';
    console.log(JSON.stringify(formData));
    // Logic to mutate data...
  }

  // Invoke the action using the "action" attribute
  return (
    <form action={create}>
      <input type="text" name="text" />
      <button type="submit">send</button>
    </form>
  );
}
