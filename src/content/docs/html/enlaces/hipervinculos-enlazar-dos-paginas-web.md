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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLXWTQWW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLzf4SfUx0Z7AeuT1ukNYSe%2FqTsn1nmJ6LX2gQzHhVMwIgB2IBVgvtFbnhwFsocOeFXw1pt3B3n7vOA6bN0ctBOPUqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkxcj%2FAbBajW18zGSrcA6eKv%2BGcrLB6TANcKQnjgEMDzjQweI1r%2FM7sn3w8Cf1%2Bmfe3GisOYeJAfp4%2B0L3C%2FRTdqfVuWxXmUSxlu9kl0sSQjzKPsDy%2F2SOBKpqBoijqpGQAFg9%2BVKx9BENEE8ZJBn18CTxtMBC%2FqFIr87IZRbg%2Fuw3eemyLFJ5LYUGwkWe96%2FGima51%2BKu8MqC%2BA5%2FGx5dvrDHWGo1%2BSEGXCUkV8NivNNySmWEWXs3B%2BxiC4bElgLmrpW1ym8uoT1QPUlPLON6CKEG6izQVS9mC5FQ9FFAixCyhHg7cqgeGjS2nPeBNnEPkm9FQpVwxxDcWsDjKBRpgXnaTbFZUWJO%2FGmrPt1lCo749e3z8njifFVRwe1IExVIw8ekGj4%2BLhA1gV1EomhhjXhUJVQAMzCBSW48f%2FyaHLwrH2dqj8Tgs6qADp7pzeXhlP4pW6zucdOxdYRiFJVLdTPJs%2FedQLeElz%2FeumuCDsWZWiHEky7TVDYagyT%2BtHTK6N0ggNx71Oam1xe0OlixNDqBQJOhmfHULP%2FwvRA37Vvd4IgyW%2FmxOBs%2BVrHOhRRp7ksWZZhVb6K5Uy9bJ32l0lhhk285IHYEBvsaftZGzsPpGU4br%2F8r7WVMEcLpBw1yOPPKe6uX4LQZlMN661skGOqUBjIZsHLQVNHKPmefZHiYx1YxiklrDUAEHBAJeTPJGGbOUrvlfqiMa9Fa%2FF3w68kv97dNBzXg1SAAnp0ZLTNYEk5G6MU3kErxZRavic%2FLne1uaRiVFmiDNVZZehKxnAWGCUM7IakgL4btgtchHaJaQYQOe4SFQ6af0COUnBRn1Oo6iRU1H5DxNp0y1uYgUWc6ZwZUUrQS%2BKZ%2FUK9w3z2gf8zkujMje&X-Amz-Signature=708dbcb59916bfe159466531c243a0555378e04be3348cd0e94c7f7c995c5dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

