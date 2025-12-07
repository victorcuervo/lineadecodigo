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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPCGT4N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpluzYMKsOzjti0oaHsvgdVP6Slchn1aF5AqjNHRpBSAiEAuVvj4Dfmxv8KSJxQNZ282ZlGoD%2F5%2BKpVItIUMNhdDgQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf%2B8%2BAFUDw9bFO1oircA2b%2F5UuSTGSdcda7eKLaoJVF5bdQMgB7Yh%2B1jVhHxYQiCtZdENJMxohflgw0Vd6r3y5LW7CTit%2BHYNIyfkVHubktF6PDlG93S4y1qwZkk9TreRo4D8QojE8DHACBwLywDynRUBNUz5yc%2FjZkw4zlZ61hDPoFNR2%2BxTpdBrvW0myqGvQ0CWcfxEP%2Fl2lcyA8PBM%2BGIeH2muTT%2BFmqIkw7GqgMuUhMMInClvGefdzZ3BRKf2VOp%2Bs%2B7gnlPxDa7ykDetpZK0ER7GHwX284w3g%2Fm03a8n9L2OaC1y37%2BaefcBIwJ%2Bh1cu8Ok7sFPp8C5oM6RZwfm1zygeFo9WV5UZA3gRiOtW5lm3eLVAGmv2aboKZMwY3Ss9ZPmqGdUfGeOhTSFBKYtX3l%2BH2hrSrrTDca4cTFo5uHAJa4MCnVzJ13lI81Fews77K0ZSRWITggyjc5EDDIiIIDHFwoa%2Ba7H%2BT9%2FOmQzzK4BDlMplCte83ptqcQIvUQ1DHW7zFF80b%2BkfFAXUPpNfn2VRcd%2Fxq4L83c9BQvmwX3F%2B1sAzWIfRerIKk5GaFuks0zxgRH%2BO2N3B45weTPcsyKhemYtzN3pGA9jZj7a4BZFLc8s2TGu%2FrcRSuIS%2B8hv9kkxzINJlvuMIuf1MkGOqUBxQUwqqtBnhOH6yYxPDejC1vPEOwanfw%2F%2BDMqaoKDfse5YX8UAihv7s51N7sDMt6zAbGH%2FKyyrHPouqouOLaQbAjW6a6jIdL%2FtsmoO0OG%2Bsw3Yg6dQshwZTEVIIIpN3cttB4K4Y4NAEtwbD905KSzP%2FvNMDArWuV7RYvxyExmKDCZODSQtOmGR9fWYyF5RHQ94tHwLD8bFbN8eSEkSa5dmZzJ5yio&X-Amz-Signature=392699b1093754fc0dab4a7d067b603fe290091d14712bd3ee6ee2a688475767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPCGT4N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpluzYMKsOzjti0oaHsvgdVP6Slchn1aF5AqjNHRpBSAiEAuVvj4Dfmxv8KSJxQNZ282ZlGoD%2F5%2BKpVItIUMNhdDgQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf%2B8%2BAFUDw9bFO1oircA2b%2F5UuSTGSdcda7eKLaoJVF5bdQMgB7Yh%2B1jVhHxYQiCtZdENJMxohflgw0Vd6r3y5LW7CTit%2BHYNIyfkVHubktF6PDlG93S4y1qwZkk9TreRo4D8QojE8DHACBwLywDynRUBNUz5yc%2FjZkw4zlZ61hDPoFNR2%2BxTpdBrvW0myqGvQ0CWcfxEP%2Fl2lcyA8PBM%2BGIeH2muTT%2BFmqIkw7GqgMuUhMMInClvGefdzZ3BRKf2VOp%2Bs%2B7gnlPxDa7ykDetpZK0ER7GHwX284w3g%2Fm03a8n9L2OaC1y37%2BaefcBIwJ%2Bh1cu8Ok7sFPp8C5oM6RZwfm1zygeFo9WV5UZA3gRiOtW5lm3eLVAGmv2aboKZMwY3Ss9ZPmqGdUfGeOhTSFBKYtX3l%2BH2hrSrrTDca4cTFo5uHAJa4MCnVzJ13lI81Fews77K0ZSRWITggyjc5EDDIiIIDHFwoa%2Ba7H%2BT9%2FOmQzzK4BDlMplCte83ptqcQIvUQ1DHW7zFF80b%2BkfFAXUPpNfn2VRcd%2Fxq4L83c9BQvmwX3F%2B1sAzWIfRerIKk5GaFuks0zxgRH%2BO2N3B45weTPcsyKhemYtzN3pGA9jZj7a4BZFLc8s2TGu%2FrcRSuIS%2B8hv9kkxzINJlvuMIuf1MkGOqUBxQUwqqtBnhOH6yYxPDejC1vPEOwanfw%2F%2BDMqaoKDfse5YX8UAihv7s51N7sDMt6zAbGH%2FKyyrHPouqouOLaQbAjW6a6jIdL%2FtsmoO0OG%2Bsw3Yg6dQshwZTEVIIIpN3cttB4K4Y4NAEtwbD905KSzP%2FvNMDArWuV7RYvxyExmKDCZODSQtOmGR9fWYyF5RHQ94tHwLD8bFbN8eSEkSa5dmZzJ5yio&X-Amz-Signature=5bda0201a3d60b3c574f7c30e79a5842c94c73ad5c833c80729fed1103a8723e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
