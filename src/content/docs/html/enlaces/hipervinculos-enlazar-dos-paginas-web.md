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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7UYBTC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnVMmfRbKoetSkBm9hCTQIQ%2BylEEs%2BeBSlt2aWcHe9QAiAmj3qyeyD6xpjNj1IDgWCLdceHz23VK51ODM53ANEphyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMY6cgEJdmBK4Ru8V7KtwDt7L%2Fcn0QukFvu0OJd7XTIarKVf0y9al%2B820ub2HH9aUuuCCqsbFLkTfmQgJJxdmfZHb7yC5ZE3rRNQIKv2jMeS1UyDxabmAnG7AtlFeHLZ8LbaOE0DhckJkg0bsgjA7u7eG%2FT9CHFuVafXff3t13yC6AkCltsznkW1xd6c8xlCRrH4TKzIF6pBCznbvkIjeBXUjctGnoCyFarQcxMEby%2F%2B%2FXfCDqxkY4mU8PfLJqZnauYzsPBMEg2S7RxQMbDs0T3gDbEBaONS%2F6ZCSgSzOXyXp%2FdRn1ZwoCYyg7%2F4XE9nhCPrlSuw7ta8Hbp1x1j2eaHhElm%2B2eoXrlBV6X8LWiEYTENEl79OWq3OhmZkswEvbg0jm1Hp4%2BElGMb9KW1siispwNmeJ04UEc9zcqtWrrtxRtYm3e4BdbHYndeA7mm3FkpurZcTz%2FJMwLi0fbb7s4i%2FLbjzQKGLV8N6QmS9%2FVEgberN4HnGpuUjBkH3366cHi0lb%2FcLl1tvFz5IYyR4b43lg8dxD0IAMlatzYkqkmq3fvQ1%2BJQRsUNNnKN%2Bqia9CBmAow7XKlXrVk9SB87j%2FLcN%2B%2F05eLoJP%2F%2BV4%2Fw9c2dUfZlswANq6iH0POJO23ucLYj67lvwR%2FxxPiOmcwk8zRyQY6pgHVEQjCyBBF7Mtziitb7w5QjMrvLBSEB5c%2Bp5n122GzdwWacXQRI%2BEMGrW5aziA7tj1GwhxrVKSMTgFZynKn%2FFG7CnBAh%2FwBmZTYJGJaXAMArgYaAt%2FeEky4NBbj%2F0m6dJoilvlcijc4CWmm1DWcr3ckiSJ2xq9PYPWoHNk0i25DhDwjm0ftMsWbVQXgayNtX2ZLT6xta%2FYRp3y26SU7c%2BFWSOZP7U8&X-Amz-Signature=93455a16bd6787ea4717e9ca0d3e11ea4924b769029e8408f444f34ac8ec9992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

