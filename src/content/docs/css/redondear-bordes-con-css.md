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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZZDRCO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhnjJT6UJKUWcxth0w6Uam2F3c5IHfxaZ%2FqhnbVWWVjAiBLO6ldFrDuboIEgeYc4uGY8fx7caKNX41QIbGR4uAJuSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI9uuASuFW6b6wp3AKtwD7t4f40qu7Q1YWgZXvvSunsohAbcyKcRl60omLm5aWqfguH6AuT%2F7FhEYXT2Dxdoma76FM6bvt7h1uqEIp4AvKoc8S71WMZqxRiXvOG%2FA3XmJWItiM4ZRsVZzJ8%2BEvbAqBk9OxE70%2BRNuPRZfZOkBrui%2BAOOk3eWPZrQPPhDs7vgRWWT7QT9iDec9zxNcW1ec1Jj5Y0lYs%2Fx9yOrujZnaU8Y1Z5E%2F8Kl2V7WJ4mmmD54hcZcC86ecYL1T%2FXFcsL8hWa1yUjfZsIAQxg%2BGhA7Ai%2FpgKcNij0v4cqnxWQTRu0DGki9dCWw%2B0zpUooJfV%2F5Na3%2BsCHlYkKITKqzGyZRSmBPlX3rXCfwXzz%2Fn86%2BPIYgdLNhEc2C6E1SuMfvZjoxZASgwcpXMYS7eFcbrtti%2B7xXdI%2Fdl67gSLh9NQhCECwl50cv2f6%2Bc7ytEOzVHcj5EHeySmOKVwpr6i01eTpYNfTsyuQFykpum0JMTUZDGLOvJ9vZh5R7pt8XZbXMtAPoncDOWdxfZiP4JbHZmq4wMlCVKhUkP9OULXKpuocnYkerHwP%2BODt2nrIIohQK%2Bh83fPL8wsb51b9lbSBrnYP6R1GMvUOdKPeuZYE8m0UDwb58DXBEbSBueAtVNqk8wo%2B3ZyQY6pgEazyFMVfPtifxF8bM7vwRbdapG0%2BzpaBH26WrgnSxvdUOIIS4BL87DHOzDVDZynGeXnsu8yD9wc9LBoJ6RrT%2FO5CFjH0RrLTtwASm1Mn33KOsw0sTRtGLDzqf8BBhM4vvcSdGpKBQJG7lDmTGoQQudjuQt%2BU6NkW5Ix%2FkDmC4yg2xM7wOmjGRolJ3IYSTA5LcIc86OdBbGtCYV6HRul0pGGR0KXCRd&X-Amz-Signature=3e37be33c2ddaf199c2e90901a068d218c864397d2412080f82cbd16a6f3587e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZZDRCO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhnjJT6UJKUWcxth0w6Uam2F3c5IHfxaZ%2FqhnbVWWVjAiBLO6ldFrDuboIEgeYc4uGY8fx7caKNX41QIbGR4uAJuSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI9uuASuFW6b6wp3AKtwD7t4f40qu7Q1YWgZXvvSunsohAbcyKcRl60omLm5aWqfguH6AuT%2F7FhEYXT2Dxdoma76FM6bvt7h1uqEIp4AvKoc8S71WMZqxRiXvOG%2FA3XmJWItiM4ZRsVZzJ8%2BEvbAqBk9OxE70%2BRNuPRZfZOkBrui%2BAOOk3eWPZrQPPhDs7vgRWWT7QT9iDec9zxNcW1ec1Jj5Y0lYs%2Fx9yOrujZnaU8Y1Z5E%2F8Kl2V7WJ4mmmD54hcZcC86ecYL1T%2FXFcsL8hWa1yUjfZsIAQxg%2BGhA7Ai%2FpgKcNij0v4cqnxWQTRu0DGki9dCWw%2B0zpUooJfV%2F5Na3%2BsCHlYkKITKqzGyZRSmBPlX3rXCfwXzz%2Fn86%2BPIYgdLNhEc2C6E1SuMfvZjoxZASgwcpXMYS7eFcbrtti%2B7xXdI%2Fdl67gSLh9NQhCECwl50cv2f6%2Bc7ytEOzVHcj5EHeySmOKVwpr6i01eTpYNfTsyuQFykpum0JMTUZDGLOvJ9vZh5R7pt8XZbXMtAPoncDOWdxfZiP4JbHZmq4wMlCVKhUkP9OULXKpuocnYkerHwP%2BODt2nrIIohQK%2Bh83fPL8wsb51b9lbSBrnYP6R1GMvUOdKPeuZYE8m0UDwb58DXBEbSBueAtVNqk8wo%2B3ZyQY6pgEazyFMVfPtifxF8bM7vwRbdapG0%2BzpaBH26WrgnSxvdUOIIS4BL87DHOzDVDZynGeXnsu8yD9wc9LBoJ6RrT%2FO5CFjH0RrLTtwASm1Mn33KOsw0sTRtGLDzqf8BBhM4vvcSdGpKBQJG7lDmTGoQQudjuQt%2BU6NkW5Ix%2FkDmC4yg2xM7wOmjGRolJ3IYSTA5LcIc86OdBbGtCYV6HRul0pGGR0KXCRd&X-Amz-Signature=9ead8425987dfe79265affcffd030d9a51d0417a63f43615cdee18b5cbb23f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
