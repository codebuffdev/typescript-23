let categories:string[] = ["Electronics","Fashion","Footwear"];

for (let i:number = 0; i < categories.length ; i++) {
    console.log(categories[i]);
}

//for-in -> index
for (let categoriesKeyIndex in categories) {
    console.log(categories[categoriesKeyIndex])
}

//for-of -> property
for (const category of categories) {
    console.log(category)
}