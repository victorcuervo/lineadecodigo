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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU7UOG2C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfOULLg5jgDmtYwkcGKYz%2FZSAGnV3lg8j8JIo6wBDc1AiEAkoaKP3gic%2FyBMxjW%2BX9QcaF4khB6WAJYQlrFBriMxlEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGwrw1MJwg8g%2BHwnFCrcA6SIxq7OpPOnzxSHdeC8DtIo6e4rdp2AePeCryWFWRgcrm7rIa6EdW7Z90L0coPUekDgDg4YgiZehG%2FmcyudFqHSInpM9QxqTN2FCInSt5lpuoMC1wjB1IzkZejYiRXHI67Oe12smdqGLWQ46Ti%2F0SfkqgI21WZFetE3M12AFx%2BRWd6i%2BNVdBYLaQKoL6LZ7hTQLzeuW6Zi8E4MdZtum2tMrQOXiE26CDh9yKel23I3c18c5aH1WQcfhQow5mpJmMQbFt89kQtiHxt6GPIc0%2Bp7M2l8DewocG6ikic0Qh6UG9fpd0uj1zGeMSXVY2ySWJRqnhFmmoW2VbneDfu9%2F8ocf1X7wD%2FGNogwgmyafWTlBwFgPARbMpi5LTh9gyEky3YVyOyJ2sWXT6YLAmhSkPwiTfzhtJBBOkFESLbj92Rcejuv7bdbHXm%2FswuA9TNXbW%2FLtkV8UhtV7hNrAP7TN5gnOVDMQpMFTrfqRPOqgi%2FJwFtM%2BpZ4nEYChRiYQlYHWBb9r86qmvn%2ByT6%2BHgPVM88hh8OLBEym32jUg4v7dzFnvYH2gi40Cl8tVu84ExeWWbnfwgvDGiR68EKV3k3SlpY5lIkprh0PfSkfq%2FUF7tqzX0Pi%2BFFdMgKzq2jWrMPeWiMoGOqUBH3mKGZXk5Lndqa37wyfqaPg2o%2BhwFVrZurmUc0KlDtNo0FqGLsnDM2IOq4jxq7a9xcGPn3wptPWX%2Br6nwo1fp3hYcqPza8Xsh5zPZiUXmfK8KWoaNvr%2B0QuNoIU6jPaK5z%2Bp7sYG%2BcKMYG2pXwSXdCY%2FBau6ZureIrzbQu%2FANE%2BRn0i7L4eh%2BDIrxrxylCZhU0SRCg2RDQlYZDcEm7mRc4Y5Zoo9&X-Amz-Signature=d4c71eb291201194d72b324a177b0d543bf6208c1854579ded20627bf662029d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU7UOG2C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfOULLg5jgDmtYwkcGKYz%2FZSAGnV3lg8j8JIo6wBDc1AiEAkoaKP3gic%2FyBMxjW%2BX9QcaF4khB6WAJYQlrFBriMxlEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGwrw1MJwg8g%2BHwnFCrcA6SIxq7OpPOnzxSHdeC8DtIo6e4rdp2AePeCryWFWRgcrm7rIa6EdW7Z90L0coPUekDgDg4YgiZehG%2FmcyudFqHSInpM9QxqTN2FCInSt5lpuoMC1wjB1IzkZejYiRXHI67Oe12smdqGLWQ46Ti%2F0SfkqgI21WZFetE3M12AFx%2BRWd6i%2BNVdBYLaQKoL6LZ7hTQLzeuW6Zi8E4MdZtum2tMrQOXiE26CDh9yKel23I3c18c5aH1WQcfhQow5mpJmMQbFt89kQtiHxt6GPIc0%2Bp7M2l8DewocG6ikic0Qh6UG9fpd0uj1zGeMSXVY2ySWJRqnhFmmoW2VbneDfu9%2F8ocf1X7wD%2FGNogwgmyafWTlBwFgPARbMpi5LTh9gyEky3YVyOyJ2sWXT6YLAmhSkPwiTfzhtJBBOkFESLbj92Rcejuv7bdbHXm%2FswuA9TNXbW%2FLtkV8UhtV7hNrAP7TN5gnOVDMQpMFTrfqRPOqgi%2FJwFtM%2BpZ4nEYChRiYQlYHWBb9r86qmvn%2ByT6%2BHgPVM88hh8OLBEym32jUg4v7dzFnvYH2gi40Cl8tVu84ExeWWbnfwgvDGiR68EKV3k3SlpY5lIkprh0PfSkfq%2FUF7tqzX0Pi%2BFFdMgKzq2jWrMPeWiMoGOqUBH3mKGZXk5Lndqa37wyfqaPg2o%2BhwFVrZurmUc0KlDtNo0FqGLsnDM2IOq4jxq7a9xcGPn3wptPWX%2Br6nwo1fp3hYcqPza8Xsh5zPZiUXmfK8KWoaNvr%2B0QuNoIU6jPaK5z%2Bp7sYG%2BcKMYG2pXwSXdCY%2FBau6ZureIrzbQu%2FANE%2BRn0i7L4eh%2BDIrxrxylCZhU0SRCg2RDQlYZDcEm7mRc4Y5Zoo9&X-Amz-Signature=cb00047f8536162f2caff4f7bd7636ed643a018fd44783454f5d96d7c9680309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
