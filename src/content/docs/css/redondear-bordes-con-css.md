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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDO4DL6E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD0Gt0cO2qjXIalJsizUihNXgR6JwKi9aytSOQlj4uJXgIhAL4zTwv5pQ25fXmdUK%2Bqd2ovSa2s9V8vP5KtypDA%2BBEqKv8DCEMQABoMNjM3NDIzMTgzODA1IgywZvRtdIoUSp0e42gq3APRzcyarPNzbQnLOi8QRrX1b%2BDfWgOBKbFMY1iXKRXZhdFdJ9FBJeM5IfhtHR%2FVBR8zDv21Ff5dclG2mASMdiXpWB2B4KCoLpKSPLZFtxqrEs7q7ybpQxYXOjIyOqvf0yMmJL6c%2B1xiB0beWcCCzIJYH08ueg1cjM276E3%2Fu3DaFrZ%2FiV8QxmrEeazghyPpDsJwIQb%2F02iUxd5F%2B27mk21CbHLQHAvAjaNGah36%2BlMolcN124vzDaiZd6bssetqo68lgkAFHM1%2FWEcbe8nAFxa0dKp%2B4%2BDKpYQR7tzPrYICnB5j5fKxCSqrk0obaIQRhF8Jw5GnNsQ3FiIJrN%2B45j79jsI6%2BYmo6oAztTaudqB9unyzTg0LLuwc68peo8KaNztIx75v%2Fkk%2BNCLIXZx79AoqC3cOEZ5hyTtWQUIrUCsuGbzMVk9HjQg9hoiRaEIb9ZnAEdiIThfIRKGGxtbBf0TcT4y8yatflkOO0LqnB4FNLQxWEekXt6JZjjiPp8APZyBLf6IubTC8HXAKEc%2FEXCYJjcsYuRnfaMdVjR7u2ZyUJi%2FqdO%2B4K0RZpXu5%2FbpIJzDvI9wSgfEu2Lv0Iwp75vGsYN8I5n1iWRBVdmvLFHD0iphDAxVfSyEIhq9bUjDRq8XJBjqkAaZFBjihB%2FuYwPo2Au9igZ0lFghKeljLHbvIukNzGg%2BHDzl6RQEDslXx7sE%2B51nB6IWgzYAE0gvqXC%2Boi4k%2B%2FhucnmTuKTj%2FSHy44VdPPcEfRC7IFPrV2s0B%2BjWQXyiQ0eKi6zXi6pKcf0HgqgduogwuBL4kz5GHeibCSw4H6tej3RKdFnkKfIX0H58OLjZ%2FHsiK7QUg31lC1BLVCTyI%2Bv5XiK7n&X-Amz-Signature=fa421a3ffd0ceed2cd43c81ecd30e623ccfb798a6827f27ad9ad0ce13fa17800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDO4DL6E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD0Gt0cO2qjXIalJsizUihNXgR6JwKi9aytSOQlj4uJXgIhAL4zTwv5pQ25fXmdUK%2Bqd2ovSa2s9V8vP5KtypDA%2BBEqKv8DCEMQABoMNjM3NDIzMTgzODA1IgywZvRtdIoUSp0e42gq3APRzcyarPNzbQnLOi8QRrX1b%2BDfWgOBKbFMY1iXKRXZhdFdJ9FBJeM5IfhtHR%2FVBR8zDv21Ff5dclG2mASMdiXpWB2B4KCoLpKSPLZFtxqrEs7q7ybpQxYXOjIyOqvf0yMmJL6c%2B1xiB0beWcCCzIJYH08ueg1cjM276E3%2Fu3DaFrZ%2FiV8QxmrEeazghyPpDsJwIQb%2F02iUxd5F%2B27mk21CbHLQHAvAjaNGah36%2BlMolcN124vzDaiZd6bssetqo68lgkAFHM1%2FWEcbe8nAFxa0dKp%2B4%2BDKpYQR7tzPrYICnB5j5fKxCSqrk0obaIQRhF8Jw5GnNsQ3FiIJrN%2B45j79jsI6%2BYmo6oAztTaudqB9unyzTg0LLuwc68peo8KaNztIx75v%2Fkk%2BNCLIXZx79AoqC3cOEZ5hyTtWQUIrUCsuGbzMVk9HjQg9hoiRaEIb9ZnAEdiIThfIRKGGxtbBf0TcT4y8yatflkOO0LqnB4FNLQxWEekXt6JZjjiPp8APZyBLf6IubTC8HXAKEc%2FEXCYJjcsYuRnfaMdVjR7u2ZyUJi%2FqdO%2B4K0RZpXu5%2FbpIJzDvI9wSgfEu2Lv0Iwp75vGsYN8I5n1iWRBVdmvLFHD0iphDAxVfSyEIhq9bUjDRq8XJBjqkAaZFBjihB%2FuYwPo2Au9igZ0lFghKeljLHbvIukNzGg%2BHDzl6RQEDslXx7sE%2B51nB6IWgzYAE0gvqXC%2Boi4k%2B%2FhucnmTuKTj%2FSHy44VdPPcEfRC7IFPrV2s0B%2BjWQXyiQ0eKi6zXi6pKcf0HgqgduogwuBL4kz5GHeibCSw4H6tej3RKdFnkKfIX0H58OLjZ%2FHsiK7QUg31lC1BLVCTyI%2Bv5XiK7n&X-Amz-Signature=b29b3587fe8bd18cb1c50ff10dcffa75cfd2a34fcc3bc2756403b663f90a973d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
