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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636A2YSUB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiGXxtFzt%2FryOWnWHc0yu7s%2Fj%2F2x%2F2UwG9%2F8WQ3m8sxAiAXP5S9SAwbhgigdCTtwJvZnvO4I4mfkoe9ghcXXkSTPyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmgspU8sGUgFRbEMSKtwDB3TBeocfj30PwC1QA0YAxyuI7VfsXAeetHy5yiSSyXOIppKM%2FwBIw%2BHFmcr4yMu3ENfCFlihIsMl22euXB5rGJO8pyZu5GszMvn6M9MACc89zVDppZvc2XOlNHFqX3tdQxwr3t7D9b7GMbKR%2FC08n%2Bd46ggHxM3kcsSS%2Fe7LyEELAnQPNEAXLvp6p3YCysQ5FDvYfxv6bxcuz7s3i4B9%2BCrkrl0gKWkOYMk4%2Fr%2F4pVsHnVA239gsHtFuCOSCvC9ivdno7BZULfL8uMXizq2M1ufbSTrAcJbOYc6rM51fYe7W8snz0%2BLlGAece%2FTcegjwj%2BET9uq017ChzpZtaf6ZMgl1mM6koE0U8cBCvKh56P%2FO%2FFgXQxzsgpEFx0tsDm3mTRpEIN7jmXDhGhheWnU9Dx6Ef9DlzH1a6VHd2GLaEdPD53uf1QSVBYMQcLPR6tDjpD2g8PrEq9HJiVn1rOVIdhfSqGa3vLQDB1A3MMapSeK%2FGOAQnAz34NOwPBzdCo1BhT5d9mLe978Xkc%2FQaWpd%2BFfqqMe9B1UiAmy6vvQ73sRZ21XpH5vxK%2Fp4lsoZmRjbzFAQXhL1ji0TyNaZ8s0SpL9%2BH%2FWzekNiTUxBlL3Sd%2B5y%2Bz%2FVAXr6pGBeBA0wx%2B%2BJygY6pgEZebiy6Cg8xtzB1bgR7efE7J35H3QgT6ebMpfNjt6lE1OQ6x5DujXuWxO%2FYnKmcjOUt%2B7424ImldsiHBwmZL5dSx%2BuPAFP9TCN84RPpOsgzvsBs7nYoEvGP%2FUm2tSHRcOfxkWivlytwTTjoEnZ%2F%2Bta3LnQpoQsty4rn%2FzSxBMXtYCTk%2FcYFd%2Byp1HzT8VwG%2BJhbHJGaUn9goyDYPtaQ56XfiXZ0zWS&X-Amz-Signature=b965e5e796d4b500060fc2319a94ab67562ddf18437ee05eac11a3a34effb512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636A2YSUB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiGXxtFzt%2FryOWnWHc0yu7s%2Fj%2F2x%2F2UwG9%2F8WQ3m8sxAiAXP5S9SAwbhgigdCTtwJvZnvO4I4mfkoe9ghcXXkSTPyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmgspU8sGUgFRbEMSKtwDB3TBeocfj30PwC1QA0YAxyuI7VfsXAeetHy5yiSSyXOIppKM%2FwBIw%2BHFmcr4yMu3ENfCFlihIsMl22euXB5rGJO8pyZu5GszMvn6M9MACc89zVDppZvc2XOlNHFqX3tdQxwr3t7D9b7GMbKR%2FC08n%2Bd46ggHxM3kcsSS%2Fe7LyEELAnQPNEAXLvp6p3YCysQ5FDvYfxv6bxcuz7s3i4B9%2BCrkrl0gKWkOYMk4%2Fr%2F4pVsHnVA239gsHtFuCOSCvC9ivdno7BZULfL8uMXizq2M1ufbSTrAcJbOYc6rM51fYe7W8snz0%2BLlGAece%2FTcegjwj%2BET9uq017ChzpZtaf6ZMgl1mM6koE0U8cBCvKh56P%2FO%2FFgXQxzsgpEFx0tsDm3mTRpEIN7jmXDhGhheWnU9Dx6Ef9DlzH1a6VHd2GLaEdPD53uf1QSVBYMQcLPR6tDjpD2g8PrEq9HJiVn1rOVIdhfSqGa3vLQDB1A3MMapSeK%2FGOAQnAz34NOwPBzdCo1BhT5d9mLe978Xkc%2FQaWpd%2BFfqqMe9B1UiAmy6vvQ73sRZ21XpH5vxK%2Fp4lsoZmRjbzFAQXhL1ji0TyNaZ8s0SpL9%2BH%2FWzekNiTUxBlL3Sd%2B5y%2Bz%2FVAXr6pGBeBA0wx%2B%2BJygY6pgEZebiy6Cg8xtzB1bgR7efE7J35H3QgT6ebMpfNjt6lE1OQ6x5DujXuWxO%2FYnKmcjOUt%2B7424ImldsiHBwmZL5dSx%2BuPAFP9TCN84RPpOsgzvsBs7nYoEvGP%2FUm2tSHRcOfxkWivlytwTTjoEnZ%2F%2Bta3LnQpoQsty4rn%2FzSxBMXtYCTk%2FcYFd%2Byp1HzT8VwG%2BJhbHJGaUn9goyDYPtaQ56XfiXZ0zWS&X-Amz-Signature=0ef9b8edd2d8bcab2d04cefeea7d402d848b6da913a037836144a444b6c39fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
