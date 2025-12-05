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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVERQ65Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFlVfCxQ9f0vCK38njX4XTAZcD9gWik%2B4S%2B9zewSLbzAiEA8c2t8x82cEjtzaaVoxrZCL6WTz1jnO4xK6aeM8%2BxY48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCPl1CO5ZkLySS%2BJVCrcAzfrP7tYAuGWIrm2OhEnwstcdbTw9tPH9eKPCFS9ZrcHXcpDcx6%2BiRDuz2aSfOLYFUpGJVrgbsWcdbTLHTDhpRgakmoNkpbWKSGC4Yy1xqTXoNzN0dOpvmH4lH%2BnPEZG%2B3kOxT4IX7CCpgXb7YOuiQ53TDUdFF%2FRid3ubLucBqK2TqDH9%2BQ7RcqPoEXGoCydZlyx213Gg%2BCyXBLar6FoGVfaj0z%2BxGPKiTWoQsliCm4XBA4iOlfhKw4imM%2F2xWaCAavhKHLp5HrfRI4ob0QijIoY82Jou2P0bUtbYXN16%2BF%2B%2BTlDSNXguTfeMBZ09os9mxe9G43drkbKdn7BSGsBhSPtGytorH5a4M%2B8dWHKs6u72kWwKA0iYUjpfBXKbUlNRz2gJ6DC%2FC1%2BlmgPGI6AjL9GbENwhTUW2fvZM2QkE3p8yY0%2BiFuwWeZZmrGIDhDwOtBzfLRVd6dvQktUs61BOMRgA%2Fl5dhItKWDXG8SNg7uNyOBN%2BGS7c9A3RuY%2FPZTlKXiTa5NM7FR6gs6iRCs1KqLmj%2Bs0U7n01AenC7NgGqQKyZ%2BwpO4b56w21MtlYyr5jBNNOkYIWSdI0vi3%2FemxtY3SwywjtaH7sbgNuXRTmd0D72rmn7Pn%2FmO1p2F%2BMIuuyckGOqUBisUTSYuTvlYBMWBpaExuF1wbajN2D%2FjEtrS0BlHEXTpsKPrUvFxr7Mu%2ByETDee6xC%2FRS1JeK5%2FzInIUA2aIsJxe%2BrbrLCV9HhO7nEayyKSnUnOzkcrsiHra%2B2L3waDPceeYZeeeczTWYPT3bffoDUqSkxpVf9kEVcDPTfZI9eXvMHA4EAEW1%2BPMAD0RG1AZonTp2F5uwO6EtO68x198Zro0YgO3y&X-Amz-Signature=044137149e81b18c35400c5dea90ea874931414a0859373b4a8bb0da78897179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVERQ65Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFlVfCxQ9f0vCK38njX4XTAZcD9gWik%2B4S%2B9zewSLbzAiEA8c2t8x82cEjtzaaVoxrZCL6WTz1jnO4xK6aeM8%2BxY48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCPl1CO5ZkLySS%2BJVCrcAzfrP7tYAuGWIrm2OhEnwstcdbTw9tPH9eKPCFS9ZrcHXcpDcx6%2BiRDuz2aSfOLYFUpGJVrgbsWcdbTLHTDhpRgakmoNkpbWKSGC4Yy1xqTXoNzN0dOpvmH4lH%2BnPEZG%2B3kOxT4IX7CCpgXb7YOuiQ53TDUdFF%2FRid3ubLucBqK2TqDH9%2BQ7RcqPoEXGoCydZlyx213Gg%2BCyXBLar6FoGVfaj0z%2BxGPKiTWoQsliCm4XBA4iOlfhKw4imM%2F2xWaCAavhKHLp5HrfRI4ob0QijIoY82Jou2P0bUtbYXN16%2BF%2B%2BTlDSNXguTfeMBZ09os9mxe9G43drkbKdn7BSGsBhSPtGytorH5a4M%2B8dWHKs6u72kWwKA0iYUjpfBXKbUlNRz2gJ6DC%2FC1%2BlmgPGI6AjL9GbENwhTUW2fvZM2QkE3p8yY0%2BiFuwWeZZmrGIDhDwOtBzfLRVd6dvQktUs61BOMRgA%2Fl5dhItKWDXG8SNg7uNyOBN%2BGS7c9A3RuY%2FPZTlKXiTa5NM7FR6gs6iRCs1KqLmj%2Bs0U7n01AenC7NgGqQKyZ%2BwpO4b56w21MtlYyr5jBNNOkYIWSdI0vi3%2FemxtY3SwywjtaH7sbgNuXRTmd0D72rmn7Pn%2FmO1p2F%2BMIuuyckGOqUBisUTSYuTvlYBMWBpaExuF1wbajN2D%2FjEtrS0BlHEXTpsKPrUvFxr7Mu%2ByETDee6xC%2FRS1JeK5%2FzInIUA2aIsJxe%2BrbrLCV9HhO7nEayyKSnUnOzkcrsiHra%2B2L3waDPceeYZeeeczTWYPT3bffoDUqSkxpVf9kEVcDPTfZI9eXvMHA4EAEW1%2BPMAD0RG1AZonTp2F5uwO6EtO68x198Zro0YgO3y&X-Amz-Signature=7783081fc6d24ea28a60e024ed346f4aaa9c2e7f4d99fca88d221e347b03517e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
