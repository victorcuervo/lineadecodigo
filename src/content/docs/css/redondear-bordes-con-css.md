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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBO2R2EM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtoB3JSIrG9KZBTownTllyke0VRqBEz7VpTuUIi8JlxAiAfL%2Fmgl9g5q9uLNZNuMNvvLo5%2BJMM%2FVWOZ%2FmMQRWYbKCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzp5ddhcxYc3l901sKtwDdK1nfvdg9mrxnFmokYRF%2BMzwwMmm1F4Ro1V%2BshF2OFPmXGCMQWWhye4CNMXmMqom8vhFpV6RALT3S5JRcNJ2SmV7XhcuUlt4MMIj2s3FDV32L7ge3TvgyFoqSVKg4U9fr71Io0Z%2BmtGm28CYb0cqc82bIRMOfsjgBOX5ggr%2BG8ht2E0rUqBJ%2Bf8U0SqYoPqFVdK0maLW2a%2FdACKXqXHp%2FtLCT%2BepnJcat%2BKIZRYtBB%2Ff4Tp0AVCksRCanrylemciXmnsQMu5ZbuaAOCVnPhuGjCyyI1VPJSoKGyyOVlSpY7TkgUnmu6UYWZ0mvWdgArLbY4JeqpMS5IrGv0uDqYDOCQThoNQMhvlRnQw6YR2mt9gy7lskk%2FmwrLy5Fn2Vnk4uILC6Ebxe4D399E9gOjZLMZro1p1Yk2vkOXrmfG81mTMhD38THI39FqP3KXUGs3s%2BSiD8ngj1Zg33JmhihU7iomNJbXlLWZnl24WkFkFnij%2F%2FfCVv26%2F4rFses0muP7X8crv4w4Z4F6PuHaAcm5YAk5AqJVhU2Iffhpie1xifihCN00rR6LGDTZ8fXl10Rjv9EFUscEvUYH20BkQYlYhrTkYQn%2FX5DxJM%2FWlG0WfG7QswxUavOzEAx5IbiYwx9zcyQY6pgGqcP21P%2BW4NXExmM9HVH%2FB10FKNAXjqw9w5mdTGff0NPxNhRXsjRq6gv8q5th7V%2BQ9Fcxz0DJnIHx7%2F9heH2dem0FLRnprQ5jpDvbk7pEHRj2iYv6tt9tnoj9mMrjEcTfOcyryTE0MaPiE8acngU1GVBMfaqT%2B4pzhLT9pLVVFysGdQ4BGyrJ8JtFWKIN3zUZ7TE%2FMCjMM5pbWUNOrU3wdwfenuZ%2BK&X-Amz-Signature=85d3051ca7493996b06835ac6574f0aea27a2ea219b4fad465d02f2ce607ee80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBO2R2EM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtoB3JSIrG9KZBTownTllyke0VRqBEz7VpTuUIi8JlxAiAfL%2Fmgl9g5q9uLNZNuMNvvLo5%2BJMM%2FVWOZ%2FmMQRWYbKCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzp5ddhcxYc3l901sKtwDdK1nfvdg9mrxnFmokYRF%2BMzwwMmm1F4Ro1V%2BshF2OFPmXGCMQWWhye4CNMXmMqom8vhFpV6RALT3S5JRcNJ2SmV7XhcuUlt4MMIj2s3FDV32L7ge3TvgyFoqSVKg4U9fr71Io0Z%2BmtGm28CYb0cqc82bIRMOfsjgBOX5ggr%2BG8ht2E0rUqBJ%2Bf8U0SqYoPqFVdK0maLW2a%2FdACKXqXHp%2FtLCT%2BepnJcat%2BKIZRYtBB%2Ff4Tp0AVCksRCanrylemciXmnsQMu5ZbuaAOCVnPhuGjCyyI1VPJSoKGyyOVlSpY7TkgUnmu6UYWZ0mvWdgArLbY4JeqpMS5IrGv0uDqYDOCQThoNQMhvlRnQw6YR2mt9gy7lskk%2FmwrLy5Fn2Vnk4uILC6Ebxe4D399E9gOjZLMZro1p1Yk2vkOXrmfG81mTMhD38THI39FqP3KXUGs3s%2BSiD8ngj1Zg33JmhihU7iomNJbXlLWZnl24WkFkFnij%2F%2FfCVv26%2F4rFses0muP7X8crv4w4Z4F6PuHaAcm5YAk5AqJVhU2Iffhpie1xifihCN00rR6LGDTZ8fXl10Rjv9EFUscEvUYH20BkQYlYhrTkYQn%2FX5DxJM%2FWlG0WfG7QswxUavOzEAx5IbiYwx9zcyQY6pgGqcP21P%2BW4NXExmM9HVH%2FB10FKNAXjqw9w5mdTGff0NPxNhRXsjRq6gv8q5th7V%2BQ9Fcxz0DJnIHx7%2F9heH2dem0FLRnprQ5jpDvbk7pEHRj2iYv6tt9tnoj9mMrjEcTfOcyryTE0MaPiE8acngU1GVBMfaqT%2B4pzhLT9pLVVFysGdQ4BGyrJ8JtFWKIN3zUZ7TE%2FMCjMM5pbWUNOrU3wdwfenuZ%2BK&X-Amz-Signature=40f7f08557bc7ea2ef427cadb952cade24427b59ad2e7983d1297107d5e1d59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
