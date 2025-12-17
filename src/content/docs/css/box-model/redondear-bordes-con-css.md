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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZE22TOP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwut8ZdLK5KUBfPUVgJ6nz13%2BhoIIiC53UFw5oQ%2FATxAIhAIKUyi1YmQG47mb28hwyVrmH%2B2a%2BDkZNczG9wYGthAZuKv8DCHMQABoMNjM3NDIzMTgzODA1Igzq4FdMNbt78HgpsOYq3APuVj88rZ2buxbJW0PZsO9%2FXajS%2FBpyt83M8DLGtmtCr0R2XX4i25jnmamTgocr5IatQxLaEFQ7InyhJSCETzkvLWGFsPPTGG9vxNpAuRX4agKZcE1SiXcbGSFMOwY3uu6xxukMBFfJxFEhgYyOhLFH62CNj1vY4TwLLtOIMnzN%2FXgeUYi%2BefV0vu8lP1BIb5UASu6xH0VFCgf2tOgwdHdx8%2BUrQF7L4hZm7hawAK3UUzBt2HHRmfrKZbcmMq1%2BE75FAQojR%2BE8UMWHCfyC2Gso%2FUxuQBmL%2Bhsh4RIAm8HvlEEyr7RYsV1Pg6qvMIt6vKzZd1NMQzY7fR2srfalPeQ9t0sUkv217tRAyi6ZYlyCvk%2F69yZ4LAnKgV3ipmq22t2XXHqL3bknqf9J2jN2%2BefCLWa%2FZrCAfjgBRp9S9lDq02vD4BjeWH4N1xBvUn5Q%2BGwkNglXlpPDtAxNXE85V6MrSPlT%2BDFIFeXjl7ZR6OrItYLDEUuMvVeJK3%2BRMle8a1DbKzVVF2FbNCnfwL4faEasYHXVIuXPe%2Bb2yZmMqySe%2FAz2zpsUbqy1AcJtJeNuO8WDUXgypHoyFUVbyjyrkfywARxPYmWbjGjyNe0oIPAug3wovlb5Ijw%2B6NMdnDDdlojKBjqkAaSfcC56j22m%2FDxqbMnd5lX04EalPrLikjYf84Vqv08vc%2F7DNAwIvpQImJHO199yxw5N8maPj9DzwU9%2BgxNyqoYJzz%2FTT5OZE119q0oIPwxKu%2FetAdctJdc9PL6UrFcnYulu1mumiagU8tjNFePHwbTkWxijx4t5%2FvWSoD77wqVFzTgszFKhzeuZqUu1ghZXwWO%2BXP23A5Tg6SlIfenZu2MlQf%2FT&X-Amz-Signature=c5ca6bf354dfd7d98262824472b8c6337c362f7db17a94dcd7b42d969e17316b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZE22TOP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwut8ZdLK5KUBfPUVgJ6nz13%2BhoIIiC53UFw5oQ%2FATxAIhAIKUyi1YmQG47mb28hwyVrmH%2B2a%2BDkZNczG9wYGthAZuKv8DCHMQABoMNjM3NDIzMTgzODA1Igzq4FdMNbt78HgpsOYq3APuVj88rZ2buxbJW0PZsO9%2FXajS%2FBpyt83M8DLGtmtCr0R2XX4i25jnmamTgocr5IatQxLaEFQ7InyhJSCETzkvLWGFsPPTGG9vxNpAuRX4agKZcE1SiXcbGSFMOwY3uu6xxukMBFfJxFEhgYyOhLFH62CNj1vY4TwLLtOIMnzN%2FXgeUYi%2BefV0vu8lP1BIb5UASu6xH0VFCgf2tOgwdHdx8%2BUrQF7L4hZm7hawAK3UUzBt2HHRmfrKZbcmMq1%2BE75FAQojR%2BE8UMWHCfyC2Gso%2FUxuQBmL%2Bhsh4RIAm8HvlEEyr7RYsV1Pg6qvMIt6vKzZd1NMQzY7fR2srfalPeQ9t0sUkv217tRAyi6ZYlyCvk%2F69yZ4LAnKgV3ipmq22t2XXHqL3bknqf9J2jN2%2BefCLWa%2FZrCAfjgBRp9S9lDq02vD4BjeWH4N1xBvUn5Q%2BGwkNglXlpPDtAxNXE85V6MrSPlT%2BDFIFeXjl7ZR6OrItYLDEUuMvVeJK3%2BRMle8a1DbKzVVF2FbNCnfwL4faEasYHXVIuXPe%2Bb2yZmMqySe%2FAz2zpsUbqy1AcJtJeNuO8WDUXgypHoyFUVbyjyrkfywARxPYmWbjGjyNe0oIPAug3wovlb5Ijw%2B6NMdnDDdlojKBjqkAaSfcC56j22m%2FDxqbMnd5lX04EalPrLikjYf84Vqv08vc%2F7DNAwIvpQImJHO199yxw5N8maPj9DzwU9%2BgxNyqoYJzz%2FTT5OZE119q0oIPwxKu%2FetAdctJdc9PL6UrFcnYulu1mumiagU8tjNFePHwbTkWxijx4t5%2FvWSoD77wqVFzTgszFKhzeuZqUu1ghZXwWO%2BXP23A5Tg6SlIfenZu2MlQf%2FT&X-Amz-Signature=f0d099617a4f3fb97b370fc38a71b6a4de70dd8cb2ca6fc798b6f3e63cfecd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
