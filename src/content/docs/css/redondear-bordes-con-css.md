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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XUEWXJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBBM9YEI5Y1f4qx%2B2wELhccQveuZdVADPMTEcvy4d9OgIgU9w86aZYIZkJZXDAHd6GN0v%2Bzy%2B0S9v2YQJ%2B6caDXsYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMb00meZrj9fKY%2FrTCrcA%2FnT6gKb3FN7h26SHrnMH9s5Btp%2FNsaZfFb5tQQSWzWl7ldXVAGfwN1UAFin2UTN6jowpV01Q0DswUQ9zu1%2F5lpTzY5FixHuKXI6zvKo2b%2BCsN9bkHZP%2FgV5jaHZcLhjlnlITB7m%2FEoE%2BL372aHD0pJ0g2a8pXDbA3UOPD%2FwwKt9aBkgPUUm8X1BLn%2FWUpoklPXkTfmwrs2TjLUfphOJVOdRkT6ltMC8UoTlI4FYXYO%2BmgWb3xvvj0a%2BBMG59gXZlVQzBch9nIhwrJOb6mKgu6cLWtlBg4JlGANkjpHBSjyg4o663aZt%2B%2BVG7xc0SL5jZzO3w0PICUtiBMOF04SQOqy0KtG8%2B3VbvAfEYC5N4UL3yirICo%2BSWt5dwdRWB5XwhzYEe77mca%2Fc9NScvnqhaEngxZkLv%2FSmIva8vpMdGcR0veaDycmpG%2BLufMyPqLBCsi8o9ZrfACldCnH4oaK51in%2FSUspDRDptxo7cm%2BRdWa4BQp1WN%2B9x%2FFyuGdpXSMf8QStTMOJG7e8P1qL1viEuDO0sBv3OhCYi4ofb%2FgV3LZfJLmKGPjrdPvqji5cbO0IlYu3E0DXR%2FKLBp5fwj%2FeCdOPMIupPxTW135LRtmvQnatOePc4bFjKFYHMD8CMM%2FB28kGOqUBf%2BbHeXgNbOw0r8KnMEQlc%2BIu4oFvvDtIlhfnz%2BDLUv9ROoEdPuEw27GSmvZiC5gNhhaBx56yLXhqJ0528rycbPOKceE0%2BEMiV8%2F4cLBDlK1HHTy%2BINRHUP7MlHKYs0mwgg7qcopWTjfEYNSqulq3e6JVGlFeJk1F%2FGYAbpR21hxPVd6QGJQRuBD3WyrOS8PflbO7%2BHPIGv5U%2BeSEDx%2BaZwGimfHO&X-Amz-Signature=23751855261458ddbc658a8c71e9e56688c949eee7c435a38ba663cb3e1d2597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6XUEWXJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBBM9YEI5Y1f4qx%2B2wELhccQveuZdVADPMTEcvy4d9OgIgU9w86aZYIZkJZXDAHd6GN0v%2Bzy%2B0S9v2YQJ%2B6caDXsYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMb00meZrj9fKY%2FrTCrcA%2FnT6gKb3FN7h26SHrnMH9s5Btp%2FNsaZfFb5tQQSWzWl7ldXVAGfwN1UAFin2UTN6jowpV01Q0DswUQ9zu1%2F5lpTzY5FixHuKXI6zvKo2b%2BCsN9bkHZP%2FgV5jaHZcLhjlnlITB7m%2FEoE%2BL372aHD0pJ0g2a8pXDbA3UOPD%2FwwKt9aBkgPUUm8X1BLn%2FWUpoklPXkTfmwrs2TjLUfphOJVOdRkT6ltMC8UoTlI4FYXYO%2BmgWb3xvvj0a%2BBMG59gXZlVQzBch9nIhwrJOb6mKgu6cLWtlBg4JlGANkjpHBSjyg4o663aZt%2B%2BVG7xc0SL5jZzO3w0PICUtiBMOF04SQOqy0KtG8%2B3VbvAfEYC5N4UL3yirICo%2BSWt5dwdRWB5XwhzYEe77mca%2Fc9NScvnqhaEngxZkLv%2FSmIva8vpMdGcR0veaDycmpG%2BLufMyPqLBCsi8o9ZrfACldCnH4oaK51in%2FSUspDRDptxo7cm%2BRdWa4BQp1WN%2B9x%2FFyuGdpXSMf8QStTMOJG7e8P1qL1viEuDO0sBv3OhCYi4ofb%2FgV3LZfJLmKGPjrdPvqji5cbO0IlYu3E0DXR%2FKLBp5fwj%2FeCdOPMIupPxTW135LRtmvQnatOePc4bFjKFYHMD8CMM%2FB28kGOqUBf%2BbHeXgNbOw0r8KnMEQlc%2BIu4oFvvDtIlhfnz%2BDLUv9ROoEdPuEw27GSmvZiC5gNhhaBx56yLXhqJ0528rycbPOKceE0%2BEMiV8%2F4cLBDlK1HHTy%2BINRHUP7MlHKYs0mwgg7qcopWTjfEYNSqulq3e6JVGlFeJk1F%2FGYAbpR21hxPVd6QGJQRuBD3WyrOS8PflbO7%2BHPIGv5U%2BeSEDx%2BaZwGimfHO&X-Amz-Signature=29c76638b414e54f5cef2186483589c552e7a0fc582a056c180d5909e128982f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
