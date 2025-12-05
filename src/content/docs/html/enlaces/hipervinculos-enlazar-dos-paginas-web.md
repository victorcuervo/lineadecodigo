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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYTH5KO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2rk%2Bms6ZnewgAIAfaW2Gd1UUltjJ7ffNzBPvcSI2PUAiEA3RflRJIO%2Bf1m7adjWEa9twmgSflP4e8e3Gvxrp470uQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIf2up9nw3uBgBM1KircA4GkSIC7JikhOZ28ZGYEvNIAztFFmO1EMige%2FS4wIp4DPCbVmEH458BBtbIQo1%2BHiQ%2BlavxxsuAwvAwCGmKcEKI2LbmGYSumaltfh8872xb523a1CKjNcT%2FkLZgaxVN6T0K13HGp%2Bwc9tWTMnovxzpExua153ZVrASnZ8oe9scLzG5V%2Fkbrg1j5H8WMAIc65X87Jjafa3Bf7wAD%2B2NV7ucI2Y706F1Aj7tTlJlfa5ZakzHK3jECset1yUaVBmUWV3F32XXt7%2BXZ1GW%2BktAg7agKFKxYh3sY9DHCOzdOf921UE6aKoGZjrWjA5MtvfIm%2F3QPVSdtfIuK3CPMWfun7n8Rz647sn%2FDTRL4Xa5NUX%2FUA72Eea45CdjLnR07TQvX2BhZwJOm%2FgeJ71HaZL%2BD6yFRijOfvtRqLtkeuWADqX%2FafslqSrcU0yIpCDAYSmfJHKM6YwcH3SsgiPz1q1%2BYdU43SilgMCCLWzHan3Nw%2B6lNiUrOjj%2BNfGGxS9F%2ByWahoZNNcTPtvf5LjxDBmoS4cmnu5mb7lmHlLKW55rlDUyyNnJbBXXfM1QXJkRmxYcUBDLGLezd4TENaF4BP%2FKVpUbPMt9sGeujp0zxQEXbczONpVWklu%2FyzaBDJn8E1CMNDsy8kGOqUB3doUnq%2BtswL%2F4JkwT7Lbjs3BCEB8Wq38QTP8RqzkOv%2BfErV2jPDtN4iqSXyMqBUEDwndMdhg9L2%2BZlrBOBbC0xTluQBuuh6geauGBEFwV4OwLJTG5A0IDceBqLOoZ%2BwzwzQ7cG0SgZcgpq35e%2FFvZJUr6RkGEp2C%2FhPOgVjHeIH5AvtN4EzajrtF4Ifcf6%2FOSu%2FDR2hcbupi5AHLZOpZAv0Ps685&X-Amz-Signature=f3f3b983f1daafb77039063d6fa72548d7ab99cf280be0b4d16607bf9701bf83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

