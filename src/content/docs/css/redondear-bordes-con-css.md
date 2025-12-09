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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6EQUJY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKAoT2lsSpZoHfrZdfZcSBkmYqfUTHusUTFfBLGr4ulAiAx6PiFEJjHV6lQ4JEAOW1zK%2FR8OApeY19jmq2ZTc%2FW7CqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWHDBQZ5GXzDcHLKOKtwDWZ4TaJUjs%2Fv%2Fib7Rz2sts7EaBWBcD1oDFlXZu%2BsDpQCkwl4EOlA6YK7RjI9NdN4rsl339sT1iFJ2fCioV2F%2FfSbBK5pSWM02i7JWWJxb40FcimhHDGLQGU9TFO5oOwvM%2FoArNMWNnYqCE6fAu4deDAqFZ1yKM75HeQiuMv0VA9bg8xxqobSVdYWUncRlg3Pmiz6cP%2F7rhEJdDSpLSCbt%2BVkTBLxO5hWoL%2BjzTWLW9lF%2FvTi5IeVKjmJQFdi4yTAfLORMKkNjPN5rbRND0Gj%2FtsUzws4T9PDq1Bb66rmfTqPPbc0%2B7jcOyotsPdx8dSkN8O3UKMpWHIMrbWATmfl7r918J%2Ff1xXd4nTljDUimprayDeqS%2FgXbVzFZIokZ5%2BSf2AFZYjgggRgoW9b023EAzgWWG3uC5AxlLSG20muHMdLezTiUnvxbWKANM2QPHEQaVHLbUGa%2BaRN9tbpNWvzM%2FSGEalEbNfwDfDzHcDACohnl5g8p0mvParqJbPHWMl4XDRoSqEhMWsmIxAJZ8jc5w9ib9LSV3yAFPaQI4dQykqn6bJpMdR4r%2B8yAb5s4kU05AZ%2BgP5O%2BecyR%2BdVZMaT5l%2FHZz%2Bl7BIOBCOJOVS8zwP68HQXEgrUXkCkwMKYwvendyQY6pgEcpV9f3UQbYytGjy8g7bx2GieDF7DXK9MKg07AweD0w0Mhk6Jiv9%2BCoEZlI6iAxlR4TgZCI1%2FjY8JcKmHqc43W1j%2BHBxMQ2lF7%2BPqPbEGrJIHC%2Flgr1ZEvuVJr0wTt8aGQRYK5vraYx6C%2FGQjkmPKATTkJ8bM4IYvSOYE5n8xFfeeBp9ocTle5If6897a11w%2Fp4Q0bilXOrohNeO5iwW63T%2FUDAaJe&X-Amz-Signature=deb0026a2cd5ec4a3ebfb0f091aa73c22486681d1f0c024fd85420f892dfd954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6EQUJY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKAoT2lsSpZoHfrZdfZcSBkmYqfUTHusUTFfBLGr4ulAiAx6PiFEJjHV6lQ4JEAOW1zK%2FR8OApeY19jmq2ZTc%2FW7CqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWHDBQZ5GXzDcHLKOKtwDWZ4TaJUjs%2Fv%2Fib7Rz2sts7EaBWBcD1oDFlXZu%2BsDpQCkwl4EOlA6YK7RjI9NdN4rsl339sT1iFJ2fCioV2F%2FfSbBK5pSWM02i7JWWJxb40FcimhHDGLQGU9TFO5oOwvM%2FoArNMWNnYqCE6fAu4deDAqFZ1yKM75HeQiuMv0VA9bg8xxqobSVdYWUncRlg3Pmiz6cP%2F7rhEJdDSpLSCbt%2BVkTBLxO5hWoL%2BjzTWLW9lF%2FvTi5IeVKjmJQFdi4yTAfLORMKkNjPN5rbRND0Gj%2FtsUzws4T9PDq1Bb66rmfTqPPbc0%2B7jcOyotsPdx8dSkN8O3UKMpWHIMrbWATmfl7r918J%2Ff1xXd4nTljDUimprayDeqS%2FgXbVzFZIokZ5%2BSf2AFZYjgggRgoW9b023EAzgWWG3uC5AxlLSG20muHMdLezTiUnvxbWKANM2QPHEQaVHLbUGa%2BaRN9tbpNWvzM%2FSGEalEbNfwDfDzHcDACohnl5g8p0mvParqJbPHWMl4XDRoSqEhMWsmIxAJZ8jc5w9ib9LSV3yAFPaQI4dQykqn6bJpMdR4r%2B8yAb5s4kU05AZ%2BgP5O%2BecyR%2BdVZMaT5l%2FHZz%2Bl7BIOBCOJOVS8zwP68HQXEgrUXkCkwMKYwvendyQY6pgEcpV9f3UQbYytGjy8g7bx2GieDF7DXK9MKg07AweD0w0Mhk6Jiv9%2BCoEZlI6iAxlR4TgZCI1%2FjY8JcKmHqc43W1j%2BHBxMQ2lF7%2BPqPbEGrJIHC%2Flgr1ZEvuVJr0wTt8aGQRYK5vraYx6C%2FGQjkmPKATTkJ8bM4IYvSOYE5n8xFfeeBp9ocTle5If6897a11w%2Fp4Q0bilXOrohNeO5iwW63T%2FUDAaJe&X-Amz-Signature=e6cc35ab62fb07fb45b0d7a492095d7e28fe761485740c92d43f222584a51de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
