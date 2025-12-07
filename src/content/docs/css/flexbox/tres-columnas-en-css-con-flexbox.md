---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7SZ6UY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJugfd%2Brj9MMCTX5bs%2FxTjvLenM8g4psYsvm4XG47vsQIgbTTxbWr0LNeBr7zyTMDkwBbhgvyYuk8JkEzriTFzABgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQ76EyQ0xn7%2FJsF3yrcA5ROpWRntLCQr%2FUytDCu6CQUg1Dtvadn9ivQuRDwb9jLS0Uy8XQXMpU7hSGcB6U4AajriHGJ9jVea3VyGj8rAGXKXp140C5%2FXd%2FxIba2ZS8Er9YJX0%2Fj06Lvh6j4jiR1QlgnA4ecT9TDaUKXBbn%2FX44C09Jh1U7fOAnPtE8aoaf2hKHZtzRdVfS2gztlZq6AApCCqzvpbNa8iuxnMAP7%2FUwl3C3Saf7sdyQy5SMkFBBmxJWlELyClZ6DpBayLabXVUIHpoopdDI6belXpiQvV1RgpF5sy1mJO%2B5N2RZQYvXeKN%2BsyY5ecTOMOIXb1ADSzJqjR4qUj7lWv7RIpt6vUG2wKoYLVhY2Pqik%2B10gDxDFOiVwQLUfxTp4UQku%2FdSGFXDFzMYjAZmeguSHqlmA1J%2FZL9NdEzPFkfKxxMpbU%2FrLJxhUTe2lTuVxpTmkG16ynO%2FYXeVYoowy42ETG0py8QoGR4l2lIvR95pp0MiIruPK5Rb%2BcjmltRB0GtO%2Fgr0QCRmB2lF3SDE2nOLzXITX1HcDKCry1NFkljs0EIcbFoXcKSUrSRS%2B%2FgegT3aYg2wXL3R2ljnKgoGLzvlcC3eKNeT9xPWnwmcNfSDT%2Fj4pj31r54Xsz1O5ADBYpbd8MI251skGOqUBiFLhOv2Cc%2BmRftlWN9Mkxqm8kmrRi387Qa28kHtgTkjlD5u9Z5cIugRzVBJ%2BzYWs1fgZJaJkyx7sT%2F5EOIyF%2FpQWsDE30TeSWRFG0%2BhSqorgCj99Jq0gNWjTFKpuJa6bvpmaa1Dvknsdek33K3w8GCAzHC19RcaZA8qhQ9SdmMF%2Bb%2FAmrh%2Fc3FPmn%2B4A30%2Fvd0pU2gzSvum683E3VJueBExp7K1B&X-Amz-Signature=8746f98a382ea744516d8bcb675a41ba566b4d742e432f042d113289d728183b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7SZ6UY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJugfd%2Brj9MMCTX5bs%2FxTjvLenM8g4psYsvm4XG47vsQIgbTTxbWr0LNeBr7zyTMDkwBbhgvyYuk8JkEzriTFzABgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQ76EyQ0xn7%2FJsF3yrcA5ROpWRntLCQr%2FUytDCu6CQUg1Dtvadn9ivQuRDwb9jLS0Uy8XQXMpU7hSGcB6U4AajriHGJ9jVea3VyGj8rAGXKXp140C5%2FXd%2FxIba2ZS8Er9YJX0%2Fj06Lvh6j4jiR1QlgnA4ecT9TDaUKXBbn%2FX44C09Jh1U7fOAnPtE8aoaf2hKHZtzRdVfS2gztlZq6AApCCqzvpbNa8iuxnMAP7%2FUwl3C3Saf7sdyQy5SMkFBBmxJWlELyClZ6DpBayLabXVUIHpoopdDI6belXpiQvV1RgpF5sy1mJO%2B5N2RZQYvXeKN%2BsyY5ecTOMOIXb1ADSzJqjR4qUj7lWv7RIpt6vUG2wKoYLVhY2Pqik%2B10gDxDFOiVwQLUfxTp4UQku%2FdSGFXDFzMYjAZmeguSHqlmA1J%2FZL9NdEzPFkfKxxMpbU%2FrLJxhUTe2lTuVxpTmkG16ynO%2FYXeVYoowy42ETG0py8QoGR4l2lIvR95pp0MiIruPK5Rb%2BcjmltRB0GtO%2Fgr0QCRmB2lF3SDE2nOLzXITX1HcDKCry1NFkljs0EIcbFoXcKSUrSRS%2B%2FgegT3aYg2wXL3R2ljnKgoGLzvlcC3eKNeT9xPWnwmcNfSDT%2Fj4pj31r54Xsz1O5ADBYpbd8MI251skGOqUBiFLhOv2Cc%2BmRftlWN9Mkxqm8kmrRi387Qa28kHtgTkjlD5u9Z5cIugRzVBJ%2BzYWs1fgZJaJkyx7sT%2F5EOIyF%2FpQWsDE30TeSWRFG0%2BhSqorgCj99Jq0gNWjTFKpuJa6bvpmaa1Dvknsdek33K3w8GCAzHC19RcaZA8qhQ9SdmMF%2Bb%2FAmrh%2Fc3FPmn%2B4A30%2Fvd0pU2gzSvum683E3VJueBExp7K1B&X-Amz-Signature=366929fe493cff5200da14b34fb6c3ce4ad73617054a08d28c8ef3239c6f47c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

