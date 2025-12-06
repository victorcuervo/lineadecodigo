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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AS6TPH4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGp6dODvQCrg17ZHfLEoUO1XoR5cd6GJYI3bFERETb6JAiEAy3d6oKqAVEue0zZZesXSjqqRljXk7ohYxPIspyIhiBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD9w2xTtZx1Yxy1UcyrcA4NybBN53zNUMyQcYNpo85T0NHI1vS28adQqOmMg8L3dbk%2FQC2ahInE51hKcyexzqUvc5qpfFnyt0c6o3DEZxwdpeAHp01g6jnqVJzn2H9UfwixqrICc%2Bds7BxRjF8uyU2gbhgQ1l7ytAMQC9Zd04s0IIa7KFTuhEXekhCdQ4ieJjoZZ1m%2BIAbtHBpjHygtQYqwC%2FZvsTNZoBg1wixUnlUDU5OXStMSu7cbZT0krp1ckg7OkUa4W6K%2FIdWVfikflM0ijegDc3RRiPRmnjy68X8jAFZ%2FIRNXAJyUFOosibD5VRYY1MV9aqzLxVCzPWRugVhIE%2BK9rk9HRMTdxmJM9ikTbbE10KkWOh%2B7XBQKXpa9UIOxE4Kz7WYqJGeA%2BgwNaiKnzR%2BrP78t%2Fp6XcrXr6MgmY0v3M8WgqHBNaV69DOHlSkkzHWw1FTt61oEmYezwqGeB8Ykymik%2F4%2BFCyfH9ESglq7URz%2B%2FVh3BWwtI%2BgixLmGbyaCJdecsS%2B97XoEMQsFEqpeGcmvp2s7RLVf%2BJCcxqkg%2Bz7bBYB3M2Y3UWW0%2BSa9M4%2F2KaQ8VnlJMqQF4UtzYX%2Fa69OAZZnhixC5lILq2QKBm%2Bu8OMhmozsGuO7uch2BR9LS9Lsb6z9c3U2MNim0MkGOqUBvqUibX84n%2F4I%2BuU6ZpkdauqlqRW8oxHjKReoF%2FFH2YUS1LBR8ESdjElfibGf6rYplZ5ktjm2gaHu6TrGqHY%2FBDeaKu3BQWLmCzWVEGCqG88VAz6eLyhOjzukZ089BrCSaPSsVXRUWcOen2kmL%2F9%2BdVeCR%2FfvG%2F8LX7WVPrSTPKZgwSjuCnc3M0PsVHH%2FK5nhIVCt4dc%2BQLBAs7V9zw4HM%2F6qHZm8&X-Amz-Signature=6f389a10ef720520061f2f1c59dd2e615790f070cc7f06b4347095a46408db4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AS6TPH4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGp6dODvQCrg17ZHfLEoUO1XoR5cd6GJYI3bFERETb6JAiEAy3d6oKqAVEue0zZZesXSjqqRljXk7ohYxPIspyIhiBgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD9w2xTtZx1Yxy1UcyrcA4NybBN53zNUMyQcYNpo85T0NHI1vS28adQqOmMg8L3dbk%2FQC2ahInE51hKcyexzqUvc5qpfFnyt0c6o3DEZxwdpeAHp01g6jnqVJzn2H9UfwixqrICc%2Bds7BxRjF8uyU2gbhgQ1l7ytAMQC9Zd04s0IIa7KFTuhEXekhCdQ4ieJjoZZ1m%2BIAbtHBpjHygtQYqwC%2FZvsTNZoBg1wixUnlUDU5OXStMSu7cbZT0krp1ckg7OkUa4W6K%2FIdWVfikflM0ijegDc3RRiPRmnjy68X8jAFZ%2FIRNXAJyUFOosibD5VRYY1MV9aqzLxVCzPWRugVhIE%2BK9rk9HRMTdxmJM9ikTbbE10KkWOh%2B7XBQKXpa9UIOxE4Kz7WYqJGeA%2BgwNaiKnzR%2BrP78t%2Fp6XcrXr6MgmY0v3M8WgqHBNaV69DOHlSkkzHWw1FTt61oEmYezwqGeB8Ykymik%2F4%2BFCyfH9ESglq7URz%2B%2FVh3BWwtI%2BgixLmGbyaCJdecsS%2B97XoEMQsFEqpeGcmvp2s7RLVf%2BJCcxqkg%2Bz7bBYB3M2Y3UWW0%2BSa9M4%2F2KaQ8VnlJMqQF4UtzYX%2Fa69OAZZnhixC5lILq2QKBm%2Bu8OMhmozsGuO7uch2BR9LS9Lsb6z9c3U2MNim0MkGOqUBvqUibX84n%2F4I%2BuU6ZpkdauqlqRW8oxHjKReoF%2FFH2YUS1LBR8ESdjElfibGf6rYplZ5ktjm2gaHu6TrGqHY%2FBDeaKu3BQWLmCzWVEGCqG88VAz6eLyhOjzukZ089BrCSaPSsVXRUWcOen2kmL%2F9%2BdVeCR%2FfvG%2F8LX7WVPrSTPKZgwSjuCnc3M0PsVHH%2FK5nhIVCt4dc%2BQLBAs7V9zw4HM%2F6qHZm8&X-Amz-Signature=c82d717774c7fea17ef8c49826d58b799dcf6b408eb1af4afc6d59639fe45960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
