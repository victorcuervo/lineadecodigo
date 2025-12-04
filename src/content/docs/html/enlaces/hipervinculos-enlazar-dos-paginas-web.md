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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTWJNH5L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDiBd95VHREP2c6At29852N23YkgangtByQPBRJBCQ7BwIgaQb9Lky1Jw4DHvMci0Bsg0ZssA%2BK8KhkKVZ5ub2KWEgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDF5blNg0k4ySX4nfZSrcAw2uLwooHE9UQnTd5waZ802DLzYDcy%2BOXikVb1i3rQkDpeTSXvCIER8fkzMBYTubVV5lpfngoX9JU7FM0Zltufk1QAxNpRVpdU4noUZKdIXogHXqoScUMf7ZiPfw%2Fyh%2B6taNhdb5YlfS2WkuUoP%2FMjXBGn6p1DEd4FCLnIyiN%2FzYfXBlc%2FtlpJPeFn9TJK2V9Nu%2B0%2BTyKh%2BEf4dYobdwcMdtHf9OkAb3oz30hs6SSeOSLXh%2FgpZNjtgZ%2BxC3IoEz%2BTx453OfQ2HSM05iSSo7G4nj2eiGU5%2Fhtp%2Bz3cAW4F2rR4C4w6EblvuTQPZHCW%2FtT3RpS%2BEwhaz4OQ4Y8QFFSm%2Fu%2BPssZ13FiAPTtJyG6HCzIZtAczS3zHqvzCi1sxznM0lHhQtnurAW5XhozErfLLccWs2EhHngeJpyx4Lj5EJv7RBkfSFXiwcS6NolsgOWvj0wmJWeAOvaIINJSBJu548rnq32m4EHxjexM9LCZz1eGYhM94MP4SIi4uVtDrC%2Fx3AYRiPfuZaOqCP6rKgnrsT%2BWu0WHxpUE6EgmVgbtGXizBHtRJLcnDCF02I1FZ2n7fNYFitIKRFoUCFajn380IO91llE2RU9tKBTxHADNqN%2BQgvknYoU%2FP9XQlqdMJj1w8kGOqUBNOwO8tb7pvlgR%2BL1ypwmNUE4BVKXNax32VaAKrP3gSPoktUi5hDT8%2FfV1DywfWpI20TumYEWYx4m0Yus%2FzjNiPsnF1LLmxRMeMezOD9nu1MIdHTgbR6AlfRK5IQ84L1iR3hFkQxSUoCLyjbivOy%2BcKQklPBcGO7bdnLvyQWtwsqOTw3mnMuSciYn6HIh2MLV2P04CQ4Hbb8ZdM0Sq6osDd4lRWyy&X-Amz-Signature=9c77f346de903ac417467718c4545f646116ca3ea6f185b9f8ce67c87fcce1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

