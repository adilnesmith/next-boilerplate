import { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINTS } from 'lib/api'
import { API_DOMAIN } from 'lib/general-config'
import { PaginationData, Item } from 'lib/@types/common';

function usePagination(itemNumber: number = 5): PaginationData {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const handlePrev = () => {
        if (pageNumber === 1) return;
        setPageNumber((prevPageNumber) => prevPageNumber - 1);
    };

    const handleNext = () => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios
            .get(`${API_DOMAIN}${ENDPOINTS.GET.entries}`)
            .then((response) => {
                setItems(response?.data?.entries);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
            });
    }, []);

    const totalItems = items?.length;
    const totalPages = Math.ceil(totalItems / itemNumber);
    const currentPage = Math.min(pageNumber, totalPages);

    const start = (currentPage - 1) * itemNumber;
    const end = start + itemNumber;
    const paginatedItems = items?.slice(start, end);

    return {
        items: paginatedItems,
        loading,
        error,
        handlePrev,
        handleNext,
        currentPage,
        totalPages,
    };
}

export default usePagination;
