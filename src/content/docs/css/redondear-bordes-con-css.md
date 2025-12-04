---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQ7HFVY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCd%2BQxPV619J2ULkeEUx6tjM3FMnIdxzl28VUL3oDp43QIhAOFnWZk1piVKePrjsfVfg2U2LcdJO8CgxavrXpWI93UxKv8DCEgQABoMNjM3NDIzMTgzODA1Igy%2FuwG8xx%2BJocxsM4Eq3AMJ1ylQ2VjsSuHAS7imwjNlul17sdXuzYJb7cIms9mpACbkAXMB4DIDNj6mJCuGn%2BPoi%2FBONvh0q%2FQe8BLYHb1Xx9vj5Gf0nrF8BC0W3SlVgl0I13IgLwEuUD3TIecSFwf%2FJg4xAAgBLjgfW3bj8QuhvVraB1osO%2BCccrK4bXu3cXnMdBiXE8to3AtJLbZ3KxwdYQJo9esN970rV3jvIfdYT2AyDh7%2B9C%2BmLMAS3GFBgHbaPF%2BRwL37Q7F9poJe3e2F9XA864kFZqjIdjKAz4lLrtD54%2FHPW54u8IMjUSY%2B%2BhWz5LEFsYElvzj6oUeIYU9QQX%2FcCT%2FIareWfyrO2CcES8HoIRdtFoVTQV10pVB0V75PHGSp%2BD15yGpklyDmVMs%2Bmu3ge8ErKVICfCwVI2Bd6XvR2joP%2FhU28c3qVSDn67SzCY0XQqHCj36uC08YmwiW0Ezet5ZMSr7qfbHRpK8Tz8z7ztPqqVEBucsFn1RxF5h6GnH8ZUUUGGGhKpVxNkPwHFZWbG%2BouTtrit6Aket%2FpUtoG1bfC5PmoehpHSOpl56X6vGVXrVCkppir3uD6GBrRtBi4WwFrMEV9%2FzS6QC3ij1WCAa3AqUtKSAuuQs1Is%2BsBLVp5PkXL3S4QzC7vsbJBjqkAS%2BHewD3AVSN4MqIEVbZaBJruFDcQvJDN0VGLMq7g0j9CNQLOUjvmHJabAcYng9XedzmcDOPVkF4X%2BnO6CKvE33Ai54Kcw6IzWAZq2OzZOB9fG8qxAcWEXqw48PhFfhkgm7jsm6oaKfmnP9uUroVZT%2BTWsywLAJT%2FfSyqYFoTxdf%2FDX9eKknnztq2h6tFyhqldvoylE%2B8HTkFOducjWeoqGaRRtt&X-Amz-Signature=8f8a989c37fa0599505eeb6362416328b85f4be322632c4e6228e60f2c0347ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQ7HFVY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCd%2BQxPV619J2ULkeEUx6tjM3FMnIdxzl28VUL3oDp43QIhAOFnWZk1piVKePrjsfVfg2U2LcdJO8CgxavrXpWI93UxKv8DCEgQABoMNjM3NDIzMTgzODA1Igy%2FuwG8xx%2BJocxsM4Eq3AMJ1ylQ2VjsSuHAS7imwjNlul17sdXuzYJb7cIms9mpACbkAXMB4DIDNj6mJCuGn%2BPoi%2FBONvh0q%2FQe8BLYHb1Xx9vj5Gf0nrF8BC0W3SlVgl0I13IgLwEuUD3TIecSFwf%2FJg4xAAgBLjgfW3bj8QuhvVraB1osO%2BCccrK4bXu3cXnMdBiXE8to3AtJLbZ3KxwdYQJo9esN970rV3jvIfdYT2AyDh7%2B9C%2BmLMAS3GFBgHbaPF%2BRwL37Q7F9poJe3e2F9XA864kFZqjIdjKAz4lLrtD54%2FHPW54u8IMjUSY%2B%2BhWz5LEFsYElvzj6oUeIYU9QQX%2FcCT%2FIareWfyrO2CcES8HoIRdtFoVTQV10pVB0V75PHGSp%2BD15yGpklyDmVMs%2Bmu3ge8ErKVICfCwVI2Bd6XvR2joP%2FhU28c3qVSDn67SzCY0XQqHCj36uC08YmwiW0Ezet5ZMSr7qfbHRpK8Tz8z7ztPqqVEBucsFn1RxF5h6GnH8ZUUUGGGhKpVxNkPwHFZWbG%2BouTtrit6Aket%2FpUtoG1bfC5PmoehpHSOpl56X6vGVXrVCkppir3uD6GBrRtBi4WwFrMEV9%2FzS6QC3ij1WCAa3AqUtKSAuuQs1Is%2BsBLVp5PkXL3S4QzC7vsbJBjqkAS%2BHewD3AVSN4MqIEVbZaBJruFDcQvJDN0VGLMq7g0j9CNQLOUjvmHJabAcYng9XedzmcDOPVkF4X%2BnO6CKvE33Ai54Kcw6IzWAZq2OzZOB9fG8qxAcWEXqw48PhFfhkgm7jsm6oaKfmnP9uUroVZT%2BTWsywLAJT%2FfSyqYFoTxdf%2FDX9eKknnztq2h6tFyhqldvoylE%2B8HTkFOducjWeoqGaRRtt&X-Amz-Signature=5a1299639712afce14b366f0e75706ae6067b834c80b9c5315f5c071a0d2a43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
