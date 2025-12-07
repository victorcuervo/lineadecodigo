---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCM3YIHR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDO4wp%2FrPjwfKEaCTcG2Jmkta%2B8vJs1LLaB%2BwZqoZUXAIgFdYeZ4lXbtOL1w%2Bp%2BZ7IXp%2BP5EyBfxO08oq4ycAYhUUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqqu77ItX%2BJM%2B1X8ircA8h2f7a5fsm23zR9jGaHSiDaTuuaQYATiEUHYxQrlm7fSFxspxQxin%2FIPSzofhM6BoTygB7JVIfOfxOmpaAs42VSO2ngN7b7Oc9%2FpXbM9HvZlDdag3ShZ4Hxe32w8DCfrYS6l7RAMqyU6zV9IyA%2BGd%2FYK2IZousloir06tZKnTDtVV5BsCroTbOGg7YksouvZY6HhBzPixokSDaGE0oa1otkEvxCRnmimNnMrDuRrtZaIme7LnqgPeq%2BtSzznkrdi%2FsxDpoa4ijGyml5kMlUq%2FLp7znpAuHGGN73nfjJi8ZPde3SPbPLWLFLDGbjqOLt1L9TvQG0p6YCuY%2F1%2FInmL6i44ojnfMRQSeqqfOMUKkSw%2FJSYqJga%2BFk0veNSxiKbh0n3JP9a96GqBM2XE2YuLKOQoY9OqIY%2Bt10b79YLmfWRTUPicz1dgi%2F5e74tx97s5HIg9wajL4Nv93cxzE7qYskinf54q6E2QgsxcLuR0JRBdLgkLlW52vNkIkZs9bHRaF7BWGSUMXUX2posgsFQX76kLA0zWvTah9t1427BHhFf4nH%2B1UvsnVtjqr5SUUWjGTWnraG8%2BGwpC0Au3JaXyiy9h0Oqn%2ByL1zy4UahrJGdY%2FBfsTyFXYrr4kGzSMPb90skGOqUBYQbZhO4nHcu9c%2F09aZf6RA6g1%2FhsCiVUlNPn7qWJ15cNKRWFxzhk6ovzMV5w6mfA88ZzkJ9mJcDpEPyWyvNAUZbpuDyxCCkLFdyARo52REofN35yoTcEl5cPxYvLBk4E5CLsjcJ8lKT7fGQM4EqL7pIuFy6I2oCYg42Wse%2FXGIUZBM9aqkeN2OHxS4oU8bi1JlJ7YPLnQMDYHzO82xL5dM%2F2wlWM&X-Amz-Signature=ef7e8f055fcc89387fb1d4c2f81dc450184023191d2b1d66e5adaf8b735ba6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCM3YIHR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDO4wp%2FrPjwfKEaCTcG2Jmkta%2B8vJs1LLaB%2BwZqoZUXAIgFdYeZ4lXbtOL1w%2Bp%2BZ7IXp%2BP5EyBfxO08oq4ycAYhUUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqqu77ItX%2BJM%2B1X8ircA8h2f7a5fsm23zR9jGaHSiDaTuuaQYATiEUHYxQrlm7fSFxspxQxin%2FIPSzofhM6BoTygB7JVIfOfxOmpaAs42VSO2ngN7b7Oc9%2FpXbM9HvZlDdag3ShZ4Hxe32w8DCfrYS6l7RAMqyU6zV9IyA%2BGd%2FYK2IZousloir06tZKnTDtVV5BsCroTbOGg7YksouvZY6HhBzPixokSDaGE0oa1otkEvxCRnmimNnMrDuRrtZaIme7LnqgPeq%2BtSzznkrdi%2FsxDpoa4ijGyml5kMlUq%2FLp7znpAuHGGN73nfjJi8ZPde3SPbPLWLFLDGbjqOLt1L9TvQG0p6YCuY%2F1%2FInmL6i44ojnfMRQSeqqfOMUKkSw%2FJSYqJga%2BFk0veNSxiKbh0n3JP9a96GqBM2XE2YuLKOQoY9OqIY%2Bt10b79YLmfWRTUPicz1dgi%2F5e74tx97s5HIg9wajL4Nv93cxzE7qYskinf54q6E2QgsxcLuR0JRBdLgkLlW52vNkIkZs9bHRaF7BWGSUMXUX2posgsFQX76kLA0zWvTah9t1427BHhFf4nH%2B1UvsnVtjqr5SUUWjGTWnraG8%2BGwpC0Au3JaXyiy9h0Oqn%2ByL1zy4UahrJGdY%2FBfsTyFXYrr4kGzSMPb90skGOqUBYQbZhO4nHcu9c%2F09aZf6RA6g1%2FhsCiVUlNPn7qWJ15cNKRWFxzhk6ovzMV5w6mfA88ZzkJ9mJcDpEPyWyvNAUZbpuDyxCCkLFdyARo52REofN35yoTcEl5cPxYvLBk4E5CLsjcJ8lKT7fGQM4EqL7pIuFy6I2oCYg42Wse%2FXGIUZBM9aqkeN2OHxS4oU8bi1JlJ7YPLnQMDYHzO82xL5dM%2F2wlWM&X-Amz-Signature=c5895979587182b08ea62438690b8ba3cdcc0d79441c54bfe70141bfc89dc5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

