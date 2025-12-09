---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2NA42KC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T191620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz2CNcndQIgP47KPr%2FmBG5wVIJ%2FRrgYjaxTETalr8A0AiBpG0mIauROfVs5ZQdd1tr2BhwKMgD%2BUu85g7BPHwrNpiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYXjvo17cYvaj9foKtwDx0BrrxwagvIIVgSfsRFtNqSwWxbcEc0Kb%2BKVz4BJMJ2R6to87LsU4vzWa5wJsUNptWWgxToAFVxVCya6H5csagh3LeD8ufTayvczzunDGM%2FKfeB5sHibW2H7vKXSW%2B6v1aXbaHPEVrAOSraVnKYd2VV9S258V5vJq0kXmrqQ%2BT9n5EDmsYhIiG2e2cUnfkhbDBYt6d3NgCP0WLQFI%2BqfhQ8NYBx8cUHvurBnKGoQTLrlCzZONf2HaJ7CYMncFl343B5GbS4gmD2rZu2%2Fjq31I%2FT%2Ftvl7bdR4JGYykYx1U508goOx9mf0WHc%2BDj51Sf2BfzxdmvQbW045e9PRDPh5lQTD3ChEK61IeVTVDqDPGOGHFJKR8sqqpbfN388vZMZJgdRj%2FkabdpI4cHXFWj16sAk8GD2ERoIJCTkH56w9WlaKLQpw5IRh4Q6d9jgnLTFTeTkbas4K9WxaZOlHdySIj2mJgMKbetG0mXdNOMozpcja49r9rP9E63xAXslUKLnqTJW%2FuGbNv%2FTYiXbgC0T8%2Bc9kx0Oj4kEVHbDZMgoJxnUpwwPPC0aJsuCFTjYyrFf4wN5KMEgcCBQYg8hgWpO%2Bx5uw0F%2FxF8A5LuUIq5OCWHWsuyy1%2BLfNtA7fkHswu97hyQY6pgGUlsjisu1%2Bs7E%2FjW38aR%2BaywOR6VYfMq99x%2FVmXEX%2FQemUJ6aqZOH%2FCv66NnxPMzj4JPtn%2BMmWDidw2IUmDggyZZ1zEuLrfJbUcnh8t%2FTpzA2c3dvys1MvOjSXvu4vyHIDih4VMjjLvx6Lv%2B2sby0HgRfmkxbRUYCKTMwcNpdv4SYVP6bhi3XcqV%2BbUmhf6u%2FX9mlMySWob3PGShpKzUBjhJmg54r5&X-Amz-Signature=9f05e099136c3d9e168a57a1e76d94b274aec571438b4a50fbe495eb7b91bb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

