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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKE6SB7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BxVVdtRvrc7HLD4E2RSvQzlJ6u5CHKvqluEJ6JV3QmwIhAKBdd2DesPtnPJhfLvHwmQHxemSzlHgP%2BdSSNlfWJVU%2FKv8DCHQQABoMNjM3NDIzMTgzODA1Igw%2BQ9LneTN2jPQrYm4q3APbDEvW8uIXVeeTVa%2BDAfXtQPNJ00YNYspqoK7L9BmOv6qvbNRBTUYmV7Q1jSI5Q5FcUH%2Fg7se0QbnXM%2FNE1eNlGcKZmJFRQfkx0JBEFs64ivTwpkUKvsU32CRX3hJ4aCxLmnf%2BSim1ZLtEOiRnPDOsxAD0PaThG17SWZ3%2FEXDTN5T7cYt5vva575UxEQL%2F265i1qpn%2FleeA3%2BNh6MEhEA%2FCInLdPqcp3dUw4ZWXg6tf1xe2MvVqjoCC2CJ92RIsZE5U6tHhkCtdMi1Crt0MH8pyUlirBtT1zhAIefkI%2Fpf2ubWBkZ22ZgvLfqL969DofHkQbPzpSaGa3%2B2od%2FWbAjrAPbBUkW18%2BYUh63wvcl02wpgkmceDuG3oqZUyV%2Bj3%2FWtVC2KPvYrWt2J6SOfq0apbVqy7JRbvE6vYn60lV6XiHrUGhA%2FvpexA0jftQXwV2JEdhIKBfdZmQZHzRBWNk7T%2B9Mt5GDdtLvn%2FmJC75IalFXQ7wGudoXDBT1ahm9EDmt1Xztr5NCWBst24U5xmqBy80tLB%2Fr6pmflVWv5goG%2Fr2l2B6mxPxEwO5lIe2qdOWAapvxfQ%2B48dluZ%2BnO1KI1A5At8nLvCn5hA91WlKhF7h5geq0GZcIIE5S5S5DCNidDJBjqkASTzximWbsZu27D7a%2BiEfN3rGJM8J9AQXmDKwHX4sVr4cLUN%2FxmDdj5OVOj97p24hVZisNSc45Ji%2BVLwQuzCW2ENVeHHSrqL4xs4KxoPfSEEN4%2FNlmA3ARcupCK2m7nxf3N%2BOsCypoZq2P7LptTAlEhQ14Nnu%2Fmf9VxtusMLkw0X2cdmR5NDj0p7VDG6%2F66Ce3VVk28WqGHLhi59lKRTX5b7qxdb&X-Amz-Signature=f4a16373c4d57c091d64d53441020664d14642685ff622e8456871cfeeca0a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKE6SB7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BxVVdtRvrc7HLD4E2RSvQzlJ6u5CHKvqluEJ6JV3QmwIhAKBdd2DesPtnPJhfLvHwmQHxemSzlHgP%2BdSSNlfWJVU%2FKv8DCHQQABoMNjM3NDIzMTgzODA1Igw%2BQ9LneTN2jPQrYm4q3APbDEvW8uIXVeeTVa%2BDAfXtQPNJ00YNYspqoK7L9BmOv6qvbNRBTUYmV7Q1jSI5Q5FcUH%2Fg7se0QbnXM%2FNE1eNlGcKZmJFRQfkx0JBEFs64ivTwpkUKvsU32CRX3hJ4aCxLmnf%2BSim1ZLtEOiRnPDOsxAD0PaThG17SWZ3%2FEXDTN5T7cYt5vva575UxEQL%2F265i1qpn%2FleeA3%2BNh6MEhEA%2FCInLdPqcp3dUw4ZWXg6tf1xe2MvVqjoCC2CJ92RIsZE5U6tHhkCtdMi1Crt0MH8pyUlirBtT1zhAIefkI%2Fpf2ubWBkZ22ZgvLfqL969DofHkQbPzpSaGa3%2B2od%2FWbAjrAPbBUkW18%2BYUh63wvcl02wpgkmceDuG3oqZUyV%2Bj3%2FWtVC2KPvYrWt2J6SOfq0apbVqy7JRbvE6vYn60lV6XiHrUGhA%2FvpexA0jftQXwV2JEdhIKBfdZmQZHzRBWNk7T%2B9Mt5GDdtLvn%2FmJC75IalFXQ7wGudoXDBT1ahm9EDmt1Xztr5NCWBst24U5xmqBy80tLB%2Fr6pmflVWv5goG%2Fr2l2B6mxPxEwO5lIe2qdOWAapvxfQ%2B48dluZ%2BnO1KI1A5At8nLvCn5hA91WlKhF7h5geq0GZcIIE5S5S5DCNidDJBjqkASTzximWbsZu27D7a%2BiEfN3rGJM8J9AQXmDKwHX4sVr4cLUN%2FxmDdj5OVOj97p24hVZisNSc45Ji%2BVLwQuzCW2ENVeHHSrqL4xs4KxoPfSEEN4%2FNlmA3ARcupCK2m7nxf3N%2BOsCypoZq2P7LptTAlEhQ14Nnu%2Fmf9VxtusMLkw0X2cdmR5NDj0p7VDG6%2F66Ce3VVk28WqGHLhi59lKRTX5b7qxdb&X-Amz-Signature=a4d9a9b66a20e3d1f633beae4d5a56880b9ec4e7ba8119b9eb863e4ede15f3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
