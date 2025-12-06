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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTOLEKD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlAQSKuY06o0%2F8YdmdOkflI4cofHKAIMX10WuXFPkZHAiEAzRYrfsjcXhMaYxI4l17oTaSpolKHhRtcs%2Fh8fRtsYLMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKjFRFv67o4E%2BryYUCrcAw8V9152ilITllsl3wauiVqmW1seYgav19rwa3cIwmmpiGhfPpIyX2MbeyCgdmLHBHmASx08dFdJm0SdZITRr2BJ64ElHKhKHGljuqSUuj0R8TsLCGmHGgCgI50GYFcKyLWcf73%2B19DKCbOdbbIbW%2FvI0p4ZtUASCDTGzAHcU6NrSIEob6tpr822dW%2FiYyFiaApLetYQn54RUweq%2B31EN2gW1zKT3yiqnF4U7FfYeI7XWt3LDqYAXUR9XhyAhlV3fShiI7I1B4Mn9BuYSBwGPKzCManJ9iWOOpQl8kDufMOwhGFyjG2%2FX87EERzNQNzqx4y6%2B9dLYucnJZAmDFPBEz0FVc0KOwpZfHrPTY3tRWsd1WODw%2B5iXxj%2BpXPjFSCdcNd4Jv1rchwAbn0cfZ0VXtot8TA841l0c1H9G9Mb1c1PjDjWQNq58jfDrqc%2FSbYRU6VLQKFGEXHu%2BJpXJjHrs7%2FWOoWondRB5xaJpnZo7c9XWFjA8QRRoi0iNl%2BrOtSSI2XGWExMw0wO1T2b7%2BtXJBquyF28ng%2BCfhz1QOmeTZyngkNUBs8B36CeWYLvkUL0wYp%2BRUHzpK2YodxK%2Fton4%2Bxj2yeZjFWQ3s26szS4f6UmKM5vIPBXeKnJ33E2MLLozckGOqUBxED3mucHgLekFbbFxnnqkUO%2FE5GIfxiTTfe8ysaPlnf9MUO%2BNL0AB9%2BfAyNUyoaRMg7VXqdZIKau9pI7TVqrAbivkJ1R3nuO6fGeVGXKRlnzde1g%2BteOUUVpHYHRYr8fDXocoyP%2B3jmed4Ajyb11ANHh1PDPqDoiufCcb0M5FAHPIwjNPZuwiiElTFn07mRcQ9LPjq9kEoY8QhazCW4aDEJMuzxN&X-Amz-Signature=cec36fa17dfb6c069f3d9fd5ac94fabc7fff2daad46744c7a6652deeb23861a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJTOLEKD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlAQSKuY06o0%2F8YdmdOkflI4cofHKAIMX10WuXFPkZHAiEAzRYrfsjcXhMaYxI4l17oTaSpolKHhRtcs%2Fh8fRtsYLMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKjFRFv67o4E%2BryYUCrcAw8V9152ilITllsl3wauiVqmW1seYgav19rwa3cIwmmpiGhfPpIyX2MbeyCgdmLHBHmASx08dFdJm0SdZITRr2BJ64ElHKhKHGljuqSUuj0R8TsLCGmHGgCgI50GYFcKyLWcf73%2B19DKCbOdbbIbW%2FvI0p4ZtUASCDTGzAHcU6NrSIEob6tpr822dW%2FiYyFiaApLetYQn54RUweq%2B31EN2gW1zKT3yiqnF4U7FfYeI7XWt3LDqYAXUR9XhyAhlV3fShiI7I1B4Mn9BuYSBwGPKzCManJ9iWOOpQl8kDufMOwhGFyjG2%2FX87EERzNQNzqx4y6%2B9dLYucnJZAmDFPBEz0FVc0KOwpZfHrPTY3tRWsd1WODw%2B5iXxj%2BpXPjFSCdcNd4Jv1rchwAbn0cfZ0VXtot8TA841l0c1H9G9Mb1c1PjDjWQNq58jfDrqc%2FSbYRU6VLQKFGEXHu%2BJpXJjHrs7%2FWOoWondRB5xaJpnZo7c9XWFjA8QRRoi0iNl%2BrOtSSI2XGWExMw0wO1T2b7%2BtXJBquyF28ng%2BCfhz1QOmeTZyngkNUBs8B36CeWYLvkUL0wYp%2BRUHzpK2YodxK%2Fton4%2Bxj2yeZjFWQ3s26szS4f6UmKM5vIPBXeKnJ33E2MLLozckGOqUBxED3mucHgLekFbbFxnnqkUO%2FE5GIfxiTTfe8ysaPlnf9MUO%2BNL0AB9%2BfAyNUyoaRMg7VXqdZIKau9pI7TVqrAbivkJ1R3nuO6fGeVGXKRlnzde1g%2BteOUUVpHYHRYr8fDXocoyP%2B3jmed4Ajyb11ANHh1PDPqDoiufCcb0M5FAHPIwjNPZuwiiElTFn07mRcQ9LPjq9kEoY8QhazCW4aDEJMuzxN&X-Amz-Signature=083cefbe91f635104eed98a446e616477ca2ccf06b8c4b7691a727332e93b333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
