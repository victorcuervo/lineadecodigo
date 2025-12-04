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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZZGK5HC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFa5V34Qaa18VZBulz37yJ6Wi0StRP25gWzKP4Rd7IjcAiAnYHXGuzOYhYaokkki0apdETrkEcW53gPzcofL110p4Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMW8BXFCYRW2%2B9yZ04KtwDzuZqgXRKexUOle4LV%2BhPix8gugBH6EWjyhrIiQZnBXaQoYXI4lZ55tZW1b9EybndrHeDSfNcdrd62s0gaePS9lH4bpIwy1%2BBd4S%2F15J798t%2BKi7WXmILihB7D%2FqqQJyvhMybtHmH6Ue%2BWHczFGPz5aleUTKwd4ts0CS8cn6C8lSjOVLnEXc4CsKf6Xvu%2F3D0VNqjKnh6c5AAzReTMyM%2BLyMQzCp9sqyjtT5SRfJcBq3RYo267WLWYaJabxvHxKEIWIkRpp7h76aUZF5q3VA0EKvgqVlCmkyHXErVuC23QOI8UqPtL8vkYIUny0JuAGPvQFa%2FaibeMG5t%2B8sWyGFcxcuKcsJpZn3ut8Q1o3h2%2BkteEz8EXPE21FBvXodPcNCPfoM%2F4Yeh6ozhZuQGbLnbMTc9h1WJUSah9WPxErtIW6uMCD9ZtjaPb1RnW26vvE1eeMciJfbG2xLgd4pl8XDWcBCrg2pyOXdD2ELkac2UuLYwDZGXUO1%2B6%2Fl4TFLLMTgqukk%2B9Sek4%2FmYsMvhcXAOJ4Und7RECai5EOYtopdTtSVTHycdgh4Jpzp3vAvMrtynEBq2hv4mksNQcsrBIRSKbXkiaL5lQfnGYKNPPtEcfu4IkgEsEKNOB7yznYQwzK3EyQY6pgE%2BXBDozwdFl2VwXtke%2BbxfNsA%2FKJad1OcMe4U5QV5UaODA%2Ba5EwbdafoVIrsYz%2FRTL7OfBJim93aX4ybLYDISAStDVrK9iZ7p7Nrfi9X%2BVTjQKzBq9PtI5xaxxoamK9vFBLHkXsMI7NPT8SZoz3BsemF98ALgmytOREFB8aOC86%2B740fp3GLlSPZpFQMRkcu8ZFcuOJsHfkqA97yIyXQEzwq8R0iw3&X-Amz-Signature=d79f77a4a1a75ae70893266924713617332445bb34e8fe32641cc3033cf6c194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZZGK5HC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFa5V34Qaa18VZBulz37yJ6Wi0StRP25gWzKP4Rd7IjcAiAnYHXGuzOYhYaokkki0apdETrkEcW53gPzcofL110p4Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMW8BXFCYRW2%2B9yZ04KtwDzuZqgXRKexUOle4LV%2BhPix8gugBH6EWjyhrIiQZnBXaQoYXI4lZ55tZW1b9EybndrHeDSfNcdrd62s0gaePS9lH4bpIwy1%2BBd4S%2F15J798t%2BKi7WXmILihB7D%2FqqQJyvhMybtHmH6Ue%2BWHczFGPz5aleUTKwd4ts0CS8cn6C8lSjOVLnEXc4CsKf6Xvu%2F3D0VNqjKnh6c5AAzReTMyM%2BLyMQzCp9sqyjtT5SRfJcBq3RYo267WLWYaJabxvHxKEIWIkRpp7h76aUZF5q3VA0EKvgqVlCmkyHXErVuC23QOI8UqPtL8vkYIUny0JuAGPvQFa%2FaibeMG5t%2B8sWyGFcxcuKcsJpZn3ut8Q1o3h2%2BkteEz8EXPE21FBvXodPcNCPfoM%2F4Yeh6ozhZuQGbLnbMTc9h1WJUSah9WPxErtIW6uMCD9ZtjaPb1RnW26vvE1eeMciJfbG2xLgd4pl8XDWcBCrg2pyOXdD2ELkac2UuLYwDZGXUO1%2B6%2Fl4TFLLMTgqukk%2B9Sek4%2FmYsMvhcXAOJ4Und7RECai5EOYtopdTtSVTHycdgh4Jpzp3vAvMrtynEBq2hv4mksNQcsrBIRSKbXkiaL5lQfnGYKNPPtEcfu4IkgEsEKNOB7yznYQwzK3EyQY6pgE%2BXBDozwdFl2VwXtke%2BbxfNsA%2FKJad1OcMe4U5QV5UaODA%2Ba5EwbdafoVIrsYz%2FRTL7OfBJim93aX4ybLYDISAStDVrK9iZ7p7Nrfi9X%2BVTjQKzBq9PtI5xaxxoamK9vFBLHkXsMI7NPT8SZoz3BsemF98ALgmytOREFB8aOC86%2B740fp3GLlSPZpFQMRkcu8ZFcuOJsHfkqA97yIyXQEzwq8R0iw3&X-Amz-Signature=ce06897a4ec2e2fdd9f82fc77333cc7e007e723001493dda02d1de9e63489b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
