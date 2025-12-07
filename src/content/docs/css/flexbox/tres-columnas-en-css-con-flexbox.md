---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKOB7YJP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEApsQ5ObxEJaxPCM7IMxb4JwpNSC97INcigWmc10%2F3OAiAS8O1Xz%2FWhSvEpnDKpakkgMSrzknC2f0jLeATZcht9kiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YHgJe%2F4ZJq%2BcUQFKtwD6rRNw6rPLizg6mPEzz4CXGA7y4M1WwkxgYPRXijLNa8ym%2FdmG0aM%2BV9M0GcgwXGAyqp%2FLFMinXsv6A%2FexZC9ZPyrKRcezfzjAhKu%2FnLzuEmmsh6nIK0p0xZFu4e7GonK1NdgrzlbvhwX3NBN8TEz98VGec0TBGR3eOnadeSIcr4MqhrEiKB40Iidezt5lcowRVY6ywRe3jWcG5Ma8Gyzzg9gfWOG5DvyqLJTq2mhCG%2BChIeAptsW9VdFc%2FuL%2FKPSo3rgH3KBNtXAmzSQaLUtOz6kmu4sxk0UJffW4ivs0U%2BNaKSiBGRYOBGKbKHdpQlJ9Fq7rYMQyj35UbGNtKLxSPyodPKLr0rmjvXY8Ioj1SOFwqHYMBOiaF6Hax%2FLN2lOSlz77x4yJhs4K3OgW3IJ18qSlKmOYluBO0t2MMScxNkDHSeTJC2R5RQUjHxBL%2FXw%2Fe9QlVRwxWPOV%2BwURZDV8lgcA9LI2S28e8LiRkCNH69JW4PDz03XXM5TPCeg2AsW3KtbVYPZc9%2B14ov3Q0ylIF9ccEuNOmNQ7180d%2FB7lQL9x4QWmoiNDfA8QgVobKjrND0GiDeHVeP8iyenAVCPfwlLamQZvs%2Fzfc2ypL2XeFiNT0x3mpO3V9bCP18w0LnWyQY6pgHtxHmt3THJTG9q9gRXQTlpLl9PUGUJDidQQAyqgLrQWwzOiSQhIRvXXg3CgzfLjsbXEz7NjjkXK7VZYW6814YP5I5UJP%2FXHT%2B0%2FMzJtWVg5PePwYbNgKdw%2FpHJUQaIpZyevrd6vyGoRXDnj3Tu3BNxXWIz7QIOQEGwX%2FXM7WTQk6yH5ufiVvHQrShusc%2FY0g5AIzqih0WHxJzeYn5XYorfas5dDi1u&X-Amz-Signature=ba45491c01df57e365db00e6156fbdd3494e797a343dbb7b7eb39458aa78080d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKOB7YJP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEApsQ5ObxEJaxPCM7IMxb4JwpNSC97INcigWmc10%2F3OAiAS8O1Xz%2FWhSvEpnDKpakkgMSrzknC2f0jLeATZcht9kiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YHgJe%2F4ZJq%2BcUQFKtwD6rRNw6rPLizg6mPEzz4CXGA7y4M1WwkxgYPRXijLNa8ym%2FdmG0aM%2BV9M0GcgwXGAyqp%2FLFMinXsv6A%2FexZC9ZPyrKRcezfzjAhKu%2FnLzuEmmsh6nIK0p0xZFu4e7GonK1NdgrzlbvhwX3NBN8TEz98VGec0TBGR3eOnadeSIcr4MqhrEiKB40Iidezt5lcowRVY6ywRe3jWcG5Ma8Gyzzg9gfWOG5DvyqLJTq2mhCG%2BChIeAptsW9VdFc%2FuL%2FKPSo3rgH3KBNtXAmzSQaLUtOz6kmu4sxk0UJffW4ivs0U%2BNaKSiBGRYOBGKbKHdpQlJ9Fq7rYMQyj35UbGNtKLxSPyodPKLr0rmjvXY8Ioj1SOFwqHYMBOiaF6Hax%2FLN2lOSlz77x4yJhs4K3OgW3IJ18qSlKmOYluBO0t2MMScxNkDHSeTJC2R5RQUjHxBL%2FXw%2Fe9QlVRwxWPOV%2BwURZDV8lgcA9LI2S28e8LiRkCNH69JW4PDz03XXM5TPCeg2AsW3KtbVYPZc9%2B14ov3Q0ylIF9ccEuNOmNQ7180d%2FB7lQL9x4QWmoiNDfA8QgVobKjrND0GiDeHVeP8iyenAVCPfwlLamQZvs%2Fzfc2ypL2XeFiNT0x3mpO3V9bCP18w0LnWyQY6pgHtxHmt3THJTG9q9gRXQTlpLl9PUGUJDidQQAyqgLrQWwzOiSQhIRvXXg3CgzfLjsbXEz7NjjkXK7VZYW6814YP5I5UJP%2FXHT%2B0%2FMzJtWVg5PePwYbNgKdw%2FpHJUQaIpZyevrd6vyGoRXDnj3Tu3BNxXWIz7QIOQEGwX%2FXM7WTQk6yH5ufiVvHQrShusc%2FY0g5AIzqih0WHxJzeYn5XYorfas5dDi1u&X-Amz-Signature=cd2366ea3c85e651da3c859515797f25abc40374bf167ef08f6c305f736ba055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

