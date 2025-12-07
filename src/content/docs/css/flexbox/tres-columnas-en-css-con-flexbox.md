---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZHEUJP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV2TnsoobSAxT2tQuHAkxFIVP24F7dTI%2F2ka223o7irwIhAPeb0OJDioTqSg257%2F6aimKo70HYzPP5159J7QP%2BdiS3KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwvvLnP0MsfhGtcpgq3AM1kZzGDXA2QtUtlnXWlw8YtXpBWoZ9UXAMZ%2BsUyPz3TJJt5Y6b%2BPicrDL%2B0VmltdAuj7vWp7kgJ%2BglFOw%2FOEOTXtZhTcEvGQLc466pZ9o7b7buakQLIBGQ85gsJs7DKudaHH1pSvDpbWGaYLWDq1%2FH9C%2FGcXuDyMuyMpe9ZN%2FYQ9sPpxwvLJ8v6EX5iOrolPgT55rlOUbjQ6Y3J1AblYgcw%2Fvwm9%2BbZSW6e7LwAPwVbf6prGLkTXhyYyLnOe4NOaz4eHs5AZSxaKzxgzKaTKfd71Le%2B1eBYmG%2Bf1NLO5lhDEEF%2FzcHyJ1SDbeFx2n9PAfBGHsgrJGIBkkiSp8zh4H%2Bp8RwEu1jYimzwVRkdORhG72P9VzhwS0D5VK3yWhm3TAj4sduz39toRrHwOGa4WpO9xu%2FalPSbI1NIgJeeblxUppO09jiDCIRvResItHyhHL%2BwHjqmn0v1T%2Fphcc0amNzqy0qHlPxvPMr0NhPhgmv4a6BitAq9tnkNQZqXN9G8GgyVu%2BHkonm2zYfDEWhU0R7M6Zc6AASJUdOkn7oEzJnG0DX05Dx%2FlxIU90LONfF%2BuCpMfAQDf8DwWNpHXEbdT3W%2F0vgewP99n7eOxqtKDyWLV57swEPJJcVjpjJBDD0x9fJBjqkATCAr%2Fmzbz%2BzGGrmvj43ro4c60qf8Lzx1XE2WpBAbxV2h1fp4TeZZoRUJYMVi6jQ4n6i293lrMpvFzg2LRn%2B3lvJIN56%2FujRcEFhVTOfBEom5znpbRze4I5%2B2WscwoMDrqEMjYAimrGTUncWCOc6AwUFGyKm0flvPBbvIvB%2FyQtmIa80MGodYKlzVoefbmPmkK6sSJgN%2BP9xJZgWRtbuQUtsLySy&X-Amz-Signature=f260675a77ac4da7b24679753c2aa62c74cbe3873c9a50538797762df6f1e317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZHEUJP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV2TnsoobSAxT2tQuHAkxFIVP24F7dTI%2F2ka223o7irwIhAPeb0OJDioTqSg257%2F6aimKo70HYzPP5159J7QP%2BdiS3KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwvvLnP0MsfhGtcpgq3AM1kZzGDXA2QtUtlnXWlw8YtXpBWoZ9UXAMZ%2BsUyPz3TJJt5Y6b%2BPicrDL%2B0VmltdAuj7vWp7kgJ%2BglFOw%2FOEOTXtZhTcEvGQLc466pZ9o7b7buakQLIBGQ85gsJs7DKudaHH1pSvDpbWGaYLWDq1%2FH9C%2FGcXuDyMuyMpe9ZN%2FYQ9sPpxwvLJ8v6EX5iOrolPgT55rlOUbjQ6Y3J1AblYgcw%2Fvwm9%2BbZSW6e7LwAPwVbf6prGLkTXhyYyLnOe4NOaz4eHs5AZSxaKzxgzKaTKfd71Le%2B1eBYmG%2Bf1NLO5lhDEEF%2FzcHyJ1SDbeFx2n9PAfBGHsgrJGIBkkiSp8zh4H%2Bp8RwEu1jYimzwVRkdORhG72P9VzhwS0D5VK3yWhm3TAj4sduz39toRrHwOGa4WpO9xu%2FalPSbI1NIgJeeblxUppO09jiDCIRvResItHyhHL%2BwHjqmn0v1T%2Fphcc0amNzqy0qHlPxvPMr0NhPhgmv4a6BitAq9tnkNQZqXN9G8GgyVu%2BHkonm2zYfDEWhU0R7M6Zc6AASJUdOkn7oEzJnG0DX05Dx%2FlxIU90LONfF%2BuCpMfAQDf8DwWNpHXEbdT3W%2F0vgewP99n7eOxqtKDyWLV57swEPJJcVjpjJBDD0x9fJBjqkATCAr%2Fmzbz%2BzGGrmvj43ro4c60qf8Lzx1XE2WpBAbxV2h1fp4TeZZoRUJYMVi6jQ4n6i293lrMpvFzg2LRn%2B3lvJIN56%2FujRcEFhVTOfBEom5znpbRze4I5%2B2WscwoMDrqEMjYAimrGTUncWCOc6AwUFGyKm0flvPBbvIvB%2FyQtmIa80MGodYKlzVoefbmPmkK6sSJgN%2BP9xJZgWRtbuQUtsLySy&X-Amz-Signature=95e6c427ae81fe0e30749b2009050211574cabe92fdd5130aca644a3c61cc970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

