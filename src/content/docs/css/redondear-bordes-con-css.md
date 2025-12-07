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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UD5EOV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkPHxfierkhQ2DrQKSfL9paJT8z7mrgvFpmtaeN5NX1wIge9H3EoBaXIpmBEaBl1dz0t4laeduRkLqFMfnNXmYQwgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO%2Baq3WjF4Z3UBB8SrcA%2BmpjVn4bIvv1wycHRWblkP3hmUG8%2BDLRWl49b%2BY2Tb0yu7%2B4XQiqSKP2m1w51D%2FFB4F8d8kd0h0cfhyFj%2BlGpkmKCCzQwkIcVPW1NRudQIXQ8I3g415n59vOLKyMQkT4Mh0XQzUCQqnUffD6Ur9GJKSRlrHe4UESZyzrfOULDZz3%2F3TQL9a33GcJbThBx%2BQOJOk0jx7IM3d1LZa8UwsvdK5OkU8MQQsDOLLLPhZFo2GegUoMMrsp1VXagoJMC9jmrk1LC%2FmEUIraQTqR3sr%2BPSg7FXOix9IN1wVdOjJSP%2BkDlQpWHp43Jj3CHDvg724TdUfYdEDRpWOHaUHAPwa6gaNGY7oOxDc9y%2FhY%2FROtDm6Tw62%2F4e1ezAniJdr73oCGiLTLY3DPk26eJZ4NLTf%2B8UHiMQmBv6iiBpbicB4NAD4aed4t3NrJGFwr97FETS1VxNYPoxnT0a6Y%2FIt401uWx0yRV%2BjFVv8ecE799pU6GKQKzz8iEu1wNQQidsYCQcCFiQ486PLazqOenjcRq28hfE9l2%2Fs%2B4wPFqWy1yjC%2FQ4JP2zRrMnrgm3ZYSwk51N0GQDI8P8n%2FDB5DWxhSLbZc%2Bl2YEIZlrAkQ4a68mPNjydhwOjslhwx88UAnERLMKqF2MkGOqUBLVsrHBdthKLYkunb90oh3a%2FfurPIYaO6mJZo6I6PlfffdwmofIyh8%2FTX37PJNE%2F9pM5wNJuakmCjYEFvBtuNxTTc%2FFENOY9LXy6Mm2Q5E65cFH1LyFt3CgpuC5ErloxSmVzR%2FMtTL0UfSOqq%2BMEb6ZR2bhAtidxJjyYZlgNatregR4t7YV9zBx2FiakVoG7Lpsirg3l%2F5Izj7wogJNegBaBpg0zT&X-Amz-Signature=35a0a77b4b9bb2c008a3daf79e5ae93f1737d3c75d5072c52cad8fae717cccf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UD5EOV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkPHxfierkhQ2DrQKSfL9paJT8z7mrgvFpmtaeN5NX1wIge9H3EoBaXIpmBEaBl1dz0t4laeduRkLqFMfnNXmYQwgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO%2Baq3WjF4Z3UBB8SrcA%2BmpjVn4bIvv1wycHRWblkP3hmUG8%2BDLRWl49b%2BY2Tb0yu7%2B4XQiqSKP2m1w51D%2FFB4F8d8kd0h0cfhyFj%2BlGpkmKCCzQwkIcVPW1NRudQIXQ8I3g415n59vOLKyMQkT4Mh0XQzUCQqnUffD6Ur9GJKSRlrHe4UESZyzrfOULDZz3%2F3TQL9a33GcJbThBx%2BQOJOk0jx7IM3d1LZa8UwsvdK5OkU8MQQsDOLLLPhZFo2GegUoMMrsp1VXagoJMC9jmrk1LC%2FmEUIraQTqR3sr%2BPSg7FXOix9IN1wVdOjJSP%2BkDlQpWHp43Jj3CHDvg724TdUfYdEDRpWOHaUHAPwa6gaNGY7oOxDc9y%2FhY%2FROtDm6Tw62%2F4e1ezAniJdr73oCGiLTLY3DPk26eJZ4NLTf%2B8UHiMQmBv6iiBpbicB4NAD4aed4t3NrJGFwr97FETS1VxNYPoxnT0a6Y%2FIt401uWx0yRV%2BjFVv8ecE799pU6GKQKzz8iEu1wNQQidsYCQcCFiQ486PLazqOenjcRq28hfE9l2%2Fs%2B4wPFqWy1yjC%2FQ4JP2zRrMnrgm3ZYSwk51N0GQDI8P8n%2FDB5DWxhSLbZc%2Bl2YEIZlrAkQ4a68mPNjydhwOjslhwx88UAnERLMKqF2MkGOqUBLVsrHBdthKLYkunb90oh3a%2FfurPIYaO6mJZo6I6PlfffdwmofIyh8%2FTX37PJNE%2F9pM5wNJuakmCjYEFvBtuNxTTc%2FFENOY9LXy6Mm2Q5E65cFH1LyFt3CgpuC5ErloxSmVzR%2FMtTL0UfSOqq%2BMEb6ZR2bhAtidxJjyYZlgNatregR4t7YV9zBx2FiakVoG7Lpsirg3l%2F5Izj7wogJNegBaBpg0zT&X-Amz-Signature=5b52515e142e29d46ee11ddc656d135cf470845e5872ef7f96abb0faca667e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
