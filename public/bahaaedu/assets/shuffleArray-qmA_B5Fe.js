import {
  _,
  o as n,
  c as o,
  b as l,
  t as d,
  e as c,
  F as h,
  l as f,
  n as p,
} from "./index-ClkC-KWi.js";
const q = {
    name: "Question",
    props: {
      question: { type: Object, required: !0 },
      index: { type: Number, required: !0 },
    },
    data() {
      return { answers: this.$store.state.answers };
    },
    methods: {
      setAnswer(s, t, e) {
        if (t === "input") {
          this.$store.commit("setAnswers", {
            questionId: this.question.id,
            answer: s,
            type: t,
            index: e,
          });
          return;
        }
        this.$store.commit("setAnswers", {
          questionId: this.question.id,
          answer: s,
          type: t,
        });
      },
      isSelected(s) {
        if (this.answers.length === 0 || !s) return !1;
        const t = this.answers.find((e) => e.questionId === this.question.id);
        return t ? t.answer === s : !1;
      },
      getInputValue(s) {
        const t = this.answers.find(
          (e) => e.questionId === this.question.id && e.type === "input"
        );
        return t ? t.answer[s] : "";
      },
    },
  },
  x = {
    class: "w-full border-2 border-primary rounded-md p-4 flex flex-col gap-2",
  },
  g = { class: "text-xl font-bold" },
  w = ["src"],
  b = { class: "text-lg" },
  v = { key: 1, class: "choices rounded-md md:p-4 flex flex-col gap-2" },
  y = ["onClick"],
  k = { class: "answer rounded-md p-4 flex flex-col gap-2" },
  I = ["value", "onInput"];
function A(s, t, e, a, C, i) {
  return (
    n(),
    o("div", x, [
      l("h1", g, "السؤال " + d(e.index), 1),
      e.question.image
        ? (n(),
          o(
            "img",
            {
              key: 0,
              src: "/bahaaedu/" + e.question.image,
              alt: "question",
              class: "w-full h-full object-cover rounded-md",
            },
            null,
            8,
            w
          ))
        : c("", !0),
      l("p", b, d(e.question.question), 1),
      e.question.choices &&
      e.question.choices[0] !== "" &&
      e.question.choices[0] !== null
        ? (n(),
          o("div", v, [
            (n(!0),
            o(
              h,
              null,
              f(
                e.question.choices,
                (r) => (
                  n(),
                  o(
                    "div",
                    {
                      class: p(
                        i.isSelected(r)
                          ? "choice bg-primary text-white rounded-md p-4 flex flex-col gap-2"
                          : "choice border border-primary rounded-md p-4 flex flex-col gap-2"
                      ),
                      key: r,
                      onClick: (u) => i.setAnswer(r, "choice"),
                    },
                    [l("p", null, d(r), 1)],
                    10,
                    y
                  )
                )
              ),
              128
            )),
          ]))
        : c("", !0),
      l("div", k, [
        (n(!0),
        o(
          h,
          null,
          f(
            Array.from({ length: e.question.inputs }),
            (r, u) => (
              n(),
              o(
                "input",
                {
                  key: u,
                  type: "text",
                  class: "input w-full rounded-md p-2 border border-primary",
                  placeholder: "اكتب الإجابة هنا",
                  value: i.getInputValue(u),
                  onInput: (m) => i.setAnswer(m.target.value, "input", u),
                },
                null,
                40,
                I
              )
            )
          ),
          128
        )),
      ]),
    ])
  );
}
const B = _(q, [["render", A]]);
function N(s) {
  for (var t = s.length - 1; t >= 0; t--) {
    var e = Math.floor(Math.random() * (t + 1)),
      a = s[t];
    (s[t] = s[e]), (s[e] = a);
  }
  return s;
}
export { B as Q, N as s };
