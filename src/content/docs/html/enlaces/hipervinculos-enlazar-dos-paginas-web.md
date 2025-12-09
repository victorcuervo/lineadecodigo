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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVZBVWK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7ksBF%2BzFG%2BFByoC3si3nfTn%2F5kAKaA52Yur2WLDlzRAiEAri%2B2Sh9cbjvYABEvzLexboHpRxbtPj3xQHb3l%2FURrfIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtyKsZ2cArfzzrmcircA7oWoanRfaYYiqRWNoIAnk4zExvHS5qSPTKcEweIREcXo3cl9iZjippFfb312eL2Psrf3H%2FLIhSbFBZ%2Fs77wU4DALr3RpuTh%2FkkJsi0h4AXVv05AQKEXzDT5LuvjB9pR8IVIw9TE6x1Xrowpl5qnfYT89SZsX0HFN7E93zM7p3Yx%2B3QtlXjS7yaGieTvpmCR7VY7%2B7YM8k4wkOqiE8QW30M%2F2AoHIkVBuI1WkjO963W8dYZUfn9uuKZVnhxb6bT6xdM3M81nrawKLvP2pAXwc1KohkkDSNszuxHlsJZU0F3p3m9OiU6avDAhnf4y6wAXbEju43dKtV%2BH0%2Ftvb8UqLS7F4y4B1OWfUxZiRLq4Nkw6oIQC%2FUrBjql2G2pZbK3cxI95x0m0x69qoUVkSIy588u4y50%2BX7g037cHY78l60QczPo3cpMCkM2Xorp13SKGXasOOzYs87yE9ATceloDoE%2FOurrYh5aTiqR533YyOdDb25CWTn9lIBBosYzz6z22f0qJM8B0KnVg%2BeE1c8hCdwO2usPnwQ1ci9vok%2BM7q6UnEDKUr3rJvIeVtP6Gw0OOKhBF6n4jHTxDsUWC2B56M5JixiH7nCrV6jTg%2Fu0Ajn%2Fs5rsp7KmN2KFDwNcmMJuI38kGOqUBfvx68Shhcc0G7AgEszupwMKImttGertHtE4hJM89%2BNTWFuASoQ%2FIweYciTg6N%2F8VBPJQmr9JNkqr7Q9RJexOJikV%2BfZDtruiYJIdeWt4SQoQ9ooBdFHKa9G5AlB67fNB95GCr04XrmaELkmVNjwH1cON17%2Bh%2FBB4p5w9l%2BI6Yb8J3%2FVEUMmvEnZiZ0pNWPY0fJMaKvNXwiYX%2B%2BS167V0oyeMh5oG&X-Amz-Signature=cbb8f9edb247ff061892f1a024abed3cc7a1441e1a3243321d871d903d0246b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

