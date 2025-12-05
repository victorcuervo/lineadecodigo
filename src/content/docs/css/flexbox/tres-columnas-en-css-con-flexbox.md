---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZLA332C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5o%2BejNWZ55LdDtAPF%2B2dLpupKWvlt2M7%2BqbxZbkVWdAiBD9J%2BwLdL0YKaTzv%2FThPaoPUrhlpDOzp1JABIdP5lzlyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0Jho48SLnQzCr7%2BBKtwD6B%2Bt1CLdgfi59f7Hws70237x08ZFDABqR%2FviXshmHR%2BkjnsHLQLyWtmwdkQkKP5NvmZnnfbTnsuDIEsrHKOisA8Ya%2FaQ8AVFVic2gfir9Xh5%2F%2BSeNhKEvID16uRg6rMmrYxR9%2BgEBCA%2F8%2FL%2B2ybgCLEW23Uc4W0lz8O2V33JgSnJcHjPMfsIXwuxu8PfZTe54wFHdBsrvveMVtvM4v0KaWWnu9ZPuAzJ9%2BmfEuMPSZGyK0%2BIueyTw5a%2Bf2t9YhxM%2FhkqPpqKNbu7MfYLWgpOnXZMGl0c5dRhcDeY8juAG8EMthXX8yJYAEFQsUC9PHsluDgCqdkmucSuE8KTIseKwfkVpu3XXtPxaKhXxSpVV2FRYdLXZZef8jHMXtABSruQzPMq%2FsVG6zRlqLJRwThlihjMpxx8gjEhhPh3a4jWVPkvD79yhlOorNs5%2Fvwj57ONoVmXw2DqugBG1U9v4bdqs9qQGS9Gr4X8n8NkxtAh8pKlHCibLz9o9xzF6eaVrh2iX6zBVeJ8BCwuyt2W58xiAkLGRmFy31AjSeT0IS4F%2Fbtk5N%2BJFbTa0xg8KHynpEfLXS9FZHeK9cs%2Be4sdwbbF6btAlvuuB7h0JOfzdrEmuPuFbKIioaq3O1vY2ggw94vIyQY6pgFPP1%2Fa8x4kBhfjBB%2Bdu2X0kx0S5wLHk2PdPSjHVl6Zu5wUcBhacbnCKE71c%2FBo%2BsG%2F4tvu%2FUljoIjV91Xr6uImWomra3jRnYVRjgkDFbm0m3H4epLb6TI2wYt7Lu7M2gqFP0Q%2BI14wINK4UuLJRUD7ZN%2Fpt5Ydxtzljtdts6AlTfTcNUy%2Fb1DBd%2BsgG2LRxF%2F3U3mOPhIPX6Om%2B4Do0CYXfPSi4Vgq&X-Amz-Signature=74505eea3066d124ad3c16117c9688cdce9af190cafc169d9b88ece8b8cb814e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZLA332C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5o%2BejNWZ55LdDtAPF%2B2dLpupKWvlt2M7%2BqbxZbkVWdAiBD9J%2BwLdL0YKaTzv%2FThPaoPUrhlpDOzp1JABIdP5lzlyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0Jho48SLnQzCr7%2BBKtwD6B%2Bt1CLdgfi59f7Hws70237x08ZFDABqR%2FviXshmHR%2BkjnsHLQLyWtmwdkQkKP5NvmZnnfbTnsuDIEsrHKOisA8Ya%2FaQ8AVFVic2gfir9Xh5%2F%2BSeNhKEvID16uRg6rMmrYxR9%2BgEBCA%2F8%2FL%2B2ybgCLEW23Uc4W0lz8O2V33JgSnJcHjPMfsIXwuxu8PfZTe54wFHdBsrvveMVtvM4v0KaWWnu9ZPuAzJ9%2BmfEuMPSZGyK0%2BIueyTw5a%2Bf2t9YhxM%2FhkqPpqKNbu7MfYLWgpOnXZMGl0c5dRhcDeY8juAG8EMthXX8yJYAEFQsUC9PHsluDgCqdkmucSuE8KTIseKwfkVpu3XXtPxaKhXxSpVV2FRYdLXZZef8jHMXtABSruQzPMq%2FsVG6zRlqLJRwThlihjMpxx8gjEhhPh3a4jWVPkvD79yhlOorNs5%2Fvwj57ONoVmXw2DqugBG1U9v4bdqs9qQGS9Gr4X8n8NkxtAh8pKlHCibLz9o9xzF6eaVrh2iX6zBVeJ8BCwuyt2W58xiAkLGRmFy31AjSeT0IS4F%2Fbtk5N%2BJFbTa0xg8KHynpEfLXS9FZHeK9cs%2Be4sdwbbF6btAlvuuB7h0JOfzdrEmuPuFbKIioaq3O1vY2ggw94vIyQY6pgFPP1%2Fa8x4kBhfjBB%2Bdu2X0kx0S5wLHk2PdPSjHVl6Zu5wUcBhacbnCKE71c%2FBo%2BsG%2F4tvu%2FUljoIjV91Xr6uImWomra3jRnYVRjgkDFbm0m3H4epLb6TI2wYt7Lu7M2gqFP0Q%2BI14wINK4UuLJRUD7ZN%2Fpt5Ydxtzljtdts6AlTfTcNUy%2Fb1DBd%2BsgG2LRxF%2F3U3mOPhIPX6Om%2B4Do0CYXfPSi4Vgq&X-Amz-Signature=5d2212ceba2441b1b89b75a860a20622ceddbd66dd207330eee0b5660d493d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

