"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, User, Clock, AlertCircle, CheckCircle2 } from "lucide-react";

interface Comment {
    id: number;
    author: string;
    date: string;
    content: string;
    author_avatar?: string;
}

interface CommentsProps {
    postId: number;
    postSlug: string;
}

const formatDate = (dateStr: string) => {
    try {
        const d = new Date(dateStr);
        return d.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
    } catch {
        return dateStr;
    }
};

const formatTime = (dateStr: string) => {
    try {
        const d = new Date(dateStr);
        return d.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit"
        });
    } catch {
        return "";
    }
};

export default function Comments({ postId, postSlug }: CommentsProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: ""
    });

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`/api/posts/comment/fetch`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ postId })
                });
                const data = await response.json();
                if (Array.isArray(data)) {
                    setComments(data);
                }
            } catch (error) {
                console.error("Error fetching comments:", error);
            } finally {
                setLoading(false);
            }
        };

        if (postSlug && postId) {
            fetchComments();
        }
    }, [postSlug, postId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch(`/api/posts/comment/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: postId,
                    name: formData.name,
                    email: formData.email,
                    content: formData.comment
                })
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Comment submitted successfully! It will appear after verification.' });
                setFormData({ name: "", email: "", comment: "" });
            } else {
                throw new Error(data.error || 'Failed to submit comment');
            }
        } catch (error: any) {
            setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="pt-16 border-t border-slate-100 mt-16">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl font-display font-extrabold text-[#111111]">Discussion</h2>
                    <p className="text-xs text-slate-500">{comments.length} Thoughts on this article</p>
                </div>
            </div>

            <div className="space-y-12">
                {/* Comment List */}
                <div className="w-full">
                    {loading ? (
                        <div className="space-y-6">
                            {[1, 2].map(i => (
                                <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 animate-pulse h-28" />
                            ))}
                        </div>
                    ) : comments.length > 0 ? (
                        <div className="space-y-6">
                            {comments.map((comment, index) => {
                                const commentAvatar = comment.author.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2);
                                return (
                                    <motion.div
                                        key={comment.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-xs text-primary shrink-0 overflow-hidden relative">
                                            {comment.author_avatar ? (
                                                <Image 
                                                    src={comment.author_avatar} 
                                                    alt={comment.author}
                                                    fill
                                                    draggable={false}
                                                    sizes="40px"
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            ) : (
                                                commentAvatar
                                            )}
                                        </div>
                                        <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                                            <div className="flex items-center justify-between gap-4 mb-2">
                                                <h4 className="font-display font-bold text-[#111111] text-sm">{comment.author}</h4>
                                                <span className="text-[10px] text-slate-450 flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {formatDate(comment.date)} at {formatTime(comment.date)}
                                                </span>
                                            </div>
                                            <div
                                                className="text-xs text-slate-600 leading-relaxed prose prose-sm max-w-none [&>p]:mb-0"
                                                dangerouslySetInnerHTML={{ __html: comment.content }}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-12 px-6 rounded-3xl bg-slate-50 border border-dashed border-slate-200">
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <h4 className="font-display font-bold text-[#111111] text-sm mb-1">No comments yet</h4>
                            <p className="text-xs text-slate-500">Be the first to share your thoughts on this article.</p>
                        </div>
                    )}
                </div>

                {/* Comment Form */}
                <div className="w-full pt-6">
                    <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-100/50">
                        <h3 className="font-display font-bold text-[#111111] text-lg mb-6">Leave a Comment</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide mb-1.5 block">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:border-primary outline-none text-sm transition-all"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide mb-1.5 block">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:border-primary outline-none text-sm transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-[#111111]/70 uppercase tracking-wide mb-1.5 block">Comment</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.comment}
                                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:border-primary outline-none text-sm transition-all resize-none"
                                    placeholder="Share your thoughts..."
                                />
                            </div>

                            <AnimatePresence>
                                {status && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`flex items-start gap-3 p-4 rounded-xl text-xs ${
                                            status.type === 'success' 
                                                ? 'bg-green-50 text-green-700 border border-green-100' 
                                                : 'bg-red-50 text-red-700 border border-red-100'
                                        }`}
                                    >
                                        {status.type === 'success' ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                                        <p>{status.message}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full h-11 rounded-full bg-primary hover:bg-primary/95 text-white font-bold shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group cursor-pointer transition-all text-sm"
                            >
                                {submitting ? (
                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Post Comment
                                        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
