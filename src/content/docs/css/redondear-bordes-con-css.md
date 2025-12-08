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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSSZGWG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7j%2FxBhsuJ3in1sJQX3Ese231B%2F1ldwgvJCKQi4jQB%2BAiEAkiI0230VVn86vc1l1ipfqXLh06RKF37KsJuC3PCPsY4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlS57TD8yoXLUulNCrcAzwPYgojr%2FxaAga%2FTKigy7Ta0ChWEGoDlLjfwRCPGoZnKDl6WoFiel4rAc3EXN%2BA78MoCDCj9JGJCNSEZCWVhJaKZmdu0FE8y%2FMjHimd%2FptvviENA5CIJqL85M2vP6Ieq3c3kiRCAsGT%2BU5HqcWlx8J4JC%2FNSlSjKH4Jzg1eyLd2JIQVNA7PPKnmEMPfBr5jz8GppujtW%2F65tStLWmk6UEh22GcsUD%2BTyh1fpFcOP8Aq40yW%2F9usQbFzfbEkGc8UywtpSvpOHCVcCArnPbw1myz1SQpMcn7rOTjvkp%2FH8PdEfkD0XTjh02NKobldfES7uB34pW86qfyU1COiyGiNyYkA91%2BDTy5JPyFI8b91ohQzr2kLOw2fMqJp5bmHZkOs6yXnFbERY%2FYCmbt0ywMQcUE7DyhLRLiAGBHgvT%2BomYbmYgCRluG3BudLo2IwyTfjk9%2FYwoUWCn1%2FLUcyfR68jwX6pnxLZ34FxSdBYTWQzdeno9pxBSXNDtDqriCR%2FkmzqhNkpAd%2BM%2BG%2BdwX2xx7Dl80nOSjhOTqOwo14EbA0FpPTp8XXs%2FWxGNU6HoMPLouUS3oixJHC11THAHXL5H31ZRYuW7Ud0ab1MmugdbxDOdvbhcSkL2OX3RSGro%2F9ML2Q28kGOqUBJayAZLHlqI9FV5eyYuHgQ37Mv47t8sU8c5bqaIvMUmHXbPik4GsBj0KnQpXGcah%2ByiGnySYVSFufi6sxBH8lGV%2FLPpbpnsHa9CRDXr76go2VkkUz5Bar%2B%2BZRayHzFjuQkZlABn%2FDhmZ5Bk81qwhMX%2FxqfKndUz%2Fkx%2F4NlGjArwkKXjydeTeDzesdw23l%2BViy2dDZ1iTdufvBDQyVK1dpoSUBVWfq&X-Amz-Signature=0d9aabd087bc25ffe71a2473399f2f441ccb33788dfd05b89012abce8c6d0bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSSZGWG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7j%2FxBhsuJ3in1sJQX3Ese231B%2F1ldwgvJCKQi4jQB%2BAiEAkiI0230VVn86vc1l1ipfqXLh06RKF37KsJuC3PCPsY4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlS57TD8yoXLUulNCrcAzwPYgojr%2FxaAga%2FTKigy7Ta0ChWEGoDlLjfwRCPGoZnKDl6WoFiel4rAc3EXN%2BA78MoCDCj9JGJCNSEZCWVhJaKZmdu0FE8y%2FMjHimd%2FptvviENA5CIJqL85M2vP6Ieq3c3kiRCAsGT%2BU5HqcWlx8J4JC%2FNSlSjKH4Jzg1eyLd2JIQVNA7PPKnmEMPfBr5jz8GppujtW%2F65tStLWmk6UEh22GcsUD%2BTyh1fpFcOP8Aq40yW%2F9usQbFzfbEkGc8UywtpSvpOHCVcCArnPbw1myz1SQpMcn7rOTjvkp%2FH8PdEfkD0XTjh02NKobldfES7uB34pW86qfyU1COiyGiNyYkA91%2BDTy5JPyFI8b91ohQzr2kLOw2fMqJp5bmHZkOs6yXnFbERY%2FYCmbt0ywMQcUE7DyhLRLiAGBHgvT%2BomYbmYgCRluG3BudLo2IwyTfjk9%2FYwoUWCn1%2FLUcyfR68jwX6pnxLZ34FxSdBYTWQzdeno9pxBSXNDtDqriCR%2FkmzqhNkpAd%2BM%2BG%2BdwX2xx7Dl80nOSjhOTqOwo14EbA0FpPTp8XXs%2FWxGNU6HoMPLouUS3oixJHC11THAHXL5H31ZRYuW7Ud0ab1MmugdbxDOdvbhcSkL2OX3RSGro%2F9ML2Q28kGOqUBJayAZLHlqI9FV5eyYuHgQ37Mv47t8sU8c5bqaIvMUmHXbPik4GsBj0KnQpXGcah%2ByiGnySYVSFufi6sxBH8lGV%2FLPpbpnsHa9CRDXr76go2VkkUz5Bar%2B%2BZRayHzFjuQkZlABn%2FDhmZ5Bk81qwhMX%2FxqfKndUz%2Fkx%2F4NlGjArwkKXjydeTeDzesdw23l%2BViy2dDZ1iTdufvBDQyVK1dpoSUBVWfq&X-Amz-Signature=df5cca98673004ba80c77efbc199466e8ca7fb1d997e148ffef9af851088ecbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
