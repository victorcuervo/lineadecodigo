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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNG3O3X5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFMac1XvE8JHi7c%2FZ2%2FzmlA4oZkNiNsGkOgSqMrCorNsAiEArc2YnHBv28sAjiKOWU7OMOQ5Lb2GqhAuEnkFWDTzJ68q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDELCO5D4DBamH0sTqyrcA2HEKkTDu1WXqZn8w%2FNhIOwDsXtxzpXhIFJoxOrBpC8rUTwfLu%2Fi0iPnE53VHWNwoQyQKFAmmI84d1XLZpgv%2Fsd%2F8WiNMejp7snjVK3j3zbUpBYyYhlojgXqsoj6GgthgYqdMQDOCXo70iLz1dAjjmFYXKdvxcD2K3LURxIlGhVJvtWe60Q6deEdO62Hp7lRd%2FITI3bS1Voqcpr6fbHvuQTawnLqDR7WMsvsC5fORt7DEhV8bzmFYx2Oy9cbOz5wmlJVUsxw8E1eNYOK94ddtsed7rfcglQrDkXzHHNpmv%2Bdo0zh7R0mMNfrqqgjdUd1UDrA8nLuqGFbnB%2BSdhrkBWllpf70CDua%2BVv5zTuk%2FXKAOCxRSob5aenT2HwZ2A2z8O1eWbngts%2FL4bz7dPbqDahuyffwcrXsK2jX7bAMecwL6ioenZTZ3h3Y5Vy7Mnk6zwBQ%2BGb7xdvbk5L%2BA%2FIa4GXy8tOvPH32sWP7nnhCTZJgPBrQRUsaXKHqKeIcHtIgbmF9kDeyAt%2BFxVnjWkjj91cHMedzlQ1G9oYoD%2FNl4ydc%2BgY%2BOgFbYlboqwPOi6IQtwR%2FGG95lfpQEKHsqX5bGo2h6e8TPY7zrZAGBUTr%2FGSSeEcKuz1jHwqgagh3MKWRxMkGOqUBqGt6fi2VCeCtAUz2vtdsSp%2FI4%2B%2FmYXHqL9Xr0EUxw3NQNw6bO%2FMmAkcgW92AYeESOeq78kc1GEZfPTklspKaB%2BcjQAJPlSF8zTPBVj2Mc2Lts6iiINPxsDWdHChbyxlaFbt29VgRS2PoUE1BPNzG2CDLlT69F4sZ9ScZUVx0L9tSGy7aJd9ABjRuiidIQKi%2FepTSGly4JRUZnDLPteu1HMLMyoO%2B&X-Amz-Signature=39f4cb68bf935b54e5d9be2176b0e1b2941a32f98abf39dfeb3be44d1a9afc1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNG3O3X5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFMac1XvE8JHi7c%2FZ2%2FzmlA4oZkNiNsGkOgSqMrCorNsAiEArc2YnHBv28sAjiKOWU7OMOQ5Lb2GqhAuEnkFWDTzJ68q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDELCO5D4DBamH0sTqyrcA2HEKkTDu1WXqZn8w%2FNhIOwDsXtxzpXhIFJoxOrBpC8rUTwfLu%2Fi0iPnE53VHWNwoQyQKFAmmI84d1XLZpgv%2Fsd%2F8WiNMejp7snjVK3j3zbUpBYyYhlojgXqsoj6GgthgYqdMQDOCXo70iLz1dAjjmFYXKdvxcD2K3LURxIlGhVJvtWe60Q6deEdO62Hp7lRd%2FITI3bS1Voqcpr6fbHvuQTawnLqDR7WMsvsC5fORt7DEhV8bzmFYx2Oy9cbOz5wmlJVUsxw8E1eNYOK94ddtsed7rfcglQrDkXzHHNpmv%2Bdo0zh7R0mMNfrqqgjdUd1UDrA8nLuqGFbnB%2BSdhrkBWllpf70CDua%2BVv5zTuk%2FXKAOCxRSob5aenT2HwZ2A2z8O1eWbngts%2FL4bz7dPbqDahuyffwcrXsK2jX7bAMecwL6ioenZTZ3h3Y5Vy7Mnk6zwBQ%2BGb7xdvbk5L%2BA%2FIa4GXy8tOvPH32sWP7nnhCTZJgPBrQRUsaXKHqKeIcHtIgbmF9kDeyAt%2BFxVnjWkjj91cHMedzlQ1G9oYoD%2FNl4ydc%2BgY%2BOgFbYlboqwPOi6IQtwR%2FGG95lfpQEKHsqX5bGo2h6e8TPY7zrZAGBUTr%2FGSSeEcKuz1jHwqgagh3MKWRxMkGOqUBqGt6fi2VCeCtAUz2vtdsSp%2FI4%2B%2FmYXHqL9Xr0EUxw3NQNw6bO%2FMmAkcgW92AYeESOeq78kc1GEZfPTklspKaB%2BcjQAJPlSF8zTPBVj2Mc2Lts6iiINPxsDWdHChbyxlaFbt29VgRS2PoUE1BPNzG2CDLlT69F4sZ9ScZUVx0L9tSGy7aJd9ABjRuiidIQKi%2FepTSGly4JRUZnDLPteu1HMLMyoO%2B&X-Amz-Signature=6a2083369628465961b95d6eca181e2f7a94319c98b6a9ca7908a613ea37c648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
