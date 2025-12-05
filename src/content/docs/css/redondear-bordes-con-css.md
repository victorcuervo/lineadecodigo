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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTWYVEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWXvPrPPseqU6shC0JHFD4%2FG98i4O3s8QDRcjUv4JN2gIgT2%2BTqid85R2JMmA4YF7Gw9AbiobuRk26FEmDhbSvf1kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMkQNRLmMeIaDZZesircA1T725o5KvZAuj%2FOcVK%2FY5r4x2LXESCpPhUF8DSl6PZLKALRjGxzDvVzg4LZuEI9dN8kGc259Tq309CRnp3kJyD9QfMe3KefMpCldOfmBJrRnGP%2Fyu8JobsOHTfLT4vkgol%2BZjUyOIkblxFVc3f%2FX8DGIUkYolSZAeVPAUBwLiXzc9AifKUUvAZupUbGCjucvf2GW%2B9T%2BlWgD2xvHh5EZ4q8Dgc%2F1m48CFjN2CHiTzq9YVreku9HOx8LoRnMtvV7pWxJJdHx7SMrWxfU5PTTjITWzDAJQ6taVqdQEBCkfPE%2Bl%2FzUJs%2FO9bkmE0ih3sMqKx1xmVrrxiCJLIoEqalQv18bCJl4IdFobWfjltCn4JIQjWikydz5K5yyCMmJs6Yczx394EM5YZ%2FKZ6FIHKKdQhky4rA0B%2BtwLZQAejPzZb2SA0R4ec4H1UVY777Yw90tJrp5ssV6qNVnqtyPfz%2Bhu%2BkufXhDReLa0998mVweNYfbEUcXNut1aCPfHC7ELo6fJpHqACLt44LJLbuNT36234aE7JZX2o5gJHSma7mnGm9aGg%2FP%2FwI9gwecqXopIzuge%2BP7RVrw1ceY8FxV4WeoXg0KhKedCzpNizZTvsBPQTQu5PUdLyGacMvQDCX1MJzRyskGOqUBCj2wYK1D1OFpL0Gm%2BK7X%2FpvCdvJcK%2BrzRpjLuFRs21hdl1dNyOWZpOpq97Whu16MjMHOlSZg4LqaMdrd60BxufTO9pPJKFGxwnQxe%2FPOa7W4PUPRVKyvT04wDqvyF4YQ8bbfXJhaSJ2OblzRdQuXcVvhhepAV3g%2FK9RX4VsacunAH5qoXWPd47XzegaDy0rlnHKMN8e5KX%2FOZ8SWZvfRqIGBZByG&X-Amz-Signature=c6c0e8d75075196e8af68049fa7c435c57c733ce91434ce484e87ccfc18d426b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTWYVEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWXvPrPPseqU6shC0JHFD4%2FG98i4O3s8QDRcjUv4JN2gIgT2%2BTqid85R2JMmA4YF7Gw9AbiobuRk26FEmDhbSvf1kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMkQNRLmMeIaDZZesircA1T725o5KvZAuj%2FOcVK%2FY5r4x2LXESCpPhUF8DSl6PZLKALRjGxzDvVzg4LZuEI9dN8kGc259Tq309CRnp3kJyD9QfMe3KefMpCldOfmBJrRnGP%2Fyu8JobsOHTfLT4vkgol%2BZjUyOIkblxFVc3f%2FX8DGIUkYolSZAeVPAUBwLiXzc9AifKUUvAZupUbGCjucvf2GW%2B9T%2BlWgD2xvHh5EZ4q8Dgc%2F1m48CFjN2CHiTzq9YVreku9HOx8LoRnMtvV7pWxJJdHx7SMrWxfU5PTTjITWzDAJQ6taVqdQEBCkfPE%2Bl%2FzUJs%2FO9bkmE0ih3sMqKx1xmVrrxiCJLIoEqalQv18bCJl4IdFobWfjltCn4JIQjWikydz5K5yyCMmJs6Yczx394EM5YZ%2FKZ6FIHKKdQhky4rA0B%2BtwLZQAejPzZb2SA0R4ec4H1UVY777Yw90tJrp5ssV6qNVnqtyPfz%2Bhu%2BkufXhDReLa0998mVweNYfbEUcXNut1aCPfHC7ELo6fJpHqACLt44LJLbuNT36234aE7JZX2o5gJHSma7mnGm9aGg%2FP%2FwI9gwecqXopIzuge%2BP7RVrw1ceY8FxV4WeoXg0KhKedCzpNizZTvsBPQTQu5PUdLyGacMvQDCX1MJzRyskGOqUBCj2wYK1D1OFpL0Gm%2BK7X%2FpvCdvJcK%2BrzRpjLuFRs21hdl1dNyOWZpOpq97Whu16MjMHOlSZg4LqaMdrd60BxufTO9pPJKFGxwnQxe%2FPOa7W4PUPRVKyvT04wDqvyF4YQ8bbfXJhaSJ2OblzRdQuXcVvhhepAV3g%2FK9RX4VsacunAH5qoXWPd47XzegaDy0rlnHKMN8e5KX%2FOZ8SWZvfRqIGBZByG&X-Amz-Signature=9a76e40c065a3d0f236adcc35e9f227163bf16f32f043631e3d0d382a9502735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
