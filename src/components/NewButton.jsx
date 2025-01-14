import React from "react";

const NewButton = () => {
    return (
        <div class="overflow-clip">
            <div style={{transform:"translateY(0%) translateZ(0px)"}}>
                <button
                    class="group pointer-events-auto relative flex h-fit w-fit transform-none items-center justify-center overflow-hidden rounded-full bg-blue-300 font-bold uppercase tracking-base text-accent-200 px-space-lg py-space-sm text-base">
                    <span class="absolute inset-0 z-10 block overflow-hidden">
                        <span class="block h-full w-full translate-y-full rounded-t-[15rem] bg-accent-600 transition-all duration-500 ease-expo sm:group-hover:translate-y-0 sm:group-hover:rounded-none"></span>
                    </span>
                    <span class="relative z-20 block overflow-hidden transition-all">
                        <span
                            after="Book a Call ↗"
                            class="block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-500 after:ease-expo after:content-[attr(after)] sm:group-hover:after:-translate-y-[100%]">
                            <span class="flex transition-all duration-500 ease-expo sm:group-hover:-translate-y-full">
                                Book a Call ↗
                            </span>
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default NewButton;
