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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2VYIOM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5n7n%2FK73vWL644vLiEhMiQstJPH%2BmoSnzAKmPqg%2B9ZwIhAKER8SM1EwuOsL%2FKNSuArL2YH4LlU%2FlrCUlagRK%2B1LX2Kv8DCGIQABoMNjM3NDIzMTgzODA1IgyKo7bFyo%2Badss9D6Aq3AMZSfltox3SE0BOVa48OUIPNOgvUu8DWsXNZE7oLxvwv%2F%2BwMJoiEPgm38F4WKW61zpWe9k6nDQ3pjjgyW8mOn7SrtO6o%2F7DX8%2FJu%2B0676VrrWqUuDfFv746xr%2BP0YGE1qy2XjgSIUCCTvvFCCLdiesByM4%2BvBXWco0hnrMvTrnzWYC7gMxMbhR6i2XmSlc1%2F%2BBYoQCFQp4oMqcZsIMqLtWg4WqOZ70lG7A3TOLOQQ7X3bV4bqqp6kcAr2JPm5sPlQk69ShXpuqWUpcm0q9df8NkczDVWS3%2FAP0pYReuEimq0gFE8OHYTPbtGVR%2B5IZ9nbFZfoDVGiHCK4PZ7NO0vYaVzJZX6%2FNfHKSrC8aN%2BWW9Lb0%2BJNZyAfiR6wmv5rNIBv%2BcbRMlubw%2FNmRxnMtv0Sc2KXG8ZU58tiDCn8nIRXPR5ZNvGj%2Fyzn0TCY48SI7gfoHPfADaokzu6PoInbRWw5E3qk9dHMonYeK0ycwBd%2B%2B7n%2BOjoT8eh0nPa36YyG52Kho9FSQGIe2RYIX1rYcFmB2fr71BID8CvZU%2B9ReDN9Nx0XtedXQu%2BXAhWMMvLtaZsHJPOGhfKGm5O3Dut84BxRE%2FTMOuBnWo75onDKo3dk1ywCeBduAhEP%2Bt2guXpjDQk8zJBjqkAS4YVDX2v4BU%2BListtd7aypQOj1MNAFE594cX9iRNh2A7gbKwF4rcNV8GbwtNt9n88R2iXf%2F5YqTKQAHj5UcxhcQ4vkN2XVij0b00a41ccjUK5DtendFS2Y0xj3Arv23seBxBIY8Fhgt0hY44yLhxRzHGALUajq%2Fbdr7v56x3HJxVnJIWAcqK1RWnDD%2FUcfbmpxTJtdyoJDXSMsoCHxI9XlYdnh%2F&X-Amz-Signature=72c7f7a5d943cd3571a0b92c0378692c18dafa332c17dc852791fec27622687b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2VYIOM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5n7n%2FK73vWL644vLiEhMiQstJPH%2BmoSnzAKmPqg%2B9ZwIhAKER8SM1EwuOsL%2FKNSuArL2YH4LlU%2FlrCUlagRK%2B1LX2Kv8DCGIQABoMNjM3NDIzMTgzODA1IgyKo7bFyo%2Badss9D6Aq3AMZSfltox3SE0BOVa48OUIPNOgvUu8DWsXNZE7oLxvwv%2F%2BwMJoiEPgm38F4WKW61zpWe9k6nDQ3pjjgyW8mOn7SrtO6o%2F7DX8%2FJu%2B0676VrrWqUuDfFv746xr%2BP0YGE1qy2XjgSIUCCTvvFCCLdiesByM4%2BvBXWco0hnrMvTrnzWYC7gMxMbhR6i2XmSlc1%2F%2BBYoQCFQp4oMqcZsIMqLtWg4WqOZ70lG7A3TOLOQQ7X3bV4bqqp6kcAr2JPm5sPlQk69ShXpuqWUpcm0q9df8NkczDVWS3%2FAP0pYReuEimq0gFE8OHYTPbtGVR%2B5IZ9nbFZfoDVGiHCK4PZ7NO0vYaVzJZX6%2FNfHKSrC8aN%2BWW9Lb0%2BJNZyAfiR6wmv5rNIBv%2BcbRMlubw%2FNmRxnMtv0Sc2KXG8ZU58tiDCn8nIRXPR5ZNvGj%2Fyzn0TCY48SI7gfoHPfADaokzu6PoInbRWw5E3qk9dHMonYeK0ycwBd%2B%2B7n%2BOjoT8eh0nPa36YyG52Kho9FSQGIe2RYIX1rYcFmB2fr71BID8CvZU%2B9ReDN9Nx0XtedXQu%2BXAhWMMvLtaZsHJPOGhfKGm5O3Dut84BxRE%2FTMOuBnWo75onDKo3dk1ywCeBduAhEP%2Bt2guXpjDQk8zJBjqkAS4YVDX2v4BU%2BListtd7aypQOj1MNAFE594cX9iRNh2A7gbKwF4rcNV8GbwtNt9n88R2iXf%2F5YqTKQAHj5UcxhcQ4vkN2XVij0b00a41ccjUK5DtendFS2Y0xj3Arv23seBxBIY8Fhgt0hY44yLhxRzHGALUajq%2Fbdr7v56x3HJxVnJIWAcqK1RWnDD%2FUcfbmpxTJtdyoJDXSMsoCHxI9XlYdnh%2F&X-Amz-Signature=c195a74661e78e24eaef46eded7a9d428e66dfcda821ad74e571b37989ce5ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
