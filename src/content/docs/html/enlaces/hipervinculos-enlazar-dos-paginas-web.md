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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWYCBYR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBWuQYeqWfA5yjcDIsdXs8hP%2Br0jG9RVqSqZ5KU2c%2FWPAiA9uEV81qeDSEcolje%2Boz1SVUEMfwO9aO0oevVLYI8anCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCovSyYg%2BZ02dvgMkKtwDw6MwK%2FaOafd%2B6ribJ4HD8veoQtk1J1BQD1W1hMzJQL7iIcQf6dgiP2C1FMmAc3u%2BFNhYoWyakQvkyVXHV5iopBgi4cwfgObVKvHcPGAyCnmC2SrkLblYW%2FvLEcA1d0bQeuzjwsAmDnPSqJb1amKH8%2FEDMC%2BGCuWnjHgX6noYTlAG59uHphbRG66lV4UeOBIPLrqeqqoQDmRBV7davAx6Yeuf4uw%2FcUvl6ogfKROCtnOU75JEz8pmpglTmkrcrcbdmuoo5hKWDZXOc6ZNTCubnCaGOP%2Fj4HZlMDJimjTFeUvEvU9DR8XKb5gvhH%2Bi4q5B2bRR2ws0Y9drrLu3CyjiMtrzG6Spv9dXGzhw9ikehrupSMFnW47rDB61617tOyMJ7%2Fd7nswn68IjZJb6wQjtdzulgqSbkGKMb09EBeZvfwyctUTf7tay3Sje3WN2mE93mzbVDCyOxAlwnjP8Jyr7sF41PnyYJKqIHKdPAHKpvQdcvZ%2B1xz87KE3BPZcuVqfOVU0SuQ0Vnt6YsFz%2FdeS4X4vtfR6%2Bx6b9TjleYFq3KHuAwdElsRXWvk%2B5wA3%2BFX4Bk57xkbyNYt5ZKF8n38t1ZnvdbVCJgeDo7x17XGPQSyMdS79ZAvEms%2B883xAw9b7GyQY6pgF87i8MfWYYRt4BZ4%2BIQY8aMcaLxmJqjcXA2G7MxN70c%2FVouMfGEVDDfVB%2FFHYzxGSMnjv%2BcwP%2F7cMxiRDBTeN3uc81V4Pe4qMt93dauvxw4fSkV9OJTHpEB3AMKsAsFUeo3JSk%2BPIxHeDmanK%2BPuvJQQRjNi%2BQCd884owogGRFF6X272WRUDryU5fGfMAGRGWJlSjmTaNtLzWWOrmt%2BSlNCektsNXf&X-Amz-Signature=37f875763ba99a4ecbf3e0b7c917b20b13223baf05b45ec90393e42189c50417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

