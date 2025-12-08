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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3423L4K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4Kb0gJwlqIHng9dPeejLAvha9ZBTC%2FYyC2whYyMVuEAiBj6bpl4W0JvafNeq4Y%2FcL6AECoXURnGAvsqUYbdmANDCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ca5PnVhraERXC6nKtwD07GhUnR%2Ba6rj%2BZCpSn4zNRfJW3feA9HQ3Gs%2Fv1h2okAowR0z%2Fe%2BfrcCK0PNxMSZ4SbNulPF2SUhKfouZXYtt%2B0cewmJPpqBFmdHgQkbDrV83TywNBNyJVlED7RWWc0j436aQRTLbNdp1nwqDFvoUX6ZWGqLMya2MfanoskhRkPvTWh%2FRNQ1GNCx9usBU2CNG0HTAyi6gBxUUr0QsCYu0m5VSWr7tcy3OXUeQZOIVUvnqIbYpStWGlASr0Ea9Fuc4rcTXVUeUG3zR7%2FNt1naYtB9IoaBwBRO87KNQ66pqaXo1Kv%2BAMe1YF7YjgcKzsv29M2j%2B2QgZojxxg5DzPbHSZFvKQJBcFH02ThSYWxFPu%2FO5%2BxKVB6bsrj5VJsUe%2FCKBkxjL8Q9pbUG8kzfB8eX09yxh3Ab4A19UoJ2BLx5ADpK45mgfuZ5w0OEa2cZhFdRCQzp3kLBsphyMukWeDTSOMWxYGkUACltfJ6dP8XBMdlgzWr%2BWfrV%2F7iRPhuhvN8Q1R7XQOmckXgunyOif6B%2FkrG7YkEp1KKuDHTk6qErFbefITEt9kDSEEk5qAHy8PW0RHGCz6ob2MDNpur8db%2FDmnYkDY5DC9w6exuy9ML%2FACoky94LVaN5OVPj%2FOmQwkMLbyQY6pgG%2BqjFrhdjeIAiAaaD0cdFhAtimqBzKdCTwCmzbg5M9VB%2BX%2BALzLnbb3X127%2Bkpk%2BThVBHJHzVQ9a4He59Nx0CtovVzG3%2BmMQB4Tcqw3r1qC%2BAR69tqSNb5eMe0kdzpy%2F3QQ%2BJI5LUXbwuetNcEOc%2F0ZvPWh%2F1tXWnfNh4f9jXQ2r1W%2BJTSj0qgIqCR88E792sJNQ78yIEpWpa13SEiI7hdGf8cHmEr&X-Amz-Signature=d4335f1315d231086ad0e78977ae1c48a3f9376c9e966d0cc44861938894d473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

