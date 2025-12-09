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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMV4LGI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC56jjABPJAIoma8UqA1XkRmVmyooaf1kiF8KS6BJMS0AiEAvx%2FgZxX6OlunQleZllN334BXwrz4qdvkh7CtX0YclsYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvnY69wf%2BpfeOQsiCrcAy5MOkgoS6xv%2F%2FdC2YJ03f2KOSk0ZNTg4uvPlQO4NUQRJo65BJn2qLmnu%2Feu5vHPPFyausH4VhPa4BeqeA641d5GKZWxyb8Br8GalYDPmpG2FYRP%2FyI53Z5i8%2Bmm1hVB6zyGDRwr6OYLI0cu6YjYAoKmezD%2FhGayDaA0xa884pvQ3zcJX9QIAFYspC246yaSeaYVEy%2B86r5P%2Bmp%2FCxiZVatFJG3swaw8d9%2BbI%2Bs0HMqzJlHVva%2FPPko%2FJwK2MrMudXUaWABXWUdfAkGyv17ahd2zVv6a1mWYimVUex5ZYKp%2FeuLYXfoImzDoVJIlJfseWv8qOq7uHtjP9imJtU7y%2FAs%2FOlCI3EDjB3BcE0l1z3LMZHTzd40YNOZlxzG5fIGBJpZGaXAKqsrG6fAu%2BxNVO4pht%2FXWuLq6NCALVvT%2FKnC90D%2BlwS51wud%2Fco94ZquoMN9z9p69hVYuUS%2BE9X3gew6YHt%2FaepEUULolxnfSAVwz9CUm8RuTQfcHTfC4mOw1A2lER6h2%2F7vj6iZtlzQgSNxYkhwEYLV6lmfVBbZXTgnwQ1242sX9SqIZVr7NjwBZs8aRrp74tmFUHyFG1IoOVlmMHVm5o2K8r5%2BZCZVuGI0xo1pp0auPHWm49f%2FIMOPC3ckGOqUBPd%2FPGXF72v1X%2FBonxVmHDT1OKS5kgKSUZyDhg8rAKer%2BYsZ5pjqFF8J%2FMjI3lflISUTN0kT%2BN6KXTi%2F6qEs7pOilFlrPQxh29%2FBkt%2FmfXpgzsQ2eCkNou5dbip9Z%2B1J3Vs7KGjKmWuzHvfmiaaF%2FuddgbwVjUhQoXTzcgOWwfoQg5bp7kwklyXp4MGxm%2BtljHEGz2%2BgrXhfoDDnBwrcj9IupZuq0&X-Amz-Signature=86487bc6a0df0562e3c32daee04a1154f2a95724f3dfd51723d2fc81ad200b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

