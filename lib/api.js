export const submitProject = async (formData) => {
  try {
    const response = await fetch('https://official-ta-project-eval-backend.onrender.com/analyze-project', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error in submitProject:', error);
    throw error;
  }
};