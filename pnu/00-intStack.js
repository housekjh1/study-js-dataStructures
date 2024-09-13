class IntStack {
    constructor(maxlen) {
        this.stk = [];
        this.ptr = 0;
        this.capa = maxlen;
    }
    push(x) {
        if (this.ptr >= this.capa) {
            throw new Error("Full");
            return;
        }
        return this.stk[this.ptr++] = x;
    }
    pop() {
        if (this.ptr <= 0) {
            throw new Error("Empty");
            return;
        }
        return this.stk[--this.ptr];
    }
    peek() {
        if (this.ptr <= 0) {
            throw new Error("Empty");
            return;
        }
        return this.stk[this.ptr - 1];
    }
    dump() {
        if (this.ptr <= 0) {
            throw new Error("Empty");
            return;
        }
        let result = "Dump Data : ";
        for (let i = 0; i < this.ptr; i++) {
            result += this.stk[i] + ' ';
        }
        console.log(result);
    }
    size() {
        return this.ptr;
    }
    getCapa() {
        return this.capa;
    }
}
function main() {
    const s = new IntStack(4);
    while (true) {
        console.log();
        console.log(`${s.size()} / ${s.getCapa()}`);
        console.log("(1)push (2)pop (3)peek (4)dump (0)exit");
        console.log();

        let menu = parseInt(prompt("menu"));
        if (menu === 0) break;
        let x;
        switch (menu) {
            case 1:
                console.log("Data : ");
                x = parseInt(prompt("Value"));
                try {
                    s.push(x);    
                } catch (e) {
                    console.log(e.message);
                }
                break;
            case 2:
                try {
                    x = s.pop();
                    console.log("Pop Data : " + x);
                } catch (e) {
                    console.log(e.message);
                }
                break;
            case 3:
                try {
                    x = s.peek();
                    console.log("Peek Data : " + x);
                } catch (e) {
                    console.log(e.message);
                }
                break;
            case 4:
                try {
                    s.dump();    
                } catch (e) {
                    console.log(e.message);
                }
                break;
        }
    }
}
main();
