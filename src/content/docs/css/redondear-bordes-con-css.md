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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHK6BX5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEelQnpMz45mb%2F1koxOzwRZr1U2rEdtSosGy%2Fix1nZt%2BAiAl3PcInfD27id%2BmgOT0fwStskdK5JDprIfz%2FtLJv%2BVyCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngULe6ffTxbFRFF1KtwDXH31r8ULfvVM6CFZVtkIv3UrUfrDZAc6Y2zcGGP2CfOjuz5EzD2Z3Y48pC7WFFryqHgT3%2F9QvPa%2FirVnUTFHGaeCo9FG49hsck4JTZ4G87bhCA7hoYLarVB7mtk0rWtfMooqMQbmiGEALwZkr3YkV06KFqoYrErEUMMURI0UkHxGTCRElW5fmZsnThhYcWV7WBKv%2BqJ7x5%2Fu5tQTCG4P9LMQ9igq16mMLDuCZYHv2RD6o5e0sKzeb82NTYVQpjB8zmz3AHB7Q%2FfFkR3dXUHb851fagU1yIPgk0eNUqAqbs5Kstq8Pfoz698PPWF7OSnldUDN0RdnxWZp35V4SQdbz3phMTfxxwA4y%2FwBxEl%2FcyrHSvAsEqiU9Jl3LF%2B6oDDph%2BAJeFldxloUxANZQVP7IiCYbB%2BBD7seKmf%2Bkf1FCbbdE8iFDXfYclHA7PWqM1zbC5cfC5n4j%2B8Y%2FbMDw7%2F6GwkbP%2BAq6ILDZmcXlaXk%2FAB%2FeTbbkA4NypxaD4Skct%2FtY2siAsnoy1eMbclxBZH6LrMSwE4F%2BZRPwXPiErZ2%2BdEToavmzd8U4br6%2BrjEPwVPw5hu2bzQpQuNdJD6iEzb1pG7KKKEOs8tKolTOIPxk8UhyvIZUpL7U2zTRo4wquTbyQY6pgGY%2F6FBaEvV%2FpDYPg6%2FCOhoUIwyg1v23e7fCxx56iCoOH9MKJmu%2FPO6dXUEkSwtnsSEwP0Ag%2FDlS86ZV0Tj1BKk2xYbGxm8fAytybxAnOg5SHtff855OCyn1R5DqqBmR7s68RSFLmuj0xmhJx3u3AWjaf29OpU6tLP%2FkHX8nb9sRT8SX6QKQdlv8deYhJ3MlwNX07kAsle7UBUStqhbYOZ69DvLRmzq&X-Amz-Signature=da8a4cc4bc468423e392881db65d915c12efb825039ca34a63c55f2d7e3ae497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHK6BX5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEelQnpMz45mb%2F1koxOzwRZr1U2rEdtSosGy%2Fix1nZt%2BAiAl3PcInfD27id%2BmgOT0fwStskdK5JDprIfz%2FtLJv%2BVyCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngULe6ffTxbFRFF1KtwDXH31r8ULfvVM6CFZVtkIv3UrUfrDZAc6Y2zcGGP2CfOjuz5EzD2Z3Y48pC7WFFryqHgT3%2F9QvPa%2FirVnUTFHGaeCo9FG49hsck4JTZ4G87bhCA7hoYLarVB7mtk0rWtfMooqMQbmiGEALwZkr3YkV06KFqoYrErEUMMURI0UkHxGTCRElW5fmZsnThhYcWV7WBKv%2BqJ7x5%2Fu5tQTCG4P9LMQ9igq16mMLDuCZYHv2RD6o5e0sKzeb82NTYVQpjB8zmz3AHB7Q%2FfFkR3dXUHb851fagU1yIPgk0eNUqAqbs5Kstq8Pfoz698PPWF7OSnldUDN0RdnxWZp35V4SQdbz3phMTfxxwA4y%2FwBxEl%2FcyrHSvAsEqiU9Jl3LF%2B6oDDph%2BAJeFldxloUxANZQVP7IiCYbB%2BBD7seKmf%2Bkf1FCbbdE8iFDXfYclHA7PWqM1zbC5cfC5n4j%2B8Y%2FbMDw7%2F6GwkbP%2BAq6ILDZmcXlaXk%2FAB%2FeTbbkA4NypxaD4Skct%2FtY2siAsnoy1eMbclxBZH6LrMSwE4F%2BZRPwXPiErZ2%2BdEToavmzd8U4br6%2BrjEPwVPw5hu2bzQpQuNdJD6iEzb1pG7KKKEOs8tKolTOIPxk8UhyvIZUpL7U2zTRo4wquTbyQY6pgGY%2F6FBaEvV%2FpDYPg6%2FCOhoUIwyg1v23e7fCxx56iCoOH9MKJmu%2FPO6dXUEkSwtnsSEwP0Ag%2FDlS86ZV0Tj1BKk2xYbGxm8fAytybxAnOg5SHtff855OCyn1R5DqqBmR7s68RSFLmuj0xmhJx3u3AWjaf29OpU6tLP%2FkHX8nb9sRT8SX6QKQdlv8deYhJ3MlwNX07kAsle7UBUStqhbYOZ69DvLRmzq&X-Amz-Signature=64c48efccafa1378cb48dab9b6fee5ac879b35a2e8aee78887167414e9a9d689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
