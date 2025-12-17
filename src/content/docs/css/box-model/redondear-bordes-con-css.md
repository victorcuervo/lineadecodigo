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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKGMQTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI2klpWxmkvk14%2BVz04hDjqXhcHZp%2FkdP9QmDC7A9qYAIgO%2FWN5IxTilvdyCASHeSj4hczxkghIsqohOinr2HuSI8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDl1TmwXBUvNiUxqVircA5hT7uWSmZ8Azaa7douJXEH583o2Bs2FZxWmHcyYCVDd2SnrKUcjPhaThQFmkuNEbYEdNhTGphCqPV3ZuNj5CbL%2BS7GzObnIqbfzw3gxLNYEo1fEeK8jYrNpGKY4kc%2Fxmw9ozygHnLBgFsseA9%2BNhoDnM4YpXaRr%2Bu%2BEcvcqZDe3Ko2F%2BtVS33hVdKhFSHLUl12IOpqriv075iQd9F9s2xLBBwhkrPI1FjmOKOKV5zlNLCDqfCLYtPNUceZH%2FXV%2F8gNFn8UOIPCc%2FUtw0iEr5FVQMxIMCa3DtX2tsnTqojqgx2rbGn5eg0Pi6LurMt67MfjjZdzN5E3QqrUmmlXYwblR3fAItlvg3aDblHD8VYC8jg%2B8prBdEqslZ%2BqJ9vzopkhjCvSgkicmbdw%2BSYMuf1pY80KGgJFv10D2L0lzenpuPkSANfirg4g8hYEm%2Bhn6boCXJlrDLhoylVukEWIfiNvYShXCMzqH2%2B31ttbO%2B05YIz0pMW2%2BBzbA8aZjiPWlqMliisK5TCKFd0jB%2BfDF2EKLIjuTA8ZbGymTqGunQ%2B62NN%2FlpQUKeURdEwFA3X1DfdrcCAGPkYuhzvkm%2BaCvHLHs6ZWqWE82h7GNg7lQgm3Vw4iSQVon18BxQ8rfMJKCicoGOqUB2qk0A0pp%2FWlBGSGxw2cZ7i%2FLd8lt4cyokoNehT36b1FpNP%2FKOhlRVFg7ZVIIUGetPHfrD0W0ihf6Rwsl2JRfx2wT24Rm6AspX4YsEgwf%2F35erB3YvtnlTOwLnghe1D3I6geesAz4Ixle%2BNaP%2FbIRSCn2PpdAUdrghEUXdyoTwcjldgeVWlGvndK6FueVidI%2BSueDt6Cb7iuOfVbFvOCnJ6%2BhOBId&X-Amz-Signature=953642c04324042a9977063f32c744c056400a9f825bef9831d2eee7d206ac43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKGMQTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI2klpWxmkvk14%2BVz04hDjqXhcHZp%2FkdP9QmDC7A9qYAIgO%2FWN5IxTilvdyCASHeSj4hczxkghIsqohOinr2HuSI8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDl1TmwXBUvNiUxqVircA5hT7uWSmZ8Azaa7douJXEH583o2Bs2FZxWmHcyYCVDd2SnrKUcjPhaThQFmkuNEbYEdNhTGphCqPV3ZuNj5CbL%2BS7GzObnIqbfzw3gxLNYEo1fEeK8jYrNpGKY4kc%2Fxmw9ozygHnLBgFsseA9%2BNhoDnM4YpXaRr%2Bu%2BEcvcqZDe3Ko2F%2BtVS33hVdKhFSHLUl12IOpqriv075iQd9F9s2xLBBwhkrPI1FjmOKOKV5zlNLCDqfCLYtPNUceZH%2FXV%2F8gNFn8UOIPCc%2FUtw0iEr5FVQMxIMCa3DtX2tsnTqojqgx2rbGn5eg0Pi6LurMt67MfjjZdzN5E3QqrUmmlXYwblR3fAItlvg3aDblHD8VYC8jg%2B8prBdEqslZ%2BqJ9vzopkhjCvSgkicmbdw%2BSYMuf1pY80KGgJFv10D2L0lzenpuPkSANfirg4g8hYEm%2Bhn6boCXJlrDLhoylVukEWIfiNvYShXCMzqH2%2B31ttbO%2B05YIz0pMW2%2BBzbA8aZjiPWlqMliisK5TCKFd0jB%2BfDF2EKLIjuTA8ZbGymTqGunQ%2B62NN%2FlpQUKeURdEwFA3X1DfdrcCAGPkYuhzvkm%2BaCvHLHs6ZWqWE82h7GNg7lQgm3Vw4iSQVon18BxQ8rfMJKCicoGOqUB2qk0A0pp%2FWlBGSGxw2cZ7i%2FLd8lt4cyokoNehT36b1FpNP%2FKOhlRVFg7ZVIIUGetPHfrD0W0ihf6Rwsl2JRfx2wT24Rm6AspX4YsEgwf%2F35erB3YvtnlTOwLnghe1D3I6geesAz4Ixle%2BNaP%2FbIRSCn2PpdAUdrghEUXdyoTwcjldgeVWlGvndK6FueVidI%2BSueDt6Cb7iuOfVbFvOCnJ6%2BhOBId&X-Amz-Signature=8f28dc428010930021778f19f353aaf4936f3e5dceaa88c910fbf551b3439cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
