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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOE57CYB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCICpkuYbGXSZbCRCyhsiKhtSLqsdsr0IhqObDZleMZIdjAiEA4THpn%2FUDULkmy%2FBrPgCykTuipXbB9AmmeN9DtXPgD8Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOqoUJp2SI8ZY56jsSrcA7murkh0WVLugtmc0wCsG1VdGME7rvSxAsJLxP0RvKwXxY2FYt4EI4LqHQfXiHpDpeI%2FesYCDJWk0%2FWs2QJ6H2sk1x8W8TRwDxg0RD8Z59gwQoYvnnQJKGgphgv3fk6XUJhM2Gy6ictzuKg8XtQ7mZ50hGgQdPylBWFh5MVcJ4ysZUecTqoQ3w1Wy6NPFDpHaeiw%2BnWHdtDXpxWjhtkz7Gc38V8hZUhUMdaJyuFzd6pBhsWzLD%2BzM4JkLuha3MWlGAB0KdUpw%2Bh3%2FEtDMibxOZHbiSMvlFwiuBJBwnMvZ9ChmiqyQjKRDX8g7TFz8nn25zTJ774xz%2FkZikZLIfk%2FMsHsZMhZQKiJjk%2BzvXrNtqrrb4HLVGXc3dzsdrpSKXRCiwxycy%2BhNq5FO6YD9%2BqfNkhZVA%2FxWh0oUe1gDKbmGRGWa4uxDq7XpyZgZ1ZzwBo64igsZR6J9JTg0KefuVSoAJ%2BvB6kqFPLXDPLujfUL9ouiDqxOgvXwzD%2FOlr6ISqfVSuh%2BTNrFtDGhEEmKEh9wH3ZWw%2Bu49hSUP%2BBejZfVVyzdaPuYUWBNS1e6uSR%2BpbcY%2Bg6jdiQHF0YZY%2BJ%2BMrm0pylMDRInCfjVSkCPoBVPZbWYPd%2Fy9%2FqlXh5jxD7%2BMNO5v8kGOqUBwA0S0%2FT9CqDf4cLZv8G%2FGwPs%2BO6zKshIUsW3d7woqEJP7bLjrU99Ny04Mp0GOAjPHmmSq%2F6SablCelkKIBbO%2FRu7YCj98g8Dp6DBKEwFJfDqsa0s5znxtVFU0xDpaSgIgkkbY7y9R%2BEtsffSjbAkeq%2FRmD5GQwrum1Pgn9XfWKbFjTIQg5SE6dxEmRKZ4gSMlHB1I9vxAkxQBc7Z25Oo4xhQdUCR&X-Amz-Signature=71dbdcfc3832f402c37a005bedbe9299df821eb5d12d9b009e4e6fe4291f582b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOE57CYB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCICpkuYbGXSZbCRCyhsiKhtSLqsdsr0IhqObDZleMZIdjAiEA4THpn%2FUDULkmy%2FBrPgCykTuipXbB9AmmeN9DtXPgD8Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOqoUJp2SI8ZY56jsSrcA7murkh0WVLugtmc0wCsG1VdGME7rvSxAsJLxP0RvKwXxY2FYt4EI4LqHQfXiHpDpeI%2FesYCDJWk0%2FWs2QJ6H2sk1x8W8TRwDxg0RD8Z59gwQoYvnnQJKGgphgv3fk6XUJhM2Gy6ictzuKg8XtQ7mZ50hGgQdPylBWFh5MVcJ4ysZUecTqoQ3w1Wy6NPFDpHaeiw%2BnWHdtDXpxWjhtkz7Gc38V8hZUhUMdaJyuFzd6pBhsWzLD%2BzM4JkLuha3MWlGAB0KdUpw%2Bh3%2FEtDMibxOZHbiSMvlFwiuBJBwnMvZ9ChmiqyQjKRDX8g7TFz8nn25zTJ774xz%2FkZikZLIfk%2FMsHsZMhZQKiJjk%2BzvXrNtqrrb4HLVGXc3dzsdrpSKXRCiwxycy%2BhNq5FO6YD9%2BqfNkhZVA%2FxWh0oUe1gDKbmGRGWa4uxDq7XpyZgZ1ZzwBo64igsZR6J9JTg0KefuVSoAJ%2BvB6kqFPLXDPLujfUL9ouiDqxOgvXwzD%2FOlr6ISqfVSuh%2BTNrFtDGhEEmKEh9wH3ZWw%2Bu49hSUP%2BBejZfVVyzdaPuYUWBNS1e6uSR%2BpbcY%2Bg6jdiQHF0YZY%2BJ%2BMrm0pylMDRInCfjVSkCPoBVPZbWYPd%2Fy9%2FqlXh5jxD7%2BMNO5v8kGOqUBwA0S0%2FT9CqDf4cLZv8G%2FGwPs%2BO6zKshIUsW3d7woqEJP7bLjrU99Ny04Mp0GOAjPHmmSq%2F6SablCelkKIBbO%2FRu7YCj98g8Dp6DBKEwFJfDqsa0s5znxtVFU0xDpaSgIgkkbY7y9R%2BEtsffSjbAkeq%2FRmD5GQwrum1Pgn9XfWKbFjTIQg5SE6dxEmRKZ4gSMlHB1I9vxAkxQBc7Z25Oo4xhQdUCR&X-Amz-Signature=259aae12c41b501741b72fb3e24d015054192bccc2911124286062c5c82535cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

