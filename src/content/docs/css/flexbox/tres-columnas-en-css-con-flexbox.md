---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKXIVCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8fs%2Bj91oTndRRb3sSTBjng9vMKHL%2FyJHK5Fdruz%2B2TAiBtC%2BPX9V60mzFNP9ZKHyI2bt7jtOrwrgCwtRy2fm9cCyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2FfjpO7IEFyZlClDUKtwDyiQs4%2FMKoRAO28HAS8%2F5bN4Ax6p1Dguqe2TK9dMXqvTwaYQHM9Q7P%2BZe3zI01BQqcxPEDFByPmSZW2Z9P81qIf2WHyAVru6JheVNqcAMPTrMi5zfaxjhxWEZ8C2m5z1n86Y9MVUPldaqlitEqPPt4GGcT4I8U1A7JEkCfJceIPLKK6y78PxzZ9rxLxkzKvP%2Bn8HFu0W6l41HRJd8MiYHEeTAzcYqv%2F54Np%2Bsdl4AnjnYvX08LeSqKB24N61xVigKEyQvIO2qY5TKJPiYUp%2B5V4BuGRv7AB7F2UIIj%2BzjHn2%2FGM2EtwDle8gx%2FCm1SWsyQcqPiixm3d8RyTu2K8vEBV%2BS1Olfhzn06bF6bXK6o9qJimwpjXoCEMTN8UHUFlCCz5J1%2BmphGBDnf6P7kGbCloH5xbySF3PYWDKgBi%2Bv8bP1zxw2s75LshUVIlQS7v6w7NRW1rG2mBCYo3wg6WpK6CGMUwP%2F9Jik9BXUN3sZjudKpWlMOo8frdqJkv120F7AvPNEStk64w%2FzJQRrcGtg11eMTEy4Fe9y0%2FWCIYgGxivXB9RpbEj96Muk17ea1aAJpGsSWIoMIrvzwCDiH8qxQDWYHWXZSv8keZa0QMb8PMnb0WT6JJ%2FdiK2m2uAwn6bQyQY6pgFMhqJzyFfFbK94xcymgAiGNM%2Fb60hBq3L6Tn9kQZYeWc%2FJnnkC4d4Om6S2Hs16SevRxKWt2atpdsVu6WmNe%2FwUhG1%2BuaGWztignZKKbs%2BNhF9o76cZEplROb40Q4eIvZE%2FnAlUHDL%2Bjip5Cjv64Z%2F1NwAU1fz38A64XmDqJaMfzt8QrZA8bUImLnyFH54DqGk1pXXnI1rOTtLOTaInAbTxeQpCdHqc&X-Amz-Signature=4b351920728e0377fe8add5356101dd73ddef4cf46ddef11b9f40e169cb1c9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKXIVCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8fs%2Bj91oTndRRb3sSTBjng9vMKHL%2FyJHK5Fdruz%2B2TAiBtC%2BPX9V60mzFNP9ZKHyI2bt7jtOrwrgCwtRy2fm9cCyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2FfjpO7IEFyZlClDUKtwDyiQs4%2FMKoRAO28HAS8%2F5bN4Ax6p1Dguqe2TK9dMXqvTwaYQHM9Q7P%2BZe3zI01BQqcxPEDFByPmSZW2Z9P81qIf2WHyAVru6JheVNqcAMPTrMi5zfaxjhxWEZ8C2m5z1n86Y9MVUPldaqlitEqPPt4GGcT4I8U1A7JEkCfJceIPLKK6y78PxzZ9rxLxkzKvP%2Bn8HFu0W6l41HRJd8MiYHEeTAzcYqv%2F54Np%2Bsdl4AnjnYvX08LeSqKB24N61xVigKEyQvIO2qY5TKJPiYUp%2B5V4BuGRv7AB7F2UIIj%2BzjHn2%2FGM2EtwDle8gx%2FCm1SWsyQcqPiixm3d8RyTu2K8vEBV%2BS1Olfhzn06bF6bXK6o9qJimwpjXoCEMTN8UHUFlCCz5J1%2BmphGBDnf6P7kGbCloH5xbySF3PYWDKgBi%2Bv8bP1zxw2s75LshUVIlQS7v6w7NRW1rG2mBCYo3wg6WpK6CGMUwP%2F9Jik9BXUN3sZjudKpWlMOo8frdqJkv120F7AvPNEStk64w%2FzJQRrcGtg11eMTEy4Fe9y0%2FWCIYgGxivXB9RpbEj96Muk17ea1aAJpGsSWIoMIrvzwCDiH8qxQDWYHWXZSv8keZa0QMb8PMnb0WT6JJ%2FdiK2m2uAwn6bQyQY6pgFMhqJzyFfFbK94xcymgAiGNM%2Fb60hBq3L6Tn9kQZYeWc%2FJnnkC4d4Om6S2Hs16SevRxKWt2atpdsVu6WmNe%2FwUhG1%2BuaGWztignZKKbs%2BNhF9o76cZEplROb40Q4eIvZE%2FnAlUHDL%2Bjip5Cjv64Z%2F1NwAU1fz38A64XmDqJaMfzt8QrZA8bUImLnyFH54DqGk1pXXnI1rOTtLOTaInAbTxeQpCdHqc&X-Amz-Signature=5a3a474f442ee52984fe7cae0a72036b0af01baf3913e736c0b5b69c6f086b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

