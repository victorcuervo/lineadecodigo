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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5W3TOU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T193427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLWimFBc9I4RiDQgPtG4pU4wunuFr9FwMsaJEmfuTLPAiEAvAErW8pGvpnNVlcygfYQM07YlF%2F31dQURFublspTpjEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwi7%2B70xp3LVMSACSrcA%2BWmbqscQ3SL6YtFhOmFHExvjffVlJo0pIq8iAmQFltvAEIXpgqjlR9IlmNnx8%2F%2FiyNbmrc7G8xnx%2BYgiL%2B8DIiNI3JAyFjVDA2%2BZnif05p9LjSxAG4LbIYMOiu%2F2asw0mOCbLYD16tVkOyfaop28qkMTQWO%2BQD2QyeMTC45tdsp15WEU%2FEZDmzIW%2FzSHzpCdjrj%2Bt4w0yIbwU1l1psrA2FUfMiUyoB2KaOOY7%2F91EPpmwcVVfsa4qkPSF%2FWZygigz5M524qCBgW3u%2FW6onNpwNleWulZjrjSGiBZFHr2SJs8BJnyIl2JtWl3nhMvmHsDHuKG2%2B09DkK1hsdb8g7xgF%2FoCn%2BDKW13x8hQXyn64aCmj%2FC6%2BMslAxTVXlK%2FsCPYwd2qrqE9CotjfVZWWivbU16mOA5iKtzrQRvXVkooD1%2FUZf2UqLBEjZPjqW2wdlPYXTJasxdWZ%2FNwH%2BYlRy9KeZJVUB%2FOw%2FDlVKCZSh%2BzMbyfLOFh29%2BLJH%2BYuyj6cE6fnnjASmYKWm8cQU9VHCOpjHIIxrJgc73p8ZlHJ3D1xxwgJfCoy1y%2Fi3L%2FYFUavYe62eana2f6ORyMJ44blSaYemVeB1rwZPmNbHtnB%2FOLKckFJka1GMEIVfNeYLeMLvf4ckGOqUBogYR8ZU7KEney5LX9FeoU1qCg%2FtUdD%2F6%2BDF590KDOL5i%2B%2FsHVtMdNC9bTAMSUzr4K1vs8fh9Fzf%2FBNbU7JgSI0XOczWhuHEP6NTh6XxDqsrEN%2FuBDvf91A9l1%2Bt9cEDIF%2BOH9mE8E%2BRC%2B%2BtpJZ%2Bc7gZ1TByeIqEVPGTeiayOIQnm19CwZJ%2B57I%2FGvhkoDIvobrTTC%2FedA41lZipBK7l5F8xBZz%2Fa&X-Amz-Signature=878799c342aeb97a1b32f46878f82610044adb77f87b1294888a96107cb1cfdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

