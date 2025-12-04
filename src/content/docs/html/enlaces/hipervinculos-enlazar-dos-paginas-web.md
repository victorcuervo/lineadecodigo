---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZRVUDR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCQQXwRSSUnaSvEAcjcpG3uIccMxu%2BsYSWz7l6wW3%2BGsQIhAMLoB8Qr3rP7N0JrE8L%2BQD1Wcp0EhN0GbXE2EY%2B8%2Bu7hKv8DCD4QABoMNjM3NDIzMTgzODA1IgwV7KwbQKko%2BMot6v4q3AOUuPAeZq4JuoLzyDl9yz9Apw9z43Wlvb%2FYSvP%2FBIaRNR8AlWOrLolrY0GBoXXfa%2FBT5pKzvUmxpuwF2xWnfpPAXM7MEo1cZZrCfBKbb%2BWj91xAq7aep%2FxoX%2FwqO2gKBrrwqZUmmqALxOChaIdUqduUddBrdjzW88YWLYazSKsEPJ3IIUaugwvVYlZ9fPz2MyKlOfy7LPjKWCcKlmbeciLj8KdECri4TRC4rZpQilju%2B02efCHzkccXC0W%2FEcLKsfVfchKVVHn4jACc36uoAZa1Armvi6SRD5lz%2Bv116D6BBRh7k5Mw7l8BG%2Fx6iLteffp1ykA7gA5YycRynWzvnn1XmiDO8m%2FoN4Jx2ko81yNGJFKuLeTWMaAf793iKpwiPuTp%2Fp1uPaGfHRb9%2FRJf7btBZKkeppm4hao9Gn1elFc97mVuKVKgUrIIL8IwePBLRHGmIC55RlhHevwvHH2h7V2RPTKGqAig%2FlNKMtOqmOaTPzgGVkIve%2Fj8LojKATS6efu%2BWLOiGh%2BvYB5yq8xVXp745mMGijyWy4oDCMd32MDIl51FRJpEc0K0SLd17HvunQwDSFOMzsAZ7jgDoZyRt%2FDaxNE0Y12hcpVanzihrvPs2GF41vCE%2B4eiWthIITDDsMTJBjqkASkuuDdjN%2Fi08PqC%2FvutX%2BKqug9aeT7XrFgTM%2B%2FYYiXYrhkeK3pz5gkiVkdFiOF1Vu6zYibc18qaE%2FLZoDUAFPCs6nTkQKemaLbr%2Bti7VaVOtfNrLyOX0JVaFwdEHbefO3mUOxLn4OIMbdiyHqMNaRCpSIW6uxHsZlcp4IfLvRu3KHqknnqoyIqqfClSjWvp2cxyt%2BJsFcB%2FtTvnYKXZ6PGSmawd&X-Amz-Signature=933ff9132ec629c9324b3e323a00a592a29bb28489db8e7b0d66c688fff5c4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

