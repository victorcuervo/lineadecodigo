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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KTEEPOO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClhRHRsGWrmwU%2FnK6F63vFemLVNxNZjKLbkb7HAFNrfQIgLMRUGKfV6o5VIyL4eVq9cTS3bbDjUYI8NVKzpZU2ddUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMb0K7eZfxQHwdI%2FMircA735xoJfjcfwMSOQI%2FnogtJzUovQaSgW0mM%2FHZerkUHNJv6pdPrLTglDQc3lejU16fZtTK8w2iSX2lo5Q%2B78dcLOyifEJ7IwtIznva5IsINFatWhH7Lzp9FIn6OEIsMqIfcJYyXRg4pvbJTWRfbA4YU6Y3GQHeeT5ZIqMZOzsRsU2WbA2%2FDYRMjL%2B7SCnKDSAdcYB8GcEKPnvSH7HYsEn%2BszwrjFjWVlV25T55QF7jgPdV%2Fd7gYjMQEmulNeoth2prtlzs7pwtrk82SN6mOcBPcErHGlR7GAQKLAyp8Txn8TXR0lQXLt%2B%2BVYePj7eix1nlUkeedkq%2BsjjVquyT%2FXClAGvMZeQnExBEx17Ux0SOGO06B62xMnPSWoV7HuxhTcqat2gBcoMXC%2F7F1ru4QTBYQcDMjn7lDWUtHCREd%2FyVMubwriti9fKm11aBeqROeO9%2BY8ePq4PpOHLJb9Bl%2By05Vz4IVFQWdbiYbKh4hdkQo3kT2YviIEGzwjKkgCBXR4KXrP5zyJ1KFWzZAR6sDsOGE%2F0YQa1PPNnJHzWPJtI8iobn05GKlrksPUY8IlmTtX%2FjLYxivSegaGsxm4MUD0gwrCIYW2ImsJAqO6Jlq%2FQOaZuCzn8htOXqDZy3LEMMOqisoGOqUBqVut24tEMIGUPyvU9x4l3glH5BRvKgAubdh0NCjnAC5CDdo4AaHyUl9D3ARraONUuetz71kAvRFQ9XmAMSaYtKs1Wzpbd%2BnmfC7aEi2NAeAofE5OQtz0e2Sb1W4tIgP%2BRFm%2BUxWIrCAxFPu0czLXOyOXZ83fw%2FcXlZgolf1YqON%2BWHchaHPGdwnkVsCb%2FfKno8M4xbvK7X2uGcKFXJO9BZHG7zki&X-Amz-Signature=0ab27790250a52a03a96994c98bb746ed8cf270646713ebbfa018065d18f646f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KTEEPOO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClhRHRsGWrmwU%2FnK6F63vFemLVNxNZjKLbkb7HAFNrfQIgLMRUGKfV6o5VIyL4eVq9cTS3bbDjUYI8NVKzpZU2ddUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMb0K7eZfxQHwdI%2FMircA735xoJfjcfwMSOQI%2FnogtJzUovQaSgW0mM%2FHZerkUHNJv6pdPrLTglDQc3lejU16fZtTK8w2iSX2lo5Q%2B78dcLOyifEJ7IwtIznva5IsINFatWhH7Lzp9FIn6OEIsMqIfcJYyXRg4pvbJTWRfbA4YU6Y3GQHeeT5ZIqMZOzsRsU2WbA2%2FDYRMjL%2B7SCnKDSAdcYB8GcEKPnvSH7HYsEn%2BszwrjFjWVlV25T55QF7jgPdV%2Fd7gYjMQEmulNeoth2prtlzs7pwtrk82SN6mOcBPcErHGlR7GAQKLAyp8Txn8TXR0lQXLt%2B%2BVYePj7eix1nlUkeedkq%2BsjjVquyT%2FXClAGvMZeQnExBEx17Ux0SOGO06B62xMnPSWoV7HuxhTcqat2gBcoMXC%2F7F1ru4QTBYQcDMjn7lDWUtHCREd%2FyVMubwriti9fKm11aBeqROeO9%2BY8ePq4PpOHLJb9Bl%2By05Vz4IVFQWdbiYbKh4hdkQo3kT2YviIEGzwjKkgCBXR4KXrP5zyJ1KFWzZAR6sDsOGE%2F0YQa1PPNnJHzWPJtI8iobn05GKlrksPUY8IlmTtX%2FjLYxivSegaGsxm4MUD0gwrCIYW2ImsJAqO6Jlq%2FQOaZuCzn8htOXqDZy3LEMMOqisoGOqUBqVut24tEMIGUPyvU9x4l3glH5BRvKgAubdh0NCjnAC5CDdo4AaHyUl9D3ARraONUuetz71kAvRFQ9XmAMSaYtKs1Wzpbd%2BnmfC7aEi2NAeAofE5OQtz0e2Sb1W4tIgP%2BRFm%2BUxWIrCAxFPu0czLXOyOXZ83fw%2FcXlZgolf1YqON%2BWHchaHPGdwnkVsCb%2FfKno8M4xbvK7X2uGcKFXJO9BZHG7zki&X-Amz-Signature=2ecdf255bfb263a687d1124126bbe77367e0e6a58fe156f727d3730b7fa658c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
