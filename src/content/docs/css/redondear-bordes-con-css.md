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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4PMH2HG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDrRhIiVab5JBvlJw9cpsQBnHqMNVbUruybU8HyO7DhYgIgaQB%2BiVDnmLEMQxbw0C9NIDiK2MkaWtIC2hm%2BkFTM8Xkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDD2%2FXR98NaJaJamD7yrcAwzzgCicyn3ZOOldnOIZa53LH%2Fu5lUWSpsWiBmR0jqx4WuH5BbqC5XYKWjQOemsgkjqNYIjkV38JaSQsOAltzYSCtMVhsqk58nQ9eEpPiIdiRVNRoobAmORsuVu4SaS0EXEPybIXeumqwaawNaektlwabIfd9%2BMyytwFpcmmPzG%2F2PLcWsG%2BtZbPUG9xqa1cjTDc0QeLhMAcNEg5VqVLArooe5cP6HL6WEpaJwwjhZwFksz3IRBnCf6SOe4RYcXBOAVqHMSpExwcwKLLgIYHGKNZQdhA2V7i%2BQ3sWwzzTgAR9sKar7aYTkjEGZPRDzsShIDaeOZgsxGXwqPRk%2FG%2F5ORFP%2F7nwBNZvQd5eXrYL8ZhZLTanqTKPgCOKqmMrziPiXpeYiiKIYKw%2Fb9p33LuF2oUBP7yl2m%2Fld6%2B1ds%2Ftr1hDUACdUGIJbJwzqETaw6xCLwY8oAz8HsxLMXHoS9ARCpHkwdSADHSJjeaLlCHjZRt9t2e%2BfUpWLNFnNiaZamojMXamq9YLuPpJB1eS9fgpa9v3Ue4fu0w9%2Fr74oPQ45UJLRKmK7wNmye86FFf2M1KWgBDCUvxyf%2BJ45SXQrYcjHSiUJSl5RO4%2FJ36kLNNXXoy3zr86ZUNmIhpgcHmMLjnxMkGOqUBt4jGPCitEfsOvFJ4tgskDHBcbflPj8NVRzESruqNDmD%2FTFNBQd75uTa55pf04SM8Kr4JpdFwoFxn%2BpQV6%2BmocS2OSjwtgL7T4qy0OVCmU6kY5mihzCJtFi49dxCUK0x4tW%2BX00OyAgWfGZwx9E6cu7q61f27d6k2gcJ9XzRo7kWzarDKUbR56WPdfEBGe9YSS%2FQggFRfhJXcSbEL1%2F3oxkfQPfRG&X-Amz-Signature=5801934edd7e335f6cfccc753a6b9d802bf2eac9ff68bf23f5598dd36df8adeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4PMH2HG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDrRhIiVab5JBvlJw9cpsQBnHqMNVbUruybU8HyO7DhYgIgaQB%2BiVDnmLEMQxbw0C9NIDiK2MkaWtIC2hm%2BkFTM8Xkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDD2%2FXR98NaJaJamD7yrcAwzzgCicyn3ZOOldnOIZa53LH%2Fu5lUWSpsWiBmR0jqx4WuH5BbqC5XYKWjQOemsgkjqNYIjkV38JaSQsOAltzYSCtMVhsqk58nQ9eEpPiIdiRVNRoobAmORsuVu4SaS0EXEPybIXeumqwaawNaektlwabIfd9%2BMyytwFpcmmPzG%2F2PLcWsG%2BtZbPUG9xqa1cjTDc0QeLhMAcNEg5VqVLArooe5cP6HL6WEpaJwwjhZwFksz3IRBnCf6SOe4RYcXBOAVqHMSpExwcwKLLgIYHGKNZQdhA2V7i%2BQ3sWwzzTgAR9sKar7aYTkjEGZPRDzsShIDaeOZgsxGXwqPRk%2FG%2F5ORFP%2F7nwBNZvQd5eXrYL8ZhZLTanqTKPgCOKqmMrziPiXpeYiiKIYKw%2Fb9p33LuF2oUBP7yl2m%2Fld6%2B1ds%2Ftr1hDUACdUGIJbJwzqETaw6xCLwY8oAz8HsxLMXHoS9ARCpHkwdSADHSJjeaLlCHjZRt9t2e%2BfUpWLNFnNiaZamojMXamq9YLuPpJB1eS9fgpa9v3Ue4fu0w9%2Fr74oPQ45UJLRKmK7wNmye86FFf2M1KWgBDCUvxyf%2BJ45SXQrYcjHSiUJSl5RO4%2FJ36kLNNXXoy3zr86ZUNmIhpgcHmMLjnxMkGOqUBt4jGPCitEfsOvFJ4tgskDHBcbflPj8NVRzESruqNDmD%2FTFNBQd75uTa55pf04SM8Kr4JpdFwoFxn%2BpQV6%2BmocS2OSjwtgL7T4qy0OVCmU6kY5mihzCJtFi49dxCUK0x4tW%2BX00OyAgWfGZwx9E6cu7q61f27d6k2gcJ9XzRo7kWzarDKUbR56WPdfEBGe9YSS%2FQggFRfhJXcSbEL1%2F3oxkfQPfRG&X-Amz-Signature=704016fc083583232750b2acef7723f772c45b68d8c123edac827732e635266d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
