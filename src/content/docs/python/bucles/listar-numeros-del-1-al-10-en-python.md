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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZ76A6F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqrVmgQ6qNO%2BDQyHNg3D8hAR8pam86Kk0sJMglcGNbJwIhAOQqT2XVt%2Bcv5vi%2F17PzS93Wxa4iqne6gaQMFiDvNXstKv8DCGgQABoMNjM3NDIzMTgzODA1IgwgrXAY8QLXK0LluVcq3AOG5dL9tWUtVh7oDCx7MHsztIncUFfE755n7IMSIsx367%2FOtbB3NsobgzMgvGWO099haIFVdUKm%2FkxI%2FRj8BVK2G9872fFNtB98l%2BVVoBUpIf3y1724FZxMfoOnO1cfPkNycEItZQZiJs1e90xap5pqaRaUDWNan8Vm8bR1ukuQbPT%2FPYaHwa9BDM2cSfP1ajHfXQ3Ndc05VVMBR5tlp4g%2F5KnTB9rQvG6JIfS5kVaN5eiTZc0sl%2BWhnzk2i3kpZE7GrAaLtYZ4e6tHg%2BN0CthIoJfWg9UOe24PxmOrhiVcNcXdZ1DqnFhucWxEQuXJQUoatd9%2FF9Xox%2BCKH3DIzNa7ClstlzlB9b%2F1N918z5Dd%2Bm5Zo%2FxG0u%2FnbgrKgGPV3XIfmZoxKf4NjvU0UqWOnMT1yHeH6BeocZ6n81i6cYCe%2BQyevNsbtHVb%2BSOAKzaVUA06%2FBr%2FsvPxrySSRbaW8%2FGNdxe30wfcNsq%2Bel%2FYTNeZ0nTrn4bcDkYNy%2Bhaikkwhjt8mbCDzrmuIoDSMfKROeOnTgop68T64YdJ1jH2%2BoeLkeNsbwPo4sOx3JsNszX4l3fTYBMEKjx0rsWPsr7MZnm%2BJ2qlyGgkuLnNz4GL%2FYS97%2BJx3f83pqf8r1WIyDDmxc3JBjqkAZ4n%2FmkPh2jkO1RNwou%2FZ45zN2l%2Fvi4GXqBUXj7hii6Enii3nKzj%2Ffi8NDT1oUiqxzysxjjiWIfope%2FNbwEsYXt1285S2IW3kWNKUrFMtHHPev1fqPO%2FjRE%2BasZ9y7DlOpgxdX%2Btdo%2BdCq85eIEd%2B56iAJ0vnV0Mm2pDeI78lVwOyp7mAB17CvrQIExHCTNJAJbUuXpUWikOwxBtpmbA%2B2isdYkQ&X-Amz-Signature=16fd3c262d0555c092e077d51f7df040a52a9b931b01aa07b8e14f80b9613e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

