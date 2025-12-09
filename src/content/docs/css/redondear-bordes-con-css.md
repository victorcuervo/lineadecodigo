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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL7S7FCK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC639ZfxS%2F7yz%2F0gxEOGqUsiJCz8hPfWhc4CK%2FVPBV7OQIhAMdlEbZDedemnqTcq%2FI69eAdls3uphVM0JONwFUyiyxnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqxrL7%2Blg30erAuakq3AOXIqio%2BR%2Fsz%2F84kRU3wdacvPSnzGNMu%2BbQzS1HtyIBYuuLRMr%2F2%2BotU2l6S54t8xoIgohIVXDSKiYqhX9YgCQlN0OLIF8DoAQpBs2HgyyKaQgOb8RiK4%2B3%2BzmjIwyy0oRm94S%2BzSIlBpZADxhkXWDAUxDg06RGLjBb1tVsI0pzxmiuyyUYMt8mI5NgVQxN37l%2BBkYANQ%2BBAbxHP16p1%2BHRdLSUGgz7Z4aKUwtS9%2FfHICiWaX4noTKHm%2BkYKyO9YkPd1QRSFfPoah2DIaLPvSZGcEWAfpSl9Au%2FF7CNzlyHVu9gKLMHL4aSQySH%2FAt72k2zKOl5XGDoF0F825XntPeRgu2bY7jykoXszjKeexc5amheZgU3olYR%2FKx7U4tfet1%2BGSGmUVNTgRncxd3sPEAQT%2Fhfq13Rqg8uunr8LljnktcudLlSHwBJzday59BOz4zXHG%2F4Ro2C%2FfGoFLNeDuyRc8h30YxozTsurOmjR%2F%2F%2BLZiUKX31G7jUR%2Fx2CHdVcGRIRB%2FRYVqr8vw0SrE9g9uPxxOcg5sEJcFY4FaI5Wf4JhCJeIg%2BDzX4HoVtu%2BGXtNN74EW8eAo1nY%2Fjlxrj6MHhOjV7chG9oodymK4DdvLG%2BEqnLDOATzU%2BsKyJYzDHrd7JBjqkAb2G0hORqsl9jK2EBPguSp5dEimBdBIfX7zoVPhS%2BtnAZjGO08CsDr6PDJJBfwmU%2FX%2FNXUzCLw9IXxQ09J0zXT3%2Bm28yd1hhASw0Twex7bnlK8Sqe6C6%2FtDgZs6tqVY0%2F2tIz%2BlId4HsmXCckteclPv%2FI9kCfvwQxzPweDLFfO0DpbS7T8gFIur3W2JzyW44qWUnqQo53h%2FYjDKKRj8MQU%2FgTg5E&X-Amz-Signature=889d1b9bb18a3f16e22f01715d89273638e0bc7213cf95fb4f17d69c7685ed97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL7S7FCK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC639ZfxS%2F7yz%2F0gxEOGqUsiJCz8hPfWhc4CK%2FVPBV7OQIhAMdlEbZDedemnqTcq%2FI69eAdls3uphVM0JONwFUyiyxnKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqxrL7%2Blg30erAuakq3AOXIqio%2BR%2Fsz%2F84kRU3wdacvPSnzGNMu%2BbQzS1HtyIBYuuLRMr%2F2%2BotU2l6S54t8xoIgohIVXDSKiYqhX9YgCQlN0OLIF8DoAQpBs2HgyyKaQgOb8RiK4%2B3%2BzmjIwyy0oRm94S%2BzSIlBpZADxhkXWDAUxDg06RGLjBb1tVsI0pzxmiuyyUYMt8mI5NgVQxN37l%2BBkYANQ%2BBAbxHP16p1%2BHRdLSUGgz7Z4aKUwtS9%2FfHICiWaX4noTKHm%2BkYKyO9YkPd1QRSFfPoah2DIaLPvSZGcEWAfpSl9Au%2FF7CNzlyHVu9gKLMHL4aSQySH%2FAt72k2zKOl5XGDoF0F825XntPeRgu2bY7jykoXszjKeexc5amheZgU3olYR%2FKx7U4tfet1%2BGSGmUVNTgRncxd3sPEAQT%2Fhfq13Rqg8uunr8LljnktcudLlSHwBJzday59BOz4zXHG%2F4Ro2C%2FfGoFLNeDuyRc8h30YxozTsurOmjR%2F%2F%2BLZiUKX31G7jUR%2Fx2CHdVcGRIRB%2FRYVqr8vw0SrE9g9uPxxOcg5sEJcFY4FaI5Wf4JhCJeIg%2BDzX4HoVtu%2BGXtNN74EW8eAo1nY%2Fjlxrj6MHhOjV7chG9oodymK4DdvLG%2BEqnLDOATzU%2BsKyJYzDHrd7JBjqkAb2G0hORqsl9jK2EBPguSp5dEimBdBIfX7zoVPhS%2BtnAZjGO08CsDr6PDJJBfwmU%2FX%2FNXUzCLw9IXxQ09J0zXT3%2Bm28yd1hhASw0Twex7bnlK8Sqe6C6%2FtDgZs6tqVY0%2F2tIz%2BlId4HsmXCckteclPv%2FI9kCfvwQxzPweDLFfO0DpbS7T8gFIur3W2JzyW44qWUnqQo53h%2FYjDKKRj8MQU%2FgTg5E&X-Amz-Signature=6fa09d5072d2ede1a98e069708c257835d6636b79b2e98c8c197f05dc62f32ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
