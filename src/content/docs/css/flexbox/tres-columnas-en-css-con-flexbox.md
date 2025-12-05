---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7GI2FAJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXrpsOwOdzovSQEkeaqNK8%2FAYf6CAOhu8zjzHVywBG%2BwIhAIhwardGhi1xTv%2FJdZWHaWNTQpWWWzh1wKp1SBFy4ZyGKv8DCFUQABoMNjM3NDIzMTgzODA1Igw1r2NiaQTF5L1kt1Mq3AOIrm%2FOYodZBBvj71eN3%2Fsp%2F%2FrL0q35wSDJDC61T6JLwjAFs%2Bfhzt6dvCwDNylIsbIHNkMUhwDJb3i6CZIm4HTnP1Yko76rPqHFGxK8mKwQKa9lakQZ1wSjRokgGJKx5c1HrFwd%2B4p6jYPzt0hdLlDF0pjwwlHaWCHA6AMvbgMC64OAxYicrZ%2F2QNDHnnIy9JrsEY0Obk38%2Bl4xoWYcSSDMp3AEwgNrvGhh5q3ZK4dTAXDu5j7i0kv4y1NgdAm3U0qTkRqc8%2FnKRuHB9UzxTiVhgG22GX2KvBdaP2uIDxFEgonkFc8fiYyY73YElJ5hsx3mAwAOoQv2g7DY3zYm8OyCpbSZ3qTocJyzwm13kUbHNhANG3jQ7VLHp2B%2FIdl0ITipFSIOKW%2BzUsVoxg%2BU0BQHGcYKQn6G1zKOJgqhAUZwW6IYh1GxAG%2BgBJNKxY2B5PHx7rht6SIsj9j5W2K%2FTl0OLOe16Y%2FCeHNOPBZWCQSiEm9HZ9VeyYxx30YMwKpUUyptTCLcgex0n%2FSAzDdI4HYr5yuMYmmyymGWuLoR8lt8JRhU1wYzrP92xoHS48z3WOttqXl8n9ZPOGIXVwm91VG9aEw4MG0BUpxfPLH6UML2pXBYVgPH6D7pNhVCwDDKssnJBjqkAf3BcmybS5MaRSYPo%2BZRKlnjZGALsEYJyEeAxuJspbif4bC%2FGgUtKIf0qmkS9ayJ7paaVFtBmdrRleiOv0AB2ce4Iwu%2FMK8JL7%2FBcy9VSZm2pXj90dbwzzll7ESbBtuu7KEYbTNHj01Jj5AWPWKhd4f%2B95%2FJ%2BpD7JkE8fN8LYfXi8AslZuVzICmwVLy4TUTg45sSb3AJqSU49z5WVnkpuC8Zqy5b&X-Amz-Signature=9544bbfd2bf5200dc91ea7590e07011c4cdf2c02332d89def7e8e3214130ce06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7GI2FAJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXrpsOwOdzovSQEkeaqNK8%2FAYf6CAOhu8zjzHVywBG%2BwIhAIhwardGhi1xTv%2FJdZWHaWNTQpWWWzh1wKp1SBFy4ZyGKv8DCFUQABoMNjM3NDIzMTgzODA1Igw1r2NiaQTF5L1kt1Mq3AOIrm%2FOYodZBBvj71eN3%2Fsp%2F%2FrL0q35wSDJDC61T6JLwjAFs%2Bfhzt6dvCwDNylIsbIHNkMUhwDJb3i6CZIm4HTnP1Yko76rPqHFGxK8mKwQKa9lakQZ1wSjRokgGJKx5c1HrFwd%2B4p6jYPzt0hdLlDF0pjwwlHaWCHA6AMvbgMC64OAxYicrZ%2F2QNDHnnIy9JrsEY0Obk38%2Bl4xoWYcSSDMp3AEwgNrvGhh5q3ZK4dTAXDu5j7i0kv4y1NgdAm3U0qTkRqc8%2FnKRuHB9UzxTiVhgG22GX2KvBdaP2uIDxFEgonkFc8fiYyY73YElJ5hsx3mAwAOoQv2g7DY3zYm8OyCpbSZ3qTocJyzwm13kUbHNhANG3jQ7VLHp2B%2FIdl0ITipFSIOKW%2BzUsVoxg%2BU0BQHGcYKQn6G1zKOJgqhAUZwW6IYh1GxAG%2BgBJNKxY2B5PHx7rht6SIsj9j5W2K%2FTl0OLOe16Y%2FCeHNOPBZWCQSiEm9HZ9VeyYxx30YMwKpUUyptTCLcgex0n%2FSAzDdI4HYr5yuMYmmyymGWuLoR8lt8JRhU1wYzrP92xoHS48z3WOttqXl8n9ZPOGIXVwm91VG9aEw4MG0BUpxfPLH6UML2pXBYVgPH6D7pNhVCwDDKssnJBjqkAf3BcmybS5MaRSYPo%2BZRKlnjZGALsEYJyEeAxuJspbif4bC%2FGgUtKIf0qmkS9ayJ7paaVFtBmdrRleiOv0AB2ce4Iwu%2FMK8JL7%2FBcy9VSZm2pXj90dbwzzll7ESbBtuu7KEYbTNHj01Jj5AWPWKhd4f%2B95%2FJ%2BpD7JkE8fN8LYfXi8AslZuVzICmwVLy4TUTg45sSb3AJqSU49z5WVnkpuC8Zqy5b&X-Amz-Signature=e94d23eb850c20f9f9d6c4cd57ae03ed4a44da238adcd2554bc763ed72e07d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

