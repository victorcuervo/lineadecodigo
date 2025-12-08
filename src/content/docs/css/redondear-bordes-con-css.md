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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHXTWOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F7ddQIBhCeJBSiFQHcOojJnpuNa0G1sNc6aXT6VlKzwIgR6UV3uq2spYCKSzGus5HP2zxFrIB9hXPRUXPvt%2BI7fcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHga%2Bwo%2B4qNj3Ymg1yrcA8%2FJh7dqhKam2WDhFzTQqIeot9CrjtuyK%2F3huHIfWjFOg7s1b%2BIYJkg1oETusRm629qFusfypWPBtIMU73UkDebQwvcmsV7D5pW7yIDLiA%2FExfz8L28Ue6yDwWrPWsr5LfDIFq1zV8CRfZu1vv8Bxp0L55NNDbRLrYacP4luJjN0UYBG0hAWLlbydPKlMmjho6K1iq81jl3A4cKlLcN89KImwQvhvQjKmbDoBS3ikaki%2Bn7fxles4CxhYFMzCgV0qu%2BWPnCu7Nmp6s%2Fg1s3jfHevsrEIxzYbqwoHudzlAofiCyrnGRNmpbf0P23ZzYcB0iIQsqp4GSO25CHpzR0J57i9MrNKfV8E3%2FMPdNg8QtvRTIYqzvBDNSJod%2FRmzEgAq%2BwGb9DO0hTuDAOfVjBDEVSskfpOaAXYT0ki8%2FytTpQj%2BDRgzChUwCifw4By8OLYSRj2OCnWF%2FgjgSgRMB2sPfj%2FCJ545sCo3ySIxam7KxE6de3Nn0LMYZTqp8IqidtyCIRdG2a3NmGKeF0b%2FpGamJzIQsLBCvZKmUf8DXqhW7L0WXi44Cks0ZAzb94NEoPXQEpsOsjqr6YyN6jKccm%2Bozaygw4z10PHLFdX78x%2Fnu8T9bjFDuPYQcPRbI6%2FMJjC28kGOqUBY3K%2FHxF8J6ce4jxh2u1FpOhbikVrdEOq%2FbaeKM%2BK5tWRHVGBwboruTVQ5O%2BBTbL2pHbygvGuiTn212NjnsPSgJ6on0igv0g3NWsB11iZAqF8GoocS%2BxAQK1ByZQkMZ9KSSb823s04POqW4ktoVoDqLrgt4c6NkyIpylUJ9EAyXymdOIBWdjctaUMRVxn83Wy%2BJvEC2uxkHVWYFBtemj%2Fh%2FKNGZmv&X-Amz-Signature=ca1d1006a657435e1aea52db36e699ad012a9d01df6e28eab6759144a474ef86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHXTWOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F7ddQIBhCeJBSiFQHcOojJnpuNa0G1sNc6aXT6VlKzwIgR6UV3uq2spYCKSzGus5HP2zxFrIB9hXPRUXPvt%2BI7fcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHga%2Bwo%2B4qNj3Ymg1yrcA8%2FJh7dqhKam2WDhFzTQqIeot9CrjtuyK%2F3huHIfWjFOg7s1b%2BIYJkg1oETusRm629qFusfypWPBtIMU73UkDebQwvcmsV7D5pW7yIDLiA%2FExfz8L28Ue6yDwWrPWsr5LfDIFq1zV8CRfZu1vv8Bxp0L55NNDbRLrYacP4luJjN0UYBG0hAWLlbydPKlMmjho6K1iq81jl3A4cKlLcN89KImwQvhvQjKmbDoBS3ikaki%2Bn7fxles4CxhYFMzCgV0qu%2BWPnCu7Nmp6s%2Fg1s3jfHevsrEIxzYbqwoHudzlAofiCyrnGRNmpbf0P23ZzYcB0iIQsqp4GSO25CHpzR0J57i9MrNKfV8E3%2FMPdNg8QtvRTIYqzvBDNSJod%2FRmzEgAq%2BwGb9DO0hTuDAOfVjBDEVSskfpOaAXYT0ki8%2FytTpQj%2BDRgzChUwCifw4By8OLYSRj2OCnWF%2FgjgSgRMB2sPfj%2FCJ545sCo3ySIxam7KxE6de3Nn0LMYZTqp8IqidtyCIRdG2a3NmGKeF0b%2FpGamJzIQsLBCvZKmUf8DXqhW7L0WXi44Cks0ZAzb94NEoPXQEpsOsjqr6YyN6jKccm%2Bozaygw4z10PHLFdX78x%2Fnu8T9bjFDuPYQcPRbI6%2FMJjC28kGOqUBY3K%2FHxF8J6ce4jxh2u1FpOhbikVrdEOq%2FbaeKM%2BK5tWRHVGBwboruTVQ5O%2BBTbL2pHbygvGuiTn212NjnsPSgJ6on0igv0g3NWsB11iZAqF8GoocS%2BxAQK1ByZQkMZ9KSSb823s04POqW4ktoVoDqLrgt4c6NkyIpylUJ9EAyXymdOIBWdjctaUMRVxn83Wy%2BJvEC2uxkHVWYFBtemj%2Fh%2FKNGZmv&X-Amz-Signature=d119ad88e3f9774d0a4e32eb53cffc46db7ec5c2ed6e03be8bdbb5f262a2a496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
