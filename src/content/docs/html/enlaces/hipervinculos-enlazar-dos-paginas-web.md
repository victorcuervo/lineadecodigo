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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN23TPAC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T194533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPwHfR7cU5rRugeFmhIh3PlsXUpQyS5FnvFZ0usXmjUgIhANpAh6le7wzbUkhezLYTFH88orwv%2BiAfjo%2B82vJfBtykKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybkLYp7pMcoAZL%2F8Iq3ANVljYaFXV1j8Hl5HZQ%2B25%2FL6PqcjA9EpuL%2Bbz2cOe7bQmde3BxJ586E18SWO4IuugdzMy6N%2F5q2BEemZ6ONl82%2FikDyqtI1zdfW66SLxVP03wzJR0OKnx4K0kD8XVWOAQUUffMLKWKCXjY%2BY3w%2FZM4hHqzXpa1Mh0q1KECx5S%2B%2BXh36Jr73BVIzTK8s%2BsMuWDFwZLlUot43gSTKLJflqT13UA0cqa5hJm%2FM7Ud%2BgEr43J8QqfBrMYfpe0%2BHswh6U0DqIiUsMx3IVFumVEWL3mfqePKd%2FVRaJ%2Bs6H2FTda6PdeOKtJBZPvVbIG3j01v%2F%2FpHUMqaKTLHJPXJqjrWCiU3vSAFlbaou6H%2BbVrtPDQjCXwob00SYkn72lv0O7E6kyHmlVChBP37vYh9Iuwvi9bHq0BahE8e1EOBvDRlYj2%2FPD3Y%2Fntmiuf9pdJrDSgUpj%2Fhj8FOMV5GroHqMYEoD5AKoRQ8PiIxmvOzKe2OyRMs1%2FBlWaaG7YZwxILAKpF%2BU7CcWhBzyqs6pGX%2BIx9L%2F4Ick3bAd9p0iZme0HdoUDBAxLGXtrJA9cDxwP%2BwWSGVfs%2FjaDxuWy160kOdSTSKC1DPXepwJgFfcTQR1U38IiAPT02IfNiUES9oOqSgwzCH3%2BHJBjqkAb4b8N9%2BNtoTSXcc%2B2mVKBsltbNhA27Bsod1C8oR3BHtyDRpwXKU8mmF0vPMB%2FBe7FWyN0VcmGwAH4aEPXXDFwD%2BNlmTydFVYzYl%2FxHQso6JQ3lR8Xeu0ZA%2FHRsHKbxrt9XXDCvyQwGf4ygSNGmjGqCxSQNlopAbwqG3A8%2BGGACZNcLLadMVBiC%2FU7k56Q%2BFUcAi4nvn6259W%2B4XpttRgjk4KPe6&X-Amz-Signature=48c4c9caecc4ccefb83b324ac8b72ce6a7d17f2df7abb787cbf15affbe49d152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

