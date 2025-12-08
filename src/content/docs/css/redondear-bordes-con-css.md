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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLINPZUQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDplw8EoKKhQhBJpyy54HuNDYzZbvMRg4RHmQetGfL69QIhAK6PyZMBvgOUK%2Fa6eOm6cnYnDuqbYImiWeFbwnxTrrk9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9cGnFlNFEDlWPcpIq3AOc583spNMrrzM7qwLK9qIWgPBfU%2FBNwKhNIEXQLOLV0xWiH7nQ%2BkbQwoa9TuD%2FkmiWBS3MXFsxFgyEivhAKm7rNmKhJ3kxRLWjJoE6LNRVcewgywNkFBih4S%2B2%2FzvkoYyDlpTIeO6WLPKkdd4%2BqcxjOPZBDMRJfzyPw7bFolMox85dK4weOe7azAb5rP%2FeLXyDF%2B3WtVWkePtIJ0Xunmc8hc7NzrYXMX99CyDSLba1aPvszFJqZ1BVrrnjbKQNoNRGmuvbuGLFYTv0rK8JoqCU1VnYgzr7cKKCPYgA8Y7bcc33pFH%2Fq9yD%2FlAf3dQJLbCVOd638twz8pCagUcskdaeeAajBGBo8Wwo8vvuCcoNXGfZFBuM%2Fv0opiKCepUNXloMBmBC66LcXxZH429iAqci0nZVY362GQCXIXbuVmHOy5WfN9lTiMkY4V%2B52nFMIJBkfcn9KuXBR7adpAt6G9B%2BxkwFH694JUgAmuWq%2BWCB%2FL5L%2F%2FjtUVmRRp%2FYtUpDYPJFRBBdi33VxPtypU%2BKCgBKK3AHN%2B%2BiV0rh6zzYdTWVGM9m8hLYV96XX%2BK90QrvI0agwYQkehmwWW%2B%2B6q8Bk%2BvTbn5Amb%2Bfivyvu9UtuqxkUOdVbST6AIuk5LQItjD67dnJBjqkARTe8Jb7d1Rb5wmZ%2B85z3BDIxYzzQdD%2BNvHZ78Ax6qBrJZA998l1oVFo%2BN%2FMOB7v3bzc9eleoXjFMC1fzFJz%2Fxc1AIIg8dWoCwHrThzkOx7HHFiD%2BrkNxXIdjbTjsAyRoPADlh7hPFtT3v3L2RRgOA9rY%2F6%2BrjAFHNcGhDhZSUGvxbs23msKJZIZk%2BMmFOIWI4eGKIUhqw69oF7SjKFfIlWFKA10&X-Amz-Signature=861f60fc957875489e3276035f1aae6b8becd5039626141cb348cf548bbdaa8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLINPZUQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDplw8EoKKhQhBJpyy54HuNDYzZbvMRg4RHmQetGfL69QIhAK6PyZMBvgOUK%2Fa6eOm6cnYnDuqbYImiWeFbwnxTrrk9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9cGnFlNFEDlWPcpIq3AOc583spNMrrzM7qwLK9qIWgPBfU%2FBNwKhNIEXQLOLV0xWiH7nQ%2BkbQwoa9TuD%2FkmiWBS3MXFsxFgyEivhAKm7rNmKhJ3kxRLWjJoE6LNRVcewgywNkFBih4S%2B2%2FzvkoYyDlpTIeO6WLPKkdd4%2BqcxjOPZBDMRJfzyPw7bFolMox85dK4weOe7azAb5rP%2FeLXyDF%2B3WtVWkePtIJ0Xunmc8hc7NzrYXMX99CyDSLba1aPvszFJqZ1BVrrnjbKQNoNRGmuvbuGLFYTv0rK8JoqCU1VnYgzr7cKKCPYgA8Y7bcc33pFH%2Fq9yD%2FlAf3dQJLbCVOd638twz8pCagUcskdaeeAajBGBo8Wwo8vvuCcoNXGfZFBuM%2Fv0opiKCepUNXloMBmBC66LcXxZH429iAqci0nZVY362GQCXIXbuVmHOy5WfN9lTiMkY4V%2B52nFMIJBkfcn9KuXBR7adpAt6G9B%2BxkwFH694JUgAmuWq%2BWCB%2FL5L%2F%2FjtUVmRRp%2FYtUpDYPJFRBBdi33VxPtypU%2BKCgBKK3AHN%2B%2BiV0rh6zzYdTWVGM9m8hLYV96XX%2BK90QrvI0agwYQkehmwWW%2B%2B6q8Bk%2BvTbn5Amb%2Bfivyvu9UtuqxkUOdVbST6AIuk5LQItjD67dnJBjqkARTe8Jb7d1Rb5wmZ%2B85z3BDIxYzzQdD%2BNvHZ78Ax6qBrJZA998l1oVFo%2BN%2FMOB7v3bzc9eleoXjFMC1fzFJz%2Fxc1AIIg8dWoCwHrThzkOx7HHFiD%2BrkNxXIdjbTjsAyRoPADlh7hPFtT3v3L2RRgOA9rY%2F6%2BrjAFHNcGhDhZSUGvxbs23msKJZIZk%2BMmFOIWI4eGKIUhqw69oF7SjKFfIlWFKA10&X-Amz-Signature=ec90420bd8163895a17885e77bdf4c7984880103e8c9fa55c9a77c9c801e624b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
