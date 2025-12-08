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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNOJXY5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy%2F5G5ygU1ESHlmlhpCCy6xGUvSowStYzKCi25ziTWkAiEA2LKAqCmVMxRsZ3LXY7T3MWWVpM2HsOEcJYg0tidjcKEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5sxHwLDb%2B1VjK8hSrcA0RfT46OuSynkoSyxtldiaFD7JGJKDNq7I1NvJIMtOpMAeXszrqSPqLVodz%2Bs7e8K9Yc1hzlErLOraQnHQfkWJ1DgI1nn%2FVeH2raleVwOy3Vd%2B8DIBwgsq1kCP%2BpQnD7GM8FgA5cp0DE1eYhfNyYJnhGDbVNI3ba6OeEIJa8GzL7e1iSFnTtxo4ZJ%2BbteTCr%2FdTB1uQUMiKaDlJu56rIWqUqdU28U3ff30SnWD2rtjudGvVY%2BU0GCuDhqrJ6F6nQYrBmChuhytqetJ3rB8ywkXXz5I0ZcmT77BZqr6vNttUTtRIvBjhV2385YmwliNOF%2BltlN9OeoAwSuxEnKW0Pox5dRFy3jM65Dcjg7p%2B6xZtOMihigc50Mp9IFLw%2Bz2f4ZlMVDLnpzC6CZFN1elyLE%2FZ64hkNhAcwUyNYG38hdiW1QVnb%2BkCdwo61UYAFdnRj6ujdbXkAdD3SP1latPOVtUCqwRBKdZ1tHSMac8SqCML5%2Bl0VpGq3dl0EqVZf0YOafyFDcERqu9DV9tjyUnh3iffffFiOJd0Lpg%2BZ9q3R45WoGlwjzlJvwB8zCtnxE9iuNvNUiHKZtOvim%2FEOPy838NCOr45GaFCqNlWzR2pFZk6KBPyL2mf1ixSf8duQMJL02skGOqUBZfhNM9oVznoUVMoypGPG4nxlnT9wi0qDURwBFU%2B8ocHI8OT765hGHrSE%2FWM3CtSO74FeW7EHgFpKxT91AabHZcNOwjBnVN%2FLjTc966gz4bob%2FUIQRpBAQKdrn6JuofLkB9ygzdV48KT4%2BuEcAj3yBrTkyBOx5l2Pp83Vxj3mYbuZZzyMBOQ5k0d4ZFIrRgam6jdC0%2BwLghPaSRfO7pT58s9pBHCr&X-Amz-Signature=35f7237e889381cd1ebccade100d61331e478435848d2046232197c83028164c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNOJXY5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy%2F5G5ygU1ESHlmlhpCCy6xGUvSowStYzKCi25ziTWkAiEA2LKAqCmVMxRsZ3LXY7T3MWWVpM2HsOEcJYg0tidjcKEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5sxHwLDb%2B1VjK8hSrcA0RfT46OuSynkoSyxtldiaFD7JGJKDNq7I1NvJIMtOpMAeXszrqSPqLVodz%2Bs7e8K9Yc1hzlErLOraQnHQfkWJ1DgI1nn%2FVeH2raleVwOy3Vd%2B8DIBwgsq1kCP%2BpQnD7GM8FgA5cp0DE1eYhfNyYJnhGDbVNI3ba6OeEIJa8GzL7e1iSFnTtxo4ZJ%2BbteTCr%2FdTB1uQUMiKaDlJu56rIWqUqdU28U3ff30SnWD2rtjudGvVY%2BU0GCuDhqrJ6F6nQYrBmChuhytqetJ3rB8ywkXXz5I0ZcmT77BZqr6vNttUTtRIvBjhV2385YmwliNOF%2BltlN9OeoAwSuxEnKW0Pox5dRFy3jM65Dcjg7p%2B6xZtOMihigc50Mp9IFLw%2Bz2f4ZlMVDLnpzC6CZFN1elyLE%2FZ64hkNhAcwUyNYG38hdiW1QVnb%2BkCdwo61UYAFdnRj6ujdbXkAdD3SP1latPOVtUCqwRBKdZ1tHSMac8SqCML5%2Bl0VpGq3dl0EqVZf0YOafyFDcERqu9DV9tjyUnh3iffffFiOJd0Lpg%2BZ9q3R45WoGlwjzlJvwB8zCtnxE9iuNvNUiHKZtOvim%2FEOPy838NCOr45GaFCqNlWzR2pFZk6KBPyL2mf1ixSf8duQMJL02skGOqUBZfhNM9oVznoUVMoypGPG4nxlnT9wi0qDURwBFU%2B8ocHI8OT765hGHrSE%2FWM3CtSO74FeW7EHgFpKxT91AabHZcNOwjBnVN%2FLjTc966gz4bob%2FUIQRpBAQKdrn6JuofLkB9ygzdV48KT4%2BuEcAj3yBrTkyBOx5l2Pp83Vxj3mYbuZZzyMBOQ5k0d4ZFIrRgam6jdC0%2BwLghPaSRfO7pT58s9pBHCr&X-Amz-Signature=73ba4b65abcc3f0d4bb6e68e8b71fd3ecb77af7d836b7bb4cca2f3458ae74d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
