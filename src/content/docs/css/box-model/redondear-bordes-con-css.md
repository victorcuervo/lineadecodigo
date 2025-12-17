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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4G3RICW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiKSuQBKlaD1%2FLobA%2BCTxLLIXDba3OHX4VGg49PuHSJAiB8xlsWb7C2Rq4uZ7fDH696TXsx5yjyfhzV4U5A3KbhUSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2BCXDiwz%2BjmS%2BDH90KtwDksbHyWcGd42XAZXyG0YxLItSiy6pQhTJYFWWsyFPrGUeh6vERLkRLrqSpbEM6nC31GouAcgTnSXCNGlVVNs%2F41vErkqgCQowAdM%2FYS5goIEEmjZyRmK2ufkYZJYSjf1iPwzLEbH3Je9Jb04ee5jVmLMEPn7JB2AlvpVKPledIKxrQZy1ZTAg4xlplpwPXsAx4mEtp3xp0XvakIExO1RqdUppsczafE%2BBm2i7p1p2y%2Fk%2BnQ0VU7pkdAWVX%2F8n0Ie7mcRl4en1ZgghFBvkxmx%2BmUSBIE%2B880B41u3C7PNZuJ0J6wJWI2vjVedOwy9hyydTHP4Mw4ylwXJT5AzUTIlMBXTKiIAVpvHwFUlwjSUxhW3OFT6AdnAXqd9Ue5XQySlOE1GpOlG3qsBCvcv%2FmXIzgvn3IDiysxeISeDmYsaO4VbH64FIlu%2FmYEVAx9ZURVM1JVmn0ge8iPKel5yHcxrx2G8WaFto7EO8kkeBw4Ew5AwqMtmexqCTMED%2FFsyrGvNwJWxE6%2FqlezJ2I8EntZSxeuXI64sbf08B%2Fi%2FCpSxobaMYZMBdBb1pnsaO%2BrWXTb6GbEXS9mUsjUPmNl2MZCWP8kPL38Bo%2BsMTRp9Jev%2FrA1RKz34zOeCXfSOXrYowhN%2BHygY6pgGlyh5Rc%2B1GEIXGffgdYjc4gCx5Mast5Hvpv4KnozK4hk3TomJX4lNBQhoLEFWoxg2Amsk8Ap2VvV8FUJkuXD7scN85wIKZ%2B1VTnUaq5TciM5f7e1P8j3X4SSInbFlIf9l7LbwrWTjk22jAx8cPjWqn4rsuEIQcSEgXDzZyZJEOU3PmHFJ8nbYL3qugYNvGCEDYj0zAXCWgwA2bsS42grnnMJERpVjN&X-Amz-Signature=eb100173ee2dedbcf9f8901366cf260062bcb06afc523239417befe8dfd55cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4G3RICW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiKSuQBKlaD1%2FLobA%2BCTxLLIXDba3OHX4VGg49PuHSJAiB8xlsWb7C2Rq4uZ7fDH696TXsx5yjyfhzV4U5A3KbhUSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2BCXDiwz%2BjmS%2BDH90KtwDksbHyWcGd42XAZXyG0YxLItSiy6pQhTJYFWWsyFPrGUeh6vERLkRLrqSpbEM6nC31GouAcgTnSXCNGlVVNs%2F41vErkqgCQowAdM%2FYS5goIEEmjZyRmK2ufkYZJYSjf1iPwzLEbH3Je9Jb04ee5jVmLMEPn7JB2AlvpVKPledIKxrQZy1ZTAg4xlplpwPXsAx4mEtp3xp0XvakIExO1RqdUppsczafE%2BBm2i7p1p2y%2Fk%2BnQ0VU7pkdAWVX%2F8n0Ie7mcRl4en1ZgghFBvkxmx%2BmUSBIE%2B880B41u3C7PNZuJ0J6wJWI2vjVedOwy9hyydTHP4Mw4ylwXJT5AzUTIlMBXTKiIAVpvHwFUlwjSUxhW3OFT6AdnAXqd9Ue5XQySlOE1GpOlG3qsBCvcv%2FmXIzgvn3IDiysxeISeDmYsaO4VbH64FIlu%2FmYEVAx9ZURVM1JVmn0ge8iPKel5yHcxrx2G8WaFto7EO8kkeBw4Ew5AwqMtmexqCTMED%2FFsyrGvNwJWxE6%2FqlezJ2I8EntZSxeuXI64sbf08B%2Fi%2FCpSxobaMYZMBdBb1pnsaO%2BrWXTb6GbEXS9mUsjUPmNl2MZCWP8kPL38Bo%2BsMTRp9Jev%2FrA1RKz34zOeCXfSOXrYowhN%2BHygY6pgGlyh5Rc%2B1GEIXGffgdYjc4gCx5Mast5Hvpv4KnozK4hk3TomJX4lNBQhoLEFWoxg2Amsk8Ap2VvV8FUJkuXD7scN85wIKZ%2B1VTnUaq5TciM5f7e1P8j3X4SSInbFlIf9l7LbwrWTjk22jAx8cPjWqn4rsuEIQcSEgXDzZyZJEOU3PmHFJ8nbYL3qugYNvGCEDYj0zAXCWgwA2bsS42grnnMJERpVjN&X-Amz-Signature=ddacccc121a5647f259c63835b82eed72ade5f64ac96ed1f79d9bea7dc555e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
