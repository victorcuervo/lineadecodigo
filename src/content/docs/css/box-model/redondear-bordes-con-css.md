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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYVVRDM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWWwehSFb9PN%2B7ljyyAsBegLSahM55WfABWkjBEckMJwIhAMDxnn8D9mn3zWY%2Bvuqj0iL4VEkDuks35mpYcOQPi0BDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtgbolb29h1iYFfFcq3ANrFM0%2F5uQ79wODbbe3%2BXCnufNS5J4oMLfPN8az%2F%2FHAzIzSLCtZBtbEZVeWV1C1%2FrvOI%2FjR2CZPVpwMcq1OJBmQC1xdl6o%2B7Majyk2DD48dmySaQlpvafK3weTEqaHPjPhm6uusQSQkjFu%2FllWP6XSJTWnqFPF5UEKkexWv9adq9kj9%2F30vseXV1nfVt5g%2BKTzzdzY9XsNyTTBj52CJdkHdPAWfvZi%2FXV7dP1wWvNOjCrl6Sg7TUT67zhcepgGsRrQOLTVvf48Vdrf65TZcchMY2Hfo%2B%2FslKg1iXQ%2FSQL77w0n%2FSlq%2FKPxGRT5aXFC1azsPcJub4r%2FmrqopwaD0igAOXaoCNiaJIZpnoWzzDNNDx5uEXpJrju6X56GwjwWcZ4gW4gdv9CzClIo00TXe%2B3QSDKh0All188VTTjYfx9BTmpltQ%2F55UsBduuq%2FQu99jukhlkc3YctoM4eFWAxaciYPh53KB3ff1AXMpZ%2Bu6RShk1Q1nDI4JjReb36wT5CWZvVWM7lA3uU8u66LObiWE4F5oCiXdhjpWX8IpF5iqSjSMcN%2BGhkD6F7Fb1QSA0BbisQVGeN66K%2B5%2FiVECEDKmuK20hY71Bh%2BfA3R9kaD8eBuO%2BNNwPsenKddSJr4RDDOnovKBjqkAUjdBqj9DVgPMTM%2BosVv5cRmw06ACtMDwVavzVf936mU5W%2BQBQ5S0FFuiLCuVo%2Fs8sgm3D6dWRYSPyZm%2FkXv3w20IOw92E8ODPPMWV6GgV%2BcskR%2Bpwauol9CAyar7nsiFu1cEdfv%2FzZOH6V0elX6ZUAbcyZf7oit1iW2mYtFbksXZS%2Bazm5kb3ctHUXxhbeaoa6Zm5dxu4%2B17ZHtCHj1uRH46yT4&X-Amz-Signature=660abf6cb902723108d2ed9bc53380e2a03a7887c549a5374381aa4247c941e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYVVRDM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWWwehSFb9PN%2B7ljyyAsBegLSahM55WfABWkjBEckMJwIhAMDxnn8D9mn3zWY%2Bvuqj0iL4VEkDuks35mpYcOQPi0BDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtgbolb29h1iYFfFcq3ANrFM0%2F5uQ79wODbbe3%2BXCnufNS5J4oMLfPN8az%2F%2FHAzIzSLCtZBtbEZVeWV1C1%2FrvOI%2FjR2CZPVpwMcq1OJBmQC1xdl6o%2B7Majyk2DD48dmySaQlpvafK3weTEqaHPjPhm6uusQSQkjFu%2FllWP6XSJTWnqFPF5UEKkexWv9adq9kj9%2F30vseXV1nfVt5g%2BKTzzdzY9XsNyTTBj52CJdkHdPAWfvZi%2FXV7dP1wWvNOjCrl6Sg7TUT67zhcepgGsRrQOLTVvf48Vdrf65TZcchMY2Hfo%2B%2FslKg1iXQ%2FSQL77w0n%2FSlq%2FKPxGRT5aXFC1azsPcJub4r%2FmrqopwaD0igAOXaoCNiaJIZpnoWzzDNNDx5uEXpJrju6X56GwjwWcZ4gW4gdv9CzClIo00TXe%2B3QSDKh0All188VTTjYfx9BTmpltQ%2F55UsBduuq%2FQu99jukhlkc3YctoM4eFWAxaciYPh53KB3ff1AXMpZ%2Bu6RShk1Q1nDI4JjReb36wT5CWZvVWM7lA3uU8u66LObiWE4F5oCiXdhjpWX8IpF5iqSjSMcN%2BGhkD6F7Fb1QSA0BbisQVGeN66K%2B5%2FiVECEDKmuK20hY71Bh%2BfA3R9kaD8eBuO%2BNNwPsenKddSJr4RDDOnovKBjqkAUjdBqj9DVgPMTM%2BosVv5cRmw06ACtMDwVavzVf936mU5W%2BQBQ5S0FFuiLCuVo%2Fs8sgm3D6dWRYSPyZm%2FkXv3w20IOw92E8ODPPMWV6GgV%2BcskR%2Bpwauol9CAyar7nsiFu1cEdfv%2FzZOH6V0elX6ZUAbcyZf7oit1iW2mYtFbksXZS%2Bazm5kb3ctHUXxhbeaoa6Zm5dxu4%2B17ZHtCHj1uRH46yT4&X-Amz-Signature=17c00f035770acbf82a0f8b3ca3ee633525f7879a4345c5f3275c5e4669b7f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
