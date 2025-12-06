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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAYDKSD2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FGsF8G%2BcQpJpfAT1OeHj8pd00LyskOlFT5FBMPpOD9AIgXzriyt%2BVRiWBLa6X7A8zFmW1jeTnuQoX7LdYQiXJmfcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEujfcrG7i%2FbU%2F%2BlsCrcA2E5aQmIKrDueEQD6fHw2BZTwDeWQHj4GG8HbbJZHmXyMQmIVuFAEfgjouYQaC4MWE4bl0KmY53%2FMlCfy7zkrnAmw9z4EgeU0QNaxsscD2jnhR3qn7aqq5KDUKiE%2Fkzs6k6PvpZham53j2V8z228vb3Y1P0EA1kAWTjwJhjK%2F6I%2Bc%2FJQosEikTkhKqCu4gUXBFlpKkATOS9ImAyaXCU6h7hM4HMMNCelsOpt8PF8YM3t7hQCkULC9GAJQ5ZgPG%2F0iX3WWSbXHu0aE2FEbNyj603SbhEcUpq%2B3tOoCczBtQVhnC6mC%2FEU7vhK7Y%2BfO9%2Foz%2B2MGb3gd%2Bp5ev8%2Fl3lhCu%2FnNkc8qsROmJWlxC%2BhQIh4JAWKT%2FApMKLoWu%2FcCizs39KZv7%2FsRXsvvbVpHuYF1%2B0YUS32RIX6NLxWAlWBbpLoYwZmyJlqtMy%2FbIKqhapipZr0EAbKMd2sNyHlKLiHwktD3A%2BrFh09NMtsnrjAOZndTCUiykLMgfOtGs5gg0Pw%2BOG75vI75HyQIxqLdKlXB7%2F3pxEEU7X%2FLqV1wgLnN0R0zsqcaKMZsouG%2B3lB5YxH0qngaZgCIJS%2B8ttzfODZCZpzZZ2NsWtw0%2B8miqWp2%2FidkMJ8ngqEJty%2Fk4geMIPF0ckGOqUBNfnBswVyJJvVp84ikRNJN3awH31Qop7Zo4ctgJEo2KiVakk3HoX2zsbRbYm3WSPf7dlpEVuOKYkCNaO8qRGTQlY5z8sQLy93whfYFl55izxi%2BRCDDL%2FyRiCWTR%2Fxa1A50idzw926gYUmJYnYGx7vOYJyLRGtxnoP61VBzx%2BgpbAjCSScC4pBXRkO1dP%2F31AKGJa5PqINm1n7Za3TiXiPaaQVfrh5&X-Amz-Signature=3899d35f469fc11c87e2a6e07de31a66a1ad6d6c89d57ffa285a5350cd6866f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

