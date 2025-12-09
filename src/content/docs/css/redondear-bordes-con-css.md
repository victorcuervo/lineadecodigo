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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7XON47%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgi13An1Edm%2FkhyDhjEREOhtFk7%2B%2B%2Btsfecc1GxwwakQIhAO13vmE815mMztNcrft2TZdja3kf7bDxgWZLtzwHo2f9KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfXOX6kt24NWZctfgq3AO51Gl67pbD5PL4WCNATf08aBNWLk1Ss4f4bb4xa6u1HCaDQ61O2kVuBWBredtQzqML8%2BP0fBXsezpPVYPUxGP61la%2FPn6%2FW2O6N3rWaH2BcoUx7LOL%2BrwioVK8AoTf3l0EEU%2B6%2F9zJgkEcoTRHIQJxZkfvKAVj16v7S9QyNPfTFk5n336Ov863XQIwF2YaAx%2BgT1uS9fwQantTd1UzslM6zBrDbnxm5uQi%2B7eZD2xmFLTvD76qwnIxcL9n6PKhlKSGUZncJAxvD9UXMfHzQUbw47P%2B07dETG7DrRlBlLeV%2B87vDx%2Fu5prViAZnZyR9mzBJ7T9io4P5CsdBcwTcNXTDW9B3DrV3sTrH5woWS3Ux3OuVF0UF8qKdZc1gmiIagp3q51%2Bucy1GfjN0lNlqFD3QotYFRm5O2L9WPWmO5lFaBFH44X9TWkt2gYr52GUNzWqqRFj%2B0uie7OByImHbL8LzL0sVjPVK92%2B8vxjqrNJ0jFwKSZP3aQZo2Ic%2B3oZ1joryrOQm2eX%2BNfntSZoy6aFXXnx4vNxY%2BIAH54wAj7EnstJYgj4g9vCRZYpL%2BadbbXvCzYEg8K4SmMGIgPLqwaWlVSGRv8sFfc1nGt9DVQomGfLtOrwbYiPMjzBq%2FTCywt3JBjqkAaCDmZsMw2sGdbyEw%2B4PCVRrO1bjDaoutjBaV6Gh%2F9D%2FF%2Ffcw4TFMN9kF4lXKU2BFqRxF6Yuw8Zy6quxevjzUE4S1bGbRZDLPvHcdWIx2UkTB073crS%2F6yzGpNM%2Fe99mYpY4lF6Z8Fqd0YfmlBP2%2F1nIPNYA7o%2B6E82c%2BeCXgwReOf7VBW3Q5gPIyO%2BWv6b7LZcf93TCfVHAXZ1%2F9nGU%2FEWi9d24&X-Amz-Signature=dadffcec8bf6de6b872566d257d15741930fb7c5309825d872515c858d93fe97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7XON47%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgi13An1Edm%2FkhyDhjEREOhtFk7%2B%2B%2Btsfecc1GxwwakQIhAO13vmE815mMztNcrft2TZdja3kf7bDxgWZLtzwHo2f9KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfXOX6kt24NWZctfgq3AO51Gl67pbD5PL4WCNATf08aBNWLk1Ss4f4bb4xa6u1HCaDQ61O2kVuBWBredtQzqML8%2BP0fBXsezpPVYPUxGP61la%2FPn6%2FW2O6N3rWaH2BcoUx7LOL%2BrwioVK8AoTf3l0EEU%2B6%2F9zJgkEcoTRHIQJxZkfvKAVj16v7S9QyNPfTFk5n336Ov863XQIwF2YaAx%2BgT1uS9fwQantTd1UzslM6zBrDbnxm5uQi%2B7eZD2xmFLTvD76qwnIxcL9n6PKhlKSGUZncJAxvD9UXMfHzQUbw47P%2B07dETG7DrRlBlLeV%2B87vDx%2Fu5prViAZnZyR9mzBJ7T9io4P5CsdBcwTcNXTDW9B3DrV3sTrH5woWS3Ux3OuVF0UF8qKdZc1gmiIagp3q51%2Bucy1GfjN0lNlqFD3QotYFRm5O2L9WPWmO5lFaBFH44X9TWkt2gYr52GUNzWqqRFj%2B0uie7OByImHbL8LzL0sVjPVK92%2B8vxjqrNJ0jFwKSZP3aQZo2Ic%2B3oZ1joryrOQm2eX%2BNfntSZoy6aFXXnx4vNxY%2BIAH54wAj7EnstJYgj4g9vCRZYpL%2BadbbXvCzYEg8K4SmMGIgPLqwaWlVSGRv8sFfc1nGt9DVQomGfLtOrwbYiPMjzBq%2FTCywt3JBjqkAaCDmZsMw2sGdbyEw%2B4PCVRrO1bjDaoutjBaV6Gh%2F9D%2FF%2Ffcw4TFMN9kF4lXKU2BFqRxF6Yuw8Zy6quxevjzUE4S1bGbRZDLPvHcdWIx2UkTB073crS%2F6yzGpNM%2Fe99mYpY4lF6Z8Fqd0YfmlBP2%2F1nIPNYA7o%2B6E82c%2BeCXgwReOf7VBW3Q5gPIyO%2BWv6b7LZcf93TCfVHAXZ1%2F9nGU%2FEWi9d24&X-Amz-Signature=8c5dda09a90933992e0370df79f677c24341ac48ec198b75d6b14dea35302273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
