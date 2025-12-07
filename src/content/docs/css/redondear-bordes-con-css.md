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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JR56WZO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVXgc0PdCerarFqj64LRax%2BYbdZ5Ci9AZBTRdhjeGc5AiEAtDgUwPSyGwWOQZYZM0TN0IP8ratG%2BoEXe72COK1krwwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwUdfv1sQFCqHSRgCrcA4oDKf856kiBZ6LzsaEDpdVLXzPF1sNKoz1bwyfwhRWZWKHQEhsnU3N%2Bk%2FCHxfFpVZrC8VOU5pRKUJWo9%2BrRUVUtzA1yFqb7c8Ue9vsG2gD4cZYPctLgkny7W85hnHZMvdJ0jdN8OWlbYKAnd3JfgV8wkkyZiqEAd4Ar7gU4aewRCIQxGO%2FfS4udJSPcGSjxQ%2FCToaM%2FQJuUSwSNWqfada1K9xpkDL7axs18uUOyIykVz3OsuHGJdqs1Kse5pn2nfWBKq5%2FNuCInUcsklYmfvltMX0RJQoy%2BTzM7Zx3x74lseD0KhPRbcTdOK%2FN8%2BZhtOwYnFtFcEiHSQcd%2B9SjgPHyjCT%2BpVVYPpmuzBSgAgG9tgJTKJrtYUcxerlWsJF%2BgRU5tCdMPq0tImX8uqp%2FNG5sRR4HGKbFLG38t2nFKEitSqHQIU%2B3v%2BANn0BSfqAq8Jg6WCTtki5uFZ%2F9AzYy7XBpqKUsIg0jvEVvvF34UI2M1DqVymwYI9pQLmqr%2FZiJTGnKSUQRYG9NSiwc%2F7YO%2Bf3Rg1WXpkbkwErqwvmlm1vNuoUSzzPrKJXwgw3ZfQ%2FnxwWw3dySvZEkFC7l5hHPg0vSbYwEl2%2B95EhFXwYilah%2FsCcGA%2BwJrES%2BuQJ9DMPXH18kGOqUBOI%2BbXiZYk7giX%2Fc3yU7ZaEOdobflPN9UXghkOxnz6164TIMKqqytIE4FDW9jyKC6GLCioKHbnMYPqWgyPCUf%2Fno4zLBeHYT%2FcLf%2FheVubMCYyp2WSgkV%2Bva66aNY8Zc7yURGxsNp%2B4XfPHdax%2BItxqBBDeT1mReXvn1NC4avYQZPkZ0LlC6BYdMrT34wbylZz9mHnbySQMcMMrfYQ3RxO8WdNOsv&X-Amz-Signature=83a2956e606a6512ec19c2957d5ea4bb3c890108f90851f3c05afe546c1be4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JR56WZO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVXgc0PdCerarFqj64LRax%2BYbdZ5Ci9AZBTRdhjeGc5AiEAtDgUwPSyGwWOQZYZM0TN0IP8ratG%2BoEXe72COK1krwwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwUdfv1sQFCqHSRgCrcA4oDKf856kiBZ6LzsaEDpdVLXzPF1sNKoz1bwyfwhRWZWKHQEhsnU3N%2Bk%2FCHxfFpVZrC8VOU5pRKUJWo9%2BrRUVUtzA1yFqb7c8Ue9vsG2gD4cZYPctLgkny7W85hnHZMvdJ0jdN8OWlbYKAnd3JfgV8wkkyZiqEAd4Ar7gU4aewRCIQxGO%2FfS4udJSPcGSjxQ%2FCToaM%2FQJuUSwSNWqfada1K9xpkDL7axs18uUOyIykVz3OsuHGJdqs1Kse5pn2nfWBKq5%2FNuCInUcsklYmfvltMX0RJQoy%2BTzM7Zx3x74lseD0KhPRbcTdOK%2FN8%2BZhtOwYnFtFcEiHSQcd%2B9SjgPHyjCT%2BpVVYPpmuzBSgAgG9tgJTKJrtYUcxerlWsJF%2BgRU5tCdMPq0tImX8uqp%2FNG5sRR4HGKbFLG38t2nFKEitSqHQIU%2B3v%2BANn0BSfqAq8Jg6WCTtki5uFZ%2F9AzYy7XBpqKUsIg0jvEVvvF34UI2M1DqVymwYI9pQLmqr%2FZiJTGnKSUQRYG9NSiwc%2F7YO%2Bf3Rg1WXpkbkwErqwvmlm1vNuoUSzzPrKJXwgw3ZfQ%2FnxwWw3dySvZEkFC7l5hHPg0vSbYwEl2%2B95EhFXwYilah%2FsCcGA%2BwJrES%2BuQJ9DMPXH18kGOqUBOI%2BbXiZYk7giX%2Fc3yU7ZaEOdobflPN9UXghkOxnz6164TIMKqqytIE4FDW9jyKC6GLCioKHbnMYPqWgyPCUf%2Fno4zLBeHYT%2FcLf%2FheVubMCYyp2WSgkV%2Bva66aNY8Zc7yURGxsNp%2B4XfPHdax%2BItxqBBDeT1mReXvn1NC4avYQZPkZ0LlC6BYdMrT34wbylZz9mHnbySQMcMMrfYQ3RxO8WdNOsv&X-Amz-Signature=92ec3838f49991b2e00e7654a8329b88796527a368e3820dca5d4b6ff4e16c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
