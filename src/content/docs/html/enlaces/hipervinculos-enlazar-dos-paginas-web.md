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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP27D57U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZVtoA3mjZe0oey1vp0H0EWkg0893CtSO9mrDdNDFAwwIhAI%2BjzUIdjGS7GDXDf%2FZmwfSTqCNuivrbJJx9NG%2F6%2BExLKv8DCE8QABoMNjM3NDIzMTgzODA1IgzSOc8Cw7RWmEW6DnYq3AO7aloqUszZl2Wkaej33mTA30OO19IRSPwu1RGQhagDQBhBvmohmwDZ3LM%2B5wKw5cYrYMBMdzIrSvgIeCjEbzeS9bXyMhKU8BZgh7wKbI4wXVaSwYQ2RDPsNRSfyJmM9njlIAc9glymzOR4rByp5gmLdQ7seqga0EtgCnsYsc9%2BpPWS2clZ5GC%2BehPl%2F6wj0uf27PRTWGqCLIZzgRaEzDU%2FGMEGyAtsH%2BAFwGpTyehY3I%2BTuP4OOg7yzg5hafoUG1n5wXVDw4yHgL3meCGszJpzXBZKjQ6E2e6%2Bg4eCknLup9xlhG7W2cFEY7Cn6qTZVOkjXVyZosbNNAAQE7BntVvPUd3dsQR2950xQkPrMEDcx16Nh1oKG50yRBwyA6W9i%2Fa%2Bcgk2p1UJhnEMbQpMPsjzh8VArYAmmQICINGpj3qptxsMx8zVg8Pj3YXeN4OEhB1QOaY%2BsKAhItH3OQJvgy5%2BdAFpCfi0AG9GzEnbnaTPXHhKYm0BcuIT4iuObbb051Z4j4lzcbjrgh%2F066bWYa8iWgw89cLTMWfAims5dBM%2Fhqasf%2FQeiltaUtEWRjf09grcVv1ntNVdhChX%2BkAi%2BItVTCK6NbGH4WmXuAhFF%2F8DuYb7M4So32JVgfJcxjCojMjJBjqkASYar3MclPdKGHYcRuM16yVotzAKIjklBc6rkGySd7VUVknVy3Zur3vZfc%2B4WSbg4Q7klQeQJWip9eCNDtUtwxw%2F3C7H0pOKEn2H4pTMt%2FQz%2BwCuYftnkWAvxO9vPwT4l4hKWyL86cIrFtU%2BsNPAun%2B16yfHdQ7us3s%2B6L41daRpLRifcS2dbySiy4sTpemKOM%2FrLTmbt5mfd61Sg%2FxldzFjKart&X-Amz-Signature=713c45ee9327d7c7592e6050d036bf80b7423fad1df83a69681d4c309b8f52eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

