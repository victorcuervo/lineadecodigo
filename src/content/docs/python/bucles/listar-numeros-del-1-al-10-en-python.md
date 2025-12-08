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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2EP5H5K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjCYOBYC1rW1L0L7sdAVSnI35O%2F%2BKP1tworjCxw3%2B34AiB2x2%2FElmAnK5O8X6IhT821mov884MoGC6OBvdEjfpsPiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsM3B6eoJxWOdUt3NKtwDqsmjerZS0YMmlrM9YHP5l63QW2v8EQx0XEwuW2cZfNHCS73MIayMe2qgzbo5AUwpoOII03JjTI9iOcl%2BQDu5x05zoWM3GJuLVst0eoPfLTA12Ob%2FMe4mYytJYJb4aKbNcT8LLkstaUijmlIOZtj6jfIcEV%2F4sYd%2Fy8y%2FLfelK7F5ebNIvetsFgN26Uw5v0F9Kiq3V1xEKRCfpKh0ASnjRgAA%2F85%2B2L26VnSfvVFFN%2Boi8yZb7Alu7%2BYaen0Z7F4an216vzwKAkysR3d5TIMks5iKIn5rnq8IJxr7hxmzsQWTKT%2B%2FWs6Ou1R0w75aO3t2ygG%2FLNNA59FwAaWwg8lQY4jnPN8oSK%2BwbLvVcbsuGuyL6fST7o2qYSQZmSv9cNS43fxVCu7xyMsrDXt0l%2BKxlehrKav6ap1VulzEb9yyMFtGPyuQ%2B4n%2B%2F0lRn8HqY6LWug8HzWPlNgTSNAnQTID9Gn%2BQoAoUgh3GiPiVqQi%2BzwYTN3kdxZOROCC4XQAIu1ZP3IB7hcTwFA3N927PDkAy0QA32%2Ff9zKyZ8eBijaasgYNEm3wcDJvsYtaO8ztcOb6Brr2GBpXIxS9R7BZ3zfthOztMeRxOIgb7bpap0asnJp4lQSOxdlDYF3ZFes4wvO3ZyQY6pgHILurc0zGrjCJMSvl0jIop1wWIid%2BTcxgo%2FztLRYl2BXMgvpj06Nka5te%2FSpbXAfdBuigDxoTzrYkk3mpznm1LTAPDP0dBTNa%2F9UJ9Wkan42QRTyZ8YQYI56JGwB5w1oIvFDyv%2BXyNXdQNenIfVa4FCBnRvA61y6EkBThBa8VnKunT7l7wZrgXbHGJXU5wR0Lc0hr%2BALte8yhpPFGimTkn96khB3UT&X-Amz-Signature=116bb93ee6189f43a3d359d8e00883edd41b1869e313257947d71bab1f289d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

