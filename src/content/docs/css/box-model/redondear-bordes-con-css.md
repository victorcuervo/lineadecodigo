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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JAPC3XX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTnilakxIXJ%2B4jOqZQ2m%2B6uLxF5mnJRm8EhO7H2g0JXAiEA1lQHWOrKALaxPvwSzv7yfQFM7qRzB3ifOWKT17VBPHcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGNG3p%2Blz0hIlM3kNyrcA8brfQgmRT9m2gjrnNHQ%2B6%2FanHwbkJH1u%2BJIRQN3QIdL4rD%2FanlYMnT5ubpWGbyPsD6PbWo9OzpddWl4FTAGYGgQRf0eeeQ7wEflET53%2BpcLRyYTLZcSVjnnz6ZQ7cmXMcQ%2FfrHtm%2Fe%2FfweFHphqrg6S%2FJqEC%2BnwCscrjAj1gRs16rQ1ubo3Skh%2BXSomZ3oZa9yoAC3mY9%2FxTNuE1W%2BQwLeoTVDCv9hIVEPpiScEUYnpZ4%2BeCOxOYngPwf47mT%2BRdRSNYjpXa%2BuXinK%2F5kjCot34XUCtsaONtM2koBKByfszIv8hENLleDOq%2BjnGYBrfloyRrozUN5H%2BNcdZNBmLorF1t2algNTwoMrsA8tCH0OyLdHB6JpvjGkL8Z9mBmoU5nV5zw4O6U5vdsyetzf4Lq0dgs%2FqUOb%2F5%2FzDm6WfzIHe%2F1Qup%2FOOPdmo60iE4LBLmrDsAeBYP3AeG8wSjwTG63TOqdHo4gQmckbiGS4kUnn6IDrVEbs8%2BfL3nS%2BdulCELTrNQMFZoz3Wythum6syQmEN0ufcTawXzr9dia32ARSIkJTe0Mnx5LMNkHjeq%2BvcnUck37t9oQL07tfpoB5tobNBgdKpGs6skfWCle%2FQXQK1DPdu7M0WSHO6MfISMLOWiMoGOqUBgscmxaNOrewc0ygTRxHZPwtKhl1hpeAX6n57WR20hGB5T0YwguX3pNvk3M8YU%2BP%2FaIeqX9mZrmXQrw9gRxE4Xd0gF6n44QegyB1%2BtFH0Ex%2B%2BHTg6zHw82TFA0HDCp1FJN8BiZ0nnNtlvuyuhWos3ia3HvdDBuU3asy8CInT5qd3FIrV2e5putYgMdjEQPmsSQCDUWwhnZl5Nv6fJGXIq50vx6nkl&X-Amz-Signature=6be277ae7b8fb5eca9b56e47c38f1df9b001748a6a05399a949f5351c31e11df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JAPC3XX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTnilakxIXJ%2B4jOqZQ2m%2B6uLxF5mnJRm8EhO7H2g0JXAiEA1lQHWOrKALaxPvwSzv7yfQFM7qRzB3ifOWKT17VBPHcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGNG3p%2Blz0hIlM3kNyrcA8brfQgmRT9m2gjrnNHQ%2B6%2FanHwbkJH1u%2BJIRQN3QIdL4rD%2FanlYMnT5ubpWGbyPsD6PbWo9OzpddWl4FTAGYGgQRf0eeeQ7wEflET53%2BpcLRyYTLZcSVjnnz6ZQ7cmXMcQ%2FfrHtm%2Fe%2FfweFHphqrg6S%2FJqEC%2BnwCscrjAj1gRs16rQ1ubo3Skh%2BXSomZ3oZa9yoAC3mY9%2FxTNuE1W%2BQwLeoTVDCv9hIVEPpiScEUYnpZ4%2BeCOxOYngPwf47mT%2BRdRSNYjpXa%2BuXinK%2F5kjCot34XUCtsaONtM2koBKByfszIv8hENLleDOq%2BjnGYBrfloyRrozUN5H%2BNcdZNBmLorF1t2algNTwoMrsA8tCH0OyLdHB6JpvjGkL8Z9mBmoU5nV5zw4O6U5vdsyetzf4Lq0dgs%2FqUOb%2F5%2FzDm6WfzIHe%2F1Qup%2FOOPdmo60iE4LBLmrDsAeBYP3AeG8wSjwTG63TOqdHo4gQmckbiGS4kUnn6IDrVEbs8%2BfL3nS%2BdulCELTrNQMFZoz3Wythum6syQmEN0ufcTawXzr9dia32ARSIkJTe0Mnx5LMNkHjeq%2BvcnUck37t9oQL07tfpoB5tobNBgdKpGs6skfWCle%2FQXQK1DPdu7M0WSHO6MfISMLOWiMoGOqUBgscmxaNOrewc0ygTRxHZPwtKhl1hpeAX6n57WR20hGB5T0YwguX3pNvk3M8YU%2BP%2FaIeqX9mZrmXQrw9gRxE4Xd0gF6n44QegyB1%2BtFH0Ex%2B%2BHTg6zHw82TFA0HDCp1FJN8BiZ0nnNtlvuyuhWos3ia3HvdDBuU3asy8CInT5qd3FIrV2e5putYgMdjEQPmsSQCDUWwhnZl5Nv6fJGXIq50vx6nkl&X-Amz-Signature=2da19d93af6730c71b5221f6e452e63656be8d712940bdd2ad9dc9da2189acea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
