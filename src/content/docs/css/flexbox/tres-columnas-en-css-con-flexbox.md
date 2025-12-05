---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDY5VK2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgOuP0X0i0Qv6frpCD3ERuUU%2BSUYfOhWRwROl4rg4kxAIhAIYrEeXNtuZ2%2FzfL4MWfvZ%2FPZt6zLFp9MBUI8ggzo8rFKv8DCGAQABoMNjM3NDIzMTgzODA1Igx2EbLZw%2FAmfV024e4q3AO2GzH%2B6t9y3aDaMjq8GNeO0WI3Zw%2BfdL6%2F3nBRDSxsp%2BD247HgfYVA0PgHIlPByVR08ar1JLbDbSg1dg7I1qDlKj5I146ygr%2Bk82qxWx9yMGdB7XsybxkMaf5M7%2FRtl8qSKO%2BR2Q9Bhi5dq2oGul40CoTrqGralRLcwhx%2Bf3F%2FIJ3MTxVZYsvHLqU8WnJ8XwadhoJiyK5Tdf0r4vFzeGMJkADKLgb17fqoOZLJLVkXwOy4RJixzAsKqQvyR8Ona2RSufdveexXS%2Bx8hnXUdBI2TyCqCdeZm29YHxbEwJnZAYCHDFOfr7u93271iJJ%2FQFh3yeiNJH28M4hZ%2BUzETOO%2BfYOcI%2Fhmn9fOen5D4%2FzrpClbDM2nRlS%2BPfM%2B1N8bPTzAnGWW7i1jwZfkLN6uFNfyvaXaJthNlIzluBZaShAInaPyR7vDwk1orzuMCT03ahid62pef%2Bz%2BA3U7m%2FzLsYPGZHU24a2n3joi%2B4S7%2Bws6hZbyUy7wumNxn4WQUrAloTAP%2FiqkDTrHxtvzDYqOlmw%2Blk%2BkRR8KnyAfcSzTiq14Ge5tKmYgLv6nWBgYUNPhGYfP1x3sj%2FHSqyDBD%2Fb9haQUibcUdgSD55zUSwP%2BsAUKBKzD%2BcRCFgpCjIQDXzC58MvJBjqkAdE5yY4BswIw630A8OaW0scrYcY6r57fAWwvXnilNP3CGvnzFKYG6VEElXGRxnpfef%2BcJ48aLVVnRLJv6nGcBCF2FVE16eYDgqLE5X8U4yS4Yk5zL0%2B%2BjsZuaw2aMksj6KiHycUWzU5RhqXW1vaq3WWty9jmZ9DOxNAaQ2PKuuBiLdTagtGP%2FBbHgnpgHz%2FaEb%2B8OnzE8bJIqJ6eijUzZFhPoSuz&X-Amz-Signature=937ee357dace13d642999ed6bf49c5ce4ddf12326b64746e6346622b913a7c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDY5VK2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgOuP0X0i0Qv6frpCD3ERuUU%2BSUYfOhWRwROl4rg4kxAIhAIYrEeXNtuZ2%2FzfL4MWfvZ%2FPZt6zLFp9MBUI8ggzo8rFKv8DCGAQABoMNjM3NDIzMTgzODA1Igx2EbLZw%2FAmfV024e4q3AO2GzH%2B6t9y3aDaMjq8GNeO0WI3Zw%2BfdL6%2F3nBRDSxsp%2BD247HgfYVA0PgHIlPByVR08ar1JLbDbSg1dg7I1qDlKj5I146ygr%2Bk82qxWx9yMGdB7XsybxkMaf5M7%2FRtl8qSKO%2BR2Q9Bhi5dq2oGul40CoTrqGralRLcwhx%2Bf3F%2FIJ3MTxVZYsvHLqU8WnJ8XwadhoJiyK5Tdf0r4vFzeGMJkADKLgb17fqoOZLJLVkXwOy4RJixzAsKqQvyR8Ona2RSufdveexXS%2Bx8hnXUdBI2TyCqCdeZm29YHxbEwJnZAYCHDFOfr7u93271iJJ%2FQFh3yeiNJH28M4hZ%2BUzETOO%2BfYOcI%2Fhmn9fOen5D4%2FzrpClbDM2nRlS%2BPfM%2B1N8bPTzAnGWW7i1jwZfkLN6uFNfyvaXaJthNlIzluBZaShAInaPyR7vDwk1orzuMCT03ahid62pef%2Bz%2BA3U7m%2FzLsYPGZHU24a2n3joi%2B4S7%2Bws6hZbyUy7wumNxn4WQUrAloTAP%2FiqkDTrHxtvzDYqOlmw%2Blk%2BkRR8KnyAfcSzTiq14Ge5tKmYgLv6nWBgYUNPhGYfP1x3sj%2FHSqyDBD%2Fb9haQUibcUdgSD55zUSwP%2BsAUKBKzD%2BcRCFgpCjIQDXzC58MvJBjqkAdE5yY4BswIw630A8OaW0scrYcY6r57fAWwvXnilNP3CGvnzFKYG6VEElXGRxnpfef%2BcJ48aLVVnRLJv6nGcBCF2FVE16eYDgqLE5X8U4yS4Yk5zL0%2B%2BjsZuaw2aMksj6KiHycUWzU5RhqXW1vaq3WWty9jmZ9DOxNAaQ2PKuuBiLdTagtGP%2FBbHgnpgHz%2FaEb%2B8OnzE8bJIqJ6eijUzZFhPoSuz&X-Amz-Signature=c7c3e9a841704102daa838063da5238822245964d4ba827173b10eb994231090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

