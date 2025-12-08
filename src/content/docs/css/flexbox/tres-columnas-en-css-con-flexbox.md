---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXF7AZB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdnVleI2qFY6BHt4wl8Fb%2F7u%2BAyW6qoXXsIjQJUiPv%2FAiEA7gt01CEl%2BfVa%2BPp5bEBUJI6VAO0nmYOEuzU%2BFzmGf8UqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdwYO7kz%2FZQ%2BEPOICrcAzz81tmKoy03SP%2FGnexoZCbbCOjC425Smho9FuZ7Nl%2FGD2CHe39fkEl8LajjnuYj0chUNWHCrmyOjn2OAFdIHaRlgTBdhJx1bX3%2FIbjmw%2BUhgR1Bqv3lQw%2FVa%2FdkYbTScMoJkgipxu4AKv0i7%2BE87MOH0MNT6wP5fTRKo8naFz4aZ5Aoesm1GCXjdTvQbW4rUksIx0a57n18ihnR4nwAqEUEBmlIN3dgMjEzLYjKxo176hWAKzfWIxmBesUOHKj9hCjBS%2FWw363j%2FAZLUb%2F3YOLgmx1chw6SvymnYndQrYNzBL1PanL9m4YbuBoXUFFY46u2SdOFVQcto5DHe%2B6ACAx3xy2IFnD4VnXDOON%2BlZ90QBmyneIk4wDv3kZHJLUYaU08E98OAvfb2PQnQtNXFYnRLuTX0Rwql08IrC7wY4YXnx%2FuBI8eSyafaXx9%2FgbXcUT7UDVDN%2BlvF0Cpqz4n5F3HvrUyiGKzUvP598n4zqjXkRDAsCT96prDsBBEoOHWqCpzRXv7FNvWj9WPgjc0ZhS4YXgM3OBu6jIZD0EALZ%2B0fuOZOlimNfTUHrTDtt86eLVdE4vBZtE%2Bz39qkkhmzgD2dauhlSxrzdiCz2wJMMslS%2Bxe9Z%2BisSSefKMsMKbu2MkGOqUBxgVF1j5XSXw8r6rdcQqJdz2TzKCaoDjh%2BVuZFTqVgvLiBVaQHumfdUMF%2Bj%2FWhiS8f4%2BwUjlu%2FyZcuUmYqR2SYdNj%2B9rFYz4d1fgZo6YejvS15PDsFdFQOdRaD1AFaBvBJPYGLS3EXmMqOb0HIupOPOsFZvJhaXEpSMpCDE5KKp9lSgCZ3mo0m1MI9KCuIG%2FPK7%2BWEsn238WGwFa4h0rCTtsPOu%2Bz&X-Amz-Signature=1273fc5fc5c4e1be8000e93b31dcfe5272eb7aa63207290829c43cf32287c242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXF7AZB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdnVleI2qFY6BHt4wl8Fb%2F7u%2BAyW6qoXXsIjQJUiPv%2FAiEA7gt01CEl%2BfVa%2BPp5bEBUJI6VAO0nmYOEuzU%2BFzmGf8UqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdwYO7kz%2FZQ%2BEPOICrcAzz81tmKoy03SP%2FGnexoZCbbCOjC425Smho9FuZ7Nl%2FGD2CHe39fkEl8LajjnuYj0chUNWHCrmyOjn2OAFdIHaRlgTBdhJx1bX3%2FIbjmw%2BUhgR1Bqv3lQw%2FVa%2FdkYbTScMoJkgipxu4AKv0i7%2BE87MOH0MNT6wP5fTRKo8naFz4aZ5Aoesm1GCXjdTvQbW4rUksIx0a57n18ihnR4nwAqEUEBmlIN3dgMjEzLYjKxo176hWAKzfWIxmBesUOHKj9hCjBS%2FWw363j%2FAZLUb%2F3YOLgmx1chw6SvymnYndQrYNzBL1PanL9m4YbuBoXUFFY46u2SdOFVQcto5DHe%2B6ACAx3xy2IFnD4VnXDOON%2BlZ90QBmyneIk4wDv3kZHJLUYaU08E98OAvfb2PQnQtNXFYnRLuTX0Rwql08IrC7wY4YXnx%2FuBI8eSyafaXx9%2FgbXcUT7UDVDN%2BlvF0Cpqz4n5F3HvrUyiGKzUvP598n4zqjXkRDAsCT96prDsBBEoOHWqCpzRXv7FNvWj9WPgjc0ZhS4YXgM3OBu6jIZD0EALZ%2B0fuOZOlimNfTUHrTDtt86eLVdE4vBZtE%2Bz39qkkhmzgD2dauhlSxrzdiCz2wJMMslS%2Bxe9Z%2BisSSefKMsMKbu2MkGOqUBxgVF1j5XSXw8r6rdcQqJdz2TzKCaoDjh%2BVuZFTqVgvLiBVaQHumfdUMF%2Bj%2FWhiS8f4%2BwUjlu%2FyZcuUmYqR2SYdNj%2B9rFYz4d1fgZo6YejvS15PDsFdFQOdRaD1AFaBvBJPYGLS3EXmMqOb0HIupOPOsFZvJhaXEpSMpCDE5KKp9lSgCZ3mo0m1MI9KCuIG%2FPK7%2BWEsn238WGwFa4h0rCTtsPOu%2Bz&X-Amz-Signature=599b662b7348eefefb4f5ab79bcb1eb5ef5674925883413772eb83b3dea1698f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

