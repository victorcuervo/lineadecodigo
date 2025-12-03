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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMOH5YN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCZa4yt3aclzDlejL0%2FtPK35ZG3s4B54NJWcFgCZEciqgIgV8o0FMW3EMDduERem8ffPUsawr9yTjfqYYYjTbeR%2BLgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGVb0hjtI714ZlAPoyrcAwJkI7DI%2FwK0gRu6pjCg5LEei6XkLrC%2BKbMR%2BppvCfQt2e8m1V%2FDPyICU37ozljPZbWPQbEhdBiQnnBbdsvLZW5UfbiShEbpdNl%2FcLLkxnZJJnXRYCtNOoHdgFZZbT%2B%2FfzpOzpoqYJnzJJshDlnetVrjijbhcajXRyakL0iXl4mZ5XJYmvvHswoJSGwj%2BG89G1fpzs3oos24erx9j30JX6T1VSvAs6VcJ0b82XqXdx%2Fi9%2FANkVgyfwxgRov8lLF6LIXqjmEjwguhCKgyBu1hWSUgIUO1PtP7GMwMNalExpqoslwjre4IfzXYTWq5Xbpb9%2FmqPM4tPiKMj4rfAYsoVtQQuGgoxymzrqhLwceb%2BaVqNrK4SSEZNiSDNcrrT%2BioTUSLbv3LbYPuaD94n%2B3Rictu7BpBh8Q%2BppoEXNl6LC2gwpcH%2BmGzijBlP3rfy0aEiOD2eMcVugPbTJorYUsw8BQ3qo%2FpLtX7MLwwn1uEvWSpR0QTT2QuSTXaJa9zcDKibXUvRGdBXAHlY7uA%2FDx24oo%2By19x7cXbQ049M8dVGKg5BVdjJtDmEl7tDQPqPKmbOc4zF3PU4F7NAkfUCaI9lKpYa%2BsR96ClVdgYym4GmkOC4xdn8NVHAgHJr6cXMIH4wskGOqUBycxYnBsCqhigLexDmVr6R8EslVV8ebUhjVqVP9H5yeBzGcw5tSINzLMYFiuGUQVqRTH%2BRUnohojJikx41km31vbCYDaFrO2HhjLnxvgmRGBKiaFf%2Fv4geYCqsq9ZXvsiuExvfVnTV4r5NnPb0KH5Qiw8ztKsB%2Fke%2FPhR8G69raLlcc9ywGEZWNBSsvONzzUIWDrYHTXMC7LKo4LO%2FXFIRxZdjm0O&X-Amz-Signature=c2a07d26a3764dde41f09a61a262e318b1603866158f23213d6bb4869cb4862e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMOH5YN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCZa4yt3aclzDlejL0%2FtPK35ZG3s4B54NJWcFgCZEciqgIgV8o0FMW3EMDduERem8ffPUsawr9yTjfqYYYjTbeR%2BLgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGVb0hjtI714ZlAPoyrcAwJkI7DI%2FwK0gRu6pjCg5LEei6XkLrC%2BKbMR%2BppvCfQt2e8m1V%2FDPyICU37ozljPZbWPQbEhdBiQnnBbdsvLZW5UfbiShEbpdNl%2FcLLkxnZJJnXRYCtNOoHdgFZZbT%2B%2FfzpOzpoqYJnzJJshDlnetVrjijbhcajXRyakL0iXl4mZ5XJYmvvHswoJSGwj%2BG89G1fpzs3oos24erx9j30JX6T1VSvAs6VcJ0b82XqXdx%2Fi9%2FANkVgyfwxgRov8lLF6LIXqjmEjwguhCKgyBu1hWSUgIUO1PtP7GMwMNalExpqoslwjre4IfzXYTWq5Xbpb9%2FmqPM4tPiKMj4rfAYsoVtQQuGgoxymzrqhLwceb%2BaVqNrK4SSEZNiSDNcrrT%2BioTUSLbv3LbYPuaD94n%2B3Rictu7BpBh8Q%2BppoEXNl6LC2gwpcH%2BmGzijBlP3rfy0aEiOD2eMcVugPbTJorYUsw8BQ3qo%2FpLtX7MLwwn1uEvWSpR0QTT2QuSTXaJa9zcDKibXUvRGdBXAHlY7uA%2FDx24oo%2By19x7cXbQ049M8dVGKg5BVdjJtDmEl7tDQPqPKmbOc4zF3PU4F7NAkfUCaI9lKpYa%2BsR96ClVdgYym4GmkOC4xdn8NVHAgHJr6cXMIH4wskGOqUBycxYnBsCqhigLexDmVr6R8EslVV8ebUhjVqVP9H5yeBzGcw5tSINzLMYFiuGUQVqRTH%2BRUnohojJikx41km31vbCYDaFrO2HhjLnxvgmRGBKiaFf%2Fv4geYCqsq9ZXvsiuExvfVnTV4r5NnPb0KH5Qiw8ztKsB%2Fke%2FPhR8G69raLlcc9ywGEZWNBSsvONzzUIWDrYHTXMC7LKo4LO%2FXFIRxZdjm0O&X-Amz-Signature=5b896955196326b169c5f9674b29e35ce792c9bffe9d060b6bd7c96e64b06537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
