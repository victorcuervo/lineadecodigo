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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADSSGOL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDDP7JjNVHcVl45zQzCqVfdlRjyfbV2m1UREKLGtioMygIgC5WiWMAd%2Fis6yRontwtE3ZbnHBzrtAMBnGZhJ2KV6SYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGNA3%2BCUenwwG%2B7mwircA3EvbFPk%2FvL6YDqXHUkbV5Ry7QEQVQ2smBhKQbUu%2FHTEAzi%2BJAcBokZ7iU5yN%2FPq2nC73OPhyp7p8PqyGMh2ee1SPMzSf%2FjbXbYNlwdUJ9YA5DFQGV%2BZWoH1Q%2B%2Bvzo%2Bq67uBueuC1J7toVjzU6nMvCjXx5LBqJjLFer19PqprOMyAxq7LGyLWPpkJvgFGtMiEZwJBzY%2Fszvxn7g8BRR2ePdEwBBzNfTnzWl2b7KnWgLS6V8X2U3Jm7o%2FzliToUh9u2Lm9FMw6mfR94vXKi6gnx4Msg3lP6nM9zVypsCClRtLNaXNVFN6tto5h5WNaiBKBUN3w4FBi1%2B024iCv7XlvdlMMCs%2FzWXtpjU5CcXe2Mfjp0hD9pv3CcpvOS8b9cf8awHuSN2O23Jx2FJnwsHaG0MZ9imd7spCTKwKYl4F1XJKH0rhwxKSZuLxUlEOjGOxLj4mA6ZixDA6kZXmGGUEjuS4sHOWxW9PvvghR73BvJL7ijiOiD2hxDAumELsaqG5pFuoh4vgvcXUZyIx2T60sE%2BmJBdTDWDrGnx4H4PiK%2BvLLRU3Je8SjJ2Mvvd1ebkXQ3e%2B3dEXim1%2BxYld%2FczbvmDg%2BfIe0iuuhq4fDmr01s%2B2pi234ORknDlauYR0MPGFxckGOqUBQzGkbUB%2BrMRby%2BiZ4AERrmPhn1XVX0MmXfWht5ha4Y9R431EbmtkLhnm%2B6UdL9e4WWmXzADN1rrh0EzhZssJ2gZfow8m73QdgPvODpTRfbZUXF5ZbpciNt3R1KX0801ANG%2FODMirTTfy851KPFbSqu1fJuXvg8NLji4aMFHjOnXsd566FZCqOKTUBqzcjit4quSG1zoF%2FYfmXNJ2gtrAGObco3PV&X-Amz-Signature=3aad8e518e5ad115c24f577b0fdbb6efb0e94821686b17c0c5d58a79756ee286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADSSGOL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDDP7JjNVHcVl45zQzCqVfdlRjyfbV2m1UREKLGtioMygIgC5WiWMAd%2Fis6yRontwtE3ZbnHBzrtAMBnGZhJ2KV6SYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGNA3%2BCUenwwG%2B7mwircA3EvbFPk%2FvL6YDqXHUkbV5Ry7QEQVQ2smBhKQbUu%2FHTEAzi%2BJAcBokZ7iU5yN%2FPq2nC73OPhyp7p8PqyGMh2ee1SPMzSf%2FjbXbYNlwdUJ9YA5DFQGV%2BZWoH1Q%2B%2Bvzo%2Bq67uBueuC1J7toVjzU6nMvCjXx5LBqJjLFer19PqprOMyAxq7LGyLWPpkJvgFGtMiEZwJBzY%2Fszvxn7g8BRR2ePdEwBBzNfTnzWl2b7KnWgLS6V8X2U3Jm7o%2FzliToUh9u2Lm9FMw6mfR94vXKi6gnx4Msg3lP6nM9zVypsCClRtLNaXNVFN6tto5h5WNaiBKBUN3w4FBi1%2B024iCv7XlvdlMMCs%2FzWXtpjU5CcXe2Mfjp0hD9pv3CcpvOS8b9cf8awHuSN2O23Jx2FJnwsHaG0MZ9imd7spCTKwKYl4F1XJKH0rhwxKSZuLxUlEOjGOxLj4mA6ZixDA6kZXmGGUEjuS4sHOWxW9PvvghR73BvJL7ijiOiD2hxDAumELsaqG5pFuoh4vgvcXUZyIx2T60sE%2BmJBdTDWDrGnx4H4PiK%2BvLLRU3Je8SjJ2Mvvd1ebkXQ3e%2B3dEXim1%2BxYld%2FczbvmDg%2BfIe0iuuhq4fDmr01s%2B2pi234ORknDlauYR0MPGFxckGOqUBQzGkbUB%2BrMRby%2BiZ4AERrmPhn1XVX0MmXfWht5ha4Y9R431EbmtkLhnm%2B6UdL9e4WWmXzADN1rrh0EzhZssJ2gZfow8m73QdgPvODpTRfbZUXF5ZbpciNt3R1KX0801ANG%2FODMirTTfy851KPFbSqu1fJuXvg8NLji4aMFHjOnXsd566FZCqOKTUBqzcjit4quSG1zoF%2FYfmXNJ2gtrAGObco3PV&X-Amz-Signature=ff984c8fce8ccdca68e606c73ddc80be2284a47084d379ddec19de93ba1dbf66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
