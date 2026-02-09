---
title: "Monitoreo de aplicaciones web con Javamelody"
description: "Optimiza el monitoreo de aplicaciones web con Javamelody para mejorar el rendimiento y la seguridad de tus aplicaciones Java EE de forma sencilla y efectiva."
date: 2012-07-31
updatedDate: 2026-02-09
tags: ["javamelody","monitoring","pdf"]
slug: java/monitorizacion/monitoreo-de-aplicaciones-web-con-javamelody
type: doc
topic: java
id: dd906cad-60ae-412f-a9b7-bc9b2e1ee828
author: Emmanuel Sio
---

**Javamelody es una herramienta destinada a monitorear servidores de aplicación** [**Java**](https://www.manualweb.net/java/) **o** [**Java EE**](http://www.manualweb.net/javaee/) **en ambientes de QA y producción**. Es importante tener en cuenta que no es una herramienta para simular pedidos de usuarios, sino que se debe utilizar para medir y calcular estadísticas que surgen de la operatoria de la aplicación por todos los usuarios.


## Requisitos de Javamelody


Se requiere tener instaladas las siguientes versiones de [Java](https://www.manualweb.net/java/):

- 1.5 como mínimo
- 1.6 o 1.7 para las siguientes funciones: heap dump, memory histogram, stack traces and system load average
- JDK o JRE de Sun o JRockit de Oracle/BEA o J9 de IBM

Versiones de Servidor:

- JavaEE 1.4
- Tomcat 5.5, 6 o 7
- GlassFish v2 o v3
- JBoss 4, 5, 6 o 7
- Jonas 4 o 5
- Jetty 6 o 7
- WebLogic 9, 10, 11

## Instalación de Javamelody


La instalación es realmente sencilla. Solamente basta copiar dos archivos en la **carpeta WEB-INF/lib** de la aplicación que deseamos monitorear. Luego debemos editar el archivo **web.xml** agregando algunas pocas líneas de código.


## Instalación Paso a Paso


Los siguientes pasos son los básicos, donde elegimos a Tomcat como servidor de ejemplo.


**Pasos:**


a) Descargar el archivo [javamelody-2.6.0.zip](https://github.com/javamelody/javamelody/archive/refs/tags/javamelody-core-2.6.0.zip) de la web del proyecto. Versión de diciembre de 2025.


b) Descomprimir el archivo zip.


c) Copiar los archivos javamelody-x.x.x.jar y jrobin.x.x.x.jar al directorio WEB-INF/lib que está dentro del directorio webapps/nuestra-aplicación.


d) Agregamos las siguientes líneas en el archivo WEB-INF/web.xml de la aplicación.


```xml
<filter>
  <filter-name>monitoring</filter-name>
  <filter-class>net.bull.javamelody.MonitoringFilter</filter-class>
</filter>
<filter-mapping>
  <filter-name>monitoring</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>
<listener>
  <listener-class>net.bull.javamelody.SessionListener</listener-class>
</listener>
```


e) Si queremos tener informes en PDF debemos copiar a WEB-INF/lib el archivo itext-2.1.7.jar. Este paso es opcional.


