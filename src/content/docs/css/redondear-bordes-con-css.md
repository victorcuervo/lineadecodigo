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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AUS54MZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC8w8TxALUy4teCmpN7j5ltnXHzp9dtFtgwenim8y%2FAtAIhAIa77vX9nphm6l0A0vSPI1yjmdVJvQEBOfDW%2Bjlem0xeKv8DCDYQABoMNjM3NDIzMTgzODA1Igz9j%2BkAZaWMRGvqPncq3AMwwTLfBDk%2FIsPB9FYjRj61flcIU%2FOWGtFTMoaQ72feFNAyJHBBbZNFq3Q6anDWl4EuHpEJdoVoDvWPFn3NHPXHlOZe2byMMI4teReY%2FJBYoEOI9495vBBG93G%2FBRiBl5pfvoW8TiYyW8k1zdkfJHXPyj7em2xqaWzgG8IJjf6yWbprKdXm8ybxbu%2B8Q4qG6pzUanK87j7jRH94lnRQj4TzdzvHUpSMzg%2BCVfo5AW%2B36Z20fNPDTqJnxIPkZnTbJ7%2BnJo%2F6%2F6%2Bq9UCZP6BeAYgRFb8k50k7w9bFc1DJJQ%2BIrcWIVNccgBN5ZOS9E%2FAx%2F%2Fpg6TYql7t53NusKoU1OUAG5p2nqcNCQEMp%2FrqPxuvHonNjzl37X28PLCc1jBfDIFsEKjs8mZuNwyQHPqHLRQHmF%2BuxP3S8lOYhZGxzWUfyimPPVhwbn9FhekHPXJ53RvS9241gFRgqci3Ecknm2cMsuLyJNUydg3cDzLaAa7T3dTmuNqdJpa%2FVlHU48Lt%2BFIXyoh%2F%2BcmHR5QM1V5zfJWFc41aAdqO%2FLyVV%2Bbx4BsJtjxXxhCizxPlK6qNUM0CqyaqWXx2ptZU2drJugNwjH67k19nMp4MK5lf%2FxmVQb107McS9Bwe0BFe%2BTnsxaTDnvcLJBjqkAV9yAM%2FFD%2F5GHW7Co9KZaw%2FUDSgqH39Pjy5pTDgEKLrFKiqJTCp3KNz0dxW%2BzUUwvDPtjG1QopMQ0dkAJFb%2FRCnC904oQH%2FKCooyphuuZE23vsOvHCydq4FywC5gpBkVh%2FN3CNrdIBPYITz6ejM%2Fh9%2FuprWntkL%2FUfUHaQWBY1CsBVsny%2FLh6YyFNdzt8c7oH04DLXo432P4rbdASQBT8H%2Fzv1Xz&X-Amz-Signature=4b037b4b015a71d80a67e720d74bd14166ed4120d366d58b3f903eedc4d1a975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AUS54MZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC8w8TxALUy4teCmpN7j5ltnXHzp9dtFtgwenim8y%2FAtAIhAIa77vX9nphm6l0A0vSPI1yjmdVJvQEBOfDW%2Bjlem0xeKv8DCDYQABoMNjM3NDIzMTgzODA1Igz9j%2BkAZaWMRGvqPncq3AMwwTLfBDk%2FIsPB9FYjRj61flcIU%2FOWGtFTMoaQ72feFNAyJHBBbZNFq3Q6anDWl4EuHpEJdoVoDvWPFn3NHPXHlOZe2byMMI4teReY%2FJBYoEOI9495vBBG93G%2FBRiBl5pfvoW8TiYyW8k1zdkfJHXPyj7em2xqaWzgG8IJjf6yWbprKdXm8ybxbu%2B8Q4qG6pzUanK87j7jRH94lnRQj4TzdzvHUpSMzg%2BCVfo5AW%2B36Z20fNPDTqJnxIPkZnTbJ7%2BnJo%2F6%2F6%2Bq9UCZP6BeAYgRFb8k50k7w9bFc1DJJQ%2BIrcWIVNccgBN5ZOS9E%2FAx%2F%2Fpg6TYql7t53NusKoU1OUAG5p2nqcNCQEMp%2FrqPxuvHonNjzl37X28PLCc1jBfDIFsEKjs8mZuNwyQHPqHLRQHmF%2BuxP3S8lOYhZGxzWUfyimPPVhwbn9FhekHPXJ53RvS9241gFRgqci3Ecknm2cMsuLyJNUydg3cDzLaAa7T3dTmuNqdJpa%2FVlHU48Lt%2BFIXyoh%2F%2BcmHR5QM1V5zfJWFc41aAdqO%2FLyVV%2Bbx4BsJtjxXxhCizxPlK6qNUM0CqyaqWXx2ptZU2drJugNwjH67k19nMp4MK5lf%2FxmVQb107McS9Bwe0BFe%2BTnsxaTDnvcLJBjqkAV9yAM%2FFD%2F5GHW7Co9KZaw%2FUDSgqH39Pjy5pTDgEKLrFKiqJTCp3KNz0dxW%2BzUUwvDPtjG1QopMQ0dkAJFb%2FRCnC904oQH%2FKCooyphuuZE23vsOvHCydq4FywC5gpBkVh%2FN3CNrdIBPYITz6ejM%2Fh9%2FuprWntkL%2FUfUHaQWBY1CsBVsny%2FLh6YyFNdzt8c7oH04DLXo432P4rbdASQBT8H%2Fzv1Xz&X-Amz-Signature=dffa2c42fa6994700fa4885de8234d091c5109e30ac8db0ee9469fe3cf52099d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
