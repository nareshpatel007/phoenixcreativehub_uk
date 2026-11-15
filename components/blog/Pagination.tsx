import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        const showMax = 5;

        if (totalPages <= showMax + 2) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            let renderStart = start;
            let renderEnd = end;

            if (currentPage <= 3) renderEnd = 4;
            if (currentPage >= totalPages - 2) renderStart = totalPages - 3;

            for (let i = Math.max(2, renderStart); i <= Math.min(totalPages - 1, renderEnd); i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="mt-16 flex items-center justify-center gap-2">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-xl border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                aria-label="Previous page"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1 mx-4">
                {getPageNumbers().map((page, index) => (
                    <React.Fragment key={index}>
                        {page === '...' ? (
                            <span className="w-11 h-11 flex items-center justify-center text-slate-400">
                                ...
                            </span>
                        ) : (
                            <button
                                onClick={() => onPageChange(page as number)}
                                className={`w-11 h-11 rounded-xl text-sm font-semibold transition-all cursor-pointer ${currentPage === page
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "border border-slate-200 bg-white text-slate-600 hover:text-slate-800 hover:border-primary/30"
                                    }`}
                            >
                                {page}
                            </button>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                aria-label="Next page"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
