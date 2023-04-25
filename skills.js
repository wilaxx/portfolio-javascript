const known = ['HTML5', 'CSS3', 'Javascript', 'Git', 'GitHub', 'C(basics)', 'Bash'];
const improvements = ['GitLab CI/CD', 'Docker', 'Docker Compose', 'Test unitaire', 'AWS', 'SSL', 'VLAN', 'bash'];
const must = ['Kubernetes', 'DevOps', 'TerraForm', 'Docker', 'Rust', 'Python', 'PHP', 'SQL', 'Powershell'];

let i = Math.floor(Math.random() * (known.length + 1));
let j = Math.floor(Math.random() * (improvements.length + 1));
let k = Math.floor(Math.random() * (must.length + 1));

console.log(`You know : ${known[i]}\nYou should practice : ${improvements[j]}\nYou must learn : ${must[k]}`);
