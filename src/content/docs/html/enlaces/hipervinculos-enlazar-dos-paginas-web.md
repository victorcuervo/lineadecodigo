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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPICAXH7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxozcbLF4yTxTTSe4mq5xrHNeTvJ8OpaO%2FXNk%2Fh1W15AiAqRP58fTU%2B5g2JoqsYk6LMi4sSDcN%2FGL3gGnOepCRn5CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvnu2EWaeKwLcaiPUKtwDQfYGYTZynLroJbzoofWm1LeW9XLuETiSBl7b6UmeETWCGeCwXkN4i0YLg9maqI2CH2DkI3Qltb2cb9sztCcR%2FgEHKnn9tsujCHmQ4asRH5rky9qvzJNSUzRwmzMNUHuvfNXidoojmXwlqvOM%2Bz9g7lXi3bu7xZ4RVOHGP%2FDXrcOd7eWsD9xfU5VgCeMvbRQXzjS%2Fx9c84S9lzEZughgo0CU2PXLA79%2F0gb931g96edoMkNxMOLD8%2BoTR5eXPmz6818%2BNKqTS3B96EeVAq5V7WpIBFOqR7nRlZRgXT0sVj7iT731qPxw7FaDkU2%2BrhRwezUcdm3hRnNSnBwZqrRmYJZCr%2FZQ%2FdGuomvXge9QJF9tNeT3pvtTE%2BrH6c4CLgaWz5a6XOUgW17Q9cFj78pYkL6%2FO3p9daIF6KXpkwqQf9loiFU4g2JBytL%2FG95BOX1F3uvkzS0ZTuL2c2%2FajXYeZegR%2Fp9Rsvmb%2FnpaKK4t1KiLRnyfbEOBKA%2Fr626GAByHoXenIJ9aZ7Y4EdJvm6O8GtkJmAqVi2VtX%2FU25GaHdg7XlvJP7xPC%2BINmU%2F2AL3K55lYw5dJXb5%2FzAH5EgL2eft0xmh8et2jOK42XOcCdD%2B5AI2lNedRhDr8CMGKsw0dzgyQY6pgG4%2BdCWi2QdSdxgzL5%2Bv7Pc89J0JZbpG0XHJE%2BpV6CA%2BH04dG2u%2BK9pgd5SwHc%2BitdMHUgQRBksCMxMWlob%2FnxMdazkzmQlDKArIkB3bFAYcc%2BXNSg9brVk%2BsEZMUh3qtr9feEA%2FCxW8WmjIJ74hP67KYAlVW4JopeV1TLIf161%2FkKnDGq3cEq9K7Hzfei%2FbmWCWna2rBTjugTZKM9xqtSXVocpCIBR&X-Amz-Signature=eb66840c0d5e49ae1c4835dbf9a20395f6d25936b7ea868ec994363ba02cfabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

