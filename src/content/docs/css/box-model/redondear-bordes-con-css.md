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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJBHAJH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfFGBUXiaKKBeiL%2FRvinhgITFIYsd6tLJ2GCDhXT2xsAiAzQtB9xVBlkxzOPTYB9x8v2uhT6BFEcxDxPvcIECJG%2FyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ywc%2FDkxI4d8ajg6KtwDuk4YgJceoQz4KeqsqfT2fo7G9V7aROMOmWSIdDUDR57zl6joMIQ6lHgA1fYCaee2KMvN%2BGoYGlNRdSumiUBjPtXgaT908Bob5Ep6%2BBgR9PY8MATJzgqJeUAxRj5FPIEuyD033GmYSC3yhrmHB0ob1QAu1RC5hxgZHKyKDEBXBQB5%2Ffv%2BkGZ0Fsik5cCWu4%2B0%2Boq8fIc1e0LQJIlLeWw%2BR%2FwZOYTfuC%2FZ1SLB7DbZVS04LRPsyGYwlmUHmfwFStO8sFrWrXHwS7aQZEObffpLeHy87g%2BT9MzEBiWRikVYr80NEuHGDJWWx2ZXhrRpIBv6oEFHFJ5eS2d%2BSzdDQIBw8w3SgCkJljcDaPlK%2BbtNRCfpclRmUX7uhPqMvIHk%2BVcplO0VH18zFV%2FlzICRh1Eb8M%2BvloBBacLpyjqatV%2FstUiHJXrG1xjQnP%2BeHGAruW6OlsnKbtBl0KXD9fnhchH1Mr6IqdbnU0ttUY0YSIAb5lSVhPfmDbvq2yH3w8a%2B5SH2LbF%2FciuDdDGrgPzfhe%2Bazmah2y9e99C03pFCyUGEGo%2FnKFtlKGlB6x5SE7A6WVGe6A9wecWiouewysnC6DxRY48KmpHZJBwl5zDKbFNrLA%2FOywM23v2PWLAHQaIwvZ%2BLygY6pgE%2BhTNexzLJ%2BAEzLsC6QIT3Z5nSIsDrDQLX8Ng75QzHYF%2F1mUiZrMTmF%2F%2BLsFGuEj0TCIP4IKr7tq9uPAGrFPvDz8sOXlMJYJULHItnww8iVbR8xURBq%2FfjG%2B7apxpvXMySF%2BlrmiX9Gcumn3DTmQPbYXj9RL%2F9slx3h5abVEF7Jc9ws7guBX6ZPWOkXipTOtmGiv1pR6OnlBAB46ZUTQcA%2Fp%2Fzj1cc&X-Amz-Signature=1c21b1600681241a3086d0abc7031a02ff3d581cb2a03e7390d38b600b9fff04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJBHAJH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfFGBUXiaKKBeiL%2FRvinhgITFIYsd6tLJ2GCDhXT2xsAiAzQtB9xVBlkxzOPTYB9x8v2uhT6BFEcxDxPvcIECJG%2FyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ywc%2FDkxI4d8ajg6KtwDuk4YgJceoQz4KeqsqfT2fo7G9V7aROMOmWSIdDUDR57zl6joMIQ6lHgA1fYCaee2KMvN%2BGoYGlNRdSumiUBjPtXgaT908Bob5Ep6%2BBgR9PY8MATJzgqJeUAxRj5FPIEuyD033GmYSC3yhrmHB0ob1QAu1RC5hxgZHKyKDEBXBQB5%2Ffv%2BkGZ0Fsik5cCWu4%2B0%2Boq8fIc1e0LQJIlLeWw%2BR%2FwZOYTfuC%2FZ1SLB7DbZVS04LRPsyGYwlmUHmfwFStO8sFrWrXHwS7aQZEObffpLeHy87g%2BT9MzEBiWRikVYr80NEuHGDJWWx2ZXhrRpIBv6oEFHFJ5eS2d%2BSzdDQIBw8w3SgCkJljcDaPlK%2BbtNRCfpclRmUX7uhPqMvIHk%2BVcplO0VH18zFV%2FlzICRh1Eb8M%2BvloBBacLpyjqatV%2FstUiHJXrG1xjQnP%2BeHGAruW6OlsnKbtBl0KXD9fnhchH1Mr6IqdbnU0ttUY0YSIAb5lSVhPfmDbvq2yH3w8a%2B5SH2LbF%2FciuDdDGrgPzfhe%2Bazmah2y9e99C03pFCyUGEGo%2FnKFtlKGlB6x5SE7A6WVGe6A9wecWiouewysnC6DxRY48KmpHZJBwl5zDKbFNrLA%2FOywM23v2PWLAHQaIwvZ%2BLygY6pgE%2BhTNexzLJ%2BAEzLsC6QIT3Z5nSIsDrDQLX8Ng75QzHYF%2F1mUiZrMTmF%2F%2BLsFGuEj0TCIP4IKr7tq9uPAGrFPvDz8sOXlMJYJULHItnww8iVbR8xURBq%2FfjG%2B7apxpvXMySF%2BlrmiX9Gcumn3DTmQPbYXj9RL%2F9slx3h5abVEF7Jc9ws7guBX6ZPWOkXipTOtmGiv1pR6OnlBAB46ZUTQcA%2Fp%2Fzj1cc&X-Amz-Signature=3973fd6c4340af013954b6abb5f07013c529d1f18f4007ffd864ae599b854f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
