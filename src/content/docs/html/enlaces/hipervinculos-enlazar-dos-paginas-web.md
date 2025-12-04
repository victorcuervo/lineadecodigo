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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E727WIA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCVGgHcGPq8qsldQQHu0PXRs8sCWgjxerRkSfTsyASgowIhAJvn2ZCsQ%2BKOW6d8b6bJeIhzi81GZGQOZHcrETZdw7HfKv8DCEQQABoMNjM3NDIzMTgzODA1IgzeQ2D6YQ29dEy2E9wq3AMDc3f4nxtogJTPAvWN6lI1gl5Qr3dy3PtLh2fUwd5YQnUfMJ6WJ7NEcPbocnHPjIls9aoEG0r1ed9njfYA1gT4q76AU6svKKvgWv1nB50EmI8wvh4D2rmK%2ByoAcHOx5wJ7JpdBnVULMJUOhAIO41YjqCo9zOHse0KYLN%2BJD9cukvO5fOyQaW029ZMa41b9%2BjcHrtE%2FVgsxzQVZCAc5QnBfaf6vYDZYO%2FFTeKNrT2fnK2P6L1DOF0MND1pQuSzuubKXiyL5HUS2iCm23EkjtdQhJRJwGWXdMvx44hBR9QJN0WR9jDJ3PUEaQFBQHvFXyiB795INdWyFeq7TxoiwS49UpQgoHLdbQ8rGBFBnupWdWyZW1IYmvkcJYujbBfCvdIQ%2B%2BCTYRrDV4fFlk4Sa28aOXLUwyB4zfqPHqjt5og7ElvCUIgPCNEMjyu%2FvkAoTutgXJ5I9CLe%2FoOwf0MNbhDEAiEx06%2FIL%2FVSZ%2BB0b%2FzJUvqO1o1yDHrm3TQ6qYw%2BMl4rRRzZ5fa4OeZjgR1KCUyBS9DV5uZnn%2F7xpAfg1EnGwfmP%2B1GwYrKnpGFP6yTkOpEtiwLEXZ2I4Mimi5m5F2HHxB176BsBMKYApjLB%2FF8%2BOe7V%2FAcxF%2B6y1rw6oJDDeycXJBjqkAbf7FMjZsbHObb%2BCkRwB8VJT6O4PB3DamFNDMVLz6BsCRyvha1u7ROuuhE%2FJowTHWHABCgUiptt3Kc2k%2BMNECLdqBKyYInvQCdl6fM7JQx3Yi2kZZgsVmECvFWhgQqYW7YLhr6ADFUbNfqZLHfQbUXLyZmlamY4AjcUfTNaLF3roqyciRXlV%2Beqk7WcM%2FAIdFvTF%2Fc%2B3eP0okRo7TfoaBAUczGOF&X-Amz-Signature=e48c9aa2d69497fb51f645b28a51cc49a0bdaf3faef662e6be2b03f094620d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

