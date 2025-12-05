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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVTMV6Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJRJXvjTKcZjSX2S4neOWBdPlmWNZrWWSYAqXbM1gGeQIhAKQGATggaeBzA9eeganyZtdCde10Q9cQWSOfG3ZngBDYKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2FHQmPuXK5f165A6Qq3APic2dN1xyCn0QEXgYqeP06zFDkaRGFw270bcGAdpgvKD31jZ6d1woI4NbacR0dcAuvOCmkmcFLyCQa%2BrMBoOwCmwZuxR6GsZzq%2BSHQ%2F8EDRVMYAqVr3z9Oyn17JnXcanlX%2Fc33JLwmobU9FwO5ViCI4D2NygVa3jOvRRocIpPLLWXY8VLPrwP%2F3XJcIRfXnYVvTu9Zn6LyqstmOU2iAlsuMtt9XoMtrshFxkCzkuNtvNJkfE8hCJIoGMJnGpCyrnhBUkdDV7f%2BgnVoOcSiv41v4zQ8L9x9OmJo96qPnfTKUBl7h6aBQKldisWr61EmohUsOMg0BiG5MT2xkWJp%2B0gRLxs8%2FGUexYAhUmYt3mMNqZkjTq%2BdfVrd6Z3UT4AICDDTddL9vQFlNZ9AV736ZZcJ0avLiQlPp%2B41vgK%2F78GtwGNN9YRV8rwfpSM9OkbnqT%2FQlwdMy5t7QZ3ggENGwFufrcgESKc4DkLKjuFxuC2OqzcaERcZLh4PLjl0AZWcfBdN8OAGzBfIpuWMNzIcvAoFpgLu1cfl%2FeWC4SxI6o5KRmXcepjGx%2F6lcXRZjXDW1k%2FwbZO20y635bpmfv8AFebJuxKk5VyMLgOzPgyHIuiGfS8BgA2nLe9l2FJkODC29cvJBjqkAfZgZcxr2591fvPcEt20CQiCPcNi43f84taetlGZhHbvwVoi1QO0lH%2B8kl7TR%2BH%2BLMPneAaETrWGA%2BiGiNyKIAzJKstC8scWmLIhi%2B7zSQGqjHR8ekmP2z1dQ2R2lVjEgY5D3zWsEFDVPHuH3QmQRCvC7pv27Fc%2FavB2roVqJ9U5WdYxlbdq5X%2BBcg0L%2Fcrzfdz5Nots0TZae%2F%2Fh%2FkjNDY1sFg62&X-Amz-Signature=be84facbecf2130045f9325ae2aed0cd1df00d1be05ed1c9bb25f6d2c6288474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVTMV6Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJRJXvjTKcZjSX2S4neOWBdPlmWNZrWWSYAqXbM1gGeQIhAKQGATggaeBzA9eeganyZtdCde10Q9cQWSOfG3ZngBDYKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2FHQmPuXK5f165A6Qq3APic2dN1xyCn0QEXgYqeP06zFDkaRGFw270bcGAdpgvKD31jZ6d1woI4NbacR0dcAuvOCmkmcFLyCQa%2BrMBoOwCmwZuxR6GsZzq%2BSHQ%2F8EDRVMYAqVr3z9Oyn17JnXcanlX%2Fc33JLwmobU9FwO5ViCI4D2NygVa3jOvRRocIpPLLWXY8VLPrwP%2F3XJcIRfXnYVvTu9Zn6LyqstmOU2iAlsuMtt9XoMtrshFxkCzkuNtvNJkfE8hCJIoGMJnGpCyrnhBUkdDV7f%2BgnVoOcSiv41v4zQ8L9x9OmJo96qPnfTKUBl7h6aBQKldisWr61EmohUsOMg0BiG5MT2xkWJp%2B0gRLxs8%2FGUexYAhUmYt3mMNqZkjTq%2BdfVrd6Z3UT4AICDDTddL9vQFlNZ9AV736ZZcJ0avLiQlPp%2B41vgK%2F78GtwGNN9YRV8rwfpSM9OkbnqT%2FQlwdMy5t7QZ3ggENGwFufrcgESKc4DkLKjuFxuC2OqzcaERcZLh4PLjl0AZWcfBdN8OAGzBfIpuWMNzIcvAoFpgLu1cfl%2FeWC4SxI6o5KRmXcepjGx%2F6lcXRZjXDW1k%2FwbZO20y635bpmfv8AFebJuxKk5VyMLgOzPgyHIuiGfS8BgA2nLe9l2FJkODC29cvJBjqkAfZgZcxr2591fvPcEt20CQiCPcNi43f84taetlGZhHbvwVoi1QO0lH%2B8kl7TR%2BH%2BLMPneAaETrWGA%2BiGiNyKIAzJKstC8scWmLIhi%2B7zSQGqjHR8ekmP2z1dQ2R2lVjEgY5D3zWsEFDVPHuH3QmQRCvC7pv27Fc%2FavB2roVqJ9U5WdYxlbdq5X%2BBcg0L%2Fcrzfdz5Nots0TZae%2F%2Fh%2FkjNDY1sFg62&X-Amz-Signature=08c36287cbcc7183f9889ac8843abac5d599e07268316e6acc146e05eaa1000f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
