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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CIDWJ47%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVEdHngjmC167rDuCWgZDzJmIog6wxbpK%2F92Mcf8m1cAIhAICaGk7AwCNu%2BXLFXwA6SdTdrg1AIgWcF8FYFzt9RGXWKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEHA%2FriJBfXcnkF%2Fgq3ANpZDrMssyF9%2BXPoY5H0CIyZ5qFETV%2FXyeABQuqMhvf4srW%2FGatE2CIB81FskrTgSmtkEEQFgDYsnUaUMVWUAXiErkPzYRx5NUWu2SLpcykVtuV5JIuVZBL6EWQ%2FdPuoRcn6GYt6PQWfrcccdJIsQ3fR65fULWnodMEFzLzsuQ9lq6YqzEh%2Bd3halr%2BMX4BDuAUzoOYdU1CRcu3McLlQBspjZTB0jJ%2FvEImqGPX%2FCDV2Q%2BZzfLYIZDp8PUsQxgj9GThUHEvaz3DNTAbZpWwMcqu%2Bud34%2B1rYhYjNJd5MO3DULxQdz0z0oIlsbTrs3pJzAmN2KQI7hHSVrcmUqChqr9MJKpIWTRlN1pB3xSbn%2BTMsqmEFJY%2BBkXdxdmY485ZnHFmx9lTY%2F2WtpX2L3i2QYTU7PY78zlNSAvEBP5TVksXcRbZgwD1eMRBAms8QUKTSonVLKhZbFi%2F3mISjpVm0%2F3fZwFcHftmqk9nGHVs2RPtg0qKqzTT7fY7sH8zoqOWR7QzG4DA%2BBGqa5CWltBP5Rmrjvg9VXJuvoamCv22cngBxHbSqAT03OyomZhYl6MNqk6iDHMLpTA9G5d9eKD9DbC%2FokTyQUZ64vEOKYIU6AARtR7iUPdMZpiiZ1%2BMCzDBh9zJBjqkARLCUuEAaS5G78RpnTVooewi7oQytKLeB9NE%2FkuzM5p8Zw1DhdoGLEDi0ZqQ4HOf2UXL8tmQHDQXuo07JKf9S0xPXFYh9OJHsV6vrstLIxBCE8IhNt1CD6dtrkSxZm6WzYh8K0%2FaxDhKDJrYc5rwtbjt2fuWLxq1Bhb3PTVES6KXAzYwx1zW7myvgP51vj8mfFB%2FzeiTkWIaGr4Ejj3QeYN68vGL&X-Amz-Signature=23c23079310d2fc9fb1104a5074a9101dc3ee8a194663c56fb9a63d57f130442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CIDWJ47%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVEdHngjmC167rDuCWgZDzJmIog6wxbpK%2F92Mcf8m1cAIhAICaGk7AwCNu%2BXLFXwA6SdTdrg1AIgWcF8FYFzt9RGXWKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEHA%2FriJBfXcnkF%2Fgq3ANpZDrMssyF9%2BXPoY5H0CIyZ5qFETV%2FXyeABQuqMhvf4srW%2FGatE2CIB81FskrTgSmtkEEQFgDYsnUaUMVWUAXiErkPzYRx5NUWu2SLpcykVtuV5JIuVZBL6EWQ%2FdPuoRcn6GYt6PQWfrcccdJIsQ3fR65fULWnodMEFzLzsuQ9lq6YqzEh%2Bd3halr%2BMX4BDuAUzoOYdU1CRcu3McLlQBspjZTB0jJ%2FvEImqGPX%2FCDV2Q%2BZzfLYIZDp8PUsQxgj9GThUHEvaz3DNTAbZpWwMcqu%2Bud34%2B1rYhYjNJd5MO3DULxQdz0z0oIlsbTrs3pJzAmN2KQI7hHSVrcmUqChqr9MJKpIWTRlN1pB3xSbn%2BTMsqmEFJY%2BBkXdxdmY485ZnHFmx9lTY%2F2WtpX2L3i2QYTU7PY78zlNSAvEBP5TVksXcRbZgwD1eMRBAms8QUKTSonVLKhZbFi%2F3mISjpVm0%2F3fZwFcHftmqk9nGHVs2RPtg0qKqzTT7fY7sH8zoqOWR7QzG4DA%2BBGqa5CWltBP5Rmrjvg9VXJuvoamCv22cngBxHbSqAT03OyomZhYl6MNqk6iDHMLpTA9G5d9eKD9DbC%2FokTyQUZ64vEOKYIU6AARtR7iUPdMZpiiZ1%2BMCzDBh9zJBjqkARLCUuEAaS5G78RpnTVooewi7oQytKLeB9NE%2FkuzM5p8Zw1DhdoGLEDi0ZqQ4HOf2UXL8tmQHDQXuo07JKf9S0xPXFYh9OJHsV6vrstLIxBCE8IhNt1CD6dtrkSxZm6WzYh8K0%2FaxDhKDJrYc5rwtbjt2fuWLxq1Bhb3PTVES6KXAzYwx1zW7myvgP51vj8mfFB%2FzeiTkWIaGr4Ejj3QeYN68vGL&X-Amz-Signature=d0cc727b8d729ea5be68df9902e4d8f853a52af2e1bf186ba4a13a749a32753a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
