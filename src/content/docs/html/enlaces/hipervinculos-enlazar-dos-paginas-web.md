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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2OJUUYO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCskLrjXjgFz%2FH%2B%2FmvcHGivTV6yGqgRE34xGZTQ1CJKJQIhAJTOhXTKuBJwlzgZJCZc5M3mQjvVh%2FYUzquXpBlrdkBPKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLrlGYHyFURUhkFgUq3AMUiOknuPj8hYZC7W8oD6qgZSSHFn31h5RqZJYT84RTmXhnFQv9gMZ5AuSYJXuTAubhfzLPd82MNPvNRlQHKZr0njo%2BEK4qaXVAf8dU8Wc1X6QBZcFKhzN9YyBPRG490m6sG9lBX4tfIs4%2FPlpi5Dv83GsAGAUynLuXFRC6g9F%2BDZKUSnwiUqzAWgMiCHTOoMd8bRjdx1IQLgutzRzbYDqZ06gNy6Iad5xI%2BznaJFafRb86s8pE58Z6wB5LCClHN21A74dEM3O8JTUYu%2BylNaQ8ikA%2FNkVto7RgGhfhHNJwWtWXzypbObWnOUNmGXzlaJQSF3I33%2BspV6%2Br0Kv6R9nPKMq7oa7x8XtUEmUUcnTcQUCcEtgMe7T5pBYiwosCTrlvv4NasOkqUKsSa9aXhhfGfsiNIOPRsB4gKwOhRg2l88EMtpk9%2BbpP%2BO0tQ3hB49vBfdtZM8Gw85Ad7Bpe6IeWUGBnT71ijfqU5OBiEwuX7R3QY%2Fyq0pklY0Dgqbqk7zKN7L32O%2B0nwJhP9FUt9XmYTI20W7eD7sEMyUY%2F2LEw4XwWjr%2Fdcw2f97oWProwvRfrd5Dkl2%2Bo%2FR3MOGufkZDSsIRMJNml8BCYywwqdjwoucv%2FpNjNGu5MusRWeTCXmdXJBjqkAdd4K%2BLib29o0P01vsJu68%2BGMkEraz%2FwoXjBHaaZs2fGP02ZOHQfmNtpQZpXq%2B04IG7qCAaFKgesOMrj%2B6%2BD8oggNCWMnhfSxhDbXM%2B8eE6%2FHfgPH5U4INfAP7ZwDi%2FC456vxiSIp9ZIEat7qbxXBeDQ%2BHXY0jaGTjxQJ0h%2F5ltsDW8WT758n0BAf0aIvn4AMFSMXBX2fDESvdjgdlxEuC4qx78v&X-Amz-Signature=8e256ed9542da0c823b837038f988106767b0d0a7961ecd2025775f41a0a2e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

