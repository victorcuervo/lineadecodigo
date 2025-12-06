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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J4XOF2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6saxz4qC6Gny8LzCR13K8n3Kz%2BPY0Y7B9L09TA6XZ1AIgZHCdUzAUlS55V2G2KDoAbUKa2hz%2FSIVwc4cI01nMCNwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEijgTq9LIu7uWPvLyrcA1k0PIqHze7EM2ouVUx5mBOZzibNCTZ%2Fk%2F1Z%2BI%2F8fJfB4AQeCCQx0xVb0aBtIB1ttN3BJ6FFiqfvr5XmIs6ZcFDAhv4v8um4sjp10wzUgWdUUgKCgiLRZlP0neIScZA%2Famg%2FKUAgTEtcWBrq4K3q6gZ4nW%2Fzx1jy3388jDLKE4znpliHfOTWqL1JozgvKJeQRibgBwxM4Oxu7PjkPo4WQw9VlVorGPfTORJLbQ1LYDh%2FUYmDEU4ph7v0QV4OpXG9qqma1RvCs11ZW09pSXSjK%2BoKSy2D36c2R%2FNYvC6ePfqtLxRFrc8gmEOBPAH%2FdtN%2BxDuc9qmn1BO0NyjuqRMuCXGxMVBaK%2Bj47jphfZZ5nAJE8CAs8ptjZAWzPok1J2sZXgosH7Tk6lRLfX7gQa8CH%2FBhsxU5bfQcUcyd0iOxx%2FhuqDe5u%2BVB%2B3w0Qi%2BC21JbyWuYEZtSTSOmrK%2F4DjxqanEJuCJCOh0cS6jXNGRwHSUg7jQwWjpzzyDuXpDMrp6IZkC7iwmhCrjV3F7e4AKPYQp7DpWVV3sMH2ww7dIvodPz5fRuF8NOy8fl%2BteYv6HQOhKHoYO6%2FmFJN1RshHYbeLAj6cs%2FvimvhHIsQBS2awaWns3mZjrJLq9aj2fbMNCm0MkGOqUBXvDlrx0cZmcta9mL35oZPFWg6Gb0Qstu2zxOhIMwhtP52MpC%2FmmWe5d%2FIH8heJmHnItl%2FG7rhYR5%2FbOp4z%2Fthm%2BnJuRdCG9xHCkpsn9jcmDIj39dfPbCbSgfFFMiNBRUwAQoH8yLDRzQYv8XKQo%2Brz7tkLJ4C6jR4TDsPcHNYnwJk7HXs6NSGu2fAa%2BDlh478c4AljSSWA%2Bt4UEOtxBXkLaut0TI&X-Amz-Signature=b60edb32f906a6dfed6100b5e5e9545c5ec31c61b1959064dd99221ffd0a0730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

