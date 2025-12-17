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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZZQGFN4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx7M%2BEmVrChZJOQNYQy%2F291PARodqcmMrK3B1%2FchxNwQIgHZBS97Nc9C%2BMiDQQVZBaMdGFaPrc4cqhUSLxgwe5f0QqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCIqV4gbyTVX4hJKSrcA9CXZfFfa4MrBxk%2FInJqekpGb51MXeperFn8WcCv%2BaD1tSPsiG2oAn0TDAs%2FSBxXsHZghjYHgPrxCZlLkxOvqm78Jq%2BmhGEfL0cmp%2BJ5ktD5wdlFoOcdQUb5AUH4i75%2BoE1T52DzcUoRFNklBMoDP%2FbCdXQFc6kSKXeKg0Srem0nkANbIatg4DlbjKyxuhVsOifgNA9RJvCYzfkT3VXAG58t5GHZZptCG%2Bgd15fsGVKbC4SROSPgmzFx93%2BU8QgHVRb5eHBO%2BTha4eqAgvGEW6W8GVFirOMkXq31uD%2BHJEbkY88MF0DJdQId24K7fjKxLhPbIWxQdfQyFxy3q5SyaRt1mzqLFC6OtFfPEa%2BH0GLM8dtRslLkDZGOeQuyECOzNQoEbbjpGmauDsKOy6jwT8iK%2FvO2WwnIUd8YQmChOy0X%2BbIfEYY9IKoV0Aie5OK8tAgDAtJJylSEbdk0p0h4WHV%2F2L5gK0ylMd4DKHuEmUv9TXGb%2FU8XxBSsYf3T0zsCRc2c1roAR3oxHv6LsfnciOnDcMhsk2GNkOTGvHEmkHP7TMdKz5FnFFPJnl0VuPD5CKYrOfCA0cOpL%2FWZz00m9JIDBT5K%2BfBFda9h%2BKnXngWbZJRcDsCe9gUlK%2BnhMO2KjMoGOqUB7DhVUxmQC4yg8N%2BazgQiFTB92jLAOSzAKavQ5k2T%2FstFgEdAyqk77AT%2BjvHyMOGKmr%2BUTUav4GQYdehSzQPdsgWlATaa%2BQb9zj%2FPpAS20%2F7vQY68R%2B8S6Ay2nciH3ysAm%2F3LO%2FCxgCm9KdZ%2F2V23qA1pO%2FXNR4I1h6FsePoKx5NY94bcDdHZFxHPhqwKtYjmjnkeLaWF4tZmXIpHXowOOxKMHvPI&X-Amz-Signature=2760fa480895106a9f5275fa3d30d8220f0ad28edfcd9389e77d232473c425d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZZQGFN4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx7M%2BEmVrChZJOQNYQy%2F291PARodqcmMrK3B1%2FchxNwQIgHZBS97Nc9C%2BMiDQQVZBaMdGFaPrc4cqhUSLxgwe5f0QqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCIqV4gbyTVX4hJKSrcA9CXZfFfa4MrBxk%2FInJqekpGb51MXeperFn8WcCv%2BaD1tSPsiG2oAn0TDAs%2FSBxXsHZghjYHgPrxCZlLkxOvqm78Jq%2BmhGEfL0cmp%2BJ5ktD5wdlFoOcdQUb5AUH4i75%2BoE1T52DzcUoRFNklBMoDP%2FbCdXQFc6kSKXeKg0Srem0nkANbIatg4DlbjKyxuhVsOifgNA9RJvCYzfkT3VXAG58t5GHZZptCG%2Bgd15fsGVKbC4SROSPgmzFx93%2BU8QgHVRb5eHBO%2BTha4eqAgvGEW6W8GVFirOMkXq31uD%2BHJEbkY88MF0DJdQId24K7fjKxLhPbIWxQdfQyFxy3q5SyaRt1mzqLFC6OtFfPEa%2BH0GLM8dtRslLkDZGOeQuyECOzNQoEbbjpGmauDsKOy6jwT8iK%2FvO2WwnIUd8YQmChOy0X%2BbIfEYY9IKoV0Aie5OK8tAgDAtJJylSEbdk0p0h4WHV%2F2L5gK0ylMd4DKHuEmUv9TXGb%2FU8XxBSsYf3T0zsCRc2c1roAR3oxHv6LsfnciOnDcMhsk2GNkOTGvHEmkHP7TMdKz5FnFFPJnl0VuPD5CKYrOfCA0cOpL%2FWZz00m9JIDBT5K%2BfBFda9h%2BKnXngWbZJRcDsCe9gUlK%2BnhMO2KjMoGOqUB7DhVUxmQC4yg8N%2BazgQiFTB92jLAOSzAKavQ5k2T%2FstFgEdAyqk77AT%2BjvHyMOGKmr%2BUTUav4GQYdehSzQPdsgWlATaa%2BQb9zj%2FPpAS20%2F7vQY68R%2B8S6Ay2nciH3ysAm%2F3LO%2FCxgCm9KdZ%2F2V23qA1pO%2FXNR4I1h6FsePoKx5NY94bcDdHZFxHPhqwKtYjmjnkeLaWF4tZmXIpHXowOOxKMHvPI&X-Amz-Signature=1e5764517059b2c30bdf80434cc5015bccee4165692a98c0309ab3184a88cee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
