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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEZJCWW3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD65U37LO4qCefpybMFBE6e%2FDktt5eKHoEWik5ci1hDawIhAIQPBs1x1iyay1wyt4KcaonWou%2FprNwPqGVGdeVwueQ%2BKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJXCcOLmZYiEjvzkUq3APwt92wvYgC8UfZWy2QpMznkfmbPJS7dtCfD4msPeS9tG%2B5ge8VwVMcUswUF7nLNr9IHDJx0p00rY0Nh47r7oUFdsDmYMTg%2BfjR7aOY8WbwTrjfy%2BKcrQ42jnatKOVdpyxT2gp%2FeLaCuyBcsNpLCjrWFVhO8%2BBLqP1%2BVJ2yChinbOoyO3psj8UnOE0%2FMvki%2F5Dg%2BgJ%2FU2E8%2Fn0LbC3PWdtod%2FntfyVJ64jxsOmIBJ9uoL%2B9HIdbiU%2BGrFn6jZDu%2BW%2BcOTnrEGd5%2F0auiX4DujxFswBIVl6%2FV2D9ZZlzplKpe%2Fuw7%2FKnJr24mkJQn6gX2OdhxrpE%2BpTI35N861C81T5GxwDVtBgppm3qDv5aK0wgQhO0OngWkjHtWvg%2FQt%2BKuolNWUllKQH1HwX1e8T4fVMHcpjSWsiUDRUkl4gIbaOy6TuzxTHkse5Ny%2B6dg2wbCXWcV2bTM2gqpbRaBYRcs43oCGHjUDcRgJ%2FTh%2BI%2FCYxphldZu6Drs%2BVEio4Ba%2F2wTksxUu9wuusV64emRTrnYd8BQCCtIRAIRN6BuvGWAx4x%2BD5IJwgqei1BiEKWqVSWjyzBjEDNbu7I1ARvAlRjoT7BoDs6%2FPp4cNYfvaW%2BuXxbeo%2BUm48YouLZkJZPrzCp6d3JBjqkAd6u6xvp6aMCbtK1H0uZ5qeAxTDCi5mNOFyftue6Kj0vbqGULqdfn6jCkFryQKBfurLJE9JLPJPP4vEDn126EOIMk8QCu0IN5j83KhmLYOTIEOO8KjAggsk%2Fg0gnOGWusWdj6nR%2FnVhdau1mlnmK3BQIR2IqllQODQmAy7mZJFcolQilaHqYgrjb5gtKutt2SnMzQbs6EpJpbGsAAB0ZmIjcFRBt&X-Amz-Signature=300ee5fc4833feebb99bdfbc12f4bf2e8caf15ee9ad0e415e9ffc02bd2544a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEZJCWW3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD65U37LO4qCefpybMFBE6e%2FDktt5eKHoEWik5ci1hDawIhAIQPBs1x1iyay1wyt4KcaonWou%2FprNwPqGVGdeVwueQ%2BKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJXCcOLmZYiEjvzkUq3APwt92wvYgC8UfZWy2QpMznkfmbPJS7dtCfD4msPeS9tG%2B5ge8VwVMcUswUF7nLNr9IHDJx0p00rY0Nh47r7oUFdsDmYMTg%2BfjR7aOY8WbwTrjfy%2BKcrQ42jnatKOVdpyxT2gp%2FeLaCuyBcsNpLCjrWFVhO8%2BBLqP1%2BVJ2yChinbOoyO3psj8UnOE0%2FMvki%2F5Dg%2BgJ%2FU2E8%2Fn0LbC3PWdtod%2FntfyVJ64jxsOmIBJ9uoL%2B9HIdbiU%2BGrFn6jZDu%2BW%2BcOTnrEGd5%2F0auiX4DujxFswBIVl6%2FV2D9ZZlzplKpe%2Fuw7%2FKnJr24mkJQn6gX2OdhxrpE%2BpTI35N861C81T5GxwDVtBgppm3qDv5aK0wgQhO0OngWkjHtWvg%2FQt%2BKuolNWUllKQH1HwX1e8T4fVMHcpjSWsiUDRUkl4gIbaOy6TuzxTHkse5Ny%2B6dg2wbCXWcV2bTM2gqpbRaBYRcs43oCGHjUDcRgJ%2FTh%2BI%2FCYxphldZu6Drs%2BVEio4Ba%2F2wTksxUu9wuusV64emRTrnYd8BQCCtIRAIRN6BuvGWAx4x%2BD5IJwgqei1BiEKWqVSWjyzBjEDNbu7I1ARvAlRjoT7BoDs6%2FPp4cNYfvaW%2BuXxbeo%2BUm48YouLZkJZPrzCp6d3JBjqkAd6u6xvp6aMCbtK1H0uZ5qeAxTDCi5mNOFyftue6Kj0vbqGULqdfn6jCkFryQKBfurLJE9JLPJPP4vEDn126EOIMk8QCu0IN5j83KhmLYOTIEOO8KjAggsk%2Fg0gnOGWusWdj6nR%2FnVhdau1mlnmK3BQIR2IqllQODQmAy7mZJFcolQilaHqYgrjb5gtKutt2SnMzQbs6EpJpbGsAAB0ZmIjcFRBt&X-Amz-Signature=219a704c86fe38832fc5f1cc6499b30a7a359ee26a44099f59c900bba0b54315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
