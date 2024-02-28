#include <iostream>
#include <math.h>
using namespace std;
#include "pila.h"

Pila::isEmpty(){
    if(fine==0) return true;
    return false;
}

Pila::isFull(){
    if(fine==size) return true;
    return false;
}

Pila::push(int x){
    if(!isEmpty){
        fine=x;
    }
}

Pila::pop(){
    fine--;
}