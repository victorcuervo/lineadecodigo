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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZBTWCL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD573sqxValk5aSxpWuV8BLb2pY1dMIXimeqVJVmhOenAIhAMUVC%2FQF2BJOV5j6NchBdF2MvZTPZUAMqoxOY9UAWCdNKv8DCCgQABoMNjM3NDIzMTgzODA1IgzC7jrEen4pg0EAON8q3AN%2FHutyCAP27ImAVMr0nLTqoPml3EJceZ3%2F%2BlEOfmH2SUY1yCT2Dr0rdKI4TYVAraNmERiGaOvDTcgvaXU1kaEjXzfjmoA9vldBifXhXsHTU7dYO6VqOnQsIV7pgSWlKT%2BJP9TnUFuJw1MmmfGGw0e6V3Ap08wUuLv%2Fz7cpJ9P4qoXYuuDO1o0YIPiKR%2Fknpwj6VcZ1S4231Wz%2FTBTXKCxzPgIrf1z9iNgvepIGHW9di53LAnxp%2FXL47XaYA%2FIZ%2BDyncv7joy9fB5l1sueRTXB7ToI3z05wfWVU9lGWBQC4B5K5mM5PiFLW876%2FYnY1cr6EeCDxcHI9eLLukbVloIJbvBhPl3U8YQp1iXeH5vA21J9FMr65F%2FQXVA3Itb8Zt61t4hG%2BCK2wlX9kdUsT4LgmjfQcdw5CL2sG2bD6vBTJuAJPI45u5zltdI7AWUcCczigjlgE%2BBTl4JgS1itJb5LEoJZ7mNKQsXuDVyafBQv%2FDrsZDEP%2Fn%2FL02L%2F1rF7Dr9v8xKqc28QnyEN4MrTVOPznrdtJoSoiFVTiwGnu6NoFlX3lOhLNrSXgrCmImwg1UBynHRfhyD7me%2B4g8MX0opkFSMxKAbHkySO3gDGuLGMzfeXC33cdVtir6RUh4TCtur%2FJBjqkASF4r2gRtDbJj7yhjjiVvZLVhFk3H79KExeG2MKCXFIrMJHYe%2FVaoSF%2BUV8lxWSDcVkX6aHoqlqzUEb3MQIc8eLP5BzO5ZNiH8B1IQsOGTGvN8mqFypDOIz5cZ%2BzEfBuoUK%2BVzikFBPLiZZYTI73L5bml%2BjWa8VKSi%2F7u4GuzS0QbcLzFwWkyKwGGZ7kVlikI7snqlz3qGRuCJOJ%2FXPmgzFmf%2Fu7&X-Amz-Signature=14e6d79faa03d6b8e9004dcdd465dd3d36bacca5b8b935290f79c1d8b25157fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZBTWCL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD573sqxValk5aSxpWuV8BLb2pY1dMIXimeqVJVmhOenAIhAMUVC%2FQF2BJOV5j6NchBdF2MvZTPZUAMqoxOY9UAWCdNKv8DCCgQABoMNjM3NDIzMTgzODA1IgzC7jrEen4pg0EAON8q3AN%2FHutyCAP27ImAVMr0nLTqoPml3EJceZ3%2F%2BlEOfmH2SUY1yCT2Dr0rdKI4TYVAraNmERiGaOvDTcgvaXU1kaEjXzfjmoA9vldBifXhXsHTU7dYO6VqOnQsIV7pgSWlKT%2BJP9TnUFuJw1MmmfGGw0e6V3Ap08wUuLv%2Fz7cpJ9P4qoXYuuDO1o0YIPiKR%2Fknpwj6VcZ1S4231Wz%2FTBTXKCxzPgIrf1z9iNgvepIGHW9di53LAnxp%2FXL47XaYA%2FIZ%2BDyncv7joy9fB5l1sueRTXB7ToI3z05wfWVU9lGWBQC4B5K5mM5PiFLW876%2FYnY1cr6EeCDxcHI9eLLukbVloIJbvBhPl3U8YQp1iXeH5vA21J9FMr65F%2FQXVA3Itb8Zt61t4hG%2BCK2wlX9kdUsT4LgmjfQcdw5CL2sG2bD6vBTJuAJPI45u5zltdI7AWUcCczigjlgE%2BBTl4JgS1itJb5LEoJZ7mNKQsXuDVyafBQv%2FDrsZDEP%2Fn%2FL02L%2F1rF7Dr9v8xKqc28QnyEN4MrTVOPznrdtJoSoiFVTiwGnu6NoFlX3lOhLNrSXgrCmImwg1UBynHRfhyD7me%2B4g8MX0opkFSMxKAbHkySO3gDGuLGMzfeXC33cdVtir6RUh4TCtur%2FJBjqkASF4r2gRtDbJj7yhjjiVvZLVhFk3H79KExeG2MKCXFIrMJHYe%2FVaoSF%2BUV8lxWSDcVkX6aHoqlqzUEb3MQIc8eLP5BzO5ZNiH8B1IQsOGTGvN8mqFypDOIz5cZ%2BzEfBuoUK%2BVzikFBPLiZZYTI73L5bml%2BjWa8VKSi%2F7u4GuzS0QbcLzFwWkyKwGGZ7kVlikI7snqlz3qGRuCJOJ%2FXPmgzFmf%2Fu7&X-Amz-Signature=b8d68851270ec713e68f733748e8f6585afa8fcbe1895e229dd9e75c719918c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

