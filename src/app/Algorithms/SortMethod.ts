export class SortMethod {
    constructor(public prop: string) {
        this.prop = prop;
    }

    sortList(arr) {
        this.sort (arr, 0, arr.length-1)
    }

    sort(arr, low: number, high: number) {
        if (low < high) {
            let pi = this.partition(arr, low, high);
            this.sort(arr, low, pi - 1);
            this.sort(arr, pi + 1, high);
        }
    }

    //this is a method to find a pivot which will be used in sortList function
    partition(arr: any, low: number, high: number): number {
        let pivot: number = arr[high][this.prop];
        let i = (low - 1);
        for (let j = low; j < high; j++) {
            if (arr[j][this.prop] > pivot) {
                i++;
                //swap arr[i] and arr[j]
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        //swap arr[i+1] and arr[high] (or pivot)
        let temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }
}
