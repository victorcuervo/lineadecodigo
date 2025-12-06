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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2F4VDE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfsX722L7N7r0vy16530xMiV564N1%2FbnspuO4%2Bw3pI0wIgW2KvdlGizHxN7%2B3kWJT0axgZ3L4T1qs8oHWwlQIQ27gq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDL%2BhQmtc%2FzMTQrU41SrcA%2BqkMbofSNx0oEcmJT8BKoENRSZrsG1Mk%2BzmMM5yy6sYnYb8i%2Bt7MgMgUsOO9lC9qlLVgQfxJngew7U1M7sqrHmi6b%2B71Vi02ljwZV9iMXv3i26hy1ap%2BixrpLEIphjGUJOAeAWeLb%2FklaUddzh87iNsWPboZ5sC9ofEpwQRFMTVA1CmMGqRut2%2FqfrmuCTjrrCoO6hmvMS9XZLje58jg%2F%2FqIfYonquMresmOQONRPdSyWlLBKM2jSxZxikj1KQK6Qx8B7xlRTQvVXpLngWAnnXpMObfDGdjuE6q9elZH90CrwF%2F6kX76e%2Fby7IrBBQa4wHrO84bXKafWykUHgO3krdxdfEo%2BdbQm9kn4vGG6tI4fGRm3SkRBMkmN3IFXs%2F2Z3wLwWlPYpL77qX5YXmXgTFd7WfWpDvb%2B86fvhJXEU5RqxbURtj8UTPAj96J3VJjL5ndNguqrOrc0fmp8WM1wqFK%2BkfJfAwagLqx%2BRqSpa2%2BDE5zPE9JwE3mlAjZlBL7HgM14fEd1TCMP%2FylfNI%2BwZiWpEJ1SG%2BxWDfNuZP%2BdfqQWxde81%2Bnsp%2BrSHA0cjXi9bl7cyMH4w%2BYFXpIP1WH4k6jl9skbL5Eo9jOWQ7VYUucsbNeOjEEV%2Be5pS37MNPezskGOqUBbPgH56AbIYDlmQwN5X%2Bd2x4GEO1k9DUd4uhIa0tjUsVMBaJBtW2utwnUz0eSGvfocI%2BFuajVbSH2lhb5YsShHh78bchYck3P73%2BMoO5pYMpTMVXmj%2FPLhEo2Q0wcVG%2BjjSmttwNqSxOGmfI%2B1RHj31KSH%2FqNG0CtjwenqFUfVrAUL42RkrEYjcAhiYORuE4YK%2Fw74BuR4DD9Sg%2FMJgZfm8Oqjywb&X-Amz-Signature=7e5a22dfd0d548231aafd1538744e1bec97637b8112d445428c54a1cea0f683b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2F4VDE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfsX722L7N7r0vy16530xMiV564N1%2FbnspuO4%2Bw3pI0wIgW2KvdlGizHxN7%2B3kWJT0axgZ3L4T1qs8oHWwlQIQ27gq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDL%2BhQmtc%2FzMTQrU41SrcA%2BqkMbofSNx0oEcmJT8BKoENRSZrsG1Mk%2BzmMM5yy6sYnYb8i%2Bt7MgMgUsOO9lC9qlLVgQfxJngew7U1M7sqrHmi6b%2B71Vi02ljwZV9iMXv3i26hy1ap%2BixrpLEIphjGUJOAeAWeLb%2FklaUddzh87iNsWPboZ5sC9ofEpwQRFMTVA1CmMGqRut2%2FqfrmuCTjrrCoO6hmvMS9XZLje58jg%2F%2FqIfYonquMresmOQONRPdSyWlLBKM2jSxZxikj1KQK6Qx8B7xlRTQvVXpLngWAnnXpMObfDGdjuE6q9elZH90CrwF%2F6kX76e%2Fby7IrBBQa4wHrO84bXKafWykUHgO3krdxdfEo%2BdbQm9kn4vGG6tI4fGRm3SkRBMkmN3IFXs%2F2Z3wLwWlPYpL77qX5YXmXgTFd7WfWpDvb%2B86fvhJXEU5RqxbURtj8UTPAj96J3VJjL5ndNguqrOrc0fmp8WM1wqFK%2BkfJfAwagLqx%2BRqSpa2%2BDE5zPE9JwE3mlAjZlBL7HgM14fEd1TCMP%2FylfNI%2BwZiWpEJ1SG%2BxWDfNuZP%2BdfqQWxde81%2Bnsp%2BrSHA0cjXi9bl7cyMH4w%2BYFXpIP1WH4k6jl9skbL5Eo9jOWQ7VYUucsbNeOjEEV%2Be5pS37MNPezskGOqUBbPgH56AbIYDlmQwN5X%2Bd2x4GEO1k9DUd4uhIa0tjUsVMBaJBtW2utwnUz0eSGvfocI%2BFuajVbSH2lhb5YsShHh78bchYck3P73%2BMoO5pYMpTMVXmj%2FPLhEo2Q0wcVG%2BjjSmttwNqSxOGmfI%2B1RHj31KSH%2FqNG0CtjwenqFUfVrAUL42RkrEYjcAhiYORuE4YK%2Fw74BuR4DD9Sg%2FMJgZfm8Oqjywb&X-Amz-Signature=084ef8ef7a1add430090ffcb13ee24555e39a04d4c5c8b78959e2162aa13ebed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
