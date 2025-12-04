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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YMARAT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICcLcGBvxpsl%2BM2r0UHOTIOUlP8ULwiUeM%2Fqp5v56hdyAiEA%2F26ho9mdm8Q1qdYH9G2%2F91M5xviiu6XCX9bDSQXkxugq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDIGrr2OnDtFdbskxGSrcA%2FZbUrMLOhFz6DTScQSpMYqN4I2s4kjYUoJ8ZtbIcsXuqY2l3BvPN3QCjrKslgBua%2FYw1IQbeFPh7WJzP8Kn4cwc38KrbjaDJy3%2BlkSPA5RuKTuFUY5omfs%2BeCXpaWp7gXBbcXv09zT6lIafZIZW6cgLVlYORERBrhPmJdyaeOoJ76QGgJc9g%2BGx3o2JH7JEyxFOHJxrl%2FddcWNuX1%2FkrPMEkzkwc%2BldRNFgrdf8G9LdV8qF6ByQltINPOgTDPWhz%2BuRClB27yeqZ4kFPZsIWIUwLgN%2BT8jF7PmU75s7TJpjEAe7qTSjgImp7TOxrm6euijXvBibPXpyw8pwR5ZKdlqGgiCZfFPkvepGOOgumQ6XDeW3MLueyofqYZMsQVPDEJKBXoFW8zINDDWVlpFJzYhydFS9zTIIaNJMIY5nM8vBmpqO9hq5qcbCM9agy3yUcERScQv9NGlwYmtVQlRBWk0vDEz%2BwbF8rMJRYEIIwxhrGXzjM%2F0tx%2Bgt0sRdGGJFySKx06wKKTIL2ubBM53iLbntss0sfd86r%2BsAdHFwsR0m5LUUaUeRI9%2FG4qTjQdNkcDGVt4kV9pTCNps1nfdB0fphh%2Bew10%2B73RmwbTo6ob8gHRjci1Ixn28U8esRMLfzw8kGOqUB3o%2B%2BKuBR7t%2FApO7ByQxyqHJBg9%2BzxL0QarcM79gJ5geOPVrLG8YVoqL3wySPOmyqDTG9JcVL%2BhIqFekmhdk0no2QnjTMotOLVo%2Bdb6zuzK%2BNEA3Ogm4yQmgG4KhfCKLOejKuMQdg3fS8EgzToq%2FbMuglrUTzfXG3hbfX01s%2Bw%2BHZZnRNC5c4Q58S09CcZo34%2FGexOOFEez2TBwicE9sLSBmE1t2P&X-Amz-Signature=9c43811dd65a17e8a82a8a9a0be0a3ad78c1e87010acef0bf0ff8f4cc2a365bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

