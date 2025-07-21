// Conexión con Notion API
async function fetchNotionCourses() {
  const response = await fetch('https://api.notion.com/v1/databases/YOUR_DB_ID', {
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_KEY}`,
      'Notion-Version': '2022-06-28'
    }
  });
  return await response.json();
}
