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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZLPNAV3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMR7LAEZMm%2FYedWmeW%2BQr6RrhnDOB21LFcdrhdgwkXrgIhAO3eNhshyqcuZKCv2znlmiNTADueiPSH0q%2Fs2i2Yvch4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQPyiEeCYYL%2FuLq%2Bwq3AMVrxzQCOeDy6swtryXlrrvddguuitfmDoTtY1fo646PnlIUuMG4JYqilN7DSEc5LCpsgebKZ3hMicSuNs%2BkhJD75B9c9om6w9uC27Y18T0ve%2FmXLia7K5mdGuabHj2tuF5sAhriy8VMcn7E7TBJg5b%2BDthc9gl68MODf4Nx3wEDZHiMLTz5%2FIpvHS0itOs8sms%2FitXt%2BO8HyN8Wt4NINh%2FfTNCOlolwHWkJ%2B%2BgkWsok0CloSz8meEa%2BgMmvpUzbhUUHecEOLC%2Fafc9g3PjPwFOcXa9wZW8uEsCTr4QbTIZBJaxviDBLj1lzIFmEuQWBszE7ZEmQaTkJ1NzTC08YMVRSqIf0n3HzfRR00bfasuBW5aYRgZfdgFsgdfqYxdxHeyfU2PyoEhH7IKVG1qCiKprTbBfDFbW6T8pU9gcpSlNn4fb8KtXlGh%2BJwTHmwykgQrVeAKIxp6xZDhZAQT26L1iz4q6vzx5d52qjOOPXIgmOYaLWyEUdjNsbnb3%2FvVvseU784gM%2BNf%2BBqfTzr1MKqKXBsmgXYiXRbdqNaJnbEnqha2rL%2BufU1RuIvETADQPnJgpwbXzWnbV5mrmLLgxZMrMI23ESWjMdVAWxxYmW%2BoBbC2ToccsWgvgCA7zwjDo%2FdLJBjqkAW%2BzYsdfs7802iEdAgXkE7Xhuk%2BXDc7OmYY%2F5VYhX3uM%2Bztk7f%2FE%2FBOdxDHDcySFrl8mv9P1IYp8otpOpeVDD%2FWRrOy1%2FuqEng3uR1FG%2BzBPdfK4tZ3luEjL2DakoeW9b6ZbHE7oCokWO40qYEqrNOxAP3kl0YapIgg3zVMcY2V5%2BnQlbBVVHva7up0HuVH%2FGlzcC0j3okiAaeaK1O7NwMFk9d3B&X-Amz-Signature=740f50e8faee3725ab8278b628e9741352c5f0d31498f68aac8444376a80840e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZLPNAV3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMR7LAEZMm%2FYedWmeW%2BQr6RrhnDOB21LFcdrhdgwkXrgIhAO3eNhshyqcuZKCv2znlmiNTADueiPSH0q%2Fs2i2Yvch4KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQPyiEeCYYL%2FuLq%2Bwq3AMVrxzQCOeDy6swtryXlrrvddguuitfmDoTtY1fo646PnlIUuMG4JYqilN7DSEc5LCpsgebKZ3hMicSuNs%2BkhJD75B9c9om6w9uC27Y18T0ve%2FmXLia7K5mdGuabHj2tuF5sAhriy8VMcn7E7TBJg5b%2BDthc9gl68MODf4Nx3wEDZHiMLTz5%2FIpvHS0itOs8sms%2FitXt%2BO8HyN8Wt4NINh%2FfTNCOlolwHWkJ%2B%2BgkWsok0CloSz8meEa%2BgMmvpUzbhUUHecEOLC%2Fafc9g3PjPwFOcXa9wZW8uEsCTr4QbTIZBJaxviDBLj1lzIFmEuQWBszE7ZEmQaTkJ1NzTC08YMVRSqIf0n3HzfRR00bfasuBW5aYRgZfdgFsgdfqYxdxHeyfU2PyoEhH7IKVG1qCiKprTbBfDFbW6T8pU9gcpSlNn4fb8KtXlGh%2BJwTHmwykgQrVeAKIxp6xZDhZAQT26L1iz4q6vzx5d52qjOOPXIgmOYaLWyEUdjNsbnb3%2FvVvseU784gM%2BNf%2BBqfTzr1MKqKXBsmgXYiXRbdqNaJnbEnqha2rL%2BufU1RuIvETADQPnJgpwbXzWnbV5mrmLLgxZMrMI23ESWjMdVAWxxYmW%2BoBbC2ToccsWgvgCA7zwjDo%2FdLJBjqkAW%2BzYsdfs7802iEdAgXkE7Xhuk%2BXDc7OmYY%2F5VYhX3uM%2Bztk7f%2FE%2FBOdxDHDcySFrl8mv9P1IYp8otpOpeVDD%2FWRrOy1%2FuqEng3uR1FG%2BzBPdfK4tZ3luEjL2DakoeW9b6ZbHE7oCokWO40qYEqrNOxAP3kl0YapIgg3zVMcY2V5%2BnQlbBVVHva7up0HuVH%2FGlzcC0j3okiAaeaK1O7NwMFk9d3B&X-Amz-Signature=08f89a53b7f9ad2af5aee7d5d2553b78af6ed66ca3ad11a3f3317cc91ad4650a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
