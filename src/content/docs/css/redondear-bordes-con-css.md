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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6FZN6Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbv%2Fx6RSAT13EdE1Bc%2F0EltGt%2Bj9EiD1mrhgtsG3LahAiAVVDnbW6li4bI8xJIXZ6Y58y20FSNuJ1M12r%2FHXHTLLSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMOvtIWzhanrXAbx3xKtwDCTmModk1D%2FA%2B%2FPjRkWbtSh28DrY1Y8oe%2F5lVO9262p7qM%2FJyK%2BVieYrEurCyhNoZOIb9xUA5xznzXcODiuazG15%2BPWBKhYhzvGY6FLlz4qYTOJqeS7Jud47ae2QkK9CiZwbgH50TBjEvXSGckyGd5oErGH35ibNtSgzp0Meve5n%2BNGjSx7zuCEamou58Avtb4fSrdWRi2HW%2B5hyUhpyN1hFBYRo1wbnrrh%2BYADjdUnCA4m3bw8u8Mum9j2%2Fe51U%2BnX05qAx%2F%2BlPlQzHe7rbWmMvb5dBommswWWU5D%2Fll25EoiJXyHcw1wxbPC1Bd3EMhmU1ACPwGU4D4gtfLaMmJNIZiCKwM7sZWEkAzWKpDadRhFfFiXERrEERbba9M863GAb9nMfuHS%2BXY0MozIHMXPu3eIygaJamYo92aPDFhGKBIaHNzm3PNqaHzWl2zlMRzzyPCDgTQUCNHJNdsbHhen4PpdYvhM1Ry3eg9d6C8rKYMScPG6S%2FGwuSxjAjWvmJJGFojoUeb6GRgkYH60cqWZ3MGCJLO14OLYeMInBtsL6PTK74fOjLRCBNEVS16szltiq7NsmNjr80qK6RNjaBujX4t4vnEude2yWItCXwQYb27qjxElj5s6D5X%2F5ww39DKyQY6pgGUV1cavEPUtK%2BQe1gM%2FR3JSgFi%2BB8vUP6CfvkXWMG82YvVP%2FGSEgUCWKNbssvtyaXImifLm3YgUlNdOM4vPY%2F6ebgs3akkuYgbOd8y%2Bskun3oJGNKezaEFCJs15dWiK2Q5jEjfhYXu3d5ef%2FUY%2FXOpalmn7PWKcDFS%2BPJau4r8A%2Fzg95KJqLmSlHOJGZe0RaXT7dvVFNnpZ4sOTX5CmujNCJyEWcMz&X-Amz-Signature=f7fa2ff0f327810fd7713426b893d3fc3d8d5186d16400ef1dac3a3534d83080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6FZN6Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbv%2Fx6RSAT13EdE1Bc%2F0EltGt%2Bj9EiD1mrhgtsG3LahAiAVVDnbW6li4bI8xJIXZ6Y58y20FSNuJ1M12r%2FHXHTLLSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMOvtIWzhanrXAbx3xKtwDCTmModk1D%2FA%2B%2FPjRkWbtSh28DrY1Y8oe%2F5lVO9262p7qM%2FJyK%2BVieYrEurCyhNoZOIb9xUA5xznzXcODiuazG15%2BPWBKhYhzvGY6FLlz4qYTOJqeS7Jud47ae2QkK9CiZwbgH50TBjEvXSGckyGd5oErGH35ibNtSgzp0Meve5n%2BNGjSx7zuCEamou58Avtb4fSrdWRi2HW%2B5hyUhpyN1hFBYRo1wbnrrh%2BYADjdUnCA4m3bw8u8Mum9j2%2Fe51U%2BnX05qAx%2F%2BlPlQzHe7rbWmMvb5dBommswWWU5D%2Fll25EoiJXyHcw1wxbPC1Bd3EMhmU1ACPwGU4D4gtfLaMmJNIZiCKwM7sZWEkAzWKpDadRhFfFiXERrEERbba9M863GAb9nMfuHS%2BXY0MozIHMXPu3eIygaJamYo92aPDFhGKBIaHNzm3PNqaHzWl2zlMRzzyPCDgTQUCNHJNdsbHhen4PpdYvhM1Ry3eg9d6C8rKYMScPG6S%2FGwuSxjAjWvmJJGFojoUeb6GRgkYH60cqWZ3MGCJLO14OLYeMInBtsL6PTK74fOjLRCBNEVS16szltiq7NsmNjr80qK6RNjaBujX4t4vnEude2yWItCXwQYb27qjxElj5s6D5X%2F5ww39DKyQY6pgGUV1cavEPUtK%2BQe1gM%2FR3JSgFi%2BB8vUP6CfvkXWMG82YvVP%2FGSEgUCWKNbssvtyaXImifLm3YgUlNdOM4vPY%2F6ebgs3akkuYgbOd8y%2Bskun3oJGNKezaEFCJs15dWiK2Q5jEjfhYXu3d5ef%2FUY%2FXOpalmn7PWKcDFS%2BPJau4r8A%2Fzg95KJqLmSlHOJGZe0RaXT7dvVFNnpZ4sOTX5CmujNCJyEWcMz&X-Amz-Signature=6d8638789218607a2b73fafd9016c813f06ef971391da99aadebeb4bedc54185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
