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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNK3PCW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgOdc4UZHYod99T5VJD%2F8zyK%2BKl1FCZao2gI2sOZRZUAiB6eTLwqqSdX2YMbwWOy%2Fh%2Bqjt4EW%2FrBJIhqu6Ej6DY1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27HghjWTDfHfIgQ4KtwDk5Sg9iRPDdP%2FPjcVhq9sZ2FL9U9r3XsPlDcq%2BmbjaSxZttN7U5AR5bEoKAwyFsQi%2BY7R%2FDyvdiAug5o9JQUiexud1IaKsSwtM%2FEdQt%2FJEP9jo7n9LaTlHS89Odlf7oR6mg2EFx%2F1ZWn%2BfuvlMX1OinXw%2F%2FISJIZ0eZ84X3L58DkJACl5o58vRauQpHq1tEh9qrVZYyTTbggCHpLT5YKV2b%2BeRH4TAeLV7kZJqx6SSv9yAdqXtMs7KoI%2F8nA9hVYgMq%2FIX51KGKRCLzIuYaCn3jpiHlLXqgBbKQxdL%2BlZA%2BTp5qfeOthIMlWVEy1GNfQeR2SdazNVebUVkeC0SmcUJCReRtEfZj1deb%2BmKdBDiwSCNEAOBOW4PjY01xwWDDuPKTSxWDVlUXyr1ekaDZMArznEEdcvyrEBh%2BN6RJJREuKp0s0TMNojXNMsff0S1dUqDb0dNYokYUAhLo10iPR0YvGzEfQhlBMCK9uLcKBTWo2XtvH%2BH4gLyMJ%2BnLqmlVqsQqWanubhv81hCAdAh0iUgzYLNRw%2BvxgxxilpxSoe0jWvLShU1w%2B%2FyLtV5NEfplefmf0PlSPL2MJyysBA6TL9im8Na%2BOkROjrYHkhLg1iMzJEZLFX1LF%2Fs3KPW%2F4w05%2BLygY6pgFtK4ItizEwsFhH%2Fz4sq7sCUF417GydTc4M8FYPFv5hCpqY1BQ%2BAsWRMm%2FUREH6jIPuZCY1w4I%2F%2BPPBb6RokDYOBZeq7XwiqrCzm7%2FserpRXLSpkznhGEAypI72v%2BqZaTXPHArI%2BkeRd0hRMJn9ed4paHWiurohSf5DMuB9xfxV%2FnZjSoD11EvFJwggql0NcgCNi1igNWlSm782vVAupuvf16ZmLHV0&X-Amz-Signature=f8ec915daa6054318caaf54612d7ff3a48e9c4c2702ea25885a4c48a74995c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNK3PCW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgOdc4UZHYod99T5VJD%2F8zyK%2BKl1FCZao2gI2sOZRZUAiB6eTLwqqSdX2YMbwWOy%2Fh%2Bqjt4EW%2FrBJIhqu6Ej6DY1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27HghjWTDfHfIgQ4KtwDk5Sg9iRPDdP%2FPjcVhq9sZ2FL9U9r3XsPlDcq%2BmbjaSxZttN7U5AR5bEoKAwyFsQi%2BY7R%2FDyvdiAug5o9JQUiexud1IaKsSwtM%2FEdQt%2FJEP9jo7n9LaTlHS89Odlf7oR6mg2EFx%2F1ZWn%2BfuvlMX1OinXw%2F%2FISJIZ0eZ84X3L58DkJACl5o58vRauQpHq1tEh9qrVZYyTTbggCHpLT5YKV2b%2BeRH4TAeLV7kZJqx6SSv9yAdqXtMs7KoI%2F8nA9hVYgMq%2FIX51KGKRCLzIuYaCn3jpiHlLXqgBbKQxdL%2BlZA%2BTp5qfeOthIMlWVEy1GNfQeR2SdazNVebUVkeC0SmcUJCReRtEfZj1deb%2BmKdBDiwSCNEAOBOW4PjY01xwWDDuPKTSxWDVlUXyr1ekaDZMArznEEdcvyrEBh%2BN6RJJREuKp0s0TMNojXNMsff0S1dUqDb0dNYokYUAhLo10iPR0YvGzEfQhlBMCK9uLcKBTWo2XtvH%2BH4gLyMJ%2BnLqmlVqsQqWanubhv81hCAdAh0iUgzYLNRw%2BvxgxxilpxSoe0jWvLShU1w%2B%2FyLtV5NEfplefmf0PlSPL2MJyysBA6TL9im8Na%2BOkROjrYHkhLg1iMzJEZLFX1LF%2Fs3KPW%2F4w05%2BLygY6pgFtK4ItizEwsFhH%2Fz4sq7sCUF417GydTc4M8FYPFv5hCpqY1BQ%2BAsWRMm%2FUREH6jIPuZCY1w4I%2F%2BPPBb6RokDYOBZeq7XwiqrCzm7%2FserpRXLSpkznhGEAypI72v%2BqZaTXPHArI%2BkeRd0hRMJn9ed4paHWiurohSf5DMuB9xfxV%2FnZjSoD11EvFJwggql0NcgCNi1igNWlSm782vVAupuvf16ZmLHV0&X-Amz-Signature=e015a3452f431d43b3ec5b806bedb597db07155d4161056a35f58e5941a7118a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
