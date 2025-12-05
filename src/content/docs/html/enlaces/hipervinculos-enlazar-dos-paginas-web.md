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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ7KROQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV5YEHLJigiqGh4z3z%2BJ1OE2AzZuw7ZOs8l5HR74v%2FdAiAaNnjU36dlRasNY7jrlIjJyjDdYHyCMB2HFnYYCbqEpir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMy3TypP4hkRWirSvUKtwDcHSh6sh1uWfJNZ9HpZfXwvR86ybZFMqMq7QdwvIHGMuKV7lYbHvEyt0Kw%2B7tapmH0cjNkzrXogiIPtH8EKVQyABpGcoX6dMoEdRi5DDL27rL9iqxuaUe0Q1oyBrLiIUETwkZDozcfPT4s7pXAa2%2B5mEX5ntnYFi9zYo63mhtcO32sD9hotuHZG6LD3EmP6iXmff33Po5hnPh4%2BWHzlS9Aff0AEnhCGc1SWTHq8ORS%2BSdmwEfQudSxqCuRbsSR8ePoJ3H3qZgJrVxbOFx6XY8RWSqF5tL%2BhHkiBHEk6fsniXyg%2FV0idE9PIDnLkOTneSRdEhKF7N1FNY76gaoXYrlPBde6py%2Bw%2BuriLB7FoKLwb8alEhRDtvWrdd9X1cj1b%2F3hrT1juIjgdw%2FSmZn4IfYfb9EAEPj5HJ1%2FExZ8KypURKKYemctp%2BFpOh%2BjEn%2Bo8y%2BcmpNBcWabD41%2BqOoJGFgjJJRuzPrTOH6%2B4PeyL6KiptSXwBTr9GFt27dG882ThkmVN6Ck%2B9ejFjBy3OaPuFpnDsV1plmJhKOFBQMcNxhzPU3%2F5Aw2wMFVJzwih8zkZCYfuLRoOaDST9UEzdXAfVklTfmoWlMxEMPs7UPa55z39vQPDJbshsKa2oXuJEw2f7LyQY6pgGicSGkAKz5ffXF8DG76zPyaI0kPgk%2B8WTywlxD2lsR0KBZ12B5UhKuRU%2BJM4zxGrIA6kZI0dX2nF2VpaiaTdxj%2BK4DgCwjc1jyPXQzgg6wehWZlpSPOQJNxP5Gj5z4vLNGaq7oVE7ipGV1qiz8IdGa1pYMnRL4ae2TEZSDK1wjGErt42PLJeufz%2BcKFtqeqipdxCI3s19uYgTQPgIids%2Fa4%2FwtQ6cq&X-Amz-Signature=981e12373f6e5ecbcb85e5e02851bbd89d2dcc894208b12c38fd83dc63a68c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

