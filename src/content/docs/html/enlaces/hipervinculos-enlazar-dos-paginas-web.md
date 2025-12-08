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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462F5FQZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMpt9JJ3vHSbl6M%2FC6B5qgmW9KgucPNWFNSVesQZHOQIgI4Vd5lz6NH4REuRHxKpS6qTdR4FuVxr2oABB%2Ftxl%2BRUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFWhhfJREWIMea73yrcA0feKiIhAV8f7vIxi320JGUDDuA2avltTktq6uZgTTyE37DxnYlEZGVyso7mbuH3YM%2FVWglj5zCl6GU%2B5YWOJgyJbSAKKNwo%2FWkBaU7nnWiNs2qYoFhifsq9Rscag8Y53LCGVFljfBEjKkDqebh9ezhpQGxmTJvf%2BVuzryARSo5JLvpSBwEnFqA87i%2BAq3y7v0jgENRHRVtLDwQ4JLMpx9aJXZXj3bEZ7h8y5rcrlV7AmlK%2FFefl9A3F%2F4VMAgfc1a%2FlfMxZgWJPhtHSPUYTALbjn33hclPGHPjt2r0HQPN8Krl5nvLU76cP32dsjhJtywQNZqkPALJ6bn07DWEswHEOpcrW9RJA3cUMNFCsWNNnCBMyECUfBziCoEyWv4k9uyiYvF%2BuYX%2FigzUrqqniDDuvIN9Us4mLZ9wIMM0tMGWkEHpytskV7dcHShlO8doZwJwDWwar0gSVreJqxL8PAue0S05InnAw5tzJA3258yOqK7dbP%2BNBVeYeXd1eKzAmepXQmvr5U6v1dCk%2B7I5bCcQLFnaHsGdFrbHw%2BxQY7scqN0ZdGXZnzPQfMuCcGG2LWNIGZoOjNkc1RUazSlAIQbeq1yIWPagVDrR8EEqIbimSkEgwMGbkrPju1n3YMJXz2skGOqUBn2jfYbqb16v8uhnF5nHhz20p%2BlxoXN7KgxqcdvmAtF65HYehEobxU4kesRuMA7J6V8C0l0ldeSQ02JKghSDGzfYuIgiFlvMnxt6e1gk5jNQdoE2RaA07t74LtOMUHYdgpiZh8fv9NbOGJwLTnjhdA0Ju6barTlKGxNhAR6sUNCdzMn5LYuFyg%2BBeQolaOLjY93oc8vW3X5eizfhdEpjRyosRTOcY&X-Amz-Signature=26f696cbb8d4f85af77a49c8714ea7b22187cb1ff673358211d59fb1f4f1190a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

