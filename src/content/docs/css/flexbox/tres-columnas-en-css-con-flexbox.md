---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J2VF4O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlIJ9kotNkuJUexdhIGVvQdGjDNaj%2BlIV9vEg0Q3%2BIqAiAq4HAZCLQIISKWZLDGiKL7esqgyleYLYEDBd2DIY0F8Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZ6x30DhWLNkM2kpOKtwD6sqt1CdHGLvZ%2FLMsUj6JFscqctXnrTdnwcfpI77Ff0E1UzE4FZRA%2FMLstdBwT9GZwmWxJ6ws03avRqPp8tPunmGywatKtAfM79ANFx%2FVuEmsFlX8azapU7eSqe6ZUK%2FhS%2Fl6sthYJpzRMhdI%2FjHhJQgAe1QoQsZEzFOFYgEjR9T0br6gak3xREg0StQQZpkiCD%2BtRt8kpCfyZ%2F%2Bc%2FccKfXjqmlKbOt2lGYt8l16aU%2FQTjCnCjb8y966buRQU%2FrLosc5xlxnkF7LnGRvAxrw6Rj6cg1Nhs70NMxnXLbHc6XCyjeM3BZkbWJ6AevloY8QR4CfNpc4K4uVCZOrLJWQ2wBEbHF6V9PRPq23%2FPWmq4AEJLJZTu9HhXb7n3MbEY%2FWE90ueKA4runLo%2B4ejPWRUWcWtrzsaYmaecPo1dkcpKmr2quqBMrpKG8M8NmkR8oYJE22xD8L6jH6J%2FalwM93In13v6%2Bv%2FMFJ8xHRvMNUAHc2UBWGSEQhqvd3c55p9R%2BrBnD35HjafIkja9trvU3XZaoZW0rZaUIRRSghyjWLb51KQBjkXIS03eT7Y9VB3kdXZTdsj8oPLEzEI8IOwAGkx2ExB8AbXkh4BDDxJpON8ehy050ZkLQDQxlf5EeIwx6bQyQY6pgFkr7PLE2scPpjZWqyrZLGe3PYaQf0Vug%2FfOUQx16pWukM3xdYWCx%2BfFnwUf43DE5sKphk%2B9e4HOfd1u0bK1mG0848C%2FPxX7pIFAdVwM5Q5FJtcw%2BCdoB0ijfJQ4ERoC75i5eFMyE6t8%2BYRDB5Ifwc1IuqMDdqAI3ZhLs7zzqO5cZPt99%2BKqA9eJojziRYfyqxPNYrzfZ2kd0yPFCsNuQsu9r%2FMe8tr&X-Amz-Signature=61afec6f1f67b75072dbcac70dcebd8ff8a6956eb732bb2c9be6a1b6565ba1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674J2VF4O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlIJ9kotNkuJUexdhIGVvQdGjDNaj%2BlIV9vEg0Q3%2BIqAiAq4HAZCLQIISKWZLDGiKL7esqgyleYLYEDBd2DIY0F8Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZ6x30DhWLNkM2kpOKtwD6sqt1CdHGLvZ%2FLMsUj6JFscqctXnrTdnwcfpI77Ff0E1UzE4FZRA%2FMLstdBwT9GZwmWxJ6ws03avRqPp8tPunmGywatKtAfM79ANFx%2FVuEmsFlX8azapU7eSqe6ZUK%2FhS%2Fl6sthYJpzRMhdI%2FjHhJQgAe1QoQsZEzFOFYgEjR9T0br6gak3xREg0StQQZpkiCD%2BtRt8kpCfyZ%2F%2Bc%2FccKfXjqmlKbOt2lGYt8l16aU%2FQTjCnCjb8y966buRQU%2FrLosc5xlxnkF7LnGRvAxrw6Rj6cg1Nhs70NMxnXLbHc6XCyjeM3BZkbWJ6AevloY8QR4CfNpc4K4uVCZOrLJWQ2wBEbHF6V9PRPq23%2FPWmq4AEJLJZTu9HhXb7n3MbEY%2FWE90ueKA4runLo%2B4ejPWRUWcWtrzsaYmaecPo1dkcpKmr2quqBMrpKG8M8NmkR8oYJE22xD8L6jH6J%2FalwM93In13v6%2Bv%2FMFJ8xHRvMNUAHc2UBWGSEQhqvd3c55p9R%2BrBnD35HjafIkja9trvU3XZaoZW0rZaUIRRSghyjWLb51KQBjkXIS03eT7Y9VB3kdXZTdsj8oPLEzEI8IOwAGkx2ExB8AbXkh4BDDxJpON8ehy050ZkLQDQxlf5EeIwx6bQyQY6pgFkr7PLE2scPpjZWqyrZLGe3PYaQf0Vug%2FfOUQx16pWukM3xdYWCx%2BfFnwUf43DE5sKphk%2B9e4HOfd1u0bK1mG0848C%2FPxX7pIFAdVwM5Q5FJtcw%2BCdoB0ijfJQ4ERoC75i5eFMyE6t8%2BYRDB5Ifwc1IuqMDdqAI3ZhLs7zzqO5cZPt99%2BKqA9eJojziRYfyqxPNYrzfZ2kd0yPFCsNuQsu9r%2FMe8tr&X-Amz-Signature=dd961de8d6464e142f5a90709c7aeff8fff44f5d9dfea10c22dbd482b4a78a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

