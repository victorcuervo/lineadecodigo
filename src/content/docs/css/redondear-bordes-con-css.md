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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKBBJWX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiSjEFX7ccbZn7Z9Vhw63YwKKz0vNCw3SKCHP%2Bw8OGgAiEAs0729WwGtgb5bFMtPwd6cBWoqVUtFwVuC9%2Bo5B0sOGMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFBURhbF6y%2BKxryjyrcAwddmd1TJeR2wj2WXQe5taUSPhKd%2FkDVJvxuxjArG6DNnsDbv03E1ds0AlvgV1SkLbmjNeL1wCI6iW%2BSj1INCa%2FhIlO9FTrQFozHO%2B%2BWWirDf49SZWyjf9ExBMPTiuazii5qKkOdL3nIgWPcEf87r9MzBSrkay3Ol62cWCF5sFbotUCksWBfHRy4z0Oqaijjm15BV0wLA5%2BIVt0I0izv1Mcq5UC2ak4nQE%2BUyuwBkmpCJLFKyYIOD%2BlScIG6ABjBaycRdiGpilRKpiQrjaQh8t7gKSqnq0fDfazkGEtcGhbFPbSVpPBfvLel5JF4WHiyBI7Tb6d6DdGICvwax83HeiXQL96X08e8CAH%2B0iDJ4kQHEMEx3b3DnfUJtrNkiBed7cv%2B4VikbPhp7cODxmLLaIui7vmE0hSXmlzbrQ9qjuKVmqkYm5Nxn4eFyQA7dlm2O5shATv5JBjsoIbl0Zf3xYAU0wo4EP0TabU607kECY%2FBMjV%2FMkxaHcnNqJTupffebam9jJpgklPcnZCPFP9LC2Kz%2FSk5cuw4m%2BDofRMGar9EOmqC9Aql9aY6wniHr1iPJo1eYI1LWLvO1uO365w%2FVFYtDVWUi6UPYaL11C%2Fz3oYplZ7aaNUTHDLXoqqtMIK01skGOqUBb7Igu9WSn6K3s%2BeiIumsVy7nhlYI3b0E%2BXaXbcNOtKcbHzRscbsK5zCfEX8XWdbvfl2JRhOY411A7wjxJaEgTItMAm9DWna2UDEWntwGtTbEc9yWrnJOyhz7BHCjbTs7SBnWruE%2F32gAP7qSY5hZMjRSGC6zpGBM7bMd7O37ufwOF5r%2BZjF7GQjKfGO0Nwp6RITc3mItnk4VziieWPa9Cp4x5vbf&X-Amz-Signature=60194f95d19ec687e87037a89e2601564fc23bed3d637dccbd7a2888b0d627dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKBBJWX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiSjEFX7ccbZn7Z9Vhw63YwKKz0vNCw3SKCHP%2Bw8OGgAiEAs0729WwGtgb5bFMtPwd6cBWoqVUtFwVuC9%2Bo5B0sOGMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFBURhbF6y%2BKxryjyrcAwddmd1TJeR2wj2WXQe5taUSPhKd%2FkDVJvxuxjArG6DNnsDbv03E1ds0AlvgV1SkLbmjNeL1wCI6iW%2BSj1INCa%2FhIlO9FTrQFozHO%2B%2BWWirDf49SZWyjf9ExBMPTiuazii5qKkOdL3nIgWPcEf87r9MzBSrkay3Ol62cWCF5sFbotUCksWBfHRy4z0Oqaijjm15BV0wLA5%2BIVt0I0izv1Mcq5UC2ak4nQE%2BUyuwBkmpCJLFKyYIOD%2BlScIG6ABjBaycRdiGpilRKpiQrjaQh8t7gKSqnq0fDfazkGEtcGhbFPbSVpPBfvLel5JF4WHiyBI7Tb6d6DdGICvwax83HeiXQL96X08e8CAH%2B0iDJ4kQHEMEx3b3DnfUJtrNkiBed7cv%2B4VikbPhp7cODxmLLaIui7vmE0hSXmlzbrQ9qjuKVmqkYm5Nxn4eFyQA7dlm2O5shATv5JBjsoIbl0Zf3xYAU0wo4EP0TabU607kECY%2FBMjV%2FMkxaHcnNqJTupffebam9jJpgklPcnZCPFP9LC2Kz%2FSk5cuw4m%2BDofRMGar9EOmqC9Aql9aY6wniHr1iPJo1eYI1LWLvO1uO365w%2FVFYtDVWUi6UPYaL11C%2Fz3oYplZ7aaNUTHDLXoqqtMIK01skGOqUBb7Igu9WSn6K3s%2BeiIumsVy7nhlYI3b0E%2BXaXbcNOtKcbHzRscbsK5zCfEX8XWdbvfl2JRhOY411A7wjxJaEgTItMAm9DWna2UDEWntwGtTbEc9yWrnJOyhz7BHCjbTs7SBnWruE%2F32gAP7qSY5hZMjRSGC6zpGBM7bMd7O37ufwOF5r%2BZjF7GQjKfGO0Nwp6RITc3mItnk4VziieWPa9Cp4x5vbf&X-Amz-Signature=471cc42b32d7011a6e43aacd8ac1808f9242251d394974475ef93771f0150b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
