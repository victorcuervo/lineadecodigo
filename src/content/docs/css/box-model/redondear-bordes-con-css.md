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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQF2EWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3WLA%2B%2FlYArs4zmAd5Mh3fqvSKS8QGRfDuh6evukNbGAiEAgMFdRSkylREPzRXKXwfS1zTHOOSQ8dFIRAFVJOkJFTIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJoQuremamXgaU%2BPircAzYmqF%2BzYCPrWWT8L6P0%2F2lBrA%2B8aXPe2BEvCXXVSJ8GCmm5F7%2FDzik7IEnZAtvTQlqV5sYpQtdXpZdd7kjjl4dD6snN%2BVRsq3c8vZTmWAE42Rf%2BpIvGrZzvZ3OKBTeGUpwipr9AmgVaV21%2FGjVP5rdo638uBxSejmy3sfhi%2FzTWnvt5%2B7sMs3yq9ROt8RNQWje2mQTigZP7a5mJ3lEA6UVNAe3cMuKh9OMFHmvn3%2BWowRL7%2FxVkpnb9XL9uoAeTPCmo8UnTuSSTfDHfgaASJal1LuFrlhDR4y4axC5x0R%2Bjiz%2BTaEKxrvrCIl7DKvE14FQBg76bM9Uw1G0Xy8Fxc72a7nHf2ADp4tPhZEM5dkGP6QYq%2Bef6mtm11h0twK1u4ZdRlpF4pJQnfkhaBcIi0p20TnrjMUguwmHsLNoBR91kma6p7TubKe062asvLK6bfQaqQbXAIClC%2B4ucid3EKjdSmPwgB642GMyYo1WGPbqoxA0RY8DjWFVwDThtV9cHqLuZhIWCml%2BChZAsd4L28RJyl26oF%2BGyISEvD%2FFyK9ENXcNR%2F1jwMEtsV3tR%2BjkWJ13rw0OJSnfMYea950uXspHQ6%2B1oGiYEPr9s3MJo5FTUHTjf3eHP5B5Y7bC%2FMMyAi8oGOqUB5f9KjPFc5PJFOzZ75pi%2FK4hOnv1EVaT7lSk2bnd8oW0MdMHoqXYyaqRB9BsMuxvDzyp%2BtoaAp1ROec9gknSEJAAYCJs5c4xClbAFekhB%2FG884vhGzxxPU6flqEKUko7eCrQlWjVnS7hNxvDboAEOuj8wckf4A%2Bn00utwCSWYcvoaRzy6dli64Jp8yEvJWD0SfppYPlqEQtKVuDKc1b9w%2FQ3ZR9jE&X-Amz-Signature=b48bcc849f619eaa5e6b87bbbd7c5323e1209d4270c736d777f35371de65e677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQF2EWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3WLA%2B%2FlYArs4zmAd5Mh3fqvSKS8QGRfDuh6evukNbGAiEAgMFdRSkylREPzRXKXwfS1zTHOOSQ8dFIRAFVJOkJFTIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJoQuremamXgaU%2BPircAzYmqF%2BzYCPrWWT8L6P0%2F2lBrA%2B8aXPe2BEvCXXVSJ8GCmm5F7%2FDzik7IEnZAtvTQlqV5sYpQtdXpZdd7kjjl4dD6snN%2BVRsq3c8vZTmWAE42Rf%2BpIvGrZzvZ3OKBTeGUpwipr9AmgVaV21%2FGjVP5rdo638uBxSejmy3sfhi%2FzTWnvt5%2B7sMs3yq9ROt8RNQWje2mQTigZP7a5mJ3lEA6UVNAe3cMuKh9OMFHmvn3%2BWowRL7%2FxVkpnb9XL9uoAeTPCmo8UnTuSSTfDHfgaASJal1LuFrlhDR4y4axC5x0R%2Bjiz%2BTaEKxrvrCIl7DKvE14FQBg76bM9Uw1G0Xy8Fxc72a7nHf2ADp4tPhZEM5dkGP6QYq%2Bef6mtm11h0twK1u4ZdRlpF4pJQnfkhaBcIi0p20TnrjMUguwmHsLNoBR91kma6p7TubKe062asvLK6bfQaqQbXAIClC%2B4ucid3EKjdSmPwgB642GMyYo1WGPbqoxA0RY8DjWFVwDThtV9cHqLuZhIWCml%2BChZAsd4L28RJyl26oF%2BGyISEvD%2FFyK9ENXcNR%2F1jwMEtsV3tR%2BjkWJ13rw0OJSnfMYea950uXspHQ6%2B1oGiYEPr9s3MJo5FTUHTjf3eHP5B5Y7bC%2FMMyAi8oGOqUB5f9KjPFc5PJFOzZ75pi%2FK4hOnv1EVaT7lSk2bnd8oW0MdMHoqXYyaqRB9BsMuxvDzyp%2BtoaAp1ROec9gknSEJAAYCJs5c4xClbAFekhB%2FG884vhGzxxPU6flqEKUko7eCrQlWjVnS7hNxvDboAEOuj8wckf4A%2Bn00utwCSWYcvoaRzy6dli64Jp8yEvJWD0SfppYPlqEQtKVuDKc1b9w%2FQ3ZR9jE&X-Amz-Signature=46e4022cead8b807993f282d22c821b09596935a9a744e79f0a00607a8409389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
