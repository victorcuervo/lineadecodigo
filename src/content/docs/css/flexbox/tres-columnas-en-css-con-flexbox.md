---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTG5LOHZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrmiKiYg%2Bfv077r4hRtIn7Pjw4qLuAE8D4HautmB3pOAiAlAIg%2FV%2F%2BRVlGqpdp0qsKCKby9rBKQClAjc9P0ASLWQir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVnzzep288zszsxrfKtwDgOfjjHP0371s3meA1u46458I9n6SViQwR4CWzbxVhtwYJobQ6ayDbnzaQNGLwMchCpowYBmuTprIsziJiZbdrxBbx%2FPz4VNkFBiziRnfH63GOMsxHAMkkzaVIwWNLLj95gCWBBSGxlFNhX2rXcANwPPmbmhHD7lq767Ro%2F%2FqhyeHdHzMxs62%2FgZ8B7TPTleTEiAd5Hr8i%2Bh%2BeWoAlEfQpHWBnYuNaKhrhD%2BXU%2Bu%2BZ5%2BiMdKe%2BuoH0zbsTwVbw0ie6tGGvxPDLCVDEq5gYYwUSnNETVw5b%2B0GTbmAJIyvN00%2FyUC925nQo7LqeoCdD7%2F1Esq910n4ISks7nU27SarGZYgPUT25XUiAbiYQIUZY6dSzJe8RCz8%2FtagIS6Qdhl8KMAR7UVcFUO%2FjafGKxmfWcDyxtWh2AYOQpNBsGrZJ3cOQOxbAsJg5yaLMcJ%2ByLQOT6CLxSzk1ib5hI5PxzB15C8lXLob5w0NLDVhaQLAF6kil0vc8sOzMo5SMEayYo2tDgixm0i9uNCLMZypbwxHqwxRJ6w6dfcBmJzZLtL8o1a8OzImgKh38PYG9xAfIQiDRZYkc4cw6bcjCP4UaKXKg1StM%2BXSrfvsewuGVQi3dWBpgaP%2BJ1u1MHd6Epcw3sjKyQY6pgEp8D%2Bqa2lzaUvOAb4mcP9JKyB42fw22vOIBLSocSIJ3oBmhqeGuy2fNBiDXc3swsJiiWTj1lOb%2FY0SwBXnN2taGtST3ptywKHc7LDqMEwSpZkRYI6U5ZTmla3gC3bm6rRfAAwDLWQQunjYSvJ7hzP9ZPdjOUdC5JRkQ9XF0kQvzgGVRMhH4b%2FYTTuvT7Q%2BuSX%2F9rOPZdUYO3AV4EPoPlhljFL40oBH&X-Amz-Signature=96f9c8e855df7021837719185c7cbfebb2f72fc0b317842c7765caf584c7311d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTG5LOHZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrmiKiYg%2Bfv077r4hRtIn7Pjw4qLuAE8D4HautmB3pOAiAlAIg%2FV%2F%2BRVlGqpdp0qsKCKby9rBKQClAjc9P0ASLWQir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVnzzep288zszsxrfKtwDgOfjjHP0371s3meA1u46458I9n6SViQwR4CWzbxVhtwYJobQ6ayDbnzaQNGLwMchCpowYBmuTprIsziJiZbdrxBbx%2FPz4VNkFBiziRnfH63GOMsxHAMkkzaVIwWNLLj95gCWBBSGxlFNhX2rXcANwPPmbmhHD7lq767Ro%2F%2FqhyeHdHzMxs62%2FgZ8B7TPTleTEiAd5Hr8i%2Bh%2BeWoAlEfQpHWBnYuNaKhrhD%2BXU%2Bu%2BZ5%2BiMdKe%2BuoH0zbsTwVbw0ie6tGGvxPDLCVDEq5gYYwUSnNETVw5b%2B0GTbmAJIyvN00%2FyUC925nQo7LqeoCdD7%2F1Esq910n4ISks7nU27SarGZYgPUT25XUiAbiYQIUZY6dSzJe8RCz8%2FtagIS6Qdhl8KMAR7UVcFUO%2FjafGKxmfWcDyxtWh2AYOQpNBsGrZJ3cOQOxbAsJg5yaLMcJ%2ByLQOT6CLxSzk1ib5hI5PxzB15C8lXLob5w0NLDVhaQLAF6kil0vc8sOzMo5SMEayYo2tDgixm0i9uNCLMZypbwxHqwxRJ6w6dfcBmJzZLtL8o1a8OzImgKh38PYG9xAfIQiDRZYkc4cw6bcjCP4UaKXKg1StM%2BXSrfvsewuGVQi3dWBpgaP%2BJ1u1MHd6Epcw3sjKyQY6pgEp8D%2Bqa2lzaUvOAb4mcP9JKyB42fw22vOIBLSocSIJ3oBmhqeGuy2fNBiDXc3swsJiiWTj1lOb%2FY0SwBXnN2taGtST3ptywKHc7LDqMEwSpZkRYI6U5ZTmla3gC3bm6rRfAAwDLWQQunjYSvJ7hzP9ZPdjOUdC5JRkQ9XF0kQvzgGVRMhH4b%2FYTTuvT7Q%2BuSX%2F9rOPZdUYO3AV4EPoPlhljFL40oBH&X-Amz-Signature=f1ddd06619705522c9cde45c141dd60ad7a48f32d82798e862148fdfce1a00af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

