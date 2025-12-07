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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Z4TMCH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6f90WbUW06rTXaeTi3k06N%2BGE5cjKdeFPy3%2FptafAvAIgeN7%2BoWIB6FCklajt1shnAWSqM3MLDrTrm90nVgpnXIEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWK9AFLyNtO37JD%2ByrcA0nWHg4eaxNMlqPdrvNy1eCscOttRMmnYuWUXFo9rsiSd5yjz2RYFruZ84OCwDtRVyaS3E3j3Cu0op3h%2FE6ywVCSoFFpv0dDEVmz%2F9iMl9JeDeWmHobEGfLkN6bERgylAfVwTXw2ci%2FdGs85Vl6S8C9liyyx5hdG28%2F7KNVjRjUpUzSx7dUZ0ctTSuFHFKlarQJWb28HLO7sZ8Xvp6yKjlkzh5u9OclevCrjgBJVyxxoVaDd4PMSHWS%2F4iUKC4OEfk2TWXE6b5SmVTOmqG4Z1NPy0B3pzvt8zB4CADD9uNgs%2Fj6sF9W4SO%2BBjFmq74m4tLXlBRoCutp2Q2wg21YQ9yFLy%2BafLhm0WqrJu%2F%2FJr34GTUCf5oZuaihhtYuQbdcc7Xe6f3doM0KK6KqRODsXV6FZl8QvnUG%2BoHuU2eGIeBsqBJPTK4HrcGWIn%2BpELJ%2FXPbRqpA2peMcwVAJe7h0NOd9EClBHMLo4NFzwWl7SBw3orbd%2Fd1Su%2BIpCVIkq66kir2jtlRV0VssgLmVPgRBJRvUqjqFD3nuoljMPovqwCeQzRi7KFfjG46IAsu%2BDdPCVjWFSNrvsh6C0lJN1O%2FeJjkNDGzXThh1h728TNMYFQJivKLmFkJV3W19CX8lBMNf90skGOqUB9R3mqT7xgkhLYA4ZOhjIMYZ0VwWseNVjAIIUD%2BbaPsFn6zJ0kSDKlgKYYhmbvTcn%2BHQOoz3nYqCvtF62uT4wLLznSF2lI2o99whBxQWbBfk%2FMBY6%2BkIUAoXii%2BASlIdb1QbzKYtofrdpNdK0zCMQbrHNP5qgVy0aDtFwuMJCAqHCfnsIa9dk74lZKWRK1QJBf%2FA4YAOa8DW6blbqYAGt01OGrfD7&X-Amz-Signature=6ad107c6230c5372808796290d503d7a85c1de62c3ecc9fcfa1e70c804d37313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Z4TMCH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6f90WbUW06rTXaeTi3k06N%2BGE5cjKdeFPy3%2FptafAvAIgeN7%2BoWIB6FCklajt1shnAWSqM3MLDrTrm90nVgpnXIEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWK9AFLyNtO37JD%2ByrcA0nWHg4eaxNMlqPdrvNy1eCscOttRMmnYuWUXFo9rsiSd5yjz2RYFruZ84OCwDtRVyaS3E3j3Cu0op3h%2FE6ywVCSoFFpv0dDEVmz%2F9iMl9JeDeWmHobEGfLkN6bERgylAfVwTXw2ci%2FdGs85Vl6S8C9liyyx5hdG28%2F7KNVjRjUpUzSx7dUZ0ctTSuFHFKlarQJWb28HLO7sZ8Xvp6yKjlkzh5u9OclevCrjgBJVyxxoVaDd4PMSHWS%2F4iUKC4OEfk2TWXE6b5SmVTOmqG4Z1NPy0B3pzvt8zB4CADD9uNgs%2Fj6sF9W4SO%2BBjFmq74m4tLXlBRoCutp2Q2wg21YQ9yFLy%2BafLhm0WqrJu%2F%2FJr34GTUCf5oZuaihhtYuQbdcc7Xe6f3doM0KK6KqRODsXV6FZl8QvnUG%2BoHuU2eGIeBsqBJPTK4HrcGWIn%2BpELJ%2FXPbRqpA2peMcwVAJe7h0NOd9EClBHMLo4NFzwWl7SBw3orbd%2Fd1Su%2BIpCVIkq66kir2jtlRV0VssgLmVPgRBJRvUqjqFD3nuoljMPovqwCeQzRi7KFfjG46IAsu%2BDdPCVjWFSNrvsh6C0lJN1O%2FeJjkNDGzXThh1h728TNMYFQJivKLmFkJV3W19CX8lBMNf90skGOqUB9R3mqT7xgkhLYA4ZOhjIMYZ0VwWseNVjAIIUD%2BbaPsFn6zJ0kSDKlgKYYhmbvTcn%2BHQOoz3nYqCvtF62uT4wLLznSF2lI2o99whBxQWbBfk%2FMBY6%2BkIUAoXii%2BASlIdb1QbzKYtofrdpNdK0zCMQbrHNP5qgVy0aDtFwuMJCAqHCfnsIa9dk74lZKWRK1QJBf%2FA4YAOa8DW6blbqYAGt01OGrfD7&X-Amz-Signature=8ddfc5c09573169e58d9308ffe8a98fa1121f32d8e600bb2815ac6c6cc02cf75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
