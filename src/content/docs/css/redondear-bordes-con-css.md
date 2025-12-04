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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZOI5ZW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDOqQ5oCwgtgDbwOYb5lmbSHYE2SOemN6nd45IhJrIvFAiEAsBdxlLsA0c7vm%2ByoXt%2BsO07sAS5A0iJCfxshUqd9HXkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFmQiBIaMeptJmHkNSrcA39jJPvf60%2BSfl5yhi2INdVdtZdWCZ1ddNvccp0ygyx2x%2FyMTPZkrYBW2TDu50mKUsL2H8g8F40hjA2sRmWqbl4HD60nCP46IEs%2BSKIDTGcuynwipC9mWWK%2BIABztqaTsRZ6xTbLVeQjPxjxjuXFQvliP4os72OJK%2BiDA9xar5TNVDKOXVNz4xXRm62yOyx65qY%2F9BHD6h8ssLxDOVABtPOlHK68NnwP2qSeit0Zdrx%2BlHwabzCyCPy74Wg195xhBXUSAnBkRlc0cr5DaN8qHNksgoiNU2W4I2ue%2B00Q5k9F0dOCqVriXRjEhIrlJOLNCxc8VWixd%2BOKh2AXIuSXIgPTh5%2BC128CMOb6xNlGR4MQB6d3HQ8anpXsjHu7cSbq5pFHJuwUGv8j6D1qwcgwU6KdkRl5soJ8o7u%2Fd9cLGMdi4XcF3gL5lqUJh8%2BKp8Dpk4HCVHU7OGCkOIdErmZYW0PSlk8PPvV1coH7hmJ0m2RFcDJD9Dhu0rcfkcdYJlIoKfvhA0fSC6wB4Y2UMRath9C5D76bRNAtGcin2a%2FHjD%2B1o5V7pEjefDI3C9Z7NWuUQN3iPNA3u%2FK%2BTtYLfNnvctcjrPjGSJovRs%2BaTFb3jNDwb8TtmJirHnPmcJc1MM%2BtxMkGOqUBt9NWTm2tdadFMVmH2%2F1nAUGmb4qw0rpiwcJUgHWS%2Bhnmo6y0luZagXdxZLsmGern9lfs6BZoYyIEe5MtJKPb4zHh7DqqhH%2B9QOCjdt%2F4T%2BhH4kRKhEKsepizM3KAk7EcaQn6PxSre6AMr9SEGUyjvYrXjooOcwEccZAsq9DiWPoJIg5CEt%2BcJFn1l9PlaaF2w78wbkmiORB21YOH5uEDGq3l%2F6kp&X-Amz-Signature=791b1b88edadea04ec85326a374facc2eec5dfed1e9304c9b0200f6b664abdf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZOI5ZW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDOqQ5oCwgtgDbwOYb5lmbSHYE2SOemN6nd45IhJrIvFAiEAsBdxlLsA0c7vm%2ByoXt%2BsO07sAS5A0iJCfxshUqd9HXkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFmQiBIaMeptJmHkNSrcA39jJPvf60%2BSfl5yhi2INdVdtZdWCZ1ddNvccp0ygyx2x%2FyMTPZkrYBW2TDu50mKUsL2H8g8F40hjA2sRmWqbl4HD60nCP46IEs%2BSKIDTGcuynwipC9mWWK%2BIABztqaTsRZ6xTbLVeQjPxjxjuXFQvliP4os72OJK%2BiDA9xar5TNVDKOXVNz4xXRm62yOyx65qY%2F9BHD6h8ssLxDOVABtPOlHK68NnwP2qSeit0Zdrx%2BlHwabzCyCPy74Wg195xhBXUSAnBkRlc0cr5DaN8qHNksgoiNU2W4I2ue%2B00Q5k9F0dOCqVriXRjEhIrlJOLNCxc8VWixd%2BOKh2AXIuSXIgPTh5%2BC128CMOb6xNlGR4MQB6d3HQ8anpXsjHu7cSbq5pFHJuwUGv8j6D1qwcgwU6KdkRl5soJ8o7u%2Fd9cLGMdi4XcF3gL5lqUJh8%2BKp8Dpk4HCVHU7OGCkOIdErmZYW0PSlk8PPvV1coH7hmJ0m2RFcDJD9Dhu0rcfkcdYJlIoKfvhA0fSC6wB4Y2UMRath9C5D76bRNAtGcin2a%2FHjD%2B1o5V7pEjefDI3C9Z7NWuUQN3iPNA3u%2FK%2BTtYLfNnvctcjrPjGSJovRs%2BaTFb3jNDwb8TtmJirHnPmcJc1MM%2BtxMkGOqUBt9NWTm2tdadFMVmH2%2F1nAUGmb4qw0rpiwcJUgHWS%2Bhnmo6y0luZagXdxZLsmGern9lfs6BZoYyIEe5MtJKPb4zHh7DqqhH%2B9QOCjdt%2F4T%2BhH4kRKhEKsepizM3KAk7EcaQn6PxSre6AMr9SEGUyjvYrXjooOcwEccZAsq9DiWPoJIg5CEt%2BcJFn1l9PlaaF2w78wbkmiORB21YOH5uEDGq3l%2F6kp&X-Amz-Signature=831a6af7a265c15f8d51efc0fa7d8c8180e64df051212eec13da529cec6185cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
