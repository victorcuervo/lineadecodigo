---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NT7FDE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9tyvuRwbVv%2Fck36CkjYQupAFfJ%2BsnS6yPr0L8vOiLRwIgVue%2BRJ9rIqI2GatJGJG0DnbOBmdU1Tg0WjnApe6s8UMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC7QiSljHZ91HG08CrcA8zSJsB4PmGpfeSfbRWSwAj1SdJAx0wr0gV9nGtY%2BoXDbCCkRoeyhGxOhMY4bKhlnblpMvQbbBh%2F8oXnVcF4xLxFsVzyCCTutVt1c%2FxwemByyLX%2B0L1gMaYGGuaZUSRV0%2FFwKqK2RPSMMd1WxmtWPpRXiefaTm2Ac%2Bl9%2B9ct9yshM5STSNcMAG%2BefDBY1FkwIYczwTrxheA0PTLBG6IbVkHdH669fAV3QDd6m1sLaWNTxiNXWI1CicDNwHqYjfMiZ3rC%2BzlmBMf7viJJGBpuXpuLV8No9KBq9sUqpydh6R9Pc2ciqrnQ5hD0HACR69PDbcElq1Zn9kNzX%2B9ljN6Z5hLeYsPeOWX%2ByYzMmr3rxve8PneLnuaj7mgc%2B9J5rzZiIJSQS6GwuJwGll9LEreINUylA0LKIh%2FAUJSgbojG5egxOlCeL0DY%2FDIQ9QcpmRlqPOAT9MQqkVUw2B4AvXBEfx3CnVnLtr4obnnDvPxRjdlZVhT3G8S79Qaz5HmelbomaYaUlVFgyP0U9kGOaWYadz%2F7LbeoLKMaUlz00AMtgAOHmkGOWi43JMbJ7CEWH3ZrQw9YWNsz4Yo12DrJKgWPiYdhC11n8nxJc9hCfd3YfVBVfJ9BPfXtxsxMvsNbMOj90skGOqUBO84IMS4scyy7Q1pKhYq2Tvt6a%2Bc%2FopVceuVuaqdF64SG%2BZd5j72F7NLM87SMh9Idr%2FDU%2BfYmwq5QCqCPAW9wGfH7NFVb6a1kDojlAaL3qXX%2F%2FK2Lpw52fi8coBtyzRa92Ic2rWjdwe3quRkdKRm6uKmEMRs6KLPt0Q3PoNfl9VshKmBfOn%2BsG0ULLr1F2%2FXB9p8k92GY9EqgunA2vdIHch6F9WCy&X-Amz-Signature=4230b4d05a0f9197ffcc4e20e8977e788dff9b95385f2a5b1c20fcd2eebb9ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

