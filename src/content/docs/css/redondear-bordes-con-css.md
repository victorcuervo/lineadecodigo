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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NMVOBS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvBxix706fwNRBvrLiHP4rkDxSWfGFTE%2FpWu5vHRyKtAiBg4bUuZnmfeQM8fK27crLK1kI6OMlFEXtr1IlXB1sHvCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDRNzr9QoRdK6ykbqKtwDu2N1xuh5d%2F%2BCz%2FGcFIfrp02e6Vf9q3N5huwvx8bouxw0zU3OCkaQij8LiVCNDlr9O8Ow%2B34ACLawPmk5Ra5EeOXYgz0EanXbIO2VOL1AHjJHpYdTm7%2FfZWLhYX0ZrsBIHQV23p0YKygnsq0YtOlA%2FCkJDjBpuPnVICFHRTHrL0G8WESU2amGfKjRlVc39JTCQRvqKUHIP8Lrt0XvUVF3XEOJE5b0MXQtfS%2BTDJdQqx5Iwr7p3PLtSi3f3q%2FGbryotDhQQgXUo%2B3sdJ875EEWrqLd93c8oTxVeDXEMJSukOr%2Fb82YbJdmxDyotb04%2FzbEbyb2FWFXvT9L24%2BY0rzGhLCCNyzqY%2BBinIZVIt%2FpdatFTaUcgrdx3kRrkpRqvAHq%2Bkjs6ZgcrMUq3PxT%2FkuS7My0r5m6Dv8cp8z%2BqXRSfaKxZu2INnGsvEvCLoGvf3lETAQn%2FQ6zJq%2FpNqaFJGkMdvZgLtg1IsA0NR1Uc64%2FaEb%2FqUykk52N4RSvcTNG0pB5ozm7WHVxox77U7acFqhpfomy3Zd1D4GT0IcmIkLnwEaJ2gx6d7l1HcZGT5SCbWFv93E6ijGhiByO68cm18uFKQVLIKm%2FVUcgAMCiUarJqPFtq5kuhRVOkJMqowIw9v%2FcyQY6pgEPP94tNr%2FJsgY8YtQ1WafpgCdk7L2wrcunaBBU2hmYI60z%2BNO3m%2BJKfnDwBHtYrD%2BONanLdB2Kt%2FMvfj%2Fd8Lvd49wGg5BCihv6RpU8szj3UEV80Brlar46w9UxibVSy227HXec1wby57ACO8H1CJJRgP6NGX5XNPTqiTHgVr2pHQ4gyzyhiEHapAlYtuYQTCtPciXtG0wVGkjYlSgTdZLaqewBfaeY&X-Amz-Signature=9de010402294a992b39816e9a6c53df82f2f0fe00e3aca6c01696601b38a8d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NMVOBS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvBxix706fwNRBvrLiHP4rkDxSWfGFTE%2FpWu5vHRyKtAiBg4bUuZnmfeQM8fK27crLK1kI6OMlFEXtr1IlXB1sHvCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDRNzr9QoRdK6ykbqKtwDu2N1xuh5d%2F%2BCz%2FGcFIfrp02e6Vf9q3N5huwvx8bouxw0zU3OCkaQij8LiVCNDlr9O8Ow%2B34ACLawPmk5Ra5EeOXYgz0EanXbIO2VOL1AHjJHpYdTm7%2FfZWLhYX0ZrsBIHQV23p0YKygnsq0YtOlA%2FCkJDjBpuPnVICFHRTHrL0G8WESU2amGfKjRlVc39JTCQRvqKUHIP8Lrt0XvUVF3XEOJE5b0MXQtfS%2BTDJdQqx5Iwr7p3PLtSi3f3q%2FGbryotDhQQgXUo%2B3sdJ875EEWrqLd93c8oTxVeDXEMJSukOr%2Fb82YbJdmxDyotb04%2FzbEbyb2FWFXvT9L24%2BY0rzGhLCCNyzqY%2BBinIZVIt%2FpdatFTaUcgrdx3kRrkpRqvAHq%2Bkjs6ZgcrMUq3PxT%2FkuS7My0r5m6Dv8cp8z%2BqXRSfaKxZu2INnGsvEvCLoGvf3lETAQn%2FQ6zJq%2FpNqaFJGkMdvZgLtg1IsA0NR1Uc64%2FaEb%2FqUykk52N4RSvcTNG0pB5ozm7WHVxox77U7acFqhpfomy3Zd1D4GT0IcmIkLnwEaJ2gx6d7l1HcZGT5SCbWFv93E6ijGhiByO68cm18uFKQVLIKm%2FVUcgAMCiUarJqPFtq5kuhRVOkJMqowIw9v%2FcyQY6pgEPP94tNr%2FJsgY8YtQ1WafpgCdk7L2wrcunaBBU2hmYI60z%2BNO3m%2BJKfnDwBHtYrD%2BONanLdB2Kt%2FMvfj%2Fd8Lvd49wGg5BCihv6RpU8szj3UEV80Brlar46w9UxibVSy227HXec1wby57ACO8H1CJJRgP6NGX5XNPTqiTHgVr2pHQ4gyzyhiEHapAlYtuYQTCtPciXtG0wVGkjYlSgTdZLaqewBfaeY&X-Amz-Signature=d312f7474218ae3da8a7aaf62d2f895254747957064e0143a238826c52b0f677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
