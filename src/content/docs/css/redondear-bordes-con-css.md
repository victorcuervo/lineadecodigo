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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXXZSP2C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICboBWu91l54%2BaHVuBm6X3e9vWW89Xtrn6u3H2deo8%2BUAiEA6j8wWO3g2JLq3lBX%2B1GAp3ZfxXEpiDhiH989sGjXmOwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGlqjVGHbVSFxeKKSrcAyfBLA8ZYhodti95ScbpKgB%2FXptzW5cfqlWGz17U1zwtg0JvnNEaS8Jll3nPpCkt%2Fx231iwbLW4Fl1dcPai%2FGYzO6xk%2BR82n%2Fc9tumgLlXdNzA72egFg0h2AW5rR7Hjte6DOisntqrx%2BI2trHANUO%2FZpcx4VZY0JYYHq22%2FQBK0IpFl7fdCIVmFhu1qj3DVImkRDperehrSlRVwCYTzvYAUOkZTkgyH0ruea0jaSIrDnHHn3m3n1FRGTIMd1ookkKjXvcC7vPUK0zL7a9u%2FQr2n3EprfGg732h40B4fTRstZygqNSdtIbP9kumKIb4kKLVZ8HUAbXTg%2Fvf0Vl1N33Lpqb2z%2F629UFcsuuXrG21ScCw%2Bq6D7r1Kc0zO3oGCM6vsyZh2VRUUnlg%2B2nEJe7VWfCtG0SrtD77GFrqVQNZmV0eWyPjVtptjqh8mVOC7xzXYDGcG16yvuQ22be8gNKZQWFHTlTlLvV1qvt3virWvQe8NxT3lu3lCnttKW1Kiw7Of4kAIUTqScbepjyrNAm3xdQpL0aJzTIZSaUwVu8b54uA4e9YJypFpP46m2Rv83hLi%2Fy3MMYR3IlHU%2F9CYUNJ%2FLkOGNL08XYuJtwZlPCe3C4cTR5j7CEP1TVjFSqMLru2ckGOqUBOh8EeswhUiw8Y9TBAcbk%2FxWSnhjb5DT%2FkUo%2BFipoIOIIfCNrJXtEMfHJokMjQpOoI%2FjZIDVsiEDB2G13rYNwsETkMzQrgF3NGJfbI5LWpfCU9R5WJxcAw4vWedBjCAv3SqeTYnS%2FFQrnxK4jlW12KhsgpMsaLKqRdWTLT8QP%2FuzUvXiLRyq7L1CbXHCW4mLjJHE6JIo%2BY%2Bh%2BDuvuP9%2F3uulUfL0B&X-Amz-Signature=bafb5fd38f29a36c4f4b4c809dbb86395f75c5d82fb5f88bab325856ba9fcab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXXZSP2C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICboBWu91l54%2BaHVuBm6X3e9vWW89Xtrn6u3H2deo8%2BUAiEA6j8wWO3g2JLq3lBX%2B1GAp3ZfxXEpiDhiH989sGjXmOwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGlqjVGHbVSFxeKKSrcAyfBLA8ZYhodti95ScbpKgB%2FXptzW5cfqlWGz17U1zwtg0JvnNEaS8Jll3nPpCkt%2Fx231iwbLW4Fl1dcPai%2FGYzO6xk%2BR82n%2Fc9tumgLlXdNzA72egFg0h2AW5rR7Hjte6DOisntqrx%2BI2trHANUO%2FZpcx4VZY0JYYHq22%2FQBK0IpFl7fdCIVmFhu1qj3DVImkRDperehrSlRVwCYTzvYAUOkZTkgyH0ruea0jaSIrDnHHn3m3n1FRGTIMd1ookkKjXvcC7vPUK0zL7a9u%2FQr2n3EprfGg732h40B4fTRstZygqNSdtIbP9kumKIb4kKLVZ8HUAbXTg%2Fvf0Vl1N33Lpqb2z%2F629UFcsuuXrG21ScCw%2Bq6D7r1Kc0zO3oGCM6vsyZh2VRUUnlg%2B2nEJe7VWfCtG0SrtD77GFrqVQNZmV0eWyPjVtptjqh8mVOC7xzXYDGcG16yvuQ22be8gNKZQWFHTlTlLvV1qvt3virWvQe8NxT3lu3lCnttKW1Kiw7Of4kAIUTqScbepjyrNAm3xdQpL0aJzTIZSaUwVu8b54uA4e9YJypFpP46m2Rv83hLi%2Fy3MMYR3IlHU%2F9CYUNJ%2FLkOGNL08XYuJtwZlPCe3C4cTR5j7CEP1TVjFSqMLru2ckGOqUBOh8EeswhUiw8Y9TBAcbk%2FxWSnhjb5DT%2FkUo%2BFipoIOIIfCNrJXtEMfHJokMjQpOoI%2FjZIDVsiEDB2G13rYNwsETkMzQrgF3NGJfbI5LWpfCU9R5WJxcAw4vWedBjCAv3SqeTYnS%2FFQrnxK4jlW12KhsgpMsaLKqRdWTLT8QP%2FuzUvXiLRyq7L1CbXHCW4mLjJHE6JIo%2BY%2Bh%2BDuvuP9%2F3uulUfL0B&X-Amz-Signature=23945f3a52e2e584f50d42a630e5461d035084ad731db842ae868e34c841f8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
