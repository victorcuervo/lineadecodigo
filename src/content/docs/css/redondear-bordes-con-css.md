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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3QQAEQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6GNWsDiCiYp2WlDmntFo0ZVIurorFkF2YFQwqsMseAIgZUWdziSkwEUSemr84kEYtU82EzB6JP%2FtP1vlNEJRsyYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxo130NiD%2B%2FCY64HSrcA9GaekyhUshiVmAf2SwR%2FPF2uuGLiCKGcLLEZlgAWoSfbdoxaWE%2B5qO7MZSeM5rzblgCqi1w7BV1yGg3DgYpUENdd8I8ncZ1%2FVs6gJFUblkokQCfzkKCwT3qsx%2Bx4FLL5oKhKb%2BMJoObXgB7krO9Daug20WjYIrBLP%2FJI%2BV%2FyC0EsPcEeQPXkmOZVeHyfIYkcC6PfI2ozUbeZLXjdIZkgG8e4nR3E9gIlnk9%2Fj%2FoEXE0%2FtSUJ1JgFnSySssXyb0BC9h8IRcQ0fAeOWpXC3D%2BCC7SEhPG1hP%2FI%2F5dimVL%2BtDrjlNZJwC3GmSgvpQSWepSX0G8B0snBGeDoLbnVjiG5UisFa4TWQr25Tm91S9XXXU%2Fx2qRhuxpsC49rgUMrMzeeq990LKMEDOXEpmlU%2BYu7JQc2Ic33hJQ5CS5HjcC3qhsnD9FMpPmlEU9c0NIMruxYC7bC3JsT8nKhtyn%2B%2FKMmxunAUi5fNnfA7NsoUgFRd6H8WkyOfLb7c9m7BSTdFgCtzabXlC%2Fi4U7983IxOGrByCbtD5I4tYhUPImQk1LOkeOLUoCyzy1bdPVM5ALaYq1MpuTAKAgOA6dp8s7k5xi1751cO4j600ycgjcGiIqDYMW4E0Aj2YnNSjlDPvCMM6h2MkGOqUBahmBMxpcZH9mNLc%2Fuk4g1fxPSN16VoDl6rKjYy%2Bd8XtdE8x1eoBE0JyqJlEk2f2MM54q3q8M3ngcPrFJ3vFatOEQY3BhQWc0oXxjA0%2BaM2003KEyvp10sSO0thYVG%2BFHzKNszz6okRB9XZzDcBgdTZjLCEO8u0avQ1TVHjASMWbwQOqH1b2gJmfWsHJM3fujDQES9NrKX8maBhwZ67uqUkTzgc4N&X-Amz-Signature=883712ecf3ccaa1a445f841083acd5840c9a74c6c025189ecb574b2ae7d8cc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3QQAEQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6GNWsDiCiYp2WlDmntFo0ZVIurorFkF2YFQwqsMseAIgZUWdziSkwEUSemr84kEYtU82EzB6JP%2FtP1vlNEJRsyYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxo130NiD%2B%2FCY64HSrcA9GaekyhUshiVmAf2SwR%2FPF2uuGLiCKGcLLEZlgAWoSfbdoxaWE%2B5qO7MZSeM5rzblgCqi1w7BV1yGg3DgYpUENdd8I8ncZ1%2FVs6gJFUblkokQCfzkKCwT3qsx%2Bx4FLL5oKhKb%2BMJoObXgB7krO9Daug20WjYIrBLP%2FJI%2BV%2FyC0EsPcEeQPXkmOZVeHyfIYkcC6PfI2ozUbeZLXjdIZkgG8e4nR3E9gIlnk9%2Fj%2FoEXE0%2FtSUJ1JgFnSySssXyb0BC9h8IRcQ0fAeOWpXC3D%2BCC7SEhPG1hP%2FI%2F5dimVL%2BtDrjlNZJwC3GmSgvpQSWepSX0G8B0snBGeDoLbnVjiG5UisFa4TWQr25Tm91S9XXXU%2Fx2qRhuxpsC49rgUMrMzeeq990LKMEDOXEpmlU%2BYu7JQc2Ic33hJQ5CS5HjcC3qhsnD9FMpPmlEU9c0NIMruxYC7bC3JsT8nKhtyn%2B%2FKMmxunAUi5fNnfA7NsoUgFRd6H8WkyOfLb7c9m7BSTdFgCtzabXlC%2Fi4U7983IxOGrByCbtD5I4tYhUPImQk1LOkeOLUoCyzy1bdPVM5ALaYq1MpuTAKAgOA6dp8s7k5xi1751cO4j600ycgjcGiIqDYMW4E0Aj2YnNSjlDPvCMM6h2MkGOqUBahmBMxpcZH9mNLc%2Fuk4g1fxPSN16VoDl6rKjYy%2Bd8XtdE8x1eoBE0JyqJlEk2f2MM54q3q8M3ngcPrFJ3vFatOEQY3BhQWc0oXxjA0%2BaM2003KEyvp10sSO0thYVG%2BFHzKNszz6okRB9XZzDcBgdTZjLCEO8u0avQ1TVHjASMWbwQOqH1b2gJmfWsHJM3fujDQES9NrKX8maBhwZ67uqUkTzgc4N&X-Amz-Signature=00e0913b43cefb20e3d92fb8e7d259cbf1cc177e923412eb42a2e81472b85cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
