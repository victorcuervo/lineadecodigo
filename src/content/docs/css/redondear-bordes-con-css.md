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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJNMFBQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRO4BzxTmNWU9T%2FwPzqvN5y3oEkB%2FAC4VV%2BqJFct9oqAIhAOXESJ3rBxCy1dorzL7F9dB2Hl0dlBNSCb75h%2FgU8ib6KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BNDPCFwC6%2FMIyQWcq3APVV7FeYQ%2Bws4ShLVMv2DAfUUN3P0cODXjaxZWgTJ3%2Fx51FIjKmb7tKSQUBpmApecliezSOP0WT5j%2F2rB0wg%2BCIMQpz94lkuOyUFUIIV1hT7qCGqipmCQsTqoGN8GOb4VVvo4wG9plk1kowHpVaRjaIWfSaoZV9CLloTgMfDcZv0ffEEdqvFBTJ8VyWtycPOiXLNIValeHm70pu2JTZ4y4b5LZ2M7kwXcmsT5rPQXsMwpLJRArDib%2B0bjGRmIhvk%2FLbpgmZvPNuhKJwJJYSxbgkbOZDCPpjYkIvvfeO4rKPY3f4YVqO%2B7owmI%2BW1oqnkFsuh5K5Lt1gl0QJZqc3kJdlHI2hUIeugTP6EMbn6oDQZ3E73P9fos9jwF9ymrYoNifGt67BCN1JOtcC1aRCqKHZ58H21%2FR%2F5vqjSMjW6i0hmT%2FKSOwxYg9gYDS6ZeKMuPFf%2Bzi3%2BjaLAIzOA%2Bx529cRJMchIDKxAhd2Y2QInVZC42ojP%2BinS9NVQHKB8iL%2FcGArw4U1jMgf4QNCQa5fQ16LvHZ56p6FNvzUW2HBhs6EFPbhpksNBmtMotsV%2BOac6xc62N8tfoM%2FdyMXQPHcD6k%2BC%2FwnmTqvnSj1oaoT8vdKlSAFVNT8ScLSgBEF2DD%2B7dnJBjqkAVr2vHob2sLOUtqTbEp4SiL96ljfFZsmDDA13l62T91ckm9GxBgWH%2BdDplIttJvuo6jdipVNAaOZenVX7qHEydNwhy%2B0EKg6AfquIp8UR10AYE7ATyVcclAxb007Q2FuiUl0%2FbfSj70UQFbCczpBx7AF5FoR3ofQjKsQuQ1AJ5wjcSL7YUOaPBVoKzi7JwMEOkXG79lDqmVNa4rzmtTrPDdPOr0z&X-Amz-Signature=8a0f888e7154930eefb99c9010827e328186d10ae332e9c63a0a2ac0bb519fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJNMFBQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRO4BzxTmNWU9T%2FwPzqvN5y3oEkB%2FAC4VV%2BqJFct9oqAIhAOXESJ3rBxCy1dorzL7F9dB2Hl0dlBNSCb75h%2FgU8ib6KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BNDPCFwC6%2FMIyQWcq3APVV7FeYQ%2Bws4ShLVMv2DAfUUN3P0cODXjaxZWgTJ3%2Fx51FIjKmb7tKSQUBpmApecliezSOP0WT5j%2F2rB0wg%2BCIMQpz94lkuOyUFUIIV1hT7qCGqipmCQsTqoGN8GOb4VVvo4wG9plk1kowHpVaRjaIWfSaoZV9CLloTgMfDcZv0ffEEdqvFBTJ8VyWtycPOiXLNIValeHm70pu2JTZ4y4b5LZ2M7kwXcmsT5rPQXsMwpLJRArDib%2B0bjGRmIhvk%2FLbpgmZvPNuhKJwJJYSxbgkbOZDCPpjYkIvvfeO4rKPY3f4YVqO%2B7owmI%2BW1oqnkFsuh5K5Lt1gl0QJZqc3kJdlHI2hUIeugTP6EMbn6oDQZ3E73P9fos9jwF9ymrYoNifGt67BCN1JOtcC1aRCqKHZ58H21%2FR%2F5vqjSMjW6i0hmT%2FKSOwxYg9gYDS6ZeKMuPFf%2Bzi3%2BjaLAIzOA%2Bx529cRJMchIDKxAhd2Y2QInVZC42ojP%2BinS9NVQHKB8iL%2FcGArw4U1jMgf4QNCQa5fQ16LvHZ56p6FNvzUW2HBhs6EFPbhpksNBmtMotsV%2BOac6xc62N8tfoM%2FdyMXQPHcD6k%2BC%2FwnmTqvnSj1oaoT8vdKlSAFVNT8ScLSgBEF2DD%2B7dnJBjqkAVr2vHob2sLOUtqTbEp4SiL96ljfFZsmDDA13l62T91ckm9GxBgWH%2BdDplIttJvuo6jdipVNAaOZenVX7qHEydNwhy%2B0EKg6AfquIp8UR10AYE7ATyVcclAxb007Q2FuiUl0%2FbfSj70UQFbCczpBx7AF5FoR3ofQjKsQuQ1AJ5wjcSL7YUOaPBVoKzi7JwMEOkXG79lDqmVNa4rzmtTrPDdPOr0z&X-Amz-Signature=f01d45c7d4c337c34f993be3fc0cfe7747bdc8ac8cc2aa55b2789cd8385fb155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
