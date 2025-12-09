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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5HJ3AZ7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl17vnrr8iJOT%2F6CsSEhocRND7hfeOHYHQqdPXDAMkoAiEA1UncKB6cCyENxh6sK%2BHqJ1O%2FtMgctotb%2BN3R62vU6MQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5QnYVdsrrrQnGvNircA%2BZ4n1XVrhY8B%2BDt00askxQgej2sAKdAXn3xiyujiKmgZxGsqg%2FOXSKfIHdIe4TkK2g9Wl5YLXHTLV8IF77Z%2FPaitYK3S02v%2B9LSG%2BrLAu0PDg5uv39RHXnHJXAV3kbx9k4mQfSot1NgFv%2Fqp0cgyfxAISfMj%2Fkior1Q0PP3LPlYKzS9JLG4jpZRMpCy1kJqUj4bMY7IIdcTtabcAgCs82DGKzWUaYNU4qVJrEE2OnkezJncfytTFNHXYPcOXc3e4Y76GxmLMMfQSVZcR3d0tqGHkG5x4PbhASRlwPSTn5JQxFJ%2Fr5DQhRLyGC0vLUrAOAww6KtDHygiVItxsyvXARhOujdgqsO1MLRy%2FKF9pCKFm0iyj7eZ4h64RPlPQEK6185EWvuOPB8F0zxXcKodt8aDdpx8IENGWtRhSxRprtzZHmiKIBrieQ6mA7pNUR1p%2FrJVWjA1MqN%2BAkJWFi7bdTc%2FBtAujIhwugPkSkhbYBjjiV7HQWgirrqaQGnRJVAI28PTa1wex6QgVwwzyLC9xMKyxTfYTL5ZO2F%2FAvAQRqWjB8c%2BLMXfa%2Frsz%2FVPothMeUFo3ingioJJgxfA6aeFoJag3DrrPzo4mU5zPi1iDHanevgariD5b0P%2FHawOMMXp3ckGOqUBLhIPUDNwTmUcECi8S3a5UGLWWJag7xN5BfFW7bC1wHkIjlzzV3HrCyi5E5CccQnZUUcco0mzWEqHnR5%2B0KzeMEtoYOwuCBoRw%2FemmNzI63ZsqCSuDHdKPStXwGib77TwiD52siwAISkkXkkDhg33QtlRGsYjq1HDm8jOGuubVthk7MVzadh2YL1mjTNTeTBwcb%2B%2FT70FJJ%2BRijgJ6HZqt1Qx%2FM4Q&X-Amz-Signature=a5ebe2a7ec39f12ef43ffdc2f24077698eeea3ef113c7dfbb75a149cd929217d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

