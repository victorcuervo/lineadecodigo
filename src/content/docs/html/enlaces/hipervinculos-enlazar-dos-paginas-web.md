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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALM4ZC7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyCPq4sdVwzBkf%2FQsRYEMaUtkI3KhPrI7mYoVwji%2B0JQIhAIDQ%2BXWRmiXU6b3DoknV24G42WbmmpxoF2FJnFx6k%2FFuKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeBdXPShKG06cZ89oq3AMykZx8qXulWqpbeoUQLrIwJkg890mBao7Nan6oDfJIiI3xb0%2BOFtHwcwWc6cxCa4CA9b9Kr27KPV0uwtqlHXwr%2F0JQJC3s1uSXdh3BRfI3LYGrtrqLqtmLotBvX1haN%2BpL1l8CfpDUilOi08ggX63jnsvdcMhPZ%2B2ZrHrO9ggLEUhU5yp2y1lQanUKXE78DucT6Ji2A6jXDFYfe%2F5zQwCvcFTZTCLWjD%2BDi0exbyTGNEoOcivNQM6%2BQ%2F3ty78lL8pXTHvjS%2FJ%2BJQxtoGK5Dfl3LyCeJq4mqyDyqg%2BZUkUQhtROCZk3Ex0RvPuGA2Jg30iG%2BqW3bRmkXypEaKA%2BEdozi9zToXkl27U7z19Mcfk7HTlqpAtzBcIQBYQ37OzI9QTO1ryKdOYoxin0em7N6YVo2k4EF3hPvyCyFHr0KiW%2BcGEIsE2GUJw6bSEigApLOcxRgtBQh3MWIDsq0aplW5e2h2GpMy9%2BAoYLmk61foAvjVLKMp%2FkjY3E8uqKyt%2BRFv%2FnZTQnE9Tw3P7elRgDhSrmcN%2FN5yJaOdEXNlgw%2FhPB2Uah9EpZSkUBTVcjzkMifPGczbqZeMX1l6z0heaJbUCc2tmOQ1y%2FPMMlgTG0x43l%2Fzwk0jzIB4smnB4xdzC13eDJBjqkAaF9T%2B3Lwa9op1Tr%2FE5LWg4DVzKXKvZ7oqjRoDwZrCHrhC18iwbVmsph%2Fn4KTDNnBy9FYq98cN0OrJk62SmEKxtCe2qYaPEncbMSoqo%2FOXKC03i9lWv%2B2YJWW4CEi29wGEO5W1UfOcgidsxje6iyZ%2FKIDhYh5hgNssalOL5kATJ%2FcSMrYt34wkxS9fLF9IVKLptwyR%2BTnHay2KcGdG1mhAbdZxSy&X-Amz-Signature=0f57626bdaea6aea6dc33c95954db559d92a7b4f9c224a3b3eb7e1038b392770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

