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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCMZ6BBN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj5x0XAnm%2BQ41fT7A2%2FW%2BymQGiVBG%2BRN7I3ApuS%2BauFAIhAJeQ5pttrQw%2BRaNI%2BrGGQpC6YB%2F4CLUod%2BumUx1Dn9aQKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN52Nac8BEg4NJWA0q3AMLPCl035HEJ1kakKvlQcUjKUZH5EOJReXYgcsphX5iC5lQdoTOuMC4mrkOd5RyTokIG2RW2WQPBrXBaXp51cYc25nQCj6s3b0ektif6VoISm35U6yBFvdQ9O4HCYIV%2FvDsJ1EiFn2nNpwV5ZlSNhu2QRKIXO1QpA%2BJRqQ%2FQjQ4r3PPXj0hqTumd6obRlzMA3PHkNXlbxYpY7W78iirb31ORMHdd2HaNE6LFg9W4LrIyGGAE9hW%2Fotb2DNKOqhemLeJ0bi%2Fn99cUPu0ku3pczOoSHo9FtvaAXTbFPaZ0hOMFuPm3rndsIEvoSmVuo78vO49nVVkfWG7wrvKH9q1ZZYZI%2BGN%2FnfZKpzCr3iP4m5Xssn87Yv%2BHhQzDcx8uT3ZK0jPHgh%2FrmmeNVFKm7iX08QAjFZUfLlBaY0qQ%2BFV07cHEpxPRgh1henNmmML%2BnNsQLpCswqU2Chp%2FGIgOkPNVMAWtbu53Kin1bLxa6AolSobxFsa3jEDSkcOZE4ZXEWz76DdzE%2FeIHJ9f6qvTOAyxExvrQZCFJsjou%2FrS3pghn36vzfTtqX7J1porYs8e630aw9XbmTq8cQRY18FUDTlXyxAm%2Fy9HM%2Fb%2FIJGjKqEjPy%2BsoByysWuAQZ5UyWvNTCDqNfJBjqkAbqzL99vk3Ml2yr0JeQwT47OBEfHpYW8YozJED%2BdLGY61y%2BBkCoX88whMjhBK1ZMDdGjlDCKS6J3pROW4fjQGpCxLmLcjXUCMHYapjAMaO7TV0fXr%2FtPqokZPgfEZszFfY8NVe6NOUTBHA0Nnthkj3cKsgZ8OKbU%2Fu7Q5kj6GW%2BrpseRzw7Rj6MW4nyMOxWgOfc7c5hIoYu8Iz%2BlI20iTOTsUXJU&X-Amz-Signature=b31bcedf2fcc9666d44a1c0fb716fb3a3efbb3f925dbc925801447fc675e4ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

