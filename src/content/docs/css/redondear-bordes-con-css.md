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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6MMSY2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBJwy240bh3Zvv7XchLjuNYnxDgiQeqcayq4UhhlMLrfAiBOAfrA11UU5PraYgRUKHwhJWeWgzga5z9%2B75GEp3SeKSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM11hPG632Wz6C%2F5S9KtwDzlIyyVNlF6A5eBjACykdLlJIGZK9MUVb34VDX8XXHvzhq1OoeWUXMzutUQGrpo9loZ7oFZnT143RoWbno1wxkHyw2FnEzbOx%2FfFKM8xrTQdHKeIgk6FNwUkeyS2bVxEKgE%2BfHrT3a%2FXWdm3MGH8F3T9C0BUyjuiX5enKsPeIuRZVC9%2Bi1nL0j2%2FZ9RC0I4dUwB8BEibREIlwB4F7NpMdYY7fOO82qCMD2IqJQD0VoJLH3glzQ%2BVqtndlxCMqH5E%2FePuU0QuIRJA4UewYqRB6gwCvlWfaVfdNzzBA%2FZaeIVyUj%2BpaU4XAfa%2Fq7DG4Chy2quqb0%2FiiIqjNJeCFxRQ9zm0UsgdKrRmApTABKgFNbSZ553EcdrP8Q6nR39IQV3YPoCqO0YMDXxgYptPPhEPLUaja5%2B1puwVg95KHtOytJj7Pbu%2BHv4NRPYdnolOe9QMYyeIcYlz3GnQMjM%2B3vFX7KxVP6QzCuB755rMAmxSyInTwI5vb6CssuqYirUjqQApHk6Glix6eUhQLXkOzlIn5sgS18HnYDwc4Vri0z5bs%2BD4GSJv5GP%2FdqGdy5IqgCrz9kslL8XyAus6D7Z6%2Fvks45667GN5ClW9ZBI8N2ePrCaFzgWgOpe1k6%2FjmDNkwkZXDyQY6pgEKIdGvRs5q6zyLV2pjDbHExCu2lhLWzBF2rtc5hX9%2BFWnzPlM8ojIC7iUpbsBQtYD7pXEBoXoa54sr%2BMooevLhqeU%2B6d8qmoi2VqHPJPLgP9JOTy2uzfqUX%2FWnZ0GavtLyCqJlGZ0DdE39ICfCO84h3a5vPSAQawBqwPthc9XVIpezhmhvSeue5iaous0WEmvKWigS9NcixKFefSWklIuaYWVKY%2F4D&X-Amz-Signature=3712fd74adc1a91e69ec991024f87c24cae582dacabbbfc21c8dc66cf80cfbcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6MMSY2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBJwy240bh3Zvv7XchLjuNYnxDgiQeqcayq4UhhlMLrfAiBOAfrA11UU5PraYgRUKHwhJWeWgzga5z9%2B75GEp3SeKSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM11hPG632Wz6C%2F5S9KtwDzlIyyVNlF6A5eBjACykdLlJIGZK9MUVb34VDX8XXHvzhq1OoeWUXMzutUQGrpo9loZ7oFZnT143RoWbno1wxkHyw2FnEzbOx%2FfFKM8xrTQdHKeIgk6FNwUkeyS2bVxEKgE%2BfHrT3a%2FXWdm3MGH8F3T9C0BUyjuiX5enKsPeIuRZVC9%2Bi1nL0j2%2FZ9RC0I4dUwB8BEibREIlwB4F7NpMdYY7fOO82qCMD2IqJQD0VoJLH3glzQ%2BVqtndlxCMqH5E%2FePuU0QuIRJA4UewYqRB6gwCvlWfaVfdNzzBA%2FZaeIVyUj%2BpaU4XAfa%2Fq7DG4Chy2quqb0%2FiiIqjNJeCFxRQ9zm0UsgdKrRmApTABKgFNbSZ553EcdrP8Q6nR39IQV3YPoCqO0YMDXxgYptPPhEPLUaja5%2B1puwVg95KHtOytJj7Pbu%2BHv4NRPYdnolOe9QMYyeIcYlz3GnQMjM%2B3vFX7KxVP6QzCuB755rMAmxSyInTwI5vb6CssuqYirUjqQApHk6Glix6eUhQLXkOzlIn5sgS18HnYDwc4Vri0z5bs%2BD4GSJv5GP%2FdqGdy5IqgCrz9kslL8XyAus6D7Z6%2Fvks45667GN5ClW9ZBI8N2ePrCaFzgWgOpe1k6%2FjmDNkwkZXDyQY6pgEKIdGvRs5q6zyLV2pjDbHExCu2lhLWzBF2rtc5hX9%2BFWnzPlM8ojIC7iUpbsBQtYD7pXEBoXoa54sr%2BMooevLhqeU%2B6d8qmoi2VqHPJPLgP9JOTy2uzfqUX%2FWnZ0GavtLyCqJlGZ0DdE39ICfCO84h3a5vPSAQawBqwPthc9XVIpezhmhvSeue5iaous0WEmvKWigS9NcixKFefSWklIuaYWVKY%2F4D&X-Amz-Signature=933a364ff2f3318b8713716e6a37261c0b2c41a4adc76a70e62800c12e4f259d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
