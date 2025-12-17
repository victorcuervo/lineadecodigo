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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPBY3D6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiw8NopH6W62ChwV6jlXK8Bi5Slb25Irx8Q6reKwYhcAiEAhpwkDi6GQVCDgu9tDs6DAXbq%2B7eQu2rT8h9CJnxAeSgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6qFXNSsTylL24XkircA4HkbTLrpIe7q87ub0tce3WPMj%2FlF1yO%2FFvkXYnv9EMH270GAeebpQefggDW3M8vArmz601RxaOHYdgJEYDLZTcy89VPtx%2FWXgekkEFA%2BGTTA5lAwn554lzx4K70pRkjmXX%2BjaB4BXw3Fd61yZYKDgROptUv1e%2F1mIBcw0GlgcXu7WHjrezqyOtL1hUtCL29xvq7jzn37kYoZ%2Fqmq3e%2FZYcaXimwQYk4J13I9s8mZYpdlTa%2BBybpWkOgZvRKnkFMZfOuLGmUi%2FAR2L4xOoTqn1VgOH%2BBQhZ8QhNDqSL7zbrBCZI6h7ghQDqhEXdCgVTCXryHpoC1OP%2F3UDjrkQNnKm6hbza2XQC%2FgJDf%2BekdJVbZ%2FKzsSOkGRtt5gvhziwroSn0W1DWO%2F0RGWhuNmkIkEvDXm7cSoUpjlXTdcnvEaXjkX09iJruayzJj7kyKpZjJAzAu0SqoJ66jGsM6YNKE6MVESz9XuGJu8lu3KF2SCo1zxn1OldXsghQTzBM38jQVnqPryjc5sa85uly3mzONTB6BjsE6IMa9JjpBPmm2hCAmVbvhMF08xloRMpy7E75x4vgPsBwb1xoAIv6vMD67eRHPrvgpucEPa8gV3JgRBzJmsC%2Ba4e%2FOXuBqPh9FMNKei8oGOqUBPyZpYg%2FN%2FuG1ziqruVuZ80XdjXCyFElrbSB3Mq%2FHzce1jR5QDHvKEX5CafmdZuz0D%2BhDOXFN6XKWesRRTJ7sg2mZy4FHtomG1l99VgkYilFSCzDWUzsoCK7%2BIzvxL7tCw%2B4XlNZLhv7C4FrNk%2BFdgU1Q2u4jw7QiwOIc84Mb8qC1TVUnjTrAgELovY9UQ3jJF4p43wKh2eCay79RBu281sm9TAvP&X-Amz-Signature=28c3306e8db32e547e705d738288835aaad5539c4fcf3c37e6f5a1a32beca6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPBY3D6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiw8NopH6W62ChwV6jlXK8Bi5Slb25Irx8Q6reKwYhcAiEAhpwkDi6GQVCDgu9tDs6DAXbq%2B7eQu2rT8h9CJnxAeSgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6qFXNSsTylL24XkircA4HkbTLrpIe7q87ub0tce3WPMj%2FlF1yO%2FFvkXYnv9EMH270GAeebpQefggDW3M8vArmz601RxaOHYdgJEYDLZTcy89VPtx%2FWXgekkEFA%2BGTTA5lAwn554lzx4K70pRkjmXX%2BjaB4BXw3Fd61yZYKDgROptUv1e%2F1mIBcw0GlgcXu7WHjrezqyOtL1hUtCL29xvq7jzn37kYoZ%2Fqmq3e%2FZYcaXimwQYk4J13I9s8mZYpdlTa%2BBybpWkOgZvRKnkFMZfOuLGmUi%2FAR2L4xOoTqn1VgOH%2BBQhZ8QhNDqSL7zbrBCZI6h7ghQDqhEXdCgVTCXryHpoC1OP%2F3UDjrkQNnKm6hbza2XQC%2FgJDf%2BekdJVbZ%2FKzsSOkGRtt5gvhziwroSn0W1DWO%2F0RGWhuNmkIkEvDXm7cSoUpjlXTdcnvEaXjkX09iJruayzJj7kyKpZjJAzAu0SqoJ66jGsM6YNKE6MVESz9XuGJu8lu3KF2SCo1zxn1OldXsghQTzBM38jQVnqPryjc5sa85uly3mzONTB6BjsE6IMa9JjpBPmm2hCAmVbvhMF08xloRMpy7E75x4vgPsBwb1xoAIv6vMD67eRHPrvgpucEPa8gV3JgRBzJmsC%2Ba4e%2FOXuBqPh9FMNKei8oGOqUBPyZpYg%2FN%2FuG1ziqruVuZ80XdjXCyFElrbSB3Mq%2FHzce1jR5QDHvKEX5CafmdZuz0D%2BhDOXFN6XKWesRRTJ7sg2mZy4FHtomG1l99VgkYilFSCzDWUzsoCK7%2BIzvxL7tCw%2B4XlNZLhv7C4FrNk%2BFdgU1Q2u4jw7QiwOIc84Mb8qC1TVUnjTrAgELovY9UQ3jJF4p43wKh2eCay79RBu281sm9TAvP&X-Amz-Signature=cd36b549b044d7eb28ff0c299364f24f3afb3086aadca81499c0a38a904fcd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
