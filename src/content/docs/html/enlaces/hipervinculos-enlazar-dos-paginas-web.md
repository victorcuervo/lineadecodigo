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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ24NERU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T204717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIGJtOGINd1LH0ZBSIXLmfFm%2BKCS0k8Cojj1Inrrq2RAIhAIshc8LGdU40S6mxblrpwIeBbNS%2Bg5gGQWf0k%2FgIoujeKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaoW3q6%2Fk2CL5d35cq3AOuja7yOevHagfvYsMa%2FRxOPH%2FcEyCq3B61ZriMldpgN0Qkyyh3FrOtcQSYluPdxaarNpA4PUFAOU5NkE8LhwFo%2BbKbXHyE3i2gQ%2Fdhsx1zFC%2F%2F%2FgSibH0dfeTdNbe3oV4keAYt3%2BjxEpaT%2BJFwrKA1f7Or4zc5xd0TDRY9oFTYb4EVzGGUv3vx%2B%2F%2F1uqHDutZzN00TlhwcXk30BCZ%2FVslACR8javwfu46bRH8%2FJ4vpXCb2N%2FFI5w4kL48tGer2OO4hbvFK8kW%2F4uoIAxgZGEqLYdJGu%2BWgS%2FRIONCHAKPW7oQYFH5TT9ldvHci96wUXaU9FkWR0de7roHc%2BULfrcL%2B5pNkc6bH3vvmVBd2goUqG83K%2FYOPiGbfu0%2F3V2rg20cNelTLcJGLWv5B5s%2FvSDdLu%2FZvLIlHqgq9wK2YOhsiWwb8wxnquNYCaoktcFLYRZfOEcKzL4ZGD3QWP1D3pxZTxrAUC6cw8%2F%2BQTklj3aGFH2ecukZNqe4ohk%2F1bbFVVZcFNmtsXjIJb3hjJnOscL7r%2BqQHwJwjgrCpgde4DU8keTmzvNmVUpu24%2Fz9PnDU%2BdhiYCfwQ6DsR9zxTnx7znaA3zMb%2BbnXCE27XcLL1%2B0s1F498Ux8VJiiFPrPWDCO%2F%2BHJBjqkAQqls%2BVvLKeZS1KTI16qSEDk1d5SJgdnPoGaOqf3QeooOvWIPjD%2BR%2BD%2BNpaGRiKgJudTA5YyFAMA%2B6o99Sp%2FCDaLMLpX04sVE5lfKqt5fdQb06Q5Rww%2Frc1J2On326jCBs31h602S0VHbKS2eoEhyEdkgJEl6a1dLKpeCma8wgct3fLH4V7jEvL6p4VDO19YE9d3dSwI40bEBXrhZgHUajF2KZCw&X-Amz-Signature=612ba98d16a8507d1014e0b0385f53531d083c5dc0b853dad81ad600c55e5b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

