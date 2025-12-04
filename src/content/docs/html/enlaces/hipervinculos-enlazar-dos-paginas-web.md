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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VRUAAB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Yov%2FeY%2BHHEAPkrwHONQlxso7ePalQWGGN480JfDGuwIhAIO3POEJ0BZknExW80HCbPPBbXQsdLlkUPnQp%2FcOjzaZKv8DCEkQABoMNjM3NDIzMTgzODA1IgzqrLYV27mrPyy5cLcq3AMtipKQm432LLxNHSBZ362yHgHwDakga%2Bu3H234jFtGxplUU%2B47qPIj7yZ1v7qamlD6UfvuJqYUgc08odXFkmqQZkMNoS7%2FrWLThDuuS1CRJUtNbFDok8AxSWEfoP38eSkFDyQGdfTzplnYcMr%2FktO%2BSMALuCXHKTpDKxGrU0GyMvjrFLqc0QVRokBi5zZu2EAfyeYln%2Bim0Dg7BHIl%2FwqMQnp7HiWjpKAwCNsQIkVjAxorjlue%2FTpGiuM4b9wTI58MRm0yuKOYIQICIg6IxCna2Y8X7jXz0uLmCl4r4ZmTji0IyJrJqdtdh4LHllr4zpuKMR%2FJ4BqnaGafLbxxGVywToGP%2Bwd2SP0qwXxD4IuWsYmQRgMETB13KABAKwL9xZuQf6rkaGUEWms7jFsXHV9Y1%2BW4N%2Ff1HK1yHy8R1H2RARTiaadzaegOkj1WslrpgVvOrs2A6aTQjyUL2yp6TobDttQ2wf53xG0t9i6vkEkGGvFkOHCre%2FPAAJtN0HYIMy7QC6IndhQtwZdrrSNjesSxZvTTBMQ%2FkQJ0kdu0NTIpaWYUNKh6Fjgohc2jMCdgjiAD2ahmHp3p9V8SIeFvKHNjA%2BQsqaaALBpaPc%2B65A8dRufpBEebIxVXg2OJbTDk3MbJBjqkAUhaTVVsq1xlzLp1TwYKdu0qEhXGmNMPqy9DrOzkqHF7q%2BkBOELgXLBF%2BcYkIFtQZEPiwGL7Cq%2BM%2F3%2FPoatr3fOyIyvR2CTClkmqO4X3df2qifd0AMACSBwrnKi7uZ2PHJcoel1wGNNn6ilcr2ufT9PQGI6lWn6BHgwr4xirl6ZbAwzT1cGo2UIrElM3E8eIhsH%2FinPGpZFeNz8hBNjD%2BRSVvA66&X-Amz-Signature=c1de5aa98628bf233038444a92c160b0b4f2ff576249947f774ca1607311cb42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

