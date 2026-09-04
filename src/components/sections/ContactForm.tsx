"use client";

import React, { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  botcheck: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  botcheck: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const errors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your full name.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!emailPattern.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address (e.g., name@example.com).";
    }

    // Flexible international phone validation: allow +, digits, spaces, hyphens, parentheses, min 6 chars
    const phoneClean = formData.phone.replace(/[\s\-\(\)\.]/g, "");
    if (!formData.phone.trim()) {
      errors.phone = "Please enter your phone number.";
    } else if (phoneClean.length < 6 || !/^\+?[0-9]{6,15}$/.test(phoneClean)) {
      errors.phone = "Please enter a valid phone number (at least 6 digits).";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter your message or project requirements.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Please provide at least 10 characters describing your requirement.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error on user input
    if (fieldErrors[name as keyof FormState]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // Clear top error message once user resumes editing
    if (statusMessage.type === "error") {
      setStatusMessage({ type: null, text: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent duplicate submits if already in flight
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    // Check honeypot: if filled, quietly abort to avoid bot spam
    if (formData.botcheck) {
      setStatusMessage({
        type: "success",
        text: "Thank you! Your message has been received.",
      });
      setFormData(initialFormState);
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: null, text: "" });

    try {
      const payload = {
        access_key: "0eca3666-b187-4d18-ae70-1b3fbce80cee",
        subject: "New Website Enquiry - Port AI Engineers",
        from_name: "Port AI Engineers Website",
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        page_source: typeof window !== "undefined" ? window.location.href : "Website",
        botcheck: "",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your message has been sent successfully. Our engineering team will review your requirements and get back to you shortly.",
        });
        setFormData(initialFormState);
        setFieldErrors({});
      } else {
        setStatusMessage({
          type: "error",
          text:
            result.message ||
            "Unable to send your message at this moment. Please try again or email us directly at contact@portaiengineers.com.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error occurred while sending your message. Please check your internet connection or email us at contact@portaiengineers.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_40px_var(--color-card-shadow)] sm:p-8">
      <div className="mb-6 space-y-1">
        <h3 className="text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
          Send Us a Message
        </h3>
        <p className="text-sm text-[var(--color-muted)]">
          Fill out the form below and we will respond promptly with engineering guidance and quote estimates.
        </p>
      </div>

      {/* Screen reader live notification and visual status banners */}
      <div aria-live="polite" className="mb-5">
        {statusMessage.type === "success" && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200"
          >
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-sm font-medium leading-relaxed">
              {statusMessage.text}
            </div>
          </div>
        )}

        {statusMessage.type === "error" && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-2xl border border-rose-300 bg-rose-50 p-4 text-rose-900 dark:border-rose-800 dark:bg-rose-950/60 dark:text-rose-200"
          >
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-sm font-medium leading-relaxed">
              {statusMessage.text}
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Anti-spam Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          checked={!!formData.botcheck}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              botcheck: e.target.checked ? "spam" : "",
            }))
          }
        />

        {/* Full Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
          >
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="mt-1.5">
            <input
              type="text"
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              disabled={isSubmitting}
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 ${
                fieldErrors.name
                  ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-950"
                  : "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)]"
              } disabled:cursor-not-allowed disabled:opacity-60`}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
            />
          </div>
          {fieldErrors.name && (
            <p id="name-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400">
              {fieldErrors.name}
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email Address */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
            >
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="mt-1.5">
              <input
                type="email"
                id="contact-email"
                name="email"
                autoComplete="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 ${
                  fieldErrors.email
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-950"
                    : "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)]"
                } disabled:cursor-not-allowed disabled:opacity-60`}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
              />
            </div>
            {fieldErrors.email && (
              <p id="email-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                {fieldErrors.email}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
            >
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="mt-1.5">
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                autoComplete="tel"
                required
                disabled={isSubmitting}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 555 123 4567 or +91 99..."
                className={`w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 ${
                  fieldErrors.phone
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-950"
                    : "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)]"
                } disabled:cursor-not-allowed disabled:opacity-60`}
                aria-invalid={!!fieldErrors.phone}
                aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
              />
            </div>
            {fieldErrors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                {fieldErrors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
          >
            Project Requirements / Message <span className="text-rose-500">*</span>
          </label>
          <div className="mt-1.5">
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              disabled={isSubmitting}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your engineering, 3D piping, or CAD project requirements, timelines, and deliverables..."
              className={`w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 ${
                fieldErrors.message
                  ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-950"
                  : "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)]"
              } disabled:cursor-not-allowed disabled:opacity-60`}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
            />
          </div>
          {fieldErrors.message && (
            <p id="message-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400">
              {fieldErrors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-on-primary)] shadow-md transition-all duration-300 hover:opacity-95 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin text-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
