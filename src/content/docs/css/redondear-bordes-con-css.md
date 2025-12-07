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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ3IUBE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyb7rpE1umlIc%2BBNuVlcZAjczAeO2qN3x3H2KbvutHwwIhAMtcB%2FACCDaVevpd6%2Bf8tE2RC%2BOE7EZfP2%2F1PTWmZrlWKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwKFFvbNZImEBAlioq3AMOISedaDL96avX2n7jKsUV3o%2FX9qG2Ou0dnq60%2BQgHZDP8PubSBZnEiqPoQ%2Brd8eNIZuyKQOx6J02azr0tiAwaXemuY5x0jkhYKh5h4hf%2Fa2HhV87eHX6a7XuXUUiq3LFtfyktX6T4DUVuh1CKddVWGasT9RqDExWPurct9PHMo6UWDcpEOFi0LBvMh0btHvuv7AJXM2z%2Bx1%2BTra8UuOlMh7U4zY20ZuzlfVdVu3bQhBqk2xdtzc4ymwBhhqRv9WmPEXFSQq9tE1FWnr7f%2B2ClRTlan%2BrTki2eAXlUeEv6sAtTku3IMdp%2BPBxC13nAMPv0xkyChrWcgrA6nMATb2ioPGcnLyCSywJFf7pDalO2pvgUmrP66iLDtCNj%2F0aEVF%2BqBkN4l1uWF8xohzD0h9XJz%2Bih0WHsnxiNq8tHubZQ4IeJnvUel%2Bq77P%2BjqWJcO9Tq6ONzGfDQua%2F%2BzLqzqkmfyboLrhUts2ocdFayU1ElaGJqNT8A7DxAbGq%2BI3zdy2alX4ILP9I1r7HUVvel7N5k8oZO04RkZ1j4lsT77AEpdQ%2Fvo2Ix0T8cJFExBN9hNQmN3z3TId%2BAAj8841SgCCI%2FTTstPLhA9N58oX5FZQmfDLTMX0gh6LM%2Be%2FvePzCRv9bJBjqkAYrzpq9kNuGOLmlacK0T2X5SOu3QKV5KVJSrl7sPmnGabZzqUZZ7E8DA%2FHBGYpdVnwPpBU6ycHNyCzr8QVryCcHuEK6na5sZ3oiUTSkPP0wnEmCamLVYkOiCz%2F0tSohpnwUsbWcqquk%2BLoDN2PTh6LOQ1EPI6NxBhOZBeWQKAOQ9klbUG0BVid8KrQzj7mJshdKcyV3XRYHQjqnWToWEcNP0amkz&X-Amz-Signature=98a591bb2b830747e828196315d73b35c3c8b701596bd270f0ac60d0870054a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ3IUBE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyb7rpE1umlIc%2BBNuVlcZAjczAeO2qN3x3H2KbvutHwwIhAMtcB%2FACCDaVevpd6%2Bf8tE2RC%2BOE7EZfP2%2F1PTWmZrlWKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwKFFvbNZImEBAlioq3AMOISedaDL96avX2n7jKsUV3o%2FX9qG2Ou0dnq60%2BQgHZDP8PubSBZnEiqPoQ%2Brd8eNIZuyKQOx6J02azr0tiAwaXemuY5x0jkhYKh5h4hf%2Fa2HhV87eHX6a7XuXUUiq3LFtfyktX6T4DUVuh1CKddVWGasT9RqDExWPurct9PHMo6UWDcpEOFi0LBvMh0btHvuv7AJXM2z%2Bx1%2BTra8UuOlMh7U4zY20ZuzlfVdVu3bQhBqk2xdtzc4ymwBhhqRv9WmPEXFSQq9tE1FWnr7f%2B2ClRTlan%2BrTki2eAXlUeEv6sAtTku3IMdp%2BPBxC13nAMPv0xkyChrWcgrA6nMATb2ioPGcnLyCSywJFf7pDalO2pvgUmrP66iLDtCNj%2F0aEVF%2BqBkN4l1uWF8xohzD0h9XJz%2Bih0WHsnxiNq8tHubZQ4IeJnvUel%2Bq77P%2BjqWJcO9Tq6ONzGfDQua%2F%2BzLqzqkmfyboLrhUts2ocdFayU1ElaGJqNT8A7DxAbGq%2BI3zdy2alX4ILP9I1r7HUVvel7N5k8oZO04RkZ1j4lsT77AEpdQ%2Fvo2Ix0T8cJFExBN9hNQmN3z3TId%2BAAj8841SgCCI%2FTTstPLhA9N58oX5FZQmfDLTMX0gh6LM%2Be%2FvePzCRv9bJBjqkAYrzpq9kNuGOLmlacK0T2X5SOu3QKV5KVJSrl7sPmnGabZzqUZZ7E8DA%2FHBGYpdVnwPpBU6ycHNyCzr8QVryCcHuEK6na5sZ3oiUTSkPP0wnEmCamLVYkOiCz%2F0tSohpnwUsbWcqquk%2BLoDN2PTh6LOQ1EPI6NxBhOZBeWQKAOQ9klbUG0BVid8KrQzj7mJshdKcyV3XRYHQjqnWToWEcNP0amkz&X-Amz-Signature=051be3feebb36d46ef2b39418e2e81cb6d62efa6743294a08a746f538e6317b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
