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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCZQCFP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2B2PUoQjNsKhLjNFtR4tsvhNdLi4McGakZht10awPQAiEAmnqy9ewZmOhfG%2B3wCy4qNXHVzlJ%2Big96cLu%2FK8C2EcoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMs5B8A9120vx65xircA9gU5rhTUMHf7q%2BUvQrqNsgJCOQgk5te9l6sWC06mhOuXr8Wgj8KjACGa4aOZ0AXsyWD%2FaVgrUepH%2FebBDvAZa6cS3lXLOu7d4ybXA9bqiXJQNsFoT5VRZj624IrSq1kLm6oB29Pn3o%2BsIPNUqUW7R7H73aUhjIK6o%2FftP164gE9RtddYuPw7fExvtqpXarplbw7P9gHpm%2FbYDU8aQGcFGO%2FxarHbxrLg8dGtEtEGi36LCdOdbB2l%2FHp4a%2FhkFETfOZjn31nfSmwRrvtJdYs2BNGAJNq85fAjr4LlKEcwYSn8IPZQCmy8vXJxlbRpGdrEDwJpJgFaJgxVpK5VaKZKfBML686%2FcBp%2FrCdCpQ1XIa0BOcqZ%2FWjANFhZi2hMSEPFBrff3W8%2BQ3ak15Zp%2Fn5bLkq%2FlSVEcQUeKLCjSZkahqMIBIauDQDCaWusDVOA5esZRiqBkFCPyVdV2CcrvvZg8l4AnFg3oqgtiMXjObL63gCcDrFJIDc7qcn8F4TLl9l79ZLDc%2BoCeaqBjoWbo%2B2ZvkyNpr3y6k%2FA6wDeFbj%2FknmaTX6fBrtsCNa71aQSJp0Q5aA2uRcZh%2FYjIlmbDD03UxJGrm%2B%2BIZpfLBDqTvObcFKb2V%2FZlBPd%2BSn7ZzwMNH90skGOqUBPH8IXV8ojFqd4hF8Rs57DE8ppj4x9v2ntLinJcUj9gDvyejKF3T7%2F76zlEoPwklhG8IgOtnc1FguVDzFyCB%2BfCCfhQ9N%2BncM%2Bw81z4%2FfuEj1IB2gzzF39fawlRTZVA%2B6VVHN1pei3wVxKUYgVi4rZx4stNdEKYMsE0oDMaNF3Jd48P%2BjDnB6wIxv%2FH%2FaqkwzqD6IIXoLI5RqbjkUypcrlAHJ7fVU&X-Amz-Signature=fa588db51c6622d6df0593da3d2f4a2d4288c21858d7bc1ca9178896c60024dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

