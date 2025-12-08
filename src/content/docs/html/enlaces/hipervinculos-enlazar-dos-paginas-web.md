---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETOQPER%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAIuprS8qT%2F0D3xNyOnvyFCrgwS9lJojiTFmFmig5AwIhAIcqRpxDeEy%2BnE42s6UlW3bymF747dbUX3r9A6dji9scKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwemEvEdI95trvmN6Qq3AO57GgrtiOFSLOk8o5JUraQkrgDPJm%2FMfoc7r5MmtVj4yKnarzTffq4p2jry8Vctb%2BHqvfkp0yrmdYPCaVH9eg4i3N6Kz9Fl3b%2FkCyzxOpKl2%2BRZ3MBafjOT%2BCFcOoUhnpZJsw4OakISOaMPIT%2FCbT9lFx1SEPjrqv%2Bl2YjP7tELFYuv5iSBwDNl72xIjbJvB%2BwDyE%2FEa28vN5fQwjV2m03lDaIlUISivDEVSnls9n7XZXvpw1FQLfsSWCIDOTsDNkPIUu%2BVe2O0kvayBQd6VYKguAuUvo1357ns3%2FA3frR0drdqaJ%2B%2BUsSOIpfR6%2FUhMFjdq7t2Ev83C%2BOI5kxybCc4%2BlAhtvoxuH0IvzR5ai7AWtxZJsX1xUXvZv5csdECSlxsSGH2unUGCc6SYWqA9jxnp0kwjkR%2BnslCJiWCDNqFXz7w1O7XgsGQ4sAAsz3%2B%2BlTQKSbRvJlJ%2Fm8x6aEoMRpVMoKGxmNEiQkwBynNbzhASLpeGcx7oAoj6HP48YIiMycHPmcmOUYOw%2BlFXsvdS%2Fn0%2F5ckexyrk0wC1EidWReI44HKzouo1Q9sdXtrV4nZ892tKClakCHK9NbhAIdwT9l%2BHshSB1ncFXoX%2Bdde1iSl7JrujQsIh37%2FlNCjjD17dnJBjqkAdiBhlVqQPdmZnP0WCm%2F2NsGlA1tobvHYHXSbupg5ozazrx7dlLiEj3e7Ln80tk7ZJ1kJEnY58ZXMLhfuAzNWeY6PCf4Upeyo%2FnRWh1Q3e4j2%2B%2BlxDxethywjjewBWY0MXa%2F5AKN8rDmTsVbkL8qQLeHp%2BUJcYNnM5I7eM%2BhhlRv6SrRnQk80p%2FuCvsBhg%2BNKRUUj69hD%2B4Koj%2FoN4VhEqiWHa89&X-Amz-Signature=31c6c9a1693132fdee9a43d50bc35aec7cc1abbf5dbce4578b05b3cb10c3b0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

