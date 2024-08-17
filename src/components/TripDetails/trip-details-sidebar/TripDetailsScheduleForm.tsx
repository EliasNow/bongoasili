// 15 aug 18.49 different variation
import React, { useState } from "react";

interface TripDetailsScheduleFormProps {
  title: string;
}

const TripDetailsScheduleForm: React.FC<TripDetailsScheduleFormProps> = ({ title }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`Hello, I am interested in [${title}]`);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch API key from environment variables
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiKey) {
      setStatus('API key is missing');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/mail-request-sanitize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({ name, email, phone, message, title }),
      });

      if (res.ok) {
        setStatus('Email sent successfully');
        setName('');
        setEmail('');
        setPhone('');
        setMessage(`Hello, I am interested in [${title}]`);
      } else {
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const data = await res.json();
          setStatus(data.error || 'Failed to send email');
        } else {
          const text = await res.text();
          setStatus(text || 'Failed to send email');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send email');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box-three mb-25">
        <div className="label">Your Name*</div>
        <input
          type="text"
          placeholder="Your full name"
          className="type-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Your Email*</div>
        <input
          type="email"
          placeholder="Enter mail address"
          className="type-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Your Phone*</div>
        <input
          type="tel"
          placeholder="Your phone number"
          className="type-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="input-box-three mb-15">
        <div className="label">Message*</div>
        <textarea
          placeholder={`Hello, I am interested in [${title}]`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button className="btn-nine text-uppercase rounded-3 w-100 mb-10" type="submit">Inquiry</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default TripDetailsScheduleForm;

// // 15 aug 18.05 we're using the AWS lambda function now:
// import React, { useState } from "react";

// interface TripDetailsScheduleFormProps {
//   title: string;
// }

// const TripDetailsScheduleForm: React.FC<TripDetailsScheduleFormProps> = ({ title }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState(`Hello, I am interested in [${title}]`);
//   const [status, setStatus] = useState('');

//   // Simple client-side sanitization function
//   function simpleSanitize(input: string) {
//     return input.replace(/<[^>]*>?/gm, '');
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Sanitize the message before sending
//     const sanitizedMessage = simpleSanitize(message);

//     const apiKey = process.env.NEXT_PUBLIC_API_KEY;

//     if (!apiKey) {
//       setStatus('API key is missing');
//       return;
//     }

//     try {
//       const res = await fetch(process.env.NEXT_PUBLIC_API_GATEWAY_URL + '/mail-request-sanitize', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-api-key': apiKey,
//         },
//         body: JSON.stringify({ name, email, phone, message: sanitizedMessage, title }),
//       });

//       if (res.ok) {
//         setStatus('Email sent successfully');
//         setName('');
//         setEmail('');
//         setPhone('');
//         setMessage(`Hello, I am interested in [${title}]`);
//       } else {
//         const contentType = res.headers.get('content-type');
//         if (contentType && contentType.indexOf('application/json') !== -1) {
//             const data = await res.json();
//             console.error('Error response:', data);
//             setStatus(data.error || 'Failed to send email');
//         } else {
//             const text = await res.text();
//             console.error('Error text:', text);
//             setStatus(text || 'Failed to send email');
//         }
//     }
//     } catch (error) {
//       console.error('Error:', error);
//       setStatus('Failed to send email');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Name*</div>
//         <input
//           type="text"
//           placeholder="Your full name"
//           className="type-input"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Email*</div>
//         <input
//           type="email"
//           placeholder="Enter mail address"
//           className="type-input"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Phone*</div>
//         <input
//           type="tel"
//           placeholder="Your phone number"
//           className="type-input"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-15">
//         <div className="label">Message*</div>
//         <textarea
//           placeholder={`Hello, I am interested in [${title}]`}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         ></textarea>
//       </div>
//       <button className="btn-nine text-uppercase rounded-3 w-100 mb-10" type="submit">Inquiry</button>
//       {status && <p>{status}</p>}
//     </form>
//   );
// };

// export default TripDetailsScheduleForm;

// // 15 aug 11.26 added client-side pre-processing
// import React, { useState } from "react";

// interface TripDetailsScheduleFormProps {
//   title: string;
// }

// const TripDetailsScheduleForm: React.FC<TripDetailsScheduleFormProps> = ({ title }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState(`Hello, I am interested in [${title}]`);
//   const [status, setStatus] = useState('');

//   // Simple client-side sanitization function
//   function simpleSanitize(input: string) {
//     return input.replace(/<[^>]*>?/gm, '');
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Sanitize the message before sending
//     const sanitizedMessage = simpleSanitize(message);

//     // use AWS lambda function:
//     try {
//       const res = await fetch(process.env.NEXT_PUBLIC_API_GATEWAY_URL + '/mail-request-sanitize', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, phone, message: sanitizedMessage, title }),
//       });
  
//       if (res.ok) {
//         setStatus('Email sent successfully');
//         setName('');
//         setEmail('');
//         setPhone('');
//         setMessage(`Hello, I am interested in [${title}]`);
//       } else {
//         const contentType = res.headers.get('content-type');
//         if (contentType && contentType.indexOf('application/json') !== -1) {
//           const data = await res.json();
//           setStatus(data.error || 'Failed to send email');
//         } else {
//           const text = await res.text();
//           setStatus(text || 'Failed to send email');
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setStatus('Failed to send email');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Name*</div>
//         <input
//           type="text"
//           placeholder="Your full name"
//           className="type-input"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Email*</div>
//         <input
//           type="email"
//           placeholder="Enter mail address"
//           className="type-input"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Phone*</div>
//         <input
//           type="tel"
//           placeholder="Your phone number"
//           className="type-input"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-15">
//         <div className="label">Message*</div>
//         <textarea
//           placeholder={`Hello, I am interested in [${title}]`}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         ></textarea>
//       </div>
//       <button className="btn-nine text-uppercase rounded-3 w-100 mb-10" type="submit">Inquiry</button>
//       {status && <p>{status}</p>}
//     </form>
//   );
// };

// export default TripDetailsScheduleForm;

// // 20.34
// import React, { useState } from "react";

// interface TripDetailsScheduleFormProps {
//   title: string;
// }

// const TripDetailsScheduleForm: React.FC<TripDetailsScheduleFormProps> = ({ title }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState(`Hello, I am interested in [${title}]`);
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try { // 13 aug 19.32 cloudflare worker (fix json)
//       const res = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, phone, message, title }),
//       });
  
//       if (res.ok) {
//         setStatus('Email sent successfully');
//         setName('');
//         setEmail('');
//         setPhone('');
//         setMessage(`Hello, I am interested in [${title}]`);
//       } else {
//         const contentType = res.headers.get('content-type');
//         if (contentType && contentType.indexOf('application/json') !== -1) {
//           const data = await res.json();
//           setStatus(data.error || 'Failed to send email');
//         } else {
//           const text = await res.text();
//           setStatus(text || 'Failed to send email');
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setStatus('Failed to send email');
//     }
//   };

//   //   try {
//   //     const res = await fetch('/api/send-email', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ name, email, phone, message, title }),
//   //     });

//   //     if (res.status === 200) {
//   //       setStatus('Email sent successfully');
//   //       setName('');
//   //       setEmail('');
//   //       setPhone('');
//   //       setMessage(`Hello, I am interested in [${title}]`);
//   //     } else {
//   //       const data = await res.json();
//   //       setStatus(data.error || 'Failed to send email');
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //     setStatus('Failed to send email');
//   //   }
//   // };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Name*</div>
//         <input
//           type="text"
//           placeholder="Your full name"
//           className="type-input"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Email*</div>
//         <input
//           type="email"
//           placeholder="Enter mail address"
//           className="type-input"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Phone*</div>
//         <input
//           type="tel"
//           placeholder="Your phone number"
//           className="type-input"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-15">
//         <div className="label">Message*</div>
//         <textarea
//           placeholder={`Hello, I am interested in [${title}]`}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         ></textarea>
//       </div>
//       <button className="btn-nine text-uppercase rounded-3 w-100 mb-10" type="submit">Inquiry</button>
//       {status && <p>{status}</p>}
//     </form>
//   );
// };

// export default TripDetailsScheduleForm;



// // this works @20.34 6 aug (but we get error message in browser and no confirmation email for non-verified sender addresses)
// import React, { useState } from "react";

// interface TripDetailsScheduleFormProps {
//   title: string;
// }

// const TripDetailsScheduleForm: React.FC<TripDetailsScheduleFormProps> = ({ title }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState(`Hello, I am interested in [${title}]`);
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, phone, message, title }),
//       });

//       if (res.status === 200) {
//         setStatus('Email sent successfully');
//         setName('');
//         setEmail('');
//         setPhone('');
//         setMessage(`Hello, I am interested in [${title}]`);
//       } else {
//         setStatus('Failed to send email');
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus('Failed to send email');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Name*</div>
//         <input
//           type="text"
//           placeholder="Your full name"
//           className="type-input"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Email*</div>
//         <input
//           type="email"
//           placeholder="Enter mail address"
//           className="type-input"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-25">
//         <div className="label">Your Phone*</div>
//         <input
//           type="tel"
//           placeholder="Your phone number"
//           className="type-input"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-box-three mb-15">
//         <div className="label">Message*</div>
//         <textarea
//           placeholder={`Hello, I am interested in [${title}]`}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         ></textarea>
//       </div>
//       <button className="btn-nine text-uppercase rounded-3 w-100 mb-10" type="submit">Inquiry</button>
//       {status && <p>{status}</p>}
//     </form>
//   );
// };

// export default TripDetailsScheduleForm;
