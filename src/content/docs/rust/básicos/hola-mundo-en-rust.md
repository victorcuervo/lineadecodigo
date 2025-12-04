---
title: Hola Mundo en Rust
description: "En este artículo vamos a conocer algunos conceptos básicos del lenguaje de programación Rust que nos permitan crear el Hola Mundo en Rust."
lastUpdated: 2025-01-12
slug: /rust/hola-mundo-en-rust/
author: victor_cuervo
---

En este artículo vamos a conocer algunos conceptos básicos del lenguaje de programación Rust que nos permitan crear nuestro primer programa, siendo este el Hola Mundo en Rust.


Como [todos nuestros ejemplos de Hola Mundo en Línea de Código](https://lineadecodigo.com/tag/hola-mundo/), veremos que lo que consiste el código es en mostrar la frase “Hola Mundo” por consola.


Así que, manos a la obra.


### ¿Qué es Rust y por qué deberíamos utilizarlo?


Pero antes de empezar con nuestro programa de Hola Mundo en Rust deberemos de conocer qué es el lenguaje de programación Rust y por qué deberíamos de aprenderlo y utilizarlo.


Y es que Rust se ha convertido en uno de los lenguajes de programación más emergentes de los últimos años, ofreciendo un alto rendimiento combinado con un control de seguridad de la gestión de la memoria que hace que sea muy seguro de utilizar, con grandes capacidades para el desarrollo concurrente y, por lo tanto, óptimo para procesos críticos en los cuales no nos podamos permitir este tipo de problemas.


Algunas de las características más destacadas de Rust son:

- **Seguridad en la memoria:** Rust garantiza la seguridad en el acceso y gestión de la memoria sin necesidad de un recolector de basura (o garbage collector).
- **Sistema de tipos robusto**: Previene errores comunes en tiempo de compilación mediante un sistema de tipos expresivo y estricto.
- **Concurrencia sin riesgos:** Su modelo de ownership para la gestión de memoria permite escribir código concurrente seguro y eficiente sin condiciones de carrera.
- **Alto rendimiento:** Ofrece un rendimiento comparable a C++ sin sacrificar la seguridad del código.
- **Interoperabilidad:** Facilita la integración con código C existente y otros lenguajes de bajo nivel.

### Preparar el entorno de trabajo para Rust.


Ahora que tenemos unas nociones básicas sobre lo que es Rust, vamos a preparar nuestro entorno de trabajo para poder desarrollar nuestro primer programa en Rust.


Para poder trabajar con Rust deberemos de instalarnos el compilador y vamos a ver cómo hacerlo para diferentes sistemas operativos.


**Instalar Rust para Linux o Mac**


Si estás trabajando en Linux o Mac, puedes descargarte el script de instalación de la siguiente manera:


```shell
$ curl --proto '=https' --tlsv1.2 <https://sh.rustup.rs> -sSf | sh
```


Cuando termine la instalación, verás en pantalla un mensaje como el siguiente:


```shell
Rust is installed now. Great!
```


> Para algunos casos de uso de Rust, necesitas tener un compilador C instalado en el sistema operativo.


**Instalar Rust para Windows**


En el caso de que tu sistema operativo sea Windows, simplemente tienes que ir a la web [https://www.rust-lang.org/tools/install,](https://www.rust-lang.org/tools/install) en la que se encuentra el instalador de Rust para Windows.


**Editor de código para Rust**


Aunque podemos compilar Rust directamente desde nuestra consola, es recomendable que te instales un [editor de código,](https://code.visualstudio.com/) como puede ser Visual Studio Code. En este caso tienes algunas [extensiones como rust-analyzer para Visual Studio Code](https://code.visualstudio.com/docs/languages/rust) que pueden ayudarte en la codificación dentro del editor.


### Crear mi primer Hola Mundo en Rust


Ahora sí que nos ponemos a codificar en Rust. Lo primero que haremos para crear nuestro primer Hola Mundo en Rust es **crear un fichero con extensión .rs que llamaremos hola_mundo.rs o** [**main.rs**](http://main.rs/)


> En Rust, la convención para la separación de nombres es utilizar el guión bajo. Por eso al fichero lo llamamos hola_mundo.rs.


Ahora, dentro de nuestro fichero [hola-mundo.rs](http://hola-mundo.rs/) crearemos una función `main` de la siguiente forma.


```rust
fn main() {
  ....
}
```


La función `main` es la función principal de los programas Rust y es la primera función que se ejecuta al lanzar el programa. En este caso no recibe parámetros, por lo que los paréntesis están vacíos.


En el código también podemos ver que las llaves son las que nos establecen el alcance de los bloques de código.


Si analizamos la función `main` vemos que dicha función se declara mediante el operador `fn`⁣ seguido del nombre `main` y los paréntesis.


Para poder mostrar en pantalla la frase “Hola, Mundo!”, lo que haremos es acudir a la macro `println!`. Y has leído bien, **la macro** `println!`. Ya que no es una función, y es por ello que acaba con el símbolo de exclamación. Pero ya hablaremos de macros y de funciones.


```rust
fn main() {
    println!("Hola, Mundo!");
}
```


La sentencia siempre acaba con un punto y coma (;) para delimitar el final de la misma.


> Es importante saber que Rust trabaja de forma indentada, como sucede en otros lenguajes como Python, y la separación es de 4 espacios; no se utiliza tabulador.


### Ejecutar el código del Hola Mundo en Rust.


Una vez que hayamos codificado nuestro fichero con el Hola Mundo en Rust, deberemos guardar su contenido y dirigirnos a la consola en el directorio en el que se encuentre el fichero.


Para poder _**compilar y ejecutar el código,**_ escribiremos lo siguiente:


```shell
$rust hola_mundo.rs
```


En este caso, lo que tenemos es el código compilado y se habrá generado un binario con el mismo nombre del fichero que estamos compilando. Por lo tanto, tendremos que ejecutar el binario para poder ver el resultado.


Si listamos nuestro directorio veremos que tenemos un binario llamado `hola_mundo`.


```shell
$ ls
hola_mundo hola_mundo.rs
```


Este binario es un programa que se puede distribuir y que se puede ejecutar por si mismo si necesidad de tener el compilador de Rust instalado.


En el caso en que estemos en sistemas Linux/MacOS, ejecutaremos lo siguiente:


```shell
$ ./hola_mundo 
Hola, Mundo!
```


Y para entornos Windows ejecutaremos directamente el fichero .exe.


```shell
c:/> hola_mundo.exe 
Hola, Mundo!
```


De esta manera acabaremos viendo en consola la frase “Hola, Mundo!”.


Y con esto ya hemos visto qué sencillo es construir nuestro primer Hola Mundo en Rust.

