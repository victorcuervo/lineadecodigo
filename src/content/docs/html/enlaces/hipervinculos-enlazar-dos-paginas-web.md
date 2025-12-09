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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMOHUEU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb9R4lu8FtC69ywO8bIJWJTS9VSUGO4Pigy5AsJpKJ9QIgdFLdda48EEez%2FFOtbH7Ve5iae%2B39qnpXnukhzI7yRogqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyI1GUA7l4OZnzk3CrcA%2BbaUSkdSF7%2BEy%2BKBtfbSmG1SD1gL0BcPWjhjvVTrbUyUzXNkpgzRecjfysubCz21fuGeYdaJ0Zee8QclW2zcajFV0ji9UFwNH8CrerAxCK3572RKvs8qY71KHI4Zxi5Ru4nkwSI1oU%2FD5tIQGvQT6ZHAKXtujXXeJ8syuq8cshj5km1gBuepA54vGPvvebUdr35FjcdBkHi71rzvnI0eR%2Fh3lItlJ%2Fby0HK0dd1dFcWqg3Jpq4oj3J9AUvC09DvoDwUhuOZhq2%2BVI%2F5t2Cd7BOpkqpvaus0tXnad%2F6WfJB0opx9EyuEknopEuaOLDu4fLHpNGmph6c%2BZVFvgWuBlwL1k%2FYkHupFnMmWzsND97iSPDQMlDYwaUltbkArvBUOa1kja2%2BIfZloypzK8CutOrolREMuYhfL%2BFyIoAkQqzkQg%2FZmMxmLS8lRGOxft%2FUq%2BQpwse%2FzM5n%2B0X%2BM5Nu929rtblpVFfpKz2F5VpMg5EDRQbBuXz11jwudcHAQuj3yQo8VlveOO6g0gZs6fPHDYaaUJn3V6xVtQI0tG019fyyYQG0bAKfXEXPB9fDlED%2FnkXaPH8Low40N3urhlPheqma0UPDkyjmn%2BB2yGongiggJX7yqtyCC8FuKp3LIMNzC3ckGOqUBVtZKsXMtHcy9nGD42HHUu9LGun6G8ne0x0wQg20sc8umPQhY24EDZi%2FqDGxDdL%2BwT2elOrwpkHbwWG52qW1OWnpDvI%2FfBUfSesA4w7jdkh9ASfJIlnsR8B6eBvF6TQ2%2BPIK5h3b6iNHbYtf89Xb43y38l4KvIuhB9QRX%2FSsjXbBNQ8iVVGNKwFcrBr5UhiBjMZx166NFxIqcnKujVzijILZ4EerA&X-Amz-Signature=6e481c84129232ea61c1e32bcb3912660efdad855465f9582e2ed51e2a4e9881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

