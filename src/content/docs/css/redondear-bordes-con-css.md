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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3M2JMXK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZY30v5%2FhK69Pjq%2Bf3ztqwHkBJ2FF1tir0uXV1kQhMIAiEAsk%2BYn0a7kO03zQW3cG7fZI1npoFxuqqMUvHRoxxx2Mkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMGMwWsffMTOvmk5WSrcAwk2kC40HJ%2BEs66EYF2kumKdtOmWFGwaWxHw1n6EfrLb0PTpRVNn82MAZJ%2FYozSRtPyRHlkUd4QPuPVHtnmmpt79aBrcFAtKHG0uHNFuhxB3HSWX%2BA2BLDjeAFvrrLora%2Fre05UxxA%2BGDPjHRNc%2BSS04MIfTTui6o9oTp2V0jOUV4L2AFl0IkBg%2BdetbhpJUZjuwjy0dqSItusckb7MdNDp8%2F234REJqp2w1RGTUe0BCsmQ1BvuO1xAnqP%2FtQb5yQT8ixik6v%2Fs0XAI1EZfm%2BxQ%2FmlpSztQRXo5mWPKSOLEe6wL6XMmE4qWZbiTOaz6bZ2GD481IvD%2ByXTxMWiKWvoMPUEadc6hOVgOvfMPHpCMr2siV0RCNr2B9b75vgqxCO%2FoMmcN8fF5qvP5vxNj0ki%2FsKs%2B1OLUH5MtuhjKVQbarx9pdHB1zwEZYMgCK15aapRBLgvXtJhwSKrsl%2BxmZjtzMWptdzW5jJBlsPKHWjWKVALsMXFikIsV9OpcDFPl8HoRMuTBBwxTkh7elbulSCJzk%2FtyZkr5%2FNXAD0%2BcEsBLW3GCJGL3fKbWFGDd3DvbFGXyt1nbbO7dYLghJZht3WVdrtVxl1W94EsEfJISXdVrO0IKfx9nCFF8Gv2PdMJHry8kGOqUBKVPa2A6nQ1lfxpdeDslb1z7Z43bJuQRzlYWzIJFWC0BWtLZSWobaS8rAbbved7aNVmt8Gz%2BWoszXMWVaYq%2B%2BvonS9%2FWMpCLRIfe3azl3PIemcvOCyNSvQE68KLimf3M637ee%2BchP%2Fgr59TQRGIeEMZXmhNh0l1FMaO5B%2FcDrL5RA6O%2BIxlax%2Fp4Eh%2FwPJpy5t4jv7Bir50K5MpT5nQnXnuB250kC&X-Amz-Signature=0653e9b89da11bb221ea3074024fd1d32ba8581f2e84bab5e3cab6e784d56e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3M2JMXK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZY30v5%2FhK69Pjq%2Bf3ztqwHkBJ2FF1tir0uXV1kQhMIAiEAsk%2BYn0a7kO03zQW3cG7fZI1npoFxuqqMUvHRoxxx2Mkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMGMwWsffMTOvmk5WSrcAwk2kC40HJ%2BEs66EYF2kumKdtOmWFGwaWxHw1n6EfrLb0PTpRVNn82MAZJ%2FYozSRtPyRHlkUd4QPuPVHtnmmpt79aBrcFAtKHG0uHNFuhxB3HSWX%2BA2BLDjeAFvrrLora%2Fre05UxxA%2BGDPjHRNc%2BSS04MIfTTui6o9oTp2V0jOUV4L2AFl0IkBg%2BdetbhpJUZjuwjy0dqSItusckb7MdNDp8%2F234REJqp2w1RGTUe0BCsmQ1BvuO1xAnqP%2FtQb5yQT8ixik6v%2Fs0XAI1EZfm%2BxQ%2FmlpSztQRXo5mWPKSOLEe6wL6XMmE4qWZbiTOaz6bZ2GD481IvD%2ByXTxMWiKWvoMPUEadc6hOVgOvfMPHpCMr2siV0RCNr2B9b75vgqxCO%2FoMmcN8fF5qvP5vxNj0ki%2FsKs%2B1OLUH5MtuhjKVQbarx9pdHB1zwEZYMgCK15aapRBLgvXtJhwSKrsl%2BxmZjtzMWptdzW5jJBlsPKHWjWKVALsMXFikIsV9OpcDFPl8HoRMuTBBwxTkh7elbulSCJzk%2FtyZkr5%2FNXAD0%2BcEsBLW3GCJGL3fKbWFGDd3DvbFGXyt1nbbO7dYLghJZht3WVdrtVxl1W94EsEfJISXdVrO0IKfx9nCFF8Gv2PdMJHry8kGOqUBKVPa2A6nQ1lfxpdeDslb1z7Z43bJuQRzlYWzIJFWC0BWtLZSWobaS8rAbbved7aNVmt8Gz%2BWoszXMWVaYq%2B%2BvonS9%2FWMpCLRIfe3azl3PIemcvOCyNSvQE68KLimf3M637ee%2BchP%2Fgr59TQRGIeEMZXmhNh0l1FMaO5B%2FcDrL5RA6O%2BIxlax%2Fp4Eh%2FwPJpy5t4jv7Bir50K5MpT5nQnXnuB250kC&X-Amz-Signature=2dd42a524229e73e268ea36f811e9ce44b6716a8692c379e0d93ea4dc0c50303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
