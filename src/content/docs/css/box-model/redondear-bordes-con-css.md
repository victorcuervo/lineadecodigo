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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7QDZY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC0nNIVuPhKj%2Frk2o2ghojOvIRnMXllgX%2BDk7eaA%2FIrAiBIQkXtwv49jq1L0mZpFjcLvR2Uj2uCur%2FAvBm9GHbbNir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZaF6ba%2FYFizUTPH%2FKtwD%2F1DEJXQd%2Bk5SBs69MXGN8nrrvHqIoDgnxL21rxk8khc5gBNQqy1vXqU4Z1w5nYg2LvkU5%2BkXpNk16WCfgoXbN%2B0d7hgjkqBp4szaeLiEpLoMsD2evoNIV%2FWleJ7pwA7Yp6HDoqhWXqhXaDQLs7SoIkxsC1jmfhU%2FxcneDgr6ZZeOTvAlaGpq6A57QFIi1145D1EqwMF5Pfa2NtjPiRoQaF6tZOze3Gg6Avm3GEUv50bJC7yo79xK4XD2BR57VhSq19tZSfDqGQn%2BYZ7B7O4Fu7b11BdRxYPs%2BZrTpcZB8%2FoPvhGcWbBcGV9BKUGP%2FQZGHd0QjlMb%2Fjzi76Fw0gA2mNIjPA6cM3fbh7vBQ1YEXz5pirOqcUz7I%2BUlxtfZq0%2FLWfxcYMa0%2BI6fPLzhMM1id%2BdiWHkuPHby5m0hzifD5HmfePQMgBQmW9jZNqlSvxJI52toi1okhCwCcrGTL9HKzXjHYnSBzEB2w1UsSTMX8U3CJH8nQ3DrHzx%2FenarTM35HgfcanGQGvK4OnFMJyJZWY3qYZvVgseja%2FCXRcJxy%2BR7u%2FNbHu%2Fm9FBNDrnGlemMER8G%2F9f4Sf4cTyOFxAXqHrPa%2FYaijwEPW9Q4qiqNlsF8D2FZD0B0qg4vB8AwtcaKygY6pgGtKXjQLRRZ01TqeusvD%2BSgwWkgqhdduCIjJ6u%2BHD5fCQagBodGL%2F%2FPlHDX2MI6VuNvjmuXtut3oRD8t6R4sQQGygLR%2F%2BRCFSX5R7BqijtEa8%2FM2lKUch2b7MG75CnZY%2BTVl%2F60XZ9%2ByUFewg7YxVN03YufiVwReKYezmaanLBOPXCIKjlu4ToyIRcGtuFqgWnnitflmItTTssXjicGbGl0koWB%2BqB2&X-Amz-Signature=4c2abb866359b144fca96f7bce2b69bb45899e7bff565076c0ca29161a01e380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7QDZY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC0nNIVuPhKj%2Frk2o2ghojOvIRnMXllgX%2BDk7eaA%2FIrAiBIQkXtwv49jq1L0mZpFjcLvR2Uj2uCur%2FAvBm9GHbbNir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZaF6ba%2FYFizUTPH%2FKtwD%2F1DEJXQd%2Bk5SBs69MXGN8nrrvHqIoDgnxL21rxk8khc5gBNQqy1vXqU4Z1w5nYg2LvkU5%2BkXpNk16WCfgoXbN%2B0d7hgjkqBp4szaeLiEpLoMsD2evoNIV%2FWleJ7pwA7Yp6HDoqhWXqhXaDQLs7SoIkxsC1jmfhU%2FxcneDgr6ZZeOTvAlaGpq6A57QFIi1145D1EqwMF5Pfa2NtjPiRoQaF6tZOze3Gg6Avm3GEUv50bJC7yo79xK4XD2BR57VhSq19tZSfDqGQn%2BYZ7B7O4Fu7b11BdRxYPs%2BZrTpcZB8%2FoPvhGcWbBcGV9BKUGP%2FQZGHd0QjlMb%2Fjzi76Fw0gA2mNIjPA6cM3fbh7vBQ1YEXz5pirOqcUz7I%2BUlxtfZq0%2FLWfxcYMa0%2BI6fPLzhMM1id%2BdiWHkuPHby5m0hzifD5HmfePQMgBQmW9jZNqlSvxJI52toi1okhCwCcrGTL9HKzXjHYnSBzEB2w1UsSTMX8U3CJH8nQ3DrHzx%2FenarTM35HgfcanGQGvK4OnFMJyJZWY3qYZvVgseja%2FCXRcJxy%2BR7u%2FNbHu%2Fm9FBNDrnGlemMER8G%2F9f4Sf4cTyOFxAXqHrPa%2FYaijwEPW9Q4qiqNlsF8D2FZD0B0qg4vB8AwtcaKygY6pgGtKXjQLRRZ01TqeusvD%2BSgwWkgqhdduCIjJ6u%2BHD5fCQagBodGL%2F%2FPlHDX2MI6VuNvjmuXtut3oRD8t6R4sQQGygLR%2F%2BRCFSX5R7BqijtEa8%2FM2lKUch2b7MG75CnZY%2BTVl%2F60XZ9%2ByUFewg7YxVN03YufiVwReKYezmaanLBOPXCIKjlu4ToyIRcGtuFqgWnnitflmItTTssXjicGbGl0koWB%2BqB2&X-Amz-Signature=f75048f6a12b3f598eda3abe3b9417868cfbc96917bc38e0e5a3225ff45418f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
