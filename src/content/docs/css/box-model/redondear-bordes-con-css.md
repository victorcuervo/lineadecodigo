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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNC6PXDJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYuclAYiC2fA4urZcl0F046xysKs5a2aMQdX%2BWggzoKQIhAK4FRgSKgvO6rdM4uVDQHYdG1n8yGpy%2BL%2BH%2F71dKXN73KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp8ve2WquYpADIR0Iq3AOPdb%2B0Bp5wgQ9oeBwPahIRyekcsnK3FX8l45FBLfnpw5kFJ7hYMMuuIDMve2RpP9IpYF2OkCxhOTFqJ3rmWwB7pxIQPj4KB4qFg%2BukAtlpq7g12cFYUoNIcrJA54xLPdWpKTJm6X7RumPYVla9i1%2FHaQsiOgRjCdFPZq1Ka52P9OvXPq5%2BPZpCpP47RZ12VEIs4FlRfouxhh%2FZ0uH9cVK9vHRCf0w413RocbDOfjZ4TTIZOP5CZXbVDLGVnrN%2FlQv40bo6Wc7ft51WHgvwRIRIW9n1HwWKxffTFmTUOm2E%2FNNkCZXHWFyfP4t6pX458aXrvQuIUpit7pYJ0XaPHjgMdK7WQYqIDL0WGy5bRYfBBczXCU1jjG%2Bh9GTAmUGZgIydpG5n4%2BNbsT0dClJxb7flg2Zs%2FhpWU%2FTD62unWCGiXOOJN1N4xLFoEayuPvctbjC1rE7OJOZL8ouprVrgqiLmaaEr15KSJFfRFk7mCiKWzAo4%2F5iyiU6QX1ZO%2BSu5pkFf8aixQIO0jT7%2BwkSydtFuyCKY0RRcZiFXLasNLG1XHszpbGx1E2aMQOOgjvMayE1QwI5kcWwqhFjoU2LxGSBqqjkBLxkLCswZh64YimqPxP7GGllxnDX2N2p8NjCdoIvKBjqkAclmFaGLsSEGyRdrDDen9q5d%2FMCuDm41DgBDIFRpfleMQd8J2MkUHATdWe1yFa2gEcRT5nH5bIx0ToNLQXZy3dx5gx%2FYDsIit1ZFI0043rLhvKdrJIIA3IV30n4dDWj2Glx7SntMiQLS2JmXBiWXt0%2B6n%2B2DtrfZqr1M1f40e2Xo7a9VGnD8i3XlAbjOA4utx%2FNAjqTZVGwY2IdGS09UgKDgCF4Z&X-Amz-Signature=d536407d7e32b154b760e276a7bf213be1141efe5f3186deb1fa5fb46ccc6596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNC6PXDJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYuclAYiC2fA4urZcl0F046xysKs5a2aMQdX%2BWggzoKQIhAK4FRgSKgvO6rdM4uVDQHYdG1n8yGpy%2BL%2BH%2F71dKXN73KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp8ve2WquYpADIR0Iq3AOPdb%2B0Bp5wgQ9oeBwPahIRyekcsnK3FX8l45FBLfnpw5kFJ7hYMMuuIDMve2RpP9IpYF2OkCxhOTFqJ3rmWwB7pxIQPj4KB4qFg%2BukAtlpq7g12cFYUoNIcrJA54xLPdWpKTJm6X7RumPYVla9i1%2FHaQsiOgRjCdFPZq1Ka52P9OvXPq5%2BPZpCpP47RZ12VEIs4FlRfouxhh%2FZ0uH9cVK9vHRCf0w413RocbDOfjZ4TTIZOP5CZXbVDLGVnrN%2FlQv40bo6Wc7ft51WHgvwRIRIW9n1HwWKxffTFmTUOm2E%2FNNkCZXHWFyfP4t6pX458aXrvQuIUpit7pYJ0XaPHjgMdK7WQYqIDL0WGy5bRYfBBczXCU1jjG%2Bh9GTAmUGZgIydpG5n4%2BNbsT0dClJxb7flg2Zs%2FhpWU%2FTD62unWCGiXOOJN1N4xLFoEayuPvctbjC1rE7OJOZL8ouprVrgqiLmaaEr15KSJFfRFk7mCiKWzAo4%2F5iyiU6QX1ZO%2BSu5pkFf8aixQIO0jT7%2BwkSydtFuyCKY0RRcZiFXLasNLG1XHszpbGx1E2aMQOOgjvMayE1QwI5kcWwqhFjoU2LxGSBqqjkBLxkLCswZh64YimqPxP7GGllxnDX2N2p8NjCdoIvKBjqkAclmFaGLsSEGyRdrDDen9q5d%2FMCuDm41DgBDIFRpfleMQd8J2MkUHATdWe1yFa2gEcRT5nH5bIx0ToNLQXZy3dx5gx%2FYDsIit1ZFI0043rLhvKdrJIIA3IV30n4dDWj2Glx7SntMiQLS2JmXBiWXt0%2B6n%2B2DtrfZqr1M1f40e2Xo7a9VGnD8i3XlAbjOA4utx%2FNAjqTZVGwY2IdGS09UgKDgCF4Z&X-Amz-Signature=7dc8cd5502d2a8e531da49ed85250d700b761b76b89dd5c1c9ab3a275f4af5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
