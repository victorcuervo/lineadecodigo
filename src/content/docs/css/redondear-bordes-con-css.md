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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOELX2B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK6XSoCQRnMbBiDSmAThA4sHzZea2alE0%2BgH1wKu7%2B7AiEAi00XWW%2F8HJXAX%2BF52hBH8ZZz7%2FbPNCaQ5EqF0Wx%2FDEoqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFcYyPuPb339%2FOCtCrcA%2FPiFhv0l8BoztWbibe%2BxMr2txL%2F8VlN0J9U21Lv53QIzYY3IO5UmFkQoe71jFKegEqmwSwSs0D6VuHiEszWhl4Bh0PtNRKRg1yKHoELzgNpq1GZaSfP0WpHPqSDpTKGZ6SFfpbrZRgmDvDjYSwZk8WiD2Os344nwoNzZmoke1sdJcqyGHgAbhQWBTxTGYj4eJE%2B0VXI97Go5wcmEklAf89X%2FIWRxd1HWI0YmyHoxJveouAaZuy6y2VpRiznpkPsyDE0np4zy9wOOByZnfuw8K1kQc46EEK7i4z6Dcu6CTHJXzwKYWZNZ9l1oxdb%2FrqQ00dh6dvieYDhm351B4fcaXrYiulCn6EVKYx6S37F%2FTb2%2B%2FluNQRCzjolrwA%2B8XosRjvDb4C7nAlsPSz3TNT9hHPVx575MZWt915mskAmywmPVCJ0JveCInGNBZhqrapDBiJaDZsJSpkqWYWD1xTBrD%2FiYSq6OfPhPHHDUupo4YmEzx1QJV0DtM4suF1Hka6ehlLdS9I9UKCJy%2B6M2Qj5WY35oK0r%2BaHJQ4K2Z%2BbxrERZBKdQ7K8m71Ys%2Fz%2Fk7JXE3Kly1Ez8pKPUjg42IVgl%2F2wSBM6wbYetXS1f8Yd%2BkCN%2BYOEjw%2FROhiAe0PJ6MJPl28kGOqUBcw6GL8kw65eaBHOVX1NxWIFnAYiAavC42yWGVyg419VDEClmOVR2Avz0d40b%2Fki6MZEjQTljbl6rRM2DBNUH7RYJHcKm5izUEC0XOPvcPSIFEVxo03hMl8HKXagVyNdRcCqbzf8rexsxzRhJQFtzFVje%2B46J6tGZPIEsB93%2F3HDiK53RzVLaHosxp3mDGrDmkG5ia1uAGPopca82eaLZU8vqufdU&X-Amz-Signature=0443504f15a69640f6b5066eea00ed4637f3ce0b2893d5fcbcae14603c3d8283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOELX2B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK6XSoCQRnMbBiDSmAThA4sHzZea2alE0%2BgH1wKu7%2B7AiEAi00XWW%2F8HJXAX%2BF52hBH8ZZz7%2FbPNCaQ5EqF0Wx%2FDEoqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFcYyPuPb339%2FOCtCrcA%2FPiFhv0l8BoztWbibe%2BxMr2txL%2F8VlN0J9U21Lv53QIzYY3IO5UmFkQoe71jFKegEqmwSwSs0D6VuHiEszWhl4Bh0PtNRKRg1yKHoELzgNpq1GZaSfP0WpHPqSDpTKGZ6SFfpbrZRgmDvDjYSwZk8WiD2Os344nwoNzZmoke1sdJcqyGHgAbhQWBTxTGYj4eJE%2B0VXI97Go5wcmEklAf89X%2FIWRxd1HWI0YmyHoxJveouAaZuy6y2VpRiznpkPsyDE0np4zy9wOOByZnfuw8K1kQc46EEK7i4z6Dcu6CTHJXzwKYWZNZ9l1oxdb%2FrqQ00dh6dvieYDhm351B4fcaXrYiulCn6EVKYx6S37F%2FTb2%2B%2FluNQRCzjolrwA%2B8XosRjvDb4C7nAlsPSz3TNT9hHPVx575MZWt915mskAmywmPVCJ0JveCInGNBZhqrapDBiJaDZsJSpkqWYWD1xTBrD%2FiYSq6OfPhPHHDUupo4YmEzx1QJV0DtM4suF1Hka6ehlLdS9I9UKCJy%2B6M2Qj5WY35oK0r%2BaHJQ4K2Z%2BbxrERZBKdQ7K8m71Ys%2Fz%2Fk7JXE3Kly1Ez8pKPUjg42IVgl%2F2wSBM6wbYetXS1f8Yd%2BkCN%2BYOEjw%2FROhiAe0PJ6MJPl28kGOqUBcw6GL8kw65eaBHOVX1NxWIFnAYiAavC42yWGVyg419VDEClmOVR2Avz0d40b%2Fki6MZEjQTljbl6rRM2DBNUH7RYJHcKm5izUEC0XOPvcPSIFEVxo03hMl8HKXagVyNdRcCqbzf8rexsxzRhJQFtzFVje%2B46J6tGZPIEsB93%2F3HDiK53RzVLaHosxp3mDGrDmkG5ia1uAGPopca82eaLZU8vqufdU&X-Amz-Signature=dc0164a59f2b69cbd2eb413ae05de5ee439ff85043a227c1eb114d4fb90a069f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
