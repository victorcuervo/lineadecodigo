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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYYUOJV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsJxUgfC4hpD%2F1%2B%2FksUSWVM2Z%2FnpNbkffAX63cC4GkAiEA7FHl1n45v%2FQTCLS7JbwPEuJwXPMkvMP2SktEcm5gNrEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAf0b2wwAftLhxMolyrcAyD0VQ%2FAAS20kU5cBnICxso6agCylBlvSx4wSIBGOO4%2BrjF0lwTe1r2qI2sw6cJeYVjQCHtOPMdTfRz1LQHw8ZbPTLY9z9WGrKE8tIV71gyZy%2F4OvpGvID89PU0vdLRzj4I475II1J0JWUG9cfI%2FU1fvcYkLK%2FD7k4b%2F7BMsYsSyrLIDxnNStAUslows9argg0f7XSSE8LB%2Fh4qMtMaVXqgeuc47fOn%2BTWzSH4j5yk2v6C6J2sQsXgyVoQc83g4mCRD4gET2IIZW%2B%2F1ehET2VLcxauqYEXL%2BKV2ZV54BHSKHIx30HqxPosD%2BgRH4C%2BCSgw%2Fc1uJyFPYeieR2suMATVXPYHjWcbzNRZ2%2BkFvRPJCR0EmvzFLv1nf1r0OL7DckAXEGblF4Z9yQuD9br7uUvxdsNcW77M1XwSlz52EsNvn%2FyDQSXAssIfFQ4Xt14bJI82F%2FwzPtHeQvhPaseW2n5uIQ0z19MOEKy5VTMCaE9HRZpaPQg7heTbaFTzBwQ2OZBP3n3GYBQuh%2BRjtC4JjXIrFlUc8AA3BDm03CdShqvXCKzjjtINjuXQzqrwpNdX7oAArS8P7hyXWslv0HThaijo3iNN1QJ4qJhw0qCEVf%2FBjfONCsSlw3qXzyq4h5MNqryckGOqUBq3IS%2BKrZQ3j1DtrRjd7%2B6oKexcCEgVJ9JBcX5ln9kFmppB9news50kfaO4fwnkWxqnLShMFiq2wSHg9PtKqwfFN0%2BjwNO8NJ60PbnqwoOSuVx1o9rvEDsKHrrSQ%2BaW00aEsc%2FxCVyp6UJmS0OZV1ROr2mEEcJ1EqHvvprX6X87RQ%2BTkLBjN4rrZL7P%2FYklW%2BpPr4WsCjeChsVpPdcOy5slha82fo&X-Amz-Signature=d5bc3f8acabd0db1f111d3617b3207eb0489f8452d9c84e3fcda8a941cdfe899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYYUOJV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsJxUgfC4hpD%2F1%2B%2FksUSWVM2Z%2FnpNbkffAX63cC4GkAiEA7FHl1n45v%2FQTCLS7JbwPEuJwXPMkvMP2SktEcm5gNrEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAf0b2wwAftLhxMolyrcAyD0VQ%2FAAS20kU5cBnICxso6agCylBlvSx4wSIBGOO4%2BrjF0lwTe1r2qI2sw6cJeYVjQCHtOPMdTfRz1LQHw8ZbPTLY9z9WGrKE8tIV71gyZy%2F4OvpGvID89PU0vdLRzj4I475II1J0JWUG9cfI%2FU1fvcYkLK%2FD7k4b%2F7BMsYsSyrLIDxnNStAUslows9argg0f7XSSE8LB%2Fh4qMtMaVXqgeuc47fOn%2BTWzSH4j5yk2v6C6J2sQsXgyVoQc83g4mCRD4gET2IIZW%2B%2F1ehET2VLcxauqYEXL%2BKV2ZV54BHSKHIx30HqxPosD%2BgRH4C%2BCSgw%2Fc1uJyFPYeieR2suMATVXPYHjWcbzNRZ2%2BkFvRPJCR0EmvzFLv1nf1r0OL7DckAXEGblF4Z9yQuD9br7uUvxdsNcW77M1XwSlz52EsNvn%2FyDQSXAssIfFQ4Xt14bJI82F%2FwzPtHeQvhPaseW2n5uIQ0z19MOEKy5VTMCaE9HRZpaPQg7heTbaFTzBwQ2OZBP3n3GYBQuh%2BRjtC4JjXIrFlUc8AA3BDm03CdShqvXCKzjjtINjuXQzqrwpNdX7oAArS8P7hyXWslv0HThaijo3iNN1QJ4qJhw0qCEVf%2FBjfONCsSlw3qXzyq4h5MNqryckGOqUBq3IS%2BKrZQ3j1DtrRjd7%2B6oKexcCEgVJ9JBcX5ln9kFmppB9news50kfaO4fwnkWxqnLShMFiq2wSHg9PtKqwfFN0%2BjwNO8NJ60PbnqwoOSuVx1o9rvEDsKHrrSQ%2BaW00aEsc%2FxCVyp6UJmS0OZV1ROr2mEEcJ1EqHvvprX6X87RQ%2BTkLBjN4rrZL7P%2FYklW%2BpPr4WsCjeChsVpPdcOy5slha82fo&X-Amz-Signature=6d06462a13a1c5b58fec9722ab1b015a3772781647b9c6b20082eaa487cad921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
