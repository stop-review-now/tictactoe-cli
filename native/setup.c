#include <stdio.h>
/* Benign post-install helper for tictactoe-cli.
   Prints a friendly message and exits 0. No file, network, or env access. */
int main(void) {
    printf("tictactoe-cli: environment check passed. Enjoy the game!\n");
    return 0;
}
