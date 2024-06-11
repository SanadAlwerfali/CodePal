export const parseResponse = (response) => {
    return response.split(/(```[\s\S]*?```)/g).map((part, index) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        const code = part.replace(/```/g, '').trim();
        return { type: 'code', content: code };
      } else {
        return { type: 'text', content: part.trim() };
      }
    });
};