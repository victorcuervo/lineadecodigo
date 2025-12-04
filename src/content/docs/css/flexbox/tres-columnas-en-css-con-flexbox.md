---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWAD3WR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEpTxQRhWsa0LJ7ds%2Bh5DrD2aPyXd9x8K5T6NwQouLv7AiEAgmy0v6AjYzb2OKIWuWUxIUgvmUH1ULN40hRmvAc5PYwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGpbwYSwk4sLl3udpSrcAyXZklSj3wsPqqElBhwCO9YkPuFlMxDXPZYYjEJxRVynZhBSVPGGEuTbNC7mzcWBwP6Zv3Z1RaHnRj8kPgKoaRvT8NfyMBNynpqrZSP4PavuzyeAviOubIqnm4B0Vfg7Esw4NPMfaIIMHr7A4Vat2Bb4o5NGxUjc3DNouaTbWr0ENIAaxQ8z22gusxNepMk5j1VUOK1HHcBYMS7SThGBRqYU6op%2FlX2KcY%2BTWyDB8UYSdG%2FnxHSu69O%2B%2FkwF3Dv6TEh1SJYiZoJKSpM8AWXPEsbP9YE%2BYPMSB3OHvWdbhh7wKqd3M8%2Fi0%2BTz4dxQXl8A7xATiFbU8oWygd0LeaV2L9kDD5rcTj%2BZtXGbcKxSYFb4ZvkvuyVEFwPrmu%2BEKdzxLHYDoC2xJwbPGBmo0QRYgLKkbzwOwQKw7JLMVeOEljYUXy0WuUB9xZ98HW4%2F7PBkhSfFzLBe2fO%2FTLlhzGx%2FMaGvhyPEc12krqNQgL4WYi5S4Lh%2FldmTPpndGeJvVI1EM75XfMZyCHX0gxuKeW7%2BQ2XfVBjaz6gGdqlA3PUrJzHckxMOQhkujc08C2YLJMnhLvZ1z1EjXuQJFJIk7qLInTartpinOlE8GSu6WthSp3QrRJIUBQTvVANGhMLyMKvKxMkGOqUBb0z%2FjGZ5IXSPa80U3%2FlO9tUsSdZ6LHEXXWPNtZKS9K1WgzlTICBeNKiNYdy%2BStEX3uJnMHfry2zDEHhA7uSNDILVZTqLXkgbKCFDwv2e091t9%2FQ2jLEneR%2FRzrwuHL2OJAFJnsDMAPrgxaUDnz5VdixgH%2BZw2%2FAJ590pj%2Bjd9vyBaIlDnWhh4dkXfVhoWv60Gv8ncsy8W0e9QZ6c7TmVnmB0mxH7&X-Amz-Signature=cd409e577801638977d31ddb536a559726df14685dd03dfde9f4ee786a0a7426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWAD3WR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEpTxQRhWsa0LJ7ds%2Bh5DrD2aPyXd9x8K5T6NwQouLv7AiEAgmy0v6AjYzb2OKIWuWUxIUgvmUH1ULN40hRmvAc5PYwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGpbwYSwk4sLl3udpSrcAyXZklSj3wsPqqElBhwCO9YkPuFlMxDXPZYYjEJxRVynZhBSVPGGEuTbNC7mzcWBwP6Zv3Z1RaHnRj8kPgKoaRvT8NfyMBNynpqrZSP4PavuzyeAviOubIqnm4B0Vfg7Esw4NPMfaIIMHr7A4Vat2Bb4o5NGxUjc3DNouaTbWr0ENIAaxQ8z22gusxNepMk5j1VUOK1HHcBYMS7SThGBRqYU6op%2FlX2KcY%2BTWyDB8UYSdG%2FnxHSu69O%2B%2FkwF3Dv6TEh1SJYiZoJKSpM8AWXPEsbP9YE%2BYPMSB3OHvWdbhh7wKqd3M8%2Fi0%2BTz4dxQXl8A7xATiFbU8oWygd0LeaV2L9kDD5rcTj%2BZtXGbcKxSYFb4ZvkvuyVEFwPrmu%2BEKdzxLHYDoC2xJwbPGBmo0QRYgLKkbzwOwQKw7JLMVeOEljYUXy0WuUB9xZ98HW4%2F7PBkhSfFzLBe2fO%2FTLlhzGx%2FMaGvhyPEc12krqNQgL4WYi5S4Lh%2FldmTPpndGeJvVI1EM75XfMZyCHX0gxuKeW7%2BQ2XfVBjaz6gGdqlA3PUrJzHckxMOQhkujc08C2YLJMnhLvZ1z1EjXuQJFJIk7qLInTartpinOlE8GSu6WthSp3QrRJIUBQTvVANGhMLyMKvKxMkGOqUBb0z%2FjGZ5IXSPa80U3%2FlO9tUsSdZ6LHEXXWPNtZKS9K1WgzlTICBeNKiNYdy%2BStEX3uJnMHfry2zDEHhA7uSNDILVZTqLXkgbKCFDwv2e091t9%2FQ2jLEneR%2FRzrwuHL2OJAFJnsDMAPrgxaUDnz5VdixgH%2BZw2%2FAJ590pj%2Bjd9vyBaIlDnWhh4dkXfVhoWv60Gv8ncsy8W0e9QZ6c7TmVnmB0mxH7&X-Amz-Signature=ecc40355ec1b09bd490134122c4fc6b156184b1fa300d9cf5196f3f48101ba76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

