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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OXBC3AK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJ94OtG9ikrRlK8qYawdQuh0k7DPgmGalHUawyu1pMgIhAKO3od8%2FMcMn23i9uaOTOpip2ydwat%2B5YHRkCxRPlDUaKv8DCHcQABoMNjM3NDIzMTgzODA1Igz4lqmE7r1bOgHsDCMq3APSsk%2BdLdP7CSeJ943LUyL%2BnNjRbHUNbvTG4yTeJj55yWT1MJPOPCQFvvKYfajfCSyORUANK1E2uemWcCdk27GxZAGERmrwLGdmeomw1F%2B527eElW%2FCJNK9jEr6MzPuyMY1iHG1klv%2Fp%2FtFM13qP1JH%2FlsDbUstsnyX4FK1VNyUMdOJhkhfUwWm84kk%2FGxsM8fmFzRCfNnNdewtFoyIiGKPo3hwDXOx8PSiicND8egrcEylh0SdhWhaEjmtk1obhu8txtcYPLKXzBU0omI7TmP4usntIdphngCsM4dZSToCO0N0V8REeeAmL7Fqb8%2Ff1BWp0RA%2B3SBM%2B4xyp5aKGwMSG9BkrMg1VWa3pWNP9oW0kB7%2BUjglrJ41dxXEZDessFgRmd2IpC5yB1rXTO92Z%2FG1hc4sZit%2FNWkd4ez3DxfR918Milk0jMyF6OtijiZPevm85mm443ur5948wFztU6eAxK%2FFDZQgpugQR7Yb9yA%2BmSJ%2BmW7Uhqr1ZlCq6KmOEEaMhFAK0NcXju94tRFfDiBCKpoIImEtpm5Bjop6BCCH1jl79VYjcdZ11CIOzlU4UGB%2FUoF8ZQYLAB7AJ4rHIGeK4fUZz62p9Uh1a8VdSJExwGDJcIDPcklIJZ55tDDPg4nKBjqkAeFrooWONdapE8jOMTKu%2Bdc3KR5ZYflX3sVRUjQdb9Rgz4H%2B204nEN7veczBoCdTBifiq07q3G5umwcvhZtXEV%2BzRODf0e0rzUWuJSeeEKN5lfyC%2FQp4nCC5Ud8Pqvn9C0jrvnXA8RElI6qR5m4Wk8hFBALzPtmZ6DKuVJfHVaSFNWbqO%2BSx1tWBbh8oYqr9GLksq8DeQaiPKEVWYaOEgnRXxt84&X-Amz-Signature=71f8183ad990e4a270c1927eccd8f320cce9216c68d3030df96cecef90dfb620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OXBC3AK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJ94OtG9ikrRlK8qYawdQuh0k7DPgmGalHUawyu1pMgIhAKO3od8%2FMcMn23i9uaOTOpip2ydwat%2B5YHRkCxRPlDUaKv8DCHcQABoMNjM3NDIzMTgzODA1Igz4lqmE7r1bOgHsDCMq3APSsk%2BdLdP7CSeJ943LUyL%2BnNjRbHUNbvTG4yTeJj55yWT1MJPOPCQFvvKYfajfCSyORUANK1E2uemWcCdk27GxZAGERmrwLGdmeomw1F%2B527eElW%2FCJNK9jEr6MzPuyMY1iHG1klv%2Fp%2FtFM13qP1JH%2FlsDbUstsnyX4FK1VNyUMdOJhkhfUwWm84kk%2FGxsM8fmFzRCfNnNdewtFoyIiGKPo3hwDXOx8PSiicND8egrcEylh0SdhWhaEjmtk1obhu8txtcYPLKXzBU0omI7TmP4usntIdphngCsM4dZSToCO0N0V8REeeAmL7Fqb8%2Ff1BWp0RA%2B3SBM%2B4xyp5aKGwMSG9BkrMg1VWa3pWNP9oW0kB7%2BUjglrJ41dxXEZDessFgRmd2IpC5yB1rXTO92Z%2FG1hc4sZit%2FNWkd4ez3DxfR918Milk0jMyF6OtijiZPevm85mm443ur5948wFztU6eAxK%2FFDZQgpugQR7Yb9yA%2BmSJ%2BmW7Uhqr1ZlCq6KmOEEaMhFAK0NcXju94tRFfDiBCKpoIImEtpm5Bjop6BCCH1jl79VYjcdZ11CIOzlU4UGB%2FUoF8ZQYLAB7AJ4rHIGeK4fUZz62p9Uh1a8VdSJExwGDJcIDPcklIJZ55tDDPg4nKBjqkAeFrooWONdapE8jOMTKu%2Bdc3KR5ZYflX3sVRUjQdb9Rgz4H%2B204nEN7veczBoCdTBifiq07q3G5umwcvhZtXEV%2BzRODf0e0rzUWuJSeeEKN5lfyC%2FQp4nCC5Ud8Pqvn9C0jrvnXA8RElI6qR5m4Wk8hFBALzPtmZ6DKuVJfHVaSFNWbqO%2BSx1tWBbh8oYqr9GLksq8DeQaiPKEVWYaOEgnRXxt84&X-Amz-Signature=10ffc087184533737cbdd3038db6b81747d64b3a15a7cf058f2d6ec6f6689841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
