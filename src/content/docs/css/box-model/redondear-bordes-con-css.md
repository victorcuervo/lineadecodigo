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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROEJT36%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zmq3GvvdKx7WfgXYryYdkxv0IeoMVpcGlnxDtWNc4AIgQ9qSpq%2Bpu6UOQ%2BQjA7eQnqrzeGUGGxzNroHC5BkqxE8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNX9uAWKdnh3%2B0Bd4CrcA2Ja%2B5XoAnrP%2Bw57uTOsHiHZsDwbkxyzJqeXftl%2FBkhldKKe6KW%2FyDGQPgsJQvN6bm4mXQyT2zQfak03LrzzT2Moi6f%2B0fx%2Bv0shj%2BcD3knwo4rWD%2F%2B0q1hMaUqmQMcjg7LZsnlxAaV61rd7VQez587lLpRUZAuvsnOYY%2BT5cEQeuPNyLR0QFuT91IEuDX6%2BOfZrA4%2Fn2uGyAvJEX1vp2KUfVRPWTdQUP9806MivHlJT9vRdXiOYTfPn%2FTUlzJy1dGkTHvtSAYM9JLXJIPa6HAyafAOswK%2F0ln3NUdxENSuF6tvRi%2BhJrjV3odD%2BXWqMPPSojqR1yTSLTzjYUwVjswghFahrR1OaMs1PtDfrp0GL%2B%2BqeZCEbUcU47ConIpHRrFBHOp2w5P%2B3BSyqNQ%2BzB%2BM65vNMRxzgaFgHa7CUCJ6b3LMW2zjh0WOADSYeeSbCmlWAwYFoA3Tmv6XeywHpEDKklGKB8WN%2FJVzRu6ve%2F264DB5h09H9C7Jf1N7kial4k8LSB4XNEEu8mOUNYNRtVybw1ojj3cKE833ULHOfqXLZBueJIomlmErqk0R2SBSVOB7W83EqInUQ%2Fnx7jsuV4WVt3rAC7sgCwZ5drylCrMHo6w9ZsBeL4LDkTO0LMM3FisoGOqUBYp3katznSJh1P%2Fa47IoD25UxYJSofPXwbo5u88EfoxPwVjw%2F3%2FMvrra1S%2FiEqmEpJXe59wZhO0RLq0IEPB1VvzB%2BNhL9yKU0FguhqlIhPY8M2aO98fwzLQ23draTfE3GD0h2BmgVMx4hfXdkVc7F12cjz7ogclVqh3tkUiIKQjKhjg9RSIay5WZhmC9otwmBKbCoTnGEjr14AU64VRud1olQTIlI&X-Amz-Signature=abe563a487cf68fa7e8b0778bb88db7e589c16a8a2a6c4ab26dd68a0f18eb1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROEJT36%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zmq3GvvdKx7WfgXYryYdkxv0IeoMVpcGlnxDtWNc4AIgQ9qSpq%2Bpu6UOQ%2BQjA7eQnqrzeGUGGxzNroHC5BkqxE8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNX9uAWKdnh3%2B0Bd4CrcA2Ja%2B5XoAnrP%2Bw57uTOsHiHZsDwbkxyzJqeXftl%2FBkhldKKe6KW%2FyDGQPgsJQvN6bm4mXQyT2zQfak03LrzzT2Moi6f%2B0fx%2Bv0shj%2BcD3knwo4rWD%2F%2B0q1hMaUqmQMcjg7LZsnlxAaV61rd7VQez587lLpRUZAuvsnOYY%2BT5cEQeuPNyLR0QFuT91IEuDX6%2BOfZrA4%2Fn2uGyAvJEX1vp2KUfVRPWTdQUP9806MivHlJT9vRdXiOYTfPn%2FTUlzJy1dGkTHvtSAYM9JLXJIPa6HAyafAOswK%2F0ln3NUdxENSuF6tvRi%2BhJrjV3odD%2BXWqMPPSojqR1yTSLTzjYUwVjswghFahrR1OaMs1PtDfrp0GL%2B%2BqeZCEbUcU47ConIpHRrFBHOp2w5P%2B3BSyqNQ%2BzB%2BM65vNMRxzgaFgHa7CUCJ6b3LMW2zjh0WOADSYeeSbCmlWAwYFoA3Tmv6XeywHpEDKklGKB8WN%2FJVzRu6ve%2F264DB5h09H9C7Jf1N7kial4k8LSB4XNEEu8mOUNYNRtVybw1ojj3cKE833ULHOfqXLZBueJIomlmErqk0R2SBSVOB7W83EqInUQ%2Fnx7jsuV4WVt3rAC7sgCwZ5drylCrMHo6w9ZsBeL4LDkTO0LMM3FisoGOqUBYp3katznSJh1P%2Fa47IoD25UxYJSofPXwbo5u88EfoxPwVjw%2F3%2FMvrra1S%2FiEqmEpJXe59wZhO0RLq0IEPB1VvzB%2BNhL9yKU0FguhqlIhPY8M2aO98fwzLQ23draTfE3GD0h2BmgVMx4hfXdkVc7F12cjz7ogclVqh3tkUiIKQjKhjg9RSIay5WZhmC9otwmBKbCoTnGEjr14AU64VRud1olQTIlI&X-Amz-Signature=d2c4e5aa22a334927713d8ed6b018316b0023883af90a03f9b0c59a148a95204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
