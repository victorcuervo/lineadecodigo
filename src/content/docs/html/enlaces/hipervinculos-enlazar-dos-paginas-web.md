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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKHAM4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7W9W%2FFQfpIT7jEZelURlRmVgyWXebSKzoKAgaZEybKAiAlOftXUhdMd66DqMlQpyTv9RKONi5KNwYH%2BelmUYYKsCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKtAvJ4OUKO2Bhw8bKtwDhGuMfV%2BnbXsu42rKCQPNxgxvz6ohjxVFHHQFUzeRk5KQIpzqqfX70wDiTounjSm8qWz5RKyQHB%2F16RYpPeNFYEXmetwlKH1%2Fg4UHOmmj%2BGqUf5nfwKr1ljfojUX5lQz%2F7AD45Q5OALkDGekHLZLhws211SPu8D%2BXOjkIAeZKy8pwP1KdXCrASgQZx9nbIZ6igRSmkPwIKoIT5Sl6B8RUR9uNvZFXzBNvHnakDX3uSHsW%2FtTWkK9C8It0q5iL8cCjwYyhHcBNRCsUnUqc9zUg8g3RaUutA8TiMS1ZpGXujTYkBhgt4FuxpmaiCuGJEAGin7UA3nbafYN8MoSggjGwW%2FhCbAKbbuvcXoCQHsEzYXoGfeciHH2OHVmJerTp6Bwl00KezNFyU%2FxnIqbVsRCVhGxrUoPUxjGbN%2FH%2BBKoazaK%2ByrKHnq4YFoJqYanxAFLtFf2KibCJMfOb0vIlLuiDdV5sRFGt%2Fbx%2ByjaTmSMnsJq%2BgFIA%2F61r%2FP6ZCt%2B1WuEXEdYl%2Bp83pVI526niBS2Y1UYvP0XvXaKMEh%2Fzb0y2bKFK1GUojMq1RB6m8Ht48OXncNqp68d6uSY3pGOxWQsdflBN8LGyAh6vgGD3bCnU1OA0NCQe%2Bf5K2Q9%2FBm8wlu%2FYyQY6pgGujnCnWE4%2FHcPrKOcpTyBVRCeZDi%2Ft2nN%2BvzUXRCSPjCpoBXSqCdxJ%2BMvVNXQSgMBWPODfUPpNf2WwF3U%2Bddvhmr3OrHUTtewGjakoLCDq7fdFHDq%2BkZF9ko%2Filc8vgomSqdCK8PWLM%2FX%2FnOPFPTwjhsSjzP3UJxnviMoK3y7ZU2Z2ALfloRaxK9bbhQUSgxxMu7C1B14uibPA6B3ghRByjrPXFlib&X-Amz-Signature=ac7c4487fc000add151221999575021e158171fd77f0404c6fb46fe76c0331f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

