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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWPMYX3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9DlPdcUmIxdJ%2B536BhOXPfe3WUsS1o%2FEnw%2FZpBUvATwIgb9o3cANllOU7z9FCvSBldgNShIxO0yGiSuYZFRrZ%2BbgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb7YAkDdSugvdiPTCrcAzyZ17yS%2F7OIAtUsCW%2BRmQXYVhdDwTRzr%2B90eQeII56Wlj0ZT7vw%2FNu%2Bn71ch8GFDAxLwWTQf2jGOLkfinilRu89QJutfVW4MUJ5ptvCa8YDteMr61TBTY1pAiy8cD0JxSjkcZMNBFL2WxuqYiLCv8DC662x6i%2Faw1GqOSAqEia%2Bps0epmJcp9UtPEqeHeZQTnXTNYp5OpwyawPr43zym0awws8MFXbiXQWS6X30XlafFILUnmQ1KqoPEaJtpYXzyU2mZo7f52NJFurCHuVtj%2F8LwB%2B2bfTGaX1f5AoXOPeVeKvVh4u1R7zvqSebMqLboeApNKr7QAEKUu0QPDzfrPGYQnyul03OMV83moc1B09nj3TXRoTawNGVAgQn4sPJsOdbK8pQ13UoTnnuuKYzaIr08aJ9eyvoSqvkJHFU7IVpCFiGVly3OisKFUGDr5xLE10MDHxhTliqPst3%2BnQhYeoyPTUP6567Zz3m56qHB3usEl%2BJw1X1umw9tYyo3GyB4b2j%2FKeMeKCRPCH95f5JWoiKZRm3gdO6Ro4n3k%2F06s%2B7ikaIgsdWuk7fYNOgTCxmRBylHnUsKNbsPvq9QadL87mhsV2D3YIqiY4WrLjXjveeEH5J0UUJpqJJdpoJMNKd1MkGOqUB16BtN6JSWAgrPxKnLXuNmaVdnTdlLs7w5ZciDt6KsBm9hElCv03kGKPAgucllAUCeTMDxn7K%2Fz2Rx8SIRWRYePbn78wA6nMMXzo9H%2F8BpwGiH53WnCRsAEV%2BC04vvvLWYg%2FWbU%2FROyC27ndPIjYlMyZZahf0NX4ctAjcAssuRXpo8UXPV8qumkhEcGd3xavVOWjynTWeqPgyy5xdhr8wmSUVtrw0&X-Amz-Signature=1e3372b45ce7ef62693bc99c7af58c54fc74589aa170537ef80a9fb2a7dec8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWPMYX3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9DlPdcUmIxdJ%2B536BhOXPfe3WUsS1o%2FEnw%2FZpBUvATwIgb9o3cANllOU7z9FCvSBldgNShIxO0yGiSuYZFRrZ%2BbgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb7YAkDdSugvdiPTCrcAzyZ17yS%2F7OIAtUsCW%2BRmQXYVhdDwTRzr%2B90eQeII56Wlj0ZT7vw%2FNu%2Bn71ch8GFDAxLwWTQf2jGOLkfinilRu89QJutfVW4MUJ5ptvCa8YDteMr61TBTY1pAiy8cD0JxSjkcZMNBFL2WxuqYiLCv8DC662x6i%2Faw1GqOSAqEia%2Bps0epmJcp9UtPEqeHeZQTnXTNYp5OpwyawPr43zym0awws8MFXbiXQWS6X30XlafFILUnmQ1KqoPEaJtpYXzyU2mZo7f52NJFurCHuVtj%2F8LwB%2B2bfTGaX1f5AoXOPeVeKvVh4u1R7zvqSebMqLboeApNKr7QAEKUu0QPDzfrPGYQnyul03OMV83moc1B09nj3TXRoTawNGVAgQn4sPJsOdbK8pQ13UoTnnuuKYzaIr08aJ9eyvoSqvkJHFU7IVpCFiGVly3OisKFUGDr5xLE10MDHxhTliqPst3%2BnQhYeoyPTUP6567Zz3m56qHB3usEl%2BJw1X1umw9tYyo3GyB4b2j%2FKeMeKCRPCH95f5JWoiKZRm3gdO6Ro4n3k%2F06s%2B7ikaIgsdWuk7fYNOgTCxmRBylHnUsKNbsPvq9QadL87mhsV2D3YIqiY4WrLjXjveeEH5J0UUJpqJJdpoJMNKd1MkGOqUB16BtN6JSWAgrPxKnLXuNmaVdnTdlLs7w5ZciDt6KsBm9hElCv03kGKPAgucllAUCeTMDxn7K%2Fz2Rx8SIRWRYePbn78wA6nMMXzo9H%2F8BpwGiH53WnCRsAEV%2BC04vvvLWYg%2FWbU%2FROyC27ndPIjYlMyZZahf0NX4ctAjcAssuRXpo8UXPV8qumkhEcGd3xavVOWjynTWeqPgyy5xdhr8wmSUVtrw0&X-Amz-Signature=7b00b52a2fde2e0114ceb15c9e0697a2acec0286ad8ae92e55e78d05210b1461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
