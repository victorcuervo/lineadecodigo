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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXCWTKM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxPW7EBz0sk4fIVMOOtTpS4Yl3ZksISnHbcOkWpju4pgIhAMZt0EoqT4Gm8qMlpTEeJAmMc6PbfGuXH2koNUeEq9v4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyHX984XSc2huWF0I0q3APceGgevJ6uoWHUHaPGlGPRjTuKFgL8RkpTLJze%2B74JEt0%2FuPV4Gbe7NLwZ1rbBm85Hpg18BaAS%2BRP1p%2FvhtehccH%2Bq5nUixmAU4cXFGXXd0uYRqvZKT2N4NudQxQ1qlT3uGLmwzRiuZpPDeuBzSmFP7Kg7QNm56j4MCHokGzmnm0CwfSXcFi9b5IGOZvvtTDcW4j8iN0GQXr0iiOMS66Ky5RtvhDLJlKR60AQQFmaffFJNZKeW2xbHlwzzeK%2FRNQNrghEh0aAinwAn6tYHR5LKmVxSGN42E52PihmQtAuO1tidfAYRsj2YwIuexTHQJ9zLv%2FZ3mAcwz3njNG1Y8xumH%2BV2f%2BNAa9Q4kxDgRkNZvxNBR6IEqs1JIWAnJwkY5%2BoNL3pauBd%2FvDXonxn3xbSqA4r7CviN30hc3VZkV5qq0EHvj1X4EhzGimjuA8e68puLbw9NKBFFk%2B6rlx5opU6ewQHjfWcloodPWr8ADvJDvrRBasfIOVXt3L1OZOAveUV9e2QYmJfMZUZaPEFCC4d4Oc061husaswqZ6yfxHTYOo97cZ9JFHu3Qc5kIS8OkvxPPO3cPTCVI1mfv%2Fi6zDiocc6eU7eUOSr1CntORXxLatieuT6COdwXCjDZFjDJlYjKBjqkAV038KikpSp3Hq7KAhEHAVt8pQxBwdUcz8wpDeG3QLgCyxmzbpsMC13pqDRvjFiOpdIEju2r6N2x73CBulXe%2B%2BGO%2BezvXyYu%2B%2FdRK3xO1Z26bs9YaSX2tacLGLhLFJSE4p9lDcg1hQayovuthAosWnxc%2FQBoLleQ2spWbP9UQcXX%2FSle1XdMSOIS2iwkKCY4i5JXJzwK6uOHeRkE5KU4ZpN1YCby&X-Amz-Signature=ac6188e2013de5d8f8601f01e917543d1de2a47a28ed874722402361c4b9f21e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXCWTKM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxPW7EBz0sk4fIVMOOtTpS4Yl3ZksISnHbcOkWpju4pgIhAMZt0EoqT4Gm8qMlpTEeJAmMc6PbfGuXH2koNUeEq9v4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyHX984XSc2huWF0I0q3APceGgevJ6uoWHUHaPGlGPRjTuKFgL8RkpTLJze%2B74JEt0%2FuPV4Gbe7NLwZ1rbBm85Hpg18BaAS%2BRP1p%2FvhtehccH%2Bq5nUixmAU4cXFGXXd0uYRqvZKT2N4NudQxQ1qlT3uGLmwzRiuZpPDeuBzSmFP7Kg7QNm56j4MCHokGzmnm0CwfSXcFi9b5IGOZvvtTDcW4j8iN0GQXr0iiOMS66Ky5RtvhDLJlKR60AQQFmaffFJNZKeW2xbHlwzzeK%2FRNQNrghEh0aAinwAn6tYHR5LKmVxSGN42E52PihmQtAuO1tidfAYRsj2YwIuexTHQJ9zLv%2FZ3mAcwz3njNG1Y8xumH%2BV2f%2BNAa9Q4kxDgRkNZvxNBR6IEqs1JIWAnJwkY5%2BoNL3pauBd%2FvDXonxn3xbSqA4r7CviN30hc3VZkV5qq0EHvj1X4EhzGimjuA8e68puLbw9NKBFFk%2B6rlx5opU6ewQHjfWcloodPWr8ADvJDvrRBasfIOVXt3L1OZOAveUV9e2QYmJfMZUZaPEFCC4d4Oc061husaswqZ6yfxHTYOo97cZ9JFHu3Qc5kIS8OkvxPPO3cPTCVI1mfv%2Fi6zDiocc6eU7eUOSr1CntORXxLatieuT6COdwXCjDZFjDJlYjKBjqkAV038KikpSp3Hq7KAhEHAVt8pQxBwdUcz8wpDeG3QLgCyxmzbpsMC13pqDRvjFiOpdIEju2r6N2x73CBulXe%2B%2BGO%2BezvXyYu%2B%2FdRK3xO1Z26bs9YaSX2tacLGLhLFJSE4p9lDcg1hQayovuthAosWnxc%2FQBoLleQ2spWbP9UQcXX%2FSle1XdMSOIS2iwkKCY4i5JXJzwK6uOHeRkE5KU4ZpN1YCby&X-Amz-Signature=3334cf1ec070bdeb506da8eb7ec2e4096c29936c02f6c5a15a636d528d3158df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
