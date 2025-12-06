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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZRPZAX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9GlAldjBqhWOvWsYOUjCAVDohYqwHxP0QQgVcvwsEpwIhANZDYEpXVr1hUuPJSYFJloD2Nft8wEXxRdzOB08ZMxXPKv8DCHQQABoMNjM3NDIzMTgzODA1IgwYhaV%2FZHJnNB2r5jwq3AMpPulv%2FKBa%2FcHXHmW0EbaVYjBLVXbNiTS6seRJY2BdafVZHA3%2FX6YAnU0M3K4D0ZAGFL%2B50iPIo7iWE3McCiC8Qq80xb025%2BMUljaLCcvJykwITYYkgEVzxxV0%2FRhLv3zsD3GkVtRJfNnO0JufvHu7GI67RZVliQGAFDmG4tAqhFiKD%2FPOGF3rQ5cRM%2B3eyewJs%2BVUZh2uxAwhMfU2HwgsfgLVO%2FlE7Ef51wREmaOJhmYgNmpR6het0ZH67FPj%2BDhTz8upn5%2FDsJWa8eK1SZpvDt4g%2BY0%2BbBcL49Q4iyiHVbLOTXN51uXKXG7OK8MD9Ceo27378T5%2F4dK3xiQ0xNB5U1lO0jZSJ0FIR%2BAJfPkjwWb4dWcUVp8ke3DpsdAyazrZ3P%2FihTPaUZVLMhBT4nCG1NceDe7qu5S9ya%2Fnl1n1U5M78x7Gp9OlpxBq88%2FH7Ob7xQLKVkiZAtZtBP4PJNU4r9EyQYU7UQSLFjsAY8bc1%2FjmMEWu3eSSUNFTheq1%2Bo8Y6l3nbbiA8VYKGNNonTLJuAbLWOGPNgSgJsqE%2FO79vIp513NYjMLMp6epYUFNmaj01bj%2FR7gE3tytmOVLxR5vXtFj8e5uB2yy077cpJjYa5z%2FlDZm9dFpuqdaUDCgptDJBjqkASK%2FkKwR0b0HQvZR95WteghYC6smFcvdv4SIs%2Bf7mnrYD6TbvB4fkvBM78j2VVj1H07VUxzuYgVJq7QJhtCQs9h5uFzHGPg2KW32ilTH252N4gNW1UqlN%2Fm64XVn2pQu4nDqSyvvyNJsNG2t7ox3hMqMw2njn%2F%2F5UDfLp%2FoUYgxtqZGC%2BUYning51Rf%2BUo1DFQiDMtmkfkknM2VGHtNQbbiUp%2B7Z&X-Amz-Signature=0b04e0fb5e82b8bb15537c2cec9ace0b769ce7e95a8c882e5b0e0f332ba987b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZRPZAX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9GlAldjBqhWOvWsYOUjCAVDohYqwHxP0QQgVcvwsEpwIhANZDYEpXVr1hUuPJSYFJloD2Nft8wEXxRdzOB08ZMxXPKv8DCHQQABoMNjM3NDIzMTgzODA1IgwYhaV%2FZHJnNB2r5jwq3AMpPulv%2FKBa%2FcHXHmW0EbaVYjBLVXbNiTS6seRJY2BdafVZHA3%2FX6YAnU0M3K4D0ZAGFL%2B50iPIo7iWE3McCiC8Qq80xb025%2BMUljaLCcvJykwITYYkgEVzxxV0%2FRhLv3zsD3GkVtRJfNnO0JufvHu7GI67RZVliQGAFDmG4tAqhFiKD%2FPOGF3rQ5cRM%2B3eyewJs%2BVUZh2uxAwhMfU2HwgsfgLVO%2FlE7Ef51wREmaOJhmYgNmpR6het0ZH67FPj%2BDhTz8upn5%2FDsJWa8eK1SZpvDt4g%2BY0%2BbBcL49Q4iyiHVbLOTXN51uXKXG7OK8MD9Ceo27378T5%2F4dK3xiQ0xNB5U1lO0jZSJ0FIR%2BAJfPkjwWb4dWcUVp8ke3DpsdAyazrZ3P%2FihTPaUZVLMhBT4nCG1NceDe7qu5S9ya%2Fnl1n1U5M78x7Gp9OlpxBq88%2FH7Ob7xQLKVkiZAtZtBP4PJNU4r9EyQYU7UQSLFjsAY8bc1%2FjmMEWu3eSSUNFTheq1%2Bo8Y6l3nbbiA8VYKGNNonTLJuAbLWOGPNgSgJsqE%2FO79vIp513NYjMLMp6epYUFNmaj01bj%2FR7gE3tytmOVLxR5vXtFj8e5uB2yy077cpJjYa5z%2FlDZm9dFpuqdaUDCgptDJBjqkASK%2FkKwR0b0HQvZR95WteghYC6smFcvdv4SIs%2Bf7mnrYD6TbvB4fkvBM78j2VVj1H07VUxzuYgVJq7QJhtCQs9h5uFzHGPg2KW32ilTH252N4gNW1UqlN%2Fm64XVn2pQu4nDqSyvvyNJsNG2t7ox3hMqMw2njn%2F%2F5UDfLp%2FoUYgxtqZGC%2BUYning51Rf%2BUo1DFQiDMtmkfkknM2VGHtNQbbiUp%2B7Z&X-Amz-Signature=9fefd8863a029548d219d688d2ede9746821f2c198e601d9613918ef8206248f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
