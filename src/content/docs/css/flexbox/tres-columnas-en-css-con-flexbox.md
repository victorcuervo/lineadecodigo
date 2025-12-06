---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FP5GKFV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcNgHJEsMNo1N19MLBLuOIfWU%2BRPOSOJKmdlIP90kN5AiEAs0go1RT3v%2BVsvRkU9ldQx3DsMY1H%2FzA5HcGRxOiP9Jcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC1WAn8iPoLJjx6S7SrcA4iIILux%2F5LBAfiaTL%2BgfPcPaxCfTH65we1kNMpE9HHrA%2BDmtZrDuyiWxcQV%2B%2F7WciUwsFo4iBHdSQVdd1JLA0y4WS5cXDTpqQ0xuSbfoy9qaDNzMYuv2gBJtfRxtuUrXGZva5tpN77t%2B5Da68JbX4JSFqmeq1aBEaQQrT2nrbKQ%2FIwbdnoNNDaELbGG0F3UYmGBLkkeHg3JOvXR0Tc%2BwgvKLU6uuwg3dotAy%2FREgWrhU2SFMUkDmF89K1P6VMprWmcgss4QpnYC0UGIsIeVgzT61otr2oMSa4f4%2FufmlFojsSqac8FxRDY%2FN9hQqt7fzkQHnYMKHOmQRn2543dSHeXtj%2FiUiB70LUnwqbgJoCDQzuJeMSIKrA9ek6QfX4gcmG0gvAKg6P41kVFZm5gX6lC85E7Zdy6942fjXXPUiLtGtNz1W%2FDkeI03ylnRTxUKgCr2p5Y8%2FTlvIXwE%2FSpHLAaDJnSC2XbnqkR01pnPDHSwqplw0E8u9Y2fAihVj4Nnz9biiseyUiw7gZOAl9DfE%2BKHZlPXPj7Luwc2nP0xO4Nao6b%2By8iYBbsYfsKPTpvc3z3srqZEpxB1WFTC8CQzua94S4rxRQmWQkK3LZAUyTDL8UreOO55U1JkPfF%2BMNDDzskGOqUBfKbLAh0ToO%2FZtdImTF7Es%2FDmDLSRCb8rou7ryfNkk7YPS6R%2Bn0lYefTYC6kkD1yB%2BmCqxZ2pT6FlALrbo%2B3K8rlB3IJFMMerDci2KhZSycemoEnMmz5nFCoJgqz7Km31MxU2xJnNaV%2B5L9IcbY701XmjS8vWtEn2mk5d%2B8oZ3%2BHquleldmksk3dCDbqPaMLH0jkBWzxaLDwp8gdKEH%2BSMRmlDWnQ&X-Amz-Signature=558b0d6c85c8f637a5970d82bf8acc878f29d561a1d66ef380fc8f729bc3b92d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FP5GKFV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcNgHJEsMNo1N19MLBLuOIfWU%2BRPOSOJKmdlIP90kN5AiEAs0go1RT3v%2BVsvRkU9ldQx3DsMY1H%2FzA5HcGRxOiP9Jcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC1WAn8iPoLJjx6S7SrcA4iIILux%2F5LBAfiaTL%2BgfPcPaxCfTH65we1kNMpE9HHrA%2BDmtZrDuyiWxcQV%2B%2F7WciUwsFo4iBHdSQVdd1JLA0y4WS5cXDTpqQ0xuSbfoy9qaDNzMYuv2gBJtfRxtuUrXGZva5tpN77t%2B5Da68JbX4JSFqmeq1aBEaQQrT2nrbKQ%2FIwbdnoNNDaELbGG0F3UYmGBLkkeHg3JOvXR0Tc%2BwgvKLU6uuwg3dotAy%2FREgWrhU2SFMUkDmF89K1P6VMprWmcgss4QpnYC0UGIsIeVgzT61otr2oMSa4f4%2FufmlFojsSqac8FxRDY%2FN9hQqt7fzkQHnYMKHOmQRn2543dSHeXtj%2FiUiB70LUnwqbgJoCDQzuJeMSIKrA9ek6QfX4gcmG0gvAKg6P41kVFZm5gX6lC85E7Zdy6942fjXXPUiLtGtNz1W%2FDkeI03ylnRTxUKgCr2p5Y8%2FTlvIXwE%2FSpHLAaDJnSC2XbnqkR01pnPDHSwqplw0E8u9Y2fAihVj4Nnz9biiseyUiw7gZOAl9DfE%2BKHZlPXPj7Luwc2nP0xO4Nao6b%2By8iYBbsYfsKPTpvc3z3srqZEpxB1WFTC8CQzua94S4rxRQmWQkK3LZAUyTDL8UreOO55U1JkPfF%2BMNDDzskGOqUBfKbLAh0ToO%2FZtdImTF7Es%2FDmDLSRCb8rou7ryfNkk7YPS6R%2Bn0lYefTYC6kkD1yB%2BmCqxZ2pT6FlALrbo%2B3K8rlB3IJFMMerDci2KhZSycemoEnMmz5nFCoJgqz7Km31MxU2xJnNaV%2B5L9IcbY701XmjS8vWtEn2mk5d%2B8oZ3%2BHquleldmksk3dCDbqPaMLH0jkBWzxaLDwp8gdKEH%2BSMRmlDWnQ&X-Amz-Signature=946308e5cec00ba3366af3bf386a7a3ee8c6ec8f13273136c1843e8a6acf676e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

