import {
  _ as p,
  u as m,
  a as c,
  r as g,
  o as i,
  c as u,
  b as e,
  d as f,
  w as b,
  e as y,
  f as o,
  g as v,
  h,
  i as r,
  v as n,
  F as w,
} from "./index-ClkC-KWi.js";
const k = "/bahaaedu/assets/home-DDfzJlHP.webp",
  V = {
    name: "Home",
    data() {
      return { toast: m(), phone: "", name: "", message: "" };
    },
    methods: {
      sendMessage() {
        c.post("/teacher/contact", {
          name: this.name,
          phone: this.phone,
          message: this.message,
        })
          .then((a) => {
            this.toast.success(a.data.message);
          })
          .catch((a) => {
            this.toast.error(a.data.message);
          });
      },
    },
  },
  j = { class: "bg-white" },
  B = {
    class:
      "grid max-w-screen-xl gap-4 px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28",
  },
  M = { class: "mr-auto place-self-center lg:col-span-7 w-full" },
  N = { class: "space-y-4 sm:flex sm:space-y-0 sm:space-x-4 gap-5" },
  C = { id: "contact" },
  D = { class: "mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" },
  H = { class: "grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5" },
  T = { class: "rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12" };
function U(a, t, F, S, s, x) {
  const d = g("router-link");
  return (
    i(),
    u(
      w,
      null,
      [
        e("section", j, [
          e("div", B, [
            e("div", M, [
              t[6] ||
                (t[6] = e(
                  "h1",
                  {
                    class:
                      "max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-primary",
                  },
                  " بهاء الكندي ",
                  -1
                )),
              t[7] ||
                (t[7] = e(
                  "p",
                  {
                    class:
                      "max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl",
                  },
                  " بهاء الكندي هو معلم متمرس لديه اكثر من 20 سنه من الخبرة في التدريس. بصفته مرشدًا مخلصًا، يتمتع بسجل حافل من إلهام الطلاب للوصول إلى إمكاناتهم الكاملة ",
                  -1
                )),
              e("div", N, [
                this.$store.state.isAuthenticated
                  ? y("", !0)
                  : (i(),
                    f(
                      d,
                      {
                        key: 0,
                        to: "/bahaaedu/login",
                        class:
                          "inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-primary border border-primary rounded-lg sm:w-auto hover:bg-primary hover:text-white duration-300",
                      },
                      {
                        default: b(
                          () =>
                            t[4] ||
                            (t[4] = [
                              e(
                                "i",
                                { class: "bx bxs-log-in-circle text-3xl ml-2" },
                                null,
                                -1
                              ),
                              o(" تسجيل الدخول "),
                            ])
                        ),
                        _: 1,
                      }
                    )),
                t[5] ||
                  (t[5] = e(
                    "a",
                    {
                      href: "#contact",
                      class:
                        "inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-gray-900 border border-black rounded-lg sm:w-auto hover:text-primary hover:border-primary duration-300",
                    },
                    [
                      e("i", { class: "bx bxs-contact text-3xl ml-2" }),
                      o(" اتصل بنا "),
                    ],
                    -1
                  )),
              ]),
            ]),
            t[8] ||
              (t[8] = e(
                "div",
                { class: "lg:mt-0 lg:col-span-5 lg:flex" },
                [
                  e("img", {
                    src: k,
                    alt: "hero image",
                    class: "rounded-lg shadow-lg",
                  }),
                ],
                -1
              )),
          ]),
        ]),
        t[14] ||
          (t[14] = v(
            '<section id="services"><div class="bg-gray-200 flex flex-col items-center justify-center rounded-md max-w-screen-xl gap-4 px-4 pt-8 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:pt-14"><h1 class="text-2xl font-bold"> ماذا نتوقع من هذه <span class="text-primary">المنصة</span>؟ </h1><div class="services mt-10 grid grid-cols-1 gap-4 place-content-center md:grid-cols-2 lg:grid-cols-3"><div class="service flex flex-col items-center justify-center text-center gap-2"><i class="bx bxs-badge-check text-4xl text-primary"></i><h3 class="text-xl font-bold">الأسئلة والاختبارات</h3><p class="text-sm"> توفر المنصة أسئلة واختبارات لجميع المراحل الدراسية </p></div><div class="service flex flex-col items-center justify-center text-center gap-2"><i class="bx bxs-badge-check text-4xl text-primary"></i><h3 class="text-xl font-bold">شهادات</h3><p class="text-sm"> نمنحك شهادة بعد اجتياز الاختبار أو الواجب المنزلي </p></div><div class="service flex flex-col items-center justify-center text-center gap-2"><i class="bx bxs-badge-check text-4xl text-primary"></i><h3 class="text-xl font-bold">فيديوهات تعليمية</h3><p class="text-sm"> توفر المنصة فيديوهات تعليمية لجميع المراحل الدراسية </p></div></div></div></section>',
            1
          )),
        e("section", C, [
          e("div", D, [
            e("div", H, [
              t[13] ||
                (t[13] = e(
                  "div",
                  { class: "lg:col-span-2 lg:py-12" },
                  [
                    e("div", { class: "mt-8 flex flex-col gap-2" }, [
                      e("p", null, [
                        e("i", { class: "bx bxs-phone text-xl" }),
                        o(" رقم التليفون مستر بهاء :"),
                      ]),
                      e(
                        "a",
                        {
                          href: "tel:+201007038632",
                          class:
                            "text-2xl font-bold text-primary flex items-center gap-2",
                        },
                        " 01007038632 "
                      ),
                    ]),
                    e(
                      "p",
                      null,
                      " يمكنك التواصل مع مستر بهاء للحجز والاستفسار على الرقم الموضح أعلاه او من خلال هذا النموذج "
                    ),
                  ],
                  -1
                )),
              e("div", T, [
                e(
                  "form",
                  {
                    class: "space-y-4",
                    onSubmit:
                      t[3] || (t[3] = h((l) => x.sendMessage(), ["prevent"])),
                  },
                  [
                    e("div", null, [
                      t[9] ||
                        (t[9] = e(
                          "label",
                          { class: "sr-only", for: "name" },
                          "الاسم",
                          -1
                        )),
                      r(
                        e(
                          "input",
                          {
                            class:
                              "w-full rounded-lg border-gray-200 p-3 text-sm",
                            placeholder: "الاسم",
                            type: "text",
                            id: "name",
                            "onUpdate:modelValue":
                              t[0] || (t[0] = (l) => (s.name = l)),
                          },
                          null,
                          512
                        ),
                        [[n, s.name]]
                      ),
                    ]),
                    e("div", null, [
                      t[10] ||
                        (t[10] = e(
                          "label",
                          { class: "sr-only", for: "phone" },
                          "رقم التليفون",
                          -1
                        )),
                      r(
                        e(
                          "input",
                          {
                            class:
                              "w-full rounded-lg border-gray-200 p-3 text-sm",
                            placeholder: "رقم التليفون",
                            maxlength: "11",
                            minlength: "11",
                            type: "text",
                            id: "phone",
                            "onUpdate:modelValue":
                              t[1] || (t[1] = (l) => (s.phone = l)),
                          },
                          null,
                          512
                        ),
                        [[n, s.phone]]
                      ),
                    ]),
                    e("div", null, [
                      t[11] ||
                        (t[11] = e(
                          "label",
                          { class: "sr-only", for: "message" },
                          "رسالة",
                          -1
                        )),
                      r(
                        e(
                          "textarea",
                          {
                            class:
                              "w-full rounded-lg border-gray-200 p-3 text-sm",
                            placeholder: "رسالة",
                            rows: "8",
                            id: "message",
                            "onUpdate:modelValue":
                              t[2] || (t[2] = (l) => (s.message = l)),
                          },
                          null,
                          512
                        ),
                        [[n, s.message]]
                      ),
                    ]),
                    t[12] ||
                      (t[12] = e(
                        "div",
                        { class: "mt-4" },
                        [
                          e(
                            "button",
                            {
                              type: "submit",
                              class:
                                "inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto",
                            },
                            " أرسل الرسالة "
                          ),
                        ],
                        -1
                      )),
                  ],
                  32
                ),
              ]),
            ]),
          ]),
        ]),
      ],
      64
    )
  );
}
const A = p(V, [["render", U]]);
export { A as default };
