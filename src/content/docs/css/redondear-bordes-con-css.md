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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZCMDG3Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPCkUNGnTrOFodDkv%2FTQLLekPTD2TZwDryPiFhKPPq9AiArj87HzQiVXpGxIfuIpF2Ym8HGu9qEiBn8Wz8KqrNoISr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMG2Pd4%2FsnEVnYTPeaKtwDdN%2F2zQjaL4dHBuFMczAWHy9VLh5KytzPDdG23GQMM%2Bp0MNOpAYxwTVfn4SqqL1X5mzfIKcGHLBu5FfAJI8x%2FCGg7w11AVounZqB1g%2FfItVge%2Bj%2FNjGVetssZXFxoaYdd1hVEvDjnEscMFrMtFdNc5S2p1H1i9k146ua1S94%2FJsRESY1EBfW8TPog35enResbCAqZQXHYoPOk%2BxszIaJB3pQLmOLmgY1KKheEe714kBoFe3VanzUZaCTJRRrgXp8nJ%2BeIXOLifhfNgVoSWUT5%2FmJenzy0%2FZGjm8U1pm29Wxg%2BhEJeyzF64I3oFW5XkvFiglt1NzkHv32j28Kkwp0IAU15SJw1%2F5%2FlB2eoD2cqsOH4VDtqXYAfgGAAAsFO2VSbfcnbp6Y4dm7%2BqJy38NRy89XrJe92eqgcrgLkP9yVLeqzCxpAY69yW%2FwDu6MHqdS4Y94W1%2ByAz61bb6bAH7mwrBI4tdj9sw9xJQbD8xWCa7zakiECIkCIzmdhGcMQ5%2FndmP6AboApb5DiWR4k%2B0x47YqJffiZnORyPJnoVe3pvUOw9rWzDvzfJxWX3mQgtL7AGUfLjnao5MD%2BZOZU8B2mXHtdV11ml3U36UwlzTARETBaqVRE%2B8JvKHlo148wsPbLyQY6pgEhT%2BT0tqCWvTfWDBrjWw7GXAtM1RlwDMUTSfj6XWmtYmZX%2F%2F0kMmJpcNyvYo%2FhrkqDl9vpToUK%2BYxIniwChzTN2ak1WF8oOFX33jFt%2FtgEWT35wxcSOtk2ErKXfTFXAAnNZMmytcetj4yWZc3zDQUOxTAi8B%2Fp4cMI9oEQ7VQS4XN67Y2XttX%2BXsws3T089a5jdEJ6a0z041aSo5a9nvEdAwsupc8w&X-Amz-Signature=fbebee218ec3e82546fc696a862b6fe2d4f86426e27318f47ea77390597c7634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZCMDG3Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPCkUNGnTrOFodDkv%2FTQLLekPTD2TZwDryPiFhKPPq9AiArj87HzQiVXpGxIfuIpF2Ym8HGu9qEiBn8Wz8KqrNoISr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMG2Pd4%2FsnEVnYTPeaKtwDdN%2F2zQjaL4dHBuFMczAWHy9VLh5KytzPDdG23GQMM%2Bp0MNOpAYxwTVfn4SqqL1X5mzfIKcGHLBu5FfAJI8x%2FCGg7w11AVounZqB1g%2FfItVge%2Bj%2FNjGVetssZXFxoaYdd1hVEvDjnEscMFrMtFdNc5S2p1H1i9k146ua1S94%2FJsRESY1EBfW8TPog35enResbCAqZQXHYoPOk%2BxszIaJB3pQLmOLmgY1KKheEe714kBoFe3VanzUZaCTJRRrgXp8nJ%2BeIXOLifhfNgVoSWUT5%2FmJenzy0%2FZGjm8U1pm29Wxg%2BhEJeyzF64I3oFW5XkvFiglt1NzkHv32j28Kkwp0IAU15SJw1%2F5%2FlB2eoD2cqsOH4VDtqXYAfgGAAAsFO2VSbfcnbp6Y4dm7%2BqJy38NRy89XrJe92eqgcrgLkP9yVLeqzCxpAY69yW%2FwDu6MHqdS4Y94W1%2ByAz61bb6bAH7mwrBI4tdj9sw9xJQbD8xWCa7zakiECIkCIzmdhGcMQ5%2FndmP6AboApb5DiWR4k%2B0x47YqJffiZnORyPJnoVe3pvUOw9rWzDvzfJxWX3mQgtL7AGUfLjnao5MD%2BZOZU8B2mXHtdV11ml3U36UwlzTARETBaqVRE%2B8JvKHlo148wsPbLyQY6pgEhT%2BT0tqCWvTfWDBrjWw7GXAtM1RlwDMUTSfj6XWmtYmZX%2F%2F0kMmJpcNyvYo%2FhrkqDl9vpToUK%2BYxIniwChzTN2ak1WF8oOFX33jFt%2FtgEWT35wxcSOtk2ErKXfTFXAAnNZMmytcetj4yWZc3zDQUOxTAi8B%2Fp4cMI9oEQ7VQS4XN67Y2XttX%2BXsws3T089a5jdEJ6a0z041aSo5a9nvEdAwsupc8w&X-Amz-Signature=a671c6a9a62b8ad773aad0caaee880b71b6aff532fafb99698f2454d25a89365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
