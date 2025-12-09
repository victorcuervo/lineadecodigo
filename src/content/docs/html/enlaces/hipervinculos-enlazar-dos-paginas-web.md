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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RVGBOPN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv%2FoXv6F6EwEhCASjU7GrgsoxvKKtzmycauNuP49hugAIhANvEyTjoQHb3%2FmZoYUkKkAITRm8MvUsQW29qRkbaSOqQKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyruw7CqyMy07TWgBsq3AP%2FsteZ1dydCX%2F5tN6aW55SWghBkFA6mIaSag7DDTJzCO2s38FBejZwGIgsnBeygNQ7R6O4vizQfLi6HHCDUasWN14ot8lpz4uryz%2BG0%2BMNKdO2yj84dbiyWWXJjsfgd8zEj%2B%2BYTlOCKwm9N0eEFWc7h38m%2BHWBiAWnahZtGL56Hf8hVQOjlT5A3zqC4bxhUpe7mY2%2Bc1C1etxFwT8ncZ0GKPc8BjC7mZ5gmASvsh6ztb%2BUp62VdKOWCwqj69p87MGnel%2FDqvu8n2iIj04emM0B8yX%2FKYneUw%2B9hWpsccK7gHPXkhSUwdbM4awxOssImWv09JcSkpnNkngv82P3f37%2BpkexIt2o16DKwqM3PJ%2BD7ZkhSa55FiYwrJ9ulFZaC6CZh2V7jgbbvH%2FyT556Elh146EyijJAJdCaUxu5kOicd424RPfDxjYZLDn4Ny2%2Fuw3ZJQFSSzgLNasA4hhdwrNBUbJbwRn9tKHC93hxGO2Aa5DKhDgyzgsKLHxQGrYUWZG7RShB2%2BkflTFybkCmszKnVIu7YTIVJ6QOToIXAO6Is9hgD33fytvy2gM45uo9svVEcoLBEzL7H5hl4puvUIKyHoJmSz%2Fakl8q9e2Bm3b2TUDcNGgSkU3%2FBeg7YzDQw9%2FJBjqkAceODzICcDKXgQpcqWtGthTbONWQBYEk5NdaQj%2FvK9JxQLT9l5%2FvUrvfogh%2BLu8L%2By6W8BH1Dh%2FU3JvP%2Bf0nQxKnntWI9ZGdlJWX50OoJmrU%2Fx4KMV5G8%2Fa%2Fgyw4UomEn%2F0YQGAlE%2FJB21i6PJWBUZE3lek5jY%2Fn5PY4B8OmMIAcNXyHfJcXvORniev0W6BY9UBaxYUksNQJLGqrk7bL%2BrOBY8Ty&X-Amz-Signature=48e1fb57a3f1fdb23477b300680ee68961ebfcf9cbfed0cbbacdefbca41c4789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

