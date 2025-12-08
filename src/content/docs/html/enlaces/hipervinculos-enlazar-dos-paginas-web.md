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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46SOSTD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDyz%2By7D3M0lrX6JXHuz1oPJVxax%2Fe6Uq7iU%2FGg7sbkAIhAJVp6pa%2F6aEOq%2BqzyjhW0hmbmzPp8hMz95hGeJ1DBfHrKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvoA59MklhtF%2FEk38q3AOOEFLiAbcfQdU%2FeRIafXUocKvc%2BZs5MIcf4u6iOEspN7GSZFaPaTTN9xV%2B%2F29fNvo98vYPy7622R82E1bwDAn1EfScruj%2FiJ4MnUSYko3LHS5GeMsgBRKG9F4HCG37DcmyuTiIwjkuey2iB56pJ%2BBNi76%2BBMugyxF%2FrPdcEybRhVetjspnVwJH9jVS1GiGi7EixHK1y32sOx3twxrsIzZObOx7OQfbArxwkAq8dpIoxTc1N23D5GKmYxemMQEG0YtlJLC7RWBs7dwaKPzNCXAaWe0mtOjO6wlR7tZGMhGcd%2BLiXqA6XpNC2qfxGuLznHa%2F37Nf4ety0bZ4ov%2F6wKyTA2bMXNLmk022FyOvY9qLMKPW8ws6OATZcQhm5LTcAZRnzl3jaF%2FQwcPpydtJy9E6iLH3iOXIiy1FwqJKc48BMlvdZkgYNiEoPWcuQN%2Bpz9c%2FuegHYxxTcE%2B0cS5z73t4RiT2iRjQzDLtaLrsjGW3sCLHoXgawaAANAc9T8asZctQ3iVB2ZMURcp4nAVOOhPCFXGGyu684ewym1vK9iTfz59W58SSEesUFMrGoOhnLwGors6yr84%2BLfBU%2FvvNb1TgyWBz0WUS0DBG3yUMbNKQaTjoGkE8TLYjQEinvjCn7dnJBjqkAYF1ptalIC%2BHQ5iwuuhEtyilJKDpvG3HlfcLqzlZMNO%2BRAu2qDEWFsRQ04REhkfdwiW9b40mxVfl8KaCifS3wG13M2UcbvEZUEGFoL0V9rXp%2B%2Bdpmn8HE019O%2FTjb557jY%2FIeET7V22DbHVjbOmnoCuOlGLh%2B516sVSTSV8WZxkRJef5Z9IeyYgOBH4HYYHNLqOp7gaTJKCwwQBjuWlcO%2BXBKDxH&X-Amz-Signature=da118de3a37626a54b835c4076e668ddb61136e5bb054b7aa0db2f324fb87a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

