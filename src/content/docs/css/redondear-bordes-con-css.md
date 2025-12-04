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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36TV6GB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHl7st3%2Bpq%2BqBTtjLFoVj7e1sl2C%2BchfFv1jJqTmF9JuAiA2VhqoZVt2bsQkfBEzCct3KzDVaJ8ePvs13lWz0sQdRir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMkxUsytyrFVuXE8NtKtwD9iQjpeewnebUKKS2hsp18Ao1USrhcd%2FSoQ8Ja7GjoL5HfNKO0FepMMYU2bi1QJGeFMpeodD4dq2tBQlf%2FJwRtD8eb51Z96ajzOkTrMTupqEV7Ug%2FlVTb7PEneLbcYSWdapFntXXmkGlC%2B%2BsgI5kvpQHY1DUSxPBX%2FEJAQThNojHF7dCjBMUvu6L1AA35OQ7ItaZ7r%2B9SQBRsn7CMI0v6S1ZD8KItkObZOaGsCLJztDO2IQz6Nhs2Sa%2BsyP2RSuMhkYdtcaDaTSiQWI%2BydLKPxw8zg96qlAoTyPboE%2BZRWniaQUT3tDAAlSSpxyCCVtAhu0WbDrz%2BO2O84NOX%2FbSsT2%2FA%2BjYvX9xTFc6cWDqVYkS6ZdzppKJQ4TFPx993yQ9fJ3vLAaK0f17Nb2bwXrTUdjwjUuzACMU1uqYbIhclqsc2ZzYfrSimRzlobmZMD%2F441fy0sl%2F7grn%2FH77N7bn4K%2BSpQjYs0orm%2FVCGv3%2FJDmov04n8IxbaqgKaoitThK3i1w%2Bjkyjk7Ig6dD18xR%2F60iJ5TLAm36E20j9EURMKIRLzGqlyBpmk%2F9tDLgItfCLYLjinqEHT5AS4N3wG9vpZHRwO1mn9yBpdXupngd49fT3m3qS%2B0%2BF%2FEjgFQq4w9ufEyQY6pgH46P3iis0AGNOjh79i7Ojm7MW0ISBlw2vpGEjjnPaeC3NQWADQwZTwuNu4KA%2Fe3Kqj8D6b5mbtCs5wClZLN0q2t6%2BgVfeembUDdNRsH%2BXbZ5O1mqxjzVBF4r2xkqP8k6jVFH6J1ylFZeYfGXbSDiwB8MbIAKPN3vVHySQ8soI3vfvN%2Fxj53umebn%2BcLTQfzASYKophVaz9YE6t2dmAqqp4GeQWZpqi&X-Amz-Signature=15a9f2f7a8dcdadb3988d0723259f995e362fb1238a33e45fa47641dcbeb89dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q36TV6GB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHl7st3%2Bpq%2BqBTtjLFoVj7e1sl2C%2BchfFv1jJqTmF9JuAiA2VhqoZVt2bsQkfBEzCct3KzDVaJ8ePvs13lWz0sQdRir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMkxUsytyrFVuXE8NtKtwD9iQjpeewnebUKKS2hsp18Ao1USrhcd%2FSoQ8Ja7GjoL5HfNKO0FepMMYU2bi1QJGeFMpeodD4dq2tBQlf%2FJwRtD8eb51Z96ajzOkTrMTupqEV7Ug%2FlVTb7PEneLbcYSWdapFntXXmkGlC%2B%2BsgI5kvpQHY1DUSxPBX%2FEJAQThNojHF7dCjBMUvu6L1AA35OQ7ItaZ7r%2B9SQBRsn7CMI0v6S1ZD8KItkObZOaGsCLJztDO2IQz6Nhs2Sa%2BsyP2RSuMhkYdtcaDaTSiQWI%2BydLKPxw8zg96qlAoTyPboE%2BZRWniaQUT3tDAAlSSpxyCCVtAhu0WbDrz%2BO2O84NOX%2FbSsT2%2FA%2BjYvX9xTFc6cWDqVYkS6ZdzppKJQ4TFPx993yQ9fJ3vLAaK0f17Nb2bwXrTUdjwjUuzACMU1uqYbIhclqsc2ZzYfrSimRzlobmZMD%2F441fy0sl%2F7grn%2FH77N7bn4K%2BSpQjYs0orm%2FVCGv3%2FJDmov04n8IxbaqgKaoitThK3i1w%2Bjkyjk7Ig6dD18xR%2F60iJ5TLAm36E20j9EURMKIRLzGqlyBpmk%2F9tDLgItfCLYLjinqEHT5AS4N3wG9vpZHRwO1mn9yBpdXupngd49fT3m3qS%2B0%2BF%2FEjgFQq4w9ufEyQY6pgH46P3iis0AGNOjh79i7Ojm7MW0ISBlw2vpGEjjnPaeC3NQWADQwZTwuNu4KA%2Fe3Kqj8D6b5mbtCs5wClZLN0q2t6%2BgVfeembUDdNRsH%2BXbZ5O1mqxjzVBF4r2xkqP8k6jVFH6J1ylFZeYfGXbSDiwB8MbIAKPN3vVHySQ8soI3vfvN%2Fxj53umebn%2BcLTQfzASYKophVaz9YE6t2dmAqqp4GeQWZpqi&X-Amz-Signature=ebd187631f5ee9100eb9b270feb6587612e3b513ef7deda2291a0f739766842e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
