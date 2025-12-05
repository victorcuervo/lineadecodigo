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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XVVMBI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdLiiA68DpqGf09%2BnoV0inaevZfy%2BtkycDtGnF%2BYw42AiEAqe%2BqG22Duf9IiNdlOql7nt5j1GcXrow%2BaJsVi66%2BPRQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDA4mPcFMSesJlgiuvSrcAxwhmD8QMSo%2FsT9uWsDKSRQbXSZhT4dzsrQMstfxboXVo1d%2BAFcYwxbEw4XmO2diD7fuXAlHZlGb3MqkeVdSbAjfYCmFjoYR8YQ3PojfH6T%2FcBDm5eN68aijfxLiQ4jZRsu4ZHvC5ZtUp5nVHXspeddz84%2BgBBpBmYrLLneBVKTYfv8DqehNBgKbB91I1ZHneGu8jez9Si6b1tkhSgsckDigN%2FsQSdypiqOMRFU1wO7Yt8boPfGuHHP3JBK6M5AEMdMkxz8K%2Bd5hyUiQa3joVOzXWKRDIpHQR%2Fsr1T%2B%2B%2Bu6lQG2jnPbNV%2Bt4lrKHouErrhwtvI8usc46iWoGMDEJO%2FzH%2FzMNCqw%2BK48IGGh2f5qigv28ltevkdi27%2BkyrjJ4vW%2Bo85hYQvVAdxUZ5AzPdQr%2FXGSkpvLNRJjJhI54sWJUUB%2F5%2FUVEpQUk5g1t9WCzmkiu2dvMi7jeY7MvGmTxVm1%2FYJ6t7ezoSQcfki%2B8sEgVgSgjE9bgX4hUHxBy9txfM65nb3UulkEl2gdJm%2BaPAalKnpWYSaGDOJzl7W1wci%2FDsFgFRBzKaQavB9dy7fXb7rjgdbSTSug7bK%2F8jKcdTrSto%2B%2FIgqL837yS99beaHm%2B4mJsSwg%2FZa5VJLWaMPeLyMkGOqUBMVjIvAiW3Lnznpl6DEoMtqlKuZEEVUaGfnBf2X3mHJrHo%2BpjyrZxTPOz33UQeLyJkH1MwfsT1vMbnr3onh8B9ExOR8OTRk98MZW03dCGtJwKuqpsw%2FRZtk65h5gMzAIj92aIoLhReOJP%2Fj58LENNfj%2BOlO2Rw6xFXLwM64f1l%2Bnb%2BbSMP8gYs1XoWR4hmBweCgzkEllaQH%2BnvJ%2B5BPguUUYojrdN&X-Amz-Signature=5dfc289b3a8f47b2ec8f6af70d17fb93f8699d3d4c6056615278e12ecd431a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XVVMBI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdLiiA68DpqGf09%2BnoV0inaevZfy%2BtkycDtGnF%2BYw42AiEAqe%2BqG22Duf9IiNdlOql7nt5j1GcXrow%2BaJsVi66%2BPRQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDA4mPcFMSesJlgiuvSrcAxwhmD8QMSo%2FsT9uWsDKSRQbXSZhT4dzsrQMstfxboXVo1d%2BAFcYwxbEw4XmO2diD7fuXAlHZlGb3MqkeVdSbAjfYCmFjoYR8YQ3PojfH6T%2FcBDm5eN68aijfxLiQ4jZRsu4ZHvC5ZtUp5nVHXspeddz84%2BgBBpBmYrLLneBVKTYfv8DqehNBgKbB91I1ZHneGu8jez9Si6b1tkhSgsckDigN%2FsQSdypiqOMRFU1wO7Yt8boPfGuHHP3JBK6M5AEMdMkxz8K%2Bd5hyUiQa3joVOzXWKRDIpHQR%2Fsr1T%2B%2B%2Bu6lQG2jnPbNV%2Bt4lrKHouErrhwtvI8usc46iWoGMDEJO%2FzH%2FzMNCqw%2BK48IGGh2f5qigv28ltevkdi27%2BkyrjJ4vW%2Bo85hYQvVAdxUZ5AzPdQr%2FXGSkpvLNRJjJhI54sWJUUB%2F5%2FUVEpQUk5g1t9WCzmkiu2dvMi7jeY7MvGmTxVm1%2FYJ6t7ezoSQcfki%2B8sEgVgSgjE9bgX4hUHxBy9txfM65nb3UulkEl2gdJm%2BaPAalKnpWYSaGDOJzl7W1wci%2FDsFgFRBzKaQavB9dy7fXb7rjgdbSTSug7bK%2F8jKcdTrSto%2B%2FIgqL837yS99beaHm%2B4mJsSwg%2FZa5VJLWaMPeLyMkGOqUBMVjIvAiW3Lnznpl6DEoMtqlKuZEEVUaGfnBf2X3mHJrHo%2BpjyrZxTPOz33UQeLyJkH1MwfsT1vMbnr3onh8B9ExOR8OTRk98MZW03dCGtJwKuqpsw%2FRZtk65h5gMzAIj92aIoLhReOJP%2Fj58LENNfj%2BOlO2Rw6xFXLwM64f1l%2Bnb%2BbSMP8gYs1XoWR4hmBweCgzkEllaQH%2BnvJ%2B5BPguUUYojrdN&X-Amz-Signature=1e80c05051e49b7df8cb5efda9e17c3e3e2114430da6e62c4f9d783f808bd217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
