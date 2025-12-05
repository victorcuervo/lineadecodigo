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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K7ZUS5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMvctdyxGtB3AubNPn4qw8uEiIPKwhtWGeu%2BjAttcfmAiEAmwfTbcRPkJXiGORMzOqY4lPn65mkaqkNF0iWlB%2FYJscq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPPVOlaUjeUJ1V8HuSrcAyAJvHERhmEuwGGAQQ5JZUX7gSrKddu3UevTS9HMLXMCPUYvJPKRr7M9d25C0%2Fz0ESazbtFRrWb7NRKvOOhPlawvtx3pD3i9%2BMxg3tZgNM4NBAZU%2FiCxwQxcEIHnrDkiZnode13R%2B91SWNdqnWiubdm%2BWvS7yXhIESCB6T1fQ6H8fcpXQDh94Rt13Gz662j5iXE0n8yDTy09YXjkR20vRFO0UjYFqj%2B4g7hxL5lg5f1fZ%2FjAchXiAhLGFA%2FLoQN8FmUgvudI3CGZJZWo56wIhMR4Iv8Tc4PvRpJn09ikOZlN0ejvPMOZ2Q%2Fi6rLB3csDk%2FBzl5Z7WGxpVZkuItx6xlWX9R6otjIMdijHz8mE5oACx0BFG9f%2BtnrCIzu2AleNAtDDQezIIOZS2mYqNOCyjQUjQNN3%2BvgZHXnO8aJk81bCEI2e8sGbDRTUhRbSBQG1Nvt%2Fo0rKs%2FCFtNqPzsuw2SiWYxn0S5WrecgEHbutB7fDavWEJmn5N6yQqcDUwnRi%2F3VTf2INN6xUFC7QOKlHz%2BoroOQrlYOceGegdQzKqxcBgywroMc3R2I3%2BZ%2FoKeAgjXBoDG02hiP7SC53fMwdT5qC7NRVc4GVe8Jf9wbKBcp5hMho6cCNgmrcS%2BkWMMCpyckGOqUBc69BfrGDMCD%2FwWmWJ87Sawgf2rNLYiNguUTeN1uzSgkPTOKdClcr3BfkHOQxZHcfmCLssSfvhARaT9ZQ9ajbhlXnDDEdIgJyx2d6l4DzuGnX146cgc0iFAfS3gLTKmWHwt7Z3atEXlmIr8OSPJtxlwhsyk6%2FJwqA525%2FIFbokCT6p3G0AkWFnj1al0tmjMEphrK8T03IgDVBsY8Jm8FqWjOAMKDh&X-Amz-Signature=7aa38212e8dbefbd49d2c921a61c6e9be434253ad1498b7c6649ab936f985756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K7ZUS5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMvctdyxGtB3AubNPn4qw8uEiIPKwhtWGeu%2BjAttcfmAiEAmwfTbcRPkJXiGORMzOqY4lPn65mkaqkNF0iWlB%2FYJscq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPPVOlaUjeUJ1V8HuSrcAyAJvHERhmEuwGGAQQ5JZUX7gSrKddu3UevTS9HMLXMCPUYvJPKRr7M9d25C0%2Fz0ESazbtFRrWb7NRKvOOhPlawvtx3pD3i9%2BMxg3tZgNM4NBAZU%2FiCxwQxcEIHnrDkiZnode13R%2B91SWNdqnWiubdm%2BWvS7yXhIESCB6T1fQ6H8fcpXQDh94Rt13Gz662j5iXE0n8yDTy09YXjkR20vRFO0UjYFqj%2B4g7hxL5lg5f1fZ%2FjAchXiAhLGFA%2FLoQN8FmUgvudI3CGZJZWo56wIhMR4Iv8Tc4PvRpJn09ikOZlN0ejvPMOZ2Q%2Fi6rLB3csDk%2FBzl5Z7WGxpVZkuItx6xlWX9R6otjIMdijHz8mE5oACx0BFG9f%2BtnrCIzu2AleNAtDDQezIIOZS2mYqNOCyjQUjQNN3%2BvgZHXnO8aJk81bCEI2e8sGbDRTUhRbSBQG1Nvt%2Fo0rKs%2FCFtNqPzsuw2SiWYxn0S5WrecgEHbutB7fDavWEJmn5N6yQqcDUwnRi%2F3VTf2INN6xUFC7QOKlHz%2BoroOQrlYOceGegdQzKqxcBgywroMc3R2I3%2BZ%2FoKeAgjXBoDG02hiP7SC53fMwdT5qC7NRVc4GVe8Jf9wbKBcp5hMho6cCNgmrcS%2BkWMMCpyckGOqUBc69BfrGDMCD%2FwWmWJ87Sawgf2rNLYiNguUTeN1uzSgkPTOKdClcr3BfkHOQxZHcfmCLssSfvhARaT9ZQ9ajbhlXnDDEdIgJyx2d6l4DzuGnX146cgc0iFAfS3gLTKmWHwt7Z3atEXlmIr8OSPJtxlwhsyk6%2FJwqA525%2FIFbokCT6p3G0AkWFnj1al0tmjMEphrK8T03IgDVBsY8Jm8FqWjOAMKDh&X-Amz-Signature=ff2e5c910148ed38bc495b42fc48c89e22a5c1738b665f6435d47da57d3929f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
