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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANDZUGD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxiOa90kRbYkrBYPAeGHd1%2FuwCBM34cEnbNStyyBjcoAiEAkVg6PB1MVIpqAL2Fa6K0bygc1xSDCVC8G5Dq5eCfMUcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMP6ZvNM8H0VkOb%2BrSrcA%2F4%2BrRkllL1hesYiTmSGjJwtXB3B8fSqk2aObKhTH6FcUK7u2GDXnjd7Eq0oXkvLBmtaHEtyrpFcFZdlKin0AiyS67DEK1aWABi8NqFCV%2BghH7DyxZJw%2B4SH%2BRMlHSOp2jGyrvaqjGJ2elF7NVd30I5pSVGJNbeb5fAIMEUdG9NTj0b6O4clg9wDqLtJa026n1JBxvcxsmRqW40rR2gAUIqZKeukEfG93noGmZ05W1XF2M%2FRy%2FxOYcLTZlkbTuGIzy3popEuLKv7%2B47P%2BE3ma2P%2BUJhkmCu7ygeAynrcjfV5HUgFJmz3Q8uTE%2FtxZKrnHKZZQJa%2F%2BHPaapJhGtzXUnEQ5KX8vpd94Rdwh20zRJ%2Bn%2BXmtmU%2Fz9qEkmQBjFTXXSNid%2FeiZMbeMdE9UcmIwBckQI8dbPMxB9jCyxoGEQfapW0OlGzA4u5A7q3gwB1ip1ax%2Fu8Xq7eXBEZBi8pSCC5oE5ZsvounivlpmDvatfbqyb8WdRaQAyw2nbwmhIrxzb3Au%2Bc%2BJTIeIOuDHaVgCEoj1eFSiuZw6sCCGG5T4sL99C0HvlAayz7wDvGBN4i4BIxjYX1k6C54IhIjS3rTlvLKCBPx7jDGoqrcm8oH1Mzwojgw6IJCi%2BL0blz2EMOyG3MkGOqUB%2BvsWaep3MlFzSsuSNuHvay%2FK6P7ZF6J1QhNwNN5vq%2BHawyaRLEtp30WE99Yqv8cNmV%2BPrXOzbAxiysxV6v70%2FqjfWGZTHClQpIc%2F2vNEsXeycDs%2FVpui1Jy4iUg13cHxLEu7n%2Bbn5nsACo9ihGkLj3tqVYPrwX1nFoRPiJkrQqFuh%2BWg%2B2RWau3eLqD%2FfoqfsFnN6d8CoyIfJFZVPSH3ebH4j9eT&X-Amz-Signature=d50b12682fcba0201f7d97f3c94a42b0f8f74ee9caff605657b23ec12086ebf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

