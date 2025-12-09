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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWTO36Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnkRHDH%2FkRuBx%2F142dLQC5yf%2BraWFr3en35anOtgPMlAiEAlUWwRmGj9k%2FLkz72LtmB2SrhgKShq7BIfhYi%2FOlilQgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjc8YkUMnQQxLFXWSrcA2pnOcdS%2Bfc6mncwwTmg5LTBjIVeHKhH5TJhQxNY7YWrDB24EQ6ac7JpZkk%2BaVvOCAsNz1aItXEVoILbjP%2B1fDshHV78ewmu6s39%2BHfP%2Blh4KXaJPl0Kx6n73uX%2FBAbndYrUWyK60yl%2FBp9TsljYQuwxfxB0oXR7mfsOrG%2BV6LWuB2m2SmwDrf4WL0P3PZrZe5lKmgO93ZZiAofN7u5fUtJc2jDSW6uKoLhK94A5kpLQXAvc0AU5MNrd828oG96H7cKF4e%2BS%2FUyWOp2t7fpkxMNZPLPd6B2WQRXXeIO6GitC4HuWxl56asTppo7MElFMbe9S7jHMVfQ%2Fja8O%2FHCIBqnL8IX7j34LQ0QmIFgPdPJ1%2F%2B2jO32i5pPDGqrvGaulwW4D%2Ft%2BCvUlM7P7j%2Fm2kyldGtDfEQyrquJJTY6OeGDXXQC%2BWpWEk6y%2FaTVo4NDwHag94t66mQbS0ik0ktV5G3BXiwh6jKXBPCFWiZUsGmhCARO059ooPxCNYx%2Bs%2FRAmC9Ee4iSYqrRtItLTYN2YYu8MJzYshyIfdIL9S2TV8LtfUu98CE2ATztlNhUPoOrzJAAhRZA7KhzuKFPlfAUhWFMtHH8g1V7XtMRZTU%2FEskDdIeS9dWnnATwJcSTqWMJCI38kGOqUB2faSWzHAB5QMQ1e%2F6YrKRyuknO2%2BZSWxqld7DXK6u1dBLg6qeim92awawIgDLBMTRQdocpZEWYWRG6Bja3F0rcDMt93L73NAfkN5jxHAWlMQq%2FdS3fNF5cd8Ntul3MQ6Iedf2zPVBBUR74RvscS280hTBFg1qEhSlndPXdHzJ8N0hB8m%2BgtphLSnoa08A4OVnxOt%2FieWbw5IiZUHgTTmEAFH%2FUu4&X-Amz-Signature=2c1143fa3cdcbab32f101a7599cf1bb5ef2bd8a99296faf2dd5c11ea08143572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

