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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNELTAQF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTuPeiZklS4ICiBcFTtNX5RFPySEqCsSOF5sQ%2FH0IYmAIhAOr8IA477E1ZRF94CZu8Sk0BQwC4IhPguKGZwABWZl%2FMKv8DCFsQABoMNjM3NDIzMTgzODA1IgwVzdoc4qcWPLQJwHoq3AN6qdnX4sgN9N%2FIoY4wTqm%2BXPHMdkoxzovhsZqhYK7CDDe8FbNYuQNXexI1c3TD9i85WBwRYVXQyq7qGGA6gdpy0%2FAyOwjLGwlcLWCK8MyT9v95zE3ds2vMJBu%2FFGjTY7V5hky2C%2FxpC19pBvI0zAnL1%2BcMndT4RWBxSLM4f2I9gEU3i7zknrTfJiZGyzTOrPRQKQOwzX2xm7il%2F53ojexsodNoztvZlUMxOn9BEJZQVJ8uN0uwy75%2FjcoP%2FX2CFZ1RDVV3jRAsbWUB5wYSd27FXlaYE05LdebEWnxfYyNYiDkiVqrKbTVBiqtFA5kmcu4Xr7%2BmqE2hV4tFsmbSdvapWlQJwjpJz1dVXX%2Flg1Jom8hvda%2F%2FZC4Yyp1HhJlDxQizwdrzfpPLrQjiKDqsjWMvkrVF6fH8x9tqbUM5bJAhD4NT3uDsceEwx7BpZCmCOAd1hcT0pUuP2WDBKnRx4prJbSsE980GLQI7LSRbf2BQGnLgpGhavOTU5gNR8HW2r0z%2BYWD%2FWs1KPzIHNlRABV29sCY8aLe9JE513E0wUFPLrBYlDADzw%2BJK8r6FCznxpN7ZLE2PmFCVVX94Qfvl1X44jV15wwg0x5RyRBF%2FV52Z5Iszqn0qgLJjKn3B3DDU1srJBjqkAfNBhv7CtQR%2BBilGA1%2FoOoJ58AMDoRQn6oBOa%2FiGgcO702%2F7cJWabXFEzvtYPO7VL2EWZf%2FpGBaN1fV8c5uGhT7QMcYUsQPq4bqYqqf4cvjKzoM5GHwI%2BCS%2Bic0aTi97DicBVpyt6q0ITRY4w%2BxqYoaRzJqICnmM9gVY215PMl9siTkehDclXiHOH0dva0tySUUfU2aTXTzLIT6u6LEfSKjyhe3t&X-Amz-Signature=5886e642980a0fd8d92069619d6dd6f1db9de9c8e8c41ac4aa941feee0faf4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

