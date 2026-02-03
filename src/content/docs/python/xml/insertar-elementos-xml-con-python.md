---
title: "Insertar Elementos XML con Python"
description: "Aprende a insertar elementos XML con Python de manera sencilla y eficiente en archivos existentes. Mejora tus habilidades en programación y gestión de datos."
date: 2024-02-07
updatedDate: 2026-01-17
tags: ["xml","elementtree","parse","lista"]
slug: python/xml/insertar-elementos-xml-con-python
author: victor_cuervo
type: doc
topic: python
id: f6e4bcdf-d35b-4220-9443-4fd2bae309bc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/xml/insertar-elementos-xml.py
---

Ya hemos visto cómo podemos [crear un fichero en XML con una estructura](https://lineadecodigo.com/python/crear-un-fichero-xml-con-python/). Así que ahora vamos a ver cómo podemos insertar elementos [XML](https://www.manualweb.net/xml/) con [Python](https://www.manualweb.net/python/) en un fichero ya existente.


Como ya hemos hecho vamos a utilizar el módulo [`xml.etree.ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/) que nos permite gestionar los elementos [XML](https://www.manualweb.net/xml/) como si fuesen objetos con [Python](https://www.manualweb.net/python/). Por lo tanto lo primero que haremos será el importar dicho módulo.


```python
import xml.etree.ElementTree as ET
```


El módulo [`xml.etree.ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/) nos va a permitir mediante la funcionar [`.parse()`](https://www.w3api.com/Python/xml-etree-ElementTree/parse/) el cargar un fichero [XML](https://www.manualweb.net/xml/) que ya exista y en el que vamos a insertar los nuevos elementos. Por lo que cargaremos el fichero de la siguiente forma:


```python
tree = ET.parse("data.xml")
```


El siguiente paso será el obtener una referencia al elemento raíz del fichero, ya que será dicho elemento a partir del cual realizaremos las operaciones necesarias. Es la función [`.getroot()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/getroot/) de la clase [`ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/) la que nos permitirá llevar a cabo dicha tarea.


```python
root = tree.getroot()
```


El fichero en cuestión que hemos manejado tiene la siguiente estructura para albergar una lista de nombres:


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


Y lo que vamos a realizar es insertar más nombres en la lista. Para ello, los nuevos nombres, los vamos a almacenar en una lista de [Python](https://www.manualweb.net/python/).


```python
lista_nombres = ['Victor','Ignacio','Elena']
```


Recorreremos la lista de los nuevos nombres para poder ir creando elementos de tipo `nombre` que vamos a insertar en la lista. Para ello nos apoyamos en la clase [`Element`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/) que es la que nos permite crear un nuevo elemento y en el atributo [`.text`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/text/) que es el que nos ayuda a crear el contenido del elemento.


El código sería el siguiente:


```python
for nombre in lista_nombres:
    nombreElemento = ET.Element("nombre")
    nombreElemento.text = nombre
```


Una vez que disponemos del elemento tenemos que pasar a insertarlo dentro del árbol. Así que sobre la raíz utilizamos el método [`.insert()`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/insert/) pasándole la posición en la que queremos insertar el elemento y el elemento en cuestión.


Podemos indicar las posiciones contando desde el inicio mediante números positivos o desde el final mediante números negativos. Por ejemplo, para insertarlo en la penúltima posición añadiremos la siguiente línea de código en el bucle:


```python
for nombre in lista_nombres:
    nombreElemento = ET.Element("nombre")
    nombreElemento.text = nombre
    root.insert(-1,nombreElemento)
```


Una vez modificado nuestro fichero [XML](https://www.manualweb.net/xml/) e insertados los elementos pasaremos a generar un nuevo fichero con el contenido. Esto es posible al método .write() del ElementTree.


```python
tree.write("new_data.xml",encoding='utf-8',xml_declaration=True)
```


Este método recibe como parámetros el nuevo nombre del fichero, el tipo del encoding y si queremos añadir la declaración de cabecera del fichero [XML](https://www.manualweb.net/xml/).


Con esto ya tendremos realizado el proceso que nos permite insertar elementos [XML](https://www.manualweb.net/xml/) con [Python](https://www.manualweb.net/python/) en un fichero ya existente.

