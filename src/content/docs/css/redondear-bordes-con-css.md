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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NLJOEK6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ975vGep0M4VhgJjtNL8KTPmWQk%2B%2B%2BMpoAJpx4mksfAiBKHhoKXnYuG97KUaE7kpUbBdjLVy9X5IMaWb8NgbIDLCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHz4Z49fG6gpRZC8iKtwD9hQdD9b2XOM88rBrnkXCkvBOjjfl7nnBtv6ICvgSK4vSBiO3JYB5DaYbqvQlZhJrQJaAQXeKxYPS4pQANU%2BGw3Yrgx9OXz83LKYArCZhY3b%2F%2BT7wnL7wyEahHA5mEK6Ijs4%2FolzzfRq%2Fk4IcJ4Yqcx8%2BsyVbyzZ3DmzEG0Un5JYdw8DlNN7tb8VryclNfGPG0z%2Ffk1zbR5%2FCEAALrzBvu941GaIT6G%2FwvLsFJPda2jj3V8wOvYIaKJOjo5gIV0SFXqAr66qCafEE1JDNspHGIAsk5Eb%2BP%2BTJlhDMd1hv2SO0yb8%2BHzy90CaqyIcf4Usroz1tDpKmLqi4SF%2FIjSLGovz%2BTaodOaYq9HXQrRzJHd%2Be0wRzDxtDtJWOPoTeOnJbl0HLrEz8y0jMlNrE0k0%2FMjwRWKkKzgfS6uoqb9Yg681TSu0qVNLEwpMFn68I3JdV2MbB9xczfZ8osAfCbyszZBprj18LkiFTXgXGqqktVQNk3EXI3P92dRwBBIyKRa9oM9G20Xomy1OXX3c4GV1JNbqvsx2TSUI5DAndN%2F5gxUSMMsuf5IQilZXXRXjmNJ8uDNkcbOD%2FrviQqK7IeJL%2BOmchmblY7uDpx%2BFY%2BHCIyBM3lEU1tFyQpbZwY9QwiJ%2FPyQY6pgHuJCfFGbYBCuneoVNR%2B6SXY3Xv9Y4IBBvJfCe%2FxixcEln8skYKvjLrCdSYSAAPV%2BUwMDo6kst3hSLgiljSBLoIEo5fELLkcMA%2B5aFf3nSCRgGH8uQJmUvJP4Q2YO5R2Ey%2BCoeHroP%2B7KauCBPz1c%2BTti9NdA7el%2B3VQvFVRJacMpZRwPPtXE3sVrdpnLppp%2Bf5IRLlCWSOhD8pliePWeZik6APY5r8&X-Amz-Signature=b3a2e8c28f6f6d85733ed0cb0f77de0afa49d64a633d446ab814feb4cc997a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NLJOEK6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ975vGep0M4VhgJjtNL8KTPmWQk%2B%2B%2BMpoAJpx4mksfAiBKHhoKXnYuG97KUaE7kpUbBdjLVy9X5IMaWb8NgbIDLCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHz4Z49fG6gpRZC8iKtwD9hQdD9b2XOM88rBrnkXCkvBOjjfl7nnBtv6ICvgSK4vSBiO3JYB5DaYbqvQlZhJrQJaAQXeKxYPS4pQANU%2BGw3Yrgx9OXz83LKYArCZhY3b%2F%2BT7wnL7wyEahHA5mEK6Ijs4%2FolzzfRq%2Fk4IcJ4Yqcx8%2BsyVbyzZ3DmzEG0Un5JYdw8DlNN7tb8VryclNfGPG0z%2Ffk1zbR5%2FCEAALrzBvu941GaIT6G%2FwvLsFJPda2jj3V8wOvYIaKJOjo5gIV0SFXqAr66qCafEE1JDNspHGIAsk5Eb%2BP%2BTJlhDMd1hv2SO0yb8%2BHzy90CaqyIcf4Usroz1tDpKmLqi4SF%2FIjSLGovz%2BTaodOaYq9HXQrRzJHd%2Be0wRzDxtDtJWOPoTeOnJbl0HLrEz8y0jMlNrE0k0%2FMjwRWKkKzgfS6uoqb9Yg681TSu0qVNLEwpMFn68I3JdV2MbB9xczfZ8osAfCbyszZBprj18LkiFTXgXGqqktVQNk3EXI3P92dRwBBIyKRa9oM9G20Xomy1OXX3c4GV1JNbqvsx2TSUI5DAndN%2F5gxUSMMsuf5IQilZXXRXjmNJ8uDNkcbOD%2FrviQqK7IeJL%2BOmchmblY7uDpx%2BFY%2BHCIyBM3lEU1tFyQpbZwY9QwiJ%2FPyQY6pgHuJCfFGbYBCuneoVNR%2B6SXY3Xv9Y4IBBvJfCe%2FxixcEln8skYKvjLrCdSYSAAPV%2BUwMDo6kst3hSLgiljSBLoIEo5fELLkcMA%2B5aFf3nSCRgGH8uQJmUvJP4Q2YO5R2Ey%2BCoeHroP%2B7KauCBPz1c%2BTti9NdA7el%2B3VQvFVRJacMpZRwPPtXE3sVrdpnLppp%2Bf5IRLlCWSOhD8pliePWeZik6APY5r8&X-Amz-Signature=6fd7212c90fbd2e1b5d1c07c60472c962cc8a535122f926969d84bf45b2c2511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
