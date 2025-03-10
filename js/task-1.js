class Category {
    constructor() {
      this.countCategories = 0;
      this.titleCategories = [];
      this.countItemCategories = [];
    }
  
    analyzeCategories() {
      const nameTitles = document.querySelectorAll("h2");
      this.countCategories = nameTitles.length;
      
      nameTitles.forEach((title) => {
        this.titleCategories.push(title.textContent);
      });
  
      const itemCategories = document.querySelectorAll(".item ul");
      
      itemCategories.forEach((category) => {
        this.countItemCategories.push(category.children.length);
      });
  
      this.printResults();
    }
    // Виведення результату
    printResults() {
      console.log(`Number of categories: ${this.countCategories}`);
      
      this.titleCategories.forEach((title, index) => {
        console.log(`Category: ${title}`);
        console.log(`Elements: ${this.countItemCategories[index]}`);
      });
    }
  }
  
  // Використання класу
  const analyzer = new Category();
  analyzer.analyzeCategories();
  