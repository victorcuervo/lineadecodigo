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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7R2TZF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZv%2B0nMgXlxYZ1JxZD%2Fcy01yQbqg1%2BU9rZUP26ZkhuJAiB0x70HapgQJwwJPHObbOG5aVf9UQHw8UiCIPO%2BboUkQyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq4sTa6Rh40KTLek8KtwDTqk2uHypkYPFOjdkBsRuH1eewUf6wSaKLW%2BXQYybhcgv6NULNn0u5n96KSnsTZrqZPUhFNkVhRGWAdDbBT7OSdJ7uyTtUM9DbMtHB%2BKlVRsDkxGHjxqP0KDwOxYIcRIC5xYJ3WTL6wcWvVoLe8voq1WE636Hg%2FRmkM55A0t7KQj%2BOKK6uHr9pbAZJnHizsGVARu6NfLeKdLRBfNTC1JoWoL9ZKlma%2FLCx3WDVZgZC6X39M7aYD7WwJwQHxNPOcJ8UkU7q%2F05pJAV1TFNVTcMAMwr22OMp%2FIhMpvAfzLoeaqQNeL67gmDYJ5jd%2FI%2BXyzMxUi5XySw1VOcnApQBEAYJoCxXeP51%2F58b1C9cN5lU94qANL5Wt3lzHGDiZb7nKsSbFD6qn9nc9SaciQiMU9TKsx%2BjqQMEvtD%2BKoXDsGfcc6Hsn1YjQiXbPFA2G6AVn3dzfZnrR8oR3ZYQjVHn5Y2wdCmiOzpkFUSSZvuQFAovTNH%2FqEgH4WXDXQntZCd%2FIXR7HtKDIK8I8w7EHb62YfAgRak29jNWFOLxv%2FOl%2BOjsCdT3rEgApQ1A7s%2F7IScXYLtfkVK8fUBRzk1nnF%2FRa41rFQRMFQl8vXFn0kr61ZP%2FnTtVZY%2BVQbXmuJEQ2wwubzhyQY6pgEEhsukptI%2BvdUIaMHB7gbXp%2FwF186XWZ4xFyMAbUSzlD5siVwoj9GdzF9lzpbyHx3tFg0oj35bcxJXRcKItV1FY%2Bd0iPiqdt%2FEmLi%2B3YVcLgH28QjH8aUwmEFS9jnqe6plfani3%2FFOwBMs1WVjOtOl19l3Q4xPQ%2Fp%2BtkBaneRRmA7rndjejQgAPDyY5YxR9kAIpBQDVzW9qqNPzWSVZEBvrmv0TWJX&X-Amz-Signature=836e02641b3a1ab0a8fd18f0271a441654ecff808705f1f54dbd1b33f9f10c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

