---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEKOZ45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHS%2Bv9zsVNX023pBn%2Fer2rZdnlEO%2FSoBa0fzG1%2F4ljkBAiEAlpH%2Fmr9ciOKDtOlabRL2E3K%2FiDwmiLGQj59CHSwyHhoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM3emhSSlzz5L9ZYpSrcA8apbXgvUp1bgnW%2FT0Kx3ApeMpvIozAmI0h01Bdtai%2Fbr%2F6oowmZ7P%2FzOcO055PX%2BZnPSd4q7z9F8ozEhv8GguhIRbb1eYUo5DiLb9dAafgTV6RoSXOj0DKvSXGGpccN%2Fc%2BDlYSnxx1t6p3hxn9aHcjZXxtqwYdVxF3lN%2BFpsoSiCnrrqANnYhze21cIaSNgNv9SQ2Vr5UPuLD74dLnUSsN3MQj0gPyQQuMfGJ18p4eSoUiFoHX5YHiwEaFrVoI9Rl0jv0WoIyTMMwy4T2e%2BScE%2ByyM6zd6dnFQiv5nJyh9iqn0aAsPkpGOQXjzUL1KScF%2FfRNfXcE9jSAMKQ7l3080OqGDJAT7KA21FqIIZF7NK9Kt6SVVBbKeou9TH2%2Fhsh356MqXcE%2FruG87bHPtttw1nHGdL8IIRw9qzgHLQwfenml6eb3QWCS%2FU6OP332evFeA%2FIwGOA4HRvdRpByA27TA2gbzIh%2F7mwR%2BixkUUF69wspJLJGYP0FVrI23Fpnbf73M8BEUAgB4GB3O9nMhjJx2qX3f5MyW2c67AnsrAwqmXMnmlykZXDe8ozIIcxDUB0%2FJM1qHyApyTKA1Pj%2FgWIlrcp5bk9%2FX3lE5aeiugjT%2BT1T2LCMKn2g1G64NbMJ2RwskGOqUBRG5sQdkbJoBKyrqqkP4%2FmLILkEpASJny0A%2FyZ1ndI%2B4k9%2B0kcdVlKcGU6UYwsCQcN55B8HY5WFBJuOe%2Fo9eqBZ70iSoCG9ZxqrtGC%2B9BhdZ8UayVvTK8iBZ90yx3i11p0S7KuS%2Bte7DOM8cvpZvqc3MB5gxVBmQ%2FemVS4kgHY6UK7KdEzeIGbg3K94zMQD6%2B6sGUhrHRVnrrq%2FKA3g3PkLFqA9gP&X-Amz-Signature=4e2a0695f2064bbacea195e73ce9d109f4749024cfd107ca27a955d8612c8b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEKOZ45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHS%2Bv9zsVNX023pBn%2Fer2rZdnlEO%2FSoBa0fzG1%2F4ljkBAiEAlpH%2Fmr9ciOKDtOlabRL2E3K%2FiDwmiLGQj59CHSwyHhoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM3emhSSlzz5L9ZYpSrcA8apbXgvUp1bgnW%2FT0Kx3ApeMpvIozAmI0h01Bdtai%2Fbr%2F6oowmZ7P%2FzOcO055PX%2BZnPSd4q7z9F8ozEhv8GguhIRbb1eYUo5DiLb9dAafgTV6RoSXOj0DKvSXGGpccN%2Fc%2BDlYSnxx1t6p3hxn9aHcjZXxtqwYdVxF3lN%2BFpsoSiCnrrqANnYhze21cIaSNgNv9SQ2Vr5UPuLD74dLnUSsN3MQj0gPyQQuMfGJ18p4eSoUiFoHX5YHiwEaFrVoI9Rl0jv0WoIyTMMwy4T2e%2BScE%2ByyM6zd6dnFQiv5nJyh9iqn0aAsPkpGOQXjzUL1KScF%2FfRNfXcE9jSAMKQ7l3080OqGDJAT7KA21FqIIZF7NK9Kt6SVVBbKeou9TH2%2Fhsh356MqXcE%2FruG87bHPtttw1nHGdL8IIRw9qzgHLQwfenml6eb3QWCS%2FU6OP332evFeA%2FIwGOA4HRvdRpByA27TA2gbzIh%2F7mwR%2BixkUUF69wspJLJGYP0FVrI23Fpnbf73M8BEUAgB4GB3O9nMhjJx2qX3f5MyW2c67AnsrAwqmXMnmlykZXDe8ozIIcxDUB0%2FJM1qHyApyTKA1Pj%2FgWIlrcp5bk9%2FX3lE5aeiugjT%2BT1T2LCMKn2g1G64NbMJ2RwskGOqUBRG5sQdkbJoBKyrqqkP4%2FmLILkEpASJny0A%2FyZ1ndI%2B4k9%2B0kcdVlKcGU6UYwsCQcN55B8HY5WFBJuOe%2Fo9eqBZ70iSoCG9ZxqrtGC%2B9BhdZ8UayVvTK8iBZ90yx3i11p0S7KuS%2Bte7DOM8cvpZvqc3MB5gxVBmQ%2FemVS4kgHY6UK7KdEzeIGbg3K94zMQD6%2B6sGUhrHRVnrrq%2FKA3g3PkLFqA9gP&X-Amz-Signature=16a1301570dbdb05c4d511f79a4f51169e8df1dced7a75d320c727afff205c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
