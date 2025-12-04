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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44P56UH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAh9b2UbNWQPJqDJtTwAjAxduqXPj%2FytfPDH7L4sP3cwIhAIA%2FJX5MnM1ma94aHxDcuPHlOUJhwjqa7mj2l6KCvBaRKv8DCEkQABoMNjM3NDIzMTgzODA1IgwPeIOEZdBc6zUXJZEq3APHWunlMBpTRMUz%2B8cyjIrGWK9GxO1O6bgutVmjoPu9LCepJf7BiKPehpbL1NLRXQmKopATem6%2F1ySIEDsrVtdu%2BluRMZGoNRZl3zscgq0zedYORz9GNCg2yd0PXhdjl29MK78vfUT%2B5xpMt8ea7YK2j656kXmFQwssIF3JwvK%2F05GpyymjYy0CLQ0ZO3WJ3QlRQvICjisXGXEhU8OEhByc%2FUZLq75leo%2BnzIvkEaMUHPKUjzyv7LO61QlaplYd9XBL65gF2JbyLqFwRQ%2FYbBBay0LfQuY5Q1HhaYKBVjShYEdJI10t7fbdRGw49%2BAtOMNVCLYsbjR5v7xp6mXrGC69bcuFMk19rNzQcKIin4siK2WRnOrECA2cQHUXr%2BCiUqe2mwwjMlN0i2%2BzucNiS7zyAFWd9J9KcsyINiGDv6xAB1zREQRluUaMC8Cg4SPT45MjPApxlFU215NFTdxNN5ukx%2F%2BPO4si97VmRJh9DfrF%2FzFm3DaXoWJcDpOmebvEC6fOV5qKsdzSBHll0wU38t2B0GG8X2b%2FCoTcTxyKqEy0%2FBKwoB6kJyAlybjJcwwZasHYOTctOuvar0W33YGaUoO0YEm5HVuP0NkyeUXIrmpc%2FCjJjTF6kVX%2BEG6mZTDP28bJBjqkAU%2FFrjzPv4khu2Ky24ofb96a%2BihsBOzg7HdJ8lwf3fu1ELpO9NjiV7FsbQL4rL0oouW6t0Wf%2BmxjDkrIDaC9CBEUIFZecQkDCAY6NH7gp3NUmrkb0JlPofIf6uZauVIJnftqStj9cios0xo2T70JKegRU1Y6%2BEHHlmCa0iS%2BFSreTs%2FUJMhOqaVOkzaoeYRnMtyciMis1ExLy9HoTs4Scm%2FVINIy&X-Amz-Signature=38ecbbb2d33d603ccd175d563ac9b747a73696b2d6c5057ff958e3896bc37c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44P56UH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAh9b2UbNWQPJqDJtTwAjAxduqXPj%2FytfPDH7L4sP3cwIhAIA%2FJX5MnM1ma94aHxDcuPHlOUJhwjqa7mj2l6KCvBaRKv8DCEkQABoMNjM3NDIzMTgzODA1IgwPeIOEZdBc6zUXJZEq3APHWunlMBpTRMUz%2B8cyjIrGWK9GxO1O6bgutVmjoPu9LCepJf7BiKPehpbL1NLRXQmKopATem6%2F1ySIEDsrVtdu%2BluRMZGoNRZl3zscgq0zedYORz9GNCg2yd0PXhdjl29MK78vfUT%2B5xpMt8ea7YK2j656kXmFQwssIF3JwvK%2F05GpyymjYy0CLQ0ZO3WJ3QlRQvICjisXGXEhU8OEhByc%2FUZLq75leo%2BnzIvkEaMUHPKUjzyv7LO61QlaplYd9XBL65gF2JbyLqFwRQ%2FYbBBay0LfQuY5Q1HhaYKBVjShYEdJI10t7fbdRGw49%2BAtOMNVCLYsbjR5v7xp6mXrGC69bcuFMk19rNzQcKIin4siK2WRnOrECA2cQHUXr%2BCiUqe2mwwjMlN0i2%2BzucNiS7zyAFWd9J9KcsyINiGDv6xAB1zREQRluUaMC8Cg4SPT45MjPApxlFU215NFTdxNN5ukx%2F%2BPO4si97VmRJh9DfrF%2FzFm3DaXoWJcDpOmebvEC6fOV5qKsdzSBHll0wU38t2B0GG8X2b%2FCoTcTxyKqEy0%2FBKwoB6kJyAlybjJcwwZasHYOTctOuvar0W33YGaUoO0YEm5HVuP0NkyeUXIrmpc%2FCjJjTF6kVX%2BEG6mZTDP28bJBjqkAU%2FFrjzPv4khu2Ky24ofb96a%2BihsBOzg7HdJ8lwf3fu1ELpO9NjiV7FsbQL4rL0oouW6t0Wf%2BmxjDkrIDaC9CBEUIFZecQkDCAY6NH7gp3NUmrkb0JlPofIf6uZauVIJnftqStj9cios0xo2T70JKegRU1Y6%2BEHHlmCa0iS%2BFSreTs%2FUJMhOqaVOkzaoeYRnMtyciMis1ExLy9HoTs4Scm%2FVINIy&X-Amz-Signature=fa5ac271ef86b11999acc765709efc29420cf191be5c5d9b75dd222e0f040384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
