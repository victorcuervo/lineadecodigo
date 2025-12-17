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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCHEGKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQRCyf31P4801%2FW83Kp64V6qnM%2BOZ8YwGP7NyVO6NU2AiEAq52dLo9V1TijkQGkJieOnZCm%2BO1Wx%2FSTrwhQFvcCKb8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNbLBinxhsq2SG7xSCrcA4ECWTSuyNhrI5%2FJdsl3FhuAegld0ioTNeVK7IikAM2LXSFKO%2FWY9HMVe9xp8TW4hXW5sqrD5gsO9qA3zOdL%2F8MgiP6kiKRsCxOKbZgvs5OUFPn%2FcmCnk6UJaNMNxpfe30EMcluKZ3hxFI1vWFoi8Nf6Wh0fs7KHNg2u4baOwYxou6SQ9TqjSTsCGCNhL2C05OfWnlo0vxx3dNEIpxEEqodWXdfush7j6cQbEDIg0AmnABx6uqHyNbPUGj%2Bal%2BeE5QRNzbBk3o1RG%2FtVvnuIJjIoNhCnAgLSdTl%2B9gYYma91LdDZCjUz2cCEiVZefeKd0wiwXfDNcT06bbnu18BXXI10GTUTgvuLjeK4bQ0%2BaY8J4gIq2cC0MGlRdDFqC2JSCFifO9gzXd1Hd8cdEh1fTFJohcchxzmo2zgXOzz8KN%2BURNOPaDZ9pGRJa0%2BtNuroSKzvRk5MWxugJ1J0eqGGUpXa%2BZP22VhndfAEmhg6MBjh3OzHXw2UN4bf9%2BiZFAKOd7PSoVU%2FMyWL%2FZ3yJGnQN0uIu9G1dxyOSt9wHdzVKJnrr0MZdcvVGy0Wi1nWr%2FZnQpj5cWadejELGSCmaJQQMpE8vHVLOZrXr6WIWC2%2FhemhbZgqPF1%2FNpQr8SCgMOTRicoGOqUBGpXxlCxLAjCkBkIuthhdnV7iWvzad71sxpwmx1e0RjOR%2BrQoMFHQ8o1f4gfdncKwLvHi%2BDiQlaok5lelDqh%2Bp3vOo895tp7iKXhn6gIYFl5Y4RInU3HioixnfzewIBNsSwcWDPuxcU%2BLFRfjrsCePZgaHG9phLFsp%2BkM4rfGw7MIaULh36WK6WMcS%2FyMO9NE0MPdMiAqC4jTrzYsLL8DkbQ3e2a7&X-Amz-Signature=bc919dc11e481840666ae878c153553d9cd732055c67e803a9802a6adf60a7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCHEGKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQRCyf31P4801%2FW83Kp64V6qnM%2BOZ8YwGP7NyVO6NU2AiEAq52dLo9V1TijkQGkJieOnZCm%2BO1Wx%2FSTrwhQFvcCKb8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNbLBinxhsq2SG7xSCrcA4ECWTSuyNhrI5%2FJdsl3FhuAegld0ioTNeVK7IikAM2LXSFKO%2FWY9HMVe9xp8TW4hXW5sqrD5gsO9qA3zOdL%2F8MgiP6kiKRsCxOKbZgvs5OUFPn%2FcmCnk6UJaNMNxpfe30EMcluKZ3hxFI1vWFoi8Nf6Wh0fs7KHNg2u4baOwYxou6SQ9TqjSTsCGCNhL2C05OfWnlo0vxx3dNEIpxEEqodWXdfush7j6cQbEDIg0AmnABx6uqHyNbPUGj%2Bal%2BeE5QRNzbBk3o1RG%2FtVvnuIJjIoNhCnAgLSdTl%2B9gYYma91LdDZCjUz2cCEiVZefeKd0wiwXfDNcT06bbnu18BXXI10GTUTgvuLjeK4bQ0%2BaY8J4gIq2cC0MGlRdDFqC2JSCFifO9gzXd1Hd8cdEh1fTFJohcchxzmo2zgXOzz8KN%2BURNOPaDZ9pGRJa0%2BtNuroSKzvRk5MWxugJ1J0eqGGUpXa%2BZP22VhndfAEmhg6MBjh3OzHXw2UN4bf9%2BiZFAKOd7PSoVU%2FMyWL%2FZ3yJGnQN0uIu9G1dxyOSt9wHdzVKJnrr0MZdcvVGy0Wi1nWr%2FZnQpj5cWadejELGSCmaJQQMpE8vHVLOZrXr6WIWC2%2FhemhbZgqPF1%2FNpQr8SCgMOTRicoGOqUBGpXxlCxLAjCkBkIuthhdnV7iWvzad71sxpwmx1e0RjOR%2BrQoMFHQ8o1f4gfdncKwLvHi%2BDiQlaok5lelDqh%2Bp3vOo895tp7iKXhn6gIYFl5Y4RInU3HioixnfzewIBNsSwcWDPuxcU%2BLFRfjrsCePZgaHG9phLFsp%2BkM4rfGw7MIaULh36WK6WMcS%2FyMO9NE0MPdMiAqC4jTrzYsLL8DkbQ3e2a7&X-Amz-Signature=0130cfe1dbd519047cdd6e30bd24fbddefe8f934190106de66dca30d6020bdc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
