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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSJJCZ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuYKlBvshfoIHZ12UrAEsflAEabgQ4UlvBg%2FcVzB4f8QIhAMNLqFKeznjylQGqn%2BsFBCQPFbo4jRiTBV1V0NfIzeVfKv8DCHsQABoMNjM3NDIzMTgzODA1Igz5ULyMiCvVLV%2FRmwcq3ANsG8TDWe423xgTf7W0MtqWI4TZK7QGZIdqu92kncriySD%2BUi3ioqE6OgUDqgf752UiS2machZoto7vAyuUaJtfKJfo16%2BYU1g6CWOe7EwtF4gvvzwg5zrYRKcO8s0liN%2B12mRITVUzpU9oc%2B37XcpIvemM0yXCl7i07qF99QWEG%2BYlHc6r0vbrphK3KE%2BPfF2dQ2O729IrbllBWz9tG4qOk6HTHf%2FqTL4dvN6cr2WFQnpgpx4ZMS2ClhfsIw8nV0EWflYC8KSVF1fCPSYH4nm8jy7wx%2B7oFwEUoXmahizGlMCChZgyiK%2FfZpwXztmtqAG3OqJfTBYWQox01U3K90AT4sJkHcrh5BnjxJJicDnay57FkiGHP0IyySu7KzgVZfQzX1Ev9jd5sAzZi8DPaXEwE%2B7KEH%2FIT1Zl9BWjMoZdQW%2B4V%2B9f1UAyPjd1VtC0EKH7rktknFjKscWX9wSULSTBrtx%2F1VWHSPlRwehcX5KwtGHIH1VySU%2B4Lm4%2BQx4Y0QtVk10ji8DZgwVyPoxSBwTdFYqCHVgqSJO66WiC5opnyO52c%2BvBIsyt2%2FeiSFBZotZqjy7mIxs0RDxZUQCjv2iv00692znB0vYRK%2Ftj3XhdYrkQ15g%2BZzdb54jwIjDw8InKBjqkAW2h0wr%2FTjkOUTcCRYrR2zUj5kIEZKAccwtIfcyr%2BJf%2BYXG0UfglH5N2uv294fY8vY45Vqr5IxcceqdtfhQdrtxUnJEMZeC8%2BtWR0Zw6YKg4gQ99R%2BTN%2Flts4cn2SmNGr1bHfcHICeRdH1O%2BWKG996QT%2FOssYG46y9sy3BGePrZhOZysFkrf1kx2GXhufv9IpPYD40ybNf1YfU3JBvsuPpSUgYvT&X-Amz-Signature=d31d4c936b50a726c6221a0517c91d57cb392471f1b26ffdd76d897826d30f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSJJCZ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuYKlBvshfoIHZ12UrAEsflAEabgQ4UlvBg%2FcVzB4f8QIhAMNLqFKeznjylQGqn%2BsFBCQPFbo4jRiTBV1V0NfIzeVfKv8DCHsQABoMNjM3NDIzMTgzODA1Igz5ULyMiCvVLV%2FRmwcq3ANsG8TDWe423xgTf7W0MtqWI4TZK7QGZIdqu92kncriySD%2BUi3ioqE6OgUDqgf752UiS2machZoto7vAyuUaJtfKJfo16%2BYU1g6CWOe7EwtF4gvvzwg5zrYRKcO8s0liN%2B12mRITVUzpU9oc%2B37XcpIvemM0yXCl7i07qF99QWEG%2BYlHc6r0vbrphK3KE%2BPfF2dQ2O729IrbllBWz9tG4qOk6HTHf%2FqTL4dvN6cr2WFQnpgpx4ZMS2ClhfsIw8nV0EWflYC8KSVF1fCPSYH4nm8jy7wx%2B7oFwEUoXmahizGlMCChZgyiK%2FfZpwXztmtqAG3OqJfTBYWQox01U3K90AT4sJkHcrh5BnjxJJicDnay57FkiGHP0IyySu7KzgVZfQzX1Ev9jd5sAzZi8DPaXEwE%2B7KEH%2FIT1Zl9BWjMoZdQW%2B4V%2B9f1UAyPjd1VtC0EKH7rktknFjKscWX9wSULSTBrtx%2F1VWHSPlRwehcX5KwtGHIH1VySU%2B4Lm4%2BQx4Y0QtVk10ji8DZgwVyPoxSBwTdFYqCHVgqSJO66WiC5opnyO52c%2BvBIsyt2%2FeiSFBZotZqjy7mIxs0RDxZUQCjv2iv00692znB0vYRK%2Ftj3XhdYrkQ15g%2BZzdb54jwIjDw8InKBjqkAW2h0wr%2FTjkOUTcCRYrR2zUj5kIEZKAccwtIfcyr%2BJf%2BYXG0UfglH5N2uv294fY8vY45Vqr5IxcceqdtfhQdrtxUnJEMZeC8%2BtWR0Zw6YKg4gQ99R%2BTN%2Flts4cn2SmNGr1bHfcHICeRdH1O%2BWKG996QT%2FOssYG46y9sy3BGePrZhOZysFkrf1kx2GXhufv9IpPYD40ybNf1YfU3JBvsuPpSUgYvT&X-Amz-Signature=efbdc886a149b396bc8f92fbbab6eade79df7260414778edd70b00f0c49f0574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
