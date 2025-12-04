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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RKFRQE4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHCUXwvmvQQ0v%2BJ2Ouzyx1sbaVygSAdbwedwLDO5BpZjAiEApExw5sP73x4Syj6ENKQGeNZTU5%2Bp9OdyPNjAVvnUIwcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJcv2t8JvR4Bsh%2FUqCrcAySp16qQzbDf1Emx3NbwaL48VgnHTHI1lkj0wec8%2B9kuQ%2BrQWvcblf07Nlz9p2UCiNgiRWxv0zrsL6BcWR00H1R%2F7O%2BUSwnZfUHEUcCYUx47zZ3wONbxmr7HqiZM5ASt%2BNe1RFoZMeueCxE1G9Z4UmYzG%2Bnugo3WogL0RaAx3sfAak7QeR%2BNWCFccUvm6IgAT43gtXpXegvXvcLJU9PnbOM38EIhdItqBDKJa0JK1b4Wz%2BI54nXDbfo6UqO4Zn7SbUI8jWxNBjII%2F7A4UUeaiiVu78rn2wwBhhAz9kwhAGdLbe5bxBZdk9iKSy9BkFd0W35dnIF5GasPuDdU1cmHoTBlJWdgdFuNoBCFYMtMfCoTFYOsbw5ifIQhVv3lfTH07JrkaI9GMNWEWEu62vqPBBiQW4aOd6ExPx62aOdNg%2Fzwyw2vFAunpnlZw9WkIx8eJTrOHhDGnH%2Bkr%2F0J3rj1YIOtlw4hUVJzkWlvJz5YKPfrqXtEe1C9r8KAs0lrIirAyVu3FJ0UeakamWJNSgA3FWq%2FIsWgxsOeXuRAukprI2wjJHbULmO62g6U2SXZrKMDtrjjnJkYcSWNYF4NiZWlbVGNpTCx71rTM%2F%2BsbiFxWzD%2FPsbxkgUwPCye8zj8MJeGxckGOqUBpK3AVS4z%2BPMUBK3MwvnurgqJb8k015DYGecy2ZLCuzR2JUilsSoagFiWsW8SMISRpTkJrMu5cm0ECLSW1Q2KbC6h0sak2hCrpBP3oaLpCqiVCI9jcaFhBs%2BCLDCbjQ18oZl9NhJpm6uJ%2B%2FGzsz%2Bxgt3gt6dBhzSqXCtcM%2BjCpVb%2BYihUQomDRRYney8UymAK9T4NrpRiMG%2F57GnKFjUAi7K1%2Fisz&X-Amz-Signature=6ea759186b7707eb26b85110af3d25d044b31b3a59559180e61c3cbcc505ec7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RKFRQE4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHCUXwvmvQQ0v%2BJ2Ouzyx1sbaVygSAdbwedwLDO5BpZjAiEApExw5sP73x4Syj6ENKQGeNZTU5%2Bp9OdyPNjAVvnUIwcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJcv2t8JvR4Bsh%2FUqCrcAySp16qQzbDf1Emx3NbwaL48VgnHTHI1lkj0wec8%2B9kuQ%2BrQWvcblf07Nlz9p2UCiNgiRWxv0zrsL6BcWR00H1R%2F7O%2BUSwnZfUHEUcCYUx47zZ3wONbxmr7HqiZM5ASt%2BNe1RFoZMeueCxE1G9Z4UmYzG%2Bnugo3WogL0RaAx3sfAak7QeR%2BNWCFccUvm6IgAT43gtXpXegvXvcLJU9PnbOM38EIhdItqBDKJa0JK1b4Wz%2BI54nXDbfo6UqO4Zn7SbUI8jWxNBjII%2F7A4UUeaiiVu78rn2wwBhhAz9kwhAGdLbe5bxBZdk9iKSy9BkFd0W35dnIF5GasPuDdU1cmHoTBlJWdgdFuNoBCFYMtMfCoTFYOsbw5ifIQhVv3lfTH07JrkaI9GMNWEWEu62vqPBBiQW4aOd6ExPx62aOdNg%2Fzwyw2vFAunpnlZw9WkIx8eJTrOHhDGnH%2Bkr%2F0J3rj1YIOtlw4hUVJzkWlvJz5YKPfrqXtEe1C9r8KAs0lrIirAyVu3FJ0UeakamWJNSgA3FWq%2FIsWgxsOeXuRAukprI2wjJHbULmO62g6U2SXZrKMDtrjjnJkYcSWNYF4NiZWlbVGNpTCx71rTM%2F%2BsbiFxWzD%2FPsbxkgUwPCye8zj8MJeGxckGOqUBpK3AVS4z%2BPMUBK3MwvnurgqJb8k015DYGecy2ZLCuzR2JUilsSoagFiWsW8SMISRpTkJrMu5cm0ECLSW1Q2KbC6h0sak2hCrpBP3oaLpCqiVCI9jcaFhBs%2BCLDCbjQ18oZl9NhJpm6uJ%2B%2FGzsz%2Bxgt3gt6dBhzSqXCtcM%2BjCpVb%2BYihUQomDRRYney8UymAK9T4NrpRiMG%2F57GnKFjUAi7K1%2Fisz&X-Amz-Signature=71a2d2bf9812154839ee0b778205ced0d4b192a2a96619a2465a88af64a72cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
