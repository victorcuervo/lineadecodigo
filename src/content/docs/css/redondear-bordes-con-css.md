---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDJHZ7L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBxmvAZyPIn61kbkGNd%2BK7uyMTOkLD%2BAeo6HlGZTffCQAiAglV91tK3dddrNSOzdNFXzQTSe8D4ETIYvximFRBZSiSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMTtKHJN9Q5ONCOan%2FKtwDWmISXYBwz%2B%2FI9jerUPJ692suriCS3TwR1xmrX2tlUPPJZ9MaKpM2WJhSTUWUNsoH%2BXIq71ZiaZVjIPH4yYJDIzo03WNpVQTxgG%2BHfVaWuCyY5sqLYwH%2B5poCWWYavTp2CYcNJx54mgw9KL1Bys%2BH2RQQkJZLLSHnyd5M%2FFCd2D0W12zdex%2Fppj6qyKxHegEkvAMrgV7D4gYw4%2F5A%2F28%2BB1KIDJ%2BQt6JpZCHyndn9xKZqDcenhCYN1uyBibjtAuK812Tdp%2BSnb7pZu4TVfRAz%2BGb4yx3F2gA1Wldnc63ejoGmBuKLyQlslAuY%2F3781DKKqOxsMJBOL%2FBsykTJZyNbtW5lpSE5jyokMINVHjiYsRViJh8Rs81Z2rjzGhRM77sH6%2Fi8NxxeJVprBPDoItoO4PzuE3JAYIuPIC0aXOgcLfBnv1tmaVQUH3r7Aqy6KRgdD57cuqK59Lfl1MqFbr3m4VlJn28eMu24SxvO0UpEdC1OelbLJxiy4ZI6TsdumE8gV3LEFcFj4OACSiUoWf7SpNN6ui7Xr4g92w9eahEZsdfmlafOxEdYIvckcJI6Irsd9Dpmz4M3XzyK99C66MztDpQjAf4FBV74iUvTOd7ZTuUmiqOeEe86nENDo9Mwo67EyQY6pgH97jnjZtAfHZu0sN3TznegsfMpiLAeIunAVEDzVvnVmqQeppz9nXPYGcUFip%2FS5aR37TyWGgCSQtbBeBBLsKrT3ootDjd5xW3%2FauI2%2BjF4dUC3pr2w9OOmBJqkYxEwU7MRrWnuQ9fUqndqFzi0ZDDQVSQzLBKABjukqghXv0o2kkskksuOjR%2FTBYlwFcVV2sA1gAsJHfBJUYZ8WjK50CTg9RMIsKCE&X-Amz-Signature=3451b167ed0798281cdaccb54d4d90bf2941cbf7651d07af24cc4dd4a85228c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDJHZ7L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBxmvAZyPIn61kbkGNd%2BK7uyMTOkLD%2BAeo6HlGZTffCQAiAglV91tK3dddrNSOzdNFXzQTSe8D4ETIYvximFRBZSiSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMTtKHJN9Q5ONCOan%2FKtwDWmISXYBwz%2B%2FI9jerUPJ692suriCS3TwR1xmrX2tlUPPJZ9MaKpM2WJhSTUWUNsoH%2BXIq71ZiaZVjIPH4yYJDIzo03WNpVQTxgG%2BHfVaWuCyY5sqLYwH%2B5poCWWYavTp2CYcNJx54mgw9KL1Bys%2BH2RQQkJZLLSHnyd5M%2FFCd2D0W12zdex%2Fppj6qyKxHegEkvAMrgV7D4gYw4%2F5A%2F28%2BB1KIDJ%2BQt6JpZCHyndn9xKZqDcenhCYN1uyBibjtAuK812Tdp%2BSnb7pZu4TVfRAz%2BGb4yx3F2gA1Wldnc63ejoGmBuKLyQlslAuY%2F3781DKKqOxsMJBOL%2FBsykTJZyNbtW5lpSE5jyokMINVHjiYsRViJh8Rs81Z2rjzGhRM77sH6%2Fi8NxxeJVprBPDoItoO4PzuE3JAYIuPIC0aXOgcLfBnv1tmaVQUH3r7Aqy6KRgdD57cuqK59Lfl1MqFbr3m4VlJn28eMu24SxvO0UpEdC1OelbLJxiy4ZI6TsdumE8gV3LEFcFj4OACSiUoWf7SpNN6ui7Xr4g92w9eahEZsdfmlafOxEdYIvckcJI6Irsd9Dpmz4M3XzyK99C66MztDpQjAf4FBV74iUvTOd7ZTuUmiqOeEe86nENDo9Mwo67EyQY6pgH97jnjZtAfHZu0sN3TznegsfMpiLAeIunAVEDzVvnVmqQeppz9nXPYGcUFip%2FS5aR37TyWGgCSQtbBeBBLsKrT3ootDjd5xW3%2FauI2%2BjF4dUC3pr2w9OOmBJqkYxEwU7MRrWnuQ9fUqndqFzi0ZDDQVSQzLBKABjukqghXv0o2kkskksuOjR%2FTBYlwFcVV2sA1gAsJHfBJUYZ8WjK50CTg9RMIsKCE&X-Amz-Signature=48882ad1756e3c6244ee64b64be48ec5da05596b63df12ccbfdd835164b9e8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
