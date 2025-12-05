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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGGHVV2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2DrXej62nF3u30F%2Fwci%2FIlUu4f%2Bq37ARbMj3EIQlTUAIgJE%2FwyQdWbDuB%2BbI29b%2B4b%2FT7maeIJHC9bys4yyj673cq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCyhdurSgzplzls9zSrcA7jrjJDWiX3qkXwqHJLjU%2FzrcJYXubzF0HtUConAsexo28SXSFkbbdu2JUD1PKUuYCRT4D86jSunrlTd9P0aEFFWqgWvQ3Z4Vxme19tJFjbBX2F35EPtCzy7H%2BnCdrVWaNS1j8d%2By8aFhJWGZZi9d8vV4YWqKDsyiR4id6fs8C9a9MrFIIngJZ1sGS%2FLM6K6qR4cg6Hkg%2B%2BGHP9g80W1yuiJzvK6Dr4sfSG2Uzr3AbobL2%2FjOZVN8fxb57K2X%2FZab7%2BS9o9%2BBCUAu7F%2BKlkXSan7J4ZnqdlFwOLOWS1ohLe3mTCSSO4hC33MM8pxEX7xhOg92sy05HZcrfGidTnf9hr4zmiSmN55MKoIpE4%2Fat0tl8DvoHdfILcPNMsmyuUtIJn1gKfbZwsJC9lIQkLcAMIgXgTBPt6LqL6U0AKhqRe%2B9YxwVVJAlFtE9amhuo%2BjyayFyhei9AXFpl7tvUWh15y4ozLMPvVZmxyB8v9Vn0G2NooCqH1PHxOlGb7V3roEYoZ%2F8WUTewV8Be%2FfRnT0S9B%2BRVumF3XV3s0Ep%2FEtE5TV5gSkwrj16QfuewWmECRqutoQnIGImKxk6JYrR%2FxVB0%2BgS8kT6SgNswFLMhdy%2BkHQnDHZ9EaNScZUsAy2MLT3y8kGOqUBB%2Fhn8mlhjkCKsNyzMGZEQpTxSlsRiJi%2FW8N1dv3w%2FcQswGziG1aD%2BRKTUFhiheimp8wLx9cLy7jKvPnMjcBREDDznMevrYDwGsGGeLsy2S%2B5fgxM4Yo9uqhKMvH3CEpw7QVot1%2BqCL%2Fv5xuJ8CKbeZRY8YrAe4x6cboN5qf9aHB01VyjekuK5nl05aeYaCPlwhPwflh0n5qVn09HlBZo2BungRh4&X-Amz-Signature=88cd46b996565d9aea2384171d684d8af34eccebc54d91cba767f24204e9c3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