Si necesitan más customizaciones pueden obtenerlos del sitio de google code donde se encuentra alojado todo el proyecto de Javamelody. Pueden visitarlo [aquí](https://code.google.com/p/javamelody/).


## Primeros resultados


Podemos acceder a nuestra herramienta a través de:


```shell
http://<host>/<my-context>/monitoring
```


Dónde:

- <host>: nombre del servidor donde la aplicación web está instalada, seguido posiblemente por el puerto (por ejemplo [localhost:8080](http://localhost:8080/)).
- <my-context>: Es el nombre del contexto de la aplicación web.

## Seguridad


La página de monitoreo no tiene datos como usuario y password para ser usados como login. Por ello, antes de usar Javamelody en producción puede ser necesario que deseemos restringir el acceso a esta página. Esta tarea recae en nosotros mismos, donde una de las posibilidades es realizar un login customizado.


**Javamelody nos ayuda dándonos la posibilidad de restringir su acceso a través de una expresión regular tomando como parámetro la dirección IP** del cliente. Esto podemos lograrlo a través de allowed-addr-pattern.


Por ejemplo: "192\.168\..*|123\.123\.123\.123" para permitir las IP que se encuentren en el rango "192.168.*.*" mas cualquier pc que se encuentre detrás de una puerta de enlace 123.123.123.123.


Hay que tener en cuenta que si usamos un servidor proxy http como Apache, la dirección IP del cliente será la de Apache. Por ello, no debes usar allowed-addr-pattern en este caso o, si es ese el caso, no usar Apache para acceder a esta página, o habilitar mod_proxy_ajp para que el servidor monitoreado sepa las direcciones IP de los clientes.


Ejemplo de httpd conf con ajp:


```javascript
<location webapp="">
ProxyPass ajp://localhost:8080/webapp
</location>
```


Otra opción que tenemos es la utilización de roles. Si en nuestro archivo web.xml ya hemos definido roles, entonces podemos habilitarlos para que solo ellos puedan acceder a la página de monitoring.


Ejemplo utilizando roles:


```xml
<login-config>
  <auth-method>BASIC</auth-method>
  <realm-name>Monitoring</realm-name>
</login-config>
<security-role>
  <role-name>monitoring</role-name>
</security-role>
<security-constraint>
  <web-resource-collection>
    <web-resource-name>Monitoring</web-resource-name>
    <url-pattern>/monitoring</url-pattern>
  </web-resource-collection>
  <auth-constraint>
    <role-name>monitoring</role-name>
  </auth-constraint>
</security-constraint>
```


Los usuarios deben estar definidos en el servidor de aplicación y deben tener asignado el rol de monitoring para tener acceso a los reportes. Un ejemplo de cómo configurarlo sería del siguiente modo:


```xml
<tomcat-users>
  <role rolename="monitoring"></role>
  <user password="monitoring" roles="monitoring" username="monitoring"></user>
</tomcat-users>
```


## Activación consultas SQL


Si dentro de nuestra aplicación utilizamos Hibernate, entonces la siguiente línea de configuración puede ser utilizada para poder activar el rastreo de las consultas SQL realizadas. Para ello buscamos el archivo hibernate.cfg.xml y agregamos la siguiente línea:


```xml
<property name="hibernate.jdbc.factory_class">net.bull.javamelody.HibernateBatcherFactory</property>
```


Esto habilita que Javamelody detecte cada consulta realizada y nos muestre el tiempo total de ejecución, la cantidad de veces que se ejecutó dicha consulta, el máximo tiempo de ejecución, desviación standard y el % de error del sistema.


## Generación de reportes PDF


Para generar reportes en PDF como también en HTML, debemos agregar la librería iText v2.1.x. Para ello buscamos el archivo iText-2.x.x.jar, ubicado en src/test/test-webapp/WEB-INF/lib dentro de [javamelody.zip](http://javamelody.zip/) y copiarlo dentro del directorio WEB-INF/lib.


## Suplementos en web.xml


Para evitar monitorear algunas url determinadas podemos usar url-pattern dentro del archivo web.xml. Por ejemplo, usamos filter-mappings y url-patterns para monitorear solamente urls como /servlet1/* y /servlet2/* pero no otras como /static/*


```xml
<filter>
  <filter-name>monitoring</filter-name>
  <filter-class>net.bull.javamelody.MonitoringFilter</filter-class>
</filter>
<filter-mapping>
  <filter-name>monitoring</filter-name>
  <url-pattern>/servlet1/*</url-pattern>
</filter-mapping>
<filter-mapping>
  <filter-name>monitoring</filter-name>
  <url-pattern>/servlet2/*</url-pattern>
</filter-mapping>
<filter-mapping>
  <filter-name>monitoring</filter-name>
  <url-pattern>/monitoring</url-pattern>
</filter-mapping>
<listener>
  <listener-class>net.bull.javamelody.SessionListener</listener-class>
</listener>
```


Es importante tener en cuenta que url-pattern debe contener la url /monitoring para tener reportes.


Como alternativa, se puede usar un único /* url-pattern y un parámetro de filtro con una expresión regular antes del tag. Por ejemplo:


```xml
<filter>
  <filter-name>monitoring</filter-name>
  <filter-class>net.bull.javamelody.MonitoringFilter</filter-class>
  <init-param>
    <param-name>url-exclude-pattern</param-name>
    <param-value>/static/.*</param-value>
  </init-param>
</filter>

<filter-mapping>
  <filter-name>monitoring</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>

<listener>
  <listener-class>net.bull.javamelody.SessionListener</listener-class>
</listener>
```


Esto ha sido todo sobre la instalación de JavaMelody. Esperamos que les sea útil a la hora de tener una guía completa para su instalación.

