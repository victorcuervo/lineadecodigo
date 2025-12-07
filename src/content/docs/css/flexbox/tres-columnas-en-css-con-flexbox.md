---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G7IO4KU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgGnWGYNW9Q2IdAsBVFRx9wnHahmL6Hs55r%2FuRhuKf1AiBfYR6iUq8azu65NbCzrUHUCDwxTjr7CrPVPlfgKpVEUyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHNrbi%2FP%2BAmTZu8tKtwD%2FHdRARv7d%2FN6LkuVGgNrXNst8wqL9TJVKXjElsJW9koVsK4bwpiv4L8aDVaKLBSh2qdQBXmFGkduvd1jQrztPxIAQuRGuKaG8smYJ0lrjFaf4%2Fho2gY57CMPt3dB%2Bed6Z%2FzyF9rSFqgN2zUNXtqRYnMUu8bll6CxTcz8SF7E%2BQK7s5cxWbw4H2ZQ1TiEyHIH4oLwpB%2FdtJFIl9iOxtFvRdzaUvuLwLwtalqM1Zoy9e9jQJQlUm%2BGnoooi1b3yPX%2F1yo%2FzZbe6dHnJaLJy%2FvYzsMBybee%2Bc5AFXWDLTwbtokSBhohcUZlNfrRBhKrUfBqLMj0h2ZQXdCr2ayZ7rYY5ZILPVuS0u4CwSEvMUHKhPXvr7AdREPAIRIjQT05QQSXB8%2BGzNJL6N1DcnSP83dXcSDqigJ2yd3K9TQjrIHm3sGwxaWZldbxpsZSLs9%2B%2FsyW7PSwzZ61jZMIPiXHQ%2FBUduWe%2FJplGUEK1byijfASSrxkajv8Ck9KpU451ZM5SSXfFEmL0cE%2F%2BgW9TMHBCrr90q%2BU%2BnLDRg91Di1xzZ2uN25nKnZQxuro7WDxw8m3yNKqMPtNS6EjyAV%2FuuphMUSRJppMYmveLPwnaHs0pYW7D1LmuaOfBNykCjUPjJowjv3SyQY6pgEU3%2BfPGxc9p63lsS48z1HnowIX7JjMikB6c%2BDucT%2BgE8vB%2BU23VQnlapGtikE90jAtykWAFMhiAPanOzCc%2FOU5HcrlyJYAR6t8aHp%2B2RUMiTu9HnAK%2BtcPwgaj%2BbFQM3IwFCuGvknDCOR%2FfX76fBfBkSpbxCvTDApbZ2w7tSImgI7t8obXWEQ2cXEHmqJHmexGpteXinmmbzr7vJHNgsHpQqW8uaPA&X-Amz-Signature=3952cd4406d4b087cb7af68cb57e7205ddfb63fc1764f624027dd46f80e1752c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G7IO4KU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgGnWGYNW9Q2IdAsBVFRx9wnHahmL6Hs55r%2FuRhuKf1AiBfYR6iUq8azu65NbCzrUHUCDwxTjr7CrPVPlfgKpVEUyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFHNrbi%2FP%2BAmTZu8tKtwD%2FHdRARv7d%2FN6LkuVGgNrXNst8wqL9TJVKXjElsJW9koVsK4bwpiv4L8aDVaKLBSh2qdQBXmFGkduvd1jQrztPxIAQuRGuKaG8smYJ0lrjFaf4%2Fho2gY57CMPt3dB%2Bed6Z%2FzyF9rSFqgN2zUNXtqRYnMUu8bll6CxTcz8SF7E%2BQK7s5cxWbw4H2ZQ1TiEyHIH4oLwpB%2FdtJFIl9iOxtFvRdzaUvuLwLwtalqM1Zoy9e9jQJQlUm%2BGnoooi1b3yPX%2F1yo%2FzZbe6dHnJaLJy%2FvYzsMBybee%2Bc5AFXWDLTwbtokSBhohcUZlNfrRBhKrUfBqLMj0h2ZQXdCr2ayZ7rYY5ZILPVuS0u4CwSEvMUHKhPXvr7AdREPAIRIjQT05QQSXB8%2BGzNJL6N1DcnSP83dXcSDqigJ2yd3K9TQjrIHm3sGwxaWZldbxpsZSLs9%2B%2FsyW7PSwzZ61jZMIPiXHQ%2FBUduWe%2FJplGUEK1byijfASSrxkajv8Ck9KpU451ZM5SSXfFEmL0cE%2F%2BgW9TMHBCrr90q%2BU%2BnLDRg91Di1xzZ2uN25nKnZQxuro7WDxw8m3yNKqMPtNS6EjyAV%2FuuphMUSRJppMYmveLPwnaHs0pYW7D1LmuaOfBNykCjUPjJowjv3SyQY6pgEU3%2BfPGxc9p63lsS48z1HnowIX7JjMikB6c%2BDucT%2BgE8vB%2BU23VQnlapGtikE90jAtykWAFMhiAPanOzCc%2FOU5HcrlyJYAR6t8aHp%2B2RUMiTu9HnAK%2BtcPwgaj%2BbFQM3IwFCuGvknDCOR%2FfX76fBfBkSpbxCvTDApbZ2w7tSImgI7t8obXWEQ2cXEHmqJHmexGpteXinmmbzr7vJHNgsHpQqW8uaPA&X-Amz-Signature=5bc4194b09c1b7ff9842745d75343af1e9f0e87a1e02e9b2d54136cea9840cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

