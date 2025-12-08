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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3YSDIK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoP1tSNeJ2nxf27qDTUeKsrEzjletRQo5B4B7Mid2WFAiEArxVreQDfd%2B1Xl81PbKyZtxiIsol%2FB2ByZBojCPqMixUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6iXK%2BEDKnb8UyleircA9PAryvdcVB8vHhOe2rUh1Vtv2DzmgPU1wLxTmN6a74gyIXa2ZgpkAQbk2w6LrUfjMHX24W0DKrb%2BTf2L3tvZF8S315yqh94NT9Vhlnrra59dwNRnmIOf6FWR%2F7ZHhzUzN5CjzIFj%2FWXAvoiWBrs9bXAeNCQtpitzd3KKmyEgNik1PNjB0AfBw1JbaqpZ8lgYgZnrU0t8sonw7NT1gdhlrPGnXIdgUBdvRZxmj0D%2F21bjO%2FrtAncAAsghrR%2FebO2RUygkibk5LBNVLrO3w2TnMVKTDkeJjC8mRhUBmKC52NzAtnAqG1HR3goxoShvhfRk9%2FZUq%2BLQEeE8bGTq53M9%2FfkSB6bD2mvDDAKFTFzzz6jw2RTTu%2Bj7Q%2FO3AM5RqarSl5exaTptlIFR%2BGdXGPJGmT0BLhFWXX4m9t8yXTUG7sWR1HETZyxwBclVxKCuet4OefiHT29IKY%2Frs7iZyEGbtDm3bKC7dTcaD7oGU438VolfvEQ6pAI8oVj16SCYuZ%2BOHbpEGiP%2FhxMlIPA3E2aOva2CzcPsjpdw2r1khfGoRbdBb5WKHwPgxAQyZBTgFRKrG0lJqTju1WYuvQXv%2FtoN5%2Bz7sAWnUEk3Qq8lpr1RAfvA0i6DPsrQVlHCa%2F%2BMLWz3MkGOqUBgJ0%2FXxShXoHdvt%2B2iLVLRSlIMTGAMfqIlwqVcId%2F8n4kG06vEo9yCXSyj4%2FYapaCf%2BVX1Xz5dd3V%2FXmXDtsKTwNBJ7tOrp%2FT%2F8ck%2FMRuIOremVBQb%2BdM9jSPLMXMJegnz7tXQT4s%2Fti4GveQySx2g7IANAImC67rbUGpTeiqQBmipHLXh3Knd7nsQFo0R2fkwWMlTI3mXl9pl3MhfYApJFuTgz0H&X-Amz-Signature=97600a29b30b6cfd97d3233d6cdde6bbc63df50b63ad5ca973f3ba864cda8a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3YSDIK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoP1tSNeJ2nxf27qDTUeKsrEzjletRQo5B4B7Mid2WFAiEArxVreQDfd%2B1Xl81PbKyZtxiIsol%2FB2ByZBojCPqMixUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6iXK%2BEDKnb8UyleircA9PAryvdcVB8vHhOe2rUh1Vtv2DzmgPU1wLxTmN6a74gyIXa2ZgpkAQbk2w6LrUfjMHX24W0DKrb%2BTf2L3tvZF8S315yqh94NT9Vhlnrra59dwNRnmIOf6FWR%2F7ZHhzUzN5CjzIFj%2FWXAvoiWBrs9bXAeNCQtpitzd3KKmyEgNik1PNjB0AfBw1JbaqpZ8lgYgZnrU0t8sonw7NT1gdhlrPGnXIdgUBdvRZxmj0D%2F21bjO%2FrtAncAAsghrR%2FebO2RUygkibk5LBNVLrO3w2TnMVKTDkeJjC8mRhUBmKC52NzAtnAqG1HR3goxoShvhfRk9%2FZUq%2BLQEeE8bGTq53M9%2FfkSB6bD2mvDDAKFTFzzz6jw2RTTu%2Bj7Q%2FO3AM5RqarSl5exaTptlIFR%2BGdXGPJGmT0BLhFWXX4m9t8yXTUG7sWR1HETZyxwBclVxKCuet4OefiHT29IKY%2Frs7iZyEGbtDm3bKC7dTcaD7oGU438VolfvEQ6pAI8oVj16SCYuZ%2BOHbpEGiP%2FhxMlIPA3E2aOva2CzcPsjpdw2r1khfGoRbdBb5WKHwPgxAQyZBTgFRKrG0lJqTju1WYuvQXv%2FtoN5%2Bz7sAWnUEk3Qq8lpr1RAfvA0i6DPsrQVlHCa%2F%2BMLWz3MkGOqUBgJ0%2FXxShXoHdvt%2B2iLVLRSlIMTGAMfqIlwqVcId%2F8n4kG06vEo9yCXSyj4%2FYapaCf%2BVX1Xz5dd3V%2FXmXDtsKTwNBJ7tOrp%2FT%2F8ck%2FMRuIOremVBQb%2BdM9jSPLMXMJegnz7tXQT4s%2Fti4GveQySx2g7IANAImC67rbUGpTeiqQBmipHLXh3Knd7nsQFo0R2fkwWMlTI3mXl9pl3MhfYApJFuTgz0H&X-Amz-Signature=412174ba067193547d60151f382915e3aa58bf705e4032a26d1d5fbfe808bbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
