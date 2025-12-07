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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCYE7EI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU%2F1nWBUxJUVZBgQODTNAhfVB4LGjvie9MJiq%2B0nJBkAiAOoODdfvNIQOL5lXIbU75%2F51v7NW2HsJdSq1zi%2BUuIniqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYlzYX8S%2B8sPehoLOKtwDiygqDcD6ccMOOOmThrMsV9BnrJRupLXtQmX59HATy2Ts7nv2OOdJwhkLOe3W0C1ukDZ2fY10gBJtvO%2BNSkakEgjThcI5eQwENcrxiqlUZbT3Vn%2FYWlCTTDV4GG7IFEOd0ukenthuSXAF9IlbsRHhOGjWhqDYdC064VDj8IxWqArm9QkpkJKq%2FzRp87g6JyzReWj0jchIgP%2BVEGhE1GSfojrhNkPAzH1rl8IbTm7QpEXyt3cB78saBVp3%2F8gvfyWrseNcGCfZLa6EvHA688wM5cLEhn1fcECcoTanMC4aOZ3rNUDaKUWHT4sg8%2B7zzdAlnoJ9FvVu9NNgvDqfEo3AfHfs7aFwf5VvI8hIQ%2B6RXxgNB0vtjIkh4MPDXubHG%2BzFbDe98MwnqwSTKPqmR4PIKkW0%2FZBqRkuO2vm5ZRV%2FLTg2TQ2nNABZDNrnKY6jj4BdeRCL0IEX8HVXYj4eIW8td9dyEUHh89wX5xvxux%2FqFUarcjZzuy1s7YQmkH9u9x4w13iKkanZ%2BvhTjqW7K8hQgI2gCMXetgFPrIn12VwtpIulCkh%2BYhyPzJ5eXXLUb3RjJumUeURUM9kPWV76dwgUTCwxcFlJp6Mxloyj%2BjzEGssk4JltwIyFXzoxm38w1L%2FWyQY6pgFStZ3k8izqUEEMYwtPd%2FlulWCsBiYvRewoo5zwOYvu1WiMDyaa4pjAZgb9jFqumEIxGtPnVQJoJXmpk54qiX%2FXE0PwAYVbNT8ki7xJ9WJyp6ezbX4mgQnVDIFKPY%2FZxE%2F2gyzpvOSm2oML75ADeAwQhBqaKGao%2Fd3LNQ7gEXyXms9LJMnyRjE0RrXrbbpm8KOK6qOuwomvUeg3WQY%2Bh9w9m6ZzeYVy&X-Amz-Signature=f6e53fb7b0f2ed70ac161c0dd4cdd0c7724a7574043258868d127644dd9176ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

