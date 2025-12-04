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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R252WM5V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDZTBWf%2F6S%2BHg%2FNR2xIcEO4C7KM%2FB34cxb0YAP74j7orQIhANJ9ArIgCXC2tWqp4sCpLn%2Bjt1Ic1tzYBpc2Weba3KcsKv8DCEYQABoMNjM3NDIzMTgzODA1IgyfNEQOSRK13meQWuYq3ANtHMTt8GRkErhrCaogvhy6n1fAvrveDsIRTB6hlPHKUhmUp7KCshN1lNj7YAxQeI9y6gzXM4BChnlG964b%2BkECfqZQR4t6k0EqrWMRZdZhM1wbCTyHuO8qL72iB7Q6sLmPS0S8AkW1A3zotWKTGFHMjb6%2BNVegsQ5tZszXdD7jlnAbsgj1m%2BRN5Eyl8C6h1M5qVI8f%2FDC7j3JFAIcgV9kvfwPcmvtp3Ad6vpC6NtrFymO0u6XAUvt251br5XFBVn5IAMvOUy8A6qm7FdBwtmAawHMoT5teQBzEP21H%2BYcXkaO9lfNM32AanwK3BrbXG18nsmBHC69pRu%2BGO59u3uUgSaD909B6JP%2BWErN8E32f4lPLn3w6O4mHhozSK%2B8eUuk%2BQcRZjjyQZPQwr%2B%2FGi8%2BmORocm%2FtnYqp8znZT3ajP0JIyPnlfCx8yyEtnkNZ6LghU4XyTXmK%2FRc2We0sJYHzBHk5W8f13J%2B8UFOHL7KCiYdpkE4UpftJhjIUqb6RfksFw%2BKr6YjWWW%2BwyEJF3ydYrpso1QF3jWgB18rryj1GzGAxEId7%2BD5TNzLwx%2BhzDZxRRf5X2UOgLbRbeoBkxZvMFPLHjbq4OWxMZG1bh7Ru01fjrRxXg8nF%2BqDjXODCXg8bJBjqkAd1ytAIP5mdzsCmHa46wekAsl9Q3C2C506MTZ6EQVjRMy3ZGmZGBr2nDjxSqlaYklG1YhZhMtpzlJCl1nr%2FL6%2FM8a2tKqDGq8lQ9V2jWmwyZTMHZBYoKHfsXO%2B1m1h0XO%2BC9QYMVryOxfT6SxlveRrebtm0kSZk8bUlgA7lojM%2F1nf6hz4upiI389rD1hkkmyQewYX15%2FTK5VEsJeIeo8%2BXQlv1%2B&X-Amz-Signature=f3dfd8a26742769a3cd039d3beb5b25bbb18070431e6fa98e97bb46269920a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R252WM5V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDZTBWf%2F6S%2BHg%2FNR2xIcEO4C7KM%2FB34cxb0YAP74j7orQIhANJ9ArIgCXC2tWqp4sCpLn%2Bjt1Ic1tzYBpc2Weba3KcsKv8DCEYQABoMNjM3NDIzMTgzODA1IgyfNEQOSRK13meQWuYq3ANtHMTt8GRkErhrCaogvhy6n1fAvrveDsIRTB6hlPHKUhmUp7KCshN1lNj7YAxQeI9y6gzXM4BChnlG964b%2BkECfqZQR4t6k0EqrWMRZdZhM1wbCTyHuO8qL72iB7Q6sLmPS0S8AkW1A3zotWKTGFHMjb6%2BNVegsQ5tZszXdD7jlnAbsgj1m%2BRN5Eyl8C6h1M5qVI8f%2FDC7j3JFAIcgV9kvfwPcmvtp3Ad6vpC6NtrFymO0u6XAUvt251br5XFBVn5IAMvOUy8A6qm7FdBwtmAawHMoT5teQBzEP21H%2BYcXkaO9lfNM32AanwK3BrbXG18nsmBHC69pRu%2BGO59u3uUgSaD909B6JP%2BWErN8E32f4lPLn3w6O4mHhozSK%2B8eUuk%2BQcRZjjyQZPQwr%2B%2FGi8%2BmORocm%2FtnYqp8znZT3ajP0JIyPnlfCx8yyEtnkNZ6LghU4XyTXmK%2FRc2We0sJYHzBHk5W8f13J%2B8UFOHL7KCiYdpkE4UpftJhjIUqb6RfksFw%2BKr6YjWWW%2BwyEJF3ydYrpso1QF3jWgB18rryj1GzGAxEId7%2BD5TNzLwx%2BhzDZxRRf5X2UOgLbRbeoBkxZvMFPLHjbq4OWxMZG1bh7Ru01fjrRxXg8nF%2BqDjXODCXg8bJBjqkAd1ytAIP5mdzsCmHa46wekAsl9Q3C2C506MTZ6EQVjRMy3ZGmZGBr2nDjxSqlaYklG1YhZhMtpzlJCl1nr%2FL6%2FM8a2tKqDGq8lQ9V2jWmwyZTMHZBYoKHfsXO%2B1m1h0XO%2BC9QYMVryOxfT6SxlveRrebtm0kSZk8bUlgA7lojM%2F1nf6hz4upiI389rD1hkkmyQewYX15%2FTK5VEsJeIeo8%2BXQlv1%2B&X-Amz-Signature=4cb7fb81c8abbc5f03d6a45568fb728bacf69f7662aa0dceb71ec9b6c55ed2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
