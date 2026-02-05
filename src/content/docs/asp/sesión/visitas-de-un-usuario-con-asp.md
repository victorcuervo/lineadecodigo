---
title: "Visitas de un usuario con ASP"
description: "Descubre cómo llevar el control de visitas de un usuario con ASP mediante cookies, asegurando un seguimiento efectivo y personalizado en tu web."
date: 2009-01-20
updatedDate: 2026-02-05
tags: ["session","cookies","response"]
slug: asp/sesion/visitas-de-un-usuario-con-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-812d-b5d2-d4b3ff1a4a95
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/usuarios/visitas-de-un-usuario/visitas.asp
---

Existen múltiples formas de llevar la cuenta de las veces que un usuario ha visitado nuestra página. El optar por una u otra forma depende de cómo tengamos planteado el funcionamiento de nuestra web y del fin que queramos conseguir. 


Inicialmente podemos hacer una división entre si nuestra página obliga a los usuarios a identificarse o si simplemente tenemos usuarios que visitan nuestra web sin identificación alguna.


## Opciones según el tipo de usuario

1. **Si nuestros usuarios se identifican**. Cada vez que un usuario se identifique pasaremos a llevar su control de accesos. Es decir, incrementar en una unidad el número de visitas actual. Para llevar este control podremos usar una base de datos, un fichero de texto o dejarle una cookie al usuario. Si usamos una base de datos o un fichero de texto asociaremos el id del usuario y el número de visitas.
2. **Nuestros usuarios NO se identifican**. Cada vez que entre un usuario en la web deberemos de incrementar su número de visitas. En este caso solo podremos hacerlo mediante el uso de cookies ya que no hay otra forma de asociar al usuario con el número de visitas que este nos ha hecho.

## Implementación con cookies


En este caso vamos a dar la solución a nivel de cookie, ya que la podemos aplicar en ambos casos. Cada vez que el usuario acceda a nuestra página le dejaremos una cookie que contenga el número de visitas que nos ha hecho. 


Es por ello que la cookie habrá que dejársela cuando el usuario abra la sesión en nuestra web, independientemente de por la página que lo haga. Si bien se puede realizar en alguna página en concreto. 


Hay que recordar que cuando el usuario abre una sesión se ejecuta el método Session_OnStart que se codifica en el fichero global.asa.


```javascript
<script language="VBScript" runat="Server">
Sub Session_OnStart
...
end Sub
</script>
```


## Leer la cookie


Para acceder a la cookie utilizaremos el método .Cookies del objeto Request. El método recibirá como parámetro el nombre de la cookie a recuperar. En nuestro caso la llamaremos visitas y el contenido será el número de visitas.


```javascript
visitas = Request.Cookies("visitas")
```


## Incrementar el contador de visitas


Una vez que hayamos leido la cookie, simplemente tendremos que incrementar el valor numérico de la cookie. Con lo que respecta al incremente en el número de visitas del usuario habrá que tener en cuenta el que cuando el usuario no tiene la cookie es su primera visita. 


Además, cuando incrementemos el valor en uno hay que recordar que al leer la cookie se nos devuelve un valor que es una cadena de texto, es por ello que para incrementarlo deberemos de convertirlo previamente a valor numérico, para ello nos valdremos de funciones como Cint() o CLng().


```javascript
if visitas = "" then
  'El usuario no tiene cookie. 
  visitas = "1"
else
  'El usuario si que tiene una cookie
  numVisitas = CLng(visitas) +1
  visitas = CStr(numVisitas)
end if
```


## Guardar la cookie


Para volver a devolver la cookie al usuario utilizaremos de nuevo el método .Cookies. Si bien, ahora es del objeto Response.


```javascript
Response.Cookies("visitas") = visitas
```


## Establecer la fecha de expiración


También deberemos de hacer especial hincapié en la fecha de expiración de la cookie, ya que por defecto la cookie va a existir mientras el usuario mantenga activa la sesión. Para que la próxima vez que el usuario visite nuestra página tenga la cookie deberemos de asignar a la misma una fecha de expiración adecuada. En este caso lo hacemos modificando el método expires de la colección Cookies.


```javascript
Response.Cookies("visitas").expires = "12/12/2050"
```


## Código completo


El método Session_OnStart final quedará de la siguiente forma:


```javascript
<script language="VBScript" runat="Server">
Sub Session_OnStart

visitas = Request.Cookies("visitas")

if visitas = "" then
  'El usuario no tiene cookie.
  visitas = "1"
else
  'El usuario si que tiene una cookie
  numVisitas = CLng(visitas) +1
  visitas = CStr(numVisitas)
end if
   
Response.Cookies("visitas") = visitas
Response.Cookies("visitas").expires = "12/12/2050"

end Sub
</script>
```

