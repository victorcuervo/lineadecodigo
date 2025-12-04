---
title: Clase Anónima en PHP
description: "Código que nos explica cómo podemos crear una clase anónima en PHP y cómo podemos utilizarla en mocks, interfaces o funciones de callback."
lastUpdated: 2023-10-07
slug: /php/clase-anonima-en-php/
author: victor_cuervo
---

La idea de por qué crear un artículo sobre cómo crear una clase anónima en [PHP](https://www.manualweb.net/php/) nace una vez que escribimos el  artículo de cómo [crear una clase con PHP](https://lineadecodigo.com/php/crear-una-clase-en-php/). En dicho artículo veíamos los pasos que tenemos que dar para poder definir una clase mediante el [lenguaje de programación PHP](https://www.manualweb.net/php/) para, de forma posterior, poder crear objetos de dicha clase. En dicha clase definimos los atributos, constructores y métodos que necesitamos.


Dentro del [proceso de creación de la clase con PHP](https://lineadecodigo.com/php/crear-una-clase-en-php/) podemos observar que lo primero que hacemos es **dar un nombre a la clase**, para, posteriormente, crear objetos de dicha clase.


```php
class nombreclase {
  // Contenido de la clase
}
```


Si bien, vamos a ver que no siempre es necesario crear la clase con un nombre, sobre todo si no vamos a crear múltiples objetos de dicha clase. En este caso podemos crear una clase que sea anónima en [PHP](https://www.manualweb.net/php/).


### ¿Qué es una clase anónima en PHP?


Pero lo primero es saber, ¿qué es una clase anónima en [PHP](https://www.manualweb.net/php/)? Una clase anónima en [PHP](https://www.manualweb.net/php/) es aquella a la que no hay que dar un nombre específico, ya que vamos a utilizarla de forma inmediata, normalmente para crear un único objeto o implementar un interface.


Las clases anónimas en [PHP](https://www.manualweb.net/php/) **aparecen en la versión PHP 7.0** por lo que tendrás que validar que tienes esta versión o superior para poder utilizarlas en tu código.


### Sintaxis de una clase anónima en PHP


La sintaxis de una clase anónima en [PHP](https://www.manualweb.net/php/) sería la siguiente:


```php
$objeto = new class {
    // Atributos de la clase
    private $nombre;
    
    // Constructor y métodos
    public function __construct() {
        $this->nombre = "objeto anónimo";
    }
    
    // Getters & Setters
    public function getNombre() {
        return $this->nombre;
    }
};
```


Como podemos ver en el ejemplo, la clase anónima se define directamente al crear el objeto, utilizando el operador `new class`. Esta clase puede contener todos los elementos que tendría una clase normal: atributos, constructor, métodos, etc.


### Casos de uso de una clase anónima en PHP


Las clases anónimas en [PHP](https://www.manualweb.net/php/) pueden resultar útiles en los siguientes escenarios:


**Creación de objetos mock para testing**


Dónde queremos simular un comportamiento específico de forma rápida y aislada, sin afectar al resto del código.


Por ejemplo lo podemos ver en el siguiente código:


```php
// Ejemplo de clase anónima para testing
$mockUsuario = new class {
    public function verificarCredenciales() {
        return true;  // Simulamos una autenticación exitosa
    }
    
    public function getNivelAcceso() {
        return 'admin';  // Simulamos un nivel de acceso
    }
};
```


En este ejemplo, hemos creado una **clase anónima que simula un objeto de usuario para testing**, implementando solo los métodos necesarios para nuestra prueba específica.


**Implementación de interfaces simples**


Cuando necesitamos crear una implementación rápida de una interfaz que solo se utilizará una vez en nuestro código, sin necesidad de crear una clase completa con nombre.


Esto lo podemos ver en el siguiente código:


```php
// Definición de una interfaz
interface Logger {
    public function log($message);
}

// Implementación anónima de la interfaz
$logger = new class implements Logger {
    public function log($message) {
        echo "Log: " . $message;
    }
};
```


En este ejemplo, hemos creado una implementación anónima de la interfaz `Logger`, que define un método simple para registrar mensajes. Esta implementación se utilizará solo en este contexto específico.


**Definición de callbacks personalizados**


En situaciones donde necesitamos **pasar un objeto como parámetro a una función**, y queremos definir un comportamiento específico de manera concisa.


En este caso lo podemos comprobar con el siguiente código:


```php
function contador ($numero,$escritor) {
    for ($x=0;$x<=$numero;$x++) {
        $escritor->escribir($x);
    }
}

contador(4,new class {
    public function escribir($mensaje){
        print_r("Log: ".$mensaje."\n");
    }
});

```


En este ejemplo, hemos creado una clase anónima que implementa un método `escribir()` para mostrar números. La **clase se utiliza como un callback en la función** `contador()`, que itera sobre un rango de números y utiliza el objeto anónimo para mostrar cada valor. Este es un ejemplo claro de cómo las clases anónimas pueden simplificar la implementación de callbacks personalizados sin necesidad de crear una clase nombrada completa.
Con esto, hemos visto cómo podemos crear una clase anónima en [PHP](https://www.manualweb.net/php/) y qué utilidades tenemos para poder utilizarlas. Cierto es que tampoco es bueno abusar de ellas y que es mejor tener las clases bien nombradas en el código.

