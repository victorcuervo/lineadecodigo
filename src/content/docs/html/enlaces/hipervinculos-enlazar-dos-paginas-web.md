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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXP7IX6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FdQl2GqqcFwjid5Hc8j8g%2F%2B8i85clqXWgf9jWnJ7r0QIhALLn9POk%2BqWrLl%2BdYauNZAB5FhovF2X137GhsJXwwj9CKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze7Y1LPlTgeDWZ784q3AP3sQLUl9JBfNfcJweIzh2H4aJGCjzPWD3ou14WTtylkoAW9xgH97n5hqF4Wur%2F%2BpqeTkPo4wXnBNuEGKDDqL7WRhILefZX1GBUSQ7QCLlc7%2FaWlb0V1ltq89QAkdWmvFnhwYi%2BanI6mkF6Kp7gkx%2FaOIDspz8srMUnv3VDEfW8%2FH%2BKnWSmz5BF7pu0VT8aGbJBfliSogk3AnXVashJQlZTqPSZNk5ZOU2w7R4OAoWhvcMZmngTPDiRBAZ6NI1M8gBhcLE7nFwzRCYcYQcyNqWtLHPX0Zs6Jl8B3a3kZKgw9DWH6YtoYD1w5t%2Fffuwd%2FXbJjl%2FncEUgJRYpAO6IaZiYrSflV1I%2FgbzzOEg%2FmnyP%2B0lCxk%2FGHkuIfSmWMwOcCdY8v2a8ywEjI9WfmX3UHjBxNY6ipE3EKhfM9kpEwCC%2FK45mfajR8bVaUfZ7AO5x6bg0KWKQomc3eCIhUGaytv0vpGGJg2eb%2FHgpzZfhTmj5%2FUhjhkhI16fEcIB6I19scuMVikM7UAqmy08hnDAbkDw5Nvar%2BOsIRGTbvrE7Aan7vHgbRXOKWaKG6vcA9pPlyJggZggNOJzNG2fFuPOWq0IjnGHKqFAkDRUL4I5ngNoKkqQb7aYVD%2BDYysrw4DDl0NjJBjqkAY0%2FWI%2Fe8OvKG9Y10%2B%2B2qLkoAhoo0PAbkgZNpypev7907tp6i1sfRSz3AsBiP2wZSamg4U5tYEzbEg%2BdcD%2BEzX4NZSAwN9wrQ4KfJZLQaAaYBSP53r9qIy0A5%2FKWVLE2YXicESDV%2FW%2Bv4jWF1CyzmchaYbE2EiT7DgQvRvmZ310BSHHxRbxgYvE5wLIJOIK6roiILMQOo%2B5qcPFHVA9Ww479Lj1G&X-Amz-Signature=2ecfe0018a95056b0405d53991d9cbaea198101ba7051b892ee73a3fba7920a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

