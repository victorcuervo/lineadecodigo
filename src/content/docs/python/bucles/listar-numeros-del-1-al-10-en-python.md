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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIGAWXOC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF00JObyQo6%2Fd0DbzciYbSaXlHh%2BqiPRWLoWX4gzOo6tAiEA9Mtw848lLZvoiedNt9mobVTcE9xGHAn7BhaSTihR660q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMzep7GJpoP8%2Bv%2FHqircA2gKbs5JH%2FM1RI63P%2FthbzYBcntvy3F5rNUL9dspjbHo%2F39R0Xp0Olrr7O%2FP9zbbio3a5j3zKHYFbnvNWauH1G3QV%2F6uVwxZQImLAjHQuTuKLY%2Bj0xVWOy5DLkXkGT7dtFFLCvAfD2zeWZalvtcG3VGvN99mKPoq%2BcB7a5%2B4%2FtinLRGZBMd748efimXRO4wBU4%2F9TA%2FvJYMjt6Lqon5k7m7K5qVV7Uwk6tKl2%2FV56ESp1p3EoH0ZsiBIC6uJNtuNkRtEnRwYwPh%2Fsvoa0m4j%2BTZoqSL6%2F%2FEcNkw53GP3EqW6x%2FyUKQe9%2BTCeptVxKwmZV9gXyQHbzIhX97INu%2FdBJhNj4FafPRu33Qh1qodT5N5sM8huFeMbi6ZnFJyQiE6lB%2Fu%2FxsTNzVfXSM%2FW4cfbCaEnJWOkEBGh%2Fm9vSR7%2BXH8HG09wsHQBTAVp3QsO%2FXm%2BaiDYgynLo8yiC%2Bs1jO%2F3d1P58%2FuK8YneibbAvXG%2FEKvwzHWnjwze4eifQ3jgka1B%2FR9vZJwMyezvgi%2BZV%2BB%2BWmg4CKPQCiUzJBN4hWTq5IQLaXFr8hg0YCbX%2BHCyeDxgkGjZBNqRS8RagJFOTxWbUJz8VkzmamYRVoS9Bi92wUi6VpXJAAoCIRemqu%2FPMIbrz8kGOqUByMXgAUtIP8eEbw72U0bj%2BCoY%2BtbJSTtlmRiCKUqaxLOoacZR39Jueb%2BayK6iab3q6N4r6IO%2F22aV71UR99uweDEx%2FD9oUL3kwyFFEkaM5qNZ0rckkmuDhGLDgs8kvocpaZHW3vWowA22EEVGOC%2FXabuI9gJ%2Bb9Qg31w93Syr1svT7tHcTQ%2FPXdnwvJtqr4L7bB%2B%2BDHj7SRdPyrPGRJG88GvJUFpG&X-Amz-Signature=4e88606dfef1d49ffeb1ef415dc8f428c8b1aca3deaa7a559198ad1bc9816df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

