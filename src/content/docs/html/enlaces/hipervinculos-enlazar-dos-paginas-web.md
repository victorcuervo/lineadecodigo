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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCE6YEWI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD%2BawNgQRXFUf%2FuoHnsEmZNNQ%2B%2FWdAU30BE3%2B2seGSBAAIgEH7BU%2BzWr%2FlxlR3lCGUvPbdy8hy0CHgRuHchsOjV7Dkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNNpynJWaNN1uM8rWCrcA580fgbwonHNm0Lw5RnYSBuZkh7lNHvsa%2B%2FIcuDlrvFmgxFxZNCNwDt4XYXIojH0TqaSV6qm15MGUgB%2FP%2FIH0NDoydGwaty8WCRGR5ltnIGP4YrNz5stGSAUMgXl3ONz1LTaXQ2XX0DhRqTgjgOSA%2FcpGljvsX6fS01pjNWRnWxqB0bYzdMuaFKQECVQAEPyhOSKBfJ7%2BMxq%2BEV98gn8GhH6ofsUiVFr3sImwTQnYPxO1axcJcVSipAk8QZkVm1%2BiLiPy7nJ14xh28tu0AHnB%2BFxtnikqmouPp0L809lIJzlKGX1xQh0wSyGUNpSWuQLNkGITVICt1oMUpFGiC1Z3%2BIfjnoPBO2lrzagv%2BE6uBxvPjUAulWxOkGTt0A4NkxTS0bsp1LX%2BhTzQSRVRXNvesoiD7n%2F5WtGtxDlo4x9OAY%2FsMoSzIx%2B5z9O9GSep84XPMUeZhaoCas4BlUuO7KohprMB%2FfFTq%2F%2BLvJsaviVdW%2BkoXE6selAbHl%2F%2FhpWoDmGYGj9NBrOWyfvEZp62SAmOj%2BM7jW%2FtYGOzhi3dGcljsZVDi2gQtVnYzO%2BawaSe%2Bst5TFA%2F%2Bkzu9j%2FKOH6aJzTkdlYAXXKBbczxx4pNx3GDa7EIpMiFNRz0LAetFLhML2%2BxskGOqUB6bxZBfHmb2UEYRCAyKJku7NwNwNTWzKPbkVxh5kCSGYGr0xNCJMRvH9gy85gnJlpEkbTxVgDYRAUsDYqzCih2EVnRBx6%2BYn%2BaTHOIw7A%2Fk9y4sCxZZ7kcAb02JFY4P%2FkC%2FAJDyQSFPoFMbnGTWiwDOvCiIqxrNU9BIWLvqiDKjhdBX8%2F5hWvdgUExlOsnXcwmfoJPGpHUTpWU4Z01f4Md58qJcPT&X-Amz-Signature=41e5cfff5726f6e15a431cb737b4894fdd6051e2ad23aa60d2fb5645c2d59685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

