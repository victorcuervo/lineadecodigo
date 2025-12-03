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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DGVJ3A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDc2BZo5WiPglx95HBxOOvCNyS4bAgevBeBACizAU%2FRcwIgRwiQegw92Wxu%2BEKj0dClG5RB1VUIbzU%2FClakbJ17bv0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNSEgBx%2BZHKdfT2KJyrcAydj5aMjN2FM8h%2FEAzToTQk9mCPlEOjNdSoqoli2rnFjxu5YXarhkkexI%2FBGNtM2cXBzX3koTaU3zB%2F70%2FtxZDHwkZztbCGmONrtWSdAqEntL4LwAsWV5l1XvDgppadoU7JGuBwoVIygymEo4w%2FtGyTV%2Fsm1nTZXcoxbwgOmAmupFDg5T%2F%2B5oqwv0M52lX2YZ6AeURXnz5kGRbkeJI3jsD%2FUjS9HxVfsQvdY6KWfAuCwTQzSuJuxNf%2Bf5U9rCQucbd2dBe4NkjF5%2B2jFPOVm4oNHB2qwZclRwAMux9ncvP4iSvM8HloOVHnPLXFjCpHGPj1kZ3kqGBCbEOipzzyBQ%2FjEy4sKqcXxdvwDXjkJo3BeUMOjaUNnfSO3IqiDJQa8oh6W3DCcaIbFUbx5eQNsvxONu%2FCSdX32Y58UVrm%2FmapcD79pv0rg%2BgtUyVLQI6Bjf7oKQNsYY1IdbCav7pTXuQYdjsuZgeAYDvfdNuA7RuO3OgtX3uwPB4At%2FyfcwxVIUg7vBpK1ZWI1sVi%2Bs6u%2Bkt%2FJdOvVHS%2BcPCHiNQ8n%2FxMI2ueXV%2FKlRVeuqOe7I8YjzEK21Oqn3HPjBie1G56v%2FgAKHV7lUHTCUvDRK4tvfrFf%2FuVSKq%2FkAAllaCrNMLa9wskGOqUB3Px9Q8b31iPre3c9Df9hUNrU9Cuzv%2FL6dfYCAyk31ANFVYm%2FCFzPDJm%2Fp4CMZqNyHpiTcuciSt85%2BtNi5WGEyTxOrEm%2F6OpKYouCFl%2BRTdu3A%2BTDVcl%2FN1zMjhgRaOeoYC%2BwAkr163Kam3OsxItNxtYlQ7BujJRV70bRf7JJSrEH%2BLhW5yGH2oQxxv3os8rzpgSK0FJ6ucf3vhIHNHrP4earrerJ&X-Amz-Signature=ef0fc264ea45f5772b7403259262449879a876be6aecf04ef877e6e6e436f4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DGVJ3A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDc2BZo5WiPglx95HBxOOvCNyS4bAgevBeBACizAU%2FRcwIgRwiQegw92Wxu%2BEKj0dClG5RB1VUIbzU%2FClakbJ17bv0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNSEgBx%2BZHKdfT2KJyrcAydj5aMjN2FM8h%2FEAzToTQk9mCPlEOjNdSoqoli2rnFjxu5YXarhkkexI%2FBGNtM2cXBzX3koTaU3zB%2F70%2FtxZDHwkZztbCGmONrtWSdAqEntL4LwAsWV5l1XvDgppadoU7JGuBwoVIygymEo4w%2FtGyTV%2Fsm1nTZXcoxbwgOmAmupFDg5T%2F%2B5oqwv0M52lX2YZ6AeURXnz5kGRbkeJI3jsD%2FUjS9HxVfsQvdY6KWfAuCwTQzSuJuxNf%2Bf5U9rCQucbd2dBe4NkjF5%2B2jFPOVm4oNHB2qwZclRwAMux9ncvP4iSvM8HloOVHnPLXFjCpHGPj1kZ3kqGBCbEOipzzyBQ%2FjEy4sKqcXxdvwDXjkJo3BeUMOjaUNnfSO3IqiDJQa8oh6W3DCcaIbFUbx5eQNsvxONu%2FCSdX32Y58UVrm%2FmapcD79pv0rg%2BgtUyVLQI6Bjf7oKQNsYY1IdbCav7pTXuQYdjsuZgeAYDvfdNuA7RuO3OgtX3uwPB4At%2FyfcwxVIUg7vBpK1ZWI1sVi%2Bs6u%2Bkt%2FJdOvVHS%2BcPCHiNQ8n%2FxMI2ueXV%2FKlRVeuqOe7I8YjzEK21Oqn3HPjBie1G56v%2FgAKHV7lUHTCUvDRK4tvfrFf%2FuVSKq%2FkAAllaCrNMLa9wskGOqUB3Px9Q8b31iPre3c9Df9hUNrU9Cuzv%2FL6dfYCAyk31ANFVYm%2FCFzPDJm%2Fp4CMZqNyHpiTcuciSt85%2BtNi5WGEyTxOrEm%2F6OpKYouCFl%2BRTdu3A%2BTDVcl%2FN1zMjhgRaOeoYC%2BwAkr163Kam3OsxItNxtYlQ7BujJRV70bRf7JJSrEH%2BLhW5yGH2oQxxv3os8rzpgSK0FJ6ucf3vhIHNHrP4earrerJ&X-Amz-Signature=b1cb524f35a19c06052ffc686ebf3e59516bee02280a17b8752a2ff68413cf49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
