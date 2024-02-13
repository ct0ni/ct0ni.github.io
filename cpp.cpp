#include <iostream>
#include <fstream>
#include <cmath>

// Function to calculate the value of your desired function
double myFunction(double x) {
    // Example function: y = x^2
    return x * x;
}

int main() {
    // Create a file to store the data for the graph
    std::ofstream dataFile("graph_data.txt");

    // Generate data points for the graph
    for (double x = -10.0; x <= 10.0; x += 0.1) {
        double y = myFunction(x);
        dataFile << x << " " << y << std::endl;
    }

    // Close the file
    dataFile.close();

    // Use gnuplot to plot the graph
    FILE *gnuplotPipe = popen("gnuplot -persist", "w");
    if (gnuplotPipe) {
        // Plot the graph using the data from the file
        fprintf(gnuplotPipe, "plot 'graph_data.txt' with lines title 'Function: y = x^2'\n");

        // Close gnuplot
        fflush(gnuplotPipe);
        fprintf(gnuplotPipe, "exit\n");
        pclose(gnuplotPipe);
    } else {
        std::cerr << "Error: Could not open gnuplot." << std::endl;
    }

    return 0;
}