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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNJEVNW5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKcxt%2BvELEUdo71q3sKm969cnV6QQdDvONbitXcM11RAiEA4k3Wr0BY8guT4a94tjY8v%2B4d8p3snKOfytsk2xvr6%2F8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIr41DajjUCQZ6wX9SrcA%2BIjjo6fhIEMskXq4YYTTc%2FNMOAgTtlpX1t2vTmP1SqD3FZ%2FyFkF3Ke6pxUYAElPz5mXmbD5PskjuhKkuoN%2F0xib9Vr3wlMOXF8Wdjz08SCn523EuK7Z6MKykvYyak4zbxbdCsEVGpbs7QAfjfwq9%2Bu4ymiAoulC%2FkI5%2Bh6%2FFOUNNksMzSQPnIH6ZUItVgvDYvvN0Xud0UjB9G66rsfErMxqWNZb8t8KRc6VKSE6rzQHDt9CqsEtIPsqffcepZRpuMPtMC%2F4iIL%2BK4uxLuZO%2BDypsh2B2v%2BEzM1djx0G3qEUs80fhB%2FxulQlr2TC1vgpzvGJahx4zM5qF2Q1DfwB2reMlfxUJzaRfb%2FD3MjSAkQxoXqUjn5q%2F8TZKHvIvXOkVLc8E%2F0X4S9WiJZnVoAiV624rRrneCxsAnsjdynP86lMYXPadHAcW%2FJOlehoD02iu4caBKPHoDZyysg1qB7ylvkwYDj5FPsKZ%2F8mqi3aCW7FXCknHS92LHqUle%2FzBk%2FbvWG09IEqBR8O7poUs7TWEUuRScq7UiHtMJDUhIFnLCElJ3llDXPBbIehpnKRJt1hVonHa4FPLS%2FcvIL7zvXXYa42ILeCIojSsHBLV9FM8oi2YrGCqAyJI6DzcDzPMKmfi8oGOqUBHk%2BFZq1lxD%2F6XgI7uBQThks8wfPG36t%2BFbISecSDy7%2FE8JHqcEJ1x%2Fy6lnbP25wuLXG%2F%2FiZn5rQh%2BMX3QPLapZLPEXNIWVnQMu1osmpBoZghZp3u0nTTydW%2FBze2q9X0fIcec9ZM7SH0SmsURATxpZx4l0trgSP7TW1kj2Gf%2BCO24mjtL8hNN4dO5nkOmS3Pgp9bBT3osLHMYwUN6xSIAeruFZ8D&X-Amz-Signature=675acb31d2f37d6c36f3f4b52863f534b8baa47656a545397cadb918c20c1e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNJEVNW5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKcxt%2BvELEUdo71q3sKm969cnV6QQdDvONbitXcM11RAiEA4k3Wr0BY8guT4a94tjY8v%2B4d8p3snKOfytsk2xvr6%2F8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIr41DajjUCQZ6wX9SrcA%2BIjjo6fhIEMskXq4YYTTc%2FNMOAgTtlpX1t2vTmP1SqD3FZ%2FyFkF3Ke6pxUYAElPz5mXmbD5PskjuhKkuoN%2F0xib9Vr3wlMOXF8Wdjz08SCn523EuK7Z6MKykvYyak4zbxbdCsEVGpbs7QAfjfwq9%2Bu4ymiAoulC%2FkI5%2Bh6%2FFOUNNksMzSQPnIH6ZUItVgvDYvvN0Xud0UjB9G66rsfErMxqWNZb8t8KRc6VKSE6rzQHDt9CqsEtIPsqffcepZRpuMPtMC%2F4iIL%2BK4uxLuZO%2BDypsh2B2v%2BEzM1djx0G3qEUs80fhB%2FxulQlr2TC1vgpzvGJahx4zM5qF2Q1DfwB2reMlfxUJzaRfb%2FD3MjSAkQxoXqUjn5q%2F8TZKHvIvXOkVLc8E%2F0X4S9WiJZnVoAiV624rRrneCxsAnsjdynP86lMYXPadHAcW%2FJOlehoD02iu4caBKPHoDZyysg1qB7ylvkwYDj5FPsKZ%2F8mqi3aCW7FXCknHS92LHqUle%2FzBk%2FbvWG09IEqBR8O7poUs7TWEUuRScq7UiHtMJDUhIFnLCElJ3llDXPBbIehpnKRJt1hVonHa4FPLS%2FcvIL7zvXXYa42ILeCIojSsHBLV9FM8oi2YrGCqAyJI6DzcDzPMKmfi8oGOqUBHk%2BFZq1lxD%2F6XgI7uBQThks8wfPG36t%2BFbISecSDy7%2FE8JHqcEJ1x%2Fy6lnbP25wuLXG%2F%2FiZn5rQh%2BMX3QPLapZLPEXNIWVnQMu1osmpBoZghZp3u0nTTydW%2FBze2q9X0fIcec9ZM7SH0SmsURATxpZx4l0trgSP7TW1kj2Gf%2BCO24mjtL8hNN4dO5nkOmS3Pgp9bBT3osLHMYwUN6xSIAeruFZ8D&X-Amz-Signature=6d88b087446b6f4e7e07e561330a5ea2cf51007f74e57a937d0675798351e321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
