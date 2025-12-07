---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZI5AILI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZjOhIAE8pfDVJSGOdEUFsdNHdPMntEezr8QSsRcCbQAiA093yPtM1pzqg45Iv6SYTn8tJsQ4JMR9qJf5fx%2FIyNeCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTL28sv%2B415ZPVZxKtwDjLIdw24DCW5rXUD%2FTqeU5f44daVGfivQiUatFe0TzU3ewggPCWeQ2mMV7IIYvXEmz3%2B%2BI4NgXbczFQgFcazQ%2FnMxeRb37Kgw9LgcUkgaNMKymPVSUm2PePxS1Duyf7Vgv3Rjpc6mdU%2BFN0r6o%2F9lHkpFx3EPlko6zfAjRocKaOJNcKG9pLggosFkUX6xLMWAh%2BWJ0u80jAjYtyDDp8fC5Dc%2FzYXLqR4R5%2BoqiMep8dq9ZlmCEXDpW3VmWOX2uEYbqWPsInKddsNh5znLVuCsEMpGDrRPgfwPGkpT9BdeuQgPqOwcPyO2Uttu5PitfWPaQNdOC76zm4XXi4xBHzasNDhnGzu75YXdKZmfn0gVy22gUQKSVduKKkr4fYrzqviz1M9TrYMP8uHV%2BZFy5a0L0XCy9VQvGixrz2skJxVBaH0%2BQDpE%2BR0dED1l2Vbj0kTtfTqe5YkVR8GQHy%2B13K5DYDFaUaBUdGvqYE%2BWF%2Fn9Ycsl%2Fy%2FcFl3j%2BXRiGNKw5Q9hEinK%2FxLqpstkhv4HOonwprHkPJkEKMhq7ioIdkuGCfdl4IgbMgSJbUwSOMeByMoYnl1c97CTk9T9YfGcq2Pc27ArplT%2Foc7ysaKJACUvK5Kwy1pHewKg1ELbiAwwwprVyQY6pgGbrU7dTJN4Pzx0bW7WIX3ai7da4IE8RtugIkyjPypDzqvUkLz53z1nbCqbtH%2BNO0ynzQb%2FEgF6L%2F24df17pB2dlaOBe%2F%2FKzmPJVXbmkGVPxQLfwMaM344XwjiOb5J2nqhIR6Yewce6VcjT7NrLfhV6saTj%2F8v8lnC2d7ipwc77tqbPzQXnUbS9xL35rv8zFQ9P1o1RsklJUkPDtnEOngfuUjRpZSXN&X-Amz-Signature=ee0b11d34c56b145f5b73d2ad81857ffb7c0fb92b1b2de52848f6dd42575f36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZI5AILI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZjOhIAE8pfDVJSGOdEUFsdNHdPMntEezr8QSsRcCbQAiA093yPtM1pzqg45Iv6SYTn8tJsQ4JMR9qJf5fx%2FIyNeCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTL28sv%2B415ZPVZxKtwDjLIdw24DCW5rXUD%2FTqeU5f44daVGfivQiUatFe0TzU3ewggPCWeQ2mMV7IIYvXEmz3%2B%2BI4NgXbczFQgFcazQ%2FnMxeRb37Kgw9LgcUkgaNMKymPVSUm2PePxS1Duyf7Vgv3Rjpc6mdU%2BFN0r6o%2F9lHkpFx3EPlko6zfAjRocKaOJNcKG9pLggosFkUX6xLMWAh%2BWJ0u80jAjYtyDDp8fC5Dc%2FzYXLqR4R5%2BoqiMep8dq9ZlmCEXDpW3VmWOX2uEYbqWPsInKddsNh5znLVuCsEMpGDrRPgfwPGkpT9BdeuQgPqOwcPyO2Uttu5PitfWPaQNdOC76zm4XXi4xBHzasNDhnGzu75YXdKZmfn0gVy22gUQKSVduKKkr4fYrzqviz1M9TrYMP8uHV%2BZFy5a0L0XCy9VQvGixrz2skJxVBaH0%2BQDpE%2BR0dED1l2Vbj0kTtfTqe5YkVR8GQHy%2B13K5DYDFaUaBUdGvqYE%2BWF%2Fn9Ycsl%2Fy%2FcFl3j%2BXRiGNKw5Q9hEinK%2FxLqpstkhv4HOonwprHkPJkEKMhq7ioIdkuGCfdl4IgbMgSJbUwSOMeByMoYnl1c97CTk9T9YfGcq2Pc27ArplT%2Foc7ysaKJACUvK5Kwy1pHewKg1ELbiAwwwprVyQY6pgGbrU7dTJN4Pzx0bW7WIX3ai7da4IE8RtugIkyjPypDzqvUkLz53z1nbCqbtH%2BNO0ynzQb%2FEgF6L%2F24df17pB2dlaOBe%2F%2FKzmPJVXbmkGVPxQLfwMaM344XwjiOb5J2nqhIR6Yewce6VcjT7NrLfhV6saTj%2F8v8lnC2d7ipwc77tqbPzQXnUbS9xL35rv8zFQ9P1o1RsklJUkPDtnEOngfuUjRpZSXN&X-Amz-Signature=246e286f469e5c1c94a342975add1f976081469f354f3d45de2fd439534a7132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
