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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2EBGGW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq%2BzkfB2LpUl8Jek4tlgTOfLdWqKYtT3I5tWlBVzl%2B6QIhAI1FhhrWwcE8VkvC%2FUfhIlBONqv74lkSMAYKpHfq7ESvKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzZqnemjhAhaVifCYq3AMUkhGXrT4I%2FNVXnAWZU%2FlekrNVpZcYOGJqZlrofx1aq6tF8GLQh84mGLLyeYnY0nvsd0j9NuOYKrTZ7Hnr7Al%2FeEV0Lfv1uV3euwZu57Fkybw9nWCzmzWK7eLNcUylgUN0p77OwGM4nr%2Fb7ZzHTB2GeYhaG8vdWmefyhk0DafM3jlpBsURWuSbrcNKqDPfnXYQ5oh15RNUEB913yQuiWgbpuw5EKDZ%2FbFhufYkvUIOvsTCQqBC5lgyo2cKsoLwpqGUmPCb7TVU%2BP5jRUSItMXe6wy8O2A2jsbeESEtPt1am2K0y5xTGx6aY9FLyy6rn0GLFWVLEIy9gy7QA5k%2BXbOm%2BIdOdW6dTwMjKpm26aVdacpn6PfhRLVe3zA9Ao3iXk4b3IXBVZ0ZzSXI0MUF%2BU%2FXD1IRLExca7llLNEjJ%2FX2qjLKjI1iQMvbSSWfvcfTwDNEnFAVGJ9eO%2FHBlca4WSgkYPkmLNVNgetdXct6YWK9%2F2dAjJU%2BrTEgdj7WmRQXKGYJE3Rh10dn4NhuZSBZM8VGMoB%2BR54MIoDFo%2BaHw4rS4vYvOvb0tNMCSg2N2QxIC1T9WJPgV3S7c04VQ2UCRPOlH44iJdfB188ExCYh2NRn%2BJcujZiS0CTA9MyW%2FTD2w9HJBjqkAbd6Ci6MtR4GjMsOD2MTpLrjFMw6XQNqOwkgvYrKqXCImfEuwCGzkGP2mLNq%2Fb2sMnzZY4cx5LdaU%2FHfnx0k3Wi0G4BdlKaQB32Hi8tkRKXXgpS9TBnZBBvZQha3nBkuuenuv1lk82YVNxJQOTakVVe85Q97%2F5EhKhgG%2FmQ97HVUKPM2TK7t4%2FiMGF5gxFehs5O71UVb8FCWmhl3KUPEyV8S%2Fn6Z&X-Amz-Signature=83f7ff7612cdf884a719ec2215084c7709fc86f0b91ae69ffc8f29c10b06e43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2EBGGW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq%2BzkfB2LpUl8Jek4tlgTOfLdWqKYtT3I5tWlBVzl%2B6QIhAI1FhhrWwcE8VkvC%2FUfhIlBONqv74lkSMAYKpHfq7ESvKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzZqnemjhAhaVifCYq3AMUkhGXrT4I%2FNVXnAWZU%2FlekrNVpZcYOGJqZlrofx1aq6tF8GLQh84mGLLyeYnY0nvsd0j9NuOYKrTZ7Hnr7Al%2FeEV0Lfv1uV3euwZu57Fkybw9nWCzmzWK7eLNcUylgUN0p77OwGM4nr%2Fb7ZzHTB2GeYhaG8vdWmefyhk0DafM3jlpBsURWuSbrcNKqDPfnXYQ5oh15RNUEB913yQuiWgbpuw5EKDZ%2FbFhufYkvUIOvsTCQqBC5lgyo2cKsoLwpqGUmPCb7TVU%2BP5jRUSItMXe6wy8O2A2jsbeESEtPt1am2K0y5xTGx6aY9FLyy6rn0GLFWVLEIy9gy7QA5k%2BXbOm%2BIdOdW6dTwMjKpm26aVdacpn6PfhRLVe3zA9Ao3iXk4b3IXBVZ0ZzSXI0MUF%2BU%2FXD1IRLExca7llLNEjJ%2FX2qjLKjI1iQMvbSSWfvcfTwDNEnFAVGJ9eO%2FHBlca4WSgkYPkmLNVNgetdXct6YWK9%2F2dAjJU%2BrTEgdj7WmRQXKGYJE3Rh10dn4NhuZSBZM8VGMoB%2BR54MIoDFo%2BaHw4rS4vYvOvb0tNMCSg2N2QxIC1T9WJPgV3S7c04VQ2UCRPOlH44iJdfB188ExCYh2NRn%2BJcujZiS0CTA9MyW%2FTD2w9HJBjqkAbd6Ci6MtR4GjMsOD2MTpLrjFMw6XQNqOwkgvYrKqXCImfEuwCGzkGP2mLNq%2Fb2sMnzZY4cx5LdaU%2FHfnx0k3Wi0G4BdlKaQB32Hi8tkRKXXgpS9TBnZBBvZQha3nBkuuenuv1lk82YVNxJQOTakVVe85Q97%2F5EhKhgG%2FmQ97HVUKPM2TK7t4%2FiMGF5gxFehs5O71UVb8FCWmhl3KUPEyV8S%2Fn6Z&X-Amz-Signature=4136632e99d695021b4b9664568fa8670d6dfa85ff5ac12c7591fe2d19057ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
