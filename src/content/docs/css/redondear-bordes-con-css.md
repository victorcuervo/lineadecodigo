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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFXJDTX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtXg0WwSnSyJZr29bNcuOzfNzQVGc%2BtVgLI%2BBNhv0P4QIgAkO3AO%2Fb9OYGRdcv%2F1ZP7ye0xERq5BnYSag%2Bgm3YP3kqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpQSbEIW7kypl4BjCrcAzsMVCYCACkVejI65ljq0yiW0iMnmgHejO7kWmlsFW%2F6tD2KWUvdZFAjOKijzVp%2FwHA59%2FiBOt%2FqDDL0UE0EWZoQD8G6BGQI9HvpIIh9eVbRpib2isaQJC69wHBYXyd1qCKKs7LhdhiK3vSnIlQg3EqPb3M8AQRPEKbdCt45VkGxtRS%2BHK1DRhL9FNpxOuKhnVAKWNBQULxWAPe2qvlRneTVG6KuO6iGmDFDDNYWPTf5USIOOqpwgvTmBRAEcLWMCjzRSKyQUVacgAAK1wiSiCijerx8FtEkBMpiBYi1q5Ixy8GXy32PzTWZ1rkZ5WlpTYwQai6jcUfcg%2BoSepvMs2uboa%2FZr2ciFF8KJXDuqVSE26W91PVNh%2FdNlnwJLl0EUzjXv6i6YkHFI9KKabrRM5XWjqNQtud37h4CnOKlJ9qt2U%2F4CKBzLzjLDseEPpFdo9dd4UPk45CZbk8S5qxnQhfEibOAz2Vd5vLcY0B84CLZ6pCfwRucGmw%2B6goOzQg2Dl62246FTd9raF8b5Tg1UVVUbBQ1EoN2D84lVyjBEy5tyVMAE6rxJI1HoymH8RPZpnAOs0ILtqrMh1sOGODppOINV1hsaOFjj8xk9pPFfTq00naX5TUBLHSytXd4MJ%2Bo18kGOqUBjr5kDHILQ3%2BUhnPuFlglPZuWr3fA%2Bt1HoQ17G0r03TzCywCclENd6e2wumt4lFKF8DekOZENxrRNiH0VF3XLIEPulYcOnipDWJhiPlJJ6LX%2FJq0YxpZv9fLm%2B71dOx1NDH9NUC9XGH9plgZfTtAKYdU2VzWrJBDto1ZPpSdVn0wSI3JT%2F29eSghUrpwlAIUhDuLvTanr3%2FoCDjFV54RfhhGA5wFU&X-Amz-Signature=90d67446710daef2859c52d308261afcdd7ae3c65a9c4863cdb55db8aa9b391d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFXJDTX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtXg0WwSnSyJZr29bNcuOzfNzQVGc%2BtVgLI%2BBNhv0P4QIgAkO3AO%2Fb9OYGRdcv%2F1ZP7ye0xERq5BnYSag%2Bgm3YP3kqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpQSbEIW7kypl4BjCrcAzsMVCYCACkVejI65ljq0yiW0iMnmgHejO7kWmlsFW%2F6tD2KWUvdZFAjOKijzVp%2FwHA59%2FiBOt%2FqDDL0UE0EWZoQD8G6BGQI9HvpIIh9eVbRpib2isaQJC69wHBYXyd1qCKKs7LhdhiK3vSnIlQg3EqPb3M8AQRPEKbdCt45VkGxtRS%2BHK1DRhL9FNpxOuKhnVAKWNBQULxWAPe2qvlRneTVG6KuO6iGmDFDDNYWPTf5USIOOqpwgvTmBRAEcLWMCjzRSKyQUVacgAAK1wiSiCijerx8FtEkBMpiBYi1q5Ixy8GXy32PzTWZ1rkZ5WlpTYwQai6jcUfcg%2BoSepvMs2uboa%2FZr2ciFF8KJXDuqVSE26W91PVNh%2FdNlnwJLl0EUzjXv6i6YkHFI9KKabrRM5XWjqNQtud37h4CnOKlJ9qt2U%2F4CKBzLzjLDseEPpFdo9dd4UPk45CZbk8S5qxnQhfEibOAz2Vd5vLcY0B84CLZ6pCfwRucGmw%2B6goOzQg2Dl62246FTd9raF8b5Tg1UVVUbBQ1EoN2D84lVyjBEy5tyVMAE6rxJI1HoymH8RPZpnAOs0ILtqrMh1sOGODppOINV1hsaOFjj8xk9pPFfTq00naX5TUBLHSytXd4MJ%2Bo18kGOqUBjr5kDHILQ3%2BUhnPuFlglPZuWr3fA%2Bt1HoQ17G0r03TzCywCclENd6e2wumt4lFKF8DekOZENxrRNiH0VF3XLIEPulYcOnipDWJhiPlJJ6LX%2FJq0YxpZv9fLm%2B71dOx1NDH9NUC9XGH9plgZfTtAKYdU2VzWrJBDto1ZPpSdVn0wSI3JT%2F29eSghUrpwlAIUhDuLvTanr3%2FoCDjFV54RfhhGA5wFU&X-Amz-Signature=f9afa7fece1fccee64296c13b5b26f7fac5663ffeed55acb7abc3db327ea3362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
