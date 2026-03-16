const publications = [
  {
    title: "Multimodal fusion with LLMs for engagement prediction in natural conversation",
    authors: "Cheng Ma, Kevin Hyekang Joo, Alexandria K Vail, Sunreeta Bhattacharya, Álvaro Fernández García, Kailana Baker-Matsuoka, Sheryl Mathew, Lori L Holt, Fernando De la Torre",
    venue: "ICMI 2025",
    links: [{ label: "Paper", url: "https://dl.acm.org/doi/pdf/10.1145/3747327.3764904" }]
  },
  {
    title: "Vinabench: Benchmark for faithful and consistent visual narratives",
    authors: "Silin Gao, Sheryl Mathew, Li Mi, Sepideh Mamooler, Mengjie Zhao, Hiromi Wakaki, Yuki Mitsufuji, Syrielle Montariol, Antoine Bosselut",
    venue: "CVPR 2025",
    links: [{ label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2025/papers/Gao_VinaBench_Benchmark_for_Faithful_and_Consistent_Visual_Narratives_CVPR_2025_paper.pdf" }]
  },
  {
    title: "Difference-masking: Choosing what to mask in continued pretraining",
    authors: "Alex Wilf, Syeda Akter, Leena Mathur, Paul Liang, Sheryl Mathew, Mengrou Shou, Eric Nyberg, Louis-Philippe Morency",
    venue: "Findings EMNLP 2023",
    links: [{ label: "Paper", url: "https://aclanthology.org/2023.findings-emnlp.881.pdf" }]
  },
  {
    title: "Social-iq 2.0 challenge: Benchmarking multimodal social understanding",
    authors: "Alex Wilf, Leena Mathur, Sheryl Mathew, Claire Ko, Youssouf Kebe, Paul Pu Liang, Louis-Philippe Morency",
    venue: "ICCV 2023",
    links: [{ label: "Challenge Website", url: "https://cmu-multicomp-lab.github.io/social-iq-2.0/" }]
  }
];

const pubList = document.querySelector("#pub-list");
const authorNameToBold = "Sheryl Mathew";

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const boldAuthorName = (authors) => {
  const pattern = new RegExp(escapeRegExp(authorNameToBold), "g");
  return authors.replace(pattern, `<strong>${authorNameToBold}</strong>`);
};

const renderPublications = () => {
  if (!pubList) return;

  pubList.innerHTML = "";
  publications.forEach((pub) => {
    const item = document.createElement("article");
    item.className = "pub-item";
    item.innerHTML = `
      <p class="venue">${pub.venue}</p>
      <h3>${pub.title}</h3>
      <p class="authors">${boldAuthorName(pub.authors)}</p>
      <div class="links">
        ${pub.links
          .map((link) => `<a href="${link.url}">${link.label}</a>`)
          .join("")}
      </div>
    `;
    pubList.appendChild(item);
  });
};

renderPublications();
