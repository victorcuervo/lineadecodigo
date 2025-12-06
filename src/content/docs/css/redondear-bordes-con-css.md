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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH64BA6O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClNzb3K0KmLi7ec4RJlKs2Q%2BlADVjLvUxBm3GpyT0tdAiEAvuEacPOiE8h2cR4tN7bALNeb7vfzdb2Ui84efv0VXt4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDxFfKvYEoViNHbLNCrcA8GUgqb3YRa%2BZMjsQ0GcHOf83IyIW21jcAcKGRnsIpiqI9%2BqMpRq5o%2BnDP5TRXdgolqmjIu0qIpTWGjIY2Do%2FOsFFHoOFNgm1wl%2BDSzBfk5WPlS2h2PtvuE8dSEdJMxxAlJMgMgfpuwL6TYD6t%2F9FZKBRNlPqguQ1hjuGt1Vg0HIaf0bY2R3DWtP%2FqzwBzClkXMFR%2Bq1Cl1887K1x1w%2BW8S7c8B%2BhQeJ3gsxiIokzkHptg%2FibhHw6Pc3LJSQmbWJhgEGuVXf01w3Fuc8rn7oivudhjsCCoWh2ealz5qqrP%2FIg52pFMVXu1ILvsanjsAWZBxxYJ35iyHq19Np1qYMv7tZ6J17gQyE%2Fz47%2FoaUtczXKgQCnSOE2wIXhtIP37yvFEoFLgMk9Ub4cdsG5yXABAMhvIJNNmPFjXUatcCnkca%2FUtrqBk6UHabLvWL%2BIO6BJHN3HzadJTPVQfI96s0ivWpDqtaobk2h6L5b4XC%2FXq5tKGyMRKRAJ3uzgSAOCJjE1XT3pcTyizv7Sv2RwJPrQ%2FPldUEgVlxm9n9fPVIrKP4kOSymvLCzN0Dqy6vYBxmjFIBevoPbChndCQrtabmGgP%2Foo913QiKIVFCOiDSa2pbwt%2BLEIr0cW7DleNdrMJLL0ckGOqUBrSbERf9G2DFtHMa8aGybarPZxl3vdqHstvTZSDluqtaIeH%2FkxAtRA%2BX22yTcs1%2BkiyODrLN%2FhUZnD2e1jWl4ODlG3ozPeQPCI%2FDqC15RtaR4mBmJYyITgygpvgjHH93R%2FdAVu0hdFxKG5HnLJb0WvftgBbKKdzEz7q7ZskZjUDbXyVjuURLvDYXsC%2FR3rDZDTYIgKG8okxdacm81pYQ%2Bnt2F5D%2Bj&X-Amz-Signature=0428217448282973b3604cbeacd94152ade18ff7ca355ada15127630d51a27e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH64BA6O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClNzb3K0KmLi7ec4RJlKs2Q%2BlADVjLvUxBm3GpyT0tdAiEAvuEacPOiE8h2cR4tN7bALNeb7vfzdb2Ui84efv0VXt4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDxFfKvYEoViNHbLNCrcA8GUgqb3YRa%2BZMjsQ0GcHOf83IyIW21jcAcKGRnsIpiqI9%2BqMpRq5o%2BnDP5TRXdgolqmjIu0qIpTWGjIY2Do%2FOsFFHoOFNgm1wl%2BDSzBfk5WPlS2h2PtvuE8dSEdJMxxAlJMgMgfpuwL6TYD6t%2F9FZKBRNlPqguQ1hjuGt1Vg0HIaf0bY2R3DWtP%2FqzwBzClkXMFR%2Bq1Cl1887K1x1w%2BW8S7c8B%2BhQeJ3gsxiIokzkHptg%2FibhHw6Pc3LJSQmbWJhgEGuVXf01w3Fuc8rn7oivudhjsCCoWh2ealz5qqrP%2FIg52pFMVXu1ILvsanjsAWZBxxYJ35iyHq19Np1qYMv7tZ6J17gQyE%2Fz47%2FoaUtczXKgQCnSOE2wIXhtIP37yvFEoFLgMk9Ub4cdsG5yXABAMhvIJNNmPFjXUatcCnkca%2FUtrqBk6UHabLvWL%2BIO6BJHN3HzadJTPVQfI96s0ivWpDqtaobk2h6L5b4XC%2FXq5tKGyMRKRAJ3uzgSAOCJjE1XT3pcTyizv7Sv2RwJPrQ%2FPldUEgVlxm9n9fPVIrKP4kOSymvLCzN0Dqy6vYBxmjFIBevoPbChndCQrtabmGgP%2Foo913QiKIVFCOiDSa2pbwt%2BLEIr0cW7DleNdrMJLL0ckGOqUBrSbERf9G2DFtHMa8aGybarPZxl3vdqHstvTZSDluqtaIeH%2FkxAtRA%2BX22yTcs1%2BkiyODrLN%2FhUZnD2e1jWl4ODlG3ozPeQPCI%2FDqC15RtaR4mBmJYyITgygpvgjHH93R%2FdAVu0hdFxKG5HnLJb0WvftgBbKKdzEz7q7ZskZjUDbXyVjuURLvDYXsC%2FR3rDZDTYIgKG8okxdacm81pYQ%2Bnt2F5D%2Bj&X-Amz-Signature=0483d9c81c6bbce3220cd1a586b3ab59503b4f07b129970bec8a4f5c63ac428b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
