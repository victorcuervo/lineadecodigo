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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUITVMQY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FE%2BAK%2Bo7CzZ%2BRQ%2BSr1H2%2BosUx8XMs3sTB49PC4qJvuAiBauBiFxLN0ryRixmnutVW%2F%2BEZWaHFcB6vKlsUypLW7vyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9LPZoTnjTYMlJmhzKtwDQls2urbR02gR4e01K0gl2jC7WvkEAaQ8UEmwpBLEClCl%2BMMVHde4eaL%2Fu3f%2FoO5%2BkrJrd7x6z%2FIDH3b0iyM0wdp44kkkYErbGjYe315MupklKa3O9%2FDbHtJylEddkbC5jQGJkvG8nF2623gdugKKvx4H%2BcA3g%2Bvu%2BPeIfS8H%2FWsXL09BbIU27LI6p8nr0PaX5e%2BrQYWAW%2Fl32lSOJxBzDpIr1KGq7VxcFsAOs7MqV1pRatTXxeL8iWgb3ViuTL4HguVOqru9eeST%2FPLxD8m4QHvCGD53BisPbsxRRXF0YRJQgntKbrlCl4lXptviucSRZCe3AOLpx%2F0yyRajm3yjfHaA4RIAlhLoFXpl7LNnI8ir6RIMRYtCqjGybYrjbk6uuu%2BmawkFOuwMkKTwcmVzPm%2F2g4tEXwQqold%2BsKTOq4P0YB7%2BLNWaMF8uj5wiEXEW0ccVSiarVT6keB5rAfuVo%2B%2BfxTyAHHWojcmPKGrDSWVwLn%2BAKH%2BKGD1clhybGvOrbjYuyFHagKFyM6%2BMKSEcag44Ox3wOCJbwpwbGsrcRShEF0%2BNfs3x7Xd1%2FMXfRJleUP03yu1OnvcVXEKNeWRjLoUuPtiAHGeTmubMH%2FE2O2fxxu2itvUe8sY%2FcQcwqLjWyQY6pgGWcz%2FD3zN0AIsU2u8QdK2S5cty48n8Ac4IF30P0jF0%2BXqEokhGKFEW4W%2FcVZ1%2FYLea2tzLkWNubJ%2FiwLgC1SDWDAY73WdF4Uh3uyvqo9CDaZV9KrApo7l7NXU4VFryK6PWnmWIz79lVba%2FntoITNXWVi8tFbB5KTEhHlOlommP08TiEGDWha2yOk6LFvWoHGQD1hRLVBX%2BhGL55mn3EqQ%2FXMqiXBHI&X-Amz-Signature=a033931df170bc8bd84ee931c10248763c020727aa32d36eccfeb8698c740a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

