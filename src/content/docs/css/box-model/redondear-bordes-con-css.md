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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7COWZO5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvlTkyvAXSzEyF%2BdvhXzRwCzXUgoMryy91OGmhmpAydAiBMSLFb4xJkufXZJ5TO%2BuS5lgllja0HQ349azgROR76KyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfBiv6p4c%2BspRwz6HKtwDJH%2B87Tl74oTPYHUTKwfOSx7GUpWRiZW1ZzFdszqwEcPfiZDn03M2Dt31aet8GBGljnRbqtcZ2LHHHeN0Xw6WJDpHTx4hUDk3ciIm0a0PO0tmJfAL%2BPvI4h4OsgG5PlworrgwOHQ3z%2FtzFmgHc%2FuLThH0XzYmsYwnymgJ%2FF6gyE2jhfXd9U74kCzszf5NCAB6slOTGsw%2F%2Bn8RXVvl1KvEkeu5t4JhIdEgYtpa6yPGvd6Rgq3KTxi6%2BZj9T1GZsFveMBbyz%2BtfHNhPD7vwlUDST%2FEjR2csRMrMU1msZK5Hai8lfb7v0aBPHeolFbCA9yxDQeyInpIslzwfQEqcMzIUnU%2FwWKGhXY0grH46Rn3SVe%2Fxy7eTbvAvXM9UKG7CzxStl3k5iw24xgL%2BAVfobnXn4OmaYJWtC1MRVXO%2BfFT5Kl4lIKdCBrZVs1TVzoX9VXruVC4KyvKgO6DTjcXMSYhOGLqTHYMIxM1FborjjPW7YJDt7aYleQAeiBqs94hVlXNgfoIOb6mykCbEmcHl0etLEmB7hIzGYM%2F7JqoT%2Bg%2B6Cno%2BNQIc9%2FfwwfdG4X70FeUTbhbPaVw%2F%2FNyyyPznYJnYinvaX41UckZCy2bt8FStfN5gjDffdjczxHkGdHQwzJ6LygY6pgEYLE%2BKsLOWb4FtH1ShZNUPeanYC5jf6aIUxoJq2dWqJdHx1fPeSOyGy1xkQnzMrqpFdNZQpn8X1GRVjfsIF8XM%2F8bN3Q4VVu5AK9L06Le4VG1NPQ7LE3MZs8zBX3JskhRMP0o4f9B8fcUE2SYRXG2wJLlogaSljj5FBgURClxhq46NLJJ1OU9Oi%2B9ePlyaIA8ipmp3oXKyQL%2FC7Ttl9UQWWaRA4ra9&X-Amz-Signature=90d4caf6b02d04268765cf0488acb5852b2a7ebee2b9b46d3158dbb2248b89ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7COWZO5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvlTkyvAXSzEyF%2BdvhXzRwCzXUgoMryy91OGmhmpAydAiBMSLFb4xJkufXZJ5TO%2BuS5lgllja0HQ349azgROR76KyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfBiv6p4c%2BspRwz6HKtwDJH%2B87Tl74oTPYHUTKwfOSx7GUpWRiZW1ZzFdszqwEcPfiZDn03M2Dt31aet8GBGljnRbqtcZ2LHHHeN0Xw6WJDpHTx4hUDk3ciIm0a0PO0tmJfAL%2BPvI4h4OsgG5PlworrgwOHQ3z%2FtzFmgHc%2FuLThH0XzYmsYwnymgJ%2FF6gyE2jhfXd9U74kCzszf5NCAB6slOTGsw%2F%2Bn8RXVvl1KvEkeu5t4JhIdEgYtpa6yPGvd6Rgq3KTxi6%2BZj9T1GZsFveMBbyz%2BtfHNhPD7vwlUDST%2FEjR2csRMrMU1msZK5Hai8lfb7v0aBPHeolFbCA9yxDQeyInpIslzwfQEqcMzIUnU%2FwWKGhXY0grH46Rn3SVe%2Fxy7eTbvAvXM9UKG7CzxStl3k5iw24xgL%2BAVfobnXn4OmaYJWtC1MRVXO%2BfFT5Kl4lIKdCBrZVs1TVzoX9VXruVC4KyvKgO6DTjcXMSYhOGLqTHYMIxM1FborjjPW7YJDt7aYleQAeiBqs94hVlXNgfoIOb6mykCbEmcHl0etLEmB7hIzGYM%2F7JqoT%2Bg%2B6Cno%2BNQIc9%2FfwwfdG4X70FeUTbhbPaVw%2F%2FNyyyPznYJnYinvaX41UckZCy2bt8FStfN5gjDffdjczxHkGdHQwzJ6LygY6pgEYLE%2BKsLOWb4FtH1ShZNUPeanYC5jf6aIUxoJq2dWqJdHx1fPeSOyGy1xkQnzMrqpFdNZQpn8X1GRVjfsIF8XM%2F8bN3Q4VVu5AK9L06Le4VG1NPQ7LE3MZs8zBX3JskhRMP0o4f9B8fcUE2SYRXG2wJLlogaSljj5FBgURClxhq46NLJJ1OU9Oi%2B9ePlyaIA8ipmp3oXKyQL%2FC7Ttl9UQWWaRA4ra9&X-Amz-Signature=44b4da74d1f31245fbaab0191bc6c99ab50e3e9b4dcd8cb268ff801c1c026ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
