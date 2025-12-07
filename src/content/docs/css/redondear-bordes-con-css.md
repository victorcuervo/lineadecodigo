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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOFVSAY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZwaUxwX%2B7CxgAosuXI%2FuE8xi1y%2BxmLdjp15GfTgfDegIhAIAHmRTe2TvEW5oPDyB5xyDysjXbnRa7fXLARQ1vYzn%2BKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7Mvsc8ZVrQSM9yLMq3AMql7G6MBB1JxjVPjU3hUi4HVYytzxVD8DU1STMXGMTBpuWaxUbfs8JMWOpozVt8Yy46teDVJhlgKG8P4uLfC1NSfWck2Y6gudy%2FROiMrojpNOLy37sMauXqRAx9%2FoHC3H9saX5qWyGldYVNvPRjmbR5m5reavKFLVjcFvaBwcWZ1QlmtYaT9GZiOYOGWZbWjcDddeGqkPb7KvmxWg9Kwy%2BSr08yfu0NErpjyQtCkK1DLQh%2BwXuZrliyVvDpWouJtvEgE%2BtbsI0JqQOS%2FNAXy8lv%2FBVDnnLgbu%2BMIUwIrWL4VZg6e3T9zmWyaYCaAqXsha1KxctKwZyOLsUza%2FvwF%2F1yRL1zEIqDHS0aNGkzUrlMIHiS%2FRsL5ydsESdFs2%2BM9JWOORWU9cnq7YrG9GUIxjaVzC5muDKSl%2FA4bfL0oFQwMDmnxdOiaFqBql%2FDN9ZKhFesRKEA%2F5GNN86jVzdjCCoZqvr6BQDZfKjXxlszenOtZppy4Lwl7yoxtJzAbVN6frPeUcErQAV8476u5990k0lmBtdfb2nGKUDkNAW5ircc%2BpHui1qoo2osmbVt4yEXquy42Plr5qtcTEhr%2BvxDe2dx2kTBwv6ySFP75k4xr6DYMsW3jIVBzotln3CnjDDuNbJBjqkAa5D73fSZOiR7etZsJx7O0Hz5cOH8SjNF%2FJms66RsFuUMa8e6HjnYyxZRF8Tfiho9YiZFLfsBvcwQnYBTO2%2B5a6JuGJxTbClVAC4MfuPSU37CnrqIDjEz%2FQudw6JD4xSmsERFFnuZUl%2BZUNR4nbZIJwSK3c8eVEPjoc8HNJWJ6xFSs457crIrHD89UqMPU%2Ffq7xaekDQwxevtpV65vnLOuuLTD1D&X-Amz-Signature=144de02eec4b0bd9aff27c83613a7a5ac8c903b989d4a04e520df5b95d217f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOFVSAY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZwaUxwX%2B7CxgAosuXI%2FuE8xi1y%2BxmLdjp15GfTgfDegIhAIAHmRTe2TvEW5oPDyB5xyDysjXbnRa7fXLARQ1vYzn%2BKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7Mvsc8ZVrQSM9yLMq3AMql7G6MBB1JxjVPjU3hUi4HVYytzxVD8DU1STMXGMTBpuWaxUbfs8JMWOpozVt8Yy46teDVJhlgKG8P4uLfC1NSfWck2Y6gudy%2FROiMrojpNOLy37sMauXqRAx9%2FoHC3H9saX5qWyGldYVNvPRjmbR5m5reavKFLVjcFvaBwcWZ1QlmtYaT9GZiOYOGWZbWjcDddeGqkPb7KvmxWg9Kwy%2BSr08yfu0NErpjyQtCkK1DLQh%2BwXuZrliyVvDpWouJtvEgE%2BtbsI0JqQOS%2FNAXy8lv%2FBVDnnLgbu%2BMIUwIrWL4VZg6e3T9zmWyaYCaAqXsha1KxctKwZyOLsUza%2FvwF%2F1yRL1zEIqDHS0aNGkzUrlMIHiS%2FRsL5ydsESdFs2%2BM9JWOORWU9cnq7YrG9GUIxjaVzC5muDKSl%2FA4bfL0oFQwMDmnxdOiaFqBql%2FDN9ZKhFesRKEA%2F5GNN86jVzdjCCoZqvr6BQDZfKjXxlszenOtZppy4Lwl7yoxtJzAbVN6frPeUcErQAV8476u5990k0lmBtdfb2nGKUDkNAW5ircc%2BpHui1qoo2osmbVt4yEXquy42Plr5qtcTEhr%2BvxDe2dx2kTBwv6ySFP75k4xr6DYMsW3jIVBzotln3CnjDDuNbJBjqkAa5D73fSZOiR7etZsJx7O0Hz5cOH8SjNF%2FJms66RsFuUMa8e6HjnYyxZRF8Tfiho9YiZFLfsBvcwQnYBTO2%2B5a6JuGJxTbClVAC4MfuPSU37CnrqIDjEz%2FQudw6JD4xSmsERFFnuZUl%2BZUNR4nbZIJwSK3c8eVEPjoc8HNJWJ6xFSs457crIrHD89UqMPU%2Ffq7xaekDQwxevtpV65vnLOuuLTD1D&X-Amz-Signature=a654e3e4d7ec362866ed2b733e7d6969119beb60cf4e6ca2222d10851fcba342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
