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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWCMVPI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARzb9nEBgDBHxIJ7zBusPuc4xGv9Jk8bqUx02Q2ZZoEAiEA%2FzqNZK6tC5dvTv55QSB7H94G6L%2B%2FtN6NGIKHxoQZggIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC60GlFmPuRr5T75ACrcAx8hioFzaJYjgCddbYCq0De7oWKVaB5KmEsbbB%2F8I%2FllMe2A%2Fsm5x0ydDCgAOSWzp%2BgnBvvcd2SOa1lGlRg9z1xyAe6YYGg9u8MAytt8lghIKkGJTR1zgSMIEW8rzw66OB1wEJrmbbEcTnrb5Yxx91pS9YFbR%2B%2FEtPYzQiYvr1pPW5870KqiOb3mdycYeAf%2Fzea9%2BC2%2FBHZcBrWe8xjIuCgBJxshsDNSwfiAZ%2BlPxnqNRldTqFxpurCmagayqD7ms0P55UJ8p6s9zu%2FFkOMQ%2FsY92ITvkhPBP4cAoWsSdNOQPRba5or7lhnL4x4YMdugqQnm9G6vbFXf71cJ25VMaYB%2FIlEyNH2Jqn1kvfw77XnzfjGYv5sy2bh7hIYQzqVn039dLuJI4aUwyopT4386DXR6meH3q0pGLVnWDlZdPcd9Nc2I0XqTOHh00ua%2F2cKtMSO%2Fa%2F47iC3gyzx6vUn5uFTZvCl%2BATx2DgiuAAbwu%2FzQLVfaom1%2BJ7T8zCe0zW2DWmyhL413EF53wVwnM4APytU6OQUpoQfXq5ZQPx%2FHyhc3wZIutCpo0pl08XIhJ%2FkxR2dlnDmdOnBnZt4hB%2B4MqQz53dXLfLut1s1UK2mkGbnNNthFWhiuvxJGNopPMNaz3MkGOqUB%2Bssut4CrQHsz7%2BY3Xwj7YwyTNA4DBbEgSmKoInGDHMzqGrZ1EemoGpbEGaCxHQjrSIdMPT3Jk4tEnzHVU1MEM%2FrtTiK6HZ5%2BJBfYogE%2FjtFnxIHerFWHW13CleOClJqHNvEDEXFZDAna%2FLxALbV2ThoCxfjnMiG2JPj3bknhnmGyCyRVaOhyyFZ2kHG85IW5zBLVpPu1FX36dXIN1CNYS7sFUPWA&X-Amz-Signature=e0a470f6307b611c29d7b286cab84d1229534477f754894e02f52377c46b4b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWCMVPI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARzb9nEBgDBHxIJ7zBusPuc4xGv9Jk8bqUx02Q2ZZoEAiEA%2FzqNZK6tC5dvTv55QSB7H94G6L%2B%2FtN6NGIKHxoQZggIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC60GlFmPuRr5T75ACrcAx8hioFzaJYjgCddbYCq0De7oWKVaB5KmEsbbB%2F8I%2FllMe2A%2Fsm5x0ydDCgAOSWzp%2BgnBvvcd2SOa1lGlRg9z1xyAe6YYGg9u8MAytt8lghIKkGJTR1zgSMIEW8rzw66OB1wEJrmbbEcTnrb5Yxx91pS9YFbR%2B%2FEtPYzQiYvr1pPW5870KqiOb3mdycYeAf%2Fzea9%2BC2%2FBHZcBrWe8xjIuCgBJxshsDNSwfiAZ%2BlPxnqNRldTqFxpurCmagayqD7ms0P55UJ8p6s9zu%2FFkOMQ%2FsY92ITvkhPBP4cAoWsSdNOQPRba5or7lhnL4x4YMdugqQnm9G6vbFXf71cJ25VMaYB%2FIlEyNH2Jqn1kvfw77XnzfjGYv5sy2bh7hIYQzqVn039dLuJI4aUwyopT4386DXR6meH3q0pGLVnWDlZdPcd9Nc2I0XqTOHh00ua%2F2cKtMSO%2Fa%2F47iC3gyzx6vUn5uFTZvCl%2BATx2DgiuAAbwu%2FzQLVfaom1%2BJ7T8zCe0zW2DWmyhL413EF53wVwnM4APytU6OQUpoQfXq5ZQPx%2FHyhc3wZIutCpo0pl08XIhJ%2FkxR2dlnDmdOnBnZt4hB%2B4MqQz53dXLfLut1s1UK2mkGbnNNthFWhiuvxJGNopPMNaz3MkGOqUB%2Bssut4CrQHsz7%2BY3Xwj7YwyTNA4DBbEgSmKoInGDHMzqGrZ1EemoGpbEGaCxHQjrSIdMPT3Jk4tEnzHVU1MEM%2FrtTiK6HZ5%2BJBfYogE%2FjtFnxIHerFWHW13CleOClJqHNvEDEXFZDAna%2FLxALbV2ThoCxfjnMiG2JPj3bknhnmGyCyRVaOhyyFZ2kHG85IW5zBLVpPu1FX36dXIN1CNYS7sFUPWA&X-Amz-Signature=095924fdc4d39fe546446180c243dc922e91644aec62a85f2d48d9d6be686e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
