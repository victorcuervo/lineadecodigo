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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPDJ6FJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzBZfkoQbblPnHvSyySnBspTdZquE%2FRp036PVsvjb8NAiEAg4oJrzwWi8qEZyw5U%2FZct9GaVGYRR9F3ssGnSj1Z70MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqA12XUxKQdtn4A8ircAz63r57vCe6WutCQNxnwWK3s5GR68Dv7M%2BD7RNWhSHwn8Y8dbFidxqVOE8oqEgPKJSDTn9NUhOqaboDPCzR0lt%2BKFjkwM7Qti%2Fv64tfO7l6unlXdEAmZ6PTeA2QzZJ6%2FA4o1HDdxyXEYAzmWoTtw3FH5cZn2VMSp1zXkWp37MlL1P%2FDJ9En26UI6d%2Bd3xoWLf%2FvG461Y5zwlr3zS14zxB4TvbZSEgTuHT%2FPxxm2hkVo%2Fof5MAgS7hfNhLU92IF6yYDBw4oSFmewXIL3sKJIGf3KmGM%2BQHmIwZQCS%2BqxKjXpJWz5hnIx%2F%2FKOm0UgSBes9XLMb%2F%2B5oDoEFfbFUcSPB6mjvISufK%2F8ZD%2FOmFHxVYYAn3NNbKRKe1Pi7q0zvwy6vnPAVUsjlVLFgNnp8A2z9Ux3p9py8%2FrDqxJy6nMYfH99XL7OG6n59E5XSJiqriCaOKTbKjbuvtIfFsgzkNQqvUOQOM7wlVIlAEEPQULRh4k3Zj%2FUAa%2FhVKdzs41iTWIUO2f7NICF0%2FiIYk9eor1fKHWMSMgTn4y5QMQ0mW1VACGFgyV29Spp08RxKQYrv8%2F%2FJvu6s8xvLqw1OVnt1zBafXnVIRNfqomaJ%2BVRa96gMfzzr6tthseAM3wgNvElIMPL90skGOqUBSvfEB%2B2uttb9nZnW15jUB%2FW%2FyerL2rsyXKK5sUbIGej2wCCX3nAApO%2BaLiVCX65dYCVP4yLclSyMPFm1uKuAI%2Brbth7KrkuK3Qy2Zol8TICmIwfCIomYS9E3a75YXU98EXS5IgydfOk9MnuLoQnyo4tAokZ7OxOfQh8unyr5i5dBnhBXmcNJ2hWryMMOSTmCpFkF0GqHw8HN2fr7xJQaq0rPjczB&X-Amz-Signature=a410f40cb19291e0de8c2333a9678b742b81e76e64a9c8e2362fa9c2e54c06cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

