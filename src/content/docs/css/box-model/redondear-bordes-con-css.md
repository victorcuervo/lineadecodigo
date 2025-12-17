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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZWDBZT4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wL%2B2TD%2FY%2Fqj2twlkWYFE8xG8jIEzsY004jL4vKCzaQIgYZwiup0tkmqYD2oEUTEv6J5oO5IVaSAp8ZHl82tUr78q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJB3Q7koepUwTT74FircA17TH3zwBWDqeiFpPAQNEU2bhE9mHw71LyOh6sGW5zIBJixerkvi9FExf3D83SigN%2FwlFksWXgVTT2ZSl4HkFjsKBq2e1B7LmmFjtDA6kkE6BpgtXI922p5YBWqvCeLglVX5aeRXiBdi17C099FodnbbBnTn8mmePixLRko4HFqSAyP%2BE67sk1PlxCCdy9SEZbFU3kGA4D7R6fxdqmZLGs%2FMBAnH1KWpSUUxQbrZkdfd%2BlhzCqyvzfl1PoxOL7KXZDTq%2FXvJkIzCtepeMC8rqnbht7PxecDlr7GRPZMW6SAfVGfaKfbX30n9cOvZ52YYIQUILQNbDVGsUNmOrAhd3w3A%2FGYVM%2BPiCI16GxLHgFgrrI0RBOt1OiSiAXmh3Tc6Fnb8PfK83KW2AjBUqRPKUkbqm8FHRMpsRtatdqGhtnOaQ5h4X7RiqdopKKoukuPuWzJKqw9maEXkxRN8ImGHtZrzPJXCuft12Sp%2BYhkwIVsawg3x1MWxIhnVspJtK1Hf9aW0x%2F2KVzvzMXSeB5Y0F2eTkHuhoJg3yA4SneOlwM1JKGHx%2B%2BJF33%2F6BvhC6VrqTS5Nnnla7KqwDys2DvrpiviSvZfYmz1IO0TG7rU1j4zm%2FA5W8nReBrSgTyUHMNGViMoGOqUBymrLEVuIq0cODGpJmd3tZklTh%2B9LXdwe6ztJ5m5XzwqabVqlGLjXG3mroVzMj6sbKTwEsYYwQ9gZz3%2Fc4UzgzEHlfkGu8Qny3Qd0s5%2FXUdbySqiAHCS9vYsyhtJtgb7HvB5vkmhaoM0kErLFijYKfbU5upJzn6StQQ%2BO%2Bl0LhOIzW44E43mtgUYhhKycHWMZeWHPG4gyaQaPa7x4yHW3LCos2NSR&X-Amz-Signature=8dfb637909a936b67217bac1afa3c72c8834d818e1a5e11f8cb265306fc2b90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZWDBZT4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wL%2B2TD%2FY%2Fqj2twlkWYFE8xG8jIEzsY004jL4vKCzaQIgYZwiup0tkmqYD2oEUTEv6J5oO5IVaSAp8ZHl82tUr78q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJB3Q7koepUwTT74FircA17TH3zwBWDqeiFpPAQNEU2bhE9mHw71LyOh6sGW5zIBJixerkvi9FExf3D83SigN%2FwlFksWXgVTT2ZSl4HkFjsKBq2e1B7LmmFjtDA6kkE6BpgtXI922p5YBWqvCeLglVX5aeRXiBdi17C099FodnbbBnTn8mmePixLRko4HFqSAyP%2BE67sk1PlxCCdy9SEZbFU3kGA4D7R6fxdqmZLGs%2FMBAnH1KWpSUUxQbrZkdfd%2BlhzCqyvzfl1PoxOL7KXZDTq%2FXvJkIzCtepeMC8rqnbht7PxecDlr7GRPZMW6SAfVGfaKfbX30n9cOvZ52YYIQUILQNbDVGsUNmOrAhd3w3A%2FGYVM%2BPiCI16GxLHgFgrrI0RBOt1OiSiAXmh3Tc6Fnb8PfK83KW2AjBUqRPKUkbqm8FHRMpsRtatdqGhtnOaQ5h4X7RiqdopKKoukuPuWzJKqw9maEXkxRN8ImGHtZrzPJXCuft12Sp%2BYhkwIVsawg3x1MWxIhnVspJtK1Hf9aW0x%2F2KVzvzMXSeB5Y0F2eTkHuhoJg3yA4SneOlwM1JKGHx%2B%2BJF33%2F6BvhC6VrqTS5Nnnla7KqwDys2DvrpiviSvZfYmz1IO0TG7rU1j4zm%2FA5W8nReBrSgTyUHMNGViMoGOqUBymrLEVuIq0cODGpJmd3tZklTh%2B9LXdwe6ztJ5m5XzwqabVqlGLjXG3mroVzMj6sbKTwEsYYwQ9gZz3%2Fc4UzgzEHlfkGu8Qny3Qd0s5%2FXUdbySqiAHCS9vYsyhtJtgb7HvB5vkmhaoM0kErLFijYKfbU5upJzn6StQQ%2BO%2Bl0LhOIzW44E43mtgUYhhKycHWMZeWHPG4gyaQaPa7x4yHW3LCos2NSR&X-Amz-Signature=8a427b438f909e93da01a7dee29c0230fe9ddaf7021ebef62e53b9551f46e65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
