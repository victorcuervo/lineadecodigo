---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPV2HI3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCQpMid%2FUTEBiUqHOIPNXyHduiT9B2dt%2BRHXWNtu6z4jAIgUnrHxsb7f6dHJBZHjeMxLWLKEjS%2BvCAhNC%2FEDcJbINwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIACq0xkFcycmP4khCrcA5XT24cxYtrAnx8aiTfB6zWeIS38xxnjrql73ckBax7iGPZgKMuAYGZH5xNniFtreJgGpVpQfxGdw4g2D%2BK4Of8D88f%2BtRrV6u1PiogspffGxIUkuOuOQ%2Fuv1wffBwfhUdRxbevlGdKakVi%2FwImR9BXAvVfuZU4lCsUZ9aBKZZL8siBo3uWlkvCNSMSyokXRBFIMb9RtUo%2BPyRwAr8zhs9aKpuq1J45Y8On36FckgGpXw0DrsQ5EBQt652tIfWxuBZBqW2hsEDWq4W838wfmOOEv6zJK6vNx61F9%2FC3K5%2BXhfDdl6nEGo%2BPxkDLmLFmwISeOTH8lZh0WwfvfS85EnlNHxhG5YsiXJclG%2FGktpQlyHdrX%2BU21v6sa4T%2Bewg%2BwulN%2BN5g7khF%2FAp509Pfzp69YLKmfzNHZKu8Yv7V4CMnTsiuRI6n21WYhlMjIOOgROxEGJxX4uhLKNKO600cR3UUwUQI8yS6aLYxdEIExXcCVJMJ8AhIPHCnf7ke%2F9%2FngRAr1gOeiOrUpa%2Buzlz1guyTLeD%2F7nAKIbS9DfOHmrPozbe4OCPeXiOvALFqNWXMbQ5AZnEB0Rk%2BR1cnHkq%2F721gAhAjzFuTqHQCCDyQ%2BX1UIy5MlIn43LK55qdaEMImQxMkGOqUBKBKtQP1mxTz9PjXYLyHBVcu2M9%2FnCJV4po%2Fp%2FNtNltM5ie79zqkAfgMkZ%2B5EYfA%2BrepCLxecYeIAzfStWBep8QqJVJJ%2BbiXbMoCn4F3umUJen3p0SyA%2BoNMbD3zApMxoz%2BHn0q8RKTNRrDycQxUpt%2F0DSbt1hye2apM%2FxoF0lxK3esIkfjyOWGcQU1g3B9VabeAhGkHBcGizjPJIY6juWEish90M&X-Amz-Signature=c93ddc621b950040f81d44e4dfa19a6268041de59c5f0fcbbd678f6fc6bb4ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPV2HI3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCQpMid%2FUTEBiUqHOIPNXyHduiT9B2dt%2BRHXWNtu6z4jAIgUnrHxsb7f6dHJBZHjeMxLWLKEjS%2BvCAhNC%2FEDcJbINwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIACq0xkFcycmP4khCrcA5XT24cxYtrAnx8aiTfB6zWeIS38xxnjrql73ckBax7iGPZgKMuAYGZH5xNniFtreJgGpVpQfxGdw4g2D%2BK4Of8D88f%2BtRrV6u1PiogspffGxIUkuOuOQ%2Fuv1wffBwfhUdRxbevlGdKakVi%2FwImR9BXAvVfuZU4lCsUZ9aBKZZL8siBo3uWlkvCNSMSyokXRBFIMb9RtUo%2BPyRwAr8zhs9aKpuq1J45Y8On36FckgGpXw0DrsQ5EBQt652tIfWxuBZBqW2hsEDWq4W838wfmOOEv6zJK6vNx61F9%2FC3K5%2BXhfDdl6nEGo%2BPxkDLmLFmwISeOTH8lZh0WwfvfS85EnlNHxhG5YsiXJclG%2FGktpQlyHdrX%2BU21v6sa4T%2Bewg%2BwulN%2BN5g7khF%2FAp509Pfzp69YLKmfzNHZKu8Yv7V4CMnTsiuRI6n21WYhlMjIOOgROxEGJxX4uhLKNKO600cR3UUwUQI8yS6aLYxdEIExXcCVJMJ8AhIPHCnf7ke%2F9%2FngRAr1gOeiOrUpa%2Buzlz1guyTLeD%2F7nAKIbS9DfOHmrPozbe4OCPeXiOvALFqNWXMbQ5AZnEB0Rk%2BR1cnHkq%2F721gAhAjzFuTqHQCCDyQ%2BX1UIy5MlIn43LK55qdaEMImQxMkGOqUBKBKtQP1mxTz9PjXYLyHBVcu2M9%2FnCJV4po%2Fp%2FNtNltM5ie79zqkAfgMkZ%2B5EYfA%2BrepCLxecYeIAzfStWBep8QqJVJJ%2BbiXbMoCn4F3umUJen3p0SyA%2BoNMbD3zApMxoz%2BHn0q8RKTNRrDycQxUpt%2F0DSbt1hye2apM%2FxoF0lxK3esIkfjyOWGcQU1g3B9VabeAhGkHBcGizjPJIY6juWEish90M&X-Amz-Signature=a0dd5f168e2067a14787be6e60ef39db8cfc80966595b4ff263b899194082c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
