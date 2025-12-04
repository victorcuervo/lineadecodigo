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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVXKOGGG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDW1O%2BpOw4QkReMOmaNCc2o8lxooKupXKq84eEF1MlJ3gIhAKAg6Lr37BqPTckRdr5RQGrb74AT1iEWaQg6fUUpMvn2Kv8DCEMQABoMNjM3NDIzMTgzODA1IgxVroLoFZFeUvpj8ZUq3AM7hVMJFupS7ABKRGsA5jOgAzqoV6NrVvB5pHSLD2oBIsTg82%2BOefAUvJ5QcPjVWwCi0YWiH6JmITnt9ngrByNuOg9XTBOL3l%2Fv%2BNYazIhkp3IOUMC%2FNISoHyX0HU5%2FIFrRT%2F43q2GogruOZT3e4gJxW%2B3k%2BIkI50BcO76pjDf9atgv2UPC1lHNJHJdLKzCeRCpjcKn2qXnVWS8Yh7eE9AFH4IrHmjvy%2FWBuWsf%2F9afl8Jg3SlbzrIVLM1EokSN6jZPVdpvaJnBmX0ctlxc9p%2Fsesskbz9fxi1DHyt5RX5WdvT0dGOfnW8dqLLJyUs2s1fIO%2Bx43ICToDscc2I2IkEKCFDol%2BbPI00sBLSmHpVAbaboXdmnxeMxRUh%2BtwDLaqMk5AtCVhX3TEZZBiYLiMTFXS%2F3VAmipoR4Tb4DZaZr1NfE0SHX2xze4278T2fNvKby6WE8CEd1gc1WSMv7ak8OPiCX%2Bf0DH2PPOrTjQ8Af%2BUeio5P%2FZ6GGYhxWoDF7LtxaiDZ0Hf3eADMleE%2BJIAUJ0UUMMCGBCbvuSlnogjH2x78Phz6vdGWJLFP9MzzmUePha5twTYgNMFQseNs0NrCjGb5lYj4RBZtJCUfp7%2FSaAHGNYL4HuvJyIcTrjzCJrMXJBjqkAYahLa0g9Vc6jrHklDo6wGITHGxd5no77aa1g77oQJDIxtVe3i5mBFOpm0dDVsDSAhqfsAnCSowI3cHg%2BtCzONKmiTbQ%2BTTYC%2FWDYbAnkhyOGc5R07sYjBBuKOJkNSMgxItIt2F%2BcP5l%2Bw3brtreSITsnRJuCwshWWIl2ulUDiYmhPWebMxh2LulUZj%2BJ350Ygi929cq9ij8IjXb3VFvMO9CqNlY&X-Amz-Signature=cf15ad9815264db438a2b480235cee5e0b113cd0b4af9600c92aeb4777e33cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVXKOGGG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDW1O%2BpOw4QkReMOmaNCc2o8lxooKupXKq84eEF1MlJ3gIhAKAg6Lr37BqPTckRdr5RQGrb74AT1iEWaQg6fUUpMvn2Kv8DCEMQABoMNjM3NDIzMTgzODA1IgxVroLoFZFeUvpj8ZUq3AM7hVMJFupS7ABKRGsA5jOgAzqoV6NrVvB5pHSLD2oBIsTg82%2BOefAUvJ5QcPjVWwCi0YWiH6JmITnt9ngrByNuOg9XTBOL3l%2Fv%2BNYazIhkp3IOUMC%2FNISoHyX0HU5%2FIFrRT%2F43q2GogruOZT3e4gJxW%2B3k%2BIkI50BcO76pjDf9atgv2UPC1lHNJHJdLKzCeRCpjcKn2qXnVWS8Yh7eE9AFH4IrHmjvy%2FWBuWsf%2F9afl8Jg3SlbzrIVLM1EokSN6jZPVdpvaJnBmX0ctlxc9p%2Fsesskbz9fxi1DHyt5RX5WdvT0dGOfnW8dqLLJyUs2s1fIO%2Bx43ICToDscc2I2IkEKCFDol%2BbPI00sBLSmHpVAbaboXdmnxeMxRUh%2BtwDLaqMk5AtCVhX3TEZZBiYLiMTFXS%2F3VAmipoR4Tb4DZaZr1NfE0SHX2xze4278T2fNvKby6WE8CEd1gc1WSMv7ak8OPiCX%2Bf0DH2PPOrTjQ8Af%2BUeio5P%2FZ6GGYhxWoDF7LtxaiDZ0Hf3eADMleE%2BJIAUJ0UUMMCGBCbvuSlnogjH2x78Phz6vdGWJLFP9MzzmUePha5twTYgNMFQseNs0NrCjGb5lYj4RBZtJCUfp7%2FSaAHGNYL4HuvJyIcTrjzCJrMXJBjqkAYahLa0g9Vc6jrHklDo6wGITHGxd5no77aa1g77oQJDIxtVe3i5mBFOpm0dDVsDSAhqfsAnCSowI3cHg%2BtCzONKmiTbQ%2BTTYC%2FWDYbAnkhyOGc5R07sYjBBuKOJkNSMgxItIt2F%2BcP5l%2Bw3brtreSITsnRJuCwshWWIl2ulUDiYmhPWebMxh2LulUZj%2BJ350Ygi929cq9ij8IjXb3VFvMO9CqNlY&X-Amz-Signature=52bb2d8726633719359b9bb5dba0fef4cca41e6aa844ad864dcaea4cbe0accd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
