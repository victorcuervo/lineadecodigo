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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRN4ADFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaHo%2Fo60k5PZ52VhWJkrL4OdtNi6UKVTH20%2FtUpyuLfAiAVzVZRhL%2BlQyC200vvPaq40nCsbpDCcpNmjyL7FUtRKSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMihuB500wplinnTFhKtwDPoaXqmPDvfjGcs4vHqEmWDpTNK4E6vGvY9l3TIYKZtx2OdxZXcCXPatJFjT6RfHFG1kkx8hjD2p8AYoKklNgYcqsjPqtn7M744XazOh%2F6xFVyO3%2FdsaBr4wmgQOzKq2E5GEbEsfHCpQl9qkM2THy%2BRrDcH6n1WaNETXm82E55NwC1NaK9qdvd8btZQiuViT5T2Q5mUhRLiXJgM6ihYQsXN7soPjF4XIIREE07lO1YBh6W16jA96YGG0fBXyafLQlutWseFVZJhjfHbPkz99Pchg1nHyXMJ%2FtGUt5V%2BVjvlcP02J0wPa%2FhXYcrsiOoaeEEHQOey6WXWVnAR0UauYZTB5yKiT%2FcbLb%2BGsC6jaW2tgwRKTW%2BxyHspL5FeJKTKfaXfSm2puLrhjfwgGcGHb2dv6ulPye6hLjUFyKg7KSQO6mOXUre5N%2B9rgsdCLUtkLEGpJQQ%2FiYvDQ9Pq9APafqto1cznzuEesWYX9qRJVlnCX7RkI5UqHvxvriGwXGDqsACSFXPVPVMFU7Ypb%2Fm%2BA6p1W%2B4SMmI4iktGAEzUBcAvMfN%2FLZImWl%2BMEzkFcmKxvcfyZC6kxPXRWfPlHmFOoUN2msJeX2urOv%2FwpMVtwf7lOf%2Bob7j7UkJNiKZiYwn7TcyQY6pgHpdj5e32EsDu8YRz%2Bl2%2FNMPregV8Cda5aWrPAzl9Mm9VPrUUgWc1EzpjdfcC%2Fig7fU0tm1yv61QMSDovQWmz9bPXytPmMflbHkY9Ego19fpWPR19hnqLL2u%2BuiDO%2FzUfL9hPTqg1VptWab015xtEH20PTHKbZ1Pq4C1oIRKQBO0oYanyK1%2F9TBoyS0pp4iIy%2FBZd2JSrAwRwEPw9k2L3di9sXhL0f0&X-Amz-Signature=f6327b7cc920fd8581a243508b97361c8b8c1c6581de22074dd1d5b8ede37a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRN4ADFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaHo%2Fo60k5PZ52VhWJkrL4OdtNi6UKVTH20%2FtUpyuLfAiAVzVZRhL%2BlQyC200vvPaq40nCsbpDCcpNmjyL7FUtRKSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMihuB500wplinnTFhKtwDPoaXqmPDvfjGcs4vHqEmWDpTNK4E6vGvY9l3TIYKZtx2OdxZXcCXPatJFjT6RfHFG1kkx8hjD2p8AYoKklNgYcqsjPqtn7M744XazOh%2F6xFVyO3%2FdsaBr4wmgQOzKq2E5GEbEsfHCpQl9qkM2THy%2BRrDcH6n1WaNETXm82E55NwC1NaK9qdvd8btZQiuViT5T2Q5mUhRLiXJgM6ihYQsXN7soPjF4XIIREE07lO1YBh6W16jA96YGG0fBXyafLQlutWseFVZJhjfHbPkz99Pchg1nHyXMJ%2FtGUt5V%2BVjvlcP02J0wPa%2FhXYcrsiOoaeEEHQOey6WXWVnAR0UauYZTB5yKiT%2FcbLb%2BGsC6jaW2tgwRKTW%2BxyHspL5FeJKTKfaXfSm2puLrhjfwgGcGHb2dv6ulPye6hLjUFyKg7KSQO6mOXUre5N%2B9rgsdCLUtkLEGpJQQ%2FiYvDQ9Pq9APafqto1cznzuEesWYX9qRJVlnCX7RkI5UqHvxvriGwXGDqsACSFXPVPVMFU7Ypb%2Fm%2BA6p1W%2B4SMmI4iktGAEzUBcAvMfN%2FLZImWl%2BMEzkFcmKxvcfyZC6kxPXRWfPlHmFOoUN2msJeX2urOv%2FwpMVtwf7lOf%2Bob7j7UkJNiKZiYwn7TcyQY6pgHpdj5e32EsDu8YRz%2Bl2%2FNMPregV8Cda5aWrPAzl9Mm9VPrUUgWc1EzpjdfcC%2Fig7fU0tm1yv61QMSDovQWmz9bPXytPmMflbHkY9Ego19fpWPR19hnqLL2u%2BuiDO%2FzUfL9hPTqg1VptWab015xtEH20PTHKbZ1Pq4C1oIRKQBO0oYanyK1%2F9TBoyS0pp4iIy%2FBZd2JSrAwRwEPw9k2L3di9sXhL0f0&X-Amz-Signature=413dc2e8f61ecec2ae439a4ff10ab22ccfa6cdc28996a71ab150d69166a5ba20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
