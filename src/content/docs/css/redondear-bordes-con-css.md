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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCS4YRY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5aw1eCXeHlPlw5FYNoiFEa0GRDlGwwoiatc5CWTDDLAiEAtaNPVeUybcuL8JjtDDyAWG5rAbn3dcytu5kMrfnh4V0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ViwXR%2BecaelkfpyrcA21Qv8AzHwDFLPjbQach0MfVGUQzstMxE5FCDTUM8k8qEZ4jigwCYJ2GkQqWkLVfidOy8KC8crly0oBfEJ6dF6MQ%2F4PHjhVezLGIvAi1Gy6uXwVCgon9U3gT%2BYnzregTsB%2FkO9XCmJtPAZEIH1IZTyEcO38Qr9fqLsiA4430HdU0uqjaQoXg3t%2Fpqw0OouAVYB3RADf48KFtQPbnGuLL5%2BeMsAb0gS9jViACA4Yqe5Iy55JlF7xavqD6vbHhzWraiZrjaWItXF7kTUOVEpYlW47TVnULhcCxq4OvK8NOssMCcloIMjeHvxxb0%2BFsEUv8uVwgu0giJII9I%2FR4UM85sZdo5%2FLgmy3CK3Zb3OQUYApKCqqVHb1Ki1WAHDrnGrdsc38fSTW4mShxylEMpZwAKtuO%2BnKs0jEYTa5o%2FdAnMIyNxuTVbjy1mzA9wkb%2B6zR2ma26XrcA6ssUY9ncsHUDSf7u1GLwwIkaStKPuTAX%2Fbg9hb%2Floy2UhqTIcoorRk%2B9yA3%2B7RUNcc0mDLQV%2BG4Vc41047PZ5VE%2FMhYXdHwV1Pj7cGc6f5cv1FHPbPmISIZ3JFG5sXkSzpS%2BWP2O1USlc9563xFpsfu18WAWfKb8oXZP2QdymuUmT6s9NMYeMP7s2ckGOqUBV6Wp5mqOGNoJ4muj4Ywqw6s6CgWB0v4HVYDUgLMrAu539%2F4mjLXm1K7jFldnwILvlXYBLFWg4ZkUsGX0nMJIK%2FBTn3yemuIplvE0ZoyFUH7VKHCJMNbRQg2ypX9ll%2FfZpd58Qv%2FfX13l1EUk4QVdcGLecYJUlyvqS8VICktwUtzPGtIl3gB9nW%2FV%2FU6nbsH%2F8qWhRqOEdYwN3e4jbasxEz7lqqlk&X-Amz-Signature=403225549e50588a9f1df1db7da093333debb8d869e0275ba9453eb9dac312d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCS4YRY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5aw1eCXeHlPlw5FYNoiFEa0GRDlGwwoiatc5CWTDDLAiEAtaNPVeUybcuL8JjtDDyAWG5rAbn3dcytu5kMrfnh4V0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ViwXR%2BecaelkfpyrcA21Qv8AzHwDFLPjbQach0MfVGUQzstMxE5FCDTUM8k8qEZ4jigwCYJ2GkQqWkLVfidOy8KC8crly0oBfEJ6dF6MQ%2F4PHjhVezLGIvAi1Gy6uXwVCgon9U3gT%2BYnzregTsB%2FkO9XCmJtPAZEIH1IZTyEcO38Qr9fqLsiA4430HdU0uqjaQoXg3t%2Fpqw0OouAVYB3RADf48KFtQPbnGuLL5%2BeMsAb0gS9jViACA4Yqe5Iy55JlF7xavqD6vbHhzWraiZrjaWItXF7kTUOVEpYlW47TVnULhcCxq4OvK8NOssMCcloIMjeHvxxb0%2BFsEUv8uVwgu0giJII9I%2FR4UM85sZdo5%2FLgmy3CK3Zb3OQUYApKCqqVHb1Ki1WAHDrnGrdsc38fSTW4mShxylEMpZwAKtuO%2BnKs0jEYTa5o%2FdAnMIyNxuTVbjy1mzA9wkb%2B6zR2ma26XrcA6ssUY9ncsHUDSf7u1GLwwIkaStKPuTAX%2Fbg9hb%2Floy2UhqTIcoorRk%2B9yA3%2B7RUNcc0mDLQV%2BG4Vc41047PZ5VE%2FMhYXdHwV1Pj7cGc6f5cv1FHPbPmISIZ3JFG5sXkSzpS%2BWP2O1USlc9563xFpsfu18WAWfKb8oXZP2QdymuUmT6s9NMYeMP7s2ckGOqUBV6Wp5mqOGNoJ4muj4Ywqw6s6CgWB0v4HVYDUgLMrAu539%2F4mjLXm1K7jFldnwILvlXYBLFWg4ZkUsGX0nMJIK%2FBTn3yemuIplvE0ZoyFUH7VKHCJMNbRQg2ypX9ll%2FfZpd58Qv%2FfX13l1EUk4QVdcGLecYJUlyvqS8VICktwUtzPGtIl3gB9nW%2FV%2FU6nbsH%2F8qWhRqOEdYwN3e4jbasxEz7lqqlk&X-Amz-Signature=76dfad6b10fa5d1a943160bd272a11f62b54b6a827645fc8028d82bf3212a082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
