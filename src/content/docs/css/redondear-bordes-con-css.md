---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HHGYUZC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQClOmmw9c1qaaFXRNchGIImyKdwUBviMrJr0%2BeTbyyRKwIgTDtJUOQNbK52cz9mVWOJ6IkoN1DqCwGWp%2FKDe%2Ft2maAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJCKrzDIo30azrB43CrcA6CaZeByR3QzFapaGeCjRgOBDpyL5SYolPD93cY7CFI3X8Rkd0anRUpPb5ARBCLcvytooAxd6z2dfo1PvgAdUOrD1B8GUfr9HPFweznjnf2JDcWK019HPr%2FWmJNFi4EPx0VHiYhFgtOtmnSAzKpPxtdTCOgt86DLZ%2B7y9A65fX5ruM1Ilon9gICYO%2BUak5lG10H1d%2FmrMbTU8m%2BkvgHmcqJ2Ci3S%2F5MTLtMS%2BiOwMlps5svs82lRPdjoIKxfvkVLjsZ9cOQPpWCAptMZ%2BBsKqyLws78ZN1Rj1%2BMMgcxm%2FP1kI2acz9%2BbCuroUqaN%2FsIGZe2p9JsJ2RBnLqhg48he2w0wnewGzrWnTwLaWCTRuRBTnz9RDfEXJPoexEb%2FYkX%2FY4O8ZOR0Di%2F%2B0ZOENMnTXNtt4WC88P3kkr%2FjXOg%2B%2BM%2F8O9I3FYqCmSbud3Epq4ymcRwPdMiFXaERmIuj4T60UICuzxbGbMYdKcn35G%2BzY%2BVYncx%2BHqRlu6GLwCI7Ff%2FS64Ezi4iYLf5zbTQIkOdAOdNawSSpt6rQOConmPOi7yLVtkURDaxk%2Bpx6uUIipF%2BiLTGK6HNp%2BT7N%2FEKDUCJFbjwBgbzYzXDUSdGZuHWA8lrwPJRQpcb6fzDWZ1BUMLDnxckGOqUBMBq7wL1ovI3SOkmxrFaGbsAw4HXuZBLO4sbX4wSa8SIjdiHueoUQm6zYCMP5ims71e3uyu22MbsyrPQNbcJhkNNp36edEZpVuEczavVzm5vcYH6KA%2F8M93umDqTsL82Moaqluty5TwJazCptFYEkUl9m1NzNnccXha49FOveYuPlzT9245ltWbTVAYspUVb96DdCJlP8nJlUcaKGl%2BktTn3fVRm5&X-Amz-Signature=a73e35d1f73e30598b87b9bb06c76ecfbe76d4d1f6705936791efb44848b34d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HHGYUZC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQClOmmw9c1qaaFXRNchGIImyKdwUBviMrJr0%2BeTbyyRKwIgTDtJUOQNbK52cz9mVWOJ6IkoN1DqCwGWp%2FKDe%2Ft2maAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJCKrzDIo30azrB43CrcA6CaZeByR3QzFapaGeCjRgOBDpyL5SYolPD93cY7CFI3X8Rkd0anRUpPb5ARBCLcvytooAxd6z2dfo1PvgAdUOrD1B8GUfr9HPFweznjnf2JDcWK019HPr%2FWmJNFi4EPx0VHiYhFgtOtmnSAzKpPxtdTCOgt86DLZ%2B7y9A65fX5ruM1Ilon9gICYO%2BUak5lG10H1d%2FmrMbTU8m%2BkvgHmcqJ2Ci3S%2F5MTLtMS%2BiOwMlps5svs82lRPdjoIKxfvkVLjsZ9cOQPpWCAptMZ%2BBsKqyLws78ZN1Rj1%2BMMgcxm%2FP1kI2acz9%2BbCuroUqaN%2FsIGZe2p9JsJ2RBnLqhg48he2w0wnewGzrWnTwLaWCTRuRBTnz9RDfEXJPoexEb%2FYkX%2FY4O8ZOR0Di%2F%2B0ZOENMnTXNtt4WC88P3kkr%2FjXOg%2B%2BM%2F8O9I3FYqCmSbud3Epq4ymcRwPdMiFXaERmIuj4T60UICuzxbGbMYdKcn35G%2BzY%2BVYncx%2BHqRlu6GLwCI7Ff%2FS64Ezi4iYLf5zbTQIkOdAOdNawSSpt6rQOConmPOi7yLVtkURDaxk%2Bpx6uUIipF%2BiLTGK6HNp%2BT7N%2FEKDUCJFbjwBgbzYzXDUSdGZuHWA8lrwPJRQpcb6fzDWZ1BUMLDnxckGOqUBMBq7wL1ovI3SOkmxrFaGbsAw4HXuZBLO4sbX4wSa8SIjdiHueoUQm6zYCMP5ims71e3uyu22MbsyrPQNbcJhkNNp36edEZpVuEczavVzm5vcYH6KA%2F8M93umDqTsL82Moaqluty5TwJazCptFYEkUl9m1NzNnccXha49FOveYuPlzT9245ltWbTVAYspUVb96DdCJlP8nJlUcaKGl%2BktTn3fVRm5&X-Amz-Signature=5286a90cbf120e8de61f889766278a0903e9b7351ca521fcbfa0bba8883b9931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
