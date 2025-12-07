---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6I3GAAR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdzyYe%2BR4fvvl4r4uaJELdt9KK4ddo%2FDzs%2BeEEkIGRcwIgDVI80fWh5JzNc%2FqKatlvjUFc835s2ZErlKtuc%2BiWZGEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFnMQ0b4OU5P%2Fub%2BSrcA3Egf3b71Spg3aTFk%2FdHDA4LMRZUaWwa2HFOK33%2BWvK4nNHFAUEQiyqDzJCo1muDNgX78h%2Fvd0Ey7KLOmFmmLXRu2szoe%2FQPWa4ahZspU78LI8TKV97SxCrXcC0bMegXfI1pwm7dJxIgU6uFOyEpNKb4pojXQaVPz%2FaKNUChymKh3ruFR59HxkB2bHWFIwqy9hOauLPbDP26fAbEYZ52wrgXTyB8eO7Kv7dAtZYIv2qebOtxcRj4ItwYdevRncCNPYHujyktJx54gEck6zOjlNT7JNWSWf%2BWIcJ4G9WFsXm%2B3boM17JL4eJkKixa5WBu%2FUwsUqQn6GpQQ9b7dT4%2BZ4VG8qnRfBe%2FP8SVkW42wAXTfLT52vEyEou4vVOhvL0Qt0wHDUErFlqW0WtHHAyquYwFm8V39d%2BFCqExR0F4B%2B2Fl91LkWnNUouWzs9y7X%2B67xfVhCBZAzio2BXpqmfGsNYO56svAZl89chl40d2WuUB3zYYuzMzRQNByQoSEvogzuNakyL%2Fj0HGOaqqEuBsgMOKrYxxCVumLSBtu97MoGfmpUIViwCQKn85DTEQChDrjgU88ssri42fdNzezq5j7InAHc2v%2FQff6L9brnLkYSzA0hFU7rWoxAnVCoozMIKp18kGOqUBtfVSzg6m5fnZuXC%2BzaE7AScPAzvOXxk2PCwi7KfRTa1yOU8DPuo%2FihGWAzPx%2Fx7quyxwQZDhuxRhPWUPviOL8sYvToXVhUNfhdSTEZplIyjTT5AD%2FHWk8Bdu9z9IVVq4q76xvsdlLz%2F9ZCVE35mIYYUhsKtK6Mm5VAmHc59i%2BnTSj1se%2BNKl%2F5FfZ2oCWc1koy%2B6gbcFTc0pDw%2B6BBx0JITGkf6L&X-Amz-Signature=741e56a9bdf571f3904e0cba284a5689b7184ad42781b04b2b79d6a3c7b16c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6I3GAAR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdzyYe%2BR4fvvl4r4uaJELdt9KK4ddo%2FDzs%2BeEEkIGRcwIgDVI80fWh5JzNc%2FqKatlvjUFc835s2ZErlKtuc%2BiWZGEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFnMQ0b4OU5P%2Fub%2BSrcA3Egf3b71Spg3aTFk%2FdHDA4LMRZUaWwa2HFOK33%2BWvK4nNHFAUEQiyqDzJCo1muDNgX78h%2Fvd0Ey7KLOmFmmLXRu2szoe%2FQPWa4ahZspU78LI8TKV97SxCrXcC0bMegXfI1pwm7dJxIgU6uFOyEpNKb4pojXQaVPz%2FaKNUChymKh3ruFR59HxkB2bHWFIwqy9hOauLPbDP26fAbEYZ52wrgXTyB8eO7Kv7dAtZYIv2qebOtxcRj4ItwYdevRncCNPYHujyktJx54gEck6zOjlNT7JNWSWf%2BWIcJ4G9WFsXm%2B3boM17JL4eJkKixa5WBu%2FUwsUqQn6GpQQ9b7dT4%2BZ4VG8qnRfBe%2FP8SVkW42wAXTfLT52vEyEou4vVOhvL0Qt0wHDUErFlqW0WtHHAyquYwFm8V39d%2BFCqExR0F4B%2B2Fl91LkWnNUouWzs9y7X%2B67xfVhCBZAzio2BXpqmfGsNYO56svAZl89chl40d2WuUB3zYYuzMzRQNByQoSEvogzuNakyL%2Fj0HGOaqqEuBsgMOKrYxxCVumLSBtu97MoGfmpUIViwCQKn85DTEQChDrjgU88ssri42fdNzezq5j7InAHc2v%2FQff6L9brnLkYSzA0hFU7rWoxAnVCoozMIKp18kGOqUBtfVSzg6m5fnZuXC%2BzaE7AScPAzvOXxk2PCwi7KfRTa1yOU8DPuo%2FihGWAzPx%2Fx7quyxwQZDhuxRhPWUPviOL8sYvToXVhUNfhdSTEZplIyjTT5AD%2FHWk8Bdu9z9IVVq4q76xvsdlLz%2F9ZCVE35mIYYUhsKtK6Mm5VAmHc59i%2BnTSj1se%2BNKl%2F5FfZ2oCWc1koy%2B6gbcFTc0pDw%2B6BBx0JITGkf6L&X-Amz-Signature=eb5c49caa29e89fdaa16ac5360487b92640db73d6a633974046cf5a80f3f1db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

