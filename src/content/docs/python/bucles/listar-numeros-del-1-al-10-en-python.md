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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UT3L2TI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjHAHcj6FBCG6MOIJN325D6zIAV96T8te%2F66QfUKHeZQIhANkrzN%2BpvtTyUTb9XGSfPuiVcBzogFvwPnBD9N5SUAjTKv8DCGAQABoMNjM3NDIzMTgzODA1Igwu1qQGRuux0si26dkq3APRSJc5mOiKX0%2B0x%2B%2BOXHV3PTB%2BOQ1cXA%2BA4AEN902%2ByIwZAHMbEki0ZscloY9vSQ1smwlDSY3XGGuF072p%2F89ma6dXnkZkpMQ0Di%2BSL%2BQWR%2B1ORLVxu7ZV0qEZJ5sjNjF61DUzYIr8hrJwaD2cRfUJUHuDNpzwLcS03O8ZWCjNlwVXt%2Fx2d578BL22y7i%2Fjh9RUo21f1%2BnjjGtE5Hq0vQb28hlelZks3BnSlSQVZeCCmnscAnvhYLUi4kr6uSnh47eWQaryabUi2OX6bAq3jbu8Ue8%2BvVW2jJrtX8WIQ0UznFKu2TchZAS9I7FBZNcaaKgMhnO%2BXxcJZH45hpvXAnVtrEXfh9koNZfN2lScqqzthPlwv2YODS4j%2FqYfq8DGXYmbujIsqi%2BLa0DVAOzS0apvKZJSqt76LbVnoMgr5vIiB99uiTiSTgQLRgiFwOf%2Fc5wilQuW4jkn9RtSidRTlI3czHRauUnirC1OQYJ1aIHHRqU433ir6u5jvQ%2FVpjLPcOG69LGVrlXtQmo0oJ4MSbLE%2FG06O9FLLEs6G5ZhxgJK9RH06pM8qR9j2aq6ML8Trm4dbIOwnc555SDpccL78HHuoSI5eWM2FtzFJS4GKoAPXdj7d3YP5e8YVlwTzDY5svJBjqkAQkcyGxto1ZPT1MBAPJtq6vQI3Kazb89WdRb6CNC42movOjIXKVg0RH6RiFpEe7a0SMtJhdjdeA0B1psolnhmnRZic4AqL0sKZdCLWDGg9lzMBbePax63iSuSIaUWrbx2eifXRJJ8Kew7BqPOlEzgR9QVhWvPLkAehccZip6843Sj7SYMPHG4t%2BmZ9%2BjeuEnTDeGro9vAcMRaaP%2F3LxG7ViyaSpA&X-Amz-Signature=214dc55c4f5b5b2d63011732e1f6f623b3caa19ff996dd72fe7a17d440b914fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

