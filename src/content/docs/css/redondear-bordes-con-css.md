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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKRFVJE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHztnJsAjcFgmYn%2Ft1MgFvOTcoQqwWjpPXXOdJB%2B0QltAiEA02QT286Euptm8ljPC0GoH0ncW7Bhf1LWFf%2BfsLPOQ%2Fwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCyRgmOu7wCfMmIXtSrcA6EQcMi4Wbr7XsUErdOB2rlsDoxA3CsHZh8xD2DJXIC3iqFBFpAzdeW0AKuHVGIJrzCeJR45nIWW5l8w7QOLLMbxBc6%2BVjQ9ZFXQb0f7kEsK4mGxyEtggfxmSeLfykriMu5PetSyNcrNDj3QLDEd9xOtRLBlg%2Fb0lGPblwZdXxVwfaS%2BLANaj5oPGBaOJrN85dSjJPNpcEzGTv9HpWJY0zDwYgcn2AztXTOIPo%2FxwnBrBCQg2ejF5hRmds5G5xtVCAz%2BvJKOgDCEe7gBauaO%2F7K9cqfQ8Le5agy87cw0ftfcXIZgjx6Hp3SzWO03a%2BIi9RC8AeaInAknYrW2wrqH5sJ16bl5z%2BilOi%2BCIIyT8i2Y%2F9EdrbdbR5HKgsv71mWlZyQ54o2xWikMV5YLYZUfY1TdVQg3aCFY4NI%2FbzDDtMol3Bcpf9Iy4IA8lGN77G7IkSxzGQIWN00Ti0iwwAHD7%2BQM7e7rWJLP0XBb6fxARxK6WLWpKGwFI2xV3qZyTq%2Fqw3FxBfgVhiXIWeHJLxpSFKtzGFYUI%2BcaTfMYSvjYzeLvacQgSm%2Byz%2Bytp07I38gNnRsuVYu0JjbC4F7y7nbUosNwi0X4Pzsxq4OZiG8wqBo%2BUpHp5VWiQIkwKSEEMNvozckGOqUBWt%2FuC3kkQvOPiW5eiJruEViWxCRFCmI0m0X3DFVco1BqMl4qGNMlC%2Fo%2FNWyHqOwnAC7NJtwGIj4cAmdxftw4OFXNFJeP6UdKI2uCDgjB0BDdMsD%2BDxjw6qi%2FuRO2WODJy4UwSV8SgYs%2BGU14WJRLMSjYaPYnZDetIpEEbfbhZGVpXid1CNJuXorhQflys0loz3p8TyJjCMkfN2tj%2Bt%2BLiY17%2BJpy&X-Amz-Signature=75d609494c43d990e65a2bf0bebaee9c6137ef3c5906759055b5137efb5a8747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKRFVJE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHztnJsAjcFgmYn%2Ft1MgFvOTcoQqwWjpPXXOdJB%2B0QltAiEA02QT286Euptm8ljPC0GoH0ncW7Bhf1LWFf%2BfsLPOQ%2Fwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCyRgmOu7wCfMmIXtSrcA6EQcMi4Wbr7XsUErdOB2rlsDoxA3CsHZh8xD2DJXIC3iqFBFpAzdeW0AKuHVGIJrzCeJR45nIWW5l8w7QOLLMbxBc6%2BVjQ9ZFXQb0f7kEsK4mGxyEtggfxmSeLfykriMu5PetSyNcrNDj3QLDEd9xOtRLBlg%2Fb0lGPblwZdXxVwfaS%2BLANaj5oPGBaOJrN85dSjJPNpcEzGTv9HpWJY0zDwYgcn2AztXTOIPo%2FxwnBrBCQg2ejF5hRmds5G5xtVCAz%2BvJKOgDCEe7gBauaO%2F7K9cqfQ8Le5agy87cw0ftfcXIZgjx6Hp3SzWO03a%2BIi9RC8AeaInAknYrW2wrqH5sJ16bl5z%2BilOi%2BCIIyT8i2Y%2F9EdrbdbR5HKgsv71mWlZyQ54o2xWikMV5YLYZUfY1TdVQg3aCFY4NI%2FbzDDtMol3Bcpf9Iy4IA8lGN77G7IkSxzGQIWN00Ti0iwwAHD7%2BQM7e7rWJLP0XBb6fxARxK6WLWpKGwFI2xV3qZyTq%2Fqw3FxBfgVhiXIWeHJLxpSFKtzGFYUI%2BcaTfMYSvjYzeLvacQgSm%2Byz%2Bytp07I38gNnRsuVYu0JjbC4F7y7nbUosNwi0X4Pzsxq4OZiG8wqBo%2BUpHp5VWiQIkwKSEEMNvozckGOqUBWt%2FuC3kkQvOPiW5eiJruEViWxCRFCmI0m0X3DFVco1BqMl4qGNMlC%2Fo%2FNWyHqOwnAC7NJtwGIj4cAmdxftw4OFXNFJeP6UdKI2uCDgjB0BDdMsD%2BDxjw6qi%2FuRO2WODJy4UwSV8SgYs%2BGU14WJRLMSjYaPYnZDetIpEEbfbhZGVpXid1CNJuXorhQflys0loz3p8TyJjCMkfN2tj%2Bt%2BLiY17%2BJpy&X-Amz-Signature=b33639602e06f18d636dd85bbe5f9deed86f81f78b7fef58b2bbf7adfa8a30c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
