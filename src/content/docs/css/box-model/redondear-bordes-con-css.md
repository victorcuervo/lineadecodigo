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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBJZWHT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCofJ1jdBbEBPiOJYfkZQ9WQHv8nlHR%2Bmlft0ofjp0GMwIgOz8u6Et3Cid1Ha%2BxJhWQwaGqVmcAT2UuP4jS7cuXN%2Bwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDK1PGtOeVa2QwDIqxyrcAxswR0oRlKO7Bh6iwyPxkCFrratf3aaV2RuuDVRIz%2Bpwjh4hJRoapSP2rDXgSPjL76fADB9ylM6NSb7S87gZtai7WCNVxJOPjxcjWHhKvW3IIUibfNBsK1gkOLXfv%2FwEsnoXsfwRUOv9mTytYIrIqRRlmKjw69RrLu3JjGUyGNDxlaLu0KPPDjpDM1ZpBeTIuo4M7toTfIDN%2Fh2V6EulKhuE6Z8%2BqP9yfY%2FuCL9F5iy6I4%2BLcsPQQ53rdfXPo4teUotO4fYHwh541g7wk3gl%2FO1erRs3GI2YBOxo%2FFLUlaQVnM%2FEbqHYrrBvLKm7qErVIq5JUCdgO2pJoc9gkoHmex81jbxrLIFNlmIN0Klm0N%2BV5RwRelmA8Lh62LISOvf3IrOLyFPycjHPAxm8Wmwu8GlQQIHAd6w5DoalUEP0XcBaDIshi1d4Nysfp38fwTDaL6xUnBB1eHx3XRz4m2q%2F3heDWHVjQuQPfnD%2B0%2BsX0KgWsukjZdKqEsbhIMGnG4bStmxRuwnv30CqqIbEPnK7LvN6F4tMLqibxH6W4h5cta8j3b6zEa7K5h3jx76lwO2vaNTa%2BeMa1XvBHEpFHkgWHaGN8T5uq1qyOVyLCPiN7Ss7T2%2FgLIs%2FmBJAM%2FrFMLecicoGOqUBJYigGKlWYFFBCyalLRPal9LkGtGG9%2FTmwoTrchwkdA1Q77rNR%2FdMvD29zJJ7u01u641MtKhPP4xE%2FGddjHAOleHBlpnH%2BJDyVaFgtdFGA%2FnCW6b08t8AY2hdlTAS4T6GlgUEML%2FWmVGjmC%2FC2MgGnFpYAvFeper1G7jnlrklPM2ZrumrstdkPl%2FUesD7wtWDEelYlSnBw8AjD6hDrzxuMdLTe7T2&X-Amz-Signature=7e9b3b3c2729ef274b2138fbee26a374cc2d3e83e9c39156fcf1e900f5162e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBJZWHT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCofJ1jdBbEBPiOJYfkZQ9WQHv8nlHR%2Bmlft0ofjp0GMwIgOz8u6Et3Cid1Ha%2BxJhWQwaGqVmcAT2UuP4jS7cuXN%2Bwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDK1PGtOeVa2QwDIqxyrcAxswR0oRlKO7Bh6iwyPxkCFrratf3aaV2RuuDVRIz%2Bpwjh4hJRoapSP2rDXgSPjL76fADB9ylM6NSb7S87gZtai7WCNVxJOPjxcjWHhKvW3IIUibfNBsK1gkOLXfv%2FwEsnoXsfwRUOv9mTytYIrIqRRlmKjw69RrLu3JjGUyGNDxlaLu0KPPDjpDM1ZpBeTIuo4M7toTfIDN%2Fh2V6EulKhuE6Z8%2BqP9yfY%2FuCL9F5iy6I4%2BLcsPQQ53rdfXPo4teUotO4fYHwh541g7wk3gl%2FO1erRs3GI2YBOxo%2FFLUlaQVnM%2FEbqHYrrBvLKm7qErVIq5JUCdgO2pJoc9gkoHmex81jbxrLIFNlmIN0Klm0N%2BV5RwRelmA8Lh62LISOvf3IrOLyFPycjHPAxm8Wmwu8GlQQIHAd6w5DoalUEP0XcBaDIshi1d4Nysfp38fwTDaL6xUnBB1eHx3XRz4m2q%2F3heDWHVjQuQPfnD%2B0%2BsX0KgWsukjZdKqEsbhIMGnG4bStmxRuwnv30CqqIbEPnK7LvN6F4tMLqibxH6W4h5cta8j3b6zEa7K5h3jx76lwO2vaNTa%2BeMa1XvBHEpFHkgWHaGN8T5uq1qyOVyLCPiN7Ss7T2%2FgLIs%2FmBJAM%2FrFMLecicoGOqUBJYigGKlWYFFBCyalLRPal9LkGtGG9%2FTmwoTrchwkdA1Q77rNR%2FdMvD29zJJ7u01u641MtKhPP4xE%2FGddjHAOleHBlpnH%2BJDyVaFgtdFGA%2FnCW6b08t8AY2hdlTAS4T6GlgUEML%2FWmVGjmC%2FC2MgGnFpYAvFeper1G7jnlrklPM2ZrumrstdkPl%2FUesD7wtWDEelYlSnBw8AjD6hDrzxuMdLTe7T2&X-Amz-Signature=36168a3921a1c04d84c981d14371492b79ae2d9296975387c5912ab1864aa566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
