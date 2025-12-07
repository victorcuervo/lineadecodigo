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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEV5MLUG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGuZWHJoxtCu5vchFTsdYAUCgWVQPxSeIu%2BJmrZK8LdwIgXQEq%2Fzy2Yi1cl28qwQX0w%2FPWIZHOoaQlttzzqki%2FwwIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbm%2FpCfCatc0u77VircAzRKHW3vgKS1f1dnd%2FoOx90MDFt4CAIaWqMI0ObqnKxxQfqmMdGVhhl9mG3lnqmK65oyzfe2uFU%2B8z4VeYXDJiwgCCYHp6nmh8lKnYd5xuuSPGw%2BkgWMfbxGWL%2FM0GMMhVTUligaiVgH6iXkxL0JsKNosdW5d%2BsT25EmOIpK8NT%2Fz3o%2FCJYCcNpxUpjj3%2B%2FAPcYNik6QpwiYiVoEZ%2FoNBPpD6vp4PsFlsJUp07qyOEdnFHyPrptinjCjjK7kknIUJfUEZovv%2BGryiZIDxhNG%2BZlXT0lGJCkX2EfE8F4oe%2BdqyeEh9XwZiOq7p%2B8%2FL5w8bS0hPBdMlWxlWTi84s42b7eGgwmEEASAyJ9Rio6G1Q0P0McPS8iXcwEEN%2BvCu5xj7VsQcPz6ZJO6nxgS5PNc%2FM6Fcy9Xm29ZfHeYSBcaQuFZgJMxd53RdC%2F6q1vVDRv8Sl%2FCSJMWoHtLlu9lUzgu8eZoWDWQGpOt99eBEYkB%2BECwUTd7ROaLnyUsSMMbPfqrAec90ivYFa4Oinw%2F18wxUsGW2j%2FASgjeACrpsYi9Fj4PbKNDmGGUW18abi3GiwYasWbSlJjmfjyTJt02RGS3bKyxfGzgxg%2B07BPz1YDg1hyPUOXFMToffB%2Fc1InCMOif1MkGOqUB0DX7b57pOREUlAqZ4nQuB2b%2BgaBF3usySEm0rTe%2Fw1%2FadUo%2BP1aytB0%2BQ6olR7V%2FIa6TGK8Ftq%2BFMRqp%2FQBpn%2BzGNGgXsw2fwDA4pnz%2BWx%2FTmQWNecX6zWxjPUst4UoBkU7zwFpPOs5Y4UYc5rg61IKfrHR%2FG99Me9clcQ5Tdf7Hu0lF2AnQvYGt8MdgJFHUhflbnqneCaG7eZ3QltZs4FMaSyX6&X-Amz-Signature=4b4e0b120e4af70f731adcb72ebde3996477bd872379995953c11fa192b6de9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEV5MLUG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGuZWHJoxtCu5vchFTsdYAUCgWVQPxSeIu%2BJmrZK8LdwIgXQEq%2Fzy2Yi1cl28qwQX0w%2FPWIZHOoaQlttzzqki%2FwwIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbm%2FpCfCatc0u77VircAzRKHW3vgKS1f1dnd%2FoOx90MDFt4CAIaWqMI0ObqnKxxQfqmMdGVhhl9mG3lnqmK65oyzfe2uFU%2B8z4VeYXDJiwgCCYHp6nmh8lKnYd5xuuSPGw%2BkgWMfbxGWL%2FM0GMMhVTUligaiVgH6iXkxL0JsKNosdW5d%2BsT25EmOIpK8NT%2Fz3o%2FCJYCcNpxUpjj3%2B%2FAPcYNik6QpwiYiVoEZ%2FoNBPpD6vp4PsFlsJUp07qyOEdnFHyPrptinjCjjK7kknIUJfUEZovv%2BGryiZIDxhNG%2BZlXT0lGJCkX2EfE8F4oe%2BdqyeEh9XwZiOq7p%2B8%2FL5w8bS0hPBdMlWxlWTi84s42b7eGgwmEEASAyJ9Rio6G1Q0P0McPS8iXcwEEN%2BvCu5xj7VsQcPz6ZJO6nxgS5PNc%2FM6Fcy9Xm29ZfHeYSBcaQuFZgJMxd53RdC%2F6q1vVDRv8Sl%2FCSJMWoHtLlu9lUzgu8eZoWDWQGpOt99eBEYkB%2BECwUTd7ROaLnyUsSMMbPfqrAec90ivYFa4Oinw%2F18wxUsGW2j%2FASgjeACrpsYi9Fj4PbKNDmGGUW18abi3GiwYasWbSlJjmfjyTJt02RGS3bKyxfGzgxg%2B07BPz1YDg1hyPUOXFMToffB%2Fc1InCMOif1MkGOqUB0DX7b57pOREUlAqZ4nQuB2b%2BgaBF3usySEm0rTe%2Fw1%2FadUo%2BP1aytB0%2BQ6olR7V%2FIa6TGK8Ftq%2BFMRqp%2FQBpn%2BzGNGgXsw2fwDA4pnz%2BWx%2FTmQWNecX6zWxjPUst4UoBkU7zwFpPOs5Y4UYc5rg61IKfrHR%2FG99Me9clcQ5Tdf7Hu0lF2AnQvYGt8MdgJFHUhflbnqneCaG7eZ3QltZs4FMaSyX6&X-Amz-Signature=c2f3e91f3168cd33ca187a00057aaf36b2339aaae6a4d24f176582f56a739a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
