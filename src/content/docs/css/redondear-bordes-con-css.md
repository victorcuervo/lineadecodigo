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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEMGMKK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqbaWyVWceaQ3Ojd40Q5y87NzRPOxq7mZRHv04GzNXvgIhAIztt1dPcTRt9sIVNd3XhM1EMkNCAGxwTohKMCyxj8zdKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1P1cxZNHHBBG15tEq3AOPL9Rn9G6weF8zF3rRCypgnlPtJmnDczIV6%2BFEhlM13TkFlMApxit%2BqPytSS1pJ8rrXDCwqHh3eL9eRuZ08kLscev7KuPSWDso4ufyYOuoAl0olNSzesQRlyuay0LIXKQpmbZFiu7JgUUlTzMRn%2FOQPEPb4HdJlRS2uD6HApgxQ5kjHZ1g3iSVIgdGzKRUjHuxnAihhtfH561fi%2F4Iags10wudmp1mVCKwsxM7BvdyPt3w9M3svJTvT3vVdZMyJO5hT3Z3vhm8tdTmgtWjZF2RCp4MnL9ArWtm7Cyq14gSht2yMzjQwJtLgLDPsF6sUhdNzyoH5pv%2F%2BZBjuSlpF%2FcjzNQ4ZBCeBSoFXYOTFUDMjPg6m6UjUU5iBHvIlRfYd1IlswY9mJ3nbvIMhazfI8%2FzdBeWG%2FnYW1y7%2BdAGwF%2BC%2FSQvo5ZIBzsBIF7SVWD2NQHBwWHYVHneIe%2FmR%2FsTEzMR53ykH%2BXdkjx%2Bce7azxqpx2Np4xJZLmRZR2m5Jnv%2FSVWjMaQ%2FFDUjrS1rmKi2aufLBQX2UM%2F4Fe2wkQ4tcOvyekGBM2Z1oMvNG%2Bwu1GAD87dNBMbIryj0P4VVcBlX3OPJvu%2F8D%2BgOA5v2huG9b%2B33Dgk9MDqLyAFtCgY1uzC%2Bot3JBjqkAUn97by0d%2FjlZA%2Fc%2FYyjV8RWNOoOwIA9Rrs1lmwTyKaaBEldlK8j4sgtK5m9JR1u5Fod6%2Bmp5s6q5QTwyGRX%2FgQh2M1wmCYsASESX2rcqPGpxysWEIMQuaWt2hT0m3z%2BPy8c8ygCtXJipGegXdAo3p8X8mz0JWnXYptqPpN5XpAVHoVloMGmo7XpXeK2cMyP8DOib%2FEytsmzE83tRbu6sEE%2Bzkx4&X-Amz-Signature=69b088f015233bd3c764bf9c49289da335838d135088634ab63e441cdc3226a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEMGMKK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqbaWyVWceaQ3Ojd40Q5y87NzRPOxq7mZRHv04GzNXvgIhAIztt1dPcTRt9sIVNd3XhM1EMkNCAGxwTohKMCyxj8zdKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1P1cxZNHHBBG15tEq3AOPL9Rn9G6weF8zF3rRCypgnlPtJmnDczIV6%2BFEhlM13TkFlMApxit%2BqPytSS1pJ8rrXDCwqHh3eL9eRuZ08kLscev7KuPSWDso4ufyYOuoAl0olNSzesQRlyuay0LIXKQpmbZFiu7JgUUlTzMRn%2FOQPEPb4HdJlRS2uD6HApgxQ5kjHZ1g3iSVIgdGzKRUjHuxnAihhtfH561fi%2F4Iags10wudmp1mVCKwsxM7BvdyPt3w9M3svJTvT3vVdZMyJO5hT3Z3vhm8tdTmgtWjZF2RCp4MnL9ArWtm7Cyq14gSht2yMzjQwJtLgLDPsF6sUhdNzyoH5pv%2F%2BZBjuSlpF%2FcjzNQ4ZBCeBSoFXYOTFUDMjPg6m6UjUU5iBHvIlRfYd1IlswY9mJ3nbvIMhazfI8%2FzdBeWG%2FnYW1y7%2BdAGwF%2BC%2FSQvo5ZIBzsBIF7SVWD2NQHBwWHYVHneIe%2FmR%2FsTEzMR53ykH%2BXdkjx%2Bce7azxqpx2Np4xJZLmRZR2m5Jnv%2FSVWjMaQ%2FFDUjrS1rmKi2aufLBQX2UM%2F4Fe2wkQ4tcOvyekGBM2Z1oMvNG%2Bwu1GAD87dNBMbIryj0P4VVcBlX3OPJvu%2F8D%2BgOA5v2huG9b%2B33Dgk9MDqLyAFtCgY1uzC%2Bot3JBjqkAUn97by0d%2FjlZA%2Fc%2FYyjV8RWNOoOwIA9Rrs1lmwTyKaaBEldlK8j4sgtK5m9JR1u5Fod6%2Bmp5s6q5QTwyGRX%2FgQh2M1wmCYsASESX2rcqPGpxysWEIMQuaWt2hT0m3z%2BPy8c8ygCtXJipGegXdAo3p8X8mz0JWnXYptqPpN5XpAVHoVloMGmo7XpXeK2cMyP8DOib%2FEytsmzE83tRbu6sEE%2Bzkx4&X-Amz-Signature=2e29ffea59208eb49b2b3881e5a26819c4dbd2f080f2b0ea9e1770f2dd95f71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
