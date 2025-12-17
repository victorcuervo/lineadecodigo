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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFR6V4Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXEB5FImd%2F2bZPRKbvACVGz5MEJhnuuq%2BD2Wyn77KIAgIgbZSWEmLCAw7VwYxmdxm%2BtMmaWfWvLFWy397y4pQqW4MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOktJQjwNVIayDae7yrcA%2BPGqjNHXl4IMIyDtE%2BiE6nC38xC28VZM3vm8zn10ASzQOAxkATp9eQ7hgse03ebTk8NKYpiH6ZO9nzTS7EiSy6%2B4%2FoP5csH6VjKlj9tlRQT%2BpvELX2oFYTomfuK91HuXZxDZVrjMGWlUCgJuLT3sdBggEvcmopdMjbyO7Q4iRKtUdZVKS64uj02R%2BHN2x8Gt%2FNHBut3juwTcXNbngt5mygsTlLx1WSqTkJdtKSuiVtvLc3mqUfjB9EVSUdkHE0QxxO%2BOAjbYhOPXXGfh8HRQ8rfK2RU6erg3NmsXEJFuR8EIkpO25kqXBOgmRqIIoonKY0w%2BdUDIctg5yBgJs3BA4sMCEZTmSXhSdtERiyYOFUSEPnYNXuOofdm5MwQA3C6UCmrNJsNCF87ahNeab4g01WMzu%2B0PSwmXZcjx45W6dgHt4Kd1hThYXhnq%2BU6cU80dbFp%2BgbavNi3ivuCtoMngn9Z1ENKrULLORV%2FsUHabbVnjGCwCAfuj9JSUpaDBHD4AFHpLqPar%2BufHekMiaS3oZ2q92v7N0nH2452RxbLUleW4BjMUp5z0sVwXu4tdkELpU82EbkA%2BOKvyrMOgX7L%2FcVWtmLeKKgzPH0dN55ebNcKtTCkvfyWrVa%2Bj4aGMMqei8oGOqUBWnPPnBJLu0A9kyL3f7F4oWlFWhEBKTw56xUiy2ucjLuSq%2Fa%2FpyoRwoLoceEXvsZs0ezcfVYWVW%2Bto1ip7uaB46byoIG9ci0ec3EZ%2FKmUCS%2Fhuxqk7%2F%2BnKFOOVmqXoh%2BNDbwmTCtR4Z8nnzH5y1IZMixOmsq5jyW%2Buc8I2Zi0TBoaK3MweTiJhMx1Oz%2BTWHL7s2hDL1hypiyFTM3ngbLgg8bFMy8b&X-Amz-Signature=83e7ff82567461e5b60fdb448ede3be89871a6e61bd15962f5cb66890c6b100b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFR6V4Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXEB5FImd%2F2bZPRKbvACVGz5MEJhnuuq%2BD2Wyn77KIAgIgbZSWEmLCAw7VwYxmdxm%2BtMmaWfWvLFWy397y4pQqW4MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOktJQjwNVIayDae7yrcA%2BPGqjNHXl4IMIyDtE%2BiE6nC38xC28VZM3vm8zn10ASzQOAxkATp9eQ7hgse03ebTk8NKYpiH6ZO9nzTS7EiSy6%2B4%2FoP5csH6VjKlj9tlRQT%2BpvELX2oFYTomfuK91HuXZxDZVrjMGWlUCgJuLT3sdBggEvcmopdMjbyO7Q4iRKtUdZVKS64uj02R%2BHN2x8Gt%2FNHBut3juwTcXNbngt5mygsTlLx1WSqTkJdtKSuiVtvLc3mqUfjB9EVSUdkHE0QxxO%2BOAjbYhOPXXGfh8HRQ8rfK2RU6erg3NmsXEJFuR8EIkpO25kqXBOgmRqIIoonKY0w%2BdUDIctg5yBgJs3BA4sMCEZTmSXhSdtERiyYOFUSEPnYNXuOofdm5MwQA3C6UCmrNJsNCF87ahNeab4g01WMzu%2B0PSwmXZcjx45W6dgHt4Kd1hThYXhnq%2BU6cU80dbFp%2BgbavNi3ivuCtoMngn9Z1ENKrULLORV%2FsUHabbVnjGCwCAfuj9JSUpaDBHD4AFHpLqPar%2BufHekMiaS3oZ2q92v7N0nH2452RxbLUleW4BjMUp5z0sVwXu4tdkELpU82EbkA%2BOKvyrMOgX7L%2FcVWtmLeKKgzPH0dN55ebNcKtTCkvfyWrVa%2Bj4aGMMqei8oGOqUBWnPPnBJLu0A9kyL3f7F4oWlFWhEBKTw56xUiy2ucjLuSq%2Fa%2FpyoRwoLoceEXvsZs0ezcfVYWVW%2Bto1ip7uaB46byoIG9ci0ec3EZ%2FKmUCS%2Fhuxqk7%2F%2BnKFOOVmqXoh%2BNDbwmTCtR4Z8nnzH5y1IZMixOmsq5jyW%2Buc8I2Zi0TBoaK3MweTiJhMx1Oz%2BTWHL7s2hDL1hypiyFTM3ngbLgg8bFMy8b&X-Amz-Signature=47bb4d59745bbdde44a935ecf98718bb23458a716c22e8efc6850b2a41368aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
