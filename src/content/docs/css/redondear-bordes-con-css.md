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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M65LWDW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkj4J9yCejRxqFQqGOmVKjMhmVxZi%2FKTXejWAHdHVkJQIhAMZcrSieq3194J6dFHYskZvWjSh7%2FYxR4zX0OyHE9W%2FyKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRj8OzxlsDl%2FXsccq3APRmNO6XbWy%2BiU3vcgdEgsm9%2FafvsgzrzPa0MmHCWkM2%2FaYeLqC11dxF7th7AkBOAtKYprOJiKRgDUJkeKN9%2BUiChZfEkoXEdpznOCoQtPjebDQ77gM7iJbWvKZ8GSf6OPKfj3eTBwyblFXI7PJ7gQMHnpidrWThVB1GLiiHBTGToYw10uyt%2B80ZWGkrfifMp%2BA%2BrJpW2NIZSVycFmrGFYFFMY15SG3pdEU2Ai727w5144YbdQs%2BBReeDiQ8tF7lDhkmueNxBPmL7YUBTGj25FSstHNOGJhE42TTYG4FAZG65GJTIcrARyaz%2FbqiYQPizzoq%2F5YDxmqNHHk4z8n8EX4K0rWaNxFAOSnf4DaPBheOt4WyNutnLM0X05LKUVm4sojHil9xPxZiPKcNPvLutv8t8mU1BbU1MQGQc7TeLGIdpnPixcHDzCXZtnNhc9qYdkk%2BYdOnSFoBM6tFQyRPayKo9jYv3biRMZ5ol58oWss1NAQ41cKpJQUWlq1tGcB7elR18Q5MytsEXUpO6fJtxvMCFcLDL30b89sPC2M9QnPLmeAoLHauyNZnYA1rx6%2BosuAu90IDNUJ%2BcEXu5JaCZyfY4QLKNUh8LiC8y27BKl3JbD1V3%2BPddVyY60svTCVmtTJBjqkARwRT6n33BMeY4pyH7%2BG5XqVi5y56sBeWOaYjrb18DOuf%2BCkiqBnp0VZEwu3fjMhx6v%2F5TDrYxkOc56uDGxx%2FZZhyHSu9iqR5Erg2brzTDSWh%2FRGVGfMopcZGbdHz0ESWxW1TD%2FKpV2tGoJXb92%2BDyJJvLryxhTdJRa6t0llCh8txJA3XGuI8HBBwsJ9HLZi80nczBgiLovS%2Bn61rnNq5Gc8T033&X-Amz-Signature=8b0972f872eac6b9c4e45914ddd846437e29962a19c16ae4eba0db286dc3bde2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M65LWDW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkj4J9yCejRxqFQqGOmVKjMhmVxZi%2FKTXejWAHdHVkJQIhAMZcrSieq3194J6dFHYskZvWjSh7%2FYxR4zX0OyHE9W%2FyKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRj8OzxlsDl%2FXsccq3APRmNO6XbWy%2BiU3vcgdEgsm9%2FafvsgzrzPa0MmHCWkM2%2FaYeLqC11dxF7th7AkBOAtKYprOJiKRgDUJkeKN9%2BUiChZfEkoXEdpznOCoQtPjebDQ77gM7iJbWvKZ8GSf6OPKfj3eTBwyblFXI7PJ7gQMHnpidrWThVB1GLiiHBTGToYw10uyt%2B80ZWGkrfifMp%2BA%2BrJpW2NIZSVycFmrGFYFFMY15SG3pdEU2Ai727w5144YbdQs%2BBReeDiQ8tF7lDhkmueNxBPmL7YUBTGj25FSstHNOGJhE42TTYG4FAZG65GJTIcrARyaz%2FbqiYQPizzoq%2F5YDxmqNHHk4z8n8EX4K0rWaNxFAOSnf4DaPBheOt4WyNutnLM0X05LKUVm4sojHil9xPxZiPKcNPvLutv8t8mU1BbU1MQGQc7TeLGIdpnPixcHDzCXZtnNhc9qYdkk%2BYdOnSFoBM6tFQyRPayKo9jYv3biRMZ5ol58oWss1NAQ41cKpJQUWlq1tGcB7elR18Q5MytsEXUpO6fJtxvMCFcLDL30b89sPC2M9QnPLmeAoLHauyNZnYA1rx6%2BosuAu90IDNUJ%2BcEXu5JaCZyfY4QLKNUh8LiC8y27BKl3JbD1V3%2BPddVyY60svTCVmtTJBjqkARwRT6n33BMeY4pyH7%2BG5XqVi5y56sBeWOaYjrb18DOuf%2BCkiqBnp0VZEwu3fjMhx6v%2F5TDrYxkOc56uDGxx%2FZZhyHSu9iqR5Erg2brzTDSWh%2FRGVGfMopcZGbdHz0ESWxW1TD%2FKpV2tGoJXb92%2BDyJJvLryxhTdJRa6t0llCh8txJA3XGuI8HBBwsJ9HLZi80nczBgiLovS%2Bn61rnNq5Gc8T033&X-Amz-Signature=f8c39e1b47c0fe64f2a1e5c9d4761ccc75238c21b44623e16e2466e41dadd4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
