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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYWUGG3P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T185252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7MflObg%2BEwWzp%2FPwcU9xZ9oFEm%2FTFt5sIl92%2Br4lhGAiA7rpErz5otsqGcLF5qWMK24J5imL7yKTodL539Xht%2FhCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcEchg4IuH%2BeW2FoKtwDn3vdyBKIMAf5UyDhKi9cPniBzd3dSh8gyjsa%2BM8kt3uHqjPSaJWRqidd8Owj3tw78daaEDo8bB0O%2FvS0%2BHmjXmLiYtioA2P1hOmqLNpnxTQCAE%2BBzcEOMQhLZKhrBmoC0z%2BuBzju6TW%2BpJHcvp6TS2xa9RC4CWX65yq0U5Tz0GjOPgCrU6JjRVzDTF51VLbiJeehAgaCaKVwYHA%2FSkf%2Fr3VoV9jun9ZPDU6iQ%2FYXYv5CQFshK%2FoTELt427OPYotRpH1pt3Ntl6CiwjDRVjWonT8DjKQ2406ePbl7ZV2jqZbkpTcSAEoiP4%2FUP6lAefwaVcRpMgcmpHgDdPS9fCmcWl6K1RcXBWY9ltbz2iqVSqAieLpnqAKHqyx7ZBimdCyOZB%2BjzWMpohRhtYuf7FIYMUplvEoGbmvzcQJuRnOGy6xgG4lfXnE64G88DEcwyzbRrtFhKRPLTUS45q13aWgfbXyb1ecuB%2FrMQhKnYSmzLVZV7IoP7KuWq1La5%2B89EH%2Bi31pNnKDzQy%2B%2B14eRDMtcp%2FXRvB3KNbZmlMKDX9NIqybW60eGfC%2BDcLuFMhOrwsHN1WpxmymasACL5rWhhd%2F61Fsr%2F18RpJwQ0PvFIvFpjorxnnHwJmEs09Qq%2BNAw9t7hyQY6pgFKnlXiK8SVCCOJ6oUfbpkNFsDLsLYtlCTSoZPYtM7WmogN%2BS%2BoWaD2yDSWepJQBz6owSjWaiR3hHWanHdJxhaJ6qPz0qlg24Vt4YQWjIyc7HTl%2F9PqgVbJXcnZXjoVYD654wKB6rFduqTC6Aodn%2F9S6e0Kl7RWA%2FBZETyL%2BuAruNGWGxYNqCEMctQR9VmPqcwah7bNyWv7O16DKo8pm3hkS%2FvI%2FUtC&X-Amz-Signature=e54480c04c0714b61c64a17b6be8e1635db446f238e11e87813019afb12bdb2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

