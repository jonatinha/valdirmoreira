export async function GET() {
  const htmlContent = `
    30141443
  `;
  
  return new Response(htmlContent, {
    headers: {
      "Content-Type": "text/html"
    }
  });
}