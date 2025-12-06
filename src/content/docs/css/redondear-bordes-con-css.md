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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBVTLQXA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQNES3LDuPuLHuS94OMUbEan%2B19OKQJKRQOskI4ydy%2BgIgAX30AitULkfile1K1p8rXo6BGs3MpP2goiTto8z8b4Aq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFa%2BEVkNM7hAofBjSircA4h7RCqcCBe5qyZ%2B1YsCH4fYU6jysIEFEtKJ74pHESSnZVEIW%2Bydk7ygpZkzg%2BUorM4GoeId5Jo%2FLMdiGzhQIXbf7oF6jj%2B9p9R99v6n9m%2BJzyLFPQUU8PoPI%2FEyiE3tZkMlQF%2BTeK1G2bsdzPr%2FbVCaTyfGPCE8QXojeB7vjTKT5Mjj2f7RPFHPu8dFJYk2fkqUGps8bBG%2F%2FoanGAyGH24uIcptq7QXrr%2BC3PDYJSFyTkaCMXyACCNNKzdQlFRx27rDGfmALHSEhGdcleyNezdXJvnLEOWwSIhBSG591SadJ42Yc7DO3BTPW%2Fgfvdv%2BrKofODdMj%2BDKfLyqPoYPpEc2w4HZJVLiKBrih%2FtXEBLMOj6yUCnVnulhiSXWReKTLWgpJJa54KHGLeV1CKadjpCTJmgnwq%2BbKAjrXrD60Tzqqu4f%2FslXDy2guLIbyDd%2F19%2Fq6c0FV2RhK4BXGBONEEoJpiXuuHFOSwN3XtpOkUFM1leIhuaSPh0nFkS7vQSEhnVCSxHuHrIvWRIfKgCd16i%2FjbD0LOCVhUE4yEp%2F2fmh1FKCpPkilkk0Wrgom0%2FkA2%2BTawz2oHbVqrmFL0XLDK4Vqc9rRI1fMd0676%2Bx0uZoTMSLnHUw6QRagtTAMIeez8kGOqUBKaB44tnQoEn7iC3PZfw7e6RNkpwvC8LfbPgMgKqfWt%2FYAibEeOYGT3wLgpnetDLJRx77e2zRgrymhQl0fe0MUv8sNSiueSvcfXkwCZLD82WJ7Isrn5dT5padK66q8M40FXMD4UFR4ah4ag3HXdvSdu0wk93jIyz2GLovYW1SuC8m7j%2Bf6Hln%2FCVKRTUKReEs%2BgQxjv870VxKJv1uURbMtmesENvn&X-Amz-Signature=d6b55257e72c5c41542efb745263c4389893160a46d0ee21b9abbb2e56f10aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBVTLQXA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQNES3LDuPuLHuS94OMUbEan%2B19OKQJKRQOskI4ydy%2BgIgAX30AitULkfile1K1p8rXo6BGs3MpP2goiTto8z8b4Aq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFa%2BEVkNM7hAofBjSircA4h7RCqcCBe5qyZ%2B1YsCH4fYU6jysIEFEtKJ74pHESSnZVEIW%2Bydk7ygpZkzg%2BUorM4GoeId5Jo%2FLMdiGzhQIXbf7oF6jj%2B9p9R99v6n9m%2BJzyLFPQUU8PoPI%2FEyiE3tZkMlQF%2BTeK1G2bsdzPr%2FbVCaTyfGPCE8QXojeB7vjTKT5Mjj2f7RPFHPu8dFJYk2fkqUGps8bBG%2F%2FoanGAyGH24uIcptq7QXrr%2BC3PDYJSFyTkaCMXyACCNNKzdQlFRx27rDGfmALHSEhGdcleyNezdXJvnLEOWwSIhBSG591SadJ42Yc7DO3BTPW%2Fgfvdv%2BrKofODdMj%2BDKfLyqPoYPpEc2w4HZJVLiKBrih%2FtXEBLMOj6yUCnVnulhiSXWReKTLWgpJJa54KHGLeV1CKadjpCTJmgnwq%2BbKAjrXrD60Tzqqu4f%2FslXDy2guLIbyDd%2F19%2Fq6c0FV2RhK4BXGBONEEoJpiXuuHFOSwN3XtpOkUFM1leIhuaSPh0nFkS7vQSEhnVCSxHuHrIvWRIfKgCd16i%2FjbD0LOCVhUE4yEp%2F2fmh1FKCpPkilkk0Wrgom0%2FkA2%2BTawz2oHbVqrmFL0XLDK4Vqc9rRI1fMd0676%2Bx0uZoTMSLnHUw6QRagtTAMIeez8kGOqUBKaB44tnQoEn7iC3PZfw7e6RNkpwvC8LfbPgMgKqfWt%2FYAibEeOYGT3wLgpnetDLJRx77e2zRgrymhQl0fe0MUv8sNSiueSvcfXkwCZLD82WJ7Isrn5dT5padK66q8M40FXMD4UFR4ah4ag3HXdvSdu0wk93jIyz2GLovYW1SuC8m7j%2Bf6Hln%2FCVKRTUKReEs%2BgQxjv870VxKJv1uURbMtmesENvn&X-Amz-Signature=61b5318bf2a141a98df6e3611a95bd0bcc7971bac6b13e372b6fb68cd7d57428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
