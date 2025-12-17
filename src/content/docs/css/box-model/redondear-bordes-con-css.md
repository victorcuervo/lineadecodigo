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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHEB3TA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpbLCYYYbESX1WvAt%2FoDKuRIa1y2uRuVn5Jm8bmS38rAiEA58ptqPFJU3BZ95He5ZbgF09%2BltMefe0ofn4pguj3IfQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBU0bzJg71HQtnwuDyrcA564pXldb95p9xi7e%2FstxKU9pqJ%2FtIdPHOUNd%2F5BWllwMt9BAMvoll%2BzDXR%2BEhfK9ZT1PC%2BJH4MzS65fy3yFVytJ2f%2BRNrGH8yn43ZoVF2Gy7i2%2By%2F1r5Z3edY2ZNGjmiGWJX%2BlI7lzrshumz%2F7jEFKp8nSg2%2BbQMARMhYrHtyNgq73CL02b9ASNLVo%2FPZ2MBMm2LCTXIcu2gDAVGHHOrd4zXwxMthLTrNmMItKySHWT2mcYje%2BMBsMGw8ZZBnhV%2FdbBtWILNH6xaNdhkcrAAjKfr%2FF1MJZAnnj4G4UvUh8maF%2FJIPwsOAmntdwHtiOklpLDgUeIol29e3UTBgytGx3Swx%2BxgW0trdaLmutiF7NGKIyBqSWviL0thvGdlSzY3fpUQbjGNBRlRnsHq7XW8N15CjhUStcH%2FhN23fD7daHK4JXJGZhAqQ4BixgT%2FuCefkY%2BEHx4dC5%2F8PbsFdy8pud0jcpEkThoipLvFsmpLpaArAicR5DajAb0yIpZ5RUsNxCCdyodQhdzGmlYwOMr95olbm3l6A1p3O4WcM%2BvSjQJSRznG%2BmxXkufAzjJiy%2BB1aDRnIniyW9THqYRYkkwYG2xuMq1uvcz27eqZg2DoFba3NTGn0cM5oP2tvh5MMLvicoGOqUBiOEHa%2FjAqXtlrYjktdOzy5TSBks7rwBx0LQhZK0YeCOQ4PCDrQlz3%2F5Xyt%2FsBoF8Z54vcgZDyuroHFgP6OZdmHy05mVBfM%2Bya6qOpgSpkD30BHYGqVzgqNt9kRzPXaxQNU7G%2BNZ6lv4hp2VfX3%2FpCzl1utHePK7nol4BqRP%2F93IGKqpQV5YHyVW5Cv7bGqMFpz7LAeNhpnCeJhVxqTSi5KCDyBFA&X-Amz-Signature=521edd11169334e24d1be226933946fd776b2a460a013a27b16e5155b9b28c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHEB3TA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpbLCYYYbESX1WvAt%2FoDKuRIa1y2uRuVn5Jm8bmS38rAiEA58ptqPFJU3BZ95He5ZbgF09%2BltMefe0ofn4pguj3IfQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBU0bzJg71HQtnwuDyrcA564pXldb95p9xi7e%2FstxKU9pqJ%2FtIdPHOUNd%2F5BWllwMt9BAMvoll%2BzDXR%2BEhfK9ZT1PC%2BJH4MzS65fy3yFVytJ2f%2BRNrGH8yn43ZoVF2Gy7i2%2By%2F1r5Z3edY2ZNGjmiGWJX%2BlI7lzrshumz%2F7jEFKp8nSg2%2BbQMARMhYrHtyNgq73CL02b9ASNLVo%2FPZ2MBMm2LCTXIcu2gDAVGHHOrd4zXwxMthLTrNmMItKySHWT2mcYje%2BMBsMGw8ZZBnhV%2FdbBtWILNH6xaNdhkcrAAjKfr%2FF1MJZAnnj4G4UvUh8maF%2FJIPwsOAmntdwHtiOklpLDgUeIol29e3UTBgytGx3Swx%2BxgW0trdaLmutiF7NGKIyBqSWviL0thvGdlSzY3fpUQbjGNBRlRnsHq7XW8N15CjhUStcH%2FhN23fD7daHK4JXJGZhAqQ4BixgT%2FuCefkY%2BEHx4dC5%2F8PbsFdy8pud0jcpEkThoipLvFsmpLpaArAicR5DajAb0yIpZ5RUsNxCCdyodQhdzGmlYwOMr95olbm3l6A1p3O4WcM%2BvSjQJSRznG%2BmxXkufAzjJiy%2BB1aDRnIniyW9THqYRYkkwYG2xuMq1uvcz27eqZg2DoFba3NTGn0cM5oP2tvh5MMLvicoGOqUBiOEHa%2FjAqXtlrYjktdOzy5TSBks7rwBx0LQhZK0YeCOQ4PCDrQlz3%2F5Xyt%2FsBoF8Z54vcgZDyuroHFgP6OZdmHy05mVBfM%2Bya6qOpgSpkD30BHYGqVzgqNt9kRzPXaxQNU7G%2BNZ6lv4hp2VfX3%2FpCzl1utHePK7nol4BqRP%2F93IGKqpQV5YHyVW5Cv7bGqMFpz7LAeNhpnCeJhVxqTSi5KCDyBFA&X-Amz-Signature=bd3282d944a84a73669d391e38675e271439ef43a0c856c03569f67c2748a980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
