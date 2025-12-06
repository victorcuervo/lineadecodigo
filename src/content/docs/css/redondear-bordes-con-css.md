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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKYFFU3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY7VBbkzMq6eaboMg64NUIIG%2Fcoa0eCJyk%2BNadhh6cNgIgGY2LGvfCW5ZMXC%2B93DrATxkhD3I7gaS%2FBHGyDKuVy9kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDN6CSYSHYvGb9iTBaCrcAxsvGY4GVc8PEyeReqPc90QP4UJTq6tXhMm3jiea18%2F26Vd2xN8ibZQUSvV%2FM8%2F%2Bxw8PkpOIFb63eKlBOaDarNqePkSAvk7c4P0XuBwD37XAuX9i19uQaTfUD0sv8agEkyC0wyv6dJuA%2B4731sXjYzMjKYNwdJ%2BERTBhc5Qq%2F2IftJ%2B2Pv3YWn78wG%2FlgMsi0Mv4Dd4MMSQhVq9Drhw8QuJwbNWiILcKoHHCSIX61CszR4lELoHrBJhRENLlsKci4yTRa4Ko9BRU8wYIKu%2F9bm1jJ%2FpcWC8VMy9yImKKJL%2B6HYHHqEaXV0OZnxe5DKkHPCpcxYwlAQA7bAwPacdPA3sX8gLB0NQoOpnZP6jhv6eT1Ny7HuA2otWB3%2BvG5HPf2RsAYHNwB%2BxG015cUUfL5vu4gKDQRsYacAfFphHNjuvcZwtj30pIwf9lwH6DH57lG1DvcA%2F9oqn%2Fv%2BbTSKAKEjbkZQqEU2cRDW8cFVpoNngHR9SnKWj9v2pXf6FsFe3Wwmqk2YGFbmd1etj6iy%2FfFulcxRFD66KUNLL5znVHBR27V9f8w%2FPWEKwOW5A4UI26i6al7SBTaq%2BPGYWno5%2BD%2FZoiMLWsXqWsRxBeOqQf4Yxv5YE%2BNYJaF8jf15gJMPHM0ckGOqUBILIvMD9EkODONT12PL5umWYKgfeIQPqSHZua79fG9PcRZ%2FIL6KuuhD1x8d068APyTaX%2BP6mC6bCRwcbWLaIRAn9iJIFFCYE2kgBAFPi0X3dYXdDcKfHj8PUxROFD7rYp3s6JSJoHhlw1z1jZlbWSRHqKI0hyLbem0eJRu56%2Fq1pWD2gXZZ6krewtfGoI7NmTCeveSS6E%2FThA4%2BbCDYUyngy2dwzu&X-Amz-Signature=763801a2e9811dba5531460c990b6deaf13da0954afcdf445a0257e80456363c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKYFFU3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY7VBbkzMq6eaboMg64NUIIG%2Fcoa0eCJyk%2BNadhh6cNgIgGY2LGvfCW5ZMXC%2B93DrATxkhD3I7gaS%2FBHGyDKuVy9kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDN6CSYSHYvGb9iTBaCrcAxsvGY4GVc8PEyeReqPc90QP4UJTq6tXhMm3jiea18%2F26Vd2xN8ibZQUSvV%2FM8%2F%2Bxw8PkpOIFb63eKlBOaDarNqePkSAvk7c4P0XuBwD37XAuX9i19uQaTfUD0sv8agEkyC0wyv6dJuA%2B4731sXjYzMjKYNwdJ%2BERTBhc5Qq%2F2IftJ%2B2Pv3YWn78wG%2FlgMsi0Mv4Dd4MMSQhVq9Drhw8QuJwbNWiILcKoHHCSIX61CszR4lELoHrBJhRENLlsKci4yTRa4Ko9BRU8wYIKu%2F9bm1jJ%2FpcWC8VMy9yImKKJL%2B6HYHHqEaXV0OZnxe5DKkHPCpcxYwlAQA7bAwPacdPA3sX8gLB0NQoOpnZP6jhv6eT1Ny7HuA2otWB3%2BvG5HPf2RsAYHNwB%2BxG015cUUfL5vu4gKDQRsYacAfFphHNjuvcZwtj30pIwf9lwH6DH57lG1DvcA%2F9oqn%2Fv%2BbTSKAKEjbkZQqEU2cRDW8cFVpoNngHR9SnKWj9v2pXf6FsFe3Wwmqk2YGFbmd1etj6iy%2FfFulcxRFD66KUNLL5znVHBR27V9f8w%2FPWEKwOW5A4UI26i6al7SBTaq%2BPGYWno5%2BD%2FZoiMLWsXqWsRxBeOqQf4Yxv5YE%2BNYJaF8jf15gJMPHM0ckGOqUBILIvMD9EkODONT12PL5umWYKgfeIQPqSHZua79fG9PcRZ%2FIL6KuuhD1x8d068APyTaX%2BP6mC6bCRwcbWLaIRAn9iJIFFCYE2kgBAFPi0X3dYXdDcKfHj8PUxROFD7rYp3s6JSJoHhlw1z1jZlbWSRHqKI0hyLbem0eJRu56%2Fq1pWD2gXZZ6krewtfGoI7NmTCeveSS6E%2FThA4%2BbCDYUyngy2dwzu&X-Amz-Signature=f6ffd49c4bf45b48cf59033e939e7fcc70a6a4c3cf8b04a1b45617b455dbd63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
