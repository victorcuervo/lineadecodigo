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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJC6BJC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFHS%2BykkJmTrWW2v5dFKR%2BoAETyAZ7WMMrYKqyzUgdlQIhAPx%2F7yGu9tscMnMnaY05JLsADgTEaHDANRmvNt%2F4JX8sKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN7a5M1q1TpcwAJFQq3APGituOEL2Rg%2FkIC5yFU1bxxg8J%2FxaRPJqJkZn1elOcsXWS84VxkRMcbuSIfUpi1DKRpiKKupzQpzdq1La89mBOyHYCs61e80dFhgRVm8FHNZ9XB1jRS1NpPjUT12G6fvhiH0xv8OdMbzK%2BlWBFiUcK4wjiHlL31LVR5%2FEG78c356gWpp8ThAE6DmKHtshfXoKS3PSwNH9C7sw3raX9ITf4ueI6WrcwVMciTgwASs1U8XOdtJJ4A1LQAxdN0rW3xanzdaDRsTwQPzA3rx7HUKU9nwI70cjtdZh9007ZaUngFLtSc3X9OW9DNabpdfjNOPzuzdpfkE0GpDsEJ4J78kCsgFc5oAjCqthzo0vWpu0ijGaVG%2B9mzhh%2FNIN5yUBBOxKwmbi%2BFKepaJ7PYEp%2FoBjm%2F3Edcq1mPJw4V5nqusCyS%2BFOAMZCNBUCDfjAH9PtInICoiL%2BppJnLBUEAq%2FovYSMD3So9GTrCn06HOM%2FqHxbrUqA0%2FHWnax1F7i5M7CsiTLj6YWSownX%2B94qwALadjOxJquhtk%2F7GevvDpSwg35AnNjXYVE89Ljh%2FYAzvwT5p%2FKJlCxQmLxMgxPzNe4YfxTPGolLVXTYPQvIClrUI%2F56TwtsxN5DcwfcNLSHOTDps9zJBjqkAQ2neY6yQx5DFRF85NcVPB12hOZFfbq4PKabtktE016aUNUw6Nno3uXd3kuCWJlSeMoaUhY4rHKKh07%2FPVohKjoEb0LURstqAvpGN4ttnqc7XXUQkNjtpiIay%2BPYx%2B80O8FwkyhuBxctsaitWgVVShArrp%2FQiv8thZCNN4%2Bk9nHehwnfXo3dmy%2BW8FbI9sBHsi6tTV374gQwpdBJm5xpvPlJrH7Y&X-Amz-Signature=a2b531f6e5a597a97b4f4bac430012586eab0f6c59f05f6d5b32693da3424def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

