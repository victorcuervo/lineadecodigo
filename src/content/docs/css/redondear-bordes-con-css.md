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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3ES4TZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxL3GPkeFz%2BzV4M49rQss8zDFZOGrgpkbiAqbsj8odKgIgdOAlpzqExAlFDNUzgZyt8al9VjajrmpHt8F4FrnT0gkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2ByzpqWWyhtazoKWyrcA9R9faJ8cyAcXMTapPQGgKgGXGoXmMD1J14dx92OEeq80gU%2BHHp2%2FQiOsZa7PVI%2Fx5ScGWtvuoHt79ukp5liezRHO5t2wIeucxlrejqgbielcafA4K%2BMCmGcterddMzHKa%2B6COeb0%2FUX9Z9Qmc5PduXQvezXBjJCyicOsKCGdLVJKeGl2nqpBMd%2FVT%2FxGgZ9JV5vGdH0cKh0x9aY4kiysO4FR7gfjKJYSwkmjds3WK4RVvZiQ1Rt8voz%2Fl9XS9JSMeZfm17SkZ%2BSHXBEcdL0BW%2BC1CEvMwQcebtYhYZBPTGpk7xri2TTa1%2FKp%2FwzJh8ihZNSQuDcNeYTgZwjM0HZMvE7dGyMX68z5y%2BH3RI0a0o92KGlqu05WniuhtDJLUrpgLxg1HesVaVX8cO2ea%2B9iAnlCMKx9%2FbbujDlIUWdWy%2BIP9%2FSC%2FlZjFhlmjgY49FLvpakUvsPYRt%2Fpxnu9zr%2B%2FZdezmTuQtaJZ3uecDGyzent4G5xbkJYsugKEXXAPgACfvY0XfFCLB9%2FGwRF8y9Uo%2BMWWv8ES5tiFDvn5D8%2BzucL9ie5xxRDsPY6Hpt0mhyTPrlK51Pwv3PILYhi7jhcazQz9jAjsmqEoAhsxJkwx46d1nOiNIbONb32nuokMJCu3skGOqUBQWEzdlIkNTNCwN5E5FCxkM%2Bx62Gxw9ysGxlb1lchBHmvSEjs5q6pcbNE4QIvon3dVh%2FTcQ1E47Ynie%2Ftfsr8zUBc21rcbKp9T51Vamm8GBnTwxBL0mAiEBJ%2BgCxw%2BqW1ioAzMpPTTPQlYGFO%2FZ1IqBuxPsfnGeqr5OOj6r52vQ5TQwP0UU1LTtGIPW2zgAGPINc5yMBIZ8RixWLAuofIOSzl7Agm&X-Amz-Signature=d9eb32f7e1052b2f6698cbbd08092e5d11f82124034eb3da5b803bbee836bffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3ES4TZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxL3GPkeFz%2BzV4M49rQss8zDFZOGrgpkbiAqbsj8odKgIgdOAlpzqExAlFDNUzgZyt8al9VjajrmpHt8F4FrnT0gkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2ByzpqWWyhtazoKWyrcA9R9faJ8cyAcXMTapPQGgKgGXGoXmMD1J14dx92OEeq80gU%2BHHp2%2FQiOsZa7PVI%2Fx5ScGWtvuoHt79ukp5liezRHO5t2wIeucxlrejqgbielcafA4K%2BMCmGcterddMzHKa%2B6COeb0%2FUX9Z9Qmc5PduXQvezXBjJCyicOsKCGdLVJKeGl2nqpBMd%2FVT%2FxGgZ9JV5vGdH0cKh0x9aY4kiysO4FR7gfjKJYSwkmjds3WK4RVvZiQ1Rt8voz%2Fl9XS9JSMeZfm17SkZ%2BSHXBEcdL0BW%2BC1CEvMwQcebtYhYZBPTGpk7xri2TTa1%2FKp%2FwzJh8ihZNSQuDcNeYTgZwjM0HZMvE7dGyMX68z5y%2BH3RI0a0o92KGlqu05WniuhtDJLUrpgLxg1HesVaVX8cO2ea%2B9iAnlCMKx9%2FbbujDlIUWdWy%2BIP9%2FSC%2FlZjFhlmjgY49FLvpakUvsPYRt%2Fpxnu9zr%2B%2FZdezmTuQtaJZ3uecDGyzent4G5xbkJYsugKEXXAPgACfvY0XfFCLB9%2FGwRF8y9Uo%2BMWWv8ES5tiFDvn5D8%2BzucL9ie5xxRDsPY6Hpt0mhyTPrlK51Pwv3PILYhi7jhcazQz9jAjsmqEoAhsxJkwx46d1nOiNIbONb32nuokMJCu3skGOqUBQWEzdlIkNTNCwN5E5FCxkM%2Bx62Gxw9ysGxlb1lchBHmvSEjs5q6pcbNE4QIvon3dVh%2FTcQ1E47Ynie%2Ftfsr8zUBc21rcbKp9T51Vamm8GBnTwxBL0mAiEBJ%2BgCxw%2BqW1ioAzMpPTTPQlYGFO%2FZ1IqBuxPsfnGeqr5OOj6r52vQ5TQwP0UU1LTtGIPW2zgAGPINc5yMBIZ8RixWLAuofIOSzl7Agm&X-Amz-Signature=5273390f2afafe86fc1e9b6e3c0f226e93b06cf8df6da0b4ece1d881bd5b4388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
