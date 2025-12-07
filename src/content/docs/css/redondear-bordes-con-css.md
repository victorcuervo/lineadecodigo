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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3FB4W2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnRmUjGXmKrGSsfLpJ7WMGhTXGSy79xxspUdaeF9aRdAiBFXp%2BY2NoZf4RK20vk7MMPl8sL9VYrWVuW47nqNztiyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXqPjYY%2BMfpsKbTKtwDVJ3TJBGPjJ5HuqM%2FijWHzu3GvbF7E%2F8UhrFaKUJBSz3kjys6EIMy4GR3qA%2BkshLmycGTBaTRbwc1a4OKUUQG8v3Vo9HzhXpBXyoB3iaI2AqnYgvbmfe39XXJBRH8aKtA6rP%2BaBlVf9BkprjcOx1xN6MeMbVWhaJ7XccWgZ%2BQNOmVuLeeGaM5QUyV3YrGCiTjGK8erR8ahxuyM5QixJ%2FM0U9PwowP3BTKeQ1uvOWI1Na%2FXPCQEW1Br42vES1r%2FW5OxBAUwYvdN7csm5u%2FaYkpWuB2h2ntdFevNgjlANUL5m7oecaTVN20AtMDEQc33LY4LHHoplWIamBdOe%2FFPYaS%2F54kd8fMX8SR6413f4ALzuJtt1ltLPF%2FWvtK%2FY0Pz35uD7lb9grksVocjmzZHJ%2BekEnMi8mqTBfkPekUMPCRHKpj%2BXn2PxsJsmibxbJY0TR36u%2BgUYkqnWqYmPu2Dd8cktKn0bDybrKQvjOpXWGAMtU1%2FmhQBXdo75VsQfK9%2BQ9coxG00NPS7sHOWvHey%2FNjMOeSCpBEnhyZyLujaqjfAUPI4%2BSLtR9R%2F3K9gfaVGSg9dkdp4da7bM99mA2d8G5UU3I8%2Bk9KxoVO09rVfK5tVBBTzeVMRJgciig9yXswqJnVyQY6pgEfT1lbi1F209IVq2nwn1klV%2F%2F5CS%2BtPl4bTn9CyK7uhbupVMc5Z7Rv5oT3eUo%2BdTZNyK7NBJ1cP0uOH6Q2O5DZH29wFxwfs8D1SjXTPbKsaALUxJiThdC8pUaGUsFJ0zdjx2kOC4RTFzxMMjVFy%2BFSxts5l6TytJrOeqHSfR3Vr3gNcESljJgi9j9L8XfoI8nueFYc8HSoB7DoOsaKHDxkB4600ki0&X-Amz-Signature=3cf4e0c1aeef7810f0eb20df8bcd33211bd9ecb9076ccedf017b720f16de367e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3FB4W2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnRmUjGXmKrGSsfLpJ7WMGhTXGSy79xxspUdaeF9aRdAiBFXp%2BY2NoZf4RK20vk7MMPl8sL9VYrWVuW47nqNztiyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXqPjYY%2BMfpsKbTKtwDVJ3TJBGPjJ5HuqM%2FijWHzu3GvbF7E%2F8UhrFaKUJBSz3kjys6EIMy4GR3qA%2BkshLmycGTBaTRbwc1a4OKUUQG8v3Vo9HzhXpBXyoB3iaI2AqnYgvbmfe39XXJBRH8aKtA6rP%2BaBlVf9BkprjcOx1xN6MeMbVWhaJ7XccWgZ%2BQNOmVuLeeGaM5QUyV3YrGCiTjGK8erR8ahxuyM5QixJ%2FM0U9PwowP3BTKeQ1uvOWI1Na%2FXPCQEW1Br42vES1r%2FW5OxBAUwYvdN7csm5u%2FaYkpWuB2h2ntdFevNgjlANUL5m7oecaTVN20AtMDEQc33LY4LHHoplWIamBdOe%2FFPYaS%2F54kd8fMX8SR6413f4ALzuJtt1ltLPF%2FWvtK%2FY0Pz35uD7lb9grksVocjmzZHJ%2BekEnMi8mqTBfkPekUMPCRHKpj%2BXn2PxsJsmibxbJY0TR36u%2BgUYkqnWqYmPu2Dd8cktKn0bDybrKQvjOpXWGAMtU1%2FmhQBXdo75VsQfK9%2BQ9coxG00NPS7sHOWvHey%2FNjMOeSCpBEnhyZyLujaqjfAUPI4%2BSLtR9R%2F3K9gfaVGSg9dkdp4da7bM99mA2d8G5UU3I8%2Bk9KxoVO09rVfK5tVBBTzeVMRJgciig9yXswqJnVyQY6pgEfT1lbi1F209IVq2nwn1klV%2F%2F5CS%2BtPl4bTn9CyK7uhbupVMc5Z7Rv5oT3eUo%2BdTZNyK7NBJ1cP0uOH6Q2O5DZH29wFxwfs8D1SjXTPbKsaALUxJiThdC8pUaGUsFJ0zdjx2kOC4RTFzxMMjVFy%2BFSxts5l6TytJrOeqHSfR3Vr3gNcESljJgi9j9L8XfoI8nueFYc8HSoB7DoOsaKHDxkB4600ki0&X-Amz-Signature=a48e62b58f354ad90f70c37fd04f0588b09e79cd24b416a7a012f5138516c68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
