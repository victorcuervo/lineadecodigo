---
layout: post
title: Crear una clase en PHP
excerpt: "El lenguaje de programación PHP es un lenguaje orientado a objetos, así que deberemos aprender a crear una clase en PHP e instanciar un objeto."
categories: PHP
tags: [php clases]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

El [lenguaje de programación PHP](https://lineadecodigo.com/categoria/php/) es un **lenguaje orientado a objetos**, por lo que una de las cosas que deberemos de aprender es crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/). Y es que, crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/), nos puede servir para encapsular una cierta funcionalidad, la cual podremos instanciar con diferentes valores en tantos objetos como necesitemos.


### Definir una clase en PHP


El primer paso que deberemos  dar a la hora de crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/) es el de definir la clase. El nombre de la clase debe  ser un nombre genérico que represente la funcionalidad que queremos encapsular dentro de la clase.


Para definir [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/) y así poder crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/) deberemos  utilizar la siguiente sintaxis en [PHP](https://www.manualweb.net/php/):


```php
class nombreclase {
  // Contenido de la clase
}
```


Utilizamos el modificador `class` seguido del nombre de la clase que queramos crear. El contenido de la clase lo insertamos dentro de un bloque de llaves.


En nuestro caso, vamos a declarar una clase que contenga la información asociada a un libro, como puede ser su título, el autor, la editorial, el código ISBN,…


Es por ello que definiremos nuestra clase libro en [PHP](https://www.manualweb.net/php/) de la siguiente forma:


```text
class Libro {
  // Contenido de la clase
}
```


### Atributos de una clase PHP


Lo siguiente en nuestro proceso de crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/) será trabajar los atributos. Una vez que tenemos definida la [clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/), vamos a añadir dentro de ella los atributos. Los atributos son la variables que almacenarán la información dentro de [la clase PHP](https://manualweb.net/php/clases-y-objetos-en-php/).


En el [lenguaje de programación PHP](https://lineadecodigo.com/categoria/php/), podemos definir los atributos dentro de una clase utilizando varias designaciones de visibilidad. Estas designaciones de visibilidad, también conocidas como modificadores de acceso, determinan desde dónde podemos acceder a los atributos en nuestro código. Las tres designaciones de visibilidad que podemos utilizar son:

- **Públicos:** Los atributos definidos como públicos son accesibles desde cualquier parte del código, incluso fuera de la clase en la que se definen.
- **Privados:** Los atributos definidos como privados solo son accesibles dentro de la clase en la que se definen. No pueden ser accedidos desde fuera de la clase o desde clases heredadas.
- **Protegidos:** Los atributos definidos como protegidos son accesibles dentro de la clase en la que se definen y desde las clases que heredan de ella, pero no desde fuera de estas clases.

Depende del nivel de acceso que queramos otorgar. Un atributo público puede ser accedido desde cualquier parte del código, mientras que un atributo privado solo puede ser accedido desde dentro de la clase donde se ha definido.


De esta manera, un atributo público en [PHP](https://www.manualweb.net/php/) se declarará de la siguiente forma:


```php
public $nombreAtributo;
```


Un atributo privado se define de la siguiente manera:


```php
private $nombreAtributo;
```


Y, por último, un atributo protegido lo definiremos mediante la siguiente sentencia:


```php
protected $nombreAtributo;
```


Ahora, en nuestra clase Libro vamos a definir dos atributos privados mediante el modificador private que nos permitirán almacenar el título del libro y el autor.


```php
class Libro {
    private $titulo;
    private $autor;
}
```


### Constructor de la clase PHP


Ahora que, en el proceso de crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/), ya tenemos definida la clase y los atributos que conforman dicha clase, vamos a dar el siguiente paso. Este será el crear el constructor de [la clase PHP](https://manualweb.net/php/clases-y-objetos-en-php/).


Un constructor de [la clase PHP](https://manualweb.net/php/clases-y-objetos-en-php/) es el método que se invoca cuando instanciamos un objeto sobre dicha clase. Es decir, es el método que se invoca para construir el objeto y que nos permitirá dar unos valores iniciales a los atributos que acabamos de definir. Siempre que esto sea necesario.


Para poder definir un constructor de [la clase PHP](https://manualweb.net/php/clases-y-objetos-en-php/) tendremos que crear un método público que tenga de nombre `_construct`. Para ello, seguiremos la siguiente sintaxis:


```php
public function _construct(){
  // Código del constructor de la clase
}
```


El método del constructor puede llevar parámetros en el caso de que necesitemos instanciar las variables. Por lo que, en nuestro caso, si queremos inicializar los valores de título y autor, podemos definir el constructor de la clase Libro de la siguiente manera:


```php
class Libro {

    private $titulo;
    private $autor;

    public function __construct($titulo,$autor) {
        $this->titulo = $titulo;
        $this->autor = $autor;
    }

}
```


En esta parte del código vemos que estamos utilizando el objeto `$this`. El objeto `$this` hace referencia a la propia clase y nos sirve para hacer referencia a las propiedades que hemos definido anteriormente.


Por lo que en el código:


```php
$this->titulo = $titulo;
```


Lo que estamos diciendo es que el valor del parámetro `$titulo` se almacenará en la propiedad `$titulo` a la que hacemos referencia mediante el objeto `$this` como `$this->titulo`.


### Getters & Setters de una clase PHP


Sigamos el proceso de crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/). Ya tenemos la clase, los atributos y el método constructor que inicializa los valores. El siguiente paso es definir los métodos o funciones llamados getters & setters de [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/). Estas funciones son aquellas que nos permiten, por un lado, obtener el valor de una propiedad, que serían los getters. Y por otro lado, asignar un valor a una propiedad, que serían los setters.


Al haber definido nuestras propiedades como privadas mediante el modificador `private` habremos conseguido mantener la integridad de la clase y es por ello que necesitamos los métodos getters & setters.


Para poder definir un método getter simplemente deberemos definir una función que nos devuelva el valor de una propiedad mediante la siguiente sintaxis:


```php
public function nombreGetter() {
  return $this->propiedad;
}
```


Por lo tanto, para crear un getter que nos devuelva el valor del título de un libro, crearemos el siguiente getter:


```php
public function getTitulo() {
  return $this->titulo;
}
```


En el caso de querer crear un setter lo que haremos será definir una función que reciba como parámetro el valor de la propiedad a la cual queremos modificar el valor y en su código se lo asignaremos a la propiedad.


La sintaxis que puede tener un setter sería la siguiente:


```php
public function nombreSetter($propiedad) {
  $this->propiedad = $propiedad;
}
```


De esta manera podemos crear un setter para nuestro título del libro mediante el siguiente código:


```php
public function setTitulo($titulo) {
  $this->titulo = $titulo;
}
```


### Definición entera para crear una clase en PHP que defina un Libro


Ahora ya tenemos lo suficiente definida nuestra clase para poder instanciarla y empezar a utilizar objetos sobre ella.


Si le echamos un ojo a lo que hemos hecho para crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/) podemos ver cómo ha quedado nuestra clase libro en [PHP](https://www.manualweb.net/php/), veremos que el [código en PHP](https://www.manualweb.net/php/) crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/) nos quedará de la siguiente forma:


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


### Instanciar una clase PHP


Una vez creada la clase, veremos que el siguiente paso es [instanciar una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/). Es decir, vamos a crear un objeto que utilice la clase para poder [crear una instancia de dicha clase](https://manualweb.net/php/clases-y-objetos-en-php/). En nuestro caso de los libros, hablaríamos de instancias como los diferentes libros con su correspondiente título y autor que queramos crear.


La sintaxis para instanciar un objeto de [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/) será la siguiente:


```php
$objeto = new NombreClase(parametros)
```


Así que, si volvemos a nuestro caso, en este proceso de crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/), de la clase Libro veremos que podemos instanciar objetos que contengan libros de la siguiente manera:


```php
$l1 = new Libro("Roma Soy Yo","Santiago Posteguillo");
$l2 = new Libro("Alexandros","Valerio Massimo Manfredi");
$l3 = new Libro("La Pirámide Inmortal","Javier Sierra");
```


De esta manera ya habremos explicado todo lo necesario para poder crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/) y poder instanciar objetos sobre ella. Cuéntanos en comentarios qué te ha parecido el proceso para poder crear [una clase en PHP](https://manualweb.net/php/clases-y-objetos-en-php/) y qué cosas realizarías que no hayamos explicado.

