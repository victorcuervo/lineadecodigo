---
title: "Definir atributos en XML DTD"
description: "Como definir atributos en XML DTD para poder ser instanciado dentro de los documentos XML."
date: 2014-02-12
updatedDate: 2026-01-24
tags: ["atributo","dtd","elemento"]
slug: xml/estructura/definir-atributos-en-xml-dtd
author: xhrist14n
type: doc
download: https://github.com/victorcuervo/lineadecodigo_xml/blob/master/xml/dtd/atributo.dtd
topic: xml


---

Siguiendo con [XML](http://www.manualweb.net/xml/), tomamos ahora el tema de **definir atributos en** [**XML**](http://www.manualweb.net/xml/) DTD los cuales son útiles para poder tener atributos a usar en las etiquetas [XML](http://www.manualweb.net/xml/). Lo primero que se necesita para poder usar atributos en [XML](http://www.manualweb.net/xml/) DTD dentro de nuestras etiquetas [XML](http://www.manualweb.net/xml/) es **definir estos atributos en ATTLIST** en nuestro archivo de definición de etiquetas [XML](http://www.manualweb.net/xml/), para conseguir esto debemos seguir el formato adecuado para declaración de atributos [XML](http://www.manualweb.net/xml/):


```xml
<ATTLIST element-name attribute-name attribute-type default-value>
```


Donde se denota ATTLIST como palabra clave de definición de atributos luego **el nombre del elemento** en el cual se generaran los atributos, luego todo esto se completa con el **nombre del atributo** a generarse, un **tipo de atributo** y un **valor por defecto** a asignarse automáticamente en caso de no tener ningún valor definido para el atributo. 


## Tipos de atributo XML


Los tipos de atributo [XML](http://www.manualweb.net/xml/) que se puede usar en un DTD son los siguientes: 


| **Tipo**     | **Descripción**                                     |
| ------------ | --------------------------------------------------- |
| CDATA        | El valor es una cadena de caracteres                |
| (en1|en2|..) | El valor debe ser uno de los enumerados en la lista |
| ID           | El valor es un ID único                             |
| IDREF        | El valor es el id de otro elemento                  |
| IDREFS       | El valor es uno de la lista de los otros ids        |
| NMTOKEN      | El valor es un nombre XML valido                    |
| NMTOKENS     | El valor es una lista de los nombres XML validos    |
| ENTITY       | El valor es una entidad                             |
| ENTITIES     | El valor es una lista de entidades                  |
| NOTATION     | El valor es un nombre de una notación               |
| xml:         | El valor es un valor xml predefinido                |

undefined
El valor por defecto puede ser uno de estos:


| **valor**    | **explicación**                   |
| ------------ | --------------------------------- |
| valor        | El valor por defecto del atributo |
| #REQUIRED    | El atributo es requerido          |
| #IMPLIED     | El atributo no es requerido       |
| #FIXED valor | El valor del atributo es fijo     |

undefined
## Ejemplo de atributos en XML DTD


Un ejemplo puede ser el siguiente:


```xml
<ATTLIST payment type CDATA "check">
```


Lo que estamos diciendo es que el elemento payment, tiene un atributo llamado type del tipo CDATA y cuyo valor por defecto es "check". Podemos indicar que el atributo sea obligatorio, en este caso tendríamos que escribir lo siguiente:


```xml
<!ATTLIST payment type CDATA #REQUIRED "check">
```


Si queremos utilizar el atributo en un documento [XML](http://www.manualweb.net/xml/) sería de la siguiente forma:


```xml
<payment type="check"></payment>
```


## Código completo definir atributos en XML DTD


El código completo para poder definir atributos en XML DTD que hemos utilizado en el ejemplo sería el siguiente:


```xml
<?xml version="1.0" encoding="UTF-8"?>
<!ELEMENT payment EMPTY>
<!ATTLIST payment type CDATA #REQUIRED "check">
```

