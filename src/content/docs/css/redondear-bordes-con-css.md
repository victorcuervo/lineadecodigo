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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK2JI55M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBz1ZjkGIv%2B5t9PEBjGt1bSc8Q16C7TBaPszzC20laKAiEAq9c853QZXpk4HNb%2Bo92RSp4qv3EgzY47FDe4R%2B7FJRgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJzS1MEmRFX0LStDsyrcA3O2xIvuQ9BA9HfHXN2jMew%2FwNVLgW3EmFh4SUn%2B7DCjgQnt%2F2YGS28F%2BkGopLL1PI4j7SGy7jn9mhZ%2F7hMLY8XeC7HKEQdR0guwEfA9QHL0VIoDzBl15YBAr1gwy%2BgH6xGNsiIgh%2FzD4CUa74r7saxVAESlbys45bToCSLFadvkxGSwRr1rqtKn2mFDCABIsLv7%2FSod9EAlzyUaQQnzZIUpY6%2FqUpxr2nyRCXbwHlgMNhjlo3YnftX1v7x9F34nk%2FHUtd8qpQqage4yDsMhvN8BsSWzzx9H3F74f03p9tgBRki4dKq8%2BoN%2B%2Bm6XQ0uf3Fvd6WdV3WGKSZF8E6kHVWoeK%2FgOXcNdLS37JVC6Pxni1OF3gQ4yEzaD8GhLY9gHz%2F0l2AxNPqlwsUB%2BAO8YjH1LO8zzzf7NJDZ5xt43byFfmVTZMyoT2U%2FuM3HI5GTmx3D6WIFY8RuC87eNF8bPsnPCVN9LAu8py%2ByKS0H0JqXbunztKG5UdD5KgAe9aZA5I3fC22DVeqHmUyOUs6gaDhQgUktF%2Bemtm4Mxo08c2GBr2x7mdDiLg%2F%2FuFl9ELuHmSRjx9X70XB4FeCBtKc5Yu5KrxVvofQMgkGJe4gtX8zvZgaFVnLgW2jYRk3GJMMnU0skGOqUB505uYEH8aau6%2F3%2Bebrpg4gyGUPe27fq55RG%2BV%2BwjkSJ%2BpgMVfZqWOv9FkokPEW4ir3xJeP7iP1Yl8yRfQwcuWpOCPRgSyJN5MYhemJ%2FoEDg1Pa6sv0hdpAHc91AC7kT%2Bfm%2FI9KKyBX68cL3fBKMWbisP7kkrArSbiO1YV13FjSph%2BYHpzAY%2B9wRFx9eq0hwIn7L9965Tm%2FWq%2BoFeGRhL2CbRZxUE&X-Amz-Signature=574cbf788d2a443442b22bfb36ffbdd8b3e4b367f2d49a2257c5d0b0a30aa9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK2JI55M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBz1ZjkGIv%2B5t9PEBjGt1bSc8Q16C7TBaPszzC20laKAiEAq9c853QZXpk4HNb%2Bo92RSp4qv3EgzY47FDe4R%2B7FJRgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJzS1MEmRFX0LStDsyrcA3O2xIvuQ9BA9HfHXN2jMew%2FwNVLgW3EmFh4SUn%2B7DCjgQnt%2F2YGS28F%2BkGopLL1PI4j7SGy7jn9mhZ%2F7hMLY8XeC7HKEQdR0guwEfA9QHL0VIoDzBl15YBAr1gwy%2BgH6xGNsiIgh%2FzD4CUa74r7saxVAESlbys45bToCSLFadvkxGSwRr1rqtKn2mFDCABIsLv7%2FSod9EAlzyUaQQnzZIUpY6%2FqUpxr2nyRCXbwHlgMNhjlo3YnftX1v7x9F34nk%2FHUtd8qpQqage4yDsMhvN8BsSWzzx9H3F74f03p9tgBRki4dKq8%2BoN%2B%2Bm6XQ0uf3Fvd6WdV3WGKSZF8E6kHVWoeK%2FgOXcNdLS37JVC6Pxni1OF3gQ4yEzaD8GhLY9gHz%2F0l2AxNPqlwsUB%2BAO8YjH1LO8zzzf7NJDZ5xt43byFfmVTZMyoT2U%2FuM3HI5GTmx3D6WIFY8RuC87eNF8bPsnPCVN9LAu8py%2ByKS0H0JqXbunztKG5UdD5KgAe9aZA5I3fC22DVeqHmUyOUs6gaDhQgUktF%2Bemtm4Mxo08c2GBr2x7mdDiLg%2F%2FuFl9ELuHmSRjx9X70XB4FeCBtKc5Yu5KrxVvofQMgkGJe4gtX8zvZgaFVnLgW2jYRk3GJMMnU0skGOqUB505uYEH8aau6%2F3%2Bebrpg4gyGUPe27fq55RG%2BV%2BwjkSJ%2BpgMVfZqWOv9FkokPEW4ir3xJeP7iP1Yl8yRfQwcuWpOCPRgSyJN5MYhemJ%2FoEDg1Pa6sv0hdpAHc91AC7kT%2Bfm%2FI9KKyBX68cL3fBKMWbisP7kkrArSbiO1YV13FjSph%2BYHpzAY%2B9wRFx9eq0hwIn7L9965Tm%2FWq%2BoFeGRhL2CbRZxUE&X-Amz-Signature=f6cd715e104a4d8404c7a3060ecd7488c324fa786cadb59c4357c5d5652f734d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
