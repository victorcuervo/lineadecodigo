---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHLZ4JTL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2HZpU4ixR8j1PcFEIVe32VN92LpNHMgMC27MPRLjTBAiBUbzKBRuh%2F8F3xXI1zPoGaxmTQadMZ0LbUabcfgO96%2BSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMvOm2PCPGol%2FU7YuqKtwDXmRJ9dG3YuREh86EKTiDJfrMuPfW%2FwWwWYOL9RAn%2FUfGhOHxF6vfVr2Hbq8i09opBnxRNlooGwGvSMNlmDrxYuBVYmazJOAbbUrhaVFyeTyJBMphjIgwvIF%2B0nktvfWMmQpOmNNOJL6wQmTdLQMCgLKAJ5XjChGyfAfp0WHXsRJEMf6rhb6cajtDGsGw42oZc2rDVDizdNwKaYEMYVoBpiO9ajC%2F9p%2BIzEjWlNaGGsAXLCWHjhYguYlmTasLgCDGmJDGI58X4oPjD%2B%2FEXArHEuBtP3wNlWbXyLKq3itKCm4ovOwSwZvAtD0g6eEmmYPHNNSqPMiszr78VkWZXKoPoaBQC%2BWKp%2BsMLNGRtvMDk7JV7kaJoTxTnZnoWYW4v6cji4KRjTm90Tl2Tatj4rjLl%2FsysKAsQpc6O3gSqRPCl3yo5dYREgR%2FVfjqVRK%2B%2FkBtGmrABqTczGaQbX4R9h%2BhDH2Hmr%2FmhY%2FQTtSblDcSNc4fFZj9VftkAbxm08KJb9ePDp7N%2F%2FhDJI%2B0KgD%2FcsoUVpLtswwgVAI1mMYkJvWx4SyrS1dgnFIjB8w2dV6MNc3a9Z6OK83q9gj2rtQGNy0rTpL5xkpWjqG9N4tNMHKc5bI9CS9c5tE2mF7g%2Bscwo9TSyQY6pgFQRB%2B0dnyHQVMp6g%2BdAD7OXPWyH5OVytydFpApzG6RbjwWwpBv7Euswbp1AJ8JwbJrNXMx44x5cVd0q7ml2Ru8HwxFM%2Bg%2F39epRJ6zrLe%2B3eAI1g3avRkDKve6mbGspvmuUF3zXzv6Hwv6Bjm8vyte3MSuJ4iioP0d7HXI9Bn%2Fo5TqRDmY8U7empWzL9FoRHVeK53PP48eaYVGGOM9pfhiUImOvg7z&X-Amz-Signature=e09c93ac586861b197ec04f4339d68fcf6d687d85f30f0efdd01da1a6ad9d879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHLZ4JTL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2HZpU4ixR8j1PcFEIVe32VN92LpNHMgMC27MPRLjTBAiBUbzKBRuh%2F8F3xXI1zPoGaxmTQadMZ0LbUabcfgO96%2BSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMvOm2PCPGol%2FU7YuqKtwDXmRJ9dG3YuREh86EKTiDJfrMuPfW%2FwWwWYOL9RAn%2FUfGhOHxF6vfVr2Hbq8i09opBnxRNlooGwGvSMNlmDrxYuBVYmazJOAbbUrhaVFyeTyJBMphjIgwvIF%2B0nktvfWMmQpOmNNOJL6wQmTdLQMCgLKAJ5XjChGyfAfp0WHXsRJEMf6rhb6cajtDGsGw42oZc2rDVDizdNwKaYEMYVoBpiO9ajC%2F9p%2BIzEjWlNaGGsAXLCWHjhYguYlmTasLgCDGmJDGI58X4oPjD%2B%2FEXArHEuBtP3wNlWbXyLKq3itKCm4ovOwSwZvAtD0g6eEmmYPHNNSqPMiszr78VkWZXKoPoaBQC%2BWKp%2BsMLNGRtvMDk7JV7kaJoTxTnZnoWYW4v6cji4KRjTm90Tl2Tatj4rjLl%2FsysKAsQpc6O3gSqRPCl3yo5dYREgR%2FVfjqVRK%2B%2FkBtGmrABqTczGaQbX4R9h%2BhDH2Hmr%2FmhY%2FQTtSblDcSNc4fFZj9VftkAbxm08KJb9ePDp7N%2F%2FhDJI%2B0KgD%2FcsoUVpLtswwgVAI1mMYkJvWx4SyrS1dgnFIjB8w2dV6MNc3a9Z6OK83q9gj2rtQGNy0rTpL5xkpWjqG9N4tNMHKc5bI9CS9c5tE2mF7g%2Bscwo9TSyQY6pgFQRB%2B0dnyHQVMp6g%2BdAD7OXPWyH5OVytydFpApzG6RbjwWwpBv7Euswbp1AJ8JwbJrNXMx44x5cVd0q7ml2Ru8HwxFM%2Bg%2F39epRJ6zrLe%2B3eAI1g3avRkDKve6mbGspvmuUF3zXzv6Hwv6Bjm8vyte3MSuJ4iioP0d7HXI9Bn%2Fo5TqRDmY8U7empWzL9FoRHVeK53PP48eaYVGGOM9pfhiUImOvg7z&X-Amz-Signature=bd62133a4a29d51d87e9bd936aa066f66766c0184d456b0aae39efd04b55953a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

