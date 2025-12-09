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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQPOJYS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJQC%2BBEqGbxAlfT7SzMStwLByo0gt9HLZ3rOhNBXsIZAiEA2uClhhf7hCyfRPfaCCiMgdwGivslRitNxgbi6d22IbsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlj7fIw%2FmHQy80jsCrcA2%2FmAxKvLAahELi2pOFRJERd6sz%2FZqfXNdKVrUrXoq0E8SOR4U4nwHxYjCd6o96syMOgnesCFUkNfL8LN0VZx%2BjelfG%2FJi%2FdqRSjhzmMxB%2F%2B2NPt5dCqmzCQg15Za1Pe%2BMcTVmtl88gxl1SHfTwowpYILEgZmvYZS99rHqR4pF%2Bsq7RHJzuoEhlmslt0yZhWD2a4oHaDf0JImgm0DYXOUVSkHQNFA6Nida3vKZtABuCMJLVAzfRy4L0Ai7c3Pq8i0xiN6t7rFWU5Xy9h0i%2B16FMS6kDbKAWpUOjklk2YnIbKmQo4DFEJGNMP37SQedNR6%2FDwynsUP1GJsdk4lVuNNIsSElCdz3NkABIhuqqZSaL24AYSVkA9VxXvuxD0riKKCkxisydwrF319BAeTcbwskaCd3h5e2iOjxmH%2F8PZwQdRRPx75MMxoxycX1YfwWghC89iHBJLvB8RqY3goIyyW7OKAiIhXqzPei9A3mYa0cp1W1hK3VXudUCGiqlJ%2BVj33uQYfOPDDQNttNJwr2G1yXnbVcK%2BFr1%2BdxERb%2BWx1W3%2Bm3W3iQWme0JA5Ma3j4CEMt1R4b%2FJyc%2FsC3BdyRl9WxV6uIhEEAfl6S8vLyoV8oEfcFew5Z6vIZTC5TLxMMWk38kGOqUB%2BuKEcZpm8zuHZE0iMxT7CE5p4SCbe4Q2SEH3KudIMpuZpwvFX2YJNe%2FWLGK6gxbMYLOjIUMXhVl6x8zTS6%2FGflpzxd5JxsGsI1bwYSUPPTwF73smOiDJV95lMK4ptsvTObR5FDBdlGvmF15Ogrx0cXuFwd6zLSHaQNSwRldgEBikC0szicgnOBKsFa9wCOrSpW8fTwFnIKIEsNFspXzyqhgL7V8V&X-Amz-Signature=ddbb9688d37dd1abc3beb4e81b314aed138cb006e23d1e6c46e7de2473be587a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQPOJYS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJQC%2BBEqGbxAlfT7SzMStwLByo0gt9HLZ3rOhNBXsIZAiEA2uClhhf7hCyfRPfaCCiMgdwGivslRitNxgbi6d22IbsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlj7fIw%2FmHQy80jsCrcA2%2FmAxKvLAahELi2pOFRJERd6sz%2FZqfXNdKVrUrXoq0E8SOR4U4nwHxYjCd6o96syMOgnesCFUkNfL8LN0VZx%2BjelfG%2FJi%2FdqRSjhzmMxB%2F%2B2NPt5dCqmzCQg15Za1Pe%2BMcTVmtl88gxl1SHfTwowpYILEgZmvYZS99rHqR4pF%2Bsq7RHJzuoEhlmslt0yZhWD2a4oHaDf0JImgm0DYXOUVSkHQNFA6Nida3vKZtABuCMJLVAzfRy4L0Ai7c3Pq8i0xiN6t7rFWU5Xy9h0i%2B16FMS6kDbKAWpUOjklk2YnIbKmQo4DFEJGNMP37SQedNR6%2FDwynsUP1GJsdk4lVuNNIsSElCdz3NkABIhuqqZSaL24AYSVkA9VxXvuxD0riKKCkxisydwrF319BAeTcbwskaCd3h5e2iOjxmH%2F8PZwQdRRPx75MMxoxycX1YfwWghC89iHBJLvB8RqY3goIyyW7OKAiIhXqzPei9A3mYa0cp1W1hK3VXudUCGiqlJ%2BVj33uQYfOPDDQNttNJwr2G1yXnbVcK%2BFr1%2BdxERb%2BWx1W3%2Bm3W3iQWme0JA5Ma3j4CEMt1R4b%2FJyc%2FsC3BdyRl9WxV6uIhEEAfl6S8vLyoV8oEfcFew5Z6vIZTC5TLxMMWk38kGOqUB%2BuKEcZpm8zuHZE0iMxT7CE5p4SCbe4Q2SEH3KudIMpuZpwvFX2YJNe%2FWLGK6gxbMYLOjIUMXhVl6x8zTS6%2FGflpzxd5JxsGsI1bwYSUPPTwF73smOiDJV95lMK4ptsvTObR5FDBdlGvmF15Ogrx0cXuFwd6zLSHaQNSwRldgEBikC0szicgnOBKsFa9wCOrSpW8fTwFnIKIEsNFspXzyqhgL7V8V&X-Amz-Signature=e983d7d324e25ce192893ed58a46f34ea1ec750f447bbf50b11b895a25b60ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
