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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTK7RG37%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnv3RKuI9snrsCI540GrZVBIeCd%2FUsC9MT2I2QtGPGXAiAWmd6A969hOjxuXM%2FzyDwapJjX0vJMZbKy20MdUrKJaSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGd262T9i1eqQnoIKtwDSl7FnLeYYQj1PVcNP%2FP8iHvjtpPMn4i9ej6bZKXEKVzz0mA58zfLHbl3peYiWFKxsQehLuxV6v5Md7CvYFf72LO6przoj3pMoPq7TJ3qcHiC5PIAVhp4NET7otxQeecyFvk7aoIkEwVQuEifALWt5gNMtJSW%2BxRa78k4TUoE9gDOBrzDNFJzBz0Lt50h1%2F%2BbASYbmVVLmUzkg%2B163AhFGCwPOhMnQ6Qxt3tAe3YAU4X%2FuBdokXO6P8G0wwJ4e4l9tjXhc9bcthQLyJt9CZ0sDTogNqyf69C9aR59MWpC%2BuzpJPTC5LeHyfpDDinwBeEaAKxUFbugVSBKaO%2FgrLNmc2PfItoJzXfyeU3zWVaLZlNwQRbFcIPesd428dueHMGlnLwfeg7XQkNoTYBdydJBhbO58RZjf7RKWI7wYmtQFd%2BrbNJW1xpE1j31xPbb7BYYYqbMR6vE8DUZ34bJW32e4vUcuhmYzxn7RKf4JAsDFR5FuHMS81l2iv9G5JIAhlXa%2B5OXsfbQWsySpceBPIZp5XilNvbS%2BhLY8HFlBc6pEMqry5CP%2B%2B%2BOnpXqNS3hPdoB6UNlNVY0iC1kxIyKOal%2FdB4VSIAOguWL%2B9i%2B5jRuI1xczCNEbNffKukHdMgw3%2F%2BKygY6pgEknUD1OJwypU8z6quGlukfOuOtXdRtBh1bAulW4PRG%2Bp9RmYx3iOgfnPvWQCE63%2FQzgdAHEVU%2Byv33tHaYxD6TX6SevZVahLDijEAvpyU3NjEl2UOOw2iTrUuaeNnQDirPUjY11LK0nt%2Bx34DKQSABP2sqQXdtC4zfrYjMsOBPcaA8oG2GjhQ%2FQKME5hW6QUQ7Aq6iW4kjnRN%2BRSzcRlQwpfxGa1SV&X-Amz-Signature=ed74fcc7c3f9d2bd2435fa9c632c6ef56c09310319b9ca04ba241792b98bea9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTK7RG37%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnv3RKuI9snrsCI540GrZVBIeCd%2FUsC9MT2I2QtGPGXAiAWmd6A969hOjxuXM%2FzyDwapJjX0vJMZbKy20MdUrKJaSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsGd262T9i1eqQnoIKtwDSl7FnLeYYQj1PVcNP%2FP8iHvjtpPMn4i9ej6bZKXEKVzz0mA58zfLHbl3peYiWFKxsQehLuxV6v5Md7CvYFf72LO6przoj3pMoPq7TJ3qcHiC5PIAVhp4NET7otxQeecyFvk7aoIkEwVQuEifALWt5gNMtJSW%2BxRa78k4TUoE9gDOBrzDNFJzBz0Lt50h1%2F%2BbASYbmVVLmUzkg%2B163AhFGCwPOhMnQ6Qxt3tAe3YAU4X%2FuBdokXO6P8G0wwJ4e4l9tjXhc9bcthQLyJt9CZ0sDTogNqyf69C9aR59MWpC%2BuzpJPTC5LeHyfpDDinwBeEaAKxUFbugVSBKaO%2FgrLNmc2PfItoJzXfyeU3zWVaLZlNwQRbFcIPesd428dueHMGlnLwfeg7XQkNoTYBdydJBhbO58RZjf7RKWI7wYmtQFd%2BrbNJW1xpE1j31xPbb7BYYYqbMR6vE8DUZ34bJW32e4vUcuhmYzxn7RKf4JAsDFR5FuHMS81l2iv9G5JIAhlXa%2B5OXsfbQWsySpceBPIZp5XilNvbS%2BhLY8HFlBc6pEMqry5CP%2B%2B%2BOnpXqNS3hPdoB6UNlNVY0iC1kxIyKOal%2FdB4VSIAOguWL%2B9i%2B5jRuI1xczCNEbNffKukHdMgw3%2F%2BKygY6pgEknUD1OJwypU8z6quGlukfOuOtXdRtBh1bAulW4PRG%2Bp9RmYx3iOgfnPvWQCE63%2FQzgdAHEVU%2Byv33tHaYxD6TX6SevZVahLDijEAvpyU3NjEl2UOOw2iTrUuaeNnQDirPUjY11LK0nt%2Bx34DKQSABP2sqQXdtC4zfrYjMsOBPcaA8oG2GjhQ%2FQKME5hW6QUQ7Aq6iW4kjnRN%2BRSzcRlQwpfxGa1SV&X-Amz-Signature=8a8a47f4254b0aafeec0786ad74f8c6b21847704eae14cc9a6daf4eb4dac6e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
