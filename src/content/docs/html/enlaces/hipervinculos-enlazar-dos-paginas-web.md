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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H4AWN6Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyC7ZfvEAzOCDPRdAYOX1aMNSiyCW5igY%2F0nJtCx86QAiAoWxhOll9l2kQItbIi7XnTsmlkGV3DYAhf8MAmJ1SYByqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3%2FzA84HgMBK80HDKtwDFHiSVDWNROM0AS%2BTP%2FlbY%2BCfC%2B1i1lHxrZ%2BzXgGRmHeUopNp1FTiKeWXsjM3ZhI59ouGxvgnni0JiTKbOyKyqiVudfS8bxF5TbmQmI%2F%2Bj3Tus7bFkHZjClxK96mJoZ%2Fi9AR3jllirn33qEwSy3XqMvnFvkY4AjSmDvaAxReymbI7u%2F6Ml5vkko7iovdqdCIFbQXKE5owMkHrj4jTw4vUbj12t9mj0sAudcS8Q1hf%2BukTyRz9bcsiQHTO3ZCCQTKiF340JNqjoHEbE%2FLGc1gdZ4eQ7k%2B6T2kVxnBuIq6r1%2BgyUWZjwvmb8n%2Fe4rFEQbGcAhS81dFB4jS2E34b33nFxAxVdXdoRVrJPrr2MvhtnkVkzw654yjrWKT%2BIEdeMIHLQnNkxjlQCsztiI3KnSXdSkB0TwwerG5Klm2S73s4Gvy35JQAXJ6NVuhm0PPLEE0V5kRcvAgX%2BxbmOdsa1uFb8KTP%2F7klqsFjW4HSvSJgSXmW3BXaGY2mS3Lk%2BBAL4em1pLTk6UjrFze7LUJNHu7Mvd2q2vt0zTLfABGA7NfAcIFLdOqbAFHoOVEmNw4%2FyZXPcAyiA7hGurd78bD2UCuKQiDIYxlDYKBEOozUgf81n5ZsW7dJ0i9i%2FOuf4GQw7rPZyQY6pgEzakDm2u7h5QK7xRZ6V9wHJ1JZFH0470iRhikQnZ7LYQKKaV4RW2K7q%2BRE05j6ABEVbvo%2FQi4CaQwFSmvvgKk5KlX277LWh4q4WeQvbKWlMW7c7Zmc48PeAyOFQSOigss7MITrt%2FClWogHtcBZmRzxoDj2x3oSLlRlkPN1qlfSrwav4PU5wyvGqCwWy8ZBPywbXOhx%2BHfAUF9sQYReRIIKsvDu5%2FuM&X-Amz-Signature=04fa85acc9eb8eca3bcb6f68884ba311ad19e6f6b70605db83bae33c7ca6f670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

