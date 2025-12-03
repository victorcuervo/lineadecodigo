---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEBCL3K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCM%2BzXZqYdcWv8zYcItQldQxIWkQ6%2BauBFKuqBB5uwifQIhAJd%2BK2CjXXGbz4OqAwtpbJnNGxHzP6adnO4UmwEzXM%2B1Kv8DCCkQABoMNjM3NDIzMTgzODA1IgySe1YmO1jPqh4X0FQq3AM1ENThjAi7DxG08iLw%2FxjL3x6fvXC5VPtK4vAg4Sx2dk1IRM1sP6f2x5c0ptBUaYq8eHKIcO22BkpVAyAU%2BdK405G28n3MyuvV1PSdwea%2FGTQvwkGBV0iEwe7PaMC3MphySJlwTrwLHLiMyKAxRFAtac7G8Wy2tS2KYBITKOYUhSvZbP7GPEn9mPUKB3qTGeVAJqMzoSMYXwwyklDVmMnIo6wAtZ9Bhx5lSN7C%2BnP9Zae96zNZK35CIxQI%2FiBeBdZJQqf3yIV6QgsRLGFRYHkcS%2Fwwv8HVSRIln8rC4Xi2%2BaL9ipH0CSEmCcaREh%2BDqmTZUO4mNeGz43yz1zsd37n8guwsIouLz42yaVWYBb7oRJz5P08rJBTIIF7wqOrn6TOxqO24IiW3rVffy8nxi8ROxyqKNeUIQQMqSWHPTWwzKUzZnvgyefNkYn1kTk5r4fa1Lcb%2FdgYuDf6I7%2F%2BF2f3MkclMZV2Igm0JHokFlmQlGJdWdVuzqT1XtSI0ztT%2BMuucXQGsxpnRLF0oqnZu7eq7ToojrlEwlMONlze9LuhjdPk%2BcW6f67N%2Fi9%2Fn6wu5b0Vs2cAFhgCIsHkS3VcNIz8vcMDfRVrCw6UQR74C3aeNHrJnB%2BF%2FgKkuqtU7CjDH1L%2FJBjqkAbtwCEoLcJf3WPBYjWuExXFyz3yUDQsvgIaTr7h6DdYH9Ab6A5%2BDMfvRxgjgw%2F4CO9t56%2BibGKNcKTtfz9K62xLbcM665%2F0Pjm9wPnUDoNRPLoeP9qG6yW0bLYURSLh3eObqgIAENV4bk1TEL3lvps2iVMJgZHsv6vHIEqEv3Ry0cCwS0hkOY6l%2BNMw%2FYvmmhoDFbXkYfrlcgc4ipTZ%2FPTWJQqfH&X-Amz-Signature=7edabf3b997065e81852257491b8b9710f8e864ec85ae16888c803674e1258e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEBCL3K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCM%2BzXZqYdcWv8zYcItQldQxIWkQ6%2BauBFKuqBB5uwifQIhAJd%2BK2CjXXGbz4OqAwtpbJnNGxHzP6adnO4UmwEzXM%2B1Kv8DCCkQABoMNjM3NDIzMTgzODA1IgySe1YmO1jPqh4X0FQq3AM1ENThjAi7DxG08iLw%2FxjL3x6fvXC5VPtK4vAg4Sx2dk1IRM1sP6f2x5c0ptBUaYq8eHKIcO22BkpVAyAU%2BdK405G28n3MyuvV1PSdwea%2FGTQvwkGBV0iEwe7PaMC3MphySJlwTrwLHLiMyKAxRFAtac7G8Wy2tS2KYBITKOYUhSvZbP7GPEn9mPUKB3qTGeVAJqMzoSMYXwwyklDVmMnIo6wAtZ9Bhx5lSN7C%2BnP9Zae96zNZK35CIxQI%2FiBeBdZJQqf3yIV6QgsRLGFRYHkcS%2Fwwv8HVSRIln8rC4Xi2%2BaL9ipH0CSEmCcaREh%2BDqmTZUO4mNeGz43yz1zsd37n8guwsIouLz42yaVWYBb7oRJz5P08rJBTIIF7wqOrn6TOxqO24IiW3rVffy8nxi8ROxyqKNeUIQQMqSWHPTWwzKUzZnvgyefNkYn1kTk5r4fa1Lcb%2FdgYuDf6I7%2F%2BF2f3MkclMZV2Igm0JHokFlmQlGJdWdVuzqT1XtSI0ztT%2BMuucXQGsxpnRLF0oqnZu7eq7ToojrlEwlMONlze9LuhjdPk%2BcW6f67N%2Fi9%2Fn6wu5b0Vs2cAFhgCIsHkS3VcNIz8vcMDfRVrCw6UQR74C3aeNHrJnB%2BF%2FgKkuqtU7CjDH1L%2FJBjqkAbtwCEoLcJf3WPBYjWuExXFyz3yUDQsvgIaTr7h6DdYH9Ab6A5%2BDMfvRxgjgw%2F4CO9t56%2BibGKNcKTtfz9K62xLbcM665%2F0Pjm9wPnUDoNRPLoeP9qG6yW0bLYURSLh3eObqgIAENV4bk1TEL3lvps2iVMJgZHsv6vHIEqEv3Ry0cCwS0hkOY6l%2BNMw%2FYvmmhoDFbXkYfrlcgc4ipTZ%2FPTWJQqfH&X-Amz-Signature=94ee5108a7a18262eab972b2a6f492c0dc5d01a95ff0f96bf884f5322d7ee082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

