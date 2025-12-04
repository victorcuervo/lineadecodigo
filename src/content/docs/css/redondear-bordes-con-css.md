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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6BAO6M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkc2KDStGZktLv4ZiGrthectu6ca0UjPBxf40sWmF2bAIgEO%2BTBKtnGLAxk4FcUfOyEGuqMBYamLzPM2y5Vj9BJd8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFubAIzJUUOJgUshNCrcA7ApMfEXVusdgzPaU5RMh3aNJZ0kA9lNAYepW5vhxIHN0muvgK3ekcS0IOCtYSZxDua9cvk3b4ha%2FvTNJjtCENLwgw8LHh79GpsXW2ObPRqaJR65PxGk6hrQpioh4nNpV4aSGeVGyhDXBPtPEdKkA2RwHyEyIUlrrsGBi5E%2BeHZk3HORIhuntMj8dFjJaUKo9%2FO%2BcBU5u2hZxF7w%2FYyrXsUwnzWR5mZz3P1HKZw%2FZR2b0zBsmtGpmxOk7KIF9elyXjbuG%2F5JdLMjcev3s2%2FXOg862gji8Utv3PTwPL8IwoDW8ha%2B3vWLXsuptb%2Bm0Id2rIRLEXRdkMtBHjoVt6My8Lm0gKwZiGSBhX%2FpVEOtSShduLH%2B%2B4zs1%2B9BsB7DFAq0YM5VQy%2FPhzM2y7c4tOv%2FqfkjcaG73rUC%2FpuJ0rzF7GNdElrdDbcmTdWL1llOkjbLfgEid00VfFn%2Bh%2FJm%2B1WjRSsW4CMu68TmPGWKudSQr5KVK6v21lNsI6yWWUGP9MXlqqTABPEj1BU6m%2FTcKE3S0bWJdTiJl0ok9YLCnG92S%2BHIrPhIg7wesCAYQ6hlBKnCPSni4lLFiB%2B2ZknKVckVJ5zjJ57oFQ9VvYbAb6wfBl%2BkK4kIWD23cHMrfo2LMNTcxskGOqUBjNhCmAVy%2F5%2BRFX9ERmO9tin2p3nKLX7%2B8fFHhccw%2BjXmikPRUD2FrTj9GTUK%2BEQZorIW%2FIeuMKcCzJ2IdeCl2SkrCXCwbY50GP4L8HGnCQQTiIXMIHEPRhERdgOHWVH9gq6hAsNuROxYxvauJU07lOLFW%2FOSFDWTRVMD35xl0NhxoZ6lH5OcEssRJkUtuhA2e0ml%2Fv%2Fpp2PoSABuXJnPnJ6GyC%2FT&X-Amz-Signature=f80598f06b9719319c72ba1f155e37848b8f03075a8b2dc141e3aacd5fd2a886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6BAO6M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkc2KDStGZktLv4ZiGrthectu6ca0UjPBxf40sWmF2bAIgEO%2BTBKtnGLAxk4FcUfOyEGuqMBYamLzPM2y5Vj9BJd8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFubAIzJUUOJgUshNCrcA7ApMfEXVusdgzPaU5RMh3aNJZ0kA9lNAYepW5vhxIHN0muvgK3ekcS0IOCtYSZxDua9cvk3b4ha%2FvTNJjtCENLwgw8LHh79GpsXW2ObPRqaJR65PxGk6hrQpioh4nNpV4aSGeVGyhDXBPtPEdKkA2RwHyEyIUlrrsGBi5E%2BeHZk3HORIhuntMj8dFjJaUKo9%2FO%2BcBU5u2hZxF7w%2FYyrXsUwnzWR5mZz3P1HKZw%2FZR2b0zBsmtGpmxOk7KIF9elyXjbuG%2F5JdLMjcev3s2%2FXOg862gji8Utv3PTwPL8IwoDW8ha%2B3vWLXsuptb%2Bm0Id2rIRLEXRdkMtBHjoVt6My8Lm0gKwZiGSBhX%2FpVEOtSShduLH%2B%2B4zs1%2B9BsB7DFAq0YM5VQy%2FPhzM2y7c4tOv%2FqfkjcaG73rUC%2FpuJ0rzF7GNdElrdDbcmTdWL1llOkjbLfgEid00VfFn%2Bh%2FJm%2B1WjRSsW4CMu68TmPGWKudSQr5KVK6v21lNsI6yWWUGP9MXlqqTABPEj1BU6m%2FTcKE3S0bWJdTiJl0ok9YLCnG92S%2BHIrPhIg7wesCAYQ6hlBKnCPSni4lLFiB%2B2ZknKVckVJ5zjJ57oFQ9VvYbAb6wfBl%2BkK4kIWD23cHMrfo2LMNTcxskGOqUBjNhCmAVy%2F5%2BRFX9ERmO9tin2p3nKLX7%2B8fFHhccw%2BjXmikPRUD2FrTj9GTUK%2BEQZorIW%2FIeuMKcCzJ2IdeCl2SkrCXCwbY50GP4L8HGnCQQTiIXMIHEPRhERdgOHWVH9gq6hAsNuROxYxvauJU07lOLFW%2FOSFDWTRVMD35xl0NhxoZ6lH5OcEssRJkUtuhA2e0ml%2Fv%2Fpp2PoSABuXJnPnJ6GyC%2FT&X-Amz-Signature=8c271ecb3609bce05546049f83e3fb6cb86f5f5d0294a5b006da0a375e7ff07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
