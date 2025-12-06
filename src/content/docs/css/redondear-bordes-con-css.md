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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFW2RN5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRwtat1dZC3bw98jQbFH8MDFEzay4%2BGWaRuKghUZOMdAiEAtYVBSEAAcf7MQyLLpijLc32cO8XHUgs0AsnBGnYQCnkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDG3%2BKmrKjTSaN1gemircA5ZdK9WZSx2cOsOIuOZf5yyeP37QuhzN3CuTUyA%2Ftx5RYU2PeE2aO5zlg4zWXy6zoCZUhqO7VZMeTc60eWB9HUXhGPFfKb3MIVWOdlxWnxaM22xwEuf43Q%2BZQ62lCPlhXU500uCd5nU64ectqGxmoiPE5HKshj7iq6sgVgZrAbV1FdcMBXTNq0D%2Bvj6nGwZdZ3nOKrRwCmcWvI1lXEw1xHCQZLj0e0Asif3XOmuT3dWIAI4qGhakrH2keO2rNvwiMlsC7Wf%2FQELCFUUQfzOUF2QKmmeyayY8RP7RhPzOYArEuJiHTqs7h49DcpaxwVrf7DPAA8%2FCd6wwbzUvABUY2IGPuvyX2O1OY6jK2cbrs%2BkfR5kqhl0m4szY1zlBTUymYSYySVQge0LvgzeIyZBab7rESrp%2BpoVsdtXhqeFCQeOoD6TIBfYzk5zs5dbYGotcQ4APTgAm2ny6%2BBbYYoS0fv%2F7FOoWIdex29V4oTwMq8Waw3IaQCIIS4pg5Zy3IUrCplhd37rTIfm0TJO5wUACTLp3nYuxmBX1GhM9MD2MoXM%2B%2BpU2xokVmF4MQkgBGq3XtGTrF%2BkRMIclOntyP7sn%2Bz1jpgHIKscfGCrCtg28YlroBAOGFdRt6xIhm%2FF3MKG8z8kGOqUBl2FQcHE1Cl3QLTeFkyUReebCLx30YTMlh9puhXO%2Bw0f67Dk9ylah0cypbYtq7HslJSrjjxHD1AFR1vkdIfbPYNkHO%2B8BCE5gS4JGE2yJLFmxmZwtiJbxJrNdEcmKDlKpntobw87t7xuePKdDjWWTpDcF4GBqSZMWFJdGY6W1iyGOzuvfxpdtGobAj2kdmoGSMi5yLrcRif3fefi9d9mq8bVnvDIh&X-Amz-Signature=bad647d939f8d00a4bdc3bd4441a456e3746a176c207e35f226c5cc1adccec2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFW2RN5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRwtat1dZC3bw98jQbFH8MDFEzay4%2BGWaRuKghUZOMdAiEAtYVBSEAAcf7MQyLLpijLc32cO8XHUgs0AsnBGnYQCnkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDG3%2BKmrKjTSaN1gemircA5ZdK9WZSx2cOsOIuOZf5yyeP37QuhzN3CuTUyA%2Ftx5RYU2PeE2aO5zlg4zWXy6zoCZUhqO7VZMeTc60eWB9HUXhGPFfKb3MIVWOdlxWnxaM22xwEuf43Q%2BZQ62lCPlhXU500uCd5nU64ectqGxmoiPE5HKshj7iq6sgVgZrAbV1FdcMBXTNq0D%2Bvj6nGwZdZ3nOKrRwCmcWvI1lXEw1xHCQZLj0e0Asif3XOmuT3dWIAI4qGhakrH2keO2rNvwiMlsC7Wf%2FQELCFUUQfzOUF2QKmmeyayY8RP7RhPzOYArEuJiHTqs7h49DcpaxwVrf7DPAA8%2FCd6wwbzUvABUY2IGPuvyX2O1OY6jK2cbrs%2BkfR5kqhl0m4szY1zlBTUymYSYySVQge0LvgzeIyZBab7rESrp%2BpoVsdtXhqeFCQeOoD6TIBfYzk5zs5dbYGotcQ4APTgAm2ny6%2BBbYYoS0fv%2F7FOoWIdex29V4oTwMq8Waw3IaQCIIS4pg5Zy3IUrCplhd37rTIfm0TJO5wUACTLp3nYuxmBX1GhM9MD2MoXM%2B%2BpU2xokVmF4MQkgBGq3XtGTrF%2BkRMIclOntyP7sn%2Bz1jpgHIKscfGCrCtg28YlroBAOGFdRt6xIhm%2FF3MKG8z8kGOqUBl2FQcHE1Cl3QLTeFkyUReebCLx30YTMlh9puhXO%2Bw0f67Dk9ylah0cypbYtq7HslJSrjjxHD1AFR1vkdIfbPYNkHO%2B8BCE5gS4JGE2yJLFmxmZwtiJbxJrNdEcmKDlKpntobw87t7xuePKdDjWWTpDcF4GBqSZMWFJdGY6W1iyGOzuvfxpdtGobAj2kdmoGSMi5yLrcRif3fefi9d9mq8bVnvDIh&X-Amz-Signature=4d69c1028132f556ddbb68900b013ac8a0ed7a317f8d6681f1492d7f38ae09d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
