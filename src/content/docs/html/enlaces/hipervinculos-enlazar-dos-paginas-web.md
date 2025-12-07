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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPFZMKM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJuNotZPnHDTQ%2B1g1fUD2SqqcWc0tsI9ZnmeQkSWFF%2BQIhAItn1Xw1tBZ0JxSJp23Awyqw8188AbDFd%2BNStSAq9nNzKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyanEzuDmaoRWbZy38q3AOwudfm18%2B0fk7m5nq6ZV3pynI8COny131LRMG%2FJu9%2B%2FRhCcVoI5FP3xRyoFQxTsnuBU0X35n9XXZPvHnhAeU9g1I3yoo0y9aVyol5lyTGQPcZ9nkueuvai8wsk0ue7MiSZZ31UU8%2BLwfDMg8rDdVwNPLKqvMagDantv2xhwBvIxrHBQBpHl9btb3tmJqkqUuzvdFReaBk7tC121vGUxLIiOsGjAEXe6Wx7t2os3Q4X%2BOnzbwDDr46rAhxbrxiTa4oWoWXzn2%2FVjQ5i9v%2FslVjPNccfLUMjDD3xrtNwj4i2GUbrMX7U4iKHZcUlXI3Fszppi89JfaXM%2BKifnre6hrOX42YtkDyDpUuzoqJr2Xb2ApXtqaff5mMvKxsprzdSBCqy9m85ADf7cS1LICL8VoiPS6slETHgI%2Bhj%2FFkdGrWQUdzFUxNx1cLFKNMeGcDMwk%2Bc%2BPQbEmzaYHJPUVt5zKE1TRlkrWYWG%2FlxLfudXxvP7msFVm9uM%2BdkH43SCHFL3VUerX5aWPndVly4sR1ME%2BTEYkBDm4FUt9LdJ4f6nFkDCAv4kTtkoQgkdNhRxTqN4ESoOo3R5toWfn%2FPnJe%2BSpYQg6xlDtbIpS67DElgWvWWvxh45q5AIA8wF%2FI8fTComdXJBjqkAYa5ox3qHm6siGPyckuTaslkgh5JzAsr60hbSN8uXksVKyl5cDWMfvk%2FFpTqM%2F%2B1%2F1v6z%2Bu7FmhhabotmhQ2K8WisVhuFfQN1YHBfVfz1aVuIFIbmx0TS4TRL2sSdrsX7rK89xkYy6PNbzy294Mi5YbNEN%2BAsUvuZZ9g%2BNI8ixRYSup22PEnsmWrWNEObq2vT5RtajhId5BoHgDOUKphcDdA79Bh&X-Amz-Signature=5c5360863a9f0c623da29d037c497f8cb84c890ae1ac632d150538e5744a490b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

