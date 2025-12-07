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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLD4YJX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFd1BV%2BFNBKu2Rl9U1EmMjXCaAUBESgGdt4L%2F0QkRt%2FcAiEAuWCU8te4NHcJFMElFBTB9vkiiRTeKknP0MO1KGnNahEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1ZROPL7oZSuyduAircA0XtEtpf6SUMDJ3Banl9E%2FoMVfZwHFFGImI%2FfHEFubNjvahginyEq6CHnAIBIMkXhGB90ODSWyfwXu4TVyUEKFrljCXXYZVfuMp%2BLJIqkhqBARIgjFyXH17PXNUNL5ZzoYvEr5umPCRER3%2BLArJw3QnQGvBOt8GpBaXOzDeZ1MMQiruv3hGtuHYZ4q4HcDMq9Oc7e%2BcA6NElbIe%2FG88WTfM8tegzMa7JGVg4Sy7lz6JLh%2FP9mKkzPZl4y8hqvfTVKbemdGhHKFXavmzL4%2F1tyebV19OojsqropQOGkdjGrFhHlpfHstMHemCkNHi1NVlCuCatCBxCTFAho75t0uPFkveZXoPm82mWl3QZfuZWIeZ5q%2FUOrn55k7W0UZ87tn5tnHa3YHvgz1hzkt2W8o4dqPkAqaidlBzK%2FOW0h0CxWjqpwXDh%2Bw1ERpERe10Dw1Rfirw6Fiw0%2Fdg%2FfIRJKNJQ%2BgQEjmsTubq1ej%2Fe0xUiyZUpjJpVZAkU2hlxaGy%2F6WhcgvvQI7nFpn5Lwaj0OkDMSe06zsmK5%2Fqx6cVRCNGktE4tj%2BRbvsj1Abs5cl4V39CAoElL4nmLNGGp3hlvUqlJn%2BHt2N8MKn2ZoX5K7Ix5H0V5kSNlCk6WZuC0hNKMLD%2B0skGOqUBxygslgS7SXyDsbuJAnunjzt8OvmBWdRCNzmrJwdFKzYv2AMPNMhxTm79FNaMeiBoExSIEV%2F83MHFbC0uRwzgY06D0VOfXx95KQ%2BK4BRgRKj5V%2B8%2B8txy6oLvm9LldeC5puF%2Fp%2F%2BK1j7vrqs0%2F3jCV2Op3kmGOMYVWniKUBqfpGDdrRrzJjFRJ535REqeVAuXGx7eIToiuKrGB%2B9K9uOn5bWL4VIL&X-Amz-Signature=b2699cdfd5a6dc6b2fc9b49d5b8fc774d11c8e5d046f6d7fac1c23fb728d8805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

