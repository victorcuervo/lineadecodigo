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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6XZNDD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpzkOclk6zfnvRt6W9zoy%2Fr2mc9jy9sibL42PcoqqLsAiEAx3iCFsee6PADzUaThS6G4yVo1qgnJnueYn9jsdApD74qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAjg4s4HHHSJzqm3CrcA%2F2S3cge77%2Fpte0Bs1HsJKNj6xbyJcB7ZnrdPLZzj%2F03E47fKRf7RSqYjnHdES0AhHLnab5Z5FPEruYRg1R9Fibsh5FAjPP2bFFrLUDKWoIPwOM0JNiMFRnfaF%2BSvusLZpB%2BpN1OqNtRJsg7GqtKeJ3B4ePSuAa4fTMETpB16r55IXNsRdVfOax6lWaZNOl%2BqIuPtYCoxsZfkiFkYBLUu%2Ba94dttOzPemykNDOjtKLOs8mwFXEn8lrk72blQ4Nn2keSjeid7YmZIfngnSMkksulLhSEyDFul%2F0d8Gv2wG0VdRpQLCEnGvfxtW85xbWSubuPyz8Xgr9MU8hI%2BCnkeKQZzp2XPCgeeyMSGuls3L3GCfp4olcLw5wvuT4GjZbd3y194Bw9Itd2NTbkSHqYVNvTRatJYxginWIyw%2FqixSVynDRyLJo17oDWjX10Uayo8mfZmABWLsaTG8%2FdPGWPaH9XjqzCj3hXesvws7QGYurANBoN%2FbBDJ0PAyZB6r%2BYM1LUvlxfABvdRE8iATJBK2TXvtl4oPPDcT9kvk2F3zf0o8HJWQXR8uMRRFz8oRrYw3SiQXfxAWHYsEjUucI%2Fw01cHFbVJIpyBX6luN2KGgED3BTUyhCee%2BKhzZBoo9MKDt2ckGOqUBpS8M376KnNnf%2FSui8jN0Dk8MskflKHJ3APaA8rD1n8plh5I1dvakgPT3KKU11dUE9wJjd8SvvMlABJHh3%2FOlPvd8ay4xpDyPW8zy0xYV79%2BGn58mPX2XuHjoTyujw3RdycRUVMQL6lOkBF0k9TVW1sMkopMdhDU1odqOdditwaR0EvwPUu3s8rdgbYaxcYKk0hawtCAGKbo%2FE28I93yWMfyFoNtY&X-Amz-Signature=16fc9aec366c9be555e251e2451124e2b215a04bcc562fecb465b90921153649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6XZNDD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpzkOclk6zfnvRt6W9zoy%2Fr2mc9jy9sibL42PcoqqLsAiEAx3iCFsee6PADzUaThS6G4yVo1qgnJnueYn9jsdApD74qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAjg4s4HHHSJzqm3CrcA%2F2S3cge77%2Fpte0Bs1HsJKNj6xbyJcB7ZnrdPLZzj%2F03E47fKRf7RSqYjnHdES0AhHLnab5Z5FPEruYRg1R9Fibsh5FAjPP2bFFrLUDKWoIPwOM0JNiMFRnfaF%2BSvusLZpB%2BpN1OqNtRJsg7GqtKeJ3B4ePSuAa4fTMETpB16r55IXNsRdVfOax6lWaZNOl%2BqIuPtYCoxsZfkiFkYBLUu%2Ba94dttOzPemykNDOjtKLOs8mwFXEn8lrk72blQ4Nn2keSjeid7YmZIfngnSMkksulLhSEyDFul%2F0d8Gv2wG0VdRpQLCEnGvfxtW85xbWSubuPyz8Xgr9MU8hI%2BCnkeKQZzp2XPCgeeyMSGuls3L3GCfp4olcLw5wvuT4GjZbd3y194Bw9Itd2NTbkSHqYVNvTRatJYxginWIyw%2FqixSVynDRyLJo17oDWjX10Uayo8mfZmABWLsaTG8%2FdPGWPaH9XjqzCj3hXesvws7QGYurANBoN%2FbBDJ0PAyZB6r%2BYM1LUvlxfABvdRE8iATJBK2TXvtl4oPPDcT9kvk2F3zf0o8HJWQXR8uMRRFz8oRrYw3SiQXfxAWHYsEjUucI%2Fw01cHFbVJIpyBX6luN2KGgED3BTUyhCee%2BKhzZBoo9MKDt2ckGOqUBpS8M376KnNnf%2FSui8jN0Dk8MskflKHJ3APaA8rD1n8plh5I1dvakgPT3KKU11dUE9wJjd8SvvMlABJHh3%2FOlPvd8ay4xpDyPW8zy0xYV79%2BGn58mPX2XuHjoTyujw3RdycRUVMQL6lOkBF0k9TVW1sMkopMdhDU1odqOdditwaR0EvwPUu3s8rdgbYaxcYKk0hawtCAGKbo%2FE28I93yWMfyFoNtY&X-Amz-Signature=4b51925c78426e77a024d536001bcd68874db3fce101bcafe41ca8e1d5a47e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
