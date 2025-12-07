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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODYGITF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEA2suDYMaDwBRXfBMJot6nixlbgsN29YLNtbBbo6vcAiEAxn0jrRJR8gID5dv%2FcxA2IeirP6xh9Af0uEVu4aGcqZUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMf2Tk%2F9VLWbJiJCZSrcA%2BtZEqPIMfpPnLW7E%2FDvTB7zH836B6o%2BGx4RxwENaBWZDOO0f3ABCbbk%2B8KG0eBSRdXLCMdDLHNMF2oU%2BKDXk%2FA5ExC1UytTqUt%2FWYgJoBwimDa%2FJlN%2BCcZ71Gx8DerRq4PyPfWVEFW60KyPFIZ0z3G%2BE8J2nSYHwI%2FMuJoMWh9bkthL5sEnh0upJjB5MTJ%2BtwzyT6%2FouzMRl2bLuMiukjpmDVV%2FcOsrfHyWLbQN84mAXxf4oq0bB2eJOulKl7PN8gxATA6CxT%2Bs0UX6xc%2FYdd2KRPpXTc0r1ku4IS2JYtYO7VTh4kS%2BUmnfxsPTljGWjR4S9SiAY0hzHth4l7ouAeZuvLiNJ3vsoqtYS6dxPUaqOISbWkAhvmw2uGlxmtPPQQ4TuygFlyi1heG0LRcrs22i8%2FYwrk7hpBf%2FWJEortMpW%2FZVM5%2Bcoi3N5Pgm4rGGqpL64N5EQUnPl%2BjcfjhZGQ66J0cLyjR930tw35J%2FP0C2LAHwpz%2BKjV7YN0C39R2m4aH2%2BISlmL5qmNbRyvw1CJIF48QhNSriBBM4%2FscNaz%2FBhQ2C6x%2BPxVXEyIuWgnSLTXT%2FtQBUmzSlFgAYLK4MNfn09LSsfzZkGbEYjNOza9FFML2i18%2FV3NeijlcYMPP90skGOqUBSYBt734bywtVrYfsgw%2BNbsfwiTMeBvECjiuFrtjTktYIG4Yix3yXevxGNj9XjpCXPr2xTgo2CQUl5rYnc%2BbTQHzSiceQIK904RrtjWk90iOdN%2FL%2B82cjnj4SENt4nAsJo%2BfmDzPN4lzLbYkEdfgsgAS2wyHkYKaGLxEkRab78Ni2lJvt6Uqanf5D0rZrS0LlKnjqCNkixGbsOUpRlR%2FzZ7jT6eL1&X-Amz-Signature=475b837aa59abf2e9a96073eb2f0b5ed7dd92ae35147cea12c33adeedc4738b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODYGITF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEA2suDYMaDwBRXfBMJot6nixlbgsN29YLNtbBbo6vcAiEAxn0jrRJR8gID5dv%2FcxA2IeirP6xh9Af0uEVu4aGcqZUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMf2Tk%2F9VLWbJiJCZSrcA%2BtZEqPIMfpPnLW7E%2FDvTB7zH836B6o%2BGx4RxwENaBWZDOO0f3ABCbbk%2B8KG0eBSRdXLCMdDLHNMF2oU%2BKDXk%2FA5ExC1UytTqUt%2FWYgJoBwimDa%2FJlN%2BCcZ71Gx8DerRq4PyPfWVEFW60KyPFIZ0z3G%2BE8J2nSYHwI%2FMuJoMWh9bkthL5sEnh0upJjB5MTJ%2BtwzyT6%2FouzMRl2bLuMiukjpmDVV%2FcOsrfHyWLbQN84mAXxf4oq0bB2eJOulKl7PN8gxATA6CxT%2Bs0UX6xc%2FYdd2KRPpXTc0r1ku4IS2JYtYO7VTh4kS%2BUmnfxsPTljGWjR4S9SiAY0hzHth4l7ouAeZuvLiNJ3vsoqtYS6dxPUaqOISbWkAhvmw2uGlxmtPPQQ4TuygFlyi1heG0LRcrs22i8%2FYwrk7hpBf%2FWJEortMpW%2FZVM5%2Bcoi3N5Pgm4rGGqpL64N5EQUnPl%2BjcfjhZGQ66J0cLyjR930tw35J%2FP0C2LAHwpz%2BKjV7YN0C39R2m4aH2%2BISlmL5qmNbRyvw1CJIF48QhNSriBBM4%2FscNaz%2FBhQ2C6x%2BPxVXEyIuWgnSLTXT%2FtQBUmzSlFgAYLK4MNfn09LSsfzZkGbEYjNOza9FFML2i18%2FV3NeijlcYMPP90skGOqUBSYBt734bywtVrYfsgw%2BNbsfwiTMeBvECjiuFrtjTktYIG4Yix3yXevxGNj9XjpCXPr2xTgo2CQUl5rYnc%2BbTQHzSiceQIK904RrtjWk90iOdN%2FL%2B82cjnj4SENt4nAsJo%2BfmDzPN4lzLbYkEdfgsgAS2wyHkYKaGLxEkRab78Ni2lJvt6Uqanf5D0rZrS0LlKnjqCNkixGbsOUpRlR%2FzZ7jT6eL1&X-Amz-Signature=16a74abd35d53975aec98ea4a33b9c7097ebdebf83a257e24fa1f18a89f86a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
