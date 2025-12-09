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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JGVXWQW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfEacgpiwk%2F1ZEor2WMY6OsI%2BpM8XKKdBer7K3dhP6sQIgUBWbIy9HvhNXLefj4tpetmH8dS1MMc6RpdDy4V3xk2oqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIKwtUVjxFx97ZK7yrcA7GF%2BtQw7L5gTak9CtbiDh7YhvT5hH1yXWHlUGSMxRWDDLS9U5BdkIYwuupQqktY5ykF%2BL61XKD00pq66GZy0zhhmH0eSydP%2FMOTGyaUOuto%2FmsoHIM7stZc%2BN70uN81jX0SnzfTJrFnYeqZYV0t7wysLrgVPz0J%2FKgiwEY65UeRyN9FLHDHkCCS4lj4BbGs1Ed%2BD50c96QmL6LS%2BWq2I3638SuSRH%2BloWNg8QhuP2VOFEf4278%2BytWuppfr%2FfHVbuU4T64l%2B2Jk1S8U6RWFZsZdmyUEa3ISAw8Z1mSUN3%2FgbHVgy5cSl772v5D7oFrPFJfKu83DZXsyNSyYYzrnyT41YK%2FCgPV2GN5uKgET6RP3VZRl5bFSno8e81eClkb1JZc4Icp7eCsqzpqthaNScOx9aNvWCtPryN%2FANWPTgxc5WUYd8RI7o6KHdZBkcpZaj2nROZOtt8cXlOfaeCj%2BoGx8rWtnL9RdMgWlypAIjIphYONogMFJfRoHhauvHttjOzUb60LN7m8wKqEXdC7vDLR4X0JLYJBfK8ZjrXY21xwwnGm7VeRAxxMnKqtFMQXbhf4fka49o%2BiXQ3hCqgVgnrYTXxHsOGLvkArRX%2BLp1SAREWygYC5huNbCKzmFMJmu3skGOqUBQ%2FMOM7VMFQ4lXN9gvB3wQmHjOP3SPoWc6eHrvz0gfO11hniC7WQFhzi7lsy7aPwO%2BZvgHLH33VHfFmNfq95yXuMIgyV4sl5COpDQ3Yuy0JdrJAuS7025JvBCKBTwAVLzBXTw9iQJug1YgZY%2BTEzv5vPjCZztjhEsZx9TvF6bAPlVqcKRFVAbPfRK3McT2%2FPt6PwwTZzK1yP8dVeV7bV8IvO3WD7p&X-Amz-Signature=9b17c9b726b52f104b081fe745abe1429275d2d63fefd8b39997e51615dd9d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

