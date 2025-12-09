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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHN52FG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu%2BK7I6D1I3pmPBOC%2FjLseRIENeYeEPlwGjxEUEUuRHAIhAJ%2BzbezqRZ%2B0nQfdQLyst9jD%2Bi7WC%2Fdpoyj5Q1PFf0LAKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIW1S1sNxdG64R9aAq3AOz8YPePnt%2F0vLkEHWUPZuRPnVXTDS2xPPQjmyi47jlpcpBKHQ280I9Qam%2FueH%2B6oisiGO%2Ba4%2BQ0xoRVOgPpHCzOcAM9wIHjrmOaQnKfFr1OSHVDwa8hA5lA4eASVT4wU1y64w4x5mzlf2LtHBaGgpNy9wfBVyFw2KLMKQGaE%2FPv7uf0mUTojIYc9gC%2B9QqjuGhsGCh0w8t4sqmuDIZeTkE7SOuCHAJk8KwfCf3ugNoJpZUqKrCd3dtbV45zvB7MvaMttP3GZ3FK91V3QdnzGMPME%2FY1f97tvJRWnI%2F3Rt1z55YmoW8oKN8ftTWQrjfce%2BhRVR%2Fdz%2FSwtDDcm1mcQgLUVBkpK0X9QP6ofjez9f9oWncZwAVF9OVekNu4Ez2%2FTqxOz4KZRsY5k3xPU0WAUYNn0uSJC7kWdpPna4IriNu918vh7L4w85Nrck8Ny7k70YHmzp4IAjxRxVTlxPBjV%2Fsnan6U0xkfNj6pM%2BGg5YWNiaW7LuHyEQtDjUK%2BraaAqv8dD1PVrLJpb356A9Dv%2FTxF9wf%2F9vtYbU6DYlPYMv59CIcXP6Eg%2F0if0fn1dTCu4reUTQ0ePQ6jexzPaAROHcTzDvTbe9u%2BrLsQ85CPIZZaCfMmKXUJyraSeiKLzCajt7JBjqkAewF3d3czRq4nfu7ThEYmpmJAv1knct%2BpvQZToyU61BzyQVAMvSz8RiOic35IDK4uxO8eLLEaGM1Rcw3oHxsxtABRtmfAjU1%2BxQMvYdKiwEjg%2BHDszHLU4rBUA5BwMAIpCFGvtF5wLBAbzeI0ImvNMhx9icGvstra4yHwn2ctKUN%2BD3MPCE%2BHZLEJM4KkQgI8xUg%2FlzwMFu8T9z9uckC63aYO3EH&X-Amz-Signature=f663448b1d5cd5846cfbb2a7ce40f655ff7516d1dbe2eaa60cc0def1c86db72a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

