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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC33GVW7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOqnlG26LSEqMwD6aeCnGgjLdMWMEPovBkifmh7qsSOAiEA52Dxu5dKW3%2BoI%2BznIxb5YmuIJZDNy8O0D4dSjfP4SzwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRmUOiW3gXJ1CdWKCrcA09AkDZe9Ct5I0ERLd0QU4zVdPEJNfQqRZic9wx0PGbTQNI4hYZAnsoC2SjsZu%2FvUiIh1N45dLyLR0khWjfGgFy6LEZlq%2BGHbq4Ec9bHTTcvIDUoMGO1yQgppfSSk1aB5gamhJXvmlDamSE6%2FpRVCOZ7nUg%2B7G8JEJGZ8asLB0zg%2FnihyI7Ko6gg%2BlDK3zDk2fC8I1qlr98k7RLmYM3hZeTUlfW7KDs%2FNcSsCFs7jz2kER%2BT2N31beYNQe20WaA5KDppeitPDU7yJmHwvmxVMR%2Bqbxbl%2BMAQfwEbL8U6PiI0Py6KjjKt%2BOMu0LD1PTcqMFe6km69X9gei%2FtDHoT83EynJYLK5YwaK7%2FwsSGYq0hZf6SiRdHlTsecLt4d7F%2FFFhzJuyOX6CdeSmsqIrSIXzigycLvy4f3o3loRQH9r8CyzjjpOAqlqX6Myd9l%2FKlFqRR%2BSOTzngsR1%2FTMPEz2NN0fRjz%2FaXg7HnfqSFC8DSzvtAPbE9DLPfd0s12hxDE4Ie3q2pshiP3DhHa1eXgyNzu6plA0qKyIEX1I8ORuD7%2Bo6h%2FNoizZ2VbY0eDSPesUB%2BYtStxRN1RWCe6mW5l9N8oC1Xsx8nipUW3b%2Bx9s%2FgzBUjqh%2B%2BbcUEdyf3DpMOnH18kGOqUBEC31VHFo%2BE1t6eWzuN161KFqIHBHaUb5bJ%2BFd4IIdlVAFMO0UFAvLkwRx2RwR6C6x8u3gNNvezaVdwLAvgdeziR%2Bi9yWopJ0RysjjeX0QFNObLG%2FKvK725FKIzfeZtjaByFO3XQq2VP%2BEwXrEhLBvddj5dtrQXY2uBzrDKNPMR3yAwcxQ5dx8TsmmDuHJjRff%2FrG5ud7rhTocdz5vky0WNc76d81&X-Amz-Signature=5f7d04bf8a7bf243dcd26fde051f53386d6d1eab87564c19f05c47b476db4b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC33GVW7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOqnlG26LSEqMwD6aeCnGgjLdMWMEPovBkifmh7qsSOAiEA52Dxu5dKW3%2BoI%2BznIxb5YmuIJZDNy8O0D4dSjfP4SzwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRmUOiW3gXJ1CdWKCrcA09AkDZe9Ct5I0ERLd0QU4zVdPEJNfQqRZic9wx0PGbTQNI4hYZAnsoC2SjsZu%2FvUiIh1N45dLyLR0khWjfGgFy6LEZlq%2BGHbq4Ec9bHTTcvIDUoMGO1yQgppfSSk1aB5gamhJXvmlDamSE6%2FpRVCOZ7nUg%2B7G8JEJGZ8asLB0zg%2FnihyI7Ko6gg%2BlDK3zDk2fC8I1qlr98k7RLmYM3hZeTUlfW7KDs%2FNcSsCFs7jz2kER%2BT2N31beYNQe20WaA5KDppeitPDU7yJmHwvmxVMR%2Bqbxbl%2BMAQfwEbL8U6PiI0Py6KjjKt%2BOMu0LD1PTcqMFe6km69X9gei%2FtDHoT83EynJYLK5YwaK7%2FwsSGYq0hZf6SiRdHlTsecLt4d7F%2FFFhzJuyOX6CdeSmsqIrSIXzigycLvy4f3o3loRQH9r8CyzjjpOAqlqX6Myd9l%2FKlFqRR%2BSOTzngsR1%2FTMPEz2NN0fRjz%2FaXg7HnfqSFC8DSzvtAPbE9DLPfd0s12hxDE4Ie3q2pshiP3DhHa1eXgyNzu6plA0qKyIEX1I8ORuD7%2Bo6h%2FNoizZ2VbY0eDSPesUB%2BYtStxRN1RWCe6mW5l9N8oC1Xsx8nipUW3b%2Bx9s%2FgzBUjqh%2B%2BbcUEdyf3DpMOnH18kGOqUBEC31VHFo%2BE1t6eWzuN161KFqIHBHaUb5bJ%2BFd4IIdlVAFMO0UFAvLkwRx2RwR6C6x8u3gNNvezaVdwLAvgdeziR%2Bi9yWopJ0RysjjeX0QFNObLG%2FKvK725FKIzfeZtjaByFO3XQq2VP%2BEwXrEhLBvddj5dtrQXY2uBzrDKNPMR3yAwcxQ5dx8TsmmDuHJjRff%2FrG5ud7rhTocdz5vky0WNc76d81&X-Amz-Signature=77db7eb140eaf86fc8de46396092e34eaa1eb233361befb0c09bbde043765eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
