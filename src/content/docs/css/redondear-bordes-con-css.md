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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAJNJHZK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDrirvWTES%2FMDU3uqv5WEkx%2BYHifVGCkuw4lmpT5VGkfAiBXklF9fkH1xdkZbCsOnOHOuBQ4uu2Gr0EYIEtXoBvC%2Fir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMG%2FkzK7HkQf7zYHenKtwDieOlp%2Fd1Z567pfSdEg9nySHqAbAqaKrTtFgEnARZdC9JIrAv1UMdqoeHIen0d6kpA1s6z9gmCaY1NrYn2rs19jtEFJ7Ozzb4ED911HVs1WG%2B3C9sPO3yg5EcQzws5ihojYXthhKOLytcOqB8PlEuda2tx45O8dn%2FgcqKwSo7UAYkUutdmr8eT%2FeEx2l0JqUxLy%2FKhXXhhT9AmK95LUJTgS3nv36b7uynAsqD70CmiGxK49dRN9Av%2BxE3uRIEjSaYH6HTZfdKWujrmUnkGohGSH1%2BrUUDJYIBHogIh%2BwOniZCxD39oS384xqjytDc2kNAODgS4RSeKGCE1ZtMpXCGsVDRatf7Vt%2FfE3MSkNNMNbDtBt2v9rKfm6w9mopRH5mBtLkbkPAivqoy4zMCPJnpM3y8jGhE%2FRJ5mDTeiMcJWoa7fPgq1HUmdQ7wsYv3cYoyJzlf8et9Bv2YHCnrCL5ArywYEGa8DN051C7ThcncIFpXmXEgkUhPXXNIHZwRZSOdB82vGzzAUwJmBORTAvZupr8MCycoCV5MOXwBzfJUMjXBMN9fXx94LW6GFyBltXV9RexLKTr%2FOPeeG%2BR4LylN2UkV7EDry2TlhprNtKzSy75g6qfJTQp22uOOsoIw6JHCyQY6pgFNAFCkjttgQrmiWDqttNlDTVvmmzwRyC6UKDd6DB5iGn35p5hpheVHL3iZ54OQCNXfbS8nAJJ7y4HARdpWAoh5OwJIUVaPqPsLustq8dkKrnxAuEq3s52irwd1NcAVdoSB72fJa5qzXs4YiBpmZ2dYdJHQbhk50ydM%2FBhv9MLIZbgUa%2FjCjZW8gWMsIzWYuyB9042GOHhkAIwrkPUvaWsSPhhsPI4K&X-Amz-Signature=5a2fc745d0c82515655cef6604d654ca6401d41245bb083900303c6ac9fd9e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAJNJHZK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDrirvWTES%2FMDU3uqv5WEkx%2BYHifVGCkuw4lmpT5VGkfAiBXklF9fkH1xdkZbCsOnOHOuBQ4uu2Gr0EYIEtXoBvC%2Fir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMG%2FkzK7HkQf7zYHenKtwDieOlp%2Fd1Z567pfSdEg9nySHqAbAqaKrTtFgEnARZdC9JIrAv1UMdqoeHIen0d6kpA1s6z9gmCaY1NrYn2rs19jtEFJ7Ozzb4ED911HVs1WG%2B3C9sPO3yg5EcQzws5ihojYXthhKOLytcOqB8PlEuda2tx45O8dn%2FgcqKwSo7UAYkUutdmr8eT%2FeEx2l0JqUxLy%2FKhXXhhT9AmK95LUJTgS3nv36b7uynAsqD70CmiGxK49dRN9Av%2BxE3uRIEjSaYH6HTZfdKWujrmUnkGohGSH1%2BrUUDJYIBHogIh%2BwOniZCxD39oS384xqjytDc2kNAODgS4RSeKGCE1ZtMpXCGsVDRatf7Vt%2FfE3MSkNNMNbDtBt2v9rKfm6w9mopRH5mBtLkbkPAivqoy4zMCPJnpM3y8jGhE%2FRJ5mDTeiMcJWoa7fPgq1HUmdQ7wsYv3cYoyJzlf8et9Bv2YHCnrCL5ArywYEGa8DN051C7ThcncIFpXmXEgkUhPXXNIHZwRZSOdB82vGzzAUwJmBORTAvZupr8MCycoCV5MOXwBzfJUMjXBMN9fXx94LW6GFyBltXV9RexLKTr%2FOPeeG%2BR4LylN2UkV7EDry2TlhprNtKzSy75g6qfJTQp22uOOsoIw6JHCyQY6pgFNAFCkjttgQrmiWDqttNlDTVvmmzwRyC6UKDd6DB5iGn35p5hpheVHL3iZ54OQCNXfbS8nAJJ7y4HARdpWAoh5OwJIUVaPqPsLustq8dkKrnxAuEq3s52irwd1NcAVdoSB72fJa5qzXs4YiBpmZ2dYdJHQbhk50ydM%2FBhv9MLIZbgUa%2FjCjZW8gWMsIzWYuyB9042GOHhkAIwrkPUvaWsSPhhsPI4K&X-Amz-Signature=0129eb0fcc5d842cc16469bcc444ece58ed46f807a7c7bbee522f83695cb837e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
