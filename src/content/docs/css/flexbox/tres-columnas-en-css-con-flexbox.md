---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Z3BVC4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIH6GfcgNNR28EuFSt%2BzNE89C84qngPFFMJVLWYzt5NsfAiAM1Si7e%2Fl%2BpnHs4rXwmrGdUgyaaCUPk9%2FslNRHlWsyeCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMCJcCF0Nj3QT%2FqOgqKtwDyoNhJIhQB6e71005Y6zQR3G7HWUvJ3qtv9IoYBBDwO%2BQDu8a0QUPscvePxrNXE8g4e4XTlaqdVXAqj6ZqEf1oTUZE3TEfYE1HYW7JGoHKEB7IjKABjbcqOWEmoh6v04DrfknESW2zMnE9C%2FyeGVQBobn%2BcGpXbCVXQoGZAvtwtoqN7%2BNy6yFzTJvwerQUdGTBgHHgmrJGUR3IoPYJwdgOeKWM6QYPKjazvJKXmBWbErx0p5nIwskU30tj9kaMedBWPeobDitdXJkFcF1FWalOV5xlDv5QfKGhd70nH3w0o6nqLtQMU87XhdIgdVDe%2BABkhH1ZTqtCfDW28gGJAJYMZANAU17YLmJKc%2BS1vkAy2OQyExASLgfhA8noQstff2U7u20UV36Fmfj%2ByxSIHDboRcoe5LfPzMfKrYkOEwUsvVa%2B%2F1PDBmJh%2BYtE%2Bo0RAlfJ%2BE7FUxmWcsWtxYomeDqminIftf2sNrEUz3btwMRTxGb9ywveKBeRZwKSLtgITyn%2BfulCvaFsU%2FqBmSEhBGhNXGov69ooQ6oSmUOX0mjITUAu%2BcBw2RmLsrbWMmqCTONPo21QkA83uXdiSRcChTjLim1xJ7PbD8Y%2Fn%2FV9%2FFp%2FkEXcyTXjLOae9Uk7jEwvrTDyQY6pgFhoiBpPaBhOUbS0QLp%2F8u%2BmE1gK4QXrmqOsEfZiPddrpYEFMQ6M2uQksLo6eFt78xRKBukSuNoaiLFKGrNLbznlkFbPDkkTK9O1eW0hxpaa51UUdS8ftS6tW2gSb1AQEch20ZVH%2FKYrm7BeCsCfo8Ak4pMBrHV0ATbh%2Fz4pXYEE8h5U4IVlG4WVpUomlOeEf2xKuuhEkoqPlm%2FkL8jB1GneLyvgUCj&X-Amz-Signature=88a763ed13cb76cd8650395c45c57062db365d315cb08c6743b3d21b265c1977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Z3BVC4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIH6GfcgNNR28EuFSt%2BzNE89C84qngPFFMJVLWYzt5NsfAiAM1Si7e%2Fl%2BpnHs4rXwmrGdUgyaaCUPk9%2FslNRHlWsyeCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMCJcCF0Nj3QT%2FqOgqKtwDyoNhJIhQB6e71005Y6zQR3G7HWUvJ3qtv9IoYBBDwO%2BQDu8a0QUPscvePxrNXE8g4e4XTlaqdVXAqj6ZqEf1oTUZE3TEfYE1HYW7JGoHKEB7IjKABjbcqOWEmoh6v04DrfknESW2zMnE9C%2FyeGVQBobn%2BcGpXbCVXQoGZAvtwtoqN7%2BNy6yFzTJvwerQUdGTBgHHgmrJGUR3IoPYJwdgOeKWM6QYPKjazvJKXmBWbErx0p5nIwskU30tj9kaMedBWPeobDitdXJkFcF1FWalOV5xlDv5QfKGhd70nH3w0o6nqLtQMU87XhdIgdVDe%2BABkhH1ZTqtCfDW28gGJAJYMZANAU17YLmJKc%2BS1vkAy2OQyExASLgfhA8noQstff2U7u20UV36Fmfj%2ByxSIHDboRcoe5LfPzMfKrYkOEwUsvVa%2B%2F1PDBmJh%2BYtE%2Bo0RAlfJ%2BE7FUxmWcsWtxYomeDqminIftf2sNrEUz3btwMRTxGb9ywveKBeRZwKSLtgITyn%2BfulCvaFsU%2FqBmSEhBGhNXGov69ooQ6oSmUOX0mjITUAu%2BcBw2RmLsrbWMmqCTONPo21QkA83uXdiSRcChTjLim1xJ7PbD8Y%2Fn%2FV9%2FFp%2FkEXcyTXjLOae9Uk7jEwvrTDyQY6pgFhoiBpPaBhOUbS0QLp%2F8u%2BmE1gK4QXrmqOsEfZiPddrpYEFMQ6M2uQksLo6eFt78xRKBukSuNoaiLFKGrNLbznlkFbPDkkTK9O1eW0hxpaa51UUdS8ftS6tW2gSb1AQEch20ZVH%2FKYrm7BeCsCfo8Ak4pMBrHV0ATbh%2Fz4pXYEE8h5U4IVlG4WVpUomlOeEf2xKuuhEkoqPlm%2FkL8jB1GneLyvgUCj&X-Amz-Signature=24a57aa10d46e6f85e7bf19d646928805d733638daaa6b0ad325e2b467d1a42a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

