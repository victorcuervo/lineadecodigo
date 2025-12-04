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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUJPU2O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBrIRM6D8JsK8qEhxhx%2FF6HuawlrZIVWRrOSeSf3NPstAiEA%2F2ViXvmLOGPiELmOPhwr0Q3Cq%2BVHQn98XxW8RSBIaDsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDC86gaIAdq3dse3LxSrcA9NYBkw5C6n2ovzZE4XW5%2Bzx2GOkxoM63CqwmJmxoUylKrvWS0tzUsTO2F6hf0sbdAg6HUlDwK4421IgmJp3uThNzwqetoNp6VfTgIsm826Mw22OKlWzVosiTftbIACfLZmfq9MA0vgQPXRKmOmn3%2FuFOXUHj%2FvglVvvU%2B3SicwsauubKpdc0HXSQ%2BJDXdxplH3eFZb983OU9a7tNJSggjl1a4pBfWwCNQ%2Fbe26XnShanPMey0UX5LNIu3QCi0QHldCd9IUZq2lk6SETjjiVz1rEAZAD8QVP%2B48D9wmI2k8T0%2B8Lhul5z4WnC%2BeGJ8%2BxXBBNFPc%2BhJtXQwTpvtwmVqaffpRnpS%2FyAddqXWWEUhBFKP6sVLvqBI2B%2B2smcejVQSFztiMIOCVx5o6gCtnRMItVjC8ygovQKvOrYgTQIE383fmmHnlahm0nSF6CrKzMmlmEFsmEpAOqmCXhSC3REdsZiM%2FwYCLzbGDEnalSdl8OXUtgjY%2BbAF9%2B0NPkPIpqUMUiqKkvH3m82L7z%2BKAPDuEHA4fmxjlNnflDq6ggdrndQUnmd2i45PGlmuX55ZwKb7wlGaDIbf9dR6aTTV9WL3UQlMVADHl8qNlSCfQ81aJLzp02l0gsuxB1SVE1MPfUw8kGOqUBMG90E%2Bxm%2BOON%2BkL1Jog8XhaXhAYZMUKbE5IEYDjEz7QFBWM6XHQWvBwU69AwSUu8%2FZ5AQXlG%2FE4NQBV%2FWbFZ2ccDSbNMegldAg9XKVK4%2B4w322Mq0VfC7KsYm4xq%2BWq%2B5BY1xz0FW3jGdMBBGa4Skhvg6ISBM9POOeDve1I2uzTBHO2PjE%2B7CetphCu80DHSzKrbnbB4QQC7hd59vqoJCq7eVMxI&X-Amz-Signature=f851481dd657ee83ea7c67e4a6eacd0129c8119d139b96333974fcb5658de192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

