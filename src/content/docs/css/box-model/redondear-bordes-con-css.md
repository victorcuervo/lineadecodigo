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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YOXALA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fvv13tAPYcr3DSB6cEsBbYWyH5Sj%2BqrU9xHaJJYd3YgIgYPp7An1qecqeky6YAenUbRiqsAOx793I0fRHBVDc1l8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF%2B7AGGO3ygu2HjMcircAwpNT8S7qAZUk4CyqGuw3hUc2zkR8F7SGZbVlJu21COx7iP2NE7pfqsFHzZ3vRBVbVDFdDfo5L0lpZv3Krcpui4QD8uBdFw%2BtOA9yFAhYgKB0ZCdZlleGa18BSG%2Fbh83eAonRfKsOdSh%2Bgik6sWokTeX97tap7gnkLgyQZFRCs%2BixbKVPRyVXyZStXqwCQgogBfigP4nfhLCcvlEE%2FCqNuu8ObXIwVggPNhdjY%2FfYFCd9fdDzeN7bE7DILo3rRo8gS%2BFuRU4%2BV5oKTWjJgN90ZsZcH1ilddJYm4IAEJk4FjOoqObX6ChWFOmDGk9M8EswVoI76XXQCZDHEixZcew8dm3gvPSO2wZ%2B%2BHLIE1%2FvYMjTgIvquajvDnWluDDG46T%2B9%2B0YcZPf3FcEGsa4WyHQNGqLBTlNygjHhHYR6WsZCEpdsYnfET25iPAWxhgHnZp7tV4qJ79hwZ6whnm004FEdoKS6K45K%2FS42gskVOExp8eaw9mouuiju41FPDT%2BLDMLqXFMLwsrGnxLR5dpaQRBcTThufo17eHd0%2FnXw%2BP0CSOgwW2tym79rrX9jW1djY7zpqNpzKuGaxL0uK11%2F9EQOeESi9NqyLU7rFMb2Vr64vKPZOBsbSvB56deR%2B2MIHRicoGOqUBmYtimfcFnxojdKAYrwLWm7%2BVnodBUCODaj%2BVamYAj64oZXJQ6%2BXt5nWXY9zu9eVWrZ%2Bmtau7UkwJfvrIGmz43A3%2BUm%2FGR%2Fm5x2WXXditleX%2F9X0MNZNuidxBI4yXdD%2B2Ec3hPJ9H7%2B%2BHmd4w6JnbFGlIAtXyTMkOV7OcofLCyiI3XFLuon8deUebLqpRre7XbZsVgV%2FxubcYuVpU07bI5%2BtaPJ6k&X-Amz-Signature=1835935ae8870f088d449ccfa1f5a37247371b791d67d92c6399bbbc247c244d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YOXALA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fvv13tAPYcr3DSB6cEsBbYWyH5Sj%2BqrU9xHaJJYd3YgIgYPp7An1qecqeky6YAenUbRiqsAOx793I0fRHBVDc1l8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF%2B7AGGO3ygu2HjMcircAwpNT8S7qAZUk4CyqGuw3hUc2zkR8F7SGZbVlJu21COx7iP2NE7pfqsFHzZ3vRBVbVDFdDfo5L0lpZv3Krcpui4QD8uBdFw%2BtOA9yFAhYgKB0ZCdZlleGa18BSG%2Fbh83eAonRfKsOdSh%2Bgik6sWokTeX97tap7gnkLgyQZFRCs%2BixbKVPRyVXyZStXqwCQgogBfigP4nfhLCcvlEE%2FCqNuu8ObXIwVggPNhdjY%2FfYFCd9fdDzeN7bE7DILo3rRo8gS%2BFuRU4%2BV5oKTWjJgN90ZsZcH1ilddJYm4IAEJk4FjOoqObX6ChWFOmDGk9M8EswVoI76XXQCZDHEixZcew8dm3gvPSO2wZ%2B%2BHLIE1%2FvYMjTgIvquajvDnWluDDG46T%2B9%2B0YcZPf3FcEGsa4WyHQNGqLBTlNygjHhHYR6WsZCEpdsYnfET25iPAWxhgHnZp7tV4qJ79hwZ6whnm004FEdoKS6K45K%2FS42gskVOExp8eaw9mouuiju41FPDT%2BLDMLqXFMLwsrGnxLR5dpaQRBcTThufo17eHd0%2FnXw%2BP0CSOgwW2tym79rrX9jW1djY7zpqNpzKuGaxL0uK11%2F9EQOeESi9NqyLU7rFMb2Vr64vKPZOBsbSvB56deR%2B2MIHRicoGOqUBmYtimfcFnxojdKAYrwLWm7%2BVnodBUCODaj%2BVamYAj64oZXJQ6%2BXt5nWXY9zu9eVWrZ%2Bmtau7UkwJfvrIGmz43A3%2BUm%2FGR%2Fm5x2WXXditleX%2F9X0MNZNuidxBI4yXdD%2B2Ec3hPJ9H7%2B%2BHmd4w6JnbFGlIAtXyTMkOV7OcofLCyiI3XFLuon8deUebLqpRre7XbZsVgV%2FxubcYuVpU07bI5%2BtaPJ6k&X-Amz-Signature=67df2e773e19622f39109e873313cb7a726ead526172771bf15dd1f2d5903f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
