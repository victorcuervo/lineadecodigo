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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHY4KHQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdeCE3%2BNxx5iHH24xboLaE%2BWNPtpKtp%2BTTQifY59L51AiEA82g5oegVGdKAFurAcJR6kVmgTAed7hgxJ8g9n60kjLcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMp72ajJ5bx%2BQNxGnyrcA1mxFeaxei0bSP4WaD%2F%2B00ss2eNDjIN%2FcZrTGMblzjFYUjNzyL94x%2BUXkTWgFZP6hD9NVsBlUabIzHalGkhFKG%2BJg0h1rXThas1Ely8c2GUCqS%2BZui859sBkSaOe5pRMeqkMfDgKDh9VhPnX38QpyprfIjB99rOITDUQOR2cG62tl2tfIJGk8kZWVUu5GP0US22dCHOYDeaYsSTL%2Bqj1YX1IMD8BgY%2BCDszFExePokT5d8El1zjQFCynG%2BZEqV%2FHOecUQ7oR8Udm9J%2FpM3wq8iAKL1bKUaJjfo1%2FiwkmXVqRjQH6OyznR6oG1CBoH7ES0U6lEXu9NLqpulbZHcRz6Z4kIwErAIYiBqTa1fhxkf8f31jKvO9tpb2Udf0IAoWH5YenbwwpFU9O1bf%2FkVRGfPSJIOmqZnIPspLKStcIDXCQLW%2B%2FzHRlTlxvjgpo4OILDSD854edFIgn2DJTp%2B%2BVcDaelxHYJ8UD7dWONWZCTDdKhHjXeFRUcPr%2F1T92tGKwzyR70b52AduA7zs2VITZMUqnZ%2F%2FIPV6A%2Fd71YoG4YN050MI1Irk2iU%2BM77Rad14Q9wxrq%2FLV0X5dOLOjWPc6GUEP3DyOHhML4RD8Qc0U2Ot1dUw7XtA7j1eNJLOeMIvrz8kGOqUBMDWpXJVwdVpSjzIj2TJ4WMO11sS15ki0mRY2sNTcF4VRLjvX1IWjpejGXJbG426wPx2YEaN6d0UXcC5S8OH3Cl2pyvScyZqkmtbARGL2y7UZBX6NcjYcduuWsSPyb6C3Y8mp%2BYOioGJs5mTME1%2B2E3pZrPFspBibAiqzf1uD3sY1i0Dq7FE3ZvBHjNzKUZhfFL60HB%2F9%2Fum3SST0Zfy8O8n07Q%2FB&X-Amz-Signature=b2e66ffdd6eb3bed4d8b86ecbb357304d7518b856e3d336fa879fbe17f890b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHY4KHQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdeCE3%2BNxx5iHH24xboLaE%2BWNPtpKtp%2BTTQifY59L51AiEA82g5oegVGdKAFurAcJR6kVmgTAed7hgxJ8g9n60kjLcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMp72ajJ5bx%2BQNxGnyrcA1mxFeaxei0bSP4WaD%2F%2B00ss2eNDjIN%2FcZrTGMblzjFYUjNzyL94x%2BUXkTWgFZP6hD9NVsBlUabIzHalGkhFKG%2BJg0h1rXThas1Ely8c2GUCqS%2BZui859sBkSaOe5pRMeqkMfDgKDh9VhPnX38QpyprfIjB99rOITDUQOR2cG62tl2tfIJGk8kZWVUu5GP0US22dCHOYDeaYsSTL%2Bqj1YX1IMD8BgY%2BCDszFExePokT5d8El1zjQFCynG%2BZEqV%2FHOecUQ7oR8Udm9J%2FpM3wq8iAKL1bKUaJjfo1%2FiwkmXVqRjQH6OyznR6oG1CBoH7ES0U6lEXu9NLqpulbZHcRz6Z4kIwErAIYiBqTa1fhxkf8f31jKvO9tpb2Udf0IAoWH5YenbwwpFU9O1bf%2FkVRGfPSJIOmqZnIPspLKStcIDXCQLW%2B%2FzHRlTlxvjgpo4OILDSD854edFIgn2DJTp%2B%2BVcDaelxHYJ8UD7dWONWZCTDdKhHjXeFRUcPr%2F1T92tGKwzyR70b52AduA7zs2VITZMUqnZ%2F%2FIPV6A%2Fd71YoG4YN050MI1Irk2iU%2BM77Rad14Q9wxrq%2FLV0X5dOLOjWPc6GUEP3DyOHhML4RD8Qc0U2Ot1dUw7XtA7j1eNJLOeMIvrz8kGOqUBMDWpXJVwdVpSjzIj2TJ4WMO11sS15ki0mRY2sNTcF4VRLjvX1IWjpejGXJbG426wPx2YEaN6d0UXcC5S8OH3Cl2pyvScyZqkmtbARGL2y7UZBX6NcjYcduuWsSPyb6C3Y8mp%2BYOioGJs5mTME1%2B2E3pZrPFspBibAiqzf1uD3sY1i0Dq7FE3ZvBHjNzKUZhfFL60HB%2F9%2Fum3SST0Zfy8O8n07Q%2FB&X-Amz-Signature=92abebec40e0bf0ec43433c26295e1ccae0b86b39ebefe755d310172deae351c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
