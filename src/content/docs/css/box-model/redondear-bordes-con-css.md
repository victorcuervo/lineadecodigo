---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCKGIZZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7QRDGv1uI5faPUOJh3db3OI3pxI8Rtl7VZA096gXS%2FAiEA85gvPfy2l6F0%2FuclfeCZQDhfVmHyCFH2Cghx0yY8lUgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDB9OVoM56qKbs8fXlyrcAx1ooBdrYh%2FV4Z4tQCPGRwOsEvjv%2FOuYaEI6PPGYH1EVH2JJrLOD7Z2tP81WejhUO9u4JH%2FpJk%2FXwh7Dm8R9J8O%2FCHZ8QeyeWUms2lfSa%2F%2FF6VYN6UouZau6i2BEnsatzbcn2oRJzih0SubliV82YqpNzw80HCFjc60wGJY4GI8IikwQ%2FWv2kSvl2Hzn9DMbeMBksN8TF3N001WD%2BVz9zl%2FInbd4I%2FmhzgNtJT%2FqfD5VpxjrHQ2IqJgKTV%2BRv7893vz%2BGo4uquEQ6MhVi2eWDwQgcsYNjwuY5mlZ55x6Ao2xO%2FQEtndZNEt1P9y9MbjLy7hXGKdKehisFYE9yxgLnneMhf2jc%2F%2FrZ4AnbzA4CjSsXsNtrluMN3tgdrJ75L%2BQslFAx9Y9aFV3jC1iiR8mAKSFu7HtoFXYdy%2BAQXs1Qq%2B3mMk91Jv2kX9BkF9M26dCviw1vdKPqOqrYNy7F4SOWiS2z5%2BAOgIdiDCNZlcHmgnkgoNmDg9kX4Fqrs5mPv1kHqCSI63abchRfDZRTigJ1iot8UfdP8vIBIN50ZTlACzhORHd%2FYvXniU%2FOOebvVtiQB8828%2B9wXCm9BXCqb5CCEJ6TuNKulqkpeqiPuriwOU7NwlX7beTXkQMP88jMIHRicoGOqUBSI4GuS9z0fNWg0Q6vMpFNvas9vS9AhK%2BexR%2BClaA266RRcESXE5b%2FzqVNEBcJkMYqAwzmBNC0dmQnBuqCKEHk%2FR1w2FA3eMzOhFYVAN9QZBpRuElyAikPSlpKsCceAhMiuo3NIAJdl8EBqdDj8m5X%2BYf%2BGcTpGtCA4KoyDmZrgbA%2Bjj5CHmZz11s34D6uyRlm4%2B8IxmeNjCOdbJBOqKtirtUmIB5&X-Amz-Signature=ad6eb8c6cfc7a251450eb787bc63c975188c753d38514f83d297e47fa89f2b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCKGIZZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7QRDGv1uI5faPUOJh3db3OI3pxI8Rtl7VZA096gXS%2FAiEA85gvPfy2l6F0%2FuclfeCZQDhfVmHyCFH2Cghx0yY8lUgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDB9OVoM56qKbs8fXlyrcAx1ooBdrYh%2FV4Z4tQCPGRwOsEvjv%2FOuYaEI6PPGYH1EVH2JJrLOD7Z2tP81WejhUO9u4JH%2FpJk%2FXwh7Dm8R9J8O%2FCHZ8QeyeWUms2lfSa%2F%2FF6VYN6UouZau6i2BEnsatzbcn2oRJzih0SubliV82YqpNzw80HCFjc60wGJY4GI8IikwQ%2FWv2kSvl2Hzn9DMbeMBksN8TF3N001WD%2BVz9zl%2FInbd4I%2FmhzgNtJT%2FqfD5VpxjrHQ2IqJgKTV%2BRv7893vz%2BGo4uquEQ6MhVi2eWDwQgcsYNjwuY5mlZ55x6Ao2xO%2FQEtndZNEt1P9y9MbjLy7hXGKdKehisFYE9yxgLnneMhf2jc%2F%2FrZ4AnbzA4CjSsXsNtrluMN3tgdrJ75L%2BQslFAx9Y9aFV3jC1iiR8mAKSFu7HtoFXYdy%2BAQXs1Qq%2B3mMk91Jv2kX9BkF9M26dCviw1vdKPqOqrYNy7F4SOWiS2z5%2BAOgIdiDCNZlcHmgnkgoNmDg9kX4Fqrs5mPv1kHqCSI63abchRfDZRTigJ1iot8UfdP8vIBIN50ZTlACzhORHd%2FYvXniU%2FOOebvVtiQB8828%2B9wXCm9BXCqb5CCEJ6TuNKulqkpeqiPuriwOU7NwlX7beTXkQMP88jMIHRicoGOqUBSI4GuS9z0fNWg0Q6vMpFNvas9vS9AhK%2BexR%2BClaA266RRcESXE5b%2FzqVNEBcJkMYqAwzmBNC0dmQnBuqCKEHk%2FR1w2FA3eMzOhFYVAN9QZBpRuElyAikPSlpKsCceAhMiuo3NIAJdl8EBqdDj8m5X%2BYf%2BGcTpGtCA4KoyDmZrgbA%2Bjj5CHmZz11s34D6uyRlm4%2B8IxmeNjCOdbJBOqKtirtUmIB5&X-Amz-Signature=83dfaef223dc5e203f33637d138517412e4259506a1e2a9f80614b697468a418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
