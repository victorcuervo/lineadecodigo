---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAB4WVZM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCID8nphDO8uXgPrRfLBvGRyB7KsGW6pCBiz57wsv%2BareTAiAlGYyw0MaI3U%2BJz52uHJC2TecirUj3pLirijK8v31OqCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMmIY6zaSuy84gZ1b4KtwDWG8SSXqoM5HzpL7D1HObPGIHkEjbpYBVNltQHWfFNjhzKdOOp8VPVzLCIB4ctW%2F77%2BKOe%2F6h%2BaOz%2BEqARzK6Fy%2F5l156syP9ZFUycFx5LEf8DzSviez8ckywOkNTyYDegrOYCjffloaEGszVH9kNacuRKqmp%2Bm0TnZVpb17%2FIW1dW%2FYGxSPckiXGZeXnzATlAwpKpo%2FJheG3a2oOImUDhYloCCXnx6mstCUot5PaHi%2FMmI7aqqpjRpVt4VZ6JccJib8NU9ZOzs%2By%2B0y%2FNYQ%2BClaYmZLR7t2%2Fqi7mICixF8Fltsam5vaNg8wqT6FNLE1T5lMf%2FbKWu7qlLBpclEuioxzqbhywYAQiE5X0xrEr5bb1lU4cUNVY3X%2B%2FdIkAkd3H9QBNBTCyXmMkFDmVOub6WahrnZVeSU5KGSizc43X7h3fYCI1dUwp3TuG3yb9a7g%2FoJghpzAGGdMUmVNZrIokLEqC4qsK23gUhiwZoWP1nca6Q9YN5RCnWdAt8QBojv2bv8%2BZ5SgPJVJPRppKy2CIhQbSNStpB5T7soLumA9ARr3ALsJA4%2Bpw9t%2FRmaHmAzAkL7QY2xaaueSnVGhbqFuOkCxxDU1PCp0AEd9JsF1RN%2BZNeVMamwtUwzsFceQwr5a%2ByQY6pgHD68X%2BnxKa8Wv8UHxvQQKAMQS64O8p5QBIryGRFJLBXSZawrqYcq18LpV9D3Y1lk176WbImSJ8JZjtq7MXiu0MKGYMqPXJkxGjduUFbMeCbISMu4LFBq9upL8acTnHtQ%2FJnXajM3obfBnErW27tUtrLd6OQatai5jsP6rsH%2FlGEr4%2FYEqbTyPBBY4WYvkToXE9DEIeknSntLhiLIQApo6nH2uUrttW&X-Amz-Signature=7db706539b9519205d23dd303440b9806f18bd2ff4951575bbf7a91bae8c115d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAB4WVZM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCID8nphDO8uXgPrRfLBvGRyB7KsGW6pCBiz57wsv%2BareTAiAlGYyw0MaI3U%2BJz52uHJC2TecirUj3pLirijK8v31OqCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMmIY6zaSuy84gZ1b4KtwDWG8SSXqoM5HzpL7D1HObPGIHkEjbpYBVNltQHWfFNjhzKdOOp8VPVzLCIB4ctW%2F77%2BKOe%2F6h%2BaOz%2BEqARzK6Fy%2F5l156syP9ZFUycFx5LEf8DzSviez8ckywOkNTyYDegrOYCjffloaEGszVH9kNacuRKqmp%2Bm0TnZVpb17%2FIW1dW%2FYGxSPckiXGZeXnzATlAwpKpo%2FJheG3a2oOImUDhYloCCXnx6mstCUot5PaHi%2FMmI7aqqpjRpVt4VZ6JccJib8NU9ZOzs%2By%2B0y%2FNYQ%2BClaYmZLR7t2%2Fqi7mICixF8Fltsam5vaNg8wqT6FNLE1T5lMf%2FbKWu7qlLBpclEuioxzqbhywYAQiE5X0xrEr5bb1lU4cUNVY3X%2B%2FdIkAkd3H9QBNBTCyXmMkFDmVOub6WahrnZVeSU5KGSizc43X7h3fYCI1dUwp3TuG3yb9a7g%2FoJghpzAGGdMUmVNZrIokLEqC4qsK23gUhiwZoWP1nca6Q9YN5RCnWdAt8QBojv2bv8%2BZ5SgPJVJPRppKy2CIhQbSNStpB5T7soLumA9ARr3ALsJA4%2Bpw9t%2FRmaHmAzAkL7QY2xaaueSnVGhbqFuOkCxxDU1PCp0AEd9JsF1RN%2BZNeVMamwtUwzsFceQwr5a%2ByQY6pgHD68X%2BnxKa8Wv8UHxvQQKAMQS64O8p5QBIryGRFJLBXSZawrqYcq18LpV9D3Y1lk176WbImSJ8JZjtq7MXiu0MKGYMqPXJkxGjduUFbMeCbISMu4LFBq9upL8acTnHtQ%2FJnXajM3obfBnErW27tUtrLd6OQatai5jsP6rsH%2FlGEr4%2FYEqbTyPBBY4WYvkToXE9DEIeknSntLhiLIQApo6nH2uUrttW&X-Amz-Signature=0e84206d1fa9a60511e5490313db0c6b4828474d457b4e7acd51e0bac1c3bfe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

