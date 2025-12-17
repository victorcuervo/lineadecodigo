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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDU5X3K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFpbUraFs%2FLYfK%2BoaXPJzRgRWACWShebyUi1Ik6A2ViAiEAtcfCMlMU5qnhPKC%2ByqXZ6XqXlz4V469XBk%2FafK3LdZAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPadIz3p%2BFYzAeJ7dircA81joLYPPi5BeAGBJGbzbti9w8iJ8LrIdM9LivAu4uGamP576zoA4iy26cPSTaxlx1C5kba4f3gemCl8CbUvDRj9RNprWjHwhAZD%2Fjallzu3UQpGhaTT4rAetFp4BdqOh4ZKTGL0j%2FhKCPkW3r3pXKZVHYjlGmw8A89nwq4oU%2FdzYyt9IDHXI1%2BAhMeyZiKZDQ7JESZe2%2Bg383cSBk81sb44Jsk3c%2F4v7Hw9u1CRZlRee5m7fRtf0sK2wQ2J85k5GDlbTuRoxBP8MS5W6HvESyjfbvISN2DgulFmuWgLqd6DBsBYUUNAY%2F2xg7VOB85lW1BHcvQfnEXQI5Ftaw8sgx67kTJvMTcfvl7ppqlchirTfbYcnqcGAFzKH5QCVQdNhI2W2mvDk234boi8%2F0dw6jXHAJRLC5xTrBgl7CYLtyUfdz3mXhBQpoo4KizY%2B%2FcOH7QAZb69Y9mvcGYJR8EdyH0AA4WM1y8nAZptDTNYbM%2BCV%2FTcf8AW%2BeDQDwhhaan6N%2FGrAptoyzXsWkp16lq0rkevFuuVkywv0F4VyT5cE5ogWRZRX9pDDSQ6gHpk7MlBKme5mW4%2F2a%2BZHHm04WZ3KfxGoGNbpCClftu7GYlEGwk%2BTwjz0htCni%2FuvYHcMKufi8oGOqUB1pbQ7TI4SQ0%2BEASTctWwXfCnr%2FHW6X06ebR4IU0sPfQFBaPFSwfZ6xsNzV7Y9z%2FhboASUMe%2FHeQs7RfYx7ogS%2F6mdhxqOea%2FGB%2FY%2FsJZ53GtV6fAn1BtKu7PB55VeX5gzwfZeawB2ZQqtLGDBHAhzJ4yLjvL7X%2Fb9KpBljTYx1wCq%2FX1gmYLG3EFHQMWvMDtACtPZoLCkL3Mh5408XOtf2MkENyI&X-Amz-Signature=04d588a676e791dc308aa391248ce8bf8290dc5118b33d7dea225ecec65abb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDU5X3K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFpbUraFs%2FLYfK%2BoaXPJzRgRWACWShebyUi1Ik6A2ViAiEAtcfCMlMU5qnhPKC%2ByqXZ6XqXlz4V469XBk%2FafK3LdZAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPadIz3p%2BFYzAeJ7dircA81joLYPPi5BeAGBJGbzbti9w8iJ8LrIdM9LivAu4uGamP576zoA4iy26cPSTaxlx1C5kba4f3gemCl8CbUvDRj9RNprWjHwhAZD%2Fjallzu3UQpGhaTT4rAetFp4BdqOh4ZKTGL0j%2FhKCPkW3r3pXKZVHYjlGmw8A89nwq4oU%2FdzYyt9IDHXI1%2BAhMeyZiKZDQ7JESZe2%2Bg383cSBk81sb44Jsk3c%2F4v7Hw9u1CRZlRee5m7fRtf0sK2wQ2J85k5GDlbTuRoxBP8MS5W6HvESyjfbvISN2DgulFmuWgLqd6DBsBYUUNAY%2F2xg7VOB85lW1BHcvQfnEXQI5Ftaw8sgx67kTJvMTcfvl7ppqlchirTfbYcnqcGAFzKH5QCVQdNhI2W2mvDk234boi8%2F0dw6jXHAJRLC5xTrBgl7CYLtyUfdz3mXhBQpoo4KizY%2B%2FcOH7QAZb69Y9mvcGYJR8EdyH0AA4WM1y8nAZptDTNYbM%2BCV%2FTcf8AW%2BeDQDwhhaan6N%2FGrAptoyzXsWkp16lq0rkevFuuVkywv0F4VyT5cE5ogWRZRX9pDDSQ6gHpk7MlBKme5mW4%2F2a%2BZHHm04WZ3KfxGoGNbpCClftu7GYlEGwk%2BTwjz0htCni%2FuvYHcMKufi8oGOqUB1pbQ7TI4SQ0%2BEASTctWwXfCnr%2FHW6X06ebR4IU0sPfQFBaPFSwfZ6xsNzV7Y9z%2FhboASUMe%2FHeQs7RfYx7ogS%2F6mdhxqOea%2FGB%2FY%2FsJZ53GtV6fAn1BtKu7PB55VeX5gzwfZeawB2ZQqtLGDBHAhzJ4yLjvL7X%2Fb9KpBljTYx1wCq%2FX1gmYLG3EFHQMWvMDtACtPZoLCkL3Mh5408XOtf2MkENyI&X-Amz-Signature=afc1e664d173b417c8575b16e64a98da1239d3e10e8fca6be069537daab69762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
