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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWVHW4C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzcupog5bhEqo2me%2BCLcRlO2X8AFccZz6MSsy78vJMawIgTUMBDsca8dKG6y2rI%2F12fsndgjw%2BSecZ5h87mr1990EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTk%2FbyxjBCeua8SjyrcAxVkKbgzcIRvHZacrwT9ThobmIheVp0DVzmk7B9bqQ0DmM450YcPiCSanRLneVK0fr97JD9F79X950UsxNjA4C2IV58JybCZvPbSCZ3yEGf%2BRO7ddBgnqUeKFX%2BeeoVTM2pSEmWn18ib7K3o6FlKRBwJHWPi0cqucJjTF2zccyyexEAWjstUH5iIKwidGVsitQqT%2BCIemzDTDboBxdD9TbEX7kFirTAZ0d2xpf%2FfzAh9VFEC2hJhczfO0nyAxa5afW4KM%2BuO%2FeNSIKCg%2F91td4DkNOctSqq3wb%2FCSwFUea8FAsGtzNZexkPylOrZuUVCEe0B%2FRtc2%2BMr5wNR9rxgftwUXrhEh3BfMCxKe66rT8RXOOFsRTYZWDD5Vtp37MbmCpQ5ZoY0nXeHas46doRBb%2Fr1i%2BMJAf9Noc%2FNuWQMGZFdWr%2F%2BPl8BqXTsazRJ9g7fY8hfqlDsgdJllPNVt2h%2BLhz8VpBvAYNjoOiLIFImF2rg4JjTytKfFB5OyARBeg76TRPLZjt0OnohKRDikY7tOmwe0umTriQJh%2BGsD0l9dYl2deziAcnrq6qIbj%2FDwXrbR91BlNotHmNjXdpvEncdnHPlA2NzBkRmHx77ThTdxRsxgRLmUj1YbmF4pW6HMLOZ4ckGOqUBYbO54TlStvtSpVgmjPf9ZS5nziWabwCYxjW0l9%2BsCSyBOMkl%2BUNnGl36x%2FB9ov%2BBWrFrQCD651TARgLudG8F0i9w1DECyQqbZ1dEkmI31S30KTpvs4B2I6XdjGms9PqlX1Kwu7aYKuIXpgjuQ1W6J4j3sBL3VcPe6GwvsDtF82VZAsdjHNsAAnlehdFKTI1bWc4NHOludHBonADXy9wsoH7F0ahv&X-Amz-Signature=34d83b29de42afe3817113638dd64126d67f89f542aefd7a1ea455f30d110982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

