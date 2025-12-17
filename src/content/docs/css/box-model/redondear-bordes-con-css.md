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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX52LPI3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZr1EMmS1iYqowtHatB20i2sRgDeGJSiGjyBZ6tr8WaAiARFiHvhoqAj8ylrZPqeI6knkI0vVbwZjliy%2Bw5CJ80zyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMau9M%2Fewquubki1V1KtwDF6%2FGr%2Bl0T1NNdcdgMLGFKAvnch6EuXV2SPIXGw7dSz3wOjcF5Pqfj5DPsGBgmz3Wydtk%2BVlJT%2FHa%2B8W1SJVOMaFysUORu0PdgfTcpVLXGzoGIqQvjyivzpCsHkpQqNfVQheG%2FnDAGAY5dDc8s6EFzfHo06uCj5vcoDKKBcuotg5mkCWRXYn3vOF2sj%2FSTYEpS78ggWqpgASk3AdUnQ4raWIQ%2BI9qA16WyK9HenH%2BjMFUFD8h20GWq%2FaO6mNQg6BhUOkYEXMWLsSYdwvyF24gNy8%2BG7CsGhWWSaiVXrpaDSV5CTr5WnCH%2Fs19Vmfbj%2BGfDkcF33xI8IEWITCr5glBSv%2Bjiz45DiX95X38mHVtCsHoCg3O997O4s%2FFduDk2plojRJEn2bp7iC%2Fh4xDSA0vCplchUIdoJsJXReLa8P4mMp1mmt7MplgcLolyoE9QZ4PSQkMQ7DybQFyRoqgCx5CLGqCpUIlXTku1QWlJUftPHlZPrcdS7vvR0WV6zwAH0l486Ou%2BTZtQa99SqTuRzPWMkaCpbarBmTtnpaqco33w8%2B%2BGFxAqDtIQKKgAHF1%2FQg2DvJE3LPMuZSQJJYw2fa8%2FRAXmDM%2FEXf4RtA4ImkcmGuj%2FYBfAwz%2BtKhjf54wr5%2BLygY6pgFdUSroUwpSCk7NdrYANyMel5acuMA8pVM7a789f%2FTFu3aDuM3uwiSZ%2FOIc5UnxCL1ywfpYAmdWuq1vW8PaheQm1scrDcdnyy%2BRInqm39MQppdxC%2FR1u4WTbeqqGu1eiTpI1n9wXBVG9G0oNN41a9SpBcRM2mahB7qxjl4QAjR8AcnnFNcVZQ2rXs7WL6cQR2kwiaDPRwiu4QcEFwhOMEiFL1PYMyPs&X-Amz-Signature=949e7cb98d886c1cb495c934defb969742d8b09e4d822e35cf1b79c2ec68ca87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX52LPI3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZr1EMmS1iYqowtHatB20i2sRgDeGJSiGjyBZ6tr8WaAiARFiHvhoqAj8ylrZPqeI6knkI0vVbwZjliy%2Bw5CJ80zyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMau9M%2Fewquubki1V1KtwDF6%2FGr%2Bl0T1NNdcdgMLGFKAvnch6EuXV2SPIXGw7dSz3wOjcF5Pqfj5DPsGBgmz3Wydtk%2BVlJT%2FHa%2B8W1SJVOMaFysUORu0PdgfTcpVLXGzoGIqQvjyivzpCsHkpQqNfVQheG%2FnDAGAY5dDc8s6EFzfHo06uCj5vcoDKKBcuotg5mkCWRXYn3vOF2sj%2FSTYEpS78ggWqpgASk3AdUnQ4raWIQ%2BI9qA16WyK9HenH%2BjMFUFD8h20GWq%2FaO6mNQg6BhUOkYEXMWLsSYdwvyF24gNy8%2BG7CsGhWWSaiVXrpaDSV5CTr5WnCH%2Fs19Vmfbj%2BGfDkcF33xI8IEWITCr5glBSv%2Bjiz45DiX95X38mHVtCsHoCg3O997O4s%2FFduDk2plojRJEn2bp7iC%2Fh4xDSA0vCplchUIdoJsJXReLa8P4mMp1mmt7MplgcLolyoE9QZ4PSQkMQ7DybQFyRoqgCx5CLGqCpUIlXTku1QWlJUftPHlZPrcdS7vvR0WV6zwAH0l486Ou%2BTZtQa99SqTuRzPWMkaCpbarBmTtnpaqco33w8%2B%2BGFxAqDtIQKKgAHF1%2FQg2DvJE3LPMuZSQJJYw2fa8%2FRAXmDM%2FEXf4RtA4ImkcmGuj%2FYBfAwz%2BtKhjf54wr5%2BLygY6pgFdUSroUwpSCk7NdrYANyMel5acuMA8pVM7a789f%2FTFu3aDuM3uwiSZ%2FOIc5UnxCL1ywfpYAmdWuq1vW8PaheQm1scrDcdnyy%2BRInqm39MQppdxC%2FR1u4WTbeqqGu1eiTpI1n9wXBVG9G0oNN41a9SpBcRM2mahB7qxjl4QAjR8AcnnFNcVZQ2rXs7WL6cQR2kwiaDPRwiu4QcEFwhOMEiFL1PYMyPs&X-Amz-Signature=8c052a7905cd9db2f2600766666fcbe382a327f4884ce09e7e07d2c1609cdd83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
