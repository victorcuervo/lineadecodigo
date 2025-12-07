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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IZYBJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHvrgEkQWsMH%2BGY%2FRgLyHa%2Bje9bbvMNAiZEAJ9PAkgwIhAOEaNbmr9KIBBHkmz5fWG3om%2F2PE6tQYYvmeCQvJzIqxKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM0tzCIRZMG5gti6kq3AOy39NWS5Tq8r2KZjUPlGRVs285BC%2FFYwO22HzM2RFQvqP%2Fx6zEMF87LMF5GFdtmKtdM%2BE87PrXVtfN1zXRCjA52Oo7if1tIdeSdtvJuxWteDou5GhfwaQVAzOrs%2FAMHVANTmkgTk4sGz009Vblk4Q%2FrdkHkKmwjf0E9k1GKSgmhbRuQTZDazxGhQv%2FG67k2QHhIlwhcCLIaVeqtXMJx1dshg%2BALcZd8uGtAtP8Ac886THPU9pbEheyPgN7cQZ%2FLQLK%2FAtxcZXLpObCJZKLG2yAXUtpxM8pQkNTmCWy3eA%2Frvd2T1WHO4%2BqCXaKPNX7in57XzeovbM6Crtz8iI1bP7Nl47k81rThCpjbq3yRnUGzQMjJsigVpsIggkq1a57HEfjE70fTYLThXBjwZ0Inn6TcVSnIrGix7ImbGjxMzffs5Dr6qI8Y%2BXJL09YDGRW1sz8LhRM%2BHkXKhnUxbk%2FozGBOCV0fXxV18dkdw2DMck37nkquDKnPHxGgjzMs%2FeOwhbFUC%2B3S8bP7EkHoE6IfOIBf9JowjgAODpnINKI1FoBq7vJ0TCQp1XgLAbuTqMZL8NWYxLGB2iTpVzT%2BH45zSWw1qZl6teu0Ug%2FleE%2Bp0ZwZCTVt9DOeAFnWE1l6TD0hNjJBjqkAUmNG7VdgiEpKzNywKIYbkhddzbx6a91EGWqVP2lvEiM1mGbCv4GVoYjqNLj7ONWHKzouWUfmeb79BOgLKy0J59qG2RYjVpAmcoxsLCo5Yxl9Q0jQO0EFL1OK3wA%2BXwbCmz%2FT%2F2GF9c9xrCqyF3QQHDKbCh9q%2Fph83Pk7uu%2B0VBHDp7tJdwnuajNOF9U1z2%2BanQ%2FwaL9Fl%2F3FCSzAiX86bvx9OLT&X-Amz-Signature=6ad211957ec5744946dcce3260d5fda24773b04d9c6b85ef4eb11205fe8ccadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IZYBJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHvrgEkQWsMH%2BGY%2FRgLyHa%2Bje9bbvMNAiZEAJ9PAkgwIhAOEaNbmr9KIBBHkmz5fWG3om%2F2PE6tQYYvmeCQvJzIqxKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM0tzCIRZMG5gti6kq3AOy39NWS5Tq8r2KZjUPlGRVs285BC%2FFYwO22HzM2RFQvqP%2Fx6zEMF87LMF5GFdtmKtdM%2BE87PrXVtfN1zXRCjA52Oo7if1tIdeSdtvJuxWteDou5GhfwaQVAzOrs%2FAMHVANTmkgTk4sGz009Vblk4Q%2FrdkHkKmwjf0E9k1GKSgmhbRuQTZDazxGhQv%2FG67k2QHhIlwhcCLIaVeqtXMJx1dshg%2BALcZd8uGtAtP8Ac886THPU9pbEheyPgN7cQZ%2FLQLK%2FAtxcZXLpObCJZKLG2yAXUtpxM8pQkNTmCWy3eA%2Frvd2T1WHO4%2BqCXaKPNX7in57XzeovbM6Crtz8iI1bP7Nl47k81rThCpjbq3yRnUGzQMjJsigVpsIggkq1a57HEfjE70fTYLThXBjwZ0Inn6TcVSnIrGix7ImbGjxMzffs5Dr6qI8Y%2BXJL09YDGRW1sz8LhRM%2BHkXKhnUxbk%2FozGBOCV0fXxV18dkdw2DMck37nkquDKnPHxGgjzMs%2FeOwhbFUC%2B3S8bP7EkHoE6IfOIBf9JowjgAODpnINKI1FoBq7vJ0TCQp1XgLAbuTqMZL8NWYxLGB2iTpVzT%2BH45zSWw1qZl6teu0Ug%2FleE%2Bp0ZwZCTVt9DOeAFnWE1l6TD0hNjJBjqkAUmNG7VdgiEpKzNywKIYbkhddzbx6a91EGWqVP2lvEiM1mGbCv4GVoYjqNLj7ONWHKzouWUfmeb79BOgLKy0J59qG2RYjVpAmcoxsLCo5Yxl9Q0jQO0EFL1OK3wA%2BXwbCmz%2FT%2F2GF9c9xrCqyF3QQHDKbCh9q%2Fph83Pk7uu%2B0VBHDp7tJdwnuajNOF9U1z2%2BanQ%2FwaL9Fl%2F3FCSzAiX86bvx9OLT&X-Amz-Signature=f647d97aebe8dc209bb594eb2752c1302f3418f3f4ccf1d0110ccb21aa4bdd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
