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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVB6HXN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYLfiaHjvQrvX468%2FOZlHsez%2FsP%2BJ6Ab0K1f6vMy8SrAiEAgODlcHSdAKRDsd6K3zduFc9crURqJBF8LDzuZ7utDgoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLNm%2FS5I9483g1cryrcAx%2BuNiIoX%2FFD5z%2FSfWbLCJsJ1qoG9eb%2B1XsGQfP%2FsBP8bAaIZ6kmM9SAQPk7moOtThpy9jEyad%2Fo826dX9e%2FkJkPq6kOuOtltuiOFdPOL29mC%2Fn01ASWLC1YrMoYRPzJvLw2SO%2BSFxr39eP4YbWX7oF5fB84UKwNNe0fJ%2BIKNdn9wtfmJv6T%2BS02gUURvHMV6nblsRPGSAGD%2BgRrjw5PxIuvIsTiJ8zAQim2qVxH8HLIkLoDs4wLWseJnAzV1tSq3oMYTBM24XCgjhnjGnB80z7pvgZQl3ysc6lG%2B%2BR7Xdc7zUErgA%2B4Z2uZuo0AMH2YYuJRust2eZtOSgNbOyyaLfOCqhZlSMeC8TjIyLaDx3SbQLcYvz0RaH1xy7SPMGOdyWrSEie5rLGi3x%2FNIsi70vXb4x6U6dd98h6q97pVOeVDZcvYuo2EHRaHpyoV%2Fr6PxoyCPfTi%2Fu%2FpVbJmWNulOOZYmd%2B4pufGMYKWv92yBvyOdlbsMyu%2FwhfPRtORIsttoLFFs3Jen1UIxreKWzj0VU0oJmOOTrLFJKqa%2BnYhnzzoddE9f%2FL83MmBA3oRKhub9bv5bZcVR7hZaezMszYO%2BUh7SujXZ8Tsf%2F7zMJt1qfqpCtweCXoMQDP7OGzjMJqZ1ckGOqUBw0aaNB3u%2BK%2F8oN3MSR8PB2PZzmVNPgbeTF2v3gk4JBvM8R9McGhReIW1ZLDJjHXT62Wro7QEOdlRaWSa6tijsQbKzjQl%2FeJaef8OSr4Ywf%2FR4zklGvWV4eYuCTRThBYz9KiPIk%2By3n2MZSOmv5ZQRTmCM4L5M2dWs75AnvSAuhpNNGTLhZc1rtFHDCJ20w%2BkF65LYK5BHpejr%2Fai4Y0Zv3meQiYh&X-Amz-Signature=2d1ab6f6b24f45767c76c6d2cee3a09101e8acb28df46c2f55b7ebc2fd481e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVB6HXN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYLfiaHjvQrvX468%2FOZlHsez%2FsP%2BJ6Ab0K1f6vMy8SrAiEAgODlcHSdAKRDsd6K3zduFc9crURqJBF8LDzuZ7utDgoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLNm%2FS5I9483g1cryrcAx%2BuNiIoX%2FFD5z%2FSfWbLCJsJ1qoG9eb%2B1XsGQfP%2FsBP8bAaIZ6kmM9SAQPk7moOtThpy9jEyad%2Fo826dX9e%2FkJkPq6kOuOtltuiOFdPOL29mC%2Fn01ASWLC1YrMoYRPzJvLw2SO%2BSFxr39eP4YbWX7oF5fB84UKwNNe0fJ%2BIKNdn9wtfmJv6T%2BS02gUURvHMV6nblsRPGSAGD%2BgRrjw5PxIuvIsTiJ8zAQim2qVxH8HLIkLoDs4wLWseJnAzV1tSq3oMYTBM24XCgjhnjGnB80z7pvgZQl3ysc6lG%2B%2BR7Xdc7zUErgA%2B4Z2uZuo0AMH2YYuJRust2eZtOSgNbOyyaLfOCqhZlSMeC8TjIyLaDx3SbQLcYvz0RaH1xy7SPMGOdyWrSEie5rLGi3x%2FNIsi70vXb4x6U6dd98h6q97pVOeVDZcvYuo2EHRaHpyoV%2Fr6PxoyCPfTi%2Fu%2FpVbJmWNulOOZYmd%2B4pufGMYKWv92yBvyOdlbsMyu%2FwhfPRtORIsttoLFFs3Jen1UIxreKWzj0VU0oJmOOTrLFJKqa%2BnYhnzzoddE9f%2FL83MmBA3oRKhub9bv5bZcVR7hZaezMszYO%2BUh7SujXZ8Tsf%2F7zMJt1qfqpCtweCXoMQDP7OGzjMJqZ1ckGOqUBw0aaNB3u%2BK%2F8oN3MSR8PB2PZzmVNPgbeTF2v3gk4JBvM8R9McGhReIW1ZLDJjHXT62Wro7QEOdlRaWSa6tijsQbKzjQl%2FeJaef8OSr4Ywf%2FR4zklGvWV4eYuCTRThBYz9KiPIk%2By3n2MZSOmv5ZQRTmCM4L5M2dWs75AnvSAuhpNNGTLhZc1rtFHDCJ20w%2BkF65LYK5BHpejr%2Fai4Y0Zv3meQiYh&X-Amz-Signature=8ec3232af90a40e2c9d27ff76f5e3c7b21c3a68e252d238bb113db5702fe65e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
