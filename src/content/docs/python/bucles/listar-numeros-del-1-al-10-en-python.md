---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2YFPIG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICMXGnIsdTXweehusWJjyVAhtZ6XA%2FtAXNQn5rDkvAqMAiEAmOYc37oDRfRF6Up2sGihXra3P%2F4IPSyIjRuKwznZanwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGKcsa%2FpreFqUqly0SrcA5G04XoHsGWTax2YY6y%2FiEYpglAaB1Kyo%2FKCVFRdtQL%2FY57M8W6UFq8cduZ6Cningr9gTtbXNfZUMYMGVR14ITTONa7epJtFjZK2raGLzWEVeMj7%2FeqwTpMC2jbgOlzBCcswDde6c22jivBTEpF3oBfzunqVleHJyvWkCT9vbKNSUgNeLXAMzKx5QTaA0GUROUprXwRRqYWxLBUFX%2BDcdjv79PQmJK%2F%2B%2Bgo%2FuJzXZ%2BgqFXFljWiS70tyAbtoYBFNiCG41%2BQTjLsu8yNRskzXl5f6kuSwBaxmUgcKuKutrqkPprYUAZSnnUuPYbrfQYQ%2FXGhHmhy5t4vYSmLgW%2FRQox67quF%2FS9wn%2B0yi4cXXfk1W2w%2FpId%2BCW%2BcDmsEe5apt9Sl5du8I4UZlNugCPr%2BlA9Cw%2BooYrIOPIUIasKULbi6mPnKaAGnnn0blPuoaYrB1dPsvauHOh9MtU13EUCjIUfQdvRa%2FSHvv%2BryHfszaEyEo0H5ztgxnPYJ7F8VcfaDYuaQCSj8oNmE0rpv4yAVlZjJlw%2F30KQeAHrlKtz4Wp1vi6V13AEao1WGB04AaH0%2FMak3Iu3J%2Bb0qtaQmYE9%2FNa8M%2BBOLY%2F2Xsor%2BPC4YaMH5oTmBR8Lt38WS6vTxvMICixskGOqUBO50Dx9z7prfQUi3UwrAw7y5EavFYbIqzb6oWmkbxhvYzrLjbaKwxKp7N15pxmkZ5oeU4SJZLnUtAV2vKqPFYORlqnbEkCAo2lY0TsRaQtFa0%2BjfO4N8%2FJ4xgIFDInhWCqHnmJTdIRuVHsPa2weH72xMt%2BhrJD5WWDgLt%2FQlgVNHrgbttMS0S9Yt3p%2FSE%2BpS4ZyKmHWm5G3QyA7NXNF28WxSkxGFf&X-Amz-Signature=820c061ddddee236cd8640d9be09116060bad0bb41af567def9248795d983dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

