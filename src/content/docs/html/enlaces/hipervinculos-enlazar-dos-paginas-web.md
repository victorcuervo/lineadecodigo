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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZEFTIWN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T231931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1GbPM%2FsEGHtoQ%2BI07%2B5bAD4U0ddLmr5To0nzpQ%2ByS%2BwIhAMPww4mTGDZ9mwHZs1eQJqtznvptyXelxS%2BbIdRD%2Ba39KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzpz42ib4F7IW4krrgq3AO3NmZFSudG4fkcfcFIwSJKDrYkO5F8mfH30%2BW0d8cUHZO02Z13EFRwDKc3ubGYIqjmDXM4P33oXpkHYcTGjkX9u8ljmuMOKc2IdFz1lBsaU8VMXS9%2FhfYXs%2B1MpehFz50yYMa4bcGPGQ1oH3JGPNWBuvkXVP3U0yxAUI3IIFeaF57X9C0YhOKMq70xyoO4zazujPrBfEtW7QQpWRVnOxjugljdjBj5%2B0NyOpElwNV%2FscP%2B5E2X5NsaLtJEimuesRuvvpdy6sHYXBdy5Tys%2BXNrn%2FJompMHPA7MkPGPWUyfZtoNlsrrNrmfKGGlDvt8mCrxrhbDQHaGby%2FcAdHhDQ7Y5MGW33q%2BNB3Nl2tM1IO0QBsX563fM%2Bdjb8uh8zV8n3VPPTFSg4rgGXqwoRtDMJci516SMadclvuU%2B6swdzDAfugjRWWAo0RbYTformiv11O%2FcMEfv%2Fpdc00B%2Fa9dVRUoIVIcFDpza0sXIJ%2FMSjbjptfuxx3l0KK0bQJgBCack8Gxz%2BMaMrwF%2FF5ihWOt7DEDecfb60tMO6j03SA6GX0HcSajlAFEhAdBIAPgCXakBSl6ZyH0tjY0R%2FQta%2BCfxXw9N4iluEEQO89LWG91R8NDDegETqrEWwxvM8PtnzCWxOLJBjqkAUc7UR7E%2BCTH%2BK3x19w2oET9%2FBbh88mMxyrrRetKIBuCzk9iOl%2FMibvaPBYKfjGuRF4i8FE9EPzma4SSEsrfRwBQp2a3GVlRSWhzrtoPDZytYzQ6Jq9VWs%2Bh5SkcShnbmzJwD8II8go4nkhjQno%2FQpI%2BkJiFkmP3OXeci20hnw5JCbtp7vsD8RWjiyE28jNn8jgTF%2F%2Bv22Qhh383y8V%2FwKiyBANU&X-Amz-Signature=a6b11333178888b3505f17e567b8db655e7fbf91dcb4567558ec959cf2eb6641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

