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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIY7JG3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZAw9qgfNW1afn%2BckUhGBlNBqVlnyj29phtuFkBXLE1wIgShRCV0VE1v97w%2Fknyl%2BBVP5A3KDmn20ihT%2BYcE6uJzsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJuUUWxHbVKSm4%2Fn5yrcA6nf8Q%2FehQXVZNvJRbK9UCHCS4CuqEjGNNpOQaEV8A0TrYULjnYypFLQQ1PyEnNPy94XyIFvPOECNfZxMADbAUrB0ag5ceL2BG%2BhBZo1%2B3XXwn5PxwIG2Sklzgn1KYCLaZTXqD4hgQiQhLv3IF6ZYSs2LghXLtchEmyrQTFkq7tB4WX71OucjFL7NjD6DpcTjuMK%2FeieWXvxBGPFhurV9TwFvp%2Bj%2B3nDoQM2DMQeAwP30lXsNmkFCJOR5XduF07NsdDidoaGUyTohiGFvS1rmT42pqLVvO%2BRNUptu5RgDcDl4%2FSyVqnlUAHQSephz6jGRRd3SbMFHURq4xYnvoB7uiRC99T4VhwtmRbgzDdvWBbplBlTJSfIIaVTxTGNxvuQyFLo975iNY%2BTssQsKGwJisIOtuck%2BgOXZoNguU5PPnZmt4wsORe5IgSh6BbL7HEqPW3SAnkQeJ8z4UzJHNUWbdATSmV7N9lPn2PkHf6R2Kk0%2BBVnL%2F6VFNvZB1KEfx4rGVokd3iM%2FiZCw10UMFQu%2FFCJYsGBJDsgQvThOL04N1pvrdeATEr0VIUkuEvyvwq%2BAdhbeza%2FvxsQR5SVgzpf9cJOLrqwfflEm3b4xCO26jUujOpxvQ4QYScmhBKCMN2tyckGOqUBaVoyxK52BN%2Bt9OW5Su%2FXgUtoFZoONxhOeY4VJQ2Ah9yN4jKVOtpaCH%2BAm3UYph9oX%2FWADM4jqcwYzyeISRST3aX8pofBQpKrmqOIToQlPYs6LnkVuxq1M3XDPl6MvpQS06Ih%2BPG7XVnnJBSoQCcJh5s92bRI3zeC8%2B%2BmYkzdhRa8T5EY77g48qC%2BrejWUF9qen4oFnJ2%2BTQ0A%2B52pK5X1%2BOKkWCZ&X-Amz-Signature=8eafe439465032318367e6b2e9a5f68c6fc5d1cce4d5fa4b6cb98999aaae7768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

