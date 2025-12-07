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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTNEGHD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDd7ZlTSh5rK2GjZXov4N27tnKLaOYQ0m0vreMguEUVQIhANWLFS%2B93JF4pSQsPa9LH6NB0ExixwvPb2Ri9tP%2F5FvUKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8N%2BrDUTpLWm67%2FIsq3AMsW%2BTPjmohPNiw5P6O0IdZaj46crVUHghbRjgRqhd9VmEJHkkTHnxaMhoShDsHp1%2Fpryc6yA%2Fjt%2FH1066pjX3K8Zrd9J6Y9Su8D9UkZImG1bHoiZ5OTtgw4t3ZNtCSUEt%2B9eMHxBwQu3isCRqMtnDvWTWPTIrjUva%2F176QuoH6A8d7f8kP9fJe9p99SAXrnZ3YNgEKquIT7MBruRG%2BFIRVSqLZnsEGORK8Yzz9xjdiolE80uIEdfvO0z4CAmitkANP9GLpvB1VKeBKnqN3vZIn3TxEZ08KE5hxzmyyeoV%2Fh1S6xunwkwJBN3xXuxk5%2Fhkr7WD3pUvNwKIHBFCCwzyIYdYxEMPGT%2B4GBcuxqRr2%2BtifYcs59kpUskXBvFjWpXJT8Fgsu22spVyp9gYxgmSzU0YyFbd82cTqSwB4BAqKNBCtDdrGtAYXM4ss3QqE8cRM5a44rqUeH4fEECjk0QXZtEYTKl8bZoh2zlk0FEKh81ySPwAFvNAcNH4HfPT3Kpfolz165J7fpz2K7tK%2Bj%2F%2BkhchcKGdfMoryMymW20mP6yEvcNCVfTdGJcJ6gScbVqRApMTaqoCk4DkfpkqzfJVuQdexo%2BPJBSItdbYJPy%2BogOVc0qYsPOKGXVesnzDV%2FdLJBjqkAeUfbF0nfvSdohWexMC2HKPBk4EIfit08%2BdXNgnEPOBLPW1quhlHwLYd172uC4cfUEnSnXDrt6UE7oyR7MesL%2BXQ4C54j0EP5pyB7qSk%2B75f0yUVZJItvYySf8w4o6rfhjunViQx9%2BkZ4f5yX52JqXgEw%2BzpVz1yAZWu0fOqkQrJAcvghE1bCVONKvZFciyI79b3WaRa7fdHXch016v0pBQv7Kcw&X-Amz-Signature=143aac1e2ac0941e4146fd51b914c8e2ff48bee121f3310ea82f55443247628d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

