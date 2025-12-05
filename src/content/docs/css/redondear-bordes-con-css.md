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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TASNCUYH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQXcp2PDj2eKI%2BmjGip%2FZY7%2BFx5f3jG2Us5U60z3hGFAiEA6MrNtNbzoCvbMWo0U1A%2FVbF3CRYbmXVefK7VarmgLykq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDB1jhMg8h8csa89r7yrcA7Nr6rqGnIEpFX6uVR6A1jBy1OeSFUR%2B%2F8jBwEi27KQGF9JCzU8Q1OsEO2AXbyeqLMzXRfDltqZXxgGbwxI0NaHFcw3vP1%2BFrbKpx3icV0CWFsywDBqQURQ4vXyEKj%2Bq9oZasO42DcA033ZPXDZtN9G0KZrUTqj2xlA1XjiU65rCs3uTAG21tBYTNaT5Ssz08xBN1QHoDa9YJNxFhIv9iknnsbdI7w5aSbYmRYYI9z%2B7vtDYAqnNrCw88yqR08vsk9xDW8gaOrTWshrQxkdTQazGlm0L3yugt%2Fi8uUH%2Ff1DKkPTz9FwiFSzqrRXJpT7IWukDhZ0GyAtVlIsxt8%2FK61gtFuooOWIwWaR4CWh0fWMVNHyGsfIPuyThhj7BDCrdbKosOvgMywkQPYCPoISWhRHnURRhA9dCr%2FQ%2Fr4QQCPw%2BJ0L6Tu1JIeTyLaUdSnj9ZwNvrPMmODPYfR1Bya6Obn%2Bg1QS8or820iwX40xwnldycYs%2FYUgE6sgUSafebIE0Kk5xrZ%2BQeenKEKfQFNYyLfUQKXivZa58M50lrPYv7iYZTv57W1gCC10Gs3xx3NsdhtRUpahKn%2BAaUzbLLjgSl2oEyv9wH2OIBMpV%2BYT4bMN1MbHth3yIywLy6XQuMP6OzckGOqUBZELlGIAB7Lh9WC7IIDQjqV%2B82kpCLXOBVC57o6E9D8nAIIMIbODF0HaxswYg3QEdSc%2FLiJPpP5dAdwu5bgtVA2B2HAOV5z9q3QdZ6uCceUyV3vdJw9fxKoVzp3GDemeCKNDVKpJaDbu%2FOjuQvbw4rGNQG%2BGJ18Su7jteoj%2FN%2FJ2awubv95E8UtX8K7dSX67WqS1xnjkC5YxMIu5sJCIRTHCX2H32&X-Amz-Signature=e2925b654c5520fbf46bd85ffe141d59d0ff84fb2c015065ad3e72981d9c98a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TASNCUYH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQXcp2PDj2eKI%2BmjGip%2FZY7%2BFx5f3jG2Us5U60z3hGFAiEA6MrNtNbzoCvbMWo0U1A%2FVbF3CRYbmXVefK7VarmgLykq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDB1jhMg8h8csa89r7yrcA7Nr6rqGnIEpFX6uVR6A1jBy1OeSFUR%2B%2F8jBwEi27KQGF9JCzU8Q1OsEO2AXbyeqLMzXRfDltqZXxgGbwxI0NaHFcw3vP1%2BFrbKpx3icV0CWFsywDBqQURQ4vXyEKj%2Bq9oZasO42DcA033ZPXDZtN9G0KZrUTqj2xlA1XjiU65rCs3uTAG21tBYTNaT5Ssz08xBN1QHoDa9YJNxFhIv9iknnsbdI7w5aSbYmRYYI9z%2B7vtDYAqnNrCw88yqR08vsk9xDW8gaOrTWshrQxkdTQazGlm0L3yugt%2Fi8uUH%2Ff1DKkPTz9FwiFSzqrRXJpT7IWukDhZ0GyAtVlIsxt8%2FK61gtFuooOWIwWaR4CWh0fWMVNHyGsfIPuyThhj7BDCrdbKosOvgMywkQPYCPoISWhRHnURRhA9dCr%2FQ%2Fr4QQCPw%2BJ0L6Tu1JIeTyLaUdSnj9ZwNvrPMmODPYfR1Bya6Obn%2Bg1QS8or820iwX40xwnldycYs%2FYUgE6sgUSafebIE0Kk5xrZ%2BQeenKEKfQFNYyLfUQKXivZa58M50lrPYv7iYZTv57W1gCC10Gs3xx3NsdhtRUpahKn%2BAaUzbLLjgSl2oEyv9wH2OIBMpV%2BYT4bMN1MbHth3yIywLy6XQuMP6OzckGOqUBZELlGIAB7Lh9WC7IIDQjqV%2B82kpCLXOBVC57o6E9D8nAIIMIbODF0HaxswYg3QEdSc%2FLiJPpP5dAdwu5bgtVA2B2HAOV5z9q3QdZ6uCceUyV3vdJw9fxKoVzp3GDemeCKNDVKpJaDbu%2FOjuQvbw4rGNQG%2BGJ18Su7jteoj%2FN%2FJ2awubv95E8UtX8K7dSX67WqS1xnjkC5YxMIu5sJCIRTHCX2H32&X-Amz-Signature=35cc234249d1e494ef29ddc56abe7c962955b1f3c4a900ec4669f62fa2866256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
