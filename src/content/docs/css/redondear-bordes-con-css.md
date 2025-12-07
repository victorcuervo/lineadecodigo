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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OHN73X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUgu8kGgmkItF6d7U4AFxoQbvMp7GXLUKHM36uGdFdYAIgZ6gnlEICTmrapPd8mbx4cyt0ESaCW2PFX3CdNY3CCBsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjSE3HW%2FSXEkj8JVSrcAwVSeHDLfFd9sDiiGB6HBmeO3Orv8Mp%2B71jNHtKCiw7lB0DYYlZEFHDUKm0HGGZ2ptoWuJmXlXEyzhl7yCvN5hekGUiwDQmVgb0NCAStRN3aimm1ALVaGy1LmZiSsVFMavQ%2BjgY193Az%2BWYYqC8GkMOaUyx%2FkNitZWBIXS13rRbi2OvcD5dMOEhXVoGl852U7Byz%2FiCQ%2FWqI3%2BivVdv%2B4KeAyCthP0POqWt2p4kaTmHQgC9wKkIeD69emhjlJizF38np2rZoieiVkbvoULLuhDR3IMMTLmsS%2BK%2BV7WNrpqWzfiLJ6PJOB3l9HsU7lE%2FhfPunYlVxd6U21%2BQFFZLmYt68guYG%2BfixyicLVN6T4RaGirSnyfMxgLeKEZZDE4XvDxdsOJ9sDP5GZCBiJ9G8s9Tb1RlQDDOPDD3SkHhR3u83xrIxm%2BFmaV8%2F51O2UEDtP8nsF9RBrlCGpyBRKPm2T%2B6UX7yO8tFFPF0KMSBq89MMF0%2Fdl5iiwN8jafUHcOxKi3lXjpbVo5K21V8sEDxbS1IyABytmBP0lWYVgy8uHzUNPIGjZS5nQxwPPMz54HcEydQwS3xc4nvuEsPg5v942g%2FOdJuBJxBLghnXidk4Rjqzt0S3PPB9Phb7XO7XMLya1ckGOqUBcb3gIXIAHrcnrL9I8rsK%2BxNILdHyACvJW9MutlkDAx63pUnaXRbhVeqbwvy8rReotjGEmNcnkG52wxL0pJRpxXSTzwR8KwLYBOxzZrNsZtjbGkAuFS1CKttkBIYRC%2Buwh5EjB%2FliEIOKCw9dDaADG1bcDN7iusXUEnIbn4ASibR2zCMcSvZUIbSZehpuU%2FHdVLGRycP6BUa63tIVsu5dt0n38%2BKM&X-Amz-Signature=062c753cc3e74f79827d0445985636050789090b0da50ff246af3c68d7837ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OHN73X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUgu8kGgmkItF6d7U4AFxoQbvMp7GXLUKHM36uGdFdYAIgZ6gnlEICTmrapPd8mbx4cyt0ESaCW2PFX3CdNY3CCBsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjSE3HW%2FSXEkj8JVSrcAwVSeHDLfFd9sDiiGB6HBmeO3Orv8Mp%2B71jNHtKCiw7lB0DYYlZEFHDUKm0HGGZ2ptoWuJmXlXEyzhl7yCvN5hekGUiwDQmVgb0NCAStRN3aimm1ALVaGy1LmZiSsVFMavQ%2BjgY193Az%2BWYYqC8GkMOaUyx%2FkNitZWBIXS13rRbi2OvcD5dMOEhXVoGl852U7Byz%2FiCQ%2FWqI3%2BivVdv%2B4KeAyCthP0POqWt2p4kaTmHQgC9wKkIeD69emhjlJizF38np2rZoieiVkbvoULLuhDR3IMMTLmsS%2BK%2BV7WNrpqWzfiLJ6PJOB3l9HsU7lE%2FhfPunYlVxd6U21%2BQFFZLmYt68guYG%2BfixyicLVN6T4RaGirSnyfMxgLeKEZZDE4XvDxdsOJ9sDP5GZCBiJ9G8s9Tb1RlQDDOPDD3SkHhR3u83xrIxm%2BFmaV8%2F51O2UEDtP8nsF9RBrlCGpyBRKPm2T%2B6UX7yO8tFFPF0KMSBq89MMF0%2Fdl5iiwN8jafUHcOxKi3lXjpbVo5K21V8sEDxbS1IyABytmBP0lWYVgy8uHzUNPIGjZS5nQxwPPMz54HcEydQwS3xc4nvuEsPg5v942g%2FOdJuBJxBLghnXidk4Rjqzt0S3PPB9Phb7XO7XMLya1ckGOqUBcb3gIXIAHrcnrL9I8rsK%2BxNILdHyACvJW9MutlkDAx63pUnaXRbhVeqbwvy8rReotjGEmNcnkG52wxL0pJRpxXSTzwR8KwLYBOxzZrNsZtjbGkAuFS1CKttkBIYRC%2Buwh5EjB%2FliEIOKCw9dDaADG1bcDN7iusXUEnIbn4ASibR2zCMcSvZUIbSZehpuU%2FHdVLGRycP6BUa63tIVsu5dt0n38%2BKM&X-Amz-Signature=1d2b1a4ed8b4f64bc0c19420910103ee824211a4adcc9f28da667742557d548e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
