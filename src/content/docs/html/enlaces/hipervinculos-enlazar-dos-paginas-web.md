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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNHK3QB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAsbFSlhL7qz43n9vtF98WO%2FdEKGVngKapxgohKA97oQIhAMKW%2FIaIau%2BV7djvk7Fb8LrXQMpDoPmIVEzPQ7bS4VmGKv8DCFUQABoMNjM3NDIzMTgzODA1Igw6XQaCqLv%2F57FPTegq3AOn64QkYdQRcrR809AxYvBcf67SiY0x%2BIYCkm31dAQPK070VCLaqcr2nwklaTqpNBlbcd6ieI0zVtXs5c274zpuWCq%2B11aReldh0G%2BPfr%2BpEL5g0tEuirrWTJzvTBQQCXWwZKbC%2FuiW%2FzHn2Eu637aXcitIuYzuOoFeN2v7PrXkvjAGQ0dOQimOHaPq4n2jzi8UEXbU%2BqIfnH2WOB%2FVmFg67mLw5VBYQSdJHIeCv8IgMRqekch%2FgQk10bLmadt%2BxEjZbHf0RmCwrv2yL5YxGFI67V1V0TYEfAFotY5MMgSS%2FOOSAy1DY5MAPsUjbzhlXZ9md4kJvJ0CQJ%2FTVxXFFjZCdocmAs25u8Z%2BRisnQ6dPTCtapy%2By4WmSXSjLkQ1S4zkNGMkqOWG43FlQ5%2BLPEr8hnrMQg%2FX55aHxb2zodqN1tseJfKZNnZbzxsZxCMMeKetBA7lhVNdfTQ4dGYF1JfxaH%2F7UZGQcgC0ocHD53dCO%2BuvZo%2FKybyu2JYpcRib5PHXVqPDxUgZzB0m8ajzyO0Ek2iTu5bGDdDgVvZXDLEceloTuUz2pyfIYYyH08ERHBLnZs%2FZVdM9aeUu9q6ycMQCgsvUGOVUbDmmbvzNd%2BjLRvV1ALhVtLmsRWaG9ETDaqsnJBjqkATvy2Da3vy%2FZoYMab8Id7n2nPs11P4r3mvaIfUBULCs%2Bxg%2Bi3hQS58obm9rCje665GEVrz27CB9w9LiJvNtJjtjlyIw%2B84s7zGid94Sh0HbE1RCaCwQL6lC4yBGMYF2m3fSjqDTU4nNLwziIacUDfHfbcbihk3vaKM0XN0H2I6OgFiK9YaBzzUPhjnyoy7SRliG9WuCtJoiSOCU2c70FBGgv0gaH&X-Amz-Signature=c57f6a44c6fba71e6f74f58d1b5de389a8fcda28c2510d5fc34a40b79cc51d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

