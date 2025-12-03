---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVNKZZC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFSpHgq%2F0GQDeitvllvGL0IWwVup%2BWK5N6bQdf5KwEHVAiAEONLubsj%2FKKP80VN4xSF785wQfcHUoydFbMSNkNGSMyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMoYhEKeMDS%2B61hWsVKtwDd2fZYm8vfNa3fTnTfbHNsGTBYyWoXySE%2BzDoSZt11SUt69KH%2FcOFR29VulwHoJQKK%2Ffg6NVtKo1l8cJCD1HzqSszgpjA%2FDli3vKnRvzKKeoeiLPmNwTZo8dF1Goklshh%2BhPWkcbb6xVKjL84ss0hLjUFayVXAbsQZJLeWY9jEipBEKySxtweOHKuTCk4PmM1LOnU%2BK7DAE2gsGqVJ1uhx1NFaEwRzV6qBD%2B5FrzgUOmdq1Ec7LeNVz%2BOjy%2BKib6O0z5%2Fb1mbdUYhQz6mhZJvALop4JEstLfPffhZbkJezsPbQvwBMTNfwPWsXUVzx4jpFaH33Nj6Oe%2B1Q7510cEr8PA6rZUDgtAQz67KLzOllkolIqxgyXliz14Fcfn0KDwfzxwC58i3iCDMZj97t%2FYKF9OaaORE3836qXuoEbRVkqmPCs9jVRjpzOiO3uSICKEIUIg6RxnasxJ%2B5w8K5TdRprrS%2FzoaQAkRHbcPAG2FN%2B7e3i36cNGIf0VmS%2Bcq46faNyuiB4cpK18nD4enbkkyqh9cjDVtmffwKSA%2FulM8y7mgtSh%2B%2FOTjgHVki7m64esJXpziDJ8jUhwPc8qWrO8rCwfLwCobwewGnysEzta9UiKV0bcqW2mjwvrsXNwwqd3CyQY6pgE4yh5jRf%2B%2FbmWNloEpyzzMZ1rfencuuSPbLE%2Fd2qvRJbq%2FYP%2BCqcd07mNaCurAbBXHz0NUx5wPBB%2Bpi22Q%2BcmOoNoGfDFEuRR1ibQNFNbhbn7sHlGBkBnHjr04mwIL6DTB%2F%2FEqmx6lPXOBeqbGPrIHADccxHuAMENsdLn8LSUpNix1T9MiqMa%2Fz5FKPu3j9%2BIH%2BbPKcLOrzzKuDx%2FjbvpOTixhNxnN&X-Amz-Signature=30c4d75c036769da113d7d7b89e102561b9bd5b0d94022b159ca068034feee13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVNKZZC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFSpHgq%2F0GQDeitvllvGL0IWwVup%2BWK5N6bQdf5KwEHVAiAEONLubsj%2FKKP80VN4xSF785wQfcHUoydFbMSNkNGSMyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMoYhEKeMDS%2B61hWsVKtwDd2fZYm8vfNa3fTnTfbHNsGTBYyWoXySE%2BzDoSZt11SUt69KH%2FcOFR29VulwHoJQKK%2Ffg6NVtKo1l8cJCD1HzqSszgpjA%2FDli3vKnRvzKKeoeiLPmNwTZo8dF1Goklshh%2BhPWkcbb6xVKjL84ss0hLjUFayVXAbsQZJLeWY9jEipBEKySxtweOHKuTCk4PmM1LOnU%2BK7DAE2gsGqVJ1uhx1NFaEwRzV6qBD%2B5FrzgUOmdq1Ec7LeNVz%2BOjy%2BKib6O0z5%2Fb1mbdUYhQz6mhZJvALop4JEstLfPffhZbkJezsPbQvwBMTNfwPWsXUVzx4jpFaH33Nj6Oe%2B1Q7510cEr8PA6rZUDgtAQz67KLzOllkolIqxgyXliz14Fcfn0KDwfzxwC58i3iCDMZj97t%2FYKF9OaaORE3836qXuoEbRVkqmPCs9jVRjpzOiO3uSICKEIUIg6RxnasxJ%2B5w8K5TdRprrS%2FzoaQAkRHbcPAG2FN%2B7e3i36cNGIf0VmS%2Bcq46faNyuiB4cpK18nD4enbkkyqh9cjDVtmffwKSA%2FulM8y7mgtSh%2B%2FOTjgHVki7m64esJXpziDJ8jUhwPc8qWrO8rCwfLwCobwewGnysEzta9UiKV0bcqW2mjwvrsXNwwqd3CyQY6pgE4yh5jRf%2B%2FbmWNloEpyzzMZ1rfencuuSPbLE%2Fd2qvRJbq%2FYP%2BCqcd07mNaCurAbBXHz0NUx5wPBB%2Bpi22Q%2BcmOoNoGfDFEuRR1ibQNFNbhbn7sHlGBkBnHjr04mwIL6DTB%2F%2FEqmx6lPXOBeqbGPrIHADccxHuAMENsdLn8LSUpNix1T9MiqMa%2Fz5FKPu3j9%2BIH%2BbPKcLOrzzKuDx%2FjbvpOTixhNxnN&X-Amz-Signature=c398bdb5c4c6462fb4a84c49ae1585d4be0ae531dbadbd472ab2a0bc7c50273e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
