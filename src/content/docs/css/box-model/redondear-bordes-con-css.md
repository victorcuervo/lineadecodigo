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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TACQ6SD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAifT57fT3Fcj8irmNDfM8TYCiDZAQoGI9CNbTsLPloPAiB2lYU%2FxfM%2FWy2pxCksoXDSvHAoQWlVu6zZHS71i1%2FLaSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMtw94ejnSzjVR3P6NKtwDWnsP1cpoCCQM8IVtls7bscp14oeO%2B8s21Vc2xCv11jxe1ClQIrj08QPCNHyCyW2ghNJhBP6%2FHgNcS3iGny%2Bc0%2Fdc34b7t5zmwjZ23O0wGDxCzsHvoDZdyH2ikjFgu9qN3WcsNVJLnQLYPUmZXCKmlat6GB8kRFjxSVKnjgj9fwYcMZk6he1uzCCTJdjidNww2JAJwa7gj2haezoQKnFBzG5ETTuT4jznM0DgzSPJUYhlpudrXVZ52f0dNwdCSC6pEmFQENg3g6nRMndZxYo2KiEGrHFFeUPuEJWOBJNcqSNblBTG375bVFSpjQ5miuudRgqDleLR0mwgqJW6GekPdpuJbBtGbTyfBoNXx4RoLDK0V5%2BPrWf2VEU23b9SWYQNeSNwn%2BLRrN8h7%2FMasx%2FF6hOpZRhR2QVKOZzHAiv5pg8j5IDxt6j7wunqvPM9i3U%2BuznSAnzzbu8Q6W0NJMF6Txn%2B4HuRWqUefr%2FdXce0R1aOnRnPuXdLBnsxF5p%2Fg4qEjiGLg%2BA2vapdaUy54b%2FkjVhfDxU6TKsqA0ZefcLyPQTVRblc1KRa1l%2FWKdwaOD2pKZ%2FfJ4owO1r4RrbotgUMEePdszNt1VDpRFzF7wN7LPqMSFUBMvmxxBOEMVww%2FtCJygY6pgGvgZL68RS8fH0cGmLWwbj0ltsKkoTdseTZr3eAEVXu7QjMJI1JkVgDt6l%2FzC0PJwXbRHyfh78Hl3xB%2BgTl6FSPb%2Fc1Mc%2Fcf0mJZTSCw5j5wuRxwygYNmk1puHG6TPS%2BHznSmOFtEChhMnfVTmpRLXEQY1CrD4FmOO9IUHuuPgCUl7KqEp7i%2FFiT8uo8mOU5ahE9ZtXq9BGLcnGOVJSX5KLdo4BEwKw&X-Amz-Signature=a612671808c57e3191afb0c45c1513848dd3adde31e097ae7c02b1db2aeb0709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TACQ6SD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAifT57fT3Fcj8irmNDfM8TYCiDZAQoGI9CNbTsLPloPAiB2lYU%2FxfM%2FWy2pxCksoXDSvHAoQWlVu6zZHS71i1%2FLaSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMtw94ejnSzjVR3P6NKtwDWnsP1cpoCCQM8IVtls7bscp14oeO%2B8s21Vc2xCv11jxe1ClQIrj08QPCNHyCyW2ghNJhBP6%2FHgNcS3iGny%2Bc0%2Fdc34b7t5zmwjZ23O0wGDxCzsHvoDZdyH2ikjFgu9qN3WcsNVJLnQLYPUmZXCKmlat6GB8kRFjxSVKnjgj9fwYcMZk6he1uzCCTJdjidNww2JAJwa7gj2haezoQKnFBzG5ETTuT4jznM0DgzSPJUYhlpudrXVZ52f0dNwdCSC6pEmFQENg3g6nRMndZxYo2KiEGrHFFeUPuEJWOBJNcqSNblBTG375bVFSpjQ5miuudRgqDleLR0mwgqJW6GekPdpuJbBtGbTyfBoNXx4RoLDK0V5%2BPrWf2VEU23b9SWYQNeSNwn%2BLRrN8h7%2FMasx%2FF6hOpZRhR2QVKOZzHAiv5pg8j5IDxt6j7wunqvPM9i3U%2BuznSAnzzbu8Q6W0NJMF6Txn%2B4HuRWqUefr%2FdXce0R1aOnRnPuXdLBnsxF5p%2Fg4qEjiGLg%2BA2vapdaUy54b%2FkjVhfDxU6TKsqA0ZefcLyPQTVRblc1KRa1l%2FWKdwaOD2pKZ%2FfJ4owO1r4RrbotgUMEePdszNt1VDpRFzF7wN7LPqMSFUBMvmxxBOEMVww%2FtCJygY6pgGvgZL68RS8fH0cGmLWwbj0ltsKkoTdseTZr3eAEVXu7QjMJI1JkVgDt6l%2FzC0PJwXbRHyfh78Hl3xB%2BgTl6FSPb%2Fc1Mc%2Fcf0mJZTSCw5j5wuRxwygYNmk1puHG6TPS%2BHznSmOFtEChhMnfVTmpRLXEQY1CrD4FmOO9IUHuuPgCUl7KqEp7i%2FFiT8uo8mOU5ahE9ZtXq9BGLcnGOVJSX5KLdo4BEwKw&X-Amz-Signature=f4cf9b09eecda9fbe27c595b7bd86e8008cac7038a727bb57b0e51b5ea605a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
