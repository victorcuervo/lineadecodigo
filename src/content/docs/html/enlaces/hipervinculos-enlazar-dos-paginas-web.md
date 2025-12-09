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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WRVPER%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T183705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgVrpJ6Df2VW3yHTaFZf1qIVH1GpFM8S1LgVOOLH67TAiB7a8BePYXl5%2Bhr2kqUUMND5UIa18pigXLs%2FuG1L3U61SqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMS1rj6QR3r4InVMZKtwD%2BEcJ0CTSNW%2Ff2Ox6CDv%2Fjmo2USp1brA1DSZQfM3ECx71OYgFrZgJT8K7lz%2FLuwV6VOfU851R2M2uKb63AowbAJ5Q79C8%2FPBO%2FOKDDrs19F97a%2FMoHfYohxHKNjCznxgdxgy0TJi1d1fK3ZDNNoFYmKuZPNp9bg8NE3bL%2BdtBoO53ui58Cgh01EokDxvlBhh5d81smEIkSYQrY41xhOrj4HsFyTcjFbtzQ11RJusHSJny1MyZE3vJkoAz0fkUEXnEhdz1lIK0eSH%2Fk8aWp98C3JHoQzelXwUhz1bztFZmFjcKb3xQ1havm4u5TVYNYhMu%2FPVNNQDYlsE%2FckzRfPt5V%2B8pKOc7L5l%2BOKH%2FPalEZV81nJC3MFs8dp0EYvR7lOjdEZC%2BC0fZ7VSrYyGgK05dybdDNJtb9pqyXW4yobgOjG2aqqwbttijuCvW0C2hnuYTNmj2siiotKajLek9Td%2BsL%2BleuQpcvvk44ZamtI5%2BP7qLH93NdAofHEImNrf03xcb98foBrjS4u5bFL3071Zi7by6z5W59bAILNF6Hv2c6TgmvxZZU%2BlPE%2BTFcNDVrKpCKGQ9QnQ%2Fo%2BjWcuC%2FHXGxpEcop7bXWAR7bARRQIt17qGUNZMVMUjasKjXC6Uw%2B7zhyQY6pgEhIOQNQckgxYTg5l%2BobdbaaKHriwAhYdVJoAf%2FxGhr1JO%2BDvmqkGUjH30eThg6gSDjLSiGT1QMQyFXhNlIQQ4km0jQirB%2BQxD2xHS2B8XH8lDBSpHGTwVVIc3jWdeSxYxb%2FTRf6v4jiXnD39T5zND%2F7QaIUtVOE5CoX9K9BLju2Vvsp1IZTIB8%2Fx5LauTQXuchhcGP9lPbjdoSCpeDzfxFkIDsrqu9&X-Amz-Signature=85e14ca14098957e7d158aef17e3f790941e2a954c4ab7f355cb44798faa0e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

