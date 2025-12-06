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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2EXABX7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5AhFd8hhNEbruQKkbyjoIUor2RXOKiSET1N5%2FrQWltQIhAPrafT5Wa%2F5iMqRj4k4poMOMdG42V8yFnfwkVHR9um4aKv8DCHUQABoMNjM3NDIzMTgzODA1Igzwk1xeg3Po8lw1R%2F0q3ANPYjc9DhUtfCBQZTbv2U56ytCJjaY7rjtIMzwYqBDLUgnCDK0WrDC9Q7Hf9TZIEcSBGQKq31KAy2FElmfJNDyiC9gdJBad1c2O7uoGucJuL%2BZL5bPEpGg9WxzsNcO3Kgc4fYI8UeJqU7rwYF9slwipltrVlNjcMbx0qLCvZfxRDlPsGIAtb6IZphh4WEroVM1R5h6vLWvGRTx%2BkrF2LOkKL1dgrXAVQEkhEAPFdXGKb02Je7kBnvw%2BDhRCTv9VozIrMosI39Prcp4hhFJ%2Bv9uU6vPIBkSHjt2X6sg0387p0z2f6TXl8xkmvNl0VxaPWi4feULO5a9uxv0GeO0GzqqvTb3Uh6hD3n111qwc8Mj9zHbfLkjuQCEl7nsSfiinvkHk4D1jMORO9LTLeh%2BgPhS0vKaySlorNHmstS%2BfS6qOnRHl1J8c2DZzLYkbr8ucMUD5aKgXFaVN%2FQNvP59c1%2BOiOZj2qdKo02eGj65PWRdXDRTXW2uThRgGlkyZ2Vlkwd2SSnLB0SKYz3HeXlNlo5LTCU1GVtSgaFrbohipF55DfoTNuagqDjXQkdu%2Bs89NaeDHULm6pSOw%2FPBZB746XLXthOMrgFukAA%2FGqf8oaVnZ7IVkMLrPUqkqezfpQTDOptDJBjqkATVXJQQgEzYzMh%2FmRDCZQGz9bHxTKEwqvmWMyizZCZi38Jj0OEtFuYujLPBszVdm42nRnEqz2hXNmFkdlhaRufw%2BVqxAmZBQWFxKe%2BCKyNsKelSLxwA15nWRbcMKQ1ZCWqq45hHQOfKCuQQf%2FrymnacfNqxMx3coGgknS7e95Nfw3pZrJXTkjs1RmQiHqNoyMBrM%2BHm6TV%2BeAhjzEP9CrwbNHDmD&X-Amz-Signature=adea2443a2d49759cf105a8d5a1220752de5d0070120f1f0a7db32ff3eb002af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2EXABX7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5AhFd8hhNEbruQKkbyjoIUor2RXOKiSET1N5%2FrQWltQIhAPrafT5Wa%2F5iMqRj4k4poMOMdG42V8yFnfwkVHR9um4aKv8DCHUQABoMNjM3NDIzMTgzODA1Igzwk1xeg3Po8lw1R%2F0q3ANPYjc9DhUtfCBQZTbv2U56ytCJjaY7rjtIMzwYqBDLUgnCDK0WrDC9Q7Hf9TZIEcSBGQKq31KAy2FElmfJNDyiC9gdJBad1c2O7uoGucJuL%2BZL5bPEpGg9WxzsNcO3Kgc4fYI8UeJqU7rwYF9slwipltrVlNjcMbx0qLCvZfxRDlPsGIAtb6IZphh4WEroVM1R5h6vLWvGRTx%2BkrF2LOkKL1dgrXAVQEkhEAPFdXGKb02Je7kBnvw%2BDhRCTv9VozIrMosI39Prcp4hhFJ%2Bv9uU6vPIBkSHjt2X6sg0387p0z2f6TXl8xkmvNl0VxaPWi4feULO5a9uxv0GeO0GzqqvTb3Uh6hD3n111qwc8Mj9zHbfLkjuQCEl7nsSfiinvkHk4D1jMORO9LTLeh%2BgPhS0vKaySlorNHmstS%2BfS6qOnRHl1J8c2DZzLYkbr8ucMUD5aKgXFaVN%2FQNvP59c1%2BOiOZj2qdKo02eGj65PWRdXDRTXW2uThRgGlkyZ2Vlkwd2SSnLB0SKYz3HeXlNlo5LTCU1GVtSgaFrbohipF55DfoTNuagqDjXQkdu%2Bs89NaeDHULm6pSOw%2FPBZB746XLXthOMrgFukAA%2FGqf8oaVnZ7IVkMLrPUqkqezfpQTDOptDJBjqkATVXJQQgEzYzMh%2FmRDCZQGz9bHxTKEwqvmWMyizZCZi38Jj0OEtFuYujLPBszVdm42nRnEqz2hXNmFkdlhaRufw%2BVqxAmZBQWFxKe%2BCKyNsKelSLxwA15nWRbcMKQ1ZCWqq45hHQOfKCuQQf%2FrymnacfNqxMx3coGgknS7e95Nfw3pZrJXTkjs1RmQiHqNoyMBrM%2BHm6TV%2BeAhjzEP9CrwbNHDmD&X-Amz-Signature=13a46eeb44767261e0751fed913ef9e9437cd4e9ee59071f63b93610dd13e0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
