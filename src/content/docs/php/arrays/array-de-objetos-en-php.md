---
title: "Array de Objetos en PHP"
description: "Ejemplo que nos muestra cómo crear un array de objetos en PHP, cómo insertar nuevos objetos en él y cómo recorrerlo para mostrar sus valores."
date: 2024-12-26
updatedDate: 2026-01-07
tags: ["array","objeto","clase","class","function","metodo","foreach"]
slug: php/arrays/array-de-objetos-en-php
author: victor_cuervo
type: doc
topic: php
id: 948512d9-4337-48b1-9d04-e90a27dcd647
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/arrays/arrays-objetos.php
---

Dentro de un [array en PHP](https://manualweb.net/php/arrays-en-php/) podemos insertar muchos tipos de elementos, desde tipos de datos sencillos hasta objetos. Hoy vamos a ver cómo podemos crear un array de objetos en PHP.


Creando un array de objetos podremos almacenar cualquier tipo de información que queramos dentro de [PHP](https://www.manualweb.net/php/). Así que vamos a ver paso a paso cómo podemos crear nuestro array de objetos en PHP.


### Definir un objeto en PHP


Lo primero que tendremos que hacer en el proceso de crear un array de objetos en PHP será definir un objeto en PHP. Bueno, mejor dicho, [crear una clase en PHP](https://lineadecodigo.com/php/crear-una-clase-en-php/), sobre la que luego instanciaremos nuestros objetos.


Tenemos que saber que para poder [crear una clase en PHP](https://lineadecodigo.com/php/crear-una-clase-en-php/) nos apoyamos en la palabra clave `class` siguiendo la siguiente sintaxis:


```php
class nombreclase {
  // Contenido de la clase
}
```


La clase nos permite definir un concepto del cual vamos a crear varios objetos. En este caso vamos a crear una clase `Libro`.


```php
class Libro {

    private $titulo;
    private $autor;

    public function __construct($titulo,$autor) {
        $this->titulo = $titulo;
        $this->autor = $autor;
    }

    public function getTitulo() {
        return $this->titulo;
    }

    public function getAutor() {
        return $this->autor;
    }

}
```


Si echamos un ojo a la clase `Libro` que acabamos de definir veremos que tenemos un par de propiedades privadas dentro de la clase para poder almacenar la información del título y el autor del libro.


Además hemos incluido un constructor que nos permite pasar los valores a la hora de crear el objeto. En este caso hemos utilizado la palabra `_construct` que nos sirve para poder definir el constuctor.


Y por último le hemos añadido un par de métodos get para recuperar la información de las propiedades privadas que hemos incluido en la clase.


### Crear un objeto en PHP


Continuando con nuestro proceso de crear un array de objetos en PHP, ahora que ya tenemos las clase `Libro` definida, vamos a crear unos objetos que serán los que insertaremos después en el array. Los objetos los almacenaremos en diferentes variables.


Para instanciar los objetos utilizamos la palabra `new` seguida del nombre de la clase y pasando como parámetros los valores asociados al libro. La sintaxis sería la siguiente:


```php
$variable = new Clase(parametro1,parametro2,...,parametroN);

```


Así, que para nuestra clase `Libro` la instanciación de las variables quedaría de la siguiente manera:


```php
$l1 = new Libro("Roma Soy Yo","Santiago Posteguillo");
$l2 = new Libro("Alexandros","Valerio Massimo Manfredi");
$l3 = new Libro("La Pirámide Inmortal","Javier Sierra");
```


### Definir un array en PHP


Ahora que ya tenemos los objetos creados pasamos a crear nuestro array de objetos en PHP. Para ello lo primero que tenemos que saber es qué es un [array en PHP](https://manualweb.net/php/arrays-en-php/) y [cómo se define un array en PHP](https://manualweb.net/php/arrays-en-php/).


Un [array en PHP](https://manualweb.net/php/arrays-en-php/) es una estructura de datos que nos permite almacenar múltiples valores en una sola variable, es decir, una lista de valores.


Para definir un [array en PHP](https://manualweb.net/php/arrays-en-php/), utilizamos la función `array()`, o simplemente declaramos la variable como un array mediante corchetes `[]`.


Utilizando la función `array()` se haría de la siguiente forma


```php
$array = array(
  clave  => valor,
  clave2 => valor2,
  clave3 => valor3,
  ...
);
```


Y si utilizamos el operador corchete `[]` lo haremos mediante la siguiente sintaxis:


```php
$array = [
  clave  => valor,
  clave2 => valor2,
  clave3 => valor3,
  ...
];
```


Es importante saber que los array se pueden definir mediante **estructuras clave/valor** como se puede ver en su sintaxis. En este caso para acceder a un elemento del array podremos utilizar su clave. O bien podemos **evitar el uso de claves y directamente definirlo mediante valores**. En este caso para poder acceder a un valor determinado utilizaremos la posición que ocupa dentro del array.


Una vez aprendido [cómo se definen los arrays en PHP](https://manualweb.net/php/arrays-en-php/) pasaremos a crear un array vacío para nuestros libros.


```php
$libros = new array();
```


Aunque podríamos haber definido en array de objetos en PHP instanciandolos directamente en la creación. En este caso el código habría quedado de esta forma:


```php
$libros = new array($l1,$l2,$l3);
```


Pero en la explicación en el proceso de crear un array de objetos en PHP vamos a seguir mediante nuestro array vacío para que se pueda ver cómo añadir elementos de forma dinámica sobre nuestro array.


### Insertar elementos en el array de Objetos en PHP


Ahora, con nuestro array definido, estamos listos para insertar nuestros objetos dentro del array de libros. Para poder insertar objetos en el array PHP veremos que es tan sencillo como saber la posición del array en la cual insertarlo.


En este punto tenemos que saber que la primera posición del array es la posición 0, mientas que la segunda posición se accederá por el índice 1, así hasta la última posición que tendrá el índice N-1, dónde N es el número de elementos que contiene el array.


La sintaxis para insertar un elemento en un array será la siguiente:


```php
$array[indice] = valor;

```


Entonces, para insertar nuestros objetos de libro en el array, el código será el siguiente:


```php
$libros[0] = $l1;
$libros[1] = $l2;
$libros[2] = $l3;
```


Se puede apreciar en el [código fuente PHP](https://lineadecodigo.com/categoria/php/) que acabamos de escribir que el primer libro lo insertamos en la posición del índice 0 y que el tercer libro se inserta dentro de la posición  de índice 2. El tamaño del array se habrá adaptado al número de elementos que hayamos insertado.


### Mostar los objetos del array PHP


Por último, y una vez que hemos cargado los objetos en el array vamos a listarlos por consola. En este caso vamos a acceder al método que nos da el valor de su propiedad título.


Para recorrer el [array en PHP](https://manualweb.net/php/arrays-en-php/) y mostrar los objetos del array PHP vamos a utilizar la estructura de control `foreach`. Esta estructura nos permite recorrer los elementos de array de uno en uno. La sintaxis de la estructura de control `foreach` es la siguiente:


```php
foreach ($array as $valor) {
   // Código a ejecutar
}
```


Es decir, cada vez que itera el bucle, encontraremos que la variable `$valor` contiene el objeto que estaba en la posición sobre la que estamos iterando.


De esta manera, para recorrer nuestro array de libros e imprimir cada título, utilizaremos el siguiente código:


```php
foreach ($libros as $libro) {
    echo $libro->getTitulo()."\\n";
}
```


Este código imprimirá el título de cada libro de nuestro array por consola. Para ello hemos utilizado la función echo que nos muestra el valor en la consola.


Hay que notar que para acceder a un método dentro de un objeto utilizamos el operador flecha `->` siguiendo la sintaxis:


```php
$objecto->metodo();

```


De esta manera, `$libro->getTitulo()` nos da acceso a la función `getTitulo()` dentro de nuestro objeto `$libro`, que está almacenado en el array de libros.


Con esto ya sabremos cómo podemos crear un array de objetos en PHP y cómo podemos recorrerlo para mostrar sus valores por consola.

