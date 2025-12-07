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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5DXXVM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9WRY3SokjPA9%2B3qXmR3Lvlsh2lCpIufKmTbSv7491QIhALtNFPNkI5Y0Eq9VDMQwPfNW1GEkRVDYhd8dyCu2rs8tKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt5W1Xv2xScKN3h%2FIq3AM8VeIiV%2F6V%2BxtOmtwE5uPz3me%2FIXd7N5lMliJblrac0mPnvVYgv9z6DkIKuTwuExCJxJOLe3LgNmGsIecjDXexj2NFFPkow5e9sFUk6J9Wzk9zfUZrPcEYEJeUYLxj4YbJTxYTMSawHbFGlWTof0mZKqZYBwCjTA3oqN6Z%2FiXt34EoyV4foanMb%2BUYs8XSMzYAbjSjwsawlfL2mhH%2ByG8NiKhgGWb1aVD9rknOtw2Ze7F%2FhC6q5o9rsFF56ve0Tp6prNwWQJbaxjEP%2BhgpyfJfWQAkRuXkKuWOFoUQd73CHD6Smc3PZI%2BHNV8ItgUSmfRBvSg6YFP3x0feAueP7JdScxXzz50XRoARskfubdyopK4XrX5b0Lz21bath3HcLrzSgBtbU2x%2F%2Bl4Khtjd2i38pXqQgD0ubahz2kpl406gssyQGREiovYZADKMEAnpyu4U1oDPDBBmyt71L1CRJUBSij5pQ1KMUPXfsM7vBjJnREdQVVlVD5b5wmXWvPW2KppXN0N2JMXHIpwQo7OVcSSAXf0o411knB7ldUtLVTPRHqjxwAqUcw3rpu3qV2jhRuLU9s%2F3UHp%2BiMAXGfXlzqdjFRzZLO%2BD8Qm1%2BF3fc2j8j5jhNc%2BbyNBzmHjg8jDz%2FdLJBjqkAcQcK56MqfB1SE1gjlxTSt8Qt2rXoxr8ADzLgzE2f4h8luR3Ijmc3kknfQ0Rgu%2FFj0PoHvHEKonuTjhGoTqxvO3ySMXxvfvV7F37o7LTx5VZaKDXPlnxm34dQphbe0BdrnyBdXhqSrpAQNG0ixLOAP%2BwC3MmolVQGWWY70E9SRD%2BRW6XKBURpSz7CoKmyVT5IsTIrwmm9bhRKC3YGeryngSHB%2Bfu&X-Amz-Signature=ce5330d8e78589a28754b937dbddf0f1697befb29ba8e12ecda945e7e0f01351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5DXXVM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9WRY3SokjPA9%2B3qXmR3Lvlsh2lCpIufKmTbSv7491QIhALtNFPNkI5Y0Eq9VDMQwPfNW1GEkRVDYhd8dyCu2rs8tKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt5W1Xv2xScKN3h%2FIq3AM8VeIiV%2F6V%2BxtOmtwE5uPz3me%2FIXd7N5lMliJblrac0mPnvVYgv9z6DkIKuTwuExCJxJOLe3LgNmGsIecjDXexj2NFFPkow5e9sFUk6J9Wzk9zfUZrPcEYEJeUYLxj4YbJTxYTMSawHbFGlWTof0mZKqZYBwCjTA3oqN6Z%2FiXt34EoyV4foanMb%2BUYs8XSMzYAbjSjwsawlfL2mhH%2ByG8NiKhgGWb1aVD9rknOtw2Ze7F%2FhC6q5o9rsFF56ve0Tp6prNwWQJbaxjEP%2BhgpyfJfWQAkRuXkKuWOFoUQd73CHD6Smc3PZI%2BHNV8ItgUSmfRBvSg6YFP3x0feAueP7JdScxXzz50XRoARskfubdyopK4XrX5b0Lz21bath3HcLrzSgBtbU2x%2F%2Bl4Khtjd2i38pXqQgD0ubahz2kpl406gssyQGREiovYZADKMEAnpyu4U1oDPDBBmyt71L1CRJUBSij5pQ1KMUPXfsM7vBjJnREdQVVlVD5b5wmXWvPW2KppXN0N2JMXHIpwQo7OVcSSAXf0o411knB7ldUtLVTPRHqjxwAqUcw3rpu3qV2jhRuLU9s%2F3UHp%2BiMAXGfXlzqdjFRzZLO%2BD8Qm1%2BF3fc2j8j5jhNc%2BbyNBzmHjg8jDz%2FdLJBjqkAcQcK56MqfB1SE1gjlxTSt8Qt2rXoxr8ADzLgzE2f4h8luR3Ijmc3kknfQ0Rgu%2FFj0PoHvHEKonuTjhGoTqxvO3ySMXxvfvV7F37o7LTx5VZaKDXPlnxm34dQphbe0BdrnyBdXhqSrpAQNG0ixLOAP%2BwC3MmolVQGWWY70E9SRD%2BRW6XKBURpSz7CoKmyVT5IsTIrwmm9bhRKC3YGeryngSHB%2Bfu&X-Amz-Signature=0b1f0b8bac38e93e985abedec5fa524750a4940d37fc322e6d6bf47e633cb660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
