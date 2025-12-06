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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O2MCDWZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUaZjMFDf2ulg0fVRVvJfn4d3pqE4zJodI5vNGdvZl1AiEA9hbwdHMo40yhAPe%2FmJlHN9754Wn%2F8TOxDIr9MoSlKjkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDP4tgEFfSFvzOGZXaCrcA%2FmAw9uu%2FUepimph4Z6OmuqaDUe98YSq21T9lOFoPapAaUHPuFq%2BiUP65y2u8Nu5NeQWwlH9zyrbBFfgPzA%2FnSbfhr4drN9PkrHAcK%2BbRqRHT4702GZalCSlrwobkXDHXSs7cPJPdlLCViZnCnSdzktdSvz02Npb6xpWLxn01jeswaozoKElBhaxnG0xwz%2BpG4x4D%2B3IIBtHYiNfgGb0w4oHWO8gGx7akso6SdDolo57JDfKDZVmiId%2BWs0qbGKRODfB16CbiuooMPUXHeCCvS69cLfE%2BwhqKFMzpnsTwAYvSvwQFdWG2MTLeIiTbjGjzKVxQ9os%2F284wpsXzpGkaKztni6LzMjOPm%2B8AFlRAMqzLuWtqzbytEW0KRPZ6rBtTiBxEAuN767t3Anfm014IARnlptOl%2FUFtSyK47VCXGyCAgBPFMeLzYwYerDh0OW%2B2zvUTLkGze84Z4Fh7OCEN5krR5QGaSNT6eFLlZqlJNRVETOW0kXoAC%2Bly9UlYGVcEDhn6Msh4ipAiC8VFyYCZhEdXzFJ741gf6v3Yx6FBVgiMBou8tv8%2B%2Fzo1IpK9JKoQqpQdNqCPI2wInssAEKIr5gG9jL8TfR9txIKau3aHea7H0deF62%2BYfch8oniMMbT0skGOqUBDtr84NE34ixaNSAH6JHy64GOHrF7PeMjBb6Wbfw55HAEYJ25k28vvdSJ19qtTyPXb1mbrPOCioFB2TDiNgjOynjwqBVj9rHXsO4ML77C7KCiq5Vsrr7k3hGfiQ7%2BiU6L4hs3Y3c3ED9PviHCwDHw2N2w2%2BHsWcrkowdyjg4%2FWw7qGeVMl14mib3Y4m088bflTQyqysFnG3KvRu8tECLpYX%2F7e3FS&X-Amz-Signature=362d625f3b61dcee7d6ce7cb3fc609b3ad89e1fa70db99a9b69e8df764adfaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

