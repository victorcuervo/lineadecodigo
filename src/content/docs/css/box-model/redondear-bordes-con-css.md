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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQOEMFU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5fMSd7TsRMfzQpalEFY7apWKTn222FWqeZW6cWueyEAiEAwp9wnA5G8ux6l4FbFlJPfbS9FA%2FYq1p4tQ7wwq7THM0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDINlym4DFVgJREZ%2FircA92c1JKfjQQVsq%2B7eO3nnwoI7Lge91bwD2WLXHC5LIx3Lw8uUdgLXBYs8JGdMIJ6nWBAvxEre8rWsCA6eNKof%2F0xwZC6IsPrrzfQ1980J9dUMDftoqGZM5h421exEc1vEH%2FRh7e83MDZ0R5sn4%2F3g7k41mmEIjVZAVug9auqhaMux7YnVpW4DxK8IlXzx49%2BaxXHKR9LZovIUJDWAd6qKDDKIQKrZ0torXfZXL7z2PrXHRLghTaPrWH4wIFPzKJQ8gQ8OoCOL1JkY2xmOWHnDruTHcwwkXx%2BaVTl5%2Bo53PlNpoPKUTV6%2Btg92lMVdIcNjYqEakBT2AhRu1LXlFdu6EAvKMRFdDLuyP8FSeOcixQem6T8HFjsv%2BLjvzYhvtw0kpUZ4F%2BLG3E%2FUuU66nQHU8fTLK15m8gJXqZW93ITtGRtf1C948NgkskeFYDMGOxkdGlPxzH5cIzX7ZfSv%2F%2BDUd2SYjsZttofO23IRuSTEK0jG%2F9V2qzpZPhvYCw2tsG0er4rhfWEy%2F3wk0h6j8NjFXo4NOCbPNcVtA9TUub9cgxXe2Ktn5KCKOBzdEzF2DTHlKoGuV9KDPXHh8cPgwX8mVMtashzOYxNa7sXdXfptem0Ko8ntvlQiB27%2BtK9MIjiisoGOqUBYhIw%2FC5qlf1NbAci04TKWg2wOqSekSec0Aijfv3hsSiKfSBhXzVEO9GWPpQTNG5miPcoNaQsEZ9zYr0bqDT1J7%2FyL4JPY9ZuS49%2FzaBx2FmM4d001OuhfUwibDs5M6j6MwFHgVaIwxJ5giIXj%2F0n%2Fdkrmu1aQxoMh79VNwoCSZ5pbpm%2BqGTnduUCDqC4R2q1GoYuQyNHK12J5BPXY7D%2BlmYiF6bK&X-Amz-Signature=0e9964b67494f126ca59a1a01912769e64c342c89c230d7b4f7dbd2adba8487d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQOEMFU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5fMSd7TsRMfzQpalEFY7apWKTn222FWqeZW6cWueyEAiEAwp9wnA5G8ux6l4FbFlJPfbS9FA%2FYq1p4tQ7wwq7THM0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDINlym4DFVgJREZ%2FircA92c1JKfjQQVsq%2B7eO3nnwoI7Lge91bwD2WLXHC5LIx3Lw8uUdgLXBYs8JGdMIJ6nWBAvxEre8rWsCA6eNKof%2F0xwZC6IsPrrzfQ1980J9dUMDftoqGZM5h421exEc1vEH%2FRh7e83MDZ0R5sn4%2F3g7k41mmEIjVZAVug9auqhaMux7YnVpW4DxK8IlXzx49%2BaxXHKR9LZovIUJDWAd6qKDDKIQKrZ0torXfZXL7z2PrXHRLghTaPrWH4wIFPzKJQ8gQ8OoCOL1JkY2xmOWHnDruTHcwwkXx%2BaVTl5%2Bo53PlNpoPKUTV6%2Btg92lMVdIcNjYqEakBT2AhRu1LXlFdu6EAvKMRFdDLuyP8FSeOcixQem6T8HFjsv%2BLjvzYhvtw0kpUZ4F%2BLG3E%2FUuU66nQHU8fTLK15m8gJXqZW93ITtGRtf1C948NgkskeFYDMGOxkdGlPxzH5cIzX7ZfSv%2F%2BDUd2SYjsZttofO23IRuSTEK0jG%2F9V2qzpZPhvYCw2tsG0er4rhfWEy%2F3wk0h6j8NjFXo4NOCbPNcVtA9TUub9cgxXe2Ktn5KCKOBzdEzF2DTHlKoGuV9KDPXHh8cPgwX8mVMtashzOYxNa7sXdXfptem0Ko8ntvlQiB27%2BtK9MIjiisoGOqUBYhIw%2FC5qlf1NbAci04TKWg2wOqSekSec0Aijfv3hsSiKfSBhXzVEO9GWPpQTNG5miPcoNaQsEZ9zYr0bqDT1J7%2FyL4JPY9ZuS49%2FzaBx2FmM4d001OuhfUwibDs5M6j6MwFHgVaIwxJ5giIXj%2F0n%2Fdkrmu1aQxoMh79VNwoCSZ5pbpm%2BqGTnduUCDqC4R2q1GoYuQyNHK12J5BPXY7D%2BlmYiF6bK&X-Amz-Signature=2abe484525909e513f8fa8ea665a801e5c333dc7e75c28b54ef13d79ddd5fb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
