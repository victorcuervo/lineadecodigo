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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXVSI6X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc0WViCwNOgiPRPxZGvPgCJa0xBwYeM2V7l%2BNebvsz3AiAR4CxVtVZPDkLvrRbU5kJMObjULzQzzpLJ5m0DwB3NxiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf2BlWichw6NjddyIKtwDeOP0IymSfkM%2FJAKvzG8plVrDKjyz1zZepbux%2FvSpsTwFowmWo83NfVWofQlF%2FRS3atzyxxbHTcc1KrQ%2FcvBS0tHBsHWxg4hMu8VZAuSD%2Bjus3b3aAGg39gNI5IRK%2BYAynP9hIH40IhXb3pGL9O8sbemgUz0hsYapfRheIILpMjc6jzctDNyRwGQOmF9IWGP7OsOlVjLlrzbHaf02Zr%2Bqo8GksMRX%2BDRmJFzK6%2FTb64O7WpzGDShaNteG64ykjohgly9%2B4D9oakw6WLtEK9rhVSf0vzA%2BdPyeuUK2oM%2B3nkOVXYJloWZ5q2Ar01eiLFWQQTU2Le4MLK7HXn8Wt0XTr%2FSvx9WSxyrGxRUeUPjQgrXQCD6whDxgI1Xp84npfEO26yhvxJf7Jp%2FZHbVYE8yoj9w%2FteWnc6ilCbzJFH2fpjRF3TSqd%2BT9BHPxXo%2Bu%2FfESnK4XoMZiqV2lV3ElWbm3uurmNuLiKcDV5k09fc0EoSc5IVffxAXaaz3dFZLD%2FDuoExDSk%2B%2BtKx7q%2Ba6jpEGPCqkyjsXXVc0jKnUJGUqMkwSshahw5Vp6Fmfin0ueLK6f4yVP57l%2FhuaRPS2MsR%2FU5iz%2F7ejaDAvqJ3JCaw%2B8NjXtZP0TpEKUQt0L5u4w8cbXyQY6pgGrLrVuSZv8L9io0AVO1hGZeU07dz0fg5RXKIKHPEBxw8YRKDGyc2jlI7kXOGg0x%2BwmPzJJec36rjNHmKhtyBN6zANvhheKwB7166mWNqznQ0IKpKbmC60S2tFjR4pSU747EkJ%2FfXdV1%2FY8Y9PRq02hqAGv5JX0LhHPWc6LsWC5Z22kmyvneIElDZTg9820t900O5boLeF%2BA%2Fa%2BIwuQEzfsKacw68sp&X-Amz-Signature=940116e18fdc219f8b90dd9235df18adade3b2e4917d96d1cc142c0e0abf56ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

