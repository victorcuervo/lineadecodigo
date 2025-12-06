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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7QHGPF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRKE3qVqJfz63o2FW8eskPsfVZhNSt%2BnxD52faIuHKDgIhAKDgscX3uMjmuOrXLq9fU6XAkFC9wFIhtUvLri5VL2dCKv8DCHEQABoMNjM3NDIzMTgzODA1IgwiWBbH%2B%2BixAiHCA%2BYq3AMcvaEmovtYWodY5VTFdm2%2FPZ%2FIhUh8dtf4VtfkwgCE8tdMSDTqGAb0pgv7RgEB6anLwQhsV2WjANCUrVByQezXw%2BfwJneuPdbJav62eR1RdtuuZ%2BFVv4L6G5j01isGKemYZb%2BmSzhi4E7pkQ1bTt%2FOXAVQznd7LU3e1GVVLGHhRLC1sh8ODsi3ehTjCMGCwT1WkI5qW7u2PHuTL9efdoCRqDSEcJyVGnrjqixd2z%2FaaYQ1c8JSYAFtxV%2F7Hc2LPZjKTyV8%2FqvKM%2BDwHmGgpD%2F002xC0IA%2FcRKd8YnGSl%2BIr0H8Eq3bENR5CHJs1ohra2BAgF9x56fCLab3JzZ%2Bbd70De%2FBlQbuXcRAWhQKcvl0BaTee60CyVnoqdXeoJbr1z8%2BJTEk5G7rUyOOO8ig1oidtT9TGs3qLv0yM%2Fj1qRpLV91gf3qioBraXGW3JWzvwy4SMQLUdK6WxvT9VOLxV3CM%2BoR7fQZTbAi92Zt3QUaC6DF1nK4FHl%2BQsi7GxI4UrNlHK0hPD3r5Y4SMDZq5CMgmOmdoF07%2FcMEb4J5NdzeIWOu6XOGf%2BZ2%2Bwj2JYw9Sw8EIROQDDC1yWermg6MfCBkAS8k5nRAsknHIyN3csPXx7RBo2vgngIf%2BPGkS6jCpvM%2FJBjqkAScSnGgSNaLYKkjoNUkWDyZepEZ6J%2FzolkQ57XhpNqvEoDT%2FIKtIulny6mmX6wciEIqOGK6R8TJASMUqcMYq1cimkify2EVj0IvNMT6dVoVXqvPk9iptgLG6EhjjEHfByBNz8NsCFLn9n3Q9jSoC1d2hKuEOGC%2B5Rp9YZvAnGjVGeYOToKQaKDUlEzR4UmcVHHH8utGgznP9wRhdnxPc%2B0p5jnya&X-Amz-Signature=2430716f61fdb6141b4c9e8ae6e6afd62bda95ce4b3ba3fb54274b3d3439e0d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7QHGPF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRKE3qVqJfz63o2FW8eskPsfVZhNSt%2BnxD52faIuHKDgIhAKDgscX3uMjmuOrXLq9fU6XAkFC9wFIhtUvLri5VL2dCKv8DCHEQABoMNjM3NDIzMTgzODA1IgwiWBbH%2B%2BixAiHCA%2BYq3AMcvaEmovtYWodY5VTFdm2%2FPZ%2FIhUh8dtf4VtfkwgCE8tdMSDTqGAb0pgv7RgEB6anLwQhsV2WjANCUrVByQezXw%2BfwJneuPdbJav62eR1RdtuuZ%2BFVv4L6G5j01isGKemYZb%2BmSzhi4E7pkQ1bTt%2FOXAVQznd7LU3e1GVVLGHhRLC1sh8ODsi3ehTjCMGCwT1WkI5qW7u2PHuTL9efdoCRqDSEcJyVGnrjqixd2z%2FaaYQ1c8JSYAFtxV%2F7Hc2LPZjKTyV8%2FqvKM%2BDwHmGgpD%2F002xC0IA%2FcRKd8YnGSl%2BIr0H8Eq3bENR5CHJs1ohra2BAgF9x56fCLab3JzZ%2Bbd70De%2FBlQbuXcRAWhQKcvl0BaTee60CyVnoqdXeoJbr1z8%2BJTEk5G7rUyOOO8ig1oidtT9TGs3qLv0yM%2Fj1qRpLV91gf3qioBraXGW3JWzvwy4SMQLUdK6WxvT9VOLxV3CM%2BoR7fQZTbAi92Zt3QUaC6DF1nK4FHl%2BQsi7GxI4UrNlHK0hPD3r5Y4SMDZq5CMgmOmdoF07%2FcMEb4J5NdzeIWOu6XOGf%2BZ2%2Bwj2JYw9Sw8EIROQDDC1yWermg6MfCBkAS8k5nRAsknHIyN3csPXx7RBo2vgngIf%2BPGkS6jCpvM%2FJBjqkAScSnGgSNaLYKkjoNUkWDyZepEZ6J%2FzolkQ57XhpNqvEoDT%2FIKtIulny6mmX6wciEIqOGK6R8TJASMUqcMYq1cimkify2EVj0IvNMT6dVoVXqvPk9iptgLG6EhjjEHfByBNz8NsCFLn9n3Q9jSoC1d2hKuEOGC%2B5Rp9YZvAnGjVGeYOToKQaKDUlEzR4UmcVHHH8utGgznP9wRhdnxPc%2B0p5jnya&X-Amz-Signature=059970a856be2479a81d6a3423cfd2c6f1b26510ed5d41d569cc7cf1a5664258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
