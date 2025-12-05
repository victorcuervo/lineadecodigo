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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4UGF3O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVqPEA0Y6HiUGbLimJ%2BkqsI2SSX%2F7tR9d0ApNbwNSAAIhAOyRg1qcb3F9OZ4oC9b9OqAh1ywv7bBNCSoWvmeH5IS3Kv8DCGAQABoMNjM3NDIzMTgzODA1IgyQCdVZf8XMy%2Fc1ktgq3AMGB5d4wvl0rww7fVhUGkMk%2F865BVavRbd%2FQbx4rPpVrq6eg7kSRknEuDzAOWzrZDia5XGZgYWR7yj1ySeLlO2TGDG%2BSmd7kzVFvSRQJxruvGO0duQmSUbHig2Mopj8lZz2jM2XbjFDE0r8TGuMKT0GcT4ePVQHuFvaMXAVDxRHSWFKwaYOmYUFaxwdmK5RR9uV2vhjfSDez403Tyu55lc9A1FGJY9iOVM57qQnU8hy%2FfTxkdt3x3uZbOILxMZOVLJNx3GgA1kQurJqc%2BC6KE%2BaeJcbTZSgGTnVe%2FDhijn93MxZBCCWoHgf92vQz07iFptUsZ0luyVCdIdJtbOeuC9MV%2BFQzEg8eo8cXzChtSKp908yrAeNUp2S5Y8fs3Ex7uLQ5RBiiFdcBo2EyHgpoVC1qPQKxPXVjNWLgRSxPHR3cVjN2bmZJeMzwrofAweTJLJClO3HdSHUogb2MUjz5grw2oPLHdOoLHSdVQlP4IU53RZqNXGfwNS9%2B4IgeaZMsdAN6kPRd7t7uzhnsR5aCnhuZiTnSrZ%2FZHoEMOaeeB2qFu7oKw17Nl9VDwSGI82nzUxqAJDFvRJvX88Hcx8TmHzQC2ptwlLdgDR8gYsQpT0qPGs3pemfzOY3Jd4yQDDo88vJBjqkARAVjkelLBNg4wb5Ye7PFnfobZLlv%2FHQ%2BJaobjiw5BqitbP27hsvU2U%2Fxgoy70yUC2VHvUYT9Qg%2Bg11Ob5V26VQlKGfeqfekOoDLFBPT0iYa%2FTDIRIvdYbrUQ58oVFjp%2Fnot5la7u07XlrPcdaQKRJSFEuZsHA0aBlg6C3R3O0V%2BQHEoh7LpuKfD7t3yScG6I7PY7Pr3j46MYMXAuAzXYc7cDqAy&X-Amz-Signature=e2313167b3226216fc0fbe9cbda835b4c1a77bf9f5483ecfc409598ae52332fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R4UGF3O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNVqPEA0Y6HiUGbLimJ%2BkqsI2SSX%2F7tR9d0ApNbwNSAAIhAOyRg1qcb3F9OZ4oC9b9OqAh1ywv7bBNCSoWvmeH5IS3Kv8DCGAQABoMNjM3NDIzMTgzODA1IgyQCdVZf8XMy%2Fc1ktgq3AMGB5d4wvl0rww7fVhUGkMk%2F865BVavRbd%2FQbx4rPpVrq6eg7kSRknEuDzAOWzrZDia5XGZgYWR7yj1ySeLlO2TGDG%2BSmd7kzVFvSRQJxruvGO0duQmSUbHig2Mopj8lZz2jM2XbjFDE0r8TGuMKT0GcT4ePVQHuFvaMXAVDxRHSWFKwaYOmYUFaxwdmK5RR9uV2vhjfSDez403Tyu55lc9A1FGJY9iOVM57qQnU8hy%2FfTxkdt3x3uZbOILxMZOVLJNx3GgA1kQurJqc%2BC6KE%2BaeJcbTZSgGTnVe%2FDhijn93MxZBCCWoHgf92vQz07iFptUsZ0luyVCdIdJtbOeuC9MV%2BFQzEg8eo8cXzChtSKp908yrAeNUp2S5Y8fs3Ex7uLQ5RBiiFdcBo2EyHgpoVC1qPQKxPXVjNWLgRSxPHR3cVjN2bmZJeMzwrofAweTJLJClO3HdSHUogb2MUjz5grw2oPLHdOoLHSdVQlP4IU53RZqNXGfwNS9%2B4IgeaZMsdAN6kPRd7t7uzhnsR5aCnhuZiTnSrZ%2FZHoEMOaeeB2qFu7oKw17Nl9VDwSGI82nzUxqAJDFvRJvX88Hcx8TmHzQC2ptwlLdgDR8gYsQpT0qPGs3pemfzOY3Jd4yQDDo88vJBjqkARAVjkelLBNg4wb5Ye7PFnfobZLlv%2FHQ%2BJaobjiw5BqitbP27hsvU2U%2Fxgoy70yUC2VHvUYT9Qg%2Bg11Ob5V26VQlKGfeqfekOoDLFBPT0iYa%2FTDIRIvdYbrUQ58oVFjp%2Fnot5la7u07XlrPcdaQKRJSFEuZsHA0aBlg6C3R3O0V%2BQHEoh7LpuKfD7t3yScG6I7PY7Pr3j46MYMXAuAzXYc7cDqAy&X-Amz-Signature=3cb6c38f62fe94c7a02a43de7fc5ebedc8cb9279a3574fc49b04c9ae6cf1fe8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
