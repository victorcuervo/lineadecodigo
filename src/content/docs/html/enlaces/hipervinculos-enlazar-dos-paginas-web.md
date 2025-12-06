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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPHRD3D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcMVVk4BGS4JHtNbCCWX%2FKKH%2Bn7ySb%2F7maTLAmnlX5nAIhALadlopymUiCK8E1OPnL8D2kZ0ACmSlXNovBpWkgUl0jKv8DCHQQABoMNjM3NDIzMTgzODA1IgyfNoGCQhWba3PUy3Mq3AMXP2Atg4S4JDRfQ743GbRYwnXGfIeJ4yOizJPu6C9EaoXMTJiEgfwPEKtHLDIMG8tfQx%2BG7oDlREJtWPTp7u4w4mvy9%2BsCgz2z5F7GB3coFus%2FtyuA3Vsu8ho1WJThuYbB5NZeYqScVBfBSHKUbMNJr7voZh66%2BF%2FPCjU8rOSd4D%2BpC61Son%2FX3%2FhoZQfr9A7ycX6EEvEfYsuzl2EQ%2ByDfK4DaI0XqBD5CoiALoKB4TWzmc%2F2zZ7YmlWGSbw4tpsNTiDYbn%2FC%2B8q4EtXUHqJs1B3kU2mv0q0xSikWRncC7GwcXrB8ji%2FMigDWNQZUij%2FdxyVWVRMdVJeyPJo5UWnbZ9R3jmAaSqXOjedYAf3GHo1caFuX7pvUnt%2B5Rn%2FMfy58vzCx9Gg40CzeItSoquX84Reu5OLJmm5Co9LFqjLOQq%2BtUN0gNs3IyjyHmZH68pc7ZnLHpidYm5hWN9ASJBUpyFMgRL1rvhIw%2B7ChX7ToPXU04imGR%2FgMy3uCQfLDAYDcADouNTmTnN8f%2FSjY3vizsw%2BrJqPQ476g0nNYlbOrw2VJ%2BcsgnHFBRrbKUa%2BdkBRq2ayC3L8P4or8Z5mpHrJ4LdW0df4EkE%2B7rZYJGKVNmUAmqVcGbt1KlqghMtTCbitDJBjqkAYgSDpPtjsVVFLBBE0SlRaNvvQXFX%2FbYloe%2B5IyrrZUJf%2BJgm1dW%2BS4xXATtmea2wLQkvBnUtXDILH9LeAnPKkxNR%2F%2Bpwy%2FhlEv28wNXB0z8wM0OozoeYuqaxN54HGL2USFLN2q7bTG1qkdTzbgf4Hqkyj%2F571QjBXf0AkFpHiqQZOo7jzoADy3%2FsuRJRLdhSpi006%2FC2CoHPsAQLPfznDyQVw8Y&X-Amz-Signature=4ec017a0f3d59a0dc71336835959094b84467fd2c509f81c513afabc89e7799c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

