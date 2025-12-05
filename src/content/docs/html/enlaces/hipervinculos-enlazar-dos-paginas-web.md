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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZESXQXG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6ggWhBd%2Bnm8NKvEFnE%2BOyDRpK5C7gDj4ToV1PwWplCQIhAO4a2%2FvkWjQB0kygvT2e1NKBFvW9iU0UURA98mrLCFN8Kv8DCFsQABoMNjM3NDIzMTgzODA1IgzIBh7IoncY5vMCrk0q3AOApH9MztI%2BONL0BU%2FE%2BJC7IkPDWgI8XeTETY4bl5ye%2FlcVdQbrkAQrhIQpctSJ5ZA%2Bi7CLvl7xsiEnu1eIWr30Hqv8cpWt1m3aK%2BrSAvVFctS06CMPcKEh%2Fr9VRS7spBgFhVE2zyNxPzIF07TusjKMFTb1RyXPMeOgtNn5FkzoWUzGmBEXAas2WN4hVtdwruY6uouJubcw9UdASIF8UOX4nYavDmKpDacOXeL%2BKNohUAJ1b%2BMt8HGroYugvjS9yZhI722b8DIFzI3BCehP%2FMpXKkIRuBYbL6M%2FgzTgJTWNlnPF2%2Bi%2Bx9NGPRYPYO8T6u4SvHoA%2FDDagdXucJ706iM8NiCpi314hHAYJOZYca8aKmzVI6Ydx9aditRo5Brc2I61AWB85OcldVaIscrryPtmgM5AElkBm%2BagGtWQfIQfHCptr93qcLbYIMMTgaxuZCp1tAmgMDLRu00NbavNBYYd0vc1vHdukuwmAnCkfJqA8IO8pUi8swkO2BsU%2FdQXMtK%2F6GaQLF0DKSyBSdiAQ4V4xsrqdlcAwLFbpgO73E6Ul18J6ichybckDtkeL6Ar9gbTasnlrxUlnilkQnLrs%2FzmJCE60HynIq5RY6sZWAa2dzD%2BLisQ53lohSEI7TCH0MrJBjqkAcFM9NygxVeJAexX06rB7Cel7P%2FQXE%2BlLmwIVBejBolbAA27k6plAqhjmgSng4Ggv%2Fdc3Od28DOh3z0KpP6kZKg4e%2FpulUXbB0rAZVzRSUvuEGcR0%2Fq7IPo0coU3M3%2BJ9E0ha0Fwpbm1cieEFZSnfskJGPXXglPFIqCt2rG1Z4UTkmbait%2BObT0%2F0W02eBF6oBDWuyKMYeDKCEcuVvfLtfuU2MDE&X-Amz-Signature=06b4b5fdc1ebe0d62acfafa4ffcf9c4f8d1400e023bcebfd2e2081dfdc8d078e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

