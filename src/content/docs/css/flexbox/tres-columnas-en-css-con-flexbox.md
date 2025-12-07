---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUITVMQY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FE%2BAK%2Bo7CzZ%2BRQ%2BSr1H2%2BosUx8XMs3sTB49PC4qJvuAiBauBiFxLN0ryRixmnutVW%2F%2BEZWaHFcB6vKlsUypLW7vyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9LPZoTnjTYMlJmhzKtwDQls2urbR02gR4e01K0gl2jC7WvkEAaQ8UEmwpBLEClCl%2BMMVHde4eaL%2Fu3f%2FoO5%2BkrJrd7x6z%2FIDH3b0iyM0wdp44kkkYErbGjYe315MupklKa3O9%2FDbHtJylEddkbC5jQGJkvG8nF2623gdugKKvx4H%2BcA3g%2Bvu%2BPeIfS8H%2FWsXL09BbIU27LI6p8nr0PaX5e%2BrQYWAW%2Fl32lSOJxBzDpIr1KGq7VxcFsAOs7MqV1pRatTXxeL8iWgb3ViuTL4HguVOqru9eeST%2FPLxD8m4QHvCGD53BisPbsxRRXF0YRJQgntKbrlCl4lXptviucSRZCe3AOLpx%2F0yyRajm3yjfHaA4RIAlhLoFXpl7LNnI8ir6RIMRYtCqjGybYrjbk6uuu%2BmawkFOuwMkKTwcmVzPm%2F2g4tEXwQqold%2BsKTOq4P0YB7%2BLNWaMF8uj5wiEXEW0ccVSiarVT6keB5rAfuVo%2B%2BfxTyAHHWojcmPKGrDSWVwLn%2BAKH%2BKGD1clhybGvOrbjYuyFHagKFyM6%2BMKSEcag44Ox3wOCJbwpwbGsrcRShEF0%2BNfs3x7Xd1%2FMXfRJleUP03yu1OnvcVXEKNeWRjLoUuPtiAHGeTmubMH%2FE2O2fxxu2itvUe8sY%2FcQcwqLjWyQY6pgGWcz%2FD3zN0AIsU2u8QdK2S5cty48n8Ac4IF30P0jF0%2BXqEokhGKFEW4W%2FcVZ1%2FYLea2tzLkWNubJ%2FiwLgC1SDWDAY73WdF4Uh3uyvqo9CDaZV9KrApo7l7NXU4VFryK6PWnmWIz79lVba%2FntoITNXWVi8tFbB5KTEhHlOlommP08TiEGDWha2yOk6LFvWoHGQD1hRLVBX%2BhGL55mn3EqQ%2FXMqiXBHI&X-Amz-Signature=eb59b3d14fc9253777313a7d7ba6a9b0b9001463915f6a7f06d5568b4e19bd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUITVMQY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FE%2BAK%2Bo7CzZ%2BRQ%2BSr1H2%2BosUx8XMs3sTB49PC4qJvuAiBauBiFxLN0ryRixmnutVW%2F%2BEZWaHFcB6vKlsUypLW7vyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9LPZoTnjTYMlJmhzKtwDQls2urbR02gR4e01K0gl2jC7WvkEAaQ8UEmwpBLEClCl%2BMMVHde4eaL%2Fu3f%2FoO5%2BkrJrd7x6z%2FIDH3b0iyM0wdp44kkkYErbGjYe315MupklKa3O9%2FDbHtJylEddkbC5jQGJkvG8nF2623gdugKKvx4H%2BcA3g%2Bvu%2BPeIfS8H%2FWsXL09BbIU27LI6p8nr0PaX5e%2BrQYWAW%2Fl32lSOJxBzDpIr1KGq7VxcFsAOs7MqV1pRatTXxeL8iWgb3ViuTL4HguVOqru9eeST%2FPLxD8m4QHvCGD53BisPbsxRRXF0YRJQgntKbrlCl4lXptviucSRZCe3AOLpx%2F0yyRajm3yjfHaA4RIAlhLoFXpl7LNnI8ir6RIMRYtCqjGybYrjbk6uuu%2BmawkFOuwMkKTwcmVzPm%2F2g4tEXwQqold%2BsKTOq4P0YB7%2BLNWaMF8uj5wiEXEW0ccVSiarVT6keB5rAfuVo%2B%2BfxTyAHHWojcmPKGrDSWVwLn%2BAKH%2BKGD1clhybGvOrbjYuyFHagKFyM6%2BMKSEcag44Ox3wOCJbwpwbGsrcRShEF0%2BNfs3x7Xd1%2FMXfRJleUP03yu1OnvcVXEKNeWRjLoUuPtiAHGeTmubMH%2FE2O2fxxu2itvUe8sY%2FcQcwqLjWyQY6pgGWcz%2FD3zN0AIsU2u8QdK2S5cty48n8Ac4IF30P0jF0%2BXqEokhGKFEW4W%2FcVZ1%2FYLea2tzLkWNubJ%2FiwLgC1SDWDAY73WdF4Uh3uyvqo9CDaZV9KrApo7l7NXU4VFryK6PWnmWIz79lVba%2FntoITNXWVi8tFbB5KTEhHlOlommP08TiEGDWha2yOk6LFvWoHGQD1hRLVBX%2BhGL55mn3EqQ%2FXMqiXBHI&X-Amz-Signature=4af816e61ccc07bafece19ab3fdf5eb6fbe133fccf5c43158d727cc0c20f5c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

