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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X66ESX5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkBNQKHx3AnE%2B5pgRe7gA36oblYF%2FfMAM6Gbt9yH3uIgIgePxYIrtIYeBDgeUMX8qWav8DhgJWHnvZV%2Bw%2FXnOf2SAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAouooemHdl63GsrNyrcA%2BrY3ASGDfOPtMP5SLhX0EIM%2BupMiaLNMRU0f02%2BSBTHUHkoy78V4ngDcnpEF8MKt5lzBdGUkbNkRjl2cpVOe14cyb3DovzHANCaevGhaog6CUpAnnnSFcixzVWZARo4Ergvh9VdwJVDXDE6TheJPyL3gjeeeokfaes9O6MDvWcWK2RBy%2B9WcpF42AM7tG5m59FHCGBx6u%2FF4jae3dH%2F2XZcXJKyuTPWzi0nDxQdgTuz0szAAYOl5A3kzeKolrp3woDwLhSF8I9kR2%2FvRjC7jLxbfoper9fjxiJafkextLOJ7k0m1TEnpFil8PlP4LyJWhP4ZuBUhB6corrdeFZfnMBVmM1OCxHmYgjMUd6DENXQfu5Ega%2Bc7XRP6TwETJMrnod4iAZDRpSifjfc6EjAtjZps%2Bcwf1FyEkuYh%2BHnwqtK9DrHmKP9zPZaSmqSoMttJZgzlcOLSL4%2FFz0oEbSPGLgD4LdN3ljzYxqL2HNO10Qlt0T0ZcT1hOBC5PnkM73BTJIEBIvwvLMojLeWKYO5dHS%2BJNesecjlSEQBXPqKPv8Cta2sqRiQXnAu3XyQ50k81PrJU5X3gMou%2Btm69Xp6U9B7DO4s%2BT0rKk7qhgyXbnvedrGEZciAsNl25urqMLaqisoGOqUB%2BCYuYPFjVzfSZlocykiaJZfV%2BWkaLQWMFmbBfaguBYo5fzCYuznYs%2FW%2BJcoGY4r9kjq%2BZ6EixoIHPjhIBBJGduR5wPJ0hDAtLD9lndzQm6VWBDPfvQfWEfQ%2BMmpwsImZLcd5qmcvvVaiSX4XATeGXh7BF%2BcTE0Os6K51Lo4V0g4ceQTHj1vTy4bb5fBleAO2er4UaiGlYDGR%2BxwT6f1KfBLJGs4Q&X-Amz-Signature=0fd5b8b8629d4b22223bcfc84481ed856eb5f3b8d67d0a187488ea25fffbc144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X66ESX5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkBNQKHx3AnE%2B5pgRe7gA36oblYF%2FfMAM6Gbt9yH3uIgIgePxYIrtIYeBDgeUMX8qWav8DhgJWHnvZV%2Bw%2FXnOf2SAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAouooemHdl63GsrNyrcA%2BrY3ASGDfOPtMP5SLhX0EIM%2BupMiaLNMRU0f02%2BSBTHUHkoy78V4ngDcnpEF8MKt5lzBdGUkbNkRjl2cpVOe14cyb3DovzHANCaevGhaog6CUpAnnnSFcixzVWZARo4Ergvh9VdwJVDXDE6TheJPyL3gjeeeokfaes9O6MDvWcWK2RBy%2B9WcpF42AM7tG5m59FHCGBx6u%2FF4jae3dH%2F2XZcXJKyuTPWzi0nDxQdgTuz0szAAYOl5A3kzeKolrp3woDwLhSF8I9kR2%2FvRjC7jLxbfoper9fjxiJafkextLOJ7k0m1TEnpFil8PlP4LyJWhP4ZuBUhB6corrdeFZfnMBVmM1OCxHmYgjMUd6DENXQfu5Ega%2Bc7XRP6TwETJMrnod4iAZDRpSifjfc6EjAtjZps%2Bcwf1FyEkuYh%2BHnwqtK9DrHmKP9zPZaSmqSoMttJZgzlcOLSL4%2FFz0oEbSPGLgD4LdN3ljzYxqL2HNO10Qlt0T0ZcT1hOBC5PnkM73BTJIEBIvwvLMojLeWKYO5dHS%2BJNesecjlSEQBXPqKPv8Cta2sqRiQXnAu3XyQ50k81PrJU5X3gMou%2Btm69Xp6U9B7DO4s%2BT0rKk7qhgyXbnvedrGEZciAsNl25urqMLaqisoGOqUB%2BCYuYPFjVzfSZlocykiaJZfV%2BWkaLQWMFmbBfaguBYo5fzCYuznYs%2FW%2BJcoGY4r9kjq%2BZ6EixoIHPjhIBBJGduR5wPJ0hDAtLD9lndzQm6VWBDPfvQfWEfQ%2BMmpwsImZLcd5qmcvvVaiSX4XATeGXh7BF%2BcTE0Os6K51Lo4V0g4ceQTHj1vTy4bb5fBleAO2er4UaiGlYDGR%2BxwT6f1KfBLJGs4Q&X-Amz-Signature=c68689be5762cf13bf723d42a3f33e90aabeba36dacbaeae219864c28fe66e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
