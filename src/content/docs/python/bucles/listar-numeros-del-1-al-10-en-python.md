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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL6LJXD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxzSYUUeOB7zfJcyu9lxT7npN0v5eaWs%2F9LpaTKz5%2BwAiEAlDb%2B6JxRMfDfPSCtyPSniwcyviWE%2FxtK57JPsb1UpNAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCLncj4h%2BnUFNzn9SrcAwpkAMPIhYAh3cUqFD0HkIE0hf%2BXZjeokXAylLLRKBLZvt6%2BcHByo18eVcPgIz11pgf8wL7FWsUkVVw%2F6ifV%2FT8HcGdNRsztOWxAXwVAaY8P1JHSULcDFDD5AhSgqOpG4%2Bg8f8rp0vVj3zNZGkzpxdR3T87MelR72QrEcTYg0TefAvJuaKc%2BQ61IueaQYparMCtkop5IKHwo%2F%2F9e0SxunvlrxdhPxTjP%2F6KWm7AfvCtD9vQc7J4u62JJl3%2Bi1FoXteMHd1tP3tdtKVg4o34VbLhGFBNFT%2FI9601koT67jNfWO10jKJ3lJGlFXWpIX66HVhn6Wvx76d5pd1J%2Bru7POpxAnZ%2BSVfyKEXoFEZZeItorRMwVF0VHdlN1Ne%2BAgU5%2Bc8E41i4O3B4uBeN4qLtOQrZjznrd7KjGv5s3cvtE0iTFlJHHEqEhNw%2BmG7lYxifWcA61u32mU1C2Gu7qtRKYScYpLeMb0hwo5MDk8gU17EwgBZ92UR8xEZnCM1KIw6T44ilujrHpNGfnY%2B8OhJgBqjhhJXv8wjALE5waUCEfn6vyiyaNZqlksXeWrgKhDBGcw00%2B7QGWe0FjvZz7HHbtMRk%2BRW9wINQP%2FA53TYTganQ%2BPiKZ0OTi1iYbFQ%2FjMJjl3skGOqUBBWL07tErFghtGSMs4Fx%2BT6YgM4%2FJODpTz7L1ActZC5mqtE0axBqCA85rwAi9CAl5FQhIGQajPYZ86ICeiDC6sBgcTac6HFrUAO%2BHd3ONmFO1gmBrx2yFnFPRPo%2B%2Fpblg0RkvhCBjJ3ZHn6g4NgNCZOdCMLWL1I%2FH7RI%2FeRJWwZwdUMannZRRVmiW4Zd2ZxDvggaD03p%2F5nvn4uSM7d5c8021rBki&X-Amz-Signature=fe6c8f403808186754da48a670923d9248e1af0bd3f1f3af1411e73e9dbad731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

