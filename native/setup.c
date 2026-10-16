#include <stdio.h>
/* Benign post-install helper for tictactoe-cli.
   Prints a friendly versioned message and exits 0. No file, network, or env access. */
int main(void) {
    printf("tictactoe-cli v1.0: setup complete. Have fun!\n");
    return 0;
}
