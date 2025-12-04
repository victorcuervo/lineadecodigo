---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5XLYNI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDMZzp%2FIMRtRaAApUUnnz%2FfHZCUnNGE1MaFSshIjLHQCgIgK4edoRTyj42uBwC9LySr%2FzFv7yoMpwbF2taQFqdq7cYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDN%2BGgONEDML8nM97MCrcAyynxeSJMjcoVkeFox%2Bax3vLGa57LN3ZcGDzpuFIMurGke7%2BjL1XXFUMhL3%2F7FFBSOhw1cogYGGU0zU%2BdZpSfXFxDZEGU42HBEacgqBSSXMXNFaBuNiPMnBx0mb8QIefk7pFvHVemRfpZwd6ttYE9agm9voj9iL%2B%2FIStIKY1ChmytMcwD4P%2FxAGy6S%2Fio2F56t1IXUXe0chKNiEfRfAzqPKU6X6boALJDMY4jY1RdfY9ySQrYfrK1q1zq%2F%2BJOXTo0AftS8Nil6zeLmEAinN02RDwCYFrtK1lmpPnryv77gzuSiF83D7W2GmFKdB5Y%2BuP9qOEbNQ12NlnfYq3Tw%2F2wmBhUyCQSEfR%2FjYeqFOloKtM8DjMFdRpRSlH0j9Mhz1Y%2BdbNNfBLsXPhXpBmh1PtGP4B9DKnp8cFb9mNZJA67K6yih48yFpbZQNE8aRKY2Z%2By24%2F%2FrNbahAq0LguDuXQzSKp1qceRIof8d6nMKm3vUtzV%2FSezjZJIvfckjD1yk%2B%2BA95tj8%2FJqZy2VawQXZ0teZzbickz%2BGxRT%2FPXcd%2BiTGNHM5HDba3GyC%2FZdRJjCc2J4zk1Rn99ufBn9DmXST28n0yuBbZjGBlbzrMdXc85dYU5Jq1U1wS13Z3PhmH8MPrKxMkGOqUBLO3bXczasac6tu%2B%2FPVaDGdrY7v3hAoyNgXIYu2xOjmn4hr18BFCqUYF7589LE7nvjBvCOHuBTbcVN0nP5beRbWMoiopxAigkoYdOYUOmcyiKVduhuRw%2BIdXvDuT%2Bq6CWxr973Q2fZFlyLg3yQHbI7wlotvpFWl7iSVoBPWt4E4E%2BVBfY5yvvVRwSy4v2QHJD3gEOe%2FX6ejjX13LpJM2b5tHwlCPp&X-Amz-Signature=db7c7fe6fc2833a60bd32ee9b47ca58f0dea63a62bce0a1b48de835ba35b9247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5XLYNI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDMZzp%2FIMRtRaAApUUnnz%2FfHZCUnNGE1MaFSshIjLHQCgIgK4edoRTyj42uBwC9LySr%2FzFv7yoMpwbF2taQFqdq7cYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDN%2BGgONEDML8nM97MCrcAyynxeSJMjcoVkeFox%2Bax3vLGa57LN3ZcGDzpuFIMurGke7%2BjL1XXFUMhL3%2F7FFBSOhw1cogYGGU0zU%2BdZpSfXFxDZEGU42HBEacgqBSSXMXNFaBuNiPMnBx0mb8QIefk7pFvHVemRfpZwd6ttYE9agm9voj9iL%2B%2FIStIKY1ChmytMcwD4P%2FxAGy6S%2Fio2F56t1IXUXe0chKNiEfRfAzqPKU6X6boALJDMY4jY1RdfY9ySQrYfrK1q1zq%2F%2BJOXTo0AftS8Nil6zeLmEAinN02RDwCYFrtK1lmpPnryv77gzuSiF83D7W2GmFKdB5Y%2BuP9qOEbNQ12NlnfYq3Tw%2F2wmBhUyCQSEfR%2FjYeqFOloKtM8DjMFdRpRSlH0j9Mhz1Y%2BdbNNfBLsXPhXpBmh1PtGP4B9DKnp8cFb9mNZJA67K6yih48yFpbZQNE8aRKY2Z%2By24%2F%2FrNbahAq0LguDuXQzSKp1qceRIof8d6nMKm3vUtzV%2FSezjZJIvfckjD1yk%2B%2BA95tj8%2FJqZy2VawQXZ0teZzbickz%2BGxRT%2FPXcd%2BiTGNHM5HDba3GyC%2FZdRJjCc2J4zk1Rn99ufBn9DmXST28n0yuBbZjGBlbzrMdXc85dYU5Jq1U1wS13Z3PhmH8MPrKxMkGOqUBLO3bXczasac6tu%2B%2FPVaDGdrY7v3hAoyNgXIYu2xOjmn4hr18BFCqUYF7589LE7nvjBvCOHuBTbcVN0nP5beRbWMoiopxAigkoYdOYUOmcyiKVduhuRw%2BIdXvDuT%2Bq6CWxr973Q2fZFlyLg3yQHbI7wlotvpFWl7iSVoBPWt4E4E%2BVBfY5yvvVRwSy4v2QHJD3gEOe%2FX6ejjX13LpJM2b5tHwlCPp&X-Amz-Signature=7a889b68dcc9561f655f0933d9ae622ca99fd4978cbee31d29c1ee51b5313a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
