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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZNCSN4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcCxQbpLL%2F2ZWwp60WYlmmIxg4MMTwJZBFe9ktuz2ggAiAheplgL68nRva9usW39VFbz0omlxxzx%2BGpsZYeAIpEZir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMaqcU2F8bZ4u4qEwVKtwDY%2BiIMtAI9ZpCvaa392lxunXenuqHy1ndQcJvW8pDgsPJVO4HGMiL79H5j5rZf67zFAEZ8D4hi6d7K8TJvOekI1du0Kw1guYRyCKQ3I1alFTqFuMju3rqCzmyU7fmxmMAFxfNr%2BS9KPoe9FVV5dydCNfsUe7VI11sVYtMXErJLuBcwiyJGhAzobrsaRPB3T0b1TqMp4XaIAZ500bEtlT%2FqFSh%2FRk%2BaGqQllxTV4%2FacqDnT7%2BC12PQrzK5ZIf2zF9XXk9oBCDaixEDtaicS3ge9X68tfaNott8oq93fmuY0m%2B74BefzmNk3fD2xTcxDE5NORQ6xhYyPGlU%2FZURtcyf%2BK1D5QXnzbwRMspzf%2BmxJPYNezCIiaKJZlQ3jGS0deidu7889LQvMTs11m%2Fn6yObd%2FksBjui3mF3ic7CNF1NBzTj3vFBN36Imj3Vhht6%2BmqDmyw%2BnF%2FuSNQTX2N0ACx5sv0CVdfQvZQGh4dgm4OU6vKYd7fNAnVFPMS7teE6uLNPHeAAqktOC5vEZzpd2yaU%2B5KYaSe3DHcncxhlnw3NODb5I4t5sOMBRyaYdGLWMwut6XpdQqwENbi5Eyq6iE%2Bx1R%2F0ZXWwBTwQG1x%2BAWrUnS%2FyAdAtgvadjws72QUwxabQyQY6pgH8yLgK9C%2FmxCWVLBYDc0VxSEqzGsB%2FhT5XPQDwHMqCGbymK64t0eBaD38AwOZksrcOKejdjJhb9BU4zeqInRJHl91LKnZFhF%2BxGSh5ucD2YlFTn0aAHd4BCEAh%2F%2BRXXAIlqsc3LfDyA9rL%2Fdul1hh0bv1sOhPgBYXr3KBbN%2BNbla9kcuvdVaVWsxtUG8BiCiKLkvGs9haBHHz2z1VhQH0k3xiLVkNP&X-Amz-Signature=5d4e8ccab8ad45d159dcc0326e5dc443b84dd432bc717ad200a3e324323762c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

