---
title: "Acceder al XML con SAX"
description: "Accede al XML con SAX en Java: crea un SAXParser, procesa eventos con DefaultHandler y lee el texto con characters(), con un ejemplo práctico y una nota de seguridad."
date: 2010-04-17
updatedDate: 2026-10-23
tags: ["parse","sax","defaulthandler","saxexception","xml"]
slug: java/acceder-al-xml-con-sax
type: doc
topic: java
id: 2c8a9dfb-adca-8108-9475-c5ed6a3c2a4b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/xml/sax/MiPrimerSAX.java
---

`SAX` es un parser que permite analizar documentos [`XML`](http://www.manualweb.net/xml/). Su característica principal es que está basado en eventos, como el inicio o el fin de una etiqueta y el contenido de una etiqueta.


`SAX` proporciona ese conjunto de eventos y nosotros decidimos qué realizar en cada uno de ellos.


Cuando se invoca `parse()`, el parser llama a los métodos del manejador conforme recorre el documento. Entre los eventos habituales están `startElement()`, `characters()` y `endElement()`, que notifican, respectivamente, el inicio de una etiqueta, sus datos de texto y su cierre. El orden de estos eventos refleja el orden de la información en el documento `XML`.


## El evento characters()


En este primer ejemplo, volcaremos el contenido de las etiquetas que encuentre el analizador. Para ello utilizaremos el evento [`characters()`](http://w3api.com/wiki/Java:DefaultHandler.characters()).


```java
public void characters(char[] ch, int start, int len)
   throws SAXException{...}
```


Este evento se dispara cuando el analizador encuentra contenido de texto. Los parámetros que recibe son:

- `ch`: la matriz de caracteres que contiene el texto recibido.
- `start`: la posición inicial del contenido válido dentro de `ch`.
- `len`: el número de caracteres válidos a partir de `start`.

El parser solo garantiza que los caracteres de una notificación ocupan el rango que empieza en `start` y tiene longitud `len`; no leas fuera de ese rango. Además, puede entregar el texto contiguo en varias llamadas a `characters()`, por lo que no debes asumir que una llamada contiene todo el texto de una etiqueta.[[1]](https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html)


Hay que tener en cuenta y gestionar adecuadamente la excepción [`SAXException`](http://w3api.com/wiki/Java:SAXException).


Para mostrar en pantalla el contenido recibido, podemos utilizar:


```java
System.out.println(new String(ch,start,len));
```


Como el ejemplo usa `println`, cada fragmento recibido se muestra en una línea. Si necesitas obtener el texto completo de un elemento, acumula los fragmentos —por ejemplo, con `StringBuilder`— y procésalos cuando recibas el `endElement()` correspondiente. Si solo quieres escribirlos seguidos en la salida, utiliza `print` en lugar de `println`.


## Crear el Handler o Manejador


Los eventos que queramos manejar se agrupan en un `Handler` o manejador. [`DefaultHandler`](http://w3api.com/wiki/Java:DefaultHandler) proporciona implementaciones predeterminadas para las interfaces principales de `SAX`, de modo que podemos sobrescribir solo los métodos que necesitemos.


Así que crearemos un manejador que herede de `DefaultHandler`, en el que implementaremos la funcionalidad que nos interese para los eventos.


```java
public class MiManejador extends DefaultHandler {}
```


## Crear el parser SAX


Una vez creado el manejador, deberemos crear una aplicación de consola normal en [Java](https://lineadecodigo.com/java/) que lo utilice para analizar el documento.


Lo primero que necesitamos es el parser (analizador). Para ello instanciamos una factoría de parsers, a la que pediremos uno para analizar nuestro documento [`XML`](http://www.manualweb.net/xml/).


```java
SAXParserFactory factory = SAXParserFactory.newInstance();
parser = factory.newSAXParser();
```


Este patrón sigue siendo válido en las versiones actuales de [Java](https://lineadecodigo.com/java/). `SAXParserFactory.newInstance()` utiliza el mecanismo de búsqueda de proveedores de JAXP; desde [Java](https://lineadecodigo.com/java/) 9 también existe `newDefaultInstance()`, que selecciona la implementación integrada en el JDK. No es necesario cambiar el ejemplo original para utilizar `SAX`.


## Configurar el analizador


A continuación, configuraremos el analizador indicándole cuál es el fichero que contiene el documento [`XML`](http://www.manualweb.net/xml/) y qué manejador hemos implementado para analizarlo.


```java
MiManejador manejador = new MiManejador();
parser.parse(is, manejador);
```


En este fragmento, `is` representa el flujo de entrada (`InputStream`) que contiene el documento. La apertura y el cierre del flujo dependen de cómo obtengas el `XML`; el ejemplo siguiente muestra una lectura desde un fichero.


## Ejemplo completo: leer texto de un XML


Este ejemplo complementario reúne la creación del parser, el manejador y la lectura de un fichero. El documento de entrada puede ser, por ejemplo:


```xml
<persona><nombre>Ana</nombre></persona>
```


El programa imprime el contenido de texto (`Ana`):


```java
import java.io.FileInputStream;
import java.io.IOException;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class LeerXMLConSAX {
    public static void main(String[] args)
            throws ParserConfigurationException, SAXException, IOException {
        SAXParserFactory factory = SAXParserFactory.newInstance();
        SAXParser parser = factory.newSAXParser();

        try (FileInputStream is = new FileInputStream("persona.xml")) {
            parser.parse(is, new DefaultHandler() {
                @Override
                public void characters(char[] ch, int start, int len) throws SAXException {
                    System.out.print(new String(ch, start, len));
                }
            });
        }
    }
}
```


El bloque `try` cierra el fichero aunque se produzca una excepción. Esta sintaxis de _try-with-resources_ está disponible desde [Java](https://lineadecodigo.com/java/) 7. El ejemplo solo imprime los datos de texto; para identificar a qué etiqueta pertenece cada dato, el manejador también debe responder a `startElement()` y `endElement()`.


## Documentos XML con espacios de nombres


Si el documento utiliza espacios de nombres, activa esa opción antes de crear el parser:


```java
factory.setNamespaceAware(true);
```


La configuración predeterminada de `SAXParserFactory` no activa el soporte de espacios de nombres. Al activarlo, los métodos como `startElement()` reciben información como el `URI` del espacio de nombres, el nombre local y el nombre cualificado; puedes usar esos datos para distinguir elementos con el mismo nombre local en distintos espacios de nombres.


## Seguridad al procesar XML no confiable


Si el `XML` procede de usuarios o de otra fuente no confiable, define una política para las declaraciones `DOCTYPE` y las entidades externas. Una configuración insegura puede permitir ataques `XXE`, que expongan archivos locales o provoquen solicitudes a recursos externos. Los controles disponibles dependen del proveedor; si una opción de seguridad requerida no está soportada, no continúes el procesamiento como si se hubiera aplicado.


En [Java](https://lineadecodigo.com/java/) 9 o posterior, con la implementación JAXP integrada, se puede rechazar `DOCTYPE` y activar el procesamiento seguro antes de crear el parser. El siguiente fragmento necesita `import javax.xml.XMLConstants;`:


```java
SAXParserFactory factory = SAXParserFactory.newDefaultInstance();
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
factory.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);
SAXParser parser = factory.newSAXParser();
```


Esta configuración rechaza documentos que incluyen `DOCTYPE`; no la uses sin adaptación si la aplicación necesita `DTD`. Si se utiliza otro proveedor, comprueba sus opciones de seguridad y falla de forma explícita cuando no pueda aplicar las protecciones requeridas.

