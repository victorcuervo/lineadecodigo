---
title: "Rellenar una matriz con una cadena en Java"
description: "Artículo que nos explica cómo rellenar una matriz con una cadena en Java. Analiza cómo se define el tamaño de la matriz y la rellena."
date: 2021-10-06
updatedDate: 2026-01-09
tags: ["array","matriz","bucles","for"]
slug: java/arrays/rellenar-una-matriz-con-una-cadena-en-java
author: victor_cuervo
type: doc
id: 0c6b831c-6526-43c6-9147-4aa2eb3aad44
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/ConvertirCadenaAMatriz.java
---

Una de las [cosas que nos habéis pedido en los comentarios](https://lineadecodigo.com/java/crear-una-matriz-en-java/#comment-115738) es ¿cómo puedo Rellenar una matriz con una cadena en [Java](https://www.manualweb.net/java)? Es decir, si tengo una cadena de texto en plan _"Soy una cadena de texto"_, esta, nos sirva para rellenar a una matriz por columnas. De esta manera, si tenemos una matriz de 3 filas, la palabra "Soy" iría en la primera columna, es decir en las posiciones (0,0), (1,0) y (2,0), el siguiente tramo de 3 caracteres sería " un", ya que hay que tener en cuenta el espacio en blanco al ser un carácter, e iría en las posiciones (0,1), (1,2) y (2,1). Así sucesivamente hasta el final de la frase. Queda mejor explicado gráficamente de cómo quedaría la frase en la matriz de la siguiente forma:


```text
|s   a a n d t t|
|o u   d a e e o|
|y n c e     x .|
```


Pues vamos a resolver el problema con [Java](https://www.manualweb.net/java). Lo primero sera definir la frase con la que queramos rellenar la matriz. Esto será lo más sencillo :-D


```java
String texto = "Soy una cadena de texto.";
```


Ahora tendremos que definir la matriz en [Java](https://www.manualweb.net/java). Esto ya se complica. ¿De qué tamaño la definimos? Lo que fijaremos será el número de filas a 3. Aunque te lo puedes ajustar al número de filas que quieras. Para calcular las columnas lo que haremos será dividir el tamaño de la cadena, que nos lo da el método [`.length()`](https://w3api.com/Java/String/length) entre 3. Y del resultado nos quedamos su número mayor, esto lo conseguimos apoyándonos en el método [`Math.ceil()`](https://w3api.com/Java/Math/ceil). Así nos queda la creación de la matriz en [Java](https://www.manualweb.net/java):


```java
int tamanio = texto.length();
int columnas = (int)Math.ceil((float)tamanio/3);
char[][] matriz = new char[3][columnas];
```


Ahora vamos a rellenar el contenido de la matriz con la cadena de texto. Para ello recorremos la matriz carácter a carácter mediante un [bucle ](https://www.manualweb.net/java/sentencias-bucle-java/#for)[`for`](https://www.manualweb.net/java/sentencias-bucle-java/#for).


```java
for (int x=0;x<tamanio;x++) {}
```


Para saber la fila a la que tienes que asignar cada carácter lo que se hace es dividirlo entre 3 para saber la columna y [calcular el resto](https://www.manualweb.net/java/operadores-asignacion-aritmeticos-java/#operadores-aritm%C3%A9ticos) de la posición entre 3 para saber la columna. Así el carácter que esté en la posición 5 estará en la celda (1,2) que será correspondiente al 5/3=1 y 5%3 = 2. De esta forma el código nos quedará de la siguiente forma:


```java
int columna = 0;
int fila = 0;

for (int x=0;x<tamanio;x++) {
  columna = x/3;
  fila = x%3;
  matriz[fila][columna] = texto.charAt(x);            
}
```


Ya solo nos quedará recorrer la matriz para ver el resultado.


```java
for (int x=0; x < matriz.length; x++) {
    System.out.print("|");
    for (int y=0; y < matriz[x].length; y++) {
        System.out.print (matriz[x][y]);
        if (y!=matriz[x].length-1) System.out.print("\t");
    }
    System.out.println("|");
}
```


Y así habremos conseguido rellenar una matriz con una cadena en [Java](https://www.manualweb.net/java).

