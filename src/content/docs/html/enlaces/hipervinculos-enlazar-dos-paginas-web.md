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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2Q6JOU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA2gCE89kYEK%2Bb7ujmq9hBG3%2FN2z7nAJTe%2BCREVh2sqAiA8fbU6PbPMJNllimYhjo8FLxHh8RhvL6BWg0Kj7Xq9CiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXYoKp%2BCcyuOgCd6kKtwD9lVwQ16rA6JMGRI9CjJG5ILQrkncI6oWCpoA41po8eWyuo97EdK3tXZsdlCvByZg2im%2FplfI5rZ%2BZwMJnc45cBpShqo3jmZGlrdfl84hCOFBDTtnqnRzT9mVrnIZ8rYBNGS902WLAOfHmcc%2FXpuldkyL2rlK31IP%2BdLF%2FoPELUb3SDA4bshOAK9ARu38fLkB7iIIPpZi6h46sQKnaHxjuYHQgxzwd0Pfd7edXQLmYGSU1Xcxy9J4enFtDqkDOkFjr1RgnoAFsnjMROdnxVY8%2BhNBPoVJl24fIl3TPutmL%2BcFro2XxvjJElt1tdO5FSmEBIiukK38cJxZvsTBkcRbcUOPE4PFnD6XmNDjrYOcnbQVWKiTiphUJZUh9kLIixcDnKQNmGlwQLI8a7FDU7%2BX4tUGkAhyJhulAxMhwN5GR0O2zAvNHJQ892AZbO0vJXJ7YU0qvaCd9rljN5OFXhAvAhmlsQupdJh2LFWhz37M%2BGtonuYDPL%2FCqkWeDPGhQrWfKsaciNY4riR3vG55Uk0h%2FNXZqWxjm49fIxDrHD3318uMkXog5RsTQElBdRwbH%2Fbfu0zmXf3M8hrxwlutCCcgpLji6QXtS6sPrA4h9j8kq4jNNkLAIcoin64A00Mw8cbXyQY6pgHs%2BHqC4zzQmxXC8BDL7L60aCtkzLO2cS2Rf9jBWidDfAXMT2L6uSR3VCrO38Lx1ubcol0FFnV8kswy%2FcLVwtY4iB%2Bm%2FCvp%2BL5wnMSy2OnJvo5Lec%2FVg7nWXT4EqKeZPWpmu8pTASrz7YS%2FRPC7wMLgMKOXUqd6QMwwADXylPf%2Fc8F6n0ujRGRJ3VrHa0ZcVNsgaslFSCRMrb3%2BDdBCzdQQLnoyslG8&X-Amz-Signature=38a61f77158297f8056e1da46d78e6d0b7ebd52e0a8df938b0db6ca36705abef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

