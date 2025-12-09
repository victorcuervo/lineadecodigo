---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKOW4GR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6Mbj2fh6mAcpnPn%2BPM2k7bth%2FeFgVLa8tDPbhrdHCbAiAb40IXvxZXkYVldKz5sZUWx%2BWuID9KuF48%2BaK%2FpTQEgCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2FwOXcYJIUWAIHoGKtwDCWi3Q9Tr0EMxDWVMO4ruWtlHuPVzrlU6TwV59ENVte%2Fx7lwtOzJ28PDP%2Fb6ENlsArNQ3vDOBv4bP7vvbBCikioZ2gTE%2FuKoVvASuYl04MDW4qBChJcEV2eQPQJW9Q9QeCPRbAy1YqIQM2UQD3wGxHKH%2BME9YvIh4fbtJPgnn1cGBKxuVgD%2BgheZafW1Le2gscEDwVz62ZvIITL0iJdCwbPGKynAG1nhbwWzslJTDOaZvg06ZXKUk1psyXy8HYASCbDZ1Zvsr6vHrf0u%2F%2FBBQWO4HlRRsIvT7507MS7KFbgbUSUaWCpy0nZkOX8mr5ximtm5CkzNF%2FeNFgsUfde09NHovPEIAbshzR47Ed6YQRr%2FLrL8e06R3s5JyfPb8YiTm%2B2hfQlBkd2S5kp7DE0jeHmpYCzAUbTKv7G5WCaDI3ZARejtfx3P45cd8qrPTBbI6DDWAe8SEn8ZmHgxsXBKzyTQ1kYQs3n11WdSxWBRFqtbrWmaDjI1lj%2FpP4P4oVz8bPZlTTMhHaLFkmd02OK3%2Fz51G3dL104n%2FeSi2gMKBMj%2B%2FEFa9mOnhiVMu5xf%2FJSH%2FMosh0hVBFN%2FOAhifEIqWUUb9jCY4buHKQE7yTklBKOFoclf3n4G0KY%2FdusUwkcTfyQY6pgHhAZIT26wzwmPczNu5hkncaJTOoC9oA2Uvu%2FrtDtYUAKDEIY9oy4XWFXmiZ3D6k3i899GxYXcMv6jvI3%2Folf%2FepPKWDHmqqYkczoJAGkcfCveTzAFnJi0AIViuVjv0gfegw0uZTUSLi%2B3PpZhzp8KGIWOvjqiDoBXVYZOXCVZiBMvAr3N6Yg4f%2FlfGJSg%2BrNKM0kOdLJ9MvL%2F%2Fb5p%2F7R3jg7rYc1aB&X-Amz-Signature=a1e8e71574190117bb758c0b5bf87925ab034025a990a4a916530f7c90a0287b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKOW4GR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6Mbj2fh6mAcpnPn%2BPM2k7bth%2FeFgVLa8tDPbhrdHCbAiAb40IXvxZXkYVldKz5sZUWx%2BWuID9KuF48%2BaK%2FpTQEgCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2FwOXcYJIUWAIHoGKtwDCWi3Q9Tr0EMxDWVMO4ruWtlHuPVzrlU6TwV59ENVte%2Fx7lwtOzJ28PDP%2Fb6ENlsArNQ3vDOBv4bP7vvbBCikioZ2gTE%2FuKoVvASuYl04MDW4qBChJcEV2eQPQJW9Q9QeCPRbAy1YqIQM2UQD3wGxHKH%2BME9YvIh4fbtJPgnn1cGBKxuVgD%2BgheZafW1Le2gscEDwVz62ZvIITL0iJdCwbPGKynAG1nhbwWzslJTDOaZvg06ZXKUk1psyXy8HYASCbDZ1Zvsr6vHrf0u%2F%2FBBQWO4HlRRsIvT7507MS7KFbgbUSUaWCpy0nZkOX8mr5ximtm5CkzNF%2FeNFgsUfde09NHovPEIAbshzR47Ed6YQRr%2FLrL8e06R3s5JyfPb8YiTm%2B2hfQlBkd2S5kp7DE0jeHmpYCzAUbTKv7G5WCaDI3ZARejtfx3P45cd8qrPTBbI6DDWAe8SEn8ZmHgxsXBKzyTQ1kYQs3n11WdSxWBRFqtbrWmaDjI1lj%2FpP4P4oVz8bPZlTTMhHaLFkmd02OK3%2Fz51G3dL104n%2FeSi2gMKBMj%2B%2FEFa9mOnhiVMu5xf%2FJSH%2FMosh0hVBFN%2FOAhifEIqWUUb9jCY4buHKQE7yTklBKOFoclf3n4G0KY%2FdusUwkcTfyQY6pgHhAZIT26wzwmPczNu5hkncaJTOoC9oA2Uvu%2FrtDtYUAKDEIY9oy4XWFXmiZ3D6k3i899GxYXcMv6jvI3%2Folf%2FepPKWDHmqqYkczoJAGkcfCveTzAFnJi0AIViuVjv0gfegw0uZTUSLi%2B3PpZhzp8KGIWOvjqiDoBXVYZOXCVZiBMvAr3N6Yg4f%2FlfGJSg%2BrNKM0kOdLJ9MvL%2F%2Fb5p%2F7R3jg7rYc1aB&X-Amz-Signature=8e57e3a309667c513b36e3c25e7766e12aa2ee73226628e95dab14fbb7e75573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
