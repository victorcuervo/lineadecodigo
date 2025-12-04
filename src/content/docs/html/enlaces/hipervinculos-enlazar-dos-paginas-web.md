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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSY6SNQA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDeiPv3g0qevdN6kghLu08FCtOBrx5EMDSTzb2pBiQzeAiEA%2FZk4jto0sr4w9BJDtXAzKTavTMlIA5Kw3SMaEBgsXNQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAhko1iC7C2XqBRx4yrcA1fJLchR9KSM8lpB0AmJwvhN%2BMqWaBxNQkeD8gUIahyO68Nef0MvV%2FqZdGvJzM%2F9szVp0fU76UighbZ6cEHj2zirMluQw6JprA6Fii7zQuJTtBh5y0JOC6LLfGxwRkByXi6cUn2GtjWo1WK5bjXq3S69NYfrSBDF3Vg5X%2B57JyH20df9plumDTx9xI552MV7ng33H49gieAPLHBcUtElcYZYjog4daY1W0d7vThEfuhyH45GMEOksro%2FiiCc7X2ZqjDaUjzjkcCx030wJ1fSoBmYYA%2B4Le84cgRbWQyRS5HqNuXviIKixLH6buMc1S%2FyAwUA0OILow6VmReBY%2FvdG9Ra0aJbsvaWBxlcX1o0YyRrOI7jq9f4%2BNFlpuK5ijJX6QZlWJuj3E2u9fCxHgWlnEAF3ACfqb%2B38yAPB%2FiYGIqpg%2FEGAWM5BfWorp2ltVUopd2dp1riRJVQbZ5cOtSSXqV%2B4PRJsD954%2BYPZ8w9VDw3%2Blk0gv%2B5cjJLo4TcNFQObjo0gBbsQSRngpOBLKDfVffZNwqcenYh33uLa3380SNo2%2FRS0%2BPoJUNET56Z3kw865bO5JavPOAyyJQanp4wn9xWViQ9M0yA9fuQ0AFOG69SDwq%2BPiden92nFr35MIjpxMkGOqUBnPlIndX%2B31p%2FHElzUHmKri72qlcpf%2FDcac%2FQKPU6vODL9uf3lfYxyC6HZR4D96lL%2Byb%2BpKB1Q1UOo1S%2Fjf%2FcpWzfv3TGoLVvyUoalkaVCJ5TfQS4BrCMpczvahZux%2F3FS2iejPUNWQZtWbI19gfcrfG2FUEIJDtjx05AZAJo49AlOnzwL24cqQMQ3vYi9WhZKFKFt0GW6yR1Bqb4EXpqigO9jAMi&X-Amz-Signature=2515772eb84cf59f1f0cb0cbff2593a3fafdccf15a6b4bea41ae0c289bd1e433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

