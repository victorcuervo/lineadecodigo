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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XZJOS6V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFePEMuWRt7GInMnThMHKdEZQDhP%2Bb2yQNg8SEkMsYqmAiEA4OjYaVvwDpYnE1HVPJ7l0g0fvyKMuUYmFDve6C7eLOMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOX6k%2BQmQMDR3tbYPCrcA2%2FeL0s5WkEVqu4MdYnsZ4qI7%2Fy33u2fIb7M8tWK3Cq3aieUazXzwj9M2Tdcig7EUtWWP9wy9IK2Y0Rn5LHbkwyiQOq%2Bo04SG2VvkT9jOh3AMnM3x0wIGVU7olRdDWk%2FZlEDOEPzfZ3waNnVRjgHaWW55RJPPtrrh20Ejf3d5uXQNwdxNYQXcJ1cTy5RfzminxxO4eFIHckttCkIZ7dTKIeRSuOp%2FGp6SalCum5tTu%2Ba0t75A8RAp2HIWpOzf%2BxPxdwAJI3NEiE3UO%2BEMUpiRMUVCJvnLEL1Ge6PkjdST8sN0p5hRkPJwBGKgizYL%2Fax4o90c47XBy%2B%2Fb9susOc1g2hkIgaaRU02iTBV5hDKpRjJy6AJvpeRcOHJd4266mFfBkep7UIlpM4A99yicGl%2FZGMMaVoFAuJc0OyJkzPfjrNvUQFscQaHrmyh3%2Fvngem89QIn3j0O0uDYvoLGMCCxMlsR3Sk9HaNpYaTU9KbvQY6ZHUiM3xLZtgKwCWqLbwa9LKnY7chCIQ%2BhjZCTB3Q5se9hk6TguMD6nbjrpVGxkz563%2FA4Dn%2Fzif12PoXxIvRQxl22Y8f1zAOzTprWKykiKTWdcBS5N%2BO%2Ful%2Fr%2FF2mAc4dHfOOd2dZprqoPcLAMMea1ckGOqUBY9knaFlRjCV4s4Lt9gleq1bRaxGSudn9fy5LLblsUVot%2F4iMoDzZCi5%2BkMZxIOY6gTvydNCOppj5UmEimIvTcngden7xcSWpJ6zAp3JsldOIdtM5UCuY8qUoELUaKdmDaln3zn%2FRheRLqQKBu90o6gQWVZeZEuFpLyEPX0csSKEkildx796PCfy4UR3TZApvvl2pj%2B4Uz2Y2axpiwYNTxr9HVGSI&X-Amz-Signature=d41c040d57222cc77d37242ded840ff8933547d4c2b2a4c8ad60fba9d3345988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

