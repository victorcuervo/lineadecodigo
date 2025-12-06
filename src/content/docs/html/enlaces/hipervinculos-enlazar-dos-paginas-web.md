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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCVWEWG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmQoG%2B0EkMLluC9fIYXub2zn2wcZfKZbq93w0rrgGmyAiEAuVH6yP6mNjnOiWU8cgTnZkPPoGZuF3u42U%2Be%2BofOuGsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJwpG7iXandXofKwcCrcA1ZatGCXvr2DspY8w0jh3UPZzAr8%2Bwf46alhY01Mf0JOMZpE7oQpwZGOdLJZIf83j3H%2FrM%2FWd2v7brfE8AmXjn8rq4QviGcl2Z9iIQLZKyX9sAaOj%2Fb%2BVb5%2B9qubJDAANG2xjnfUfFolMXF6glHWUsLhlkWeOMq1LNmsBGSg4UzCSMEJaPOE1eWApL5lObChCrTZtv23dlqnEk%2FQUwqM6delez6hftLoaGHEV%2BIYTHVU5ajTZ9B9xCCsuvZvUs92sSXvhg1vyV%2BF7QGl3QE7epQJNd3j4LvUqYm2KVtNcap8aWlPVZPFUZe5%2B%2F1RQ%2FYyOyYRy8rgH15k59vfxRTK40wezaJEARIokF%2FGFxuFCOStn2Ys5AoxGqWO03nYuHfD92U05InQlfdi6XdRhOWcuoDOxY7GNk3o6mwVAxP%2BcRZN9KAJfo%2Fad%2FM11C5lb8mAFfvBuebu0uTcQSoDvq%2BMmaNKoA8WRQ%2B41Jx8HGz0K8t%2Btcb15uaPKX%2FAP3XsHVLGkG8GIKT2KnPwIgXP0Q7WSZYe3XolNWr%2BgtoeXEQyN8q871%2FLl0LHeepjD249FCYkZbWJQne3%2FgT4bwDc82GQ5uzPvhlUX7MUGO5XmpGUu3aE9BjA%2BUboxEEsz%2FoxMNr8zskGOqUBcoQ844E7OFvBSt01jWz2NcQaRWafCaCK5%2BM60Sdh%2BfZDfu9AVub5L3wJU6X8yT5d4XdJfKLlH7KfmEecAmy7sQ2ekZBITkmcR2kS%2FRi6vyxCwhRLtSzt33RLYYvjX6nzo7MSyDiUq6CUsD%2F41WqwwPXmIm7sMN%2Ffy1WAbhfYEIoK1AG8%2B0DJYbgvCInqA3qouZKv7zvUelIoQ8QLIcDBa5WqqCJB&X-Amz-Signature=31a71b648ecc4287da59f8d174a65b9f5859819723e84a007669859f3b46519b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

