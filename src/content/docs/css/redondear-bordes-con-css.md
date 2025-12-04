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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUSLOEJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHh2VlBGdyJMLDkDQ9YFRE5AsSqnqo6A6N4I9afqmfh%2BAiBmWO01SlACzT3o1KOGF6B4w5lBp2eWcwPcbwuDW643jSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM%2F7iAyCS1nUMkbz9bKtwDOotcnckUd7Gt7ddAMgAaAdGfnfzRJn4PjIVR66gJjz8zePPGIyFz0%2BA7tNX9cgJ3XdimL48ovAnsVsHbGWE%2BO78ewnJtXH1iR1OcDNoxit5NWqEDgj6oA6IMUrxjNayFqkgoMI4MT7U5DrO8F%2FuXoQFbpUAIcCthGSHx3yNS0DjcMHD6laxL0pjjJEWAAl8VZhQ3PSWBkxTujhkwmSZCe0wV9F5Iil9ReJTPS7iZdJuv9%2BGPkqWt5EY1aHwHPF%2Fd0BTPaqaf9VM1q7LYKeTuQPhHTMSj2mykDwVd%2BBHZJphbtTACkttVV%2FFu064zvnonl1Hy4DQqVPxhwV6E4vLbzlkxGnz%2B1FMc8uKzEs6YE5n2H3qAO0LFvYbo%2FNHhuk%2FYdJJe6B80TXu2y4HmKn9mDjuc8yFl47BE9VJJoTErQ0mev%2FkWUk%2FuyrxxbdB41IS8jRnCiR3vEsThJLuD4Z1GSlgWm0y47SO1V6DMrtfMqbDyeGNGWdHjYKGd%2BrR7VW5pkMngdQUC5lBFi9TAmItoSj4fRBS1wImDXa2bNyt7dWkN6JmxCcEswlMdM2FxH9QBf4%2B99znbehRUbN8shPKiJtcOlD9Zk3yx0R7HYMO6ExAGFBgMfPWRwFRNBn8wkZXDyQY6pgG8jN3POfApBsrd9q0U0eikDt7ByEJij1djnEOfnZDldjgDYwntIMxJOu6c0EHKrHG0kRFSmJaK3xmg1WID6rq%2Bq2fqguB7Y34CVRBE0Ek%2BzT3y%2FLoTg5HAOSx0AL1nL%2FMBefj8v7Wzebzxz6qi7iPDADzolOhCvzxqBcr%2BNSke4AHf%2B6aMKSP5Tm86NnYDYQD6vTn0szmifO7A5ykI0LeK%2Bietul55&X-Amz-Signature=c7406fb281642872b774f2198bfe7334b2cf3a0a8de29f3d9bc79894254ba9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUSLOEJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHh2VlBGdyJMLDkDQ9YFRE5AsSqnqo6A6N4I9afqmfh%2BAiBmWO01SlACzT3o1KOGF6B4w5lBp2eWcwPcbwuDW643jSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM%2F7iAyCS1nUMkbz9bKtwDOotcnckUd7Gt7ddAMgAaAdGfnfzRJn4PjIVR66gJjz8zePPGIyFz0%2BA7tNX9cgJ3XdimL48ovAnsVsHbGWE%2BO78ewnJtXH1iR1OcDNoxit5NWqEDgj6oA6IMUrxjNayFqkgoMI4MT7U5DrO8F%2FuXoQFbpUAIcCthGSHx3yNS0DjcMHD6laxL0pjjJEWAAl8VZhQ3PSWBkxTujhkwmSZCe0wV9F5Iil9ReJTPS7iZdJuv9%2BGPkqWt5EY1aHwHPF%2Fd0BTPaqaf9VM1q7LYKeTuQPhHTMSj2mykDwVd%2BBHZJphbtTACkttVV%2FFu064zvnonl1Hy4DQqVPxhwV6E4vLbzlkxGnz%2B1FMc8uKzEs6YE5n2H3qAO0LFvYbo%2FNHhuk%2FYdJJe6B80TXu2y4HmKn9mDjuc8yFl47BE9VJJoTErQ0mev%2FkWUk%2FuyrxxbdB41IS8jRnCiR3vEsThJLuD4Z1GSlgWm0y47SO1V6DMrtfMqbDyeGNGWdHjYKGd%2BrR7VW5pkMngdQUC5lBFi9TAmItoSj4fRBS1wImDXa2bNyt7dWkN6JmxCcEswlMdM2FxH9QBf4%2B99znbehRUbN8shPKiJtcOlD9Zk3yx0R7HYMO6ExAGFBgMfPWRwFRNBn8wkZXDyQY6pgG8jN3POfApBsrd9q0U0eikDt7ByEJij1djnEOfnZDldjgDYwntIMxJOu6c0EHKrHG0kRFSmJaK3xmg1WID6rq%2Bq2fqguB7Y34CVRBE0Ek%2BzT3y%2FLoTg5HAOSx0AL1nL%2FMBefj8v7Wzebzxz6qi7iPDADzolOhCvzxqBcr%2BNSke4AHf%2B6aMKSP5Tm86NnYDYQD6vTn0szmifO7A5ykI0LeK%2Bietul55&X-Amz-Signature=3fa42543dddffceab064f5b0006974166e9d040ce38f21410a6071699d7ad74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
