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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW5FCKA6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyerVxyP%2F2zoter9qnzxZ8skfv1XUjyuXd6Q%2FmrUGTZAiBrpa%2FGJBTZsm4xaDhN2bVFH1xbQapcvBS%2F%2FtNMaph4aCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIldCVNwfJNZ2%2BfOJKtwDkInv3ZQ4ZqepVcPnIo1bYqgARipiM083V91zGWlylWrYAibcZ%2BUoS%2FwCXDYuFGXBO5l6JGOIjMTZDp%2BAOdQIjogAK8prxkSAhSs8dwdjvs7O2G18l1iIk3N8FYGAd7UH79Xf6bCpgw0YScPFmWItgSH2IeE3mdrLh4DOm2EEHAct3zxOqRxYr312d9dHQu5dYQf4kQOSsN9eDHI7lzvlQOvud19gFncF5v1mbunXsbBZVYMBCoLkyOT0CSw2Xn%2Fzmx4yKqTE82R8KPu87WMUbCdZPfL9IpGm7SuRMyMhzqsvWJpGO3iOJyTTvSo0PPAp3Mj%2F95UadeJnt9ig3ka1aijlF2Q19NCZN0VjStCEqZVsiB68ssUs29u8dxL7UMmSdMfB25fc%2BanqmCdHRaJItrPY42fDUxLOuBkFfiD8BXWytV%2BPInFKV7iJKf2pYsdNSX7qK1e%2BYsCU1L%2Fxe5RDjOk18UubK9u%2Bk5HSr2vtDY7cguIMyu0zAFVe3Dd2fcjITlbyHQpOQAAzdSejxwZQik6naxI4odaB7pzAJEJx5pw6n%2FHnOddipqA6Y7dn1NZoRJYDYs82aGnxmL3JchE%2Fa%2FSp2j4fLqlfaobU5REQoiEsxmLLeYgB2jXJymUw3P3SyQY6pgErvwe3JV%2FL42DsmbRH5bLJ5d6nEapvSTc%2BR%2FrFW8GdW81vEtuNne0IPnBnYGeJeAV%2FHLBCCIjS1YBG4ks36jg4sC63Vx4ecuiCBCunt6nly%2Fj5CLjLqlkuXhD9QAdID%2BL91hHBuRjaACnnK9LppkDsMMwBeEWzh1Don6PbARhn3Jk%2FntHrKfTe9eBoZGrb8DRnlx5kIvHr83ElzrG1aVAnV2q3JMtF&X-Amz-Signature=b6f2d9961fb5994bf62e74fa3ed1e5d8500dec9c5ef6b6b0bc7b804b30aa019d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW5FCKA6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyerVxyP%2F2zoter9qnzxZ8skfv1XUjyuXd6Q%2FmrUGTZAiBrpa%2FGJBTZsm4xaDhN2bVFH1xbQapcvBS%2F%2FtNMaph4aCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIldCVNwfJNZ2%2BfOJKtwDkInv3ZQ4ZqepVcPnIo1bYqgARipiM083V91zGWlylWrYAibcZ%2BUoS%2FwCXDYuFGXBO5l6JGOIjMTZDp%2BAOdQIjogAK8prxkSAhSs8dwdjvs7O2G18l1iIk3N8FYGAd7UH79Xf6bCpgw0YScPFmWItgSH2IeE3mdrLh4DOm2EEHAct3zxOqRxYr312d9dHQu5dYQf4kQOSsN9eDHI7lzvlQOvud19gFncF5v1mbunXsbBZVYMBCoLkyOT0CSw2Xn%2Fzmx4yKqTE82R8KPu87WMUbCdZPfL9IpGm7SuRMyMhzqsvWJpGO3iOJyTTvSo0PPAp3Mj%2F95UadeJnt9ig3ka1aijlF2Q19NCZN0VjStCEqZVsiB68ssUs29u8dxL7UMmSdMfB25fc%2BanqmCdHRaJItrPY42fDUxLOuBkFfiD8BXWytV%2BPInFKV7iJKf2pYsdNSX7qK1e%2BYsCU1L%2Fxe5RDjOk18UubK9u%2Bk5HSr2vtDY7cguIMyu0zAFVe3Dd2fcjITlbyHQpOQAAzdSejxwZQik6naxI4odaB7pzAJEJx5pw6n%2FHnOddipqA6Y7dn1NZoRJYDYs82aGnxmL3JchE%2Fa%2FSp2j4fLqlfaobU5REQoiEsxmLLeYgB2jXJymUw3P3SyQY6pgErvwe3JV%2FL42DsmbRH5bLJ5d6nEapvSTc%2BR%2FrFW8GdW81vEtuNne0IPnBnYGeJeAV%2FHLBCCIjS1YBG4ks36jg4sC63Vx4ecuiCBCunt6nly%2Fj5CLjLqlkuXhD9QAdID%2BL91hHBuRjaACnnK9LppkDsMMwBeEWzh1Don6PbARhn3Jk%2FntHrKfTe9eBoZGrb8DRnlx5kIvHr83ElzrG1aVAnV2q3JMtF&X-Amz-Signature=14b90f2f18981d074c0acc496a42c54b9c158d9ae530d792c1bfdf01904ad4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
