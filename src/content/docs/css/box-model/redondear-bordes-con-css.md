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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZLE3DD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUGTA5GG82byHPq5%2FMLySillu7Z4PMPXXdkwAHpuLOJAiEAxMenhYrfYs9sPuvVqtjidOLAqGOgmiFsR2heH15iarIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIQ34amCqbnMpVbnRSrcAybLHs2xtWli8iFItX3fDRaW%2BbCpLhlBGN%2FDibILo8X%2FMW0skvy24W20UVFrVVg7X6fuUtrt9CPyB%2Bs5Dvgrr8Bl%2F7gr77eLSUdxgmhXR%2B%2FpAvZq16KLR3HRanlWc5wsV8NsQVQgA1RFD0ZGhDy1zHmrKrRgsYOFQNgPGziiuLed26l8%2BI76%2BIzgQxupW1r6pGhYejRSU05u3fae6As2NzX%2Bw5HEzxJvYaiOlDZhZgvB30%2F3p78KV%2Bk487LtXR3Wen4pQ%2BUjHi4fUF2UlH9Ak94AD5kZ1mj3aL1pAMU73WEnyWHJP6fvfwoW7x7g%2FFpmPbAkrvvANIR%2BYkzyeV240uUFnerlK8Qj4YKu05NOJxopCtQpevGQZbNdeDo3i6qgTpK9Be%2BoeN3ys2DOnFPWMtgiz5QMvh7mD3lMQpPSUUO5WUKkELvY6iLutIcR4u7clvBL%2FxjulDwqQXBIF9HbZsRGzDPObPTxiM0b7Ga0zD0fh2AKg1mAkWFtsLmiRjAkk473Gdm49ezTino2NpFAiESlQDb6bVBv0EUEiSGI71ceR0j%2FzWxKVY7uJqjs8XO%2FxnRTVA8zOVv7klnErgruSzs4guPTGP5J2RcGhGyd7Z8ysxDyZ4vb0UdXIjiYMNyDicoGOqUBMu6j3MgiBRsAcHOqaL%2FtbcRxAGkBHXUUI71GOVNZ7OvWIcc8IhXRs7vFmibX3E26zJvlwWuYaZc%2BClhU3ruc6Tv0nh3qo2gHNlU3n1lsvVW6GKRt5QiwYOhI2VlX6kbYMR1uh1Qp3waSWUxg%2BQIuAUl%2BlPk5r5gHipLXrRXed6Mp52p%2F%2B1js3kePhva%2BLqK%2BeVkbPinFqVYDOrM9T%2Fpo3eaTtNx2&X-Amz-Signature=a32e5183fcfed7bca917704da3f9ea8ee9480b677b4a8a41d48fa18e1bd6d7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZLE3DD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUGTA5GG82byHPq5%2FMLySillu7Z4PMPXXdkwAHpuLOJAiEAxMenhYrfYs9sPuvVqtjidOLAqGOgmiFsR2heH15iarIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIQ34amCqbnMpVbnRSrcAybLHs2xtWli8iFItX3fDRaW%2BbCpLhlBGN%2FDibILo8X%2FMW0skvy24W20UVFrVVg7X6fuUtrt9CPyB%2Bs5Dvgrr8Bl%2F7gr77eLSUdxgmhXR%2B%2FpAvZq16KLR3HRanlWc5wsV8NsQVQgA1RFD0ZGhDy1zHmrKrRgsYOFQNgPGziiuLed26l8%2BI76%2BIzgQxupW1r6pGhYejRSU05u3fae6As2NzX%2Bw5HEzxJvYaiOlDZhZgvB30%2F3p78KV%2Bk487LtXR3Wen4pQ%2BUjHi4fUF2UlH9Ak94AD5kZ1mj3aL1pAMU73WEnyWHJP6fvfwoW7x7g%2FFpmPbAkrvvANIR%2BYkzyeV240uUFnerlK8Qj4YKu05NOJxopCtQpevGQZbNdeDo3i6qgTpK9Be%2BoeN3ys2DOnFPWMtgiz5QMvh7mD3lMQpPSUUO5WUKkELvY6iLutIcR4u7clvBL%2FxjulDwqQXBIF9HbZsRGzDPObPTxiM0b7Ga0zD0fh2AKg1mAkWFtsLmiRjAkk473Gdm49ezTino2NpFAiESlQDb6bVBv0EUEiSGI71ceR0j%2FzWxKVY7uJqjs8XO%2FxnRTVA8zOVv7klnErgruSzs4guPTGP5J2RcGhGyd7Z8ysxDyZ4vb0UdXIjiYMNyDicoGOqUBMu6j3MgiBRsAcHOqaL%2FtbcRxAGkBHXUUI71GOVNZ7OvWIcc8IhXRs7vFmibX3E26zJvlwWuYaZc%2BClhU3ruc6Tv0nh3qo2gHNlU3n1lsvVW6GKRt5QiwYOhI2VlX6kbYMR1uh1Qp3waSWUxg%2BQIuAUl%2BlPk5r5gHipLXrRXed6Mp52p%2F%2B1js3kePhva%2BLqK%2BeVkbPinFqVYDOrM9T%2Fpo3eaTtNx2&X-Amz-Signature=fe4beb97f6ead368581162f3220e47750e5f3242b6a3748d16cbc607a983a4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
