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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVLDWTSW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERESu4sDhvIb%2FOD%2Bpqyulm2xaFPPmrEdZ5IESdg2oh6AiEA1dQZ6Ag%2F5t04UptZTVTRzod9fkK9NITFhgAg1%2F18oBAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIQ2xsf%2BuGmxuC1srSrcA0ET2EMq8EC%2FX%2B18%2FTHuKbDUHOm5JMma1Q4%2BNM3lPCRLWbqQOs99nvrsbxHXHfFiUedvbt4ZX7LteK3hRq6J6Hy6eeYIY1TZgTGRe3R6WTOXh2JRwWzkW227UpG1cvnvDpACBO5vV6Uvy5TLa6IIbEgKtyYzW%2BpTSrfz%2FLbIRBOvxoLQZYY2eYMjboJvv6i0%2B0LsUx4F64YjLJNmLY3QoWtCS1TyQ15xSxjJ5JasmleBpTEQoYgcoT6k8Qg87tjn25iqEb0BiB33jABd20Wy59weoFKMek35MRFo1W%2BMrHeFbUh%2ByTqwYj7BftSVqlUjVbiDPj70ib%2FxpGFbpOkPi8wu4yUSz%2B%2BgxY4Pkwv8bWYRsRafdiVZJpvEEbGF1o2zIGn2yg65MNAnkyA2G%2Fbpkakp5sEltroYKFK707n9uPpaUAK5EsVclWX%2FYQWks9cPGehS21JaubW%2FnRSXy%2FgABJselyL9CcCUiRijVfvRYaAIhlfKkIyzNGO57PTA6Z4BEOVwYu8lOPvfcRd81u41L3q%2FALYBC6cb1%2F52fduRmneIueGe5L9cMumELv2G4R6zqqP%2Fvea4l8SgxMW4GntfwGPejStn7Q1oCD4uZbRT5jJe5MhBhiBI3rZ38S%2FTMLKm0MkGOqUBNbbc857N%2FpKDA6w54nNHClFJfKYJCs5D%2FFMDrUHfuqJCJqErF%2BVUZXo8NdM1JJteLp52ys57KxklDiY6DPYq7PBr8z5brlgoS6Sq2t1yHyoPOEWYwVm%2BvW83n2me4V%2BKyjGVV9%2ByF2Ogqc8XaRTgclh3GN71F0Lrr9ftfc5EaDuTAuLJFb9%2Fdi4hDDWPjKPQpim%2F%2BbbSgxOxoLSix5rWsvpgpZCI&X-Amz-Signature=b0990e0e3a64ca8178cfc8e4037057d812d5b4bc26e73737432773c2245507dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

