// const books = [
//     {id:1,Title:'Harry',price:350,Stock:5},
//     {id:2,Title:'potter',price:250,Stock:3},
//     {id:3,Title:'Harry',price:350,Stock:5},
//     {id:4,Title:'potter',price:250,Stock:3},
//     {id:5,Title:'PS',price:150,Stock:2}
// ];
//  const customer =[
//     {id:101,name:'hari',exist:'yes'},
//     {id:102,name:'rini',exist:'yes'},
//     {id:103,name:'jeya',exist:'no'},
//     {id:104,name:'shree',exist:'yes'},
//     {id:105,name:'mahi',exist:'no'}
// ];

// const customerChosenBookId=[1,2];
// const customerId=101;

// function removeDuplicate(){
//     const uniqueBookList=[];
//     const rBook=new Set();
//     for(const bk of books){
        
//         if(!rBook.has(bk.id)){
//             rBook.add(bk.id);
//             uniqueBookList.push(bk);
//         }
        
//     }
//     return uniqueBookList;
    
    
// }

// function filterCustomerChosenBooks(uniBookList){
//     return uniBookList.filter(book =>customerChosenBookId.includes(book.id));
// }

// function generateBill(){
//     const uniBookList=removeDuplicate();
//     console.log(uniBookList);
//     const custChosenBook=filterCustomerChosenBooks(uniBookList);
//     console.log(custChosenBook);
//     calculateDiscount(custChosenBook);


// }

// generateBill();


// function calculateDiscount(custChosenBook){
    //check
//     const currentCustomer=customers.find(customer=>customer.id === customerId);
//     console.log(currentCustomer);
//     let isExisting=currentCustomer? true:false;

//     for(let book of custChosenBook){
//         if(isExisting){
//             if(book.price >200){
//                 book.discount=book.price *(15/100);
//             }
//             else{
//                 book.discount=0;
//             }
//         }else{
//             switch(book.price){
//                 case (book.price>=100 && book.price<200):
//                     book.discount=book.price*2/100;
//                     book.price=book.price-book.discount;
//                     break;

//                 case (book.price>=200 && book.price<500):
//                         book.discount=book.price*5/100;
//                         book.price=book.price-book.discount;
//                         break;
//                 case (book.price>=500 && book.price<750):
//                         book.discount=book.price*10/100;
//                         book.price=book.price-book.discount;
//                         break;

//                 case (book.price>=750):
//                             book.discount=book.price*15/100;
//                             book.price=book.price-book.discount;
//                             break;
//                 default:
//                     book.discount=0;
//                     break;
                    
//             }
//         }
//     }
    


// }
// const bookId=[1,2,3,4,5];
// const customerId=101;


// function duplicateRemover(){
//     const newset= new Set();
//     const uniqueset=[];
//     for(const Book of books){
        
//         if(!newset.has(books.id)){
//             newset.add(books.id);
//             uniqueset.push(Book);
//                 }
//     }
//    return uniqueset;
// } 

// function generateBill(){
//     const uniqueset= duplicateRemover();
//     console.log(uniqueset);
//     const customerChoosenBook= filtercustomerChoosenBook(uniqueset);
//     console.log(customerChoosenBook);

// }
// function filtercustomerChoosenBook(uniqueset){
//     return uniqueset.filter(books => bookId.includes(books.id));
// }
// function calculateDiscount(customerChoosenBook){
//     const currentCustomer = customer.find(customer =>customer.id === customerId );
//     console.log(currentCustomer);
//     const isExistingCustomer = currentCustomer ?
//     true : false;
//     for(let book of customerChoosenBooks){
//         if(isExistingCustomer){
//             if(book.price > 200){
//                 book.discount=book.price *15/100
//             }
//             else{
//                 book.discount=0;
//             }
//             } 
//              else{

//             }

//             }
//         }
    
// generateBill();
const books = [
    { id: 1, title: 'Book A', price: 300, stock: 5 },
    { id: 2, title: 'Book B', price: 150, stock: 3 },
    { id: 3, title: 'Book C', price: 600, stock: 4 },
    { id: 2, title: 'Book B', price: 150, stock: 3 }, // Duplicate
    
];

const customers = [
    { id: 101, name: 'John Doe', isExistingCustomer: true, lastPurchase: null },
    { id: 102, name: 'Jane Smith', isExistingCustomer: false, lastPurchase: null },
];

const customerChosenBookId=[1,2];
const customerId=101;

function removeDuplicate(){
    const uniqueBookList=[];
    const rBook=new Set();
    for(const bk of books){
        
        if(!rBook.has(bk.id)){
            rBook.add(bk.id);
            uniqueBookList.push(bk);
        }
        
    }
    return uniqueBookList;
    
    
}

function filterCustomerChosenBooks(uniBookList){
    return uniBookList.filter(book =>customerChosenBookId.includes(book.id));
}

function generateBill(){
    const uniBookList=removeDuplicate();
    console.log(uniBookList);
    const custChosenBook=filterCustomerChosenBooks(uniBookList);
    console.log(custChosenBook);
    calculateDiscount(custChosenBook);


}

generateBill();


function calculateDiscount(custChosenBook){
    //check
    const currentCustomer=customers.find(customer=>customer.id === customerId);
    console.log(currentCustomer);
    let isExisting=currentCustomer? true:false;

    for(let book of custChosenBook){
        if(isExisting){
            if(book.price >200){
                book.discount=book.price *(15/100);
            }
            else{
                book.discount=0;
            }
        }else{
            switch(book.price){
                case (book.price>=100 && book.price<200):
                    book.discount=book.price*2/100;
                    book.price=book.price-book.discount;
                    break;

                case (book.price>=200 && book.price<500):
                        book.discount=book.price*5/100;
                        book.price=book.price-book.discount;
                        break;
                case (book.price>=500 && book.price<750):
                        book.discount=book.price*10/100;
                        book.price=book.price-book.discount;
                        break;

                case (book.price>=750):
                            book.discount=book.price*15/100;
                            book.price=book.price-book.discount;
                            break;
                default:
                    book.discount=0;
                    break;
                    
            }
        }
    }
  


}