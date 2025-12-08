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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PR4SVV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChEaSNpOHEV56xdI8pQp1KI1yQe%2FGlCfYA81H06R74OgIhAPcwN996oiTqAtaaZKV2Q1WtOou4tjPy1woInG5ljleWKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlKtK7PVQCgJpb%2BZMq3AOVY2x3hvC7GPpOvHeyoWyaJfob7rJHWTUiAvhSbjH964K8XcbycoyG97brGzM%2BPPMazROLBYc4rvTaeJx%2BLncnekFQImIFs%2FTNEYGL4NNxy3fttrASHU0G9JmfzSHlvFvHbRkBeP0W%2F5rvCKirB4TBaXu6vSDF%2Fh4Fs3QALwrefu%2FIzPBKWCCKFiSGerOUNQ0Jo1UcQOWE7IF%2FpXQ1b%2FYH2r6BmCTMpIHFLfvkg08iadRYm8tthGSjJpgN5gSBJA6uZxfssX%2FcSvJpeRBIhhEYnOkr7V34UDS1Xig9c5HGoSvApr6SQsOSShnyp%2FmWRMZfce%2FOU0AlRnc%2B5ir9CTEP8YAEuxYUuki1HKkkMbb5Mk6iM9ShfpU2g4YC3RQ4CwDMOEnYCxUe%2B8V4ugNLm1BIaDNNi3UMAbcMezy0r%2F7KCOkMtc9rsRS%2FDuWAOOHbHhWv%2BZNmLBemh5TPIIYSY4CxfCPy1k4G0wfyHpSF9%2BWN4LqZtAUnf7vqmvWfgpmWoxGxrEGtUGtcqmqx8DU4m2liK5dTveCVbZb13zFFZF8T84EcPkDJzaW94iCIooc2DCu0IjANvLu6gCRjV0ufcK4RzlUHYNy6YiHOsX%2Fzr32nZ4BAEC1wiJzx6yF%2FajD90NjJBjqkAWtqyHdDPI7yl%2BtveGDTElU2gcQD4i0B6J1ZCs0lAyhEu%2FKJxbz0T%2F%2Ft%2B%2FKrsVA8c9QDynmXmtUV9wfZlkibnJp%2FuI%2BIX0oKlhPK8uY5iCec5q6M5bAt1bQKdYZDSQIi%2BmDbBa375kPLDZzF7yQwn%2Fy3xGjETxQmUMiQqRGS7UQYgmIUXAbYEBNPd8L325dU9T45UaPowC06BO1rfIlm%2FVkN6ULZ&X-Amz-Signature=35d9f07beb300c19b7fa90f483899876dfc9c0f94dd3167198e1961f2d12f528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PR4SVV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChEaSNpOHEV56xdI8pQp1KI1yQe%2FGlCfYA81H06R74OgIhAPcwN996oiTqAtaaZKV2Q1WtOou4tjPy1woInG5ljleWKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlKtK7PVQCgJpb%2BZMq3AOVY2x3hvC7GPpOvHeyoWyaJfob7rJHWTUiAvhSbjH964K8XcbycoyG97brGzM%2BPPMazROLBYc4rvTaeJx%2BLncnekFQImIFs%2FTNEYGL4NNxy3fttrASHU0G9JmfzSHlvFvHbRkBeP0W%2F5rvCKirB4TBaXu6vSDF%2Fh4Fs3QALwrefu%2FIzPBKWCCKFiSGerOUNQ0Jo1UcQOWE7IF%2FpXQ1b%2FYH2r6BmCTMpIHFLfvkg08iadRYm8tthGSjJpgN5gSBJA6uZxfssX%2FcSvJpeRBIhhEYnOkr7V34UDS1Xig9c5HGoSvApr6SQsOSShnyp%2FmWRMZfce%2FOU0AlRnc%2B5ir9CTEP8YAEuxYUuki1HKkkMbb5Mk6iM9ShfpU2g4YC3RQ4CwDMOEnYCxUe%2B8V4ugNLm1BIaDNNi3UMAbcMezy0r%2F7KCOkMtc9rsRS%2FDuWAOOHbHhWv%2BZNmLBemh5TPIIYSY4CxfCPy1k4G0wfyHpSF9%2BWN4LqZtAUnf7vqmvWfgpmWoxGxrEGtUGtcqmqx8DU4m2liK5dTveCVbZb13zFFZF8T84EcPkDJzaW94iCIooc2DCu0IjANvLu6gCRjV0ufcK4RzlUHYNy6YiHOsX%2Fzr32nZ4BAEC1wiJzx6yF%2FajD90NjJBjqkAWtqyHdDPI7yl%2BtveGDTElU2gcQD4i0B6J1ZCs0lAyhEu%2FKJxbz0T%2F%2Ft%2B%2FKrsVA8c9QDynmXmtUV9wfZlkibnJp%2FuI%2BIX0oKlhPK8uY5iCec5q6M5bAt1bQKdYZDSQIi%2BmDbBa375kPLDZzF7yQwn%2Fy3xGjETxQmUMiQqRGS7UQYgmIUXAbYEBNPd8L325dU9T45UaPowC06BO1rfIlm%2FVkN6ULZ&X-Amz-Signature=4e7bca35c9da696738f2872aa9b5afe6a7ef6caf3d7de63037be62ac70111cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
