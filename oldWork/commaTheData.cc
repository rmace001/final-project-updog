#include <iostream>
#include <string>
#include <stdlib.h>
#include <fstream>
#include <ctime>



int main(int argc, char *argv[]){
    std::ifstream fin;
    std::string temp;
    fin.open(argv[1]);
    
    if (!fin.is_open()){
      std::cout << "Could not open file: " << argv[1] << std::endl;
      return -1;
    }
    else {
        while (std::getline(fin, temp)) {
          // process string ...
          std::cout << temp << ",\n";
        }
    }
    return 0;
}
