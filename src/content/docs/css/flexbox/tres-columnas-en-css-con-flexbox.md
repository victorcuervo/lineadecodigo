---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466743WP2WA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5zxj6IIXgNxRxKKscLgfB2gpUrCHVHNAxEogelasftgIgOAXcRQDSk5UuSjx5v82DeE1gFl2fczGkEKtIMmC3D6wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYBtqiejYWAxdtoJCrcA6g2DduNhl9gJgL4kCcG3XwBPHrrBBPC%2FNPZfTEn3scjzZl6Q5iYuw0pD8l0nmUXr1uH7XH8uAtcBy%2BiDUETeX7Zg5mcBlFfM6aWlxzYAI3FFiFxxWd7MqqHFV1BPpj%2BtZpUPi29zbWK6g08pG5B4dExtOTFCOaad%2BfJgNyV%2FdjQnIIBOV4QXU%2BfSJYEGEokoiJdlgGxHm9sB2Z7EdnBPrVa6u0KJIim1weTSRGoqQbI%2FVgN0WTUw0gcGrz8Sh93c%2BY7FQdhfqWrSGkXb6kCk%2FdX1EtFxzWVr72Qr5sQ8mqXHk5Ry92EaAUCmqnErKnzz36Ad8bHWGr%2FsRj1DB2GM85R0MZusXWRq6mi3o8Q5a38LuiVCJCD503%2FckyLBvA7TFcqqtmto8m%2F654%2BkEZ7Qn%2BGmOP8qFYkSjW8mA5T%2FApQfl6KP7J1gHZjo3BGM9dgOOCt%2BAueb8%2FQarWbH7A481roTVNEIKG7APU7PJSHUqauIal5hofA0K7rZj0%2Fx6in9rJ9DP64tJeA5gqlJxCWk07ZrmFcbGO2gnbkf13%2FslL9ggiMoseFmUuKg3SKVEE44DxJsz7%2F1BuM2wrA7qtKlU%2FHTezZg8beW8xLLlALqtxsclO6SIYUcMeMGR15MKnu2MkGOqUBglUvy0JJIksmlKGl4emVl70ZUfJGooYHViEjwoZasboR7HT3JF1YmhZUtv0lkyOBFlJLdE%2FpIKItTggIpkaoFmCTu7COQjnh0b3LFoapsZqtkDdsJvPP3Pu%2BDu0hO6Z2qiUNbPwAVFxdcT7JtggT23J5tjNwOofOsPJo0t7C3t3NhaF%2F8L35ho2ejFzSbS1tULTTm3bN%2Fxx%2BHHV9JLrt6b1pGHJT&X-Amz-Signature=eb466f2774ed2cc0c67609fecf0ff07e4a8822ad9df04a05a6173bd11b9ea52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466743WP2WA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5zxj6IIXgNxRxKKscLgfB2gpUrCHVHNAxEogelasftgIgOAXcRQDSk5UuSjx5v82DeE1gFl2fczGkEKtIMmC3D6wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYBtqiejYWAxdtoJCrcA6g2DduNhl9gJgL4kCcG3XwBPHrrBBPC%2FNPZfTEn3scjzZl6Q5iYuw0pD8l0nmUXr1uH7XH8uAtcBy%2BiDUETeX7Zg5mcBlFfM6aWlxzYAI3FFiFxxWd7MqqHFV1BPpj%2BtZpUPi29zbWK6g08pG5B4dExtOTFCOaad%2BfJgNyV%2FdjQnIIBOV4QXU%2BfSJYEGEokoiJdlgGxHm9sB2Z7EdnBPrVa6u0KJIim1weTSRGoqQbI%2FVgN0WTUw0gcGrz8Sh93c%2BY7FQdhfqWrSGkXb6kCk%2FdX1EtFxzWVr72Qr5sQ8mqXHk5Ry92EaAUCmqnErKnzz36Ad8bHWGr%2FsRj1DB2GM85R0MZusXWRq6mi3o8Q5a38LuiVCJCD503%2FckyLBvA7TFcqqtmto8m%2F654%2BkEZ7Qn%2BGmOP8qFYkSjW8mA5T%2FApQfl6KP7J1gHZjo3BGM9dgOOCt%2BAueb8%2FQarWbH7A481roTVNEIKG7APU7PJSHUqauIal5hofA0K7rZj0%2Fx6in9rJ9DP64tJeA5gqlJxCWk07ZrmFcbGO2gnbkf13%2FslL9ggiMoseFmUuKg3SKVEE44DxJsz7%2F1BuM2wrA7qtKlU%2FHTezZg8beW8xLLlALqtxsclO6SIYUcMeMGR15MKnu2MkGOqUBglUvy0JJIksmlKGl4emVl70ZUfJGooYHViEjwoZasboR7HT3JF1YmhZUtv0lkyOBFlJLdE%2FpIKItTggIpkaoFmCTu7COQjnh0b3LFoapsZqtkDdsJvPP3Pu%2BDu0hO6Z2qiUNbPwAVFxdcT7JtggT23J5tjNwOofOsPJo0t7C3t3NhaF%2F8L35ho2ejFzSbS1tULTTm3bN%2Fxx%2BHHV9JLrt6b1pGHJT&X-Amz-Signature=22e2a80ef1ac09a468515f5f45291c024b80bd4c57c05b8ce5c9b4c2844813a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

