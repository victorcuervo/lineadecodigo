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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT5CAJS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B2U1KPoxxtyT0CuExUlNJjElm8W21luxW%2BUe6jWAu9wIgB%2B4pCsINHI8eL2JawbTXtOM4OvM8R5Q1D5ZdNlPiYN0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGcSAQcl1%2B%2FPM%2FEGCrcA0skNbqMfEy2Sfw9KkMaXjbgPel9bGFuJl5EjVVpyTD0N7bOSD11LlI%2FlN4xdLQOj%2F8UvuI9R7qVNzlAXwa7aGs3D6HnLBVwpwKTVsnSKUuT9yVKYAWHcoZKAj%2FZucTthbVCyH13EuDSazlHQJYLnDgFQPDZE%2BuMRasXllOH39HwVzOD3afdAn4syrJar14Rgc2OZwprgOsbl26fmWSho2%2F7s7%2BTCzHCW348AR%2BnR0pDu2%2FhchNTbWhRXsFW%2F9bfvMsY%2FgwyGFYeMMJDdNZg6%2BbRigEfFaUppYCcZ9oAsnvL3b0oX8vtJwoAmLDEB7Wi8kh6o7WqAE2Jiaw0jZUIdJoCNTFJMrPTXwFOUb8Hrlxnn%2F4gD1bj5wLzj%2FkRWYPXzcce4FS%2Bs%2Fc8NmGNUjQ%2FEdeEUs1faSwivp6bdDgKVfsd3ZJ16Jep2PxtzMO2e6uWTxsgZXCjxQT4F9tlGDgmytizKfHrT3uzjSwp%2FSzD6AsYzm%2BYdoZO4JhX7DaaAHcNrLIqtOgQK1xsZ7eZ1Lr3AcnuDAJNUXcmRUFmXfMeVpeU7TIuo8ACm0qyTVfM8war6JqqV96oH0qQhphtDK9AI%2B1Rnz7mKuh3iWesKl3jzrCtjI%2BU2QhhrpzqBTe%2BMMv90skGOqUBExR3agmEX3vOdfNv4ZD7KnCv9zVuRU%2FS%2BQ6t3ZvbSn8cGUhGdHsO4LgTv7pDLtt0LEy0UrCxCjUH%2BYcIKr5P0ujThZiPoMeaCB%2BVsRT%2FNU8fwoND9QCN2adl0j%2Fr8N5cKuzpXLptmVF9E07N6riNoMPGcXCQxUgxYBAoEN8KCcbTZU2TrcN375uUCeWAJwyf61iUXU4oRe2fj%2BU%2BYaVFuaeA818p&X-Amz-Signature=dadd97e5840cbe38f6d88101b96a6d0bfc4689bc734783aa1075602189007ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT5CAJS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B2U1KPoxxtyT0CuExUlNJjElm8W21luxW%2BUe6jWAu9wIgB%2B4pCsINHI8eL2JawbTXtOM4OvM8R5Q1D5ZdNlPiYN0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGcSAQcl1%2B%2FPM%2FEGCrcA0skNbqMfEy2Sfw9KkMaXjbgPel9bGFuJl5EjVVpyTD0N7bOSD11LlI%2FlN4xdLQOj%2F8UvuI9R7qVNzlAXwa7aGs3D6HnLBVwpwKTVsnSKUuT9yVKYAWHcoZKAj%2FZucTthbVCyH13EuDSazlHQJYLnDgFQPDZE%2BuMRasXllOH39HwVzOD3afdAn4syrJar14Rgc2OZwprgOsbl26fmWSho2%2F7s7%2BTCzHCW348AR%2BnR0pDu2%2FhchNTbWhRXsFW%2F9bfvMsY%2FgwyGFYeMMJDdNZg6%2BbRigEfFaUppYCcZ9oAsnvL3b0oX8vtJwoAmLDEB7Wi8kh6o7WqAE2Jiaw0jZUIdJoCNTFJMrPTXwFOUb8Hrlxnn%2F4gD1bj5wLzj%2FkRWYPXzcce4FS%2Bs%2Fc8NmGNUjQ%2FEdeEUs1faSwivp6bdDgKVfsd3ZJ16Jep2PxtzMO2e6uWTxsgZXCjxQT4F9tlGDgmytizKfHrT3uzjSwp%2FSzD6AsYzm%2BYdoZO4JhX7DaaAHcNrLIqtOgQK1xsZ7eZ1Lr3AcnuDAJNUXcmRUFmXfMeVpeU7TIuo8ACm0qyTVfM8war6JqqV96oH0qQhphtDK9AI%2B1Rnz7mKuh3iWesKl3jzrCtjI%2BU2QhhrpzqBTe%2BMMv90skGOqUBExR3agmEX3vOdfNv4ZD7KnCv9zVuRU%2FS%2BQ6t3ZvbSn8cGUhGdHsO4LgTv7pDLtt0LEy0UrCxCjUH%2BYcIKr5P0ujThZiPoMeaCB%2BVsRT%2FNU8fwoND9QCN2adl0j%2Fr8N5cKuzpXLptmVF9E07N6riNoMPGcXCQxUgxYBAoEN8KCcbTZU2TrcN375uUCeWAJwyf61iUXU4oRe2fj%2BU%2BYaVFuaeA818p&X-Amz-Signature=3bd298d8bbf8758e982d14b27ba47a4f078df118e3686c60370ffd47e7b2b85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
