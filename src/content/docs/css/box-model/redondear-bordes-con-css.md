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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNE2PD5R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOpp3nxBvSWq7ih%2FJBG%2BLCPf4pCCBulwZ84qewh%2Fo2VAIhANS7qiEGVhf9iGiWHX2c3daxobTYtZPIdt6Ji2lhhwY6Kv8DCHMQABoMNjM3NDIzMTgzODA1IgySU9uZ8OMI0wtH%2BWoq3AOBHdCGOfNmfvVJJ%2F02rWsFHBXuYsX91OhVgdnJ2ADJUwBm8tYzwnvHAx3%2BSF%2FJcSlzgidhPqygHtrdhRxDtU4ZKYTdF6zmiaK2%2BJ%2FNdiN%2BJxUib9D9%2B3ZQ0UCR5TYPUl7dDlTq%2Bbe7BfOi3ILx4sIXHzWOjRSUeYTmv96WoHHjmf8siYJrslv2lyrywJfUasFkpjPqBx7P3cEihwiiebHW8ZqzU%2Br%2BKVmXRfd3IUGyWRffex6iKq1FlG6mmLEcGQPgrqllvJUQ4jg%2Fw6MXAhOQJ9Q6FCiAjt3wmMejrjQezndvpXJV2BqP3FUvGjq8BE1Ad4I4qJ5Vbj%2Btipg%2FVr16vHpVuFYV%2FMV604xpzWbOXHE3KKfja28FX8evN8wjbeJAlUl%2B1YeCnC%2F5KvYxtzwalPgiOcozouh9TOhrIDoK4cpQpOMbrd%2BcNGE5yRa%2FlgcJGjEysbBjwdEyc666A5iJdMCkepApkEhXI2VKpIb5Ns0o0h33vBLPnlQPpPgfn3EscqH1dyOes03Zl25wHl8AZV3D6%2FROklKOxotLlhz8e1%2Bj%2F7FeOWoPKiXvUEhMvvhTaL99vYJuq1yoRj9u%2FhsiI9Z626SUCTrr7BszuOq2IJ98CeL4mwsZ86lKljCAlojKBjqkAVIOkAW0o2CzXLOegyplQbV1JhuBaUj3amRasu7kKASNlzvS1lvbRtl7jFUTklpvVOiYd%2F6zL0LTcPUhfMPIwhYJuBdmGlFY5ugggANOLXpZ0Q9v9duEKOgDlsItqsBg2o2ojPw41ZJ95MIFCqY8tJy2y33ELEGuhNmz5q41%2B74xhrKuyoEbwy5k230XvQT1%2FN3o%2BAq95E%2BRpuE5HGOPFjLqPANT&X-Amz-Signature=46f38992fc2be64ebfc6def88b93eb9bb7a43da0806194855b8e36c94ea490e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNE2PD5R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOpp3nxBvSWq7ih%2FJBG%2BLCPf4pCCBulwZ84qewh%2Fo2VAIhANS7qiEGVhf9iGiWHX2c3daxobTYtZPIdt6Ji2lhhwY6Kv8DCHMQABoMNjM3NDIzMTgzODA1IgySU9uZ8OMI0wtH%2BWoq3AOBHdCGOfNmfvVJJ%2F02rWsFHBXuYsX91OhVgdnJ2ADJUwBm8tYzwnvHAx3%2BSF%2FJcSlzgidhPqygHtrdhRxDtU4ZKYTdF6zmiaK2%2BJ%2FNdiN%2BJxUib9D9%2B3ZQ0UCR5TYPUl7dDlTq%2Bbe7BfOi3ILx4sIXHzWOjRSUeYTmv96WoHHjmf8siYJrslv2lyrywJfUasFkpjPqBx7P3cEihwiiebHW8ZqzU%2Br%2BKVmXRfd3IUGyWRffex6iKq1FlG6mmLEcGQPgrqllvJUQ4jg%2Fw6MXAhOQJ9Q6FCiAjt3wmMejrjQezndvpXJV2BqP3FUvGjq8BE1Ad4I4qJ5Vbj%2Btipg%2FVr16vHpVuFYV%2FMV604xpzWbOXHE3KKfja28FX8evN8wjbeJAlUl%2B1YeCnC%2F5KvYxtzwalPgiOcozouh9TOhrIDoK4cpQpOMbrd%2BcNGE5yRa%2FlgcJGjEysbBjwdEyc666A5iJdMCkepApkEhXI2VKpIb5Ns0o0h33vBLPnlQPpPgfn3EscqH1dyOes03Zl25wHl8AZV3D6%2FROklKOxotLlhz8e1%2Bj%2F7FeOWoPKiXvUEhMvvhTaL99vYJuq1yoRj9u%2FhsiI9Z626SUCTrr7BszuOq2IJ98CeL4mwsZ86lKljCAlojKBjqkAVIOkAW0o2CzXLOegyplQbV1JhuBaUj3amRasu7kKASNlzvS1lvbRtl7jFUTklpvVOiYd%2F6zL0LTcPUhfMPIwhYJuBdmGlFY5ugggANOLXpZ0Q9v9duEKOgDlsItqsBg2o2ojPw41ZJ95MIFCqY8tJy2y33ELEGuhNmz5q41%2B74xhrKuyoEbwy5k230XvQT1%2FN3o%2BAq95E%2BRpuE5HGOPFjLqPANT&X-Amz-Signature=6818af6ff415a8030465d476cf13a085981b5a56e66a68eff1d8c7aca837f301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
