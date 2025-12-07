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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HUFXN42%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5wpn0g%2BX9h1KDuTVMGbujP5iYKNW0wK0E1LnmCD8FTgIgOIOuIXTw6cpfmwBncNUHBsxnNwojAfvpwC6r2Il53%2FIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHirhUl5%2F2hBSE%2B17CrcA1NRA6DGwY%2F1IOlCtwRs3yDWfmIS9Oznci%2BZAwuKG8OxNbPnmZkikcMZxpqNtMoKX%2B4a7bcwpNZTpz3J79nnPBXdWAF2xMhdRZpZGrstp5H2mJJmeo96xALa5Icijp21emYaIrYy1t3HBFBJlC8KP%2F6bU9rHsPVfe4SbVi9Pq%2FRcFoJXIyAo6SPtX4N5rm%2B86mQNvLhkYqccvt6eOJfdpWEIKWs5avbTZTNdXSobEnLm5vkukJkNDm7dMslM%2B2ouhixwVfe37k0AOBksemfQgh73AT9cDfLjitcklkAY%2FR31jKao2ArmMs5P6dVWj54e3fPwSdVd7v%2F9mq9UyNCzCSicH5vaXt0XFjBi9vYYfHIZlTSUkcFmpZoh84g1rhnGu8up1CVa9ou5y0zWRD8hnf3KgmpIc8pJLgl3IcfAKlqtP75LAHCSc6ir5Lm0NM7IB0tJ52FDU%2BVXtH%2BD6Co9Ve%2B9AHrbawT1ZqECvAnlo7%2FMQwsgf95CmhIZdoH2Rbk3zUg%2FvzeIgA6IHThrN9TivKZw9e78Njc6nunoY8XYZn5okqic4Edv9Q7LD0wzIAxN3QyikUrII2c8oB2Nk10ZdX6iifiM6a5cSNZJRP%2BY4yEWRAjbxBwmVx%2Bn0XwTMI%2B41skGOqUBfmRMk51MiHKQzcrP0jH8xrmWXX%2Bx9MFalPLDJGk%2BxHppXxMGFHahEXKP2y666GUgTF%2BheGTK8F7leQK8bfxPeKEgYkBZsCIDkuCEzDxzNfmSp4%2F6jqBuZjWCF4JMKigw90wEGkT5nQ4KyhbadEhRK2hecSPbndYTzDgApSySA2pOfx00c2P20FlSxx5fx7bVNYpbSwzN5zpxYpGz33id6Bi0Lsu0&X-Amz-Signature=b3ee8dbe9327092c4bf91e27f1d93883c2214a0f4d825ed07a123376594474d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

