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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GQPIDT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDozytZhwfoGedi1roxGJmfVcaWvqdTrVq5pr43mR8MoQIgfeb5P6%2BbQaT31l%2Fh3Fm8%2BViUUi1i9CU5u14iISBQ6hUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKPx%2Fs3U%2B9r0dnJYzircAxPYw4i9tm2HfDk1o5OkxDcYwhlkcusRbAkqV%2BDxOQt4NYaD%2FkWF4D7CioNzSD3%2F62Lx61Pi1L7tx8tu6oJWdeHHwBUJrrxIMvWEacTwaPXZsDb01eRF84vpuWxCpmiRh3fFQqjgUigfzzPMP%2BaOiImI002TtdKt0osdiad2HGGGClpcFKhPlQhBvM0LDteE9KeaWLypNgFt2JnQRsVJ%2Bgd2UkBEdWXXkXcjgnoXuRY682csAyziQNlz%2Fkz7%2BCoCT%2Flc6ThOp9r7GJUXk%2Bc6zY0%2FKG2GY54Y12KgbzCQdHf793fKsRwePZYFNo0O9tByxK3BWRj8bOKCdx1xVdf6lfVdXV1mgnv6RIVIu8entVNjgLm5SP4gg4ZY80TTLbzJC66wIxhejGCYv%2BHkihUZAazdO89PKqd9D6uDeZL%2F3Rqz9Kmjyr3yOstkdCKBK7YcXLwS6eR5a3boaXtv4kuTZvcSoogbLDtwNpirz6a1q6sT1AK9aM3CZAjJIWlhVHMzX%2FdXJrRKApLLDAwGeCSo4k8A4PF1%2FZOTaYnSAgHQhL6P7gFSCec3vZ75m7nSIpupWr4uWL2vxk27kcjH6gmv0aPS4VTgudR3fWfB0MXW3PWfcHeoRZwktcu6uGYjMJffh8oGOqUB6pSGu8JKud09aVFXNxlmp00gFa%2BOJFb%2B9aAiG6WcNmTkipZ49LLakVKapZ8cdYfDFPqvo7NMOTALRmUaCyU1TLFfGIf9d338gS1m6IGxmrV%2BuNFFZ9PzRIY7fTegc0AdfueRvUM1IYEDI%2BsB3992eu%2FCzROdVYtAvxBYcdo70C6UeJItJQ%2BZgH8A4oSajymfUe0Q6mBhM0yoTCSVuxMsGyt%2BX12S&X-Amz-Signature=a56bd9f6c9ca393ecef555b7c92952483c31fb3fa0fb1f8dfce1343201cdf1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GQPIDT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDozytZhwfoGedi1roxGJmfVcaWvqdTrVq5pr43mR8MoQIgfeb5P6%2BbQaT31l%2Fh3Fm8%2BViUUi1i9CU5u14iISBQ6hUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKPx%2Fs3U%2B9r0dnJYzircAxPYw4i9tm2HfDk1o5OkxDcYwhlkcusRbAkqV%2BDxOQt4NYaD%2FkWF4D7CioNzSD3%2F62Lx61Pi1L7tx8tu6oJWdeHHwBUJrrxIMvWEacTwaPXZsDb01eRF84vpuWxCpmiRh3fFQqjgUigfzzPMP%2BaOiImI002TtdKt0osdiad2HGGGClpcFKhPlQhBvM0LDteE9KeaWLypNgFt2JnQRsVJ%2Bgd2UkBEdWXXkXcjgnoXuRY682csAyziQNlz%2Fkz7%2BCoCT%2Flc6ThOp9r7GJUXk%2Bc6zY0%2FKG2GY54Y12KgbzCQdHf793fKsRwePZYFNo0O9tByxK3BWRj8bOKCdx1xVdf6lfVdXV1mgnv6RIVIu8entVNjgLm5SP4gg4ZY80TTLbzJC66wIxhejGCYv%2BHkihUZAazdO89PKqd9D6uDeZL%2F3Rqz9Kmjyr3yOstkdCKBK7YcXLwS6eR5a3boaXtv4kuTZvcSoogbLDtwNpirz6a1q6sT1AK9aM3CZAjJIWlhVHMzX%2FdXJrRKApLLDAwGeCSo4k8A4PF1%2FZOTaYnSAgHQhL6P7gFSCec3vZ75m7nSIpupWr4uWL2vxk27kcjH6gmv0aPS4VTgudR3fWfB0MXW3PWfcHeoRZwktcu6uGYjMJffh8oGOqUB6pSGu8JKud09aVFXNxlmp00gFa%2BOJFb%2B9aAiG6WcNmTkipZ49LLakVKapZ8cdYfDFPqvo7NMOTALRmUaCyU1TLFfGIf9d338gS1m6IGxmrV%2BuNFFZ9PzRIY7fTegc0AdfueRvUM1IYEDI%2BsB3992eu%2FCzROdVYtAvxBYcdo70C6UeJItJQ%2BZgH8A4oSajymfUe0Q6mBhM0yoTCSVuxMsGyt%2BX12S&X-Amz-Signature=c2ebdf221ba62bcf0fa0d80574bf3da1f09336545d2a397399505b533268c051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
