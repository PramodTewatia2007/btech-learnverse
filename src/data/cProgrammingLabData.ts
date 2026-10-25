import { Subject } from '../types';

export const C_PROGRAMMING_LAB: Subject = {
  id: 'c-programming-lab',
  title: 'Programming with C Lab',
  category: 'Laboratory',
  description: 'Official 11 practical C programming experiments with algorithms, flowcharts, annotated source code, sample I/O, edge cases, debugging guidance, and viva questions.',
  icon: 'Terminal',
  color: 'from-teal-600 to-green-700',
  isOfficial: true,
  syllabusSource: 'Official University Lab Syllabus (B.Tech 1st Year)',
  unitsCount: 11,
  units: [],
  experiments: [
    {
      id: 'c-lab-1',
      expNumber: 1,
      title: 'Finding the Maximum and Minimum of a Given Set of Numbers',
      aim: 'To design, write, compile, and execute a C program that finds the maximum and minimum values from a user-supplied array of numbers using linear traversal.',
      learningObjectives: [
        'Understand single-dimensional array declaration and indexing in C.',
        'Implement an efficient linear comparison algorithm in O(n) time.',
        'Handle initialization of max and min variables correctly without assuming arbitrary zero bounds.',
        'Validate input bounds against array capacity.'
      ],
      apparatus: ['GCC C99 Compiler / Clang', 'Terminal / WebAssembly Sandbox', 'Text Editor'],
      prerequisites: ['Basic integer variables', 'Single-dimensional arrays', 'For loops and if-else conditions'],
      problemStatement: 'Given a collection of n integers, find the largest and smallest numbers in the set and display them with their array index positions.',
      theory: {
        en: 'To find the extremum values in an unsorted array of size n, initialize both `max` and `min` to the first element `a[0]`. Sequentially traverse the array from index 1 to n - 1. If any element `a[i]` is greater than `max`, update `max = a[i]`. If `a[i]` is less than `min`, update `min = a[i]`. This requires exactly (n - 1) comparisons for max and up to (n - 1) comparisons for min, operating in linear time O(n) and constant auxiliary space O(1).',
        hinglish: 'Array ke pehle element ko max aur min maan lete hain (`max = arr[0]`, `min = arr[0]`). Phir index 1 se aakhri tak loop chalate hain. Agar koi element max se bada mile toh max ko update karte hain, aur min se chhota mile toh min ko update karte hain. Yeh O(n) time me solve hota hai.',
        hi: 'दिए गए n पूर्णांकों में अधिकतम तथा न्यूनतम मान ज्ञात करने हेतु प्रथम अवयव arr[0] को max व min मानकर शेष अवयवों की रैखिक तुलना की जाती है।'
      },
      equations: [
        { formula: '\\text{Time Complexity} = O(n), \\quad \\text{Space Complexity} = O(1)', symbolDefs: 'n is the number of elements in the array' }
      ],
      diagramDescription: 'Flowchart: Start → Read n → Read array elements arr[0..n-1] → Set max = arr[0], min = arr[0] → Loop i from 1 to n-1 → Is arr[i] > max? Update max. Is arr[i] < min? Update min → Print max and min → End.',
      safetyPrecautions: [
        'Do NOT initialize max to 0 or min to 0, because if all input numbers are negative (e.g. -10, -50, -3), setting max = 0 yields an incorrect answer!',
        'Ensure the number of elements n does not exceed the declared array capacity MAX_SIZE (100) to prevent buffer overflows.'
      ],
      procedure: [
        '1. Declare an integer array `arr[100]` and integer variables `n`, `i`, `max`, and `min`.',
        '2. Prompt the user to enter the number of elements n (1 ≤ n ≤ 100).',
        '3. Read the array elements using a `for` loop and `scanf`.',
        '4. Initialize `max = arr[0]` and `min = arr[0]`.',
        '5. Iterate `i` from 1 to n - 1. In each iteration, update `max` if `arr[i] > max` and update `min` if `arr[i] < min`.',
        '6. Print the computed maximum and minimum values to stdout.'
      ],
      simulationType: 'c-runner',
      defaultParams: { n: 5 },
      observationColumns: [
        { key: 'input', label: 'Input Array', unit: 'integers' },
        { key: 'max', label: 'Observed Max', unit: '' },
        { key: 'min', label: 'Observed Min', unit: '' }
      ],
      sampleObservations: [
        { input: '23 5 89 12 78', max: 89, min: 5 },
        { input: '-15 -42 -3 -88 -7', max: -3, min: -88 },
        { input: '50 50 50 50', max: 50, min: 50 }
      ],
      calculationGuide: 'Comparison count: exactly 2*(n - 1) comparisons in worst-case or (n - 1) if using if-else if.',
      resultInterpretation: 'The program successfully identifies maximum and minimum values across positive, negative, and mixed integers.',
      sourcesOfError: ['Initializing max or min with 0 instead of arr[0]', 'Array index out of bounds when reading elements'],
      algorithm: [
        'Step 1: Start the program.',
        'Step 2: Read the total count of numbers n.',
        'Step 3: Read n integers into array arr[].',
        'Step 4: Set max = arr[0] and min = arr[0].',
        'Step 5: For i = 1 to n - 1, do Steps 6 and 7.',
        'Step 6: If arr[i] > max, then set max = arr[i].',
        'Step 7: If arr[i] < min, then set min = arr[i].',
        'Step 8: Display max and min.',
        'Step 9: Stop.'
      ],
      sourceCode: `#include <stdio.h>

#define MAX_SIZE 100

int main() {
    int arr[MAX_SIZE];
    int n, i;
    int max, min;

    printf("Enter number of elements (1 to %d): ", MAX_SIZE);
    if (scanf("%d", &n) != 1 || n <= 0 || n > MAX_SIZE) {
        printf("Error: Invalid number of elements.\\n");
        return 1;
    }

    printf("Enter %d integers:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Initialize with first element
    max = arr[0];
    min = arr[0];

    // Traverse and compare
    for (i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    printf("\\n--- Results ---\\n");
    printf("Maximum element = %d\\n", max);
    printf("Minimum element = %d\\n", min);

    return 0;
}`,
      statementExplanations: [
        { statement: 'max = arr[0]; min = arr[0];', explanation: 'Correctly anchors the initial candidate values to a real element in the set.' },
        { statement: 'for (i = 1; i < n; i++)', explanation: 'Starts traversal from index 1 since index 0 is already the baseline comparison.' }
      ],
      sampleInput: `5\n23 5 89 12 78`,
      expectedOutput: `Enter number of elements (1 to 100): 5\nEnter 5 integers:\n23 5 89 12 78\n\n--- Results ---\nMaximum element = 89\nMinimum element = 5`,
      edgeCases: [
        'Single element array (n = 1): both max and min should equal arr[0].',
        'All negative integers: [-50, -20, -90] -> max is -20, min is -90.',
        'All identical elements: [7, 7, 7] -> max is 7, min is 7.'
      ],
      commonErrors: [
        'Setting `max = 0`: breaks for negative inputs.',
        'Setting loop condition `i <= n`: causes out-of-bounds memory access (accessing `arr[n]` which is invalid).'
      ],
      practiceVariations: [
        'Find the second largest and second smallest elements in the array.',
        'Return the index positions of the maximum and minimum elements.'
      ],
      vivaQuestions: [
        { question: 'What is the minimum number of comparisons needed to find both max and min in an array of size n?', answer: 'Using tournament method or pairwise comparisons, 3n/2 - 2 comparisons are sufficient.' },
        { question: 'Why is setting max = 0 a dangerous bug?', answer: 'If all array elements are negative (e.g. -5, -12, -3), max remains 0, which is incorrect because 0 was never in the array.' }
      ],
      revisionQuiz: [
        {
          id: 'c-l1-q1',
          question: {
            en: 'What is the time complexity of finding the maximum in an unsorted array of n elements?',
            hinglish: 'Unsorted array me max find karne ka time complexity kya hai?',
            hi: 'अव्यवस्थित सरणी में अधिकतम मान ज्ञात करने की समय जटिलता क्या है?'
          },
          options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
          correctIndex: 0,
          explanation: {
            en: 'Every element must be examined at least once in an unsorted array, giving O(n) time.',
            hinglish: 'Har element ko kam se kam ek baar check karna padega isliye O(n).',
            hi: 'सभी अवयवों की तुलना आवश्यक होने के कारण O(n) समय लगता है।'
          },
          hint: {
            en: "Consider how many times a linear scan checks each item.",
            hinglish: "Linear scan har item ko kitni baar check karta hai?",
            hi: "विचार करें कि लीनियर स्कैन प्रत्येक तत्व को कितनी बार जांचता है।"
          }
        }
      ]
    },
    {
      id: 'c-lab-2',
      expNumber: 2,
      title: 'Finding Roots of a Quadratic Equation',
      aim: 'To write and execute a C program that calculates the real, repeated, or complex conjugate roots of a quadratic equation ax² + bx + c = 0 based on the discriminant.',
      learningObjectives: [
        'Understand quadratic coefficients and the discriminant formula D = b² - 4ac.',
        'Use conditional branching (if, else if, else) to handle D > 0, D = 0, and D < 0.',
        'Utilize math library functions `sqrt()` and `fabs()` from `<math.h>`.',
        'Format complex numbers correctly as real ± imaginary·i.'
      ],
      apparatus: ['GCC Compiler', 'Terminal with `-lm` math linking flag'],
      prerequisites: ['Floating-point arithmetic (`double`)', 'Quadratic formula', '`<math.h>` standard library'],
      problemStatement: 'Given coefficients a, b, and c of ax² + bx + c = 0, calculate and display the roots, handling distinct real roots, equal roots, and complex conjugate roots.',
      theory: {
        en: 'For the standard quadratic equation ax² + bx + c = 0 (with a ≠ 0), the discriminant is D = b² - 4ac. When D > 0, roots are real and distinct: r1,2 = (-b ± √D) / (2a). When D = 0, roots are real and equal: r1 = r2 = -b / (2a). When D < 0, roots are complex conjugates: realPart = -b / (2a) and imagPart = √( |D| ) / (2a), giving roots realPart ± imagPart·i.',
        hinglish: 'Discriminant D = b² - 4ac se roots ka nature pata chalta hai. D > 0 par do real distinct roots aate hain, D = 0 par equal roots (-b/2a), aur D < 0 par complex conjugate roots (real ± imag·i) bante hain.',
        hi: 'द्विघात समीकरण ax² + bx + c = 0 में विविक्तकर D = b² - 4ac होता है। D > 0 पर वास्तविक भिन्न, D = 0 पर समान तथा D < 0 पर सम्मिश्र मूल प्राप्त होते हैं।'
      },
      equations: [
        { formula: 'D = b^2 - 4ac, \\quad x = \\frac{-b \\pm \\sqrt{D}}{2a}', symbolDefs: 'a ≠ 0, D is the discriminant' }
      ],
      diagramDescription: 'Flowchart: Start → Read a, b, c → Is a == 0? Print Not Quadratic → Compute D = b*b - 4*a*c → Branch on D: D > 0 (Real distinct), D == 0 (Real equal), D < 0 (Complex roots) → Print roots → End.',
      safetyPrecautions: [
        'Check if coefficient a == 0 before calculating to prevent division by zero; if a == 0, the equation reduces to linear bx + c = 0.',
        'Link the C math library by passing `-lm` to gcc (e.g. `gcc quadratic.c -lm -o quadratic`).'
      ],
      procedure: [
        '1. Include `<stdio.h>` and `<math.h>`.',
        '2. Read `a`, `b`, `c` as `double` values.',
        '3. Validate that `a != 0`.',
        '4. Calculate `discriminant = b * b - 4 * a * c`.',
        '5. If `discriminant > 0`, calculate `root1 = (-b + sqrt(d)) / (2*a)` and `root2 = (-b - sqrt(d)) / (2*a)`.',
        '6. Else if `discriminant == 0`, calculate `root1 = root2 = -b / (2*a)`.',
        '7. Else, compute `realPart = -b / (2*a)` and `imagPart = sqrt(-discriminant) / (2*a)`, and print `realPart ± imagPart i`.'
      ],
      simulationType: 'c-runner',
      defaultParams: { a: 1, b: -5, c: 6 },
      observationColumns: [
        { key: 'coeffs', label: 'Coefficients (a, b, c)', unit: '' },
        { key: 'disc', label: 'Discriminant (D)', unit: '' },
        { key: 'nature', label: 'Root Nature', unit: '' }
      ],
      sampleObservations: [
        { coeffs: '1, -5, 6', disc: '1.00', nature: 'Real & Distinct (3.00, 2.00)' },
        { coeffs: '1, -4, 4', disc: '0.00', nature: 'Real & Equal (2.00, 2.00)' },
        { coeffs: '1, 2, 5', disc: '-16.00', nature: 'Complex (-1.00 ± 2.00i)' }
      ],
      calculationGuide: 'D = (-5)² - 4(1)(6) = 25 - 24 = 1. Roots = (5 ± 1)/2 = 3 and 2.',
      resultInterpretation: 'Equation roots are accurately evaluated for all three discriminant regimes.',
      sourcesOfError: ['Forgetting -lm linker flag', 'Not handling a == 0 case'],
      algorithm: [
        'Step 1: Start.',
        'Step 2: Read coefficients a, b, c.',
        'Step 3: If a == 0, print "Not quadratic" and exit.',
        'Step 4: Compute disc = b*b - 4*a*c.',
        'Step 5: If disc > 0, r1 = (-b + sqrt(disc))/(2*a), r2 = (-b - sqrt(disc))/(2*a). Display roots.',
        'Step 6: Else if disc == 0, r1 = r2 = -b/(2*a). Display equal roots.',
        'Step 7: Else, real = -b/(2*a), imag = sqrt(-disc)/(2*a). Display real ± imag i.',
        'Step 8: Stop.'
      ],
      sourceCode: `#include <stdio.h>
#include <math.h>

int main() {
    double a, b, c;
    double discriminant, root1, root2, realPart, imagPart;

    printf("Enter coefficients a, b, and c: ");
    if (scanf("%lf %lf %lf", &a, &b, &c) != 3) {
        printf("Error reading input.\\n");
        return 1;
    }

    if (a == 0.0) {
        printf("Error: 'a' cannot be 0 for a quadratic equation.\\n");
        return 1;
    }

    discriminant = b * b - 4 * a * c;

    printf("\\nDiscriminant = %.2lf\\n", discriminant);

    if (discriminant > 0) {
        root1 = (-b + sqrt(discriminant)) / (2 * a);
        root2 = (-b - sqrt(discriminant)) / (2 * a);
        printf("Roots are real and distinct:\\n");
        printf("Root 1 = %.4lf\\n", root1);
        printf("Root 2 = %.4lf\\n", root2);
    } else if (discriminant == 0) {
        root1 = -b / (2 * a);
        printf("Roots are real and equal:\\n");
        printf("Root 1 = Root 2 = %.4lf\\n", root1);
    } else {
        realPart = -b / (2 * a);
        imagPart = sqrt(-discriminant) / (2 * a);
        printf("Roots are complex conjugates:\\n");
        printf("Root 1 = %.4lf + %.4lfi\\n", realPart, imagPart);
        printf("Root 2 = %.4lf - %.4lfi\\n", realPart, imagPart);
    }

    return 0;
}`,
      statementExplanations: [
        { statement: 'discriminant = b * b - 4 * a * c;', explanation: 'Calculates the discriminant to evaluate the nature of roots.' },
        { statement: 'imagPart = sqrt(-discriminant) / (2 * a);', explanation: 'Since discriminant is negative, -discriminant is positive and can be passed to sqrt().' }
      ],
      sampleInput: `1 -5 6`,
      expectedOutput: `Enter coefficients a, b, and c: 1 -5 6\n\nDiscriminant = 1.00\nRoots are real and distinct:\nRoot 1 = 3.0000\nRoot 2 = 2.0000`,
      edgeCases: ['a = 0 (linear equation)', 'b = 0 (pure quadratic)', 'D < 0 (imaginary roots)'],
      commonErrors: ['Passing negative discriminant directly to sqrt() without negation', 'Using integer division 2*a instead of double'],
      practiceVariations: ['Solve cubic equations using Cardano’s formula', 'Plot roots on the complex plane'],
      vivaQuestions: [
        { question: 'What does a negative discriminant indicate physically?', answer: 'The parabolic curve y = ax² + bx + c does not intersect the x-axis in the real plane.' },
        { question: 'Why is `<math.h>` required in C for quadratic roots?', answer: 'It provides the prototype for `double sqrt(double)`.' }
      ],
      revisionQuiz: [
        {
          id: 'c-l2-q1',
          question: {
            en: 'For the equation x² + 4x + 4 = 0, what is the value of the discriminant?',
            hinglish: 'x² + 4x + 4 = 0 ke liye discriminant ki value kya hogi?',
            hi: 'समीकरण x² + 4x + 4 = 0 हेतु विविक्तकर का मान क्या होगा?'
          },
          options: ['0', '16', '-16', '4'],
          correctIndex: 0,
          explanation: {
            en: 'D = 4² - 4(1)(4) = 16 - 16 = 0, indicating repeated real roots.',
            hinglish: 'D = 16 - 16 = 0, matlab dono roots equal honge (-2).',
            hi: 'D = 16 - 16 = 0, अतः मूल समान होंगे।'
          },
          hint: {
            en: "Remember b² - 4ac and how square root of negative numbers behaves.",
            hinglish: "b² - 4ac aur negative numbers ke square root ko yaad karein.",
            hi: "b² - 4ac और ऋणात्मक संख्याओं के वर्गमूल पर विचार करें।"
          }
        }
      ]
    },
    {
      id: 'c-lab-3',
      expNumber: 3,
      title: 'Calculating sin(x) and cos(x) Using Series Expansion',
      aim: 'To evaluate sin(x) and cos(x) using their Taylor/Maclaurin series expansions to a specified precision and compare the result with standard library math functions.',
      learningObjectives: [
        'Convert angle in degrees to radians (rad = deg * π / 180).',
        'Use recursive term generation (term = -term * x² / (2n*(2n+1))) to prevent factorial overflow.',
        'Apply convergence criteria (|term| < 1e-6) in a while loop.',
        'Understand numerical truncation errors in truncated power series.'
      ],
      apparatus: ['GCC Compiler', 'Terminal with `-lm`'],
      prerequisites: ['Taylor series expansion', 'While loops', 'Floating point precision'],
      problemStatement: 'Calculate sin(x) and cos(x) for an input angle in degrees using Taylor series up to an accuracy of 10⁻⁶ and compare against math.h sin() and cos().',
      theory: {
        en: 'The Maclaurin series for sin(x) is sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ... and for cos(x) is cos(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ..., where x must be in radians. Calculating factorials directly causes integer overflow for n > 12. Instead, each term can be computed iteratively from the previous term: For sin(x), term_{k} = -term_{k-1} · x² / (2k · (2k + 1)). The loop terminates when |term| < 10⁻⁶.',
        hinglish: 'sin(x) aur cos(x) ka Taylor series expansion me angle hamesha radians me hona chahiye. Agar hum directly factorial calculate karenge toh integer overflow ho jayega. Isliye agla term pichle term se multiply karke banaya jata hai: term = -term * x*x / (2k * (2k+1)).',
        hi: 'टेलर श्रेणी में कोण को रेडियन में बदलकर क्रमिक पदों की गणना की जाती है। सीधे फैक्टोरियल निकालने पर ओवरफ्लो हो जाता है, अतः पिछले पद से अगला पद ज्ञात किया जाता है।'
      },
      equations: [
        { formula: '\\sin(x) = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}, \\quad \\cos(x) = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}', symbolDefs: 'x is in radians' }
      ],
      diagramDescription: 'Flowchart: Start → Read angle in degrees → Convert to radians x → Initialize sum = x, term = x → Loop while |term| > 1e-6 → term = -term * x * x / (2i * (2i+1)) → sum += term → Compare with sin(x) from math.h → Print results → Stop.',
      safetyPrecautions: [
        'Never compute (2n+1)! directly with a separate factorial function, because 13! exceeds 32-bit integer limits (4.29 × 10⁹) and overflows.',
        'Convert angle in degrees to radians: x_rad = x_deg * (M_PI / 180.0).'
      ],
      procedure: [
        '1. Input angle in degrees from user.',
        '2. Convert to radians: `x = degrees * (3.141592653589793 / 180.0)`.',
        '3. Initialize `sum = x`, `term = x`, `i = 1`.',
        '4. Loop while `fabs(term) > 1e-6`: update `term = -term * x * x / ((2*i) * (2*i + 1))`, add `term` to `sum`, increment `i`.',
        '5. Display the series computed sum and compare with standard library `sin(x)`.',
        '6. Repeat similarly for `cos(x)`.'
      ],
      simulationType: 'c-runner',
      defaultParams: { degrees: 30 },
      observationColumns: [
        { key: 'deg', label: 'Angle (Deg)', unit: '°' },
        { key: 'series', label: 'Series sin(x)', unit: '' },
        { key: 'builtin', label: 'math.h sin(x)', unit: '' },
        { key: 'err', label: 'Absolute Error', unit: '' }
      ],
      sampleObservations: [
        { deg: '30°', series: '0.500000', builtin: '0.500000', err: '0.000000' },
        { deg: '45°', series: '0.707107', builtin: '0.707107', err: '0.000000' },
        { deg: '90°', series: '1.000000', builtin: '1.000000', err: '0.000000' }
      ],
      calculationGuide: 'For 30° = π/6 = 0.5235987 rad: term0 = 0.5235987, term1 = -0.5235987³ / 6 = -0.0239246, sum = 0.499674; next term gives 0.500000.',
      resultInterpretation: 'Series results agree with standard IEEE-754 double precision up to 6 decimal places in under 6 iterations.',
      sourcesOfError: ['Using degrees directly without converting to radians', 'Factorial overflow'],
      algorithm: [
        'Step 1: Start.',
        'Step 2: Read angle in degrees.',
        'Step 3: Convert to radians: x = degrees * PI / 180.',
        'Step 4: Initialize sum = x, term = x, i = 1.',
        'Step 5: While |term| > 10^-6: term = -term * x * x / (2*i * (2*i + 1)), sum = sum + term, i = i + 1.',
        'Step 6: Display Taylor series result and math.h sin(x).',
        'Step 7: Stop.'
      ],
      sourceCode: `#include <stdio.h>
#include <math.h>

#define PI 3.14159265358979323846
#define ACCURACY 1e-6

int main() {
    double degrees, x;
    double sin_series, sin_term;
    double cos_series, cos_term;
    int i;

    printf("Enter angle in degrees: ");
    if (scanf("%lf", &degrees) != 1) {
        printf("Invalid input.\\n");
        return 1;
    }

    // Convert degrees to radians
    x = degrees * (PI / 180.0);

    // Compute sin(x)
    sin_term = x;
    sin_series = x;
    i = 1;
    while (fabs(sin_term) > ACCURACY) {
        sin_term = -sin_term * x * x / ((2 * i) * (2 * i + 1));
        sin_series += sin_term;
        i++;
    }

    // Compute cos(x)
    cos_term = 1.0;
    cos_series = 1.0;
    i = 1;
    while (fabs(cos_term) > ACCURACY) {
        cos_term = -cos_term * x * x / ((2 * i - 1) * (2 * i));
        cos_series += cos_term;
        i++;
    }

    printf("\\n--- Comparison for %.2lf degrees (%.4lf rad) ---\\n", degrees, x);
    printf("sin(x) via Taylor Series : %.6lf\\n", sin_series);
    printf("sin(x) via math.h        : %.6lf\\n", sin(x));
    printf("Difference               : %.6e\\n\\n", fabs(sin_series - sin(x)));

    printf("cos(x) via Taylor Series : %.6lf\\n", cos_series);
    printf("cos(x) via math.h        : %.6lf\\n", cos(x));
    printf("Difference               : %.6e\\n", fabs(cos_series - cos(x)));

    return 0;
}`,
      statementExplanations: [
        { statement: 'x = degrees * (PI / 180.0);', explanation: 'Converts degrees into radians as required by trigonometric series.' },
        { statement: 'sin_term = -sin_term * x * x / ((2 * i) * (2 * i + 1));', explanation: 'Generates subsequent series terms incrementally without factorial calculation.' }
      ],
      sampleInput: `30`,
      expectedOutput: `Enter angle in degrees: 30\n\n--- Comparison for 30.00 degrees (0.5236 rad) ---\nsin(x) via Taylor Series : 0.500000\nsin(x) via math.h        : 0.500000\nDifference               : 0.000000e+00\n\ncos(x) via Taylor Series : 0.866025\ncos(x) via math.h        : 0.866025\nDifference               : 0.000000e+00`,
      edgeCases: ['0 degrees (sin=0, cos=1)', '90 degrees (sin=1, cos=0)', 'Large angles > 360 degrees'],
      commonErrors: ['Passing angle in degrees directly without radian conversion', 'Integer truncation in division (e.g. 1/2 instead of 1.0/2)'],
      practiceVariations: ['Implement e^x series expansion', 'Implement ln(1+x) for |x| < 1'],
      vivaQuestions: [
        { question: 'Why does Taylor series for sin(x) have only odd powers of x?', answer: 'Because sin(x) is an odd symmetric function (sin(-x) = -sin(x)), so all even derivatives at 0 are zero.' },
        { question: 'What is the advantage of recursive term calculation over direct factorial?', answer: 'It avoids integer overflow and reduces computational complexity from O(n²) to O(n).' }
      ],
      revisionQuiz: [
        {
          id: 'c-l3-q1',
          question: {
            en: 'What is the first derivative term in the Maclaurin expansion of cos(x) at x = 0?',
            hinglish: 'cos(x) ke Maclaurin expansion me pehla term kya hota hai?',
            hi: 'x = 0 पर cos(x) के मैक्लॉरिन विस्तार का प्रथम पद क्या है?'
          },
          options: ['1', 'x', '0', '-x²/2'],
          correctIndex: 0,
          explanation: {
            en: 'cos(0) = 1, so the leading term of the series is 1.',
            hinglish: 'cos(0) = 1 hota hai isliye pehla term 1 hai.',
            hi: 'cos(0) = 1 होने के कारण प्रथम पद 1 है।'
          },
          hint: {
            en: "Check how rapidly factorials grow in the denominator.",
            hinglish: "Denominator me factorials kitni tezi se badhte hain check karein.",
            hi: "हर में फैक्टोरियल कितनी तेजी से बढ़ते हैं इस पर ध्यान दें।"
          }
        }
      ]
    },
    {
      id: 'c-lab-4',
      expNumber: 4,
      title: 'Number-System Conversion',
      aim: 'To implement a modular C program that converts positive integers between Decimal, Binary, Octal, and Hexadecimal number systems using positional division and multiplication.',
      learningObjectives: [
        'Understand radix / base representations: 2, 8, 10, 16.',
        'Implement decimal-to-base conversion using repeated division and modulus.',
        'Implement base-to-decimal conversion using repeated multiplication by positional powers.',
        'Format hexadecimal alphabetic digits (A through F) correctly.'
      ],
      apparatus: ['GCC C99 Compiler', 'Terminal'],
      prerequisites: ['While loops', 'Character arrays and string reversal', 'Bitwise shift operators'],
      problemStatement: 'Given a decimal integer, convert and display its representation in Binary, Octal, and Hexadecimal formats, and convert an input binary string back to decimal.',
      theory: {
        en: 'To convert a decimal integer N to any base B (such as 2, 8, or 16), repeatedly divide N by B, recording the remainder at each step: `rem = N % B; N = N / B`. The remainders collected in reverse order give the digits in base B. For base 16, remainders 10 through 15 are mapped to characters \'A\' through \'F\'. Conversely, to convert a number from base B to decimal, sum each digit multiplied by B^pos.',
        hinglish: 'Decimal number ko kisi bhi base B me convert karne ke liye number ko baar baar B se divide karte hain aur remainder note karte hain. Remainder ko reverse order me padhne par converted number milta hai. Hexadecimal me 10 se 15 ko A se F likhte hain.',
        hi: 'दशमलव संख्या को किसी आधार B (2, 8, 16) में बदलने हेतु क्रमिक भाग देकर शेषफल को उल्टे क्रम में संयोजित किया जाता है।'
      },
      equations: [
        { formula: 'N_{10} = \\sum_{i=0}^{k-1} d_i \\cdot B^i', symbolDefs: 'd_i are digits in base B' }
      ],
      diagramDescription: 'Flowchart: Start → Read decimal number N → Loop N > 0: rem = N % B, push to stack/array, N = N / B → Print array in reverse order → Stop.',
      safetyPrecautions: [
        'Handle N = 0 as an explicit special case, otherwise the `while (n > 0)` loop will not execute and print empty output.',
        'Ensure array size for binary digits is at least 33 to hold 32-bit representations.'
      ],
      procedure: [
        '1. Read a positive decimal integer `num`.',
        '2. For Binary: repeatedly extract `rem = num % 2` and `num /= 2` into array, then print in reverse.',
        '3. For Octal: extract `rem = num % 8` and `num /= 8`, print in reverse.',
        '4. For Hexadecimal: extract `rem = num % 16`; if `rem < 10` digit is `rem + \'0\'`, else `rem - 10 + \'A\'`.',
        '5. Validate against standard format specifiers `%o` and `%X`.'
      ],
      simulationType: 'c-runner',
      defaultParams: { decimal: 45 },
      observationColumns: [
        { key: 'dec', label: 'Decimal (Base 10)', unit: '' },
        { key: 'bin', label: 'Binary (Base 2)', unit: '' },
        { key: 'oct', label: 'Octal (Base 8)', unit: '' },
        { key: 'hex', label: 'Hexadecimal (Base 16)', unit: '' }
      ],
      sampleObservations: [
        { dec: '45', bin: '101101', oct: '55', hex: '2D' },
        { dec: '255', bin: '11111111', oct: '377', hex: 'FF' },
        { dec: '1024', bin: '10000000000', oct: '2000', hex: '400' }
      ],
      calculationGuide: '45 / 2 = 22 r 1; 22 / 2 = 11 r 0; 11 / 2 = 5 r 1; 5 / 2 = 2 r 1; 2 / 2 = 1 r 0; 1 / 2 = 0 r 1. Reading backward gives 101101.',
      resultInterpretation: 'All manual positional conversions match standard machine radix representations.',
      sourcesOfError: ['Forgetting to reverse the remainder list', 'Incorrect character mapping for hex A-F'],
      algorithm: [
        'Step 1: Start.',
        'Step 2: Read decimal integer n.',
        'Step 3: If n == 0, print 0 and exit.',
        'Step 4: While n > 0, store n % base in array, n = n / base.',
        'Step 5: Print array in reverse order.',
        'Step 6: Stop.'
      ],
      sourceCode: `#include <stdio.h>

void decToBinary(int n) {
    int bin[32];
    int i = 0;
    if (n == 0) { printf("0"); return; }
    while (n > 0) {
        bin[i++] = n % 2;
        n /= 2;
    }
    for (int j = i - 1; j >= 0; j--) printf("%d", bin[j]);
}

void decToOctal(int n) {
    int oct[32];
    int i = 0;
    if (n == 0) { printf("0"); return; }
    while (n > 0) {
        oct[i++] = n % 8;
        n /= 8;
    }
    for (int j = i - 1; j >= 0; j--) printf("%d", oct[j]);
}

void decToHex(int n) {
    char hex[32];
    int i = 0;
    if (n == 0) { printf("0"); return; }
    while (n > 0) {
        int rem = n % 16;
        if (rem < 10) hex[i++] = rem + '0';
        else hex[i++] = rem - 10 + 'A';
        n /= 16;
    }
    for (int j = i - 1; j >= 0; j--) printf("%c", hex[j]);
}

int main() {
    int dec;
    printf("Enter a positive decimal number: ");
    if (scanf("%d", &dec) != 1 || dec < 0) {
        printf("Error: Please enter a positive integer.\\n");
        return 1;
    }

    printf("\\n--- Conversion Results for Decimal %d ---\\n", dec);
    printf("Binary      : "); decToBinary(dec); printf("\\n");
    printf("Octal       : "); decToOctal(dec); printf("\\n");
    printf("Hexadecimal : "); decToHex(dec); printf("\\n");

    return 0;
}`,
      statementExplanations: [
        { statement: 'hex[i++] = rem - 10 + \'A\';', explanation: 'Converts remainders 10..15 into corresponding ASCII characters \'A\'..\'F\'.' },
        { statement: 'for (int j = i - 1; j >= 0; j--)', explanation: 'Prints the recorded remainders in reverse order to form the valid positional number.' }
      ],
      sampleInput: `45`,
      expectedOutput: `Enter a positive decimal number: 45\n\n--- Conversion Results for Decimal 45 ---\nBinary      : 101101\nOctal       : 55\nHexadecimal : 2D`,
      edgeCases: ['Input 0', 'Powers of two (e.g. 16, 64, 256)', 'Large 32-bit integers'],
      commonErrors: ['Printing remainders forward instead of backward', 'Missing null terminator when using strings'],
      practiceVariations: ['Convert from Binary string to Hexadecimal directly by grouping 4 bits', 'Implement fractional binary conversions'],
      vivaQuestions: [
        { question: 'Why is hexadecimal widely used in computer programming instead of binary?', answer: 'Each hex digit represents exactly 4 binary bits (nibble), making 32-bit and 64-bit memory addresses compact and human-readable.' },
        { question: 'How many bits are represented by one octal digit?', answer: 'Exactly 3 bits (2³ = 8).' }
      ],
      revisionQuiz: [
        {
          id: 'c-l4-q1',
          question: {
            en: 'What is the decimal equivalent of hexadecimal 0x1F?',
            hinglish: 'Hexadecimal 0x1F ka decimal value kya hai?',
            hi: 'हेक्साडेसिमल 0x1F का दशमलव समतुल्य क्या है?'
          },
          options: ['31', '15', '25', '30'],
          correctIndex: 0,
          explanation: {
            en: '1 × 16¹ + 15 × 16⁰ = 16 + 15 = 31.',
            hinglish: '1*16 + 15*1 = 31.',
            hi: '1 × 16 + 15 = 31।'
          },
          hint: {
            en: "Think about successive division and remainder operations.",
            hinglish: "Successive division aur remainder operations ke bare me sochein.",
            hi: "क्रमिक विभाजन और शेषफल संक्रियाओं पर विचार करें।"
          }
        }
      ]
    },
    {
      id: 'c-lab-5',
      expNumber: 5,
      title: 'Pascal\'s Triangle and Pyramid of Numbers',
      aim: 'To construct and print Pascal\'s Triangle and pyramid number patterns using nested for loops and combinatorial arithmetic in C.',
      learningObjectives: [
        'Master nested for loops (outer loop for rows, inner loops for spaces and columns).',
        'Generate Pascal triangle coefficients using nCr formula or dynamic multiplicative factor: c = c * (i - j) / j.',
        'Format pyramid output using structured terminal spacing.'
      ],
      apparatus: ['GCC Compiler', 'Terminal'],
      prerequisites: ['Nested loops', 'Combinations C(n, r)'],
      problemStatement: 'Write a C program to print n rows of Pascal’s Triangle where each entry is the sum of the two values directly above it, formatted as an equilateral pyramid.',
      theory: {
        en: 'In Pascal’s Triangle, each entry at row i and column j is the binomial coefficient C(i, j) = i! / (j! · (i - j)!). Rather than computing factorials repeatedly, each term within a row can be generated in O(1) from the previous term: `val = val * (i - j + 1) / j`. To center the pyramid, print (rows - i) spaces before each row.',
        hinglish: 'Pascal Triangle me har row ka element binomial coefficient C(n, r) hota hai. Har element upar ke do elements ka sum hota hai. Pyramid shape ke liye har row se pehle spaces print kiye jaate hain.',
        hi: 'पास्कल त्रिभुज में प्रत्येक पद द्विपद गुणांक C(n, r) होता है। इसे नेस्टेड लूप व स्पेस फॉर्मेटिंग द्वारा पिरामिड रूप में मुद्रित किया जाता है।'
      },
      equations: [
        { formula: 'C(n, r) = \\frac{n!}{r!(n-r)!}, \\quad C(n, r) = C(n-1, r-1) + C(n-1, r)', symbolDefs: 'Pascal recursion identity' }
      ],
      diagramDescription: 'Flowchart: Start → Read rows → Outer loop i = 0 to rows-1 → Print spaces → Set val = 1 → Inner loop j = 0 to i: print val, val = val * (i - j) / (j + 1) → Print newline → Stop.',
      safetyPrecautions: [
        'Use integer arithmetic with multiplication before division: `val = val * (i - j) / (j + 1)`. If you divide first, integer division truncates to 0!',
        'Limit rows to ≤ 15 to avoid 32-bit integer overflow in binomial coefficients.'
      ],
      procedure: [
        '1. Read number of rows from user.',
        '2. For row `i` from 0 to `rows - 1`:',
        '   a. Print `(rows - i)` spaces for pyramid alignment.',
        '   b. Initialize `val = 1`.',
        '   c. For `j` from 0 to `i`: print `val`, update `val = val * (i - j) / (j + 1)`.',
        '   d. Print a newline.',
        '3. Display output.'
      ],
      simulationType: 'c-runner',
      defaultParams: { rows: 5 },
      observationColumns: [
        { key: 'row', label: 'Row Index (n)', unit: '' },
        { key: 'vals', label: 'Binomial Coefficients', unit: '' }
      ],
      sampleObservations: [
        { row: '0', vals: '1' },
        { row: '1', vals: '1  1' },
        { row: '2', vals: '1  2  1' },
        { row: '3', vals: '1  3  3  1' },
        { row: '4', vals: '1  4  6  4  1' }
      ],
      calculationGuide: 'Row 4: C(4,0)=1; C(4,1)=4; C(4,2)=6; C(4,3)=4; C(4,4)=1.',
      resultInterpretation: 'Equilateral pyramid correctly centers and displays Pascal coefficients.',
      sourcesOfError: ['Performing division before multiplication in the term formula', 'Improper space padding'],
      algorithm: [
        'Step 1: Start.',
        'Step 2: Read number of rows.',
        'Step 3: For i = 0 to rows - 1, print (rows - i) spaces.',
        'Step 4: Set coef = 1. For j = 0 to i, print coef, coef = coef * (i - j)/(j + 1).',
        'Step 5: Print newline.',
        'Step 6: Stop.'
      ],
      sourceCode: `#include <stdio.h>

int main() {
    int rows, i, j, space;
    int coef = 1;

    printf("Enter number of rows (1 to 15): ");
    if (scanf("%d", &rows) != 1 || rows <= 0 || rows > 15) {
        printf("Error: Invalid row count.\\n");
        return 1;
    }

    printf("\\n--- Pascal's Triangle ---\\n\\n");
    for (i = 0; i < rows; i++) {
        // Print leading spaces for pyramid formatting
        for (space = 1; space <= rows - i; space++) {
            printf("  ");
        }

        // Print coefficients
        for (j = 0; j <= i; j++) {
            if (j == 0 || i == 0)
                coef = 1;
            else
                coef = coef * (i - j + 1) / j;

            printf("%4d", coef);
        }
        printf("\\n");
    }

    return 0;
}`,
      statementExplanations: [
        { statement: 'coef = coef * (i - j + 1) / j;', explanation: 'Calculates the next binomial coefficient iteratively in O(1) time without factorials.' },
        { statement: 'printf("%4d", coef);', explanation: 'Fixed-width format specifier ensures columns remain symmetrically aligned.' }
      ],
      sampleInput: `5`,
      expectedOutput: `Enter number of rows (1 to 15): 5\n\n--- Pascal's Triangle ---\n\n            1\n          1   1\n        1   2   1\n      1   3   3   1\n    1   4   6   4   1`,
      edgeCases: ['1 row', '15 rows (checks maximum width)'],
      commonErrors: ['Using %d instead of width-aligned %4d', 'Integer truncation in coefficient generation'],
      practiceVariations: ['Print Floyd’s Triangle of numbers', 'Print hollow pyramid pattern'],
      vivaQuestions: [
        { question: 'What is the sum of numbers in the n-th row of Pascal’s Triangle?', answer: 'The sum of the n-th row (0-indexed) is exactly 2^n.' },
        { question: 'How is Pascal’s Triangle related to probability?', answer: 'The rows represent the coefficients of the binomial distribution (p + q)^n.' }
      ],
      revisionQuiz: [
        {
          id: 'c-l5-q1',
          question: {
            en: 'What is the sum of coefficients in row 4 (1, 4, 6, 4, 1)?',
            hinglish: 'Row 4 (1, 4, 6, 4, 1) ke coefficients ka sum kya hai?',
            hi: 'पंक्ति 4 (1, 4, 6, 4, 1) के गुणांकों का योग क्या है?'
          },
          options: ['16', '15', '32', '10'],
          correctIndex: 0,
          explanation: {
            en: 'Sum = 1 + 4 + 6 + 4 + 1 = 16 = 2⁴.',
            hinglish: '2⁴ = 16.',
            hi: '2⁴ = 16।'
          },
          hint: {
            en: "Pascal values equal combination formula nCr = n! / (r! * (n-r)!).",
            hinglish: "Pascal values nCr formula ke barabar hote hain.",
            hi: "पास्कल मान nCr सूत्र के अनुरूप होते हैं।"
          }
        }
      ]
    },
    {
      id: 'c-lab-6',
      expNumber: 6,
      title: 'Recursion — Factorial, Fibonacci and GCD',
      aim: 'To design and implement recursive functions in C for Factorial calculation, Fibonacci series generation, and Greatest Common Divisor (Euclid’s algorithm), and understand the call stack.',
      learningObjectives: [
        'Understand recursive function anatomy: Base Case and Recursive Step.',
        'Visualize runtime stack frames during recursive invocation and unwinding.',
        'Implement Euclid’s algorithm for GCD in O(log(min(a, b))).',
        'Recognize stack overflow conditions from missing base cases.'
      ],
      apparatus: ['GCC Compiler', 'Terminal / Call Stack Visualizer'],
      prerequisites: ['Function declarations and prototypes', 'Passing arguments by value', 'Call stack memory'],
      problemStatement: 'Implement modular recursive functions to compute: (a) factorial of n, (b) n-th Fibonacci number, and (c) GCD of two integers a and b.',
      theory: {
        en: 'A recursive function solves a problem by calling itself on smaller instances of the same problem. Every recursive function must define: (1) A Base Case that terminates recursion without further self-calls, and (2) A Recursive Relation that progresses toward the base case. For factorial: fact(n) = n · fact(n - 1) with fact(0) = 1. For Fibonacci: fib(n) = fib(n - 1) + fib(n - 2) with fib(0) = 0, fib(1) = 1. For GCD (Euclidean): gcd(a, b) = gcd(b, a % b) with gcd(a, 0) = a.',
        hinglish: 'Recursion me function khud ko call karta hai. Do cheezein mandatory hoti hain: (1) Base Case jo recursion ko rokti hai, aur (2) Recursive Call jo problem ko chhota banati hai. Agar base case na ho toh program infinite loop me jakar Stack Overflow de deta hai.',
        hi: 'पुनरावृत्ति (Recursion) में फलन स्वयं को छोटे मानों हेतु कॉल करता है। आधार स्थिति (Base case) रिकर्शन को समाप्त करती है।'
      },
      equations: [
        { formula: 'n! = n \\times (n-1)!, \\quad \\text{gcd}(a, b) = \\text{gcd}(b, a \\pmod b)', symbolDefs: 'Recursive formulations' }
      ],
      diagramDescription: 'Flowchart & Call Stack: factorial(3) → calls factorial(2) → calls factorial(1) → calls factorial(0)=1 → unwinds: 1*1=1 → 2*1=2 → 3*2=6.',
      safetyPrecautions: [
        'Always ensure the base case is reachable for all possible inputs to prevent stack overflow segmentation faults.',
        'Factorial grows extremely fast: 13! exceeds 32-bit int, and 21! exceeds 64-bit `unsigned long long`. Use appropriate data types and validate inputs.'
      ],
      procedure: [
        '1. Implement `long long factorial(int n)` with base case `n <= 1`.',
        '2. Implement `int fibonacci(int n)` with base case `n <= 0 -> 0, n == 1 -> 1`.',
        '3. Implement `int gcd(int a, int b)` with base case `b == 0 -> return a`.',
        '4. In `main()`, prompt user for test inputs and call each recursive function.',
        '5. Display outputs with execution confirmations.'
      ],
      simulationType: 'c-runner',
      defaultParams: { factN: 5, gcdA: 48, gcdB: 18 },
      observationColumns: [
        { key: 'operation', label: 'Operation', unit: '' },
        { key: 'input', label: 'Input Parameters', unit: '' },
        { key: 'output', label: 'Recursive Result', unit: '' }
      ],
      sampleObservations: [
        { operation: 'Factorial', input: 'n = 5', output: '120' },
        { operation: 'Fibonacci', input: 'n = 7', output: '13' },
        { operation: 'GCD (Euclid)', input: 'a = 48, b = 18', output: '6' }
      ],
      calculationGuide: 'gcd(48, 18) = gcd(18, 48%18 = 12) = gcd(12, 18%12 = 6) = gcd(6, 12%6 = 0) = 6.',
      resultInterpretation: 'Recursive calls successfully push frames onto the stack and unwind correctly upon reaching the base case.',
      sourcesOfError: ['Missing base case leading to Segmentation Fault (Stack Overflow)', 'Integer overflow on large factorials'],
      algorithm: [
        'Factorial Algorithm:',
        'Step 1: If n <= 1, return 1.',
        'Step 2: Else return n * factorial(n - 1).',
        'GCD Algorithm:',
        'Step 1: If b == 0, return a.',
        'Step 2: Else return gcd(b, a % b).'
      ],
      sourceCode: `#include <stdio.h>

// Recursive Factorial
long long factorial(int n) {
    if (n <= 1) return 1; // Base case
    return (long long)n * factorial(n - 1); // Recursive step
}

// Recursive Fibonacci
int fibonacci(int n) {
    if (n <= 0) return 0; // Base case 1
    if (n == 1) return 1; // Base case 2
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive step
}

// Recursive GCD (Euclidean Algorithm)
int gcd(int a, int b) {
    if (b == 0) return a; // Base case
    return gcd(b, a % b); // Recursive step
}

int main() {
    int num = 5;
    int a = 48, b = 18;

    printf("--- Recursion Demonstrations ---\\n");
    printf("1. Factorial of %d = %lld\\n", num, factorial(num));

    printf("2. Fibonacci Series (first 8 terms): ");
    for (int i = 0; i < 8; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");

    printf("3. GCD of %d and %d = %d\\n", a, b, gcd(a, b));

    return 0;
}`,
      statementExplanations: [
        { statement: 'if (n <= 1) return 1;', explanation: 'Base case that terminates factorial recursion.' },
        { statement: 'return gcd(b, a % b);', explanation: 'Euclidean reduction step replacing (a, b) with (b, remainder).' }
      ],
      sampleInput: `None (Runs built-in test parameters)`,
      expectedOutput: `--- Recursion Demonstrations ---\n1. Factorial of 5 = 120\n2. Fibonacci Series (first 8 terms): 0 1 1 2 3 5 8 13 \n3. GCD of 48 and 18 = 6`,
      edgeCases: ['Factorial of 0 is 1', 'GCD with one number 0: gcd(a, 0) = a', 'Fibonacci for n = 0'],
      commonErrors: ['Forgetting return statement in recursive call', 'Stack overflow caused by n decrements missing boundary check'],
      practiceVariations: ['Tower of Hanoi puzzle using recursion', 'Recursive binary search'],
      vivaQuestions: [
        { question: 'What is a stack frame (activation record)?', answer: 'A block of memory pushed onto the call stack containing function parameters, local variables, and return address.' },
        { question: 'Why is naive recursive Fibonacci inefficient for large n?', answer: 'It recalculates overlapping subproblems exponentially in O(2^n) time.' }
      ],
      revisionQuiz: [
        {
          id: 'c-l6-q1',
          question: {
            en: 'What happens if a recursive function does not have a base case?',
            hinglish: 'Agar recursive function me base case na ho toh kya hota hai?',
            hi: 'यदि पुनरावृत्तीय फलन में आधार स्थिति न हो तो क्या होगा?'
          },
          options: ['Stack Overflow error occurs', 'Program compiles with warning', 'Returns 0 automatically', 'Executes once only'],
          correctIndex: 0,
          explanation: {
            en: 'Calls continue indefinitely until call stack memory is exhausted, causing a stack overflow crash.',
            hinglish: 'Memory exhaust ho jaati hai aur Stack Overflow error aata hai.',
            hi: 'कॉल स्टैक की मेमोरी समाप्त होने पर स्टैक ओवरफ्लो त्रुटि उत्पन्न होती है।'
          },
          hint: {
            en: "Recall that every recursive call adds a frame on the call stack.",
            hinglish: "Har recursive call stack par ek naya frame banati hai.",
            hi: "याद रखें कि प्रत्येक पुनरावर्ती कॉल कॉल स्टैक पर एक फ्रेम जोड़ती है।"
          }
        }
      ]
    },
    {
      id: 'c-lab-7',
      expNumber: 7,
      title: 'Matrix Addition and Multiplication Using Arrays',
      aim: 'To implement matrix addition and matrix multiplication in C using two-dimensional arrays, with dimension validation and nested loop algorithms.',
      learningObjectives: [
        'Understand two-dimensional array row-major memory mapping `a[row][col]`.',
        'Validate compatibility conditions: Same dimensions for addition (r1==r2 && c1==c2); Inner dimension match for multiplication (c1 == r2).',
        'Implement the 3-nested-loop matrix multiplication algorithm in O(r1 · c1 · c2) time.'
      ],
      apparatus: ['GCC Compiler', 'Terminal'],
      prerequisites: ['2D arrays', 'Triple nested loops', 'Matrix arithmetic rules'],
      problemStatement: 'Read two matrices A (r1 × c1) and B (r2 × c2). If compatible, compute and print Matrix Addition (A + B) and Matrix Multiplication (A × B).',
      theory: {
        en: 'For matrix addition C = A + B, matrices must have identical dimensions r1 = r2 and c1 = c2; each element is c[i][j] = a[i][j] + b[i][j]. For matrix multiplication C = A × B, the number of columns in A must equal the number of rows in B (c1 = r2). The resulting matrix C has dimensions r1 × c2, where each entry is the dot product of row i of A and column j of B: c[i][j] = sum_{k=0}^{c1-1} (a[i][k] * b[k][j]).',
        hinglish: 'Matrix Addition ke liye dono matrix ka order bilkul same hona chahiye. Matrix Multiplication ke liye pehle matrix ke columns doosre matrix ke rows ke barabar hone chahiye (c1 == r2). Multiplication me teen nested loops lagte hain.',
        hi: 'आव्यूह योग हेतु कोटि समान होना अनिवार्य है। गुणन हेतु प्रथम आव्यूह के स्तंभ द्वितीय की पंक्तियों के समान होने चाहिए।'
      },
      equations: [
        { formula: 'C_{ij} = A_{ij} + B_{ij}, \\quad C_{ij} = \\sum_{k=0}^{c_1-1} A_{ik} \\cdot B_{kj}', symbolDefs: 'c1 = r2 compatibility condition' }
      ],
      diagramDescription: 'Flowchart: Start → Read r1, c1 and r2, c2 → Check c1 == r2? If no, print Incompatible → Loop i=0..r1, j=0..c2, k=0..c1: c[i][j] += a[i][k] * b[k][j] → Print C → Stop.',
      safetyPrecautions: [
        'Always zero-initialize the product accumulator matrix `C[i][j] = 0` before running the inner k loop.',
        'Strictly verify that `c1 == r2` before attempting multiplication, otherwise invalid out-of-bounds memory is accessed.'
      ],
      procedure: [
        '1. Input dimensions r1, c1 for Matrix A, and r2, c2 for Matrix B.',
        '2. Read elements of Matrix A and Matrix B.',
        '3. For addition: check if `r1 == r2 && c1 == c2`. If true, compute `sum[i][j] = a[i][j] + b[i][j]`.',
        '4. For multiplication: check if `c1 == r2`. If true, initialize `prod[i][j] = 0` and compute `prod[i][j] += a[i][k] * b[k][j]` using three nested loops.',
        '5. Display the resulting matrices formatted in row-column grids.'
      ],
      simulationType: 'c-runner',
      defaultParams: { r1: 2, c1: 2, r2: 2, c2: 2 },
      observationColumns: [
        { key: 'operation', label: 'Operation', unit: '' },
        { key: 'dims', label: 'Dimensions', unit: '' },
        { key: 'status', label: 'Compatibility', unit: '' }
      ],
      sampleObservations: [
        { operation: 'Addition', dims: '2x2 and 2x2', status: 'Compatible' },
        { operation: 'Multiplication', dims: '2x3 and 3x2', status: 'Compatible (Output: 2x2)' },
        { operation: 'Multiplication', dims: '2x3 and 2x3', status: 'Incompatible (c1 != r2)' }
      ],
      calculationGuide: 'A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]. Product C11 = 1*5 + 2*7 = 19; C12 = 1*6 + 2*8 = 22; C21 = 3*5 + 4*7 = 43; C22 = 3*6 + 4*8 = 50.',
      resultInterpretation: 'Output matrix verified against linear algebra theoretical product.',
      sourcesOfError: ['Forgetting to initialize product matrix cells to 0', 'Mismatched loop indices (swapping i, j, k)'],
      algorithm: [
        'Step 1: Start.',
        'Step 2: Read r1, c1 and r2, c2.',
        'Step 3: If c1 != r2, display "Multiplication Not Possible" and exit.',
        'Step 4: For i = 0 to r1 - 1, For j = 0 to c2 - 1, set C[i][j] = 0.',
        'Step 5: For k = 0 to c1 - 1, C[i][j] = C[i][j] + A[i][k] * B[k][j].',
        'Step 6: Display matrix C.',
        'Step 7: Stop.'
      ],
      sourceCode: `#include <stdio.h>

#define MAX 10

int main() {
    int A[MAX][MAX], B[MAX][MAX], C[MAX][MAX];
    int r1 = 2, c1 = 2, r2 = 2, c2 = 2;
    int i, j, k;

    // Sample Matrix A
    A[0][0] = 1; A[0][1] = 2;
    A[1][0] = 3; A[1][1] = 4;

    // Sample Matrix B
    B[0][0] = 5; B[0][1] = 6;
    B[1][0] = 7; B[1][1] = 8;

    printf("--- Matrix A (2x2) ---\\n");
    for (i = 0; i < r1; i++) {
        for (j = 0; j < c1; j++) printf("%d\\t", A[i][j]);
        printf("\\n");
    }

    printf("\\n--- Matrix B (2x2) ---\\n");
    for (i = 0; i < r2; i++) {
        for (j = 0; j < c2; j++) printf("%d\\t", B[i][j]);
        printf("\\n");
    }

    // Matrix Addition
    if (r1 == r2 && c1 == c2) {
        printf("\\n--- Matrix Addition (A + B) ---\\n");
        for (i = 0; i < r1; i++) {
            for (j = 0; j < c1; j++) {
                printf("%d\\t", A[i][j] + B[i][j]);
            }
            printf("\\n");
        }
    }

    // Matrix Multiplication
    if (c1 != r2) {
        printf("\\nMultiplication not possible: Columns of A (%d) != Rows of B (%d)\\n", c1, r2);
    } else {
        for (i = 0; i < r1; i++) {
            for (j = 0; j < c2; j++) {
                C[i][j] = 0;
                for (k = 0; k < c1; k++) {
                    C[i][j] += A[i][k] * B[k][j];
                }
            }
        }

        printf("\\n--- Matrix Multiplication (A x B) ---\\n");
        for (i = 0; i < r1; i++) {
            for (j = 0; j < c2; j++) printf("%d\\t", C[i][j]);
            printf("\\n");
        }
    }

    return 0;
}`,
      statementExplanations: [
        { statement: 'for (k = 0; k < c1; k++) C[i][j] += A[i][k] * B[k][j];', explanation: 'Computes inner vector dot product between row i of A and column j of B.' }
      ],
      sampleInput: `None (Runs with preloaded 2x2 test matrices)`,
      expectedOutput: `--- Matrix A (2x2) ---\n1\t2\t\n3\t4\t\n\n--- Matrix B (2x2) ---\n5\t6\t\n7\t8\t\n\n--- Matrix Addition (A + B) ---\n6\t8\t\n10\t12\t\n\n--- Matrix Multiplication (A x B) ---\n19\t22\t\n43\t50\t`,
      edgeCases: ['Identity matrix multiplication (A × I = A)', 'Zero matrix multiplication', 'Rectangular matrix product (2×3 with 3×2)'],
      commonErrors: ['Not setting C[i][j] = 0 before k loop', 'Looping k up to c2 instead of c1'],
      practiceVariations: ['Compute transpose of a matrix in-place', 'Find trace and determinant of a 3x3 matrix'],
      vivaQuestions: [
        { question: 'What is the condition for multiplying matrix A (m x n) with B (p x q)?', answer: 'The inner dimensions must match: n must equal p. The resulting matrix has size m x q.' },
        { question: 'What is the time complexity of naive matrix multiplication for two n x n matrices?', answer: 'O(n³) due to the three nested loops each running n times.' }
      ],
      revisionQuiz: [
        {
          id: 'c-l7-q1',
          question: {
            en: 'If Matrix A is of order 3x4 and B is of order 4x2, what is the order of A x B?',
            hinglish: 'Agar A ka order 3x4 hai aur B ka 4x2 hai, toh A x B ka order kya hoga?',
            hi: 'यदि A की कोटि 3x4 तथा B की 4x2 है, तो A x B की कोटि क्या होगी?'
          },
          options: ['3x2', '4x4', '3x4', 'Multiplication not possible'],
          correctIndex: 0,
          explanation: {
            en: 'Columns of A (4) == Rows of B (4). The output matrix dimensions are outer dimensions: 3x2.',
            hinglish: 'Outer dimensions 3x2 bante hain.',
            hi: 'परिणामी आव्यूह की कोटि बाह्य विमाओं (3x2) के बराबर होगी।'
          },
          hint: {
            en: "Matrix product A(m x k) and B(k x n) needs columns of A to equal rows of B.",
            hinglish: "A ke columns B ke rows ke barabar hone chahiye.",
            hi: "A के कॉलम B की पंक्तियों के बराबर होने चाहिए।"
          }
        }
      ]
    },
    {
      id: 'c-lab-8',
      expNumber: 8,
      title: 'Bubble Sort and Selection Sort',
      aim: 'To implement, compare, and visualize Bubble Sort and Selection Sort algorithms on an array of integers, and evaluate swap counts and comparisons.',
      learningObjectives: [
        'Understand Bubble Sort (adjacent element comparison and bubbling largest to end).',
        'Understand Selection Sort (finding minimum in unsorted subarray and placing at beginning).',
        'Observe array state after each pass.',
        'Evaluate time complexities: Best, Average, Worst case O(n²).'
      ],
      apparatus: ['GCC Compiler', 'Terminal / Sorting Visualizer'],
      prerequisites: ['Arrays', 'Nested loops', 'Swapping with temporary variable'],
      problemStatement: 'Given an array of integers, sort the elements in ascending order using Bubble Sort and Selection Sort, printing array contents after every outer pass.',
      theory: {
        en: 'In Bubble Sort, adjacent elements are compared and swapped if out of order. After pass i, the i-th largest element settles at its correct final position at the end of the array. An optimization flag `swapped` allows O(n) best-case termination if already sorted. In Selection Sort, each pass i searches the unsorted subarray a[i..n-1] for the minimum element and performs at most one swap with a[i]. Both algorithms take O(n²) time in the average and worst cases.',
        hinglish: 'Bubble Sort me bagal wale elements ko compare karke swap karte hain, jisse sabse bada element end me pahunch jata hai. Selection Sort me baaki bache array me se sabse chhota element dhoondh kar shuru me swap karte hain. Dono ka average time O(n²) hota hai.',
        hi: 'बबल सॉर्ट में संलग्न अवयवों की तुलना कर सबसे बड़े पद को अंत में भेजा जाता है। चयन सॉर्ट में न्यूनतम अवयव खोजकर प्रारंभिक पद से बदला जाता है।'
      },
      equations: [
        { formula: '\\text{Comparisons} = \\frac{n(n-1)}{2} = O(n^2), \\quad \\text{Space} = O(1)', symbolDefs: 'In-place sorting' }
      ],
      diagramDescription: 'Pass-by-pass array state diagram showing largest element bubbling to the right in Bubble Sort, and minimum element selected to the left in Selection Sort.',
      safetyPrecautions: [
        'In Bubble Sort, the inner loop must run up to `n - i - 1` to avoid accessing out-of-bounds `a[j+1]`.',
        'In Selection Sort, update `minIndex` only, and perform the swap once after the inner loop finishes.'
      ],
      procedure: [
        '1. Initialize an unsorted array of integers.',
        '2. Bubble Sort: Outer loop `i` from 0 to `n - 2`. Inner loop `j` from 0 to `n - i - 2`. If `a[j] > a[j+1]`, swap and set `swapped = 1`. Print pass state.',
        '3. Selection Sort: Outer loop `i` from 0 to `n - 2`. Set `minIdx = i`. Inner loop `j` from `i + 1` to `n - 1`. If `a[j] < a[minIdx]`, update `minIdx = j`. Swap `a[i]` and `a[minIdx]`.',
        '4. Display sorted arrays.'
      ],
      simulationType: 'c-runner',
      defaultParams: { size: 5 },
      observationColumns: [
        { key: 'pass', label: 'Pass Number', unit: '' },
        { key: 'bubbleState', label: 'Bubble Sort State', unit: '' },
        { key: 'selectState', label: 'Selection Sort State', unit: '' }
      ],
      sampleObservations: [
        { pass: 'Initial', bubbleState: '[64, 34, 25, 12, 22]', selectState: '[64, 34, 25, 12, 22]' },
        { pass: 'Pass 1', bubbleState: '[34, 25, 12, 22, 64]', selectState: '[12, 34, 25, 64, 22]' },
        { pass: 'Pass 2', bubbleState: '[25, 12, 22, 34, 64]', selectState: '[12, 22, 25, 64, 34]' },
        { pass: 'Pass 3', bubbleState: '[12, 22, 25, 34, 64]', selectState: '[12, 22, 25, 34, 64]' }
      ],
      calculationGuide: 'Number of comparisons for n = 5: 4 + 3 + 2 + 1 = 10 comparisons.',
      resultInterpretation: 'Both sorting routines produce strictly ascending sorted sequences.',
      sourcesOfError: ['Off-by-one errors in inner loop upper bounds', 'Swapping inside Selection Sort inner loop instead of outside'],
      algorithm: [
        'Bubble Sort:',
        'Step 1: For i = 0 to n - 2, set swapped = 0.',
        'Step 2: For j = 0 to n - i - 2, if a[j] > a[j+1], swap(a[j], a[j+1]) and swapped = 1.',
        'Step 3: If swapped == 0, break early.',
        'Selection Sort:',
        'Step 1: For i = 0 to n - 2, set minIdx = i.',
        'Step 2: For j = i + 1 to n - 1, if a[j] < a[minIdx], minIdx = j.',
        'Step 3: Swap a[i] and a[minIdx].'
      ],
      sourceCode: `#include <stdio.h>

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) printf("%d ", arr[i]);
    printf("\\n");
}

void bubbleSort(int arr[], int n) {
    int i, j, temp, swapped;
    printf("\\n--- Bubble Sort Passes ---\\n");
    for (i = 0; i < n - 1; i++) {
        swapped = 0;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        printf("After Pass %d: ", i + 1);
        printArray(arr, n);
        if (!swapped) break; // Optimization: early exit
    }
}

void selectionSort(int arr[], int n) {
    int i, j, minIdx, temp;
    printf("\\n--- Selection Sort Passes ---\\n");
    for (i = 0; i < n - 1; i++) {
        minIdx = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap minimum with first element of unsorted subarray
        temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;

        printf("After Pass %d: ", i + 1);
        printArray(arr, n);
    }
}

int main() {
    int arr1[] = {64, 34, 25, 12, 22};
    int arr2[] = {64, 34, 25, 12, 22};
    int n = 5;

    printf("Original Array: ");
    printArray(arr1, n);

    bubbleSort(arr1, n);
    selectionSort(arr2, n);

    return 0;
}`,
      statementExplanations: [
        { statement: 'for (j = 0; j < n - i - 1; j++)', explanation: 'Restricts comparisons to unsorted elements because the last i elements are already in place.' },
        { statement: 'if (!swapped) break;', explanation: 'Enables best-case linear time O(n) when array is already sorted.' }
      ],
      sampleInput: `None (Uses test array [64, 34, 25, 12, 22])`,
      expectedOutput: `Original Array: 64 34 25 12 22 \n\n--- Bubble Sort Passes ---\nAfter Pass 1: 34 25 12 22 64 \nAfter Pass 2: 25 12 22 34 64 \nAfter Pass 3: 12 22 25 34 64 \nAfter Pass 4: 12 22 25 34 64 \n\n--- Selection Sort Passes ---\nAfter Pass 1: 12 34 25 64 22 \nAfter Pass 2: 12 22 25 64 34 \nAfter Pass 3: 12 22 25 64 34 \nAfter Pass 4: 12 22 25 34 64 `,
      edgeCases: ['Already sorted array', 'Reverse sorted array', 'Array with duplicate values'],
      commonErrors: ['Looping j up to n - 1 causing a[j+1] buffer overflow', 'Swapping inside selection sort inner comparison loop'],
      practiceVariations: ['Implement Insertion Sort', 'Sort strings alphabetically using strcmp'],
      vivaQuestions: [
        { question: 'Which sorting algorithm makes fewer swaps: Bubble Sort or Selection Sort?', answer: 'Selection Sort makes at most n - 1 swaps in total (O(n)), whereas Bubble Sort can make up to O(n²) swaps.' },
        { question: 'Is Bubble Sort a stable sort?', answer: 'Yes, because identical elements are never swapped when compared with `>`.' }
      ],
      revisionQuiz: [
        {
          id: 'c-l8-q1',
          question: {
            en: 'What is the maximum number of swaps made by Selection Sort on an array of size n?',
            hinglish: 'Selection Sort n elements par maximum kitne swaps karta hai?',
            hi: 'चयन सॉर्ट n आकार की सरणी पर अधिकतम कितने विनिमय (swaps) करता है?'
          },
          options: ['n - 1', 'n²', 'n(n - 1) / 2', '2n'],
          correctIndex: 0,
          explanation: {
            en: 'Selection sort performs at most one swap per outer loop pass, giving a maximum of n - 1 swaps.',
            hinglish: 'Har pass me sirf 1 swap hota hai, isliye maximum n - 1 swaps.',
            hi: 'प्रत्येक पास में अधिकतम एक स्वैप होने से कुल n - 1 स्वैप होते हैं।'
          },
          hint: {
            en: "Bubble sort bubbles largest element to the end in each pass.",
            hinglish: "Bubble sort har pass me sabse bade element ko aakhri me bhejta hai.",
            hi: "बबल सॉर्ट प्रत्येक पास में सबसे बड़े तत्व को अंत में ले जाता है।"
          }
        }
      ]
    },
    {
      id: 'c-lab-9',
      expNumber: 9,
      title: 'Linear Search and Binary Search Using Recursive and Non-Recursive Procedures',
      aim: 'To implement both iterative and recursive versions of Linear Search and Binary Search in C, and demonstrate why Binary Search requires sorted data.',
      learningObjectives: [
        'Implement Iterative and Recursive Linear Search in O(n) time.',
        'Implement Iterative and Recursive Binary Search in O(log n) time.',
        'Demonstrate precondition of sorted input for Binary Search.',
        'Compare performance and step counts between linear and logarithmic searching.'
      ],
      apparatus: ['GCC Compiler', 'Terminal'],
      prerequisites: ['Arrays', 'Functions and recursion', 'Divide-and-conquer concept'],
      problemStatement: 'Search for a target key in an array using 4 methods: (1) Iterative Linear Search, (2) Recursive Linear Search, (3) Iterative Binary Search, and (4) Recursive Binary Search.',
      theory: {
        en: 'Linear search sequentially compares each element from 0 to n - 1 until a match is found or end of array is reached; it requires no sorting and takes O(n) time. Binary search applies divide-and-conquer on a sorted array: compare key with middle element `mid = low + (high - low) / 2`. If equal, found; if key < arr[mid], search left half `high = mid - 1`; else search right half `low = mid + 1`. Binary search halves the search space each step, running in O(log n) time.',
        hinglish: 'Linear Search ek-ek karke check karta hai aur isme sorting ki zaroorat nahi hoti (O(n)). Binary Search sorted array par kaam karta hai: array ko beech (mid) se divide karke search space aadhi karta jata hai, jisse O(log n) time me search ho jata hai.',
        hi: 'रैखिक खोज O(n) समय में क्रमिक तुलना करती है। बाइनरी खोज छांटे गए (sorted) एरे को मध्य पद से विभाजित कर O(log n) में खोजती है।'
      },
      equations: [
        { formula: 'T_{\\text{linear}}(n) = O(n), \\quad T_{\\text{binary}}(n) = O(\\log_2 n)', symbolDefs: 'Binary search requires sorted array' }
      ],
      diagramDescription: 'Flowchart comparing sequential linear scanning across 10 elements vs binary halving interval [low, high] across 3 steps.',
      safetyPrecautions: [
        'Always ensure the array is sorted in ascending order before invoking Binary Search, otherwise false negatives will occur.',
        'Calculate midpoint as `mid = low + (high - low) / 2` instead of `(low + high) / 2` to prevent potential 32-bit integer addition overflow.'
      ],
      procedure: [
        '1. Implement `int linearSearchIterative(int a[], int n, int key)`.',
        '2. Implement `int linearSearchRecursive(int a[], int n, int key, int idx)`.',
        '3. Implement `int binarySearchIterative(int a[], int low, int high, int key)`.',
        '4. Implement `int binarySearchRecursive(int a[], int low, int high, int key)`.',
        '5. Test with present and absent keys and verify matching index returns.'
      ],
      simulationType: 'c-runner',
      defaultParams: { key: 42 },
      observationColumns: [
        { key: 'method', label: 'Algorithm Mode', unit: '' },
        { key: 'found', label: 'Key Found?', unit: '' },
        { key: 'idx', label: 'Index Position', unit: '' },
        { key: 'comps', label: 'Comparisons Needed', unit: '' }
      ],
      sampleObservations: [
        { method: 'Linear Search (Iterative)', found: 'Yes', idx: 'Index 5', comps: '6 comparisons' },
        { method: 'Linear Search (Recursive)', found: 'Yes', idx: 'Index 5', comps: '6 stack frames' },
        { method: 'Binary Search (Iterative)', found: 'Yes', idx: 'Index 5', comps: '3 comparisons' },
        { method: 'Binary Search (Recursive)', found: 'Yes', idx: 'Index 5', comps: '3 stack frames' }
      ],
      calculationGuide: 'For n = 1000: Linear search takes up to 1000 comparisons; Binary search takes at most ceil(log2(1000)) = 10 comparisons!',
      resultInterpretation: 'Binary search finds keys with dramatically fewer operations than linear search on sorted data.',
      sourcesOfError: ['Using binary search on an unsorted array', 'Integer overflow in mid calculation (low + high)'],
      algorithm: [
        'Binary Search (Iterative):',
        'Step 1: Set low = 0, high = n - 1.',
        'Step 2: While low <= high, do Steps 3 to 6.',
        'Step 3: mid = low + (high - low) / 2.',
        'Step 4: If arr[mid] == key, return mid.',
        'Step 5: If arr[mid] < key, low = mid + 1.',
        'Step 6: Else high = mid - 1.',
        'Step 7: Return -1 (Not found).'
      ],
      sourceCode: `#include <stdio.h>

// 1. Iterative Linear Search
int linearSearchIter(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i;
    }
    return -1;
}

// 2. Recursive Linear Search
int linearSearchRec(int arr[], int n, int key, int i) {
    if (i >= n) return -1;
    if (arr[i] == key) return i;
    return linearSearchRec(arr, n, key, i + 1);
}

// 3. Iterative Binary Search (Requires sorted array)
int binarySearchIter(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

// 4. Recursive Binary Search
int binarySearchRec(int arr[], int low, int high, int key) {
    if (low > high) return -1;
    int mid = low + (high - low) / 2;
    if (arr[mid] == key) return mid;
    if (arr[mid] < key) return binarySearchRec(arr, mid + 1, high, key);
    return binarySearchRec(arr, low, mid - 1, key);
}

int main() {
    int arr[] = {11, 22, 33, 44, 55, 66, 77, 88, 99};
    int n = 9;
    int key = 66;

    printf("Sorted Test Array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\nTarget Key: %d\\n\\n", key);

    printf("1. Linear Search (Iterative)  : Found at index %d\\n", linearSearchIter(arr, n, key));
    printf("2. Linear Search (Recursive)  : Found at index %d\\n", linearSearchRec(arr, n, key, 0));
    printf("3. Binary Search (Iterative)  : Found at index %d\\n", binarySearchIter(arr, n, key));
    printf("4. Binary Search (Recursive)  : Found at index %d\\n", binarySearchRec(arr, 0, n - 1, key));

    return 0;
}`,
      statementExplanations: [
        { statement: 'int mid = low + (high - low) / 2;', explanation: 'Safely calculates midpoint preventing 32-bit integer overflow.' },
        { statement: 'if (low > high) return -1;', explanation: 'Base case signaling the search interval is empty (target key not in array).' }
      ],
      sampleInput: `None (Runs on preloaded array)`,
      expectedOutput: `Sorted Test Array: 11 22 33 44 55 66 77 88 99 \nTarget Key: 66\n\n1. Linear Search (Iterative)  : Found at index 5\n2. Linear Search (Recursive)  : Found at index 5\n3. Binary Search (Iterative)  : Found at index 5\n4. Binary Search (Recursive)  : Found at index 5`,
      edgeCases: ['Key at first position (index 0)', 'Key at last position (index n-1)', 'Key not present in array'],
      commonErrors: ['Using (low + high) / 2 which can overflow for large indices', 'Using `low < high` instead of `low <= high` (misses single-element matches)'],
      practiceVariations: ['Count occurrences of a duplicate element using binary search', 'Find insertion index for a new element in sorted array'],
      vivaQuestions: [
        { question: 'Why does binary search require a sorted array?', answer: 'Because it relies on the monotonic property to eliminate half of the remaining elements at each step.' },
        { question: 'What is the maximum number of comparisons for binary search on an array of size 1024?', answer: 'log2(1024) + 1 = 10 + 1 = 11 comparisons.' }
      ],
      revisionQuiz: [
        {
          id: 'c-l9-q1',
          question: {
            en: 'What is the worst-case time complexity of Binary Search?',
            hinglish: 'Binary search ka worst case time complexity kya hai?',
            hi: 'बाइनरी खोज की सबसे खराब स्थिति में समय जटिलता क्या है?'
          },
          options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(1)'],
          correctIndex: 0,
          explanation: {
            en: 'Binary search halves the array each step, taking at most log2(n) iterations.',
            hinglish: 'Har step me search space aadhi hoti hai isliye O(log n).',
            hi: 'प्रत्येक चरण में अंतराल आधा होने के कारण O(log n) समय लगता है।'
          },
          hint: {
            en: "Binary search splits the search interval in half every step.",
            hinglish: "Binary search har step me search interval ko aadha kar deta hai.",
            hi: "बाइनरी सर्च प्रत्येक चरण में अंतराल को आधा कर देता है।"
          }
        }
      ]
    },
    {
      id: 'c-lab-10',
      expNumber: 10,
      title: 'String Manipulation Functions',
      aim: 'To implement custom functions for string length, string copy, string concatenation, and string comparison without using standard `<string.h>` library, while enforcing safe buffer handling.',
      learningObjectives: [
        'Understand C string representation as null-terminated (`\\0`) character arrays.',
        'Implement `my_strlen()`, `my_strcpy()`, `my_strcat()`, and `my_strcmp()`.',
        'Prevent buffer overflow vulnerabilities when copying or concatenating strings.',
        'Understand ASCII lexicographical comparison.'
      ],
      apparatus: ['GCC Compiler', 'Terminal'],
      prerequisites: ['Character arrays', 'Pointers to char', 'Null terminator (`\\0`)'],
      problemStatement: 'Implement user-defined versions of standard string manipulation functions: length calculation, string copy, concatenation, and comparison, with explicit null-terminator management.',
      theory: {
        en: 'In C, strings are 1D character arrays terminated by a null character `\\0` (ASCII 0). Without `\\0`, functions continue reading past the allocated memory buffer, causing undefined behavior or crashes. Length is the count of characters up to `\\0`. Copying transfers characters sequentially until `\\0` is copied. Concatenation locates the destination null terminator and appends source characters there. Comparison compares corresponding ASCII character values until a difference or `\\0` is encountered.',
        hinglish: 'C language me string ek character array hoti hai jiska aakhri character null terminator `\\0` hota hai. Agar null terminator na ho toh compiler memory me aage tak padhta chala jata hai jisse Segmentation Fault ho sakta hai. Length, copy, concatenation aur comparison sab null character ke reference se kaam karte hain.',
        hi: 'C भाषा में स्ट्रिंग नल-टर्मिनेटेड (`\\0`) वर्ण सरणी होती है। इसकी लंबाई, प्रतिलिपि, संयोजन तथा तुलना नल वर्ण की उपस्थिति पर निर्भर करती है।'
      },
      equations: [
        { formula: '\\text{Length} = \\sum_{c_i \\neq \\text{\\\'\\0\\\'}} 1, \\quad \\text{strcmp} = c_{1, i} - c_{2, i}', symbolDefs: 'Null-terminated string mechanics' }
      ],
      diagramDescription: 'Memory layout of string "BTech" showing 6 bytes: [\'B\', \'T\', \'e\', \'c\', \'h\', \'\\0\'] with memory addresses.',
      safetyPrecautions: [
        'Always allocate destination buffers with size at least (length + 1) to accommodate the required null terminator `\\0`.',
        'When concatenating, verify that destination buffer capacity ≥ strlen(dest) + strlen(src) + 1 to prevent buffer overflow exploits.'
      ],
      procedure: [
        '1. Implement `int my_strlen(const char *s)`: increment counter until `*s == \'\\0\'`.',
        '2. Implement `void my_strcpy(char *dest, const char *src)`: copy characters and append `\\0`.',
        '3. Implement `void my_strcat(char *dest, const char *src)`: advance to end of dest, copy src.',
        '4. Implement `int my_strcmp(const char *s1, const char *s2)`: return `*s1 - *s2`.',
        '5. Test with sample strings and display results.'
      ],
      simulationType: 'c-runner',
      defaultParams: { str1: 'Hello', str2: 'World' },
      observationColumns: [
        { key: 'fn', label: 'Custom Function', unit: '' },
        { key: 'input', label: 'Input Strings', unit: '' },
        { key: 'output', label: 'Output Result', unit: '' }
      ],
      sampleObservations: [
        { fn: 'my_strlen', input: '"LearnVerse"', output: '10 characters' },
        { fn: 'my_strcpy', input: 'dest = "", src = "Tech"', output: 'dest = "Tech"' },
        { fn: 'my_strcat', input: '"Hello " + "World"', output: '"Hello World"' },
        { fn: 'my_strcmp', input: '"Apple" vs "Apply"', output: '< 0 (\'e\' < \'y\')' }
      ],
      calculationGuide: 'my_strcmp("Apple", "Apply"): compares \'A\'-\'A\'=0, \'p\'-\'p\'=0, \'p\'-\'p\'=0, \'l\'-\'l\'=0, then \'e\'(101) - \'y\'(121) = -20 (< 0, meaning "Apple" comes first).',
      resultInterpretation: 'Custom string functions match ISO C standard library behavior with proper null-termination.',
      sourcesOfError: ['Forgetting to add null terminator `\\0` at the end of copied/concatenated strings', 'Buffer overflow in destination array'],
      algorithm: [
        'String Length Algorithm:',
        'Step 1: Set len = 0.',
        'Step 2: While s[len] != \'\\0\', len = len + 1.',
        'Step 3: Return len.',
        'String Compare Algorithm:',
        'Step 1: Loop while *s1 && (*s1 == *s2): s1++, s2++.',
        'Step 2: Return *(unsigned char*)s1 - *(unsigned char*)s2.'
      ],
      sourceCode: `#include <stdio.h>

// Custom strlen
int my_strlen(const char *s) {
    int len = 0;
    while (s[len] != '\\0') {
        len++;
    }
    return len;
}

// Custom strcpy
void my_strcpy(char *dest, const char *src) {
    int i = 0;
    while (src[i] != '\\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\\0'; // Crucial null-terminator
}

// Custom strcat
void my_strcat(char *dest, const char *src) {
    int i = 0, j = 0;
    while (dest[i] != '\\0') i++; // Find end of dest
    while (src[j] != '\\0') {
        dest[i++] = src[j++];
    }
    dest[i] = '\\0'; // Append null-terminator
}

// Custom strcmp
int my_strcmp(const char *s1, const char *s2) {
    while (*s1 && (*s1 == *s2)) {
        s1++;
        s2++;
    }
    return *(const unsigned char*)s1 - *(const unsigned char*)s2;
}

int main() {
    char s1[100] = "BTech";
    char s2[] = "LearnVerse";
    char copyDest[100];
    char catDest[100] = "Hello ";

    printf("--- String Manipulation Demonstrations ---\\n");
    printf("1. Length of '%s' = %d\\n", s1, my_strlen(s1));
    printf("   Length of '%s' = %d\\n\\n", s2, my_strlen(s2));

    my_strcpy(copyDest, s1);
    printf("2. Copied string = '%s'\\n\\n", copyDest);

    my_strcat(catDest, s2);
    printf("3. Concatenated string = '%s'\\n\\n", catDest);

    int cmp = my_strcmp("Apple", "Apply");
    printf("4. strcmp('Apple', 'Apply') = %d (Negative -> Apple < Apply)\\n", cmp);

    return 0;
}`,
      statementExplanations: [
        { statement: 'dest[i] = \'\\0\';', explanation: 'Terminates the copied/concatenated string to prevent trailing memory garbage.' },
        { statement: 'while (*s1 && (*s1 == *s2))', explanation: 'Advances pointers simultaneously as long as characters match and null terminator is not reached.' }
      ],
      sampleInput: `None (Runs on internal test strings)`,
      expectedOutput: `--- String Manipulation Demonstrations ---\n1. Length of 'BTech' = 5\n   Length of 'LearnVerse' = 10\n\n2. Copied string = 'BTech'\n\n3. Concatenated string = 'Hello LearnVerse'\n\n4. strcmp('Apple', 'Apply') = -20 (Negative -> Apple < Apply)`,
      edgeCases: ['Empty string "" (length 0)', 'Single character string', 'Identical strings comparison'],
      commonErrors: ['Omitting null-terminator causing memory corruption', 'Passing string literals to destination pointers (segfault because literals are read-only)'],
      practiceVariations: ['Implement string reversal in place (`my_strrev`)', 'Check if a string is a palindrome'],
      vivaQuestions: [
        { question: 'Why is the null character `\\0` required at the end of every C string?', answer: 'C does not store string length in array metadata, so `\\0` serves as the universal sentinel boundary marker.' },
        { question: 'What is the danger of `gets()` and why was it removed from C11?', answer: '`gets()` has no buffer length limit parameter, making buffer overflow attacks trivial; `fgets()` must be used instead.' }
      ],
      revisionQuiz: [
        {
          id: 'c-l10-q1',
          question: {
            en: 'What is the size of character array required to store the string "BTech"?',
            hinglish: '"BTech" string store karne ke liye kitne bytes ka array chahiye?',
            hi: '"BTech" स्ट्रिंग को स्टोर करने हेतु न्यूनतम कितने बाइट्स की सरणी चाहिए?'
          },
          options: ['6 bytes (5 characters + 1 null terminator)', '5 bytes', '4 bytes', '8 bytes'],
          correctIndex: 0,
          explanation: {
            en: '5 visible letters + 1 trailing null byte `\\0` = 6 bytes.',
            hinglish: '5 letters aur 1 null terminator mila kar 6 bytes.',
            hi: '5 वर्ण + 1 नल टर्मिनेटर = 6 बाइट्स।'
          },
          hint: {
            en: "Remember the null terminator character marks string end.",
            hinglish: "Null terminator string ke end ko mark karta hai.",
            hi: "नल टर्मिनेटर स्ट्रिंग के अंत को दर्शाता है।"
          }
        }
      ]
    },
    {
      id: 'c-lab-11',
      expNumber: 11,
      title: 'Counting Characters, Words and Lines in a Text File',
      aim: 'To write a C program that opens and reads a text file character-by-character using standard I/O functions, counts total characters, words, and lines, and handles EOF and file errors.',
      learningObjectives: [
        'Understand file pointers `FILE *fp` and file modes (\'r\', \'w\', \'a\').',
        'Use `fopen()`, `fgetc()`, and `fclose()` safely with NULL checks.',
        'Implement state-machine word counting (transition from whitespace to non-whitespace).',
        'Handle End-Of-File (`EOF`) correctly using `int ch`.'
      ],
      apparatus: ['GCC Compiler', 'Sample text file on disk / Virtual file buffer'],
      prerequisites: ['File I/O in C', 'Character classification functions (`isspace`)', 'EOF sentinel value'],
      problemStatement: 'Open a user-specified text file, read character-by-character until EOF, and compute the total count of characters, words (whitespace-delimited sequences), and lines.',
      theory: {
        en: 'File handling in C uses a `FILE` structure managed by `<stdio.h>`. When opening a file with `fopen("filename.txt", "r")`, if the file does not exist, `fopen` returns `NULL`. Characters are read one-by-one using `fgetc()`, which returns an `int` so it can represent all 256 byte values plus the special negative sentinel `EOF` (typically -1). A line is counted whenever a newline character `\\n` is read. Words are counted by tracking state: entering a non-space character while currently outside a word increments the word count.',
        hinglish: 'File handling me `fopen` se file open hoti hai. Agar file na mile toh pointer `NULL` hota hai jise check karna mandatory hai. `fgetc()` har character ko int ke roop me read karta hai taaki EOF (-1) ko pehchan sake. Newline `\\n` aane par line count badhta hai, aur spaces se words count hote hain.',
        hi: 'फाइल हैंडलिंग में `fopen` द्वारा फाइल खोलकर `fgetc` से EOF तक पढ़ा जाता है। वर्ण, शब्द तथा पंक्तियों की गणना स्थिति-परिवर्तन द्वारा की जाती है।'
      },
      equations: [
        { formula: '\\text{State Machine}: \\quad \\text{IN\\_WORD} \\leftrightarrow \\text{OUT\\_WORD}', symbolDefs: 'Whitespace transitions' }
      ],
      diagramDescription: 'State Diagram: OUT_WORD → Reads non-space → IN_WORD (wordCount++) → Reads space/newline/tab → OUT_WORD. Lines increment on \\n.',
      safetyPrecautions: [
        'Always declare the character variable as `int ch`, NEVER as `char ch`, because `EOF` is typically -1 and an unsigned/signed char may fail to match `EOF` correctly, causing an infinite loop!',
        'Always check if `fp == NULL` before attempting any file read operations.',
        'Always call `fclose(fp)` to flush file streams and release system file descriptors.'
      ],
      procedure: [
        '1. Prompt user for filename or create an in-memory sample file `sample.txt`.',
        '2. Open file: `fp = fopen("sample.txt", "r")`. If `fp == NULL`, print error and exit.',
        '3. Initialize counters: `chars = 0`, `words = 0`, `lines = 0`, `inWord = 0`.',
        '4. Loop while `(ch = fgetc(fp)) != EOF`:',
        '   a. `chars++`.',
        '   b. If `ch == \'\\n\'`, `lines++`.',
        '   c. If `ch == \' \' || ch == \'\\t\' || ch == \'\\n\'`, `inWord = 0`.',
        '   d. Else if `inWord == 0`, `inWord = 1; words++`.',
        '5. If `chars > 0` and last character was not `\\n`, count the final line.',
        '6. `fclose(fp)`. Display counts.'
      ],
      simulationType: 'c-runner',
      defaultParams: { filename: 'sample.txt' },
      observationColumns: [
        { key: 'metric', label: 'Metric', unit: '' },
        { key: 'count', label: 'Calculated Count', unit: '' }
      ],
      sampleObservations: [
        { metric: 'Total Characters (including spaces & newlines)', count: '142' },
        { metric: 'Total Words', count: '23' },
        { metric: 'Total Lines', count: '4' }
      ],
      calculationGuide: 'Sample text: "Welcome to BTech LearnVerse.\\nLearn from zero.\\nPractical engineering." -> 3 lines, 8 words, 62 chars.',
      resultInterpretation: 'File stream successfully read until EOF; metrics verify word-boundary state transitions.',
      sourcesOfError: ['Using char instead of int for fgetc return value', 'Failing to close file stream with fclose', 'Not handling files without trailing newline'],
      algorithm: [
        'Step 1: Start.',
        'Step 2: Open file in read mode.',
        'Step 3: If fp == NULL, display error and exit.',
        'Step 4: Initialize chars = 0, words = 0, lines = 0, inWord = 0.',
        'Step 5: While (ch = fgetc(fp)) != EOF:',
        '        chars = chars + 1.',
        '        If ch == \'\\n\', lines = lines + 1.',
        '        If ch is whitespace, inWord = 0.',
        '        Else if inWord == 0, inWord = 1, words = words + 1.',
        'Step 6: If chars > 0 and last char != \'\\n\', lines = lines + 1.',
        'Step 7: Close file. Print chars, words, lines.',
        'Step 8: Stop.'
      ],
      sourceCode: `#include <stdio.h>
#include <ctype.h>

int main() {
    FILE *fp;
    const char *filename = "sample.txt";
    int ch;
    long characters = 0, words = 0, lines = 0;
    int inWord = 0;
    int lastChar = '\\n';

    // First, create a sample text file for simulation
    fp = fopen(filename, "w");
    if (fp != NULL) {
        fputs("Welcome to BTech LearnVerse.\\n", fp);
        fputs("Learn computer programming from absolute zero.\\n", fp);
        fputs("Practice laboratory experiments step by step.\\n", fp);
        fputs("Achieve academic excellence.", fp);
        fclose(fp);
    }

    // Now open and analyze the file
    fp = fopen(filename, "r");
    if (fp == NULL) {
        printf("Error: Could not open file '%s'.\\n", filename);
        return 1;
    }

    while ((ch = fgetc(fp)) != EOF) {
        characters++;

        if (ch == '\\n') {
            lines++;
        }

        if (isspace(ch)) {
            inWord = 0;
        } else if (!inWord) {
            inWord = 1;
            words++;
        }

        lastChar = ch;
    }

    // If file ended without a trailing newline, count the final line
    if (characters > 0 && lastChar != '\\n') {
        lines++;
    }

    fclose(fp);

    printf("--- File Analysis for '%s' ---\\n", filename);
    printf("Total Characters : %ld\\n", characters);
    printf("Total Words      : %ld\\n", words);
    printf("Total Lines      : %ld\\n", lines);

    return 0;
}`,
      statementExplanations: [
        { statement: 'while ((ch = fgetc(fp)) != EOF)', explanation: 'Reads one character at a time until the End-Of-File indicator is detected.' },
        { statement: 'int ch;', explanation: 'Declared as int so it can represent all 256 valid character values as well as the negative EOF sentinel (-1).' }
      ],
      sampleInput: `None (Creates and reads sample.txt)`,
      expectedOutput: `--- File Analysis for 'sample.txt' ---\nTotal Characters : 149\nTotal Words      : 19\nTotal Lines      : 4`,
      edgeCases: ['Empty file (0 bytes -> 0 chars, 0 words, 0 lines)', 'File with only whitespace / newlines', 'File without final newline'],
      commonErrors: ['Declaring `char ch` instead of `int ch`', 'Forgetting to check if `fp == NULL`'],
      practiceVariations: ['Count frequency of each vowel in the text file', 'Copy text file content to a new file in uppercase'],
      vivaQuestions: [
        { question: 'What is EOF and what is its standard numeric value in C?', answer: 'EOF is a macro defined in `<stdio.h>` representing End-Of-File, with a standard integer value of -1.' },
        { question: 'Why must `ch` be declared as `int` rather than `char` when using `fgetc()`?', answer: '`char` may be unsigned on some architectures (0 to 255) and cannot store -1, causing `ch == EOF` to never evaluate to true.' }
      ],
      revisionQuiz: [
        {
          id: 'c-l11-q1',
          question: {
            en: 'What does `fopen()` return if the file cannot be opened?',
            hinglish: 'Agar file open nahi ho sakti toh `fopen()` kya return karta hai?',
            hi: 'यदि फाइल नहीं खुल पाती तो `fopen()` क्या लौटाता है?'
          },
          options: ['NULL pointer', 'EOF (-1)', '0', 'Throws an exception'],
          correctIndex: 0,
          explanation: {
            en: 'fopen returns NULL on failure, which must always be checked.',
            hinglish: 'Failure par NULL return karta hai.',
            hi: 'असफल होने पर NULL पॉइंटर प्राप्त होता है।'
          },
          hint: {
            en: "Check when whitespace or newline characters occur.",
            hinglish: "Whitespace ya newline characters aane par word change hota hai.",
            hi: "व्हाट्सएप या न्यूलाइन कैरेक्टर आने पर शब्द बदलता है।"
          }
        }
      ]
    }
  ],
  examQuestions: [
    {
      id: 'c-lab-eq1',
      unitNumber: 'Experiment 1',
      type: 'Viva',
      marks: 5,
      question: 'Why should max and min variables be initialized to arr[0] instead of arbitrary numbers like 0 or 999999?',
      solution: 'If the array contains only negative numbers (e.g. -10, -50, -2), initializing max to 0 will incorrectly report 0 as the maximum even though it was not in the array. Initializing with arr[0] guarantees that comparisons are always grounded in actual elements of the dataset.'
    },
    {
      id: 'c-lab-eq2',
      unitNumber: 'Experiment 2',
      type: 'Code',
      marks: 10,
      question: 'Write a C code snippet to compute real and complex roots of a quadratic equation ax² + bx + c = 0.',
      solution: 'Calculate discriminant d = b*b - 4*a*c. If d > 0: r1 = (-b + sqrt(d))/(2*a), r2 = (-b - sqrt(d))/(2*a). If d == 0: r1 = r2 = -b/(2*a). If d < 0: realPart = -b/(2*a), imagPart = sqrt(-d)/(2*a); roots are realPart ± imagPart * i.'
    },
    {
      id: 'c-lab-eq3',
      unitNumber: 'Experiment 4',
      type: 'Viva',
      marks: 5,
      question: 'Explain the mathematical algorithm to convert a decimal integer to its binary equivalent using a stack or array in C.',
      solution: 'Repeatedly divide the decimal number by 2 using integer division (n = n / 2) and record the remainder (rem = n % 2) into an array. Continue until n reaches 0. Then print the stored remainders in reverse order (LIFO).'
    },
    {
      id: 'c-lab-eq4',
      unitNumber: 'Experiment 6',
      type: 'Viva',
      marks: 5,
      question: 'What is a base case in recursion and what happens if a recursive function in C lacks a base case?',
      solution: 'A base case is the terminating condition that stops recursive calls without making further self-invocations. Without a base case, calls continue infinitely until the execution call stack exhausts available memory, resulting in a stack overflow runtime crash (segmentation fault).'
    },
    {
      id: 'c-lab-eq5',
      unitNumber: 'Experiment 7',
      type: 'Viva',
      marks: 5,
      question: 'What is the dimension compatibility rule for matrix multiplication and what is the time complexity for multiplying two n x n matrices using standard nested loops?',
      solution: 'Two matrices A(r1 x c1) and B(r2 x c2) can be multiplied if and only if c1 == r2. The resulting matrix has dimensions (r1 x c2). Standard three-nested-loop multiplication takes O(r1 * c1 * c2) time, which is O(n³) for square n x n matrices.'
    },
    {
      id: 'c-lab-eq6',
      unitNumber: 'Experiment 8',
      type: 'Viva',
      marks: 5,
      question: 'Differentiate between Bubble Sort and Selection Sort in terms of swapping operations and stability.',
      solution: 'Bubble Sort repeatedly swaps adjacent out-of-order elements (O(n²) swaps in worst case) and is stable. Selection Sort finds the absolute minimum in the unsorted subarray and performs at most 1 swap per pass (O(n) total swaps), but its basic implementation is not stable.'
    },
    {
      id: 'c-lab-eq7',
      unitNumber: 'Experiment 9',
      type: 'Viva',
      marks: 5,
      question: 'Why does Binary Search require the input array to be sorted, and how does its time complexity compare with Linear Search?',
      solution: 'Binary Search uses the sorted ordering property to eliminate half of the remaining search space with each comparison (O(log n) time). If elements are unsorted, eliminating a sub-array cannot guarantee that the target is absent from the discarded half, necessitating O(n) linear search.'
    },
    {
      id: 'c-lab-eq8',
      unitNumber: 'Experiment 11',
      type: 'Viva',
      marks: 5,
      question: 'Why must the return value of fgetc() be stored in an int variable rather than a char variable when reading a file in C?',
      solution: 'fgetc() returns either an unsigned char cast to int or EOF (-1). On architectures where char is unsigned by default (or 8-bit signed), storing into char may cause EOF (-1) to either collide with character 255 (0xFF) or never match EOF, leading to an infinite read loop.'
    }
  ]
};
