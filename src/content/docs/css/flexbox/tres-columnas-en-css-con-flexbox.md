---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTJ7TF3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGWM44MzITw%2FjRoA13EaHaYCB6cIcj0iA%2FURybIIASt4AiEA6n%2BBZlvj2fysh9Ujp6X1FPr09fXRK8x%2BEr0XR0Wk4JEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGiNVNQA3mmzaiQqjyrcA4Jx8kvOZ1WvfiPw7XRgPh%2F5BcymeEPNCL%2Ffh0wD190jE2ekaGa4eoqFs%2Fq4lieSZo0J9IAKK8n8lfS54xjRPoy4pGIfsSNt3PZq6v8xtXD4mFOrfwGFJZcZ0XdWhO91NrplAF%2BvPDH8xCmNJvjMBtUD5seb6gmkGDXz48PntESKpBQWD2VW%2FeSxMmP6evGHchXwxjSiFtYimV%2FtDs1bjJjKKzPXf4KjssQd%2FvERnJ2E5adVThIEPljoAYfC%2BmcxVc0759oFYs%2BVkdv9T662MdkTY8k4LqF%2FLLwnbV3WZZXoudK3%2BirReH2LZj0vD1k6%2FR6i2FM8O9x4jq4S78s2ec5ghBpCbKzsPdYNQxY3T7jDHHam2MO5zbOGZwObO4WcziYkQBDXV35%2BytIYUdLKw00Jq0ey1OJc5rq7tV5VXDMWJnSsa9LzNFmXlV2OUJpy4fYDPZPaBP2FHHlX5u%2FO3POoFyXlXvDzw4v%2F3ju6YDzkf9%2BA9EKkVLixTUcGNvtTBfCsPF6dTlCVEohS2gFJMPEfP2FQRCbd9LIo4EILyNdgxe%2F%2Bt9vW2g9CD960VnwrcrDW2Dt99qnl4wE5L5NMtXW8wy8nruM9LCJmcgKaeqoxDTAsc8qVhqs50LXXMOKExckGOqUB3IHA2xXs%2FLQZu83lkXk%2FJ2jKqXojUsIDNgrCJztXKsOR7MWW0fuYvU0q%2FTzRShH6Vc4InIGlVTHZsxQW%2F39TkbLSoxJ4sO%2By9G0AEOH14hiY%2FjlloSfaXSd2RSPOetvnHu%2FS2PM3ZcXhdNKepZU4VjfcYdkC9KfQ8AL1yHb2HgCnzXX%2BmyHlRhU0ifiKIBnwSqdrH8uVFdadFKCpuT7U%2F%2BhNIUIn&X-Amz-Signature=8beb243bc57472c5a799fe729ebf1fa316cfabdfdaa46349319a200eaedefc38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTJ7TF3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGWM44MzITw%2FjRoA13EaHaYCB6cIcj0iA%2FURybIIASt4AiEA6n%2BBZlvj2fysh9Ujp6X1FPr09fXRK8x%2BEr0XR0Wk4JEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGiNVNQA3mmzaiQqjyrcA4Jx8kvOZ1WvfiPw7XRgPh%2F5BcymeEPNCL%2Ffh0wD190jE2ekaGa4eoqFs%2Fq4lieSZo0J9IAKK8n8lfS54xjRPoy4pGIfsSNt3PZq6v8xtXD4mFOrfwGFJZcZ0XdWhO91NrplAF%2BvPDH8xCmNJvjMBtUD5seb6gmkGDXz48PntESKpBQWD2VW%2FeSxMmP6evGHchXwxjSiFtYimV%2FtDs1bjJjKKzPXf4KjssQd%2FvERnJ2E5adVThIEPljoAYfC%2BmcxVc0759oFYs%2BVkdv9T662MdkTY8k4LqF%2FLLwnbV3WZZXoudK3%2BirReH2LZj0vD1k6%2FR6i2FM8O9x4jq4S78s2ec5ghBpCbKzsPdYNQxY3T7jDHHam2MO5zbOGZwObO4WcziYkQBDXV35%2BytIYUdLKw00Jq0ey1OJc5rq7tV5VXDMWJnSsa9LzNFmXlV2OUJpy4fYDPZPaBP2FHHlX5u%2FO3POoFyXlXvDzw4v%2F3ju6YDzkf9%2BA9EKkVLixTUcGNvtTBfCsPF6dTlCVEohS2gFJMPEfP2FQRCbd9LIo4EILyNdgxe%2F%2Bt9vW2g9CD960VnwrcrDW2Dt99qnl4wE5L5NMtXW8wy8nruM9LCJmcgKaeqoxDTAsc8qVhqs50LXXMOKExckGOqUB3IHA2xXs%2FLQZu83lkXk%2FJ2jKqXojUsIDNgrCJztXKsOR7MWW0fuYvU0q%2FTzRShH6Vc4InIGlVTHZsxQW%2F39TkbLSoxJ4sO%2By9G0AEOH14hiY%2FjlloSfaXSd2RSPOetvnHu%2FS2PM3ZcXhdNKepZU4VjfcYdkC9KfQ8AL1yHb2HgCnzXX%2BmyHlRhU0ifiKIBnwSqdrH8uVFdadFKCpuT7U%2F%2BhNIUIn&X-Amz-Signature=24cb131d4366e6ae065b0facd09ae3ecfb70280a96ea1aad08d8e0ca9353d8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

