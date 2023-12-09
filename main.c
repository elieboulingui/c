#include <stdio.h>
#include "jouer.h"
 int main (){
 bonjour();
int level = 23;
printf("niveau actuel %d\n",level);
level = reset_niveau();
printf("niveau apres reset %d\n",level);
int josue = 2;
printf("a jour%d\n",josue);
josue = josues();
printf("apres %d\n",josue);
}
