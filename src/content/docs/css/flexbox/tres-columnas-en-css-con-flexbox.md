---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQVSVHLH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM%2B2AeS11qpLOmYcs33lBOH5PNVSiMhZFn4RH%2BGbgm2AiA7nG4%2BFR8js9oYyCz2uoVw7ygBwdg8urXsVcbPfkyIlir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0u2uO3xMmpmpPrYuKtwDYte0Q6%2FbQ5KP%2Bv885D6KEKEcNKsIqDktIGyrY%2FbkQJaGjHCHzA0XihrWgrnYewYrW22MLyYaEYu9BlAInSNMp586LhtIJDUMjygzACMg6thiJOrM%2BDVmYL%2B4kdNRznmtk6pOSvw6oRlTfpritEK8i%2FL0KY8M7%2BVK9o5lwx9Ik%2BtgNB%2FuOyzz%2BQDBnL9yKlLMtr9rTVajXmzplRXdgaXYKW7UzLpkQABKyNvSmBjfkJ4%2BsC3moEkfg%2BJfevNGsIefCLAit0eIMwp%2FZWCpqRC7pYcxDEaozSwUucKNB4%2BJs5w0yK1htGNo%2FWrlJD9CKtKQlyxrG%2BUeOZh%2FoWpluK7sbxiV%2BnTIYR8TFFh3m%2BGZnzoHPjrGPE4hXvwDNgBAmk1TEVMexZq4Y0cXjgceNR5yTFogQRxcJiUmDTHtwQbNRC3E41fKZYJnDcOMq%2F9pqGXZJK2zDKUKwkevTHBL4itDMe0LxPB9b%2FTzg7f1MNUXf0Q1ioPa2SmHA1alMtHwUO69oGMKAnrqxd98EE9BhXuzkOELURIo%2BYPOsqhHjnCVM%2FLiXKv5LMTSh86bpmIdjIxCS1h6RqQhwMaEYX9bub0mh%2FHR405cY77DVG19JIiHhxnBFjGHsc9HvYp%2BKs8wsNPSyQY6pgFx6JH%2BhPhWsY4U9uqxs8KhQOZ3%2Bv6lknFKV02f%2F11HhsOuLr6n7XOB%2FEFoLbOZskB%2F1uU9qYMHok3Xlx2ey7jvegf1LxMzFOYOqkjxfxmOHLVdF7eBlm62g3R7jDQ9U2rI6%2BiIXuQBTbdyi6J7wYSFdML%2BfJgdiTgfXhzW8%2FVhJVN%2BFbjI5JdnP7Pfscls8Tmq5P9LkDEB5LYqrA0Kde4LpgyYmUWi&X-Amz-Signature=ddf3b2e03ecd5434cd4e6cb085df052e51d2bbc9be45e4d11605dc9c39c32f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQVSVHLH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM%2B2AeS11qpLOmYcs33lBOH5PNVSiMhZFn4RH%2BGbgm2AiA7nG4%2BFR8js9oYyCz2uoVw7ygBwdg8urXsVcbPfkyIlir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0u2uO3xMmpmpPrYuKtwDYte0Q6%2FbQ5KP%2Bv885D6KEKEcNKsIqDktIGyrY%2FbkQJaGjHCHzA0XihrWgrnYewYrW22MLyYaEYu9BlAInSNMp586LhtIJDUMjygzACMg6thiJOrM%2BDVmYL%2B4kdNRznmtk6pOSvw6oRlTfpritEK8i%2FL0KY8M7%2BVK9o5lwx9Ik%2BtgNB%2FuOyzz%2BQDBnL9yKlLMtr9rTVajXmzplRXdgaXYKW7UzLpkQABKyNvSmBjfkJ4%2BsC3moEkfg%2BJfevNGsIefCLAit0eIMwp%2FZWCpqRC7pYcxDEaozSwUucKNB4%2BJs5w0yK1htGNo%2FWrlJD9CKtKQlyxrG%2BUeOZh%2FoWpluK7sbxiV%2BnTIYR8TFFh3m%2BGZnzoHPjrGPE4hXvwDNgBAmk1TEVMexZq4Y0cXjgceNR5yTFogQRxcJiUmDTHtwQbNRC3E41fKZYJnDcOMq%2F9pqGXZJK2zDKUKwkevTHBL4itDMe0LxPB9b%2FTzg7f1MNUXf0Q1ioPa2SmHA1alMtHwUO69oGMKAnrqxd98EE9BhXuzkOELURIo%2BYPOsqhHjnCVM%2FLiXKv5LMTSh86bpmIdjIxCS1h6RqQhwMaEYX9bub0mh%2FHR405cY77DVG19JIiHhxnBFjGHsc9HvYp%2BKs8wsNPSyQY6pgFx6JH%2BhPhWsY4U9uqxs8KhQOZ3%2Bv6lknFKV02f%2F11HhsOuLr6n7XOB%2FEFoLbOZskB%2F1uU9qYMHok3Xlx2ey7jvegf1LxMzFOYOqkjxfxmOHLVdF7eBlm62g3R7jDQ9U2rI6%2BiIXuQBTbdyi6J7wYSFdML%2BfJgdiTgfXhzW8%2FVhJVN%2BFbjI5JdnP7Pfscls8Tmq5P9LkDEB5LYqrA0Kde4LpgyYmUWi&X-Amz-Signature=6fb0c88bd37488eb16e704e7a984c3dcfe743e1a769a349762db451c66bdd885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

