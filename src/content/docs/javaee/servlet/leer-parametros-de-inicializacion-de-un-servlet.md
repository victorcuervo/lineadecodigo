---
title: Leer parámetros de inicialización de un servlet
description: "Leer parámetros de inicialización de un servlet nos sirve para cargar información al servlet e insertar información de configuración."
lastUpdated: 2025-12-09
slug: javaee/leer-parametros-de-inicializacion-de-un-servlet
author: victor_cuervo
---

En la vida de ejecución de un [servlet](http://www.manualweb.net/javaee/introduccion-servlets/), este, recuperará información de múltiples sitios. Por ejemplo recibirá en la petición información vía parámetros, recuperará datos de múltiples orígenes: bases de datos, ficheros,… Es por ello que es importante saber **leer parámetros de inicialización de un servlet**. Uno de los sitios de donde podrá recuperar información son los **parámetros de inicialización del servlet**. Cuando creamos un [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) y lo definimos en el descriptor de despliegue, podemos indicarle que el [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) lleva asociado [parámetros de inicialización](http://lineadecodigo.com/tag/java-servlet-init/) y los valores de dichos parámetros. El uso de estos parámetros es muy potente, ya que se pueden modificar sus valores, con el fin de obtener un comportamiento diferente del [servlet](http://www.manualweb.net/javaee/introduccion-servlets/), sin necesidad de recompilar este. Algunos de los usos de los [parámetros de inicialización](http://lineadecodigo.com/tag/java-servlet-init/) podrían ser:

- Tiempos de control de peticiones
- Nombres de recursos externos a los que acceder: ficheros, bases de datos,…
- Nivel de log que se quiere aplicar al programa
- …

Siempre suelen ser cosas relativas a la configuración del [servlet](http://www.manualweb.net/javaee/introduccion-servlets/). Lo primero que tenemos que hacer es definir en el descriptor de despliegue (`/WEB-INF/web.xml`) del [servlet](http://www.manualweb.net/javaee/introduccion-servlets/):


```xml
<servlet>
  <description>Ejemplo ...bla bla bla.</description>
  <display-name>ParametrosInicio</display-name>
  <servlet-name>ParametrosInicio</servlet-name>
  <servlet-class>com.lineadecodigo.ParametrosInicio</servlet-class>
</servlet>
```


El [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) se define mediante la etiqueta `servlet`. Anidada a esta tenemos dos etiquetas importantes. `servlet-name` será el nombre de referencia del [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) y `servlet-class` será la clase java que implementa dicho [servlet](http://www.manualweb.net/javaee/introduccion-servlets/). Los parámetros del [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) también se definen dentro de la etiqueta `servlet`. Para ello utilizaremos la etiqueta `init-param`. Anidada a este tenemos dos etiquetas: `param-name` que será el nombre del parámetro y `param-value` que será el valor que le demos al parámetro de inicio. En nuestro ejemplo vamos a definir dos parámetros. El primero será `NivelLog` que almacenará el tipo de log con el que grabaremos y `NumeroPeticiones` que nos pasará un indicador de limitación.


```xml
<servlet>
  <init-param>
    <description>Nivel de log a aplicar</description>
    <param-name>NivelLog</param-name>
    <param-value>DEBUG</param-value>
  </init-param>
  <init-param>
    <description>Número de peticiones para atender</description>
    <param-name>NumeroPeticiones</param-name>
    <param-value>8</param-value>
  </init-param>
</servlet>
```


Una vez que hemos definido esto en el descriptor de despliegue, tendremos que acceder a los valores desde el [servlet](http://www.manualweb.net/javaee/introduccion-servlets/). Lo más normal es acceder a esta información en el método [`init()`](http://w3api.com/wiki/Java:Servlet.init()). Si es que la información aplica a todas las peticiones del [servlet](http://www.manualweb.net/javaee/introduccion-servlets/). Para recuperar los parámetros tenemos que acceder a el método [`.getInitParameter(String parámetro)`](http://w3api.com/wiki/Java:ServletConfig.getInitParameter()) que permite acceder al valor del parámetro pasado como argumento a dicho método. Así, para recuperar los valores de nuestro ejemplo tendremos el siguiente código:


```java
_nivelLog = getInitParameter("NivelLog");
_numeroPeticiones = Integer.parseInt(getInitParameter("NumeroPeticiones"));
```


Hay que fijarse que los valores de los parámetros de inicio son devueltos como cadenas de texto. Es por ello que tendremos que hacer el tratamiento necesario para convertirlo en otro tipo de dato. En nuestro caso convertirlo a entero mediante [`Integer.parseInt(String cadena)`](http://w3api.com/wiki/Java:Integer.parseInt()). Tanto `_nivelLog` como `_numeroPeticiones` lo hemos definido como atributos generales del [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) para que puedan ser utilizados en todo momento. De esta forma hemos conseguido definir unos [parámetros de inicialización](http://lineadecodigo.com/tag/java-servlet-init/) en nuestro fichero de configuración y **leer parámetros de inicialización de un servlet** cuando se inicializa.

