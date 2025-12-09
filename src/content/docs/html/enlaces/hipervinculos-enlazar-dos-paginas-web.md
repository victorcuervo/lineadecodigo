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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5WZRNA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzjbqYWmnWLp%2Bz2FkUr%2BGkeTU845f8pz4IgVlZHoYrbQIgTbwy3M2VCajAaTWdakO3kQcpuuBo77rgg%2FIsD%2BP04m8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGz5ANZ57tK5c5HTyrcA6Ekgy2OWlYHs2MYTbM7LdDHIDcqMUbo%2FkHgBz3cmznWiVC1NaQCqTUw1e9%2B8l4KVcuTwfHfPajhCt9A1Q92h0j3NE5m1DiYOYUA8EoG8P%2FU%2FZlgaIHGzCNAlJsAsckxxP5T3is2AjpiJdH7XJg2kZD5NWg2N6fFIfZl8rNHEmQy6G6bXBcG3gagdUHzlWglNqYig%2BHk2ljAp00pbAAuMflyM4nVQy33OdW3MJrzDZ9bKEGnNZ08n1i52kduP65oAKpzdd2llsbvzYppnHW26pcOkkp2XoVJ4LA6IJu2h0JCH1flgfRGk5vo2uOAxl%2FwCug3Id04FdMcyS8HNMvL9ArYKrl%2FT23gtT48gF81gqccn%2BcDqT0dTkIFM2HFNAChot2o%2FQMfRG0qhnZqHlO5mjcfOfH4tE6m6cEykeyhuMZFiBlwieIBP3JU631kQP3RlSDv9N7Z5qvBx1wTi8CljxPJBg4Rw%2FAvms2XdIu1k0mGaDghQvyrR8cO4RClej47cuTYUwdycGuB2LR7R9w%2FkdvQ1PHP8%2FxBPEDyJWTsLhna3xRsrj%2Fp7WlJK1iwUjkVnuAwouYD0yzxW4Eq7yO%2BCz4b%2BjdBfp%2FLiLza9XubOzW1OjUkiYHoJdwva9l0MLi84ckGOqUBfwo4s0kWRqOFA97gA4B9t53mH79MQoovLArX7cyZ26%2F2dUxsoTd1XGZEsXNenocbnvxwv8pFqn0XqJvLfp90Dh0NDqoNvIjDMH8xMvjXw0T2X9WHx3NVbacRqR6stV9V5sTUSCjWLjxGFVy2eJ5I7llQyeoS4Z8hzUo%2B56q6GVPG2aQdyi8pOnxofaEOO2pOdW5N1nyxjAi7PovRTa%2BX%2By7daR%2F%2F&X-Amz-Signature=3b06c792247d2b1b382bcbf601deb85fc5faf6e0fb96decc870e9c7422319fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

