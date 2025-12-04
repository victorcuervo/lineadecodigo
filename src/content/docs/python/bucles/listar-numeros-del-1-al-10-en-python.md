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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ5ZWF7R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDSWAN0vVbQFP524tWqSsRZjFrrW0ulOI2QHz0OgcaK8gIhALAV2%2BJ%2BUJZfHBqlRMx6muqWBEfbJVjoqcKHDsAOLKuLKv8DCDwQABoMNjM3NDIzMTgzODA1Igwj10uSH7Bi9Y7Of10q3AMe1cTLox0DpQHJwBnsn7Y2%2BnJMAtrqcpsngWmsxXnPAcLSiNn2MnR7vo5iNtGfFAIN6ikdqucmG0Hn9FKKBGMjVD6UKj6%2BGnQJLbsXIw%2F4mEIvSS%2BGykX03%2FKiDqnPzjVQspVOvpuKkyPAP4DMPZ8ueD78n%2F3OWfd9e9R90Afr1PMJxs95pNgNv8dlqkPsgJJQrEWYqRtYWdyHZA61igqUPWzyOU7oyF4H95GMx%2BtuX4SOi9OImxEMy2jzoTbf94ViECKygKJ%2FGhf33Q2ykjMU59EW%2B1zzUm5pcVMsE4mDTyLLueMP62P1%2Br%2F1k2XkCydFpDWCo7HIBGD8KYsegFbgcwAVAcV1WhewoENF7x%2BDjcoXdWzPLG8BSERo%2FtY1E05%2F6QqBuAiEwh7jRdrFMXOee8Ea07bXDMr6lsp%2B1Mf2p0eNifu4bM%2FHmYVteH8MuDKcnWOIzTUOFCJB6XemjL78IiLfwAm5NvWuQ2wUTd1vO9r9H1WUN1j7LLVm10Mxldb9Cg63eAUu%2FbQjaeQaxiFbs%2BUuX%2FZWvDHx9SXmNsfgIT5eVSNXoNMbLj1PPeOIoUwivcrTt61IAX2in1TZ%2BgNmW42MoKL0QV1SdmdmrC4uHfh0QNu3jESCicUw7TDn8sPJBjqkAdnVuBA9YnP4Lyqbn04Id0nkqqDhWTg8jLJJU0tOmlwN0glTOI6sZnod8sC9M%2FJpQOBa8qqidOuJW9ZVsmfSdmkEaB9pxZ9v50%2B0Xhn5hBEG%2BDO6LRNjOzu8RIgimZZB93s8SKPuDuWdk8Sj1M%2Btz7lrzdQ%2B7ysFg8zSM3N0hO2Mhuy9ebrjM0GyEbeXncDRj%2BTevVQE%2Fd8I%2FdwoNMwRAKHxT78D&X-Amz-Signature=c700eaedeb6dd768c13d93eb1f69312f3f5415f153aa03d5ae14855e224ef7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

