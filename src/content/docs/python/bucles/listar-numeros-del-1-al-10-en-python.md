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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ2AEODS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtGdxBtzeIWk2%2BYek1YPCKIzVXnBG4oPGKiGXvwxrfGgIgJ3m4Vl8kgw7qbtRFQwpZEd7oqfCZ0eCOhZG1e2Ps80gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUXa5pXRfBv%2BpfQAircAxJ8JvblRuaSb1V2TxDsBFk34ud9AqcfogQD3%2BfNlQjrDFyrr6ebpepymzKub93F6SIgnXwVR9%2BXW8ZrJAtTeXtV12n7BaW2g9X4T90ajQs40lFuP8wwdOLF%2Bnp%2Bl31ZpVOSx00%2BZ%2BsSxbvVSPKvVpL3d6mpTn%2FDqo9NEyr48rj1K7nj9m9uKLyuTNcczysp%2B0IKXDM9Sw3aPMhU08lSx%2Bh3k3utAmcDY3fPXhn3oaRRqwqfBz6tjrdQo9xCrlwMkgrtY3idosXJUzYEOl3wiI8IdgaJ0j8%2Bau6lfpKEwItOFCBsaF%2F7VDWn0CynyfJ26MH13TbP7NPM71bJ4%2BwenBLC%2FGrxBJddLfZSGpkA5fRXA%2FdUoBKd0buWZnYFSoD51Tmce8%2B9AXJTgOBHEN8otvU%2BqiKpNPBGZlxYrhZSmdSvSmCM8AsT6UlvMxRz8uLWHhmiKREMCjoPLE8PFopA0kpDG2Gni8%2BwWMbuLFZJXbXIsmGWVKwNJ0oiJ492C1VGQ0Pm1Qwp7rODqFmCSXAFAkkBH4zS7%2FcgYjAA1FGSYqAD72NsO2tE3dN%2BgTh166SJOTGAXvIXu4BNI0vdqaY80%2FOSBcz6mSe1h07lVtG0lMYqxySqdnx%2Bz0ht7oXFMLD%2B0skGOqUBaxw8i4uC16Tltn6N%2B9vEp1TXJqyCXyjmZwT03cMCnxWE8F5g%2Fs%2FJHYgVEaLVQmejMA%2Bfy01OS%2F8jf%2FAfuvwhq7c%2BOdyR3lzoNviwKy2O4DI%2BD4rdxtFt8Qs4hgSe0MAFHNpYrQkG7f6I1wlk2Nj%2BIxYVCaUQlhOeWds%2FdXEwiTwiSUk%2F4PyyFe%2BHmimHLTkNPSZKzK638aIlFUkFIM5oQogubf7J&X-Amz-Signature=9c63df7d3d2b7a0622e8b3b8270255c440a3f24ddd8fdc53bc7df8b2c07964a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

