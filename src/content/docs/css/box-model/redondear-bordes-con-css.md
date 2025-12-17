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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBNXTKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDJj9UcHmDnpgrqX%2BlDxj%2B532vEgdCm%2BDXj2%2FRvwKf6AiAuDar4tMZguolZsvxngembcB1wOBxYzQYuGMGmH0suOyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM1mlnGmUKDzd1Apy0KtwD8k5Wud4XuEM1Kk1Ohrx2mCGKHWq%2B%2FlSLocaWd3f7PZ%2BApSsCht%2FUwkEzbf6CPjGWkcPb4bXjWgMJ77CG5BD%2Ftf306YeB2d%2BnvV7x0Q%2Fdi%2BCycOLVWgm4shfPrGRHHFUjLU1RABgabFwMfhePPyFOEayAnTQ3X6Z%2FHqdpklTLblUIG2vsxuJgq0HWbG4KDe3x2%2BdeYjeh7riv9aL%2BkdPbuj1rbo8Dl8WYLHJau8bkDKpImu8RgGJ8R2WmKf7aZ9Es7MBHqgfyzE1855bT0URY%2FaQUfJK1SQTaGs6tW3Jew4P1XxiIOFLM%2BqELLgXU894BZrCNbVfgl0pEyEGhjqzuCBfyE71v1E8ornQ7XKmCFjKUJ5xqFj%2FmTMEvLPAWUQeNnQam3mhOVSj9nYQfdiQJ%2Bo%2FIUGguAPPGH64M2L4o8fjS5tQJodbC8mzynrC5oWjctbSIKlwwIqaQ7qr7LU%2FNdJSYwWCYVw8%2Fjj2TvByNUffxHpV%2FRIXvT2L02xQzeuE1KnskBFoP70IRnFCDU%2FWt%2FJtoFw25cUKfiotg1A0a%2FWjmh481j%2FHJ%2BeoS9IL9ddQL7sO%2BZSdp1W%2B2WS9mlLIogP7Fb7ZI3cr9exL%2B5NEtITJLwWl57oL9dK5%2F0pIwyemIygY6pgH64QhpluUzahCg8eLP7GBJ%2Bkl76iU2Jufz9UaVdXlgh4eFppOqM0GPX4b7fCbfFVi%2Fh%2B%2B9vHRSSs60yn0noHQLvYcD64tnx2ArQcSkn275KvCfbDHoqKolD3ehpka7YhoLQoEaI1yP5LUgyXLfKgnnVcBNijtFmiX23v4qHjN30qAyaKbpx661yslnXcuN8P%2BQQmUfofTjV9Crlnn0AQoK%2BLjEEEqy&X-Amz-Signature=2bb1e4ea92b9f7187eb7b4e54add55b47756d41c86e179edd6a062df9c778ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBNXTKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDJj9UcHmDnpgrqX%2BlDxj%2B532vEgdCm%2BDXj2%2FRvwKf6AiAuDar4tMZguolZsvxngembcB1wOBxYzQYuGMGmH0suOyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM1mlnGmUKDzd1Apy0KtwD8k5Wud4XuEM1Kk1Ohrx2mCGKHWq%2B%2FlSLocaWd3f7PZ%2BApSsCht%2FUwkEzbf6CPjGWkcPb4bXjWgMJ77CG5BD%2Ftf306YeB2d%2BnvV7x0Q%2Fdi%2BCycOLVWgm4shfPrGRHHFUjLU1RABgabFwMfhePPyFOEayAnTQ3X6Z%2FHqdpklTLblUIG2vsxuJgq0HWbG4KDe3x2%2BdeYjeh7riv9aL%2BkdPbuj1rbo8Dl8WYLHJau8bkDKpImu8RgGJ8R2WmKf7aZ9Es7MBHqgfyzE1855bT0URY%2FaQUfJK1SQTaGs6tW3Jew4P1XxiIOFLM%2BqELLgXU894BZrCNbVfgl0pEyEGhjqzuCBfyE71v1E8ornQ7XKmCFjKUJ5xqFj%2FmTMEvLPAWUQeNnQam3mhOVSj9nYQfdiQJ%2Bo%2FIUGguAPPGH64M2L4o8fjS5tQJodbC8mzynrC5oWjctbSIKlwwIqaQ7qr7LU%2FNdJSYwWCYVw8%2Fjj2TvByNUffxHpV%2FRIXvT2L02xQzeuE1KnskBFoP70IRnFCDU%2FWt%2FJtoFw25cUKfiotg1A0a%2FWjmh481j%2FHJ%2BeoS9IL9ddQL7sO%2BZSdp1W%2B2WS9mlLIogP7Fb7ZI3cr9exL%2B5NEtITJLwWl57oL9dK5%2F0pIwyemIygY6pgH64QhpluUzahCg8eLP7GBJ%2Bkl76iU2Jufz9UaVdXlgh4eFppOqM0GPX4b7fCbfFVi%2Fh%2B%2B9vHRSSs60yn0noHQLvYcD64tnx2ArQcSkn275KvCfbDHoqKolD3ehpka7YhoLQoEaI1yP5LUgyXLfKgnnVcBNijtFmiX23v4qHjN30qAyaKbpx661yslnXcuN8P%2BQQmUfofTjV9Crlnn0AQoK%2BLjEEEqy&X-Amz-Signature=4f5342b84591849f64f3fdcb876566be2b69254be58758d04cb4f1eacc019158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
