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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P5F4SKO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxDPbSAGwNimEybA3%2BPrsFl0Bg%2FteBWjTjV0U552kiAwIgCdpvFq8DNTvv4MuruZE4WW%2BCe1Mf9QwUMKiCsh2jnvcqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNNFJm1ssMloq5q8ircA0pzl0Y25OFtBCwZpI08z2geaP6CIgZLsounzOn%2B6QVbm2PGDqG3v0JAHbEvUzXG1Rf3m3Q91P2hPOuSk0D%2BgQIRJlVLO9CXNbxy9GicwULQcF2Wnsrhg%2Bg8qTdj5%2FzRRq8UKpoN8GiN0cuxyDko76%2BKKvKXr7MiVXGX4RA0rqEKXU7Typ3PPJnbCEmW0osM3oRVh5J5kDJAjaAUKrqhr65B8M%2Fl%2FJvhWzaQRig%2B28OH17UpH5Vf8GLPtZvZEhJZssyEZqr36rQL3mXXLwxQj5CeP3gn9K55HGr%2Fn9WMrTlg2htrfuslbsZ%2BKGsRSwG1UWeLte9VMQVp6uAImdZaGOtbaj363na5%2F9pB%2FGcWzu8%2FRRU9Mn926ylh4pgzk9u32aWVXTPpKVkNJZRrTi7aqpVsH%2BukQ3AfXCNFK1NFVsbYcQ14CPS74Gel8pc8oieZ4nC34cGl7X3r4ZulioxWOG3e0QdSpljXSGuNk0wPN9o4W%2Fyevx%2B2iow954zEZSP%2F56FX5O0VoLhyj41BZaLzmzOnTNBqkneGDga2OeHR7k%2FXQ21abs7EXcOph0iyAe4%2FApCwVs6lnjkCLBkh%2BjwsWjFD0Fmrjx4srw7LXpKmkqsjiohTHNV%2BE6LMSExTMJfQ2ckGOqUBWd6wiLfESPc5yG5Om%2FIWk0E8C621jxmfVlSwXHYZtMA%2FSKXnXNNSP7SHXoEtr5D1%2B2iWIDVemFqJB8LumyDwtD2zXPTJwUuAKMgGL8nxkkEUTtbPahR6cO98Er9Sc7CXdryCr3pFJszE6hRbleW%2BDXA6REWTjESEwYe51STlnQKnMmHim5YoF6zkzJfBCEJnkCk2xE7n91yW2TV7TK0W8PfCRuf%2B&X-Amz-Signature=a9d85a83bc0bdcb9aafa3ae89712deee2d35804908bfd1e99dcdd6af8ea1da8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P5F4SKO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxDPbSAGwNimEybA3%2BPrsFl0Bg%2FteBWjTjV0U552kiAwIgCdpvFq8DNTvv4MuruZE4WW%2BCe1Mf9QwUMKiCsh2jnvcqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNNFJm1ssMloq5q8ircA0pzl0Y25OFtBCwZpI08z2geaP6CIgZLsounzOn%2B6QVbm2PGDqG3v0JAHbEvUzXG1Rf3m3Q91P2hPOuSk0D%2BgQIRJlVLO9CXNbxy9GicwULQcF2Wnsrhg%2Bg8qTdj5%2FzRRq8UKpoN8GiN0cuxyDko76%2BKKvKXr7MiVXGX4RA0rqEKXU7Typ3PPJnbCEmW0osM3oRVh5J5kDJAjaAUKrqhr65B8M%2Fl%2FJvhWzaQRig%2B28OH17UpH5Vf8GLPtZvZEhJZssyEZqr36rQL3mXXLwxQj5CeP3gn9K55HGr%2Fn9WMrTlg2htrfuslbsZ%2BKGsRSwG1UWeLte9VMQVp6uAImdZaGOtbaj363na5%2F9pB%2FGcWzu8%2FRRU9Mn926ylh4pgzk9u32aWVXTPpKVkNJZRrTi7aqpVsH%2BukQ3AfXCNFK1NFVsbYcQ14CPS74Gel8pc8oieZ4nC34cGl7X3r4ZulioxWOG3e0QdSpljXSGuNk0wPN9o4W%2Fyevx%2B2iow954zEZSP%2F56FX5O0VoLhyj41BZaLzmzOnTNBqkneGDga2OeHR7k%2FXQ21abs7EXcOph0iyAe4%2FApCwVs6lnjkCLBkh%2BjwsWjFD0Fmrjx4srw7LXpKmkqsjiohTHNV%2BE6LMSExTMJfQ2ckGOqUBWd6wiLfESPc5yG5Om%2FIWk0E8C621jxmfVlSwXHYZtMA%2FSKXnXNNSP7SHXoEtr5D1%2B2iWIDVemFqJB8LumyDwtD2zXPTJwUuAKMgGL8nxkkEUTtbPahR6cO98Er9Sc7CXdryCr3pFJszE6hRbleW%2BDXA6REWTjESEwYe51STlnQKnMmHim5YoF6zkzJfBCEJnkCk2xE7n91yW2TV7TK0W8PfCRuf%2B&X-Amz-Signature=6f78d0153e9ee965f4f2e77a4ae3197d2612eda2064e46e59d9702f4b16f9110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
