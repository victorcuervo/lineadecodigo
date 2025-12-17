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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRBQDKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLaRWjaZbUqtWqZ2R%2FAfvRpInVcX8KzXlsa89vYuJkQQIgS9ZCrc2j1JUFrQstqpRckEq6L8EHMBI8%2BfwOtfSD6VgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxuEK9oyx6jOfR%2BcircA48E8Nysb2P2nJFTXGv9LwUVph9WemAhVFpWYO5%2F561whvz%2F9FAsr2ecy37hs4uhWSeWaOYVqlaQuue1%2Fe582prM1XdotvLjVgGpd1U6nzahePnOyO6gMryj5TZ6t7ZCEC9pQJOfBgQUBYTenDuTKlrTy%2Bh0p%2Fv6hkPgkXh%2F4SlCWP5xPly9nBAL8pdDf7NetbKiHRAef6AKG3kg6%2B%2FoRfJTpuMbnR%2Bl1edxyEk%2Bbn1EW%2BBH3NUdvrCge%2FE0hsQHZRjo9%2BAlVJdjHnVHDXjrvevh3q7WqwC2M1%2BX8FZ5U%2FnxK5WoTcB4DqDFPqf%2BKSPt0kX9PCvZzG%2BemcPi1hGa4fZch1R3zk4zhOATmq%2FiRPLf4p4IZ%2BBJPhYxrxRlnh4X%2FGp0cvwhId42GiwBXnbxY5d4KwkWPLDXMg04PuXtfH06uaLj1CvNKD7TmJOadXiN2y2BigAn49U5ztMVYPVuAfLo7Tph1f8gGgEaKJaitPr8IYCAQN8Wqsj%2FSX11LjEhK3vcnpuC1cWrNp4i%2F6JPWjVdP0argb%2BFLu2VN4AdLUryIqkjXUkser1pi6R5bWR%2BAMf7RFlzSJSBGyMYcDK9X28fr%2FYjwENXL6moK1qCkx63QHBelq1GQT791sRDMMqei8oGOqUBU1g5Xa%2BBAaoQO7qvJND4GJY6E0SJbSVLQw3tOyMc%2BH5C6vxHMGn1N32BSjKK54RlxSYDdaMQ1U5%2BqRq86H9A8a6AK5o%2FQwwf4FTWunQ4fMN7HVNnnhR%2BkzItWiPMZ1HdLsCLqv4iF9DaInjsPWw2hnCAFJ27tESQtSodMagYJyG6eBleD1pAyjcYUdgKIIhk0LWNu%2FbY1ypavbgFOX9Mqs6Sm5q2&X-Amz-Signature=40ecc666846082fa70f44807897d888f5e61f2481a702ce2e478152f3d11df68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRBQDKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLaRWjaZbUqtWqZ2R%2FAfvRpInVcX8KzXlsa89vYuJkQQIgS9ZCrc2j1JUFrQstqpRckEq6L8EHMBI8%2BfwOtfSD6VgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxuEK9oyx6jOfR%2BcircA48E8Nysb2P2nJFTXGv9LwUVph9WemAhVFpWYO5%2F561whvz%2F9FAsr2ecy37hs4uhWSeWaOYVqlaQuue1%2Fe582prM1XdotvLjVgGpd1U6nzahePnOyO6gMryj5TZ6t7ZCEC9pQJOfBgQUBYTenDuTKlrTy%2Bh0p%2Fv6hkPgkXh%2F4SlCWP5xPly9nBAL8pdDf7NetbKiHRAef6AKG3kg6%2B%2FoRfJTpuMbnR%2Bl1edxyEk%2Bbn1EW%2BBH3NUdvrCge%2FE0hsQHZRjo9%2BAlVJdjHnVHDXjrvevh3q7WqwC2M1%2BX8FZ5U%2FnxK5WoTcB4DqDFPqf%2BKSPt0kX9PCvZzG%2BemcPi1hGa4fZch1R3zk4zhOATmq%2FiRPLf4p4IZ%2BBJPhYxrxRlnh4X%2FGp0cvwhId42GiwBXnbxY5d4KwkWPLDXMg04PuXtfH06uaLj1CvNKD7TmJOadXiN2y2BigAn49U5ztMVYPVuAfLo7Tph1f8gGgEaKJaitPr8IYCAQN8Wqsj%2FSX11LjEhK3vcnpuC1cWrNp4i%2F6JPWjVdP0argb%2BFLu2VN4AdLUryIqkjXUkser1pi6R5bWR%2BAMf7RFlzSJSBGyMYcDK9X28fr%2FYjwENXL6moK1qCkx63QHBelq1GQT791sRDMMqei8oGOqUBU1g5Xa%2BBAaoQO7qvJND4GJY6E0SJbSVLQw3tOyMc%2BH5C6vxHMGn1N32BSjKK54RlxSYDdaMQ1U5%2BqRq86H9A8a6AK5o%2FQwwf4FTWunQ4fMN7HVNnnhR%2BkzItWiPMZ1HdLsCLqv4iF9DaInjsPWw2hnCAFJ27tESQtSodMagYJyG6eBleD1pAyjcYUdgKIIhk0LWNu%2FbY1ypavbgFOX9Mqs6Sm5q2&X-Amz-Signature=69b21f5955b65117d889e0c88ea0b2cae4a8a044c7af5b3c9318433f2a2f72bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
