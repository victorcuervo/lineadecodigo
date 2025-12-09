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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PVZQO7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtYrYMxjA%2BKGjUEtcwLZazYbeEN%2B9eCehW9%2BXtk3%2FNQAiEA3ZOcZ7Y5aAEuKU6NYoqDC3banwu%2B4WG%2FgR9vTcHOG0cqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbeErN9kRJAocPZtCrcA34zyLs7WKI0A5mFepsCWWvameprAIxqQ7KOflYgcc8fA41Swm%2FU7N3NSrV9S2cKYgt%2FaHw3T9j3%2Fj4pXAOCj0Cb9JC8YCRH1w5jRIee8T1L%2FcnNsWopgWeCqCUFDzWu9G3qYzZXPPmry%2FQ1%2FDpYObre%2FT8%2FdjsvutmOal7%2FiMYoaUWEX7Mtg2CHTDIkNirvfA8pxIt7%2FJ1mn84HIU04zv6zI5gdtCTL6JVMrchIzOXrD8x6VkSnafcv3LGX53lo89V%2FQUMixSY8H0VBkF0NSawouK%2BU9paqn%2FPH3ndSWY5E9aQlC1Tqo%2BZg%2BT2qpl3xl5tDxdx238h6C4MQsm7OnsSx4hqY%2F3aduIHk5SapzHgTXH5qM5Q%2FI5Fut%2BUTQEgbtnYhbWpPuRLaDPEFbZkBI%2B6rm125cZtgDkYstF34KgP5%2BQw2%2FQO0QA2zvdxiIqImVSx0c6qNFPaoVL%2Fz9KAtREh8oPNsuH%2FuW7Lo%2FsnnTPSpIEGStJLEec%2FOoWGkTrwGSe35BvU4k7QuPCJbDJe2q6W0FC69Jg%2FHPgCZKPMU6zd3blmCAhSI4p97s%2FgZYrFqiP8cbgi8IGn%2BS38jdskFRa%2BG8GGWm1sSxQ7L3Im5HxHHCqc0%2Bl3Nj0vL7ZsEMKWH38kGOqUBFolT5pGq%2BPXI5Rn8y3BjoOdjWkK3am9K99FPMIKQVfayXK%2FgMdycoFEV44EPGnluUMPAsQD%2BImvAJTCuh9KFeYqnEwZVoSxxe%2FIi3T804V7DItxLtfmVAVAAJIfsNtJnAmKDa8U3bacggPzdJpN5BNgeAO9FSJCqRsAKM8mYmvPkdeSQgP23sC9IlwNMqZZqvHjeLehpmiLowUZH0%2FTPArImTalG&X-Amz-Signature=25ca5c53d03f4e3c8358a1d3af96d44ce9d46f4386b729c0de6aa611f267d27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

