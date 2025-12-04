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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2RCEV5H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpzB%2F4%2B2IuDaH7BYdVBunIPplTqSR3upKca0I%2FWrjRbAiEAxKnk6FjwbmqH%2FRIQDZNO99GsFFxCH1IT2tIwt3mZL0kq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMHcOsyitCoZ7y%2B7tircA5CGcwgXRyHPJoWGNTF0WJd0XoyMChHE2mJgAfyxmt3ljzvMXAxIgyHcLJBXfJVXoQCElnkLRndGRyE2G0bVP2p3ytCt%2F74sX8xXvvhgndoYvUtpoOiydnuWBOMA8OidLpUmi1PIMWTJpoPs2yTsQHKDBu67vhgP7vmFXt%2FVkbpwH7G4zWGMWNqsEaYWC7rfwBtJftDdt4mKYDuo6wxckJ33vgqAu%2BAIRq63izng4Hc1DL9jfd6E%2BY%2BnO7LSmdSIgZIszYSqUArNRXvQf1ltuJ5WNFeCDdx%2BQfatxSzwugyuEeeTjpV%2BV9YyN1iysqB5jOrqY6AyG3I6DTAgVENNCLXsRycjUMS%2FA0Q%2BWFTlYORu4D6AhUVVVNk7yyX%2BzEctbMLi8ecaB5mIW4TRdENF%2BmGtHnN7CUwhGju3cstZb4cBu5fj7XBsFmxfyHYqA7%2BZV0DLiZK9KV9a1Btul8QKoyfpaK1DtaXaxqwZCdpTDp9OOYdwVGDTkMVdloGQg95k7gXH603C%2BJ0WWZ8aDjBEwZanHyDCQJ10pwode1ONIPb%2FKdW5c%2B3mtP%2Bik6Y01tFBP%2B5sj7%2FSAY2XaHy1MF6kJLd93zA5wg3Yr7Jmk9%2F4AA97bEkygyIN%2Fl32KtOaMOPcxskGOqUBeIs8OCHTt39aKU2tGBdIbjjrWyBsrk0Cf6HlQqcraDX7gEWBsTvJWHrsEMBRpcW1ufcO0qVciMP%2FFtFf4ONOLU94ImqylbMSL39H8jQKhxwVxykXrpqfnObNogP8qLbQ0x30kSmGdFxkdOX0PahJ2FagIPHnRe%2BgRqC5ysNboBqcUbOja9ZsTetb76QXokqJ%2BXjppeQaKREFfoU06QPitzaDSdZU&X-Amz-Signature=33cb303c7bef8cffaa3bca3128e34bc6d75c7eac8bf0438b9834db52013974af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2RCEV5H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpzB%2F4%2B2IuDaH7BYdVBunIPplTqSR3upKca0I%2FWrjRbAiEAxKnk6FjwbmqH%2FRIQDZNO99GsFFxCH1IT2tIwt3mZL0kq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMHcOsyitCoZ7y%2B7tircA5CGcwgXRyHPJoWGNTF0WJd0XoyMChHE2mJgAfyxmt3ljzvMXAxIgyHcLJBXfJVXoQCElnkLRndGRyE2G0bVP2p3ytCt%2F74sX8xXvvhgndoYvUtpoOiydnuWBOMA8OidLpUmi1PIMWTJpoPs2yTsQHKDBu67vhgP7vmFXt%2FVkbpwH7G4zWGMWNqsEaYWC7rfwBtJftDdt4mKYDuo6wxckJ33vgqAu%2BAIRq63izng4Hc1DL9jfd6E%2BY%2BnO7LSmdSIgZIszYSqUArNRXvQf1ltuJ5WNFeCDdx%2BQfatxSzwugyuEeeTjpV%2BV9YyN1iysqB5jOrqY6AyG3I6DTAgVENNCLXsRycjUMS%2FA0Q%2BWFTlYORu4D6AhUVVVNk7yyX%2BzEctbMLi8ecaB5mIW4TRdENF%2BmGtHnN7CUwhGju3cstZb4cBu5fj7XBsFmxfyHYqA7%2BZV0DLiZK9KV9a1Btul8QKoyfpaK1DtaXaxqwZCdpTDp9OOYdwVGDTkMVdloGQg95k7gXH603C%2BJ0WWZ8aDjBEwZanHyDCQJ10pwode1ONIPb%2FKdW5c%2B3mtP%2Bik6Y01tFBP%2B5sj7%2FSAY2XaHy1MF6kJLd93zA5wg3Yr7Jmk9%2F4AA97bEkygyIN%2Fl32KtOaMOPcxskGOqUBeIs8OCHTt39aKU2tGBdIbjjrWyBsrk0Cf6HlQqcraDX7gEWBsTvJWHrsEMBRpcW1ufcO0qVciMP%2FFtFf4ONOLU94ImqylbMSL39H8jQKhxwVxykXrpqfnObNogP8qLbQ0x30kSmGdFxkdOX0PahJ2FagIPHnRe%2BgRqC5ysNboBqcUbOja9ZsTetb76QXokqJ%2BXjppeQaKREFfoU06QPitzaDSdZU&X-Amz-Signature=1077a21edbfe33ce568b82e8b86bdd1e06eef2e4e37fe3c5ff816fe3c9f37805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
