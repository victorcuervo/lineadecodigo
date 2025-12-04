---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAYFNUE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNmpWJJ1JvGadwAmBoV8B352S9uSGZIeD4cPb4%2Bj1ZHAiAxvefMa4%2FpA2vSJV9mMCToRMlWlksT80wreaDsvieigir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWIpVB978i7bmoWBTKtwDEhWS80Ex%2FXJp%2BoviTCrSFTLXTztuF0Hjl3xWMibEb3rrTpPHwTU05eB5ntFBuSN2kiLjEKE4%2BevUkslo5nA8P7%2FsvGiZlupZ0FmAn4m%2Bh79g9TCrdovkBia%2B%2BOPGY8WoDo%2Fl6vZ3HGMyZvYjyTj5JDGnnVGrg4LbXraJCvfiRbftO04K6TsT0ZIcIDtl4kyIT3cdBHr%2Fj9hhW3ZY7TnnBASxTKn1m6oLgwYQfgbcGUoJWlExRyLDMIT8x9bQZ3ebKxnq2S6ngrOrQTte5bQ1XLZ9IGV4%2BYF%2BD3iZzvgBh%2FRjRupUTHIvO%2F%2F0PBCoVkASdqM7CaCZqe8JHRgKhciFAS0jyxa%2BT7gyTh2798J4rQzX4AGJF5J1Ex3gXyOE7G%2B6QdFr9hS4Kt5YzUawNTWJQzWqgvOugoJNhvvp6SKY%2BQksMGh48IwGXwvH%2FpMoDjPdJWWIFRmbTp4FXEMuBkxspyRaBSBbR8r8ZyPrqEo%2BC%2BORY3f4Ovt3Bgz7uvVW%2Bs59jU%2B9sk0xhSnV1G%2Bjq3Pxr38c8bWCIrnG9vd%2BBhb9lF0ret4Cz8%2FS%2BV9QNE2ge4v%2FdRkLLcePKA7pjUZQdJw%2BAZaMJ6QXi6m5CYzKdYtJ6jDEkQcm4wXzarD5sQMw6PnGyQY6pgHJG5VbifGtJfWh6TUheXryfvASH7ed7oG1JRhxxL7%2FRn7of5PAW1wj4lOJu%2B0BIXBiBbJoZw%2B5OZdSocig3MAlo34gaJBqByi1nBYdi6mc8qZYeOSRXIvaNCUPjVmfAErQdxXOmzHg6lub1czqE390k%2B1DbnP%2B1fkQ95NxGlCMqSpNRsdgCD3yFwD9WP49hDrko1k%2FapR8v7zktMaopD42z%2Bq9crp%2F&X-Amz-Signature=177a890f8becdb258b367916721b0e6b52265b3f83366c9818f0c6a21f5ac6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAYFNUE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNmpWJJ1JvGadwAmBoV8B352S9uSGZIeD4cPb4%2Bj1ZHAiAxvefMa4%2FpA2vSJV9mMCToRMlWlksT80wreaDsvieigir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWIpVB978i7bmoWBTKtwDEhWS80Ex%2FXJp%2BoviTCrSFTLXTztuF0Hjl3xWMibEb3rrTpPHwTU05eB5ntFBuSN2kiLjEKE4%2BevUkslo5nA8P7%2FsvGiZlupZ0FmAn4m%2Bh79g9TCrdovkBia%2B%2BOPGY8WoDo%2Fl6vZ3HGMyZvYjyTj5JDGnnVGrg4LbXraJCvfiRbftO04K6TsT0ZIcIDtl4kyIT3cdBHr%2Fj9hhW3ZY7TnnBASxTKn1m6oLgwYQfgbcGUoJWlExRyLDMIT8x9bQZ3ebKxnq2S6ngrOrQTte5bQ1XLZ9IGV4%2BYF%2BD3iZzvgBh%2FRjRupUTHIvO%2F%2F0PBCoVkASdqM7CaCZqe8JHRgKhciFAS0jyxa%2BT7gyTh2798J4rQzX4AGJF5J1Ex3gXyOE7G%2B6QdFr9hS4Kt5YzUawNTWJQzWqgvOugoJNhvvp6SKY%2BQksMGh48IwGXwvH%2FpMoDjPdJWWIFRmbTp4FXEMuBkxspyRaBSBbR8r8ZyPrqEo%2BC%2BORY3f4Ovt3Bgz7uvVW%2Bs59jU%2B9sk0xhSnV1G%2Bjq3Pxr38c8bWCIrnG9vd%2BBhb9lF0ret4Cz8%2FS%2BV9QNE2ge4v%2FdRkLLcePKA7pjUZQdJw%2BAZaMJ6QXi6m5CYzKdYtJ6jDEkQcm4wXzarD5sQMw6PnGyQY6pgHJG5VbifGtJfWh6TUheXryfvASH7ed7oG1JRhxxL7%2FRn7of5PAW1wj4lOJu%2B0BIXBiBbJoZw%2B5OZdSocig3MAlo34gaJBqByi1nBYdi6mc8qZYeOSRXIvaNCUPjVmfAErQdxXOmzHg6lub1czqE390k%2B1DbnP%2B1fkQ95NxGlCMqSpNRsdgCD3yFwD9WP49hDrko1k%2FapR8v7zktMaopD42z%2Bq9crp%2F&X-Amz-Signature=21930f4ab4badfbe2b910fa21588e0815563e3e36a3297c2f9497d5916ada87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

