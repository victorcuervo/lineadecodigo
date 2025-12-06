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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4EYQ7NV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh6takpP6GlkibJtiQAwRfKKpQWq93r4Htxa%2F90ohK%2FQIhANOi1FRLLBSrVdquOuDAG23zuZmIaJn%2FWDmtcNs5RpMbKv8DCHoQABoMNjM3NDIzMTgzODA1IgzeswEnjanFntGwpDsq3AOuommyh44F3avWFP%2FQ1xNyHoqP%2FwxVOnZxsvwixTTMFOHNB%2BIWmNqDP2pb9ARfktyL8OiNxjbOafBNHI4BOGcu2w6KdrjDoYqjgFpkHGZhfFqxDS10cgoNRuiY47Fn%2BUoB43Af0puU%2B4eMAPCb8xQBR1zvN5w0AHqRMOJQhahDS8najiLcR49avbc%2BoWr61Flz82qh0G3Z0vIQ%2FUpKdug%2BSRiIp1wq9geozjVJMif9MawToQWL0IsjqbGxizN3PSOejbqqtj01YX9DTkgYEQa8r9oCAm%2F1yggwQCS0WNKB2FxOOeuz7vWetKo6qKWe3iKuBUdmGalz6umJV0MZzDpx%2BVQ%2B2ulqhh0YPVq0kKBaawClq9EoEE3%2BkSrOIOkCFw3GvTAm%2FFg22eSxt3m86HfBbCVlaVQFmXd5n1gluqX7klTp%2FRgSFkRS2%2FMX4dTqwTn4kPreM7la04YKXqzVfR%2F8SJXAi8RZfzfP46Blp3dVU4prsjE6yHZG%2Fz69WimYf0aX1mQHrEq81%2B01gg5Kji%2Fry2tEp9d%2BuAB9KItMEVTmq4X3y5KC5wwTb9VKTXuPtbTW3ceorCuIwLoiFGTtrlemOSoPKkNGGnHBA8%2Br8gW54RerrG5fOqVHyJuwAzCLy9HJBjqkAdSQgo0pGeNnlgJjrdR02B4%2FaW5i8J9EBNUv%2Be3EHcJsw45UlrNuBlQkBkafgh6dxxhpt2%2FEi%2FkV7iB39ye3QtjeqzwVP58wCpJ8V6%2FsQe3vZvaw4k35t8nVCCM2HQrBkPnCWxmkgunnPy%2BrHPdWLluGIvKft4%2BEM1CMvw54dbdQ8kxYS8lpHFF3NOCqnEgJfRANh4tWxFO8T1w0DcFqZt6QzT%2FN&X-Amz-Signature=dc3f508a153f6f5ae4d8d90ec481ffc379553e688ac9aed3c80abec93e2f5736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4EYQ7NV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh6takpP6GlkibJtiQAwRfKKpQWq93r4Htxa%2F90ohK%2FQIhANOi1FRLLBSrVdquOuDAG23zuZmIaJn%2FWDmtcNs5RpMbKv8DCHoQABoMNjM3NDIzMTgzODA1IgzeswEnjanFntGwpDsq3AOuommyh44F3avWFP%2FQ1xNyHoqP%2FwxVOnZxsvwixTTMFOHNB%2BIWmNqDP2pb9ARfktyL8OiNxjbOafBNHI4BOGcu2w6KdrjDoYqjgFpkHGZhfFqxDS10cgoNRuiY47Fn%2BUoB43Af0puU%2B4eMAPCb8xQBR1zvN5w0AHqRMOJQhahDS8najiLcR49avbc%2BoWr61Flz82qh0G3Z0vIQ%2FUpKdug%2BSRiIp1wq9geozjVJMif9MawToQWL0IsjqbGxizN3PSOejbqqtj01YX9DTkgYEQa8r9oCAm%2F1yggwQCS0WNKB2FxOOeuz7vWetKo6qKWe3iKuBUdmGalz6umJV0MZzDpx%2BVQ%2B2ulqhh0YPVq0kKBaawClq9EoEE3%2BkSrOIOkCFw3GvTAm%2FFg22eSxt3m86HfBbCVlaVQFmXd5n1gluqX7klTp%2FRgSFkRS2%2FMX4dTqwTn4kPreM7la04YKXqzVfR%2F8SJXAi8RZfzfP46Blp3dVU4prsjE6yHZG%2Fz69WimYf0aX1mQHrEq81%2B01gg5Kji%2Fry2tEp9d%2BuAB9KItMEVTmq4X3y5KC5wwTb9VKTXuPtbTW3ceorCuIwLoiFGTtrlemOSoPKkNGGnHBA8%2Br8gW54RerrG5fOqVHyJuwAzCLy9HJBjqkAdSQgo0pGeNnlgJjrdR02B4%2FaW5i8J9EBNUv%2Be3EHcJsw45UlrNuBlQkBkafgh6dxxhpt2%2FEi%2FkV7iB39ye3QtjeqzwVP58wCpJ8V6%2FsQe3vZvaw4k35t8nVCCM2HQrBkPnCWxmkgunnPy%2BrHPdWLluGIvKft4%2BEM1CMvw54dbdQ8kxYS8lpHFF3NOCqnEgJfRANh4tWxFO8T1w0DcFqZt6QzT%2FN&X-Amz-Signature=7f2cb31e63d5b2d4e59f03918b6d411737f831403de4addf82a7c2fc543768fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
