---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBA624Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQjNz0qNp%2BOmxiCDKyyQioeTdAliD%2FAzP9GWYtWPGP9AiEAvvb8T79Z2EEC6VcQx%2B1gmSpt8VthEOj%2FpVmITBQCGzcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAW9qEBNRY2na85rOyrcA71NkL%2BCarAqLXdx6kTfNhOpkDdK7fXWFaBez4VLouOQXEJUSFlyea02vbVUOT6gEucRcJA8fyyAlWaMQeDBaF2bLVUw4EObhbGKKOhJE3G2ksLirdhHxmEDXUWYQvA8snhdJEtjQQsTa%2BL5DcEQOCj1EqUvBO4Rci8byPX8zz5vQ6XQNh%2BohDMSZwo7qJ3RiHnDy6BmaCL1s7WtTJH1kZVtNwWly7zou1O7p11uS7u%2BG5W629UeRrW%2F8QnikbEj%2BhGrBSYM%2FgGFdkzEvyx3H85ijmve89wHZh248FaxqDYlfK2%2FDQGcbYGRRVTZkKSjkWkvw9%2F05OCE%2BwtUW1n6%2B8jAe2AqgNZtNn1EK1zqgDGYuYeZuSmjutkDLHMv9ainMGIJJ%2FWrIqWPj3eg6VWYjiAhGYH%2FoiRESSadMxSxU7IasgwppWCOPPBPQ4rhwSocMiBQeK14%2FUXi%2F2E28QLKGjVPuX52GXn%2Fj0wuidbayFXE%2FWfkWJYnTU6DCnUdsW7eTKfJxd2jafgck%2BILoiDhDF%2BWA7o7vZLgTqDSU%2FdfP5lUw9SVVnRz0sbq9q8Hlk3hcHAaClPfWmnkiBOpDLJAgNEqC6S4btWSy89HxupuWPUJAYJpvSgYtBE8%2By0EMKGm0MkGOqUBYZO846X0hkcpSEWEs0PaBbhecyBMkeWx2mwXv9ABzPaCb0iQjrHNeOcepzDI9HAV5pr4FNVfydBtfZh0037ZtPqBFBgVRdA0yUUiN0TWmFaY2rW0RQ1CeE%2B286Os1KASthkvC75Fvf8XPfRszbjtjnTQ%2BhgtHms3XmuKbRIKU5L30Z1bYMf22BsYlqc4VUIVyFswhP3o07kWrmN%2BohvZRnaSvi0b&X-Amz-Signature=eaa2b9251b93048398f085cf46e376c8d45150ef12ad181d7e2a32cf02e3134f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBA624Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQjNz0qNp%2BOmxiCDKyyQioeTdAliD%2FAzP9GWYtWPGP9AiEAvvb8T79Z2EEC6VcQx%2B1gmSpt8VthEOj%2FpVmITBQCGzcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAW9qEBNRY2na85rOyrcA71NkL%2BCarAqLXdx6kTfNhOpkDdK7fXWFaBez4VLouOQXEJUSFlyea02vbVUOT6gEucRcJA8fyyAlWaMQeDBaF2bLVUw4EObhbGKKOhJE3G2ksLirdhHxmEDXUWYQvA8snhdJEtjQQsTa%2BL5DcEQOCj1EqUvBO4Rci8byPX8zz5vQ6XQNh%2BohDMSZwo7qJ3RiHnDy6BmaCL1s7WtTJH1kZVtNwWly7zou1O7p11uS7u%2BG5W629UeRrW%2F8QnikbEj%2BhGrBSYM%2FgGFdkzEvyx3H85ijmve89wHZh248FaxqDYlfK2%2FDQGcbYGRRVTZkKSjkWkvw9%2F05OCE%2BwtUW1n6%2B8jAe2AqgNZtNn1EK1zqgDGYuYeZuSmjutkDLHMv9ainMGIJJ%2FWrIqWPj3eg6VWYjiAhGYH%2FoiRESSadMxSxU7IasgwppWCOPPBPQ4rhwSocMiBQeK14%2FUXi%2F2E28QLKGjVPuX52GXn%2Fj0wuidbayFXE%2FWfkWJYnTU6DCnUdsW7eTKfJxd2jafgck%2BILoiDhDF%2BWA7o7vZLgTqDSU%2FdfP5lUw9SVVnRz0sbq9q8Hlk3hcHAaClPfWmnkiBOpDLJAgNEqC6S4btWSy89HxupuWPUJAYJpvSgYtBE8%2By0EMKGm0MkGOqUBYZO846X0hkcpSEWEs0PaBbhecyBMkeWx2mwXv9ABzPaCb0iQjrHNeOcepzDI9HAV5pr4FNVfydBtfZh0037ZtPqBFBgVRdA0yUUiN0TWmFaY2rW0RQ1CeE%2B286Os1KASthkvC75Fvf8XPfRszbjtjnTQ%2BhgtHms3XmuKbRIKU5L30Z1bYMf22BsYlqc4VUIVyFswhP3o07kWrmN%2BohvZRnaSvi0b&X-Amz-Signature=646b69356ff30a51b12b06fb3b483baa03a9b052d62ff0bfa8f734346afdd480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

