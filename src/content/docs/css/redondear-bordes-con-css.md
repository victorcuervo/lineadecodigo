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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPRGUNEK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD36f4kNkQQ%2F1Tejq71dZcbh5NDk9l3QRaSYw7k%2BpTpcAIhALC2vNshTWcxustnI%2BcfhxNTHw555QXeqGcbQKBpGntdKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztZoCAwc0IgVWAQGcq3AOqMkNovpJwjXiT6FxOVmYUQmZ7Hl9RYI11ScEBC73kT%2FxX%2B2WK0DuPu4Aol64x8E1Tf43%2F4mg6P8jX8wlLACwCQnT9SBJfx3W1evT7QQjlZvbue0iXjWZw2lyqP%2FjynqTjebYm4O4%2BWZGTmCZl5%2FjhDQs2axE2N%2BOUT4UgJrtLn3ocRdFbg6afu9REYgsZqltcKOtW4CBKfkSN%2F0vgXpYt2ritRFcO9pmm1bXF1sazkYQQ%2B5y4QwIrd3FBX6ghMRr4T5kcAUm6L5J7VyLslZozkD6KmTBsM1SAj7cxMRRTYAfpxcAfBCLWcoJPKnBPN8u%2BBThN%2FsztpU0OSfkPBMgjiSz%2Fas20%2B7A48YTFEDZnXPu5ct6TVxym3cuY69Qr5N1xJUMCzhR0MqoEJHSn9vZC%2FjCXCXKmRly5vFJLwJnIOi49GNP%2B2yV78d%2BfrqQVEFTelIPUEg7K2uhXSLHOk5ahcCChR80ExYNlmEkxrKjMyIb%2FQuZDQ4ZReb1LUYZ9NC6cPKtzkcJopC4HF977%2BBMBefNiogSD7tacJKsEPOK8PxEmBTqbDnBIIwGX06D4kRenx9pHc7ilkylc47PIHTmabAgNrmqENafRBzaoqo9M9cWSuxLKhhFElYUwNDC77dnJBjqkAZLSv4KE21ou1ogvNea0uGnSgrHSC96CEMn8HlsnAa1%2BCBN5RCLBwdEDPnwEBJJ697Ti9plX%2BHmQ9%2F9r6LPOlspeMQfPa%2BHBRWJOYbwQXhrjVbz2OuoZJ%2BVkL8P39GgbrmHGlP3w3IoNYz8ZacgO8cy1ayu2QU19RriqLRrYbmuN6O97J9YyEOu%2BQsUXBka%2FVVzzubv1oGJMEXlScMlw%2BkPlfv8r&X-Amz-Signature=36ff63c6e69ef7c1b48327fc8f6130c7076629f76f5f625b2c82c5f43646112d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPRGUNEK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD36f4kNkQQ%2F1Tejq71dZcbh5NDk9l3QRaSYw7k%2BpTpcAIhALC2vNshTWcxustnI%2BcfhxNTHw555QXeqGcbQKBpGntdKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztZoCAwc0IgVWAQGcq3AOqMkNovpJwjXiT6FxOVmYUQmZ7Hl9RYI11ScEBC73kT%2FxX%2B2WK0DuPu4Aol64x8E1Tf43%2F4mg6P8jX8wlLACwCQnT9SBJfx3W1evT7QQjlZvbue0iXjWZw2lyqP%2FjynqTjebYm4O4%2BWZGTmCZl5%2FjhDQs2axE2N%2BOUT4UgJrtLn3ocRdFbg6afu9REYgsZqltcKOtW4CBKfkSN%2F0vgXpYt2ritRFcO9pmm1bXF1sazkYQQ%2B5y4QwIrd3FBX6ghMRr4T5kcAUm6L5J7VyLslZozkD6KmTBsM1SAj7cxMRRTYAfpxcAfBCLWcoJPKnBPN8u%2BBThN%2FsztpU0OSfkPBMgjiSz%2Fas20%2B7A48YTFEDZnXPu5ct6TVxym3cuY69Qr5N1xJUMCzhR0MqoEJHSn9vZC%2FjCXCXKmRly5vFJLwJnIOi49GNP%2B2yV78d%2BfrqQVEFTelIPUEg7K2uhXSLHOk5ahcCChR80ExYNlmEkxrKjMyIb%2FQuZDQ4ZReb1LUYZ9NC6cPKtzkcJopC4HF977%2BBMBefNiogSD7tacJKsEPOK8PxEmBTqbDnBIIwGX06D4kRenx9pHc7ilkylc47PIHTmabAgNrmqENafRBzaoqo9M9cWSuxLKhhFElYUwNDC77dnJBjqkAZLSv4KE21ou1ogvNea0uGnSgrHSC96CEMn8HlsnAa1%2BCBN5RCLBwdEDPnwEBJJ697Ti9plX%2BHmQ9%2F9r6LPOlspeMQfPa%2BHBRWJOYbwQXhrjVbz2OuoZJ%2BVkL8P39GgbrmHGlP3w3IoNYz8ZacgO8cy1ayu2QU19RriqLRrYbmuN6O97J9YyEOu%2BQsUXBka%2FVVzzubv1oGJMEXlScMlw%2BkPlfv8r&X-Amz-Signature=1bda0c1715719defac63b02e63b2cbd9afeb3d64baff95b670e36d2e10af9cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
