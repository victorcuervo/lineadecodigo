---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664426LWIJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDvQXjGhqom5YaTJFabxh8EZCibBWifaP8hIT1p4NzpAiEAscorYVCXYvOtlhonY96X8qbXK9OXsk1tkcFYxlLAoOwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJab8trv5IblTLE8uCrcA0LBTdnay17VD8R1s2Qtk%2FQlqLcGY6qNix%2Fw1LLTKns0qBdMzkGeDnkv2w%2FbBMG%2B1AQIDFbwjXUlx19XCGE8DdCz7j8SmMLdgM9LGDaqYITH%2FFZ7TWAcu8RjPXm4DtVZzqhWzw9GGwOVFXY%2BDcrdTXkiakGblgg5jzwQFIx3blw1uTaDKS9N%2FblQ1708sAR9EMZNGfrvHJo4kLz2ae3zEzeJ2eyMrRTrEE6hxbfWfN7%2BhdiZVP%2BMByfMKq32UlI1H1FbPTri69c5v9Bfe6yHLOE1OXuzBkv8BTjaZi2xlkKGENo7OXHxkwJaz4DFEMa1A4Az2KFmeljSIFjseX36SuHEiNoWedKTr3cmzK4GIp076VHHc9WRZtG8OjrO7sTSfh3vdQmoxSw2WVg7mHDDYfzvZS5KlLXAzIymnTa%2BnE2Eq2KSh0QIDsI2fKP%2BJwz0e4AuZHQTEKoB8ASOvhdtyNM5jKAYqTfnG%2FXIdeBdQ4hb58gXPoPbi8i7jGyDBGO7NM6pNt1Pqdg%2BVVaFwxtNt%2FDNVaSkCKzUeusgroXlk3eSmbyI1MwGjTh29K3krJQ3AsdDa4Barv8bdOALmWe6vAHx1qRTPwXp9MW9cWIlpStGh4XLe4rYmWNUrlueML6Z1ckGOqUBpDD5ec%2Fnjhp%2BhyNfXdTC3ft1z0Sm%2BPoEut%2FniUA2%2BRe9ZyBvx39OoXDSB0oPg8UNhOUC5Y7NKzFI0rVnfxjJUUGhxoHIuM%2BIDN7iWRXuIvCe91BEU%2B24qJZEp7P7wJwnAVJrHmHzBPMBXy6w9fporV2k%2F6nosH6KZcKW9mzxfXtFt%2B3lSGqw7uPh7xqQR%2BvKx5khOmAs7W9IbXt44TT6Ilf04JpM&X-Amz-Signature=995359a5cbc24ada102e305d12e188243ba1003ef6e7bcfa1ba566d2ca6307d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664426LWIJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDvQXjGhqom5YaTJFabxh8EZCibBWifaP8hIT1p4NzpAiEAscorYVCXYvOtlhonY96X8qbXK9OXsk1tkcFYxlLAoOwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJab8trv5IblTLE8uCrcA0LBTdnay17VD8R1s2Qtk%2FQlqLcGY6qNix%2Fw1LLTKns0qBdMzkGeDnkv2w%2FbBMG%2B1AQIDFbwjXUlx19XCGE8DdCz7j8SmMLdgM9LGDaqYITH%2FFZ7TWAcu8RjPXm4DtVZzqhWzw9GGwOVFXY%2BDcrdTXkiakGblgg5jzwQFIx3blw1uTaDKS9N%2FblQ1708sAR9EMZNGfrvHJo4kLz2ae3zEzeJ2eyMrRTrEE6hxbfWfN7%2BhdiZVP%2BMByfMKq32UlI1H1FbPTri69c5v9Bfe6yHLOE1OXuzBkv8BTjaZi2xlkKGENo7OXHxkwJaz4DFEMa1A4Az2KFmeljSIFjseX36SuHEiNoWedKTr3cmzK4GIp076VHHc9WRZtG8OjrO7sTSfh3vdQmoxSw2WVg7mHDDYfzvZS5KlLXAzIymnTa%2BnE2Eq2KSh0QIDsI2fKP%2BJwz0e4AuZHQTEKoB8ASOvhdtyNM5jKAYqTfnG%2FXIdeBdQ4hb58gXPoPbi8i7jGyDBGO7NM6pNt1Pqdg%2BVVaFwxtNt%2FDNVaSkCKzUeusgroXlk3eSmbyI1MwGjTh29K3krJQ3AsdDa4Barv8bdOALmWe6vAHx1qRTPwXp9MW9cWIlpStGh4XLe4rYmWNUrlueML6Z1ckGOqUBpDD5ec%2Fnjhp%2BhyNfXdTC3ft1z0Sm%2BPoEut%2FniUA2%2BRe9ZyBvx39OoXDSB0oPg8UNhOUC5Y7NKzFI0rVnfxjJUUGhxoHIuM%2BIDN7iWRXuIvCe91BEU%2B24qJZEp7P7wJwnAVJrHmHzBPMBXy6w9fporV2k%2F6nosH6KZcKW9mzxfXtFt%2B3lSGqw7uPh7xqQR%2BvKx5khOmAs7W9IbXt44TT6Ilf04JpM&X-Amz-Signature=c72addc37906b7dafd0e7bea9bbc296076802a3556bf0e7cc311ef49600f70fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

