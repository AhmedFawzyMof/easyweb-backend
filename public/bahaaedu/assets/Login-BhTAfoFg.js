import {
  _ as c,
  u as g,
  a as f,
  r as h,
  o as w,
  c as b,
  b as s,
  j as i,
  w as d,
  h as y,
  n as l,
  i as m,
  v as u,
  k as p,
} from "./index-ClkC-KWi.js";
const v = "/bahaaedu/assets/login-CY2XPYDR.webp",
  k = {
    name: "Login",
    data() {
      return {
        username: "",
        password: "",
        error: { username: !1, password: !1 },
        toast: g(),
      };
    },
    mounted() {
      this.$store.state.isAuthenticated && this.$router.push("/bahaaedu/");
    },
    methods: {
      async login() {
        const a = "/student/login",
          e = { username: this.username, password: this.password };
        if (
          (this.username === ""
            ? (this.error.username = !0)
            : (this.error.username = !1),
          this.password === ""
            ? (this.error.password = !0)
            : (this.error.password = !1),
          this.username !== "" && this.password !== "")
        )
          try {
            const r = await f.post(a, e);
            this.$store.commit("setToken", r.data.token),
              this.toast.success("تم تسجيل الدخول بنجاح"),
              this.$router.push("/bahaaedu/");
          } catch (r) {
            this.toast.error(r.response.data.message);
          }
      },
    },
  },
  _ = { class: "bg-white w-full h-full" },
  j = { class: "lg:grid lg:min-h-screen lg:grid-cols-12" },
  C = {
    class:
      "relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6",
  },
  U = {
    class:
      "hidden lg:relative lg:block lg:p-12 lg:bg-gradient-to-t lg:from-white lg:to-transparent",
  },
  V = {
    class:
      "flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6",
  },
  B = { class: "max-w-xl lg:max-w-3xl" },
  P = { class: "relative -mt-16 block lg:hidden" },
  T = { class: "col-span-6" },
  z = { class: "col-span-6" };
function D(a, e, r, H, t, x) {
  const n = h("router-link");
  return (
    w(),
    b("section", _, [
      s("div", j, [
        s("section", C, [
          e[6] ||
            (e[6] = s(
              "img",
              {
                alt: "",
                src: v,
                class: "absolute inset-0 h-full w-full object-cover opacity-80",
              },
              null,
              -1
            )),
          s("div", U, [
            i(
              n,
              { class: "block text-white", to: "/bahaaedu/" },
              {
                default: d(
                  () =>
                    e[3] ||
                    (e[3] = [
                      s("span", { class: "sr-only" }, "Home", -1),
                      s("img", { src: p, alt: "", class: "w-80" }, null, -1),
                    ])
                ),
                _: 1,
              }
            ),
            e[4] ||
              (e[4] = s(
                "h2",
                {
                  class:
                    "mt-6 text-2xl font-bold text-primary sm:text-3xl md:text-4xl",
                },
                " مرحباً ",
                -1
              )),
            e[5] ||
              (e[5] = s(
                "p",
                { class: "mt-4 leading-relaxed text-primary/90" },
                " أكثر الأمور إمتاعاً للنفس، وغذاءً للعقل، وراحة للذات، وأنساً في هذه الدنيا هو طلب العلم، يموت الإنسان فيذهب ماله وجاهه، وتبقى إنتاجاته وأعماله في المجال العلمي حاضرة باقية. ",
                -1
              )),
          ]),
        ]),
        s("main", V, [
          s("div", B, [
            s("div", P, [
              i(
                n,
                {
                  class:
                    "inline-flex items-center justify-center rounded-md shadow-lg bg-white text-primary sm:size-20",
                  to: "/bahaaedu/",
                },
                {
                  default: d(
                    () =>
                      e[7] ||
                      (e[7] = [
                        s("span", { class: "sr-only" }, "Home", -1),
                        s("img", { src: p }, null, -1),
                      ])
                  ),
                  _: 1,
                }
              ),
              e[8] ||
                (e[8] = s(
                  "h1",
                  {
                    class:
                      "mt-2 text-2xl font-bold text-primary sm:text-3xl md:text-4xl",
                  },
                  " مرحباً ",
                  -1
                )),
              e[9] ||
                (e[9] = s(
                  "p",
                  { class: "mt-4 leading-relaxed text-primary/70 text-xs" },
                  " أكثر الأمور إمتاعاً للنفس، وغذاءً للعقل، وراحة للذات، وأنساً في هذه الدنيا هو طلب العلم، يموت الإنسان فيذهب ماله وجاهه، وتبقى إنتاجاته وأعماله في المجال العلمي حاضرة باقية. ",
                  -1
                )),
            ]),
            s(
              "form",
              {
                onSubmit: e[2] || (e[2] = y((o) => x.login(), ["prevent"])),
                class: "mt-8 grid grid-cols-6 gap-6",
              },
              [
                s("div", T, [
                  s(
                    "label",
                    {
                      for: "Username",
                      class: l([
                        "block text-sm font-medium text-gray-700",
                        { "text-red-500": t.error.username },
                      ]),
                    },
                    " اسم المستخدم ",
                    2
                  ),
                  m(
                    s(
                      "input",
                      {
                        type: "text",
                        id: "Username",
                        "onUpdate:modelValue":
                          e[0] || (e[0] = (o) => (t.username = o)),
                        class: l({
                          "mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm":
                            !0,
                          "border-red-500": t.error.username,
                        }),
                      },
                      null,
                      2
                    ),
                    [[u, t.username]]
                  ),
                ]),
                s("div", z, [
                  s(
                    "label",
                    {
                      for: "Password",
                      class: l([
                        "block text-sm font-medium text-gray-700",
                        { "text-red-500": t.error.password },
                      ]),
                    },
                    " كلمة المرور ",
                    2
                  ),
                  m(
                    s(
                      "input",
                      {
                        type: "password",
                        id: "Password",
                        "onUpdate:modelValue":
                          e[1] || (e[1] = (o) => (t.password = o)),
                        class: l({
                          "mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm":
                            !0,
                          "border-red-500": t.error.password,
                        }),
                      },
                      null,
                      2
                    ),
                    [[u, t.password]]
                  ),
                ]),
                e[10] ||
                  (e[10] = s(
                    "div",
                    { class: "col-span-6 sm:flex sm:items-center sm:gap-4" },
                    [
                      s(
                        "button",
                        {
                          class:
                            "inline-block shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-blue-500",
                        },
                        " تسجيل الدخول إلى حسابك "
                      ),
                      s(
                        "p",
                        { class: "mt-4 text-sm text-gray-500 sm:mt-0" },
                        " ليس لديك حساب بعد تواصل مع المعلم "
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
    ])
  );
}
const M = c(k, [["render", D]]);
export { M as default };
