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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLUGQNK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkCXYx0x7QvSUuK%2BrtgmFsI6aJ%2Bcgh9eRvHdf81B3%2FCAiEA0MCIuCgFUveuTRwj4VSOijfled9SN%2FYgvvwgLwC8lzwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMfyeY3jJ7BWIPqUACrcA%2BquQWazYMYPzXswYvwCM9t3e%2FdyF9UQWuwqLhskXkTY28D2%2B4RdHpb%2B7%2Baaq8MTfR%2B9Q4mL9EU4OJ8fDuiLWX9UmyWPLki%2FeqqgLUzKnRwjp%2BFr7WD3rlPPhHD1rGFzWteJf1ni37kn%2BD%2B5NZnjaWNUvk8%2BmmgsRu9357sdNuYzKen%2FiFH3pr8vClmNWNoFBe0fYKkh81qqd%2B6gB1AisC13hYsVx62YqFNpp3Btojn735QbMs4SYA8BkXoMgskYwNkkZMCB6H%2FnvsV32VhUWddWZsdi8A98sBglMOpzKcQJGGYYRWEeUETFkR74pf4VFqidu8FtrHwTT%2Byl%2BVRWdexwB7PAp0Vos9MTeyR0wA6GCRSj4cLaLVDqafx%2FfWeP9sQPIchYqZqwTXobZBr8K0vJZF2WCI1HPhyOW7Eq97%2BXB3Gq1cZqfd81TOyjZZCcaU%2BiTL15nJjnWy%2FGph95eZybNF%2BwJU4zuzgCyNLUCK0U%2BRfacJueWZ1GrEeAyLSLMghDDDLrEh1%2Bp0IZlcxYnAOf%2BDdZwjg55XVez2ULDfsJVUaduW7jgU4l2tilh6Wl7g1FU37fnwMB%2BWGSVw%2FVOb%2BL0dUzPRVzAgzGvrw1CULmUExPNpb0WwNogSx9MNadicoGOqUBJhCNWMo6fmkqyyA8NBMD0kVTDqSmgyL%2BUlnLItfRINejsU%2BChCOKxRwCzmwHnpECc6QAeubc8PZ%2BugtQgU3%2F7zK%2FhVTXu3eU%2BSczomr%2BGwcKSXPRsm%2FGfanRNHSzQuQfnGYBJeimUev1ukhVi2QZwZXHtthniRpjLtY7n4%2BeSXQi2atzgFS5Y32eu2AvEWMguwZMAhsJzAVNE%2B0E90wpS2KubuMH&X-Amz-Signature=a69e984bc33a33f75beac64ab55e1d6e471b5119345a5042b0fe6956246381f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLUGQNK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkCXYx0x7QvSUuK%2BrtgmFsI6aJ%2Bcgh9eRvHdf81B3%2FCAiEA0MCIuCgFUveuTRwj4VSOijfled9SN%2FYgvvwgLwC8lzwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMfyeY3jJ7BWIPqUACrcA%2BquQWazYMYPzXswYvwCM9t3e%2FdyF9UQWuwqLhskXkTY28D2%2B4RdHpb%2B7%2Baaq8MTfR%2B9Q4mL9EU4OJ8fDuiLWX9UmyWPLki%2FeqqgLUzKnRwjp%2BFr7WD3rlPPhHD1rGFzWteJf1ni37kn%2BD%2B5NZnjaWNUvk8%2BmmgsRu9357sdNuYzKen%2FiFH3pr8vClmNWNoFBe0fYKkh81qqd%2B6gB1AisC13hYsVx62YqFNpp3Btojn735QbMs4SYA8BkXoMgskYwNkkZMCB6H%2FnvsV32VhUWddWZsdi8A98sBglMOpzKcQJGGYYRWEeUETFkR74pf4VFqidu8FtrHwTT%2Byl%2BVRWdexwB7PAp0Vos9MTeyR0wA6GCRSj4cLaLVDqafx%2FfWeP9sQPIchYqZqwTXobZBr8K0vJZF2WCI1HPhyOW7Eq97%2BXB3Gq1cZqfd81TOyjZZCcaU%2BiTL15nJjnWy%2FGph95eZybNF%2BwJU4zuzgCyNLUCK0U%2BRfacJueWZ1GrEeAyLSLMghDDDLrEh1%2Bp0IZlcxYnAOf%2BDdZwjg55XVez2ULDfsJVUaduW7jgU4l2tilh6Wl7g1FU37fnwMB%2BWGSVw%2FVOb%2BL0dUzPRVzAgzGvrw1CULmUExPNpb0WwNogSx9MNadicoGOqUBJhCNWMo6fmkqyyA8NBMD0kVTDqSmgyL%2BUlnLItfRINejsU%2BChCOKxRwCzmwHnpECc6QAeubc8PZ%2BugtQgU3%2F7zK%2FhVTXu3eU%2BSczomr%2BGwcKSXPRsm%2FGfanRNHSzQuQfnGYBJeimUev1ukhVi2QZwZXHtthniRpjLtY7n4%2BeSXQi2atzgFS5Y32eu2AvEWMguwZMAhsJzAVNE%2B0E90wpS2KubuMH&X-Amz-Signature=0d860e59ba3b18db2e1017f3a601e4689703bdcdba3ed3b52cc2624810d192f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
