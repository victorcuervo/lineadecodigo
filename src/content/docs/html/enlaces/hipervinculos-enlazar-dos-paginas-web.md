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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBVWVEI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBP%2BVOkVAfgO4BLZvZkMr%2ByhyfKKIN5ON6gkZ7wPjpizAiA7lUPA57p7Q01sV40IQTwE5HIFDaYEQq0v0IWOnDFN3yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMaovE37f2luJV9XxaKtwDMbJYlF0sJHbF%2F4bBSCSLviS0fK50UZspe6t%2FCvyNnFdtSC4JDdYZTnrU30%2Fc5DP6%2BAWmNyBFduToVKs0cyZTMv0pFfe9T94WsFDH32MZ0byruUSro6fJfDRomE29ZSWpwEqwSl0wAdgmsPGWJ2tcr46eSxp8cDwFF0xQzJg%2FGYZBwtLemn%2BvR7oe%2BgBQXjPXHjsncb1VXQTnupXVYoXpIxDZqeWFKxmTDcyTT169GXegA3jRRzuNkKNED%2FE6TPpAqsgSmuTLl2WPnXnsyQzM4CBggPCWxRoDrlkY%2F2PbVJc3ELVxrB1P4t966BocLOYNjqXnbD9UzYpyhM88EystZM32U99uWZrSin2%2B3DDbc%2F93Q9Ne0pYWZo7q4oEI0GUPFK1wrspw6tNt369SbhOyQ2gUGwMhnCl9cJ%2FsNN26RZM0c81Sw345OV7O%2FLxk0YDScux3Z77sofbW3RAVyrHyT485V1%2BLlkuGWl%2B4RfAjr%2BVRU0I9JRuCMSRhGYpdoNGETWL91FvrNeE4M38cFYoUe%2FhycmfWEJkTAsd1spEA2bD65UCZGQ12QhgBvhKcA2oO6YaM5Y%2FtCG8LAtBCRdO6KKXehXGwKWXUFIRjxzddqKSzstGPvEoOEgc3yFgw3I3NyQY6pgHvz3QWMxsR4Pr12rs1JtG4WuZDzmJmDTfduKov3m4Gt81imyBVm1wOkER58hSDnYDABwGf3cgC%2BN9Zefjv%2F6P8j23sxPV1wkISagDNkEOC4NgjwZaLOYfpEFrqcxjgT7P7gxYQCK4jfm0l1JRwkeurlwrPtL3RdDx8%2FRJvsJyB6rzrsBlM%2FbpQ7gZTSpsFu87k78VuwqaIPBYARnJg8qDMoT2W0aQr&X-Amz-Signature=b908dc2714d09d4e070a826a7a747a4fc688c8bd6c05f22ff27a6430a8aa288e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

