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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF53RQV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbaOerAjFjPFC0Fzes6OQdEp1WoDkfWIRcxArJhhqUgAiEAh1kwJJ%2BRNK7vLqDne7sD8VrgbRf0YrwJM8y%2BmD%2BLtwcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOtn2ugD%2F%2Fje2ukaVyrcA0qvaa8cSEIvQbtQqUZICDKtA18ib482iXDQ6JVO8JMDz9F%2FNEl3pfUV0tUP2VZtENI3UIgM6nvWy1PbPodEG03AwcjeNrdXgcmT77Wz3WxLb4kXt%2F6QXTuIJgVotXclttDX%2B4HbbCrBcBzChqWmB3nH61RTSAtBqu2YfVHJp70y6hJ0ncYbxDtgpA82q2YLdiedBX23MEkOqhTrbi0bkyfDV8B%2BjVWDvmGDpNo5EzdBQW%2BuH64JcG5NbG4c8YYkmojxlOid8UX%2B%2FFqbel9aQNcy4DAz02eYw1os0AXIq9mk%2BRdvojuBeWCgONwM607eXaKL1sx2lHmmUpbogHZjjlkrXbKxMA0JpbF814wDZSyUXatqCnmkfazcceiW0baOWbzKIyMM1j8jbL%2BWzNburyuZfx11i8F%2FonCGn%2BW2JIu9MbG%2F3M2A8NNcgCQ7yJGyXsiRU3v%2B8YJZBNG4x0YYoxtl5moxZAorp3wxXYtWj1Sy4B9O5JhLauEzs9xo1gefi3tMpffz63LNxxX3NvkIIgm%2F77yfjhTuHe2MSuDIRnIuWLm1PsDROmBwDRmvvEjbC8vbXRML1rUL0ZAyPN3d9Bbgacv%2BqWqpO0FqyA%2FpFK3QVsG0FMYQShBUgz%2FTMNHOiMoGOqUB%2FYNRp75Cxi9yQtqQEX7IEYE5pw7YnbIA%2Ba4GD2uTG%2BPcaHgzeXhRx6HT2lF0AGP0lfoU5mK%2F7tWfVXNiwnRP4gVys3o1It6yNPtRp6jxp%2FsyQAD1EM0xaKfJsCHIHlnVz8JABNmKsuyo%2B4YO4P4EswcXUCUExJvd4YIfS3XlBrQx%2FemXTDUsUCi7j88dDkxZof5QyMjfE1LGkG0I%2FnpdhK4rbM2Z&X-Amz-Signature=17107c6e72930343e375e292a24df45ce5d0aca21062667a652cc801e38b5c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZF53RQV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbaOerAjFjPFC0Fzes6OQdEp1WoDkfWIRcxArJhhqUgAiEAh1kwJJ%2BRNK7vLqDne7sD8VrgbRf0YrwJM8y%2BmD%2BLtwcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOtn2ugD%2F%2Fje2ukaVyrcA0qvaa8cSEIvQbtQqUZICDKtA18ib482iXDQ6JVO8JMDz9F%2FNEl3pfUV0tUP2VZtENI3UIgM6nvWy1PbPodEG03AwcjeNrdXgcmT77Wz3WxLb4kXt%2F6QXTuIJgVotXclttDX%2B4HbbCrBcBzChqWmB3nH61RTSAtBqu2YfVHJp70y6hJ0ncYbxDtgpA82q2YLdiedBX23MEkOqhTrbi0bkyfDV8B%2BjVWDvmGDpNo5EzdBQW%2BuH64JcG5NbG4c8YYkmojxlOid8UX%2B%2FFqbel9aQNcy4DAz02eYw1os0AXIq9mk%2BRdvojuBeWCgONwM607eXaKL1sx2lHmmUpbogHZjjlkrXbKxMA0JpbF814wDZSyUXatqCnmkfazcceiW0baOWbzKIyMM1j8jbL%2BWzNburyuZfx11i8F%2FonCGn%2BW2JIu9MbG%2F3M2A8NNcgCQ7yJGyXsiRU3v%2B8YJZBNG4x0YYoxtl5moxZAorp3wxXYtWj1Sy4B9O5JhLauEzs9xo1gefi3tMpffz63LNxxX3NvkIIgm%2F77yfjhTuHe2MSuDIRnIuWLm1PsDROmBwDRmvvEjbC8vbXRML1rUL0ZAyPN3d9Bbgacv%2BqWqpO0FqyA%2FpFK3QVsG0FMYQShBUgz%2FTMNHOiMoGOqUB%2FYNRp75Cxi9yQtqQEX7IEYE5pw7YnbIA%2Ba4GD2uTG%2BPcaHgzeXhRx6HT2lF0AGP0lfoU5mK%2F7tWfVXNiwnRP4gVys3o1It6yNPtRp6jxp%2FsyQAD1EM0xaKfJsCHIHlnVz8JABNmKsuyo%2B4YO4P4EswcXUCUExJvd4YIfS3XlBrQx%2FemXTDUsUCi7j88dDkxZof5QyMjfE1LGkG0I%2FnpdhK4rbM2Z&X-Amz-Signature=3d0dd76e73dffe0d31071384ad4534d0b38f90bcb979ad7b2064477e514a21d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
