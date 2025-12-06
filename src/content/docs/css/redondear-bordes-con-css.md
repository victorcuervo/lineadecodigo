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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUPP25U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXYJlEmJskC%2FHWGsnk%2Blmxs9AXuFglBUT4bzg2wfHDzgIgMiIOKT%2FG5RGpRPZtC%2FpvlCfF74kq5CfI%2F4ZfmnFIMMAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVlCQXAsd%2BwWWmZjyrcA44kiyYnzTAHy6rpg8PHGGElzS%2BKwWFTWRZ0Wmmn30rVik4KZnFx5gj1XvP7HEtmJnbXoxtflZhkpfiPrVVc5GxmzIcvaifS5ZTQn%2Bo9PRXRK18VOzFWOF44YCfWfp5Qz9D6s4Kja85ftrrtpA1Jqf6%2Fhbd9fD%2Fb%2FRlHIiCfK8GfNeSMQh%2BfC14TZm%2FwQMq8NBebOs4rK9YgzoCGY6VGBjKzv97oQC%2BpRR5hruvaEcUsrRn%2B5PVl%2BHHiM7AFnS2Z6LeGggSOormQHHQ4RaqtdbRMlPIvLnbPSEtoCDD17NrFGO59aMlee78KZRUXEXWl%2BboQwK40%2BRHBpRbF0wVSY1vbUY2BbC2Ks7jr3ZMNB%2FoYaatkCb1k%2BzQcw3LeMG%2BVPOhayzKzMN0Jk9IDkdSAJoH93vLNeRcwGGboQum5ov7u5%2FYaHw8KOLjdW6bqybG0z3yyONV0gCokmXwQd%2B%2F2Ei91Jo4WzB0TjMU5qVsUrs%2FDnBh2Nak03mamKSKra%2FAmbb1AnkHDS1fqhTfiadF73LL9tIH0Jyu2BQTnzySyc2nhyvUFALP%2FuL7JRbccBis%2FfYJhC99H8CpSQBjEfL6npPrZvvBZvIIkjp0rF3FOuRMdqLUygZeQRCBPg91HMNv90skGOqUBfljrry666xqaXoPTXk%2F%2F3PXK7c18I%2F80XcmNT%2BjqzBP5cXVyCWWuYqDLfroM4b4Du%2FMcQjeFI%2BlLG3z961VLEs1WYcz9Ahiuh2DW6G%2FddkqQrKagdDM2mpXgXc96T3aAUaltirHW0i6V4Tlz3d%2BnO8kY7PK6l%2B6KXnJ0jcLKCcvuiLjsqfX0InifnTswb%2B5mr7HdagJ9ho7euG7bArF85OykCNL0&X-Amz-Signature=d6d28ab9e514d1d675fd21604304073a2d2559763b93cbd23e729032e99a349e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUPP25U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXYJlEmJskC%2FHWGsnk%2Blmxs9AXuFglBUT4bzg2wfHDzgIgMiIOKT%2FG5RGpRPZtC%2FpvlCfF74kq5CfI%2F4ZfmnFIMMAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVlCQXAsd%2BwWWmZjyrcA44kiyYnzTAHy6rpg8PHGGElzS%2BKwWFTWRZ0Wmmn30rVik4KZnFx5gj1XvP7HEtmJnbXoxtflZhkpfiPrVVc5GxmzIcvaifS5ZTQn%2Bo9PRXRK18VOzFWOF44YCfWfp5Qz9D6s4Kja85ftrrtpA1Jqf6%2Fhbd9fD%2Fb%2FRlHIiCfK8GfNeSMQh%2BfC14TZm%2FwQMq8NBebOs4rK9YgzoCGY6VGBjKzv97oQC%2BpRR5hruvaEcUsrRn%2B5PVl%2BHHiM7AFnS2Z6LeGggSOormQHHQ4RaqtdbRMlPIvLnbPSEtoCDD17NrFGO59aMlee78KZRUXEXWl%2BboQwK40%2BRHBpRbF0wVSY1vbUY2BbC2Ks7jr3ZMNB%2FoYaatkCb1k%2BzQcw3LeMG%2BVPOhayzKzMN0Jk9IDkdSAJoH93vLNeRcwGGboQum5ov7u5%2FYaHw8KOLjdW6bqybG0z3yyONV0gCokmXwQd%2B%2F2Ei91Jo4WzB0TjMU5qVsUrs%2FDnBh2Nak03mamKSKra%2FAmbb1AnkHDS1fqhTfiadF73LL9tIH0Jyu2BQTnzySyc2nhyvUFALP%2FuL7JRbccBis%2FfYJhC99H8CpSQBjEfL6npPrZvvBZvIIkjp0rF3FOuRMdqLUygZeQRCBPg91HMNv90skGOqUBfljrry666xqaXoPTXk%2F%2F3PXK7c18I%2F80XcmNT%2BjqzBP5cXVyCWWuYqDLfroM4b4Du%2FMcQjeFI%2BlLG3z961VLEs1WYcz9Ahiuh2DW6G%2FddkqQrKagdDM2mpXgXc96T3aAUaltirHW0i6V4Tlz3d%2BnO8kY7PK6l%2B6KXnJ0jcLKCcvuiLjsqfX0InifnTswb%2B5mr7HdagJ9ho7euG7bArF85OykCNL0&X-Amz-Signature=6c87ced18095e69ab59e8ef3dce709d1856c1f27aad336884ce5a73edab45d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
