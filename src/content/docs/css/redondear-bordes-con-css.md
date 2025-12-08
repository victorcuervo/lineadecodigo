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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXANNMNC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZanVkOvZd%2Fh6uEWKNTkW%2FsME87CiESkSCZJF5Ah3fXAiAf1v3yqyXcd4TscT3AQ0%2FR%2B0prcRa9eesOO1NEa8GrgSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3GljfmWeDHazNxQtKtwDCPm0d5r8uQStYod6z%2FnrRS3esnz%2FRc0cFpbcBEWAMTbSpswkf%2F08UYqfeXnA%2BH9jATn%2BttieYANeBY97zfOP1%2FscXJODA0cztLKgbOt9iEB1aLCUnV8bbzgFxQb44Q%2F%2Fk2HZTWYoZ3eLthu0VyRV5ZT2axoLQwpFOzcMv3G8qJndRBJGM7J0S0MtN0zuvEnDdfd8imfAtkkXHb8XZSeAEWW7YHpxct%2B2bnM47%2FZTYO16dgPcf5bqv%2FpwynP1gmmVrUaamFkm5K5hNEXKh1%2FkiEnlCU1vhnaCOTfbEDpl66%2Bk8yvR6osEzONZOcYBrRW3bebfJ3BgP6kHm3KYjRVOO8n7%2F0Ba4BalM5f3%2FPY8xC7ZkiKuwo51nFTGHcp9UXzrzXWeMPIh7VfyRRyCaMcPcenNmt84Dm4v8JtofHeO5MsbRkyqpWZDc646In%2FGWDwV16rdkUy%2Bi8jr4S7psxb3ccZmncINMVmyka4yoL6LWssJpq9qg6bSIP7MC61Q7CpqjZSbvHPeUHrrNKh%2BXdXvIesZXs9AY1Z0gN59NV4q%2BUE%2FYNaRgVpJZrnA9D8%2Brx2iJEVscM3rymKIM4WZmbVD2o4o6ZwNoZTW4408LSuAIHqmyBYZ96wU5pIcXkEw6bPZyQY6pgHKvG2J%2BglpqojBSOz1CJXI1bfZ3KMV6odeWAer0vHeXpVFsQ%2FAjdxoAxSxouHch%2BgdGSZybgunm1qruM5YF%2BLOt3LK8mdaNgF5GaeA72v6FXqovLwl9V339EUF4JlwBdj5WXuKD%2BprjA7IED8IKG%2F186UV5y72K3pWwOmBnCqRIj6Pl02FnOuOemOJIfFpZQoJxDOGWm0tdMUG%2FvCuXJdcTHXMjbJT&X-Amz-Signature=018b6e0861231db0cc156a298fe988ac2d50fdfcbca707490881ab090911841a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXANNMNC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZanVkOvZd%2Fh6uEWKNTkW%2FsME87CiESkSCZJF5Ah3fXAiAf1v3yqyXcd4TscT3AQ0%2FR%2B0prcRa9eesOO1NEa8GrgSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3GljfmWeDHazNxQtKtwDCPm0d5r8uQStYod6z%2FnrRS3esnz%2FRc0cFpbcBEWAMTbSpswkf%2F08UYqfeXnA%2BH9jATn%2BttieYANeBY97zfOP1%2FscXJODA0cztLKgbOt9iEB1aLCUnV8bbzgFxQb44Q%2F%2Fk2HZTWYoZ3eLthu0VyRV5ZT2axoLQwpFOzcMv3G8qJndRBJGM7J0S0MtN0zuvEnDdfd8imfAtkkXHb8XZSeAEWW7YHpxct%2B2bnM47%2FZTYO16dgPcf5bqv%2FpwynP1gmmVrUaamFkm5K5hNEXKh1%2FkiEnlCU1vhnaCOTfbEDpl66%2Bk8yvR6osEzONZOcYBrRW3bebfJ3BgP6kHm3KYjRVOO8n7%2F0Ba4BalM5f3%2FPY8xC7ZkiKuwo51nFTGHcp9UXzrzXWeMPIh7VfyRRyCaMcPcenNmt84Dm4v8JtofHeO5MsbRkyqpWZDc646In%2FGWDwV16rdkUy%2Bi8jr4S7psxb3ccZmncINMVmyka4yoL6LWssJpq9qg6bSIP7MC61Q7CpqjZSbvHPeUHrrNKh%2BXdXvIesZXs9AY1Z0gN59NV4q%2BUE%2FYNaRgVpJZrnA9D8%2Brx2iJEVscM3rymKIM4WZmbVD2o4o6ZwNoZTW4408LSuAIHqmyBYZ96wU5pIcXkEw6bPZyQY6pgHKvG2J%2BglpqojBSOz1CJXI1bfZ3KMV6odeWAer0vHeXpVFsQ%2FAjdxoAxSxouHch%2BgdGSZybgunm1qruM5YF%2BLOt3LK8mdaNgF5GaeA72v6FXqovLwl9V339EUF4JlwBdj5WXuKD%2BprjA7IED8IKG%2F186UV5y72K3pWwOmBnCqRIj6Pl02FnOuOemOJIfFpZQoJxDOGWm0tdMUG%2FvCuXJdcTHXMjbJT&X-Amz-Signature=170925921a305d37aa80af7ba04dbcd8b82345c92b744cbed98722822d1b0d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
