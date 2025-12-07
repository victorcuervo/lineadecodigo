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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5QJ4XN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsFnjX7dmaYdAy8NokllN8%2BnjWFxhDX%2FEC17YEYCxihAiEA4UL8JdxAYHKG6aN8OuWJE6si1NsIwLyEK1PTY62ZK10qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwEnjPu8KBE%2BOYP6CrcA9fX%2BS1vM1u%2BU4WDUD%2FygVt6eS7dO%2Fm1fVWqIlrPCYbJHWQLmTQseXdZroJyym9CKm0%2BD8YCDqRnIj2MKwEvM0eOAxIcFOPG37RL7Pv2T16MoZtVspwW4I39TVSbe5lStgy9DWXpWAQ02ca%2BvXqyobWIcqU1v0AhXvDCT%2FM5sNnNT7ZDTO2%2FAMP53iSWbSRXJ%2FHFwb8bxdQFXfkk%2B20oqe0RHRUmUnnBnCgVsZJkGIOjzzHI6ew8f99aMEd%2FXJs%2BZ3DSqrePA%2FvNw3h6ao%2BY3mxmm4KGXZspWAkAIjg9tYAG23SSbGIwWpp3OQ6yriVhxV95LHXUkTSONq3d6W4FSE88Yiws8JnArU9q5jzXIdvjjYsLoKDLPluUG5jJkRF09b%2BgerSM6Q7DnKLZGolgbq2zy4ehP3o5bOSwMpNbgt0yQO5efIK1%2BUrHCDUKRRkT7wH%2Bk5aHl%2Fmn703WUIuRUS3PeeVIwchn2w9bOVmOHMSFQOAKOu0YnjntOAcsltlo%2Bx88WW3LCxkvkjIlhG2BMBxMY6HgPeReWM2BG9iYo1f2bbhDFMEfGMOrr9DSY4ZtjI6VOosoZWDIjncbc9Dodm6OH%2B62S4MzshncJF1tTadAmVOH%2FjIyjE5hT%2FyAMOW21skGOqUBByupcYVssIp3%2Ba7IskZc7aW0CLJNb%2FSzddWv70VgxJP98yQz4kYdmXVC%2BOX3bIxW2K9szEjuISArxEEMc6bBa7JmZGWPiTO3jnXAjkXcTLDKJ%2FbaAJICqF1YMiK85yG1pR5%2FQC0EHeX7IFSdgyu6XuJUCNeturjGKf7SwqFoMju6laZuo2tDup3xV8XfR8TgwpF9%2FvBnWw25PHesXM5iZLr%2Fs4Q0&X-Amz-Signature=549afe9cd22d55d2e126b21a9fce3f5be7bfd1470b87b657a395f49c703a109d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

