import React from "react";

const About: React.FC = () => {
    return (
        <div className="grid grid-cols-3 overflow-hidden gap-8 py-10">
            <div className="col-span-3 lg:col-span-1 flex justify-center">
                <div
                    className="group block
                    w-3/5 aspect-w-16 aspect-h-10
                    lg:w-full lg:aspect-w-10 lg:aspect-h-10
                    rounded-lg overflow-hidden">
                    <img
                        src="https://cdnweb01.wikitree.co.kr/webdata/editor/201912/30/img_20191230153052_44768910.jpg"
                        alt=""
                        className="object-cover pointer-events-none"/>
                </div>
            </div>
            <div className="col-span-3 lg:col-span-2">
                <h2 className="text-base text-3xl font-semibold tracking-wider">Jooyoung Cho</h2>
                <p className="mt-3 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                    scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
                    tincidunt duis.
                </p>
            </div>
        </div>
    )
}

export default About;