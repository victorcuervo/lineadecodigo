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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ24MWGS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5UPOOo38ceoBggrHIQlqzZV0W2qb4ZdMBAJDicLzliAiEA0nMDaNf6p2EtAnctu9lPcBTu3XzgV7mnxa7l32YMaEQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCOmdtW3W3sKaJLweircA2A6oHSrmYLhsC3xWe%2FOLOOX%2FsUo041mlW%2Frff43LRDXLKGhIdeicrEAl8RpL1s8Ri%2F%2FNVKpvlMq02Z2wRNvU3FXdGALYmC6pLjx5sW5gNubTnRiu3i%2FTW3d9XECcNHVT5x8QA%2Bl3uJCzagPXrNhpkBNmwMEF3vGq75brGMUlfymXWMeza5%2Bz3Kvyrk2fO4nsB8TgxT8UHzBQ5A2qFoMPY%2FNfnbXnEFAhgosePKf0rad8gc9e3QQY3OHqVjgyF7tj%2FYYx3Qwe6o%2Fu9FQEv6xYXhU6rcI3i%2FKZ6HyqR%2FRgd81RL72J4y48CODb15bOy4YrpXkvK27PrtPTu8WDHh33KVLAbKvgRVFYECyTlR8PWlWuUPfpCtO5YWUdcaAD1pUO85XIWYksbfJSCvxvPc4qbeVyyqw8zcbYpexca7lFKut%2B5SvWux8DfEV%2BNMVol3onbaIURajt%2FEHq8iCi82GGz6laiJ5Q90TbvKURHPF1LjacnM29cynjaD9jlXurH8A%2FN8dP6tP28rEdKMjV8gnJukeB9RXwMl6lGZM3M165JTLx%2ByNwujnsbUIElNxYCSIUW4SK9GoJsPDPVX0v5Dm2cDFuuIawKTcxMfcs3xFclgsJAIbujx9x%2Fh%2FwxrmMJeKzckGOqUBgnmJxTGV%2BeytqM6uNMPAJpzzvuRWQclez8MRDtn9pdoKk4ofo9Dm3eVDC%2Bd%2BfUvWjxUXvbBtQDJD5R5zeEYIwj2kAXDDms5Ow9W5KegF1jRKSoX9qmg1ZMeUjUqmfx%2FKO85%2F9l%2FSqFkCorpSchsrHZSVUdNL9%2Ba7W1meM1t608axZ87zZW6InaQ0h656HwwiuserDGBMIvShBhL5vLIdNtYjJIdq&X-Amz-Signature=e1c11e9e1846b8573861360916de224d6cd0cffaa67375013eb27743fd91dd4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

