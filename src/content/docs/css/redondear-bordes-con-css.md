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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZDQJJ2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlmOua3C10s6i3PSzzLc47Q14sQPoG%2BhcY9SULCrdOQgIhAPKcQhEkXUBfZZ1aGnu5B0nlBT7vx%2BKXVdGG2OeFBObKKv8DCFsQABoMNjM3NDIzMTgzODA1IgyC%2Bxhl6uYyW1o1G3Iq3ANKU5WIwZENbx6syua%2Fmy%2B1d6%2Bw7o0T0r%2BlhaFr%2FQPyxdOlC%2Fobjga95CoineMAwostAGNfj8DY2F09A0DmbX%2BgKx9jJObq9Uy2GnsDNe1K%2FPHTJ8V9QPjDQtQkOR0mFrXARWLR3R2fKWZtI3JZTSbzIZObIEJT92cVzT0nPKRVqUaznjtwInuD4xbL11NZ4OpGsArRFmF%2F2Elfq5icjgaNzCvdWN7GQKaEuMIpfDZZV75QncAmse3SP2lYNaVDKk4u22Lsq8c3ZG9xzPFZirF4ujmStvyeaj5cymUcPFxZp5YOgfIvJwrsCDTl9btN%2Fvf67c5NcFPVIm8z8yzisZuMCsskCyq5Csy3ELyn7L3otWMk7PJwfllgT69Q0DIW7lAUkCgwKQnyuOTPjxqP85257b0zmQfFO122GD6hQIQhHb2JN%2BaDoGgEEfEtjsiFliMHv8j5%2FD13rsdYT0sQw8dmIYfVwrhO7HLRWPyJxqL%2BVm1no6dqdZ0sQGOoyf84mBxFi0qvY%2BDfo%2Fb715IPdjelcgLX4O2cytB7yDdI77sdjAj71kH60xTBgKVGh%2Bnkq62Tg47i0VSqZ7URC%2BlK5aSd2T%2FMfEA3jAHUUvHyBIQRd%2BG2NMoI0jjWeuzK%2BjCNzMrJBjqkAV2msf%2B%2FmR84CXUG2LuUc7T6ja0QMgpf7f51rF4GUe2iI8EOZMDSspNY17eaY3YZFdqF3XADuTflz2OphI2Gq1ammXvaV8itHys5GnM76yDcFmOScOap%2Ba9AMa0VcpFZckS72utgxvfiyhReGfN%2BdEStciP543bhTNAblH9UstOVssTKpM9U6pUlYVAc71I4izcngwjOhr%2BRHq8p3bSx6q%2BQsyQa&X-Amz-Signature=d24fc28e01d2a066221ac0077c11fc23901416f59683eb9a7f27a7d2be91b8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZDQJJ2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlmOua3C10s6i3PSzzLc47Q14sQPoG%2BhcY9SULCrdOQgIhAPKcQhEkXUBfZZ1aGnu5B0nlBT7vx%2BKXVdGG2OeFBObKKv8DCFsQABoMNjM3NDIzMTgzODA1IgyC%2Bxhl6uYyW1o1G3Iq3ANKU5WIwZENbx6syua%2Fmy%2B1d6%2Bw7o0T0r%2BlhaFr%2FQPyxdOlC%2Fobjga95CoineMAwostAGNfj8DY2F09A0DmbX%2BgKx9jJObq9Uy2GnsDNe1K%2FPHTJ8V9QPjDQtQkOR0mFrXARWLR3R2fKWZtI3JZTSbzIZObIEJT92cVzT0nPKRVqUaznjtwInuD4xbL11NZ4OpGsArRFmF%2F2Elfq5icjgaNzCvdWN7GQKaEuMIpfDZZV75QncAmse3SP2lYNaVDKk4u22Lsq8c3ZG9xzPFZirF4ujmStvyeaj5cymUcPFxZp5YOgfIvJwrsCDTl9btN%2Fvf67c5NcFPVIm8z8yzisZuMCsskCyq5Csy3ELyn7L3otWMk7PJwfllgT69Q0DIW7lAUkCgwKQnyuOTPjxqP85257b0zmQfFO122GD6hQIQhHb2JN%2BaDoGgEEfEtjsiFliMHv8j5%2FD13rsdYT0sQw8dmIYfVwrhO7HLRWPyJxqL%2BVm1no6dqdZ0sQGOoyf84mBxFi0qvY%2BDfo%2Fb715IPdjelcgLX4O2cytB7yDdI77sdjAj71kH60xTBgKVGh%2Bnkq62Tg47i0VSqZ7URC%2BlK5aSd2T%2FMfEA3jAHUUvHyBIQRd%2BG2NMoI0jjWeuzK%2BjCNzMrJBjqkAV2msf%2B%2FmR84CXUG2LuUc7T6ja0QMgpf7f51rF4GUe2iI8EOZMDSspNY17eaY3YZFdqF3XADuTflz2OphI2Gq1ammXvaV8itHys5GnM76yDcFmOScOap%2Ba9AMa0VcpFZckS72utgxvfiyhReGfN%2BdEStciP543bhTNAblH9UstOVssTKpM9U6pUlYVAc71I4izcngwjOhr%2BRHq8p3bSx6q%2BQsyQa&X-Amz-Signature=82e2722d124427613fb388c7e04c3754ea696172b24e926fa6f05aaa884ab2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
