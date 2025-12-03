---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I6D4AY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHqh6HLr92bLIJTbiTMpzJndK3wYlSIlADFUZGNMtzchAiEA4opmGJInFWdqr1gBeJOqmScEY%2FNgX9I07pxG1EGeD0Yq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIftq8QcRh%2B%2FZj2EkircA%2BxJdmMcso%2B%2BRxSgq%2Fbf9GgDZS2%2BuVtysFkAFE0IFiLWUvOqqJ94DqoI5h%2BXtMBvwRM%2FTAndY2g9UNOQxts%2F10IKO9l2KnkOKUAGSqOY%2Fz%2B%2BCthA6w2gCzz16YzmTSseZF91QKCiKu0lwozr0SZH3Hi0KLfUJpbr4%2BMgXhrhqxLiJJAvziI0TWeLDqY5qN52N%2Bj13m2YmKDgKhXE1cbRbZsZDSGAEYcTo%2FxWH2Gbs2CoKnSTU0vnotqTQGuNwRzGMzeG2XPgcikD2SZ6iXRB79PkphrI6Gfij9we%2B%2FSnkFhgWhFl04917TuNlXuEqwCmf5YIj95O1zyCSyl%2Bjke95AAazP1VbkhAOrbeiOUTW77Yw7HLlyouneCt5qDSO8q7o1Dj1KDwaiDQ4CerggkQEg%2BhXzyfdlX%2BtARkgqIhcKZ8DdOKat9by47uOuB7QUZ%2BLRxaUEzksQRfxmZW%2BQeu%2BQ2BSuphwVYPJjOJtxd6a%2F6ocVA4t9ly%2BWqz9xd1PNZ1maId6FqgJYjyumxsqL%2Bq2wjJHJO3DzRgZ0qyqaW%2BQ6fQHbqScDYpF08BYYrmjGUOmgmudrtf%2BQkCqrzK%2BLABBNxlVA2f3fJXBuKsgFwaA0MCFQceqzTAOoZwf0ShMM3Uv8kGOqUBx2yGyxfjVI9e%2BKUQfl6j46%2FtKA%2BCyFEFQBpIchX2uUKLZk16w2otwOqwPWPKl1iE7sB27aipYDKTtD8IGghF%2F6x3pVy5vhR0wn35Q2oFEPuWFCTbLug%2BASWkRNYfxu3hsTgMh5y%2Ffmizf%2F3%2FyNIhqziR4koM65u8gyraxMFn488NZvr7RBFW%2B%2BwfShaah8wRecEKEzFT38H1Z3TSo4AiCGff3i1F&X-Amz-Signature=52c478323ea222075ba745922c1592d413207bb1613efacad4c1c9ef36ddcf4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I6D4AY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHqh6HLr92bLIJTbiTMpzJndK3wYlSIlADFUZGNMtzchAiEA4opmGJInFWdqr1gBeJOqmScEY%2FNgX9I07pxG1EGeD0Yq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIftq8QcRh%2B%2FZj2EkircA%2BxJdmMcso%2B%2BRxSgq%2Fbf9GgDZS2%2BuVtysFkAFE0IFiLWUvOqqJ94DqoI5h%2BXtMBvwRM%2FTAndY2g9UNOQxts%2F10IKO9l2KnkOKUAGSqOY%2Fz%2B%2BCthA6w2gCzz16YzmTSseZF91QKCiKu0lwozr0SZH3Hi0KLfUJpbr4%2BMgXhrhqxLiJJAvziI0TWeLDqY5qN52N%2Bj13m2YmKDgKhXE1cbRbZsZDSGAEYcTo%2FxWH2Gbs2CoKnSTU0vnotqTQGuNwRzGMzeG2XPgcikD2SZ6iXRB79PkphrI6Gfij9we%2B%2FSnkFhgWhFl04917TuNlXuEqwCmf5YIj95O1zyCSyl%2Bjke95AAazP1VbkhAOrbeiOUTW77Yw7HLlyouneCt5qDSO8q7o1Dj1KDwaiDQ4CerggkQEg%2BhXzyfdlX%2BtARkgqIhcKZ8DdOKat9by47uOuB7QUZ%2BLRxaUEzksQRfxmZW%2BQeu%2BQ2BSuphwVYPJjOJtxd6a%2F6ocVA4t9ly%2BWqz9xd1PNZ1maId6FqgJYjyumxsqL%2Bq2wjJHJO3DzRgZ0qyqaW%2BQ6fQHbqScDYpF08BYYrmjGUOmgmudrtf%2BQkCqrzK%2BLABBNxlVA2f3fJXBuKsgFwaA0MCFQceqzTAOoZwf0ShMM3Uv8kGOqUBx2yGyxfjVI9e%2BKUQfl6j46%2FtKA%2BCyFEFQBpIchX2uUKLZk16w2otwOqwPWPKl1iE7sB27aipYDKTtD8IGghF%2F6x3pVy5vhR0wn35Q2oFEPuWFCTbLug%2BASWkRNYfxu3hsTgMh5y%2Ffmizf%2F3%2FyNIhqziR4koM65u8gyraxMFn488NZvr7RBFW%2B%2BwfShaah8wRecEKEzFT38H1Z3TSo4AiCGff3i1F&X-Amz-Signature=238b5c446b2a2647cfad25aba6a75fa637df03ab47d95d05e06b39ab4fa7be06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

