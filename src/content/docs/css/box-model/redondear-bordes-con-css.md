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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIQAUED%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKLuCPUFh%2FfnSPzsC%2BfLz4XLi%2ByPxzSmpJLrdvgQv0wAiBrEp%2BpRhhp1RNkaapoycWSkmLivk4sSuCKOdcLNqz3HCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMwZrYFRd8M6Rygj4nKtwDGgODE518%2B0LwPc7%2FB25gX4uTjeA%2B2OeU0BN71wmUfgXrueeZFXsKOWs9vbRvjGj2wZl%2BUsI7THjQuFhzE4w43U4mgUPEZANjj6xU0wrC5cbKHi91mqwHA%2Bspz3EJz73N%2BuuRVUvIursI9iCcqlpaKGfu2LzBdylQRIXOjREtadiznI7BwO4fr8Mf8SYRe6JD6l%2FThysY2GPuG04ls5w2v3w3%2FAt2ZIACCAr6NqvH0U%2FptbChA3az%2FJx4TZtGhc3ZubVmjCzDtOmuo4i%2B5iwUNiRWh%2BFV4ClbuRQCCn1rvGU0AqsN0a2QizShMivyoZzKqkTo6V2nLVFiobPcNIHP7%2FsnyntbzbEVzGohvBe6VEAcuLjybPDA%2BH04nO%2FjQ%2B2is0iM4Cia9j0ZNBbzTV5jQlQjG79WqvpTcXA8ThlIgTFvnfcyiXXnuXNe9HInDRb%2F%2BD2xLYZbQdx4xpeDJABJY7Sl28MBJClrW90da2GbtIV3hR5DPXXFP6v6hLDfoLyN9Ql9qUcMl89dHepWzklCEgRus%2BZPJEC6TNagg3xq2dipmiMd4PsF0g84Z8WNqAxLUND69bpxN0TWRU5k2J7OQvTiguj4EzxzLpKoEhyud01UQbaQNu0aDUwPIFow2%2BmIygY6pgHRdTulaZ2isXWTTWaFEptvnhsI397OVv2jTn5FFFi0I5Hxc9Kq%2BEunqh9RFor3zfoItOLFIVsFcokm4xe8QojAEzznYv%2FzWg2O%2BhBqQsdCFMovFz%2BktkCuuxczx9dUBeGsCpxLqWicfaOrP1yjIxhahfg30LgwMge7O1mYrFaL5Z8ddSKA1UpRppGqgtyzkGDN1RqD3Pt4sPpxIWhpeVw6CjIVcvQ1&X-Amz-Signature=d892b4f4ec0ab6d0c66e68051cc1e389b1c65a486ceacf2894ecf5124841c7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIQAUED%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKLuCPUFh%2FfnSPzsC%2BfLz4XLi%2ByPxzSmpJLrdvgQv0wAiBrEp%2BpRhhp1RNkaapoycWSkmLivk4sSuCKOdcLNqz3HCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMwZrYFRd8M6Rygj4nKtwDGgODE518%2B0LwPc7%2FB25gX4uTjeA%2B2OeU0BN71wmUfgXrueeZFXsKOWs9vbRvjGj2wZl%2BUsI7THjQuFhzE4w43U4mgUPEZANjj6xU0wrC5cbKHi91mqwHA%2Bspz3EJz73N%2BuuRVUvIursI9iCcqlpaKGfu2LzBdylQRIXOjREtadiznI7BwO4fr8Mf8SYRe6JD6l%2FThysY2GPuG04ls5w2v3w3%2FAt2ZIACCAr6NqvH0U%2FptbChA3az%2FJx4TZtGhc3ZubVmjCzDtOmuo4i%2B5iwUNiRWh%2BFV4ClbuRQCCn1rvGU0AqsN0a2QizShMivyoZzKqkTo6V2nLVFiobPcNIHP7%2FsnyntbzbEVzGohvBe6VEAcuLjybPDA%2BH04nO%2FjQ%2B2is0iM4Cia9j0ZNBbzTV5jQlQjG79WqvpTcXA8ThlIgTFvnfcyiXXnuXNe9HInDRb%2F%2BD2xLYZbQdx4xpeDJABJY7Sl28MBJClrW90da2GbtIV3hR5DPXXFP6v6hLDfoLyN9Ql9qUcMl89dHepWzklCEgRus%2BZPJEC6TNagg3xq2dipmiMd4PsF0g84Z8WNqAxLUND69bpxN0TWRU5k2J7OQvTiguj4EzxzLpKoEhyud01UQbaQNu0aDUwPIFow2%2BmIygY6pgHRdTulaZ2isXWTTWaFEptvnhsI397OVv2jTn5FFFi0I5Hxc9Kq%2BEunqh9RFor3zfoItOLFIVsFcokm4xe8QojAEzznYv%2FzWg2O%2BhBqQsdCFMovFz%2BktkCuuxczx9dUBeGsCpxLqWicfaOrP1yjIxhahfg30LgwMge7O1mYrFaL5Z8ddSKA1UpRppGqgtyzkGDN1RqD3Pt4sPpxIWhpeVw6CjIVcvQ1&X-Amz-Signature=d09168d157db753af5224ca2fd9b3f0e3a9b3e2d32199aa6fa43d478a6f5b53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
