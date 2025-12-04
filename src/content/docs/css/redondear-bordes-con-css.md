---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYRK3TB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDc0V1vH%2FAz11ih%2F9aDTZntmD%2Blu3uDJF%2FbDfQaIzygrQIhAOaUk0DqYzp6LvGpPsr%2BtWnTR1M5P5Hy8TkZVbD%2FOUU6Kv8DCEQQABoMNjM3NDIzMTgzODA1IgwbRbkilZ0esktl8SQq3AOs9K1ZloC%2FF9LuVSdSrjg6lls1QnVt4qjJW1tQXXjqFxKqiBVlegVyJIZ9Dgkf%2FVc6pZ7oupoIWWkCyJ3A%2BviJrHqXC7Z7q7k8a9%2BF23bcm1SH6UtViczszMtn%2FJlPIz8%2Fj9wcRg3JveFcqdUXOQvEbeYt%2FOr5ut7WcRzgzRpy7I3saWL1NqNPhhU1MhCxwDN2KAiRlq1zJ55CZL8Dr7KOusCqE8bKHiGlGdcliSo0ahaxh%2FdJ3QSKnJHoIVRkgmveNQVMOKKyqFVSPXQpuHyayOeoeNHRu20HH4PeTXI70mftoyUGuACCovqUJk1RKxxkmiUB%2FtsFbu%2FfazyP%2FAO4wxd9zHn6fuebudN6LQ74XoIoLPKiVbiD4ChXUk9eUBmjvUgXCZBvuTHJOwhlObRqTtb69tSgpkPCcY%2Fn5iledoST0O%2FDIn0BTKyG8WhTdACrm5YL3Sp3YhmjLizVyoTyjVRY7wNHEQYpgMJyVRUeqhGxwhRHWnPiNC%2BWakgGmVFwtm2ogxotZjgZcpbchjR%2BWIcRe6BQrp9aJI3h16Kskmu55eUcmPpktvGu3U9ZkcAYvyEcY2pjL9JeaFjkxvSX0WhSIdi%2F07txBp1nsOPbDqZ9G98%2F0495wXAj3TDkyMXJBjqkAT5KHswvlbM2vyGF5Bce2qyGDPEBTDjpF7Ob%2Bi8IrLPUvhd2IhKYwVuCAFe24DtBLHVqBnoSLqR1b%2Fyuh7saEFyqdUJ9hr7CGdj0%2Fyrdu%2F2%2FliHaiG1be70B7tFJ3jrJSsKO%2FmGzhTiHMMcO1%2FNkq9Bofb0YNIMDa9lhlvjUSw%2F9S4Ip55u7iwSanSL8hy3b7wCsSFrY0pvCZiIcuZASXMp1gU2%2B&X-Amz-Signature=846e4778b7e5aac04a1e09a53e5953429c1291362cc092dade3b8c689f2324cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQYRK3TB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDc0V1vH%2FAz11ih%2F9aDTZntmD%2Blu3uDJF%2FbDfQaIzygrQIhAOaUk0DqYzp6LvGpPsr%2BtWnTR1M5P5Hy8TkZVbD%2FOUU6Kv8DCEQQABoMNjM3NDIzMTgzODA1IgwbRbkilZ0esktl8SQq3AOs9K1ZloC%2FF9LuVSdSrjg6lls1QnVt4qjJW1tQXXjqFxKqiBVlegVyJIZ9Dgkf%2FVc6pZ7oupoIWWkCyJ3A%2BviJrHqXC7Z7q7k8a9%2BF23bcm1SH6UtViczszMtn%2FJlPIz8%2Fj9wcRg3JveFcqdUXOQvEbeYt%2FOr5ut7WcRzgzRpy7I3saWL1NqNPhhU1MhCxwDN2KAiRlq1zJ55CZL8Dr7KOusCqE8bKHiGlGdcliSo0ahaxh%2FdJ3QSKnJHoIVRkgmveNQVMOKKyqFVSPXQpuHyayOeoeNHRu20HH4PeTXI70mftoyUGuACCovqUJk1RKxxkmiUB%2FtsFbu%2FfazyP%2FAO4wxd9zHn6fuebudN6LQ74XoIoLPKiVbiD4ChXUk9eUBmjvUgXCZBvuTHJOwhlObRqTtb69tSgpkPCcY%2Fn5iledoST0O%2FDIn0BTKyG8WhTdACrm5YL3Sp3YhmjLizVyoTyjVRY7wNHEQYpgMJyVRUeqhGxwhRHWnPiNC%2BWakgGmVFwtm2ogxotZjgZcpbchjR%2BWIcRe6BQrp9aJI3h16Kskmu55eUcmPpktvGu3U9ZkcAYvyEcY2pjL9JeaFjkxvSX0WhSIdi%2F07txBp1nsOPbDqZ9G98%2F0495wXAj3TDkyMXJBjqkAT5KHswvlbM2vyGF5Bce2qyGDPEBTDjpF7Ob%2Bi8IrLPUvhd2IhKYwVuCAFe24DtBLHVqBnoSLqR1b%2Fyuh7saEFyqdUJ9hr7CGdj0%2Fyrdu%2F2%2FliHaiG1be70B7tFJ3jrJSsKO%2FmGzhTiHMMcO1%2FNkq9Bofb0YNIMDa9lhlvjUSw%2F9S4Ip55u7iwSanSL8hy3b7wCsSFrY0pvCZiIcuZASXMp1gU2%2B&X-Amz-Signature=687941f5b6c8c31aff53cc03b354aeae97dc6cd2c317d118958b75888afaeab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
