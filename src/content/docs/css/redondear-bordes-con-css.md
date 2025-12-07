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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJRCVMJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHj0DjLvUVczg0jKwXz%2BX60bd9Z9OJH%2F6piEksjx1%2BrkAiAdTtpbMhbU0R7JgI4LNJXOD9CEm1XLr3g3xbTafHRGWSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8d%2F0GWmo4BtPSqNFKtwDWiluUJ0s334zeI7dzQQCzRjEPaEe%2FYHViEVyKAhU3ydhX3SEipkMTfdcYnsPHYeUvmu2Bw6aMI6MYy2mbyA45Y0FvTf561PF0ctQp6hRp3n7kDJEi2Z%2B7RtT0T257LifP2gouAN1icmCjYvwFbVUGE32htnYNVTdM2NUJWJr0OTupSmJs0M93Hl0kiAN7p5Wz1eZE3yuO1c1d%2B2SJkQN4IuI%2B56d2Qb0wl0OMB4uKewYCfxd%2BL3vIsOyBrx7XyKuonGd17PUkEjll8ooPrsWnmNmQtojZb5jOJAlxmSQSIl1yH6Za0Jm%2F%2BNZwfA95tOlgsrGXakavxcWJq%2F5voCVIqUjWjWCoDUCME1RgaqTeXQcfz%2BMsR%2BQxgOrIB33w4oxNPwKarblWJRCbSyHtYGwlYF%2Bx40M025zTooIHyQWfrc3mBpR4%2B6hDZNX5XOsHPE7HvGYoqJ2NwbW3tNUXWNa3gHJkwfzY1ph6O6zRGsk71fcYvebHhKYvUcdRG4rFRXGgNi7Wc0P4H%2Ftqxw0dfNKdhll1l6VGrsyU8c%2BrVnRSBLHUSRw4UBgGZkfTGgGM06pt90vZvpPBVnvZNRzyjGHoDAhLvv6a4basgH9Y5ShtVxE5QEGgU004hbGQygwu%2F3SyQY6pgEy3TG1hEW%2FcoQobIHVf8me4j5sJfqswEuhwdh09TQgV3FU86pLSqDNoBPONo2BymG5pan9hfJNX2fxeH46oTWSDd1dEczzj4XZfPHBXYNwVY6vX8jePOsgPIhpAuf5A6%2BLDXqM4soBA%2Fi2DMZGpplDEVTQkFrkKMxjJtxMgcZq3PNbaG1SX%2FdJclmaq%2BLRFnh701ou0dVdE5D3fn6Q01luVXGTe0CW&X-Amz-Signature=de5e970cda8ed00304c2850dd3c0ccf51d2740a1d4e7494466912d57b2a2528e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJRCVMJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHj0DjLvUVczg0jKwXz%2BX60bd9Z9OJH%2F6piEksjx1%2BrkAiAdTtpbMhbU0R7JgI4LNJXOD9CEm1XLr3g3xbTafHRGWSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8d%2F0GWmo4BtPSqNFKtwDWiluUJ0s334zeI7dzQQCzRjEPaEe%2FYHViEVyKAhU3ydhX3SEipkMTfdcYnsPHYeUvmu2Bw6aMI6MYy2mbyA45Y0FvTf561PF0ctQp6hRp3n7kDJEi2Z%2B7RtT0T257LifP2gouAN1icmCjYvwFbVUGE32htnYNVTdM2NUJWJr0OTupSmJs0M93Hl0kiAN7p5Wz1eZE3yuO1c1d%2B2SJkQN4IuI%2B56d2Qb0wl0OMB4uKewYCfxd%2BL3vIsOyBrx7XyKuonGd17PUkEjll8ooPrsWnmNmQtojZb5jOJAlxmSQSIl1yH6Za0Jm%2F%2BNZwfA95tOlgsrGXakavxcWJq%2F5voCVIqUjWjWCoDUCME1RgaqTeXQcfz%2BMsR%2BQxgOrIB33w4oxNPwKarblWJRCbSyHtYGwlYF%2Bx40M025zTooIHyQWfrc3mBpR4%2B6hDZNX5XOsHPE7HvGYoqJ2NwbW3tNUXWNa3gHJkwfzY1ph6O6zRGsk71fcYvebHhKYvUcdRG4rFRXGgNi7Wc0P4H%2Ftqxw0dfNKdhll1l6VGrsyU8c%2BrVnRSBLHUSRw4UBgGZkfTGgGM06pt90vZvpPBVnvZNRzyjGHoDAhLvv6a4basgH9Y5ShtVxE5QEGgU004hbGQygwu%2F3SyQY6pgEy3TG1hEW%2FcoQobIHVf8me4j5sJfqswEuhwdh09TQgV3FU86pLSqDNoBPONo2BymG5pan9hfJNX2fxeH46oTWSDd1dEczzj4XZfPHBXYNwVY6vX8jePOsgPIhpAuf5A6%2BLDXqM4soBA%2Fi2DMZGpplDEVTQkFrkKMxjJtxMgcZq3PNbaG1SX%2FdJclmaq%2BLRFnh701ou0dVdE5D3fn6Q01luVXGTe0CW&X-Amz-Signature=122deaae459095fade06f2e1dde35fc817ba2f9dfcbf2b4e36f9ac4d2744ed08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
