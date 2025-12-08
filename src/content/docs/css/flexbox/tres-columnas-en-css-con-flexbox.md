---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJO5F6K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfxDGykjZ4YSVzTYyD%2FpzunUNqK5MF7m92AcmGaodoBwIgBC78M7NsocuU4%2FiE6U0BDcYlXZ8%2By9fUCwGWzXcB2BgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAejBBfJCVBQv%2B2vcyrcA7aW8XyQC8oSCTkpz2kARvQ%2FqH9N5pzop5uDBKYj3PHoSb%2BLbujSmsAtzGQR6vk65hCbFpdl4%2FZLls%2FcyHi4e1RkjkQQkeKWHawntikE54wyMhw%2BgDeMx%2Fh59rsbAPzwtvBSLNqEj9Z4LFmDPrUuy7hnNGn3UiJxY5pVVJwQAwPYA448aN4ygCIKsvH6%2FjdViM1t4YvEscrwkq0V6GWtsU615JiGGbc4zlcvu4g13zq%2BxoAth05PSC2bUFLckcZunuOCtXwNKOS3Rk3tjXnBoA%2BUi83eLOD0pXQ4pGR0ZVKSvqVSwHGNTD2YR8e0rhcHSW%2F7n94UUlv%2FKmJgDfjivmLP7lnNF59fBWVW5XzZuydepxB8FHirl7a%2BQgfn5mq5YLhNYKGHNA4BipEW8by39T%2F8B3rNez4vjIREQ9Smkr6RKqw%2BkPlGHDRXqFbMJgDqbt9EV2nQi0E004rYrfreBqOH90OA8s6dYgR38OcR45kDA3zLvwaanYBkoKzv3FQ%2FxDncg6IJuAdeV3uUqLI%2F5dfA2WlYb1hkS6AnduC103rJFUr6v68eOFFNnVXNRxKd83n8SbU0zo8uLJmpwA%2BcundHh%2Fdwp6fG%2BCjSGUmFQ93YIawuKDQDUOgUyBMQMLDk28kGOqUBVSt%2FrLHhzIEBKLx%2FkN78UKp5qgLoAQL0YbqCC9zbwN34oJhm8pI41Ivf4gbueVEXWVTqKGNNtdfYM0%2Fi0l%2B9FVvO5XZy85iJ1zA9LwqZGAro7IqlmrdVRuFWq8urtZdJEfMNvU4UDZxTsyqeGjI%2BfwvP2XQRxeFzN7wUP83sSamBTIvK4sb34P2QHRESd3fgF5c9719fC6sC5OA0Ep2MCkITUoEh&X-Amz-Signature=399fa06464702ef25236a7683cf8798f0a247c63f03d7efcdc92456af8519ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJO5F6K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfxDGykjZ4YSVzTYyD%2FpzunUNqK5MF7m92AcmGaodoBwIgBC78M7NsocuU4%2FiE6U0BDcYlXZ8%2By9fUCwGWzXcB2BgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAejBBfJCVBQv%2B2vcyrcA7aW8XyQC8oSCTkpz2kARvQ%2FqH9N5pzop5uDBKYj3PHoSb%2BLbujSmsAtzGQR6vk65hCbFpdl4%2FZLls%2FcyHi4e1RkjkQQkeKWHawntikE54wyMhw%2BgDeMx%2Fh59rsbAPzwtvBSLNqEj9Z4LFmDPrUuy7hnNGn3UiJxY5pVVJwQAwPYA448aN4ygCIKsvH6%2FjdViM1t4YvEscrwkq0V6GWtsU615JiGGbc4zlcvu4g13zq%2BxoAth05PSC2bUFLckcZunuOCtXwNKOS3Rk3tjXnBoA%2BUi83eLOD0pXQ4pGR0ZVKSvqVSwHGNTD2YR8e0rhcHSW%2F7n94UUlv%2FKmJgDfjivmLP7lnNF59fBWVW5XzZuydepxB8FHirl7a%2BQgfn5mq5YLhNYKGHNA4BipEW8by39T%2F8B3rNez4vjIREQ9Smkr6RKqw%2BkPlGHDRXqFbMJgDqbt9EV2nQi0E004rYrfreBqOH90OA8s6dYgR38OcR45kDA3zLvwaanYBkoKzv3FQ%2FxDncg6IJuAdeV3uUqLI%2F5dfA2WlYb1hkS6AnduC103rJFUr6v68eOFFNnVXNRxKd83n8SbU0zo8uLJmpwA%2BcundHh%2Fdwp6fG%2BCjSGUmFQ93YIawuKDQDUOgUyBMQMLDk28kGOqUBVSt%2FrLHhzIEBKLx%2FkN78UKp5qgLoAQL0YbqCC9zbwN34oJhm8pI41Ivf4gbueVEXWVTqKGNNtdfYM0%2Fi0l%2B9FVvO5XZy85iJ1zA9LwqZGAro7IqlmrdVRuFWq8urtZdJEfMNvU4UDZxTsyqeGjI%2BfwvP2XQRxeFzN7wUP83sSamBTIvK4sb34P2QHRESd3fgF5c9719fC6sC5OA0Ep2MCkITUoEh&X-Amz-Signature=91ed1f2c7c58324cb10772776683eab006609fe590c8a7c12f1aa7f4cf0a1326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

