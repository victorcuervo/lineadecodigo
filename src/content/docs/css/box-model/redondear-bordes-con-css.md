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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62D5FYY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Qe3hIW0P%2FFMhWxK7fz06i22wDV5fME6JbZ4kwmxAgAIgWOfzMjeTd%2FGsWgk4l%2FPYUtlnf6fvfKvXVX%2FKhxPV9Fgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAHcqkQIdiS4IE7P6CrcAw4YmWloK1xpyWt1919F1L%2BYP0L%2B2JIn0zZfaHNbUcxMyVukBfCKCAHnurt4%2FylMlrOcyUI4%2BNRwtpJ1%2BzMDT81XbnpaUVAOKtk09jaTOndtaGQ3KbOulaeHWeLluyVtapA1lHxPJqpa%2BWCJs36CKAgOKzUi3FbUNEXHkA08ea66LyiseTdElyC2UEyNlL4PfrnDmJbjISBVuBhiYWJzxVx0DyJLDbcRmxheMMOOA0mOdPGOEODhPieYADE1HjRujygVPTiZd800vJ8taOJ5KbULaHVfgaItPKVxthU9IU0llXYieZL3PbkPiwH0mXJpMtgUKZrN0i5oQkHgD%2FQzgpDNpqG%2FNx6KKqRh%2FWiDvHP%2F0bd94xIjSFMTvpPnqViOQrOrOEVujf5vmyt6zWBz%2Bt94B7dAby3wpz%2FuV7IQ3L0Ea2jyCcPQmts1757MLeEVbb8w5buGzYUX8zP3YMSAaNXl1VDQb%2FaWvhMkH2lxrKI6B7UEdUvRoSTeWBmkGRMLuG8d387zOHCyC4T%2Fm0GnPxRmhSa2NTFo9UROTlilT%2FFtuaX5kxgs1CWfLq9EB5fMVE9OL%2BdRii1aiih2AqxQT876yBSpizv8QWWmf5TI56bFJKAhix7y6waE8QAYMIqDicoGOqUBdtAkqM0AcRwzigRcrEMSgl8zHzpE8AwwYBG4s4I22tm0fQURy%2BYQIM%2FBnfuxjbIrQ1ylrh2xnpWul%2Bv%2Fb24UCrL4ogqQbBdmxKL98gm%2BiYFe66LwDND3XjquHzuYbuy1n9WZPE9k16%2FLBP5EzJDtbNkeMzyYW76%2F3cLVinAI0wOmkFRC16Y1hq25DqNNnUEX4hvOKu67n2iRsxsu6KhXijjIphrz&X-Amz-Signature=fb29205294720a62203f5c049ac2f9ac548becf5b2cf93d0fc3d990484e4fc6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62D5FYY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Qe3hIW0P%2FFMhWxK7fz06i22wDV5fME6JbZ4kwmxAgAIgWOfzMjeTd%2FGsWgk4l%2FPYUtlnf6fvfKvXVX%2FKhxPV9Fgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAHcqkQIdiS4IE7P6CrcAw4YmWloK1xpyWt1919F1L%2BYP0L%2B2JIn0zZfaHNbUcxMyVukBfCKCAHnurt4%2FylMlrOcyUI4%2BNRwtpJ1%2BzMDT81XbnpaUVAOKtk09jaTOndtaGQ3KbOulaeHWeLluyVtapA1lHxPJqpa%2BWCJs36CKAgOKzUi3FbUNEXHkA08ea66LyiseTdElyC2UEyNlL4PfrnDmJbjISBVuBhiYWJzxVx0DyJLDbcRmxheMMOOA0mOdPGOEODhPieYADE1HjRujygVPTiZd800vJ8taOJ5KbULaHVfgaItPKVxthU9IU0llXYieZL3PbkPiwH0mXJpMtgUKZrN0i5oQkHgD%2FQzgpDNpqG%2FNx6KKqRh%2FWiDvHP%2F0bd94xIjSFMTvpPnqViOQrOrOEVujf5vmyt6zWBz%2Bt94B7dAby3wpz%2FuV7IQ3L0Ea2jyCcPQmts1757MLeEVbb8w5buGzYUX8zP3YMSAaNXl1VDQb%2FaWvhMkH2lxrKI6B7UEdUvRoSTeWBmkGRMLuG8d387zOHCyC4T%2Fm0GnPxRmhSa2NTFo9UROTlilT%2FFtuaX5kxgs1CWfLq9EB5fMVE9OL%2BdRii1aiih2AqxQT876yBSpizv8QWWmf5TI56bFJKAhix7y6waE8QAYMIqDicoGOqUBdtAkqM0AcRwzigRcrEMSgl8zHzpE8AwwYBG4s4I22tm0fQURy%2BYQIM%2FBnfuxjbIrQ1ylrh2xnpWul%2Bv%2Fb24UCrL4ogqQbBdmxKL98gm%2BiYFe66LwDND3XjquHzuYbuy1n9WZPE9k16%2FLBP5EzJDtbNkeMzyYW76%2F3cLVinAI0wOmkFRC16Y1hq25DqNNnUEX4hvOKu67n2iRsxsu6KhXijjIphrz&X-Amz-Signature=328da9cbc21f5d255891bcb86155cec6f9f77825d6b7900aaa9936a11bb5c226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
