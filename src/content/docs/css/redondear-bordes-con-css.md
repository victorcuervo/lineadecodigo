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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCDK735%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxFCRdyLg2HKzx%2B%2Fzb7FIPvlMmkTeu3VCQSR%2B%2BQmAFQIgcCNGcNGjk8tFt5zG0TuUmAL8bSERtTI1TVWncNxfQf8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9MyR3Shm7E5S%2BILircAxexOmDkA5hVRAe%2BByegPo4luMp3kj6b2PmWCRmFA%2BtiuiH8%2BBageVMfavPl0jWjbPDKbarEJ%2Bs192BBaWpW1xkyRz88E8UMGwlXZ5k%2Fa5QfjZW4kprVo59EzjzPThDHvy2%2BwrsbTijVliFqYycJffu6LaHKCLDwGRgF1sZfx5%2BvRo7hh0YRQse4xzwe%2Fjy%2FIvJQwuU2d6rD7CqAJ68CMEZ%2FdXH0mSFlGa1gj0J%2FlAP7rll%2B%2BzL%2BAAo10Y6MSmeiyki%2BeNpkTQM5aY1u009doUUp1SEgRodhGUB86B47s8LeJ%2Fq9jNr1RPuLGkZx%2Fo0nyU6M4WlfX%2B01WEnMl8xDC309uUDGZGgO8Eg4ORuL%2B9OZSiQdYbwaMerp35ELKM2WWzYsXqQ%2F73MQem617dHEGblJTBDwmb79P9ssdnm6ka3iQL0yPgPAhFvCyaJNoTJ92wDOLfn2DNZYFm0NeT7iDAlFiOvrl9icZvFW0W3cnQFkTiwlsuRYWdh%2FhGdZFaHEwVrPZ%2BOCfe2Aihlg8iZMU%2BgRkgtdVRVqFVMFrM2sRPzyzd3dOc2oWQUCEJgpa3FXqz7gFXtWxNG8PkjaZaPk9Zyf3UXODUtmPbzX0VRIsHndiCrVX%2FxOR4%2BiNdafMI3%2B0skGOqUBXL9oqjACzU4ESsvvKxsb8E9bIHTylbDZ2TYYtuDAtBrbbyEq54yxSEZbCSE1pnEEoTdkmo1YFDr21w5prS5Kj8b2yjWbEovf6a4m52wmzkG0ZzGcJLQchx2YjoV78CUxnHA9vG4Xvp4r0Is5ISA2TX9DLOQZZMz0v6iKakcASbf8JI1x%2FGFx0QRig588IQkdQvGgGkMtUNqjyYUU5wKFQ3M%2BDKvp&X-Amz-Signature=807cd0aacb54aba9db30d8693074d6dd0cd63475d626d1ad488c0eca36321a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCDK735%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxFCRdyLg2HKzx%2B%2Fzb7FIPvlMmkTeu3VCQSR%2B%2BQmAFQIgcCNGcNGjk8tFt5zG0TuUmAL8bSERtTI1TVWncNxfQf8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9MyR3Shm7E5S%2BILircAxexOmDkA5hVRAe%2BByegPo4luMp3kj6b2PmWCRmFA%2BtiuiH8%2BBageVMfavPl0jWjbPDKbarEJ%2Bs192BBaWpW1xkyRz88E8UMGwlXZ5k%2Fa5QfjZW4kprVo59EzjzPThDHvy2%2BwrsbTijVliFqYycJffu6LaHKCLDwGRgF1sZfx5%2BvRo7hh0YRQse4xzwe%2Fjy%2FIvJQwuU2d6rD7CqAJ68CMEZ%2FdXH0mSFlGa1gj0J%2FlAP7rll%2B%2BzL%2BAAo10Y6MSmeiyki%2BeNpkTQM5aY1u009doUUp1SEgRodhGUB86B47s8LeJ%2Fq9jNr1RPuLGkZx%2Fo0nyU6M4WlfX%2B01WEnMl8xDC309uUDGZGgO8Eg4ORuL%2B9OZSiQdYbwaMerp35ELKM2WWzYsXqQ%2F73MQem617dHEGblJTBDwmb79P9ssdnm6ka3iQL0yPgPAhFvCyaJNoTJ92wDOLfn2DNZYFm0NeT7iDAlFiOvrl9icZvFW0W3cnQFkTiwlsuRYWdh%2FhGdZFaHEwVrPZ%2BOCfe2Aihlg8iZMU%2BgRkgtdVRVqFVMFrM2sRPzyzd3dOc2oWQUCEJgpa3FXqz7gFXtWxNG8PkjaZaPk9Zyf3UXODUtmPbzX0VRIsHndiCrVX%2FxOR4%2BiNdafMI3%2B0skGOqUBXL9oqjACzU4ESsvvKxsb8E9bIHTylbDZ2TYYtuDAtBrbbyEq54yxSEZbCSE1pnEEoTdkmo1YFDr21w5prS5Kj8b2yjWbEovf6a4m52wmzkG0ZzGcJLQchx2YjoV78CUxnHA9vG4Xvp4r0Is5ISA2TX9DLOQZZMz0v6iKakcASbf8JI1x%2FGFx0QRig588IQkdQvGgGkMtUNqjyYUU5wKFQ3M%2BDKvp&X-Amz-Signature=116f30f65ffe79192556ac3f8d176bd5892b902592b34404d3f053c06bd8c16b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
