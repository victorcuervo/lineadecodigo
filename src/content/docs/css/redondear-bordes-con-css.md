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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRI7GWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnzQv6nfbPiFk3WnI%2F0PzP6zrRVwix13rXv6wVFb3j5AiEA0%2BwKGVFP6arTKyQu1lP%2Fkbn2Lhh%2BcDfG7o4G83T8f6Iq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPxvv4C6DoWMAIv2bircAxWZDKlyztXkQfXa3mXc9CkyDSjrwG%2BoKawbUI%2Bsr2JPA7llz0tvkIw11G7pcQniU3Ivs0jki3w8cE71rDW6Mpe8%2F6oumII4ecPh6jf3Nlt59xTYJED2RGLKmgPS%2B98boqufxl%2BHngZ03lWGc7I5DY1v2x08dk1fSiwiqmheGvg0oc%2BZlYI2vwRL7CijmCvUsBkdRLLFKubDWTtTFjJZ8Hf0UN2kuLFK3hCERA%2FoQ4CUW%2FkLohr7irFNCxRySJz4dHCkCuFAPXLdbCDeYhGrA1x9WfZW%2FDdB9UGnWxqME22fIR4e%2FX8ZK6cQonO%2BWBdCob3nykqVJKAfexT24yxiOxqBbMDUFwjkcXabUijCX8hMVd8JD6tWYyE0mc7pagWtMz1Fx%2FSkZWrsoUL0kIt%2BCLgKbRnGrCNTOGTlZSYeNGNPiY3okjYbph5%2F1p%2BLCOPGi9s1d6fPYt%2F0QyGr%2Bm22%2FPFyamamHoHmvMjk%2Fe%2Fl9wMakVzODGRZr8b6qm6e9q8wngUTVJTzf%2B4zacNxiTuy4zeW8MOOilVvtjIAg0ZUFFsZg9Ke951onPsqzjc4fZp9ClV2smOxQ4e65OGpEcI91lHIOoi%2F3hH814wKsjZZy9REbqyb3%2BqYieCcD%2FU4MPjHyskGOqUB9NWRwYAPEKYN5xdxOYXmNOb9herkmdNgDG9%2FDU0xkK1NSjPtvslyXfzwt3M5SaeQBhhBPq3cfqvvCWlFeAMCPtCK%2B5rpxEkK1j0zOxRg3hgE38dyo%2BAamsBGbsliIS%2BIbyFy01mxdtrI4usRpeDNH1rem6n8oQ3cU2YWoY7RbcnoidpHkpYvnkCaeyCcQPuWlzBy1ddmlGYo2WBcrmR7DGzOSwDm&X-Amz-Signature=2813bd4bb74200094a8514bd8d62317d0644489507d9e012a56872e04aa2afc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRI7GWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnzQv6nfbPiFk3WnI%2F0PzP6zrRVwix13rXv6wVFb3j5AiEA0%2BwKGVFP6arTKyQu1lP%2Fkbn2Lhh%2BcDfG7o4G83T8f6Iq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPxvv4C6DoWMAIv2bircAxWZDKlyztXkQfXa3mXc9CkyDSjrwG%2BoKawbUI%2Bsr2JPA7llz0tvkIw11G7pcQniU3Ivs0jki3w8cE71rDW6Mpe8%2F6oumII4ecPh6jf3Nlt59xTYJED2RGLKmgPS%2B98boqufxl%2BHngZ03lWGc7I5DY1v2x08dk1fSiwiqmheGvg0oc%2BZlYI2vwRL7CijmCvUsBkdRLLFKubDWTtTFjJZ8Hf0UN2kuLFK3hCERA%2FoQ4CUW%2FkLohr7irFNCxRySJz4dHCkCuFAPXLdbCDeYhGrA1x9WfZW%2FDdB9UGnWxqME22fIR4e%2FX8ZK6cQonO%2BWBdCob3nykqVJKAfexT24yxiOxqBbMDUFwjkcXabUijCX8hMVd8JD6tWYyE0mc7pagWtMz1Fx%2FSkZWrsoUL0kIt%2BCLgKbRnGrCNTOGTlZSYeNGNPiY3okjYbph5%2F1p%2BLCOPGi9s1d6fPYt%2F0QyGr%2Bm22%2FPFyamamHoHmvMjk%2Fe%2Fl9wMakVzODGRZr8b6qm6e9q8wngUTVJTzf%2B4zacNxiTuy4zeW8MOOilVvtjIAg0ZUFFsZg9Ke951onPsqzjc4fZp9ClV2smOxQ4e65OGpEcI91lHIOoi%2F3hH814wKsjZZy9REbqyb3%2BqYieCcD%2FU4MPjHyskGOqUB9NWRwYAPEKYN5xdxOYXmNOb9herkmdNgDG9%2FDU0xkK1NSjPtvslyXfzwt3M5SaeQBhhBPq3cfqvvCWlFeAMCPtCK%2B5rpxEkK1j0zOxRg3hgE38dyo%2BAamsBGbsliIS%2BIbyFy01mxdtrI4usRpeDNH1rem6n8oQ3cU2YWoY7RbcnoidpHkpYvnkCaeyCcQPuWlzBy1ddmlGYo2WBcrmR7DGzOSwDm&X-Amz-Signature=f63174116911c822502cd2019a5a6efacc4e43ca1c0f529abb0bb043c3d9e416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
