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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4D3DTB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA82KUiSADlO3B0QM8JYu%2BnkFVYhtXf1289mDgUEX9YQAiBluLYtREIrK2GiexQM8EcRGCN2fWff8VeSOmHEU4WQ6CqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0xLUJvgR8PotPiNKtwDgpD5kfqdpJDMu%2B98wU42LspKGuMYJ6SEzs5iZUiRXEE78%2F2xmPjEFAf1UrbCqOXcZTWv%2FwuudvG3Ohic0oyBMRGZSkiYbrSpns4eHjRddmIZMCiyPLUjn5PxQQDal%2B%2FUdhhJTrUl5TzKqXLiw5Unk4JaRpuqledBIScfI1hHd%2BWxPYEA66ivI17bAM3Njl6W%2B1VpEVNPi63wNvh%2FuFy5pVVkx3JgWSjjavGdxqOXuBr7qP%2BLJJMjGxnux3A4Py%2FIzcfCQDYoPUKXt2kPHTil3N0CSM3Ga14KpMETWhn5JRkf9QPHfO%2Bfdy%2BWMyC0M3nwbhlaO1Ref5oqW3z9mtFc%2FreXayL0p3QLJnU2C6%2Fu%2BvxSWDDzvKjTTHqr3CIL2%2BOuOmQ8FQ3Ar6S3ZmonRXZUgAkZ41o861ajoLHDdIWVAjuHT8OW%2FZg9Yf5hauJtEDREBxig%2Bm%2Be4pzyiawbAaMMEUBDO1VcIp6brajstI58gM0oi9HNgKeLO9uym5EBlY%2FMvp1uOgRbTfoUkNcxPZxhR8Ib0np6nwlxUKBabintfFvzKWWKoXTZ9CIDj9h%2BJMXnX5UbxnQ9HebrTSl7Grn8cYQn2L%2FfNqFhkFaXbje4z3GLuqERHz2mqIGp7MQw7ITYyQY6pgHvjQdS8dJ6%2B1r0Tk2%2Bbl548CVK828SdxvH4IJbGSVTIT3KckNF6WKxpKhtpYr%2Ba%2BU%2FjGPNds0FKWIHAA4rO9SmD4Zr1GIKbx4Pw104VKwI1pbNV4r9CagYeF6rJcWSs7gCdKO%2BXKZckN7zkfW%2Fslssb51JF9s3IMGdzJ5%2Fwf7viyo1HEBlYUQ2GXnYvmiQFB7QtWRtcmwE5Fi1Nel0CDeU9cADB5%2FV&X-Amz-Signature=c6dc64a91ff100befddfebd2913ab45e93227836a85ee3d63eb661a665b79141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4D3DTB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA82KUiSADlO3B0QM8JYu%2BnkFVYhtXf1289mDgUEX9YQAiBluLYtREIrK2GiexQM8EcRGCN2fWff8VeSOmHEU4WQ6CqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0xLUJvgR8PotPiNKtwDgpD5kfqdpJDMu%2B98wU42LspKGuMYJ6SEzs5iZUiRXEE78%2F2xmPjEFAf1UrbCqOXcZTWv%2FwuudvG3Ohic0oyBMRGZSkiYbrSpns4eHjRddmIZMCiyPLUjn5PxQQDal%2B%2FUdhhJTrUl5TzKqXLiw5Unk4JaRpuqledBIScfI1hHd%2BWxPYEA66ivI17bAM3Njl6W%2B1VpEVNPi63wNvh%2FuFy5pVVkx3JgWSjjavGdxqOXuBr7qP%2BLJJMjGxnux3A4Py%2FIzcfCQDYoPUKXt2kPHTil3N0CSM3Ga14KpMETWhn5JRkf9QPHfO%2Bfdy%2BWMyC0M3nwbhlaO1Ref5oqW3z9mtFc%2FreXayL0p3QLJnU2C6%2Fu%2BvxSWDDzvKjTTHqr3CIL2%2BOuOmQ8FQ3Ar6S3ZmonRXZUgAkZ41o861ajoLHDdIWVAjuHT8OW%2FZg9Yf5hauJtEDREBxig%2Bm%2Be4pzyiawbAaMMEUBDO1VcIp6brajstI58gM0oi9HNgKeLO9uym5EBlY%2FMvp1uOgRbTfoUkNcxPZxhR8Ib0np6nwlxUKBabintfFvzKWWKoXTZ9CIDj9h%2BJMXnX5UbxnQ9HebrTSl7Grn8cYQn2L%2FfNqFhkFaXbje4z3GLuqERHz2mqIGp7MQw7ITYyQY6pgHvjQdS8dJ6%2B1r0Tk2%2Bbl548CVK828SdxvH4IJbGSVTIT3KckNF6WKxpKhtpYr%2Ba%2BU%2FjGPNds0FKWIHAA4rO9SmD4Zr1GIKbx4Pw104VKwI1pbNV4r9CagYeF6rJcWSs7gCdKO%2BXKZckN7zkfW%2Fslssb51JF9s3IMGdzJ5%2Fwf7viyo1HEBlYUQ2GXnYvmiQFB7QtWRtcmwE5Fi1Nel0CDeU9cADB5%2FV&X-Amz-Signature=fa50ba4835fc08ea98ce8104ac794228c38ead1a460178be060c2eedcee4cb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
