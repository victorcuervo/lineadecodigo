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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQZHGUU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWEcCnjY99WFlAvwvkMYfUY2XJCPIjy7oqNwy2xCQarAiA8lQYuy5q%2Bn9oPDsLbEUz8ris2ctHu1%2BAIXi0TmT0LgSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMdWl5c55YQfNYd4atKtwDWmjq4ThUx%2BmXpCy6c6FMr9t5krSWdKeNi5wBIE7ZudAuwotwsQMA1hTYnW0cnjWqZ9znaMPF8DXU%2FPDTRYQvwWSFg2DJul%2FPjCucoWQqzQoMbEQEM6VXrhDjpsWI1LDPOM%2F1B7VSKmfRZX11Onnxj4%2BN4Bl1fuc4%2B%2BddvSkJYm2maUBTAqkD3JE03GhDxCy8fanpbIBp3VVoeeq%2BJWwd6BStgsZ9gQ8ZTNrEpurYJe7r4%2B7DmVj55kRtv4U0s5kX2GnrPevx9%2BAl2l4n10EupEDXN40RARVMAT3PIHW3KQ7fx7b69X9aUfY%2FUdT48Yyg9G5CvqRHfR7jukuB2Ujx6ToorO4oN7PKX5Rndj8RUm%2FEjefKvx5W9aviatl6kautkhz%2B8U5zKVT%2FyuwR5jUVv%2FgEOLBs61OQFi9JQCyzezWYzNahVBSnC9QbSJkL%2FZtCvdl4FW%2FWtnr2WBpF5OjkNw0F9yZfWxdNDNpCUzniCPslyxrS1bUNf6vkBEsx2y3%2BmgLuWwgSD2Kez8c4kSvEBoIT0Oc5zfXmzo67e473VcfcxiOz5%2FpK%2F914YF7VLREWeOijDqivQhFnhR55fWcC6rzGs6ugIbwIypQg5DqvLJka3dtgAJ%2BGH0Wshegwt8fRyQY6pgE4jwS%2BObUORTP3XlTq5w8CPI8nfJjxCEDCjgfuvQaidXwk86qnB3GR0wrlwv9pnaScOzVV%2Fefx%2FReT%2BUPm8JBN2JjDIJioP9BpJ%2FEhWY800Lxmg6ad0mRrAzKngGfLBMoIWKwlhzqpYKt0RVMIIJ6HuY%2BI%2BrJk2duxzg29BIrWRP0ibnK5fQYrl%2BLPIT8WS1owUcHxruRIgUI4LmkGcdBqt6yjsOi8&X-Amz-Signature=6808c6f2866fd8e985d0cbaf1ddb7e2965f1bdd46a0c5cc8c10b928facfbaa3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

