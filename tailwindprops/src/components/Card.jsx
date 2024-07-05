import React from "react";

function Card({username = "Hc", position="Not available yet",img='https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-in-headphones-showing-programming-process-on-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'}) {
  return (
    <>
      <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={img}
            alt=""
            width="784"
            height="912"
          />

          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div className="text-sky-500 dark:text-sky-400">{username}</div>
              <div className="text-slate-700 dark:text-slate-500">
                {position}
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}

export default Card;
