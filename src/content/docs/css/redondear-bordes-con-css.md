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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3ZQYTZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvV3fa1aLUM5b5dpUBqBBGUwfiS7v%2B9wXEv2P4n1wr1AiEA%2BtyEHJrn5nzzuTJ6ofECn1Vqni%2F%2B1dA6UZp9rLw7bqwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHSNDE%2Banfodxf9u7SrcA39%2FnKST6%2Bc%2FSO3sZPW9%2BhP7%2Fu8PqqQi6x7AOGIgVEJroyYlTHT4dA%2Fq0keKhTbogsNQQoYU5XN2m1gMsX%2B82%2FMmtYQmWIUrQrGyWSg4egGZDdJbfRcYnDZ6FW3doGCtyZQPuBD7vg7znFlvC4kaRkIAqFZgX4ZgTN3Pe8hbvGkjCd96v1BzNdYrDs2IPM1SfpkwG8Xozb1v2WiQuV3hR1e6xfkUXMRkyfNc82P3vt1FASPaSTLnKFbopQth8NkKiycXJAEVRGQuxevcyNBCqNFAR6eC%2FOQnARSN9Q6gx5QV3INzjzbxuibgxXseVWeiCNQRvVa3U4zRgp%2B2%2BqqJMC954oUnleGgiq8%2FdHxnfqdkZma8TRbnHwzvZiRUBF4pouNiZruluEm0kVqrDcNrIIvqxvTQ4C%2Fx5oWn2KSqHj7STo5I6PD6VCHH7Q%2BefqoMHkJS%2FhK9AAhgw8oSTttjcFva%2FNrEU6okXwfw%2Flu%2BYayDGCzAJAa78WMYlyLzKn6Tt%2B2aBleU04P%2FycFV9H9wj%2FIEhjvSiVXuKh0%2BKKpEpnYDei8LFaeljjWDqjjutc5s9p0qk4rEiahiZ8DseHtoj7M%2Fv2x4dM4frdu0tcFPaOguHH3%2B69lONtGlOEtOMLTtzMkGOqUBUL8IFYbS5vTKh2uMOyQ6a234MMoS1m4wt96UEyZZeJL8HLzMewL%2BsbbviEm%2Fi%2BdKPWu2GtgHqVyiyr4Pugt%2FNJlXwsV8Xk2N4yMGiE5PGNVA0YXkTPs0kTgO9B%2FTOPb6UUKaI4wSB5y6F7Bz0mPAW0tjTdV36c0W7MF3XwljkFzCoaXaSJ7o5wNN75yJUjDRXN75oykSxIKn24u%2BGqUHxo4F2M1N&X-Amz-Signature=a619b56f1cd12a31e3c772ed122cae94a28ce1247e2d43fde52dfab6c2bf28ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3ZQYTZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvV3fa1aLUM5b5dpUBqBBGUwfiS7v%2B9wXEv2P4n1wr1AiEA%2BtyEHJrn5nzzuTJ6ofECn1Vqni%2F%2B1dA6UZp9rLw7bqwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHSNDE%2Banfodxf9u7SrcA39%2FnKST6%2Bc%2FSO3sZPW9%2BhP7%2Fu8PqqQi6x7AOGIgVEJroyYlTHT4dA%2Fq0keKhTbogsNQQoYU5XN2m1gMsX%2B82%2FMmtYQmWIUrQrGyWSg4egGZDdJbfRcYnDZ6FW3doGCtyZQPuBD7vg7znFlvC4kaRkIAqFZgX4ZgTN3Pe8hbvGkjCd96v1BzNdYrDs2IPM1SfpkwG8Xozb1v2WiQuV3hR1e6xfkUXMRkyfNc82P3vt1FASPaSTLnKFbopQth8NkKiycXJAEVRGQuxevcyNBCqNFAR6eC%2FOQnARSN9Q6gx5QV3INzjzbxuibgxXseVWeiCNQRvVa3U4zRgp%2B2%2BqqJMC954oUnleGgiq8%2FdHxnfqdkZma8TRbnHwzvZiRUBF4pouNiZruluEm0kVqrDcNrIIvqxvTQ4C%2Fx5oWn2KSqHj7STo5I6PD6VCHH7Q%2BefqoMHkJS%2FhK9AAhgw8oSTttjcFva%2FNrEU6okXwfw%2Flu%2BYayDGCzAJAa78WMYlyLzKn6Tt%2B2aBleU04P%2FycFV9H9wj%2FIEhjvSiVXuKh0%2BKKpEpnYDei8LFaeljjWDqjjutc5s9p0qk4rEiahiZ8DseHtoj7M%2Fv2x4dM4frdu0tcFPaOguHH3%2B69lONtGlOEtOMLTtzMkGOqUBUL8IFYbS5vTKh2uMOyQ6a234MMoS1m4wt96UEyZZeJL8HLzMewL%2BsbbviEm%2Fi%2BdKPWu2GtgHqVyiyr4Pugt%2FNJlXwsV8Xk2N4yMGiE5PGNVA0YXkTPs0kTgO9B%2FTOPb6UUKaI4wSB5y6F7Bz0mPAW0tjTdV36c0W7MF3XwljkFzCoaXaSJ7o5wNN75yJUjDRXN75oykSxIKn24u%2BGqUHxo4F2M1N&X-Amz-Signature=0428f7b101e72d25c6175a98d5709ccae003f098d773b44bd23e3c9a11788a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
