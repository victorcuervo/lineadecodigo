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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVS3JYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuuRaeb9SnKYPNR9FWdeTqMI9aR1QepRl4gd7abQQgUwIhAPDGxUgWerr35%2B6QLLDp1IXCvZiOnmbmXZ%2FdiN8crB1ZKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKIGt%2FZa%2BnkkW6e7Iq3AM2uu2Q2jnvJHdQk8mHChXjPUx1N7KBq%2BbmU3Enf1WXWe95XOBl%2FMpIUMjKYpahY8vwP30TYchSkPg0Divpunsc%2BI6FeQBmXsLb07fu6ahNP7CDfP2M%2BpPjuo80fsK7r%2BAlSbw7gcSgAkNwzIY7onrpZwVhITdoUo5PLfJdjbbf5CyD9koN9GNdtpccHjjLtZnwo2rBAHCTnrfq%2FtYosIiNdQvk8wQCDqErMhqSf9x4FE1hTrF37EyOD7oLzYFU8udeKaEZRJjMPvQqocMXErVrcALhlmxIJv1TY%2Fa3VvYWhyV5k5qVTqEOWczlJxu9IqSiE9v9gJpJjPYbqhz7Lo9f%2FaVXHvA1ok3SwJrrD3Y5WaBpKS8oeg5f%2FFQW5r8foJZ7CNPeFkNUjPwkMUqUX%2BFB0u3Q2xXKrKo02U%2F2Kfq6pFSQR%2BfeymnLZBxrAAyfaYgkYw%2BfydbtGWVO8BvbIt54PCC5vrtu%2FibZ3KfLi7ncgLceKBmcLcHwI440jakba%2Fg3o2A3Yx%2FC762uOSHf6g0XJaizTd6OLW3ToYw8Wr%2F129ItjhNn5%2FUphoIRqeSMF8LmVUH%2BtJbSQL0ag5VFwJ3kZLM5sIsgVABaX9a7pVtZHN4fXR1fodtz5RnOHzDXgYvKBjqkAav4BtDvq5JUDJsmpRQAR7qGyt5eV0vspV3tqn2mM6s6krpqisrWdtyoAMN2qH%2FamxaSJdIz9mfKlmf8kSKHJYa8oWFgKBtKRTCUAns5o8Qp0dh%2B0Y4xZKNrosc98vKXPOIbxZPWjp2b6i0HigtUTz0Ki5B38m7yVWRDvLczQZ7Yskp9GQpQDmrhvV9Nu4KBAZTCL1wasnoxUo8rPb6rr4k4k6Gn&X-Amz-Signature=075f35eae11c49b89d53dafa6e8feabe75fab59b8fb58c013e93a7f0caec06d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVS3JYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuuRaeb9SnKYPNR9FWdeTqMI9aR1QepRl4gd7abQQgUwIhAPDGxUgWerr35%2B6QLLDp1IXCvZiOnmbmXZ%2FdiN8crB1ZKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKIGt%2FZa%2BnkkW6e7Iq3AM2uu2Q2jnvJHdQk8mHChXjPUx1N7KBq%2BbmU3Enf1WXWe95XOBl%2FMpIUMjKYpahY8vwP30TYchSkPg0Divpunsc%2BI6FeQBmXsLb07fu6ahNP7CDfP2M%2BpPjuo80fsK7r%2BAlSbw7gcSgAkNwzIY7onrpZwVhITdoUo5PLfJdjbbf5CyD9koN9GNdtpccHjjLtZnwo2rBAHCTnrfq%2FtYosIiNdQvk8wQCDqErMhqSf9x4FE1hTrF37EyOD7oLzYFU8udeKaEZRJjMPvQqocMXErVrcALhlmxIJv1TY%2Fa3VvYWhyV5k5qVTqEOWczlJxu9IqSiE9v9gJpJjPYbqhz7Lo9f%2FaVXHvA1ok3SwJrrD3Y5WaBpKS8oeg5f%2FFQW5r8foJZ7CNPeFkNUjPwkMUqUX%2BFB0u3Q2xXKrKo02U%2F2Kfq6pFSQR%2BfeymnLZBxrAAyfaYgkYw%2BfydbtGWVO8BvbIt54PCC5vrtu%2FibZ3KfLi7ncgLceKBmcLcHwI440jakba%2Fg3o2A3Yx%2FC762uOSHf6g0XJaizTd6OLW3ToYw8Wr%2F129ItjhNn5%2FUphoIRqeSMF8LmVUH%2BtJbSQL0ag5VFwJ3kZLM5sIsgVABaX9a7pVtZHN4fXR1fodtz5RnOHzDXgYvKBjqkAav4BtDvq5JUDJsmpRQAR7qGyt5eV0vspV3tqn2mM6s6krpqisrWdtyoAMN2qH%2FamxaSJdIz9mfKlmf8kSKHJYa8oWFgKBtKRTCUAns5o8Qp0dh%2B0Y4xZKNrosc98vKXPOIbxZPWjp2b6i0HigtUTz0Ki5B38m7yVWRDvLczQZ7Yskp9GQpQDmrhvV9Nu4KBAZTCL1wasnoxUo8rPb6rr4k4k6Gn&X-Amz-Signature=a10d6b0170db5d0c81bf32b52c51254c62a3d7d2449c826cc700a7199ae92413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
