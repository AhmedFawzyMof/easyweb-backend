import {
  _ as r,
  r as _,
  o as e,
  c as a,
  j as m,
  w as u,
  b as d,
  e as i,
  t as n,
} from "./index-ClkC-KWi.js";
const h = {
    name: "Card",
    props: { data: Object },
    data() {
      return { videoLink: "" };
    },
    mounted() {
      var l;
      this.data.link.includes("embed/") &&
        this.data.link.includes("?si=") &&
        (this.videoLink =
          (l = this.data.link) == null
            ? void 0
            : l.split("embed/")[1].split("?si=")[0]);
    },
  },
  k = { class: "list p-4 border border-gray-300 rounded-lg" },
  b = ["src", "alt"],
  x = {
    key: 1,
    class:
      "cover bg-primary text-white flex items-center justify-center rounded-lg h-40",
  },
  v = ["src", "alt"],
  f = { class: "item" },
  w = { class: "text-lg font-bold" },
  y = { key: 0, class: "flex flex-col justify-between items-start" },
  g = { class: "text-sm text-gray-500", dir: "ltr" },
  j = { key: 0, class: "text-sm text-red-500", dir: "ltr" };
function C(l, s, t, B, o, L) {
  const c = _("router-link");
  return (
    e(),
    a("div", k, [
      m(
        c,
        {
          to: t.data.homework_name
            ? `/bahaaedu/homeworks/${t.data.id}`
            : t.data.test_name
            ? `/bahaaedu/tests/${t.data.id}`
            : t.data.title
            ? `/bahaaedu/videos/${t.data.id}`
            : "",
        },
        {
          default: u(() => [
            t.data.cover != "" && t.data.cover != null
              ? (e(),
                a(
                  "img",
                  {
                    key: 0,
                    src: "/bahaaedu/" + t.data.cover,
                    alt: t.data.homework_name
                      ? t.data.homework_name
                      : t.data.test_name,
                    class: "w-full h-40 object-cover rounded-lg",
                  },
                  null,
                  8,
                  b
                ))
              : t.data.cover == ""
              ? (e(),
                a(
                  "div",
                  x,
                  s[0] ||
                    (s[0] = [
                      d("i", { class: "bx bx-book-open text-4xl" }, null, -1),
                    ])
                ))
              : i("", !0),
            t.data.link != "" && t.data.link != null
              ? (e(),
                a(
                  "img",
                  {
                    key: 2,
                    src: `https://i.ytimg.com/vi_webp/${o.videoLink}/mqdefault.webp`,
                    alt: t.data.link,
                    class: "w-full h-40 object-cover",
                  },
                  null,
                  8,
                  v
                ))
              : i("", !0),
            d("div", f, [
              d(
                "h3",
                w,
                n(
                  t.data.homework_name
                    ? t.data.homework_name
                    : t.data.test_name
                    ? t.data.test_name
                    : t.data.title
                ),
                1
              ),
              !t.data.title &&
              t.data.test_name === null &&
              t.data.homework_name === null
                ? (e(),
                  a("div", y, [
                    d("p", g, n(t.data.created_at) + " : التاريخ ", 1),
                    t.data.expire_date
                      ? (e(),
                        a(
                          "p",
                          j,
                          n(t.data.expire_date) + " : تاريخ انتهاء ",
                          1
                        ))
                      : i("", !0),
                  ]))
                : i("", !0),
            ]),
          ]),
          _: 1,
        },
        8,
        ["to"]
      ),
    ])
  );
}
const V = r(h, [["render", C]]);
export { V as C };
