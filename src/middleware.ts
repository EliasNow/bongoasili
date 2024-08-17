// 16.44
// updated connect-src and updated media-src directives
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const nonce = Buffer.from(Math.random().toString()).toString('base64');
  const isDev = process.env.NODE_ENV === 'development';

  let scriptSrc = `'self' 'nonce-${nonce}' https://maps.googleapis.com https://cdn.builder.io https://stackpath.bootstrapcdn.com 'unsafe-inline'`;

  if (isDev) {
    scriptSrc += " 'unsafe-eval' http://localhost:5273";
  }
  
  //https://developer.chrome.com/docs/lighthouse/best-practices/csp-xss/?utm_source=lighthouse&utm_medium=lr
  const csp = `
    default-src 'self';
    script-src ${scriptSrc};
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://stackpath.bootstrapcdn.com;
    img-src 'self' data: https://cdn.builder.io https://via.placeholder.com;
    font-src 'self' https://fonts.gstatic.com data:;
    connect-src 'self' https://cdn.builder.io https://maps.googleapis.com http://localhost:5273 https://cdn.builder.codes;
    media-src 'self' https://cdn.builder.io;
    frame-src 'self' https://www.google.com;
    object-src 'none';
    base-uri 'none';
  `.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim();

  const res = NextResponse.next();
  res.headers.set('Content-Security-Policy', csp);

  return res;
}

export const config = {
  matcher: '/', // Apply to all routes, or specify routes as needed
};