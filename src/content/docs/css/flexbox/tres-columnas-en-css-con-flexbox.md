---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636LQ7HD5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHGPI%2B6WOesdm8zdVCNhb0pht%2B5Smt8%2F%2Blamni5dKSngIhAPL2FfTXOwM0zobxPYJPcQXo9GAbpeWGUAx3xFU99J6gKv8DCH8QABoMNjM3NDIzMTgzODA1IgyPN1Q8cAtS7r%2Fl9qQq3AOcMqx4fTxgz1X5PBwD0fAPEFYt5LC%2Fs%2BCbd%2BBdhvZh%2BC6WWid6fM0i87m3TuqLhXTHYu4sBfjs2DC%2Bm2ez4OSyv0qjy0SZYyYf%2BBbOEs5wNz39gpzDEHKXr2HqzE8%2BtZQ%2BcgmVz9C28G4udPM3TL7eh%2FAeUL9EgVx4NQ7A31t5HW4kxFZquQpYL1%2FZggOYuDAiEOb2gsLwnX%2B6tC2XVpNF2nSe4qO%2BbD3LLmFloxsdW%2BGMWcY29etC2EaHQp1kgjSoLwlI7GW4OWUPa%2FMDRdhRKIZkt4u8gvmFWhwudJuwsj5uiKqFbHsiUKIlJ4RXpojASf86rzG4WatLJIPshB%2F5R6%2Fnvr7rrSYYWKFGvyGq2V82or4we%2BsVnXTKCHM1XvAN9xbf7gOSgzCP4DH5iQViiR3admTHagaUTmW6ZxBIr%2Fxd9n3B%2FI%2Bi5rk137lb6Kbyah1oLolDGs%2Bc%2BzHqRlfBWWOwtOeJNEyVVvmVth2pckZtBEtxPlFbGz%2FWCSR1SB3GhAtSQwZByBuKCiHJerBt1Xue%2FL7CLgg6%2Bt%2B42zyVB5IqB7VzvBXh7Dellx7zabvXWfXgSTd9t%2BP0LxHgx07WtsJ8aZ4%2BLpyybssdXq05mSiu70Z0XmRj8hEvoTCs1NLJBjqkAUG8UVR2i3IOyHjWRJZu9DoxTkT6MMksZ5T3mSMypEhrsIWv7csPXEtNqDMDB505ffSoM796EhwACkuODeRq%2BzOn9j6JV8jSRUxgbE7kMXEyjEL6HQk4pVDlm9lxafov7s4AfH4Sav%2FpkUBWPE54FegtL19TwCQPX6osJy8wyiQGiU524zeeDY0b%2F%2BRI3vSKhHZnSWFOzBI1n3g5IIdJOf%2FVoOrV&X-Amz-Signature=9c1ed2b7b3d343afd04fe25a1aa448ca996a56c707a3233dc339bd62cdd85c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636LQ7HD5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHGPI%2B6WOesdm8zdVCNhb0pht%2B5Smt8%2F%2Blamni5dKSngIhAPL2FfTXOwM0zobxPYJPcQXo9GAbpeWGUAx3xFU99J6gKv8DCH8QABoMNjM3NDIzMTgzODA1IgyPN1Q8cAtS7r%2Fl9qQq3AOcMqx4fTxgz1X5PBwD0fAPEFYt5LC%2Fs%2BCbd%2BBdhvZh%2BC6WWid6fM0i87m3TuqLhXTHYu4sBfjs2DC%2Bm2ez4OSyv0qjy0SZYyYf%2BBbOEs5wNz39gpzDEHKXr2HqzE8%2BtZQ%2BcgmVz9C28G4udPM3TL7eh%2FAeUL9EgVx4NQ7A31t5HW4kxFZquQpYL1%2FZggOYuDAiEOb2gsLwnX%2B6tC2XVpNF2nSe4qO%2BbD3LLmFloxsdW%2BGMWcY29etC2EaHQp1kgjSoLwlI7GW4OWUPa%2FMDRdhRKIZkt4u8gvmFWhwudJuwsj5uiKqFbHsiUKIlJ4RXpojASf86rzG4WatLJIPshB%2F5R6%2Fnvr7rrSYYWKFGvyGq2V82or4we%2BsVnXTKCHM1XvAN9xbf7gOSgzCP4DH5iQViiR3admTHagaUTmW6ZxBIr%2Fxd9n3B%2FI%2Bi5rk137lb6Kbyah1oLolDGs%2Bc%2BzHqRlfBWWOwtOeJNEyVVvmVth2pckZtBEtxPlFbGz%2FWCSR1SB3GhAtSQwZByBuKCiHJerBt1Xue%2FL7CLgg6%2Bt%2B42zyVB5IqB7VzvBXh7Dellx7zabvXWfXgSTd9t%2BP0LxHgx07WtsJ8aZ4%2BLpyybssdXq05mSiu70Z0XmRj8hEvoTCs1NLJBjqkAUG8UVR2i3IOyHjWRJZu9DoxTkT6MMksZ5T3mSMypEhrsIWv7csPXEtNqDMDB505ffSoM796EhwACkuODeRq%2BzOn9j6JV8jSRUxgbE7kMXEyjEL6HQk4pVDlm9lxafov7s4AfH4Sav%2FpkUBWPE54FegtL19TwCQPX6osJy8wyiQGiU524zeeDY0b%2F%2BRI3vSKhHZnSWFOzBI1n3g5IIdJOf%2FVoOrV&X-Amz-Signature=676fd85bafea008574b3e46bda4a7c432e8bef32a3e57509c269a369f796462d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

