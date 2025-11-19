const cpuImages = [
    "https://th.bing.com/th/id/OIP.WfWvbT6Jb_18IcrGgxVHxwHaGq?w=198&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://www.bing.com/th/id/OIP.Ko-TH0M2J6ERg-L8GyUDbwHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://thumb.ac-illust.com/c0/c05ce5ea004ec495cce70d29fc9bd03f_w.jpeg",
    ];

    const mineImages =[
    "https://th.bing.com/th/id/OIP.WfWvbT6Jb_18IcrGgxVHxwHaGq?w=198&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://www.bing.com/th/id/OIP.Ko-TH0M2J6ERg-L8GyUDbwHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://thumb.ac-illust.com/c0/c05ce5ea004ec495cce70d29fc9bd03f_w.jpeg",
    ];


    const cpuGu = document.querySelector(".block2");
    const cpuChoki = document.querySelector("sithers2");
    const cpuPa = document.querySelector("paper2");
    const startButton = document.querySelector(".button button");

    startButton.addEventListener("click",()=>{
        const cpuHandIndex = Math.random()*cpuImages.length;
        console.log("CPUの手 =",cpuHandIndex);
    });
    