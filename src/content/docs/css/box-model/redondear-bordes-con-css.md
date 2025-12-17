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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKPMWQ4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbS3sUp5gZ5KdDu1r%2FQB6qL5hJGjEWclKJwafb1AyNqAIhAI2RGJFupZU1Qm678YUkBhxaECAhSadVkmVzs2I%2BpVjsKv8DCHMQABoMNjM3NDIzMTgzODA1IgyHLo3Ms3tnWC%2Be%2F0Yq3ANuN1DqeHEHyn5lveWybfqLZ%2Fiqg8ouMi6pR5WvExiKNjkCj%2BWZeLwz2z9aI5Aa6FVobJYARUOXCIqr%2F3WgsurfLjvOxdU1rL9zWAZ3ZwbyKcy0qMTDMxcBXliK0Kq0eAQqlSP49QDH7WJRbkpXcfYipZxNtZqxgNDQmfTywSrB0r2s14ioihbl40eHT%2BzRU5Z6Wm%2BfBi9DvvnN3sR54PVgnUBeYI8g4ZKkp%2FJLFEVvUd3lZRy%2B%2Be%2BtjTguN84cuIDbrumeoZH0FHI7qvZWi3h7UKlOX0zY%2B7rhF0wvvNq5PvM%2Fw6%2BcRbWHGs%2BXJkga8Us%2B%2FUKUYkjnJ62Itn4tb7ptvk15hzS3cEX7y7HZCH1xWqBhI7onAMqcT67KZqjfWVUg7IMyYVze3FEw1Dcjj3T%2FxoCPg%2B7wZE%2F4qmOMFDlPTzGxMcqQdiI%2F7lP09VVs43G0bxWb9VR9hCOXBfsi2MEcNxspD7PCgM4qsgfoR5zzG4lLzTS2CVPbQhrr39fhqxF8kigSHZxcNYOqaksmq4uCQ5XmNDA%2BU8kTAL1Oo7ip6gudIJMPT5p8PsyczNNQwnFD%2FCrVq9xNsJP4Ia8rYpaWiZhTuYGstUUX3Z1kpQije4tXMZ3llQxCHsVyETD4l4jKBjqkAXF86Ye%2BOPo3qfjNmSTPB0Puxv2e0mw2poewlij8fo6cCRHsbn3KrUZuSoC6mdaSWXAAnzBlD5fo1pXiMv6ULkAxN0ZDysAq1%2FHv1AExFYudUY9%2Fy0881ZZDSzNeP6yaoq1oktsbxvoCEi7Oyg4rqskHd8JNt2POaA7GoSCBdey0lhW1MYQhlVjfEBVbH2QfX%2BBSGPSG7oO8MCJvzObov5uo%2BSP6&X-Amz-Signature=d13c3291329909abc4991f238606bb0a69df71ad4f61c0e3431c3037a6b7dfff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKPMWQ4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbS3sUp5gZ5KdDu1r%2FQB6qL5hJGjEWclKJwafb1AyNqAIhAI2RGJFupZU1Qm678YUkBhxaECAhSadVkmVzs2I%2BpVjsKv8DCHMQABoMNjM3NDIzMTgzODA1IgyHLo3Ms3tnWC%2Be%2F0Yq3ANuN1DqeHEHyn5lveWybfqLZ%2Fiqg8ouMi6pR5WvExiKNjkCj%2BWZeLwz2z9aI5Aa6FVobJYARUOXCIqr%2F3WgsurfLjvOxdU1rL9zWAZ3ZwbyKcy0qMTDMxcBXliK0Kq0eAQqlSP49QDH7WJRbkpXcfYipZxNtZqxgNDQmfTywSrB0r2s14ioihbl40eHT%2BzRU5Z6Wm%2BfBi9DvvnN3sR54PVgnUBeYI8g4ZKkp%2FJLFEVvUd3lZRy%2B%2Be%2BtjTguN84cuIDbrumeoZH0FHI7qvZWi3h7UKlOX0zY%2B7rhF0wvvNq5PvM%2Fw6%2BcRbWHGs%2BXJkga8Us%2B%2FUKUYkjnJ62Itn4tb7ptvk15hzS3cEX7y7HZCH1xWqBhI7onAMqcT67KZqjfWVUg7IMyYVze3FEw1Dcjj3T%2FxoCPg%2B7wZE%2F4qmOMFDlPTzGxMcqQdiI%2F7lP09VVs43G0bxWb9VR9hCOXBfsi2MEcNxspD7PCgM4qsgfoR5zzG4lLzTS2CVPbQhrr39fhqxF8kigSHZxcNYOqaksmq4uCQ5XmNDA%2BU8kTAL1Oo7ip6gudIJMPT5p8PsyczNNQwnFD%2FCrVq9xNsJP4Ia8rYpaWiZhTuYGstUUX3Z1kpQije4tXMZ3llQxCHsVyETD4l4jKBjqkAXF86Ye%2BOPo3qfjNmSTPB0Puxv2e0mw2poewlij8fo6cCRHsbn3KrUZuSoC6mdaSWXAAnzBlD5fo1pXiMv6ULkAxN0ZDysAq1%2FHv1AExFYudUY9%2Fy0881ZZDSzNeP6yaoq1oktsbxvoCEi7Oyg4rqskHd8JNt2POaA7GoSCBdey0lhW1MYQhlVjfEBVbH2QfX%2BBSGPSG7oO8MCJvzObov5uo%2BSP6&X-Amz-Signature=c41cdd921dbc820a00807aa2a506ff2a65d6a556e92b93fa0c6f0a30137c9fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
