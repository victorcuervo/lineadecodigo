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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LEC67DO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQHisbfZs6NDAOczmLbs0Li20FTWlet6CvvokBQFiE0AIhANIPfuzbn%2Fn4d2PzmU1DTbNWn3W%2BT3xiGKDzsjJEtT9MKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuGhNfjfhAOpUfR7sq3ANgnKejuqVa12IKabh4sqp2KW%2B63t%2BV56ADk7XVCWPextrBKv%2F%2Fl25iJLj17oh039ZKhtvgAN5jZ2fs9No6Bm0y9VVzgT5MP0pOzWaPZSmTf8OnkH7XFF%2BgFDNDrrXn9D6SE7Zhj8M4yt%2Fjc9IyJ7n1yCrV3w1VmtG%2FuT0U8G746r17zdpZiGRYNZOdunsIwT%2FE5a9w1jE2PIomq1hTNNSKDVZgqwRUFxYkyAo5Oy%2FL2SrQ%2FM8b2%2FtHBZvYivysNNrdItrnTQ4TEe9Yfp4%2BCvPH%2FR%2BxCzFtxfWY229n8HPobWmrC3jV0zSRLZeQ6nqX5CtlF9vZlrsfmaPTVxK4W899gkryDt5Bxx7Gmass2Ai0y5ch916bTXPRZWsFseYrEw4hieNGGqm7RaG8wo%2B52SCZuWm%2FXESVc3GfsbDl9dN3UStl0ML0ZoECMEOQTJT0mt6C4i%2F1AQKaUnZn3hVIyMW0kZ97aYA4BC11ftoG3e0oChNm92warhMhLjUITWNY1lBi8AKgmXkOP8co9QEyyTa0k%2FMWKoXNkLgsm47lVzxFFCIBkVY%2BoYrujmLLOeAQYvRzeq2cYt%2FKpTylaHEvug4nAIxz%2BQ4aACC3dcXMPjtuI1pALdzOvkIbF0LPdDCvmtXJBjqkAX6gpeu%2BEFLaTL8RO2lYbufYw0zStVI2NLSKrhfhjpE8h4j3nNl3yCDJyAKX8tjZCJTL%2FbPK%2F39LvAi2FLaDldod3y3wAjG4evfX%2B1nzm9g61gIVxak5SphoqJ1cFBB3IjZ%2FiCzKhMa53scQquRGwQVRJHorFCiE3It82TXAn78Dtdy6dYj1RboBDY%2FRrKFTnsFG6tOJUUjaPBLH6ahq%2Blg%2B6xLr&X-Amz-Signature=672f035f17effa1dd74ff46b9e1c19f12cbbf967b8ca442796e02609ce7d9946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LEC67DO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQHisbfZs6NDAOczmLbs0Li20FTWlet6CvvokBQFiE0AIhANIPfuzbn%2Fn4d2PzmU1DTbNWn3W%2BT3xiGKDzsjJEtT9MKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuGhNfjfhAOpUfR7sq3ANgnKejuqVa12IKabh4sqp2KW%2B63t%2BV56ADk7XVCWPextrBKv%2F%2Fl25iJLj17oh039ZKhtvgAN5jZ2fs9No6Bm0y9VVzgT5MP0pOzWaPZSmTf8OnkH7XFF%2BgFDNDrrXn9D6SE7Zhj8M4yt%2Fjc9IyJ7n1yCrV3w1VmtG%2FuT0U8G746r17zdpZiGRYNZOdunsIwT%2FE5a9w1jE2PIomq1hTNNSKDVZgqwRUFxYkyAo5Oy%2FL2SrQ%2FM8b2%2FtHBZvYivysNNrdItrnTQ4TEe9Yfp4%2BCvPH%2FR%2BxCzFtxfWY229n8HPobWmrC3jV0zSRLZeQ6nqX5CtlF9vZlrsfmaPTVxK4W899gkryDt5Bxx7Gmass2Ai0y5ch916bTXPRZWsFseYrEw4hieNGGqm7RaG8wo%2B52SCZuWm%2FXESVc3GfsbDl9dN3UStl0ML0ZoECMEOQTJT0mt6C4i%2F1AQKaUnZn3hVIyMW0kZ97aYA4BC11ftoG3e0oChNm92warhMhLjUITWNY1lBi8AKgmXkOP8co9QEyyTa0k%2FMWKoXNkLgsm47lVzxFFCIBkVY%2BoYrujmLLOeAQYvRzeq2cYt%2FKpTylaHEvug4nAIxz%2BQ4aACC3dcXMPjtuI1pALdzOvkIbF0LPdDCvmtXJBjqkAX6gpeu%2BEFLaTL8RO2lYbufYw0zStVI2NLSKrhfhjpE8h4j3nNl3yCDJyAKX8tjZCJTL%2FbPK%2F39LvAi2FLaDldod3y3wAjG4evfX%2B1nzm9g61gIVxak5SphoqJ1cFBB3IjZ%2FiCzKhMa53scQquRGwQVRJHorFCiE3It82TXAn78Dtdy6dYj1RboBDY%2FRrKFTnsFG6tOJUUjaPBLH6ahq%2Blg%2B6xLr&X-Amz-Signature=07ba88eb6bbf5e043fa77556eef48599fb243443c059a59bb8936aeb14d233bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
