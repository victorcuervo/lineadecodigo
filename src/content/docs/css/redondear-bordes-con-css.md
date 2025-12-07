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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNYPO2Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmNPPSbhGkdLj8FLqgC9lQD8X0ocWG31rMadfuuYdapAiAN9Ewh29VJHhK%2FnTjDo7aFxqV%2BtjZ5paovP%2Bwlgs1O6SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmYfzoZYZSSPHl69rKtwD945xjFYvNvnv044TQpe25t4JJnlkU%2FpCjJVpNvn2FsXJJ%2B8Cz6BJx5hPDNqowKT8ilogPygp7iWnBqGHZe4l4%2BMTgIfXvFz2HV%2BWdf95P%2B1U1nIfzzSSQ6uj7Lsmr9zANbm5%2FbdBxojSu7w8FwsW%2BasomeSQ3us%2FMhAKmMOvfKqJFWch1NZUMAvciL8nMnr%2FH3d8usKseMVcYjvk6Z4ZebuqHDhuhPXqyL%2FAR90FNtTgOAvyFEZWPoSxhRguTPO6lKxzTES02TnDWZen3CIO6gtLMC2tILrswFEmH87Rt9TFWxqa3qdhhZo5gegK79uUxlZrP8ixSdF1NSerk4MyDxj1j%2FcPoLm6YkBCZ5dqTJ9V23C1mwWszwvGiB66K9CoMAE4hh0Q6ONLqxa8YjxnwQj5FFq2xIzcBGV8En7t8RLg%2FBLk3anK93T%2FYuie41MhEEGbkTrz1OxjvTv5VlvGoXoPEfvkVxm9ZsJHdxY5Dxu4qDHp3vEZa4Te38u7AGM9NEwdWACX00jYssB043%2FqmgNGdi9Yl57kbcFNl949889W6vGV84ZzsC6sRSCNM0K%2Bc2v%2BnwG00q6dArCGEHaCM4vTIrSfUGu6RqzEyN0%2F2ezgRalXVrB%2BXmk89t4wvJrVyQY6pgGoBiQ5mFD1mhWOJeRhB3Su46C3OamosgY7slePBVrceuXC9H9671C8GvSNLlA%2FRzrKMKnUQY40K4WxfresYlZ8dsNwImJAZBbcJ3YjTCEb%2FFIgT3fQVAXKuS2GHI8IfKzULYeje%2BomZPv3MvxmERx1TKhoOdPzYBbZZvA39ST5nkK%2B1h0NdU%2B4oJt4nmSrGHNDY52oVMXyI6MFAj6oEPJADkUsRxLj&X-Amz-Signature=4ebb9b81fd988024a9f600d632f162d4ed4fb493b65455362b3bcaa8c7b696ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNYPO2Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmNPPSbhGkdLj8FLqgC9lQD8X0ocWG31rMadfuuYdapAiAN9Ewh29VJHhK%2FnTjDo7aFxqV%2BtjZ5paovP%2Bwlgs1O6SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmYfzoZYZSSPHl69rKtwD945xjFYvNvnv044TQpe25t4JJnlkU%2FpCjJVpNvn2FsXJJ%2B8Cz6BJx5hPDNqowKT8ilogPygp7iWnBqGHZe4l4%2BMTgIfXvFz2HV%2BWdf95P%2B1U1nIfzzSSQ6uj7Lsmr9zANbm5%2FbdBxojSu7w8FwsW%2BasomeSQ3us%2FMhAKmMOvfKqJFWch1NZUMAvciL8nMnr%2FH3d8usKseMVcYjvk6Z4ZebuqHDhuhPXqyL%2FAR90FNtTgOAvyFEZWPoSxhRguTPO6lKxzTES02TnDWZen3CIO6gtLMC2tILrswFEmH87Rt9TFWxqa3qdhhZo5gegK79uUxlZrP8ixSdF1NSerk4MyDxj1j%2FcPoLm6YkBCZ5dqTJ9V23C1mwWszwvGiB66K9CoMAE4hh0Q6ONLqxa8YjxnwQj5FFq2xIzcBGV8En7t8RLg%2FBLk3anK93T%2FYuie41MhEEGbkTrz1OxjvTv5VlvGoXoPEfvkVxm9ZsJHdxY5Dxu4qDHp3vEZa4Te38u7AGM9NEwdWACX00jYssB043%2FqmgNGdi9Yl57kbcFNl949889W6vGV84ZzsC6sRSCNM0K%2Bc2v%2BnwG00q6dArCGEHaCM4vTIrSfUGu6RqzEyN0%2F2ezgRalXVrB%2BXmk89t4wvJrVyQY6pgGoBiQ5mFD1mhWOJeRhB3Su46C3OamosgY7slePBVrceuXC9H9671C8GvSNLlA%2FRzrKMKnUQY40K4WxfresYlZ8dsNwImJAZBbcJ3YjTCEb%2FFIgT3fQVAXKuS2GHI8IfKzULYeje%2BomZPv3MvxmERx1TKhoOdPzYBbZZvA39ST5nkK%2B1h0NdU%2B4oJt4nmSrGHNDY52oVMXyI6MFAj6oEPJADkUsRxLj&X-Amz-Signature=7879c1ea66d939da4446e985030de0e1a5ee48c656351fa6a3194258fdaad74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
