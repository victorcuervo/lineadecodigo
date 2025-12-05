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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VIUKGZK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpMcPElSh2Zx41D0y%2FAPqwsoIL1URAszOfBxVEVm4S5AiEAn5NnScoxfVzoQj8eWv1k9sDqRxwNk5ZjpIbizXhp%2F8Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKGtoZUfo1lVSnn9gircA9j7qHRZ0laqjfmfgR4nzlkQQPc73ObrjtNNvy3QulyMUg76JH9f2fSqF1GZhbuas%2BYOueZ1GOTqlJH%2BMXFF5POCL7knlSD68hi%2BqsSTq8J4GCvHb66a2IN%2FDz4KlDE9buTlQnWIds3IyiszrhX%2BqAlSONNEjtqcbU7mw3yKvcUqwC0eZHcCYoMju1vw8c8HXJlAGyPr9FjLTlB%2FJW%2BnBciatGgLFutKzB1htvl%2BPZYLLbjAifxFMaXDCRCAXkCwt4fecxHOiXKElh3Rv1bSUowKUxCbeZ8M%2Bu16pIXXycpJp5k%2F%2BNTbPteth0xfUv32AUdFNN60z907a2JB25R%2F9eDkECwibmzvTwOuHL2D9MU%2B%2FMi5BsCjqFYwtfKsSlTFwrSYj4SnRVCKgOZE2YdqTMnbxVr7RbZvop3ihTsijyuy0ttfVZGfn6DJQLR8E%2FOmS%2BIcXiNmDOG6dbYpeamr%2BuhPp%2FKiWaQPb9NkjRnZ%2F%2FS%2FKGVSfMsovwBhIhJEQlVcXgecZsXsUw3RuBLPP%2B%2FI9vk0TAHn1sspV9Bv7IE3iYQumYiHgdXmMrthP0Ogz5HWskFKP37cqJK7eAnpPjjXOua3NDByI%2BkMOFuD7UjoD6lMZLySEzOZaLC2DOFJMJOLzckGOqUBFoJSXLWzOtmZkGVEprX6q%2FRce4qshqPhnZU6x4BhJGa7L60W16H1z5%2BEzAqI6gZchjAn7ZBjUdKfigx9%2FkVnH%2Fy5GAfnPayQGmsTRe4fQWghQovDTsEuDvIBkcr5FkxTUou0t7MHUEp6dY6YiMdSmsSo%2BJ1jN78CcQSOAG5uBnRPXDKGQenk1n0y579qrtDY0i9tbeD1gDr9ZWT6KixccIb%2BCfRC&X-Amz-Signature=3a949f06eb84c58b7b7caa6eed50e93e913120a6ebceca64a3cf72c7e4de6d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VIUKGZK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpMcPElSh2Zx41D0y%2FAPqwsoIL1URAszOfBxVEVm4S5AiEAn5NnScoxfVzoQj8eWv1k9sDqRxwNk5ZjpIbizXhp%2F8Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKGtoZUfo1lVSnn9gircA9j7qHRZ0laqjfmfgR4nzlkQQPc73ObrjtNNvy3QulyMUg76JH9f2fSqF1GZhbuas%2BYOueZ1GOTqlJH%2BMXFF5POCL7knlSD68hi%2BqsSTq8J4GCvHb66a2IN%2FDz4KlDE9buTlQnWIds3IyiszrhX%2BqAlSONNEjtqcbU7mw3yKvcUqwC0eZHcCYoMju1vw8c8HXJlAGyPr9FjLTlB%2FJW%2BnBciatGgLFutKzB1htvl%2BPZYLLbjAifxFMaXDCRCAXkCwt4fecxHOiXKElh3Rv1bSUowKUxCbeZ8M%2Bu16pIXXycpJp5k%2F%2BNTbPteth0xfUv32AUdFNN60z907a2JB25R%2F9eDkECwibmzvTwOuHL2D9MU%2B%2FMi5BsCjqFYwtfKsSlTFwrSYj4SnRVCKgOZE2YdqTMnbxVr7RbZvop3ihTsijyuy0ttfVZGfn6DJQLR8E%2FOmS%2BIcXiNmDOG6dbYpeamr%2BuhPp%2FKiWaQPb9NkjRnZ%2F%2FS%2FKGVSfMsovwBhIhJEQlVcXgecZsXsUw3RuBLPP%2B%2FI9vk0TAHn1sspV9Bv7IE3iYQumYiHgdXmMrthP0Ogz5HWskFKP37cqJK7eAnpPjjXOua3NDByI%2BkMOFuD7UjoD6lMZLySEzOZaLC2DOFJMJOLzckGOqUBFoJSXLWzOtmZkGVEprX6q%2FRce4qshqPhnZU6x4BhJGa7L60W16H1z5%2BEzAqI6gZchjAn7ZBjUdKfigx9%2FkVnH%2Fy5GAfnPayQGmsTRe4fQWghQovDTsEuDvIBkcr5FkxTUou0t7MHUEp6dY6YiMdSmsSo%2BJ1jN78CcQSOAG5uBnRPXDKGQenk1n0y579qrtDY0i9tbeD1gDr9ZWT6KixccIb%2BCfRC&X-Amz-Signature=d5f8fecc762695b239c136422c7dd97d12fed9273d2442bd6d72b8afc4d89938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
