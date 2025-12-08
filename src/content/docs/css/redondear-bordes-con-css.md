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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR47TPU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsSbwD4I3TsFeBgQcZFnOgYJwCQdf84hJyfFAHhq7cXQIhAKTwdJalYKuaZbA22Qds5HpPxM%2Bc1O8w7907ve4ROszKKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLEVkf1oOX5lsf7Ukq3AP4A3zeyhb7nyqjdpsIp%2FGa2LqlOi35joDyE46Mzx52qZnAvdk5et%2B4%2FPoHrbco7dVtMwCO%2BzBIWwtzSImBtjO0vOGbTGVx1WpuKyCQtF4crLY5GdFCQuHoHMevjwrXCevmTTNMnLwGE7gpq9x0JRubeToz84hN1VfsA4pmSOfBAWJHowVBRRrQOY%2FPISqPxDqAD5cTo3W%2BtW4l8CgYMp1ptxVmBo4xOWZyeX055CV2RoJsrYnGDWAvk6I%2Bkd3vZARoTt56jf86XfDX5VfYpkPtHZ7aoeB5YenlDGQ8RsPN89IBOCXaaw9losQuhns6WoFxcPKR9kcKBupt%2FSp2g4XnqNV9FYwnbcVRwJdbpiM4QKIaA0YY%2FnZF2oLkfRy8AbICbMvcmE0GTAXvxBxGh3RZWOL4ue%2FJrZ82hREO0cZ6UR3W8lqOZLvp9dS7NbJg%2Fy3wQGDICvBDIqObA8gWLG%2B80GR9up2Cb2EO2L%2B2cRwmfIK3W9JDICaWdBofppBnXze%2FGuDvE33IpXq%2BCtD8w5aVTJlfIvp%2BflxB1EVBoQnEUUt2IgoMwUYGGrqNEaLQGUnR%2B%2BHktvF7vUGUp1ym9tpaOzqNAvZP%2Fcs7xPpJTFo1tdmIZZhYcaKFEia7FDC1s9zJBjqkAS3tZGVXU%2FoCIDxZvWdFX9L%2FnzJTCpfwQBnTqn9Mf3ZvD6uJ32YE0b0LmF37CVaJUqSJnqV41GDqPuei%2FaZmfRLMVzsAfV4y0WWkAdRMHb0Tk4qTl9CUBRQpxpwz%2B2o13pSQx%2BrxEx6b%2BRuwtJ1rgHsyWa0wGCCtjZ3Nm8U6rZIuYzT9%2BKGdY1vvWwy0%2BsW9jDVvwUWxJ2tNz4%2BpKbPBE7QiS5i2&X-Amz-Signature=b483ce0868e5246ce6a2ac51364da3611ecd0d94c3810a399fa7c51d61a100c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFR47TPU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsSbwD4I3TsFeBgQcZFnOgYJwCQdf84hJyfFAHhq7cXQIhAKTwdJalYKuaZbA22Qds5HpPxM%2Bc1O8w7907ve4ROszKKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLEVkf1oOX5lsf7Ukq3AP4A3zeyhb7nyqjdpsIp%2FGa2LqlOi35joDyE46Mzx52qZnAvdk5et%2B4%2FPoHrbco7dVtMwCO%2BzBIWwtzSImBtjO0vOGbTGVx1WpuKyCQtF4crLY5GdFCQuHoHMevjwrXCevmTTNMnLwGE7gpq9x0JRubeToz84hN1VfsA4pmSOfBAWJHowVBRRrQOY%2FPISqPxDqAD5cTo3W%2BtW4l8CgYMp1ptxVmBo4xOWZyeX055CV2RoJsrYnGDWAvk6I%2Bkd3vZARoTt56jf86XfDX5VfYpkPtHZ7aoeB5YenlDGQ8RsPN89IBOCXaaw9losQuhns6WoFxcPKR9kcKBupt%2FSp2g4XnqNV9FYwnbcVRwJdbpiM4QKIaA0YY%2FnZF2oLkfRy8AbICbMvcmE0GTAXvxBxGh3RZWOL4ue%2FJrZ82hREO0cZ6UR3W8lqOZLvp9dS7NbJg%2Fy3wQGDICvBDIqObA8gWLG%2B80GR9up2Cb2EO2L%2B2cRwmfIK3W9JDICaWdBofppBnXze%2FGuDvE33IpXq%2BCtD8w5aVTJlfIvp%2BflxB1EVBoQnEUUt2IgoMwUYGGrqNEaLQGUnR%2B%2BHktvF7vUGUp1ym9tpaOzqNAvZP%2Fcs7xPpJTFo1tdmIZZhYcaKFEia7FDC1s9zJBjqkAS3tZGVXU%2FoCIDxZvWdFX9L%2FnzJTCpfwQBnTqn9Mf3ZvD6uJ32YE0b0LmF37CVaJUqSJnqV41GDqPuei%2FaZmfRLMVzsAfV4y0WWkAdRMHb0Tk4qTl9CUBRQpxpwz%2B2o13pSQx%2BrxEx6b%2BRuwtJ1rgHsyWa0wGCCtjZ3Nm8U6rZIuYzT9%2BKGdY1vvWwy0%2BsW9jDVvwUWxJ2tNz4%2BpKbPBE7QiS5i2&X-Amz-Signature=dbc4d58f368bd09fbaee3c1a607677ade1d26ffec759182e747049b7dff33cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
