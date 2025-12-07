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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTVMW2PX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUdIw0WzSX%2FYscsF4ndI5lHtb3aQ1QpyqdB9jxp3RROwIgSa3fIddAnbg%2FSULVbJiZfQRoMOE%2BZkoc8nqErTmP5IMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXbijnBgO8JfPNJaSrcA9puTLkndGoy%2FEnX4o1y3usxpjDqFYhylPLkveJm5zL3OW%2BoO84Oit9L2Iy1RbopNBzlB8dC%2BfMmtf5UJ9sLrQ5NO%2FIEptMsvpsgl2haEWj3YsmAYj9FcN2q%2FhkObH3SlAVGDKyABOjU1WFD%2FIWT34vkR%2B2H4sEK1OTa7m7O2sT47Jn9ef5gQF60BCLCLTsRzsCzZ3XvXEtLVN4BUWcmDG8OHc%2BHvcX%2F2W1RjkkSbipGBrNZBug0HGxbhGMbOsokty2Zedqw608TmHip0cHGJPUTtItC3vYtVNhX3sSUEVu%2BPYgzo6iipVv%2Bm2RB7uGfXbkvh1TWMVfSyPocGtBJljidRrbZiyVytmGlbdO0iyMC6D9gJrgpYmeEeOzg7VEuw%2FpAwwN9bBTAAg0j8ThyQsxSfpySKTb28bBFUUBWavZLuDX2og0sWQmmaVY6IihTIbqSx2LENu9EdDDgGrZJhZe0wYNTncRJJAhJydIPxLXoLbUuBquhwnH%2BwA6fATlegzoS%2BN%2ByCS%2Fqrmatr%2FwcDZXRQ727boFD6nPMlB5EbPc6FQ6854s%2BN7rPP%2Ftgh2OxQceTw47vI5dKOq2xRoqWNY6SpJjTRCF0CqhHmcdb2a4IPb8aEjtnPlZtCt6JMNiE2MkGOqUBWu7Dwo55ocwImKYMrbK2jVAOFJspBLqCEgfuCy%2FjBX0Ieb0E%2Bf%2BkEq5c6JX%2BSHYARFu0ZV3rnINyxLngpwhr86znwEtRkwlcdqPK%2FlI5BsN2k2rue9iG%2Fx1KspLsMamqBx%2BePA9nRmG6Dl3meNIcvilIOSvEg790%2FW6oCmobXTEpBgJgsK3p0aUSu8jXEHtrFnLYMedesBaI5UE1XwjCJbCD%2FfZF&X-Amz-Signature=297f145ef3887a08a5ac23ea1c04a76296d242881da96eaf6ab8650e7d043bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

