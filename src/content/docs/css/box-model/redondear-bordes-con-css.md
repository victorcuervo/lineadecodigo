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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NTLYMD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH21VUFGr6QD7ozD%2FIfaG1se5RuyUKQj1L80AhaC7QlYAiBR0MQJYjF880C5EKfbp0%2BoThj9gQcM3GKWPU6VmU7tESr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMst2XB6Vu254uwhISKtwDsZ%2FsCv%2FNylpFzHtJam3oohAVlqFI2PBi1V5mLy4bxvtnQ0KHpdQVTW69RPmWNMvakhIoUZcVso1mlI4aMMgtbGiHWr4c57kGQzTpMQHTh3Vl%2BTz%2BbrA5zEHE%2Baxb1DutiNA4zMxPjTLV%2B9XOFzr69Kl6MKUDUU9jBvwncfbTqsZrkIFVYEY%2B%2BaI8OeMXvud627yEVCA2IH%2FE0hTRQshqjBg0g23DuaEZhlRg0pggnRTnsTEEwNcDww2W66U0YFbrZIFSQ2nVlAbjiaT4OrVKmzQU4XfdsjH9vxsIqoCazqiRWPZa4ip6goAf4B7e%2BqjVRe9NQuZn3t%2BoFPzSLaFVB8mMupMKBbQ8b16FfNcQ0gpzRkShKg9FefFLJbIinSYMpM49ywxa0qiMIyQkITD12M%2Fq4zLrOyUzoe%2FbxpwbQjAm9jJCdN35eadfWdfWA%2BVBKOO2bTivGSiFd0vxBsG8RUXAwwI6AoZoLnArMCLXW3o%2F8ZwZpx5dEX%2BzvrsD0ioRd1Xo%2FYM0vg4t%2Bd7waCORS%2BrKtMVlgPSPVtswJoE9nF0%2FgzkPqfs7VI6kXFi6wwhLBJK5Fm96w7AHLU7gdGQQ3ND9WBcikCzd5shAumzM%2F3yDVYktBE1H2VrsqyQw7fCJygY6pgHo2ro1VoiBbSgnRmoh1EeL5oijwEXhIwbpFGNo6Xmwv8yQ97U%2FJZjT%2BqQEOB5aLNV3bXDke3rc7s5xGoKsyGf4Io30glHEUa7263YSt%2BQJl6BTcfHxZuq2qyykUnTixoq3q6lfNyHg4TxT6Szwn6Myvtbg3Cc%2Ba4vMVjsTVYYjDSBSt7SdYsUrTjAYTMN7W4U11e70gbBGWSBEeIcxv4AqYMEs6Oz8&X-Amz-Signature=4a2f6bade82cc554a839ade4663bed2bfba6293c4286d8c2ec3ee79d2aa073e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NTLYMD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH21VUFGr6QD7ozD%2FIfaG1se5RuyUKQj1L80AhaC7QlYAiBR0MQJYjF880C5EKfbp0%2BoThj9gQcM3GKWPU6VmU7tESr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMst2XB6Vu254uwhISKtwDsZ%2FsCv%2FNylpFzHtJam3oohAVlqFI2PBi1V5mLy4bxvtnQ0KHpdQVTW69RPmWNMvakhIoUZcVso1mlI4aMMgtbGiHWr4c57kGQzTpMQHTh3Vl%2BTz%2BbrA5zEHE%2Baxb1DutiNA4zMxPjTLV%2B9XOFzr69Kl6MKUDUU9jBvwncfbTqsZrkIFVYEY%2B%2BaI8OeMXvud627yEVCA2IH%2FE0hTRQshqjBg0g23DuaEZhlRg0pggnRTnsTEEwNcDww2W66U0YFbrZIFSQ2nVlAbjiaT4OrVKmzQU4XfdsjH9vxsIqoCazqiRWPZa4ip6goAf4B7e%2BqjVRe9NQuZn3t%2BoFPzSLaFVB8mMupMKBbQ8b16FfNcQ0gpzRkShKg9FefFLJbIinSYMpM49ywxa0qiMIyQkITD12M%2Fq4zLrOyUzoe%2FbxpwbQjAm9jJCdN35eadfWdfWA%2BVBKOO2bTivGSiFd0vxBsG8RUXAwwI6AoZoLnArMCLXW3o%2F8ZwZpx5dEX%2BzvrsD0ioRd1Xo%2FYM0vg4t%2Bd7waCORS%2BrKtMVlgPSPVtswJoE9nF0%2FgzkPqfs7VI6kXFi6wwhLBJK5Fm96w7AHLU7gdGQQ3ND9WBcikCzd5shAumzM%2F3yDVYktBE1H2VrsqyQw7fCJygY6pgHo2ro1VoiBbSgnRmoh1EeL5oijwEXhIwbpFGNo6Xmwv8yQ97U%2FJZjT%2BqQEOB5aLNV3bXDke3rc7s5xGoKsyGf4Io30glHEUa7263YSt%2BQJl6BTcfHxZuq2qyykUnTixoq3q6lfNyHg4TxT6Szwn6Myvtbg3Cc%2Ba4vMVjsTVYYjDSBSt7SdYsUrTjAYTMN7W4U11e70gbBGWSBEeIcxv4AqYMEs6Oz8&X-Amz-Signature=ede2e9bc1695ca775fcecf91e6037d4d8751d78718c3b49b6b94fd6ef87446e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
