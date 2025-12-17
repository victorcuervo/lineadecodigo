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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQDBCIX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH74WACeyyxK%2BBPvWJ4YSNPPrfTPsXia9BxKJGHzoBKmAiEAntFt23pSIze17cP4CWyUuv58pR%2FFMUsnrGJzNI5UDawqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrA4m4S9TPFCedLqSrcA%2FI9%2FZBTuSWlxAJHlktSRF%2FK4IdHFc%2FxAq84%2B7aK7p6%2FYJatkPqeyi9VTtCFFKJYLvldLqKAhxYpJc1M8x72KrZmr8AS2KJKPPln%2BhXzymXhU1voQmwQUI%2BQ598utV%2B9OvldhdgmgI6adj21zQboac7tb5x1xUdk0AyzHDSIH1UCDUuCPUA1h25aGxqklnmg7%2BKssuTY%2BWtaY4836P1iU232UjIfAyTgTYe6lo6vsBG4cgHRDHOLMhppqxD7%2Fce0R4PgF47hUIpdMfslv1vQon1aqKnmUsl9r7NVm%2F2f8vOQolB%2F4PbS5xoF5fnKxuEtfvgj9Ne%2BwOmi%2BBSqT9WhdthLo91aJfGQkGBxi1NduuVe6yqhv1wjLf9LAtswXJDZx04hSnDavyaThhxgZSmOpX8z3h0kY6W0yjYRJ3D0dRvzU4p3JB3GNzcHDNJ6usG29OHYUuPwB9v%2B2yJYjbHo2bAsE7HCSRO8%2B2uP5aFedBgOUkpbiqEl1XiGY6GKxcWlglTEsuQoVZ47d%2FwmDZKqIaOrYYmUi1%2F%2BV3u4v0UGUnfYyreJ%2FqptLt0ta1xzBg8E6Y%2BcuruA27LGF92tZkqe7dY6NnlI3MX%2BIspi1WUtznUtZTI5LnTaOBCSlTqWMLOBi8oGOqUBvMMxat9ZLDiJlxI1CP7iSr9WuOKnfiBMSrpk1Wb2Dcq2QI%2Fw4AcxYycAdUowEJ%2Bbq%2BgVncf%2FzEBIJSD9m1Kz%2Blk3xr2kOEikAlcwzDdXY3Q8m8ZlKXUPlc8acn6QB9G%2ByGysGTxLQ9gI3H7cbkogRa%2B%2FH6YNT%2FCj%2F%2FHtvNBy8YGg5bZHpsHZf1g9edE%2BxWOt8cGq5bYuwnGxjAY6WfBGxswUCZkc&X-Amz-Signature=2fab2fe75a6b54ff136467854ae3c5de1b0ddf476502f3a539b258aab89e5bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQDBCIX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH74WACeyyxK%2BBPvWJ4YSNPPrfTPsXia9BxKJGHzoBKmAiEAntFt23pSIze17cP4CWyUuv58pR%2FFMUsnrGJzNI5UDawqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrA4m4S9TPFCedLqSrcA%2FI9%2FZBTuSWlxAJHlktSRF%2FK4IdHFc%2FxAq84%2B7aK7p6%2FYJatkPqeyi9VTtCFFKJYLvldLqKAhxYpJc1M8x72KrZmr8AS2KJKPPln%2BhXzymXhU1voQmwQUI%2BQ598utV%2B9OvldhdgmgI6adj21zQboac7tb5x1xUdk0AyzHDSIH1UCDUuCPUA1h25aGxqklnmg7%2BKssuTY%2BWtaY4836P1iU232UjIfAyTgTYe6lo6vsBG4cgHRDHOLMhppqxD7%2Fce0R4PgF47hUIpdMfslv1vQon1aqKnmUsl9r7NVm%2F2f8vOQolB%2F4PbS5xoF5fnKxuEtfvgj9Ne%2BwOmi%2BBSqT9WhdthLo91aJfGQkGBxi1NduuVe6yqhv1wjLf9LAtswXJDZx04hSnDavyaThhxgZSmOpX8z3h0kY6W0yjYRJ3D0dRvzU4p3JB3GNzcHDNJ6usG29OHYUuPwB9v%2B2yJYjbHo2bAsE7HCSRO8%2B2uP5aFedBgOUkpbiqEl1XiGY6GKxcWlglTEsuQoVZ47d%2FwmDZKqIaOrYYmUi1%2F%2BV3u4v0UGUnfYyreJ%2FqptLt0ta1xzBg8E6Y%2BcuruA27LGF92tZkqe7dY6NnlI3MX%2BIspi1WUtznUtZTI5LnTaOBCSlTqWMLOBi8oGOqUBvMMxat9ZLDiJlxI1CP7iSr9WuOKnfiBMSrpk1Wb2Dcq2QI%2Fw4AcxYycAdUowEJ%2Bbq%2BgVncf%2FzEBIJSD9m1Kz%2Blk3xr2kOEikAlcwzDdXY3Q8m8ZlKXUPlc8acn6QB9G%2ByGysGTxLQ9gI3H7cbkogRa%2B%2FH6YNT%2FCj%2F%2FHtvNBy8YGg5bZHpsHZf1g9edE%2BxWOt8cGq5bYuwnGxjAY6WfBGxswUCZkc&X-Amz-Signature=c3569f310e184da3c10444cc5af01442555e4fe8d71a7f5e8f17bccc9e6e8e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
