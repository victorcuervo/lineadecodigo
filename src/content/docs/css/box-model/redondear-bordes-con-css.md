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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6PB6LA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BlNbiMytY3STU5U9hwyc0V%2FRMsAFBm5bQyZV%2BKN6jAAiBj5FqcGyhU2gEsM6GZ0Le7MA1iVttY0zPdZ%2BnXMRugwir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMY2FTJTQJHyheoeIkKtwDVeGml8a1zGL087xshTf%2B35ARwasciTMPsuI6BebFEHMTRLMt3SEAXALoX91q0z9hRM2gZVTwJ5fUze86hM%2BA0D%2F8rXSVHhecLydRUSIYthanM%2Bd0LjKgYIRh%2FFfqyzPNqM3M2efEJBXtS5CA%2B22%2B0H9cz%2BVbr5veVXURB0YU5cj3TxBXzcp4U%2Bqb0K1F46b6G24zkoOW8qi3s6B4j0RDUMdSAuNp6cfvWtaG%2FsVI9u1mS0mKuaDYCdD9jMsR6SGWrDuNxztM9nBytB7Z0XqYslSEkHcm8ff2eB6o6YvasZxGEtmVsfYIp0cg80Yw%2FhhxyrYOKlNRQj5PaR%2BTjs7BG1pJ5L1CCpbgTt5dFpfRqVwOA%2BuuNOBWEaVjZqjM0wUk1%2BeDohPR%2FGlf%2FD7CB9pTjE6f6cRss4trOkBBkBCQUayPx1%2BaSzZTFurLz%2FWmlBZZL6SDtF%2BZcyOi9eE4%2BxwwfQLNQAlmSyxns69SGLQLzo9yWwfGkZxxuNbQ%2F8DOS2iqcBmtXkE200TMnS%2B7MHpzSN65phR1Gv6tqBRi3F1ok4WKAy6yLx9vPCLykebN%2BG6MAPWmzZRMyu9p9uuX5iAy%2F9qBTvNuW7CMIWeo%2Bwe3LW0B7cIHuiYrtAfEZNIw1%2FuHygY6pgFyjoIJd9IP5ltppC%2F5dxIS3bgwhV2XqljZz1Kj0dQ9vZFAddtjjULQKV6pi4RhIULODv1zrJdQNczBnj1enIe5xvr3cjpLqqPYJ9pzIwM1Md%2F3yaGOoUjl83ri0D4ZdUR1xXNm9Ym007LwAF5LX%2B0%2FgJrYteqOmbsE2O8gVWRHR9AY6%2BluYBquNhXRxwwptm3Lb5CObncFMtMIxt21ikeQ5W2GcVtc&X-Amz-Signature=22769582ff05938dea55b889723a95040fea19f535ecd0ed6292eed370437042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6PB6LA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BlNbiMytY3STU5U9hwyc0V%2FRMsAFBm5bQyZV%2BKN6jAAiBj5FqcGyhU2gEsM6GZ0Le7MA1iVttY0zPdZ%2BnXMRugwir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMY2FTJTQJHyheoeIkKtwDVeGml8a1zGL087xshTf%2B35ARwasciTMPsuI6BebFEHMTRLMt3SEAXALoX91q0z9hRM2gZVTwJ5fUze86hM%2BA0D%2F8rXSVHhecLydRUSIYthanM%2Bd0LjKgYIRh%2FFfqyzPNqM3M2efEJBXtS5CA%2B22%2B0H9cz%2BVbr5veVXURB0YU5cj3TxBXzcp4U%2Bqb0K1F46b6G24zkoOW8qi3s6B4j0RDUMdSAuNp6cfvWtaG%2FsVI9u1mS0mKuaDYCdD9jMsR6SGWrDuNxztM9nBytB7Z0XqYslSEkHcm8ff2eB6o6YvasZxGEtmVsfYIp0cg80Yw%2FhhxyrYOKlNRQj5PaR%2BTjs7BG1pJ5L1CCpbgTt5dFpfRqVwOA%2BuuNOBWEaVjZqjM0wUk1%2BeDohPR%2FGlf%2FD7CB9pTjE6f6cRss4trOkBBkBCQUayPx1%2BaSzZTFurLz%2FWmlBZZL6SDtF%2BZcyOi9eE4%2BxwwfQLNQAlmSyxns69SGLQLzo9yWwfGkZxxuNbQ%2F8DOS2iqcBmtXkE200TMnS%2B7MHpzSN65phR1Gv6tqBRi3F1ok4WKAy6yLx9vPCLykebN%2BG6MAPWmzZRMyu9p9uuX5iAy%2F9qBTvNuW7CMIWeo%2Bwe3LW0B7cIHuiYrtAfEZNIw1%2FuHygY6pgFyjoIJd9IP5ltppC%2F5dxIS3bgwhV2XqljZz1Kj0dQ9vZFAddtjjULQKV6pi4RhIULODv1zrJdQNczBnj1enIe5xvr3cjpLqqPYJ9pzIwM1Md%2F3yaGOoUjl83ri0D4ZdUR1xXNm9Ym007LwAF5LX%2B0%2FgJrYteqOmbsE2O8gVWRHR9AY6%2BluYBquNhXRxwwptm3Lb5CObncFMtMIxt21ikeQ5W2GcVtc&X-Amz-Signature=e6c2d29b5bcad08840dcf9cd118c707e42066d08fd5821064094d37fc5249a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
