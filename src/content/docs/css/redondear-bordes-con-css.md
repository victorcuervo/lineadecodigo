---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALUZB2I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCsojo5cyVnIHQcMnJNihexi8DcXOVHt%2B%2BoOXjUQhfUSwIgfRl%2B4W%2FxOqwuafUNjiIlY%2F5xEmMtt3v%2FY40JYb9S09Eq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPxUOCNdFRLAsI6YDyrcA320PhMmvm9XxJ4p%2FMyR14oWFRd3IsOeCOguR9ffFDRLxI1YrYb8NUVewdWgjYgfqwJq2UYjMoY0nZJJNuJmzBxnghWnWos7f8D97B1roygxmLAg5JXMGk8Whc0UU5yMoH6%2BoPtthqWcHhEqY6Kdd8JPN4JCZ5sXkyUvPErmx5ZocCRgNZgoTBIhs4%2BDcZ9ML75ALtjCwxMIgM5M3m38XcQr5uLGNibAd0ERLQBO4Avtp%2FuKAtDAcfJ3PKEbXBhBafB2MDzuvqxzq%2BdXNzY3n62eInEi%2FxuEOnuURAsO%2FWFt5ah%2Bj%2B58wM09kIh0AW1AwKtuz7%2BXz7SsMUwRJjLKwYtP57SGrNUD%2FRbpnwaUTGiQ0xgOt1X6rbAqoWNCi3lKNBgyPkxOmwo6EYSozM62TQ2sO75myVAyWGuNJwgNVHS%2BJpRLcPnjW1asg3ds8vp8IJblcBc3pMVlqBWLwdE6cvFQkwdnGKq4XZw6%2FV89eKgOCbA9Bun8y0mgzTIz66aimy1qf5zbShHsvaIYmYOPBQIhLG7mpxi6fHh28pn3X7sk%2F9u9EkjvYMWGtfOd1HnzkNXrJ9GeKDzoc1%2FeBK6EB9dxA1TpJyNgRHvZ2HIice451FLikjUvIeFRP1PcMIe%2BwskGOqUByF7DebewRqdWftuf8iF5Z%2F9oU9Nhszf0xovQ%2ByeispaLHglUixnQiWTkUL5e0voemEr0kQfb%2BHu4%2FWMvps3aH88iJag174WBWlV4h7YEEmxehZzfkDLFotvNA3LbZwZBMeEvpx4uFie3FAFL8NOyUGLQlKFefX%2FRNXpFj30yb5%2Fsq8yNqX5Th4pzKFzXphM6oMJNhMJHiwUN%2FMfreKXhRTv1kf9p&X-Amz-Signature=9b13a537beaf789e0935ed9f81d3ef9c81aed0cdec7a6ccef87bfaff41802bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALUZB2I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCsojo5cyVnIHQcMnJNihexi8DcXOVHt%2B%2BoOXjUQhfUSwIgfRl%2B4W%2FxOqwuafUNjiIlY%2F5xEmMtt3v%2FY40JYb9S09Eq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPxUOCNdFRLAsI6YDyrcA320PhMmvm9XxJ4p%2FMyR14oWFRd3IsOeCOguR9ffFDRLxI1YrYb8NUVewdWgjYgfqwJq2UYjMoY0nZJJNuJmzBxnghWnWos7f8D97B1roygxmLAg5JXMGk8Whc0UU5yMoH6%2BoPtthqWcHhEqY6Kdd8JPN4JCZ5sXkyUvPErmx5ZocCRgNZgoTBIhs4%2BDcZ9ML75ALtjCwxMIgM5M3m38XcQr5uLGNibAd0ERLQBO4Avtp%2FuKAtDAcfJ3PKEbXBhBafB2MDzuvqxzq%2BdXNzY3n62eInEi%2FxuEOnuURAsO%2FWFt5ah%2Bj%2B58wM09kIh0AW1AwKtuz7%2BXz7SsMUwRJjLKwYtP57SGrNUD%2FRbpnwaUTGiQ0xgOt1X6rbAqoWNCi3lKNBgyPkxOmwo6EYSozM62TQ2sO75myVAyWGuNJwgNVHS%2BJpRLcPnjW1asg3ds8vp8IJblcBc3pMVlqBWLwdE6cvFQkwdnGKq4XZw6%2FV89eKgOCbA9Bun8y0mgzTIz66aimy1qf5zbShHsvaIYmYOPBQIhLG7mpxi6fHh28pn3X7sk%2F9u9EkjvYMWGtfOd1HnzkNXrJ9GeKDzoc1%2FeBK6EB9dxA1TpJyNgRHvZ2HIice451FLikjUvIeFRP1PcMIe%2BwskGOqUByF7DebewRqdWftuf8iF5Z%2F9oU9Nhszf0xovQ%2ByeispaLHglUixnQiWTkUL5e0voemEr0kQfb%2BHu4%2FWMvps3aH88iJag174WBWlV4h7YEEmxehZzfkDLFotvNA3LbZwZBMeEvpx4uFie3FAFL8NOyUGLQlKFefX%2FRNXpFj30yb5%2Fsq8yNqX5Th4pzKFzXphM6oMJNhMJHiwUN%2FMfreKXhRTv1kf9p&X-Amz-Signature=56e2bfce881f0046350fc6ae1f7a55fc53a0d85e5c9cdd2372f61bbdeeab819f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
