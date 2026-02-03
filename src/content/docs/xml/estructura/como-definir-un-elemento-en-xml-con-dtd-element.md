---
title: "Cómo definir un elemento en XML con DTD ELEMENT"
description: "Uso de la estructura DTD ELEMENT para definir los elementos que puede albergar nuestros documentos XML."
date: 2013-03-20
updatedDate: 2025-01-24
tags: ["dtd","element","pcdata"]
slug: xml/estructura/como-definir-un-elemento-en-xml-con-dtd-element
author: xhrist14n
type: doc
id: 2c8a9dfb-adca-815f-b79e-ca6a32132b87
download: https://github.com/victorcuervo/lineadecodigo_xml/blob/master/xml/basicos/dtdelement/mensaje.dtd
---

Los DTD son documentos que nos sirven para definir la estructura de documentos [XML](http://www.manualweb.net/xml/). Los DTD son básicos para la formulación de documentos [XML](http://www.manualweb.net/xml/), por tanto usar DTD es necesario para tener documentos [XML](http://www.manualweb.net/xml/) bien formados. Nos ayudarán a definir los elementos de un documento [XML](http://www.manualweb.net/xml/) mediante **DTD ELEMENT**.


Dentro del DTD estableceremos qué elementos puede contener nuestro documento [XML](http://www.manualweb.net/xml/). Imagina una estructura [XML](http://www.manualweb.net/xml/) que pueda albergar mensajes de texto, es decir, una estructura como la siguiente:


```xml
<texto>
  <mensaje></mensaje>
</texto>
```


Tanto `texto` como `mensaje` son dos elementos [XML](http://www.manualweb.net/xml/) que deberemos definir dentro del DTD del documento [XML](http://www.manualweb.net/xml/) con **DTD ELEMENT**.


### Declaración XML


Lo primero que tenemos que hacer al iniciar el DTD es la definición del [XML](http://www.manualweb.net/xml/) con su versión y codificación:


```xml
<?xml version="1.0" encoding="UTF-8"?>
```


### Definición de elementos con DTD ELEMENT


Acto seguido pasaremos a definir los elementos `texto` y `mensaje` con **DTD ELEMENT**. Para definir elementos utilizamos el tag `<!ELEMENT>` mediante la siguiente estructura:


```javascript
<!ELEMENT nombre-elemento tipo-contenido>
<!ELEMENT nombre-elemento (elementos-hijos)>
```


El primer caso de **DTD ELEMENT** lo utilizaremos para codificar elementos sencillos, es decir, aquellos que no aniden a otros elementos. En este caso indicaremos el tipo de contenido que puede albergar mediante un tipo. Esto nos servirá para definir nuestro elemento `mensaje`, al cual le daremos un tipo `#PCDATA`:


```javascript
<!ELEMENT mensaje (#PCDATA)>
```


En el segundo caso, **DTD ELEMENT** nos sirve para definir elementos que contengan a otros elementos. En ese caso el contenido será el nombre de los elementos que contengan, separados por coma y con modificadores que indiquen la cantidad de veces que pueden aparecer. Esta segunda estructura DTD ELEMENT nos servirá para definir el elemento `texto`, el cual contiene el elemento `mensaje`:


```javascript
<!ELEMENT texto (mensaje+)>
```


En el caso de `texto` pusimos `(mensaje+)` para indicar que `mensaje` es un subelemento del elemento `texto`. El símbolo más (**+**) significa que el elemento `mensaje` debe aparecer al menos una vez dentro del elemento `texto`, pero que puede aparecer N veces.


### Modificadores de ocurrencia


Otros modificadores de **DTD ELEMENT** que indican el número de ocurrencias son:

- **Sin modificador**: el elemento aparecerá exactamente una vez.
- **?**: el elemento puede aparecer cero o una vez.
- **+**: el elemento aparece una o N veces.
- **\***: el elemento puede aparecer cero o N veces.

### DTD completo


Finalmente nuestro DTD completo sería este:


```javascript
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE texto [
  <!ELEMENT texto (mensaje+)>
  <!ELEMENT mensaje (#PCDATA)>
]>
```


### Uso del DTD


Para hacer uso del DTD desde nuestros documentos [XML](http://www.manualweb.net/xml/) lo haríamos de la siguiente forma:


```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE texto [
  <!ELEMENT texto (mensaje+)>
  <!ELEMENT mensaje (#PCDATA)>
]>
<texto>
  <mensaje>Hola mundo</mensaje>
</texto>
```

