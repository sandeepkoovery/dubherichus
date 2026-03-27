import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, ArrowUpRight } from 'lucide-react';

export function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);
    const [showLabel, setShowLabel] = useState(false);
    const phoneNumber = "911234567890"; // WhatsApp Number
    const callNumber = "911234567890"; // Call Number
    const welcomeMessage = "How can I help you? :)";

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLabel(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        const message = e.target.elements.message.value;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 font-sans group">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-2 w-[320px] overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-[#128C7E] p-4 text-white">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                <MessageCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold">Let's chat on WhatsApp</h3>
                                <div className="flex items-center gap-1.5">
                                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-[10px] opacity-80">Online</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-full p-1 transition-colors hover:bg-black/10"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="relative h-[300px] bg-[#e5ddd5] p-4 overflow-y-auto" style={{
                        backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
                        backgroundSize: 'contain'
                    }}>
                        <div className="relative z-10 flex flex-col gap-4">
                            <div className="max-w-[80%] self-start rounded-xl rounded-tl-none bg-white p-3 text-[13px] shadow-sm">
                                <p className="mb-1">{welcomeMessage}</p>
                                <span className="block text-right text-[10px] opacity-40">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSendMessage} className="bg-white p-4">
                        <div className="flex items-center gap-3 rounded-full bg-[#f0f2f5] px-4 py-2">
                            <input
                                name="message"
                                type="text"
                                placeholder="Write your message..."
                                className="w-full bg-transparent text-sm focus:outline-none"
                                required
                            />
                            <button type="submit" className="text-[#128C7E] transition-transform hover:scale-110">
                                <Send className="h-5 w-5 fill-current" />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Call Button */}
            {!isOpen && (
                <a
                    href={`tel:${callNumber}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-700 active:scale-95 animate-in fade-in slide-in-from-bottom-2"
                    title="Call Us"
                >
                    <Phone className="h-5 w-5 fill-current" />
                </a>
            )}

            {/* WhatsApp Button */}
            <div className="flex items-center gap-4">
                {showLabel && !isOpen && (
                    <div className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xl animate-in fade-in slide-in-from-right-4">
                        Need help? Contact us!
                    </div>
                )}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${isOpen ? 'bg-white text-gray-800' : 'bg-[#25D366] text-white'
                        }`}
                >
                    {isOpen ? (
                        <X className="h-7 w-7" />
                    ) : (
                        <div className="relative">
                            <MessageCircle className="h-7 w-7 fill-current" />
                            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-[#25D366] bg-red-500" />
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}
