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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JBXTWY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDChcwhES6cfEZfYUxIZ7kVJket5A1NvUZJaswi8urMgIgKaBunmexjBNzLrXR0XDf9lGKlLVO9BiBcPVSjRyDXeIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVUPKsXQOXVdEv%2BVCrcA%2BDTyqf%2FzaftLWo4XdQekrvR5EeL4E7Bmag0QAJQGxhCV4nETm01d0XV6biNOvPCcu7AsHSk98XMT4Jdmh5822JrfhpvsFd2o5GjAkFcUBa22vCUGZsai55pV%2BYW5tQxSmKEhdzw87TuGu5Hb6sxDWLs43drK6i2bXE5cBYzExJmTQHVGF%2BEliq%2Fn6LUkIYLnH7C2R6IUanMcQIKrHsxa75Eg%2Bi%2F2WK5zQy%2F6MCPAA2cqIGT10ClmbU0skTdS9vHj6gYoly%2FYNiGNKgjpmbX5HEzac1ryGYsbya5nxm4v7x5k1WeAXTXKdWpleDVhZsauut%2FepJtgLGfPAoulYpnPDqR75hH7L%2FeJq3j16HLJHwvgNaDPDID8XTdDYgYJLKy4IqVoHNel50zIhyL677hUXvOkwpiwLaaa4DG1PhswcFAeqJcmI4LNPs7pwY283nB0ZxDtsOiB%2FfCSV1H2iVn1XHePcw8nCyREwv3CJmLLv4%2FSX6n%2Fu24dPe3f3AZG30pyjHTu73idJzual2W5ucPhG12tnOZKrbcEZWWHZ%2F9ntsi5CbLTP6wE2V0Znt44pZKrF8RC5%2F7bM3nTy3%2FM0E9PeYAt0Z2bPVKEPosDMyn%2Bg1IsUUKl3dbDqI9cDUJMJP02skGOqUBU0IV3onJKX%2BNikdajQMPlebCCquXFDJlk%2FkNXAM4hP0wLNtWCAdQ8%2FCOFneJ4Cr4S05X%2FfJTqAmUGAcw8MoPbvgjaTa9EL0tMKMmzTY2yvjZX2mth73v4Lqzv4hOm6LJxamB3f1Kn9GoFtUnZE%2FmR4MEDMjhY%2B2B2bF5BZjdB%2Boz1%2FqiqTugrcYG%2Bz2gtIHKEKrYEVMt%2FiCr6CdAM%2FB6a7CENZPg&X-Amz-Signature=4298698fbdf692fc3bcee44e6d6a3b030092f50fd4517ad72e4bc1de19afc6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

