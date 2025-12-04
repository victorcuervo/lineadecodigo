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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGPJGP2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCLxAdlhrbIoSNN2Vmhwakyn5leq4pZtcKjm3Np554TNgIhALmuM1hA2tleOE45jcvkQHY812BFD8EJ4XpXcEGbREnYKv8DCDwQABoMNjM3NDIzMTgzODA1IgxXRRtRszSbn%2Fx9%2Fiwq3AMVV2%2BsHvY5kARfeEpKN3XdfvcxIdO9lg8CDOvWkaFBCVfG8rDmNgA6ltuxGqUybCWjpo1lH2%2BHIoVULwgq0TF9jWxpN5X5NedvGfukOPs%2F49QS0lApoIauNNW1q%2F9g81ydzRMLpmi319RrHg0V46v8a3lGmxZovuExe7u5mogzlZ5C6lDj%2FOi%2F8HqaGX7A3SyIjXnN9FT3i30z5Swj9FJvaZsx5gjE%2FcAr4CHyocH0AxZUZgjrpha89QlwIH0PIaJwiLqko7PB8Kbf0ebaEMFMxvdJfcr%2F8MCMmB0%2BC6ERRmbNROyDnY2Tkw9sgfbY8Oci5G0JlJUBS6YHNmdyptYRH9fY5CS1x5OWO7Z7uD6BDhG%2B5wHiWFJAv6c4ZCRt39PKa5F5DGSwVEZGUUaioL7b9%2Bmf34GUBSXVgxotT%2FMgTkMu6tzXN9tubEHbNzWldhbbnnL3TWqbSUic%2BVgRcvVLxuR6gyc9yPVuXOryR7UZMd23m5sGz%2Fu%2BPT4MY%2BDh8PZcaQ%2Fi6K7G9nNXWLb8KpAK9m3fsaXGGpprcFuXGwgLeEPJpJizW3gFauHJZM6JC3AdIiUCN%2BPauNKlvii5x8UHXKP8DJq%2BRbqiwjq%2FS%2BC3KrCz99OsYuNuF%2Bx35DDG88PJBjqkAb7ETmMHy5ENyygWLILLZaMKRrSbZqpyT0wQqfUZ3mm5cgHNEMrGN3ImUR7bmAyKuPBgSOBxDOMRU02dy8f0DYji3juxss9FKIcJGjrDvjO0s%2BJjtsXl0CdqqEGUuSbBDkzlS5UP47c6xaE29DmXewYacEK1%2FHCTjBk8IZLaGG2IOKN1oAf%2Bsiujn16KxXEKqcGdOgAogsZe7OAZOJ2s5ey2yDQe&X-Amz-Signature=af3f9acdbe4b5ac2e49956019dc3802a6b123cf6380f32474c60d131b33d4a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGPJGP2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCLxAdlhrbIoSNN2Vmhwakyn5leq4pZtcKjm3Np554TNgIhALmuM1hA2tleOE45jcvkQHY812BFD8EJ4XpXcEGbREnYKv8DCDwQABoMNjM3NDIzMTgzODA1IgxXRRtRszSbn%2Fx9%2Fiwq3AMVV2%2BsHvY5kARfeEpKN3XdfvcxIdO9lg8CDOvWkaFBCVfG8rDmNgA6ltuxGqUybCWjpo1lH2%2BHIoVULwgq0TF9jWxpN5X5NedvGfukOPs%2F49QS0lApoIauNNW1q%2F9g81ydzRMLpmi319RrHg0V46v8a3lGmxZovuExe7u5mogzlZ5C6lDj%2FOi%2F8HqaGX7A3SyIjXnN9FT3i30z5Swj9FJvaZsx5gjE%2FcAr4CHyocH0AxZUZgjrpha89QlwIH0PIaJwiLqko7PB8Kbf0ebaEMFMxvdJfcr%2F8MCMmB0%2BC6ERRmbNROyDnY2Tkw9sgfbY8Oci5G0JlJUBS6YHNmdyptYRH9fY5CS1x5OWO7Z7uD6BDhG%2B5wHiWFJAv6c4ZCRt39PKa5F5DGSwVEZGUUaioL7b9%2Bmf34GUBSXVgxotT%2FMgTkMu6tzXN9tubEHbNzWldhbbnnL3TWqbSUic%2BVgRcvVLxuR6gyc9yPVuXOryR7UZMd23m5sGz%2Fu%2BPT4MY%2BDh8PZcaQ%2Fi6K7G9nNXWLb8KpAK9m3fsaXGGpprcFuXGwgLeEPJpJizW3gFauHJZM6JC3AdIiUCN%2BPauNKlvii5x8UHXKP8DJq%2BRbqiwjq%2FS%2BC3KrCz99OsYuNuF%2Bx35DDG88PJBjqkAb7ETmMHy5ENyygWLILLZaMKRrSbZqpyT0wQqfUZ3mm5cgHNEMrGN3ImUR7bmAyKuPBgSOBxDOMRU02dy8f0DYji3juxss9FKIcJGjrDvjO0s%2BJjtsXl0CdqqEGUuSbBDkzlS5UP47c6xaE29DmXewYacEK1%2FHCTjBk8IZLaGG2IOKN1oAf%2Bsiujn16KxXEKqcGdOgAogsZe7OAZOJ2s5ey2yDQe&X-Amz-Signature=478355e73129164c99f7a23e0e1cade441ef3b1a4900e495f9583a1d5c55cf1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
