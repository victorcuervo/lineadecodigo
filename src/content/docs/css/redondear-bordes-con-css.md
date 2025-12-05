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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7B3IGRS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLrKJxoz8yZqhInGUgr0XsvIisPLMzBrVRfETteO2huAiEA3rBtCQQpxqwvWel53bsGAKslel3DLux%2Biski9XPC1Iwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAlf5A0SFnUsUjlT5yrcAxVQ%2BipZXcacsKnRC%2Fr5UpsRpV2CVBctoZgZ63cWD4XZYg3yqFYWRtzxALw3h3fpr6NnWu3ggyL61iPL2V0KviibVIvzm3f7TiwxhRywMJm1%2BQ8y0%2FLKgveThOFtVPIeiiOfrn6UJfSZIPqMs29FL%2FTvFxo4Zzv5ZDrSgJvDWn4kLF39cFpDyAEPM3tmcx0lLAxlaC9bebA96zXR8jJFGNC7kxkYbCW%2Fo4IoHOKtNscfmSXthwO%2F7Rr9v6dO2EuorsHPOOs1pDsH7QSFOizX8MXLnE7lCFBYGm8070cPfaqfsAQg1lJxS5ZtFGKsFSURhiqXMZNIVix%2Fc8dHJ9el%2BT5zUqXC3CldtDj4iHwJcrKjyAWdkwknJJW6lWw4dirguii%2FtqJwYJ11zuTwNT8xBfTxm95Lf%2BZ4s3FWVE%2B%2B1NkRg%2Bw29BeqQKKUwwJXoX7Et70yOZnLOpFS4MJ8uI5NJig66vZr0ltIk6nNvGGyssbxLe0Si0N4Ypz6sU56QFF%2B0wiTcMuFLSvTweoJwqF4DvcDE2mfHEVRtg1XC3Nw1jPi1Jr5GS2Y78tIsDLzQXVqloerG78T0%2FwNauNv3wnWwQD5HCofHXhIbCSk1fAlRcBuQl0CHHV9NtZALoY5MOmpyckGOqUBg82UPexFIhZ%2FNIpVCcv3X16srxpF3IHVWYbHHst6HBpX2svIYqXUQKd2Dt96VROQGCkDimRJYme1gPNgFDVWZgzfbAxL%2F%2BQEdvwwyqaOFoVtwc1GEio5GMMPEIPJ%2BAeCDTU8%2BsC%2FoPK%2FlmbPB1ios6W%2FxuH8iL8lg%2Fa4a80nfl3h0cnJ6lFUynfZt5HEaaARZ0H5ZLBS5xyuk90rBxlZ7IxWF0Rc&X-Amz-Signature=eac536c56cf843bf6a6ec82a71cf7a7075373a4da076c68b1d1076e3526bdd46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7B3IGRS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLrKJxoz8yZqhInGUgr0XsvIisPLMzBrVRfETteO2huAiEA3rBtCQQpxqwvWel53bsGAKslel3DLux%2Biski9XPC1Iwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAlf5A0SFnUsUjlT5yrcAxVQ%2BipZXcacsKnRC%2Fr5UpsRpV2CVBctoZgZ63cWD4XZYg3yqFYWRtzxALw3h3fpr6NnWu3ggyL61iPL2V0KviibVIvzm3f7TiwxhRywMJm1%2BQ8y0%2FLKgveThOFtVPIeiiOfrn6UJfSZIPqMs29FL%2FTvFxo4Zzv5ZDrSgJvDWn4kLF39cFpDyAEPM3tmcx0lLAxlaC9bebA96zXR8jJFGNC7kxkYbCW%2Fo4IoHOKtNscfmSXthwO%2F7Rr9v6dO2EuorsHPOOs1pDsH7QSFOizX8MXLnE7lCFBYGm8070cPfaqfsAQg1lJxS5ZtFGKsFSURhiqXMZNIVix%2Fc8dHJ9el%2BT5zUqXC3CldtDj4iHwJcrKjyAWdkwknJJW6lWw4dirguii%2FtqJwYJ11zuTwNT8xBfTxm95Lf%2BZ4s3FWVE%2B%2B1NkRg%2Bw29BeqQKKUwwJXoX7Et70yOZnLOpFS4MJ8uI5NJig66vZr0ltIk6nNvGGyssbxLe0Si0N4Ypz6sU56QFF%2B0wiTcMuFLSvTweoJwqF4DvcDE2mfHEVRtg1XC3Nw1jPi1Jr5GS2Y78tIsDLzQXVqloerG78T0%2FwNauNv3wnWwQD5HCofHXhIbCSk1fAlRcBuQl0CHHV9NtZALoY5MOmpyckGOqUBg82UPexFIhZ%2FNIpVCcv3X16srxpF3IHVWYbHHst6HBpX2svIYqXUQKd2Dt96VROQGCkDimRJYme1gPNgFDVWZgzfbAxL%2F%2BQEdvwwyqaOFoVtwc1GEio5GMMPEIPJ%2BAeCDTU8%2BsC%2FoPK%2FlmbPB1ios6W%2FxuH8iL8lg%2Fa4a80nfl3h0cnJ6lFUynfZt5HEaaARZ0H5ZLBS5xyuk90rBxlZ7IxWF0Rc&X-Amz-Signature=b05f9b05c3516d952c7baa17808acef216a953bb55e46f0c65b654e20b08c749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
