---
title: Actualizar un fichero XML con Python
description: "El artículo muestra cómo actualizar un fichero XML con Python utilizando el módulo xml.etree.ElementTree y su clase Element."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos visto cómo [crear un fichero XML con Python](https://lineadecodigo.com/python/crear-un-fichero-xml-con-python/) y el módulo [`xml.etree.ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/), ahora vamos a ver cómo podemos actualizar un fichero [XML](https://www.manualweb.net/xml/) con [Python](https://www.manualweb.net/python/) utilizando la misma librería. La idea del ejemplo será cargar un fichero XML que contiene una lista de nombres con el siguiente formato:


```xml
<?xml version="1.0"?>
<nombres>
    <nombre>Luis</nombre>
    <nombre>Curro</nombre>
    <nombre>Javier</nombre>
    <nombre>Marta</nombre>
    <nombre>Virginia</nombre>
    <nombre>José</nombre>
    <nombre>Sonsoles</nombre>
    <nombre>Isabel</nombre>
    <nombre>Quino</nombre>
</nombres>
```


Y lo que haremos será buscar un nombre y cambiarlo por otro. En este caso cambiaremos el nombre “Curro” por el nombre “Francisco”. Así que manos a la obra.


Lo primero será cargar el módulo [`xml.etree.ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/):


```python
import xml.etree.ElementTree as ET
```


Una vez que tenemos el módulo importado pasaremos a cargar el fichero [XML](https://www.manualweb.net/xml/). Esto lo conseguimos mediante el método [`.parse()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/parse/), el cual recibe el fichero como parámetro.


```python
tree = ET.parse("data.xml")
```


Una vez cargado el fichero [XML](https://www.manualweb.net/xml/) obtenemos una referencia al elemento raíz del documento utilizando el método [`.getroot()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/getroot/)


```python
root = tree.getroot()
```


Ahora pasaremos a recuperar todos los elementos de tipo nombre para poder buscar el que nos interesa. En este caso el método [`.findAll()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/findall/) nos devuelve todos los elementos que cumplan una determinada condición.


```python
root.findall('nombre'):
```


Así que utilizamos el método [`.findAll()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/findall/) para recorrerlo en un bucle for para poder ir pasando por cada uno de los elementos. En este caso, cuando encontremos el elemento que tenga el nombre de “Curro” es cuándo pasaremos a actualizarlo.


Cabe recordar que el atributo [`.text`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/text/) del objeto [`Element`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/) es el que nos devuelve el contenido de los elementos. Será utilizando este mismo atributo [`.text`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/text/) como podremos actualizar por el nuevo valor.


```python
for nombre in root.findall('nombre'):
  if (nombre.text == "Curro"):
    nombre.text = "Francisco"
    nombre.set("updated","true")
```


Además hemos aprovechado en el código para insertar un atributo en el elemento nombre modificado con el valor de `updated` y un valor de `true`. Para saber que dicho elemento se ha actualizado. Nos hemos apoyado en el método [`.set()`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/set/).


Solo nos quedará generar un nuevo fichero con el valor resultado de la ejecución. En este caso el método [`.write()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/write/) nos ha ayudado para generar dicho fichero:


```python
tree.write("data2.xml",encoding='utf-8',xml_declaration=True)
```


De esta forma ya habremos conseguido actualizar un fichero [XML](https://www.manualweb.net/xml/) con [Python](https://www.manualweb.net/python/).

