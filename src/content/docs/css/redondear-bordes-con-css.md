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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIWUROA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy9A7ROJ%2FZgj0jG7HJENzhAfAvbPhUmxb6RAuGia6K%2FAIhALqm1WeFuCASUOyp%2FOIfC7uAf9B0fRBzI7z8iI3vkmFfKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBl%2FPMdjbR1cSD54Uq3AOYPERBfg%2BURBpzkoMJDA9LDR87%2BdAbSTxydxQPBALJF4u5LzB5Ipwr96hhVIhpBWSn5nO%2FYZzSosqtRJXYqa2%2Bf7QJ7iY7sVpoO%2FHB35YjTtD33SYi5MxVd%2BGy96NpfEoEAEmt%2FwzTM5DgLCCs46ZKKra0D3xmlET%2FOy6Gktg8nJUVckFg3%2FfDuWuUbEir0nxKWZ3GjESWtmMljGLcS4tOezW4ZIj5yxWMSTxg0MfDN4g96Qwvv%2BuYxkk8fkclHmDgnhDx4bLXok5nC%2Fg8I%2Bwn%2F84KSuzNhZmzVdBCXmAdlHFdqoJ3ceE1vcBfTKEMw4TeYLZWo3yj3gVX%2BBVVAYALhoZv3EQD2X4qmXhVvRvRTwojhi1OZ5gyPNEBqFpYTBg9ztWNfvoOTv%2FhGh8CUJgYZLTFwuJTP5kDT7%2FX7Q0Czte%2BwQUsm9i9i18CMUAtP%2BTRn4vUMxvUQ39Zn2rvm1Sim%2FzlcLrCBGa956hE0jKj9ybe96%2F0zvD6nj53tAYB6VbQLfQWsfYhXnQZYwXUdvLX3LJSOUTejNSfQ9COgKoVsww2J2cLUbI87YR7NsSnVAvGEn9%2BI2eEdLscfbFUoNAFOgh7%2Bq2es5alHXx4arkQWtMxZx8%2BFdFiPo8VgzCmpcrJBjqkAVqCCdqSpnd%2FIlFlwERX5yHYnftrtEgYcssqIrH9aKKPGT2o%2BpGF6sh%2F4Wq9E8MtHKfYrnpG%2FWMCr3mhPnhvYH2YxlGINUyxGAFpyLkWfm5EKmpXU5t07jhddAQrZ2UMN9jKqxsloyzD2%2B0Trob%2Fjfpdf5N5urKVHzPUyzk2uSFZjjtZZp7tR1LTwz83e9y7plyEoeRAsgcK53QqFguQ7A2%2Fvas0&X-Amz-Signature=8f0de71c132fa12c415c2b2c09fec27b8a2c415838c33f733fba2de144ea8711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIWUROA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy9A7ROJ%2FZgj0jG7HJENzhAfAvbPhUmxb6RAuGia6K%2FAIhALqm1WeFuCASUOyp%2FOIfC7uAf9B0fRBzI7z8iI3vkmFfKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBl%2FPMdjbR1cSD54Uq3AOYPERBfg%2BURBpzkoMJDA9LDR87%2BdAbSTxydxQPBALJF4u5LzB5Ipwr96hhVIhpBWSn5nO%2FYZzSosqtRJXYqa2%2Bf7QJ7iY7sVpoO%2FHB35YjTtD33SYi5MxVd%2BGy96NpfEoEAEmt%2FwzTM5DgLCCs46ZKKra0D3xmlET%2FOy6Gktg8nJUVckFg3%2FfDuWuUbEir0nxKWZ3GjESWtmMljGLcS4tOezW4ZIj5yxWMSTxg0MfDN4g96Qwvv%2BuYxkk8fkclHmDgnhDx4bLXok5nC%2Fg8I%2Bwn%2F84KSuzNhZmzVdBCXmAdlHFdqoJ3ceE1vcBfTKEMw4TeYLZWo3yj3gVX%2BBVVAYALhoZv3EQD2X4qmXhVvRvRTwojhi1OZ5gyPNEBqFpYTBg9ztWNfvoOTv%2FhGh8CUJgYZLTFwuJTP5kDT7%2FX7Q0Czte%2BwQUsm9i9i18CMUAtP%2BTRn4vUMxvUQ39Zn2rvm1Sim%2FzlcLrCBGa956hE0jKj9ybe96%2F0zvD6nj53tAYB6VbQLfQWsfYhXnQZYwXUdvLX3LJSOUTejNSfQ9COgKoVsww2J2cLUbI87YR7NsSnVAvGEn9%2BI2eEdLscfbFUoNAFOgh7%2Bq2es5alHXx4arkQWtMxZx8%2BFdFiPo8VgzCmpcrJBjqkAVqCCdqSpnd%2FIlFlwERX5yHYnftrtEgYcssqIrH9aKKPGT2o%2BpGF6sh%2F4Wq9E8MtHKfYrnpG%2FWMCr3mhPnhvYH2YxlGINUyxGAFpyLkWfm5EKmpXU5t07jhddAQrZ2UMN9jKqxsloyzD2%2B0Trob%2Fjfpdf5N5urKVHzPUyzk2uSFZjjtZZp7tR1LTwz83e9y7plyEoeRAsgcK53QqFguQ7A2%2Fvas0&X-Amz-Signature=3a6273d80e8cb0ab30cd297d23e1f1383e4f079410fa2035dcab6fb12cf27858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
