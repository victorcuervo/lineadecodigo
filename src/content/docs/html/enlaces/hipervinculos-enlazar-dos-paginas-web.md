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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJT7E2Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi8I1teBeZ2qE1c0qHuz%2BhorndO4mX9%2BiY8DBzyuYN%2FAIhAOhN1iuk5HXz%2FYIetG3MucKX2VbfULk8D84ygh952cwvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz15pE6FKvyhNo1iv0q3APZ8%2FXeX40GwOJijfhLHdxK3kibjqC0f6byzK6BggXC6GWxZejgNbmfN%2BUrG1GYKoHj5w%2FRZfwnBVDGtKZWE15z4pJGc4aeZoEJfeCMDBRGn%2FTnYUBEtLfMUu6jHC4dpTLTlqd%2BJowlpRd4tDU3pGyBTvRy3LqxbNSj6Aq%2FUzUXaVKLPuyUkduXY5Q3HhPOnkPd18%2FraLhW1SZ5W3lvRM9ZcgY8x%2BH8N5Z3eKFJ81cb25e0BeWSEQ6OesGfwjoLblkFLuf9KBqq6jJiCa2NYfK0pr7PtVNtIAftDh48EvmGxTBua2erFrGQ9BYgBTdOfhraxhNrn%2FhxFsTpwIlgO9z9BNCv5fb%2FJYL0jeKzD1%2Fs0Fj%2BtXpNy6KfaKTUXRH%2B60Cr668FTpWJ%2FjW9bio7ScMokbMi3QMGkO035gkDrdasjR7C8Pvv6ecgeKOdiISW0pLHXVwNeZrbFHYrNOsF1NAuSV%2BYrxP5OSEImMx%2FKdHGWs6wSzwnI0dQOsFGANfvAFNSql4d37Q0H3CQk%2B5TKAjNJaAuGKz2Bns7oEP4ItQZ0m9Vng7Qq6boDLVt2rwvp9oZfTWTCq3EXqH3W6ZBfeCBLBoJy3wWBVouIlrcgKP0HnsopIco4BS6RXUxKTDEmtXJBjqkAZezRSkxhX7arxMQD%2BO59CATykYs01oe5ZOLFb6fxCfihDcVvZKGQS7R7dzP%2BS%2FwNS4lPFNS9rrc%2BDJbUuRuf3ptE%2BMOLfGPP6rFq1DFt97%2Bw5swNkKRXc3%2FscW0eWjCNHm%2B%2FyRFOao1il4UvxdbjTeqac5BZVFnXdzQRBpDy0Sk3rbYWRSCUyvXKgN0BpLPyUHvfpFCXzFFCDfH9xltt6qMlAop&X-Amz-Signature=6ec4e35fc4174c20010d3bf0432fcc12f38a18c6ebf00c3957d96b4520c1f613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

