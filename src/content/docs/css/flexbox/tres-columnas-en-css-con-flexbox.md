---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4P5TO5Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeMQ%2Faarna5msYlqgF4eFrH3ZzjU2YuL%2B99nFwL8S4cAiB8VVRExVJDOtnj3BRaiSGM3fQmgsvEAMaO4nYuClJWDCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM55Iuqv0Fn48Kpl%2BiKtwD25Px6MuL%2ByzLsZnXHbkkmMJROt9RXduAFnRN8OsVGww4gEQxGuAREJZsNe%2B1n02aUvBmNgrrz3Sv161FalS%2FsZHQjqtYjCe2%2B6IpWiaooWg75B2YhiaUnxT86Mj%2F%2FljAQCVjV7oHxB5HFC5K%2BkjX9%2B%2B%2FTy6VHMdV7xDWxifLeLiHzQca%2B5vSvnsbXMIdujOF0jNgjHfVymOSajngaNXu5tShEit1qq0o2sZFw0%2F1RsP0csO7O%2FcR%2BRXcCfZan9RmNwwQAtEkM4wYaR7%2FPEDvi6VeMqorZ8cT6JhfioAaBlQJnnZ7MrByYbxYj9k6NjJpyM%2F3heQZmLfDmQ6cJDBFGowaUWFKkjXY6XSY1vp8Gd%2BDefIdgPBEqQ8VRy19YseDcj78TAxXB9m%2FFemzwdHJm60t1Kbb0ryf7JzFdvH4WB2KrnmHagjnuz6uh8zK9%2F2vnZwt05D5LML02Hx7vJoHvxBkPNvSSnWzqckuJVSjMmdGqTI5%2B%2BI%2BpnlfAc930XAKgTm2VO4crd0eW3dGAYCNRnXbQoUn8Ub4Q%2FiWEy98cEsQovJ74rckik%2Bxg8yDtcZffWv2g6OH3%2BryYddrRVpa5vqJU2ce2GlotlPxkQ4e3VEJHudNN3sveeUUUi4wvPLdyQY6pgHKS5AcY8p2eQCYePP%2BWFd5BPrAq%2B3QH5iv6lBtDHoIOLZ67l%2BvBAYoTN9tlOwmMYJ0X5l%2Fm10mthpZzmZ7NxnnkM0m%2BWn65zXG1z7IvxUY5aSEPlh%2BYSKSnA%2BAk2afXkKSWPkWx3QxEpW1bhO2rwKCBJVVk7FVRgt2bwwp7CHmgEWHKgckATta3Wr4MhfQNivpcsHVy8cMt2zg0gISrYxTodAZIpjH&X-Amz-Signature=ae5852917a8740b2d89eb3b96d8e372666f450cd43224ef38875cbac9af947ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4P5TO5Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeMQ%2Faarna5msYlqgF4eFrH3ZzjU2YuL%2B99nFwL8S4cAiB8VVRExVJDOtnj3BRaiSGM3fQmgsvEAMaO4nYuClJWDCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM55Iuqv0Fn48Kpl%2BiKtwD25Px6MuL%2ByzLsZnXHbkkmMJROt9RXduAFnRN8OsVGww4gEQxGuAREJZsNe%2B1n02aUvBmNgrrz3Sv161FalS%2FsZHQjqtYjCe2%2B6IpWiaooWg75B2YhiaUnxT86Mj%2F%2FljAQCVjV7oHxB5HFC5K%2BkjX9%2B%2B%2FTy6VHMdV7xDWxifLeLiHzQca%2B5vSvnsbXMIdujOF0jNgjHfVymOSajngaNXu5tShEit1qq0o2sZFw0%2F1RsP0csO7O%2FcR%2BRXcCfZan9RmNwwQAtEkM4wYaR7%2FPEDvi6VeMqorZ8cT6JhfioAaBlQJnnZ7MrByYbxYj9k6NjJpyM%2F3heQZmLfDmQ6cJDBFGowaUWFKkjXY6XSY1vp8Gd%2BDefIdgPBEqQ8VRy19YseDcj78TAxXB9m%2FFemzwdHJm60t1Kbb0ryf7JzFdvH4WB2KrnmHagjnuz6uh8zK9%2F2vnZwt05D5LML02Hx7vJoHvxBkPNvSSnWzqckuJVSjMmdGqTI5%2B%2BI%2BpnlfAc930XAKgTm2VO4crd0eW3dGAYCNRnXbQoUn8Ub4Q%2FiWEy98cEsQovJ74rckik%2Bxg8yDtcZffWv2g6OH3%2BryYddrRVpa5vqJU2ce2GlotlPxkQ4e3VEJHudNN3sveeUUUi4wvPLdyQY6pgHKS5AcY8p2eQCYePP%2BWFd5BPrAq%2B3QH5iv6lBtDHoIOLZ67l%2BvBAYoTN9tlOwmMYJ0X5l%2Fm10mthpZzmZ7NxnnkM0m%2BWn65zXG1z7IvxUY5aSEPlh%2BYSKSnA%2BAk2afXkKSWPkWx3QxEpW1bhO2rwKCBJVVk7FVRgt2bwwp7CHmgEWHKgckATta3Wr4MhfQNivpcsHVy8cMt2zg0gISrYxTodAZIpjH&X-Amz-Signature=f848c6c36a57c1b76d7b848f251795f8a8935393d1ef5d7d317b0ef0dbf8195c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

