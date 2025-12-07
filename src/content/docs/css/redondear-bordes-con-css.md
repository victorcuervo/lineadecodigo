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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGGZBCQI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAv1gW3KOlxpIiQdoTJtmy5JcWgF6knHKygGicSdQQbWAiEArqrYXyes1dAZPzfWQ%2FFANG%2FWHhVgpHo%2FfG3eUXSiZ1gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrsh3C%2FC3wWGtc0oyrcAzk7%2B3MQIFg8kDLNg0YRfDZ%2B1TE%2FgcdMJ8upMjgGr0AhLN%2BHfdG6TidT%2FQB7i4QvWlJlmHY%2BMAP3thJhbJAwwacA0X%2FXCLCwF49BMj3WtcWhILaHXyKnKIkFFGGAyWaK2eYJpqiy9rJtOB9EGI5fiwYoR3NzkouXrFc7xqEAVRNNEMUu9cqImJBr6efHPNcqZ%2FFTLzZaGn6bk6JjK5zOq0cdsaZ2Ug1q2MdeGPLGx%2FrrxbSMK681ORMiqR%2FSnItOlb4d3Tom46KJhG%2FaRS9b6ocNJ6SvxdcD7nqZggcVFG6T69iJ1nWr3llziVMhpuxH0rBUqJ%2BobvQsGlyGmCxbMZ6%2B8LpsDf5KUhye01c3v3%2FytPGWBRZVnueloSpl7S05k9oubjZSf9xhGWRaPWdqA2bJvFmqfRbK%2BRUQSjerSC1Yqu8zoy%2FW5hVcnEzkSz9cztl%2BrnZyLlB8kZvbg6YQ5Lc2XpCTy%2Fyr6Y5anxPBiOaodyWAvDO9poya4%2Fsb65KplNe7yrqlA803mJQltyo0QbCOGbTXd%2FBgsNTEVogVvJYjgXc3YLUsFmrrQo5v1kTJbtC8NziFDuiClKP0OtXenyJd93QW55KPiJdqG9cjLaQjJGi40ZTY0LXmiCYzMIqk1MkGOqUB7%2Fv8gzRyRogNT6zgamA%2B4UEHHq1chg6ZVin3kApoGGwMiPOg9wivg0U5oTYYtHMPE9LYxE79QufC%2BxGP3p20oelSVvB5dIj4kEQarB05X22mscOXZUjHDRQDpwap763ZhlMYeBXDi0YApEBbeQ15PopKjV9V9cUrpY%2F6tdkYmijwpV3CmiHM9nebwsBJdTkFBNHdDJcnwH%2Fz09VkpSh7vmnmcoUg&X-Amz-Signature=0c11603339c08c5ea5b4078320d07d9c2eaf8507cc198d0f85e605b416245ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGGZBCQI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAv1gW3KOlxpIiQdoTJtmy5JcWgF6knHKygGicSdQQbWAiEArqrYXyes1dAZPzfWQ%2FFANG%2FWHhVgpHo%2FfG3eUXSiZ1gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrsh3C%2FC3wWGtc0oyrcAzk7%2B3MQIFg8kDLNg0YRfDZ%2B1TE%2FgcdMJ8upMjgGr0AhLN%2BHfdG6TidT%2FQB7i4QvWlJlmHY%2BMAP3thJhbJAwwacA0X%2FXCLCwF49BMj3WtcWhILaHXyKnKIkFFGGAyWaK2eYJpqiy9rJtOB9EGI5fiwYoR3NzkouXrFc7xqEAVRNNEMUu9cqImJBr6efHPNcqZ%2FFTLzZaGn6bk6JjK5zOq0cdsaZ2Ug1q2MdeGPLGx%2FrrxbSMK681ORMiqR%2FSnItOlb4d3Tom46KJhG%2FaRS9b6ocNJ6SvxdcD7nqZggcVFG6T69iJ1nWr3llziVMhpuxH0rBUqJ%2BobvQsGlyGmCxbMZ6%2B8LpsDf5KUhye01c3v3%2FytPGWBRZVnueloSpl7S05k9oubjZSf9xhGWRaPWdqA2bJvFmqfRbK%2BRUQSjerSC1Yqu8zoy%2FW5hVcnEzkSz9cztl%2BrnZyLlB8kZvbg6YQ5Lc2XpCTy%2Fyr6Y5anxPBiOaodyWAvDO9poya4%2Fsb65KplNe7yrqlA803mJQltyo0QbCOGbTXd%2FBgsNTEVogVvJYjgXc3YLUsFmrrQo5v1kTJbtC8NziFDuiClKP0OtXenyJd93QW55KPiJdqG9cjLaQjJGi40ZTY0LXmiCYzMIqk1MkGOqUB7%2Fv8gzRyRogNT6zgamA%2B4UEHHq1chg6ZVin3kApoGGwMiPOg9wivg0U5oTYYtHMPE9LYxE79QufC%2BxGP3p20oelSVvB5dIj4kEQarB05X22mscOXZUjHDRQDpwap763ZhlMYeBXDi0YApEBbeQ15PopKjV9V9cUrpY%2F6tdkYmijwpV3CmiHM9nebwsBJdTkFBNHdDJcnwH%2Fz09VkpSh7vmnmcoUg&X-Amz-Signature=0ce4edc86a827311d13cf6c9f578e51a1eef765b2408f1c8f7bdb34aada12214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
