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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X35ZQLN7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1%2Fk%2FfsIn%2FxZl27%2F7eOobrfBTthIhBLnwC2FLMuzLu4wIhANmSXAneB0dyMNqLYS6DRIXGpgT0znhuYbudJqdpJ72VKv8DCE8QABoMNjM3NDIzMTgzODA1IgykpuXXVy22tRh175Yq3AOOK46BgeyA89Lv%2FxTUAwaO7m6RptxaGCt4InTtNosr61Kk%2FDaaL3Zi%2Bn8lbBPR8hNMOzWmz2raxpH1UlQmmFqoBG9OAHMEvq2MWTB%2B4x0sRYJ1WVzU1ZO2qyBZE%2BLuWG8eL46i7wUraHKyko%2Bp1MKVz5LX28m%2F82sW6Nw9YoEcypr5jhTGtoa68%2Bd9IF1rp4FWSfExK52mHRLSMzIJIazbyWWEzQGT%2BGbBCtpW5l%2FLWkPrTpUVCSNqGPf%2FGmWlLXkpgclEzH7xy1KVevwvPxXTkMAywyYLL2q1puLdlepEjrJ8r10jN4cpfWhJ9kkyrDXvxreL7ERJ5QkMT52bNadMq2FlfE0AKIim23ALmJErgs%2BOjblNWVF1kuNCdlD0uiRixJwwRfKqxSrQEEaSmUboM2pwKQA7Buu0yWtxjOsn1yqvJGrKeQoaMS9FVdJs0Mt2rp3Q70bRKQcidf2lDqNG7MbCYo%2FgcM3hrQONUoHX2n9jFlLDlMGpqx%2BD6%2BrEPZIXD2GMAWuL66HjRhVmayb2iz8NYyEwBbEr3mi2aOIMYsplor6FaiCUleawxapVUDamWxIYDkdW9A5S1EGPrb6SP6sxIKVUj%2F8EX6o3Q4t1j76%2Bp0HZ4dwmIeUnPDCqjMjJBjqkAcLP%2FTm%2Fv42vkkJu0M4S%2BImdzKWqrbrQfiubuzw%2BgmvakEVhBIncMvK%2F3uyUVZI%2FW5UK0OxwGiNiGHrznfNkOC0%2FTNBffYwhJU5SbqiQue3ziWfnNYlwXmzAPy0zRlJw8i6BUuK6IIt5jl2vnSjvWyf2Af44Bmv%2BZJiD9IhAzFvJZvnwb2IsK6dj%2BtSPFrDkV1bMPux26pTUjowV3KR%2Fb1h29P%2F%2B&X-Amz-Signature=5cec40766d0e850eba61ea7651e991f4de8fa7c5152040ba98c277d9a4df19ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X35ZQLN7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1%2Fk%2FfsIn%2FxZl27%2F7eOobrfBTthIhBLnwC2FLMuzLu4wIhANmSXAneB0dyMNqLYS6DRIXGpgT0znhuYbudJqdpJ72VKv8DCE8QABoMNjM3NDIzMTgzODA1IgykpuXXVy22tRh175Yq3AOOK46BgeyA89Lv%2FxTUAwaO7m6RptxaGCt4InTtNosr61Kk%2FDaaL3Zi%2Bn8lbBPR8hNMOzWmz2raxpH1UlQmmFqoBG9OAHMEvq2MWTB%2B4x0sRYJ1WVzU1ZO2qyBZE%2BLuWG8eL46i7wUraHKyko%2Bp1MKVz5LX28m%2F82sW6Nw9YoEcypr5jhTGtoa68%2Bd9IF1rp4FWSfExK52mHRLSMzIJIazbyWWEzQGT%2BGbBCtpW5l%2FLWkPrTpUVCSNqGPf%2FGmWlLXkpgclEzH7xy1KVevwvPxXTkMAywyYLL2q1puLdlepEjrJ8r10jN4cpfWhJ9kkyrDXvxreL7ERJ5QkMT52bNadMq2FlfE0AKIim23ALmJErgs%2BOjblNWVF1kuNCdlD0uiRixJwwRfKqxSrQEEaSmUboM2pwKQA7Buu0yWtxjOsn1yqvJGrKeQoaMS9FVdJs0Mt2rp3Q70bRKQcidf2lDqNG7MbCYo%2FgcM3hrQONUoHX2n9jFlLDlMGpqx%2BD6%2BrEPZIXD2GMAWuL66HjRhVmayb2iz8NYyEwBbEr3mi2aOIMYsplor6FaiCUleawxapVUDamWxIYDkdW9A5S1EGPrb6SP6sxIKVUj%2F8EX6o3Q4t1j76%2Bp0HZ4dwmIeUnPDCqjMjJBjqkAcLP%2FTm%2Fv42vkkJu0M4S%2BImdzKWqrbrQfiubuzw%2BgmvakEVhBIncMvK%2F3uyUVZI%2FW5UK0OxwGiNiGHrznfNkOC0%2FTNBffYwhJU5SbqiQue3ziWfnNYlwXmzAPy0zRlJw8i6BUuK6IIt5jl2vnSjvWyf2Af44Bmv%2BZJiD9IhAzFvJZvnwb2IsK6dj%2BtSPFrDkV1bMPux26pTUjowV3KR%2Fb1h29P%2F%2B&X-Amz-Signature=8f0625f3d21eaadd61c8de79095be457cb2be10ec24451b1b5c17a0e593d70d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
