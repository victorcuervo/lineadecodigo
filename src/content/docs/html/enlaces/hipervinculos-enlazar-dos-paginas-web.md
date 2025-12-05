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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFOAX4A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADmUZmizwkwhnws%2BC3SU%2BeAfMxy4GG9aYSgnCKjYKY7AiEA2VPoOz%2B6VBCdhZZy4IkbPTELXwGLUsePWzBdooR19R4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDF8PB0g5aMjzXAveoSrcAyv%2B71ilim8AuiDivkQNmWPjDj%2FGeIeWU04hE9uZ%2BB8DC73MN8nMnNgt7ZM9HaLFU7f06cYEBnopVxBPNBGy120Y82eVI5tjcXlRMZFMYpbC2rxOLNwfqLKBl8qekQg2%2BFE3fKrx65hATcMrTRDltD2BGvUT2UrIg%2F1IrDQQTymaTD1xNFd39knAD7naWjTX2nPn2H4YhrsJgrwduRt6gK5H9J%2BRnRa9dSgOL65ANqsBjECkgz1gQV1IGkNO8m%2FzmtT37hHYX2BACXvAUUfxW75c5ssY7tnpulDwickqw4EmS%2FHjzMtAaS4u5sNvLUcVXkGd0V56RW8yuOhLsbO28%2FafOkhKAls2Ip9qc3J0JbcrGeDvor4vt0%2FX8s%2FnqIXnZlbWIKemnk5Bl6WMzaB%2BC9wOH6jEjA8Fz30vrG5DiaRPrP6EIb4MkIxIiy3AiQV3aKenJRLfQaCkvpeao7waS36YPcgUaHj0%2B9gO%2BvM%2BB6Q75qnLhOh6q4gPHH9zpJ6Q8tAB8k3TCFBdLj%2ByFU2ped5mZQMVO5pYRbFPOz6vwVUYrZYwIPMJgU3omPsqBnPoNcOWdxryEZorI3H%2BplMS4QKEOuVr2%2B%2Bp6rZRPTr42921GEjtoDr7ZhVoDxJPMKHsy8kGOqUBBrKJaiu6RL0qxIvidzZX2Sv8A46uJsKkqBbyN0nMT9CPs4qo1osOl%2B7ADAP0va1O0PRaAyrf42oj8y8d0LWEnKwQtp0moYmLwIUiIMPUwMHr9fyHmvxt9N%2BUw7hvVF0CrCdroKGI%2FygFS1m2DaHFUfpDXEugB3UM9bzv7mMIF9wWDF3MEzxBsNJABdYOD9l%2F%2BMv%2BwSFKE5BoIlwap9vi3M8CG3wt&X-Amz-Signature=0641d11dbcc9c667ff45f8df3febf12d914d77c88defd4f50d2c983031f4a731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

