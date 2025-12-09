---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3SWV2T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T205801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sztrFDmcNNc7ec8s1arwxAFLQ%2B1Jb7EnisYdVneG8gIhAMKZVtnO7YsYZu%2BU99jEKLwPfaXGODhaSUBqoe8xRjm%2BKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdw9xMeqviXn9%2Fodsq3APfvZKdZ4AZV1FkUzm8CJfcaeo9agJX74Kdt62Xa66gxfqqrsYARkJbuvU917JBqni5Y3oaPyy1TazArIOWiabulaTEqg1uyjSYf3V5SF1YcreAtAg8XegEqgOBDjWAio2B7t4%2Ftki81TmElAc%2F6R3eNHfNLo3QFZXTU1jgzenZ6vyQ88vaJej2Elmq4pBUUTpqyEwMz7iZU4izIZAWDQTKAjGT72MQxZZtFMWx1MqiFl6%2FT4ut%2BrVmj0Nlc8CX1J0Cq4%2B7tsbE7LInGCPXJMetWN4QpAeUNQUiLmZxZM3fjub5axVSPTDcVvsFpKFFt1tZOW9G4W1couDtQ7%2B0R0Ez00F3sz7785uw0TghRDq7UpZBUMhC0p77MEkjhHUkm0Iu7DDQ6KA8TTFal%2FTLTikyHC0WprayKdIjM7RQuqYB%2F9A4TlfTeQhPBEkqFCk36ZsKk5GOAFOyrDvLxUTEOPn7qK0lLt6dOEr83dOyC%2BvcsKuuFfb4tB9pcgePOBfnOpOwipjL9af6RzvClV2GbMpD2LqM1eYHC8nNGvbzUvW2BiCx46HVADyKM9ivxJIz8keOVYX%2BBkg1H5FqhAO2SGkE7eRn34b2ybUJkYLOubdq9dHM3LYFVq4oc7CjxjCs%2FuHJBjqkAd0ElZnYYBvnhVx3xp6NtgBBFv9tpqWdgaB2gcyFcFAKyelKrZbpkFP3wE%2Fi49I5DoSqvFqZaCm7IHuu2H3Wst7jv0Y4QOBE1K%2BPK3K3sf5i%2F5lcxU6yDgDLMU80WPUGh%2FXY%2B8zJi4wJ5zPDT3SX8Uqg9yvqG%2BO%2FeXlZ4nNW7JTstl9gxRh26ungWTtevmPsZqgvs3p3H5xxWLpSZrx9Svzck8JU&X-Amz-Signature=eca5a222a041f53acbbe562b5e492ea4ae49adde3bbba5eae893d8e6c5d4ab9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

