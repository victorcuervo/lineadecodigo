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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3EROUQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFoGcT4uWgl3V7ibhU6Vg3Vvb9BEeCAIziq1Av%2B6LMMhAiEAzzL%2BOVRU7sgLL1ABkh07H3FqZ0wYz3BcgXrtPe83m%2F4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHUKES2mteHebdSUFSrcA%2B02zJDFSpZGiLnf4E1mjyJ1dZC0j68XbLLMmeFUXx5E6D6Nqpa%2BcfJMgclPhg7gOLKMoTJ76Tfid3KigX%2BgCsk5azLOzTna00qCouLVcYgXFFOeMj9zfJozUttdRNwbBr7BzMVjc8q5gEmlMwyEvynU42rnyNVuy5I%2Fz9Y6yAB0KwgN6S%2Fq6%2FGifp5sSa6fvvJ4OTYM3LaX43d1dj8EySTE3gnAQKpj6WMYZ%2FSsBhZKjsm7USl6GPXxSeOnXkwFNSGfFAs7awU7h3yJK6hvs1W3hh9AaIdZJHD5%2BiiizLNme448hmZlMeX47MON%2FCFV2BtAvMNldFK%2FyVjDrepxQe9rMbI3NdiyqO3ODiS5gVfHdX0RgBA%2FB5Y9kfpYbrQI0%2FDqNJqeR1KzXusllE1z1fxyeIsqciQkfGDugindji4LAxRR9%2Bjc5GuZnWFYSy0JuF73YF9n4Zy%2BsNukD7NCDl34w3xOBpymxtXjWbma5XAWxsoiTt5fmAY3YrALteoI1IIK%2BTYwqvHYpuwAVTav5KmX3QgH9YuYQfeQ4qduJimd6%2Bbc5YyciOtNdg5f%2BX84WZQ1S625Rw2Qf11y1rSi7A343jeX%2FS2gp3kjrUfwNpdZoEBwYANRy2HIdeZuMNSgxskGOqUByHLjZGCRLBtBhRxpbfkkjivSJsG3g6bV3TEqHLikpcQYbTbnVItXPhHjR8Pnq544quylFZjjXllDMCwtL4r5JaAwip3%2FmykRWLEig4Vr81BcsLRnQqwiV2G8z4e2OoAumP2Ckb8FBzNyOB%2BjNNP%2Bc%2FlHnr3L1ueCnkpjWMFO%2Frxrr8j1vAJwI4vxEVUotLJ5PFc17VwI%2BSZoS%2B735%2FCiVRN7I4uN&X-Amz-Signature=8a32ddf7ad0120e3886c88f55e3a8c6360b32fe379b3be3127f224e6c8da402d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

