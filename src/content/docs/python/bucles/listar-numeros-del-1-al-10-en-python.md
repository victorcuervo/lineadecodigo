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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374DQHZ4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA74JYFehHGtVb0GEHY4f6g2PP%2BgXlMB3PYBx5hkzOb0AiA3Sf%2F0hIPPlCf2%2BPtLWsctBTTf5dpo5aNCQmOaUoPjjyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzMekWEEBusoegehrKtwDBcwrifDK0OyuaxDD%2FKOhW3Jp6ewZaj3AGMEEOUl4iiFgozgJ%2FHEn%2BRMTQ4vwLDUOU3%2BaGcNdPyZOEWzaTmnwvBTzawvn8Yg53oUjeGMYHYC%2FUR6Bn6%2BrvafaovqIF5urjnoGc%2Bt21ZOrZ4en%2BlpMMKv%2BHNY%2B9Oyc%2FJ097s8RDmVNk%2BbcJN6lCP3R34vognhUdi6CzHhs7f%2Fu3ADRNpNdF4PeLZSXNpC4hJPAqPA2p5DA09w0%2F7smxKn8MTvkZ91n1K1XNlS%2FNpskYCEHk5l%2FwdA9XJlpPhkp%2FDaN527fssc1T%2BU8FMFqaH9I0X%2FmRtEd3WhFJLAUjf5Sg3OPs%2F8%2BL%2FFk0iJ6Rfe%2BqViGKL8qs%2BStgZWOp7pi22dst887L14gTOANw1NtEg4WswPZ7QLeDEdZwnG7IoJkkf%2FgBDR13gsKviOJ%2FxKpZWgOVqoNBpvokE85d6FESnp3ofGLfVEmTsOcmmU1lnhkRJhm1sC8EJ%2FEtbs4iK41rO7p5ZJn9zGy3dbWvroqTbcBX0fqSDNq1P%2B34dn2RLmemZ2ZBjC%2FzqnQgc3WtCe9rprXxTzpqvW3yY9Q9lTuCLhzuYF7n57S%2F%2BjBTxU7%2Fw1Oq4GZTIQnW3DDmvIW7dLEajWVfSIwm5nVyQY6pgEdUvauc1UYXcw%2FHulDVX2jQk05pa2x7TLBG8Bh%2BqAubxa%2BXmx2B%2FVYBQ7DxrM3b3xPxflfPRI93w376kcaXzfH2LUGsrl6LYpugwukXvseoqyLfardnRIPSfpIIuyENKft0jyS1rLUB9%2FVQpn6WbJfrRAqC7w7esznPD71G%2FM%2BObUF8hxZh9UtIu01XT6%2FnQ%2FcrnXCAkouAAqx5meQPc2F9CkEMoqo&X-Amz-Signature=8d33cf7c59eaa3daf0b33b2252889b010d106099610a200b5d6e30ee52b3750c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

