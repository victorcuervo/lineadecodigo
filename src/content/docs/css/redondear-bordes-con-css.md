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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGLGUMF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCNJTF93k8UpC9wxXHkp0raPLMCTHVv4bAtjSPUjoaGcgIhAMv%2F4Lz2B1Z2kkVfFv02su8q1kDeCJS5%2B4VmGnwcJ683Kv8DCEEQABoMNjM3NDIzMTgzODA1IgwCxJ0rQ1GdNRjGO0sq3AOBvG%2FpB7c%2B9GyT8L3RFQfI7XEMThOR5HcySVf45daJc%2FNqUdyH%2B8nopfjK%2BKk4RB0EIUHpXHaONsv1Gl%2FJQFfDSpD7bWKA0MPUgYbsgMDP1POEbPWJ9N1fffgCojc8r%2Fs%2FuL3%2FXCLAUvF3V2z4TeL1ocjbNm0KTbZuNv1g1BWJfVdB2TnXu7I%2Bb2JzaNMSk9VqOHHL1hABCp0Hn%2BKosMPN1OLrfDbp%2BCDN3ocnee78SRXpQU89T6BiyBiAgDTLtgmfleRXhj2uxFqSWDmqXIFRCKdIGDqdth3%2BefNpQfSDm3ORfNDq1DYm%2FWcLh1dGA7q31Luf8ulJ%2BEnLwQv95QwekTpJ370JbwHEjrNGX7%2B3MgrJ%2BZN2NIvrdOfoPPy5JKMKqt7SWvTHCGedScMQsKPiQlHhVccTJsxna%2F6vzd1hGEmbWz%2Fomia1lhVa9qpCj%2BfWotIRUgVLnMeOiEvV5rvqg6VxhkBvGI0jf6vU3CdvUXfeBv3v%2F971mJk19yqzjLZJ%2FNWTIXuIQ0Ha8C4IoIieVGNHAajnO1ISvkRaNyneVl481UNKUGVpO%2BVYK%2B5dusjnYJU8pheFYyp%2BQwG%2FeGHSC44ZVpdHIIFxm1qVYPUPXMdf%2Bs7TNBIdyUulRDDNhcXJBjqkARXUfSPiYSk6uMqNGQsYOwJWbwOE8JxHUc9gLYaSXbWPNEC7SCN%2FZplP%2B6h5EWZ9wsIGs4O49i%2F4%2BS7EUmFgEPZ0ARVub7gUzPLRw4Kw6ViEmc099Cud4MQMwv2jJDm19f9td4MrzwZdse%2FKCsuy1pArFY%2F6SvZfRuS6WJV53%2F14%2Fm5MT1oQI5osTZtAUBQ15rreslGO6q855cC56vVk7yRlLZHx&X-Amz-Signature=b133a8f4a7578c5a9d5ea0be9766d4c8deb9070eb864b9cf8d7c32f87d87f7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGLGUMF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCNJTF93k8UpC9wxXHkp0raPLMCTHVv4bAtjSPUjoaGcgIhAMv%2F4Lz2B1Z2kkVfFv02su8q1kDeCJS5%2B4VmGnwcJ683Kv8DCEEQABoMNjM3NDIzMTgzODA1IgwCxJ0rQ1GdNRjGO0sq3AOBvG%2FpB7c%2B9GyT8L3RFQfI7XEMThOR5HcySVf45daJc%2FNqUdyH%2B8nopfjK%2BKk4RB0EIUHpXHaONsv1Gl%2FJQFfDSpD7bWKA0MPUgYbsgMDP1POEbPWJ9N1fffgCojc8r%2Fs%2FuL3%2FXCLAUvF3V2z4TeL1ocjbNm0KTbZuNv1g1BWJfVdB2TnXu7I%2Bb2JzaNMSk9VqOHHL1hABCp0Hn%2BKosMPN1OLrfDbp%2BCDN3ocnee78SRXpQU89T6BiyBiAgDTLtgmfleRXhj2uxFqSWDmqXIFRCKdIGDqdth3%2BefNpQfSDm3ORfNDq1DYm%2FWcLh1dGA7q31Luf8ulJ%2BEnLwQv95QwekTpJ370JbwHEjrNGX7%2B3MgrJ%2BZN2NIvrdOfoPPy5JKMKqt7SWvTHCGedScMQsKPiQlHhVccTJsxna%2F6vzd1hGEmbWz%2Fomia1lhVa9qpCj%2BfWotIRUgVLnMeOiEvV5rvqg6VxhkBvGI0jf6vU3CdvUXfeBv3v%2F971mJk19yqzjLZJ%2FNWTIXuIQ0Ha8C4IoIieVGNHAajnO1ISvkRaNyneVl481UNKUGVpO%2BVYK%2B5dusjnYJU8pheFYyp%2BQwG%2FeGHSC44ZVpdHIIFxm1qVYPUPXMdf%2Bs7TNBIdyUulRDDNhcXJBjqkARXUfSPiYSk6uMqNGQsYOwJWbwOE8JxHUc9gLYaSXbWPNEC7SCN%2FZplP%2B6h5EWZ9wsIGs4O49i%2F4%2BS7EUmFgEPZ0ARVub7gUzPLRw4Kw6ViEmc099Cud4MQMwv2jJDm19f9td4MrzwZdse%2FKCsuy1pArFY%2F6SvZfRuS6WJV53%2F14%2Fm5MT1oQI5osTZtAUBQ15rreslGO6q855cC56vVk7yRlLZHx&X-Amz-Signature=c57fc1d067e2e22fd3bce22ca2a6dd63224327b84ba969bb3b8f199872723a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
