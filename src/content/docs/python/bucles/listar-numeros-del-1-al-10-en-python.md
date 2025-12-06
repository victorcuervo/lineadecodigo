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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRITGLNV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqpAgKWZ3dxj9gTQ%2BLCaX3qhnbTWu0CSQYIiJRYOmw%2FgIgHlI%2Fp8pVt%2FapDnXrRJkKN3hu9y4W60GkPC%2B%2BqD6uiPUq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAUx8mES5WPEcCj%2FvSrcAxrU1JVY%2FDHyepvz9YbkkI%2B3i3EUGQAUYwchyGxFpr%2BPS9wFfS5uouCKUZIulFBht1iHntLLCENp33%2BumlXnJdXeQSwsXwIJRT1uo%2F%2BbxxqFCeBTYzi6U7dCQS4fwcehj1VOEHmj3BOb8hJHCg3NhvyAlPeomml1cNDSLhFip1UAIB6RP963%2FwZrYch80FP3yROTY1KSc0iTw1rigdwMuvPyUgwJ%2BRySVhVY2B8drABhN8cnflN4yi0tFFXBtmzqbNlNTE4%2FA0QLWjjbfpHH5lQLIMIOWT08yVswBWugB3qqrGV08M3Drw1GqrqF3U2EpBus9M5Pu348sWgaw%2Fh%2F2AkciL3Dn0YUwLDlVMXkSoAPCaIh3irvS1%2FAEkzip0Z61%2FpRWTUMsSJn6T6AWh0%2Bqf2%2BChs51351ePXnk03gVo8dyxfl1dLTyWBaROyx5oEL45pm%2B7cK0lgMLR%2FV6BPZAAtOUMn5xhO5zxgu06NS0TN%2F1eAW5Bnx8t4Cbxtltts6VVaUI1yDMog%2FW64aiHguZWehLAe%2BEerdRJkYyjKHGtFRfyeSZztlMWGD53gvZkCYNOJq1CKWjrfAUwo5ExzJ0fEG7Tq6eRiizwNH%2F2RYZF8r7t8q3kWSKMQLnCU4MJOnzskGOqUB5MOhn9i26nAP%2BVGwT%2F1dJGlKOBsp6SfDnt%2FA19sqgIfMtOMdDRHPiy4Ue6Cpv1YrIlucuRu9c5SvK7FC2Ky3s4j3xBFYZlzzUNGGSpoUfuSi120fGBgIotI0i8ak0JgoZtzAX3e6dTGvOh1AwejWnaTmfa1%2FauCQQCS%2FkXXFOnOKN855N4d8Y%2B1c9TSN%2BvekXhNe%2Fzr4UzIJr9pxyVuI88fQYYWd&X-Amz-Signature=beb39d6a63a0b39924acdc4ca221d649fa0c9b4475a7d9c800d323b40166d350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

