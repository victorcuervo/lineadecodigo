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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUIBVEC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFCeNi1qrpy9r0f4INHt1Ts4Hmq0m4zqn9ueeEeAhLxAiEAsg9ZEPFY6MbuaMPIDTEQeuWmV51%2FMhpOdmyPMt9sE1Uq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH8d0AR5%2B8LMRCoBEircA%2Bay2URVS%2BUpfBZkatLaqI%2F16S5wr34tHVGpULLyJhuYPpgoROH1H66EZtsQNlUzRDCf7zWnvEKm1UbJBH14eWeV3KYu4wkegGxexmQ10ZCEaDL8yDtC572Cn2sF%2Fsd8VPeXWw9ZQaezh1X%2BczU3T7ztXg2rimcw18go3M%2FGHqk8nomDtPaA0wVMh3rL%2FoyWtsj3q9ANc4ykMs9ZIOAygWfqMQ1ED%2FUz%2Bo31vrBUGCcIo9%2B94pJt9V1bUg%2B%2B4U59trA1jMCGnx5h75VlYUXnKfOtLy0Qdg3LwKplPWRGyb8M%2BYKBk0wYVMXGDiIGL0jvzwXgRbFD63KaBr5Ct8Sc1wd8sw1iJC90xlw5PpfBNHvJHzDdSVvzZ41e6qyup7otzzWzot%2FqAu6czFaH5WyAr2SfqOGH%2F8txE3KijrneMVuV2NNme6E4COh0yDsbNVG6j1bDVXCTUovoiccNRsdT7AtPF0Fv1b8D9MKEtjLCozgTHIU%2FOb7%2Fwpd3wPaew7%2BpcqmbRgn9sXxBjesKGB28tYdzj0DUrXvTmlUXzoFY6VQIRiFXUfhsx0EOd2LGMLZ37MQFy3r48H8ZhzlOmjTRegvguDX0FdcmK%2F9gRbu4eRTwV48pvT5e1bKa%2FpXkMOSdicoGOqUBEovqxPcMy1alBNjEBkOQDvWA42%2Br%2FtIBbPW2DdBtiy4xvfEhvk5gZ9A4bwlDPSYr0FooczaBt4%2BJdKz4FvSo5LlpN5cQnF0D0M4VbStL%2FsLFfZzCkBPctlU8QpK6Ha%2Bal6nAEv8loSk5Ff7RKQ0CRKqm3JBznEvAcuHCgUXQYnUfYxvtS7i6LyRZ%2BAuct%2Fz0Jh45bwZUwcNakgWr1pKApt0qzTjR&X-Amz-Signature=725e7d34e7ec1afdd5c4877becf435bc2363544c98fd542e2a44e4af9753a562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUIBVEC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFCeNi1qrpy9r0f4INHt1Ts4Hmq0m4zqn9ueeEeAhLxAiEAsg9ZEPFY6MbuaMPIDTEQeuWmV51%2FMhpOdmyPMt9sE1Uq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH8d0AR5%2B8LMRCoBEircA%2Bay2URVS%2BUpfBZkatLaqI%2F16S5wr34tHVGpULLyJhuYPpgoROH1H66EZtsQNlUzRDCf7zWnvEKm1UbJBH14eWeV3KYu4wkegGxexmQ10ZCEaDL8yDtC572Cn2sF%2Fsd8VPeXWw9ZQaezh1X%2BczU3T7ztXg2rimcw18go3M%2FGHqk8nomDtPaA0wVMh3rL%2FoyWtsj3q9ANc4ykMs9ZIOAygWfqMQ1ED%2FUz%2Bo31vrBUGCcIo9%2B94pJt9V1bUg%2B%2B4U59trA1jMCGnx5h75VlYUXnKfOtLy0Qdg3LwKplPWRGyb8M%2BYKBk0wYVMXGDiIGL0jvzwXgRbFD63KaBr5Ct8Sc1wd8sw1iJC90xlw5PpfBNHvJHzDdSVvzZ41e6qyup7otzzWzot%2FqAu6czFaH5WyAr2SfqOGH%2F8txE3KijrneMVuV2NNme6E4COh0yDsbNVG6j1bDVXCTUovoiccNRsdT7AtPF0Fv1b8D9MKEtjLCozgTHIU%2FOb7%2Fwpd3wPaew7%2BpcqmbRgn9sXxBjesKGB28tYdzj0DUrXvTmlUXzoFY6VQIRiFXUfhsx0EOd2LGMLZ37MQFy3r48H8ZhzlOmjTRegvguDX0FdcmK%2F9gRbu4eRTwV48pvT5e1bKa%2FpXkMOSdicoGOqUBEovqxPcMy1alBNjEBkOQDvWA42%2Br%2FtIBbPW2DdBtiy4xvfEhvk5gZ9A4bwlDPSYr0FooczaBt4%2BJdKz4FvSo5LlpN5cQnF0D0M4VbStL%2FsLFfZzCkBPctlU8QpK6Ha%2Bal6nAEv8loSk5Ff7RKQ0CRKqm3JBznEvAcuHCgUXQYnUfYxvtS7i6LyRZ%2BAuct%2Fz0Jh45bwZUwcNakgWr1pKApt0qzTjR&X-Amz-Signature=25b055ea39770f07ef4df4be90e9e6708e2f08f5c4552c071959113de75dcc07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
