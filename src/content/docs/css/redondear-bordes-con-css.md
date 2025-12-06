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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIUGGOG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU8BPD%2BeNXl9EUnoqWSTlx0YfuIwE7mxZuIYOJlEX6ygIhAJyUT1vWev1ExBPyw%2Bvb5ymbu2icMq2On3EjOxRWw0GwKv8DCGwQABoMNjM3NDIzMTgzODA1IgyD4q%2F8PDEx6QK0TxAq3ANcr0IXYkLg3%2Fti4q9xpJn9q1%2Fa8JuAV7LmzW10lPD53%2Bl2eVssx3nBWPkUXHVlWWSjqAs6piR4FaSmjSQf7r9AG6ULMLIYT%2FAMmCRvSzOaD4d94jqf6qLahQs91qPZx1DLA%2BbYGhB39UINrHovL7RbAvJ4cFdiELA962M6E8C2bq%2Fau%2BEDFSJLpXzc%2FBq8Jv%2FeJ4K9gM6U%2B14ZaKETMPt0ZOPGyqLPyB6DG6unw2w3roL%2BYnccGQ%2B%2Fu4a8BDgOcsY6MPBLhcZZ6xdCDq0us8lkJbDaW67UTyMR8HOJN9%2BDaDkA%2F4ERsEJc0oK0eRbG77V5kO6WJlyCjLJvWztEuexleg58KuphObNGO1%2FBmUEsUuuJSoN24BPjrULAQoS7GWqmAoky6rTufLFlddqOB%2Fgh5EE4Inwsm5775n6MwNkwIlp1FI6WvwPolJoo88C%2Be7eNuScn0otoiU%2BZ000N9nHlK2ZxpmAokfve%2BaZp3gkcztOSqmgDFwsT1kBG4LtLHuEkDfWfz8ylodDC9BlkmHmjMRFuPicrFe4Cfj5XwlWAzp%2BoElZ1lfMS7Ry8IH7y6wmYVh7tOf2qjt0Fx%2F9OSGSHnPmRpdusTBQIb%2BHMrSNNydXRvmcquC16g%2FEaMjC%2Bws7JBjqkAeGB%2F2P6CUeGzcHuinBqPdI12dt7xsG9UuT%2Bbal0oMqQiEUZ2D4QWR8sSJT%2FAVtNim9EMmX1ShhWogKFT2BB5azDHCM1Bs5b2%2FIfgoT2uuPBiUfZrLU25WhNX1AqO%2FQ%2FmzDp7CD%2Brdbicri71WXVb95INyFTKMe7Dmf6mrdJShzV6cvcGjWz%2F85xQYFY22GHLoAfy5SMUP2FoS8u7szmZ%2Bmlrwrx&X-Amz-Signature=f180b07044a20f2c3110df59fa38e1ae905580ac5f60fd3b50bff79fb4a30842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIUGGOG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU8BPD%2BeNXl9EUnoqWSTlx0YfuIwE7mxZuIYOJlEX6ygIhAJyUT1vWev1ExBPyw%2Bvb5ymbu2icMq2On3EjOxRWw0GwKv8DCGwQABoMNjM3NDIzMTgzODA1IgyD4q%2F8PDEx6QK0TxAq3ANcr0IXYkLg3%2Fti4q9xpJn9q1%2Fa8JuAV7LmzW10lPD53%2Bl2eVssx3nBWPkUXHVlWWSjqAs6piR4FaSmjSQf7r9AG6ULMLIYT%2FAMmCRvSzOaD4d94jqf6qLahQs91qPZx1DLA%2BbYGhB39UINrHovL7RbAvJ4cFdiELA962M6E8C2bq%2Fau%2BEDFSJLpXzc%2FBq8Jv%2FeJ4K9gM6U%2B14ZaKETMPt0ZOPGyqLPyB6DG6unw2w3roL%2BYnccGQ%2B%2Fu4a8BDgOcsY6MPBLhcZZ6xdCDq0us8lkJbDaW67UTyMR8HOJN9%2BDaDkA%2F4ERsEJc0oK0eRbG77V5kO6WJlyCjLJvWztEuexleg58KuphObNGO1%2FBmUEsUuuJSoN24BPjrULAQoS7GWqmAoky6rTufLFlddqOB%2Fgh5EE4Inwsm5775n6MwNkwIlp1FI6WvwPolJoo88C%2Be7eNuScn0otoiU%2BZ000N9nHlK2ZxpmAokfve%2BaZp3gkcztOSqmgDFwsT1kBG4LtLHuEkDfWfz8ylodDC9BlkmHmjMRFuPicrFe4Cfj5XwlWAzp%2BoElZ1lfMS7Ry8IH7y6wmYVh7tOf2qjt0Fx%2F9OSGSHnPmRpdusTBQIb%2BHMrSNNydXRvmcquC16g%2FEaMjC%2Bws7JBjqkAeGB%2F2P6CUeGzcHuinBqPdI12dt7xsG9UuT%2Bbal0oMqQiEUZ2D4QWR8sSJT%2FAVtNim9EMmX1ShhWogKFT2BB5azDHCM1Bs5b2%2FIfgoT2uuPBiUfZrLU25WhNX1AqO%2FQ%2FmzDp7CD%2Brdbicri71WXVb95INyFTKMe7Dmf6mrdJShzV6cvcGjWz%2F85xQYFY22GHLoAfy5SMUP2FoS8u7szmZ%2Bmlrwrx&X-Amz-Signature=8e77c0b13864da367842c0108696d7f0b78bf387ecd3e64d6199f15e49f3aa04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
