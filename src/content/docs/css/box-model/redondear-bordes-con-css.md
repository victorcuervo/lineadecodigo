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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LW2IRF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7K0xwnifH2eNvo33NmoRPJIYglXeart38J%2F8diOxnQIhAPjkeOQVNLi76RivC1OSyVg3twSUv2NK0UgcbDIVzQkzKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6tbzH0XvS6QdhLSsq3APDQ4804US3CCsesd3iGeuaFMdqg857fhi7JvvrjvdsM0CHfiO%2BChwYeqhQUkT9nqrrD%2BWncrReQ3wD4CcMRI%2Fu5Bx3lEhr%2F0aW74sHN%2FZEX7rqgyP%2FoZQrq5CGKKA%2BWU8HMBt%2BoCHIvxulYz6y%2BvvS2yMudQ2nP%2FdkE960o0zfVp0odu4XlO4wh25ix%2F71fH%2FEJzXElI0uIQ0zGxIWu2c7MMey%2Bj3itDy8OPxggWR786DMjsEPsVufLUb1Wl7ZOTcoC2Cq2XFCcSBhcplHKa6gbcidKRWZexjQsPR4yDxC9ogHerYP%2BUJp7cG%2Bv1Ak0ojwn6mUAGBiQrNog9VSqOhuUjyUAknED6KWl8u%2FBfnbfCgJ38IcCUnufHtZqKSWuYOCQD%2B%2B1t9VvlkTQxk4%2FVzK1PuMXqkGYrlJlTkur5o%2BzcDYVBoTUkGYgNB7uQahiJNqio1FfINrE66x%2FTh7crwtBgZmCE4xjlAfFGbNqY%2B6CJp1XRXlDTt%2B15zlxBAh5cFEU%2F9XsAI9ru%2FHMwIvFVamd0qnhgsUUGqIzwvi1YveaWnvhqhw4oofN6uKy8AHpi%2Bmj49EIMnZAZ4R%2BZzU833QCJzlhdqjsdT5fBDhShtLdiNltlBaBS4JgGQzOzC0i4zKBjqkAXSbG%2Fwmpfln4SrV5cg5DR2kjhoqbUDtvT2yivBObghsGCYPlB3JyLXtVKzFHOcEHbOOnF%2Baf04CzmiI7YMwQ5k3yZ8HoNQSXsVbuCiN20kFM%2BTesMoUUuLWs0v8Nj2RlhFf3LmTTUVkoZDbWoAWbOTzvj3o6avgSAQYtO0DOlksvEyqYMBbx%2FWa4lXQZ6Esb30oZlVnVJ2tirMGEYH6FDWFfRoA&X-Amz-Signature=7ea7d2d554a0a21a7b8136b9c91699ca63d03bae60ac0dd2f723d1924e3aca23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LW2IRF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7K0xwnifH2eNvo33NmoRPJIYglXeart38J%2F8diOxnQIhAPjkeOQVNLi76RivC1OSyVg3twSUv2NK0UgcbDIVzQkzKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6tbzH0XvS6QdhLSsq3APDQ4804US3CCsesd3iGeuaFMdqg857fhi7JvvrjvdsM0CHfiO%2BChwYeqhQUkT9nqrrD%2BWncrReQ3wD4CcMRI%2Fu5Bx3lEhr%2F0aW74sHN%2FZEX7rqgyP%2FoZQrq5CGKKA%2BWU8HMBt%2BoCHIvxulYz6y%2BvvS2yMudQ2nP%2FdkE960o0zfVp0odu4XlO4wh25ix%2F71fH%2FEJzXElI0uIQ0zGxIWu2c7MMey%2Bj3itDy8OPxggWR786DMjsEPsVufLUb1Wl7ZOTcoC2Cq2XFCcSBhcplHKa6gbcidKRWZexjQsPR4yDxC9ogHerYP%2BUJp7cG%2Bv1Ak0ojwn6mUAGBiQrNog9VSqOhuUjyUAknED6KWl8u%2FBfnbfCgJ38IcCUnufHtZqKSWuYOCQD%2B%2B1t9VvlkTQxk4%2FVzK1PuMXqkGYrlJlTkur5o%2BzcDYVBoTUkGYgNB7uQahiJNqio1FfINrE66x%2FTh7crwtBgZmCE4xjlAfFGbNqY%2B6CJp1XRXlDTt%2B15zlxBAh5cFEU%2F9XsAI9ru%2FHMwIvFVamd0qnhgsUUGqIzwvi1YveaWnvhqhw4oofN6uKy8AHpi%2Bmj49EIMnZAZ4R%2BZzU833QCJzlhdqjsdT5fBDhShtLdiNltlBaBS4JgGQzOzC0i4zKBjqkAXSbG%2Fwmpfln4SrV5cg5DR2kjhoqbUDtvT2yivBObghsGCYPlB3JyLXtVKzFHOcEHbOOnF%2Baf04CzmiI7YMwQ5k3yZ8HoNQSXsVbuCiN20kFM%2BTesMoUUuLWs0v8Nj2RlhFf3LmTTUVkoZDbWoAWbOTzvj3o6avgSAQYtO0DOlksvEyqYMBbx%2FWa4lXQZ6Esb30oZlVnVJ2tirMGEYH6FDWFfRoA&X-Amz-Signature=6702ffa6f12a74ba491dbfe8ee5d31afd9a695d51ab10d57db79759035a9ad29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
