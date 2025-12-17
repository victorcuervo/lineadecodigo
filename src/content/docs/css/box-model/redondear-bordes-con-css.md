---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHZ772G7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6kvHck4enVvRykqC3RzgesT%2FJLJo9b2Fvcuvn%2FwZnKQIhANZSBTekwnB0mIcy4npLBZm777fvA5kqp%2FRQ%2FrBoo2zfKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLjP5L%2BiJRr1rGma0q3AMpbVDGLb%2BnDvuuRkpUPvloDjPF1HqINH5rfey%2BMcWVDamXcKUTxKFWs3nqS93PdDcAEAnzMRfBF%2BJvdQrl8gBoJvpS15RYO6DOEOoIFf3hF%2FRsk861oEUVfiBhQaG4xjAz0JKw%2F7dzkfxA1Vbj6cDv2xJ1k52Hu2tLk428oRrt1svp1nRXYj05UpNu4gyihRi5nBlt4i33d7CmzaIymtbtYPxcH3npRFbPAkk6LloVutXfBW8LfDoCNLEmwuZnaxuBC1lyA9z0d%2Bdb2ZzWjRUGpnRMgsh5vkqaOUV2PF%2FfbAEA1hJCBxSB1XtVVxn2MGy%2BNroF24JR42KL6v1zp9V3u1HdwW7J62A4hIv9%2F5FUUg4frmwrQ8qyPzMcCJUfEcETPqqMspc2qAuTVTePO7DmpDkuHL4UA%2Bd4jG%2FN2D5selHkNmLhyoE9SIi1ESqRbSdD0MtbgonEsenYKQTH0lcoH%2Bvy3WcG1qEH3inj9DADIInTIs6jlXQcd%2B2xuABq%2F0PRbwYLYRB7k7HmJOiTfems1UG%2B9lgy04aeus5uLQrZQQkRRBJu4MuCjUJv0YncdoBzWPtdErZw7dlZc1UgiiMyc4k2aXw1tdGAoV6zovvnVMRqgJkWSEjaHLnA9zD%2F%2F4rKBjqkAQB7NOzIhkLE7J%2FpZ2L%2Ba6cxjlY3zQ%2BUEdks0mGj5jyZeqJsnmCDVCp1wiYK%2FfAKMkKY26MoMiEkgphXnwQcz6fzCN35XE0hpi5z5mv5IEJQV4veldtseG4BJa8loahVfOrLw9rDCaHAt42DNeQxpsnCQo4bDH%2FdVyVWaRgKkb4g27SOJhz4wJHtH2XZLHuSygg2JlScibHxpDZvywUd3Q0J9OKs&X-Amz-Signature=404e7ef2ba50556387fa4e6178d27deae3dd1dce8c9c87b219a69d8b38421786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHZ772G7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6kvHck4enVvRykqC3RzgesT%2FJLJo9b2Fvcuvn%2FwZnKQIhANZSBTekwnB0mIcy4npLBZm777fvA5kqp%2FRQ%2FrBoo2zfKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLjP5L%2BiJRr1rGma0q3AMpbVDGLb%2BnDvuuRkpUPvloDjPF1HqINH5rfey%2BMcWVDamXcKUTxKFWs3nqS93PdDcAEAnzMRfBF%2BJvdQrl8gBoJvpS15RYO6DOEOoIFf3hF%2FRsk861oEUVfiBhQaG4xjAz0JKw%2F7dzkfxA1Vbj6cDv2xJ1k52Hu2tLk428oRrt1svp1nRXYj05UpNu4gyihRi5nBlt4i33d7CmzaIymtbtYPxcH3npRFbPAkk6LloVutXfBW8LfDoCNLEmwuZnaxuBC1lyA9z0d%2Bdb2ZzWjRUGpnRMgsh5vkqaOUV2PF%2FfbAEA1hJCBxSB1XtVVxn2MGy%2BNroF24JR42KL6v1zp9V3u1HdwW7J62A4hIv9%2F5FUUg4frmwrQ8qyPzMcCJUfEcETPqqMspc2qAuTVTePO7DmpDkuHL4UA%2Bd4jG%2FN2D5selHkNmLhyoE9SIi1ESqRbSdD0MtbgonEsenYKQTH0lcoH%2Bvy3WcG1qEH3inj9DADIInTIs6jlXQcd%2B2xuABq%2F0PRbwYLYRB7k7HmJOiTfems1UG%2B9lgy04aeus5uLQrZQQkRRBJu4MuCjUJv0YncdoBzWPtdErZw7dlZc1UgiiMyc4k2aXw1tdGAoV6zovvnVMRqgJkWSEjaHLnA9zD%2F%2F4rKBjqkAQB7NOzIhkLE7J%2FpZ2L%2Ba6cxjlY3zQ%2BUEdks0mGj5jyZeqJsnmCDVCp1wiYK%2FfAKMkKY26MoMiEkgphXnwQcz6fzCN35XE0hpi5z5mv5IEJQV4veldtseG4BJa8loahVfOrLw9rDCaHAt42DNeQxpsnCQo4bDH%2FdVyVWaRgKkb4g27SOJhz4wJHtH2XZLHuSygg2JlScibHxpDZvywUd3Q0J9OKs&X-Amz-Signature=0770f8b49fe4ced9e781063ef4f6726efd6f21efe2507cf87641f6068ad4168f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
