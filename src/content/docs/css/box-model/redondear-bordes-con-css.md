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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJX3P3E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOJ7r7otfglcvk67XqvrPNNNQGUBlPs0FIKerG%2FYvEeQIgc%2FoS7LYxYvfj6qZxilq2vMnbdOYBZ4hpY%2B5m6EbMH3Eq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLBv4w0scE82m%2FH2IyrcA6hD%2FHDKF9svH5oT7TlSmvpMPl1AEyNImdZCy1JhJhEfZ0uIhlAxqIyx3RP4kuxMyMxeoy0O7V43kcw0S1gBp1hQ88rRnAId5ltNWAE9Mwle4uDLrzEg7Mq7KIkooZjisVjXhcBdUcPdjprbwdRQqfvUKMcxOKsVOAQ0pPoc58%2BgD04vyYM%2Bv1vBw9Pz0utIGivDC0LwjmCbIMFL2xS%2Bdd0LRIYXGdNwmjIoV%2FVs7XSY9HvkHJlFcDBf4tTkcETJIEf4pbXcPneok9NYPTJAv1tT2FJ5zukUiN7QYQA9gRxylprMyVi5w7yqvwnivlhI1D4U%2By%2BLhPEAOB1gecZGutKGb1kRbhyRlU98nwvnnpT%2Bn5SfOugFkfpXdo7mYtuAfmJaoIlvKqIlvWMkS9f%2B5ZNnTcgWcQ9RIbey51feOMd3%2BJKHqjniB%2F3XCdbsu4XLWE1IXgbdyc4E3o944xV5xOsxmpI%2BpYNIHzA9PXgcKCmKuvsFFGL%2B89Gkk6Pi9ejnNJxQqC0MMRFspOah8zttcBh6TR1TEJWQMKDASzGudzda1WFORHcpmkJ5VFHzXdWiVFXeWiAni%2F%2BrgrdHjFATNYO59PjRXsMzM8wq0lHc1RWRT3u2IFE9Yddkgp%2F2MOX7h8oGOqUBCo%2F7pkLJaF3nToy4oOF%2FHg4xYvgBaDHDSQT99AyQ1PtbvCALCQ5iUUGphJSY1SgNi6RFxVZAq1xmyKRrs%2FRCS%2BhuwJwrMAPwF94rXzH0QpZcNHbgkPkaC0O2kOffd%2BFsk2fCoS8VlwxdMvxEnpKPEf9gek4UqBoQivA2xmUu0YIzlLEdVHdfgFUQkDd%2FTkz6LlxhJxcsY6diX7G%2Fj6oZzLnPmg4L&X-Amz-Signature=332b6b4973e2757279d362b1d096f6c54324c251b73ce8937516331b22ecb721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJX3P3E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOJ7r7otfglcvk67XqvrPNNNQGUBlPs0FIKerG%2FYvEeQIgc%2FoS7LYxYvfj6qZxilq2vMnbdOYBZ4hpY%2B5m6EbMH3Eq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLBv4w0scE82m%2FH2IyrcA6hD%2FHDKF9svH5oT7TlSmvpMPl1AEyNImdZCy1JhJhEfZ0uIhlAxqIyx3RP4kuxMyMxeoy0O7V43kcw0S1gBp1hQ88rRnAId5ltNWAE9Mwle4uDLrzEg7Mq7KIkooZjisVjXhcBdUcPdjprbwdRQqfvUKMcxOKsVOAQ0pPoc58%2BgD04vyYM%2Bv1vBw9Pz0utIGivDC0LwjmCbIMFL2xS%2Bdd0LRIYXGdNwmjIoV%2FVs7XSY9HvkHJlFcDBf4tTkcETJIEf4pbXcPneok9NYPTJAv1tT2FJ5zukUiN7QYQA9gRxylprMyVi5w7yqvwnivlhI1D4U%2By%2BLhPEAOB1gecZGutKGb1kRbhyRlU98nwvnnpT%2Bn5SfOugFkfpXdo7mYtuAfmJaoIlvKqIlvWMkS9f%2B5ZNnTcgWcQ9RIbey51feOMd3%2BJKHqjniB%2F3XCdbsu4XLWE1IXgbdyc4E3o944xV5xOsxmpI%2BpYNIHzA9PXgcKCmKuvsFFGL%2B89Gkk6Pi9ejnNJxQqC0MMRFspOah8zttcBh6TR1TEJWQMKDASzGudzda1WFORHcpmkJ5VFHzXdWiVFXeWiAni%2F%2BrgrdHjFATNYO59PjRXsMzM8wq0lHc1RWRT3u2IFE9Yddkgp%2F2MOX7h8oGOqUBCo%2F7pkLJaF3nToy4oOF%2FHg4xYvgBaDHDSQT99AyQ1PtbvCALCQ5iUUGphJSY1SgNi6RFxVZAq1xmyKRrs%2FRCS%2BhuwJwrMAPwF94rXzH0QpZcNHbgkPkaC0O2kOffd%2BFsk2fCoS8VlwxdMvxEnpKPEf9gek4UqBoQivA2xmUu0YIzlLEdVHdfgFUQkDd%2FTkz6LlxhJxcsY6diX7G%2Fj6oZzLnPmg4L&X-Amz-Signature=570d62c69b92dfddeddaea49d7eb8819009c9012966fd0b10ca57e0f22e8965f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
