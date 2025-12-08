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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5LCUT2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeI%2FAHoplYSb0R60yXSY96XhyPsnscElUCGPE6P2RFAAiEA7ipAFXmYc4c2h%2BNTAJqpSd%2FEeA4PxYGOZCzId8WXR04qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkm6I107FrfnJstZyrcAxYlbkd5B48BPuPWvpAIJH8DjnetUnVNXbL%2BGH%2BouevZ9pwoTvXb4xguvCavFUWqfw3KEw834BBk7wUWdCpu6KW7AA5YolkCfoA0NflXySd4OWkw4BbtWWvVM%2BFHH5o4XdKq6Ms24F7sQMnQrxwaPzc9Wba%2F7PbEffny%2B0ThOnt8JjGdoHbacNQKbPERXZ3pEKLPcueT9EXvHe%2FNUajQZkGN8rgPN4ZLQXS5yrGanLg%2FDv%2FXGHgRBsDj6WWbXGls5bgGG9Q48mbFn3h%2FNvkpUhz3e9i4plvsQfqiEmoW7VnEoo%2Fz6OfgDMoLNwNdGh%2FrhkdwRcRiCJxP747ZH%2FQhhVsBOnsnPjcp3JmSHydh1B9cQ22gAdv%2B%2BrLYyB9lW%2F62OHdTkmyjp%2BZoc4ei5iXyMlNh5iYsvcjj5pcsKwVsFwwCjwHyLOMo62jZobV6WdoFMMlCgdLQ2R7lPGkDzp4rj3nxq2NcNfWfzyMyarxG9CFjalnfOqbv8xTekpOdqNcYRX3FTlFSZ1MKxsqb8b10tACI4gFe9ndAb%2BoAPYeesjFMbT%2FYRm5Hjxc5d0uF0Nf33yu6qQLLc2f%2Ft19NHv%2BTEBDtWHEozOPfduXQD1oGiegd7DrM%2Bi5c9%2FF%2FspqRMNWz3MkGOqUBxQge9RpIbhbk1%2FT1lO66AaIA%2FTOgdrap7w0xZLb7ydAeEzfaiNaWdnWfptZdqDDSyLGP5Kl4V34ASdDnDJVX98v76YZ%2BSxNqLIFMIx3Ra2TwP9PjbpBHWMNmfJUiZ%2BBo0sXZsVWqKZayC3hxGu33G8gv5cLK2T40Emio8dGjp57vwK05ULgGfPl4sG5CJ9Q17H9l1WY3f83%2B8sD3UtwWtyr%2F4sMB&X-Amz-Signature=10c2d053aebcbdabd294fd021fe500ad1f3036ba5de5f91465bd0efb95de620e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5LCUT2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeI%2FAHoplYSb0R60yXSY96XhyPsnscElUCGPE6P2RFAAiEA7ipAFXmYc4c2h%2BNTAJqpSd%2FEeA4PxYGOZCzId8WXR04qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkm6I107FrfnJstZyrcAxYlbkd5B48BPuPWvpAIJH8DjnetUnVNXbL%2BGH%2BouevZ9pwoTvXb4xguvCavFUWqfw3KEw834BBk7wUWdCpu6KW7AA5YolkCfoA0NflXySd4OWkw4BbtWWvVM%2BFHH5o4XdKq6Ms24F7sQMnQrxwaPzc9Wba%2F7PbEffny%2B0ThOnt8JjGdoHbacNQKbPERXZ3pEKLPcueT9EXvHe%2FNUajQZkGN8rgPN4ZLQXS5yrGanLg%2FDv%2FXGHgRBsDj6WWbXGls5bgGG9Q48mbFn3h%2FNvkpUhz3e9i4plvsQfqiEmoW7VnEoo%2Fz6OfgDMoLNwNdGh%2FrhkdwRcRiCJxP747ZH%2FQhhVsBOnsnPjcp3JmSHydh1B9cQ22gAdv%2B%2BrLYyB9lW%2F62OHdTkmyjp%2BZoc4ei5iXyMlNh5iYsvcjj5pcsKwVsFwwCjwHyLOMo62jZobV6WdoFMMlCgdLQ2R7lPGkDzp4rj3nxq2NcNfWfzyMyarxG9CFjalnfOqbv8xTekpOdqNcYRX3FTlFSZ1MKxsqb8b10tACI4gFe9ndAb%2BoAPYeesjFMbT%2FYRm5Hjxc5d0uF0Nf33yu6qQLLc2f%2Ft19NHv%2BTEBDtWHEozOPfduXQD1oGiegd7DrM%2Bi5c9%2FF%2FspqRMNWz3MkGOqUBxQge9RpIbhbk1%2FT1lO66AaIA%2FTOgdrap7w0xZLb7ydAeEzfaiNaWdnWfptZdqDDSyLGP5Kl4V34ASdDnDJVX98v76YZ%2BSxNqLIFMIx3Ra2TwP9PjbpBHWMNmfJUiZ%2BBo0sXZsVWqKZayC3hxGu33G8gv5cLK2T40Emio8dGjp57vwK05ULgGfPl4sG5CJ9Q17H9l1WY3f83%2B8sD3UtwWtyr%2F4sMB&X-Amz-Signature=b24c59d25eb963d80f877ca86a9cc1b55e05124c088f34b695c204058cbd6bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
