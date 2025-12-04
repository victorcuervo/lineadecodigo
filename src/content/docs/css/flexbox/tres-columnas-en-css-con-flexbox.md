---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B6HW7RT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEQ6zLNLNu1bBGZiIS3mPLmSYrTFKdfMA%2BrnYa7EzS8vAiA78VohgbBtDawPNLR7ZsGdbuXvaLyD76TiJ9iOgwHlpyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2BYDgDrzf9kUsRcYVKtwDEur1Oa991E3I84Utk0R8zuK%2BnS%2BjIhdXZ8MY0anoNiRNirkIRtHhLuI3vEDDfETZRlpzdjxghciLC59oq%2BJhz6oyBad76dT8xq%2FIoE8AVn5xtXKDJ%2BHRYxVMri6YsWp0cG4SOdwPAYJCWg7TmjWDCyWJfuAENFL9OM1fNndHdj8IJCIQ0hsNLDLenQLqJ220yTKlNrqRnU8h19a8qGGF7fL2Q6zG0MdjQU8ObyBGIx04K2kaiNlf5ByzS%2FRJP7wG64od5Wh6iYjKoHpg2fpRedkM0HOvAdSHnFmvV37KJMlmalM8yBIZMzvFMkA3U3xAx3OKXfwAeVFEZo2zv5%2FWq2%2Fs7hnLZ7DreXc4hDPZnJgtGks9qLHtWYnkKBn%2BDWrjMHDe%2BXVyBpdkYtSaR5CQoZcKSdSRUttN169U1tsUDS49Q9tFK9jWARaagJIxPH3N68OyD%2FtKcxKTEhUiIu1nZtq7yur6ZJFVyW%2FtFP3iYwf9N4fwjgF8cFNu%2BKRo2ZIMmwbhCuMRa8Yksfk1FeQBDJsjm5HojNuL6FH3iJJIlzlcB3YELT8VAleZnxybLsXHqYn3xsnFqQZ7m36IsMMWTqoYnMDvE9quAGC60ZTVD3fArK8K%2F%2Bv1ws3xHRswjenEyQY6pgGCI%2F3fXMNFHx5ZN37%2BInL5LHOhgeNqXlVTB88TVmhYhXn4P%2Ba%2BXVx4NEsmXkuVWINPl1aSZA9eHDJCkx1S2IsFyYORwqPoxP66ZtrUacEShOyMmLGMONPXMlI8ZRaSSD516HSDkrn0P2eiDn97o97vnSEGkEoAUaBfiAOJ4cg2cXV31bAVt4j4GeCQBEPinx3Wbku4tlUB4Xr%2FCuWN4l54eiN7C8iq&X-Amz-Signature=1b6faf70fa4c3b0da3410cc3c4f3a118c70bc09fdc86ae07753dde5ec3aa6349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B6HW7RT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEQ6zLNLNu1bBGZiIS3mPLmSYrTFKdfMA%2BrnYa7EzS8vAiA78VohgbBtDawPNLR7ZsGdbuXvaLyD76TiJ9iOgwHlpyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2BYDgDrzf9kUsRcYVKtwDEur1Oa991E3I84Utk0R8zuK%2BnS%2BjIhdXZ8MY0anoNiRNirkIRtHhLuI3vEDDfETZRlpzdjxghciLC59oq%2BJhz6oyBad76dT8xq%2FIoE8AVn5xtXKDJ%2BHRYxVMri6YsWp0cG4SOdwPAYJCWg7TmjWDCyWJfuAENFL9OM1fNndHdj8IJCIQ0hsNLDLenQLqJ220yTKlNrqRnU8h19a8qGGF7fL2Q6zG0MdjQU8ObyBGIx04K2kaiNlf5ByzS%2FRJP7wG64od5Wh6iYjKoHpg2fpRedkM0HOvAdSHnFmvV37KJMlmalM8yBIZMzvFMkA3U3xAx3OKXfwAeVFEZo2zv5%2FWq2%2Fs7hnLZ7DreXc4hDPZnJgtGks9qLHtWYnkKBn%2BDWrjMHDe%2BXVyBpdkYtSaR5CQoZcKSdSRUttN169U1tsUDS49Q9tFK9jWARaagJIxPH3N68OyD%2FtKcxKTEhUiIu1nZtq7yur6ZJFVyW%2FtFP3iYwf9N4fwjgF8cFNu%2BKRo2ZIMmwbhCuMRa8Yksfk1FeQBDJsjm5HojNuL6FH3iJJIlzlcB3YELT8VAleZnxybLsXHqYn3xsnFqQZ7m36IsMMWTqoYnMDvE9quAGC60ZTVD3fArK8K%2F%2Bv1ws3xHRswjenEyQY6pgGCI%2F3fXMNFHx5ZN37%2BInL5LHOhgeNqXlVTB88TVmhYhXn4P%2Ba%2BXVx4NEsmXkuVWINPl1aSZA9eHDJCkx1S2IsFyYORwqPoxP66ZtrUacEShOyMmLGMONPXMlI8ZRaSSD516HSDkrn0P2eiDn97o97vnSEGkEoAUaBfiAOJ4cg2cXV31bAVt4j4GeCQBEPinx3Wbku4tlUB4Xr%2FCuWN4l54eiN7C8iq&X-Amz-Signature=97c88956383147d4aa73e9558fdca2153d5ef4631fa7b952048cca2cc4c5f72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

