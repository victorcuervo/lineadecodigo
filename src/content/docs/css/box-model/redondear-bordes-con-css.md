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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJJNC6U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuGob4C1D21Fw9Ojmfc%2FFFZaQQMtuqp4VM%2FVal6roP0wIgXvQp%2FwIHkJb21PpX5d4E2hb%2Bw%2BqfUCeBHGunVCFVhKAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM8v1nsz45PHeaoE9SrcA6TovGhn4FJWm99Tiwmq7LLBokWurrN12jXrlmyiIrPH03HQg%2B3lJZZDABOnnxxVwajssbqRvaJtatTmijEdSrHrft7IUwTUuVoScJhtu3BajnWkUB14hHE6kdBux4McGKgkh%2BKzc8GPEGb%2FdOSkg4at86SqPPj6%2BmH%2FGhhEtS8YReWqYfvc3CTiIS%2B1uX8MP0GY6R17TKPtuWdwO46l%2BSCrVeekFvgyobPmsg9xec6JLSYbm%2FurBY68lHSPQPz1Q8VFPbK%2FGm1fjeK3pIgKqHRZIS08YGpK0eK5W0sDpEddO8qLzp0xCyqrOMpLB1guDAa6w8GuHDVaYGRpdjAeTU7D6NYKwhp8H%2FNr4%2BLEtIxh6vTA%2B3DNmCp6JA4AYPojf65PSUVIAF7DtlqbvcqyUC%2BfQZof7jIPkQkNA0Xi63Miy9miSW3LqrOfKFNhsZ5bJ8eQ0OFSZF9437VVexkho0BoAHikBZeS6Xtk7piwKcYqvGUfx5v%2BbsNaFlWiQa%2BCpHsddBGBQboivKQ91tCVegl1i25mYiT%2Bi7DkN%2F7vQjTDOKGUFK89sTKuC1IJDvd8S54C2zzEww5993xqnwrWc3%2BZW4EieV6UzWz6giVuoQg9MYlkwlqAmy1DoPPHMNTFisoGOqUBDnLQz3YDzODYvNYlcWp3NDhnToHnWvDheBv8e2gcnFROBhjPUVUKoQ54UVaHydBTiAqYusYewPF9%2FJH9qWLwt9gSZUHCf9fvLisSCfvW1RF8wvrXWId%2BxqHh3YmeJdC4b27P3LJ3JYA%2BLuNQKFQi2GhNRKeudIyYQNZdEfIwuRJXpwV9XdOL988dRGySquPytJwXjazODlFZeFPEuUIb8L1HRHdy&X-Amz-Signature=8dcc107022f07a5258f6943d692ce04b2982d1876aa263b6d4d1099a82fc504c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJJNC6U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuGob4C1D21Fw9Ojmfc%2FFFZaQQMtuqp4VM%2FVal6roP0wIgXvQp%2FwIHkJb21PpX5d4E2hb%2Bw%2BqfUCeBHGunVCFVhKAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM8v1nsz45PHeaoE9SrcA6TovGhn4FJWm99Tiwmq7LLBokWurrN12jXrlmyiIrPH03HQg%2B3lJZZDABOnnxxVwajssbqRvaJtatTmijEdSrHrft7IUwTUuVoScJhtu3BajnWkUB14hHE6kdBux4McGKgkh%2BKzc8GPEGb%2FdOSkg4at86SqPPj6%2BmH%2FGhhEtS8YReWqYfvc3CTiIS%2B1uX8MP0GY6R17TKPtuWdwO46l%2BSCrVeekFvgyobPmsg9xec6JLSYbm%2FurBY68lHSPQPz1Q8VFPbK%2FGm1fjeK3pIgKqHRZIS08YGpK0eK5W0sDpEddO8qLzp0xCyqrOMpLB1guDAa6w8GuHDVaYGRpdjAeTU7D6NYKwhp8H%2FNr4%2BLEtIxh6vTA%2B3DNmCp6JA4AYPojf65PSUVIAF7DtlqbvcqyUC%2BfQZof7jIPkQkNA0Xi63Miy9miSW3LqrOfKFNhsZ5bJ8eQ0OFSZF9437VVexkho0BoAHikBZeS6Xtk7piwKcYqvGUfx5v%2BbsNaFlWiQa%2BCpHsddBGBQboivKQ91tCVegl1i25mYiT%2Bi7DkN%2F7vQjTDOKGUFK89sTKuC1IJDvd8S54C2zzEww5993xqnwrWc3%2BZW4EieV6UzWz6giVuoQg9MYlkwlqAmy1DoPPHMNTFisoGOqUBDnLQz3YDzODYvNYlcWp3NDhnToHnWvDheBv8e2gcnFROBhjPUVUKoQ54UVaHydBTiAqYusYewPF9%2FJH9qWLwt9gSZUHCf9fvLisSCfvW1RF8wvrXWId%2BxqHh3YmeJdC4b27P3LJ3JYA%2BLuNQKFQi2GhNRKeudIyYQNZdEfIwuRJXpwV9XdOL988dRGySquPytJwXjazODlFZeFPEuUIb8L1HRHdy&X-Amz-Signature=17cfc0b29c75965df1e463987402d616b97e02374267bbe431541684dbd1e6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
