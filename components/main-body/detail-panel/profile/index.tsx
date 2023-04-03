import usePagination from "lib/hooks/usePagination";
import { useRouter } from "next/router";
function Profile() {
    const {
        items,
        loading,
        error,
        handlePrev,
        handleNext,
        currentPage,
        totalPages,
    } = usePagination();
    const router = useRouter();
    if (loading) { return <div>Loading...</div> }
    if (error) { return <div>Error: {error}</div> }
    return (
        <>
            <div data-testid="profile" onClick={() => {
                router.push(`/category`);
            }}>Profile Panel</div>
            <div>
                {items.map((item, i) => (
                    <div key={i}>
                        <p>{item.API}</p>
                    </div>
                ))}
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext} disabled={currentPage >= totalPages}>
                    Next
                </button>
            </div>
        </>
    );
}

export default Profile;
