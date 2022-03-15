// const mergeTwoLists = (list1, list2) => {
//     let newList = list1;
//     for (let i = 0; i < list2.length; i++) {
//         for (let b = 0; b < list1.length; b++) {
//             if (list2[i] < list1[b] || list2[i] === list1[b]) {
//                 newList.splice(b, 0, list2[i]);
//                 break;
//             } else if (b === list1.length) {  //at the end of the inner loop
//                 newList.push(list2[i]);
//                 break;
//             }
//         }
//     }
//     return newList;
// }

const mergeTwoLists = (list1, list2) => {
    list1 = [...list1, ...list2];
    return list1.sort((a,b) => a - b);
}

// 1 receive list 1 on a new list variable
// since am merging list2 into list 1, run loop to iterate over each item of list2
// run an inner loop on list1 to compare the 
// current value of the list2 with the items in list1

// if the current item in list2 from the loop is less then the current item in list1 or
// is equal to the current item in list1 insert that item from 
// list2 at the current position of list1

// else if it searches through list1 and it doesnt find any item the current list2 number is less than
// which means that the item is bigger than all the numbers in the list1
// insert it at the end.
 




console.log(mergeTwoLists([1,2,4], [1,3,4]));