---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7AP327%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDp7Kir5Cqlf3LAS9kh4RKxJJByhZNZB%2BPR2pikrvlpwAiEAwyhmoZf1Wtf%2B9hYWoHGNduCNuN%2F6C6IHQ4PrbVSrJBQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEq5JzZaFwVw6PgUzSrcA4elVtwM8xZqOscFKiBBHpScbEtzq2HD1XeRSKYoz124gGso6Lv9VaUbP4OpLhAMiTiVdrAhiDHninw4GTlaZ3fufO1ecfbJaguvzHQC4ILsL4qPkDbFKiepfxmmwx7N%2BOgKQnJBVqITxOWj6sDc67MU0Wm6vVQZXi812qR8UaCkXhdoWCdTxRaTSWia%2FiSEPkc5m0PqSZIXzJw8X%2F2UT029Vr89mBrufM0C0qJFmEV8iaUNxdj0Y9PrnYHxnr9CWBUgfGh1700BMcx47iYLUCaY8kVk1y84py7L9ILaO7SnKTf4PZjpmzXRuDFYzWsm2l9jLmzoWXAhm5PIFi5%2BZrtA3ADTmHuU4ekVAEGAR75ipvFmKPmTE%2FYP%2Fc45v5zNjaJReuwxjJURWUcfK6fiQdvORkS%2BOQnmkOIk4KEx2N%2BdlQ0BhPTK9AtE%2FQ5o2LiXpnDPju6gLblkhLItfIaNkWMuHE6CIJEQn5HzTCAwjAJhwNwpWN3NqMaf%2BW1VmTSRdCRC%2FpqsxwCENxC1ppZXQu8f55sdHZFNJQiBwX5YHn6iQwBs3yQh2bpDFQjB2ei6ntLYzb5KHUjnoEZPojxhfP5yz331iJt729Wilz%2BBW1oDoF2p2b6WJmkkbkByMMe%2BwskGOqUBwi%2BED%2F5E04jdpcl04dI7t0H%2BAsfU8qIloU%2FmXrfDSbo6xIb1quHjHFLYEVyDeDS9jXws9zpgcs4ZhKhx8gQr6hu3CZ3HN2lPSEq%2FleVIsp6X323Hu4USt%2BP8Jju2%2BABlIcf5iCzZz4wbcU6msTQZP%2Fye3gVU2fstoyGqauAPrbj92A0uI56w3JcVVgpCzFKcIrhe%2Bl5x4DPj8DUoE90QLJ8LuTFb&X-Amz-Signature=07f02e90e5f4413cb8bda31893f2628d79a5ed20c8fbeb49b90d29394b376107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7AP327%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDp7Kir5Cqlf3LAS9kh4RKxJJByhZNZB%2BPR2pikrvlpwAiEAwyhmoZf1Wtf%2B9hYWoHGNduCNuN%2F6C6IHQ4PrbVSrJBQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEq5JzZaFwVw6PgUzSrcA4elVtwM8xZqOscFKiBBHpScbEtzq2HD1XeRSKYoz124gGso6Lv9VaUbP4OpLhAMiTiVdrAhiDHninw4GTlaZ3fufO1ecfbJaguvzHQC4ILsL4qPkDbFKiepfxmmwx7N%2BOgKQnJBVqITxOWj6sDc67MU0Wm6vVQZXi812qR8UaCkXhdoWCdTxRaTSWia%2FiSEPkc5m0PqSZIXzJw8X%2F2UT029Vr89mBrufM0C0qJFmEV8iaUNxdj0Y9PrnYHxnr9CWBUgfGh1700BMcx47iYLUCaY8kVk1y84py7L9ILaO7SnKTf4PZjpmzXRuDFYzWsm2l9jLmzoWXAhm5PIFi5%2BZrtA3ADTmHuU4ekVAEGAR75ipvFmKPmTE%2FYP%2Fc45v5zNjaJReuwxjJURWUcfK6fiQdvORkS%2BOQnmkOIk4KEx2N%2BdlQ0BhPTK9AtE%2FQ5o2LiXpnDPju6gLblkhLItfIaNkWMuHE6CIJEQn5HzTCAwjAJhwNwpWN3NqMaf%2BW1VmTSRdCRC%2FpqsxwCENxC1ppZXQu8f55sdHZFNJQiBwX5YHn6iQwBs3yQh2bpDFQjB2ei6ntLYzb5KHUjnoEZPojxhfP5yz331iJt729Wilz%2BBW1oDoF2p2b6WJmkkbkByMMe%2BwskGOqUBwi%2BED%2F5E04jdpcl04dI7t0H%2BAsfU8qIloU%2FmXrfDSbo6xIb1quHjHFLYEVyDeDS9jXws9zpgcs4ZhKhx8gQr6hu3CZ3HN2lPSEq%2FleVIsp6X323Hu4USt%2BP8Jju2%2BABlIcf5iCzZz4wbcU6msTQZP%2Fye3gVU2fstoyGqauAPrbj92A0uI56w3JcVVgpCzFKcIrhe%2Bl5x4DPj8DUoE90QLJ8LuTFb&X-Amz-Signature=22b47f9b8a7859e46741152842bc3258e771ae37438f3755c48b9d4e9cb7802c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
