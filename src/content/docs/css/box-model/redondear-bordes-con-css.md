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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VACICCJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVTpA5%2FXnV4sNn0avuBhdHhiTRd1HXdtq9fQ%2B8Ag0acAIgTuY8vnn2qIG%2FS2%2F0jlDi5JX3ZfLmXZSM7LauJ6s8wG4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB5RtqGd3kl9paGoPSrcA0Hl2hQDYa0pHi1wAk%2BB82XFVtZjdn3%2F99QOjQgSk9uqR5xOKlk0cJcf8wjiMEvojz1Vk0ItILWwV3DfPhAjLxckHk4iSi2%2BjW0Uk%2BTZowiS53jgdPDW3Na2XtlKRvSqdbayk%2F%2BNp6tKJMQ7hAmqWUNwmsSMPVuQ%2F%2B92bSPN8t6IG6G08lQp07lj0uNWQolIPfPcuxF2eKJGlXz%2F6BBJvtx1YLDeEh81yiB41WgDaTjEwwIpptToJa%2Bn7pECV5A9R3buJhd94ot9AlYM7mHq8CtaM%2FZoGM4TUr%2FntOWO0FQQ33Z5DMd78XBzRkovKvx5ZIhcOy%2BAsx2D9eAixX%2FaRmH221FFrqCNMdaXWdOv1wVhNs%2Fv%2BRThKvrG35hw0vr6hoTCN7%2FJ7mqR5FlLBI91sgS6lI7X%2FWJfYOcCwayhU5yeeK%2FAzXn4C6pQsikrdwUzyzcLxNhCpR%2FygUeqv5JG12BpPjcBfl%2B%2BwCjA4wCg%2FWu%2FSIwMXaYTGBA02DCtPDfMgMnug7zbiGIKV5rcToK5HKG2AVFXsKtuOjpXkGrY6gTfFghsmpcdz6lUkFLofpSBTbbpZ46g6Q2JMZDoIuDzZ30t5xbFs11nSk8m0cspc2ED7Cqh7dUds6qTyXriMKDPiMoGOqUBFnWdK3n3YxVjMFzypZ5K0WPH79VaszMJdlFuuWzqnpAaMDNO%2FiGLweL%2B39Ly53BxA25VTOwaq1FSw8lhW3KHU3m23yWP9xWxNSc4DLT1Hm2G2IjO3stA4f3mFGyNa94WXW0wqP8ewqpc9BrlgNGKrCbX2ZyU0X2EWXy%2BdxGL0TT4MvWHdSiKOgtjAfq7pi%2FfxaSNGn84lENCZBoYKCJaIfJYzs37&X-Amz-Signature=0c3adea896693aff89844f64f4663d05b900cf31d261549635c4d70014966ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VACICCJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVTpA5%2FXnV4sNn0avuBhdHhiTRd1HXdtq9fQ%2B8Ag0acAIgTuY8vnn2qIG%2FS2%2F0jlDi5JX3ZfLmXZSM7LauJ6s8wG4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB5RtqGd3kl9paGoPSrcA0Hl2hQDYa0pHi1wAk%2BB82XFVtZjdn3%2F99QOjQgSk9uqR5xOKlk0cJcf8wjiMEvojz1Vk0ItILWwV3DfPhAjLxckHk4iSi2%2BjW0Uk%2BTZowiS53jgdPDW3Na2XtlKRvSqdbayk%2F%2BNp6tKJMQ7hAmqWUNwmsSMPVuQ%2F%2B92bSPN8t6IG6G08lQp07lj0uNWQolIPfPcuxF2eKJGlXz%2F6BBJvtx1YLDeEh81yiB41WgDaTjEwwIpptToJa%2Bn7pECV5A9R3buJhd94ot9AlYM7mHq8CtaM%2FZoGM4TUr%2FntOWO0FQQ33Z5DMd78XBzRkovKvx5ZIhcOy%2BAsx2D9eAixX%2FaRmH221FFrqCNMdaXWdOv1wVhNs%2Fv%2BRThKvrG35hw0vr6hoTCN7%2FJ7mqR5FlLBI91sgS6lI7X%2FWJfYOcCwayhU5yeeK%2FAzXn4C6pQsikrdwUzyzcLxNhCpR%2FygUeqv5JG12BpPjcBfl%2B%2BwCjA4wCg%2FWu%2FSIwMXaYTGBA02DCtPDfMgMnug7zbiGIKV5rcToK5HKG2AVFXsKtuOjpXkGrY6gTfFghsmpcdz6lUkFLofpSBTbbpZ46g6Q2JMZDoIuDzZ30t5xbFs11nSk8m0cspc2ED7Cqh7dUds6qTyXriMKDPiMoGOqUBFnWdK3n3YxVjMFzypZ5K0WPH79VaszMJdlFuuWzqnpAaMDNO%2FiGLweL%2B39Ly53BxA25VTOwaq1FSw8lhW3KHU3m23yWP9xWxNSc4DLT1Hm2G2IjO3stA4f3mFGyNa94WXW0wqP8ewqpc9BrlgNGKrCbX2ZyU0X2EWXy%2BdxGL0TT4MvWHdSiKOgtjAfq7pi%2FfxaSNGn84lENCZBoYKCJaIfJYzs37&X-Amz-Signature=db3174980531b24d7b08dafcab16eb311bec6b8846d47443d4e537488b925826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
