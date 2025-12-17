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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXH42V3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMRwJ0PJJFEUt2zx2v3TynL%2FrkF1g62%2F7N77Y5pPASAwIhAIoOh68fXSfo%2F%2Bp2nHUlzQrRpg%2BGvZ2A7oOXyCmep7DFKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV1QiPyMybEZzuroEq3AMrD%2FtU8hDSnvxwujD3TTUpFFUb8ZiHoARDJzO%2F82dG7%2Ft5fAi6r211cAM8mtewAHWmoGXGxZs2ZmgaywGooj%2F4ARZ%2F9pdJ9QizjPiJMxKhkTcQSRnOvH7TkQ4HnOvbqOxL83g4XgbLZZptz9kV1lpVlGwP0cBBdqM17%2FR1zRJ1lfzmewADcivmGdR%2BeZK%2BrLII%2BOJOIILOBY53QwmNC%2Blm7dT53oiRdkupX8RKljghg6lRep1Kf3epo36XWAubYI%2BKjFClGtxa49O0nmNCpiBmyI4%2BTMNZ7eMpChogqYVlpRC0xVkB%2F2Zqk%2F2v%2FH%2BnrdP3r031aCKvKEN4KFO0zG%2BiIPOSRoHmpEojiIQ2%2FfB%2FTjzdW1oL%2FtAV2HULUxxugpBmVMJsgPnLG5aTAcQPL2J73UAiDDomoDg7riUTfPmF%2BQ5MZX9QfIGkJE7okxq%2BkkGmdv3jzdoaFLyno%2Bz6AvVt5Y7mYSC%2F1lsXy%2BlM6D9JIQX4B95RsVtPbALwOvWpcxxshWaXDfrWEf8lwt2%2FTKxSUYluvc%2B2aSHGh6GEiPueV4Wi7%2BPpJr%2B54i%2F5xKB5XYP%2FWdNcooa9LlbKJ4h9lHwuMiEkipUp2Ae5dJAwowCyfoFtDadMD8blzu0A2DDhrYzKBjqkAfcZxBgtDcsP3sN9%2BPu8%2FnGiD82bY8OcP%2FIGjj%2Fqe3QiNnGC7hVxUuY88YOo5iLoj%2BMMrT7vibYlX89yXcnTB2Lj%2BzVvcOF1cGwChmk3DquWOb8T17Q5HAXcEXkHGqWfZZJpH8yQl7F%2BVi2Xb4swKabsI25pAZ1fuhHkeNvzH1rEaTWbvsQeMUicvgkWsU0X2BsmF%2Bkydu4zvkkg6ofTkz7GqqfE&X-Amz-Signature=a1b855bcb651901cb2b031a121b5e5cc68ebfe1c00cd1101bb45edf77507f72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXH42V3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMRwJ0PJJFEUt2zx2v3TynL%2FrkF1g62%2F7N77Y5pPASAwIhAIoOh68fXSfo%2F%2Bp2nHUlzQrRpg%2BGvZ2A7oOXyCmep7DFKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV1QiPyMybEZzuroEq3AMrD%2FtU8hDSnvxwujD3TTUpFFUb8ZiHoARDJzO%2F82dG7%2Ft5fAi6r211cAM8mtewAHWmoGXGxZs2ZmgaywGooj%2F4ARZ%2F9pdJ9QizjPiJMxKhkTcQSRnOvH7TkQ4HnOvbqOxL83g4XgbLZZptz9kV1lpVlGwP0cBBdqM17%2FR1zRJ1lfzmewADcivmGdR%2BeZK%2BrLII%2BOJOIILOBY53QwmNC%2Blm7dT53oiRdkupX8RKljghg6lRep1Kf3epo36XWAubYI%2BKjFClGtxa49O0nmNCpiBmyI4%2BTMNZ7eMpChogqYVlpRC0xVkB%2F2Zqk%2F2v%2FH%2BnrdP3r031aCKvKEN4KFO0zG%2BiIPOSRoHmpEojiIQ2%2FfB%2FTjzdW1oL%2FtAV2HULUxxugpBmVMJsgPnLG5aTAcQPL2J73UAiDDomoDg7riUTfPmF%2BQ5MZX9QfIGkJE7okxq%2BkkGmdv3jzdoaFLyno%2Bz6AvVt5Y7mYSC%2F1lsXy%2BlM6D9JIQX4B95RsVtPbALwOvWpcxxshWaXDfrWEf8lwt2%2FTKxSUYluvc%2B2aSHGh6GEiPueV4Wi7%2BPpJr%2B54i%2F5xKB5XYP%2FWdNcooa9LlbKJ4h9lHwuMiEkipUp2Ae5dJAwowCyfoFtDadMD8blzu0A2DDhrYzKBjqkAfcZxBgtDcsP3sN9%2BPu8%2FnGiD82bY8OcP%2FIGjj%2Fqe3QiNnGC7hVxUuY88YOo5iLoj%2BMMrT7vibYlX89yXcnTB2Lj%2BzVvcOF1cGwChmk3DquWOb8T17Q5HAXcEXkHGqWfZZJpH8yQl7F%2BVi2Xb4swKabsI25pAZ1fuhHkeNvzH1rEaTWbvsQeMUicvgkWsU0X2BsmF%2Bkydu4zvkkg6ofTkz7GqqfE&X-Amz-Signature=b12d2ac8c83b5767e4d591a8449f0b11fd562984f546995f406a1e9886a0549e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
