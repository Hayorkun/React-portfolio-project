import { useState } from "react";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent!");
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      })
      .catch((err) => console.error("EmailJS error:", err))
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="px-5 py-10 md:py-15 md:px-10 flex justify-center">
      <div className="my-max-width w-full">
        <div className="md:items-center py-5  block md:flex md:gap-10">
          <div className="w-full md:w-[62.5%] mb-5">
            <p className="mb-3 text-orange-400 font-brand font-semibold leading-relaxed">
              LET'S WORK TOGETHER
            </p>
            <h1 className="text-4xl font-brand font-extrabold leading-tight mb-5">
              Get in touch
            </h1>
            <p className="mb-5 text-sm">
              Have a project in mind or a role to fill? I'd love to hear from
              you.
            </p>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* NAME FIELDS */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-400 mb-2"
                  >
                    First name
                    <input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      type="text"
                      className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5 mt-3 text-base"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </label>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-400 mb-2"
                  >
                    Last name
                    <input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      type="text"
                      className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5 mt-3 text-base"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </label>
                </div>
              </div>
              {/* EMAIL */}
              <div className="flex-1">
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email address
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="John@example.com"
                    type="email"
                    className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5 text-base mt-3"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </label>
              </div>
              {/* SUBJECT */}
              <div className="flex-1">
                <label htmlFor="subject" className="block text-gray-400 mb-2">
                  Subject
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project enquiry"
                    type="text"
                    className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white p-5 rounded-xl text-base mt-3"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </label>
              </div>

              {/* MESSAGE */}
              <div className="flex-1">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project."
                    className="w-full border-0 bg-gray-700 focus:bg-gray-700 text-white placeholder-white rounded-xl p-5 h-20 text-base mt-3"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </label>
              </div>
              <button
                className="flex  text-sm items-center justify-center py-2 px-4 rounded-lg self-start bg-orange-400"
                type="submit"
                disabled={isLoading}
              >
                 {isLoading ? "Sending..." : "Send message"} <ArrowRight />
              </button>
            </form>
          </div>
          <div className="py-7 md:py-10 w-full md:w-[37.5%]">
            <div className="flex items-center self-center gap-3 border border-orange-600/70 text-white rounded-xl px-5 h-20 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400/60 opacity-90"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
              </span>
              <div>
                <h3 className="text-lg font-semibold">Currently Available</h3>
                <p className="text-sm text-gray-300/70">
                  Open to freelance & full-time roles
                </p>
              </div>
            </div>
            <div className="h-20 border border-orange-600/70 rounded-xl flex items-center px-5 gap-3 mb-4">
              <span>
                <img
                  className="w-10 border border-orange-400/30 p-1 rounded-lg"
                  src="https://ik.imagekit.io/AyomiCode/email-1-svgrepo-com.svg"
                  alt="Email"
                />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm text-gray-300/70">
                  Ayomideyerokun54@gmail.com
                </p>
              </div>
            </div>
            <div className="h-20 border border-orange-600/70 rounded-xl flex items-center px-5 gap-3 mb-4">
              <span>
                <img
                  className="w-10 border border-orange-400/30 p-1 rounded-lg"
                  src="https://ik.imagekit.io/AyomiCode/github-removebg-preview.png"
                  alt="Email"
                />
              </span>
              <div>
                <h3 className="text-lg font-semibold">GitHub</h3>
                <p className="text-sm text-gray-300/70">
                  Ayomideyerokun54@gmail.com
                </p>
              </div>
            </div>
            <div className="h-20 border border-orange-600/70 rounded-xl flex items-center px-5 gap-3 mb-4">
              <span>
                <img
                  className="w-10 border border-orange-400/30 p-1  rounded-lg"
                  src="https://ik.imagekit.io/AyomiCode/briefcase-removebg-preview.png"
                  alt="Email"
                />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Linkedin</h3>
                <p className="text-sm text-gray-300/70">
                  Ayomideyerokun54@gmail.com
                </p>
              </div>
            </div>
            <div className="h-20 border border-orange-600/70 rounded-xl flex items-center px-5 gap-3">
              <span>
                <img
                  className="w-10 border border-orange-400/30 p-1 rounded-lg"
                  src="https://ik.imagekit.io/AyomiCode/57642948_sl_z_072523_61700_01.jpg"
                  alt="Email"
                />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm text-gray-300/70">
                  Ayomideyerokun54@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
