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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GS4JIVT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAI9pZ5VJtq8zPra6GK0hvG1xpY0XWMlHsV38hcr4vDAIhAJGm1UJxeEtGFM7bzY1llRvy1Q0A70oD%2BmKeKGhAV%2B0nKv8DCH8QABoMNjM3NDIzMTgzODA1IgzRw9vE04aL9T5cmO0q3AMn%2F0Vsr8FqV%2BwXLb7sFsXmsdIdbJVQPX91KQvEw4%2B1lFAqpcD7B%2F91mDTlX6aMDq1nkw0fo0SOjnEo8bdCnwpe5IrRuT693rvw0jfHuGVfhmgrJCFEvPtFIpjLFSJw5puh5r%2FpwKIWn3n2Jw%2FF4DQpqa32DRVAYBTw3IwIBnA06I9FrsV79yC8FR15mFizilBguFNE26h6c7CirtQ21ST1soh0hmZ5ufIi5jBQTwv9Rll3jMJ%2FzEvDzVLi67LoLeN7%2B0eLeg%2Bg6HKmmS0t7OSz2hXc7A87qgtJ%2FpErBzcirswcRU2AhQQhmdplWncxg7CQN94AxOLiAUOslgYVlGP%2BwR%2B1L2qUnw%2BiWQaiNQVXY4x5fno%2FxmhcMgyIZhorAadSazd7qu1BI%2F3lAJIYNkkJxuJKVmAssSUibAiC4ncVAHj88SKwz0QwLxWlEMLpXDYDC0rduaX6NWf%2BO8s7FbMJ%2FkcTlYRgoZZqzAdHNAetp%2BgG5XVhcMpXEad4yWaq5ERkE6VcsdaN2NDKKiZYp3H9E7K2MsigCgYgaIVE%2Bey0rpe9EIsOgF5tFFzLUqrlyIfqE6wgNjaMEqIYhrqM5UvBKPH6GDQkqGYZ3rMRcXsTHEHbHFJMBJkJWBuiTDDL4YrKBjqkATFT6YuDDePOheetaTacU%2BDqG%2BP2hgfC%2FNEUBimU9ez4FhDAlPFXBz3AYKxhFWUSZjKnwzSj3FtQH%2BhHex4UKzXRLx4sI9UzyrJwZUTQ2oPfws6EYmA64XTdyZLhB9%2F2%2FAp3o4Rg71jhp2yqUwWQELeJOBuQDQU%2BprWRSW5nTyKtCI47OJw%2FvZr1Yj5D8MRasCaDYTuS1xKSA2N7Rxjjr25N%2BG2R&X-Amz-Signature=f086e109ae14ad18b900749a46c6f6538c5998b2a3edfa32506f67b51065ed77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GS4JIVT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAI9pZ5VJtq8zPra6GK0hvG1xpY0XWMlHsV38hcr4vDAIhAJGm1UJxeEtGFM7bzY1llRvy1Q0A70oD%2BmKeKGhAV%2B0nKv8DCH8QABoMNjM3NDIzMTgzODA1IgzRw9vE04aL9T5cmO0q3AMn%2F0Vsr8FqV%2BwXLb7sFsXmsdIdbJVQPX91KQvEw4%2B1lFAqpcD7B%2F91mDTlX6aMDq1nkw0fo0SOjnEo8bdCnwpe5IrRuT693rvw0jfHuGVfhmgrJCFEvPtFIpjLFSJw5puh5r%2FpwKIWn3n2Jw%2FF4DQpqa32DRVAYBTw3IwIBnA06I9FrsV79yC8FR15mFizilBguFNE26h6c7CirtQ21ST1soh0hmZ5ufIi5jBQTwv9Rll3jMJ%2FzEvDzVLi67LoLeN7%2B0eLeg%2Bg6HKmmS0t7OSz2hXc7A87qgtJ%2FpErBzcirswcRU2AhQQhmdplWncxg7CQN94AxOLiAUOslgYVlGP%2BwR%2B1L2qUnw%2BiWQaiNQVXY4x5fno%2FxmhcMgyIZhorAadSazd7qu1BI%2F3lAJIYNkkJxuJKVmAssSUibAiC4ncVAHj88SKwz0QwLxWlEMLpXDYDC0rduaX6NWf%2BO8s7FbMJ%2FkcTlYRgoZZqzAdHNAetp%2BgG5XVhcMpXEad4yWaq5ERkE6VcsdaN2NDKKiZYp3H9E7K2MsigCgYgaIVE%2Bey0rpe9EIsOgF5tFFzLUqrlyIfqE6wgNjaMEqIYhrqM5UvBKPH6GDQkqGYZ3rMRcXsTHEHbHFJMBJkJWBuiTDDL4YrKBjqkATFT6YuDDePOheetaTacU%2BDqG%2BP2hgfC%2FNEUBimU9ez4FhDAlPFXBz3AYKxhFWUSZjKnwzSj3FtQH%2BhHex4UKzXRLx4sI9UzyrJwZUTQ2oPfws6EYmA64XTdyZLhB9%2F2%2FAp3o4Rg71jhp2yqUwWQELeJOBuQDQU%2BprWRSW5nTyKtCI47OJw%2FvZr1Yj5D8MRasCaDYTuS1xKSA2N7Rxjjr25N%2BG2R&X-Amz-Signature=ceddd315987ff07dbaba236cbe489763b9d667cb3a8bdbb98e09d839fe1b0fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
