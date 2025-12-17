---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVOE4QD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHS0R86L9fIVSC7eRmorLIGPzRd4JdV%2FmsPyq7RT9wj3AiB6jRL5EFpDWLX7ysdcQ7GlMZUe0u3nYERWHkiAKxGZByr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMD6GJV84k1H7clYJHKtwDUb7ls1jD4ELjE%2BDa01eGFp%2FTMER9QReGSbWFOBEoxK78mofLqU750dpIlK3plyP7iTzenhbZzr9nFGyh1R8VroQ8v7z2CjdrPPzuh5448gnC8u1Rih36SIQyndB7eL6KFNv7T6l4g%2BW3nqzwfDcgRuj7L0Aefbv9wjbGX10h0xB0b5oqrXcEbMz9vBi237VZkO8Z2ctUm%2FBB4JAuTwwA4A9QLWsEqdhO%2FIal8r6NRIIt%2BxnnpOQe70KS537xg9%2Fvo9Ay1zuZUHE%2FZ3BJ0SC7Sjw3g3XX%2BfV5iNHgb21e%2FI%2FjadFGey2nV9I0pnvisrfEuxCQldCu8iJOsR26cdx0%2Fz6QLn0fwl44z20Y%2BloCbJvC8GCJryiKkpMrOHKjUOzICkjuB%2Bbv63KF%2FrZp8Dkua4IlRCfHskn1TFKSxiZu5%2B6yvZqwLjge52s%2FNg%2BEVUCgQwJm5HA7e4Su4hnU5netWa4rYSCzlKbrJn22iMqWTl8hwYsmB03WFs1%2BHm2szo%2FN9uwJGXQpVahSsCgHJv%2BIZHdRPMezFwhAg%2Fv0DaDX0Y2eyZytLuVzXlCn%2FDd%2BDtTHLXtcOCL5Bsjw64PIIGT0s0Ha24iUhC7GXgMrlT%2BWYt79vX5bBbIP%2FVglEDow7e%2BJygY6pgGtqgFXMIyuUVr79BM9QILPmhwPdzz5Qwj0G%2BFQsPp%2BmKOy8MbQ%2FXztJJcEbEAJtsyFHmTR7e4T4Wb5q%2B99g5RPwLRo%2Buj3UFkGn1SQhhHNc6pS%2BUTDgnl29%2FJQscHmJ7LU9fbgE%2F1Q4btvJYMUvp9us7YLgpDn5fU2k0uz9YcRBo9jWnw%2FUtIMDDWCamG4K0p%2FOE6bA6F2hxA%2FdTXwxp7MPBL1VNqz&X-Amz-Signature=e51732250cda409a5dab1aa78fcbb1e5a8face530d866e942d539780c593cdea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVOE4QD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHS0R86L9fIVSC7eRmorLIGPzRd4JdV%2FmsPyq7RT9wj3AiB6jRL5EFpDWLX7ysdcQ7GlMZUe0u3nYERWHkiAKxGZByr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMD6GJV84k1H7clYJHKtwDUb7ls1jD4ELjE%2BDa01eGFp%2FTMER9QReGSbWFOBEoxK78mofLqU750dpIlK3plyP7iTzenhbZzr9nFGyh1R8VroQ8v7z2CjdrPPzuh5448gnC8u1Rih36SIQyndB7eL6KFNv7T6l4g%2BW3nqzwfDcgRuj7L0Aefbv9wjbGX10h0xB0b5oqrXcEbMz9vBi237VZkO8Z2ctUm%2FBB4JAuTwwA4A9QLWsEqdhO%2FIal8r6NRIIt%2BxnnpOQe70KS537xg9%2Fvo9Ay1zuZUHE%2FZ3BJ0SC7Sjw3g3XX%2BfV5iNHgb21e%2FI%2FjadFGey2nV9I0pnvisrfEuxCQldCu8iJOsR26cdx0%2Fz6QLn0fwl44z20Y%2BloCbJvC8GCJryiKkpMrOHKjUOzICkjuB%2Bbv63KF%2FrZp8Dkua4IlRCfHskn1TFKSxiZu5%2B6yvZqwLjge52s%2FNg%2BEVUCgQwJm5HA7e4Su4hnU5netWa4rYSCzlKbrJn22iMqWTl8hwYsmB03WFs1%2BHm2szo%2FN9uwJGXQpVahSsCgHJv%2BIZHdRPMezFwhAg%2Fv0DaDX0Y2eyZytLuVzXlCn%2FDd%2BDtTHLXtcOCL5Bsjw64PIIGT0s0Ha24iUhC7GXgMrlT%2BWYt79vX5bBbIP%2FVglEDow7e%2BJygY6pgGtqgFXMIyuUVr79BM9QILPmhwPdzz5Qwj0G%2BFQsPp%2BmKOy8MbQ%2FXztJJcEbEAJtsyFHmTR7e4T4Wb5q%2B99g5RPwLRo%2Buj3UFkGn1SQhhHNc6pS%2BUTDgnl29%2FJQscHmJ7LU9fbgE%2F1Q4btvJYMUvp9us7YLgpDn5fU2k0uz9YcRBo9jWnw%2FUtIMDDWCamG4K0p%2FOE6bA6F2hxA%2FdTXwxp7MPBL1VNqz&X-Amz-Signature=c3efd8a0ace16231e95ff872ca67c58dc9b8c97157122919af110b01079568cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
