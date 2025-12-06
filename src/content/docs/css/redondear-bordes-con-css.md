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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PX5R3Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtvOxASaEeCMpCwyY91hOLvU2opO0Qngs64gnJdqbuAgIhAM075oE%2FF72QUR%2FVIFlvADa3T34sqWwnGbJHIqWgeN%2B1Kv8DCHIQABoMNjM3NDIzMTgzODA1IgxOl3%2BvJcP0AEqrcFYq3AMd7rG9Rrp7hzrH3MP%2Bgshtcl%2B54drNDuKim%2BzmLlAey53YTLJzRXB9vyQD7j69cy1CFrwg6FexjogEQ3Ybl3wUKQvTYluJyRs2LgD9RSwRORH7gDBQM13MGOkwBLfOiow5FioB6mRvSXYMIDLTA81dg60kuUCt7v%2F8FTjmSoTJh7ZQr%2BHOlKXIb5NETZsXETebmhE2KXqn8EvpWYPBf0hgpHzSJq%2Bc4Y8PAaLqQdDA5h05%2FFyuKnOkNansXoUGOTb7Or0kFuYhNYWGZUQn8HZktYAg%2B1SLMMc0gXxUMpTiNUu4M3nKPrfTrHRg0QbIPnOfXMJUPV8p55HtY%2BMhsjeJeo1eN0U2Nh1SmNEvBBsMk2vYORXBxAI6dQaBg0nWbgiRW8Gd0uLxNQMz%2BUerBZ2F6bYBgUFio%2BvKbwI4JKxgxS8bsEyydv583SX7N%2BMVsTQgBO%2BU%2BRaKeiP57%2BfD8zzmapvv5%2BAB05QSK5smuwHVoy42etj9wzfb8f6oej3n63gY%2ByPzzemjwvueI8awSplIBEdRKQqoWmTAdwuDi7pPXRqN7wnPTOXTw9fCsMx7oI6H2kFGRBm8f4DAsD8643w6tNO%2FhAHjeuN2trUcxWOmdYLvfMf63iuF6PRzKTCq68%2FJBjqkAXy6fHebRK1VN9GuvhD2HbKzF6qFxbrylWyWI%2B5G0%2F%2Fdp9v7tZDyqzAFaM4Y65zjtaeVwWV1Rkocl20aVx%2Fi4wzCqgEmchzG8jEvdyX%2F5F%2Bw1H%2B21usFqdTubfRD%2FMDaKfhL82B5gZ7Lg4JvLeQhgmh47CaxQbkQE5JVbH5ax3TzTHSbJ%2FZk6WHWh2zCzzujb0kIKKBgWY9Y9D6hbywimo2g3kq1&X-Amz-Signature=82f91bdecd44b368cc2c8d458a0f3f71befe23561735b58a54b83619b5e45696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PX5R3Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtvOxASaEeCMpCwyY91hOLvU2opO0Qngs64gnJdqbuAgIhAM075oE%2FF72QUR%2FVIFlvADa3T34sqWwnGbJHIqWgeN%2B1Kv8DCHIQABoMNjM3NDIzMTgzODA1IgxOl3%2BvJcP0AEqrcFYq3AMd7rG9Rrp7hzrH3MP%2Bgshtcl%2B54drNDuKim%2BzmLlAey53YTLJzRXB9vyQD7j69cy1CFrwg6FexjogEQ3Ybl3wUKQvTYluJyRs2LgD9RSwRORH7gDBQM13MGOkwBLfOiow5FioB6mRvSXYMIDLTA81dg60kuUCt7v%2F8FTjmSoTJh7ZQr%2BHOlKXIb5NETZsXETebmhE2KXqn8EvpWYPBf0hgpHzSJq%2Bc4Y8PAaLqQdDA5h05%2FFyuKnOkNansXoUGOTb7Or0kFuYhNYWGZUQn8HZktYAg%2B1SLMMc0gXxUMpTiNUu4M3nKPrfTrHRg0QbIPnOfXMJUPV8p55HtY%2BMhsjeJeo1eN0U2Nh1SmNEvBBsMk2vYORXBxAI6dQaBg0nWbgiRW8Gd0uLxNQMz%2BUerBZ2F6bYBgUFio%2BvKbwI4JKxgxS8bsEyydv583SX7N%2BMVsTQgBO%2BU%2BRaKeiP57%2BfD8zzmapvv5%2BAB05QSK5smuwHVoy42etj9wzfb8f6oej3n63gY%2ByPzzemjwvueI8awSplIBEdRKQqoWmTAdwuDi7pPXRqN7wnPTOXTw9fCsMx7oI6H2kFGRBm8f4DAsD8643w6tNO%2FhAHjeuN2trUcxWOmdYLvfMf63iuF6PRzKTCq68%2FJBjqkAXy6fHebRK1VN9GuvhD2HbKzF6qFxbrylWyWI%2B5G0%2F%2Fdp9v7tZDyqzAFaM4Y65zjtaeVwWV1Rkocl20aVx%2Fi4wzCqgEmchzG8jEvdyX%2F5F%2Bw1H%2B21usFqdTubfRD%2FMDaKfhL82B5gZ7Lg4JvLeQhgmh47CaxQbkQE5JVbH5ax3TzTHSbJ%2FZk6WHWh2zCzzujb0kIKKBgWY9Y9D6hbywimo2g3kq1&X-Amz-Signature=4738f481b9a287c0e11bd0ebb7a505c0adb23e639935dba0d6ecd16fc74fa57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
