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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTEVWRB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4azPpmEFolt52JBxXC%2BN%2FtJJvPj0gWuVtXT8cnKY6SAiEA7WDrrUtx1Y%2FPFomEVAm%2BEJB2SNIsP9u%2FLrcruyeVWpkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfB46I4QrWx%2FhmqgyrcA5DhBkCEZ0Elfja9DW%2FqHxd3bHGTqsifrGbmCt8t47GDjWzUonE1sY9OzdD0BgMIbcxkslRVFjkw8u5pExY7IGmgRKu9VVnyMnMsuoJdVhJoCSX0GblAIGl54CROA8k6Y32j6hSAUbom17tTpC2itGE4QjByM%2B%2BINBysX7r%2BtAgHEE64CA2KkBYWyiY6kfEWDzCkskMQxc5fcWSEH6m6mCxuA%2FHiW1AYsG9RPpiwwz653jm09ah1vFP1Iy3VD3AENht5RFMZTMOGdq%2BRHPVn6OKeRK3vcv7eaCHHchMkJgI8S%2BBcZdiy%2Fc%2FGLZST5rpoTel6gWjk0fzPHoufRYeitRThNXF33caEQ4Sabz5uvYYB9dXDHflny0r16dJZDgOK5PcTu0TF%2FK83AXovtEoGwVV5Muk2n0Aj0CayoCAWpdYFAtNmtPArnVZ%2B5Hf%2F6x2cPWQ%2FUxooh6cNzdc5zoFinPawjGmCrZG5kOK5bXNt2qleZx9%2BL5DJ3SLOURjyZmX45LBE0QwXCegenelgfGflIBuaz3LMUtHYKlsVQoUp696e32ghO%2FjJ18oiiVrNWMSmngg0uakvemccOWEdffRXd%2B27BHal5NCV2L4cOQFW%2F7XT2cwbKPh9SeziZgP9MP674ckGOqUBUh9FEuFNso%2FFnrgLLFaLCOWL82w1rg0AawEMyYzZ5aXF42vumXk1nm9MEn6H410teqaOv58TasBs5kMyFIQttAnbD%2B9ehZqGmyPBSPKpoyBL6lcqqgH32o4n9Hi5kVfk6i0YZabU2XnWTPLnVwgHAaqyid9XiQABHHgbKfc2g6r5cEPyYi84T6DRZzFOQ8BggjsEag%2F1LoSDd%2B5OpW%2Fee8Tkuq%2BE&X-Amz-Signature=b1ee29bcd3d9f38ea066e8e6c965bcfd567f85281820a3875151dc058758f860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

