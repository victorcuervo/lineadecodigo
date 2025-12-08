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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SX7IUZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHWE8qzTwuVeK8KfFdWupPb3GlxCCP97jKguF5L6ROHQIhAKaewe9sQsvxJZ6oNehZwwhQ8JwCjnifVFxhhxSWsynxKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSVoRcbMp6p4M4TA4q3AP3ZQj3a5E4SUqA%2FaCoXqFY%2FuhAGZyybYVK2wG2orFLJW6zpCYX9xJvYzcQ52n51jwYQBcrm%2FT6n9YXZbsxdTaLCalYAw%2FNCyZ49Zz1CG20IatZKIf59DneYRVEaUHGsBW9poXXZWmU6A7%2F7anEf5H%2BAyBF7aSPy2EPxZHnW%2F4SR9mchadtAOdmal6ouQecYI0iT1OLEtlwY766iDidrC7hZ%2B5z9%2Fi0om0etbMhzNQ6TWEF961jjX5mcyLCQI0gVskvAtuMaDfAba4LcQLUbzFZWMIKFUTM%2Bbq0b8YH0gQduYWUnen1Fi7sA%2FVg0igEabQ00vIqX4q86j03zQwhlaPqJjuBd8%2BsNOcdafhAwizvmVSpDC79KOO84Gtw%2F881ESf%2B8WFvbGYcfnkHCDLBaUVfLSPohPOIfRNPIQkqcWA6zkvQCaQwviyy5zUESeV7tcsb6cdU2Q1eGUiUHXyLhty5v%2BXLSJ8aeg0Sn5oJhoBfphdIdmyMI%2F1Q7277CSCXRMXeBDIUdFt8fXbBKY3C8hr3sqDUoHvSH%2BzOA4xk3vyOgDHXWrgs%2Fx4AE7HNYeIRpdNkmKfRRv4VxQMJ5dc7ogcoqFDqXT%2BqdEwjiVDNW%2Bhxdc9uNUsGFGxXl1B5izDJ7tnJBjqkAfVNSh%2BgNIJB6gDTxZtDLu599Ot5OtbBN5ut6lQaf%2FvigA7xpcdTeAgx%2FyAMOOQMtVMa4xHvIRvXU2PECAtj0%2FKz1jx2I4qfoh0YHjp%2B2FsapF2waSo8pvkS5vWXTp9w4mvZFze%2B5raV6eODswU8Zyh%2B%2BLhHgMxUVaFekXngay37BcfJ%2BbKoogQheoSTQKiWnXSrAIXoTxFr944HO1J7mtJGE7m6&X-Amz-Signature=38dbecf40b318f05a74924c733d2565f24f1b56d20117c85c0ee69ef57a136c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SX7IUZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHWE8qzTwuVeK8KfFdWupPb3GlxCCP97jKguF5L6ROHQIhAKaewe9sQsvxJZ6oNehZwwhQ8JwCjnifVFxhhxSWsynxKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSVoRcbMp6p4M4TA4q3AP3ZQj3a5E4SUqA%2FaCoXqFY%2FuhAGZyybYVK2wG2orFLJW6zpCYX9xJvYzcQ52n51jwYQBcrm%2FT6n9YXZbsxdTaLCalYAw%2FNCyZ49Zz1CG20IatZKIf59DneYRVEaUHGsBW9poXXZWmU6A7%2F7anEf5H%2BAyBF7aSPy2EPxZHnW%2F4SR9mchadtAOdmal6ouQecYI0iT1OLEtlwY766iDidrC7hZ%2B5z9%2Fi0om0etbMhzNQ6TWEF961jjX5mcyLCQI0gVskvAtuMaDfAba4LcQLUbzFZWMIKFUTM%2Bbq0b8YH0gQduYWUnen1Fi7sA%2FVg0igEabQ00vIqX4q86j03zQwhlaPqJjuBd8%2BsNOcdafhAwizvmVSpDC79KOO84Gtw%2F881ESf%2B8WFvbGYcfnkHCDLBaUVfLSPohPOIfRNPIQkqcWA6zkvQCaQwviyy5zUESeV7tcsb6cdU2Q1eGUiUHXyLhty5v%2BXLSJ8aeg0Sn5oJhoBfphdIdmyMI%2F1Q7277CSCXRMXeBDIUdFt8fXbBKY3C8hr3sqDUoHvSH%2BzOA4xk3vyOgDHXWrgs%2Fx4AE7HNYeIRpdNkmKfRRv4VxQMJ5dc7ogcoqFDqXT%2BqdEwjiVDNW%2Bhxdc9uNUsGFGxXl1B5izDJ7tnJBjqkAfVNSh%2BgNIJB6gDTxZtDLu599Ot5OtbBN5ut6lQaf%2FvigA7xpcdTeAgx%2FyAMOOQMtVMa4xHvIRvXU2PECAtj0%2FKz1jx2I4qfoh0YHjp%2B2FsapF2waSo8pvkS5vWXTp9w4mvZFze%2B5raV6eODswU8Zyh%2B%2BLhHgMxUVaFekXngay37BcfJ%2BbKoogQheoSTQKiWnXSrAIXoTxFr944HO1J7mtJGE7m6&X-Amz-Signature=c46efbaaca0dca7c07aa53aea1ed0ca53ecfcc7ce0c748a3ffc76e6c074943c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
