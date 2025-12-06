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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQJL4Q7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCas6FwAW68zwxxlHMJkUoUZ8qzFIBgJBTiDOrjuT3migIgLNzjyQidNSu1fuw9g1iOYKlL1VWXNPEQ3CnXqlwlZfwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDS4TjGAgAAgJYKIiSrcA46K05ZD%2BSH9HcmckY%2FRe2ZvJImpAGakyXl0DHleSkT2cSNzJNB6HSQzH7sy6NDXHipfkYj2T9iO4P%2B0GUE5MN9HhKQM9%2BvRBrJg%2BUF00sMYX9V5QlLzto6noAYGNBVJFDeIvwlgLOF5%2FaijZVJNZh4th1uRcG7v3yJ%2FYFquOwKSzCVzsSVBXHrNw7sKdjxJh0NvZghHN3RCMdqWjsdCk8OIFtuNWuejM5fqiEl3lvEAXBaKU%2BhnH6M%2FyDBLk%2Bs2M6AEBk2eYYkBsWqQhxJkhzTxZNmRCmKciRvKEZt8FF4oZRe1IT1ZK5Kvgu11HZd2uFCe16C2mcfEbtHpME3bSHG3nb1l95nG%2FDZ6okST%2BWaS4bl4fTan9sS3%2FXpJAg3FTLASBe0VcdCs3kgnq%2BgXhzhaENXa5b4viW54aMZOABrtlHXZWPYfScwyQxAQr8JFn3IvaDJmuwFI5U4%2BXUsHt6PhK87mNZZqve4fNMJG89T5zXDQmh8epAWDLO%2B%2BQwsQTCaEKd4dSg4aXuaATFH0hQ2y2N24VcGBNr11fK5DqpzBoFkCBpraJ6mPfGlgw0I8R2LopIbBmuCq2qGxs6KHJf4i0HMr37LsW3l9%2FhTGkMEAj1JLk%2BobpnMoKHeJMOTJ0ckGOqUBju%2BLwZ7KjjMUX4A0QLvSu6OsaQ2xiP4mgPhi9e1M5ivt3Rjw67%2BlkJfWY28VfXTZU%2FNXHAloPiqYoe%2B7g4YhWhjb7Fw7apZMlCDEOX51WTbKjycR%2FVNbETMHbycV0TNTgVk9TTbc9cQbw%2FmFXWfl2kSUIox7gs4BEeEc3iDVSGrkwNmAXCXZPWcvZtHt7ic2K%2B4EGT24uchLqOKHUqoqKlE0A7PD&X-Amz-Signature=104e2c90ba7288ea49196cba5010cb7b12f9c45f03c632f96774d36db204d482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQJL4Q7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCas6FwAW68zwxxlHMJkUoUZ8qzFIBgJBTiDOrjuT3migIgLNzjyQidNSu1fuw9g1iOYKlL1VWXNPEQ3CnXqlwlZfwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDS4TjGAgAAgJYKIiSrcA46K05ZD%2BSH9HcmckY%2FRe2ZvJImpAGakyXl0DHleSkT2cSNzJNB6HSQzH7sy6NDXHipfkYj2T9iO4P%2B0GUE5MN9HhKQM9%2BvRBrJg%2BUF00sMYX9V5QlLzto6noAYGNBVJFDeIvwlgLOF5%2FaijZVJNZh4th1uRcG7v3yJ%2FYFquOwKSzCVzsSVBXHrNw7sKdjxJh0NvZghHN3RCMdqWjsdCk8OIFtuNWuejM5fqiEl3lvEAXBaKU%2BhnH6M%2FyDBLk%2Bs2M6AEBk2eYYkBsWqQhxJkhzTxZNmRCmKciRvKEZt8FF4oZRe1IT1ZK5Kvgu11HZd2uFCe16C2mcfEbtHpME3bSHG3nb1l95nG%2FDZ6okST%2BWaS4bl4fTan9sS3%2FXpJAg3FTLASBe0VcdCs3kgnq%2BgXhzhaENXa5b4viW54aMZOABrtlHXZWPYfScwyQxAQr8JFn3IvaDJmuwFI5U4%2BXUsHt6PhK87mNZZqve4fNMJG89T5zXDQmh8epAWDLO%2B%2BQwsQTCaEKd4dSg4aXuaATFH0hQ2y2N24VcGBNr11fK5DqpzBoFkCBpraJ6mPfGlgw0I8R2LopIbBmuCq2qGxs6KHJf4i0HMr37LsW3l9%2FhTGkMEAj1JLk%2BobpnMoKHeJMOTJ0ckGOqUBju%2BLwZ7KjjMUX4A0QLvSu6OsaQ2xiP4mgPhi9e1M5ivt3Rjw67%2BlkJfWY28VfXTZU%2FNXHAloPiqYoe%2B7g4YhWhjb7Fw7apZMlCDEOX51WTbKjycR%2FVNbETMHbycV0TNTgVk9TTbc9cQbw%2FmFXWfl2kSUIox7gs4BEeEc3iDVSGrkwNmAXCXZPWcvZtHt7ic2K%2B4EGT24uchLqOKHUqoqKlE0A7PD&X-Amz-Signature=a6a3dc063db42149e5d526c4ea614d5dc9c30d5af25e5307a80abb07bb04e50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
