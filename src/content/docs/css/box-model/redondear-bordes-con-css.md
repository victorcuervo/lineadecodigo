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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOR55V2J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDplhG4y3VJbllljrTuo%2Bfq3kGB2KJTPqaQDF4c8LdgpQIgUPq5cCaVp5tm71Ftdiv7P9FKRTx0CGA5I1T6ymFJC3sqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6veoHxcyErMB0JSCrcA7I8bQ6zV3cVoUtJA6tttmWxURnlOnElB%2FP0eFZpuNwyXDhtmD%2BtuiwZMzbuJMF3A5dwBaY7EzpsRfmJXbKRqgEJ7ffMsnJUnMYrRIUWxerMDNlC6JuJj3iWWEGlrCVN1Ubdt6UCHaYszaxPRLQC1%2B%2BjGt9olm41PgDQrbTnuibZ1u8xvq7gI5xfYqChsyQrCw7DfqYmA%2BcNfYE2YIU7YxFhpA45I2UcFaOHkWilTcRNQs1bJdvk4g0R74uYL4m91G1zXbqEftozRFzjHnKoSscM0Cof7TBZXuuCmQ98Mkx2QBHRetIS00J95gUBwaXgfVlRRHij4JkntJts8cIFr%2BpRTK0ZhBX7EXOrUmZUbzHmolwJl56cCCt8kI3O0UoLZrVlRJZbmwWz7YckymrdYB%2F8n8mhJiYtr9faeLObccWSCOcdr0ULxIO7Q8e3xSWX62pp9cLzg2JQjU1ONHIkvfD7Y3MDs1098i4OUFOrl2sCpFwmrHFfre%2FQJK0%2B%2FQy%2BaC522LJecDPiUC1Rx6Iki3g%2BnMWnxHc07VGUhGVRgqm%2BfNfhuId3%2B3pjLImm02gZFeu3azyK4QCuguwuK1b8apGktEw80MZDkyx8qqbOoD5jfLTutH%2B3tF9p8J%2B8MM6tjMoGOqUBvqCV53l5zY3q4y6OcUrL%2BGpQiUC%2FoHf3q0QuMMWNIVNmrucTmQ1NixSF%2BPtGEEGzU634h7Nu%2Fx58hoBl67VlFexMs41lYTSc3jh8urNoaevVJXIULaN%2By9iKUaxpGtK%2BIpktCrlR58gu%2FRCVb%2FR17y1pknLct%2BXuG4la81kybnb77ALnqIdI4NXUiN9W0Mjo7yKPLx8Er2oKjyId1aGrvKfjQC3p&X-Amz-Signature=2ea9c80538d3ab5ea68557b2fd839020ceab70f77a540385dbb62d9555aea592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOR55V2J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDplhG4y3VJbllljrTuo%2Bfq3kGB2KJTPqaQDF4c8LdgpQIgUPq5cCaVp5tm71Ftdiv7P9FKRTx0CGA5I1T6ymFJC3sqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6veoHxcyErMB0JSCrcA7I8bQ6zV3cVoUtJA6tttmWxURnlOnElB%2FP0eFZpuNwyXDhtmD%2BtuiwZMzbuJMF3A5dwBaY7EzpsRfmJXbKRqgEJ7ffMsnJUnMYrRIUWxerMDNlC6JuJj3iWWEGlrCVN1Ubdt6UCHaYszaxPRLQC1%2B%2BjGt9olm41PgDQrbTnuibZ1u8xvq7gI5xfYqChsyQrCw7DfqYmA%2BcNfYE2YIU7YxFhpA45I2UcFaOHkWilTcRNQs1bJdvk4g0R74uYL4m91G1zXbqEftozRFzjHnKoSscM0Cof7TBZXuuCmQ98Mkx2QBHRetIS00J95gUBwaXgfVlRRHij4JkntJts8cIFr%2BpRTK0ZhBX7EXOrUmZUbzHmolwJl56cCCt8kI3O0UoLZrVlRJZbmwWz7YckymrdYB%2F8n8mhJiYtr9faeLObccWSCOcdr0ULxIO7Q8e3xSWX62pp9cLzg2JQjU1ONHIkvfD7Y3MDs1098i4OUFOrl2sCpFwmrHFfre%2FQJK0%2B%2FQy%2BaC522LJecDPiUC1Rx6Iki3g%2BnMWnxHc07VGUhGVRgqm%2BfNfhuId3%2B3pjLImm02gZFeu3azyK4QCuguwuK1b8apGktEw80MZDkyx8qqbOoD5jfLTutH%2B3tF9p8J%2B8MM6tjMoGOqUBvqCV53l5zY3q4y6OcUrL%2BGpQiUC%2FoHf3q0QuMMWNIVNmrucTmQ1NixSF%2BPtGEEGzU634h7Nu%2Fx58hoBl67VlFexMs41lYTSc3jh8urNoaevVJXIULaN%2By9iKUaxpGtK%2BIpktCrlR58gu%2FRCVb%2FR17y1pknLct%2BXuG4la81kybnb77ALnqIdI4NXUiN9W0Mjo7yKPLx8Er2oKjyId1aGrvKfjQC3p&X-Amz-Signature=034b705727b376aebbccfabc028e0c82a60ab84cec2e3cfe85b1393da3a7de6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
