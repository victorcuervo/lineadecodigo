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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QVPOYWT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbwUjALD8CmEV1BilVA6BzPrxHrDBDe6O7T46z80vWawIgXhUN5jp1Hp1BSNeTFsygQOmph%2BddKbElK%2Bi95jENmUoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDELLlnVmqmdSf70BSircA9f4qgeEX3xR6YApXjdk%2BpDooGgYnjiNlw7m5qeggbJKkFLPr1CS7igW18of23dlpE566EqXW1oCZpCYAklYicQW1AdaPRzIA0HuUdzgdhhEBhpkBZOF8634KeUVIalNgtWbxzh51rM3HoBGUcsttSijUvYqOSFZ7VBww%2BcmTgxMJjkLduwPzd8Dltm3GBpRIyeIYbSEJKt9rpPVvnUpCjfg%2FWzEvhe4cm9lTar41vBRHgf6VGy6qflPTIwuX0d%2BzePauL6fKYFrqKKpAPJQaX30upXiNY8l81U%2FFrsxbXqmPpcQbn2eSj8cGt54L87xoEd1LE8pQtSaqvI5YByN3kLuC3eoDepWoWfJQfNcEMp56YFZpvyehK8oKo1pDm1jweYU5p2TVJrUqqKWJN%2Bi%2F5aVB%2FVEcF04KoxcgSDcFgdbBR9k6W8u8mygLo%2BZ0IacbGGsdYWITHE53AWFva%2F0fvFgOEmpyGoGxeahAvqbH5H665h%2BMyWQarXO4SqGDPZEzRI8kEhkQZq4QRk5%2B3QcV0l8XPIXywytcVg2t%2BlQa83ZlT7H%2Fc0x9p8ZC8AHueFOFKAmfbPOnPJ2OqtC2S5JrUUp5sl32at0hgfefz8dBlONOCpX0Hv4XqHg9Na6MK2lyckGOqUBiGoJC64J%2FoZuCD5NAlSBdqIy7vys7lXfSMHg%2B0tFt9%2FDhK3rjKa%2FYCQ%2FhJHQ4L8z9%2BvpCxbfZ6RYYKpdst487Fy9ObHwDm15jiEXWQDFwr97avAa7JfN2PtQ5pPnJ5BtXcUNcDYXFnq1cMrG1i1y4gyqOBOuIIlAlfk6FDmh1WJ%2BCJSo2pBhYZyUHlSOv9IU7b4o14CqRJTFiYmswC1ZVG2Qet7F&X-Amz-Signature=0d754e47659c4098406ef66d3c625e01601cc8c985f79babd6842f43897a9279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QVPOYWT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbwUjALD8CmEV1BilVA6BzPrxHrDBDe6O7T46z80vWawIgXhUN5jp1Hp1BSNeTFsygQOmph%2BddKbElK%2Bi95jENmUoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDELLlnVmqmdSf70BSircA9f4qgeEX3xR6YApXjdk%2BpDooGgYnjiNlw7m5qeggbJKkFLPr1CS7igW18of23dlpE566EqXW1oCZpCYAklYicQW1AdaPRzIA0HuUdzgdhhEBhpkBZOF8634KeUVIalNgtWbxzh51rM3HoBGUcsttSijUvYqOSFZ7VBww%2BcmTgxMJjkLduwPzd8Dltm3GBpRIyeIYbSEJKt9rpPVvnUpCjfg%2FWzEvhe4cm9lTar41vBRHgf6VGy6qflPTIwuX0d%2BzePauL6fKYFrqKKpAPJQaX30upXiNY8l81U%2FFrsxbXqmPpcQbn2eSj8cGt54L87xoEd1LE8pQtSaqvI5YByN3kLuC3eoDepWoWfJQfNcEMp56YFZpvyehK8oKo1pDm1jweYU5p2TVJrUqqKWJN%2Bi%2F5aVB%2FVEcF04KoxcgSDcFgdbBR9k6W8u8mygLo%2BZ0IacbGGsdYWITHE53AWFva%2F0fvFgOEmpyGoGxeahAvqbH5H665h%2BMyWQarXO4SqGDPZEzRI8kEhkQZq4QRk5%2B3QcV0l8XPIXywytcVg2t%2BlQa83ZlT7H%2Fc0x9p8ZC8AHueFOFKAmfbPOnPJ2OqtC2S5JrUUp5sl32at0hgfefz8dBlONOCpX0Hv4XqHg9Na6MK2lyckGOqUBiGoJC64J%2FoZuCD5NAlSBdqIy7vys7lXfSMHg%2B0tFt9%2FDhK3rjKa%2FYCQ%2FhJHQ4L8z9%2BvpCxbfZ6RYYKpdst487Fy9ObHwDm15jiEXWQDFwr97avAa7JfN2PtQ5pPnJ5BtXcUNcDYXFnq1cMrG1i1y4gyqOBOuIIlAlfk6FDmh1WJ%2BCJSo2pBhYZyUHlSOv9IU7b4o14CqRJTFiYmswC1ZVG2Qet7F&X-Amz-Signature=3a2d9f6f528024ccfd85b3c4555d46492afa1225874790f74d8a44de812745d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
