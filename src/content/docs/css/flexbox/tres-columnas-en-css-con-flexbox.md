---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TID4LDSS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHr2Vtay7k0jR%2FxhP5Sq6p3MTzmLB6tgSUD9x4d%2BhfJgIhAOQhiAtJaDfplZHhSRuf40ciuMViN%2BsEzj9cbAQRAMbiKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvCHKeY11smErafa4q3APmrYhAhLVJ4yoRNFXWXEMnAXdBK9vZnZ%2Fqyxd8nAewnFpw2wP4wcb0cxbWCNhxAGw2ElpI2NDMb5ZLmV1PV2CSa%2BZySoi2jMb8PvNYv9u56lJXFVlgIYX9BgGo9h3IUn4oMZ%2BQsaI3he5zU97iR8hVX2RUwCEOlJ060HdkCci7GesKITLc67H8bGl8H%2BZxAqtEBW1iBkiMIyH5hSqCSTBwitludrLZXmPhvjO%2BdICSnzPIgsQhxdX48bPrTqHb23Ku%2Bd96fAebPvqrXcFzzOz0eXHysGh7qTiCIxWf3mGnEhIGsQuAoI6iuW%2B%2FU7fVKVjW9DsuLj7qYw2zsgiKAadjNnonKDDdEiQpoTVhqIXPooJQVnZniVugtkLOVsWbyEiQ8%2FIHpxLr6O0Tgjp2oUm%2BILtvPcukwXcMv%2FqHlUjeNfzhU2tO6lfL6fWezPszEZYBTs0OT5cX%2FnBMsP%2FC2i8xqr1wBz%2BIr8eqEYOjNh8KoAYIZDohQL6a6%2Fgqh3sKcPp5V1Wn9XJvu0an6UtTeA3QVvd0vtV7bBeVMqEGWx4tXBhw8O1E%2FLqik3NLkaqJi4TI2HlSCWOXc57hOTbTeTxW6XMYf1c%2FeHciWBKBXYol1m%2Fhq16xo5bfBcKj2zDrodjJBjqkASLxS2h5X46xpdqN8mU5UM5FxstIj6oSuGukFcYSNWd13%2Bp1CUXb7cg4eI6dGATIsKgodIAxwZnHBJWk0YNNT5dir64nddbloIRgweaZAh5Zeu5JlRWN%2Fb7xCckx1pT0uVEyGpTkcygCig4FMyNe3%2BkH7qoXOhB%2FQNCAox7dUz1LGfcH3QER%2FSsqyTc%2BZS6X4903sTHrAu%2FBNL3HaBRRmRvugeGl&X-Amz-Signature=5f5f5138305ebcb10a0d5d1a0fa354e40bc947ddacd9d7ab9271b09402752819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TID4LDSS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHr2Vtay7k0jR%2FxhP5Sq6p3MTzmLB6tgSUD9x4d%2BhfJgIhAOQhiAtJaDfplZHhSRuf40ciuMViN%2BsEzj9cbAQRAMbiKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvCHKeY11smErafa4q3APmrYhAhLVJ4yoRNFXWXEMnAXdBK9vZnZ%2Fqyxd8nAewnFpw2wP4wcb0cxbWCNhxAGw2ElpI2NDMb5ZLmV1PV2CSa%2BZySoi2jMb8PvNYv9u56lJXFVlgIYX9BgGo9h3IUn4oMZ%2BQsaI3he5zU97iR8hVX2RUwCEOlJ060HdkCci7GesKITLc67H8bGl8H%2BZxAqtEBW1iBkiMIyH5hSqCSTBwitludrLZXmPhvjO%2BdICSnzPIgsQhxdX48bPrTqHb23Ku%2Bd96fAebPvqrXcFzzOz0eXHysGh7qTiCIxWf3mGnEhIGsQuAoI6iuW%2B%2FU7fVKVjW9DsuLj7qYw2zsgiKAadjNnonKDDdEiQpoTVhqIXPooJQVnZniVugtkLOVsWbyEiQ8%2FIHpxLr6O0Tgjp2oUm%2BILtvPcukwXcMv%2FqHlUjeNfzhU2tO6lfL6fWezPszEZYBTs0OT5cX%2FnBMsP%2FC2i8xqr1wBz%2BIr8eqEYOjNh8KoAYIZDohQL6a6%2Fgqh3sKcPp5V1Wn9XJvu0an6UtTeA3QVvd0vtV7bBeVMqEGWx4tXBhw8O1E%2FLqik3NLkaqJi4TI2HlSCWOXc57hOTbTeTxW6XMYf1c%2FeHciWBKBXYol1m%2Fhq16xo5bfBcKj2zDrodjJBjqkASLxS2h5X46xpdqN8mU5UM5FxstIj6oSuGukFcYSNWd13%2Bp1CUXb7cg4eI6dGATIsKgodIAxwZnHBJWk0YNNT5dir64nddbloIRgweaZAh5Zeu5JlRWN%2Fb7xCckx1pT0uVEyGpTkcygCig4FMyNe3%2BkH7qoXOhB%2FQNCAox7dUz1LGfcH3QER%2FSsqyTc%2BZS6X4903sTHrAu%2FBNL3HaBRRmRvugeGl&X-Amz-Signature=af0fe1dab6137b9f5ec939dcd9d663e9cbf5bbd51531daf278ad25cd98b1ee44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

