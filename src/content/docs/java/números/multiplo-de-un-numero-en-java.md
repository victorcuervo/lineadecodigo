---
title: Múltiplo de un número en Java
description: "Cómo utilizar cálculos con números y operadores de módulo para poder múltiplo de un número en Java."
lastUpdated: 2025-12-16
slug: java/multiplo-de-un-numero-en-java
author: victor_cuervo
---

Los múltiplos de un número son los número resultado de multiplicar dicho número por la secuencia de números enteros. Así, los múltiplos del número 2 serían 2,4,6,8,10,12,... los múltiplos del 3 serían 3,6,9,12,15,... Para conocer si un número es múltiplo de otro, tendremos que ejecutar una división entre los dos y que el resto sea 0 (o que el cociente sea un número entero). En este caso, si queremos saber si 21 es múltiplo de 3, dividiremos uno entre otro viendo que el cociente es 7 (número entero) y el resto es 0. Por lo tanto podemos concluir que 21 es múltiplo de 3. Si queremos expresar esto mediante lenguaje [Java](https://www.manualweb.net/java/) podemos apoyarnos en el operador módulo (%), el cual nos devuelve el valor del resto de la división.


```java
int resto;
int numero1 = 21;
int numero2 = 3;

resto = numero1%numero2;

if (resto==0)
  System.out.println(numero1 + " es múltiplo de " + numero2);
else
  System.out.println(numero1 + " NO es múltiplo de " + numero2);
```


Este código [Java](https://www.manualweb.net/java/) lo podemos hacer más genérico si lo encapsulamos dentro de un método. El código sería el siguiente:


```java
public static boolean esMultiplo(int n1,int n2){
	if (n1%n2==0)
		return true;
	else
		return false;
}
```


Apoyándonos en este método podemos calcular todos los múltiplos de un número. Para ello bastará con recorrer desde el 1 hasta el número todos los valores, utilizando un bucle, y en cada iteracción llamaremos al método esMultiplo. Nos quedará el siguiente código...


```java
// Listar los multiplos de un número
// Multiplos de 240
int multiplo = 240;
System.out.print("Los multiplos de " + multiplo + " son");
for (int x=1;x<multiplo;x++){
	if (esMultiplo(multiplo,x)){
		System.out.print(" " + x);
	}
}
```


Este código no es el más óptimo, pero totalmente válido a fines didácticos.

