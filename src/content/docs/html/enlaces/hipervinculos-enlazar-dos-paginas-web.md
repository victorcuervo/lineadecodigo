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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ZOP3ZH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDpNDklsFqx1c%2BHpznRlv8C3aJwBMEDIefVowNDokssAIhAO3AvGmkJ4lzDM52zVZJOr1GxGB4PijjtnJJ5oIoqqV3KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTZinwHEI5qqV5arMq3AP3lfh55XdWNsOSGxqK%2FxIwXthzFrZuhhQ4dQtGKl1pyZoIfXBktsi0r13FGCDZGDrJFnKWJOnr0kQj1dwPNTtfy0vSoiLJ6vVRmjSLPfqeNHJXiNeApbr8lD4ZBQU7j5tmVkfJkWnzE3S27Y6PbyFsOgh9d2AZBSoCJjaQBKarlUVzrVKHTYqpGbQxDWh3RE2ppE%2FrsXEHy%2BN6H2de4gjokYoMhEcZu6%2F8z1bFk1jFJaiEsAT7EVfJAKzwkOtoVBZgvlG7nib9dPFoKr7vkfL4%2BcDaBwPkQwoAHRXYLJzgOElA%2FdENKtOaOt%2B0I3r99OANV%2BUs5Ft%2F666DUuP6HyuXmG1xbENRLa3ODC8OMY9wa2I59MPa2Kj%2FD4bc2CCZroSHvO2RIQ3OYPrbSqHZPDBv4V4bcHAojScQ4p8UF0O6D4%2FKcSUpvADeofQkjzy4U6d1FObf5fv5TFNZF0R%2BUA47RmEv5YJ5pZlBkSODKvgo0Eth1CCf7e%2FZ0rdpquVLqmq6Hqwp3rJMprGlxJdQ31qJdkQEEhcuF7QyXVS%2FDJsNRaOajY%2B%2Bsl%2BCYRNIn%2Fa23B%2FesZ2%2BssL94JNvRSrErifwIXs4WIwGHChV5wCaPrg35oNflColeebPHHH7hTCD6d3JBjqkARAxrgF%2BPvYXoT9hFjK2wfBCiI3pH8kiyAE43V65j3Tk%2Fc4gAhNsOBocGK574lfnyBz1veQp%2B3n%2BiTTqfQogpRN7RYM449hxtEMzwx8uIgwmj%2BrO4LBLuDh4QaOWbjL93YJ2Rz30g8yAlsqWycj6Yz%2Bg%2FDYs23aq6MX4PfccCgPUX4mAyqfulyAJP4QKSLgpT%2BEZ%2BqOOXRhnDGX7mtrEH98kGmzG&X-Amz-Signature=a0340ef0ec611f7201bf0c85589bfb483cd2e3b6310cc7c354c60475d75d8dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

