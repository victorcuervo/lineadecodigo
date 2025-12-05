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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNTSBC7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzOxzKw%2Bwd9H72HIf%2BMbFRDZa5BbOfeDjB5%2FxCWQZc8AIhAPBXu%2Fgmz4eFfCl5WQy1elmP7XYuV5A6MTF5m2H94ZhrKv8DCGAQABoMNjM3NDIzMTgzODA1IgzfCfnWALFEGG62nswq3AM7zbA29n9s9mu3RzHtB%2FIgpnKfR6FORUueWLOPpKZRFjLQy1J4%2FKD0hSI3NfE1oWnePh%2Fi6ZtjHweA3KWT2nFx%2FJSu5ielU%2FPNPrltV6Yk5FT45std0SGDodYBhrrXQAKKpMNnfE6X3UGPOb89cBT%2Bi2l7mXu3iZCp7O5XQVmKNrhtgnRcN99LmHRVT59%2Fe41Sq4nsS09DgI5qkRcFIwD0T0uGb9x1q5Z9rRw9ODElVQefKyzYiqa3tcNsBCsuQnb0lzFdALIqNZBRc%2BQSeey01rPy7rZ8aCTn7bgLIyARBBbyxjQnHEm%2F8yCwQHfzBZAt1SbYv67WJga65TfBAzEWTljLlkOpK%2FRCHhrf6ViDeZxGuDUM9Ou6%2FNQOsIhDvjmXB%2FruxQ4q%2Bio9DUExFoTfjTrAp46SCUX3Xa8y4iB3PEbFs1NRf9aD76nNn8GyX5iIBPG%2FtYxDkI%2FCrBX2fPe3IChvCTm1w4vOb2rPVKL9ARofACsJEjOyBD4VaaS07vmkHiMJ8FWAnLhaD%2BZdotFd1B1Q7jueKYl03sRhu7%2BYvC%2F6GeVP2hOmx4KgGgmpQZGpyf3Sdf7oZ8JymLUMUY6jMxuu2LU99AcKaIz9ZwxnFA6M3WBU0O3NAercijDd68vJBjqkAZlfgkxocXq%2FGCUFtchUW2FGb%2BjyADm%2Bm99%2Bnf%2BzUxIJf%2B%2B5I%2FK6pdMitzZnjqD2Zjr%2BimSBsP7z8JcCw4Iv%2BHCx%2BVcFy70aiZlYaEYlORcz5B3lN21Kj2hlAp4%2FXndpygxAb%2F30VwOhPKw7ERmcMPNSXEYFFhKWtPlNp47FrOVkH8jHGbtRYB%2BwQqiDM17Fr4hgbNhmE83mXNXJFX1AfDtJOL%2B0&X-Amz-Signature=5ba2d23e3cd56a4999e95af348a429b96fbb88b9580ddaaa098d071717dda3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

