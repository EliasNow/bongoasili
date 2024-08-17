// // 16 aug 01.29 resolve errors
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   const nonce = Buffer.from(Math.random().toString()).toString('base64');


//   // 15.52 test to see if CSP is causing issues with homepage (but not other pages); relaxed csp
// //   const csp = `
// //   default-src 'self';
// //   script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline' https://cdn.builder.io https://maps.googleapis.com https://stackpath.bootstrapcdn.com;
// //   style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://stackpath.bootstrapcdn.com;
// //   img-src 'self' data: https://cdn.builder.io https://via.placeholder.com;
// //   font-src 'self' data: https://fonts.gstatic.com;
// //   media-src 'self' https://cdn.builder.io;
// //   connect-src 'self' https://cdn.builder.io;
// //   frame-src 'self' https://www.google.com;
// //   object-src 'none';
// //   base-uri 'none';
// //   report-uri https://your-reporting-url.com;
// // `.replace(/\s{2,}/g, ' ').trim();

//   // better CSP by removing unsafe-inline and being more explicit
//   const csp = `
//   default-src 'self';
//   script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://maps.googleapis.com https://stackpath.bootstrapcdn.com;
//   style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://stackpath.bootstrapcdn.com;
//   img-src 'self' data: https://cdn.builder.io;
//   font-src 'self' https://fonts.gstatic.com data:;
//   connect-src 'self' https://cdn.builder.io;
//   object-src 'none';
//   base-uri 'none';
//   report-uri https://your-reporting-url.com;
// `.replace(/\s{2,}/g, ' ').trim(); // Remove unnecessary spaces and line breaks

//   const res = NextResponse.next();
//   res.headers.set('Content-Security-Policy', csp);
//   return res;
// }

// export const config = {
//   matcher: '/', // Apply to all routes, or specify routes as needed
// };

// this works@17 aug 15.55 test without csp:
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   const res = NextResponse.next();

//   return res;
// }

// // // 17 aug 16.05 incremental csp upgrade
// // // also breaks
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   const nonce = Buffer.from(Math.random().toString()).toString('base64');

//   // const csp = `
//   //   default-src 'self';
//   //   script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://maps.googleapis.com https://cdn.builder.io https://stackpath.bootstrapcdn.com;
//   //   style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://stackpath.bootstrapcdn.com;
//   //   img-src 'self' data: https://cdn.builder.io https://via.placeholder.com;
//   //   font-src 'self' https://fonts.gstatic.com data:;
//   //   connect-src 'self' https://cdn.builder.io https://maps.googleapis.com;
//   //   frame-src 'self' https://www.google.com;
//   //   object-src 'none';
//   //   base-uri 'none';
//   // `
//   // // .replace(/\s{2,}/g, ' ').trim();

//   // without strict-dynamic:
//   const csp = `
//   default-src 'self';
//   script-src 'self' 'nonce-${nonce}' https://maps.googleapis.com https://cdn.builder.io https://stackpath.bootstrapcdn.com 'unsafe-inline';
//   style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://stackpath.bootstrapcdn.com;
//   img-src 'self' data: https://cdn.builder.io https://via.placeholder.com;
//   font-src 'self' https://fonts.gstatic.com data:;
//   connect-src 'self' https://cdn.builder.io https://maps.googleapis.com;
//   frame-src 'self' https://www.google.com;
//   object-src 'none';
//   base-uri 'none';
// `;

//   const res = NextResponse.next();
//   res.headers.set('Content-Security-Policy', csp);
//   return res;
// }

// 16.07 even more basic csp:
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   const nonce = Buffer.from(Math.random().toString()).toString('base64');

//   const csp = `
//     default-src 'self';
//     script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
//     style-src 'self' 'unsafe-inline';
//   `.replace(/\s{2,}/g, ' ').trim();

//   const res = NextResponse.next();
//   res.headers.set('Content-Security-Policy', csp);
//   return res;
// }

// 16.29 also breaks:
// 1. removed trailing semicolon
//2. use only .trim()
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   const nonce = Buffer.from(Math.random().toString()).toString('base64');

//   const csp = `
//     default-src 'self';
//     script-src 'self' 'nonce-${nonce}' https://maps.googleapis.com https://cdn.builder.io https://stackpath.bootstrapcdn.com 'unsafe-inline';
//     style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://stackpath.bootstrapcdn.com;
//     img-src 'self' data: https://cdn.builder.io https://via.placeholder.com;
//     font-src 'self' https://fonts.gstatic.com data:;
//     connect-src 'self' https://cdn.builder.io https://maps.googleapis.com;
//     frame-src 'self' https://www.google.com;
//     object-src 'none';
//     base-uri 'none'
//   `.trim();  // Remove unnecessary whitespace and the final semicolon

//   const res = NextResponse.next();
//   res.headers.set('Content-Security-Policy', csp);
//   return res;
// }

// // 16.31 only breaks homepage (and missing classlist error on other pages)
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   const nonce = Buffer.from(Math.random().toString()).toString('base64');

//   const csp = `
//     default-src 'self';
//     script-src 'self' 'nonce-${nonce}' https://maps.googleapis.com https://cdn.builder.io https://stackpath.bootstrapcdn.com 'unsafe-inline';
//     style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://stackpath.bootstrapcdn.com;
//     img-src 'self' data: https://cdn.builder.io https://via.placeholder.com;
//     font-src 'self' https://fonts.gstatic.com data:;
//     connect-src 'self' https://cdn.builder.io https://maps.googleapis.com;
//     frame-src 'self' https://www.google.com;
//     object-src 'none';
//     base-uri 'none'
//   `.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim();

//   const res = NextResponse.next();
//   res.headers.set('Content-Security-Policy', csp);

//   return res;
// }

// export const config = {
//   matcher: '/', // Apply to all routes, or specify routes as needed
// };

// // add builder devtools to development
// // 16.40 works pretty well only video not showing on homepage and builderdevtools not working
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   const nonce = Buffer.from(Math.random().toString()).toString('base64');
//   const isDev = process.env.NODE_ENV === 'development';

//   let scriptSrc = `'self' 'nonce-${nonce}' https://maps.googleapis.com https://cdn.builder.io https://stackpath.bootstrapcdn.com 'unsafe-inline'`;

//   if (isDev) {
//     scriptSrc += " 'unsafe-eval' http://localhost:5273";
//   }

//   const csp = `
//     default-src 'self';
//     script-src ${scriptSrc};
//     style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://stackpath.bootstrapcdn.com;
//     img-src 'self' data: https://cdn.builder.io https://via.placeholder.com;
//     font-src 'self' https://fonts.gstatic.com data:;
//     connect-src 'self' https://cdn.builder.io https://maps.googleapis.com;
//     frame-src 'self' https://www.google.com;
//     object-src 'none';
//     base-uri 'none'
//   `.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim();

//   const res = NextResponse.next();
//   res.headers.set('Content-Security-Policy', csp);

//   return res;
// }

// export const config = {
//   matcher: '/', // Apply to all routes, or specify routes as needed
// };


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