---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOS3YSUD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVEpiFwkM8%2Be3%2BrGxmpDO3sXgjG%2FuxYoCzdk3e9upYDAiAzh%2BOBoD9QkOpPn7qcNUMJElyhziBV6%2FXDFmuZeTsPvSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDBl493nzSDsDgO%2BzKtwD%2Ff%2FCiJnqbFrG2U2Cq33xHwtSV7IaVz7HOeFGPxjMmWEALQCgSg4gfNs5KqBP1l59qvjNUUDP0hJEMsB7mQq0fXP4BLGGdCbOjXzw5759B6NY5Lkgnogy%2BuntLdxrW9Z2mpgipao57Sv6AjcNgibZEElTtyq9WeUC%2Fsm4IBJXdCYwpvbdyh0fjeVtjEpOZynLALaEt32X2TBwbSY8HqEFvMR4d98HXa8j5tj2772kL7KVLNaU2Pkeg4YLc5fJ33nHacZvEkMxbRJcsnsZCbgnQMZhIAU8nED2Mex1XSn0nkeXbRbJ0nzmgJX5DdRwWNg2dLjmgCTj4einjSs%2BbQI7a4BOhpZR1dmC%2FSPMENd%2FVIH0%2FsS%2BdZ1YEiRP75Dv6cY1kUa%2BZ7Ye5ap3ZA%2FVM0UCfVSErohfUY21TGqNmWkSayV9%2FKbCn42ulaCEOfvjC%2FB%2FJ%2Br1pF16%2Bbtx3HvGhmoVUP31Byn%2BTBM9%2B%2BRE53YM5wKnzXPFpaRMmWnp3wTn7yIl3aGMBynloUAC%2BwEo%2BeaXhAPdBjIUYSdKd06NlNI7ko%2Fy92mNz%2Bs%2FT6wJGs6w3nUlgd7m9jyL2hOET7EIW32DmLDKZdZWxBktBkKQV1XR9ZzwUQH2Qj%2FlGNFjeFowgcDWyQY6pgEH91lJTXp7umuqz1I10puY%2F7cX3dros5nvwGotKW4tvjyN9TnHU%2BOhFvzP3nT%2B20wCzWGqq7xyahYVrKKurmvMuryyNhB3cxN8mJE5iTtRcmN5tqnI6dVCpGq%2BHTa7GK52n11qKhDWsSvqdjCniPt3sVoPgS0Ivdo1mGeMe8wa0XzbneNG%2FVqWJw92H62esF6xeln9X3Ot%2Fn4fx%2BsDKktLLcLktxDj&X-Amz-Signature=d6177e8a7f16440a96909070a312f3528587c2a9c1ff0611d1e65cf45ce01403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOS3YSUD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVEpiFwkM8%2Be3%2BrGxmpDO3sXgjG%2FuxYoCzdk3e9upYDAiAzh%2BOBoD9QkOpPn7qcNUMJElyhziBV6%2FXDFmuZeTsPvSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDBl493nzSDsDgO%2BzKtwD%2Ff%2FCiJnqbFrG2U2Cq33xHwtSV7IaVz7HOeFGPxjMmWEALQCgSg4gfNs5KqBP1l59qvjNUUDP0hJEMsB7mQq0fXP4BLGGdCbOjXzw5759B6NY5Lkgnogy%2BuntLdxrW9Z2mpgipao57Sv6AjcNgibZEElTtyq9WeUC%2Fsm4IBJXdCYwpvbdyh0fjeVtjEpOZynLALaEt32X2TBwbSY8HqEFvMR4d98HXa8j5tj2772kL7KVLNaU2Pkeg4YLc5fJ33nHacZvEkMxbRJcsnsZCbgnQMZhIAU8nED2Mex1XSn0nkeXbRbJ0nzmgJX5DdRwWNg2dLjmgCTj4einjSs%2BbQI7a4BOhpZR1dmC%2FSPMENd%2FVIH0%2FsS%2BdZ1YEiRP75Dv6cY1kUa%2BZ7Ye5ap3ZA%2FVM0UCfVSErohfUY21TGqNmWkSayV9%2FKbCn42ulaCEOfvjC%2FB%2FJ%2Br1pF16%2Bbtx3HvGhmoVUP31Byn%2BTBM9%2B%2BRE53YM5wKnzXPFpaRMmWnp3wTn7yIl3aGMBynloUAC%2BwEo%2BeaXhAPdBjIUYSdKd06NlNI7ko%2Fy92mNz%2Bs%2FT6wJGs6w3nUlgd7m9jyL2hOET7EIW32DmLDKZdZWxBktBkKQV1XR9ZzwUQH2Qj%2FlGNFjeFowgcDWyQY6pgEH91lJTXp7umuqz1I10puY%2F7cX3dros5nvwGotKW4tvjyN9TnHU%2BOhFvzP3nT%2B20wCzWGqq7xyahYVrKKurmvMuryyNhB3cxN8mJE5iTtRcmN5tqnI6dVCpGq%2BHTa7GK52n11qKhDWsSvqdjCniPt3sVoPgS0Ivdo1mGeMe8wa0XzbneNG%2FVqWJw92H62esF6xeln9X3Ot%2Fn4fx%2BsDKktLLcLktxDj&X-Amz-Signature=9f0525bb633f4c38b3851a166755ff2b61dab2d99ea9c2db5042bff8f63f772c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

