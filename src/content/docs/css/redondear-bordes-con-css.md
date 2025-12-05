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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSWASS2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaWP3Otw4ovi8HGL6AUaSDYvr%2BT1E0O0zL3GRi2H1wgwIhAI3NJCMDXlkqzfhAAhj4XOw5JpwrK2Cl8ttnF3LQTfUTKv8DCFoQABoMNjM3NDIzMTgzODA1IgxVIcQsEqaQkbJxT%2FEq3AMdoVDTdPqHks93L5UegjgvS%2BCv1FLq4q%2FrN9orLlENnPzAb873ESP%2FXDhUAXa2ncZpe2gBIYqN4O%2FwzLx1%2BziPqnKuOVdAd8kSyFCsl0e1Kv0usnXTkHJInnRtFSt5Ka2BcpDyCjB6cww40kb6%2FFpMmQWDdwyv3CHn06%2Bcxq6VPhaCyrax2r6hq9qxEiq9Bv1GIf4SQkCSCzxt9xhvNlSvACzPRiGRTGOzhLzyqCG%2BmMop63ZOb8HvZjdvwflSWkdKjY2YYFk9bCLtfNZqX9BBRcSckxYJk5E2Qt1EOeXx%2FEiDfO%2FAVb8sa%2FnJweRlZLzcmSI3baRI6%2BNVbZB%2BuLhFTgqhhMbsfZpVo%2BO0kuf1ydz1Y5EYe4AVyX6yw3IEWiUc5Qtu23jEoErRbjbAK1XkUm1h554P9tACww5ULXVVs5MxulcZy%2B2nLzzi3nH62bBYybIewCpPy98GC51dA8FVaJNA0noMiSzPILyuf95kydF2EiTE2xz8%2FwG4u9fewjYyLsc8OrtQDjjxXTZTvZ1APUTE%2BQvI%2BIxVPIeEX2goMuatg3Tve%2BKJlnL37nNAO6igHVoBGf5mAyxnBqr6gANR%2FBMoGeeoaUoSQsvTxSxHBi9vqfT5UJGzD945ATDqxsrJBjqkAYG%2BUwcoxh6Rmhdx2e6W%2B3apI6br46upXTESmCNiT7zazY1AxcJU2awS85inzWzGOjyODvRE7kXDWBnMuPyV5AekSz1ckaNDwKLmc%2B9jTbi4fTUuaAlf52IdUgVaDWrqGNtXuMAAm0WcZzzrKdbTG%2FNTXEeykLmMHN1QiDoLfCpKGGmSm%2BVLYJ%2FO9drm6MQvmUncLoryRf8sWolHNEao4vblHzBh&X-Amz-Signature=2f4efd3a8c94b1d47c2e4056b3605fa1fa9343655cd3fabc68e518b3c7981405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSWASS2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaWP3Otw4ovi8HGL6AUaSDYvr%2BT1E0O0zL3GRi2H1wgwIhAI3NJCMDXlkqzfhAAhj4XOw5JpwrK2Cl8ttnF3LQTfUTKv8DCFoQABoMNjM3NDIzMTgzODA1IgxVIcQsEqaQkbJxT%2FEq3AMdoVDTdPqHks93L5UegjgvS%2BCv1FLq4q%2FrN9orLlENnPzAb873ESP%2FXDhUAXa2ncZpe2gBIYqN4O%2FwzLx1%2BziPqnKuOVdAd8kSyFCsl0e1Kv0usnXTkHJInnRtFSt5Ka2BcpDyCjB6cww40kb6%2FFpMmQWDdwyv3CHn06%2Bcxq6VPhaCyrax2r6hq9qxEiq9Bv1GIf4SQkCSCzxt9xhvNlSvACzPRiGRTGOzhLzyqCG%2BmMop63ZOb8HvZjdvwflSWkdKjY2YYFk9bCLtfNZqX9BBRcSckxYJk5E2Qt1EOeXx%2FEiDfO%2FAVb8sa%2FnJweRlZLzcmSI3baRI6%2BNVbZB%2BuLhFTgqhhMbsfZpVo%2BO0kuf1ydz1Y5EYe4AVyX6yw3IEWiUc5Qtu23jEoErRbjbAK1XkUm1h554P9tACww5ULXVVs5MxulcZy%2B2nLzzi3nH62bBYybIewCpPy98GC51dA8FVaJNA0noMiSzPILyuf95kydF2EiTE2xz8%2FwG4u9fewjYyLsc8OrtQDjjxXTZTvZ1APUTE%2BQvI%2BIxVPIeEX2goMuatg3Tve%2BKJlnL37nNAO6igHVoBGf5mAyxnBqr6gANR%2FBMoGeeoaUoSQsvTxSxHBi9vqfT5UJGzD945ATDqxsrJBjqkAYG%2BUwcoxh6Rmhdx2e6W%2B3apI6br46upXTESmCNiT7zazY1AxcJU2awS85inzWzGOjyODvRE7kXDWBnMuPyV5AekSz1ckaNDwKLmc%2B9jTbi4fTUuaAlf52IdUgVaDWrqGNtXuMAAm0WcZzzrKdbTG%2FNTXEeykLmMHN1QiDoLfCpKGGmSm%2BVLYJ%2FO9drm6MQvmUncLoryRf8sWolHNEao4vblHzBh&X-Amz-Signature=4a40dcac8afb6b2741f237322a3ca8f0e8a194f16244f1ce5a11d76de9851ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
