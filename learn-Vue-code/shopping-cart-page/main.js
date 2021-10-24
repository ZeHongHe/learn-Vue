const app = new Vue({
    el:'#app',
    data:{
        books: [
            {
              id: 1,
              name: '《算法导论》',
              date: '2006-09',
              price: 85.00,
              count: 1
            },
            {
              id: 2,
              name: '《UNIX编程艺术》',
              date: '2006-02',
              price: 59.00,
              count: 1
            },
            {
              id: 3,
              name: '《编程珠玑》',
              date: '2008-10',
              price: 39.00,
              count: 1
            },
            {
              id: 3,
              name: '《代码大全》',
              date: '2006-03',
              price: 128.00,
              count: 1
            },
        ],
    },
    methods: {
        add(index) {
            this.books[index].count++;
        },
        reduce(index) {
            this.books[index].count--;
        },
        remove(index) {
            this.books.splice(index,1);
        }
    },
    filters: {
        showPrice(price) {
            return "￥" + price.toFixed(2);
        }
    },
    computed: {
        totalPrice() {
            // 1. normal
                // let price = 0;
                // for (let i = 0; i < this.books.length; i++) {
                //     price += this.books[i].price * this.books[i].count;
                // }
                // return price;

            // 2. for (... in ...)
                // let price = 0;
                // for (let i in this.books) {
                //     price += this.books[i].price * this.books[i].count;
                // }
                // return price;

            // 3. for (... of ...)
                // let price = 0;
                // for (item of this.books) {
                //     price += item.price * item.count;
                // }
                // return price;

            // 4. reduce
                // return this.books.reduce(function(preV, book) {
                //     return preV + book.price * book.count;
                // }, 0)

            // 5. reduce + "=>"
                return this.books.reduce((preV, book) => preV + book.price * book.count, 0);
        } 
    }
})
