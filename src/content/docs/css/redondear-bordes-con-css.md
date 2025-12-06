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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGE65UWT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj1y5OXbdbsx8PB9HRcyqVjfG8BWfBk465zR%2FBvAC6%2FAiBQHTsFMAlJnMxgU6ht0J9sSSuc22mE01PqYML%2BvzIiqyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMMkD7NrVW1kwr1k8zKtwDZokMNs1NB1YD%2BnvxGKbFNg0Q2a%2Fq9wHyuanFvAhcPem2aoskX84q75AejVsoqb%2B1O8U61%2BEHFBiXRjv4CSms7eFTR7qVrPgZu16HiySikOFZB9qgVTjqjGLUfBIaf7KEvHh0M9PqqB717CKt9Ba6Ly3FqHdA%2F1kL5VTWglNUDAbaex9DNft6D9ggkgGcgTFKv%2BDK4dloNlyHze40SzwV6W%2FrLgNT60MfVZzEOuV%2BOsseq2pt0w9OLMoqvU8Ecuf8Y8CDwRp77LDnsHr7da9uT4uc4DBZQQTuMGK1gqZixPheyeeAD%2BozdbNJZ74Ut4z5QtF9gUVMkWVqR4wx2q7rhHGahL9wQh%2Fnq9m6boR%2FsQFEGoQnhS7Px2EJ9WFRJLoe7AcjYPKx5riB06W0FTjK5j5mOT054%2B7NBd2A%2BwVTpkYX9%2BxaWd1uwIU8463zoTKHQX9jEaz1%2B58Wno3OtfRmu9R4l0mKO11L4IKjrEzL5wFse%2Bg%2BQbezAVvZfr91ls0BOfqTlEy2ZlxxK7DEtlJPvknFaw3Ocrxfjp1Nx0MhdFCb183RYFp8eSq44MA46HqiS81fDV6VmAofnUtNL4AyHTm2G3%2FSWcA%2Fe680c%2FDpIujWfu9pDJBmeznTbecw7qbQyQY6pgE4iN04xEGh%2BAx%2FL6jFE6fBVXL621iOygetBlhxjttsLCh7poQxbx0oH8Gvf%2BByyH%2B3OYWSkJbC8jPjB3nayoGcfsj19Fshr0xcCa2UTzm6BaNcvVQHwE9wdZ6ahbmx2vwxIUAqdij%2FIREunEd1VVyR8qZKimTLaNfIzFQh8NxxMTqi4JoYOz7ndrLE%2B%2FIYUUfGSiO9%2BaDLnuW5czqH1k3mKpZ7oVcE&X-Amz-Signature=43bb80c59c803da78c619e3c6eb30add00daee2e3ea6da2dbe74278b4f04e83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGE65UWT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj1y5OXbdbsx8PB9HRcyqVjfG8BWfBk465zR%2FBvAC6%2FAiBQHTsFMAlJnMxgU6ht0J9sSSuc22mE01PqYML%2BvzIiqyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMMkD7NrVW1kwr1k8zKtwDZokMNs1NB1YD%2BnvxGKbFNg0Q2a%2Fq9wHyuanFvAhcPem2aoskX84q75AejVsoqb%2B1O8U61%2BEHFBiXRjv4CSms7eFTR7qVrPgZu16HiySikOFZB9qgVTjqjGLUfBIaf7KEvHh0M9PqqB717CKt9Ba6Ly3FqHdA%2F1kL5VTWglNUDAbaex9DNft6D9ggkgGcgTFKv%2BDK4dloNlyHze40SzwV6W%2FrLgNT60MfVZzEOuV%2BOsseq2pt0w9OLMoqvU8Ecuf8Y8CDwRp77LDnsHr7da9uT4uc4DBZQQTuMGK1gqZixPheyeeAD%2BozdbNJZ74Ut4z5QtF9gUVMkWVqR4wx2q7rhHGahL9wQh%2Fnq9m6boR%2FsQFEGoQnhS7Px2EJ9WFRJLoe7AcjYPKx5riB06W0FTjK5j5mOT054%2B7NBd2A%2BwVTpkYX9%2BxaWd1uwIU8463zoTKHQX9jEaz1%2B58Wno3OtfRmu9R4l0mKO11L4IKjrEzL5wFse%2Bg%2BQbezAVvZfr91ls0BOfqTlEy2ZlxxK7DEtlJPvknFaw3Ocrxfjp1Nx0MhdFCb183RYFp8eSq44MA46HqiS81fDV6VmAofnUtNL4AyHTm2G3%2FSWcA%2Fe680c%2FDpIujWfu9pDJBmeznTbecw7qbQyQY6pgE4iN04xEGh%2BAx%2FL6jFE6fBVXL621iOygetBlhxjttsLCh7poQxbx0oH8Gvf%2BByyH%2B3OYWSkJbC8jPjB3nayoGcfsj19Fshr0xcCa2UTzm6BaNcvVQHwE9wdZ6ahbmx2vwxIUAqdij%2FIREunEd1VVyR8qZKimTLaNfIzFQh8NxxMTqi4JoYOz7ndrLE%2B%2FIYUUfGSiO9%2BaDLnuW5czqH1k3mKpZ7oVcE&X-Amz-Signature=ff319dcb79ce2d915c637f65d4f6f5f5b0ac67d3431fc819a12d0bbcf15c647b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
