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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHH2DLSX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCebz%2FQn2uSWWQKrtWVHtr9%2BVh3wBfVwYewEDQhkuhmNgIgDQM4oCYM%2B7OPaArxyX5t4Q1eHv487LTeTCc9GBH3smAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDrnTXVgYve7UbJC%2FircA5rHX8%2F%2Ba0J71XptY3qJtOI8CKhEq3g730%2FJxgiRveELvr54JG2tzDtcrzEb4So9I5zgaHmhWJo1MxLaA8PBDxJvrjM0MvYkrZ54mBLaS5oW2vEBrtP%2FmKMg7JADPpHk%2FGrUBuVEDzYM6%2BauCYFzNHPD0MDBDbOpQbUPfJJlZOWYPpfIWAR5QnK%2FZsUmHZRJiN8SiwDZreap58R8MbacvRvAqHm7x54N%2BdStCWzHtG5hId82wmG9kDMknIrn6ymQUnMgZDTcFbPalBj%2FRPJxnKaHqMHgLtu9fVNpf4lVqNgdF6G4bFErBvh4QGhBca%2Byr6vKTBYslKg%2BqX%2BJDiWh7amUFmj5%2BVLkK%2FHsDSArCC9KybVtlv2u4g7cFUC9ukU%2FZqyOOI0nPbjUBoFDQ24L0ABld9sScC%2BxRjqNBN9BhTPGkWtJ50UrhJO8dMLOPOwLY3lRigp5Wltdx8CG%2Fb16ajjBBlmUZ07yynJtg3gnaOoBLo5jgcywTuHV4TEydMZ5NoXcjIO18Sm55u1zhzTGFDdBIRXMVO4otefT7n7Rm3zj3AMUSzWQHlp%2FkTU4OBwr86y7bVRHPlc%2F9ff0xGc6e%2BGOYtsrZGxmh3wofX%2BPJH4h4eWnLLfBxMWmGCS6MLWuyckGOqUB5dsA%2FUWvM7LVgl1HVm9yJoSJBI4KkbmbQPaxVLV89%2FULqDHpCb%2BUYwtespBpRxggFfgRD8Lhv%2F9xmEMzwd%2FkHNTyUkRdS6ORk%2FX3oHf5h91WXNFUjQLOpOQ2KfgjSoJ0KvMSHc6DPLcwwGv2OU2PtE2bKszmPcEhwiJSpsY7EDU5nqmr1EfIjDtssTrSSexmd8OOuqpcZk0Vd4c5Yi2oXqw7n3Ug&X-Amz-Signature=a856e640ae60ce9b64b4a03288db9cde8840ee0199c70ae2d2ab94f85c20e56b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHH2DLSX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCebz%2FQn2uSWWQKrtWVHtr9%2BVh3wBfVwYewEDQhkuhmNgIgDQM4oCYM%2B7OPaArxyX5t4Q1eHv487LTeTCc9GBH3smAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDrnTXVgYve7UbJC%2FircA5rHX8%2F%2Ba0J71XptY3qJtOI8CKhEq3g730%2FJxgiRveELvr54JG2tzDtcrzEb4So9I5zgaHmhWJo1MxLaA8PBDxJvrjM0MvYkrZ54mBLaS5oW2vEBrtP%2FmKMg7JADPpHk%2FGrUBuVEDzYM6%2BauCYFzNHPD0MDBDbOpQbUPfJJlZOWYPpfIWAR5QnK%2FZsUmHZRJiN8SiwDZreap58R8MbacvRvAqHm7x54N%2BdStCWzHtG5hId82wmG9kDMknIrn6ymQUnMgZDTcFbPalBj%2FRPJxnKaHqMHgLtu9fVNpf4lVqNgdF6G4bFErBvh4QGhBca%2Byr6vKTBYslKg%2BqX%2BJDiWh7amUFmj5%2BVLkK%2FHsDSArCC9KybVtlv2u4g7cFUC9ukU%2FZqyOOI0nPbjUBoFDQ24L0ABld9sScC%2BxRjqNBN9BhTPGkWtJ50UrhJO8dMLOPOwLY3lRigp5Wltdx8CG%2Fb16ajjBBlmUZ07yynJtg3gnaOoBLo5jgcywTuHV4TEydMZ5NoXcjIO18Sm55u1zhzTGFDdBIRXMVO4otefT7n7Rm3zj3AMUSzWQHlp%2FkTU4OBwr86y7bVRHPlc%2F9ff0xGc6e%2BGOYtsrZGxmh3wofX%2BPJH4h4eWnLLfBxMWmGCS6MLWuyckGOqUB5dsA%2FUWvM7LVgl1HVm9yJoSJBI4KkbmbQPaxVLV89%2FULqDHpCb%2BUYwtespBpRxggFfgRD8Lhv%2F9xmEMzwd%2FkHNTyUkRdS6ORk%2FX3oHf5h91WXNFUjQLOpOQ2KfgjSoJ0KvMSHc6DPLcwwGv2OU2PtE2bKszmPcEhwiJSpsY7EDU5nqmr1EfIjDtssTrSSexmd8OOuqpcZk0Vd4c5Yi2oXqw7n3Ug&X-Amz-Signature=cf1fea35722612645da3d77a88c946f2d0f6249a0c68a420ae5c8eec33f9749c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
