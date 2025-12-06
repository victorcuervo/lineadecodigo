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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDS774K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj6lylV4g8rd1%2FEVmRpQh67ga%2B3aQ%2BhRzS82788QYqjQIgES09sGU1rNL3sk06%2BZWvJQygCuI%2BGLIicu%2FIqHflfSMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDELclMR4bb59%2Bhq4wircAzoC2GaJy03vjdooPk%2B0Ixb9cP4g5txp6d3oXRebAO9GNmT4CMhaYUE4iGY1vfIYZeT91C0Q9AwE4Cc2gDeXYpZztcxVNb7zG%2Fvj%2Bcv%2FryW59J7tiR6XJdWRMUCV6brf7E%2BXDbVt%2FDiWjMahf5GaEWOkVGenunridRk2Mq2qbNXATPDQ6dVBVISpMO8t1WV33CThZt7F5oavnhqK9WsDxezeZxopUPjk1chkV79jILDgDGn6msqzXWnNt6yDkefrcraHhQtnFUsk0bLoQhpoZTrsTohReQyFroGYi2xvUsvuZsX0mc5jt6B1X%2B%2B7c0AjEQGXJ8H1tdmkinztR7uctt2D%2FApr3msws8zPH46VAAlmqZbYNBpW7QsIwTmI15p79NMj76yUjqp%2FTqakbbalrz25QpHqYgCszqaKo%2Bji2ps2WuYBEGXNKVxfFwmUCfE1s7qtmyvtSARE3QRWdbBuPE6oyWlO8Tw3Q4Hq%2BLra6FcHB0UwWjkGbbIX1rUIZ1dbPePKMeyt1G%2Fyu%2FTDmP7fAszuv3GYvS3obeX3NUdM5I1thqVRmfYKHy7wl0eiXZKXZFtxPXbMb7Z3%2FAYW2dV9V8njO25gpQ3OVN53zhcmcm%2B6d5XJIeDzDbsNU5aoMIrK0ckGOqUBISn1VtGOGNOscYEr%2Bt0TPQgX7jPjJLRZH61O2c1fAclfPuxpJrCfkZ4WpAeuFo1jyJEu6sGBhsFS7y0HvFDVJ0ZeDzELMdUiOIZPFaWPn0Qe8CwEYeLtUV%2B0z6f5lUM7QPQBlZxsGtP96kzi%2B%2B7YN%2F6pP8BaCMpyxE%2BLGxx9wQ%2BRvuUc011JX%2BnxCWMtp2IlbCJ4pd3MG4MO4NzH%2B9BtY1ypwW6F&X-Amz-Signature=a4e0fbf11a2b21469753da1912de87a7ea34972a04a9415a24b30e73cb197de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDS774K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj6lylV4g8rd1%2FEVmRpQh67ga%2B3aQ%2BhRzS82788QYqjQIgES09sGU1rNL3sk06%2BZWvJQygCuI%2BGLIicu%2FIqHflfSMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDELclMR4bb59%2Bhq4wircAzoC2GaJy03vjdooPk%2B0Ixb9cP4g5txp6d3oXRebAO9GNmT4CMhaYUE4iGY1vfIYZeT91C0Q9AwE4Cc2gDeXYpZztcxVNb7zG%2Fvj%2Bcv%2FryW59J7tiR6XJdWRMUCV6brf7E%2BXDbVt%2FDiWjMahf5GaEWOkVGenunridRk2Mq2qbNXATPDQ6dVBVISpMO8t1WV33CThZt7F5oavnhqK9WsDxezeZxopUPjk1chkV79jILDgDGn6msqzXWnNt6yDkefrcraHhQtnFUsk0bLoQhpoZTrsTohReQyFroGYi2xvUsvuZsX0mc5jt6B1X%2B%2B7c0AjEQGXJ8H1tdmkinztR7uctt2D%2FApr3msws8zPH46VAAlmqZbYNBpW7QsIwTmI15p79NMj76yUjqp%2FTqakbbalrz25QpHqYgCszqaKo%2Bji2ps2WuYBEGXNKVxfFwmUCfE1s7qtmyvtSARE3QRWdbBuPE6oyWlO8Tw3Q4Hq%2BLra6FcHB0UwWjkGbbIX1rUIZ1dbPePKMeyt1G%2Fyu%2FTDmP7fAszuv3GYvS3obeX3NUdM5I1thqVRmfYKHy7wl0eiXZKXZFtxPXbMb7Z3%2FAYW2dV9V8njO25gpQ3OVN53zhcmcm%2B6d5XJIeDzDbsNU5aoMIrK0ckGOqUBISn1VtGOGNOscYEr%2Bt0TPQgX7jPjJLRZH61O2c1fAclfPuxpJrCfkZ4WpAeuFo1jyJEu6sGBhsFS7y0HvFDVJ0ZeDzELMdUiOIZPFaWPn0Qe8CwEYeLtUV%2B0z6f5lUM7QPQBlZxsGtP96kzi%2B%2B7YN%2F6pP8BaCMpyxE%2BLGxx9wQ%2BRvuUc011JX%2BnxCWMtp2IlbCJ4pd3MG4MO4NzH%2B9BtY1ypwW6F&X-Amz-Signature=7177770fa5591b8205e13d995bfdc63667fd26e46e3f11a29f3cabb25b6827f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
