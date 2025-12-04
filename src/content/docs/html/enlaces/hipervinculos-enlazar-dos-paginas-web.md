---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJLFABII%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICq4ICbNedaHavaVxvT8EbhSPS9Ui2gbVO8MhIfArMLBAiEA0ZTT%2ByyXKjXII2ovFntQ8%2BpNMVSOIEdcJZ25ZiBq3acq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGvMMRLfDVRYbl1v6ircA%2Bkjp5SNURS7yHaJcoiTJc%2BCDJuRl3DH2J0pM2cySX0dv7Auvtg6NjGn0fyM7isndmZzFHWqtcOFBj3UktauUmNuLEv6pzVXC7Cw8mUMotp%2B4jHRyS9L0QfoV7TiKRvinjXlKXFXAxfomhM4pNlfZoA%2FMf5laYkgGQXFgzrKgKA4je56Ud%2BztPZNXZWTDNepk%2FKGDio5AzpI2TfIBKKvdbbVb7QnapSMe5hx8%2BEZPFlQTqmsjgVpP7gLjega0Fbu%2FxXOYlcDHLPR9kWLuykBcy74F4qZtGk3R05Cff4MskmqKat0R90G1RxfelxjrwKVYz9EfM6WUUv2NJblDeIFhG6T2xgHdCwcsh1xjvOCF3Plzy%2BdLBgpEjLb8K4BPy00aUYi8070ehzBmfeeV4tKchKYeYGHDvEwUbRwb%2FgmC0kC0nEVSYIiVCKSFaeKr5ZtBEA8vF1hYMQw2uo8MKq1EoKLZOQLNDQ8y7EUeQH2cJCQ4REUqfvsZBeNYIcXnaFmLdfbcJFDqbJg4sc9twiSu8IsqLkUh%2BtZvs5TRD6KUoq%2Bw68FekCcgn2FlYhKE%2F19XjlOLWF%2B6%2BfQreW%2BpfBYsAto6TOFKrjAqs2%2FkBBRW6Qa2afG%2FXja3Fz8W%2Fs%2FMJyGxckGOqUBJ3epJFU7JrY37qe0tCKLNPizgf5hRaM%2FzA3jTrH2HZEBcC2%2BItIr%2BPR5iqa7GLpXY7b6T0VO6VYXwhw3K20fVtyUM3%2FokbIs44EQDqGyd%2BLdAL571Nnr6idteA0UDS3dJn8IThoDjM7RPaHEMJjViM01VYH6qYJgRInyX7l3CBW1k03%2Fed0PMg%2BPlI2MZfxcjEIgjS%2BKJxQLHq1P8l%2BFcjT6QsiY&X-Amz-Signature=e5b3ba7ebb616359028bd1df27eda8d8283ae2d2bf8d2c8fe87b278b52c26875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

