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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYQMAH5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BjBW6W7uqDsKOqAT4WxH3hSwNXQsOv0Pbu1FQEduMfAIhANh1YKHMfokLIBGlb9nvgloDto2qpDm9wiwjmz1vukH6Kv8DCFUQABoMNjM3NDIzMTgzODA1Igyj9bo9CmuwcK7yBKgq3AMh890Q%2FCY8gBYfc3RoHyTigz9SyHj2bp6WUxi44f2du318Pt%2Bh%2FPmRZmvIC0qohOg4k%2F21%2BN2M3%2BK48oziBXt3dJH%2FvQytcfg6LFf6bS%2BfQ8ygKGCqHLUwcRCaTp22jfRBVnApxibh0DfzZpebFJGAlPRJzcgpDoVN8NH7z%2BwYRNkmoD67ZzVsLTCHBZo8eDusswXjjme4zsKpB7ZH0Pe5e8dxFLvdSfdmay1tBpONTOrza7wSlpUbqYp3eDnIea1CkFlw0paHKor9xWtPRlwV6ZYbU3jRSD%2FtlPuCR2GQ4hCPvysn96D4zzkBm%2FM7hCf71dHVpxLD3atOHzWeVtNJuoCAbABmVw48jg%2BRMNtB21%2BiO3O8w2gIYmlCbEdCRJWqrVIX2ZH3xb%2FCD9%2BCHGoTJvTHK%2BTxnBNeqA4%2F%2FpkrOLrkGB3IPMtiNYj05h7jluLkFI5%2FNhCDYQVrS9RPODc9eeVwem4hmAI%2BFOgl8QQoQmSZ9BpfTupRdyHoMTkazuNquZFQaJlN8MTCtmEszrUgP915vjAmFU%2BKeR%2FxojmMm1rc2aP%2F%2BdQiKu%2F6HHhBTCaHVVAmsKiJcO7Oj0gVAxmDd04o%2FV90NpwN6orBIt164%2BzvEWOfnT01HuabnTDVssnJBjqkAVkt9%2FCRd75vcqF85x8fiKMjq1l54HNxajETTPILOL26R949WSY15%2FIhoNPBjgn7zURCfl4Qf9u7AIoU%2FZKoxFMiHjvzKG6SiIabX4QAFc1jb4B8JMNIkFebD4reouHx%2F4E%2BNMShdIaGPyyYIt%2Fg4AvhPqOaKtH%2FMX2%2B65Lf%2F8KsZukYwM3pR4yO9ZmGQPYAL3LI%2FSm85mYyAT12sCNJF1qSGfKQ&X-Amz-Signature=fade68421f65df8563901943ca204d79c62c88059b65bb7803e496932b7cdb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

