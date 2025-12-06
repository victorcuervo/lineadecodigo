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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECOQFPA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU5oT%2FXbyRnL11Xi85c9NIMMeUiwenxb6YUrlkWik3ZAiEAwc%2Byb797Gyvl%2FPVLQqqt6pfogMS8ZsCAsE4yKAq2zAUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo5nRbb5ePDYT6zsSrcA68HWVHGMukFELobR%2BtK%2B0OuLwfjmS7vUCyuCBkKfqw%2FA%2FxCkPt02pEeTZHtnHM0ktc2juYPx6jXxrgdsaVtusvag2uchfeBJ%2FaRFSspO1ubD3fo3akXcSmqL%2FfWkx00gFbiB0kRe%2FFx0UkHSCxChZQD%2B5kaeCdlfZ4HXhVeJkUtcusFxJPhSAd1%2BfYXlRkeL%2BQGx2fAdhykwJphFmCtDFrdA5x%2FUGzs4du44dhKj6anTwkwDKGDqxwuBYBXKkFgpn7KdX%2FSH5GltNaujH%2F0kIt%2FkOB%2Ftl0GGXihth3dOOHq2DsS0shC%2FPEHmJ9KnmJTWgDjgxvoKVETNaWBGm73y6ab2URgu44Q5%2FTfPmgxOu1dX9OneTAR5TStdWVxsqniBy8A%2BipnNHTPczG7ZM6X8EnyqNMGD9qSCiGdm%2BnWIC8SOGRQrGcEstBDz67Y2CBwUXwUBcx%2B1iLh7IELjRTKjsKGFyT%2BALcGtrYrus797siBf4DV2OHR%2Bp7xlVXTEEm5ysYShTCZesnTugLt1oQP00Am17SvwmB3Iy61eNWcPm3PxmoXVATPbTCmgxXhtujyiXEBzvEc9azPBzXz8NaiQudgnrhbx%2F%2FSVP%2FmwBOPkJ3%2FdhMUUI%2F4YNkHhJkVMOn90skGOqUBVZbR28AKbx9LvBGdhpACoqvUx%2F%2Bt9yqaqaOT0Xqf8wiCF8EDQ8nnKl2Q4LqR%2Fd05smoi7HRvPPxhIQANb24A09DPvJlovNWFmqJZhmDf2%2BZPkWh6yE5DGcBUlYQPjhP%2F6NJHaLPo0nqN%2FApXxGTw3DB1Zywud2KXOOzF0UlyYbuItm0%2BbVdH6p%2BEp72Z%2Bceer%2BTIoFrtX8oIOL6UQf4eKjUy%2FdjJ&X-Amz-Signature=84c68d32b5a840cee4520d35bb5b4de3438cb8a6a8007967b43742cc35617794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECOQFPA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU5oT%2FXbyRnL11Xi85c9NIMMeUiwenxb6YUrlkWik3ZAiEAwc%2Byb797Gyvl%2FPVLQqqt6pfogMS8ZsCAsE4yKAq2zAUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo5nRbb5ePDYT6zsSrcA68HWVHGMukFELobR%2BtK%2B0OuLwfjmS7vUCyuCBkKfqw%2FA%2FxCkPt02pEeTZHtnHM0ktc2juYPx6jXxrgdsaVtusvag2uchfeBJ%2FaRFSspO1ubD3fo3akXcSmqL%2FfWkx00gFbiB0kRe%2FFx0UkHSCxChZQD%2B5kaeCdlfZ4HXhVeJkUtcusFxJPhSAd1%2BfYXlRkeL%2BQGx2fAdhykwJphFmCtDFrdA5x%2FUGzs4du44dhKj6anTwkwDKGDqxwuBYBXKkFgpn7KdX%2FSH5GltNaujH%2F0kIt%2FkOB%2Ftl0GGXihth3dOOHq2DsS0shC%2FPEHmJ9KnmJTWgDjgxvoKVETNaWBGm73y6ab2URgu44Q5%2FTfPmgxOu1dX9OneTAR5TStdWVxsqniBy8A%2BipnNHTPczG7ZM6X8EnyqNMGD9qSCiGdm%2BnWIC8SOGRQrGcEstBDz67Y2CBwUXwUBcx%2B1iLh7IELjRTKjsKGFyT%2BALcGtrYrus797siBf4DV2OHR%2Bp7xlVXTEEm5ysYShTCZesnTugLt1oQP00Am17SvwmB3Iy61eNWcPm3PxmoXVATPbTCmgxXhtujyiXEBzvEc9azPBzXz8NaiQudgnrhbx%2F%2FSVP%2FmwBOPkJ3%2FdhMUUI%2F4YNkHhJkVMOn90skGOqUBVZbR28AKbx9LvBGdhpACoqvUx%2F%2Bt9yqaqaOT0Xqf8wiCF8EDQ8nnKl2Q4LqR%2Fd05smoi7HRvPPxhIQANb24A09DPvJlovNWFmqJZhmDf2%2BZPkWh6yE5DGcBUlYQPjhP%2F6NJHaLPo0nqN%2FApXxGTw3DB1Zywud2KXOOzF0UlyYbuItm0%2BbVdH6p%2BEp72Z%2Bceer%2BTIoFrtX8oIOL6UQf4eKjUy%2FdjJ&X-Amz-Signature=e40464e74f7b793d77fafc8711d9557174108740b756581a33d4b0d64aa04e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
