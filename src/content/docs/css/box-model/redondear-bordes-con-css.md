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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXQUSET%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKg9%2F708YKHP%2F5KSl3eh5Cm%2FhbSlW7PtvmrIOw9%2FivFAiEA2C1P%2B1%2FIkNLcjz3T1wdRzl8%2B21s0i9WxvJSZM8bZA9YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsxjMrCHmqJotz%2BircAzTAxcfROBzavOp%2FLrFKBgHga2%2BfTcU0xXFGplBfZ290P8lerA2TAwSWoMxWK1sr8swMpOJm4mnCO%2BC78vGfb3EVfST4XzYTpyMTdQJUarz%2BwFkrBCI2Njw3CmgMjDgTi4vEJ8yEZmOvloK%2FlbnblIyyyHoXfYjoeSP0R0pyFvk08N7GCmuGY8%2B1GmKpjYbcQhHIIqFqI4L%2BcHPDDxpzwpxOrvp%2FgPUUcTUOGNMfAWr4ZmE90nEIf27BeX7RgQopyo5DFdwVnCuQyLeBRN7C%2FddeHGQ%2FeSUfYq%2Bzd92ekKkZ8ROeVCEnFeqzJarnfdc4qNC3pkGMSiJe7sxDdaHRpV84Tei5dNYfW5%2BNRlwM86%2FisNtPH7wUSRuQvnLnqVeeaOq3lyzvqYxnuIwmlcsFsCwsmPKz6BCLZVd2eTRAmYJmlvmM%2FIBCi%2BV%2BwqmgbUdoDnRd2c1dPiNOj2ngH16GVWdJgqGt1dRXKg0VgJyA6GKXnZMOxoKQQ4wYKct%2BXIymMSvLFtbypN%2BsZLd7PHA9Pk1LcYZeK4wd9K2dDZTfGxLocuIHH26cgShcsTBnp2%2BMpAHZKwNXXa9grgcWqhvs7SwJRvtfVzt5%2BtXcpVhH2fY1e17KEuFdWASoaM4GMNOfi8oGOqUBhdYbVRPDy0aKTVXfIyuHsuGmxARgF5w%2FCY4oYSbO3XmyHhjLUXHR5oalCYXVfXFMUobHnNqdO2fKDJbCJ%2FByqVFBlE%2FCKKSKAM1j0%2BvQMb1usQmKhgrVD%2FPp2xQp8Hv%2BKI9zkGDVAFwYFM2Jbsu4NQdwK5Q4cCvA4R7ed7gSihpSj2XyxXC79CPEUAo9wPGPkq5MRCuO0lyEnMKi0L62wYKX2Ydm&X-Amz-Signature=5ab79ddffc81d2bb9194135c7e4ada0a5ed6f649c185c31e914b4f4eba7c640c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXQUSET%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKg9%2F708YKHP%2F5KSl3eh5Cm%2FhbSlW7PtvmrIOw9%2FivFAiEA2C1P%2B1%2FIkNLcjz3T1wdRzl8%2B21s0i9WxvJSZM8bZA9YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsxjMrCHmqJotz%2BircAzTAxcfROBzavOp%2FLrFKBgHga2%2BfTcU0xXFGplBfZ290P8lerA2TAwSWoMxWK1sr8swMpOJm4mnCO%2BC78vGfb3EVfST4XzYTpyMTdQJUarz%2BwFkrBCI2Njw3CmgMjDgTi4vEJ8yEZmOvloK%2FlbnblIyyyHoXfYjoeSP0R0pyFvk08N7GCmuGY8%2B1GmKpjYbcQhHIIqFqI4L%2BcHPDDxpzwpxOrvp%2FgPUUcTUOGNMfAWr4ZmE90nEIf27BeX7RgQopyo5DFdwVnCuQyLeBRN7C%2FddeHGQ%2FeSUfYq%2Bzd92ekKkZ8ROeVCEnFeqzJarnfdc4qNC3pkGMSiJe7sxDdaHRpV84Tei5dNYfW5%2BNRlwM86%2FisNtPH7wUSRuQvnLnqVeeaOq3lyzvqYxnuIwmlcsFsCwsmPKz6BCLZVd2eTRAmYJmlvmM%2FIBCi%2BV%2BwqmgbUdoDnRd2c1dPiNOj2ngH16GVWdJgqGt1dRXKg0VgJyA6GKXnZMOxoKQQ4wYKct%2BXIymMSvLFtbypN%2BsZLd7PHA9Pk1LcYZeK4wd9K2dDZTfGxLocuIHH26cgShcsTBnp2%2BMpAHZKwNXXa9grgcWqhvs7SwJRvtfVzt5%2BtXcpVhH2fY1e17KEuFdWASoaM4GMNOfi8oGOqUBhdYbVRPDy0aKTVXfIyuHsuGmxARgF5w%2FCY4oYSbO3XmyHhjLUXHR5oalCYXVfXFMUobHnNqdO2fKDJbCJ%2FByqVFBlE%2FCKKSKAM1j0%2BvQMb1usQmKhgrVD%2FPp2xQp8Hv%2BKI9zkGDVAFwYFM2Jbsu4NQdwK5Q4cCvA4R7ed7gSihpSj2XyxXC79CPEUAo9wPGPkq5MRCuO0lyEnMKi0L62wYKX2Ydm&X-Amz-Signature=52126e8c86a35463796e3cafdedb7707bfa9315178bbf37877cb4ce81777ca03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
