---
title: "Definir la estructura Persona en XML"
description: "Define la estructura Persona en XML de manera efectiva y aprende a crear un DTD para validar tus documentos, optimizando tu manejo de datos personales."
date: 2007-06-10
updatedDate: 2026-01-24
tags: ["dtd","doctype","element","encoding","pcdata","persona","standalone","system","version"]
slug: xml/estructura/definir-la-estructura-persona-en-xml
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_xml/tree/master/xml/basicos/persona
topic: xml


---

Lo que vamos a hacer es definir la estructura persona mediante el lenguaje [XML](http://www.manualweb.net/xml/). Para ello tendremos que hacer dos cosas: la primera será definir el DTD (Document Type Definition) donde se declara la estructura de la persona. En segundo lugar crearemos un fichero [XML](http://www.manualweb.net/xml/) donde tendremos los datos de una persona en particular, los cuales deben de seguir la estructura definida en el anterior DTD.


## Definir el DTD


El DTD es un documento que nos ayuda a definir las estructuras que queremos que sean utilizadas en nuestro documento [XML](http://www.manualweb.net/xml/), de tal manera que se establece una relación de validación entre el DTD y el documento [XML](http://www.manualweb.net/xml/).


Nuestra estructura persona se compone de una serie de elementos. Los elementos serían:

- Nombre
- Apellidos (dos apellidos)
- Dirección
- Teléfono o Móvil
- Fotografía (opcional)

Para definir un elemento utilizaremos la etiqueta ELEMENT, la cual tiene la siguiente estructura:


```xml
<!ELEMENT elemento (tipo)>
```


En el caso que estemos definiendo elementos que van a contener texto, estos serán del tipo PCDATA. El código será el siguiente:


```xml
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT apellido (#PCDATA)>
<!ELEMENT direccion (#PCDATA)>
<!ELEMENT telefono (#PCDATA)>
<!ELEMENT movil (#PCDATA)>
<!ELEMENT foto (#PCDATA)>
```


Hemos definido los elementos por separado. Ahora tendremos que definir la estructura persona, la cual contiene estos elementos y les aplica una serie de restricciones. Las restricciones son que los apellidos pueden ser más de uno, que tendremos teléfono o móvil y que la fotografía será opcional.


Veamos como contemplar cada una de estas restricciones por separado. Para el caso de que sean 1 o varios elementos, se utiliza el símbolo + detrás del elemento (apellidos+). Para identificar que es un elemento u otro se utiliza el símbolo |, de esta manera la estructura será (telefono | movil). Por último veremos que la opcionalidad se identifica con el símbolo de cierre de interrogación (foto?).


Con todo esto, la definición de la estructura persona será la siguiente:


```xml
<!ELEMENT persona (nombre,apellido+,direccion,(telefono | movil),foto?)>
```


En el DTD solamente tendremos elementos, y no incluiremos ni atributos, ni entidades. Todos los elementos, quitando el elemento persona, serán, como hemos visto antes, del tipo #PCDATA. El archivo lo llamaremos persona.dtd


## Crear el documento XML


Una vez definido el DTD pasamos a crear el documento [XML](http://www.manualweb.net/xml/). Este le llamaremos persona.xml. En dicho documento lo primero que hay que identificar es que es un documento [XML](http://www.manualweb.net/xml/).


Para ello tenemos la siguiente cabecera:


```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="no"?>
```


En esta cabecera tenemos 3 atributos:

- **version**, que indica la versión [XML](http://www.manualweb.net/xml/) que utilizaremos
- **encoding**, que será la codificación a utilizar en el documento.
- **standalone**, es para indicar si el documento tiene una validación externa (valor "yes") o si no tiene una validación externa (valor "no").

Lo siguiente será indicar cual es el DTD contra el que vamos a validar el documento. Esto lo hacemos con el DOCTYPE mediante la siguiente línea:


```xml
<!DOCTYPE persona SYSTEM "persona.dtd">
```


> Deberemos de tener cuidado de no dejar espacios en blanco entre las interrogaciones y el texto o entre la exclamación inicial y el texto, ya que es este un error muy común de programación. Nos ahorrará muchos quebraderos de cabeza


Después de esto deberemos de insertar los elementos [XML](http://www.manualweb.net/xml/) acordes a las reglas marcadas en nuestro DTD.

