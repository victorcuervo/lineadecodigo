---
title: "Bases de Datos"
description: "Conecta ASP clásico con bases de datos mediante ADO, ejecuta consultas SQL, recorre resultados con Recordset y gestiona correctamente conexiones y recursos."
date: 2026-09-13
updatedDate: 2026-09-13
tags: ["ado","connection","recordset","query","database"]
slug: asp/bases-de-datos
type: category
topic: asp
id: 3daa9dfb-adca-8019-a783-f893eda6c46d
author: victor_cuervo
---

## ¿Qué son las bases de datos ASP?


Las **Bases de Datos ASP** son el mecanismo mediante el que una aplicación escrita en [ASP](https://lineadecodigo.com/asp/) almacena, consulta y modifica información persistente en un sistema gestor de bases de datos. [ASP](https://lineadecodigo.com/asp/) se ejecuta en el servidor web y utiliza normalmente **ADO** (ActiveX Data Objects) para comunicarse con motores como Microsoft Access o SQL Server.


ADO proporciona objetos COM que actúan como intermediarios entre el [código VBScript](https://lineadecodigo.com/vbscript/) y el proveedor de datos. Los dos objetos más habituales son:

- **ADODB.Connection**: abre y mantiene la conexión con la base de datos mediante una cadena de conexión.
- **ADODB.Recordset**: representa las filas y columnas devueltas por una consulta.

La cadena de conexión indica el proveedor, el servidor o archivo y, cuando corresponde, las credenciales. Una vez abierta la conexión, [ASP](https://lineadecodigo.com/asp/) puede ejecutar [sentencias SQL](https://lineadecodigo.com/sql/) como `SELECT`, `INSERT`, `UPDATE` o `DELETE`. Todo el trabajo se realiza en el servidor; el navegador solo recibe la respuesta generada por la página [ASP](https://lineadecodigo.com/asp/).


## Características de las bases de datos ASP

- **Acceso mediante ADO**. [ASP](https://lineadecodigo.com/asp/) crea objetos `ADODB` con `Server.CreateObject`. Esta capa ofrece una interfaz común para distintos proveedores de datos.
- **Conexiones configurables**. El objeto `Connection` utiliza una cadena de conexión adaptada al motor. Cambiar de Access a SQL Server requiere modificar el proveedor y puede exigir adaptar ciertas consultas SQL.
- **Resultados tabulares**. Un `Recordset` permite leer cada fila devuelta por una consulta, acceder a sus campos por nombre y avanzar con `MoveNext` hasta alcanzar `EOF` (_End Of File_, fin del conjunto de resultados).
- **Operaciones de lectura y escritura**. `Connection.Execute` resulta apropiado para consultas sencillas. Para consultas con valores procedentes del usuario conviene utilizar `ADODB.Command` y parámetros, ya que concatenar esos valores en [SQL](https://lineadecodigo.com/sql/) puede provocar inyección [SQL](https://lineadecodigo.com/sql/).
- **Gestión explícita de recursos**. Las conexiones y los conjuntos de resultados deben cerrarse cuando dejan de utilizarse. Mantenerlos abiertos consume recursos del servidor y puede limitar el número de peticiones simultáneas.
- **Ejecución en el servidor**. Las credenciales y la lógica de acceso no se envían al navegador, aunque deben protegerse igualmente mediante permisos mínimos, configuración segura y archivos no expuestos públicamente.

## ¿Por qué aprender a manejar bases de datos ASP?


Conocer el acceso a datos en [ASP](https://lineadecodigo.com/asp/) permite mantener aplicaciones clásicas que dependen de catálogos, usuarios, pedidos, formularios o informes. Muchas de estas aplicaciones siguen utilizando ADO, por lo que entender `Connection`, `Command` y `Recordset` facilita localizar errores, modificar consultas y migrar el sistema con menor riesgo.


También ayuda a resolver problemas concretos de rendimiento y seguridad. Abrir una conexión solo durante el tiempo necesario reduce el consumo de recursos. Seleccionar únicamente las columnas requeridas evita transferencias innecesarias. Parametrizar los valores externos separa los datos de la instrucción [SQL](https://lineadecodigo.com/sql/) y reduce el riesgo de inyección.


El acceso a bases de datos relaciona varios conceptos de [ASP](https://lineadecodigo.com/asp/): la ejecución de [VBScript](https://lineadecodigo.com/vbscript/) en el servidor, el uso de `Server.CreateObject`, la lectura de datos de `Request` y la generación de la respuesta. Comprender esa relación permite seguir el flujo completo de una petición, desde la entrada recibida hasta la consulta y la salida enviada al cliente.


## Ejemplo de Bases de Datos ASP


El siguiente ejemplo abre una base de datos Microsoft Access, consulta productos disponibles y recorre el resultado. El archivo `tienda.mdb` debe existir en la carpeta `datos` de la aplicación y la cuenta del servidor web debe tener permiso de lectura.


```javascript
<%@ Language="VBScript" %>
<%
Option Explicit

Dim conexion
Dim resultados
Dim rutaBaseDatos
Dim consultaSql

rutaBaseDatos = Server.MapPath("/datos/tienda.mdb")

Set conexion = Server.CreateObject("ADODB.Connection")
conexion.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & rutaBaseDatos

consultaSql = "SELECT Id, Nombre, Precio " & _
              "FROM Productos " & _
              "WHERE Disponible = True " & _
              "ORDER BY Nombre"

Set resultados = conexion.Execute(consultaSql)

Do Until resultados.EOF
    Response.Write Server.HTMLEncode(CStr(resultados("Nombre")))
    Response.Write " - " & FormatCurrency(resultados("Precio"))
    Response.Write vbCrLf
    resultados.MoveNext
Loop

resultados.Close
Set resultados = Nothing

conexion.Close
Set conexion = Nothing
%>
```


`Server.MapPath` convierte la ruta virtual en una ruta física del servidor. Después, `ADODB.Connection` abre el archivo mediante el proveedor Jet y `Execute` devuelve un `Recordset` con las columnas solicitadas.


El bucle procesa una fila en cada iteración. `EOF` indica que ya no quedan registros y `MoveNext` avanza al siguiente. `Server.HTMLEncode` evita que un valor almacenado en la base de datos se interprete como marcado en la respuesta. Al terminar, el ejemplo cierra primero el `Recordset` y después la conexión.


La consulta contiene únicamente valores fijos. Si el filtro procediera de `Request.QueryString` o `Request.Form`, debería ejecutarse mediante un `ADODB.Command` parametrizado en lugar de concatenar el valor recibido con el texto [SQL](https://lineadecodigo.com/sql/).

