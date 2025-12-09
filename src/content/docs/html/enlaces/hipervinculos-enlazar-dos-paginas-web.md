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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIMG26TL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T204137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHa2ICF4BbHB5NJgY0ZN1FpFT1N6xiyPY5qrXL2ZrXxDAiEAmQpacMYqzaHgYJiQ3vPkwUbZplAvd7bgLee9z1UdgbsqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbzR0fmgYTgVOq9qCrcA%2F5%2Fq3DpZfsvqDsNPG2T87O6DKiM7Cm8rlP2lEKjaB%2BjaqV%2FeaCexiaDrGCW%2BjekNSB6mwXHClb5Z3Nj0meuvZgFOSAtfVhurj5BuNktLNA%2FezidcVxg2Zr92gV8W1NaaCyX%2FB7JS1g3P%2F3jQARFjWit81o1mYYRRMlZQlq0zDc9%2FdJ2fxuh92qgkf%2FQtVLl1QYqMvVk1oIFmna%2BGa9I9gN4ZXFi7fPL7y3wRZK4EkEKocMeafFfB4RndgRL55c3T%2Fmu%2F3xZLVa6q3gQASLF8J7sLtXLr%2FXkG%2BQipDXV0HBHmJ9svWpTiuaDdJfkpRqi7avQh2LYiNOPucYFx%2BD564%2BCSx%2FtfD2S9q2NGwIpxF8Ue21MwnfkyFkVf1K72Mc%2F4Ihhq9ENnQfl1tmVa4X20QQEvU2U4NWERd%2FuC76nwpDgWQ7JSpGrjaKAcR3b%2BWjlWg6utirVlGKL2rOCWUXO6hOqa%2FJVtzO8F3P7O1R9UVrduu%2BMWT36TZx%2FMEE6es204W1ep0NkfVO4%2BBluPejZSGiCph3nyikLqAtz4SYTfrmfvCjyGxKLYDq%2BiU3P3Zq7OsrHemee04jZD6tUSZoa1VvhdosD1N%2FyVCIg1RD1BEYjFJ%2Bb1IYwzSDVBCdQMKH%2B4ckGOqUBybb%2Fifo3ucG6viGGSWHR2UsFNh7Sd8LwSRjMGO9MqCTodX4YXm8udhOM93nsDuWCDy6EYZWqOmuTGyovk2CTu3AmM6kuKX%2FwSvaNY2LdVF7xolFcMWVbepCQCH4Pe4EvEIVsU9VYjuRLYz%2FTnRX7DgSDeRJwuISO2gtsxmwT27%2BIL4%2BZVM9I5XDfLKRDfnHPbbcd%2F5%2BnNEdmB1KUJCdVNjXxSvGb&X-Amz-Signature=454cf1598ed2f97e73b39605685c00e67326344f5ce61ad4c3b607dad3485d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

