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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGX2SCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMjZzVawQ7pPsDhbhA5yeWJIm4tDcC48gG0rFA7GbCAIhAJzaj4cBU7Sc5CEj0SWTU78sVIB7zpKGPWpxz5i%2F1dKqKv8DCHMQABoMNjM3NDIzMTgzODA1Igxvb5MU8FLkzpiWfhsq3AP5tCBZuERt%2FTPP1lWnhPG9TEwHy65xr4%2FYOG43kcXHZU3bW%2FT7KGpXrtNH3fwc4%2FEnKXkiXsDHYXvhaaduguPw9GVoXtooTEPgt3SrrxYls4wwcXpCU5Sgy0l%2Fo%2BtZhJANK8xTsiSaoIO%2Ff28UNJnbbmZoFiAtIVn0vWYjulfUQDUimKw3lxGKTuqnEFlAphwklPJPbdr7pBn6v%2BDkff%2BQeIi%2Bm2UAfnc4JORZ%2B2oodam5NGtcEbz43gHajseWU3wHU9AczS1R6npDPqBFOwsFTZ2SJ6JBr2Vg24hr3TQkss6zjphVK3tWozX4U0fhR3h3rtYbSUCoMGMxe%2BF4n1QVcOwxVMwRrLKansiUbFFYJZBwGy15vdjOctNrSr0zJkkR%2FiAKpAGV2xOa8fSmxaO26N%2FJSvBy%2B4vwvHTCDT3IVkvmzYnYmagZQdIw4kT15%2BHKXWg9NBIE8hg3A%2FFhHzrvS78LdebtHkSHB87c63jC4XRcJ70%2Fegt3n9iNDD4ZwyN7pSM0z8OjHaOtrZo0nLE8XUJzoEMPGmmnNafsqjx1CFkYMTYurw0TcPF9zKYYUEb4pwWJN5QIr%2FGw4IYLFWVZ63ePG8PmSzrNShANN0auiH1aw7u4E%2F9WB7RwJjD8l4jKBjqkAeVavIfXysPGHUeyz8WK9A9FGrroy0ONR5GaEd5mJZjS9HsgFg1kY%2BL2c9Gs1XaguaFfq%2BMiDig5MpnmHNnK0JM4Kw830iS9l9o4Yp0E5SJBPOB9D0HEhRK%2FTq6lv6GW8KYQiKdL%2F%2B7kyp%2FkgEP6cXnaVsCUjeHSCxy%2Ba2SmPTAATNoEsObd%2FL680LsYhhv4LDC%2BW%2F3ae2MrAVsIRvKiNdFzCufW&X-Amz-Signature=3cc6aa8d54a1728b1921c0dd70eae932d17dc8569e9f7be19ff6955750c5275b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGX2SCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbMjZzVawQ7pPsDhbhA5yeWJIm4tDcC48gG0rFA7GbCAIhAJzaj4cBU7Sc5CEj0SWTU78sVIB7zpKGPWpxz5i%2F1dKqKv8DCHMQABoMNjM3NDIzMTgzODA1Igxvb5MU8FLkzpiWfhsq3AP5tCBZuERt%2FTPP1lWnhPG9TEwHy65xr4%2FYOG43kcXHZU3bW%2FT7KGpXrtNH3fwc4%2FEnKXkiXsDHYXvhaaduguPw9GVoXtooTEPgt3SrrxYls4wwcXpCU5Sgy0l%2Fo%2BtZhJANK8xTsiSaoIO%2Ff28UNJnbbmZoFiAtIVn0vWYjulfUQDUimKw3lxGKTuqnEFlAphwklPJPbdr7pBn6v%2BDkff%2BQeIi%2Bm2UAfnc4JORZ%2B2oodam5NGtcEbz43gHajseWU3wHU9AczS1R6npDPqBFOwsFTZ2SJ6JBr2Vg24hr3TQkss6zjphVK3tWozX4U0fhR3h3rtYbSUCoMGMxe%2BF4n1QVcOwxVMwRrLKansiUbFFYJZBwGy15vdjOctNrSr0zJkkR%2FiAKpAGV2xOa8fSmxaO26N%2FJSvBy%2B4vwvHTCDT3IVkvmzYnYmagZQdIw4kT15%2BHKXWg9NBIE8hg3A%2FFhHzrvS78LdebtHkSHB87c63jC4XRcJ70%2Fegt3n9iNDD4ZwyN7pSM0z8OjHaOtrZo0nLE8XUJzoEMPGmmnNafsqjx1CFkYMTYurw0TcPF9zKYYUEb4pwWJN5QIr%2FGw4IYLFWVZ63ePG8PmSzrNShANN0auiH1aw7u4E%2F9WB7RwJjD8l4jKBjqkAeVavIfXysPGHUeyz8WK9A9FGrroy0ONR5GaEd5mJZjS9HsgFg1kY%2BL2c9Gs1XaguaFfq%2BMiDig5MpnmHNnK0JM4Kw830iS9l9o4Yp0E5SJBPOB9D0HEhRK%2FTq6lv6GW8KYQiKdL%2F%2B7kyp%2FkgEP6cXnaVsCUjeHSCxy%2Ba2SmPTAATNoEsObd%2FL680LsYhhv4LDC%2BW%2F3ae2MrAVsIRvKiNdFzCufW&X-Amz-Signature=3f2e8b8444fc19d8691a4e5ff1e04339db44d00cbc40089f4600f43e04fa2e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
