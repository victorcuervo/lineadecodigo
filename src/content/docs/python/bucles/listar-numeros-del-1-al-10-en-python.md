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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ZV7ZJS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCbm0Q3joQsVs9R%2FnN32PgNT1FJez94%2BYv5ux8GbnzHGwIhAIUDWaIs5lPLF1kV2sgsY1soB%2B06mOSiUFVMuiLtlbIGKv8DCEUQABoMNjM3NDIzMTgzODA1IgxiR3KiTNTXs%2BbPIVQq3AP859tScP4Yipsw9YJCFKxAbB7glSkNNs107dpXpruKWUeGWjE2GFH1Uvo0R1R1Z3G0DHTI%2F4PCNnzBqIDoxPHlQsqj9KRGr1VBJ76L2vV%2BHCdlYWoQhDmekHnJNvaobLg8Py%2BrGpWxeYAfuDo%2FJHZPuUGbWdCJxh7rxCZWfa1%2Fe%2BSXu1ZmP%2F2%2FC7K8uFy5zzwVmw08x7Cnii4Lo4qKgWpwzc%2FyGWhZKYYoXzY90SzG6PFd7jM84dbHe%2BqQ0%2Bw2wBg8E9EqabReVaOBL%2FH8Bkq%2Fuyf8GMibVMZOvZy9VhGjcReKcEOFarBxoh4%2FWlFhIoMZLqU%2Fgm1IYPLDyDhUGXgSOrJs9EQ%2BFifYofBjWHVZhjxBVI4fuKp6Eel%2Bp%2BJDs0RBNsKlP1zo69LZxvE%2Bcdt%2FmFdz60LWaBnmqkrm%2FTwCfH6d0F7mr8twl%2FvofBAR4oNt6gATleLwa9gGqDo%2FmX60YQEBO18b8BXgR8yUJ69%2B%2BtTfhpzlWb8wRC0La60iv28RIOU5GgNpufdR5Qif%2FEwleQNj09Go5IXvE8AgqCOFy9d5kV41su7nOGazJeS%2FlCC0fluJlgY9sdMHnHz7g9B3zueYu11DmCUXssCkscQV1v8enYZoQ%2FVBGAFgizD35sXJBjqkAbxlXOnWtW0l93ItLsBPfWFZJkOB1P3ujQ8ayBxaDCVgiFHuSbwO6vsZisiEN84JNeE9vbHkSKaun1I%2BNIpQRi2emt7QyoIqf9feYguDLP4e9Km9sA5T0Da6zQ6UJGT37nca%2BKxrxHbPVGAn4G7qIpDzkAFOk5ByE%2B7qpt631MCIFiiRxHAS2ih4UWbTejhVAAjg6Gk4bRD39MMl%2FtDLmA3jrunK&X-Amz-Signature=82a335c7603fa28fa50f09dfa6be56a150cddfebeb3347667048ed6876c5f4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

