#include <iostream>
#include <string>
#include <stdlib.h> 

#include <ctime>


std::string getColor(float val) {
    if (val < 0.5){
        return "#3060cf";
    }
    else if(val >= 0.5 && val <= 0.6){
        return "#fffbbc";
    }
    else {
        return "#c4463a";
    }
}

int main(){
    srand (static_cast <unsigned> (time(0)));
    float value; 
    for (int i = 0; i < 558; i++){
        for (int j = 0; j < 47; j++){
            value = (static_cast <float> (rand()) / static_cast <float> (RAND_MAX));
            std::cout << "{\n\tx: " << j << ",\n\ty: " << i << ",\n\tvalue: " + std::to_string(value) + ",\n\tname: \'E102\'\n}";
            if (i == 557 && j == 46){
                std::cout << "\n";
            }
            else{
                std::cout << ",\n";
            }
        }
    }
    return 0;
}