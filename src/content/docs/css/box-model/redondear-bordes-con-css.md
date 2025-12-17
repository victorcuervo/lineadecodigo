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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WS4SHR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm2btz50BxAAhMpSBx5OdZmIEYqV8NQShBAzNiKyTyVAiEA8sqCC5j88DULXk0sUWWTItSBRT2LmsybjA%2B2iCsr9MYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPD0ptfU7TW1ftc9WircA64NFnKiCfbbxh98uRUDOOCIx4T8kBuOMH319dp%2Fi8lWjoLH3UIhbjK%2Bim9rNYImsEPSj5vGhYZlmnw1s1LZd0z8%2BKE%2BbulnaP4O2uu59eu9sJTf3lW7XiEi3Eh907sKoqd9kPVuhO9t5Op%2B3Uer7i58jw8FfAMQE5cTRZ1uga2rYmov8sSn9ivRBdkz1M1IlZHk6Ah0twVx5rU0S6kkZ5%2F0jK%2FAEOAKmmDwLEGKqiEYZ9lHDC260RsDWvXqSXYWLmxFILrGjzmAvB0IxQ1L5284SMz7a7BROIHylg%2F93NRNjcn1A6mHsrp1wAyN8S5cWLmjN4jwTngKJDGBBJuRBGdNAATNbZ2B9oRJDNUTzvE4Fl2aBu4X1dVezN%2B0XR7b1eOY3ZBTgzTryY9w2642G0afXR1GNL%2Bbgz2Z46MppDmWuVmfSM%2B9sCY1CQFonq87C%2FpcsTdavH%2BJWJHV%2FcRXurcy4R8he56QrngwhjjbCTwFdxOFnMFWKzQ8%2B6PvGRabMennMVRvfw1Up6OnKzIjb4%2BEVz081bpo265C94g4n6dgTCJ6pbbxYKHoMix6LQvL1pz5arbTZfsyeI5vHFjwv6hruCA%2BCgptOPun3RtumepmnC6601NuUOAzZNExMIPiisoGOqUBSAEjiezgFzW0r5Jb6NKjrZC1QcMQb3aaIozJiAfe%2FYpEKHQpMV0HvIqgShlbN6omLJwwM2uGyUwWBL%2BTLrp%2FuXyShS1dntXJEFIdmkRhcO0FIY15cMWrZbqkpzp1WIyeDevcM2FcT1mMg2qFEyZi8dSE%2FpdFNIgOCP1ibLeSrSrC9xoPe2NLCNazietJg8eNI5XpYk71OUGIOyThjlkVVsEkkDHp&X-Amz-Signature=85a05c8f80302cdc1ec2e860ef5f60b9637b7f8445512ad7320e5c694f96677e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WS4SHR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm2btz50BxAAhMpSBx5OdZmIEYqV8NQShBAzNiKyTyVAiEA8sqCC5j88DULXk0sUWWTItSBRT2LmsybjA%2B2iCsr9MYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPD0ptfU7TW1ftc9WircA64NFnKiCfbbxh98uRUDOOCIx4T8kBuOMH319dp%2Fi8lWjoLH3UIhbjK%2Bim9rNYImsEPSj5vGhYZlmnw1s1LZd0z8%2BKE%2BbulnaP4O2uu59eu9sJTf3lW7XiEi3Eh907sKoqd9kPVuhO9t5Op%2B3Uer7i58jw8FfAMQE5cTRZ1uga2rYmov8sSn9ivRBdkz1M1IlZHk6Ah0twVx5rU0S6kkZ5%2F0jK%2FAEOAKmmDwLEGKqiEYZ9lHDC260RsDWvXqSXYWLmxFILrGjzmAvB0IxQ1L5284SMz7a7BROIHylg%2F93NRNjcn1A6mHsrp1wAyN8S5cWLmjN4jwTngKJDGBBJuRBGdNAATNbZ2B9oRJDNUTzvE4Fl2aBu4X1dVezN%2B0XR7b1eOY3ZBTgzTryY9w2642G0afXR1GNL%2Bbgz2Z46MppDmWuVmfSM%2B9sCY1CQFonq87C%2FpcsTdavH%2BJWJHV%2FcRXurcy4R8he56QrngwhjjbCTwFdxOFnMFWKzQ8%2B6PvGRabMennMVRvfw1Up6OnKzIjb4%2BEVz081bpo265C94g4n6dgTCJ6pbbxYKHoMix6LQvL1pz5arbTZfsyeI5vHFjwv6hruCA%2BCgptOPun3RtumepmnC6601NuUOAzZNExMIPiisoGOqUBSAEjiezgFzW0r5Jb6NKjrZC1QcMQb3aaIozJiAfe%2FYpEKHQpMV0HvIqgShlbN6omLJwwM2uGyUwWBL%2BTLrp%2FuXyShS1dntXJEFIdmkRhcO0FIY15cMWrZbqkpzp1WIyeDevcM2FcT1mMg2qFEyZi8dSE%2FpdFNIgOCP1ibLeSrSrC9xoPe2NLCNazietJg8eNI5XpYk71OUGIOyThjlkVVsEkkDHp&X-Amz-Signature=a2c7428a3044aa9a0d5b1462eae9ed446f01111dbefd6e675ec9f6518273ea8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
