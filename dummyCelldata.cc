#include <iostream>
#include <string>
#include <stdlib.h> 

#include <ctime>



int main(){
    srand (static_cast <unsigned> (time(0)));
    for (int i = 0; i < 8000; i++){
        
        std::cout << "Event Outcome Block Year " + std::to_string((static_cast <float> (rand()) / static_cast <float> (RAND_MAX))) + "\n"; 
    }
    return 0;
}