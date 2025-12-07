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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NT7FDE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9tyvuRwbVv%2Fck36CkjYQupAFfJ%2BsnS6yPr0L8vOiLRwIgVue%2BRJ9rIqI2GatJGJG0DnbOBmdU1Tg0WjnApe6s8UMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC7QiSljHZ91HG08CrcA8zSJsB4PmGpfeSfbRWSwAj1SdJAx0wr0gV9nGtY%2BoXDbCCkRoeyhGxOhMY4bKhlnblpMvQbbBh%2F8oXnVcF4xLxFsVzyCCTutVt1c%2FxwemByyLX%2B0L1gMaYGGuaZUSRV0%2FFwKqK2RPSMMd1WxmtWPpRXiefaTm2Ac%2Bl9%2B9ct9yshM5STSNcMAG%2BefDBY1FkwIYczwTrxheA0PTLBG6IbVkHdH669fAV3QDd6m1sLaWNTxiNXWI1CicDNwHqYjfMiZ3rC%2BzlmBMf7viJJGBpuXpuLV8No9KBq9sUqpydh6R9Pc2ciqrnQ5hD0HACR69PDbcElq1Zn9kNzX%2B9ljN6Z5hLeYsPeOWX%2ByYzMmr3rxve8PneLnuaj7mgc%2B9J5rzZiIJSQS6GwuJwGll9LEreINUylA0LKIh%2FAUJSgbojG5egxOlCeL0DY%2FDIQ9QcpmRlqPOAT9MQqkVUw2B4AvXBEfx3CnVnLtr4obnnDvPxRjdlZVhT3G8S79Qaz5HmelbomaYaUlVFgyP0U9kGOaWYadz%2F7LbeoLKMaUlz00AMtgAOHmkGOWi43JMbJ7CEWH3ZrQw9YWNsz4Yo12DrJKgWPiYdhC11n8nxJc9hCfd3YfVBVfJ9BPfXtxsxMvsNbMOj90skGOqUBO84IMS4scyy7Q1pKhYq2Tvt6a%2Bc%2FopVceuVuaqdF64SG%2BZd5j72F7NLM87SMh9Idr%2FDU%2BfYmwq5QCqCPAW9wGfH7NFVb6a1kDojlAaL3qXX%2F%2FK2Lpw52fi8coBtyzRa92Ic2rWjdwe3quRkdKRm6uKmEMRs6KLPt0Q3PoNfl9VshKmBfOn%2BsG0ULLr1F2%2FXB9p8k92GY9EqgunA2vdIHch6F9WCy&X-Amz-Signature=35447c2e3cc99d3e92cdcfd81731b37487f1714e9be374c2351daedeadf187d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NT7FDE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9tyvuRwbVv%2Fck36CkjYQupAFfJ%2BsnS6yPr0L8vOiLRwIgVue%2BRJ9rIqI2GatJGJG0DnbOBmdU1Tg0WjnApe6s8UMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC7QiSljHZ91HG08CrcA8zSJsB4PmGpfeSfbRWSwAj1SdJAx0wr0gV9nGtY%2BoXDbCCkRoeyhGxOhMY4bKhlnblpMvQbbBh%2F8oXnVcF4xLxFsVzyCCTutVt1c%2FxwemByyLX%2B0L1gMaYGGuaZUSRV0%2FFwKqK2RPSMMd1WxmtWPpRXiefaTm2Ac%2Bl9%2B9ct9yshM5STSNcMAG%2BefDBY1FkwIYczwTrxheA0PTLBG6IbVkHdH669fAV3QDd6m1sLaWNTxiNXWI1CicDNwHqYjfMiZ3rC%2BzlmBMf7viJJGBpuXpuLV8No9KBq9sUqpydh6R9Pc2ciqrnQ5hD0HACR69PDbcElq1Zn9kNzX%2B9ljN6Z5hLeYsPeOWX%2ByYzMmr3rxve8PneLnuaj7mgc%2B9J5rzZiIJSQS6GwuJwGll9LEreINUylA0LKIh%2FAUJSgbojG5egxOlCeL0DY%2FDIQ9QcpmRlqPOAT9MQqkVUw2B4AvXBEfx3CnVnLtr4obnnDvPxRjdlZVhT3G8S79Qaz5HmelbomaYaUlVFgyP0U9kGOaWYadz%2F7LbeoLKMaUlz00AMtgAOHmkGOWi43JMbJ7CEWH3ZrQw9YWNsz4Yo12DrJKgWPiYdhC11n8nxJc9hCfd3YfVBVfJ9BPfXtxsxMvsNbMOj90skGOqUBO84IMS4scyy7Q1pKhYq2Tvt6a%2Bc%2FopVceuVuaqdF64SG%2BZd5j72F7NLM87SMh9Idr%2FDU%2BfYmwq5QCqCPAW9wGfH7NFVb6a1kDojlAaL3qXX%2F%2FK2Lpw52fi8coBtyzRa92Ic2rWjdwe3quRkdKRm6uKmEMRs6KLPt0Q3PoNfl9VshKmBfOn%2BsG0ULLr1F2%2FXB9p8k92GY9EqgunA2vdIHch6F9WCy&X-Amz-Signature=2faac99b28a4a1aec0c7010d54e2ef5b52fa2da46e4f45633f1929b427569bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
