// int형 고정 길이 스택

class IntStack {
    constructor(maxlen) {
        this.stk = []; // 스택용 배열
        this.capacity = maxlen; // 스택의 크기
        this.ptr = 0; // 스택 포인터
    }

    //--- 스택에 x를 푸시 ---//
    push(x) {
        if (this.ptr >= this.capacity) {
            throw new Error('스택이 가득 찼습니다.');
        }
        return this.stk[this.ptr++] = x;
    }

    //--- 스택에서 데이터를 팝(정상에 있는 데이터를 꺼냄) ---//
    pop() {
        if (this.ptr <= 0) {
            throw new Error('스택이 비어있습니다.');
        }
        return this.stk[--this.ptr];
    }

    //--- 스택에서 데이터를 피크(peek, 정상에 있는 데이터를 들여다봄) ---//
    peek() {
        if (this.ptr <= 0) {
            throw new this.EmptyIntStackException();
        }
        return this.stk[this.ptr - 1];
    }

    //--- 스택을 비움 ---//
    clear() {
        this.ptr = 0;
    }

    //--- 스택에서 x를 찾아 인덱스(없으면 –1)를 반환 ---//
    indexOf(x) {
        if (this.ptr <= 0) {
            console.log("스택이 비었습니다.");
            return -1;
        }
        for (let i = 0; i < this.ptr; i++) {
            if (this.stk[i] === x) {
                return i;
            }
        }
        return -1;
    }

    //--- 스택의 크기를 반환 ---//
    getCapacity() {
        return this.capacity;
    }

    //--- 스택에 쌓여있는 데이터 갯수를 반환 ---//
    size() {
        return this.ptr;
    }

    //--- 스택이 비어있는가? ---//
    isEmpty() {
        return this.ptr <= 0;
    }

    //--- 스택이 가득 찼는가? ---//
    isFull() {
        return this.ptr >= this.capacity;
    }

    //--- 스택 안의 모든 데이터를 바닥 → 정상 순서로 표시 ---//
    dump() {
        if (this.ptr <= 0) {
            console.log("스택이 비었습니다.");
            return;
        }
        let result = '';
        for (let i = 0; i < this.ptr; i++) {
            result += this.stk[i] + ' ';
        }
        console.log(result);
    }
}

function main() {
    const s = new IntStack(4); // 최대 4 개를 푸시할 수 있는 스택

    while (true) {
        console.log(); // 메뉴 구분을 위한 빈 행 추가
        console.log(`현재 데이터 개수: ${s.size()} / ${s.getCapacity()}`);
        console.log("(1)push　(2)pop　(3)peek　(4)dump　(0)종료: ");

        const input = prompt();
        const menu = parseInt(input);
        if (menu === 0)
            break;

        let x;
        switch (menu) {
            case 1: // 푸시
                console.log("데이터: ");
                x = parseInt(prompt());
                try {
                    s.push(x);
                } catch (error) {
                    console.log(error.message);
                }
                break;

            case 2: // 팝
                try {
                    x = s.pop();
                    console.log("팝한 데이터는 " + x + "입니다.");
                } catch (error) {
                    console.log(error.message);
                }
                break;

            case 3: // 피크
                try {
                    x = s.peek();
                    console.log("피크한 데이터는 " + x + "입니다.");
                } catch (error) {
                    console.log(error.message);
                }
                break;

            case 4: // 덤프
                s.dump();
                break;
        }
    }
}

main();
