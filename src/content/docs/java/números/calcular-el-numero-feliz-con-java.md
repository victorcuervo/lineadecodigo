---
title: "Calcular el número feliz con Java"
description: "Se explica cómo calcular el número feliz con Java mediante la suma de los cuadrados de sus dígitos."
lastUpdated: 2025-12-20
slug: java/calcular-el-numero-feliz-con-java
author: victor_cuervo
---

Ayer hablábamos en [el grupo de Facebook sobre Java en Español](https://www.facebook.com/groups/java.es/) (¿¿Qué todavía no estás apuntado???) sobre [el cálculo de el número feliz con Java](https://www.facebook.com/groups/java.es/permalink/415979385092650/). Pero, ¿qué es un número feliz?


Si seguimos [la descripción de la wikipedia sobre el número feliz](http://es.wikipedia.org/wiki/N%C3%BAmero_feliz), **este es aquel que, de forma iterativa, en la suma de los cuadrados de sus dígitos acaba resultando un 1**.


Es decir, para el caso del número 7, que es un número feliz, la secuencia sería la siguiente:


$$
7^2 = 49\\
4^2 + 9^2= 97\\
9^2 + 7^2 = 130\\
1^2 + 3^2 + 0^2 = 10\\
1^2 + 0^2 = 1

$$


Así que nos ponemos manos a la obra para resolver este planteamiento de el número feliz con [Java](https://www.manualweb.net/java/). Lo primero que vemos es que hay que extraer los dígitos del número. Esto ya lo explicábamos en [el artículo Dígitos de un número con Java](http://lineadecodigo.com/java/digitos-de-un-numero/). Así que es bueno que lo leas en detalle. Si bien, lo que hacemos es utilizar divisiones y el módulo del 10 (división y resto) para ir extrayendo los números del dígito.


```java
ublic static int[] digitosNumero(int iNumero){
	
	// Creamos un array del tamaño del número de dígitos del número
	String x = Integer.toString(iNumero);
	int[] iNumeros = new int[x.length()];
	
	// Método que devuelve los dígitos de un número
	int iDigito = 0;
	while (iNumero>0){
		iNumeros[iDigito] = iNumero%10;
          iNumero = iNumero/10;  
          iDigito++;
	}
	
	return iNumeros;
	
}
```


Al final hemos construido un método que dado un entero nos devuelve un array con los dígitos de dicho número. Lo siguiente será, por cada dígito del número hacer la suma de los cuadrados de los dígitos. Para calcular los cuadrados utilizamos el [método .pow()](https://www.w3api.com/Java/Math/.pow()) de la clase [Math](https://www.w3api.com/Java/Math/).


> Recuerda que la clase [Math](https://www.w3api.com/Java/Math/) es estática y no hace falta instanciarla.


El código de esta suma de dígitos al cuadrado sería:


```java
int[] iNumeros = digitosNumero(iNumero);
int iSuma = 0;

for (int x=0;x<iNumeros.length;x++)
  iSuma += Math.pow(iNumeros[x],2);
```


Ahora hay que validar si la suma es un uno o si no saldremos del bucle. En el caso de que no sea un uno volvemos a llamar a la función digitosNumero para que nos vuelva a "trocear" el nuevo número.


```java
while ((iSuma!=1) && !(bRepetido)){		

	iSuma = 0;		

	for (int x=0;x<iNumeros.length;x++)
		iSuma += Math.pow(iNumeros[x],2);				

	iNumeros = digitosNumero(iSuma);
		
}
```


Con esto ya tendríamos nuestro código que calcule si un número es un **número feliz con Java** terminado. Pero hay una cosa que se puede mejorar, y es que si el número no es feliz se mete en una secuencia infinita de calculos, ya que nunca encontrará el 1. Si bien, podemos cortar este bucle si se repite un número en la secuencia, ya que volverá a la misma secuencia.

Veamos el caso del número 2:


$$
2^2 = 4\\
4^2 = 16\\
1^2 + 6^2 = 37\\
3^2 + 7^2 = 58\\
5^2 + 8^2 = 89\\
8^2 + 9^2 = 145\\
1^2 + 4^2 + 5^2 = 42\\
4^2 + 2^2 = 20\\
2^2 + 0^2 = 4
$$


Al llegar al número 4 que ya estaba en la serie, todo se volverá a repetir de forma infinita. Es por ello que en este punto habría que cortar el cálculo.

Para implementar esto lo que hemos hecho es añadir un conjunto, es decir, un [`Set`](https://www.w3api.com/Java/Set/) al programa, al cual vamos metiendo los números, siempre y cuando el número sumado no esté. Ya que si esta significará que la secuencia se vuelve a repetir y hay que salir del bucle.



Instanciamos el [`Set`](https://www.w3api.com/Java/Set/) mediante una clase [HashSet](https://www.w3api.com/Java/HashSet/).


```java
Set<Integer> iCalculados = new HashSet<Integer>();
```


Y en mitad del bucle hacemos la comprobación o inserción en el conjunto. Para ello utilizamos los métodos [`.contains()`](https://www.w3api.com/Java/HashSet/contains/) y [`.add()`](https://www.w3api.com/Java/HashSet/add/).


```java
if (iCalculados.contains(new Integer(iSuma)))
  bRepetido = true;				
else
  iCalculados.add(new Integer(iSuma));	
```


Vemos que aparece una variable bRepetido y es que esta será el flag que utilicemos para salirnos del bucle. Así que finalmente nuestro bucle de cálculo quedará de la siguiente forma:


```java
while ((iSuma!=1) && !(bRepetido)){		
	iSuma = 0;		
	for (int x=0;x<iNumeros.length;x++)
		iSuma += Math.pow(iNumeros[x],2);				
	iNumeros = digitosNumero(iSuma);
	
	System.out.println(iSuma);
	
	if (iCalculados.contains(new Integer(iSuma)))
		bRepetido = true;				
	else
		iCalculados.add(new Integer(iSuma));			
}
```


Ya solo nos quedará imprimir si el número es un número feliz o no. Esto nos lo cuenta la variable bRepetido. :-D


```java
if (bRepetido)
	System.out.println(iNumero + " NO es un número feliz");
else
	System.out.println(iNumero + " SI es un número feliz");
```

