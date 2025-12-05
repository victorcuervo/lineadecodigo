---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICQDT57%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyY8Mm%2FoWoOr7pRfnefMG8ML0Es2BibQc8JQs7UHf3fAiEAnUWskoc8ivovTHqKRPs%2B3ZcICUYcWhciYm01qvpvYVUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDA7m%2Fmwp2%2BEC7U4g%2FSrcA%2FLKsbruj7FI8ZPcKV5kweudwbCygamXjyefEIeWFDIp2u8zZTwzrTOigSijNZ0suFHY9tYnKrqtz5tHP1BD%2F29QtZPekNU37rp5XGO0relJ802dXui2uB7umoXw%2B0aB7nSS3RCDEleFR5XCd3luHjJdMYAv9dQn66rTX%2BhVOdYbmr4qnsAmnZnhj3CDiyzbD5e7OPMt8doV6nZGh1xhfx2485gsjs9qY3uafbEw5H%2B5kqN8hWCJoZ1O%2BOTedoWI0GAumNzbOAsiEd%2FU12KaHfKtuFYfDNjBYfxDBOiRpbZpvclXALrXBaqbekUe8rCy4NMFGN3yekaChiEvON%2FspCibPBAhq4zOxaE%2FOAbjGoNBEllUm6fVyFOAwkPNxdgbKdkhSQr6XkbgT1DwUPq1%2Bh6b90tCCZE2ABiQKSVyBEUuoWtKXkhJPOPXxHGbifaErEjkzHE4rouV11xJoPO7Ezapr3IVw3hkTnlgq1Gd1lOZ%2BlFaevwDgx9jJTBNTmbS8l7vKPnhWPsMSMWLz6I0iKyGLOZMxuYWWIt7clyDtfcs9x9HgYjOz5PeYpEsDrCF0abdbqLlyDkPOsPdMb7DsNT4Y8BkvDi1nGpNNml6q4GAQWg6e7jwsu32eFKHMMTIyskGOqUB9hTYWBWgHYcAXeLiLIHD0Uq6HI3G5o23RpZqG8ugIAAH4fZqnkFoQeUW5vZYmKqaKJONsIZG755pUyalFzhu%2F8U%2BhqtAQQYg5ieX997hcwaSXiTL3TiyikHeljyXGNiYaW1EMgefUbW6Qd2wYHNPZ%2B2sJkB%2Bb1aBzh0FzqyFGjjlnI0qwWQswlai7AZ%2FIN0K0E%2FUdCb7v1hzVWjhTpz4Z5CPDOHD&X-Amz-Signature=09888d50165d772164059e670b52dfb6107d518c1c00c1f82685be092db338d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICQDT57%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyY8Mm%2FoWoOr7pRfnefMG8ML0Es2BibQc8JQs7UHf3fAiEAnUWskoc8ivovTHqKRPs%2B3ZcICUYcWhciYm01qvpvYVUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDA7m%2Fmwp2%2BEC7U4g%2FSrcA%2FLKsbruj7FI8ZPcKV5kweudwbCygamXjyefEIeWFDIp2u8zZTwzrTOigSijNZ0suFHY9tYnKrqtz5tHP1BD%2F29QtZPekNU37rp5XGO0relJ802dXui2uB7umoXw%2B0aB7nSS3RCDEleFR5XCd3luHjJdMYAv9dQn66rTX%2BhVOdYbmr4qnsAmnZnhj3CDiyzbD5e7OPMt8doV6nZGh1xhfx2485gsjs9qY3uafbEw5H%2B5kqN8hWCJoZ1O%2BOTedoWI0GAumNzbOAsiEd%2FU12KaHfKtuFYfDNjBYfxDBOiRpbZpvclXALrXBaqbekUe8rCy4NMFGN3yekaChiEvON%2FspCibPBAhq4zOxaE%2FOAbjGoNBEllUm6fVyFOAwkPNxdgbKdkhSQr6XkbgT1DwUPq1%2Bh6b90tCCZE2ABiQKSVyBEUuoWtKXkhJPOPXxHGbifaErEjkzHE4rouV11xJoPO7Ezapr3IVw3hkTnlgq1Gd1lOZ%2BlFaevwDgx9jJTBNTmbS8l7vKPnhWPsMSMWLz6I0iKyGLOZMxuYWWIt7clyDtfcs9x9HgYjOz5PeYpEsDrCF0abdbqLlyDkPOsPdMb7DsNT4Y8BkvDi1nGpNNml6q4GAQWg6e7jwsu32eFKHMMTIyskGOqUB9hTYWBWgHYcAXeLiLIHD0Uq6HI3G5o23RpZqG8ugIAAH4fZqnkFoQeUW5vZYmKqaKJONsIZG755pUyalFzhu%2F8U%2BhqtAQQYg5ieX997hcwaSXiTL3TiyikHeljyXGNiYaW1EMgefUbW6Qd2wYHNPZ%2B2sJkB%2Bb1aBzh0FzqyFGjjlnI0qwWQswlai7AZ%2FIN0K0E%2FUdCb7v1hzVWjhTpz4Z5CPDOHD&X-Amz-Signature=5578e1d03020d9fa608702b9ca53d9001b0539819f4a217475d7cafdd0e96dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

