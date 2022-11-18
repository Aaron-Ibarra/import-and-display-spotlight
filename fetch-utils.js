const SUPABASE_URL = 'https://gvhgebiiqjezrhkmcque.supabase.co';

const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2aGdlYmlpcWplenJoa21jcXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMzcsImV4cCI6MTk4MzY4NDAzN30.IPXrWCU6kYe9JaHUfGPnQcuwKDHonUpaRuCgs3uCEok';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAnimalInvasion() {
    const response = await client.from('animal-invasion').select('*');
    if (response.data) {
        return response.data;
    } else {
        console.log(response.error);
    }

    // return response.data;
}

export async function getAccountInfo() {
    const response = await client.from('account-info').select('*');
    return response.data;
}

export async function getCars() {
    const response = await client.from('cars').select('*');
    return response.data;
}

export async function getMovies() {
    const response = await client.from('movies').select('*');
    return response.data;
}
