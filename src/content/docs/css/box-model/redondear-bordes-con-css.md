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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAHUATJU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICY9WItacM8bFXdflszf2iZ6DP6lc3AcSLV%2F8V71Z%2FPWAiAXl1d9MmyKFiHgZbEyIiGCJMS4zKGdY9Hx2Za0volM1Sr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMiZUpZVlUIpkh9vc1KtwDlBh3I6DF1CXKLaKptmMDp1am%2B6QLJJimiB42vI73PLX7Kl99efKmLYOhYNT5qtx9aX4oc1T2Xj65ezcCVOU9LM74GviR5f8xw%2FshzpngzzCljb%2FIdKousrHNJbPCC2VXWa%2Bs%2FM9l56uV1hB2h1Z%2FjXthRRpghZVV5vHVIj6skAFxZDjdFmwcxteLSDCetp%2FpmrdrJWNbdFme9EhmPb2cIcoj8F%2Bbd%2BDLfqbE47UKTdhFM6Gwf%2BIZv4LXCnctNOdhSDG1zdfbhpgwoXQRahumCW5RzAzwkYYVHUpxiegyo09JnKSZtS9xv%2Btv64TQXrHtdlqysbbLa8L5Wm6Ce%2FrbrK2ddVJjJX6WMrAR0HIbht4iiEF%2FhfNlGXGpG05th0ZBSoaXaOg8%2Fhanavjh0la0%2FPWmvbpKbCisgC6WEMWQozmV7rVudqNpCk%2FvCH8opJGRJd5lvt4w5z6LNsUPr618vkcwZz7gcAsqbRmsi3OPdoastVyD673ptH7ZBW9Bb2P5cNI9hkE71nc0LqXQdo0224iJZ8Zlfc3duEikVdhd2KBdRoYx1NRHwbPzki093hS%2B2f%2BTusSv2PDTzzHjMvrT60gAYanMYSNTO%2FLTTFEAm0D0Kjm%2Be8CrGM2GOEwwkI%2BKygY6pgGNOTp%2F0tJUS9UCYpGyPmgPE%2FdeWcAQfCqLtwavLWrhOtMIJwRxeHghJTckea40nkIR8hINRzmayRB2tFkuaRVAxMIipF18KECMhm2NPVs9yGxcEzP%2B62JZj1qWlD9QP8hK5IH67gVUGZraIhq%2Ffs0HMTZM9EJ%2BTxxxRtEG96TkSA9DVcfbEoH5C5WCmlY43pHF6qC9fwwmRajm18qNOv3Nvw5Hp%2B3f&X-Amz-Signature=d286320bcebbeecf6c6a076371622d92e861610f44516df80bcf23fd9fe0fd21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAHUATJU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICY9WItacM8bFXdflszf2iZ6DP6lc3AcSLV%2F8V71Z%2FPWAiAXl1d9MmyKFiHgZbEyIiGCJMS4zKGdY9Hx2Za0volM1Sr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMiZUpZVlUIpkh9vc1KtwDlBh3I6DF1CXKLaKptmMDp1am%2B6QLJJimiB42vI73PLX7Kl99efKmLYOhYNT5qtx9aX4oc1T2Xj65ezcCVOU9LM74GviR5f8xw%2FshzpngzzCljb%2FIdKousrHNJbPCC2VXWa%2Bs%2FM9l56uV1hB2h1Z%2FjXthRRpghZVV5vHVIj6skAFxZDjdFmwcxteLSDCetp%2FpmrdrJWNbdFme9EhmPb2cIcoj8F%2Bbd%2BDLfqbE47UKTdhFM6Gwf%2BIZv4LXCnctNOdhSDG1zdfbhpgwoXQRahumCW5RzAzwkYYVHUpxiegyo09JnKSZtS9xv%2Btv64TQXrHtdlqysbbLa8L5Wm6Ce%2FrbrK2ddVJjJX6WMrAR0HIbht4iiEF%2FhfNlGXGpG05th0ZBSoaXaOg8%2Fhanavjh0la0%2FPWmvbpKbCisgC6WEMWQozmV7rVudqNpCk%2FvCH8opJGRJd5lvt4w5z6LNsUPr618vkcwZz7gcAsqbRmsi3OPdoastVyD673ptH7ZBW9Bb2P5cNI9hkE71nc0LqXQdo0224iJZ8Zlfc3duEikVdhd2KBdRoYx1NRHwbPzki093hS%2B2f%2BTusSv2PDTzzHjMvrT60gAYanMYSNTO%2FLTTFEAm0D0Kjm%2Be8CrGM2GOEwwkI%2BKygY6pgGNOTp%2F0tJUS9UCYpGyPmgPE%2FdeWcAQfCqLtwavLWrhOtMIJwRxeHghJTckea40nkIR8hINRzmayRB2tFkuaRVAxMIipF18KECMhm2NPVs9yGxcEzP%2B62JZj1qWlD9QP8hK5IH67gVUGZraIhq%2Ffs0HMTZM9EJ%2BTxxxRtEG96TkSA9DVcfbEoH5C5WCmlY43pHF6qC9fwwmRajm18qNOv3Nvw5Hp%2B3f&X-Amz-Signature=44e3a034cc31f633c639ed94cf368ce350f8c725a6412a6bfc2544dfd8eca5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
