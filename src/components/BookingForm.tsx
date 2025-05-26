"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", date: "", service: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    const { error } = await supabase.from("appointments").insert([form]);
    if (error) {
      setMessage("Something went wrong. Please try again.");
      setMessageType('error');
    } else {
      setMessage("Appointment booked successfully!");
      setMessageType('success');
      setForm({ name: "", email: "", date: "", service: "" });
    }
    setLoading(false);
  }

  return (
    <div className="booking-form fade-in">
      <h2>Book an Appointment</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Your Name"
          className="form-input"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        />
        
        <input
          type="email"
          required
          placeholder="Your Email"
          className="form-input"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        />
        
        <input
          type="date"
          required
          className="form-input"
          value={form.date}
          onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
        />
        
        <input
          type="text"
          required
          placeholder="Preferred Service (e.g., Haircut, Beard Trim, Styling)"
          className="form-input"
          value={form.service}
          onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
        />
        
        <button 
          type="submit" 
          className="submit-btn" 
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
      
      {message && (
        <div className={`form-message ${messageType}`}>
          {message}
        </div>
      )}
    </div>
  );
}