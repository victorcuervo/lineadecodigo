---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6MOK3Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBbyoxRVJEVtz4PShQMhy5l0vmTfYwCBLCr621yxMIfXAiEAqtNmqu6UgTplSRiSiquii3ExaKMmTR0v7u6jixfCZOIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGPFXMgBmaCybHZ%2BSSrcAwwyAupWBEsuUHrWLmxKeci2hOUMbFW%2BE8mtMXg0lQNa4mAt%2B7wdRrcPyPsSc0BUXoNQFHEYnoJGJn5ojF2rwtnWg9FiTqy2SExZk11FZtgLgqJ5jI6EJvjrKv%2FiOWRJ03CsE7fUe5EZyAfu%2F10qwxjN%2FOrse4AbYVmUr5f21lwOAhfnltXdCBN8cgB5QC79nAldlYvhYGmacJa%2Fecehd3nCW%2BjR%2FqOlOHVsBLZaO5vqUA1BYTTnnXe%2BzRIYjnuW0t06adGxOZ8raI46Lhod4wwIR8h6Rr78QqauBkF7TQ5yuE8%2FgigI19ieveV6taQZtef%2B3WxzotneTeDMwXvUlWU%2BnLIBh2m5bYcYy4DfuO%2FglEDs7Q7DZFWeBuZN%2BhnltAWAD4J6bvo%2FjAaQe5%2BGLjBBaBgHXHu0j7KqZbRjaeU7uZNXWWdWzcL1cxOh%2FuZPcm4hvuCYmguifKElOX1A3HqGitng2i%2Fi%2FA2jxrfmzd4z2flzKRAO0ZX0gQIFHgEnCoFEU8MS3Nr9kRNVE7zQyPx2EyQZyz8%2FX8QXZ7eDL40mzZoshswfw%2Bt0MI5nqLfx2lM77cqzgJlVwsNBL59kGnO5MLNmpKRogQPckH59eVsSX9cSfG8YstVlTXn8MPbmxckGOqUBfvhnBDOhd5L5dv1o0BijQJYMp%2BzCciBqcuesSFL%2FfWgUo3NQg8ALt1fMwwPhVrY5cswC561eW93h09CHVZvZvaaLlflPONjKIrIgG77dft6QlrDvPl7sHYz3CXY7DgDL7R8qjOHycPUH0cqTMmGYcTJRlNqKgZqcdjBdkf8YZf%2BW%2FIusuDmvsQrn5uudonqZYs9poMKzj5nwmpv8p6jgRiAz%2BkS2&X-Amz-Signature=623c81ffbb07dba526fa5235bf87f94436069cb5fe8ed3e0edd0d46d53265e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6MOK3Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBbyoxRVJEVtz4PShQMhy5l0vmTfYwCBLCr621yxMIfXAiEAqtNmqu6UgTplSRiSiquii3ExaKMmTR0v7u6jixfCZOIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGPFXMgBmaCybHZ%2BSSrcAwwyAupWBEsuUHrWLmxKeci2hOUMbFW%2BE8mtMXg0lQNa4mAt%2B7wdRrcPyPsSc0BUXoNQFHEYnoJGJn5ojF2rwtnWg9FiTqy2SExZk11FZtgLgqJ5jI6EJvjrKv%2FiOWRJ03CsE7fUe5EZyAfu%2F10qwxjN%2FOrse4AbYVmUr5f21lwOAhfnltXdCBN8cgB5QC79nAldlYvhYGmacJa%2Fecehd3nCW%2BjR%2FqOlOHVsBLZaO5vqUA1BYTTnnXe%2BzRIYjnuW0t06adGxOZ8raI46Lhod4wwIR8h6Rr78QqauBkF7TQ5yuE8%2FgigI19ieveV6taQZtef%2B3WxzotneTeDMwXvUlWU%2BnLIBh2m5bYcYy4DfuO%2FglEDs7Q7DZFWeBuZN%2BhnltAWAD4J6bvo%2FjAaQe5%2BGLjBBaBgHXHu0j7KqZbRjaeU7uZNXWWdWzcL1cxOh%2FuZPcm4hvuCYmguifKElOX1A3HqGitng2i%2Fi%2FA2jxrfmzd4z2flzKRAO0ZX0gQIFHgEnCoFEU8MS3Nr9kRNVE7zQyPx2EyQZyz8%2FX8QXZ7eDL40mzZoshswfw%2Bt0MI5nqLfx2lM77cqzgJlVwsNBL59kGnO5MLNmpKRogQPckH59eVsSX9cSfG8YstVlTXn8MPbmxckGOqUBfvhnBDOhd5L5dv1o0BijQJYMp%2BzCciBqcuesSFL%2FfWgUo3NQg8ALt1fMwwPhVrY5cswC561eW93h09CHVZvZvaaLlflPONjKIrIgG77dft6QlrDvPl7sHYz3CXY7DgDL7R8qjOHycPUH0cqTMmGYcTJRlNqKgZqcdjBdkf8YZf%2BW%2FIusuDmvsQrn5uudonqZYs9poMKzj5nwmpv8p6jgRiAz%2BkS2&X-Amz-Signature=df08fa539071b5ffd5554b327483bbd4fb9c17b2f82feeb7615ba238a7aca460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
