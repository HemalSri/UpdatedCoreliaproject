var defaultThreads = [
    {
        id: 1,
        title: "Aim of Corelia project",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Functions of a musical website to the users",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 3,
        title: "Having a profile page with Corelia",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 3",
        comments: [
            {
                author: "John",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Jake",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 4,
        title: "How to upload your own content",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Tom",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Paul",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 5,
        title: "Security protocols available in the website",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Nick",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Jay",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 6,
        title: "Why we target the gender diversity",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Hailey",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Carla",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 7,
        title: "Future plans to protect female artists across the world",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Sarah",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Rose",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 8,
        title: "Any recommendations or comments ",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Brooke",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Lexi",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }

]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}