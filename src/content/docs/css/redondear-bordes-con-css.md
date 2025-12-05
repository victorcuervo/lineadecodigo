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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4XAOTK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhIw8d2%2BqGwfF9rB%2B2SI5Co0rXamM2vstre2rmqcYUQIgEzDWPLmn1rykOpTCbE7tiMOePJjbo%2FYOBf2BbAW0JpYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBqdu%2BHr3X8EQh2uKSrcA4Ahu2l6rDbnkqmg4homMIEBxQFak1xkQtFjUzKtojri2xvenpDw9lAQkDqG2axa6GvUkXNu4%2BnlTZlQoGO2h%2BpKZYnJrHGbW3klCSOea1wFBkFNJcbcpy7cFFNvzOjBjDYmA28%2BM%2FqJce4NVuKN%2FFfC5Druci9F3EK1x1436l5GkJcjZID7LyZFPLw6hAIPD5hTQ12Of51EJnuDl43%2BYZwr6vqZNCUVOdp8WsMVsIl6cuWAf9Jocxppu9x2%2FJNB7TnqVLhsWgBoE7ChsNRsXFrCczK5nExipnrRg4idjbbhv%2B2CDEaJeAm87kpCC5ANmgMFfuw5GuDR1MaWB%2F7aUjychvASXckH90IPoHgFPgaB3G%2FeNYdIcYFitTlAk19C4t%2F2t1i2dE%2F8g8%2FyXiSYncZSgSJ41Hxfgghh6MPj3VBmEMgqRcD7OhhXjMOPmJC873agZ4L5OJctwp7I5yzbgZ02cKfYnlhX53V7tNQ4mrBqCWCwyTEHd57JN78vV6UxRRwznFTdvdTXyBkLSX%2BtEq9gbu53sragUHbqnrHb5%2BbE3xxQvt%2Bjo71pOwLdzafNEZfd5Vihyr7%2FdPpSbDYjI2hWTW6kdbswL8jMEEExThzDI4My6zMVNwc5vckFMO%2BLyMkGOqUBII6Goqdv%2FkvYegYsa1RxboyXePqVvVnClSMy0m1EZIBTbPQkTD%2BRnOuNHOkOO1EfNEyUSsYVewwxgSpx1Qt86fIyCps0G%2B%2BqpjIsJg%2F8NSUJTVicOdofUc2raRpvAjbZj6KEi6EZ3I0JMYG5rUJPl%2F2lfY7Bhan%2B8ek27ZYViGwNHiZ%2FSRSfBvj4ZPSlyOjrcV4tmH0et1m0ZEenWtNlBoPACVhu&X-Amz-Signature=d25eb9dba7f280abbaf4439028bb436d221ff2b53abba543e41caf993927cbf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4XAOTK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhIw8d2%2BqGwfF9rB%2B2SI5Co0rXamM2vstre2rmqcYUQIgEzDWPLmn1rykOpTCbE7tiMOePJjbo%2FYOBf2BbAW0JpYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBqdu%2BHr3X8EQh2uKSrcA4Ahu2l6rDbnkqmg4homMIEBxQFak1xkQtFjUzKtojri2xvenpDw9lAQkDqG2axa6GvUkXNu4%2BnlTZlQoGO2h%2BpKZYnJrHGbW3klCSOea1wFBkFNJcbcpy7cFFNvzOjBjDYmA28%2BM%2FqJce4NVuKN%2FFfC5Druci9F3EK1x1436l5GkJcjZID7LyZFPLw6hAIPD5hTQ12Of51EJnuDl43%2BYZwr6vqZNCUVOdp8WsMVsIl6cuWAf9Jocxppu9x2%2FJNB7TnqVLhsWgBoE7ChsNRsXFrCczK5nExipnrRg4idjbbhv%2B2CDEaJeAm87kpCC5ANmgMFfuw5GuDR1MaWB%2F7aUjychvASXckH90IPoHgFPgaB3G%2FeNYdIcYFitTlAk19C4t%2F2t1i2dE%2F8g8%2FyXiSYncZSgSJ41Hxfgghh6MPj3VBmEMgqRcD7OhhXjMOPmJC873agZ4L5OJctwp7I5yzbgZ02cKfYnlhX53V7tNQ4mrBqCWCwyTEHd57JN78vV6UxRRwznFTdvdTXyBkLSX%2BtEq9gbu53sragUHbqnrHb5%2BbE3xxQvt%2Bjo71pOwLdzafNEZfd5Vihyr7%2FdPpSbDYjI2hWTW6kdbswL8jMEEExThzDI4My6zMVNwc5vckFMO%2BLyMkGOqUBII6Goqdv%2FkvYegYsa1RxboyXePqVvVnClSMy0m1EZIBTbPQkTD%2BRnOuNHOkOO1EfNEyUSsYVewwxgSpx1Qt86fIyCps0G%2B%2BqpjIsJg%2F8NSUJTVicOdofUc2raRpvAjbZj6KEi6EZ3I0JMYG5rUJPl%2F2lfY7Bhan%2B8ek27ZYViGwNHiZ%2FSRSfBvj4ZPSlyOjrcV4tmH0et1m0ZEenWtNlBoPACVhu&X-Amz-Signature=8e47516a3d23a1547ac0c207a50274b7509d16a3eb70dc0e3c670dfb571943e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
