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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQFIANJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq8Kpa2MFOBnPiHjr1m5%2BW9kecbyjqhmYypGyJg42qDgIgGOSganr4n1w3BBFuWakbbOM7P2kqJgDY7eEWZXofAX4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbufW%2FdZXkqiihIJircA4%2FNv%2BSR%2BbZ4XMZA%2B0zVEETjGJPoU8fruh3mMA5YDPANP3dTfgWsWTMWsNAL1k%2FTkYc5aFpmshIxHo0%2Bv7Ak%2BhjdiIxZ%2FtCXbxMawCoOqyVirbRuz08DuCfZ6ZyJlp2SgT4Ew6IALiDSJU5XWMCEaIrOAi0y01H6Lz6AeBLxe8j0oScr1qyq6o50%2FYo%2FcOC%2BnE504igql4HDMgs3sRhQTiUt0R6g3VJkj8NDPdftVObQoot%2BWIxtxpojG5zbWbbdKNchvszs%2By41uWbDFhB94L0oB7ZJL1imUyB2Ozau30HfxG4djpGh3PSgmhgBrz9JSPmPLVRTwFpluWNxdXUk7bImTvfPOhH9ao2my9deMCYUDnYDF1OiPCzMoRFCLz2fBaEK2g8SVzk4rfGOsOFajZC%2BezYY0eAmRU99LfnFIo6gReJBjCveBWrZkrIRkp1vmlqnO6xT6ywhLtXBwlryB7Wc3Uy2yzUY2Iv5pKCL3hwKZVhtKMWBg%2Bgt%2BNZCaRxx0m5XQ2xDJq8AFHQtbZz9E5Ydxtk9dtI2ENdWQao%2F%2BhO08ViLEzedMuGXKZRwv9DK%2BdWzUIQoGSwwbJSlp410SXhvLxJK2YDjK91FkJjsx6Fb81kFz%2FvGPSqjpddqMLyk38kGOqUB76vDbrTXjptnKuOR5ReCqOrskRKlKLcJEYPRcK1PjVshxNTA8VxlMdlUHVrG4rvkj5qOxRyc0ykxWxXctMCghAPCh7qmC9sClRMijJY0qDqnV8zDE7pwrv7MVx%2BIW3sYgMWfunKpsA4M%2B0%2BJBj4c8BIgiQUJFRHAHdm0UXlqzcPHrBC6aPy70%2Bagi6COJH%2BOc776BCEMqN2KjKYBhdt7LyoQWebb&X-Amz-Signature=5446af7d585248d3d31c868d26ca502aaa1d33ad6177fb9696eaf1f30536aa80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQFIANJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq8Kpa2MFOBnPiHjr1m5%2BW9kecbyjqhmYypGyJg42qDgIgGOSganr4n1w3BBFuWakbbOM7P2kqJgDY7eEWZXofAX4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbufW%2FdZXkqiihIJircA4%2FNv%2BSR%2BbZ4XMZA%2B0zVEETjGJPoU8fruh3mMA5YDPANP3dTfgWsWTMWsNAL1k%2FTkYc5aFpmshIxHo0%2Bv7Ak%2BhjdiIxZ%2FtCXbxMawCoOqyVirbRuz08DuCfZ6ZyJlp2SgT4Ew6IALiDSJU5XWMCEaIrOAi0y01H6Lz6AeBLxe8j0oScr1qyq6o50%2FYo%2FcOC%2BnE504igql4HDMgs3sRhQTiUt0R6g3VJkj8NDPdftVObQoot%2BWIxtxpojG5zbWbbdKNchvszs%2By41uWbDFhB94L0oB7ZJL1imUyB2Ozau30HfxG4djpGh3PSgmhgBrz9JSPmPLVRTwFpluWNxdXUk7bImTvfPOhH9ao2my9deMCYUDnYDF1OiPCzMoRFCLz2fBaEK2g8SVzk4rfGOsOFajZC%2BezYY0eAmRU99LfnFIo6gReJBjCveBWrZkrIRkp1vmlqnO6xT6ywhLtXBwlryB7Wc3Uy2yzUY2Iv5pKCL3hwKZVhtKMWBg%2Bgt%2BNZCaRxx0m5XQ2xDJq8AFHQtbZz9E5Ydxtk9dtI2ENdWQao%2F%2BhO08ViLEzedMuGXKZRwv9DK%2BdWzUIQoGSwwbJSlp410SXhvLxJK2YDjK91FkJjsx6Fb81kFz%2FvGPSqjpddqMLyk38kGOqUB76vDbrTXjptnKuOR5ReCqOrskRKlKLcJEYPRcK1PjVshxNTA8VxlMdlUHVrG4rvkj5qOxRyc0ykxWxXctMCghAPCh7qmC9sClRMijJY0qDqnV8zDE7pwrv7MVx%2BIW3sYgMWfunKpsA4M%2B0%2BJBj4c8BIgiQUJFRHAHdm0UXlqzcPHrBC6aPy70%2Bagi6COJH%2BOc776BCEMqN2KjKYBhdt7LyoQWebb&X-Amz-Signature=bae9d6107b30ee581e7cc323f182c8cecc2c2dfdcd4050e5a1aa91c34d254a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
