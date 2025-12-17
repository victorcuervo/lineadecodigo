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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKPHPVEV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7YFi0b4nEp0pXQdIWmHWJuTRF3Ec2gAfQZ6oYaKBT9AiEAnYGfd%2FOzjFnOassBvybgvPEn4fgLU8XlTQRJS1q3PDUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBffX6Gg3oYEvk9fpircAyEjn7cOkm6QAVAPYo8KLUuXCznOMqK%2Fp9ZdNb9NQKEd6oBMjxcdxa%2BJPybz2ENEFHGH40QGYZGcA1FFNKuQol97M900RAU2p%2BHDUYs6UKzLjU2NroIyxYPTpN%2Fw5CCftoSWZqkbn8%2Br7t6NNAi9jvX7KZ024jfPPLm7oqqLDdpNoRcewQfYuI7OZkrZ0vWInUqE5jxq47uM9b1hbqWPPRewWZBO%2FIKSbWt22O7zqTFAc7Zxm5BNhfGawqhLy3UUA0sT2Td8NqeQFvu6eTFLMi8Im1xrVogG%2B%2B0kgK16dLD%2F4yoKiA4FeZHT7fLO25KoxPLp%2B%2F2Q0m4QjB8zSe7MBIBFQAtL%2BECpiR1pTG2Au226CyeVfcj34%2FtqGX9p5TNDXULhGt0szmdGQqpRjOm91SpvbowHFM7EGXkkSGGVVcbMXyFrGN4E4jcNAiVcfkoEa5faCoY9Wy6fT%2FXEPnjcgdY3w1EDTKvMr7RrRdsVVsLvsKifR1hipfmtYZq7Vin5FHREQUJz%2BumO%2FhZpd1J8gGCdkZh%2FNxLilQL2MMr%2F16UQtxklZaF8VViZ99rdtOwqwVPraUK7FkAV4Paw6zye6KcM9CFiuOE6BFoueGC2Y0KIM1nNYqpJDwLYQSJ5MLaBi8oGOqUBV3xa0Q162UfmY8URFdJMCk8TX1ID5rGsnsdRyMZPYM9fZHi%2B9P2%2FNxMk%2BAOMuQipD%2BHZBjMG35W90g6L0tPH18AfLA2ZxWmgxUwYLAMQ02kLVF78ybVju8cvarf2Vdex1ieAm8wQqprH%2BQ4pn6D%2BUa9nPqDP6Bjh6pHYZV%2FXj1YWDrqxYW4VrHbD9jnj4wYHQL%2BBJlbQj7PoW490aa94VUlWq9am&X-Amz-Signature=ec4036b5ed8718ee387411e62290b4e853855df4eadc9924d7a22e29356aab86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKPHPVEV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7YFi0b4nEp0pXQdIWmHWJuTRF3Ec2gAfQZ6oYaKBT9AiEAnYGfd%2FOzjFnOassBvybgvPEn4fgLU8XlTQRJS1q3PDUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBffX6Gg3oYEvk9fpircAyEjn7cOkm6QAVAPYo8KLUuXCznOMqK%2Fp9ZdNb9NQKEd6oBMjxcdxa%2BJPybz2ENEFHGH40QGYZGcA1FFNKuQol97M900RAU2p%2BHDUYs6UKzLjU2NroIyxYPTpN%2Fw5CCftoSWZqkbn8%2Br7t6NNAi9jvX7KZ024jfPPLm7oqqLDdpNoRcewQfYuI7OZkrZ0vWInUqE5jxq47uM9b1hbqWPPRewWZBO%2FIKSbWt22O7zqTFAc7Zxm5BNhfGawqhLy3UUA0sT2Td8NqeQFvu6eTFLMi8Im1xrVogG%2B%2B0kgK16dLD%2F4yoKiA4FeZHT7fLO25KoxPLp%2B%2F2Q0m4QjB8zSe7MBIBFQAtL%2BECpiR1pTG2Au226CyeVfcj34%2FtqGX9p5TNDXULhGt0szmdGQqpRjOm91SpvbowHFM7EGXkkSGGVVcbMXyFrGN4E4jcNAiVcfkoEa5faCoY9Wy6fT%2FXEPnjcgdY3w1EDTKvMr7RrRdsVVsLvsKifR1hipfmtYZq7Vin5FHREQUJz%2BumO%2FhZpd1J8gGCdkZh%2FNxLilQL2MMr%2F16UQtxklZaF8VViZ99rdtOwqwVPraUK7FkAV4Paw6zye6KcM9CFiuOE6BFoueGC2Y0KIM1nNYqpJDwLYQSJ5MLaBi8oGOqUBV3xa0Q162UfmY8URFdJMCk8TX1ID5rGsnsdRyMZPYM9fZHi%2B9P2%2FNxMk%2BAOMuQipD%2BHZBjMG35W90g6L0tPH18AfLA2ZxWmgxUwYLAMQ02kLVF78ybVju8cvarf2Vdex1ieAm8wQqprH%2BQ4pn6D%2BUa9nPqDP6Bjh6pHYZV%2FXj1YWDrqxYW4VrHbD9jnj4wYHQL%2BBJlbQj7PoW490aa94VUlWq9am&X-Amz-Signature=d3866923b06f003092a5f105eef7d815a618ea29797e830e005c33037326e250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
