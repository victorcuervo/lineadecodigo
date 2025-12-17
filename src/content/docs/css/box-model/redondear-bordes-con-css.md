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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWVCSF7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCstvzcrrpRFRcKw%2BHTVPeneL4wGwVOO3oq6qiEUE2mVAIhALYodyjKo1GlgDveTL47ZqHFv6vKoDIs1f2yZsLXqUiyKv8DCH8QABoMNjM3NDIzMTgzODA1IgzyeWvyffkybRE7sfkq3ANsDRL1cFWAiutBZA8DLenEzMa7PWPEanKG%2F2bBd%2BHjafFpx5QbZmkTlUD2ZSwk08wL8Wsq7yeZrqY1qjftDZuukiF0ptw%2FBpGVjgFEVnXnBkHsoYCz0NIp0e%2BFAY3xQP2CCmko30ow1BJKVmkZk0UTuBtTFRMm5i6Ody8EKo3UCQdv8Sjw%2F9o7f1CV3J4Q0RrcF3c4uP2oN95eJGl5%2F3j109b0zHotHNt5cMcMYmt9fHjJ7V31Sc1yDOgBagaUGzyX8aBqwriRfvoGEArzkrV5znDQSdHpgrGeDYk%2BfkJxNlUw19depDlzNfn33DM0pJga%2FqJyKppwG98oOWYSJotxHDV%2BFqEpKRM12RFDhhDHGHY%2BPhhzjVAZ3OY6tBKg5aRoGzcRk4xIHrjGLNun1gvpSKkLseh%2FVFI07OB%2F6Tsx%2BoWHppm45Nqv9pysbmPqABMlpxi0cEjtUHSoIu3U6QIIkw%2BkKWr41R6g85cE%2F%2F%2B5fO7hZkRo8bzUZzFP46eTWiCU5yCuSveMkfVO89y3Sz7G%2BO9OGI%2BBqQj4tZ0z7RmbXSna2gC6rUuQXwZwAWedAgsBDbzreBLGi40HZ7Vhx%2F99cE6k9dfssXAZFNyKHQslW0Cim0XYIBewVkOZWDCL4orKBjqkAX0%2FAbtOAkh5ao0NzqdIDy1YpuUKMs03HPc2mLyXzA4hjciiFwXPwVrJTVvW38bKiagIwTX3GJ4sSDiiOEkgkcitGunhk38z%2BKENqvi0ysl2W9jRjUy8fl%2B2C3eqgodAKRvvfbN6kQ2agJqK4FvC4X7ABKy%2BrSmA%2BqWIgNOoEeNZfMRQ8toOsAIckerH62Dhu%2FwIYPexWzuoZFmN4Fw25oruj%2B5E&X-Amz-Signature=3032c9b783223e3a173451a0d1a5efdfeaccd1ee4b56b834862b3cfa40040e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWVCSF7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCstvzcrrpRFRcKw%2BHTVPeneL4wGwVOO3oq6qiEUE2mVAIhALYodyjKo1GlgDveTL47ZqHFv6vKoDIs1f2yZsLXqUiyKv8DCH8QABoMNjM3NDIzMTgzODA1IgzyeWvyffkybRE7sfkq3ANsDRL1cFWAiutBZA8DLenEzMa7PWPEanKG%2F2bBd%2BHjafFpx5QbZmkTlUD2ZSwk08wL8Wsq7yeZrqY1qjftDZuukiF0ptw%2FBpGVjgFEVnXnBkHsoYCz0NIp0e%2BFAY3xQP2CCmko30ow1BJKVmkZk0UTuBtTFRMm5i6Ody8EKo3UCQdv8Sjw%2F9o7f1CV3J4Q0RrcF3c4uP2oN95eJGl5%2F3j109b0zHotHNt5cMcMYmt9fHjJ7V31Sc1yDOgBagaUGzyX8aBqwriRfvoGEArzkrV5znDQSdHpgrGeDYk%2BfkJxNlUw19depDlzNfn33DM0pJga%2FqJyKppwG98oOWYSJotxHDV%2BFqEpKRM12RFDhhDHGHY%2BPhhzjVAZ3OY6tBKg5aRoGzcRk4xIHrjGLNun1gvpSKkLseh%2FVFI07OB%2F6Tsx%2BoWHppm45Nqv9pysbmPqABMlpxi0cEjtUHSoIu3U6QIIkw%2BkKWr41R6g85cE%2F%2F%2B5fO7hZkRo8bzUZzFP46eTWiCU5yCuSveMkfVO89y3Sz7G%2BO9OGI%2BBqQj4tZ0z7RmbXSna2gC6rUuQXwZwAWedAgsBDbzreBLGi40HZ7Vhx%2F99cE6k9dfssXAZFNyKHQslW0Cim0XYIBewVkOZWDCL4orKBjqkAX0%2FAbtOAkh5ao0NzqdIDy1YpuUKMs03HPc2mLyXzA4hjciiFwXPwVrJTVvW38bKiagIwTX3GJ4sSDiiOEkgkcitGunhk38z%2BKENqvi0ysl2W9jRjUy8fl%2B2C3eqgodAKRvvfbN6kQ2agJqK4FvC4X7ABKy%2BrSmA%2BqWIgNOoEeNZfMRQ8toOsAIckerH62Dhu%2FwIYPexWzuoZFmN4Fw25oruj%2B5E&X-Amz-Signature=72ec8f892ce676b86aad04c55ccdbe2a926c0dcc0eae57b393b02a5d8be2b0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
