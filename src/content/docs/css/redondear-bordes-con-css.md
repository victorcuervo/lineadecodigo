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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEV44HMV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGZUpTA6WdzVzoZupibrYWoZgYjLrreb9k%2Fh%2Bhb3B8RAiEAmJIwXb%2BrSwxFEWvcMR35yTgBwShHQV9iRrKnO%2BELrMsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBSyW2EY5rxNJHucJyrcA%2BpaM97%2Btc5Q2YKKcwWADdryFzupORc7KG24FLBYdmyP32GiC02UHvBloufAf6%2FBdqjd1WuUaXPS%2BffFgbi%2Fnf0m8xB9H7IDLrPMkDCLL1VPnzThuqoMS823prbNiu8gQIAFPq2AxxbbTw0%2FDlZYfPfNa3ScafyGeCbXeNNXRQdSm8NaIDL3WZn2X9LLh11kAyvxlaRIBKgsSD6QsFlSsvwK4zz5TUYvP55ncQlszvOyC5%2BZBQHTbeP0NBYL1aR%2BXaHtMgahnhyn2C0PQsZ6faeKcUu79CBNdu6qZqREX04HTA9D%2Btt7BbtJCc%2FRsLs%2Bgbjcnh6U513d6WVxogoezePa95CaVJ697An%2BHYksAomm1rxVBY0apNtUy1a7qQ%2FuH5uK%2BVvJnMLjDpJKOeFbZg%2FZDz2P3yL7Sb89s8jjzE3VpjDsQP3FUmKiuErdO8M88pZvyeSe1gXi651OPbSg2sCe80D4y8zYrXmmlwAE%2FmCnreRZjtxwEasizvMDNCGDZqXZD1F%2FC%2FEjQwQqg7O3FOKgI25%2Bi4MdV2R2WVptzBss6G4ndD5VRw2YfsdlbqJDdKUWAQe%2FwwPOfIG2xt5XCtpiIy06XfvizdiNRKXYjCPD7j7iMcIYTQLG%2FPAAMKv9zskGOqUBYJjjmz0nYOmgAi8ZlFZkl7%2BDusfKYIHnmNoy1Edf6bJfFtDgBn3kaqt54mZkoiqR6hzJFI6SoL5H%2F%2F%2FAy38mIDTFgxJKW%2BrfbeL87jqnbBjYaXXXP1imoG7PMdM6KoSqgbPka5SvNPfXzXcDVrHU8MOq6Q46ugFImak7shHtkKTNIc7Pn2gczCHOYQehtahpRLmlFesht31vqyu3Xh5z4Yla0Wnv&X-Amz-Signature=76911d9ab2698d0104d2bd2d26749cf64e475e611ba45f4f6c2f98e030befb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEV44HMV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGZUpTA6WdzVzoZupibrYWoZgYjLrreb9k%2Fh%2Bhb3B8RAiEAmJIwXb%2BrSwxFEWvcMR35yTgBwShHQV9iRrKnO%2BELrMsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBSyW2EY5rxNJHucJyrcA%2BpaM97%2Btc5Q2YKKcwWADdryFzupORc7KG24FLBYdmyP32GiC02UHvBloufAf6%2FBdqjd1WuUaXPS%2BffFgbi%2Fnf0m8xB9H7IDLrPMkDCLL1VPnzThuqoMS823prbNiu8gQIAFPq2AxxbbTw0%2FDlZYfPfNa3ScafyGeCbXeNNXRQdSm8NaIDL3WZn2X9LLh11kAyvxlaRIBKgsSD6QsFlSsvwK4zz5TUYvP55ncQlszvOyC5%2BZBQHTbeP0NBYL1aR%2BXaHtMgahnhyn2C0PQsZ6faeKcUu79CBNdu6qZqREX04HTA9D%2Btt7BbtJCc%2FRsLs%2Bgbjcnh6U513d6WVxogoezePa95CaVJ697An%2BHYksAomm1rxVBY0apNtUy1a7qQ%2FuH5uK%2BVvJnMLjDpJKOeFbZg%2FZDz2P3yL7Sb89s8jjzE3VpjDsQP3FUmKiuErdO8M88pZvyeSe1gXi651OPbSg2sCe80D4y8zYrXmmlwAE%2FmCnreRZjtxwEasizvMDNCGDZqXZD1F%2FC%2FEjQwQqg7O3FOKgI25%2Bi4MdV2R2WVptzBss6G4ndD5VRw2YfsdlbqJDdKUWAQe%2FwwPOfIG2xt5XCtpiIy06XfvizdiNRKXYjCPD7j7iMcIYTQLG%2FPAAMKv9zskGOqUBYJjjmz0nYOmgAi8ZlFZkl7%2BDusfKYIHnmNoy1Edf6bJfFtDgBn3kaqt54mZkoiqR6hzJFI6SoL5H%2F%2F%2FAy38mIDTFgxJKW%2BrfbeL87jqnbBjYaXXXP1imoG7PMdM6KoSqgbPka5SvNPfXzXcDVrHU8MOq6Q46ugFImak7shHtkKTNIc7Pn2gczCHOYQehtahpRLmlFesht31vqyu3Xh5z4Yla0Wnv&X-Amz-Signature=d1675aabd8c9a42b126e50af25fcb6108382eacb82153cea28c518a6343f2ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
