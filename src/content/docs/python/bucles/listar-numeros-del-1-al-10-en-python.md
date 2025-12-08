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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X36II5D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqK9W5Z2ogxUS3QPaSx37cWyfT0Q3NXZ95QwoltJnivAiAu3d6I%2BNAn3%2BAjQ6yrNjRnbHtKEpL5r86E9UJcfalHxyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJcgbMvr48uNNKANTKtwDCv2NXPIlvdXlnoDa4L8k3iJywm3r13NL2uTCp1mtrxRczVX6oK%2Bkqdg0mm1hDckL6qTiDA7d0b%2F6Lm454HCYPoW4iQ%2BX%2F63eD2xamR58q3AR%2F4sNyL19N%2BtlaAxqw4nbjJdlMQNJ4P1%2Br9I%2BVSV1alHcm%2BED1m%2FWRburroMreQf%2FxfB0MSi470V6DIOlRpQT%2B%2Frku5zMpdqElB%2BmVoLUngC36g9M0HOusU9X7btyYfUGfEqY0UpoPwlaGHl7humof2q4O9eMM6ajv3DOKL%2BrVZWhYEwcH%2BSEGcCXD93QImMe%2BbNd6ev4PKgcUkJFU%2FteUm8TCYqvDcB5hwek9bcMUmcVkaPDClm5%2BuIl0JuoTevpRE7OI4rwEO%2FMAAWIP7u%2BRIv0HUXRtpBpYoLoOYQVJcpVhCCotOlQR2AxDdwsKSTH0k9ZfWhTco%2BZcUzG794mFTfp71EKh4tLf%2B5tutCHXV1GCu%2B2UPehW4czq7z4K9A7LHP%2BkOz8MG6poTsuEaDdbsSpXb%2FxZC1NE4kz4fVmq%2BxfGz3MTxxoo%2FwVAIuG66GZxwqcHJqLOTU7mE88wLD61ZOMDDZzZp42NeQSO6v3hS9vHaOzuq2ckueckQwOJqdebCodEiXKvwG%2B1jow%2Fc%2FZyQY6pgFyVBsgGdHVOOa7jH%2FG1yW6xz7Q4WpyrtieXY%2FCYhipoWQG30iHlpiKqExND5wYSOH3ED3M%2BxLLsqId3ahpdoejc6bjNz%2B1vAtzcSbYdg10Sl101r2Q8O2xSU0DOYguCh%2BRJebN48VmjT7C8zjx9vLorZFVyfGwzkho39JWC%2FEd%2BAeA8QMtvM2fEIiuoX6MlZpMAu09TrM%2FO6iaj2I%2F63meHQi3ZCRa&X-Amz-Signature=51e718db08d22212abd3fb94bb94837dbb02e8d0c48ac93bf3c8a8990e8ea72b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

