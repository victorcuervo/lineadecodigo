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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3B7XGU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FnSDo%2FiT3I1R%2BkNTaMGavz%2FFAy6q%2FNQRigMN%2Fz%2BPlrgIhAIa3CtZTFDnzOkWn5x1HFD%2F%2FWrVNrG08z4aC6FWCLRivKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFyoLLafXPuFzX0zkq3ANVMo%2FgZXtu%2BKABOZkcXtFHLTa9OXS20dRdoBDOmJfp%2FM56voF1KCWuL%2BJec7BIcM50md0MYw2GGqsM%2FwyeQLIxKrU5uoVq2S%2BhKvrtIhwpqfEQS2x5yUBDuM9GJlgIDGh5VaEVAIuA%2FmsJnluajX4lt4OxTxRqvuLOIjOt3uUNYa5%2FdqlO6N79CwQSB73LjIw8CQOR7kqbyNTpwCW2PTedbk8d9ZkGGiqmmhaEL0%2Bxj%2Fpt2%2FpZIc6MnKOa516bA5X3KBThFnC7K53OQHPPnrrIrx3cYPAO7s%2FT7mi3X5difwF2nDKnSfTgJqswj9uIzovjKUJzY28%2FVD0hvo1E6MFvv3SFGytOmOxZs42JzpAJiWp5tC3jYTo3%2FWIsBVtxWKuxeToFfhHjx0nnPgsNNlhJjf0bfUCdxR0GxUJZJzUUzPsSBxTuF1GSLidd5iSkbx2rRHIdMghLxE%2BaF96e7aaxYJzKYFU%2FXuhb7TybZZsG7F979ErrVSzKfdWuw3erQaTcGq4d5ZLVtEhCt8v9VVsXrVamzVUc8bi7bhxJ3Hp8vpkqEVITLb1L%2B7RWABpsNRkiyjP9qIBRJpvLbwMP8wOoGiAZ%2FfX1GU5t%2FtNELxjJacb5TGK%2Fb5iyezasJDD3jt7JBjqkASl20HJDpaScXk%2BEQxEVjTWGJ3bJyenAdlu9tG18nj3Yhw5mnjp2%2FfWwdsXhOgP7GuC%2F%2FvD54HTvR6PihRHiXF0EDHpQRGeFO5U9d2qoxSwd%2FdzR9KSrDmHgqVubklaIvMTJuZEZD8NQ8nWHbOwHQ13AzzPGfmorirr8RW3NJtbMPDsm9fsd3ypDavLEHgLP3jjMi1c1Q%2F9QGXZrZ%2FXganr7w4%2FH&X-Amz-Signature=3fa8bb0824c0b09420f741a505097827624bfa1a2c7bd42662b3c3cb4409467c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

