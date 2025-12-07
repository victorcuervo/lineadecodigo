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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CZGKR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3CYzNicnOUKFFFeLr4cCBnxI76p1T%2B33Ymiq0gq67wIhAIRppLE077%2Fi%2B5hll0SOumU8bkO9UwMBPj1lPMcHfWQsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj6R7wefjC4BpMRu8q3AOpee2XdzPqzW0vViCyTpeAfrPibdb0f%2Bt74KdZ5Swx3wFYc8CN6jt3cfeHHp8nLa%2B2GVwCxzjEPJfokqngE3F6Q4GkM1JcDNVrtyJCiVYW9Emu5zMB6FEyphV5E144ebq%2B9fSpa6mZB4xYSwAa1mmfqU7ligtyeHvOkF%2Bz9K9HPe06A3gEWFxoKr3Lck%2BgbrNZgjbqTHek56Hvqo3GUrgA1mk78qAv4vd84Wnq5q9c7l3sCDgWpCSYnG3Z1A5As0bdnwbusBCz6og%2BNcNYYXmk3X23DHHo2E3lQytmQXG5MStv%2B%2FODaWyOqXaoNaOjHbyJ%2F6yVGeHcg%2FIM3h0R0cb67EEmaxPOTtDWe1K5fOs1HdZZPMLlLNjALh3Fx1UFDT3DL%2B7ZBmJk8yW%2BoJLHugRoggnTNC1jT1voBGBQ3C%2FPWwGRExN%2BJpb1q9sBf2O3w%2Fey75%2Fcx4FBxBe9jJ0BJy47l5pB4mZlUtgrtqzP9uqjkNUuzF0RAIgr4rEdCe3C8J7bdZ2S%2FzWZnnDuAnGFxEpvToemOqByzxytA565cjxcj%2BATQScZYEFCv4F2SSfdsGi%2BKTOWeUgxx7qkmfafRK70cDMKzlRi2sgvNeZTMGCM%2F59XDGBQ8C%2Bk6NgJ%2BTC%2B%2FdLJBjqkAbZ%2BjT7G0itZH8F61jyscHAMyD9eyJ9ygi9FR00tYKW2bvv7d%2FHxiib00ZszWsnaYexjcj6asZhop2A4nk5Zadeba%2BLW0WCXds0zXlQOQzTO7jZLUl7PvvYhB8C2jlfxPu8ViiyJQ%2BVumyqd8VxRSg8oMz6%2FPBatibLe4k8xbVPiSVMoANveGDnBDD95Q%2BnIlC5wT%2Fxe8pQwLgWEy6r5yziMaoJ%2F&X-Amz-Signature=f7d806d1bb5007517b79a1664bfab741128c0c58df931bceea5ecf13c6c68515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CZGKR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3CYzNicnOUKFFFeLr4cCBnxI76p1T%2B33Ymiq0gq67wIhAIRppLE077%2Fi%2B5hll0SOumU8bkO9UwMBPj1lPMcHfWQsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj6R7wefjC4BpMRu8q3AOpee2XdzPqzW0vViCyTpeAfrPibdb0f%2Bt74KdZ5Swx3wFYc8CN6jt3cfeHHp8nLa%2B2GVwCxzjEPJfokqngE3F6Q4GkM1JcDNVrtyJCiVYW9Emu5zMB6FEyphV5E144ebq%2B9fSpa6mZB4xYSwAa1mmfqU7ligtyeHvOkF%2Bz9K9HPe06A3gEWFxoKr3Lck%2BgbrNZgjbqTHek56Hvqo3GUrgA1mk78qAv4vd84Wnq5q9c7l3sCDgWpCSYnG3Z1A5As0bdnwbusBCz6og%2BNcNYYXmk3X23DHHo2E3lQytmQXG5MStv%2B%2FODaWyOqXaoNaOjHbyJ%2F6yVGeHcg%2FIM3h0R0cb67EEmaxPOTtDWe1K5fOs1HdZZPMLlLNjALh3Fx1UFDT3DL%2B7ZBmJk8yW%2BoJLHugRoggnTNC1jT1voBGBQ3C%2FPWwGRExN%2BJpb1q9sBf2O3w%2Fey75%2Fcx4FBxBe9jJ0BJy47l5pB4mZlUtgrtqzP9uqjkNUuzF0RAIgr4rEdCe3C8J7bdZ2S%2FzWZnnDuAnGFxEpvToemOqByzxytA565cjxcj%2BATQScZYEFCv4F2SSfdsGi%2BKTOWeUgxx7qkmfafRK70cDMKzlRi2sgvNeZTMGCM%2F59XDGBQ8C%2Bk6NgJ%2BTC%2B%2FdLJBjqkAbZ%2BjT7G0itZH8F61jyscHAMyD9eyJ9ygi9FR00tYKW2bvv7d%2FHxiib00ZszWsnaYexjcj6asZhop2A4nk5Zadeba%2BLW0WCXds0zXlQOQzTO7jZLUl7PvvYhB8C2jlfxPu8ViiyJQ%2BVumyqd8VxRSg8oMz6%2FPBatibLe4k8xbVPiSVMoANveGDnBDD95Q%2BnIlC5wT%2Fxe8pQwLgWEy6r5yziMaoJ%2F&X-Amz-Signature=cb93310308c72f54fe26c039d07f93edb5e7e51b52cccfb2fa1db0ed00563b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
