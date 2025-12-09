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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTHTXJ5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0f4pbz0sfWaqZCjPPYlYeSGuMxyjsaNVBIeiIk5DzeQIgaP%2BFig6xl0%2BdYpluLEwPUZZwW7JbrmCqIQN51lM3b%2FgqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWnMRt47ruvAZcIEircA2NT8ncTLihoUPw4QYutIUWGopzCSCccDBdVm5Iq4rObucfwSyhxqNFIlPN4YeA7l5jv1BBT5dfBKPATd9mKGhrTh52zILWQ0DnvK1%2BHnflHefoRIKpuciTyhXj2PUR2j4U910UhvZPTkfXxcyqEUZD6dqlU3ELnwvx1DnwWkpAbz4zNbpdr8vl1kXblJH3dq48LwK5gnxm7CFRxuSVE2Ut8IL06XHOULv6iMu40lhFQhJz%2F3aOHK7Nv8K2NacuSAwdS1ECmc8iYV0b7Ptz780aXCWc8AfLmbwkXs4ZjHfpk97IYI2t3cYOzvqbj%2BWLU4zlFmYDWdfdbkEnYE4rxXOSD%2BRpA2s0q7fSiaCNVex5rxMPs3bS2sde2KQehnlmFhHZtrHmaihc40f68LGWGKrLU3IkV3GwH8iVH61UWcVcGENPaSMdz0RxtEMfMFQc%2FZlxetr41VSNKXWNo7qr2jRW1bfxAe3upNI7KqoT9E%2BBpdzlPVzNz9nW1mViKfSW%2FcsVoDF9bnU877lzAMzy38z%2BpZnW0z8QO7rgMJWhm%2Fy26ngUXQKsQHnPF75aoDOo99vFKIp3puzHXU9YPxRJfqM0JsnmPu80dQNT6BurLj9z7%2FNvdCkhuzaSDxWltMOS84ckGOqUBwDRPCjfRY8CAjruWE5lBC4wJvnp81AApbMREm%2BJa2mlML4r8rDYPtpeOZFwXaw%2BfUZ3TJpLlaomOxDLbqxOK1TjS1zEFT1LSo7%2F5zIlHP9tfjoxR3CZGfKtSZ8Uaajqi61uL6jukUXmFQl00Qs7nGb7W08bBiw4QyN4p2j52iXIJZnuCKuvAfP8mUpsjFgr0qqn27u5KMBby9%2FVX4WnfobhZGav7&X-Amz-Signature=127693bb6b887c79eb7ba5ebb8031901d98d9b51df1bb9be05c60b498ed675df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

