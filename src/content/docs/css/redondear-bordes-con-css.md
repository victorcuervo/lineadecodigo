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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VREY2BJN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsZzC9N59GJdSW%2B3YDiaNfcpFUEOh4ytNXwuVlmnhwxwIhAOICYipqaGs7tlzmgMPJoRhLlL%2FP%2BxTANW5ndtDazmZeKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ3VlabOfEUVGCKekq3APNocueaasl8mEaE3vt1Y9AdpL%2F7b%2B%2FY9QD9ZlHKh1lfFN%2BDB7tmGGhHxe8sHWvNjNQlK6K34ql5poElWcquM6EpLmWsmo9Cysd06GHmdEFEPcJl25HlkhLrikWK6XU%2FWyoIU4eAXT475QE4CW1KXjKh2PkCay4%2BT498%2Fal21M0R%2FsXsiO4uzQcC7JtEYrPxsPJsmgSu2QOqcplrB%2BgFUPbC0CariUqVLtJ6Lntfp8CQ0WDBZwfft%2BPVXIVx1m0jVNw8Kl5wW3Iwaxel3DTXp1eqBEe7kuap%2FipLk4s03SoQ9SaWjWxQEMe4x1d0yb9UEAV4Znn4a2wyh1CrLMOpHb4J6Nx%2FJCJk1yQeUM%2BUVn%2BjOEGTOdlhgQryFBpk5BtjEK5TZUeKejVdaviSQlCUXJM4MAFFuwropV4rNOmaituVcOMcPfoRQTb33UA9VwiWafzwJZcinyqGC8jqXXQmeFZTcYzPoJeIiV71Fbfveb%2BEYqiJW7xG4C7i39c5M1zZQJORbNkWRDVA6JFS3C12s%2FKw6tqvdi5ZyK6P6lNwlBooUZREwziF%2FDncI%2Fk2DfhSRS9b3kuIS4BpWil3XlM%2BSc%2FvkPb2AlNoPDPmuRM1Z8tIPj3k95N9P70tfuakzDNodjJBjqkAag7y11wHnBMXusfqV4g45Dqb8Cz29fo3Xsai8nzVd5QZa70nT7xvwshC%2FG5gfDNEZ8W%2Bwm5B%2F8cJ73WubBe1ZbP%2BwCy3hrcThB13SolPMyl144ndUTA%2FEtJbPMoShm9acEml4KQimKEYGnTsdjRAjuxEWgum4meQNMuSZo5EEtXk55xHFQou7yvzQh05DVEtBfnKgH2JJYHiBoReI2js4lpt3Be&X-Amz-Signature=79e9f9581ff9e121069022cc55d660c731f09923eaa79157116d1d13b303b3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VREY2BJN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsZzC9N59GJdSW%2B3YDiaNfcpFUEOh4ytNXwuVlmnhwxwIhAOICYipqaGs7tlzmgMPJoRhLlL%2FP%2BxTANW5ndtDazmZeKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ3VlabOfEUVGCKekq3APNocueaasl8mEaE3vt1Y9AdpL%2F7b%2B%2FY9QD9ZlHKh1lfFN%2BDB7tmGGhHxe8sHWvNjNQlK6K34ql5poElWcquM6EpLmWsmo9Cysd06GHmdEFEPcJl25HlkhLrikWK6XU%2FWyoIU4eAXT475QE4CW1KXjKh2PkCay4%2BT498%2Fal21M0R%2FsXsiO4uzQcC7JtEYrPxsPJsmgSu2QOqcplrB%2BgFUPbC0CariUqVLtJ6Lntfp8CQ0WDBZwfft%2BPVXIVx1m0jVNw8Kl5wW3Iwaxel3DTXp1eqBEe7kuap%2FipLk4s03SoQ9SaWjWxQEMe4x1d0yb9UEAV4Znn4a2wyh1CrLMOpHb4J6Nx%2FJCJk1yQeUM%2BUVn%2BjOEGTOdlhgQryFBpk5BtjEK5TZUeKejVdaviSQlCUXJM4MAFFuwropV4rNOmaituVcOMcPfoRQTb33UA9VwiWafzwJZcinyqGC8jqXXQmeFZTcYzPoJeIiV71Fbfveb%2BEYqiJW7xG4C7i39c5M1zZQJORbNkWRDVA6JFS3C12s%2FKw6tqvdi5ZyK6P6lNwlBooUZREwziF%2FDncI%2Fk2DfhSRS9b3kuIS4BpWil3XlM%2BSc%2FvkPb2AlNoPDPmuRM1Z8tIPj3k95N9P70tfuakzDNodjJBjqkAag7y11wHnBMXusfqV4g45Dqb8Cz29fo3Xsai8nzVd5QZa70nT7xvwshC%2FG5gfDNEZ8W%2Bwm5B%2F8cJ73WubBe1ZbP%2BwCy3hrcThB13SolPMyl144ndUTA%2FEtJbPMoShm9acEml4KQimKEYGnTsdjRAjuxEWgum4meQNMuSZo5EEtXk55xHFQou7yvzQh05DVEtBfnKgH2JJYHiBoReI2js4lpt3Be&X-Amz-Signature=14bc1e2bc2650a4cf5265382fcd38be1ff17bf59c64bee695de43aabfa5b518e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
