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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX23DDA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCISRhIpxlTQLq5QpeG9P7QWq72YZZtjcQAq0VGSsVsMAIhAP%2Ft6bBb%2B7%2F6nOTLHGrUYTzNlfUf0DgKh7Y1CSQhZEVXKv8DCHEQABoMNjM3NDIzMTgzODA1Igwx9EDv8LsptVfPr98q3ANwrtHCVF6RFhPPv0YHzrlBzA1FwL4BC8FOhT1xqN4Rap3nosAbYKHVDhdx3qdNRdFLaugweC8OgGXlHEgkqItmXE7dqYZs37%2B9xaklie0kWkti4U%2BhvAhaBp7Usi%2FpGEOmQyl9VhnmYJ6%2FL9LF1tyr8AI917ojVBIUuda8riJZpTJLtAKrQi9t6ik%2BDSN1iADOPSFcP3N7qd3cHD4kPDOKsZp7gs%2ByVaep6NMiVuPgPFT4Wfo%2FMtFXWV3bX2%2BMEBZpp4pcBv0VvMcsnkqYXBht6DyrRs6m7prjJm3DvxArA8jknmRnnG8vUmauI2ptAFXa2I50MoQzLaHw1YtyKTTjjLGhPqBDOB9FDnAQ9LRkrOYfn8aj6wjsBBbxPOG52tvA2SYtkVuot4dci8%2FtiGnyQqS1PuCsecQMqWA536rqN04aMoAqFZgCyB2dvMoO6Jh4uKqxOtchz7oEonTpq5atiEjAuFWWxCcC6kbmHW0ji85SpRyy3AS7nBE33XBdYwsY11LE2gZi7r9QPF1URzPfN9zrl3QAYYT6UYR5PtBkhScjy9PWTo0747FUO7X%2Fb0inYmInbU8q8hsH91x0Tq8KNO6xMB0aISdgGGG7hDngVwPu%2FvaeSPb3%2BSykZDCi34fKBjqkAYU2LB9EzO8wwHf7MrcXb9UgsHSzQfs2ah4qKcr8QHZgmrlSRPNhhLvWy3eiTTZ11YwBDqkCTfiX8wRBHIvr8YKgc2V%2FYru9HlB9LvePb1bSr1Aa0NmJfNWOdrFdqb7TQVRXTEh5hASGgEm9oVBmD9boLlliLBR8YOOxxFP29nmTIPNwVEuMu2zgSVXEq0ouCh6VuIjWB4y8tGqJFmx9PoPTlbRq&X-Amz-Signature=9b1b5eb7cf66186e5c9d29407289174b81a604b156c2d023f0eadf81235bebeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX23DDA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCISRhIpxlTQLq5QpeG9P7QWq72YZZtjcQAq0VGSsVsMAIhAP%2Ft6bBb%2B7%2F6nOTLHGrUYTzNlfUf0DgKh7Y1CSQhZEVXKv8DCHEQABoMNjM3NDIzMTgzODA1Igwx9EDv8LsptVfPr98q3ANwrtHCVF6RFhPPv0YHzrlBzA1FwL4BC8FOhT1xqN4Rap3nosAbYKHVDhdx3qdNRdFLaugweC8OgGXlHEgkqItmXE7dqYZs37%2B9xaklie0kWkti4U%2BhvAhaBp7Usi%2FpGEOmQyl9VhnmYJ6%2FL9LF1tyr8AI917ojVBIUuda8riJZpTJLtAKrQi9t6ik%2BDSN1iADOPSFcP3N7qd3cHD4kPDOKsZp7gs%2ByVaep6NMiVuPgPFT4Wfo%2FMtFXWV3bX2%2BMEBZpp4pcBv0VvMcsnkqYXBht6DyrRs6m7prjJm3DvxArA8jknmRnnG8vUmauI2ptAFXa2I50MoQzLaHw1YtyKTTjjLGhPqBDOB9FDnAQ9LRkrOYfn8aj6wjsBBbxPOG52tvA2SYtkVuot4dci8%2FtiGnyQqS1PuCsecQMqWA536rqN04aMoAqFZgCyB2dvMoO6Jh4uKqxOtchz7oEonTpq5atiEjAuFWWxCcC6kbmHW0ji85SpRyy3AS7nBE33XBdYwsY11LE2gZi7r9QPF1URzPfN9zrl3QAYYT6UYR5PtBkhScjy9PWTo0747FUO7X%2Fb0inYmInbU8q8hsH91x0Tq8KNO6xMB0aISdgGGG7hDngVwPu%2FvaeSPb3%2BSykZDCi34fKBjqkAYU2LB9EzO8wwHf7MrcXb9UgsHSzQfs2ah4qKcr8QHZgmrlSRPNhhLvWy3eiTTZ11YwBDqkCTfiX8wRBHIvr8YKgc2V%2FYru9HlB9LvePb1bSr1Aa0NmJfNWOdrFdqb7TQVRXTEh5hASGgEm9oVBmD9boLlliLBR8YOOxxFP29nmTIPNwVEuMu2zgSVXEq0ouCh6VuIjWB4y8tGqJFmx9PoPTlbRq&X-Amz-Signature=83fdbf1c5246bec729859e07f7b3a3e2650da1039afc98393e1f333437197905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
