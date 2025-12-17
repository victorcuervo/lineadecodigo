---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246GHR3C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEiQN1a3OUd4T%2BVxgoS%2Bw%2FoQschZWprifAHyzIAE%2FsQIhAI6M7Y%2F1ZJ3VPGvMkT0VgT74E5y7m1EhXApTM1hZ1yP%2BKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiefdgJnLGRSn%2Fhi4q3AM7UxQjtcS7JlqV7AXTQOgCMFQP%2BwXoLg4aB7T8oIdReGnHNiRn71AezhP4aFMgidN9VAJO%2B4ps%2BRFFoUWUv2h6VzZblvRO7vC0XEj%2FdWuKfcvyBeaOAetiBhz6VJG%2Bi%2BHkGZPCIMiubW%2F6emLUV8IrGvqoaaoMZzsL1xo4E5LPvI0TIOq68IHgwISpbEaivXf%2B0RwFK%2BZSVdJkfc8Hoc97Gx8le1sBy7HW6hJsN0MvFsGOOeaohzIqI%2FLGJuO%2BMbqdTCi9tuXLE2IMQHQ6P9nP2kn5a%2BuxTEAJripTNcMAR4hi3AaPYnVQDM82ODApfBtNGJRmFyXkso4%2FCPR%2FkZv2EVfXsS9x9LeITtBvekCae0rJWwKmyEuIa5oWBz0oQjisC%2FvT%2Bd1O4q1%2Fkw4iByXs3W%2FNe5ptuwv5p3X%2FoHXAkkOj3zOqt0678zSng0wtbDTpHZcAjoFeh0J5jj7lmUSbDo7BWwRPyWQe3ej%2FADouOP7ahjPUHw23pMIFULrAiVy5pU5u7Pro%2FScd4t0%2BLqliq0BvM9tA0NsnLdSa7NbcIeHl9uhm%2BsPHi1jdbGaODdU%2B7ypXjClnApDUyH8ti10xD5yPEn3doszx1cGmY%2BKTuv5OpV6sdbwS6UB4SzCngYvKBjqkARklcZrV4YwEytQOiPVnvSenyzsQldO1iSLfGyJ1HWrxGjfAoX8fkHnz0Egaidb0mALeDm2R31D2hXHybbCIR9PNgCSgVW%2BKjhnQyWlKuNODeIfsYa8TNXSuk1T%2BdKnA7%2Bd17T4QkYMNGfsMM3QK8bw6nk5JyETWm3RKf5wehBpeCx8pS%2BjppqK5hr8A6rmmy8gM%2BXvAR4jnZEbtdzJpqPFZLHoE&X-Amz-Signature=8f20fbb82c9c24a145a7828b53f70b322f9e0033537f94edd39f06a9f6bcde47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246GHR3C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEiQN1a3OUd4T%2BVxgoS%2Bw%2FoQschZWprifAHyzIAE%2FsQIhAI6M7Y%2F1ZJ3VPGvMkT0VgT74E5y7m1EhXApTM1hZ1yP%2BKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiefdgJnLGRSn%2Fhi4q3AM7UxQjtcS7JlqV7AXTQOgCMFQP%2BwXoLg4aB7T8oIdReGnHNiRn71AezhP4aFMgidN9VAJO%2B4ps%2BRFFoUWUv2h6VzZblvRO7vC0XEj%2FdWuKfcvyBeaOAetiBhz6VJG%2Bi%2BHkGZPCIMiubW%2F6emLUV8IrGvqoaaoMZzsL1xo4E5LPvI0TIOq68IHgwISpbEaivXf%2B0RwFK%2BZSVdJkfc8Hoc97Gx8le1sBy7HW6hJsN0MvFsGOOeaohzIqI%2FLGJuO%2BMbqdTCi9tuXLE2IMQHQ6P9nP2kn5a%2BuxTEAJripTNcMAR4hi3AaPYnVQDM82ODApfBtNGJRmFyXkso4%2FCPR%2FkZv2EVfXsS9x9LeITtBvekCae0rJWwKmyEuIa5oWBz0oQjisC%2FvT%2Bd1O4q1%2Fkw4iByXs3W%2FNe5ptuwv5p3X%2FoHXAkkOj3zOqt0678zSng0wtbDTpHZcAjoFeh0J5jj7lmUSbDo7BWwRPyWQe3ej%2FADouOP7ahjPUHw23pMIFULrAiVy5pU5u7Pro%2FScd4t0%2BLqliq0BvM9tA0NsnLdSa7NbcIeHl9uhm%2BsPHi1jdbGaODdU%2B7ypXjClnApDUyH8ti10xD5yPEn3doszx1cGmY%2BKTuv5OpV6sdbwS6UB4SzCngYvKBjqkARklcZrV4YwEytQOiPVnvSenyzsQldO1iSLfGyJ1HWrxGjfAoX8fkHnz0Egaidb0mALeDm2R31D2hXHybbCIR9PNgCSgVW%2BKjhnQyWlKuNODeIfsYa8TNXSuk1T%2BdKnA7%2Bd17T4QkYMNGfsMM3QK8bw6nk5JyETWm3RKf5wehBpeCx8pS%2BjppqK5hr8A6rmmy8gM%2BXvAR4jnZEbtdzJpqPFZLHoE&X-Amz-Signature=5014bb3d2ba79f423011344581b1267694721ef0ac89ac19cdefffcc6ad9cd97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
