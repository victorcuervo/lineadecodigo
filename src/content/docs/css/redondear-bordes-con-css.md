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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEQY2HB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaqhEc%2F51GShxLP9Zy2C9kSlMnSNOKpXZorIWG3%2BbShAiEAm1DUr%2B5pSqjxAc9gr6dWA74VBuDSrHSWTG22igUksKwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMGFMPOPGQajsQuLCrcA9oOxeR485cDPHq2%2BN4z5qftFdjBvnl3rAFMdr%2BS59xvUXHRisPPhE1rjDmzSZD8elyaJzYB%2B4%2FHKKYpAN%2Bi5c%2B1JFaXuY%2FiDi8Q%2BrG2JzcVTW%2FN6dpw2nN2vyVvFPvPosSmd6fe%2BhtB4I%2F6Jcic9lQgM%2FW5tw2JRThl4ufml3A28YBp6%2BEblYSTri9a2YLwVjZDX3nKUj4a1h7Qv8xXz27vppHrbiZeXmAJnSCm9Be2fuybg68GCQ93C8rQP5csi7xxdpzO61QzOkj%2B%2BYir4BvflyQH5S19ZSnWUm4tmbz30tIH1MCSsSrG4CIE0W4smJ8IBYZUBeoT06Q661Me5lSzf2kAYNmAlc7HMtrMkawucBBoP9mESaPR7JWXk8yDvc0KiK7Mrwk53x0gqA9s5OqHWZA%2BUUkVdQ1omUFaypLv5mdQas5K%2Fk7PJ%2Fsz3HM5F63F23S9CnUplmR6H%2BL%2FfoqqsNT%2B%2FS%2FedBVACwuQJKIVG%2FHgb6CCjm%2BIYVku74EKI4tmStE010xG9U7XAFdC3YBE9V61zy2LXo%2FMxF%2FRteRmp%2FucywwaeYPRzsjxZmPslt4%2FePAv%2B0CKv%2FV9nK5RpmWdIrIK4nu%2FN01quUGlBUORce7nm4lDi4xrQF0pMLKz3MkGOqUB2vc43B3bUP%2Fdf0Bx1p3q5LAvLly3SEEZIwNmI9z4qZbLsiPLQJYjEqXHwN8ZNKzFEMWncBxm%2Ff7bXdFhtUc2iQY74GHJhD9dVacryRkmk33InQnmWitmy0zVuIg2s5%2Fzq88s7Ya69eESP1h3k5dqBBb5RDND4TVg36Tf7zNmVhNzqLcBz9e7DBhOK1oWen19S8j1hc0QaUutkePKBDDFS3mZByMg&X-Amz-Signature=4d524de7f1b9d95205e4f178fb94e27cd50cc1aef410010110be2d17048409ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEQY2HB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaqhEc%2F51GShxLP9Zy2C9kSlMnSNOKpXZorIWG3%2BbShAiEAm1DUr%2B5pSqjxAc9gr6dWA74VBuDSrHSWTG22igUksKwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMGFMPOPGQajsQuLCrcA9oOxeR485cDPHq2%2BN4z5qftFdjBvnl3rAFMdr%2BS59xvUXHRisPPhE1rjDmzSZD8elyaJzYB%2B4%2FHKKYpAN%2Bi5c%2B1JFaXuY%2FiDi8Q%2BrG2JzcVTW%2FN6dpw2nN2vyVvFPvPosSmd6fe%2BhtB4I%2F6Jcic9lQgM%2FW5tw2JRThl4ufml3A28YBp6%2BEblYSTri9a2YLwVjZDX3nKUj4a1h7Qv8xXz27vppHrbiZeXmAJnSCm9Be2fuybg68GCQ93C8rQP5csi7xxdpzO61QzOkj%2B%2BYir4BvflyQH5S19ZSnWUm4tmbz30tIH1MCSsSrG4CIE0W4smJ8IBYZUBeoT06Q661Me5lSzf2kAYNmAlc7HMtrMkawucBBoP9mESaPR7JWXk8yDvc0KiK7Mrwk53x0gqA9s5OqHWZA%2BUUkVdQ1omUFaypLv5mdQas5K%2Fk7PJ%2Fsz3HM5F63F23S9CnUplmR6H%2BL%2FfoqqsNT%2B%2FS%2FedBVACwuQJKIVG%2FHgb6CCjm%2BIYVku74EKI4tmStE010xG9U7XAFdC3YBE9V61zy2LXo%2FMxF%2FRteRmp%2FucywwaeYPRzsjxZmPslt4%2FePAv%2B0CKv%2FV9nK5RpmWdIrIK4nu%2FN01quUGlBUORce7nm4lDi4xrQF0pMLKz3MkGOqUB2vc43B3bUP%2Fdf0Bx1p3q5LAvLly3SEEZIwNmI9z4qZbLsiPLQJYjEqXHwN8ZNKzFEMWncBxm%2Ff7bXdFhtUc2iQY74GHJhD9dVacryRkmk33InQnmWitmy0zVuIg2s5%2Fzq88s7Ya69eESP1h3k5dqBBb5RDND4TVg36Tf7zNmVhNzqLcBz9e7DBhOK1oWen19S8j1hc0QaUutkePKBDDFS3mZByMg&X-Amz-Signature=f7443e1c05a3cd4fa092eecf8f142667065d29fcbaa2f780b91d9b3c0cf2c07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
