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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRV5YH2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPC1WobQQlHdPw7wQmwsX%2Bqeq1BSWcWhmCTVZ1BowYkAiAAySehGPkktSTrkLjx33f63cwtDgs4Deb3qV4v9RBuvSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXwglOwu%2BzuLgpIIfKtwDZvuwyvudEQMNci0ld7xQbaxobwovaA7skok9RaqyRbnmTzT1hqvhnakeFWi2h8F1zC6boEQY5qKfTFK4zADDQwpxD2b8M0hcnT3xBcX3xjipJKo9QPF9smjcKnCIIguHLqMu7xzu0cpwx02mqUbh659Ylsy3cC9tE8nfDUfjVOL4nw33tVsO5HSaWZ48xRNPvGjL8GClidvlybS5G5JYqubt44RMox7PoYN40CT24FxLxtQ4UxX%2BmXwPLWDEtO85QlOkpGwX94TBJYBrH%2BD3BAVrC3XF3dQ%2FpBEkllSJ1AuaoCPsokjQgKgliNwh8iCajtIlfmYnZ51R3pEFegMn1BiRAotwO08Gk28eKqX8nSkRcFzsOyNacF3%2FisNtantFif5upSvB2sAluoFmgoTwqPOUsbW4GiQdibKIVp1YROMsRvmWVF3Ds8Kj8h0qF3o6Yoyra%2FvqJk4cPfrhSqZ5UdTpS0CjBauMyVxwJp0DGV%2F40THYiCCrQ1ADqdJbr7jOnA7N4eef6obu5TOGSM02829NyvJStvOsgj9501CHvlaGcNUEK31hHkDCJy%2F2Q%2Ff6pbu410FPZ7Dcbp0uTT%2B%2F20sNaITZCHg7zYE8HPlc%2BJOx%2FNb3KCdYhQBFHB8wqqTfyQY6pgHCRg%2B7LEmhAjDZCNzjTXJns4unC5VHUFVWo1L%2FhjXOqLGsBaSk4eJeY%2BAt370p7TGtRcbTqc5NfN3g7yOuDlmgmY21ffat0FBisDnC87azGc0T%2FSTh3FxmMG8GiBZ5C0sRQ4Yz6d2TJSFcEegTdp%2BHM%2FTRZb7UY%2FpO0GocYyamyTjBLmtVj0IA8P3bjla%2FAsQXL3NASnyAT30kR6OzPoZ%2F7v3eN%2Bxu&X-Amz-Signature=fcbd94de707af050f475da4218273bc0fd2701b429f65d6a5739e68f293e584b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

