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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K6PJZUY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLpE8rfc8xpA8MekVKNxljX8ie9RrvbMbjKIi%2BcANyqAiBYHKlze5ydN0W1vCjD8K3hePXq9GRCC4P16bslgNnIjSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWAmbZG5YVo6YAr%2BWKtwDJPu%2B3IBcX3CmgvCLzT0KaVutH1Q%2FhN%2Br58p2GiFtk0xZ%2FE5EWCIylJ%2FVGKgyJPgfuQxQflSHCNeXzwlzJkyghhgNKEmx%2FRB9O49Nz%2BZEqids4emeOVpZrvmvsTwh%2BSQGA%2Fz2RNjMVdIqDipqRVJ87p5%2BtcfBttetuAAFmn7TklQcAekHmIx6XhvPJ6LVGrLaIgkmiXOQXCru3mtjcJc%2BpPMNtN%2FI1fw2qT%2BDi58XE9pYHLlPcI1UIRg6rEx4cyv3v1%2F0xyilfaZXScF257ZDXwFKK0J1%2B1bq18SkhobNWXHQIpEiyVw0%2F1AIOfi1IBRD0pCXOVIXNXBOouqtnfatlNF4K3oqZDt6kzEKh9AJ%2BWLtUChOpFCjiTLA1ulf8oAYIST%2FOeKcjqnfqYXaODW5b6KXOVRrUZm62la1kPwawFIpnWUUACM%2FQOPHdi7UUCDmggSS4LfJ5YDg6b17YJEZJ7MQcwZ7jHvVWN2AuFj81iUFpQ3zNPya2S3GTY%2FgAHiwV4%2BWQ3WBPCBwazXla9r0wewAUkf1BKBfg%2FCcNx2IGezwBbzQqxhUHiBH3ij%2F4u%2FNmLVm18Mmh2MmEK6acVWhwcqggP0l4BHMtZRI0e6hium%2Ftt3nAaDLtEz%2FF%2BIw%2FrfWyQY6pgE8IVqJDGEN0jsNTPdHr8hUKqkI38ZTbkbJz5zvhgaWO778aUfHS49OmO6qaLKya%2FVHpaWDCh2eUrY%2BI%2B3%2Fkq%2FR%2FFscw%2FDXPwswpGVDsAdphtumSqa3056p5HW5ToF%2F2EtOeE3ytplDW2E3aIFY6e6jr%2F1wYFFZj8wYa%2FBVu3H2kFMf2hFZ7D1VbNDUCiIdPC384mWNlBKsQPnsHlwhX2wb94WL17ss&X-Amz-Signature=d7ab32559d955a3fffa87e8cd73180b0682683c76d41f17be4879cebca0b9fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

