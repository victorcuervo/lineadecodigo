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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VRDEP6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1%2BrJ02iDRcCNAa0cgqcM3XS469QKzDBvxxrhoxmH0wIhAJaOLOWMSSvTfy%2Fnw6rqP7D%2Bs%2FJ%2BlOOSkZgK56i3OgCVKv8DCHkQABoMNjM3NDIzMTgzODA1IgyWs0djQdk6x6WFu3cq3ANH5cubB%2BUI4ZLyx%2BfEiX3Nq9BiDaTDSmtdjoO3oFacfO5akCvAqbi4koUw0Rlk3T%2F0gbX3igDIMIPsjAKlnQ%2BfY7to%2B%2FBPvUskzU4LlkCHSLrskhljW2kOVVbtNU4I1hL3cVAKQYCNluC%2BvVD8wel7M%2BjDki4J7xkILOF7Fl6V8xSvSx2OT2dgufXecTv5Vqu5maDpscQyXoZPRP0j3EoL7wGJ4sI0qUnlwlpHNq%2Fe1gVehQ4uU82LahBirkWDv1j72fnR2th8y3NGMHLpnhyA1fDkTpIjc2kzHwB5WNm7I%2FRlKORILTZdwSNOthZeumdEOj1yZcIJcHOPpRzNAiCiuuE2WXcJAQKp5L4BE2Xv1zGx5A7dn3yYoqrkl%2BsO50ovdacSFwfHXO%2FLBs9aZLA0jXg38lUFgVP0Jbnvsp%2FTh5SoXO45B%2FhDhEeatMzQng7x3GIz5yPKe9AaN%2BZISNfTFrCOXxjSeyQ4dcrleg6dqqda7Ulxgs%2BY5Wykj6xIxDI0KroQ85AEIrOmmHDyX1YId9Na1%2BkXHo9msVRSqkuPizc3hYFAcZ1iT9nvJdwDmge%2BIGWkK3CF3acTZvkcXoyaqRSVScttbn0ytpt9oIFSXv7QQIQqmc8x0sbPbDCfuInKBjqkAfAwPe4mBLrsZh7MJRwNetOEMIGykOr2eryaeuCOsz05nFHG3iELLlUZPGztlPb3YlJ0%2FekJ55waqMB5fE8qvilhcQ1Mi6MYSYBTlmzZ6GkPuYNipYFiV9jjKUa2cCpRd%2FZZcB8roZaAP2BgfiQaZP3fNJJWcz15dKL%2BufozghP8uTTXQOxCMsfThO1G6pSBKgzKTyeutIFAGuMyDfz0CvS0T0pk&X-Amz-Signature=49c32dd392eb2a9f15e5b711f737f699ffd39437045ea03427334ad029290ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VRDEP6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1%2BrJ02iDRcCNAa0cgqcM3XS469QKzDBvxxrhoxmH0wIhAJaOLOWMSSvTfy%2Fnw6rqP7D%2Bs%2FJ%2BlOOSkZgK56i3OgCVKv8DCHkQABoMNjM3NDIzMTgzODA1IgyWs0djQdk6x6WFu3cq3ANH5cubB%2BUI4ZLyx%2BfEiX3Nq9BiDaTDSmtdjoO3oFacfO5akCvAqbi4koUw0Rlk3T%2F0gbX3igDIMIPsjAKlnQ%2BfY7to%2B%2FBPvUskzU4LlkCHSLrskhljW2kOVVbtNU4I1hL3cVAKQYCNluC%2BvVD8wel7M%2BjDki4J7xkILOF7Fl6V8xSvSx2OT2dgufXecTv5Vqu5maDpscQyXoZPRP0j3EoL7wGJ4sI0qUnlwlpHNq%2Fe1gVehQ4uU82LahBirkWDv1j72fnR2th8y3NGMHLpnhyA1fDkTpIjc2kzHwB5WNm7I%2FRlKORILTZdwSNOthZeumdEOj1yZcIJcHOPpRzNAiCiuuE2WXcJAQKp5L4BE2Xv1zGx5A7dn3yYoqrkl%2BsO50ovdacSFwfHXO%2FLBs9aZLA0jXg38lUFgVP0Jbnvsp%2FTh5SoXO45B%2FhDhEeatMzQng7x3GIz5yPKe9AaN%2BZISNfTFrCOXxjSeyQ4dcrleg6dqqda7Ulxgs%2BY5Wykj6xIxDI0KroQ85AEIrOmmHDyX1YId9Na1%2BkXHo9msVRSqkuPizc3hYFAcZ1iT9nvJdwDmge%2BIGWkK3CF3acTZvkcXoyaqRSVScttbn0ytpt9oIFSXv7QQIQqmc8x0sbPbDCfuInKBjqkAfAwPe4mBLrsZh7MJRwNetOEMIGykOr2eryaeuCOsz05nFHG3iELLlUZPGztlPb3YlJ0%2FekJ55waqMB5fE8qvilhcQ1Mi6MYSYBTlmzZ6GkPuYNipYFiV9jjKUa2cCpRd%2FZZcB8roZaAP2BgfiQaZP3fNJJWcz15dKL%2BufozghP8uTTXQOxCMsfThO1G6pSBKgzKTyeutIFAGuMyDfz0CvS0T0pk&X-Amz-Signature=6ab4860a8e1b43e10fd2abfb35c2fb22be1a0e25f21ae24e57de097a89603ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
