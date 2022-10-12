
export const formatDate = (dateString: string): string => {
    const date = new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return date;
};



export const debounce = (fn: () => void, timeout = 300) => {
    let timer: NodeJS.Timeout;

    const debounced = (...args: any) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, timeout)
    }

    return debounced;
}