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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWG6QS35%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR3%2FlAzASTPQf7NKtpsouBe1AsiFPfAH%2FMNdJwvq3nFwIgWuM0pJwvNBdGPRH9PWM0xR6lQZou8xwqedji%2F%2F2ZaOUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKtqHcc00UJqjkjW%2FircA0FmMbDRbZuALhYamV5b1%2F%2BkDA9DuRUVZ5%2FQPlceeYRLot5nbfZxKMH24%2BiQlRCrToV5p0pxLEAmR%2BTJuUWhFvgP24oUohAOsziLFiyet1asrT1%2FRDGev8lnPBIkVO%2Fy%2B8eI%2BZ3AvWT%2BNbB0MH%2FVuLuu02lRPDB70Sum4vqWqzF7NcVZsJTQM%2F%2F9LBlZI5oWPp56h%2BSXjHOQS3%2BsF3yNR91ARi821wrf77JGf3PN9J%2BWY24SdUxn4sdzX2ykwzWI8jgOoes%2BH4lnW00qnsILfQ5RJNfPe0mlYMNDWVTZKXnEUU9elHqT%2Fu3I0JqQ%2Blmc3xXwS1TIuyrPT2ntvzxFA%2BrZEG%2FgmSKbXnin7%2F85h4tByD54fRw%2FxU%2Bk7aUF1HOkkWf7O70bfkFaRdA2iz9zYIqCQErZrDNOtVbii2Ox1vse5%2B73rUrS1WIKxjQhW%2F99C44mQqPiW62B2AwHW84gwzdlU2P7nQwokfv3d%2BSSLmQkGNqTNydV0FhLIwOdGyO1aPwsv%2BNTcoGgw1fSEV1g22YD2pr0pClodv6ADToHYlJt35bbs0JOixU%2FdVmlMnKzQz9sDbUPRp7oAHUhmeGqWZ6NNUGq%2FOlvOrjgWjetJNp%2BS1Nyv4ezMWbhP4dgMNTrz8kGOqUBbkVFtka89XiIhEx%2FUVrvbD7%2Ba5Wz3CeFIbQL88Uwq%2FPgIZUXUgib8EFP0Zmxd4yXyIB3AQgN3IUkOU1I30hfgBL5Fmgj7Bqb0u1jHyh1aVsqaFKF55Lo9eSGBR9%2FFiQfRvNVzHzPQak8Anbdt3JPi3uFGNaoK7UcnA6OzMWp1Zye4YjpYwsbJjEM60UslVA6yya7dTIY2nafUnVEwX6p96gmEfAJ&X-Amz-Signature=e78082423142215c20d893d7dfc6780075d7a77c8a0382b3155717a806745ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

