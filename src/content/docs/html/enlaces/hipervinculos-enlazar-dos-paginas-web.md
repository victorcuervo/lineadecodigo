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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KYDCZN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGErW7L%2BWJM3rwlgVR6mhkWhUJHksSOXBSNZsW9Lyt1mAiEA5oTA5wG%2B4th1yJ2CieGDhAsHBDPahvhJSWlddMrxvgMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDF1bOB6W4hxmLUIECSrcA5ctB9265mImGZHxHdmXgRSz8tG3a5LniscMzOPDpUk3KSfv28MBUk2Fb8O%2BpFo%2B%2FWQFYgFfADaMuEJdQOWIHcfx5ghgaPBOujB8xDNtFFjGrXMqPrt6v4%2FXAk4jT3wDcm%2FVv8eBzkltB8lX0R%2FYuZsStwnJYX0oMj5cMI7u2xFmYSIS%2BXjRZwq64D%2FI9cNi07sZ45xVMYyeyqxIg%2Fa7ScRIYevq7Qiy2f9Izg6qTniaWYwnHufQ5Dnrl5R1tuYeruScTDuGlobvV9UlTGPlsuXek3Z1SGdPQP39DXsxP57s1zK%2FAHgztj6ygUKt%2BMaaSncWicCNzSN5Qc2BvMJKvaFtMQ44FYYIxT7CWOg7xD7GUB6bMWZBJqi2c%2B8oQyhqh2l%2FSYrephU54orCRcIh3BOTI8ESeFUCXHkM%2BtxTGt00B8F3Exu%2BSYkZG8rGj1MWSW7GiFJCzi68%2B5%2Bzze3bVBWVkkGkxKaLqU1CIm9k%2Bi7x9kh2GDOLjynTBGJHnvUg5kufzI6UBgYIKmi%2FQURZgJpw7lA7cc4Csqh06Nz7Xp3UxBqbPuLQiniIS4K%2FJf%2FM65%2FpfFt3SKl3jOa0Pwsi0Aoeiuo%2BU8G3kgM3%2F44g1KBuCAR0j13wWTs9rxoPMJmK0MkGOqUBjAKEvdYH3XMFyvN6G%2Buh0M18HdftQQmyxhanFDen5t6WgCWu7EjBZYMbVceE19wuIoZqwC01jGvMHOyKUK9Hd5AaGTQbyga0H4X%2BT%2Bfj1zwOugWpGQzYig%2B7ueM279QmcdIV6NIsa7MsG0pV56hngKIWFo93OlRx0aRc5eJ%2Bpvgm8iABao7umxjzTgbk%2Fb7%2BF1gQ0ZwUFkHsArxLekCv8F44CdSk&X-Amz-Signature=1d54747e3c4572a19100dcc1036733b5e38ef79fc5da7f769202072730faf78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

