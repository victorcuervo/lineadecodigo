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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSWFMSJO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSq7Y%2BpbeW79GHOlx2Jf%2FRUB5pmfYkTBlu%2FEViev1oogIgEmL5fJ3cdA0NtrGVkFODXAOc1Y6oIKtn0JJdmME8x8Iq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJnS7lIje8oceiXzXSrcAyLpneMjNspvMmAjm0rWtwzMwJCri34z5KEyCRe5dBLZTsmZDSU1UvH%2FBq%2BimISX1M4vt6k%2Fw8BgXo8wgg746EfaSc5dVO5yQgESMvuovN484m%2Bi4QM8uvq%2FUyYgJUJkPsaF3LHQugHey2%2BfJZbEOPzQQ7U%2Bn3T4gyFnF1ixGCBcQcKyjkR%2FJrLs63Ayt5L5d1hu9Sn9KASh%2BCN5d4wjpsSQuLnBJRLHc1RKb%2BgJFWuyCNqdAaJr3Cy6jkI64p0zLSyGvGuvZk3QQLoDY9%2F%2F4RzC0EMOIFmW1ESiAYfnJ%2BMpiWuvdyttQa%2FYqNN5NOA%2B59uetzB7xIEwCRCnEL8bEkJxFfDrhBmCZP5qHIDCcX9%2F7FnVl4oeS3zECWVJ%2FH7gjTFt8hQJmNRQ5TSD8k05qAeL52ih2NlBiEDHRuIu9Edqa8WIW5966S4nqHneyPq29cVhvip91VxDqkTAh0a6CLjl0fZPzpnp264dkrt9L9VjA19GHRFgc4AP24oc6iKcbN%2BiUr9mAuUumZ9fYnZDLAgmcyKJ1YH1sdxoqxZtBvs3emxF39O5pJBbejCFF%2Fvp0G%2FBUIJLiseD4xhLH7n2TUJaNC7Q7bqG62z%2BlAKQKdlpc7fOvTktnMFgXmDJMMzGzckGOqUBirfCOU4OMqHMS8G%2BcfYqQdpu0ligIBp80eN5m75%2Fz7MQ5o89WD%2BRv6AQwxHhFOK0l7C6Fxfkd3lMHUz1JViD7697CiOkGo%2BDeCDjGyGPegs17ifI0YusuXZ544L%2Fyn3IZ9fFKnmyBomCnxqKcBHZlmLdjhiLnvpV5FdnxgDF2zFABgy1TOvfaYn7Hsx44kYUc6PJ3JOBfgPH6x9OMVCSOP5ChTwg&X-Amz-Signature=032e01ef75c311e82ad68b2e01a57f9c3bb784e09e3446b2e5bb0a048d950744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

