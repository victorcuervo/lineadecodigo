---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZ7YSEB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0HkohXfPce9cRrkp56wiqVOZGCrwfTnlUuk4qxE7w4AiEA5qpe5TUbw2HCnZ0RYyfYdyuR2QCR8nnJDbByN5D%2FqywqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmPEhPDHfNZ4tBCJyrcA6tbc8R8gxUiiH9azvzXxz95PoYEoobaPVRZqF2hDeyCtCN%2FJPR7Uz%2BukbgfHW2%2FPLD7sDcmFDvv%2BAi4LRFS6qOVn3E3kE%2BnsvAh4E3ntNq316p15zdmoMSA5jEwDh%2Bm9%2FewNpswbNL6NPpZuJCPdr2c%2B9W0J0bk3%2FXLobEb32hKIip%2FJJ1naYMtYJ0007NI7R%2FHMWkPem2KDES71NfOZTH3%2FrmGnyEZGed59j4M3YFsCciTDYEWq%2BMUoe3lBgS10Q%2FF1Ra1tAVc490dgQ2xNZ2HecK4GZqhy1mLzsoDKq6Vq%2FxCah2iJhW5h%2BVOZFXRhJhvosCf1loIWFjne1mrbCBC5EKmql3%2BZgQTlFUEwxkVjh3jqhA2Gwpe6vNlHnt12ni7ioNHTrDxOqCMPJ1CEh5ooBHUEWZrFq2q4yfDKGCnttcmFrVeupXGKDDF9TlBjdbNpIFEuOurY83c7KQ1xDihpqg1%2FazBfPP2OaBY5V4BI3%2BcyaOSjZlWlvVjPHNEKlFKh9pAxyY%2FrLiJ4qV9MPtQmah2ObtFqPmcRKmD5zJE4CgwvNpiOK0oOQuyJBN24i6t5ATQ%2Ftu%2BKQNrSOsC6raDHVmBYUd9cprC6FCm4zKUvdm66C%2FBYrvA3PEAMK%2Bl38kGOqUBOHxXpKQySrqP13TF0esw9siAjqU4tUxqZSJ0%2Bd6EXUjno792E5GT0d519nCilyo71QLz2OQIbRgrQkfytuBZQNoiUotjTmJmQI3TglmL2EXAZ1YJryCo6VtDF8YuBQyo%2F6E6Nv%2FR1fdQD21%2FGZyq9gW6iGhUFR2PJT%2FJdasfDXhI%2FdBYs4QWmujo3ELzR8VHzTz4rql1KlRtM1%2BF7WcrG2gi917z&X-Amz-Signature=527087cc261d6cfa3b0962621ba9fb93493ce860d4fb6e5f17ba547c6369de90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZ7YSEB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0HkohXfPce9cRrkp56wiqVOZGCrwfTnlUuk4qxE7w4AiEA5qpe5TUbw2HCnZ0RYyfYdyuR2QCR8nnJDbByN5D%2FqywqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmPEhPDHfNZ4tBCJyrcA6tbc8R8gxUiiH9azvzXxz95PoYEoobaPVRZqF2hDeyCtCN%2FJPR7Uz%2BukbgfHW2%2FPLD7sDcmFDvv%2BAi4LRFS6qOVn3E3kE%2BnsvAh4E3ntNq316p15zdmoMSA5jEwDh%2Bm9%2FewNpswbNL6NPpZuJCPdr2c%2B9W0J0bk3%2FXLobEb32hKIip%2FJJ1naYMtYJ0007NI7R%2FHMWkPem2KDES71NfOZTH3%2FrmGnyEZGed59j4M3YFsCciTDYEWq%2BMUoe3lBgS10Q%2FF1Ra1tAVc490dgQ2xNZ2HecK4GZqhy1mLzsoDKq6Vq%2FxCah2iJhW5h%2BVOZFXRhJhvosCf1loIWFjne1mrbCBC5EKmql3%2BZgQTlFUEwxkVjh3jqhA2Gwpe6vNlHnt12ni7ioNHTrDxOqCMPJ1CEh5ooBHUEWZrFq2q4yfDKGCnttcmFrVeupXGKDDF9TlBjdbNpIFEuOurY83c7KQ1xDihpqg1%2FazBfPP2OaBY5V4BI3%2BcyaOSjZlWlvVjPHNEKlFKh9pAxyY%2FrLiJ4qV9MPtQmah2ObtFqPmcRKmD5zJE4CgwvNpiOK0oOQuyJBN24i6t5ATQ%2Ftu%2BKQNrSOsC6raDHVmBYUd9cprC6FCm4zKUvdm66C%2FBYrvA3PEAMK%2Bl38kGOqUBOHxXpKQySrqP13TF0esw9siAjqU4tUxqZSJ0%2Bd6EXUjno792E5GT0d519nCilyo71QLz2OQIbRgrQkfytuBZQNoiUotjTmJmQI3TglmL2EXAZ1YJryCo6VtDF8YuBQyo%2F6E6Nv%2FR1fdQD21%2FGZyq9gW6iGhUFR2PJT%2FJdasfDXhI%2FdBYs4QWmujo3ELzR8VHzTz4rql1KlRtM1%2BF7WcrG2gi917z&X-Amz-Signature=8f4faee25456ad6c6511747a19b5a73a260ad0b130257946b030c58f56a1858b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

