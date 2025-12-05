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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S77QE52N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Y%2F8YxbJ12HK%2B76jYI2LoNQgbQdKSdjJER4SxRdnXzAiBwZcDLL3%2FZQm6IOdglWF9OmpMQDrYIxIeH4jhw20y%2BkSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM9fWE30VWZEylWSwdKtwDH%2BdjsLnNF4C2F%2F%2BIhP8bkscIrjzs7%2BJVyPP36bb9bbM4vvWvtlcdT%2BrPDFD%2FPec2mGHgxdI1CI6PaxoKQ6qa35iXNZOHDJfzs3VJwov1QqmMrMylXTYnYuNMhn%2BeVWM%2BcL%2FBj7GiE8mFo9%2BvmKzq%2FRsR%2FVXneT6EQRChmEQpps2Qykq11bqlKdrY%2BIhjsC65%2BJuEFv62WuJoxVYD5%2FOjwS2TdiCgnzzNVaWr9nCWlEofdmRlSjyfwceo1LBC%2FRjExXXJQ9eFi19VEb%2FIKzyH9yqTYSWpfXMWyrMmEY2sEvTGifGvwreVt5Zt%2Fa4Wcu556Gy63RSQ1E%2FojrSk4nRGZxQO2u9zYCSiW8toqJRbA1AjT92M16fgEtLIOTbkKyaOWMjoqFLC2qKoNzBW4AULDS70iB08C%2BQH9fFLQXa0athsRi4Ny6CNrmMQ5P8qN6LHwcHzfpjzHVGiTvFv3TQTDusko1nIGV2QQ74LK5DJ0zAuyncR5lC%2FeM%2BvEO7dVU1nJQyAF2gVcUA%2FImQ8Mm1kYgsSLSrwfGS0tWWbw%2Fuv%2FJ6wBUwg8JSBTcWT5M7MxTJ%2BvwvBSTbo%2FC01EysEcHsv7V3H%2FH%2B9aLJPb8onxLo25naDa81XQ%2FAYcP%2FK0AQwranJyQY6pgGDNN13svmIudP%2FxH7qL2WIZMi6kcS2esyWxbE6CvBjXlAGZTxSY7aI5LfaM9XxVLKA%2FBYc7V5PNKwAS3%2BBTctlVX%2BoJJN4K54mJFUjo6uq2ZQ7k9hb7OREuqWWuCKzGoiGAliIiJDkp659OeoFfQn%2BOVFjELAj3rHZWCjJdEQ2XMDCYlMGUfWT0O%2BZUc4lCsl8rStnE327yQ67awYw2mFo32Vqfrna&X-Amz-Signature=40757a195ee62938a221e5da6c66aa133f3bc6727ebebf6f8db70e4415bcaaf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S77QE52N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1Y%2F8YxbJ12HK%2B76jYI2LoNQgbQdKSdjJER4SxRdnXzAiBwZcDLL3%2FZQm6IOdglWF9OmpMQDrYIxIeH4jhw20y%2BkSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM9fWE30VWZEylWSwdKtwDH%2BdjsLnNF4C2F%2F%2BIhP8bkscIrjzs7%2BJVyPP36bb9bbM4vvWvtlcdT%2BrPDFD%2FPec2mGHgxdI1CI6PaxoKQ6qa35iXNZOHDJfzs3VJwov1QqmMrMylXTYnYuNMhn%2BeVWM%2BcL%2FBj7GiE8mFo9%2BvmKzq%2FRsR%2FVXneT6EQRChmEQpps2Qykq11bqlKdrY%2BIhjsC65%2BJuEFv62WuJoxVYD5%2FOjwS2TdiCgnzzNVaWr9nCWlEofdmRlSjyfwceo1LBC%2FRjExXXJQ9eFi19VEb%2FIKzyH9yqTYSWpfXMWyrMmEY2sEvTGifGvwreVt5Zt%2Fa4Wcu556Gy63RSQ1E%2FojrSk4nRGZxQO2u9zYCSiW8toqJRbA1AjT92M16fgEtLIOTbkKyaOWMjoqFLC2qKoNzBW4AULDS70iB08C%2BQH9fFLQXa0athsRi4Ny6CNrmMQ5P8qN6LHwcHzfpjzHVGiTvFv3TQTDusko1nIGV2QQ74LK5DJ0zAuyncR5lC%2FeM%2BvEO7dVU1nJQyAF2gVcUA%2FImQ8Mm1kYgsSLSrwfGS0tWWbw%2Fuv%2FJ6wBUwg8JSBTcWT5M7MxTJ%2BvwvBSTbo%2FC01EysEcHsv7V3H%2FH%2B9aLJPb8onxLo25naDa81XQ%2FAYcP%2FK0AQwranJyQY6pgGDNN13svmIudP%2FxH7qL2WIZMi6kcS2esyWxbE6CvBjXlAGZTxSY7aI5LfaM9XxVLKA%2FBYc7V5PNKwAS3%2BBTctlVX%2BoJJN4K54mJFUjo6uq2ZQ7k9hb7OREuqWWuCKzGoiGAliIiJDkp659OeoFfQn%2BOVFjELAj3rHZWCjJdEQ2XMDCYlMGUfWT0O%2BZUc4lCsl8rStnE327yQ67awYw2mFo32Vqfrna&X-Amz-Signature=7c4e3fb1d72979786118316b84a2ca9bc9bd6b53dd68407fd0cb42fb534d1ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
