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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXU6EBZG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQWJyzaLHQpCYlP1OrLpTy7hlaPI3Obc1pou0NpUQjdAiEAicTgj%2F%2F3xAgtnfQhmsqNsZhJaAYz5UxV%2BfWoCYKPQ5wq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDH7EUeP93NF5ig3aiyrcA4o0Q3EsnR%2F4p5GksVgndyBzsQRmYqoK0bVgpf1%2BzlNiuDRmG1OuH%2BrM1gyx0blhE%2F2tPI8tYB0gR1JdosiV6OOuqPkSvFuz1sTDW4MW20BKHihRUAvRpTrLW6BXmDqYjfm%2Bw94voOf6TJ38mES4AP64O03RsH2DKi6DoL7H%2FlkwV9oX4MODGqVp%2FuxSI6Vabj6ZOG2YumR2Qz%2B8IM0INheW11EWspc%2FZ25nXOSn0qPBAauChR8dkTLJx%2BueVfvwVNVvuHt%2Fi97qfUrigO%2FYKUH3g7%2BKO5QD2qnM%2FyyCXrTSUfnh7X8UmGSW7QbIF7zOP9lFVcZ6w6Oelcqelq5%2FYNUTU2m2F7mKwQ30gqTRj15srQrU522YRng%2FJrJRm6Sk1Zk8OlgDawCM1r3Lk%2BCwZvE4I7b1%2BAyZnGqm5XduxmjSUpzS8zkvjX4pVMgb81L%2BZxgia73WoAWFRX%2FdYZgkynU9Umo4ctd%2Fjswfn1fx5aK66PecPe8qTCYC1lgQqWH%2Bqkux9Fm%2BJJWaMM9mZgfvfcIH1SpZV09qKk1kSzApt3%2FRNuL3lpUGSWC2zbjVR5IdanNEEJFkJwq0hHogHsG9Ch3qGp4gqd5fq9YgdKeDe9q2qVUzYK2%2B2LrkIbN7MIjezskGOqUBkP68QnJ8iJg1F9TWfxx0OueOlbuW0irxVnvrrMCiybos42Tj4wAqgdR%2F8NCH6rF%2B3nkFh8GNe5GaLFz9kfYwMzEb1v3l7J3IjmmFVdJij%2BxVMo%2B9J7JKq5TIcR0aa9D5Or53FsdU3H%2FeyxObySFqufuAFEDI0YmgfLMy5cjcbpxRnjUMf2R49VVEJVzfsuomXcJjn5u340yjv6HQXoYfWg8EhMOn&X-Amz-Signature=42eb611c119dd8a624b2b2afbe17ae5a3b9dfd3916fd4dd0af0f202c189dee40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

