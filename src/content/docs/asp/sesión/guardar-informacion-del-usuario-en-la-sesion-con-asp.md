---
title: "Guardar información del usuario en la sesión con ASP"
description: "Descubre cómo guardar información del usuario en la sesión con ASP de forma segura y eficiente, aumenta la interacción y controla su tiempo de vida."
date: 2009-10-25
updatedDate: 2026-09-11
tags: ["session","response","write","abandon","timeout"]
slug: asp/sesion/guardar-informacion-del-usuario-en-la-sesion-con-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-814a-a769-c7af16a116c3
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/tree/master/usuarios/informacion-en-sesion
---

Una sesión permite conservar información entre las distintas peticiones que un usuario realiza a una aplicación. En ASP clásico, el objeto `Session` almacena esos datos en el servidor y los asocia normalmente con el navegador mediante una cookie de sesión.


Debemos evitar guardar contraseñas, datos financieros u otra información sensible dentro de `Session`. También conviene almacenar solo lo necesario, ya que cada sesión consume recursos del servidor.


## Guardar un valor en la sesión


Podemos asignar un valor utilizando una clave entre paréntesis. En este ejemplo guardamos el nombre del usuario en `Session("usuario")`.


```vb.net
Session("usuario") = "Víctor Cuervo"
```


El valor permanecerá disponible mientras la sesión siga activa o hasta que se elimine de forma explícita.


## Recuperar y mostrar el valor


Para recuperar el dato utilizamos la misma clave. Podemos mostrarlo en la respuesta mediante `Response.Write()`.


```vb.net
Dim usuario
usuario = Session("usuario")

Response.Write("Usuario: " & Server.HTMLEncode(usuario))
```


El operador `&` concatena cadenas en `VBScript`. Además, `Server.HTMLEncode()` evita que un valor dinámico se interprete como [código HTML](https://lineadecodigo.com/html/) al insertarlo en la página.


## Contar páginas vistas


También podemos utilizar una variable de sesión para mantener un contador. Antes de incrementarlo, comprobamos si está vacío mediante `IsEmpty()`.


```vb.net
If IsEmpty(Session("paginas")) Then
    Session("paginas") = 0
End If

Session("paginas") = Session("paginas") + 1

Response.Write("Páginas vistas: " & CStr(Session("paginas")))
```


La función `CStr()` convierte el contador en una cadena antes de incorporarlo a la respuesta.


## Configurar el tiempo de espera


La propiedad `Session.Timeout` define cuántos minutos de inactividad pueden transcurrir antes de que la sesión caduque. El siguiente código establece un tiempo de espera de `10` minutos.


```vb.net
Session.Timeout = 10
```


Este valor debe elegirse considerando tanto la experiencia del usuario como el consumo de recursos y los requisitos de seguridad de la aplicación.


## Finalizar la sesión


Cuando el usuario cierre sesión, podemos eliminar sus datos mediante `Session.Abandon`.


```vb.net
Session.Abandon
```


La sesión se abandona al finalizar la petición actual. Para un cierre de sesión completo, la aplicación también debe invalidar cualquier mecanismo adicional de autenticación que utilice.


## Ejemplo completo


El siguiente ejemplo guarda el nombre del usuario, incrementa el contador de páginas vistas y muestra ambos valores.


```vb.net
<%
If IsEmpty(Session("usuario")) Then
    Session("usuario") = "Víctor Cuervo"
End If

If IsEmpty(Session("paginas")) Then
    Session("paginas") = 0
End If

Session("paginas") = Session("paginas") + 1
Session.Timeout = 10

Response.Write("Usuario: " & Server.HTMLEncode(Session("usuario")) & "<br>")
Response.Write("Páginas vistas: " & CStr(Session("paginas")))
%>
```


Así podemos mantener información sencilla durante la navegación del usuario, controlar su duración con `Session.Timeout` y eliminarla cuando deje de ser necesaria mediante `Session.Abandon`.

