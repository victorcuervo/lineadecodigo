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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6FKVAG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2g4NfcUsDYRnMfAKc0sGyT3Pot71Owev0lSTw88l9OAiEAumvnkIVW%2BP1K9ESW9KkQvJaQhpeHcCFrMGXDee2uIwMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl3nc5ByPu8ZdWGNircA32qm5ayKLL%2BFuWg%2B0XEW6anpf33Zjas%2F%2FhLxqneRdLoArsSUyzDnwiJ8mgdmQM1znh7W4Q9rNbtt3n6%2BE7PZ2Qy%2BXEn9SSXOKsHDhuEwkZcDe5zpRv1rDvSI0CBZ6MNJDukugtXEvvquhc1MAJigH%2BcBbCUFsdQeGMMmQ7xZRGNK%2BGQyQMbxLjzxdZuiY3wNWddjGB2Rid5BRIAhTacAUXPSgGC2AqccPnie%2F498FtCNBXxEd8NiOwObJVj2VOIL9KtxEH9eb79FRLyXCaXPuAVGTqneGUvypwiNjFbTlvp2ME%2Fuugh3XqVTjMRR9DobzBFIFwM8PCPRgEbWcWLKz4aRzZozwl0obpXq5MR1sMP3kXfNEAmVamRRaI2otBhhxbY9iOwMaGO%2FZim%2FgGN5IQAYWykvgOP7uKAvhWv4qIeSY1eMVvvOo2kOGtxvv374aqxPZI9P8%2FyAjLaYMMFv2bmKwLrkem4XrNa3wLsvfKlymkFOQUDgq3cOwGFKf953ZYE4BWpf1N9BYKzpEznyXque5jSskBnQhtj8EVksAR5wt8AG8YPp9R%2FCwVXySDQUftQQ%2BOVWeRmfldKREagIuc20GGMad%2FAOzUg%2Fcx1BNklpcWQYpe2XttlhU%2BZMICi2MkGOqUBNzCj9%2BchPKTBgmQbeTsZvbKWsCn6rcXJPndlbpf9znIiiAqwoJk%2F1YMNyNWqKurhMjgGUF5TSGGdtNTESfKDRUW9t0NjS9P1LvQp8sRqFAT%2BfaR6ez2fA80ZrW%2BcVcZbbH%2FeDiYNo%2Fp66xpHE2jFO3CGaenQ1i3vft2r9LuJYYIA9PYtg5DHJUHZxQi3H1ZOR8z45OKst7q13YNlSc%2BnHC58PkHo&X-Amz-Signature=1a6d4d05d13de87d4e5c2ef80498c31e3e8d5d24c8d59e32047dc3d57b4f391d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

