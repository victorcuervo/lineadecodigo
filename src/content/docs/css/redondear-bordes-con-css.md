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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQNR6VVU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrElnrrdUFrClbvspFihv5YtSiEiO7NzbFf2ODpaOb3gIhAPXyGGXjQqpoW83mMVgYtNm2Lh2WAwlrK9bgwDQoWsemKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG5et7PtqpUKNwW5Eq3AOjKBxpLUH56lh8mV4rIuU0FFqzkTQwMpbM55Vjg4dcMkt3eFLFpQ3U%2BS8sIfvTiDHVZX4H7DFt5Cs8y0USjCyJJfTInZpJHJIlYSYieNAM2ovIfqP%2B0PluSyQK0oBIfM56sIeTF1i%2Fv1QiiK10lollfP72O3zceXf0cKdHNiTzyzwO3AHxJidpxb3gTH3N7WbaxfJKU4pAuVcYTIIn4EL7s%2BLaCxVieVHCHbsZyRDn6Bh1nFeavOEtPA6%2B3i%2FeARfdWwdWSkC1%2FvacJuMPsLHIc4n6JQCfPdzaReGyp7Tq2VTk6s%2BtWOXCTdAa2E6udaFnFoHQRfNtyYzkRjIoJ4AsHJKa8VVMh3tdFSqBbT9C43mFF6PrC4OrBy9NOWveOasMi0AqrdmyPik%2BQZ0W%2B2OMTUjAvm71%2FW0sOkhlVbykEz3fPVm9uPp3Hrekg0XJhsg4MsagOjGsyVKpl9V8UZAitfoyxGpUOx6FRtz7yxrku%2FNluR4l4PA0t2Fcd9VhifnTpQYK2pZtLYttU7Ey59C76zrHEaHRocyQ%2FB31PqCawc3yZ3Vx5yuYbJNxUiNh2XFNSrAdut9bty4mbidjjR6p5QgEfWGKnnIlGaLDS6xKh%2F5DbwN1Qk3Q2ija8TDdm9TJBjqkAYW3dEukUZGpPvBqu%2Fr1rR2eEt52lSW8%2F1IFXsEcKgOdCQLY2fSdPSYOx38uAP5HROPGE%2BbTGwlYfVtHZx4P2gkMLBcoLPsrzWgMy%2Fgvg2juoCEkHlduLSeZanO%2B7HJPbUX8%2FMWr4qho%2BSvGba8BQLjmbgNYSm73Fkj5KcWgGEQrYUOoKaSG696x%2Fn%2BWnPsq3IO92QurKmfWuxgDH822K0WoulPl&X-Amz-Signature=071e659e7b92a7c62813b269a1e86cc1716db1ee9a254108ad99c0165da3e7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQNR6VVU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrElnrrdUFrClbvspFihv5YtSiEiO7NzbFf2ODpaOb3gIhAPXyGGXjQqpoW83mMVgYtNm2Lh2WAwlrK9bgwDQoWsemKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG5et7PtqpUKNwW5Eq3AOjKBxpLUH56lh8mV4rIuU0FFqzkTQwMpbM55Vjg4dcMkt3eFLFpQ3U%2BS8sIfvTiDHVZX4H7DFt5Cs8y0USjCyJJfTInZpJHJIlYSYieNAM2ovIfqP%2B0PluSyQK0oBIfM56sIeTF1i%2Fv1QiiK10lollfP72O3zceXf0cKdHNiTzyzwO3AHxJidpxb3gTH3N7WbaxfJKU4pAuVcYTIIn4EL7s%2BLaCxVieVHCHbsZyRDn6Bh1nFeavOEtPA6%2B3i%2FeARfdWwdWSkC1%2FvacJuMPsLHIc4n6JQCfPdzaReGyp7Tq2VTk6s%2BtWOXCTdAa2E6udaFnFoHQRfNtyYzkRjIoJ4AsHJKa8VVMh3tdFSqBbT9C43mFF6PrC4OrBy9NOWveOasMi0AqrdmyPik%2BQZ0W%2B2OMTUjAvm71%2FW0sOkhlVbykEz3fPVm9uPp3Hrekg0XJhsg4MsagOjGsyVKpl9V8UZAitfoyxGpUOx6FRtz7yxrku%2FNluR4l4PA0t2Fcd9VhifnTpQYK2pZtLYttU7Ey59C76zrHEaHRocyQ%2FB31PqCawc3yZ3Vx5yuYbJNxUiNh2XFNSrAdut9bty4mbidjjR6p5QgEfWGKnnIlGaLDS6xKh%2F5DbwN1Qk3Q2ija8TDdm9TJBjqkAYW3dEukUZGpPvBqu%2Fr1rR2eEt52lSW8%2F1IFXsEcKgOdCQLY2fSdPSYOx38uAP5HROPGE%2BbTGwlYfVtHZx4P2gkMLBcoLPsrzWgMy%2Fgvg2juoCEkHlduLSeZanO%2B7HJPbUX8%2FMWr4qho%2BSvGba8BQLjmbgNYSm73Fkj5KcWgGEQrYUOoKaSG696x%2Fn%2BWnPsq3IO92QurKmfWuxgDH822K0WoulPl&X-Amz-Signature=f7ff895efc664208877120f6ebed128e5dda3705c557c2efd365f42e7da6bdf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
