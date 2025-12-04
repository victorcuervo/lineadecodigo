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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIILXFNO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDlFg1N0inx0riRt2yL8CmpA9bEF1uaEW6Tr7MnJayFNQIgJ3Nb5GO5DUwhHUFUe%2BqFYAFe6i9QV5DH6Lm9cRDylwQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOdR3LEkW1fWU6kwJyrcA7YuvpgKJFTvTa9CbX%2BkwDyi7U6ZNVe4QD8CvNYfzDXJqatMjbNH6Rc0y2vyxHAtaKr5a%2FmjycXV5IzZUJCuz9RU%2BtYa%2FsnK7d4hoaRXzAes9iOemgvop4QrJjo%2BFKkUcAjCLHEvnqtXadQAMwKgTmUAHzdrWYuLQlDSP5jCh9aI7zWLxdsXCJX20y1NLn8uhzVSOUi9qMjhS7QcD3pluejUiN0rtW1964rfprzbdTai%2BfV43ibnNOBYxZUp1J%2FvU%2Fr%2BmB83%2F4RrvQoEP%2FlDMtS1qmVleRk06%2FNwM5%2FTSxP%2BsywKwAGuJzebGH0QuaIScj3qaTNgLLf2Lv2QTO4FBjPAi4WmO9x%2Bc6fchd4Zp5I46DZFibVLgmnyBijX2OMVauR12WGDN0NtD2LcEBX8hXXIR4BvGyRax8HBSqHu8Ryq%2B3YPFs2qbO3YRFyurHY2NfNb4VYVi7aWlvJVMTtX6qfiTctK7Nezod%2B99NR9qZDkwF4R29XuVh7kUrSzVWK%2F1b2p4QKdjXkYu%2FLatc9l1r1d%2BV1HA%2Fsngg5s8Ct8GqxsyueNFPLcCkmrhwx5L2D1SG0ZdIeb1N0nQnoLhSOjh%2Fwc8j6XP6uTK1eggGm%2BeeWplVo%2F8S5beKaG%2FwMNMPnTw8kGOqUB54gsBmu3kO%2Fudp5M11CX785yh1yG1zmkfdPxZN6QhjJlnknBW9AbtwfEG%2Fbi9i2ocGjjbOxugJgi%2FcrECHqqOiZnN%2BV3PqxlVADuAtU28WbOu7RV9qJtxMnK1gcBfGEmX%2FUfFENeOdfaa%2F6ZL%2FHMLrHN7hXU2EOOPGFDO%2BCf3w2mlBZHMnlj%2Bq%2BYFMP8KvCghq99gtGR8QHG8pTtUXSGw%2BX1bwmX&X-Amz-Signature=55f30895cb36852d25f7ab08a6ca0cdb136b083cad14e79cc43234fc5d1ec68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

