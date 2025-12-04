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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4BCQHJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGQ62P87xNxnKxr3AggclmGq6x53CBXZxyh6SbKIHVyKAiEAsuyE7dyaLIaFEq%2FGl%2FgqzyI64iAQorjV7%2B7nZBhkC%2FQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFg1eGUQ5NoZSi3H8yrcAyV5LxtXkOn0q4dFsldEtG%2BqZIhauPlrJEy0ofrL5XVb94QvF9AqB1RoQCBARR9HvxfjKz7IAX5RUaPxc3E3TQJsOTZTP2IDki%2Bo%2B%2B3BHcviAlhkswulgz4MSLZ1Czy0jQqxYe%2FehP%2FuKRBNGOv5EP4znql3gvyGbEA%2FtNP%2BxcbkbQg3cx4DLNcO%2BH%2Bb0Qh8wkweAl57SGHmcWcgAXDHEicERxi6%2Bgb5UwyNCBpC2VnTC6thpNkfVLX91Ig0wjeyEolkWyz4kMhzLxR2ihw4GB9%2FlDfmSoprnF1EY8DiqhXysj3ZX28LkeseVPWXv1AyrD2aZvKLAVe6XHs9bz7thc8B6mJK9QFQIuI0RHYmmerBqpXTFqO8z6pnWeRE9JSciC3udzmD4EUElRuiY5wkASSsMOCnvC%2FU7rklLpYN012sAY%2BbmUhRxzzY3XsxljujixjQmSuhbIagvQLI39yGVK8PHu0pHXGY2dTETUlndF1Wi0xQZHxd9ZtANNDl1D90O7zePykbZXHEkGshjBX9Dq2f%2FFfUIvEHRLM7CibBN2j2MuNqdeGJT%2BduGccaPc7Ee1pHgsodbJ0ArL7jxcalCZBpEb0k9qqZ3jVH4YQbfk5hYG3bKXt7rtLShcvgMJeixskGOqUBC0QQpdjUwnhOQf5wxYULfEbvdm9bWH8r5OBfJVjjiqln8ZGUbiGYtWFlKnuF%2FbpShTYb0g11c6UZGvy1nqvkn3IGEg6EwHU0I%2BNPb2lX048GQ7Bf6N%2FV1K9mMmVY2HxpCcSE6V9KSAxMuOnkf8m8k83uAwrrJZErtY6tuUxAwHRE%2BNymQP%2FvRQcNpbru9LWuYhZhJJUcsl6%2FNTQ3j1bKTiHZ6kBc&X-Amz-Signature=584a1a90b2f690eedc1ed93c7e01b582bd53129ef49282a87993a17bdd918fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4BCQHJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGQ62P87xNxnKxr3AggclmGq6x53CBXZxyh6SbKIHVyKAiEAsuyE7dyaLIaFEq%2FGl%2FgqzyI64iAQorjV7%2B7nZBhkC%2FQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFg1eGUQ5NoZSi3H8yrcAyV5LxtXkOn0q4dFsldEtG%2BqZIhauPlrJEy0ofrL5XVb94QvF9AqB1RoQCBARR9HvxfjKz7IAX5RUaPxc3E3TQJsOTZTP2IDki%2Bo%2B%2B3BHcviAlhkswulgz4MSLZ1Czy0jQqxYe%2FehP%2FuKRBNGOv5EP4znql3gvyGbEA%2FtNP%2BxcbkbQg3cx4DLNcO%2BH%2Bb0Qh8wkweAl57SGHmcWcgAXDHEicERxi6%2Bgb5UwyNCBpC2VnTC6thpNkfVLX91Ig0wjeyEolkWyz4kMhzLxR2ihw4GB9%2FlDfmSoprnF1EY8DiqhXysj3ZX28LkeseVPWXv1AyrD2aZvKLAVe6XHs9bz7thc8B6mJK9QFQIuI0RHYmmerBqpXTFqO8z6pnWeRE9JSciC3udzmD4EUElRuiY5wkASSsMOCnvC%2FU7rklLpYN012sAY%2BbmUhRxzzY3XsxljujixjQmSuhbIagvQLI39yGVK8PHu0pHXGY2dTETUlndF1Wi0xQZHxd9ZtANNDl1D90O7zePykbZXHEkGshjBX9Dq2f%2FFfUIvEHRLM7CibBN2j2MuNqdeGJT%2BduGccaPc7Ee1pHgsodbJ0ArL7jxcalCZBpEb0k9qqZ3jVH4YQbfk5hYG3bKXt7rtLShcvgMJeixskGOqUBC0QQpdjUwnhOQf5wxYULfEbvdm9bWH8r5OBfJVjjiqln8ZGUbiGYtWFlKnuF%2FbpShTYb0g11c6UZGvy1nqvkn3IGEg6EwHU0I%2BNPb2lX048GQ7Bf6N%2FV1K9mMmVY2HxpCcSE6V9KSAxMuOnkf8m8k83uAwrrJZErtY6tuUxAwHRE%2BNymQP%2FvRQcNpbru9LWuYhZhJJUcsl6%2FNTQ3j1bKTiHZ6kBc&X-Amz-Signature=0047eea5eaa82d3c0ba2ce3a15ad57a7b40a89531ce7fe839668ce525cb25673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
