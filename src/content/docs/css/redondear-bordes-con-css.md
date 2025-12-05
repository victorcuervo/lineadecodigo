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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZYIPEA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7SXJbyVxtY262kVi9jKckcPOlD8ugSPJghJWPAxX1tgIgLzpc%2FysX9YwM%2B%2BzCeskSPAdyZRbBZf222iuGAqnLS2Iq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDA5nn5yrlIFw4UzLRSrcA62BRgOnRAppx3j3d%2Fx1W1ae7%2B%2FmLbWPWR6FW%2BPRVTvVqlDxasB%2BNsP6Fn4xJ76neiKmETF0EOfc6YN6juInr4Qt0NDqtOI2Ugz7kladMI8YIl4%2Fer48v0cA1QmoUA7JBAuT97KUw4pfu5N4VER5rRPWe%2BElvBPTdvBvgFn%2Fi2MPmX7BWkf8VbJVBzoocPTAPzRwIr1rntMsr3ZqkyY0e2gF%2FoE2ZX%2BCPqlHrc3ucCO92wS%2ByqHzgOfy%2FaGhmfoyZ1YxbJjh5m0YRt5WzMGcIYKObabaDpNdxR03zaH1OLOfbqg4E5gOp1NOxZYQ4pc%2FTWIoEM5DtX0HeDd6w01%2Ffkjbi5NnTfUJexrRycvULE7n9uwt1fO4OdCIPusXKWBqq5d3%2F3%2BhDiOBO7dsln5ZWtInX5E2UFU0T1T05tZOxxbN2L%2F9%2BYp2Nwnd4C47I0nFuT%2Biosst1HG5RDKv7NxnYf39dD%2BGmjyzrloV5LLG65hSeQvC7Srf%2BhWzyqfZWYsaaQ3KtBM4%2FCX6TjvyzrEu6v8v3XoYR0fT%2BhOmIPYydikfe3aEjBTU01iT2ygBwwsoENBj4TI5Id69uQXMZyllXxOsA108TVJF1XBMQtAJSe59pbpV7nIOZXF3xJk%2FMIbyy8kGOqUBbZ8Av%2F0nFTtWjjxzFA1IPgFqLDSt3Z7TqxwruKiTKAc%2FUh7k%2FqBHuS8z%2F5F%2FmjyAaUD1Sg6VkEFqUeZvR16C8jZlExuV%2F24n1a8XEY0fHGL%2Bx26Vmnua7Uk4tNzFegCFae%2FVRmc3dk3JeIjKlZzmTzBMHJlswPeEJRaMGEOkHe%2BEc0ovbY6275MvMrrMytx9SFwve4TxPPhZmoC4jFM%2Fwyu8Qqkz&X-Amz-Signature=ada346fee9ad995c47e5e7af7c0aace21e71e6bf858d741b603617274f7a166f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZYIPEA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7SXJbyVxtY262kVi9jKckcPOlD8ugSPJghJWPAxX1tgIgLzpc%2FysX9YwM%2B%2BzCeskSPAdyZRbBZf222iuGAqnLS2Iq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDA5nn5yrlIFw4UzLRSrcA62BRgOnRAppx3j3d%2Fx1W1ae7%2B%2FmLbWPWR6FW%2BPRVTvVqlDxasB%2BNsP6Fn4xJ76neiKmETF0EOfc6YN6juInr4Qt0NDqtOI2Ugz7kladMI8YIl4%2Fer48v0cA1QmoUA7JBAuT97KUw4pfu5N4VER5rRPWe%2BElvBPTdvBvgFn%2Fi2MPmX7BWkf8VbJVBzoocPTAPzRwIr1rntMsr3ZqkyY0e2gF%2FoE2ZX%2BCPqlHrc3ucCO92wS%2ByqHzgOfy%2FaGhmfoyZ1YxbJjh5m0YRt5WzMGcIYKObabaDpNdxR03zaH1OLOfbqg4E5gOp1NOxZYQ4pc%2FTWIoEM5DtX0HeDd6w01%2Ffkjbi5NnTfUJexrRycvULE7n9uwt1fO4OdCIPusXKWBqq5d3%2F3%2BhDiOBO7dsln5ZWtInX5E2UFU0T1T05tZOxxbN2L%2F9%2BYp2Nwnd4C47I0nFuT%2Biosst1HG5RDKv7NxnYf39dD%2BGmjyzrloV5LLG65hSeQvC7Srf%2BhWzyqfZWYsaaQ3KtBM4%2FCX6TjvyzrEu6v8v3XoYR0fT%2BhOmIPYydikfe3aEjBTU01iT2ygBwwsoENBj4TI5Id69uQXMZyllXxOsA108TVJF1XBMQtAJSe59pbpV7nIOZXF3xJk%2FMIbyy8kGOqUBbZ8Av%2F0nFTtWjjxzFA1IPgFqLDSt3Z7TqxwruKiTKAc%2FUh7k%2FqBHuS8z%2F5F%2FmjyAaUD1Sg6VkEFqUeZvR16C8jZlExuV%2F24n1a8XEY0fHGL%2Bx26Vmnua7Uk4tNzFegCFae%2FVRmc3dk3JeIjKlZzmTzBMHJlswPeEJRaMGEOkHe%2BEc0ovbY6275MvMrrMytx9SFwve4TxPPhZmoC4jFM%2Fwyu8Qqkz&X-Amz-Signature=b574eda098942a7eef1c1c49911cbf846631ab4565199ec0f4704fd0ca31859d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
