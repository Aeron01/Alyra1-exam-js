const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']
for (let i = 0; i < tab.length; i++) {
  console.log(`${tab[i]}, lenght `)
}
console.log('\n')

for (const elem of tab) {
  console.log(`${elem},lenght`)
}