---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7NHJZ3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeTDjvxct8QBAtTbIfjQoWAd6NuatLN%2BQNWuiXxpFa7gIhAN2hG%2BTiiVXNe5EVr7yaQRiE1fWYN9myjdE82SqJTFPJKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVuqQBnVLE1flVguUq3APVg2qISnFzFRconVVONqn%2FmkIJ5RFe1OuwNYDoVloaHgiztOX0amWTzcZUsr3Id57HbDBGZHCceyGvqsLmTCBLaP8b%2BLGhC88CV54C2uROhFeQtxT3jGsiI%2BytIfJY657E71EDgucfIk5VJwKXU8N00svEpHGdv5sfxo3%2BdKHM8GeUOwVrwmsNEBp1nEbnGT1iO8S1wsYWJ7xAqfeL7TLQr1Rdd77KGAvRhqEXCCGoYn6%2B5%2BgFM7U7CYdc1MUIPJwdToPsqTFC1J%2BgI3nJmtXw0K3Qt7HBf82r%2BRZNRQjotDBzL5wOGOuGjrjkonF%2FXvcd29xaILnNjsl9NQCt%2FruMgvD2ym6aY0dE6EKEdIdh5ttxGxRUoGw7bJJQpIQQy%2FfFi%2BTqpW9UT%2FGIYDii3%2BCzQGRhO5tdIV4DrZZHQG5fJ8H1NEbo9PsOmaABKJCJGJoV2ipQv7SyIPBjt0ejReINM5ZHYn9JeHf6hFiWknUgHMvQmM1q8Df573%2FUUVv0iFaHso82Gus51ntg75oETfrBCk8oqRqAKcskCXiH4L1ljkyaRWX6%2FGVrSHY%2F36HG%2BlgZh4HfBN6qOxVG9rAFHTuP5WHOWA%2BaW0ZbXAmstylpI%2F8NhZz%2FmpMfmWw4VTDj3ODJBjqkAdll3uyz%2BO6u1dEVmOKHIlbYmDXoItt%2F09Qcbx1nz2aMwiMBs3IQLLjOnbbhpb7QREpIcItLBqne1I4k%2ByzuYkkap7PEktN6LVefgrNv8f3UYQkjSb%2FiGmFU9wiiGLamIz%2BNHsOaGPEx77F8E0uwgiq2HryMOGQX9Pv%2FaHRGO4GXjvJoJY04IDKXLWmY4Bd6XG7VIUkIuuauEJEuyWJeXImx35a%2B&X-Amz-Signature=63a853eb839924f23f0d3bed75b520f3117ce51f9061079a4059e142e0a8ebab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

