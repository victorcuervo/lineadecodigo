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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X3YJKBN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGo5IAypDjt0DVwhCUPok4nz4kxONMk349adyJelXubwIhANEQaiSSEJYwLMxPlzeTaFJLTcP1SaKJKbUQhZpGvGPSKv8DCFsQABoMNjM3NDIzMTgzODA1IgzMXOnz7lz4hBdUvGcq3APkhFKfI%2FLVeuxewP0Eva6LpOKgVO0V%2FlhzZncmU9iCNOUjN964K74dqTMF8788%2FSSXMRrGjztDdfat9cmNLQqcFSFll%2B2FKyEihM0x8j4b5RFGFMSu5KuA9T%2FcZ09Ds2VGcGVshHSzTfCvZnX7f7FnONm%2BA9u2vNNsGuayyT2%2BTdIPHRD6ATJu2EoB0I3Z0lgQtBdUE9o87nQjXqY7A9eIGMDv7UW8QrfNInIBbUSJK9eb2Y1rNBsiMSdAeb7xS7jT5aIYOurYtMNUtI9VLdzrCvzBwQiKGhkj0nIo%2Fm2c4%2F9ah%2FJ5FEttD8pCP4C9ZcoF6HdXBKGeTusktm1WjMnbTCPzpaakSalNCnA2HlqGHeiVWZ0z6jCcAbaFlesrJjeJn%2FiaWNm79lJqwRSicNGWjshmfW8%2Bmyp4%2BJwqZqNukxV6CTA5aZJvmdvLWhNV9Ju05cHDnNsazrVm8x3fH%2B3tUrF9Uq0vo4zTQaZlrlwJqoBWSD%2F04EqrscB5p3ho1Lw%2FGoFd2jBo%2Fss%2FY%2FnpZfCxWDzn%2BVtMGML1dSCHoGuucqcbbKaJSm3kq97SNpouRQe1zs6H9ny7%2BMG6fblg%2B3BC9Bh5k5D80qKOkB9z9X1oUVTsss8KyDeL1FQbBDDU1srJBjqkAXRJuV7ie6nRlwbvRZCFiPMqsEhhOy1mUHj0OrMfrCUPEJcTsamHxvMrR8b6ufDfAeQ9aqYVPELHsJ5yok0cxB5FywslBsYokLY8vFjV6f2sLrYny8treiffEa8dCfBdi92rqGM7n3TFu4yqMRe7hX4EHBgKNK%2F9K8z9Fhjm1x0Zn7WQRszrYygactH3g88cJ%2B1gPF0YyFmo7s3LASyCUFByz0EL&X-Amz-Signature=89f8aea4759ab251ba640b5497642a266275db8771461dd44ddede1f4a815c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X3YJKBN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGo5IAypDjt0DVwhCUPok4nz4kxONMk349adyJelXubwIhANEQaiSSEJYwLMxPlzeTaFJLTcP1SaKJKbUQhZpGvGPSKv8DCFsQABoMNjM3NDIzMTgzODA1IgzMXOnz7lz4hBdUvGcq3APkhFKfI%2FLVeuxewP0Eva6LpOKgVO0V%2FlhzZncmU9iCNOUjN964K74dqTMF8788%2FSSXMRrGjztDdfat9cmNLQqcFSFll%2B2FKyEihM0x8j4b5RFGFMSu5KuA9T%2FcZ09Ds2VGcGVshHSzTfCvZnX7f7FnONm%2BA9u2vNNsGuayyT2%2BTdIPHRD6ATJu2EoB0I3Z0lgQtBdUE9o87nQjXqY7A9eIGMDv7UW8QrfNInIBbUSJK9eb2Y1rNBsiMSdAeb7xS7jT5aIYOurYtMNUtI9VLdzrCvzBwQiKGhkj0nIo%2Fm2c4%2F9ah%2FJ5FEttD8pCP4C9ZcoF6HdXBKGeTusktm1WjMnbTCPzpaakSalNCnA2HlqGHeiVWZ0z6jCcAbaFlesrJjeJn%2FiaWNm79lJqwRSicNGWjshmfW8%2Bmyp4%2BJwqZqNukxV6CTA5aZJvmdvLWhNV9Ju05cHDnNsazrVm8x3fH%2B3tUrF9Uq0vo4zTQaZlrlwJqoBWSD%2F04EqrscB5p3ho1Lw%2FGoFd2jBo%2Fss%2FY%2FnpZfCxWDzn%2BVtMGML1dSCHoGuucqcbbKaJSm3kq97SNpouRQe1zs6H9ny7%2BMG6fblg%2B3BC9Bh5k5D80qKOkB9z9X1oUVTsss8KyDeL1FQbBDDU1srJBjqkAXRJuV7ie6nRlwbvRZCFiPMqsEhhOy1mUHj0OrMfrCUPEJcTsamHxvMrR8b6ufDfAeQ9aqYVPELHsJ5yok0cxB5FywslBsYokLY8vFjV6f2sLrYny8treiffEa8dCfBdi92rqGM7n3TFu4yqMRe7hX4EHBgKNK%2F9K8z9Fhjm1x0Zn7WQRszrYygactH3g88cJ%2B1gPF0YyFmo7s3LASyCUFByz0EL&X-Amz-Signature=ea4a479927eb4ee5e883564bdefa480442a2a3c296e82c44b420f926b9155fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
