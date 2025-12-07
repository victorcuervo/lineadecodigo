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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65KJYCU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5L%2FW60IQ2aNFE8OaQTNcq3OMgWN8lwY2cJ96w0JqSuAIgR4fW73cOCzRz0ruyZkQLivbBX3TMZ%2BfUzi3oQCwnjzUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjwx2giomh1jGhs2SrcA%2BGlNKzZgtLJb%2BFzxe4Maz%2FiQ%2BEvUUv3UARZjyAdXabAVN3DoV%2F0y5XW8k8AFU3dhVuuLaBtEjpINQyojt%2F3YA8gDJlhDHKBJIwkqRRz2zCLY8fYj7edI81z7FX5fTBAjytN%2BAQflSSTLrIMW8qOCLRRqPD7N%2Brj7nY923plNlmS5LJxqD4fHJJ767IR31vjSI2Enx%2F4NftORxVJeJMdr4Unl2epoQftdE0DC%2FLYAEhQrsHGVVbNxyH0PP8cYJC1R23olcA%2BBKM%2BG5SUDwwh9X8WbYD7IjTXrSxm21JFkePlJAfUWCTOm%2BGnv2aG2LyGxQwEfN7HjOQ7eH5LB8nq7aldT3Wg%2FpZvq6Yxawwf3hpeiNDIqbqvaT2sHlthxPtEqX%2FhAxdQtKJHEIAhLehxOHv6W2KCVtWAJyB2%2FycryK%2FBaSZRr8mD4%2FqTMnstPsbR5xe%2BQPjc%2FkTBXurRxn2tE3%2Bga0VsUBqEHgy%2FYBMPkKhUrjyWgSHDz%2BaFOlJ4%2Bgg4PRVECcbQuE8OwRSeUykUZSHuS5xuXpuEec3szgz%2FqFLWLIsiPKVZBWpeZV9JPrZOyXvimKInny9KirqlW%2BoiAViMyHUWbdE4v7ZQmqykPzOp1jmCX006pccMempnMOvG18kGOqUBuBiOzzv8ow%2FE1dYplfZlc6IEGfqh3H%2BPeuIdPLA7sll%2BrguVtSyRcgWWxjTcDQxbC0%2F0i5x9rQ%2FWrSRinPDBRAHjUZ%2Fj6DG1nqYKN3Wmts0C%2Fdl0PNEHigl5svGx30WCYlxqZ6ZhCCeLXegzcDLHtqnNKVjd07LgP2tRGWNC0J3Em4TxudAXrPg09iB%2FqELTpYeu9QQvXDVrxpS0HMowyH5OhRqG&X-Amz-Signature=d574d87f0b57cf23d31784679696586f6876d673b7bcd2ccc3e14f0b6cde8b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

